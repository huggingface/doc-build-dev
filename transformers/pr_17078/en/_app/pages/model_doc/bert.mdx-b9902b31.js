import{S as E5,i as z5,s as P5,e as r,k as c,w as v,t as n,M as q5,c as a,d as t,m as p,a as i,x as T,h as s,b as u,F as e,g as b,y as w,q as $,o as x,B as F,v as j5,L as ne}from"../../chunks/vendor-6b77c823.js";import{T as we}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as se}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as oe}from"../../chunks/ExampleCodeBlock-5212b321.js";function C5(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function N5(B){let d,_,h,m,g;return m=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function O5(B){let d,_,h,m,g;return m=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function A5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function I5(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function L5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function D5(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function S5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function U5(B){let d,_,h,m,g;return m=new se({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function W5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function H5(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function R5(B){let d,_;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function V5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function Q5(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function K5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function J5(B){let d,_,h,m,g;return m=new se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function G5(B){let d,_;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function X5(B){let d,_,h,m,g;return m=new se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Y5(B){let d,_;return d=new se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function Z5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function eN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function tN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function oN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function nN(B){let d,_;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function sN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function rN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function aN(B){let d,_;return d=new se({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function iN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function lN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function dN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function cN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function pN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function hN(B){let d,_,h,m,g;return m=new se({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function mN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function fN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function uN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function gN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function _N(B){let d,_;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function bN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function kN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function yN(B){let d,_,h,m,g;return m=new se({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function vN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function TN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function wN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function $N(B){let d,_;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function xN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function FN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function BN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function MN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function EN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function zN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function PN(B){let d,_;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function qN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ve=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);fe=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ve=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);Te=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ve),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,Te),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function jN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function CN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function NN(B){let d,_;return d=new se({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function ON(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function AN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function IN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function LN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function DN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function SN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function UN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function WN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function HN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function RN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function VN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function QN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function KN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function JN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function GN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function XN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function YN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function ZN(B){let d,_,h,m,g;return m=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),v(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),T(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:ne,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){x(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function eO(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ve,ue,q,ce,R,ge,de,V,_e,te,N,Te,Q,pe,y,E,K,ze,Be,A,Pe,Me,qe,I,W,$e,Fe,U,Ee,je,he,Ce,Z_,Ct,Na,Zy,po,ev,hp,tv,ov,mp,nv,sv,Oa,rv,av,iv,Wo,lv,fp,dv,cv,up,pv,hv,mv,ds,eb,Ho,cs,Zh,Aa,fv,em,uv,tb,Ne,Ia,gv,tm,_v,bv,La,kv,gp,yv,vv,Tv,xo,Da,wv,om,$v,xv,Sa,_p,Fv,nm,Bv,Mv,bp,Ev,sm,zv,Pv,ps,Ua,qv,Wa,jv,rm,Cv,Nv,Ov,Ot,Ha,Av,am,Iv,Lv,hs,Dv,Ro,Sv,im,Uv,Wv,lm,Hv,Rv,Vv,kp,Ra,ob,Vo,ms,dm,Va,Qv,cm,Kv,nb,rt,Qa,Jv,Ka,Gv,pm,Xv,Yv,Zv,Ja,eT,yp,tT,oT,nT,Fo,Ga,sT,hm,rT,aT,Xa,vp,iT,mm,lT,dT,Tp,cT,fm,pT,hT,At,Ya,mT,um,fT,uT,fs,gT,Qo,_T,gm,bT,kT,_m,yT,vT,sb,Ko,us,bm,Za,TT,km,wT,rb,Jo,ei,$T,ti,xT,wp,FT,BT,ab,Go,oi,MT,ni,ET,$p,zT,PT,ib,ho,si,qT,ri,jT,xp,CT,NT,OT,gs,ai,AT,ym,IT,lb,Xo,_s,vm,ii,LT,Tm,DT,db,Oe,li,ST,wm,UT,WT,di,HT,Fp,RT,VT,QT,ci,KT,pi,JT,GT,XT,hi,YT,mi,ZT,e1,t1,Ke,o1,$m,n1,s1,xm,r1,a1,Fm,i1,l1,Bm,d1,c1,Mm,p1,h1,Em,m1,f1,u1,It,fi,g1,Yo,_1,Bp,b1,k1,zm,y1,v1,T1,bs,w1,ks,cb,Zo,ys,Pm,ui,$1,qm,x1,pb,at,gi,F1,en,B1,jm,M1,E1,Cm,z1,P1,q1,_i,j1,Mp,C1,N1,O1,bi,A1,ki,I1,L1,D1,Lt,yi,S1,tn,U1,Ep,W1,H1,Nm,R1,V1,Q1,vs,K1,Ts,hb,on,ws,Om,vi,J1,Am,G1,mb,it,Ti,X1,wi,Y1,Im,Z1,ew,tw,$i,ow,zp,nw,sw,rw,xi,aw,Fi,iw,lw,dw,Dt,Bi,cw,nn,pw,Pp,hw,mw,Lm,fw,uw,gw,$s,_w,xs,fb,sn,Fs,Dm,Mi,bw,Sm,kw,ub,lt,Ei,yw,zi,vw,Um,Tw,ww,$w,Pi,xw,qp,Fw,Bw,Mw,qi,Ew,ji,zw,Pw,qw,ft,Ci,jw,rn,Cw,jp,Nw,Ow,Wm,Aw,Iw,Lw,Bs,Dw,Ms,Sw,Es,gb,an,zs,Hm,Ni,Uw,Rm,Ww,_b,dt,Oi,Hw,Ai,Rw,Vm,Vw,Qw,Kw,Ii,Jw,Cp,Gw,Xw,Yw,Li,Zw,Di,e$,t$,o$,St,Si,n$,ln,s$,Np,r$,a$,Qm,i$,l$,d$,Ps,c$,qs,bb,dn,js,Km,Ui,p$,Jm,h$,kb,ct,Wi,m$,Gm,f$,u$,Hi,g$,Op,_$,b$,k$,Ri,y$,Vi,v$,T$,w$,Qe,Qi,$$,cn,x$,Ap,F$,B$,Xm,M$,E$,z$,Cs,P$,Ns,q$,Os,j$,As,C$,Is,yb,pn,Ls,Ym,Ki,N$,Zm,O$,vb,pt,Ji,A$,ef,I$,L$,Gi,D$,Ip,S$,U$,W$,Xi,H$,Yi,R$,V$,Q$,Ut,Zi,K$,hn,J$,Lp,G$,X$,tf,Y$,Z$,e0,Ds,t0,Ss,Tb,mn,Us,of,el,o0,nf,n0,wb,ht,tl,s0,sf,r0,a0,ol,i0,Dp,l0,d0,c0,nl,p0,sl,h0,m0,f0,ut,rl,u0,fn,g0,Sp,_0,b0,rf,k0,y0,v0,Ws,T0,Hs,w0,Rs,$b,un,Vs,af,al,$0,lf,x0,xb,mt,il,F0,gn,B0,df,M0,E0,cf,z0,P0,q0,ll,j0,Up,C0,N0,O0,dl,A0,cl,I0,L0,D0,gt,pl,S0,_n,U0,Wp,W0,H0,pf,R0,V0,Q0,Qs,K0,Ks,J0,Js,Fb,bn,Gs,hf,hl,G0,mf,X0,Bb,Je,ml,Y0,ff,Z0,e2,fl,t2,Hp,o2,n2,s2,ul,r2,gl,a2,i2,l2,Xs,d2,Wt,_l,c2,kn,p2,Rp,h2,m2,uf,f2,u2,g2,Ys,_2,Zs,Mb,yn,er,gf,bl,b2,_f,k2,Eb,Ge,kl,y2,vn,v2,bf,T2,w2,kf,$2,x2,F2,yl,B2,Vp,M2,E2,z2,vl,P2,Tl,q2,j2,C2,tr,N2,Ht,wl,O2,Tn,A2,Qp,I2,L2,yf,D2,S2,U2,or,W2,nr,zb,wn,sr,vf,$l,H2,Tf,R2,Pb,$n,xl,V2,_t,Fl,Q2,Ae,K2,wf,J2,G2,$f,X2,Y2,xf,Z2,ex,Ff,tx,ox,Bf,nx,sx,Mf,rx,ax,Ef,ix,lx,dx,Bl,Ml,cx,zf,px,hx,mx,El,fx,Pf,ux,gx,_x,G,bx,qf,kx,yx,jf,vx,Tx,Cf,wx,$x,Nf,xx,Fx,Of,Bx,Mx,Af,Ex,zx,If,Px,qx,Lf,jx,Cx,Df,Nx,Ox,Sf,Ax,Ix,Uf,Lx,Dx,Wf,Sx,Ux,Hf,Wx,Hx,Rf,Rx,Vx,Vf,Qx,Kx,Qf,Jx,Gx,Kf,Xx,Yx,Jf,Zx,eF,Gf,tF,oF,Xf,nF,sF,rF,rr,qb,xn,ar,Yf,zl,aF,Zf,iF,jb,Xe,Pl,lF,ql,dF,eu,cF,pF,hF,jl,mF,Kp,fF,uF,gF,Cl,_F,Nl,bF,kF,yF,ir,vF,bt,Ol,TF,Fn,wF,Jp,$F,xF,tu,FF,BF,MF,lr,EF,dr,zF,cr,Cb,Bn,pr,ou,Al,PF,nu,qF,Nb,Ye,Il,jF,Ll,CF,su,NF,OF,AF,Dl,IF,Gp,LF,DF,SF,Sl,UF,Ul,WF,HF,RF,hr,VF,Rt,Wl,QF,Mn,KF,Xp,JF,GF,ru,XF,YF,ZF,mr,e7,fr,Ob,En,ur,au,Hl,t7,iu,o7,Ab,Ze,Rl,n7,lu,s7,r7,Vl,a7,Yp,i7,l7,d7,Ql,c7,Kl,p7,h7,m7,gr,f7,kt,Jl,u7,zn,g7,Zp,_7,b7,du,k7,y7,v7,_r,T7,br,w7,kr,Ib,Pn,yr,cu,Gl,$7,pu,x7,Lb,et,Xl,F7,hu,B7,M7,Yl,E7,eh,z7,P7,q7,Zl,j7,ed,C7,N7,O7,vr,A7,Vt,td,I7,qn,L7,th,D7,S7,mu,U7,W7,H7,Tr,R7,wr,Db,jn,$r,fu,od,V7,uu,Q7,Sb,tt,nd,K7,gu,J7,G7,sd,X7,oh,Y7,Z7,eB,rd,tB,ad,oB,nB,sB,xr,rB,yt,id,aB,Cn,iB,nh,lB,dB,_u,cB,pB,hB,Fr,mB,Br,fB,Mr,Ub,Nn,Er,bu,ld,uB,ku,gB,Wb,ot,dd,_B,On,bB,yu,kB,yB,vu,vB,TB,wB,cd,$B,sh,xB,FB,BB,pd,MB,hd,EB,zB,PB,zr,qB,vt,md,jB,An,CB,rh,NB,OB,Tu,AB,IB,LB,Pr,DB,qr,SB,jr,Hb,In,Cr,wu,fd,UB,$u,WB,Rb,Ie,ud,HB,xu,RB,VB,gd,QB,ah,KB,JB,GB,_d,XB,bd,YB,ZB,eM,Fu,tM,oM,mo,Bu,kd,nM,sM,Mu,yd,rM,aM,Eu,vd,iM,lM,zu,Td,dM,cM,Qt,wd,pM,Ln,hM,Pu,mM,fM,qu,uM,gM,_M,Nr,bM,Or,Vb,Dn,Ar,ju,$d,kM,Cu,yM,Qb,Le,xd,vM,Sn,TM,Nu,wM,$M,Ou,xM,FM,BM,Fd,MM,ih,EM,zM,PM,Bd,qM,Md,jM,CM,NM,Au,OM,AM,fo,Iu,Ed,IM,LM,Lu,zd,DM,SM,Du,Pd,UM,WM,Su,qd,HM,RM,Kt,jd,VM,Un,QM,Uu,KM,JM,Wu,GM,XM,YM,Ir,ZM,Lr,Kb,Wn,Dr,Hu,Cd,eE,Ru,tE,Jb,De,Nd,oE,Vu,nE,sE,Od,rE,lh,aE,iE,lE,Ad,dE,Id,cE,pE,hE,Qu,mE,fE,uo,Ku,Ld,uE,gE,Ju,Dd,_E,bE,Gu,Sd,kE,yE,Xu,Ud,vE,TE,Jt,Wd,wE,Hn,$E,Yu,xE,FE,Zu,BE,ME,EE,Sr,zE,Ur,Gb,Rn,Wr,eg,Hd,PE,tg,qE,Xb,Se,Rd,jE,Vd,CE,og,NE,OE,AE,Qd,IE,dh,LE,DE,SE,Kd,UE,Jd,WE,HE,RE,ng,VE,QE,go,sg,Gd,KE,JE,rg,Xd,GE,XE,ag,Yd,YE,ZE,ig,Zd,ez,tz,Gt,ec,oz,Vn,nz,lg,sz,rz,dg,az,iz,lz,Hr,dz,Rr,Yb,Qn,Vr,cg,tc,cz,pg,pz,Zb,Ue,oc,hz,nc,mz,hg,fz,uz,gz,sc,_z,ch,bz,kz,yz,rc,vz,ac,Tz,wz,$z,mg,xz,Fz,_o,fg,ic,Bz,Mz,ug,lc,Ez,zz,gg,dc,Pz,qz,_g,cc,jz,Cz,Xt,pc,Nz,Kn,Oz,bg,Az,Iz,kg,Lz,Dz,Sz,Qr,Uz,Kr,ek,Jn,Jr,yg,hc,Wz,vg,Hz,tk,We,mc,Rz,Tg,Vz,Qz,fc,Kz,ph,Jz,Gz,Xz,uc,Yz,gc,Zz,e4,t4,wg,o4,n4,bo,$g,_c,s4,r4,xg,bc,a4,i4,Fg,kc,l4,d4,Bg,yc,c4,p4,Yt,vc,h4,Gn,m4,Mg,f4,u4,Eg,g4,_4,b4,Gr,k4,Xr,ok,Xn,Yr,zg,Tc,y4,Pg,v4,nk,He,wc,T4,qg,w4,$4,$c,x4,hh,F4,B4,M4,xc,E4,Fc,z4,P4,q4,jg,j4,C4,ko,Cg,Bc,N4,O4,Ng,Mc,A4,I4,Og,Ec,L4,D4,Ag,zc,S4,U4,Zt,Pc,W4,Yn,H4,Ig,R4,V4,Lg,Q4,K4,J4,Zr,G4,ea,sk,Zn,ta,Dg,qc,X4,Sg,Y4,rk,Re,jc,Z4,Ug,eP,tP,Cc,oP,mh,nP,sP,rP,Nc,aP,Oc,iP,lP,dP,Wg,cP,pP,yo,Hg,Ac,hP,mP,Rg,Ic,fP,uP,Vg,Lc,gP,_P,Qg,Dc,bP,kP,eo,Sc,yP,es,vP,Kg,TP,wP,Jg,$P,xP,FP,oa,BP,na,ak,ts,sa,Gg,Uc,MP,Xg,EP,ik,Ve,Wc,zP,os,PP,Yg,qP,jP,Zg,CP,NP,OP,Hc,AP,fh,IP,LP,DP,Rc,SP,Vc,UP,WP,HP,e_,RP,VP,vo,t_,Qc,QP,KP,o_,Kc,JP,GP,n_,Jc,XP,YP,s_,Gc,ZP,e8,to,Xc,t8,ns,o8,r_,n8,s8,a_,r8,a8,i8,ra,l8,aa,lk;return l=new xe({}),re=new xe({}),Ee=new xe({}),Na=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/configuration_bert.py#L54"}}),ds=new oe({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[C5]},$$scope:{ctx:B}}}),Aa=new xe({}),Ia=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert.py#L117"}}),Da=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ua=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ha=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new oe({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[N5]},$$scope:{ctx:B}}}),Ra=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert.py#L330"}}),Va=new xe({}),Qa=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert_fast.py#L117"}}),Ga=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert_fast.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ya=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/tokenization_bert_fast.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new oe({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[O5]},$$scope:{ctx:B}}}),Za=new xe({}),ei=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L766"}}),oi=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),si=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L61"}}),ai=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/flax/struct.py#L120"}}),ii=new xe({}),li=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L869"}}),fi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L908",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new we({props:{$$slots:{default:[A5]},$$scope:{ctx:B}}}),ks=new oe({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[I5]},$$scope:{ctx:B}}}),ui=new xe({}),gi=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1052"}}),yi=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1068",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vs=new we({props:{$$slots:{default:[L5]},$$scope:{ctx:B}}}),Ts=new oe({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[D5]},$$scope:{ctx:B}}}),vi=new xe({}),Ti=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1156"}}),Bi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$s=new we({props:{$$slots:{default:[S5]},$$scope:{ctx:B}}}),xs=new oe({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[U5]},$$scope:{ctx:B}}}),Mi=new xe({}),Ei=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1291"}}),Ci=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1317",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new we({props:{$$slots:{default:[W5]},$$scope:{ctx:B}}}),Ms=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[H5]},$$scope:{ctx:B}}}),Es=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[R5]},$$scope:{ctx:B}}}),Ni=new xe({}),Oi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1404"}}),Si=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1414",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new we({props:{$$slots:{default:[V5]},$$scope:{ctx:B}}}),qs=new oe({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[Q5]},$$scope:{ctx:B}}}),Ui=new xe({}),Wi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1508"}}),Qi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new we({props:{$$slots:{default:[K5]},$$scope:{ctx:B}}}),Ns=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[J5]},$$scope:{ctx:B}}}),Os=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[G5]},$$scope:{ctx:B}}}),As=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[X5]},$$scope:{ctx:B}}}),Is=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[Y5]},$$scope:{ctx:B}}}),Ki=new xe({}),Ji=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1612"}}),Zi=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new we({props:{$$slots:{default:[Z5]},$$scope:{ctx:B}}}),Ss=new oe({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[eN]},$$scope:{ctx:B}}}),el=new xe({}),tl=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1707"}}),rl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1725",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new we({props:{$$slots:{default:[tN]},$$scope:{ctx:B}}}),Hs=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),Rs=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[nN]},$$scope:{ctx:B}}}),al=new xe({}),il=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1794"}}),pl=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_bert.py#L1808",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new we({props:{$$slots:{default:[sN]},$$scope:{ctx:B}}}),Ks=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[rN]},$$scope:{ctx:B}}}),Js=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[aN]},$$scope:{ctx:B}}}),hl=new xe({}),ml=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),Xs=new we({props:{$$slots:{default:[iN]},$$scope:{ctx:B}}}),_l=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[lN]},$$scope:{ctx:B}}}),Zs=new oe({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[dN]},$$scope:{ctx:B}}}),bl=new xe({}),kl=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),tr=new we({props:{$$slots:{default:[cN]},$$scope:{ctx:B}}}),wl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new we({props:{$$slots:{default:[pN]},$$scope:{ctx:B}}}),nr=new oe({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[hN]},$$scope:{ctx:B}}}),$l=new xe({}),xl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),Fl=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rr=new oe({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[mN]},$$scope:{ctx:B}}}),zl=new xe({}),Pl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),ir=new we({props:{$$slots:{default:[fN]},$$scope:{ctx:B}}}),Ol=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lr=new we({props:{$$slots:{default:[uN]},$$scope:{ctx:B}}}),dr=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[gN]},$$scope:{ctx:B}}}),cr=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[_N]},$$scope:{ctx:B}}}),Al=new xe({}),Il=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),hr=new we({props:{$$slots:{default:[bN]},$$scope:{ctx:B}}}),Wl=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mr=new we({props:{$$slots:{default:[kN]},$$scope:{ctx:B}}}),fr=new oe({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[yN]},$$scope:{ctx:B}}}),Hl=new xe({}),Rl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),gr=new we({props:{$$slots:{default:[vN]},$$scope:{ctx:B}}}),Jl=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_r=new we({props:{$$slots:{default:[TN]},$$scope:{ctx:B}}}),br=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[wN]},$$scope:{ctx:B}}}),kr=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[$N]},$$scope:{ctx:B}}}),Gl=new xe({}),Xl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),vr=new we({props:{$$slots:{default:[xN]},$$scope:{ctx:B}}}),td=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tr=new we({props:{$$slots:{default:[FN]},$$scope:{ctx:B}}}),wr=new oe({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[BN]},$$scope:{ctx:B}}}),od=new xe({}),nd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),xr=new we({props:{$$slots:{default:[MN]},$$scope:{ctx:B}}}),id=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new we({props:{$$slots:{default:[EN]},$$scope:{ctx:B}}}),Br=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[zN]},$$scope:{ctx:B}}}),Mr=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[PN]},$$scope:{ctx:B}}}),ld=new xe({}),dd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),zr=new we({props:{$$slots:{default:[qN]},$$scope:{ctx:B}}}),md=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pr=new we({props:{$$slots:{default:[jN]},$$scope:{ctx:B}}}),qr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[CN]},$$scope:{ctx:B}}}),jr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[NN]},$$scope:{ctx:B}}}),fd=new xe({}),ud=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L994"}}),wd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new we({props:{$$slots:{default:[ON]},$$scope:{ctx:B}}}),Or=new oe({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[AN]},$$scope:{ctx:B}}}),$d=new xe({}),xd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1067"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new we({props:{$$slots:{default:[IN]},$$scope:{ctx:B}}}),Lr=new oe({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[LN]},$$scope:{ctx:B}}}),Cd=new xe({}),Nd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1605"}}),Wd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new we({props:{$$slots:{default:[DN]},$$scope:{ctx:B}}}),Ur=new oe({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[SN]},$$scope:{ctx:B}}}),Hd=new xe({}),Rd=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1152"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new we({props:{$$slots:{default:[UN]},$$scope:{ctx:B}}}),Rr=new oe({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[WN]},$$scope:{ctx:B}}}),tc=new xe({}),oc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1213"}}),pc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new we({props:{$$slots:{default:[HN]},$$scope:{ctx:B}}}),Kr=new oe({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[RN]},$$scope:{ctx:B}}}),hc=new xe({}),mc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1311"}}),vc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new we({props:{$$slots:{default:[VN]},$$scope:{ctx:B}}}),Xr=new oe({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[QN]},$$scope:{ctx:B}}}),Tc=new xe({}),wc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1387"}}),Pc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zr=new we({props:{$$slots:{default:[KN]},$$scope:{ctx:B}}}),ea=new oe({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[JN]},$$scope:{ctx:B}}}),qc=new xe({}),jc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1459"}}),Sc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oa=new we({props:{$$slots:{default:[GN]},$$scope:{ctx:B}}}),na=new oe({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[XN]},$$scope:{ctx:B}}}),Uc=new xe({}),Wc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L1526"}}),Xc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17078/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17078/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17078/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17078/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17078/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new we({props:{$$slots:{default:[YN]},$$scope:{ctx:B}}}),aa=new oe({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[ZN]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),h=r("h1"),m=r("a"),g=r("span"),v(l.$$.fragment),f=c(),M=r("span"),be=n("BERT"),X=c(),z=r("h2"),ee=r("a"),L=r("span"),v(re.$$.fragment),ke=c(),D=r("span"),ye=n("Overview"),me=c(),J=r("p"),O=n("The BERT model was proposed in "),ae=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),fe=c(),le=r("p"),S=r("em"),ve=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),V=n("Tips:"),_e=c(),te=r("ul"),N=r("li"),Te=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Q=c(),pe=r("li"),y=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),A=n("thomwolf"),Pe=n(". The original code can be found "),Me=r("a"),qe=n("here"),I=n("."),W=c(),$e=r("h2"),Fe=r("a"),U=r("span"),v(Ee.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),Z_=c(),Ct=r("div"),v(Na.$$.fragment),Zy=c(),po=r("p"),ev=n("This is the configuration class to store the configuration of a "),hp=r("a"),tv=n("BertModel"),ov=n(" or a "),mp=r("a"),nv=n("TFBertModel"),sv=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Oa=r("a"),rv=n("bert-base-uncased"),av=n(" architecture."),iv=c(),Wo=r("p"),lv=n("Configuration objects inherit from "),fp=r("a"),dv=n("PretrainedConfig"),cv=n(` and can be used to control the model outputs. Read the
documentation from `),up=r("a"),pv=n("PretrainedConfig"),hv=n(" for more information."),mv=c(),v(ds.$$.fragment),eb=c(),Ho=r("h2"),cs=r("a"),Zh=r("span"),v(Aa.$$.fragment),fv=c(),em=r("span"),uv=n("BertTokenizer"),tb=c(),Ne=r("div"),v(Ia.$$.fragment),gv=c(),tm=r("p"),_v=n("Construct a BERT tokenizer. Based on WordPiece."),bv=c(),La=r("p"),kv=n("This tokenizer inherits from "),gp=r("a"),yv=n("PreTrainedTokenizer"),vv=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Tv=c(),xo=r("div"),v(Da.$$.fragment),wv=c(),om=r("p"),$v=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),xv=c(),Sa=r("ul"),_p=r("li"),Fv=n("single sequence: "),nm=r("code"),Bv=n("[CLS] X [SEP]"),Mv=c(),bp=r("li"),Ev=n("pair of sequences: "),sm=r("code"),zv=n("[CLS] A [SEP] B [SEP]"),Pv=c(),ps=r("div"),v(Ua.$$.fragment),qv=c(),Wa=r("p"),jv=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rm=r("code"),Cv=n("prepare_for_model"),Nv=n(" method."),Ov=c(),Ot=r("div"),v(Ha.$$.fragment),Av=c(),am=r("p"),Iv=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Lv=c(),v(hs.$$.fragment),Dv=c(),Ro=r("p"),Sv=n("If "),im=r("code"),Uv=n("token_ids_1"),Wv=n(" is "),lm=r("code"),Hv=n("None"),Rv=n(", this method only returns the first portion of the mask (0s)."),Vv=c(),kp=r("div"),v(Ra.$$.fragment),ob=c(),Vo=r("h2"),ms=r("a"),dm=r("span"),v(Va.$$.fragment),Qv=c(),cm=r("span"),Kv=n("BertTokenizerFast"),nb=c(),rt=r("div"),v(Qa.$$.fragment),Jv=c(),Ka=r("p"),Gv=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),pm=r("em"),Xv=n("tokenizers"),Yv=n(" library). Based on WordPiece."),Zv=c(),Ja=r("p"),eT=n("This tokenizer inherits from "),yp=r("a"),tT=n("PreTrainedTokenizerFast"),oT=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),nT=c(),Fo=r("div"),v(Ga.$$.fragment),sT=c(),hm=r("p"),rT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),aT=c(),Xa=r("ul"),vp=r("li"),iT=n("single sequence: "),mm=r("code"),lT=n("[CLS] X [SEP]"),dT=c(),Tp=r("li"),cT=n("pair of sequences: "),fm=r("code"),pT=n("[CLS] A [SEP] B [SEP]"),hT=c(),At=r("div"),v(Ya.$$.fragment),mT=c(),um=r("p"),fT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),uT=c(),v(fs.$$.fragment),gT=c(),Qo=r("p"),_T=n("If "),gm=r("code"),bT=n("token_ids_1"),kT=n(" is "),_m=r("code"),yT=n("None"),vT=n(", this method only returns the first portion of the mask (0s)."),sb=c(),Ko=r("h2"),us=r("a"),bm=r("span"),v(Za.$$.fragment),TT=c(),km=r("span"),wT=n("Bert specific outputs"),rb=c(),Jo=r("div"),v(ei.$$.fragment),$T=c(),ti=r("p"),xT=n("Output type of "),wp=r("a"),FT=n("BertForPreTraining"),BT=n("."),ab=c(),Go=r("div"),v(oi.$$.fragment),MT=c(),ni=r("p"),ET=n("Output type of "),$p=r("a"),zT=n("TFBertForPreTraining"),PT=n("."),ib=c(),ho=r("div"),v(si.$$.fragment),qT=c(),ri=r("p"),jT=n("Output type of "),xp=r("a"),CT=n("BertForPreTraining"),NT=n("."),OT=c(),gs=r("div"),v(ai.$$.fragment),AT=c(),ym=r("p"),IT=n("\u201CReturns a new object replacing the specified fields with new values."),lb=c(),Xo=r("h2"),_s=r("a"),vm=r("span"),v(ii.$$.fragment),LT=c(),Tm=r("span"),DT=n("BertModel"),db=c(),Oe=r("div"),v(li.$$.fragment),ST=c(),wm=r("p"),UT=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),WT=c(),di=r("p"),HT=n("This model inherits from "),Fp=r("a"),RT=n("PreTrainedModel"),VT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QT=c(),ci=r("p"),KT=n("This model is also a PyTorch "),pi=r("a"),JT=n("torch.nn.Module"),GT=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),XT=c(),hi=r("p"),YT=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),mi=r("a"),ZT=n(`Attention is
all you need`),e1=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),t1=c(),Ke=r("p"),o1=n("To behave as an decoder the model needs to be initialized with the "),$m=r("code"),n1=n("is_decoder"),s1=n(` argument of the configuration set
to `),xm=r("code"),r1=n("True"),a1=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Fm=r("code"),i1=n("is_decoder"),l1=n(` argument and
`),Bm=r("code"),d1=n("add_cross_attention"),c1=n(" set to "),Mm=r("code"),p1=n("True"),h1=n("; an "),Em=r("code"),m1=n("encoder_hidden_states"),f1=n(" is then expected as an input to the forward pass."),u1=c(),It=r("div"),v(fi.$$.fragment),g1=c(),Yo=r("p"),_1=n("The "),Bp=r("a"),b1=n("BertModel"),k1=n(" forward method, overrides the "),zm=r("code"),y1=n("__call__"),v1=n(" special method."),T1=c(),v(bs.$$.fragment),w1=c(),v(ks.$$.fragment),cb=c(),Zo=r("h2"),ys=r("a"),Pm=r("span"),v(ui.$$.fragment),$1=c(),qm=r("span"),x1=n("BertForPreTraining"),pb=c(),at=r("div"),v(gi.$$.fragment),F1=c(),en=r("p"),B1=n("Bert Model with two heads on top as done during the pretraining: a "),jm=r("code"),M1=n("masked language modeling"),E1=n(" head and a "),Cm=r("code"),z1=n("next sentence prediction (classification)"),P1=n(" head."),q1=c(),_i=r("p"),j1=n("This model inherits from "),Mp=r("a"),C1=n("PreTrainedModel"),N1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O1=c(),bi=r("p"),A1=n("This model is also a PyTorch "),ki=r("a"),I1=n("torch.nn.Module"),L1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D1=c(),Lt=r("div"),v(yi.$$.fragment),S1=c(),tn=r("p"),U1=n("The "),Ep=r("a"),W1=n("BertForPreTraining"),H1=n(" forward method, overrides the "),Nm=r("code"),R1=n("__call__"),V1=n(" special method."),Q1=c(),v(vs.$$.fragment),K1=c(),v(Ts.$$.fragment),hb=c(),on=r("h2"),ws=r("a"),Om=r("span"),v(vi.$$.fragment),J1=c(),Am=r("span"),G1=n("BertLMHeadModel"),mb=c(),it=r("div"),v(Ti.$$.fragment),X1=c(),wi=r("p"),Y1=n("Bert Model with a "),Im=r("code"),Z1=n("language modeling"),ew=n(" head on top for CLM fine-tuning."),tw=c(),$i=r("p"),ow=n("This model inherits from "),zp=r("a"),nw=n("PreTrainedModel"),sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rw=c(),xi=r("p"),aw=n("This model is also a PyTorch "),Fi=r("a"),iw=n("torch.nn.Module"),lw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dw=c(),Dt=r("div"),v(Bi.$$.fragment),cw=c(),nn=r("p"),pw=n("The "),Pp=r("a"),hw=n("BertLMHeadModel"),mw=n(" forward method, overrides the "),Lm=r("code"),fw=n("__call__"),uw=n(" special method."),gw=c(),v($s.$$.fragment),_w=c(),v(xs.$$.fragment),fb=c(),sn=r("h2"),Fs=r("a"),Dm=r("span"),v(Mi.$$.fragment),bw=c(),Sm=r("span"),kw=n("BertForMaskedLM"),ub=c(),lt=r("div"),v(Ei.$$.fragment),yw=c(),zi=r("p"),vw=n("Bert Model with a "),Um=r("code"),Tw=n("language modeling"),ww=n(" head on top."),$w=c(),Pi=r("p"),xw=n("This model inherits from "),qp=r("a"),Fw=n("PreTrainedModel"),Bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mw=c(),qi=r("p"),Ew=n("This model is also a PyTorch "),ji=r("a"),zw=n("torch.nn.Module"),Pw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qw=c(),ft=r("div"),v(Ci.$$.fragment),jw=c(),rn=r("p"),Cw=n("The "),jp=r("a"),Nw=n("BertForMaskedLM"),Ow=n(" forward method, overrides the "),Wm=r("code"),Aw=n("__call__"),Iw=n(" special method."),Lw=c(),v(Bs.$$.fragment),Dw=c(),v(Ms.$$.fragment),Sw=c(),v(Es.$$.fragment),gb=c(),an=r("h2"),zs=r("a"),Hm=r("span"),v(Ni.$$.fragment),Uw=c(),Rm=r("span"),Ww=n("BertForNextSentencePrediction"),_b=c(),dt=r("div"),v(Oi.$$.fragment),Hw=c(),Ai=r("p"),Rw=n("Bert Model with a "),Vm=r("code"),Vw=n("next sentence prediction (classification)"),Qw=n(" head on top."),Kw=c(),Ii=r("p"),Jw=n("This model inherits from "),Cp=r("a"),Gw=n("PreTrainedModel"),Xw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yw=c(),Li=r("p"),Zw=n("This model is also a PyTorch "),Di=r("a"),e$=n("torch.nn.Module"),t$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),o$=c(),St=r("div"),v(Si.$$.fragment),n$=c(),ln=r("p"),s$=n("The "),Np=r("a"),r$=n("BertForNextSentencePrediction"),a$=n(" forward method, overrides the "),Qm=r("code"),i$=n("__call__"),l$=n(" special method."),d$=c(),v(Ps.$$.fragment),c$=c(),v(qs.$$.fragment),bb=c(),dn=r("h2"),js=r("a"),Km=r("span"),v(Ui.$$.fragment),p$=c(),Jm=r("span"),h$=n("BertForSequenceClassification"),kb=c(),ct=r("div"),v(Wi.$$.fragment),m$=c(),Gm=r("p"),f$=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),u$=c(),Hi=r("p"),g$=n("This model inherits from "),Op=r("a"),_$=n("PreTrainedModel"),b$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k$=c(),Ri=r("p"),y$=n("This model is also a PyTorch "),Vi=r("a"),v$=n("torch.nn.Module"),T$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w$=c(),Qe=r("div"),v(Qi.$$.fragment),$$=c(),cn=r("p"),x$=n("The "),Ap=r("a"),F$=n("BertForSequenceClassification"),B$=n(" forward method, overrides the "),Xm=r("code"),M$=n("__call__"),E$=n(" special method."),z$=c(),v(Cs.$$.fragment),P$=c(),v(Ns.$$.fragment),q$=c(),v(Os.$$.fragment),j$=c(),v(As.$$.fragment),C$=c(),v(Is.$$.fragment),yb=c(),pn=r("h2"),Ls=r("a"),Ym=r("span"),v(Ki.$$.fragment),N$=c(),Zm=r("span"),O$=n("BertForMultipleChoice"),vb=c(),pt=r("div"),v(Ji.$$.fragment),A$=c(),ef=r("p"),I$=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),L$=c(),Gi=r("p"),D$=n("This model inherits from "),Ip=r("a"),S$=n("PreTrainedModel"),U$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W$=c(),Xi=r("p"),H$=n("This model is also a PyTorch "),Yi=r("a"),R$=n("torch.nn.Module"),V$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q$=c(),Ut=r("div"),v(Zi.$$.fragment),K$=c(),hn=r("p"),J$=n("The "),Lp=r("a"),G$=n("BertForMultipleChoice"),X$=n(" forward method, overrides the "),tf=r("code"),Y$=n("__call__"),Z$=n(" special method."),e0=c(),v(Ds.$$.fragment),t0=c(),v(Ss.$$.fragment),Tb=c(),mn=r("h2"),Us=r("a"),of=r("span"),v(el.$$.fragment),o0=c(),nf=r("span"),n0=n("BertForTokenClassification"),wb=c(),ht=r("div"),v(tl.$$.fragment),s0=c(),sf=r("p"),r0=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a0=c(),ol=r("p"),i0=n("This model inherits from "),Dp=r("a"),l0=n("PreTrainedModel"),d0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c0=c(),nl=r("p"),p0=n("This model is also a PyTorch "),sl=r("a"),h0=n("torch.nn.Module"),m0=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),f0=c(),ut=r("div"),v(rl.$$.fragment),u0=c(),fn=r("p"),g0=n("The "),Sp=r("a"),_0=n("BertForTokenClassification"),b0=n(" forward method, overrides the "),rf=r("code"),k0=n("__call__"),y0=n(" special method."),v0=c(),v(Ws.$$.fragment),T0=c(),v(Hs.$$.fragment),w0=c(),v(Rs.$$.fragment),$b=c(),un=r("h2"),Vs=r("a"),af=r("span"),v(al.$$.fragment),$0=c(),lf=r("span"),x0=n("BertForQuestionAnswering"),xb=c(),mt=r("div"),v(il.$$.fragment),F0=c(),gn=r("p"),B0=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),df=r("code"),M0=n("span start logits"),E0=n(" and "),cf=r("code"),z0=n("span end logits"),P0=n(")."),q0=c(),ll=r("p"),j0=n("This model inherits from "),Up=r("a"),C0=n("PreTrainedModel"),N0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O0=c(),dl=r("p"),A0=n("This model is also a PyTorch "),cl=r("a"),I0=n("torch.nn.Module"),L0=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D0=c(),gt=r("div"),v(pl.$$.fragment),S0=c(),_n=r("p"),U0=n("The "),Wp=r("a"),W0=n("BertForQuestionAnswering"),H0=n(" forward method, overrides the "),pf=r("code"),R0=n("__call__"),V0=n(" special method."),Q0=c(),v(Qs.$$.fragment),K0=c(),v(Ks.$$.fragment),J0=c(),v(Js.$$.fragment),Fb=c(),bn=r("h2"),Gs=r("a"),hf=r("span"),v(hl.$$.fragment),G0=c(),mf=r("span"),X0=n("TFBertModel"),Bb=c(),Je=r("div"),v(ml.$$.fragment),Y0=c(),ff=r("p"),Z0=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),e2=c(),fl=r("p"),t2=n("This model inherits from "),Hp=r("a"),o2=n("TFPreTrainedModel"),n2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s2=c(),ul=r("p"),r2=n("This model is also a "),gl=r("a"),a2=n("tf.keras.Model"),i2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),l2=c(),v(Xs.$$.fragment),d2=c(),Wt=r("div"),v(_l.$$.fragment),c2=c(),kn=r("p"),p2=n("The "),Rp=r("a"),h2=n("TFBertModel"),m2=n(" forward method, overrides the "),uf=r("code"),f2=n("__call__"),u2=n(" special method."),g2=c(),v(Ys.$$.fragment),_2=c(),v(Zs.$$.fragment),Mb=c(),yn=r("h2"),er=r("a"),gf=r("span"),v(bl.$$.fragment),b2=c(),_f=r("span"),k2=n("TFBertForPreTraining"),Eb=c(),Ge=r("div"),v(kl.$$.fragment),y2=c(),vn=r("p"),v2=n(`Bert Model with two heads on top as done during the pretraining:
a `),bf=r("code"),T2=n("masked language modeling"),w2=n(" head and a "),kf=r("code"),$2=n("next sentence prediction (classification)"),x2=n(" head."),F2=c(),yl=r("p"),B2=n("This model inherits from "),Vp=r("a"),M2=n("TFPreTrainedModel"),E2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z2=c(),vl=r("p"),P2=n("This model is also a "),Tl=r("a"),q2=n("tf.keras.Model"),j2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),C2=c(),v(tr.$$.fragment),N2=c(),Ht=r("div"),v(wl.$$.fragment),O2=c(),Tn=r("p"),A2=n("The "),Qp=r("a"),I2=n("TFBertForPreTraining"),L2=n(" forward method, overrides the "),yf=r("code"),D2=n("__call__"),S2=n(" special method."),U2=c(),v(or.$$.fragment),W2=c(),v(nr.$$.fragment),zb=c(),wn=r("h2"),sr=r("a"),vf=r("span"),v($l.$$.fragment),H2=c(),Tf=r("span"),R2=n("TFBertModelLMHeadModel"),Pb=c(),$n=r("div"),v(xl.$$.fragment),V2=c(),_t=r("div"),v(Fl.$$.fragment),Q2=c(),Ae=r("p"),K2=n("encoder_hidden_states  ("),wf=r("code"),J2=n("tf.Tensor"),G2=n(" of shape "),$f=r("code"),X2=n("(batch_size, sequence_length, hidden_size)"),Y2=n(", "),xf=r("em"),Z2=n("optional"),ex=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Ff=r("code"),tx=n("tf.Tensor"),ox=n(" of shape "),Bf=r("code"),nx=n("(batch_size, sequence_length)"),sx=n(", "),Mf=r("em"),rx=n("optional"),ax=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Ef=r("code"),ix=n("[0, 1]"),lx=n(":"),dx=c(),Bl=r("ul"),Ml=r("li"),cx=n("1 for tokens that are "),zf=r("strong"),px=n("not masked"),hx=n(","),mx=c(),El=r("li"),fx=n("0 for tokens that are "),Pf=r("strong"),ux=n("masked"),gx=n("."),_x=c(),G=r("p"),bx=n("past_key_values ("),qf=r("code"),kx=n("Tuple[Tuple[tf.Tensor]]"),yx=n(" of length "),jf=r("code"),vx=n("config.n_layers"),Tx=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Cf=r("code"),wx=n("past_key_values"),$x=n(" are used, the user can optionally input only the last "),Nf=r("code"),xx=n("decoder_input_ids"),Fx=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),Of=r("code"),Bx=n("(batch_size, 1)"),Mx=n(` instead of all
`),Af=r("code"),Ex=n("decoder_input_ids"),zx=n(" of shape "),If=r("code"),Px=n("(batch_size, sequence_length)"),qx=n(`.
use_cache (`),Lf=r("code"),jx=n("bool"),Cx=n(", "),Df=r("em"),Nx=n("optional"),Ox=n(", defaults to "),Sf=r("code"),Ax=n("True"),Ix=n(`):
If set to `),Uf=r("code"),Lx=n("True"),Dx=n(", "),Wf=r("code"),Sx=n("past_key_values"),Ux=n(` key value states are returned and can be used to speed up decoding (see
`),Hf=r("code"),Wx=n("past_key_values"),Hx=n("). Set to "),Rf=r("code"),Rx=n("False"),Vx=n(" during training, "),Vf=r("code"),Qx=n("True"),Kx=n(` during generation
labels (`),Qf=r("code"),Jx=n("tf.Tensor"),Gx=n(" or "),Kf=r("code"),Xx=n("np.ndarray"),Yx=n(" of shape "),Jf=r("code"),Zx=n("(batch_size, sequence_length)"),eF=n(", "),Gf=r("em"),tF=n("optional"),oF=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Xf=r("code"),nF=n("[0, ..., config.vocab_size - 1]"),sF=n("."),rF=c(),v(rr.$$.fragment),qb=c(),xn=r("h2"),ar=r("a"),Yf=r("span"),v(zl.$$.fragment),aF=c(),Zf=r("span"),iF=n("TFBertForMaskedLM"),jb=c(),Xe=r("div"),v(Pl.$$.fragment),lF=c(),ql=r("p"),dF=n("Bert Model with a "),eu=r("code"),cF=n("language modeling"),pF=n(" head on top."),hF=c(),jl=r("p"),mF=n("This model inherits from "),Kp=r("a"),fF=n("TFPreTrainedModel"),uF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gF=c(),Cl=r("p"),_F=n("This model is also a "),Nl=r("a"),bF=n("tf.keras.Model"),kF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yF=c(),v(ir.$$.fragment),vF=c(),bt=r("div"),v(Ol.$$.fragment),TF=c(),Fn=r("p"),wF=n("The "),Jp=r("a"),$F=n("TFBertForMaskedLM"),xF=n(" forward method, overrides the "),tu=r("code"),FF=n("__call__"),BF=n(" special method."),MF=c(),v(lr.$$.fragment),EF=c(),v(dr.$$.fragment),zF=c(),v(cr.$$.fragment),Cb=c(),Bn=r("h2"),pr=r("a"),ou=r("span"),v(Al.$$.fragment),PF=c(),nu=r("span"),qF=n("TFBertForNextSentencePrediction"),Nb=c(),Ye=r("div"),v(Il.$$.fragment),jF=c(),Ll=r("p"),CF=n("Bert Model with a "),su=r("code"),NF=n("next sentence prediction (classification)"),OF=n(" head on top."),AF=c(),Dl=r("p"),IF=n("This model inherits from "),Gp=r("a"),LF=n("TFPreTrainedModel"),DF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),SF=c(),Sl=r("p"),UF=n("This model is also a "),Ul=r("a"),WF=n("tf.keras.Model"),HF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RF=c(),v(hr.$$.fragment),VF=c(),Rt=r("div"),v(Wl.$$.fragment),QF=c(),Mn=r("p"),KF=n("The "),Xp=r("a"),JF=n("TFBertForNextSentencePrediction"),GF=n(" forward method, overrides the "),ru=r("code"),XF=n("__call__"),YF=n(" special method."),ZF=c(),v(mr.$$.fragment),e7=c(),v(fr.$$.fragment),Ob=c(),En=r("h2"),ur=r("a"),au=r("span"),v(Hl.$$.fragment),t7=c(),iu=r("span"),o7=n("TFBertForSequenceClassification"),Ab=c(),Ze=r("div"),v(Rl.$$.fragment),n7=c(),lu=r("p"),s7=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),r7=c(),Vl=r("p"),a7=n("This model inherits from "),Yp=r("a"),i7=n("TFPreTrainedModel"),l7=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d7=c(),Ql=r("p"),c7=n("This model is also a "),Kl=r("a"),p7=n("tf.keras.Model"),h7=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),m7=c(),v(gr.$$.fragment),f7=c(),kt=r("div"),v(Jl.$$.fragment),u7=c(),zn=r("p"),g7=n("The "),Zp=r("a"),_7=n("TFBertForSequenceClassification"),b7=n(" forward method, overrides the "),du=r("code"),k7=n("__call__"),y7=n(" special method."),v7=c(),v(_r.$$.fragment),T7=c(),v(br.$$.fragment),w7=c(),v(kr.$$.fragment),Ib=c(),Pn=r("h2"),yr=r("a"),cu=r("span"),v(Gl.$$.fragment),$7=c(),pu=r("span"),x7=n("TFBertForMultipleChoice"),Lb=c(),et=r("div"),v(Xl.$$.fragment),F7=c(),hu=r("p"),B7=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),M7=c(),Yl=r("p"),E7=n("This model inherits from "),eh=r("a"),z7=n("TFPreTrainedModel"),P7=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q7=c(),Zl=r("p"),j7=n("This model is also a "),ed=r("a"),C7=n("tf.keras.Model"),N7=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),O7=c(),v(vr.$$.fragment),A7=c(),Vt=r("div"),v(td.$$.fragment),I7=c(),qn=r("p"),L7=n("The "),th=r("a"),D7=n("TFBertForMultipleChoice"),S7=n(" forward method, overrides the "),mu=r("code"),U7=n("__call__"),W7=n(" special method."),H7=c(),v(Tr.$$.fragment),R7=c(),v(wr.$$.fragment),Db=c(),jn=r("h2"),$r=r("a"),fu=r("span"),v(od.$$.fragment),V7=c(),uu=r("span"),Q7=n("TFBertForTokenClassification"),Sb=c(),tt=r("div"),v(nd.$$.fragment),K7=c(),gu=r("p"),J7=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),G7=c(),sd=r("p"),X7=n("This model inherits from "),oh=r("a"),Y7=n("TFPreTrainedModel"),Z7=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eB=c(),rd=r("p"),tB=n("This model is also a "),ad=r("a"),oB=n("tf.keras.Model"),nB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sB=c(),v(xr.$$.fragment),rB=c(),yt=r("div"),v(id.$$.fragment),aB=c(),Cn=r("p"),iB=n("The "),nh=r("a"),lB=n("TFBertForTokenClassification"),dB=n(" forward method, overrides the "),_u=r("code"),cB=n("__call__"),pB=n(" special method."),hB=c(),v(Fr.$$.fragment),mB=c(),v(Br.$$.fragment),fB=c(),v(Mr.$$.fragment),Ub=c(),Nn=r("h2"),Er=r("a"),bu=r("span"),v(ld.$$.fragment),uB=c(),ku=r("span"),gB=n("TFBertForQuestionAnswering"),Wb=c(),ot=r("div"),v(dd.$$.fragment),_B=c(),On=r("p"),bB=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yu=r("code"),kB=n("span start logits"),yB=n(" and "),vu=r("code"),vB=n("span end logits"),TB=n(")."),wB=c(),cd=r("p"),$B=n("This model inherits from "),sh=r("a"),xB=n("TFPreTrainedModel"),FB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),BB=c(),pd=r("p"),MB=n("This model is also a "),hd=r("a"),EB=n("tf.keras.Model"),zB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),PB=c(),v(zr.$$.fragment),qB=c(),vt=r("div"),v(md.$$.fragment),jB=c(),An=r("p"),CB=n("The "),rh=r("a"),NB=n("TFBertForQuestionAnswering"),OB=n(" forward method, overrides the "),Tu=r("code"),AB=n("__call__"),IB=n(" special method."),LB=c(),v(Pr.$$.fragment),DB=c(),v(qr.$$.fragment),SB=c(),v(jr.$$.fragment),Hb=c(),In=r("h2"),Cr=r("a"),wu=r("span"),v(fd.$$.fragment),UB=c(),$u=r("span"),WB=n("FlaxBertModel"),Rb=c(),Ie=r("div"),v(ud.$$.fragment),HB=c(),xu=r("p"),RB=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),VB=c(),gd=r("p"),QB=n("This model inherits from "),ah=r("a"),KB=n("FlaxPreTrainedModel"),JB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),GB=c(),_d=r("p"),XB=n("This model is also a Flax Linen "),bd=r("a"),YB=n("flax.linen.Module"),ZB=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eM=c(),Fu=r("p"),tM=n("Finally, this model supports inherent JAX features such as:"),oM=c(),mo=r("ul"),Bu=r("li"),kd=r("a"),nM=n("Just-In-Time (JIT) compilation"),sM=c(),Mu=r("li"),yd=r("a"),rM=n("Automatic Differentiation"),aM=c(),Eu=r("li"),vd=r("a"),iM=n("Vectorization"),lM=c(),zu=r("li"),Td=r("a"),dM=n("Parallelization"),cM=c(),Qt=r("div"),v(wd.$$.fragment),pM=c(),Ln=r("p"),hM=n("The "),Pu=r("code"),mM=n("FlaxBertPreTrainedModel"),fM=n(" forward method, overrides the "),qu=r("code"),uM=n("__call__"),gM=n(" special method."),_M=c(),v(Nr.$$.fragment),bM=c(),v(Or.$$.fragment),Vb=c(),Dn=r("h2"),Ar=r("a"),ju=r("span"),v($d.$$.fragment),kM=c(),Cu=r("span"),yM=n("FlaxBertForPreTraining"),Qb=c(),Le=r("div"),v(xd.$$.fragment),vM=c(),Sn=r("p"),TM=n("Bert Model with two heads on top as done during the pretraining: a "),Nu=r("code"),wM=n("masked language modeling"),$M=n(" head and a "),Ou=r("code"),xM=n("next sentence prediction (classification)"),FM=n(" head."),BM=c(),Fd=r("p"),MM=n("This model inherits from "),ih=r("a"),EM=n("FlaxPreTrainedModel"),zM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),PM=c(),Bd=r("p"),qM=n("This model is also a Flax Linen "),Md=r("a"),jM=n("flax.linen.Module"),CM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),NM=c(),Au=r("p"),OM=n("Finally, this model supports inherent JAX features such as:"),AM=c(),fo=r("ul"),Iu=r("li"),Ed=r("a"),IM=n("Just-In-Time (JIT) compilation"),LM=c(),Lu=r("li"),zd=r("a"),DM=n("Automatic Differentiation"),SM=c(),Du=r("li"),Pd=r("a"),UM=n("Vectorization"),WM=c(),Su=r("li"),qd=r("a"),HM=n("Parallelization"),RM=c(),Kt=r("div"),v(jd.$$.fragment),VM=c(),Un=r("p"),QM=n("The "),Uu=r("code"),KM=n("FlaxBertPreTrainedModel"),JM=n(" forward method, overrides the "),Wu=r("code"),GM=n("__call__"),XM=n(" special method."),YM=c(),v(Ir.$$.fragment),ZM=c(),v(Lr.$$.fragment),Kb=c(),Wn=r("h2"),Dr=r("a"),Hu=r("span"),v(Cd.$$.fragment),eE=c(),Ru=r("span"),tE=n("FlaxBertForCausalLM"),Jb=c(),De=r("div"),v(Nd.$$.fragment),oE=c(),Vu=r("p"),nE=n(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),sE=c(),Od=r("p"),rE=n("This model inherits from "),lh=r("a"),aE=n("FlaxPreTrainedModel"),iE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lE=c(),Ad=r("p"),dE=n("This model is also a Flax Linen "),Id=r("a"),cE=n("flax.linen.Module"),pE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hE=c(),Qu=r("p"),mE=n("Finally, this model supports inherent JAX features such as:"),fE=c(),uo=r("ul"),Ku=r("li"),Ld=r("a"),uE=n("Just-In-Time (JIT) compilation"),gE=c(),Ju=r("li"),Dd=r("a"),_E=n("Automatic Differentiation"),bE=c(),Gu=r("li"),Sd=r("a"),kE=n("Vectorization"),yE=c(),Xu=r("li"),Ud=r("a"),vE=n("Parallelization"),TE=c(),Jt=r("div"),v(Wd.$$.fragment),wE=c(),Hn=r("p"),$E=n("The "),Yu=r("code"),xE=n("FlaxBertPreTrainedModel"),FE=n(" forward method, overrides the "),Zu=r("code"),BE=n("__call__"),ME=n(" special method."),EE=c(),v(Sr.$$.fragment),zE=c(),v(Ur.$$.fragment),Gb=c(),Rn=r("h2"),Wr=r("a"),eg=r("span"),v(Hd.$$.fragment),PE=c(),tg=r("span"),qE=n("FlaxBertForMaskedLM"),Xb=c(),Se=r("div"),v(Rd.$$.fragment),jE=c(),Vd=r("p"),CE=n("Bert Model with a "),og=r("code"),NE=n("language modeling"),OE=n(" head on top."),AE=c(),Qd=r("p"),IE=n("This model inherits from "),dh=r("a"),LE=n("FlaxPreTrainedModel"),DE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),SE=c(),Kd=r("p"),UE=n("This model is also a Flax Linen "),Jd=r("a"),WE=n("flax.linen.Module"),HE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RE=c(),ng=r("p"),VE=n("Finally, this model supports inherent JAX features such as:"),QE=c(),go=r("ul"),sg=r("li"),Gd=r("a"),KE=n("Just-In-Time (JIT) compilation"),JE=c(),rg=r("li"),Xd=r("a"),GE=n("Automatic Differentiation"),XE=c(),ag=r("li"),Yd=r("a"),YE=n("Vectorization"),ZE=c(),ig=r("li"),Zd=r("a"),ez=n("Parallelization"),tz=c(),Gt=r("div"),v(ec.$$.fragment),oz=c(),Vn=r("p"),nz=n("The "),lg=r("code"),sz=n("FlaxBertPreTrainedModel"),rz=n(" forward method, overrides the "),dg=r("code"),az=n("__call__"),iz=n(" special method."),lz=c(),v(Hr.$$.fragment),dz=c(),v(Rr.$$.fragment),Yb=c(),Qn=r("h2"),Vr=r("a"),cg=r("span"),v(tc.$$.fragment),cz=c(),pg=r("span"),pz=n("FlaxBertForNextSentencePrediction"),Zb=c(),Ue=r("div"),v(oc.$$.fragment),hz=c(),nc=r("p"),mz=n("Bert Model with a "),hg=r("code"),fz=n("next sentence prediction (classification)"),uz=n(" head on top."),gz=c(),sc=r("p"),_z=n("This model inherits from "),ch=r("a"),bz=n("FlaxPreTrainedModel"),kz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yz=c(),rc=r("p"),vz=n("This model is also a Flax Linen "),ac=r("a"),Tz=n("flax.linen.Module"),wz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$z=c(),mg=r("p"),xz=n("Finally, this model supports inherent JAX features such as:"),Fz=c(),_o=r("ul"),fg=r("li"),ic=r("a"),Bz=n("Just-In-Time (JIT) compilation"),Mz=c(),ug=r("li"),lc=r("a"),Ez=n("Automatic Differentiation"),zz=c(),gg=r("li"),dc=r("a"),Pz=n("Vectorization"),qz=c(),_g=r("li"),cc=r("a"),jz=n("Parallelization"),Cz=c(),Xt=r("div"),v(pc.$$.fragment),Nz=c(),Kn=r("p"),Oz=n("The "),bg=r("code"),Az=n("FlaxBertPreTrainedModel"),Iz=n(" forward method, overrides the "),kg=r("code"),Lz=n("__call__"),Dz=n(" special method."),Sz=c(),v(Qr.$$.fragment),Uz=c(),v(Kr.$$.fragment),ek=c(),Jn=r("h2"),Jr=r("a"),yg=r("span"),v(hc.$$.fragment),Wz=c(),vg=r("span"),Hz=n("FlaxBertForSequenceClassification"),tk=c(),We=r("div"),v(mc.$$.fragment),Rz=c(),Tg=r("p"),Vz=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Qz=c(),fc=r("p"),Kz=n("This model inherits from "),ph=r("a"),Jz=n("FlaxPreTrainedModel"),Gz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xz=c(),uc=r("p"),Yz=n("This model is also a Flax Linen "),gc=r("a"),Zz=n("flax.linen.Module"),e4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),t4=c(),wg=r("p"),o4=n("Finally, this model supports inherent JAX features such as:"),n4=c(),bo=r("ul"),$g=r("li"),_c=r("a"),s4=n("Just-In-Time (JIT) compilation"),r4=c(),xg=r("li"),bc=r("a"),a4=n("Automatic Differentiation"),i4=c(),Fg=r("li"),kc=r("a"),l4=n("Vectorization"),d4=c(),Bg=r("li"),yc=r("a"),c4=n("Parallelization"),p4=c(),Yt=r("div"),v(vc.$$.fragment),h4=c(),Gn=r("p"),m4=n("The "),Mg=r("code"),f4=n("FlaxBertPreTrainedModel"),u4=n(" forward method, overrides the "),Eg=r("code"),g4=n("__call__"),_4=n(" special method."),b4=c(),v(Gr.$$.fragment),k4=c(),v(Xr.$$.fragment),ok=c(),Xn=r("h2"),Yr=r("a"),zg=r("span"),v(Tc.$$.fragment),y4=c(),Pg=r("span"),v4=n("FlaxBertForMultipleChoice"),nk=c(),He=r("div"),v(wc.$$.fragment),T4=c(),qg=r("p"),w4=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$4=c(),$c=r("p"),x4=n("This model inherits from "),hh=r("a"),F4=n("FlaxPreTrainedModel"),B4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),M4=c(),xc=r("p"),E4=n("This model is also a Flax Linen "),Fc=r("a"),z4=n("flax.linen.Module"),P4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),q4=c(),jg=r("p"),j4=n("Finally, this model supports inherent JAX features such as:"),C4=c(),ko=r("ul"),Cg=r("li"),Bc=r("a"),N4=n("Just-In-Time (JIT) compilation"),O4=c(),Ng=r("li"),Mc=r("a"),A4=n("Automatic Differentiation"),I4=c(),Og=r("li"),Ec=r("a"),L4=n("Vectorization"),D4=c(),Ag=r("li"),zc=r("a"),S4=n("Parallelization"),U4=c(),Zt=r("div"),v(Pc.$$.fragment),W4=c(),Yn=r("p"),H4=n("The "),Ig=r("code"),R4=n("FlaxBertPreTrainedModel"),V4=n(" forward method, overrides the "),Lg=r("code"),Q4=n("__call__"),K4=n(" special method."),J4=c(),v(Zr.$$.fragment),G4=c(),v(ea.$$.fragment),sk=c(),Zn=r("h2"),ta=r("a"),Dg=r("span"),v(qc.$$.fragment),X4=c(),Sg=r("span"),Y4=n("FlaxBertForTokenClassification"),rk=c(),Re=r("div"),v(jc.$$.fragment),Z4=c(),Ug=r("p"),eP=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tP=c(),Cc=r("p"),oP=n("This model inherits from "),mh=r("a"),nP=n("FlaxPreTrainedModel"),sP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rP=c(),Nc=r("p"),aP=n("This model is also a Flax Linen "),Oc=r("a"),iP=n("flax.linen.Module"),lP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dP=c(),Wg=r("p"),cP=n("Finally, this model supports inherent JAX features such as:"),pP=c(),yo=r("ul"),Hg=r("li"),Ac=r("a"),hP=n("Just-In-Time (JIT) compilation"),mP=c(),Rg=r("li"),Ic=r("a"),fP=n("Automatic Differentiation"),uP=c(),Vg=r("li"),Lc=r("a"),gP=n("Vectorization"),_P=c(),Qg=r("li"),Dc=r("a"),bP=n("Parallelization"),kP=c(),eo=r("div"),v(Sc.$$.fragment),yP=c(),es=r("p"),vP=n("The "),Kg=r("code"),TP=n("FlaxBertPreTrainedModel"),wP=n(" forward method, overrides the "),Jg=r("code"),$P=n("__call__"),xP=n(" special method."),FP=c(),v(oa.$$.fragment),BP=c(),v(na.$$.fragment),ak=c(),ts=r("h2"),sa=r("a"),Gg=r("span"),v(Uc.$$.fragment),MP=c(),Xg=r("span"),EP=n("FlaxBertForQuestionAnswering"),ik=c(),Ve=r("div"),v(Wc.$$.fragment),zP=c(),os=r("p"),PP=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yg=r("code"),qP=n("span start logits"),jP=n(" and "),Zg=r("code"),CP=n("span end logits"),NP=n(")."),OP=c(),Hc=r("p"),AP=n("This model inherits from "),fh=r("a"),IP=n("FlaxPreTrainedModel"),LP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),DP=c(),Rc=r("p"),SP=n("This model is also a Flax Linen "),Vc=r("a"),UP=n("flax.linen.Module"),WP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),HP=c(),e_=r("p"),RP=n("Finally, this model supports inherent JAX features such as:"),VP=c(),vo=r("ul"),t_=r("li"),Qc=r("a"),QP=n("Just-In-Time (JIT) compilation"),KP=c(),o_=r("li"),Kc=r("a"),JP=n("Automatic Differentiation"),GP=c(),n_=r("li"),Jc=r("a"),XP=n("Vectorization"),YP=c(),s_=r("li"),Gc=r("a"),ZP=n("Parallelization"),e8=c(),to=r("div"),v(Xc.$$.fragment),t8=c(),ns=r("p"),o8=n("The "),r_=r("code"),n8=n("FlaxBertPreTrainedModel"),s8=n(" forward method, overrides the "),a_=r("code"),r8=n("__call__"),a8=n(" special method."),i8=c(),v(ra.$$.fragment),l8=c(),v(aa.$$.fragment),this.h()},l(o){const k=q5('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),h=a(o,"H1",{class:!0});var Yc=i(h);m=a(Yc,"A",{id:!0,class:!0,href:!0});var i_=i(m);g=a(i_,"SPAN",{});var l_=i(g);T(l.$$.fragment,l_),l_.forEach(t),i_.forEach(t),f=p(Yc),M=a(Yc,"SPAN",{});var d_=i(M);be=s(d_,"BERT"),d_.forEach(t),Yc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var Zc=i(z);ee=a(Zc,"A",{id:!0,class:!0,href:!0});var c_=i(ee);L=a(c_,"SPAN",{});var p_=i(L);T(re.$$.fragment,p_),p_.forEach(t),c_.forEach(t),ke=p(Zc),D=a(Zc,"SPAN",{});var h_=i(D);ye=s(h_,"Overview"),h_.forEach(t),Zc.forEach(t),me=p(o),J=a(o,"P",{});var ep=i(J);O=s(ep,"The BERT model was proposed in "),ae=a(ep,"A",{href:!0,rel:!0});var m_=i(ae);Y=s(m_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),m_.forEach(t),P=s(ep,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),ep.forEach(t),j=p(o),ie=a(o,"P",{});var f_=i(ie);H=s(f_,"The abstract from the paper is the following:"),f_.forEach(t),fe=p(o),le=a(o,"P",{});var u_=i(le);S=a(u_,"EM",{});var g_=i(S);ve=s(g_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),g_.forEach(t),u_.forEach(t),ue=p(o),q=a(o,"P",{});var __=i(q);ce=a(__,"EM",{});var b_=i(ce);R=s(b_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),b_.forEach(t),__.forEach(t),ge=p(o),de=a(o,"P",{});var k_=i(de);V=s(k_,"Tips:"),k_.forEach(t),_e=p(o),te=a(o,"UL",{});var tp=i(te);N=a(tp,"LI",{});var y_=i(N);Te=s(y_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),y_.forEach(t),Q=p(tp),pe=a(tp,"LI",{});var v_=i(pe);y=s(v_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),v_.forEach(t),tp.forEach(t),E=p(o),K=a(o,"P",{});var ss=i(K);ze=s(ss,"This model was contributed by "),Be=a(ss,"A",{href:!0,rel:!0});var T_=i(Be);A=s(T_,"thomwolf"),T_.forEach(t),Pe=s(ss,". The original code can be found "),Me=a(ss,"A",{href:!0,rel:!0});var w_=i(Me);qe=s(w_,"here"),w_.forEach(t),I=s(ss,"."),ss.forEach(t),W=p(o),$e=a(o,"H2",{class:!0});var op=i($e);Fe=a(op,"A",{id:!0,class:!0,href:!0});var $_=i(Fe);U=a($_,"SPAN",{});var x_=i(U);T(Ee.$$.fragment,x_),x_.forEach(t),$_.forEach(t),je=p(op),he=a(op,"SPAN",{});var F_=i(he);Ce=s(F_,"BertConfig"),F_.forEach(t),op.forEach(t),Z_=p(o),Ct=a(o,"DIV",{class:!0});var To=i(Ct);T(Na.$$.fragment,To),Zy=p(To),po=a(To,"P",{});var wo=i(po);ev=s(wo,"This is the configuration class to store the configuration of a "),hp=a(wo,"A",{href:!0});var B_=i(hp);tv=s(B_,"BertModel"),B_.forEach(t),ov=s(wo," or a "),mp=a(wo,"A",{href:!0});var M_=i(mp);nv=s(M_,"TFBertModel"),M_.forEach(t),sv=s(wo,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Oa=a(wo,"A",{href:!0,rel:!0});var E_=i(Oa);rv=s(E_,"bert-base-uncased"),E_.forEach(t),av=s(wo," architecture."),wo.forEach(t),iv=p(To),Wo=a(To,"P",{});var rs=i(Wo);lv=s(rs,"Configuration objects inherit from "),fp=a(rs,"A",{href:!0});var z_=i(fp);dv=s(z_,"PretrainedConfig"),z_.forEach(t),cv=s(rs,` and can be used to control the model outputs. Read the
documentation from `),up=a(rs,"A",{href:!0});var P_=i(up);pv=s(P_,"PretrainedConfig"),P_.forEach(t),hv=s(rs," for more information."),rs.forEach(t),mv=p(To),T(ds.$$.fragment,To),To.forEach(t),eb=p(o),Ho=a(o,"H2",{class:!0});var np=i(Ho);cs=a(np,"A",{id:!0,class:!0,href:!0});var q_=i(cs);Zh=a(q_,"SPAN",{});var j_=i(Zh);T(Aa.$$.fragment,j_),j_.forEach(t),q_.forEach(t),fv=p(np),em=a(np,"SPAN",{});var C_=i(em);uv=s(C_,"BertTokenizer"),C_.forEach(t),np.forEach(t),tb=p(o),Ne=a(o,"DIV",{class:!0});var nt=i(Ne);T(Ia.$$.fragment,nt),gv=p(nt),tm=a(nt,"P",{});var N_=i(tm);_v=s(N_,"Construct a BERT tokenizer. Based on WordPiece."),N_.forEach(t),bv=p(nt),La=a(nt,"P",{});var sp=i(La);kv=s(sp,"This tokenizer inherits from "),gp=a(sp,"A",{href:!0});var O_=i(gp);yv=s(O_,"PreTrainedTokenizer"),O_.forEach(t),vv=s(sp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),sp.forEach(t),Tv=p(nt),xo=a(nt,"DIV",{class:!0});var as=i(xo);T(Da.$$.fragment,as),wv=p(as),om=a(as,"P",{});var A_=i(om);$v=s(A_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),A_.forEach(t),xv=p(as),Sa=a(as,"UL",{});var rp=i(Sa);_p=a(rp,"LI",{});var uh=i(_p);Fv=s(uh,"single sequence: "),nm=a(uh,"CODE",{});var I_=i(nm);Bv=s(I_,"[CLS] X [SEP]"),I_.forEach(t),uh.forEach(t),Mv=p(rp),bp=a(rp,"LI",{});var gh=i(bp);Ev=s(gh,"pair of sequences: "),sm=a(gh,"CODE",{});var L_=i(sm);zv=s(L_,"[CLS] A [SEP] B [SEP]"),L_.forEach(t),gh.forEach(t),rp.forEach(t),as.forEach(t),Pv=p(nt),ps=a(nt,"DIV",{class:!0});var ap=i(ps);T(Ua.$$.fragment,ap),qv=p(ap),Wa=a(ap,"P",{});var ip=i(Wa);jv=s(ip,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rm=a(ip,"CODE",{});var D_=i(rm);Cv=s(D_,"prepare_for_model"),D_.forEach(t),Nv=s(ip," method."),ip.forEach(t),ap.forEach(t),Ov=p(nt),Ot=a(nt,"DIV",{class:!0});var $o=i(Ot);T(Ha.$$.fragment,$o),Av=p($o),am=a($o,"P",{});var S_=i(am);Iv=s(S_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),S_.forEach(t),Lv=p($o),T(hs.$$.fragment,$o),Dv=p($o),Ro=a($o,"P",{});var is=i(Ro);Sv=s(is,"If "),im=a(is,"CODE",{});var U_=i(im);Uv=s(U_,"token_ids_1"),U_.forEach(t),Wv=s(is," is "),lm=a(is,"CODE",{});var W_=i(lm);Hv=s(W_,"None"),W_.forEach(t),Rv=s(is,", this method only returns the first portion of the mask (0s)."),is.forEach(t),$o.forEach(t),Vv=p(nt),kp=a(nt,"DIV",{class:!0});var H_=i(kp);T(Ra.$$.fragment,H_),H_.forEach(t),nt.forEach(t),ob=p(o),Vo=a(o,"H2",{class:!0});var lp=i(Vo);ms=a(lp,"A",{id:!0,class:!0,href:!0});var R_=i(ms);dm=a(R_,"SPAN",{});var V_=i(dm);T(Va.$$.fragment,V_),V_.forEach(t),R_.forEach(t),Qv=p(lp),cm=a(lp,"SPAN",{});var Q_=i(cm);Kv=s(Q_,"BertTokenizerFast"),Q_.forEach(t),lp.forEach(t),nb=p(o),rt=a(o,"DIV",{class:!0});var Nt=i(rt);T(Qa.$$.fragment,Nt),Jv=p(Nt),Ka=a(Nt,"P",{});var dp=i(Ka);Gv=s(dp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),pm=a(dp,"EM",{});var K_=i(pm);Xv=s(K_,"tokenizers"),K_.forEach(t),Yv=s(dp," library). Based on WordPiece."),dp.forEach(t),Zv=p(Nt),Ja=a(Nt,"P",{});var cp=i(Ja);eT=s(cp,"This tokenizer inherits from "),yp=a(cp,"A",{href:!0});var J_=i(yp);tT=s(J_,"PreTrainedTokenizerFast"),J_.forEach(t),oT=s(cp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cp.forEach(t),nT=p(Nt),Fo=a(Nt,"DIV",{class:!0});var ls=i(Fo);T(Ga.$$.fragment,ls),sT=p(ls),hm=a(ls,"P",{});var G_=i(hm);rT=s(G_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),G_.forEach(t),aT=p(ls),Xa=a(ls,"UL",{});var pp=i(Xa);vp=a(pp,"LI",{});var _h=i(vp);iT=s(_h,"single sequence: "),mm=a(_h,"CODE",{});var X_=i(mm);lT=s(X_,"[CLS] X [SEP]"),X_.forEach(t),_h.forEach(t),dT=p(pp),Tp=a(pp,"LI",{});var bh=i(Tp);cT=s(bh,"pair of sequences: "),fm=a(bh,"CODE",{});var Y_=i(fm);pT=s(Y_,"[CLS] A [SEP] B [SEP]"),Y_.forEach(t),bh.forEach(t),pp.forEach(t),ls.forEach(t),hT=p(Nt),At=a(Nt,"DIV",{class:!0});var ia=i(At);T(Ya.$$.fragment,ia),mT=p(ia),um=a(ia,"P",{});var d8=i(um);fT=s(d8,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),d8.forEach(t),uT=p(ia),T(fs.$$.fragment,ia),gT=p(ia),Qo=a(ia,"P",{});var kh=i(Qo);_T=s(kh,"If "),gm=a(kh,"CODE",{});var c8=i(gm);bT=s(c8,"token_ids_1"),c8.forEach(t),kT=s(kh," is "),_m=a(kh,"CODE",{});var p8=i(_m);yT=s(p8,"None"),p8.forEach(t),vT=s(kh,", this method only returns the first portion of the mask (0s)."),kh.forEach(t),ia.forEach(t),Nt.forEach(t),sb=p(o),Ko=a(o,"H2",{class:!0});var dk=i(Ko);us=a(dk,"A",{id:!0,class:!0,href:!0});var h8=i(us);bm=a(h8,"SPAN",{});var m8=i(bm);T(Za.$$.fragment,m8),m8.forEach(t),h8.forEach(t),TT=p(dk),km=a(dk,"SPAN",{});var f8=i(km);wT=s(f8,"Bert specific outputs"),f8.forEach(t),dk.forEach(t),rb=p(o),Jo=a(o,"DIV",{class:!0});var ck=i(Jo);T(ei.$$.fragment,ck),$T=p(ck),ti=a(ck,"P",{});var pk=i(ti);xT=s(pk,"Output type of "),wp=a(pk,"A",{href:!0});var u8=i(wp);FT=s(u8,"BertForPreTraining"),u8.forEach(t),BT=s(pk,"."),pk.forEach(t),ck.forEach(t),ab=p(o),Go=a(o,"DIV",{class:!0});var hk=i(Go);T(oi.$$.fragment,hk),MT=p(hk),ni=a(hk,"P",{});var mk=i(ni);ET=s(mk,"Output type of "),$p=a(mk,"A",{href:!0});var g8=i($p);zT=s(g8,"TFBertForPreTraining"),g8.forEach(t),PT=s(mk,"."),mk.forEach(t),hk.forEach(t),ib=p(o),ho=a(o,"DIV",{class:!0});var yh=i(ho);T(si.$$.fragment,yh),qT=p(yh),ri=a(yh,"P",{});var fk=i(ri);jT=s(fk,"Output type of "),xp=a(fk,"A",{href:!0});var _8=i(xp);CT=s(_8,"BertForPreTraining"),_8.forEach(t),NT=s(fk,"."),fk.forEach(t),OT=p(yh),gs=a(yh,"DIV",{class:!0});var uk=i(gs);T(ai.$$.fragment,uk),AT=p(uk),ym=a(uk,"P",{});var b8=i(ym);IT=s(b8,"\u201CReturns a new object replacing the specified fields with new values."),b8.forEach(t),uk.forEach(t),yh.forEach(t),lb=p(o),Xo=a(o,"H2",{class:!0});var gk=i(Xo);_s=a(gk,"A",{id:!0,class:!0,href:!0});var k8=i(_s);vm=a(k8,"SPAN",{});var y8=i(vm);T(ii.$$.fragment,y8),y8.forEach(t),k8.forEach(t),LT=p(gk),Tm=a(gk,"SPAN",{});var v8=i(Tm);DT=s(v8,"BertModel"),v8.forEach(t),gk.forEach(t),db=p(o),Oe=a(o,"DIV",{class:!0});var Tt=i(Oe);T(li.$$.fragment,Tt),ST=p(Tt),wm=a(Tt,"P",{});var T8=i(wm);UT=s(T8,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),T8.forEach(t),WT=p(Tt),di=a(Tt,"P",{});var _k=i(di);HT=s(_k,"This model inherits from "),Fp=a(_k,"A",{href:!0});var w8=i(Fp);RT=s(w8,"PreTrainedModel"),w8.forEach(t),VT=s(_k,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_k.forEach(t),QT=p(Tt),ci=a(Tt,"P",{});var bk=i(ci);KT=s(bk,"This model is also a PyTorch "),pi=a(bk,"A",{href:!0,rel:!0});var $8=i(pi);JT=s($8,"torch.nn.Module"),$8.forEach(t),GT=s(bk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bk.forEach(t),XT=p(Tt),hi=a(Tt,"P",{});var kk=i(hi);YT=s(kk,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),mi=a(kk,"A",{href:!0,rel:!0});var x8=i(mi);ZT=s(x8,`Attention is
all you need`),x8.forEach(t),e1=s(kk,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),kk.forEach(t),t1=p(Tt),Ke=a(Tt,"P",{});var wt=i(Ke);o1=s(wt,"To behave as an decoder the model needs to be initialized with the "),$m=a(wt,"CODE",{});var F8=i($m);n1=s(F8,"is_decoder"),F8.forEach(t),s1=s(wt,` argument of the configuration set
to `),xm=a(wt,"CODE",{});var B8=i(xm);r1=s(B8,"True"),B8.forEach(t),a1=s(wt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Fm=a(wt,"CODE",{});var M8=i(Fm);i1=s(M8,"is_decoder"),M8.forEach(t),l1=s(wt,` argument and
`),Bm=a(wt,"CODE",{});var E8=i(Bm);d1=s(E8,"add_cross_attention"),E8.forEach(t),c1=s(wt," set to "),Mm=a(wt,"CODE",{});var z8=i(Mm);p1=s(z8,"True"),z8.forEach(t),h1=s(wt,"; an "),Em=a(wt,"CODE",{});var P8=i(Em);m1=s(P8,"encoder_hidden_states"),P8.forEach(t),f1=s(wt," is then expected as an input to the forward pass."),wt.forEach(t),u1=p(Tt),It=a(Tt,"DIV",{class:!0});var la=i(It);T(fi.$$.fragment,la),g1=p(la),Yo=a(la,"P",{});var vh=i(Yo);_1=s(vh,"The "),Bp=a(vh,"A",{href:!0});var q8=i(Bp);b1=s(q8,"BertModel"),q8.forEach(t),k1=s(vh," forward method, overrides the "),zm=a(vh,"CODE",{});var j8=i(zm);y1=s(j8,"__call__"),j8.forEach(t),v1=s(vh," special method."),vh.forEach(t),T1=p(la),T(bs.$$.fragment,la),w1=p(la),T(ks.$$.fragment,la),la.forEach(t),Tt.forEach(t),cb=p(o),Zo=a(o,"H2",{class:!0});var yk=i(Zo);ys=a(yk,"A",{id:!0,class:!0,href:!0});var C8=i(ys);Pm=a(C8,"SPAN",{});var N8=i(Pm);T(ui.$$.fragment,N8),N8.forEach(t),C8.forEach(t),$1=p(yk),qm=a(yk,"SPAN",{});var O8=i(qm);x1=s(O8,"BertForPreTraining"),O8.forEach(t),yk.forEach(t),pb=p(o),at=a(o,"DIV",{class:!0});var Bo=i(at);T(gi.$$.fragment,Bo),F1=p(Bo),en=a(Bo,"P",{});var Th=i(en);B1=s(Th,"Bert Model with two heads on top as done during the pretraining: a "),jm=a(Th,"CODE",{});var A8=i(jm);M1=s(A8,"masked language modeling"),A8.forEach(t),E1=s(Th," head and a "),Cm=a(Th,"CODE",{});var I8=i(Cm);z1=s(I8,"next sentence prediction (classification)"),I8.forEach(t),P1=s(Th," head."),Th.forEach(t),q1=p(Bo),_i=a(Bo,"P",{});var vk=i(_i);j1=s(vk,"This model inherits from "),Mp=a(vk,"A",{href:!0});var L8=i(Mp);C1=s(L8,"PreTrainedModel"),L8.forEach(t),N1=s(vk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vk.forEach(t),O1=p(Bo),bi=a(Bo,"P",{});var Tk=i(bi);A1=s(Tk,"This model is also a PyTorch "),ki=a(Tk,"A",{href:!0,rel:!0});var D8=i(ki);I1=s(D8,"torch.nn.Module"),D8.forEach(t),L1=s(Tk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tk.forEach(t),D1=p(Bo),Lt=a(Bo,"DIV",{class:!0});var da=i(Lt);T(yi.$$.fragment,da),S1=p(da),tn=a(da,"P",{});var wh=i(tn);U1=s(wh,"The "),Ep=a(wh,"A",{href:!0});var S8=i(Ep);W1=s(S8,"BertForPreTraining"),S8.forEach(t),H1=s(wh," forward method, overrides the "),Nm=a(wh,"CODE",{});var U8=i(Nm);R1=s(U8,"__call__"),U8.forEach(t),V1=s(wh," special method."),wh.forEach(t),Q1=p(da),T(vs.$$.fragment,da),K1=p(da),T(Ts.$$.fragment,da),da.forEach(t),Bo.forEach(t),hb=p(o),on=a(o,"H2",{class:!0});var wk=i(on);ws=a(wk,"A",{id:!0,class:!0,href:!0});var W8=i(ws);Om=a(W8,"SPAN",{});var H8=i(Om);T(vi.$$.fragment,H8),H8.forEach(t),W8.forEach(t),J1=p(wk),Am=a(wk,"SPAN",{});var R8=i(Am);G1=s(R8,"BertLMHeadModel"),R8.forEach(t),wk.forEach(t),mb=p(o),it=a(o,"DIV",{class:!0});var Mo=i(it);T(Ti.$$.fragment,Mo),X1=p(Mo),wi=a(Mo,"P",{});var $k=i(wi);Y1=s($k,"Bert Model with a "),Im=a($k,"CODE",{});var V8=i(Im);Z1=s(V8,"language modeling"),V8.forEach(t),ew=s($k," head on top for CLM fine-tuning."),$k.forEach(t),tw=p(Mo),$i=a(Mo,"P",{});var xk=i($i);ow=s(xk,"This model inherits from "),zp=a(xk,"A",{href:!0});var Q8=i(zp);nw=s(Q8,"PreTrainedModel"),Q8.forEach(t),sw=s(xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xk.forEach(t),rw=p(Mo),xi=a(Mo,"P",{});var Fk=i(xi);aw=s(Fk,"This model is also a PyTorch "),Fi=a(Fk,"A",{href:!0,rel:!0});var K8=i(Fi);iw=s(K8,"torch.nn.Module"),K8.forEach(t),lw=s(Fk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fk.forEach(t),dw=p(Mo),Dt=a(Mo,"DIV",{class:!0});var ca=i(Dt);T(Bi.$$.fragment,ca),cw=p(ca),nn=a(ca,"P",{});var $h=i(nn);pw=s($h,"The "),Pp=a($h,"A",{href:!0});var J8=i(Pp);hw=s(J8,"BertLMHeadModel"),J8.forEach(t),mw=s($h," forward method, overrides the "),Lm=a($h,"CODE",{});var G8=i(Lm);fw=s(G8,"__call__"),G8.forEach(t),uw=s($h," special method."),$h.forEach(t),gw=p(ca),T($s.$$.fragment,ca),_w=p(ca),T(xs.$$.fragment,ca),ca.forEach(t),Mo.forEach(t),fb=p(o),sn=a(o,"H2",{class:!0});var Bk=i(sn);Fs=a(Bk,"A",{id:!0,class:!0,href:!0});var X8=i(Fs);Dm=a(X8,"SPAN",{});var Y8=i(Dm);T(Mi.$$.fragment,Y8),Y8.forEach(t),X8.forEach(t),bw=p(Bk),Sm=a(Bk,"SPAN",{});var Z8=i(Sm);kw=s(Z8,"BertForMaskedLM"),Z8.forEach(t),Bk.forEach(t),ub=p(o),lt=a(o,"DIV",{class:!0});var Eo=i(lt);T(Ei.$$.fragment,Eo),yw=p(Eo),zi=a(Eo,"P",{});var Mk=i(zi);vw=s(Mk,"Bert Model with a "),Um=a(Mk,"CODE",{});var eq=i(Um);Tw=s(eq,"language modeling"),eq.forEach(t),ww=s(Mk," head on top."),Mk.forEach(t),$w=p(Eo),Pi=a(Eo,"P",{});var Ek=i(Pi);xw=s(Ek,"This model inherits from "),qp=a(Ek,"A",{href:!0});var tq=i(qp);Fw=s(tq,"PreTrainedModel"),tq.forEach(t),Bw=s(Ek,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ek.forEach(t),Mw=p(Eo),qi=a(Eo,"P",{});var zk=i(qi);Ew=s(zk,"This model is also a PyTorch "),ji=a(zk,"A",{href:!0,rel:!0});var oq=i(ji);zw=s(oq,"torch.nn.Module"),oq.forEach(t),Pw=s(zk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zk.forEach(t),qw=p(Eo),ft=a(Eo,"DIV",{class:!0});var zo=i(ft);T(Ci.$$.fragment,zo),jw=p(zo),rn=a(zo,"P",{});var xh=i(rn);Cw=s(xh,"The "),jp=a(xh,"A",{href:!0});var nq=i(jp);Nw=s(nq,"BertForMaskedLM"),nq.forEach(t),Ow=s(xh," forward method, overrides the "),Wm=a(xh,"CODE",{});var sq=i(Wm);Aw=s(sq,"__call__"),sq.forEach(t),Iw=s(xh," special method."),xh.forEach(t),Lw=p(zo),T(Bs.$$.fragment,zo),Dw=p(zo),T(Ms.$$.fragment,zo),Sw=p(zo),T(Es.$$.fragment,zo),zo.forEach(t),Eo.forEach(t),gb=p(o),an=a(o,"H2",{class:!0});var Pk=i(an);zs=a(Pk,"A",{id:!0,class:!0,href:!0});var rq=i(zs);Hm=a(rq,"SPAN",{});var aq=i(Hm);T(Ni.$$.fragment,aq),aq.forEach(t),rq.forEach(t),Uw=p(Pk),Rm=a(Pk,"SPAN",{});var iq=i(Rm);Ww=s(iq,"BertForNextSentencePrediction"),iq.forEach(t),Pk.forEach(t),_b=p(o),dt=a(o,"DIV",{class:!0});var Po=i(dt);T(Oi.$$.fragment,Po),Hw=p(Po),Ai=a(Po,"P",{});var qk=i(Ai);Rw=s(qk,"Bert Model with a "),Vm=a(qk,"CODE",{});var lq=i(Vm);Vw=s(lq,"next sentence prediction (classification)"),lq.forEach(t),Qw=s(qk," head on top."),qk.forEach(t),Kw=p(Po),Ii=a(Po,"P",{});var jk=i(Ii);Jw=s(jk,"This model inherits from "),Cp=a(jk,"A",{href:!0});var dq=i(Cp);Gw=s(dq,"PreTrainedModel"),dq.forEach(t),Xw=s(jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk.forEach(t),Yw=p(Po),Li=a(Po,"P",{});var Ck=i(Li);Zw=s(Ck,"This model is also a PyTorch "),Di=a(Ck,"A",{href:!0,rel:!0});var cq=i(Di);e$=s(cq,"torch.nn.Module"),cq.forEach(t),t$=s(Ck,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ck.forEach(t),o$=p(Po),St=a(Po,"DIV",{class:!0});var pa=i(St);T(Si.$$.fragment,pa),n$=p(pa),ln=a(pa,"P",{});var Fh=i(ln);s$=s(Fh,"The "),Np=a(Fh,"A",{href:!0});var pq=i(Np);r$=s(pq,"BertForNextSentencePrediction"),pq.forEach(t),a$=s(Fh," forward method, overrides the "),Qm=a(Fh,"CODE",{});var hq=i(Qm);i$=s(hq,"__call__"),hq.forEach(t),l$=s(Fh," special method."),Fh.forEach(t),d$=p(pa),T(Ps.$$.fragment,pa),c$=p(pa),T(qs.$$.fragment,pa),pa.forEach(t),Po.forEach(t),bb=p(o),dn=a(o,"H2",{class:!0});var Nk=i(dn);js=a(Nk,"A",{id:!0,class:!0,href:!0});var mq=i(js);Km=a(mq,"SPAN",{});var fq=i(Km);T(Ui.$$.fragment,fq),fq.forEach(t),mq.forEach(t),p$=p(Nk),Jm=a(Nk,"SPAN",{});var uq=i(Jm);h$=s(uq,"BertForSequenceClassification"),uq.forEach(t),Nk.forEach(t),kb=p(o),ct=a(o,"DIV",{class:!0});var qo=i(ct);T(Wi.$$.fragment,qo),m$=p(qo),Gm=a(qo,"P",{});var gq=i(Gm);f$=s(gq,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),gq.forEach(t),u$=p(qo),Hi=a(qo,"P",{});var Ok=i(Hi);g$=s(Ok,"This model inherits from "),Op=a(Ok,"A",{href:!0});var _q=i(Op);_$=s(_q,"PreTrainedModel"),_q.forEach(t),b$=s(Ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok.forEach(t),k$=p(qo),Ri=a(qo,"P",{});var Ak=i(Ri);y$=s(Ak,"This model is also a PyTorch "),Vi=a(Ak,"A",{href:!0,rel:!0});var bq=i(Vi);v$=s(bq,"torch.nn.Module"),bq.forEach(t),T$=s(Ak,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ak.forEach(t),w$=p(qo),Qe=a(qo,"DIV",{class:!0});var $t=i(Qe);T(Qi.$$.fragment,$t),$$=p($t),cn=a($t,"P",{});var Bh=i(cn);x$=s(Bh,"The "),Ap=a(Bh,"A",{href:!0});var kq=i(Ap);F$=s(kq,"BertForSequenceClassification"),kq.forEach(t),B$=s(Bh," forward method, overrides the "),Xm=a(Bh,"CODE",{});var yq=i(Xm);M$=s(yq,"__call__"),yq.forEach(t),E$=s(Bh," special method."),Bh.forEach(t),z$=p($t),T(Cs.$$.fragment,$t),P$=p($t),T(Ns.$$.fragment,$t),q$=p($t),T(Os.$$.fragment,$t),j$=p($t),T(As.$$.fragment,$t),C$=p($t),T(Is.$$.fragment,$t),$t.forEach(t),qo.forEach(t),yb=p(o),pn=a(o,"H2",{class:!0});var Ik=i(pn);Ls=a(Ik,"A",{id:!0,class:!0,href:!0});var vq=i(Ls);Ym=a(vq,"SPAN",{});var Tq=i(Ym);T(Ki.$$.fragment,Tq),Tq.forEach(t),vq.forEach(t),N$=p(Ik),Zm=a(Ik,"SPAN",{});var wq=i(Zm);O$=s(wq,"BertForMultipleChoice"),wq.forEach(t),Ik.forEach(t),vb=p(o),pt=a(o,"DIV",{class:!0});var jo=i(pt);T(Ji.$$.fragment,jo),A$=p(jo),ef=a(jo,"P",{});var $q=i(ef);I$=s($q,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$q.forEach(t),L$=p(jo),Gi=a(jo,"P",{});var Lk=i(Gi);D$=s(Lk,"This model inherits from "),Ip=a(Lk,"A",{href:!0});var xq=i(Ip);S$=s(xq,"PreTrainedModel"),xq.forEach(t),U$=s(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk.forEach(t),W$=p(jo),Xi=a(jo,"P",{});var Dk=i(Xi);H$=s(Dk,"This model is also a PyTorch "),Yi=a(Dk,"A",{href:!0,rel:!0});var Fq=i(Yi);R$=s(Fq,"torch.nn.Module"),Fq.forEach(t),V$=s(Dk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dk.forEach(t),Q$=p(jo),Ut=a(jo,"DIV",{class:!0});var ha=i(Ut);T(Zi.$$.fragment,ha),K$=p(ha),hn=a(ha,"P",{});var Mh=i(hn);J$=s(Mh,"The "),Lp=a(Mh,"A",{href:!0});var Bq=i(Lp);G$=s(Bq,"BertForMultipleChoice"),Bq.forEach(t),X$=s(Mh," forward method, overrides the "),tf=a(Mh,"CODE",{});var Mq=i(tf);Y$=s(Mq,"__call__"),Mq.forEach(t),Z$=s(Mh," special method."),Mh.forEach(t),e0=p(ha),T(Ds.$$.fragment,ha),t0=p(ha),T(Ss.$$.fragment,ha),ha.forEach(t),jo.forEach(t),Tb=p(o),mn=a(o,"H2",{class:!0});var Sk=i(mn);Us=a(Sk,"A",{id:!0,class:!0,href:!0});var Eq=i(Us);of=a(Eq,"SPAN",{});var zq=i(of);T(el.$$.fragment,zq),zq.forEach(t),Eq.forEach(t),o0=p(Sk),nf=a(Sk,"SPAN",{});var Pq=i(nf);n0=s(Pq,"BertForTokenClassification"),Pq.forEach(t),Sk.forEach(t),wb=p(o),ht=a(o,"DIV",{class:!0});var Co=i(ht);T(tl.$$.fragment,Co),s0=p(Co),sf=a(Co,"P",{});var qq=i(sf);r0=s(qq,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),qq.forEach(t),a0=p(Co),ol=a(Co,"P",{});var Uk=i(ol);i0=s(Uk,"This model inherits from "),Dp=a(Uk,"A",{href:!0});var jq=i(Dp);l0=s(jq,"PreTrainedModel"),jq.forEach(t),d0=s(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uk.forEach(t),c0=p(Co),nl=a(Co,"P",{});var Wk=i(nl);p0=s(Wk,"This model is also a PyTorch "),sl=a(Wk,"A",{href:!0,rel:!0});var Cq=i(sl);h0=s(Cq,"torch.nn.Module"),Cq.forEach(t),m0=s(Wk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wk.forEach(t),f0=p(Co),ut=a(Co,"DIV",{class:!0});var No=i(ut);T(rl.$$.fragment,No),u0=p(No),fn=a(No,"P",{});var Eh=i(fn);g0=s(Eh,"The "),Sp=a(Eh,"A",{href:!0});var Nq=i(Sp);_0=s(Nq,"BertForTokenClassification"),Nq.forEach(t),b0=s(Eh," forward method, overrides the "),rf=a(Eh,"CODE",{});var Oq=i(rf);k0=s(Oq,"__call__"),Oq.forEach(t),y0=s(Eh," special method."),Eh.forEach(t),v0=p(No),T(Ws.$$.fragment,No),T0=p(No),T(Hs.$$.fragment,No),w0=p(No),T(Rs.$$.fragment,No),No.forEach(t),Co.forEach(t),$b=p(o),un=a(o,"H2",{class:!0});var Hk=i(un);Vs=a(Hk,"A",{id:!0,class:!0,href:!0});var Aq=i(Vs);af=a(Aq,"SPAN",{});var Iq=i(af);T(al.$$.fragment,Iq),Iq.forEach(t),Aq.forEach(t),$0=p(Hk),lf=a(Hk,"SPAN",{});var Lq=i(lf);x0=s(Lq,"BertForQuestionAnswering"),Lq.forEach(t),Hk.forEach(t),xb=p(o),mt=a(o,"DIV",{class:!0});var Oo=i(mt);T(il.$$.fragment,Oo),F0=p(Oo),gn=a(Oo,"P",{});var zh=i(gn);B0=s(zh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),df=a(zh,"CODE",{});var Dq=i(df);M0=s(Dq,"span start logits"),Dq.forEach(t),E0=s(zh," and "),cf=a(zh,"CODE",{});var Sq=i(cf);z0=s(Sq,"span end logits"),Sq.forEach(t),P0=s(zh,")."),zh.forEach(t),q0=p(Oo),ll=a(Oo,"P",{});var Rk=i(ll);j0=s(Rk,"This model inherits from "),Up=a(Rk,"A",{href:!0});var Uq=i(Up);C0=s(Uq,"PreTrainedModel"),Uq.forEach(t),N0=s(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rk.forEach(t),O0=p(Oo),dl=a(Oo,"P",{});var Vk=i(dl);A0=s(Vk,"This model is also a PyTorch "),cl=a(Vk,"A",{href:!0,rel:!0});var Wq=i(cl);I0=s(Wq,"torch.nn.Module"),Wq.forEach(t),L0=s(Vk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vk.forEach(t),D0=p(Oo),gt=a(Oo,"DIV",{class:!0});var Ao=i(gt);T(pl.$$.fragment,Ao),S0=p(Ao),_n=a(Ao,"P",{});var Ph=i(_n);U0=s(Ph,"The "),Wp=a(Ph,"A",{href:!0});var Hq=i(Wp);W0=s(Hq,"BertForQuestionAnswering"),Hq.forEach(t),H0=s(Ph," forward method, overrides the "),pf=a(Ph,"CODE",{});var Rq=i(pf);R0=s(Rq,"__call__"),Rq.forEach(t),V0=s(Ph," special method."),Ph.forEach(t),Q0=p(Ao),T(Qs.$$.fragment,Ao),K0=p(Ao),T(Ks.$$.fragment,Ao),J0=p(Ao),T(Js.$$.fragment,Ao),Ao.forEach(t),Oo.forEach(t),Fb=p(o),bn=a(o,"H2",{class:!0});var Qk=i(bn);Gs=a(Qk,"A",{id:!0,class:!0,href:!0});var Vq=i(Gs);hf=a(Vq,"SPAN",{});var Qq=i(hf);T(hl.$$.fragment,Qq),Qq.forEach(t),Vq.forEach(t),G0=p(Qk),mf=a(Qk,"SPAN",{});var Kq=i(mf);X0=s(Kq,"TFBertModel"),Kq.forEach(t),Qk.forEach(t),Bb=p(o),Je=a(o,"DIV",{class:!0});var oo=i(Je);T(ml.$$.fragment,oo),Y0=p(oo),ff=a(oo,"P",{});var Jq=i(ff);Z0=s(Jq,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Jq.forEach(t),e2=p(oo),fl=a(oo,"P",{});var Kk=i(fl);t2=s(Kk,"This model inherits from "),Hp=a(Kk,"A",{href:!0});var Gq=i(Hp);o2=s(Gq,"TFPreTrainedModel"),Gq.forEach(t),n2=s(Kk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk.forEach(t),s2=p(oo),ul=a(oo,"P",{});var Jk=i(ul);r2=s(Jk,"This model is also a "),gl=a(Jk,"A",{href:!0,rel:!0});var Xq=i(gl);a2=s(Xq,"tf.keras.Model"),Xq.forEach(t),i2=s(Jk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jk.forEach(t),l2=p(oo),T(Xs.$$.fragment,oo),d2=p(oo),Wt=a(oo,"DIV",{class:!0});var ma=i(Wt);T(_l.$$.fragment,ma),c2=p(ma),kn=a(ma,"P",{});var qh=i(kn);p2=s(qh,"The "),Rp=a(qh,"A",{href:!0});var Yq=i(Rp);h2=s(Yq,"TFBertModel"),Yq.forEach(t),m2=s(qh," forward method, overrides the "),uf=a(qh,"CODE",{});var Zq=i(uf);f2=s(Zq,"__call__"),Zq.forEach(t),u2=s(qh," special method."),qh.forEach(t),g2=p(ma),T(Ys.$$.fragment,ma),_2=p(ma),T(Zs.$$.fragment,ma),ma.forEach(t),oo.forEach(t),Mb=p(o),yn=a(o,"H2",{class:!0});var Gk=i(yn);er=a(Gk,"A",{id:!0,class:!0,href:!0});var ej=i(er);gf=a(ej,"SPAN",{});var tj=i(gf);T(bl.$$.fragment,tj),tj.forEach(t),ej.forEach(t),b2=p(Gk),_f=a(Gk,"SPAN",{});var oj=i(_f);k2=s(oj,"TFBertForPreTraining"),oj.forEach(t),Gk.forEach(t),Eb=p(o),Ge=a(o,"DIV",{class:!0});var no=i(Ge);T(kl.$$.fragment,no),y2=p(no),vn=a(no,"P",{});var jh=i(vn);v2=s(jh,`Bert Model with two heads on top as done during the pretraining:
a `),bf=a(jh,"CODE",{});var nj=i(bf);T2=s(nj,"masked language modeling"),nj.forEach(t),w2=s(jh," head and a "),kf=a(jh,"CODE",{});var sj=i(kf);$2=s(sj,"next sentence prediction (classification)"),sj.forEach(t),x2=s(jh," head."),jh.forEach(t),F2=p(no),yl=a(no,"P",{});var Xk=i(yl);B2=s(Xk,"This model inherits from "),Vp=a(Xk,"A",{href:!0});var rj=i(Vp);M2=s(rj,"TFPreTrainedModel"),rj.forEach(t),E2=s(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk.forEach(t),z2=p(no),vl=a(no,"P",{});var Yk=i(vl);P2=s(Yk,"This model is also a "),Tl=a(Yk,"A",{href:!0,rel:!0});var aj=i(Tl);q2=s(aj,"tf.keras.Model"),aj.forEach(t),j2=s(Yk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yk.forEach(t),C2=p(no),T(tr.$$.fragment,no),N2=p(no),Ht=a(no,"DIV",{class:!0});var fa=i(Ht);T(wl.$$.fragment,fa),O2=p(fa),Tn=a(fa,"P",{});var Ch=i(Tn);A2=s(Ch,"The "),Qp=a(Ch,"A",{href:!0});var ij=i(Qp);I2=s(ij,"TFBertForPreTraining"),ij.forEach(t),L2=s(Ch," forward method, overrides the "),yf=a(Ch,"CODE",{});var lj=i(yf);D2=s(lj,"__call__"),lj.forEach(t),S2=s(Ch," special method."),Ch.forEach(t),U2=p(fa),T(or.$$.fragment,fa),W2=p(fa),T(nr.$$.fragment,fa),fa.forEach(t),no.forEach(t),zb=p(o),wn=a(o,"H2",{class:!0});var Zk=i(wn);sr=a(Zk,"A",{id:!0,class:!0,href:!0});var dj=i(sr);vf=a(dj,"SPAN",{});var cj=i(vf);T($l.$$.fragment,cj),cj.forEach(t),dj.forEach(t),H2=p(Zk),Tf=a(Zk,"SPAN",{});var pj=i(Tf);R2=s(pj,"TFBertModelLMHeadModel"),pj.forEach(t),Zk.forEach(t),Pb=p(o),$n=a(o,"DIV",{class:!0});var ey=i($n);T(xl.$$.fragment,ey),V2=p(ey),_t=a(ey,"DIV",{class:!0});var Io=i(_t);T(Fl.$$.fragment,Io),Q2=p(Io),Ae=a(Io,"P",{});var st=i(Ae);K2=s(st,"encoder_hidden_states  ("),wf=a(st,"CODE",{});var hj=i(wf);J2=s(hj,"tf.Tensor"),hj.forEach(t),G2=s(st," of shape "),$f=a(st,"CODE",{});var mj=i($f);X2=s(mj,"(batch_size, sequence_length, hidden_size)"),mj.forEach(t),Y2=s(st,", "),xf=a(st,"EM",{});var fj=i(xf);Z2=s(fj,"optional"),fj.forEach(t),ex=s(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Ff=a(st,"CODE",{});var uj=i(Ff);tx=s(uj,"tf.Tensor"),uj.forEach(t),ox=s(st," of shape "),Bf=a(st,"CODE",{});var gj=i(Bf);nx=s(gj,"(batch_size, sequence_length)"),gj.forEach(t),sx=s(st,", "),Mf=a(st,"EM",{});var _j=i(Mf);rx=s(_j,"optional"),_j.forEach(t),ax=s(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Ef=a(st,"CODE",{});var bj=i(Ef);ix=s(bj,"[0, 1]"),bj.forEach(t),lx=s(st,":"),st.forEach(t),dx=p(Io),Bl=a(Io,"UL",{});var ty=i(Bl);Ml=a(ty,"LI",{});var oy=i(Ml);cx=s(oy,"1 for tokens that are "),zf=a(oy,"STRONG",{});var kj=i(zf);px=s(kj,"not masked"),kj.forEach(t),hx=s(oy,","),oy.forEach(t),mx=p(ty),El=a(ty,"LI",{});var ny=i(El);fx=s(ny,"0 for tokens that are "),Pf=a(ny,"STRONG",{});var yj=i(Pf);ux=s(yj,"masked"),yj.forEach(t),gx=s(ny,"."),ny.forEach(t),ty.forEach(t),_x=p(Io),G=a(Io,"P",{});var Z=i(G);bx=s(Z,"past_key_values ("),qf=a(Z,"CODE",{});var vj=i(qf);kx=s(vj,"Tuple[Tuple[tf.Tensor]]"),vj.forEach(t),yx=s(Z," of length "),jf=a(Z,"CODE",{});var Tj=i(jf);vx=s(Tj,"config.n_layers"),Tj.forEach(t),Tx=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Cf=a(Z,"CODE",{});var wj=i(Cf);wx=s(wj,"past_key_values"),wj.forEach(t),$x=s(Z," are used, the user can optionally input only the last "),Nf=a(Z,"CODE",{});var $j=i(Nf);xx=s($j,"decoder_input_ids"),$j.forEach(t),Fx=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),Of=a(Z,"CODE",{});var xj=i(Of);Bx=s(xj,"(batch_size, 1)"),xj.forEach(t),Mx=s(Z,` instead of all
`),Af=a(Z,"CODE",{});var Fj=i(Af);Ex=s(Fj,"decoder_input_ids"),Fj.forEach(t),zx=s(Z," of shape "),If=a(Z,"CODE",{});var Bj=i(If);Px=s(Bj,"(batch_size, sequence_length)"),Bj.forEach(t),qx=s(Z,`.
use_cache (`),Lf=a(Z,"CODE",{});var Mj=i(Lf);jx=s(Mj,"bool"),Mj.forEach(t),Cx=s(Z,", "),Df=a(Z,"EM",{});var Ej=i(Df);Nx=s(Ej,"optional"),Ej.forEach(t),Ox=s(Z,", defaults to "),Sf=a(Z,"CODE",{});var zj=i(Sf);Ax=s(zj,"True"),zj.forEach(t),Ix=s(Z,`):
If set to `),Uf=a(Z,"CODE",{});var Pj=i(Uf);Lx=s(Pj,"True"),Pj.forEach(t),Dx=s(Z,", "),Wf=a(Z,"CODE",{});var qj=i(Wf);Sx=s(qj,"past_key_values"),qj.forEach(t),Ux=s(Z,` key value states are returned and can be used to speed up decoding (see
`),Hf=a(Z,"CODE",{});var jj=i(Hf);Wx=s(jj,"past_key_values"),jj.forEach(t),Hx=s(Z,"). Set to "),Rf=a(Z,"CODE",{});var Cj=i(Rf);Rx=s(Cj,"False"),Cj.forEach(t),Vx=s(Z," during training, "),Vf=a(Z,"CODE",{});var Nj=i(Vf);Qx=s(Nj,"True"),Nj.forEach(t),Kx=s(Z,` during generation
labels (`),Qf=a(Z,"CODE",{});var Oj=i(Qf);Jx=s(Oj,"tf.Tensor"),Oj.forEach(t),Gx=s(Z," or "),Kf=a(Z,"CODE",{});var Aj=i(Kf);Xx=s(Aj,"np.ndarray"),Aj.forEach(t),Yx=s(Z," of shape "),Jf=a(Z,"CODE",{});var Ij=i(Jf);Zx=s(Ij,"(batch_size, sequence_length)"),Ij.forEach(t),eF=s(Z,", "),Gf=a(Z,"EM",{});var Lj=i(Gf);tF=s(Lj,"optional"),Lj.forEach(t),oF=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Xf=a(Z,"CODE",{});var Dj=i(Xf);nF=s(Dj,"[0, ..., config.vocab_size - 1]"),Dj.forEach(t),sF=s(Z,"."),Z.forEach(t),rF=p(Io),T(rr.$$.fragment,Io),Io.forEach(t),ey.forEach(t),qb=p(o),xn=a(o,"H2",{class:!0});var sy=i(xn);ar=a(sy,"A",{id:!0,class:!0,href:!0});var Sj=i(ar);Yf=a(Sj,"SPAN",{});var Uj=i(Yf);T(zl.$$.fragment,Uj),Uj.forEach(t),Sj.forEach(t),aF=p(sy),Zf=a(sy,"SPAN",{});var Wj=i(Zf);iF=s(Wj,"TFBertForMaskedLM"),Wj.forEach(t),sy.forEach(t),jb=p(o),Xe=a(o,"DIV",{class:!0});var so=i(Xe);T(Pl.$$.fragment,so),lF=p(so),ql=a(so,"P",{});var ry=i(ql);dF=s(ry,"Bert Model with a "),eu=a(ry,"CODE",{});var Hj=i(eu);cF=s(Hj,"language modeling"),Hj.forEach(t),pF=s(ry," head on top."),ry.forEach(t),hF=p(so),jl=a(so,"P",{});var ay=i(jl);mF=s(ay,"This model inherits from "),Kp=a(ay,"A",{href:!0});var Rj=i(Kp);fF=s(Rj,"TFPreTrainedModel"),Rj.forEach(t),uF=s(ay,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ay.forEach(t),gF=p(so),Cl=a(so,"P",{});var iy=i(Cl);_F=s(iy,"This model is also a "),Nl=a(iy,"A",{href:!0,rel:!0});var Vj=i(Nl);bF=s(Vj,"tf.keras.Model"),Vj.forEach(t),kF=s(iy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iy.forEach(t),yF=p(so),T(ir.$$.fragment,so),vF=p(so),bt=a(so,"DIV",{class:!0});var Lo=i(bt);T(Ol.$$.fragment,Lo),TF=p(Lo),Fn=a(Lo,"P",{});var Nh=i(Fn);wF=s(Nh,"The "),Jp=a(Nh,"A",{href:!0});var Qj=i(Jp);$F=s(Qj,"TFBertForMaskedLM"),Qj.forEach(t),xF=s(Nh," forward method, overrides the "),tu=a(Nh,"CODE",{});var Kj=i(tu);FF=s(Kj,"__call__"),Kj.forEach(t),BF=s(Nh," special method."),Nh.forEach(t),MF=p(Lo),T(lr.$$.fragment,Lo),EF=p(Lo),T(dr.$$.fragment,Lo),zF=p(Lo),T(cr.$$.fragment,Lo),Lo.forEach(t),so.forEach(t),Cb=p(o),Bn=a(o,"H2",{class:!0});var ly=i(Bn);pr=a(ly,"A",{id:!0,class:!0,href:!0});var Jj=i(pr);ou=a(Jj,"SPAN",{});var Gj=i(ou);T(Al.$$.fragment,Gj),Gj.forEach(t),Jj.forEach(t),PF=p(ly),nu=a(ly,"SPAN",{});var Xj=i(nu);qF=s(Xj,"TFBertForNextSentencePrediction"),Xj.forEach(t),ly.forEach(t),Nb=p(o),Ye=a(o,"DIV",{class:!0});var ro=i(Ye);T(Il.$$.fragment,ro),jF=p(ro),Ll=a(ro,"P",{});var dy=i(Ll);CF=s(dy,"Bert Model with a "),su=a(dy,"CODE",{});var Yj=i(su);NF=s(Yj,"next sentence prediction (classification)"),Yj.forEach(t),OF=s(dy," head on top."),dy.forEach(t),AF=p(ro),Dl=a(ro,"P",{});var cy=i(Dl);IF=s(cy,"This model inherits from "),Gp=a(cy,"A",{href:!0});var Zj=i(Gp);LF=s(Zj,"TFPreTrainedModel"),Zj.forEach(t),DF=s(cy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cy.forEach(t),SF=p(ro),Sl=a(ro,"P",{});var py=i(Sl);UF=s(py,"This model is also a "),Ul=a(py,"A",{href:!0,rel:!0});var eC=i(Ul);WF=s(eC,"tf.keras.Model"),eC.forEach(t),HF=s(py,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),py.forEach(t),RF=p(ro),T(hr.$$.fragment,ro),VF=p(ro),Rt=a(ro,"DIV",{class:!0});var ua=i(Rt);T(Wl.$$.fragment,ua),QF=p(ua),Mn=a(ua,"P",{});var Oh=i(Mn);KF=s(Oh,"The "),Xp=a(Oh,"A",{href:!0});var tC=i(Xp);JF=s(tC,"TFBertForNextSentencePrediction"),tC.forEach(t),GF=s(Oh," forward method, overrides the "),ru=a(Oh,"CODE",{});var oC=i(ru);XF=s(oC,"__call__"),oC.forEach(t),YF=s(Oh," special method."),Oh.forEach(t),ZF=p(ua),T(mr.$$.fragment,ua),e7=p(ua),T(fr.$$.fragment,ua),ua.forEach(t),ro.forEach(t),Ob=p(o),En=a(o,"H2",{class:!0});var hy=i(En);ur=a(hy,"A",{id:!0,class:!0,href:!0});var nC=i(ur);au=a(nC,"SPAN",{});var sC=i(au);T(Hl.$$.fragment,sC),sC.forEach(t),nC.forEach(t),t7=p(hy),iu=a(hy,"SPAN",{});var rC=i(iu);o7=s(rC,"TFBertForSequenceClassification"),rC.forEach(t),hy.forEach(t),Ab=p(o),Ze=a(o,"DIV",{class:!0});var ao=i(Ze);T(Rl.$$.fragment,ao),n7=p(ao),lu=a(ao,"P",{});var aC=i(lu);s7=s(aC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),aC.forEach(t),r7=p(ao),Vl=a(ao,"P",{});var my=i(Vl);a7=s(my,"This model inherits from "),Yp=a(my,"A",{href:!0});var iC=i(Yp);i7=s(iC,"TFPreTrainedModel"),iC.forEach(t),l7=s(my,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),my.forEach(t),d7=p(ao),Ql=a(ao,"P",{});var fy=i(Ql);c7=s(fy,"This model is also a "),Kl=a(fy,"A",{href:!0,rel:!0});var lC=i(Kl);p7=s(lC,"tf.keras.Model"),lC.forEach(t),h7=s(fy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fy.forEach(t),m7=p(ao),T(gr.$$.fragment,ao),f7=p(ao),kt=a(ao,"DIV",{class:!0});var Do=i(kt);T(Jl.$$.fragment,Do),u7=p(Do),zn=a(Do,"P",{});var Ah=i(zn);g7=s(Ah,"The "),Zp=a(Ah,"A",{href:!0});var dC=i(Zp);_7=s(dC,"TFBertForSequenceClassification"),dC.forEach(t),b7=s(Ah," forward method, overrides the "),du=a(Ah,"CODE",{});var cC=i(du);k7=s(cC,"__call__"),cC.forEach(t),y7=s(Ah," special method."),Ah.forEach(t),v7=p(Do),T(_r.$$.fragment,Do),T7=p(Do),T(br.$$.fragment,Do),w7=p(Do),T(kr.$$.fragment,Do),Do.forEach(t),ao.forEach(t),Ib=p(o),Pn=a(o,"H2",{class:!0});var uy=i(Pn);yr=a(uy,"A",{id:!0,class:!0,href:!0});var pC=i(yr);cu=a(pC,"SPAN",{});var hC=i(cu);T(Gl.$$.fragment,hC),hC.forEach(t),pC.forEach(t),$7=p(uy),pu=a(uy,"SPAN",{});var mC=i(pu);x7=s(mC,"TFBertForMultipleChoice"),mC.forEach(t),uy.forEach(t),Lb=p(o),et=a(o,"DIV",{class:!0});var io=i(et);T(Xl.$$.fragment,io),F7=p(io),hu=a(io,"P",{});var fC=i(hu);B7=s(fC,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),fC.forEach(t),M7=p(io),Yl=a(io,"P",{});var gy=i(Yl);E7=s(gy,"This model inherits from "),eh=a(gy,"A",{href:!0});var uC=i(eh);z7=s(uC,"TFPreTrainedModel"),uC.forEach(t),P7=s(gy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gy.forEach(t),q7=p(io),Zl=a(io,"P",{});var _y=i(Zl);j7=s(_y,"This model is also a "),ed=a(_y,"A",{href:!0,rel:!0});var gC=i(ed);C7=s(gC,"tf.keras.Model"),gC.forEach(t),N7=s(_y,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_y.forEach(t),O7=p(io),T(vr.$$.fragment,io),A7=p(io),Vt=a(io,"DIV",{class:!0});var ga=i(Vt);T(td.$$.fragment,ga),I7=p(ga),qn=a(ga,"P",{});var Ih=i(qn);L7=s(Ih,"The "),th=a(Ih,"A",{href:!0});var _C=i(th);D7=s(_C,"TFBertForMultipleChoice"),_C.forEach(t),S7=s(Ih," forward method, overrides the "),mu=a(Ih,"CODE",{});var bC=i(mu);U7=s(bC,"__call__"),bC.forEach(t),W7=s(Ih," special method."),Ih.forEach(t),H7=p(ga),T(Tr.$$.fragment,ga),R7=p(ga),T(wr.$$.fragment,ga),ga.forEach(t),io.forEach(t),Db=p(o),jn=a(o,"H2",{class:!0});var by=i(jn);$r=a(by,"A",{id:!0,class:!0,href:!0});var kC=i($r);fu=a(kC,"SPAN",{});var yC=i(fu);T(od.$$.fragment,yC),yC.forEach(t),kC.forEach(t),V7=p(by),uu=a(by,"SPAN",{});var vC=i(uu);Q7=s(vC,"TFBertForTokenClassification"),vC.forEach(t),by.forEach(t),Sb=p(o),tt=a(o,"DIV",{class:!0});var lo=i(tt);T(nd.$$.fragment,lo),K7=p(lo),gu=a(lo,"P",{});var TC=i(gu);J7=s(TC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),TC.forEach(t),G7=p(lo),sd=a(lo,"P",{});var ky=i(sd);X7=s(ky,"This model inherits from "),oh=a(ky,"A",{href:!0});var wC=i(oh);Y7=s(wC,"TFPreTrainedModel"),wC.forEach(t),Z7=s(ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky.forEach(t),eB=p(lo),rd=a(lo,"P",{});var yy=i(rd);tB=s(yy,"This model is also a "),ad=a(yy,"A",{href:!0,rel:!0});var $C=i(ad);oB=s($C,"tf.keras.Model"),$C.forEach(t),nB=s(yy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yy.forEach(t),sB=p(lo),T(xr.$$.fragment,lo),rB=p(lo),yt=a(lo,"DIV",{class:!0});var So=i(yt);T(id.$$.fragment,So),aB=p(So),Cn=a(So,"P",{});var Lh=i(Cn);iB=s(Lh,"The "),nh=a(Lh,"A",{href:!0});var xC=i(nh);lB=s(xC,"TFBertForTokenClassification"),xC.forEach(t),dB=s(Lh," forward method, overrides the "),_u=a(Lh,"CODE",{});var FC=i(_u);cB=s(FC,"__call__"),FC.forEach(t),pB=s(Lh," special method."),Lh.forEach(t),hB=p(So),T(Fr.$$.fragment,So),mB=p(So),T(Br.$$.fragment,So),fB=p(So),T(Mr.$$.fragment,So),So.forEach(t),lo.forEach(t),Ub=p(o),Nn=a(o,"H2",{class:!0});var vy=i(Nn);Er=a(vy,"A",{id:!0,class:!0,href:!0});var BC=i(Er);bu=a(BC,"SPAN",{});var MC=i(bu);T(ld.$$.fragment,MC),MC.forEach(t),BC.forEach(t),uB=p(vy),ku=a(vy,"SPAN",{});var EC=i(ku);gB=s(EC,"TFBertForQuestionAnswering"),EC.forEach(t),vy.forEach(t),Wb=p(o),ot=a(o,"DIV",{class:!0});var co=i(ot);T(dd.$$.fragment,co),_B=p(co),On=a(co,"P",{});var Dh=i(On);bB=s(Dh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yu=a(Dh,"CODE",{});var zC=i(yu);kB=s(zC,"span start logits"),zC.forEach(t),yB=s(Dh," and "),vu=a(Dh,"CODE",{});var PC=i(vu);vB=s(PC,"span end logits"),PC.forEach(t),TB=s(Dh,")."),Dh.forEach(t),wB=p(co),cd=a(co,"P",{});var Ty=i(cd);$B=s(Ty,"This model inherits from "),sh=a(Ty,"A",{href:!0});var qC=i(sh);xB=s(qC,"TFPreTrainedModel"),qC.forEach(t),FB=s(Ty,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ty.forEach(t),BB=p(co),pd=a(co,"P",{});var wy=i(pd);MB=s(wy,"This model is also a "),hd=a(wy,"A",{href:!0,rel:!0});var jC=i(hd);EB=s(jC,"tf.keras.Model"),jC.forEach(t),zB=s(wy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wy.forEach(t),PB=p(co),T(zr.$$.fragment,co),qB=p(co),vt=a(co,"DIV",{class:!0});var Uo=i(vt);T(md.$$.fragment,Uo),jB=p(Uo),An=a(Uo,"P",{});var Sh=i(An);CB=s(Sh,"The "),rh=a(Sh,"A",{href:!0});var CC=i(rh);NB=s(CC,"TFBertForQuestionAnswering"),CC.forEach(t),OB=s(Sh," forward method, overrides the "),Tu=a(Sh,"CODE",{});var NC=i(Tu);AB=s(NC,"__call__"),NC.forEach(t),IB=s(Sh," special method."),Sh.forEach(t),LB=p(Uo),T(Pr.$$.fragment,Uo),DB=p(Uo),T(qr.$$.fragment,Uo),SB=p(Uo),T(jr.$$.fragment,Uo),Uo.forEach(t),co.forEach(t),Hb=p(o),In=a(o,"H2",{class:!0});var $y=i(In);Cr=a($y,"A",{id:!0,class:!0,href:!0});var OC=i(Cr);wu=a(OC,"SPAN",{});var AC=i(wu);T(fd.$$.fragment,AC),AC.forEach(t),OC.forEach(t),UB=p($y),$u=a($y,"SPAN",{});var IC=i($u);WB=s(IC,"FlaxBertModel"),IC.forEach(t),$y.forEach(t),Rb=p(o),Ie=a(o,"DIV",{class:!0});var xt=i(Ie);T(ud.$$.fragment,xt),HB=p(xt),xu=a(xt,"P",{});var LC=i(xu);RB=s(LC,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),LC.forEach(t),VB=p(xt),gd=a(xt,"P",{});var xy=i(gd);QB=s(xy,"This model inherits from "),ah=a(xy,"A",{href:!0});var DC=i(ah);KB=s(DC,"FlaxPreTrainedModel"),DC.forEach(t),JB=s(xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xy.forEach(t),GB=p(xt),_d=a(xt,"P",{});var Fy=i(_d);XB=s(Fy,"This model is also a Flax Linen "),bd=a(Fy,"A",{href:!0,rel:!0});var SC=i(bd);YB=s(SC,"flax.linen.Module"),SC.forEach(t),ZB=s(Fy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fy.forEach(t),eM=p(xt),Fu=a(xt,"P",{});var UC=i(Fu);tM=s(UC,"Finally, this model supports inherent JAX features such as:"),UC.forEach(t),oM=p(xt),mo=a(xt,"UL",{});var _a=i(mo);Bu=a(_a,"LI",{});var WC=i(Bu);kd=a(WC,"A",{href:!0,rel:!0});var HC=i(kd);nM=s(HC,"Just-In-Time (JIT) compilation"),HC.forEach(t),WC.forEach(t),sM=p(_a),Mu=a(_a,"LI",{});var RC=i(Mu);yd=a(RC,"A",{href:!0,rel:!0});var VC=i(yd);rM=s(VC,"Automatic Differentiation"),VC.forEach(t),RC.forEach(t),aM=p(_a),Eu=a(_a,"LI",{});var QC=i(Eu);vd=a(QC,"A",{href:!0,rel:!0});var KC=i(vd);iM=s(KC,"Vectorization"),KC.forEach(t),QC.forEach(t),lM=p(_a),zu=a(_a,"LI",{});var JC=i(zu);Td=a(JC,"A",{href:!0,rel:!0});var GC=i(Td);dM=s(GC,"Parallelization"),GC.forEach(t),JC.forEach(t),_a.forEach(t),cM=p(xt),Qt=a(xt,"DIV",{class:!0});var ba=i(Qt);T(wd.$$.fragment,ba),pM=p(ba),Ln=a(ba,"P",{});var Uh=i(Ln);hM=s(Uh,"The "),Pu=a(Uh,"CODE",{});var XC=i(Pu);mM=s(XC,"FlaxBertPreTrainedModel"),XC.forEach(t),fM=s(Uh," forward method, overrides the "),qu=a(Uh,"CODE",{});var YC=i(qu);uM=s(YC,"__call__"),YC.forEach(t),gM=s(Uh," special method."),Uh.forEach(t),_M=p(ba),T(Nr.$$.fragment,ba),bM=p(ba),T(Or.$$.fragment,ba),ba.forEach(t),xt.forEach(t),Vb=p(o),Dn=a(o,"H2",{class:!0});var By=i(Dn);Ar=a(By,"A",{id:!0,class:!0,href:!0});var ZC=i(Ar);ju=a(ZC,"SPAN",{});var e3=i(ju);T($d.$$.fragment,e3),e3.forEach(t),ZC.forEach(t),kM=p(By),Cu=a(By,"SPAN",{});var t3=i(Cu);yM=s(t3,"FlaxBertForPreTraining"),t3.forEach(t),By.forEach(t),Qb=p(o),Le=a(o,"DIV",{class:!0});var Ft=i(Le);T(xd.$$.fragment,Ft),vM=p(Ft),Sn=a(Ft,"P",{});var Wh=i(Sn);TM=s(Wh,"Bert Model with two heads on top as done during the pretraining: a "),Nu=a(Wh,"CODE",{});var o3=i(Nu);wM=s(o3,"masked language modeling"),o3.forEach(t),$M=s(Wh," head and a "),Ou=a(Wh,"CODE",{});var n3=i(Ou);xM=s(n3,"next sentence prediction (classification)"),n3.forEach(t),FM=s(Wh," head."),Wh.forEach(t),BM=p(Ft),Fd=a(Ft,"P",{});var My=i(Fd);MM=s(My,"This model inherits from "),ih=a(My,"A",{href:!0});var s3=i(ih);EM=s(s3,"FlaxPreTrainedModel"),s3.forEach(t),zM=s(My,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),My.forEach(t),PM=p(Ft),Bd=a(Ft,"P",{});var Ey=i(Bd);qM=s(Ey,"This model is also a Flax Linen "),Md=a(Ey,"A",{href:!0,rel:!0});var r3=i(Md);jM=s(r3,"flax.linen.Module"),r3.forEach(t),CM=s(Ey,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ey.forEach(t),NM=p(Ft),Au=a(Ft,"P",{});var a3=i(Au);OM=s(a3,"Finally, this model supports inherent JAX features such as:"),a3.forEach(t),AM=p(Ft),fo=a(Ft,"UL",{});var ka=i(fo);Iu=a(ka,"LI",{});var i3=i(Iu);Ed=a(i3,"A",{href:!0,rel:!0});var l3=i(Ed);IM=s(l3,"Just-In-Time (JIT) compilation"),l3.forEach(t),i3.forEach(t),LM=p(ka),Lu=a(ka,"LI",{});var d3=i(Lu);zd=a(d3,"A",{href:!0,rel:!0});var c3=i(zd);DM=s(c3,"Automatic Differentiation"),c3.forEach(t),d3.forEach(t),SM=p(ka),Du=a(ka,"LI",{});var p3=i(Du);Pd=a(p3,"A",{href:!0,rel:!0});var h3=i(Pd);UM=s(h3,"Vectorization"),h3.forEach(t),p3.forEach(t),WM=p(ka),Su=a(ka,"LI",{});var m3=i(Su);qd=a(m3,"A",{href:!0,rel:!0});var f3=i(qd);HM=s(f3,"Parallelization"),f3.forEach(t),m3.forEach(t),ka.forEach(t),RM=p(Ft),Kt=a(Ft,"DIV",{class:!0});var ya=i(Kt);T(jd.$$.fragment,ya),VM=p(ya),Un=a(ya,"P",{});var Hh=i(Un);QM=s(Hh,"The "),Uu=a(Hh,"CODE",{});var u3=i(Uu);KM=s(u3,"FlaxBertPreTrainedModel"),u3.forEach(t),JM=s(Hh," forward method, overrides the "),Wu=a(Hh,"CODE",{});var g3=i(Wu);GM=s(g3,"__call__"),g3.forEach(t),XM=s(Hh," special method."),Hh.forEach(t),YM=p(ya),T(Ir.$$.fragment,ya),ZM=p(ya),T(Lr.$$.fragment,ya),ya.forEach(t),Ft.forEach(t),Kb=p(o),Wn=a(o,"H2",{class:!0});var zy=i(Wn);Dr=a(zy,"A",{id:!0,class:!0,href:!0});var _3=i(Dr);Hu=a(_3,"SPAN",{});var b3=i(Hu);T(Cd.$$.fragment,b3),b3.forEach(t),_3.forEach(t),eE=p(zy),Ru=a(zy,"SPAN",{});var k3=i(Ru);tE=s(k3,"FlaxBertForCausalLM"),k3.forEach(t),zy.forEach(t),Jb=p(o),De=a(o,"DIV",{class:!0});var Bt=i(De);T(Nd.$$.fragment,Bt),oE=p(Bt),Vu=a(Bt,"P",{});var y3=i(Vu);nE=s(y3,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),y3.forEach(t),sE=p(Bt),Od=a(Bt,"P",{});var Py=i(Od);rE=s(Py,"This model inherits from "),lh=a(Py,"A",{href:!0});var v3=i(lh);aE=s(v3,"FlaxPreTrainedModel"),v3.forEach(t),iE=s(Py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Py.forEach(t),lE=p(Bt),Ad=a(Bt,"P",{});var qy=i(Ad);dE=s(qy,"This model is also a Flax Linen "),Id=a(qy,"A",{href:!0,rel:!0});var T3=i(Id);cE=s(T3,"flax.linen.Module"),T3.forEach(t),pE=s(qy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qy.forEach(t),hE=p(Bt),Qu=a(Bt,"P",{});var w3=i(Qu);mE=s(w3,"Finally, this model supports inherent JAX features such as:"),w3.forEach(t),fE=p(Bt),uo=a(Bt,"UL",{});var va=i(uo);Ku=a(va,"LI",{});var $3=i(Ku);Ld=a($3,"A",{href:!0,rel:!0});var x3=i(Ld);uE=s(x3,"Just-In-Time (JIT) compilation"),x3.forEach(t),$3.forEach(t),gE=p(va),Ju=a(va,"LI",{});var F3=i(Ju);Dd=a(F3,"A",{href:!0,rel:!0});var B3=i(Dd);_E=s(B3,"Automatic Differentiation"),B3.forEach(t),F3.forEach(t),bE=p(va),Gu=a(va,"LI",{});var M3=i(Gu);Sd=a(M3,"A",{href:!0,rel:!0});var E3=i(Sd);kE=s(E3,"Vectorization"),E3.forEach(t),M3.forEach(t),yE=p(va),Xu=a(va,"LI",{});var z3=i(Xu);Ud=a(z3,"A",{href:!0,rel:!0});var P3=i(Ud);vE=s(P3,"Parallelization"),P3.forEach(t),z3.forEach(t),va.forEach(t),TE=p(Bt),Jt=a(Bt,"DIV",{class:!0});var Ta=i(Jt);T(Wd.$$.fragment,Ta),wE=p(Ta),Hn=a(Ta,"P",{});var Rh=i(Hn);$E=s(Rh,"The "),Yu=a(Rh,"CODE",{});var q3=i(Yu);xE=s(q3,"FlaxBertPreTrainedModel"),q3.forEach(t),FE=s(Rh," forward method, overrides the "),Zu=a(Rh,"CODE",{});var j3=i(Zu);BE=s(j3,"__call__"),j3.forEach(t),ME=s(Rh," special method."),Rh.forEach(t),EE=p(Ta),T(Sr.$$.fragment,Ta),zE=p(Ta),T(Ur.$$.fragment,Ta),Ta.forEach(t),Bt.forEach(t),Gb=p(o),Rn=a(o,"H2",{class:!0});var jy=i(Rn);Wr=a(jy,"A",{id:!0,class:!0,href:!0});var C3=i(Wr);eg=a(C3,"SPAN",{});var N3=i(eg);T(Hd.$$.fragment,N3),N3.forEach(t),C3.forEach(t),PE=p(jy),tg=a(jy,"SPAN",{});var O3=i(tg);qE=s(O3,"FlaxBertForMaskedLM"),O3.forEach(t),jy.forEach(t),Xb=p(o),Se=a(o,"DIV",{class:!0});var Mt=i(Se);T(Rd.$$.fragment,Mt),jE=p(Mt),Vd=a(Mt,"P",{});var Cy=i(Vd);CE=s(Cy,"Bert Model with a "),og=a(Cy,"CODE",{});var A3=i(og);NE=s(A3,"language modeling"),A3.forEach(t),OE=s(Cy," head on top."),Cy.forEach(t),AE=p(Mt),Qd=a(Mt,"P",{});var Ny=i(Qd);IE=s(Ny,"This model inherits from "),dh=a(Ny,"A",{href:!0});var I3=i(dh);LE=s(I3,"FlaxPreTrainedModel"),I3.forEach(t),DE=s(Ny,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ny.forEach(t),SE=p(Mt),Kd=a(Mt,"P",{});var Oy=i(Kd);UE=s(Oy,"This model is also a Flax Linen "),Jd=a(Oy,"A",{href:!0,rel:!0});var L3=i(Jd);WE=s(L3,"flax.linen.Module"),L3.forEach(t),HE=s(Oy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Oy.forEach(t),RE=p(Mt),ng=a(Mt,"P",{});var D3=i(ng);VE=s(D3,"Finally, this model supports inherent JAX features such as:"),D3.forEach(t),QE=p(Mt),go=a(Mt,"UL",{});var wa=i(go);sg=a(wa,"LI",{});var S3=i(sg);Gd=a(S3,"A",{href:!0,rel:!0});var U3=i(Gd);KE=s(U3,"Just-In-Time (JIT) compilation"),U3.forEach(t),S3.forEach(t),JE=p(wa),rg=a(wa,"LI",{});var W3=i(rg);Xd=a(W3,"A",{href:!0,rel:!0});var H3=i(Xd);GE=s(H3,"Automatic Differentiation"),H3.forEach(t),W3.forEach(t),XE=p(wa),ag=a(wa,"LI",{});var R3=i(ag);Yd=a(R3,"A",{href:!0,rel:!0});var V3=i(Yd);YE=s(V3,"Vectorization"),V3.forEach(t),R3.forEach(t),ZE=p(wa),ig=a(wa,"LI",{});var Q3=i(ig);Zd=a(Q3,"A",{href:!0,rel:!0});var K3=i(Zd);ez=s(K3,"Parallelization"),K3.forEach(t),Q3.forEach(t),wa.forEach(t),tz=p(Mt),Gt=a(Mt,"DIV",{class:!0});var $a=i(Gt);T(ec.$$.fragment,$a),oz=p($a),Vn=a($a,"P",{});var Vh=i(Vn);nz=s(Vh,"The "),lg=a(Vh,"CODE",{});var J3=i(lg);sz=s(J3,"FlaxBertPreTrainedModel"),J3.forEach(t),rz=s(Vh," forward method, overrides the "),dg=a(Vh,"CODE",{});var G3=i(dg);az=s(G3,"__call__"),G3.forEach(t),iz=s(Vh," special method."),Vh.forEach(t),lz=p($a),T(Hr.$$.fragment,$a),dz=p($a),T(Rr.$$.fragment,$a),$a.forEach(t),Mt.forEach(t),Yb=p(o),Qn=a(o,"H2",{class:!0});var Ay=i(Qn);Vr=a(Ay,"A",{id:!0,class:!0,href:!0});var X3=i(Vr);cg=a(X3,"SPAN",{});var Y3=i(cg);T(tc.$$.fragment,Y3),Y3.forEach(t),X3.forEach(t),cz=p(Ay),pg=a(Ay,"SPAN",{});var Z3=i(pg);pz=s(Z3,"FlaxBertForNextSentencePrediction"),Z3.forEach(t),Ay.forEach(t),Zb=p(o),Ue=a(o,"DIV",{class:!0});var Et=i(Ue);T(oc.$$.fragment,Et),hz=p(Et),nc=a(Et,"P",{});var Iy=i(nc);mz=s(Iy,"Bert Model with a "),hg=a(Iy,"CODE",{});var e6=i(hg);fz=s(e6,"next sentence prediction (classification)"),e6.forEach(t),uz=s(Iy," head on top."),Iy.forEach(t),gz=p(Et),sc=a(Et,"P",{});var Ly=i(sc);_z=s(Ly,"This model inherits from "),ch=a(Ly,"A",{href:!0});var t6=i(ch);bz=s(t6,"FlaxPreTrainedModel"),t6.forEach(t),kz=s(Ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ly.forEach(t),yz=p(Et),rc=a(Et,"P",{});var Dy=i(rc);vz=s(Dy,"This model is also a Flax Linen "),ac=a(Dy,"A",{href:!0,rel:!0});var o6=i(ac);Tz=s(o6,"flax.linen.Module"),o6.forEach(t),wz=s(Dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dy.forEach(t),$z=p(Et),mg=a(Et,"P",{});var n6=i(mg);xz=s(n6,"Finally, this model supports inherent JAX features such as:"),n6.forEach(t),Fz=p(Et),_o=a(Et,"UL",{});var xa=i(_o);fg=a(xa,"LI",{});var s6=i(fg);ic=a(s6,"A",{href:!0,rel:!0});var r6=i(ic);Bz=s(r6,"Just-In-Time (JIT) compilation"),r6.forEach(t),s6.forEach(t),Mz=p(xa),ug=a(xa,"LI",{});var a6=i(ug);lc=a(a6,"A",{href:!0,rel:!0});var i6=i(lc);Ez=s(i6,"Automatic Differentiation"),i6.forEach(t),a6.forEach(t),zz=p(xa),gg=a(xa,"LI",{});var l6=i(gg);dc=a(l6,"A",{href:!0,rel:!0});var d6=i(dc);Pz=s(d6,"Vectorization"),d6.forEach(t),l6.forEach(t),qz=p(xa),_g=a(xa,"LI",{});var c6=i(_g);cc=a(c6,"A",{href:!0,rel:!0});var p6=i(cc);jz=s(p6,"Parallelization"),p6.forEach(t),c6.forEach(t),xa.forEach(t),Cz=p(Et),Xt=a(Et,"DIV",{class:!0});var Fa=i(Xt);T(pc.$$.fragment,Fa),Nz=p(Fa),Kn=a(Fa,"P",{});var Qh=i(Kn);Oz=s(Qh,"The "),bg=a(Qh,"CODE",{});var h6=i(bg);Az=s(h6,"FlaxBertPreTrainedModel"),h6.forEach(t),Iz=s(Qh," forward method, overrides the "),kg=a(Qh,"CODE",{});var m6=i(kg);Lz=s(m6,"__call__"),m6.forEach(t),Dz=s(Qh," special method."),Qh.forEach(t),Sz=p(Fa),T(Qr.$$.fragment,Fa),Uz=p(Fa),T(Kr.$$.fragment,Fa),Fa.forEach(t),Et.forEach(t),ek=p(o),Jn=a(o,"H2",{class:!0});var Sy=i(Jn);Jr=a(Sy,"A",{id:!0,class:!0,href:!0});var f6=i(Jr);yg=a(f6,"SPAN",{});var u6=i(yg);T(hc.$$.fragment,u6),u6.forEach(t),f6.forEach(t),Wz=p(Sy),vg=a(Sy,"SPAN",{});var g6=i(vg);Hz=s(g6,"FlaxBertForSequenceClassification"),g6.forEach(t),Sy.forEach(t),tk=p(o),We=a(o,"DIV",{class:!0});var zt=i(We);T(mc.$$.fragment,zt),Rz=p(zt),Tg=a(zt,"P",{});var _6=i(Tg);Vz=s(_6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),_6.forEach(t),Qz=p(zt),fc=a(zt,"P",{});var Uy=i(fc);Kz=s(Uy,"This model inherits from "),ph=a(Uy,"A",{href:!0});var b6=i(ph);Jz=s(b6,"FlaxPreTrainedModel"),b6.forEach(t),Gz=s(Uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uy.forEach(t),Xz=p(zt),uc=a(zt,"P",{});var Wy=i(uc);Yz=s(Wy,"This model is also a Flax Linen "),gc=a(Wy,"A",{href:!0,rel:!0});var k6=i(gc);Zz=s(k6,"flax.linen.Module"),k6.forEach(t),e4=s(Wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wy.forEach(t),t4=p(zt),wg=a(zt,"P",{});var y6=i(wg);o4=s(y6,"Finally, this model supports inherent JAX features such as:"),y6.forEach(t),n4=p(zt),bo=a(zt,"UL",{});var Ba=i(bo);$g=a(Ba,"LI",{});var v6=i($g);_c=a(v6,"A",{href:!0,rel:!0});var T6=i(_c);s4=s(T6,"Just-In-Time (JIT) compilation"),T6.forEach(t),v6.forEach(t),r4=p(Ba),xg=a(Ba,"LI",{});var w6=i(xg);bc=a(w6,"A",{href:!0,rel:!0});var $6=i(bc);a4=s($6,"Automatic Differentiation"),$6.forEach(t),w6.forEach(t),i4=p(Ba),Fg=a(Ba,"LI",{});var x6=i(Fg);kc=a(x6,"A",{href:!0,rel:!0});var F6=i(kc);l4=s(F6,"Vectorization"),F6.forEach(t),x6.forEach(t),d4=p(Ba),Bg=a(Ba,"LI",{});var B6=i(Bg);yc=a(B6,"A",{href:!0,rel:!0});var M6=i(yc);c4=s(M6,"Parallelization"),M6.forEach(t),B6.forEach(t),Ba.forEach(t),p4=p(zt),Yt=a(zt,"DIV",{class:!0});var Ma=i(Yt);T(vc.$$.fragment,Ma),h4=p(Ma),Gn=a(Ma,"P",{});var Kh=i(Gn);m4=s(Kh,"The "),Mg=a(Kh,"CODE",{});var E6=i(Mg);f4=s(E6,"FlaxBertPreTrainedModel"),E6.forEach(t),u4=s(Kh," forward method, overrides the "),Eg=a(Kh,"CODE",{});var z6=i(Eg);g4=s(z6,"__call__"),z6.forEach(t),_4=s(Kh," special method."),Kh.forEach(t),b4=p(Ma),T(Gr.$$.fragment,Ma),k4=p(Ma),T(Xr.$$.fragment,Ma),Ma.forEach(t),zt.forEach(t),ok=p(o),Xn=a(o,"H2",{class:!0});var Hy=i(Xn);Yr=a(Hy,"A",{id:!0,class:!0,href:!0});var P6=i(Yr);zg=a(P6,"SPAN",{});var q6=i(zg);T(Tc.$$.fragment,q6),q6.forEach(t),P6.forEach(t),y4=p(Hy),Pg=a(Hy,"SPAN",{});var j6=i(Pg);v4=s(j6,"FlaxBertForMultipleChoice"),j6.forEach(t),Hy.forEach(t),nk=p(o),He=a(o,"DIV",{class:!0});var Pt=i(He);T(wc.$$.fragment,Pt),T4=p(Pt),qg=a(Pt,"P",{});var C6=i(qg);w4=s(C6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),C6.forEach(t),$4=p(Pt),$c=a(Pt,"P",{});var Ry=i($c);x4=s(Ry,"This model inherits from "),hh=a(Ry,"A",{href:!0});var N6=i(hh);F4=s(N6,"FlaxPreTrainedModel"),N6.forEach(t),B4=s(Ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ry.forEach(t),M4=p(Pt),xc=a(Pt,"P",{});var Vy=i(xc);E4=s(Vy,"This model is also a Flax Linen "),Fc=a(Vy,"A",{href:!0,rel:!0});var O6=i(Fc);z4=s(O6,"flax.linen.Module"),O6.forEach(t),P4=s(Vy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vy.forEach(t),q4=p(Pt),jg=a(Pt,"P",{});var A6=i(jg);j4=s(A6,"Finally, this model supports inherent JAX features such as:"),A6.forEach(t),C4=p(Pt),ko=a(Pt,"UL",{});var Ea=i(ko);Cg=a(Ea,"LI",{});var I6=i(Cg);Bc=a(I6,"A",{href:!0,rel:!0});var L6=i(Bc);N4=s(L6,"Just-In-Time (JIT) compilation"),L6.forEach(t),I6.forEach(t),O4=p(Ea),Ng=a(Ea,"LI",{});var D6=i(Ng);Mc=a(D6,"A",{href:!0,rel:!0});var S6=i(Mc);A4=s(S6,"Automatic Differentiation"),S6.forEach(t),D6.forEach(t),I4=p(Ea),Og=a(Ea,"LI",{});var U6=i(Og);Ec=a(U6,"A",{href:!0,rel:!0});var W6=i(Ec);L4=s(W6,"Vectorization"),W6.forEach(t),U6.forEach(t),D4=p(Ea),Ag=a(Ea,"LI",{});var H6=i(Ag);zc=a(H6,"A",{href:!0,rel:!0});var R6=i(zc);S4=s(R6,"Parallelization"),R6.forEach(t),H6.forEach(t),Ea.forEach(t),U4=p(Pt),Zt=a(Pt,"DIV",{class:!0});var za=i(Zt);T(Pc.$$.fragment,za),W4=p(za),Yn=a(za,"P",{});var Jh=i(Yn);H4=s(Jh,"The "),Ig=a(Jh,"CODE",{});var V6=i(Ig);R4=s(V6,"FlaxBertPreTrainedModel"),V6.forEach(t),V4=s(Jh," forward method, overrides the "),Lg=a(Jh,"CODE",{});var Q6=i(Lg);Q4=s(Q6,"__call__"),Q6.forEach(t),K4=s(Jh," special method."),Jh.forEach(t),J4=p(za),T(Zr.$$.fragment,za),G4=p(za),T(ea.$$.fragment,za),za.forEach(t),Pt.forEach(t),sk=p(o),Zn=a(o,"H2",{class:!0});var Qy=i(Zn);ta=a(Qy,"A",{id:!0,class:!0,href:!0});var K6=i(ta);Dg=a(K6,"SPAN",{});var J6=i(Dg);T(qc.$$.fragment,J6),J6.forEach(t),K6.forEach(t),X4=p(Qy),Sg=a(Qy,"SPAN",{});var G6=i(Sg);Y4=s(G6,"FlaxBertForTokenClassification"),G6.forEach(t),Qy.forEach(t),rk=p(o),Re=a(o,"DIV",{class:!0});var qt=i(Re);T(jc.$$.fragment,qt),Z4=p(qt),Ug=a(qt,"P",{});var X6=i(Ug);eP=s(X6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),X6.forEach(t),tP=p(qt),Cc=a(qt,"P",{});var Ky=i(Cc);oP=s(Ky,"This model inherits from "),mh=a(Ky,"A",{href:!0});var Y6=i(mh);nP=s(Y6,"FlaxPreTrainedModel"),Y6.forEach(t),sP=s(Ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ky.forEach(t),rP=p(qt),Nc=a(qt,"P",{});var Jy=i(Nc);aP=s(Jy,"This model is also a Flax Linen "),Oc=a(Jy,"A",{href:!0,rel:!0});var Z6=i(Oc);iP=s(Z6,"flax.linen.Module"),Z6.forEach(t),lP=s(Jy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jy.forEach(t),dP=p(qt),Wg=a(qt,"P",{});var e5=i(Wg);cP=s(e5,"Finally, this model supports inherent JAX features such as:"),e5.forEach(t),pP=p(qt),yo=a(qt,"UL",{});var Pa=i(yo);Hg=a(Pa,"LI",{});var t5=i(Hg);Ac=a(t5,"A",{href:!0,rel:!0});var o5=i(Ac);hP=s(o5,"Just-In-Time (JIT) compilation"),o5.forEach(t),t5.forEach(t),mP=p(Pa),Rg=a(Pa,"LI",{});var n5=i(Rg);Ic=a(n5,"A",{href:!0,rel:!0});var s5=i(Ic);fP=s(s5,"Automatic Differentiation"),s5.forEach(t),n5.forEach(t),uP=p(Pa),Vg=a(Pa,"LI",{});var r5=i(Vg);Lc=a(r5,"A",{href:!0,rel:!0});var a5=i(Lc);gP=s(a5,"Vectorization"),a5.forEach(t),r5.forEach(t),_P=p(Pa),Qg=a(Pa,"LI",{});var i5=i(Qg);Dc=a(i5,"A",{href:!0,rel:!0});var l5=i(Dc);bP=s(l5,"Parallelization"),l5.forEach(t),i5.forEach(t),Pa.forEach(t),kP=p(qt),eo=a(qt,"DIV",{class:!0});var qa=i(eo);T(Sc.$$.fragment,qa),yP=p(qa),es=a(qa,"P",{});var Gh=i(es);vP=s(Gh,"The "),Kg=a(Gh,"CODE",{});var d5=i(Kg);TP=s(d5,"FlaxBertPreTrainedModel"),d5.forEach(t),wP=s(Gh," forward method, overrides the "),Jg=a(Gh,"CODE",{});var c5=i(Jg);$P=s(c5,"__call__"),c5.forEach(t),xP=s(Gh," special method."),Gh.forEach(t),FP=p(qa),T(oa.$$.fragment,qa),BP=p(qa),T(na.$$.fragment,qa),qa.forEach(t),qt.forEach(t),ak=p(o),ts=a(o,"H2",{class:!0});var Gy=i(ts);sa=a(Gy,"A",{id:!0,class:!0,href:!0});var p5=i(sa);Gg=a(p5,"SPAN",{});var h5=i(Gg);T(Uc.$$.fragment,h5),h5.forEach(t),p5.forEach(t),MP=p(Gy),Xg=a(Gy,"SPAN",{});var m5=i(Xg);EP=s(m5,"FlaxBertForQuestionAnswering"),m5.forEach(t),Gy.forEach(t),ik=p(o),Ve=a(o,"DIV",{class:!0});var jt=i(Ve);T(Wc.$$.fragment,jt),zP=p(jt),os=a(jt,"P",{});var Xh=i(os);PP=s(Xh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yg=a(Xh,"CODE",{});var f5=i(Yg);qP=s(f5,"span start logits"),f5.forEach(t),jP=s(Xh," and "),Zg=a(Xh,"CODE",{});var u5=i(Zg);CP=s(u5,"span end logits"),u5.forEach(t),NP=s(Xh,")."),Xh.forEach(t),OP=p(jt),Hc=a(jt,"P",{});var Xy=i(Hc);AP=s(Xy,"This model inherits from "),fh=a(Xy,"A",{href:!0});var g5=i(fh);IP=s(g5,"FlaxPreTrainedModel"),g5.forEach(t),LP=s(Xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xy.forEach(t),DP=p(jt),Rc=a(jt,"P",{});var Yy=i(Rc);SP=s(Yy,"This model is also a Flax Linen "),Vc=a(Yy,"A",{href:!0,rel:!0});var _5=i(Vc);UP=s(_5,"flax.linen.Module"),_5.forEach(t),WP=s(Yy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yy.forEach(t),HP=p(jt),e_=a(jt,"P",{});var b5=i(e_);RP=s(b5,"Finally, this model supports inherent JAX features such as:"),b5.forEach(t),VP=p(jt),vo=a(jt,"UL",{});var ja=i(vo);t_=a(ja,"LI",{});var k5=i(t_);Qc=a(k5,"A",{href:!0,rel:!0});var y5=i(Qc);QP=s(y5,"Just-In-Time (JIT) compilation"),y5.forEach(t),k5.forEach(t),KP=p(ja),o_=a(ja,"LI",{});var v5=i(o_);Kc=a(v5,"A",{href:!0,rel:!0});var T5=i(Kc);JP=s(T5,"Automatic Differentiation"),T5.forEach(t),v5.forEach(t),GP=p(ja),n_=a(ja,"LI",{});var w5=i(n_);Jc=a(w5,"A",{href:!0,rel:!0});var $5=i(Jc);XP=s($5,"Vectorization"),$5.forEach(t),w5.forEach(t),YP=p(ja),s_=a(ja,"LI",{});var x5=i(s_);Gc=a(x5,"A",{href:!0,rel:!0});var F5=i(Gc);ZP=s(F5,"Parallelization"),F5.forEach(t),x5.forEach(t),ja.forEach(t),e8=p(jt),to=a(jt,"DIV",{class:!0});var Ca=i(to);T(Xc.$$.fragment,Ca),t8=p(Ca),ns=a(Ca,"P",{});var Yh=i(ns);o8=s(Yh,"The "),r_=a(Yh,"CODE",{});var B5=i(r_);n8=s(B5,"FlaxBertPreTrainedModel"),B5.forEach(t),s8=s(Yh," forward method, overrides the "),a_=a(Yh,"CODE",{});var M5=i(a_);r8=s(M5,"__call__"),M5.forEach(t),a8=s(Yh," special method."),Yh.forEach(t),i8=p(Ca),T(ra.$$.fragment,Ca),l8=p(Ca),T(aa.$$.fragment,Ca),Ca.forEach(t),jt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(tO)),u(m,"id","bert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u($e,"class","relative group"),u(hp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertModel"),u(mp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertModel"),u(Oa,"href","https://huggingface.co/bert-base-uncased"),u(Oa,"rel","nofollow"),u(fp,"href","/docs/transformers/pr_17078/en/main_classes/configuration#transformers.PretrainedConfig"),u(up,"href","/docs/transformers/pr_17078/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cs,"id","transformers.BertTokenizer"),u(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cs,"href","#transformers.BertTokenizer"),u(Ho,"class","relative group"),u(gp,"href","/docs/transformers/pr_17078/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.BertTokenizerFast"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.BertTokenizerFast"),u(Vo,"class","relative group"),u(yp,"href","/docs/transformers/pr_17078/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(us,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ko,"class","relative group"),u(wp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForPreTraining"),u(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($p,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForPreTraining"),u(gs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertModel"),u(Xo,"class","relative group"),u(Fp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(pi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pi,"rel","nofollow"),u(mi,"href","https://arxiv.org/abs/1706.03762"),u(mi,"rel","nofollow"),u(Bp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.BertForPreTraining"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.BertForPreTraining"),u(Zo,"class","relative group"),u(Mp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(ki,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ki,"rel","nofollow"),u(Ep,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForPreTraining"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.BertLMHeadModel"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.BertLMHeadModel"),u(on,"class","relative group"),u(zp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(Fi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fi,"rel","nofollow"),u(Pp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertLMHeadModel"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.BertForMaskedLM"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.BertForMaskedLM"),u(sn,"class","relative group"),u(qp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ji,"rel","nofollow"),u(jp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForMaskedLM"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zs,"id","transformers.BertForNextSentencePrediction"),u(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zs,"href","#transformers.BertForNextSentencePrediction"),u(an,"class","relative group"),u(Cp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(Di,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Di,"rel","nofollow"),u(Np,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForSequenceClassification"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForSequenceClassification"),u(dn,"class","relative group"),u(Op,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(Vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vi,"rel","nofollow"),u(Ap,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ls,"id","transformers.BertForMultipleChoice"),u(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ls,"href","#transformers.BertForMultipleChoice"),u(pn,"class","relative group"),u(Ip,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(Yi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yi,"rel","nofollow"),u(Lp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.BertForTokenClassification"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.BertForTokenClassification"),u(mn,"class","relative group"),u(Dp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(sl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(sl,"rel","nofollow"),u(Sp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForTokenClassification"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.BertForQuestionAnswering"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.BertForQuestionAnswering"),u(un,"class","relative group"),u(Up,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.PreTrainedModel"),u(cl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(cl,"rel","nofollow"),u(Wp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.TFBertModel"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.TFBertModel"),u(bn,"class","relative group"),u(Hp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(gl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(gl,"rel","nofollow"),u(Rp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertModel"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForPreTraining"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForPreTraining"),u(yn,"class","relative group"),u(Vp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(Tl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Tl,"rel","nofollow"),u(Qp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.TFBertLMHeadModel"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.TFBertLMHeadModel"),u(wn,"class","relative group"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ar,"id","transformers.TFBertForMaskedLM"),u(ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ar,"href","#transformers.TFBertForMaskedLM"),u(xn,"class","relative group"),u(Kp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(Nl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Nl,"rel","nofollow"),u(Jp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertForNextSentencePrediction"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertForNextSentencePrediction"),u(Bn,"class","relative group"),u(Gp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ul,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ul,"rel","nofollow"),u(Xp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ur,"id","transformers.TFBertForSequenceClassification"),u(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ur,"href","#transformers.TFBertForSequenceClassification"),u(En,"class","relative group"),u(Yp,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(Kl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Kl,"rel","nofollow"),u(Zp,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yr,"id","transformers.TFBertForMultipleChoice"),u(yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yr,"href","#transformers.TFBertForMultipleChoice"),u(Pn,"class","relative group"),u(eh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(ed,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ed,"rel","nofollow"),u(th,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFBertForTokenClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFBertForTokenClassification"),u(jn,"class","relative group"),u(oh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(ad,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ad,"rel","nofollow"),u(nh,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Er,"id","transformers.TFBertForQuestionAnswering"),u(Er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Er,"href","#transformers.TFBertForQuestionAnswering"),u(Nn,"class","relative group"),u(sh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.TFPreTrainedModel"),u(hd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hd,"rel","nofollow"),u(rh,"href","/docs/transformers/pr_17078/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertModel"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertModel"),u(In,"class","relative group"),u(ah,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(bd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(bd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(kd,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yd,"rel","nofollow"),u(vd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(vd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Td,"rel","nofollow"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForPreTraining"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForPreTraining"),u(Dn,"class","relative group"),u(ih,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForCausalLM"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForCausalLM"),u(Wn,"class","relative group"),u(lh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Id,"rel","nofollow"),u(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ud,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMaskedLM"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMaskedLM"),u(Rn,"class","relative group"),u(dh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vr,"id","transformers.FlaxBertForNextSentencePrediction"),u(Vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vr,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Qn,"class","relative group"),u(ch,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ac,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(dc,"rel","nofollow"),u(cc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(cc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForSequenceClassification"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForSequenceClassification"),u(Jn,"class","relative group"),u(ph,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(kc,"rel","nofollow"),u(yc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yr,"id","transformers.FlaxBertForMultipleChoice"),u(Yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yr,"href","#transformers.FlaxBertForMultipleChoice"),u(Xn,"class","relative group"),u(hh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ec,"rel","nofollow"),u(zc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(zc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ta,"id","transformers.FlaxBertForTokenClassification"),u(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ta,"href","#transformers.FlaxBertForTokenClassification"),u(Zn,"class","relative group"),u(mh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Oc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Oc,"rel","nofollow"),u(Ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ac,"rel","nofollow"),u(Ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ic,"rel","nofollow"),u(Lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Lc,"rel","nofollow"),u(Dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Dc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sa,"id","transformers.FlaxBertForQuestionAnswering"),u(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sa,"href","#transformers.FlaxBertForQuestionAnswering"),u(ts,"class","relative group"),u(fh,"href","/docs/transformers/pr_17078/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Vc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Vc,"rel","nofollow"),u(Qc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Qc,"rel","nofollow"),u(Kc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Kc,"rel","nofollow"),u(Jc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Jc,"rel","nofollow"),u(Gc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Gc,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,h,k),e(h,m),e(m,g),w(l,g,null),e(h,f),e(h,M),e(M,be),b(o,X,k),b(o,z,k),e(z,ee),e(ee,L),w(re,L,null),e(z,ke),e(z,D),e(D,ye),b(o,me,k),b(o,J,k),e(J,O),e(J,ae),e(ae,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,ve),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,V),b(o,_e,k),b(o,te,k),e(te,N),e(N,Te),e(te,Q),e(te,pe),e(pe,y),b(o,E,k),b(o,K,k),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),b(o,W,k),b(o,$e,k),e($e,Fe),e(Fe,U),w(Ee,U,null),e($e,je),e($e,he),e(he,Ce),b(o,Z_,k),b(o,Ct,k),w(Na,Ct,null),e(Ct,Zy),e(Ct,po),e(po,ev),e(po,hp),e(hp,tv),e(po,ov),e(po,mp),e(mp,nv),e(po,sv),e(po,Oa),e(Oa,rv),e(po,av),e(Ct,iv),e(Ct,Wo),e(Wo,lv),e(Wo,fp),e(fp,dv),e(Wo,cv),e(Wo,up),e(up,pv),e(Wo,hv),e(Ct,mv),w(ds,Ct,null),b(o,eb,k),b(o,Ho,k),e(Ho,cs),e(cs,Zh),w(Aa,Zh,null),e(Ho,fv),e(Ho,em),e(em,uv),b(o,tb,k),b(o,Ne,k),w(Ia,Ne,null),e(Ne,gv),e(Ne,tm),e(tm,_v),e(Ne,bv),e(Ne,La),e(La,kv),e(La,gp),e(gp,yv),e(La,vv),e(Ne,Tv),e(Ne,xo),w(Da,xo,null),e(xo,wv),e(xo,om),e(om,$v),e(xo,xv),e(xo,Sa),e(Sa,_p),e(_p,Fv),e(_p,nm),e(nm,Bv),e(Sa,Mv),e(Sa,bp),e(bp,Ev),e(bp,sm),e(sm,zv),e(Ne,Pv),e(Ne,ps),w(Ua,ps,null),e(ps,qv),e(ps,Wa),e(Wa,jv),e(Wa,rm),e(rm,Cv),e(Wa,Nv),e(Ne,Ov),e(Ne,Ot),w(Ha,Ot,null),e(Ot,Av),e(Ot,am),e(am,Iv),e(Ot,Lv),w(hs,Ot,null),e(Ot,Dv),e(Ot,Ro),e(Ro,Sv),e(Ro,im),e(im,Uv),e(Ro,Wv),e(Ro,lm),e(lm,Hv),e(Ro,Rv),e(Ne,Vv),e(Ne,kp),w(Ra,kp,null),b(o,ob,k),b(o,Vo,k),e(Vo,ms),e(ms,dm),w(Va,dm,null),e(Vo,Qv),e(Vo,cm),e(cm,Kv),b(o,nb,k),b(o,rt,k),w(Qa,rt,null),e(rt,Jv),e(rt,Ka),e(Ka,Gv),e(Ka,pm),e(pm,Xv),e(Ka,Yv),e(rt,Zv),e(rt,Ja),e(Ja,eT),e(Ja,yp),e(yp,tT),e(Ja,oT),e(rt,nT),e(rt,Fo),w(Ga,Fo,null),e(Fo,sT),e(Fo,hm),e(hm,rT),e(Fo,aT),e(Fo,Xa),e(Xa,vp),e(vp,iT),e(vp,mm),e(mm,lT),e(Xa,dT),e(Xa,Tp),e(Tp,cT),e(Tp,fm),e(fm,pT),e(rt,hT),e(rt,At),w(Ya,At,null),e(At,mT),e(At,um),e(um,fT),e(At,uT),w(fs,At,null),e(At,gT),e(At,Qo),e(Qo,_T),e(Qo,gm),e(gm,bT),e(Qo,kT),e(Qo,_m),e(_m,yT),e(Qo,vT),b(o,sb,k),b(o,Ko,k),e(Ko,us),e(us,bm),w(Za,bm,null),e(Ko,TT),e(Ko,km),e(km,wT),b(o,rb,k),b(o,Jo,k),w(ei,Jo,null),e(Jo,$T),e(Jo,ti),e(ti,xT),e(ti,wp),e(wp,FT),e(ti,BT),b(o,ab,k),b(o,Go,k),w(oi,Go,null),e(Go,MT),e(Go,ni),e(ni,ET),e(ni,$p),e($p,zT),e(ni,PT),b(o,ib,k),b(o,ho,k),w(si,ho,null),e(ho,qT),e(ho,ri),e(ri,jT),e(ri,xp),e(xp,CT),e(ri,NT),e(ho,OT),e(ho,gs),w(ai,gs,null),e(gs,AT),e(gs,ym),e(ym,IT),b(o,lb,k),b(o,Xo,k),e(Xo,_s),e(_s,vm),w(ii,vm,null),e(Xo,LT),e(Xo,Tm),e(Tm,DT),b(o,db,k),b(o,Oe,k),w(li,Oe,null),e(Oe,ST),e(Oe,wm),e(wm,UT),e(Oe,WT),e(Oe,di),e(di,HT),e(di,Fp),e(Fp,RT),e(di,VT),e(Oe,QT),e(Oe,ci),e(ci,KT),e(ci,pi),e(pi,JT),e(ci,GT),e(Oe,XT),e(Oe,hi),e(hi,YT),e(hi,mi),e(mi,ZT),e(hi,e1),e(Oe,t1),e(Oe,Ke),e(Ke,o1),e(Ke,$m),e($m,n1),e(Ke,s1),e(Ke,xm),e(xm,r1),e(Ke,a1),e(Ke,Fm),e(Fm,i1),e(Ke,l1),e(Ke,Bm),e(Bm,d1),e(Ke,c1),e(Ke,Mm),e(Mm,p1),e(Ke,h1),e(Ke,Em),e(Em,m1),e(Ke,f1),e(Oe,u1),e(Oe,It),w(fi,It,null),e(It,g1),e(It,Yo),e(Yo,_1),e(Yo,Bp),e(Bp,b1),e(Yo,k1),e(Yo,zm),e(zm,y1),e(Yo,v1),e(It,T1),w(bs,It,null),e(It,w1),w(ks,It,null),b(o,cb,k),b(o,Zo,k),e(Zo,ys),e(ys,Pm),w(ui,Pm,null),e(Zo,$1),e(Zo,qm),e(qm,x1),b(o,pb,k),b(o,at,k),w(gi,at,null),e(at,F1),e(at,en),e(en,B1),e(en,jm),e(jm,M1),e(en,E1),e(en,Cm),e(Cm,z1),e(en,P1),e(at,q1),e(at,_i),e(_i,j1),e(_i,Mp),e(Mp,C1),e(_i,N1),e(at,O1),e(at,bi),e(bi,A1),e(bi,ki),e(ki,I1),e(bi,L1),e(at,D1),e(at,Lt),w(yi,Lt,null),e(Lt,S1),e(Lt,tn),e(tn,U1),e(tn,Ep),e(Ep,W1),e(tn,H1),e(tn,Nm),e(Nm,R1),e(tn,V1),e(Lt,Q1),w(vs,Lt,null),e(Lt,K1),w(Ts,Lt,null),b(o,hb,k),b(o,on,k),e(on,ws),e(ws,Om),w(vi,Om,null),e(on,J1),e(on,Am),e(Am,G1),b(o,mb,k),b(o,it,k),w(Ti,it,null),e(it,X1),e(it,wi),e(wi,Y1),e(wi,Im),e(Im,Z1),e(wi,ew),e(it,tw),e(it,$i),e($i,ow),e($i,zp),e(zp,nw),e($i,sw),e(it,rw),e(it,xi),e(xi,aw),e(xi,Fi),e(Fi,iw),e(xi,lw),e(it,dw),e(it,Dt),w(Bi,Dt,null),e(Dt,cw),e(Dt,nn),e(nn,pw),e(nn,Pp),e(Pp,hw),e(nn,mw),e(nn,Lm),e(Lm,fw),e(nn,uw),e(Dt,gw),w($s,Dt,null),e(Dt,_w),w(xs,Dt,null),b(o,fb,k),b(o,sn,k),e(sn,Fs),e(Fs,Dm),w(Mi,Dm,null),e(sn,bw),e(sn,Sm),e(Sm,kw),b(o,ub,k),b(o,lt,k),w(Ei,lt,null),e(lt,yw),e(lt,zi),e(zi,vw),e(zi,Um),e(Um,Tw),e(zi,ww),e(lt,$w),e(lt,Pi),e(Pi,xw),e(Pi,qp),e(qp,Fw),e(Pi,Bw),e(lt,Mw),e(lt,qi),e(qi,Ew),e(qi,ji),e(ji,zw),e(qi,Pw),e(lt,qw),e(lt,ft),w(Ci,ft,null),e(ft,jw),e(ft,rn),e(rn,Cw),e(rn,jp),e(jp,Nw),e(rn,Ow),e(rn,Wm),e(Wm,Aw),e(rn,Iw),e(ft,Lw),w(Bs,ft,null),e(ft,Dw),w(Ms,ft,null),e(ft,Sw),w(Es,ft,null),b(o,gb,k),b(o,an,k),e(an,zs),e(zs,Hm),w(Ni,Hm,null),e(an,Uw),e(an,Rm),e(Rm,Ww),b(o,_b,k),b(o,dt,k),w(Oi,dt,null),e(dt,Hw),e(dt,Ai),e(Ai,Rw),e(Ai,Vm),e(Vm,Vw),e(Ai,Qw),e(dt,Kw),e(dt,Ii),e(Ii,Jw),e(Ii,Cp),e(Cp,Gw),e(Ii,Xw),e(dt,Yw),e(dt,Li),e(Li,Zw),e(Li,Di),e(Di,e$),e(Li,t$),e(dt,o$),e(dt,St),w(Si,St,null),e(St,n$),e(St,ln),e(ln,s$),e(ln,Np),e(Np,r$),e(ln,a$),e(ln,Qm),e(Qm,i$),e(ln,l$),e(St,d$),w(Ps,St,null),e(St,c$),w(qs,St,null),b(o,bb,k),b(o,dn,k),e(dn,js),e(js,Km),w(Ui,Km,null),e(dn,p$),e(dn,Jm),e(Jm,h$),b(o,kb,k),b(o,ct,k),w(Wi,ct,null),e(ct,m$),e(ct,Gm),e(Gm,f$),e(ct,u$),e(ct,Hi),e(Hi,g$),e(Hi,Op),e(Op,_$),e(Hi,b$),e(ct,k$),e(ct,Ri),e(Ri,y$),e(Ri,Vi),e(Vi,v$),e(Ri,T$),e(ct,w$),e(ct,Qe),w(Qi,Qe,null),e(Qe,$$),e(Qe,cn),e(cn,x$),e(cn,Ap),e(Ap,F$),e(cn,B$),e(cn,Xm),e(Xm,M$),e(cn,E$),e(Qe,z$),w(Cs,Qe,null),e(Qe,P$),w(Ns,Qe,null),e(Qe,q$),w(Os,Qe,null),e(Qe,j$),w(As,Qe,null),e(Qe,C$),w(Is,Qe,null),b(o,yb,k),b(o,pn,k),e(pn,Ls),e(Ls,Ym),w(Ki,Ym,null),e(pn,N$),e(pn,Zm),e(Zm,O$),b(o,vb,k),b(o,pt,k),w(Ji,pt,null),e(pt,A$),e(pt,ef),e(ef,I$),e(pt,L$),e(pt,Gi),e(Gi,D$),e(Gi,Ip),e(Ip,S$),e(Gi,U$),e(pt,W$),e(pt,Xi),e(Xi,H$),e(Xi,Yi),e(Yi,R$),e(Xi,V$),e(pt,Q$),e(pt,Ut),w(Zi,Ut,null),e(Ut,K$),e(Ut,hn),e(hn,J$),e(hn,Lp),e(Lp,G$),e(hn,X$),e(hn,tf),e(tf,Y$),e(hn,Z$),e(Ut,e0),w(Ds,Ut,null),e(Ut,t0),w(Ss,Ut,null),b(o,Tb,k),b(o,mn,k),e(mn,Us),e(Us,of),w(el,of,null),e(mn,o0),e(mn,nf),e(nf,n0),b(o,wb,k),b(o,ht,k),w(tl,ht,null),e(ht,s0),e(ht,sf),e(sf,r0),e(ht,a0),e(ht,ol),e(ol,i0),e(ol,Dp),e(Dp,l0),e(ol,d0),e(ht,c0),e(ht,nl),e(nl,p0),e(nl,sl),e(sl,h0),e(nl,m0),e(ht,f0),e(ht,ut),w(rl,ut,null),e(ut,u0),e(ut,fn),e(fn,g0),e(fn,Sp),e(Sp,_0),e(fn,b0),e(fn,rf),e(rf,k0),e(fn,y0),e(ut,v0),w(Ws,ut,null),e(ut,T0),w(Hs,ut,null),e(ut,w0),w(Rs,ut,null),b(o,$b,k),b(o,un,k),e(un,Vs),e(Vs,af),w(al,af,null),e(un,$0),e(un,lf),e(lf,x0),b(o,xb,k),b(o,mt,k),w(il,mt,null),e(mt,F0),e(mt,gn),e(gn,B0),e(gn,df),e(df,M0),e(gn,E0),e(gn,cf),e(cf,z0),e(gn,P0),e(mt,q0),e(mt,ll),e(ll,j0),e(ll,Up),e(Up,C0),e(ll,N0),e(mt,O0),e(mt,dl),e(dl,A0),e(dl,cl),e(cl,I0),e(dl,L0),e(mt,D0),e(mt,gt),w(pl,gt,null),e(gt,S0),e(gt,_n),e(_n,U0),e(_n,Wp),e(Wp,W0),e(_n,H0),e(_n,pf),e(pf,R0),e(_n,V0),e(gt,Q0),w(Qs,gt,null),e(gt,K0),w(Ks,gt,null),e(gt,J0),w(Js,gt,null),b(o,Fb,k),b(o,bn,k),e(bn,Gs),e(Gs,hf),w(hl,hf,null),e(bn,G0),e(bn,mf),e(mf,X0),b(o,Bb,k),b(o,Je,k),w(ml,Je,null),e(Je,Y0),e(Je,ff),e(ff,Z0),e(Je,e2),e(Je,fl),e(fl,t2),e(fl,Hp),e(Hp,o2),e(fl,n2),e(Je,s2),e(Je,ul),e(ul,r2),e(ul,gl),e(gl,a2),e(ul,i2),e(Je,l2),w(Xs,Je,null),e(Je,d2),e(Je,Wt),w(_l,Wt,null),e(Wt,c2),e(Wt,kn),e(kn,p2),e(kn,Rp),e(Rp,h2),e(kn,m2),e(kn,uf),e(uf,f2),e(kn,u2),e(Wt,g2),w(Ys,Wt,null),e(Wt,_2),w(Zs,Wt,null),b(o,Mb,k),b(o,yn,k),e(yn,er),e(er,gf),w(bl,gf,null),e(yn,b2),e(yn,_f),e(_f,k2),b(o,Eb,k),b(o,Ge,k),w(kl,Ge,null),e(Ge,y2),e(Ge,vn),e(vn,v2),e(vn,bf),e(bf,T2),e(vn,w2),e(vn,kf),e(kf,$2),e(vn,x2),e(Ge,F2),e(Ge,yl),e(yl,B2),e(yl,Vp),e(Vp,M2),e(yl,E2),e(Ge,z2),e(Ge,vl),e(vl,P2),e(vl,Tl),e(Tl,q2),e(vl,j2),e(Ge,C2),w(tr,Ge,null),e(Ge,N2),e(Ge,Ht),w(wl,Ht,null),e(Ht,O2),e(Ht,Tn),e(Tn,A2),e(Tn,Qp),e(Qp,I2),e(Tn,L2),e(Tn,yf),e(yf,D2),e(Tn,S2),e(Ht,U2),w(or,Ht,null),e(Ht,W2),w(nr,Ht,null),b(o,zb,k),b(o,wn,k),e(wn,sr),e(sr,vf),w($l,vf,null),e(wn,H2),e(wn,Tf),e(Tf,R2),b(o,Pb,k),b(o,$n,k),w(xl,$n,null),e($n,V2),e($n,_t),w(Fl,_t,null),e(_t,Q2),e(_t,Ae),e(Ae,K2),e(Ae,wf),e(wf,J2),e(Ae,G2),e(Ae,$f),e($f,X2),e(Ae,Y2),e(Ae,xf),e(xf,Z2),e(Ae,ex),e(Ae,Ff),e(Ff,tx),e(Ae,ox),e(Ae,Bf),e(Bf,nx),e(Ae,sx),e(Ae,Mf),e(Mf,rx),e(Ae,ax),e(Ae,Ef),e(Ef,ix),e(Ae,lx),e(_t,dx),e(_t,Bl),e(Bl,Ml),e(Ml,cx),e(Ml,zf),e(zf,px),e(Ml,hx),e(Bl,mx),e(Bl,El),e(El,fx),e(El,Pf),e(Pf,ux),e(El,gx),e(_t,_x),e(_t,G),e(G,bx),e(G,qf),e(qf,kx),e(G,yx),e(G,jf),e(jf,vx),e(G,Tx),e(G,Cf),e(Cf,wx),e(G,$x),e(G,Nf),e(Nf,xx),e(G,Fx),e(G,Of),e(Of,Bx),e(G,Mx),e(G,Af),e(Af,Ex),e(G,zx),e(G,If),e(If,Px),e(G,qx),e(G,Lf),e(Lf,jx),e(G,Cx),e(G,Df),e(Df,Nx),e(G,Ox),e(G,Sf),e(Sf,Ax),e(G,Ix),e(G,Uf),e(Uf,Lx),e(G,Dx),e(G,Wf),e(Wf,Sx),e(G,Ux),e(G,Hf),e(Hf,Wx),e(G,Hx),e(G,Rf),e(Rf,Rx),e(G,Vx),e(G,Vf),e(Vf,Qx),e(G,Kx),e(G,Qf),e(Qf,Jx),e(G,Gx),e(G,Kf),e(Kf,Xx),e(G,Yx),e(G,Jf),e(Jf,Zx),e(G,eF),e(G,Gf),e(Gf,tF),e(G,oF),e(G,Xf),e(Xf,nF),e(G,sF),e(_t,rF),w(rr,_t,null),b(o,qb,k),b(o,xn,k),e(xn,ar),e(ar,Yf),w(zl,Yf,null),e(xn,aF),e(xn,Zf),e(Zf,iF),b(o,jb,k),b(o,Xe,k),w(Pl,Xe,null),e(Xe,lF),e(Xe,ql),e(ql,dF),e(ql,eu),e(eu,cF),e(ql,pF),e(Xe,hF),e(Xe,jl),e(jl,mF),e(jl,Kp),e(Kp,fF),e(jl,uF),e(Xe,gF),e(Xe,Cl),e(Cl,_F),e(Cl,Nl),e(Nl,bF),e(Cl,kF),e(Xe,yF),w(ir,Xe,null),e(Xe,vF),e(Xe,bt),w(Ol,bt,null),e(bt,TF),e(bt,Fn),e(Fn,wF),e(Fn,Jp),e(Jp,$F),e(Fn,xF),e(Fn,tu),e(tu,FF),e(Fn,BF),e(bt,MF),w(lr,bt,null),e(bt,EF),w(dr,bt,null),e(bt,zF),w(cr,bt,null),b(o,Cb,k),b(o,Bn,k),e(Bn,pr),e(pr,ou),w(Al,ou,null),e(Bn,PF),e(Bn,nu),e(nu,qF),b(o,Nb,k),b(o,Ye,k),w(Il,Ye,null),e(Ye,jF),e(Ye,Ll),e(Ll,CF),e(Ll,su),e(su,NF),e(Ll,OF),e(Ye,AF),e(Ye,Dl),e(Dl,IF),e(Dl,Gp),e(Gp,LF),e(Dl,DF),e(Ye,SF),e(Ye,Sl),e(Sl,UF),e(Sl,Ul),e(Ul,WF),e(Sl,HF),e(Ye,RF),w(hr,Ye,null),e(Ye,VF),e(Ye,Rt),w(Wl,Rt,null),e(Rt,QF),e(Rt,Mn),e(Mn,KF),e(Mn,Xp),e(Xp,JF),e(Mn,GF),e(Mn,ru),e(ru,XF),e(Mn,YF),e(Rt,ZF),w(mr,Rt,null),e(Rt,e7),w(fr,Rt,null),b(o,Ob,k),b(o,En,k),e(En,ur),e(ur,au),w(Hl,au,null),e(En,t7),e(En,iu),e(iu,o7),b(o,Ab,k),b(o,Ze,k),w(Rl,Ze,null),e(Ze,n7),e(Ze,lu),e(lu,s7),e(Ze,r7),e(Ze,Vl),e(Vl,a7),e(Vl,Yp),e(Yp,i7),e(Vl,l7),e(Ze,d7),e(Ze,Ql),e(Ql,c7),e(Ql,Kl),e(Kl,p7),e(Ql,h7),e(Ze,m7),w(gr,Ze,null),e(Ze,f7),e(Ze,kt),w(Jl,kt,null),e(kt,u7),e(kt,zn),e(zn,g7),e(zn,Zp),e(Zp,_7),e(zn,b7),e(zn,du),e(du,k7),e(zn,y7),e(kt,v7),w(_r,kt,null),e(kt,T7),w(br,kt,null),e(kt,w7),w(kr,kt,null),b(o,Ib,k),b(o,Pn,k),e(Pn,yr),e(yr,cu),w(Gl,cu,null),e(Pn,$7),e(Pn,pu),e(pu,x7),b(o,Lb,k),b(o,et,k),w(Xl,et,null),e(et,F7),e(et,hu),e(hu,B7),e(et,M7),e(et,Yl),e(Yl,E7),e(Yl,eh),e(eh,z7),e(Yl,P7),e(et,q7),e(et,Zl),e(Zl,j7),e(Zl,ed),e(ed,C7),e(Zl,N7),e(et,O7),w(vr,et,null),e(et,A7),e(et,Vt),w(td,Vt,null),e(Vt,I7),e(Vt,qn),e(qn,L7),e(qn,th),e(th,D7),e(qn,S7),e(qn,mu),e(mu,U7),e(qn,W7),e(Vt,H7),w(Tr,Vt,null),e(Vt,R7),w(wr,Vt,null),b(o,Db,k),b(o,jn,k),e(jn,$r),e($r,fu),w(od,fu,null),e(jn,V7),e(jn,uu),e(uu,Q7),b(o,Sb,k),b(o,tt,k),w(nd,tt,null),e(tt,K7),e(tt,gu),e(gu,J7),e(tt,G7),e(tt,sd),e(sd,X7),e(sd,oh),e(oh,Y7),e(sd,Z7),e(tt,eB),e(tt,rd),e(rd,tB),e(rd,ad),e(ad,oB),e(rd,nB),e(tt,sB),w(xr,tt,null),e(tt,rB),e(tt,yt),w(id,yt,null),e(yt,aB),e(yt,Cn),e(Cn,iB),e(Cn,nh),e(nh,lB),e(Cn,dB),e(Cn,_u),e(_u,cB),e(Cn,pB),e(yt,hB),w(Fr,yt,null),e(yt,mB),w(Br,yt,null),e(yt,fB),w(Mr,yt,null),b(o,Ub,k),b(o,Nn,k),e(Nn,Er),e(Er,bu),w(ld,bu,null),e(Nn,uB),e(Nn,ku),e(ku,gB),b(o,Wb,k),b(o,ot,k),w(dd,ot,null),e(ot,_B),e(ot,On),e(On,bB),e(On,yu),e(yu,kB),e(On,yB),e(On,vu),e(vu,vB),e(On,TB),e(ot,wB),e(ot,cd),e(cd,$B),e(cd,sh),e(sh,xB),e(cd,FB),e(ot,BB),e(ot,pd),e(pd,MB),e(pd,hd),e(hd,EB),e(pd,zB),e(ot,PB),w(zr,ot,null),e(ot,qB),e(ot,vt),w(md,vt,null),e(vt,jB),e(vt,An),e(An,CB),e(An,rh),e(rh,NB),e(An,OB),e(An,Tu),e(Tu,AB),e(An,IB),e(vt,LB),w(Pr,vt,null),e(vt,DB),w(qr,vt,null),e(vt,SB),w(jr,vt,null),b(o,Hb,k),b(o,In,k),e(In,Cr),e(Cr,wu),w(fd,wu,null),e(In,UB),e(In,$u),e($u,WB),b(o,Rb,k),b(o,Ie,k),w(ud,Ie,null),e(Ie,HB),e(Ie,xu),e(xu,RB),e(Ie,VB),e(Ie,gd),e(gd,QB),e(gd,ah),e(ah,KB),e(gd,JB),e(Ie,GB),e(Ie,_d),e(_d,XB),e(_d,bd),e(bd,YB),e(_d,ZB),e(Ie,eM),e(Ie,Fu),e(Fu,tM),e(Ie,oM),e(Ie,mo),e(mo,Bu),e(Bu,kd),e(kd,nM),e(mo,sM),e(mo,Mu),e(Mu,yd),e(yd,rM),e(mo,aM),e(mo,Eu),e(Eu,vd),e(vd,iM),e(mo,lM),e(mo,zu),e(zu,Td),e(Td,dM),e(Ie,cM),e(Ie,Qt),w(wd,Qt,null),e(Qt,pM),e(Qt,Ln),e(Ln,hM),e(Ln,Pu),e(Pu,mM),e(Ln,fM),e(Ln,qu),e(qu,uM),e(Ln,gM),e(Qt,_M),w(Nr,Qt,null),e(Qt,bM),w(Or,Qt,null),b(o,Vb,k),b(o,Dn,k),e(Dn,Ar),e(Ar,ju),w($d,ju,null),e(Dn,kM),e(Dn,Cu),e(Cu,yM),b(o,Qb,k),b(o,Le,k),w(xd,Le,null),e(Le,vM),e(Le,Sn),e(Sn,TM),e(Sn,Nu),e(Nu,wM),e(Sn,$M),e(Sn,Ou),e(Ou,xM),e(Sn,FM),e(Le,BM),e(Le,Fd),e(Fd,MM),e(Fd,ih),e(ih,EM),e(Fd,zM),e(Le,PM),e(Le,Bd),e(Bd,qM),e(Bd,Md),e(Md,jM),e(Bd,CM),e(Le,NM),e(Le,Au),e(Au,OM),e(Le,AM),e(Le,fo),e(fo,Iu),e(Iu,Ed),e(Ed,IM),e(fo,LM),e(fo,Lu),e(Lu,zd),e(zd,DM),e(fo,SM),e(fo,Du),e(Du,Pd),e(Pd,UM),e(fo,WM),e(fo,Su),e(Su,qd),e(qd,HM),e(Le,RM),e(Le,Kt),w(jd,Kt,null),e(Kt,VM),e(Kt,Un),e(Un,QM),e(Un,Uu),e(Uu,KM),e(Un,JM),e(Un,Wu),e(Wu,GM),e(Un,XM),e(Kt,YM),w(Ir,Kt,null),e(Kt,ZM),w(Lr,Kt,null),b(o,Kb,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Hu),w(Cd,Hu,null),e(Wn,eE),e(Wn,Ru),e(Ru,tE),b(o,Jb,k),b(o,De,k),w(Nd,De,null),e(De,oE),e(De,Vu),e(Vu,nE),e(De,sE),e(De,Od),e(Od,rE),e(Od,lh),e(lh,aE),e(Od,iE),e(De,lE),e(De,Ad),e(Ad,dE),e(Ad,Id),e(Id,cE),e(Ad,pE),e(De,hE),e(De,Qu),e(Qu,mE),e(De,fE),e(De,uo),e(uo,Ku),e(Ku,Ld),e(Ld,uE),e(uo,gE),e(uo,Ju),e(Ju,Dd),e(Dd,_E),e(uo,bE),e(uo,Gu),e(Gu,Sd),e(Sd,kE),e(uo,yE),e(uo,Xu),e(Xu,Ud),e(Ud,vE),e(De,TE),e(De,Jt),w(Wd,Jt,null),e(Jt,wE),e(Jt,Hn),e(Hn,$E),e(Hn,Yu),e(Yu,xE),e(Hn,FE),e(Hn,Zu),e(Zu,BE),e(Hn,ME),e(Jt,EE),w(Sr,Jt,null),e(Jt,zE),w(Ur,Jt,null),b(o,Gb,k),b(o,Rn,k),e(Rn,Wr),e(Wr,eg),w(Hd,eg,null),e(Rn,PE),e(Rn,tg),e(tg,qE),b(o,Xb,k),b(o,Se,k),w(Rd,Se,null),e(Se,jE),e(Se,Vd),e(Vd,CE),e(Vd,og),e(og,NE),e(Vd,OE),e(Se,AE),e(Se,Qd),e(Qd,IE),e(Qd,dh),e(dh,LE),e(Qd,DE),e(Se,SE),e(Se,Kd),e(Kd,UE),e(Kd,Jd),e(Jd,WE),e(Kd,HE),e(Se,RE),e(Se,ng),e(ng,VE),e(Se,QE),e(Se,go),e(go,sg),e(sg,Gd),e(Gd,KE),e(go,JE),e(go,rg),e(rg,Xd),e(Xd,GE),e(go,XE),e(go,ag),e(ag,Yd),e(Yd,YE),e(go,ZE),e(go,ig),e(ig,Zd),e(Zd,ez),e(Se,tz),e(Se,Gt),w(ec,Gt,null),e(Gt,oz),e(Gt,Vn),e(Vn,nz),e(Vn,lg),e(lg,sz),e(Vn,rz),e(Vn,dg),e(dg,az),e(Vn,iz),e(Gt,lz),w(Hr,Gt,null),e(Gt,dz),w(Rr,Gt,null),b(o,Yb,k),b(o,Qn,k),e(Qn,Vr),e(Vr,cg),w(tc,cg,null),e(Qn,cz),e(Qn,pg),e(pg,pz),b(o,Zb,k),b(o,Ue,k),w(oc,Ue,null),e(Ue,hz),e(Ue,nc),e(nc,mz),e(nc,hg),e(hg,fz),e(nc,uz),e(Ue,gz),e(Ue,sc),e(sc,_z),e(sc,ch),e(ch,bz),e(sc,kz),e(Ue,yz),e(Ue,rc),e(rc,vz),e(rc,ac),e(ac,Tz),e(rc,wz),e(Ue,$z),e(Ue,mg),e(mg,xz),e(Ue,Fz),e(Ue,_o),e(_o,fg),e(fg,ic),e(ic,Bz),e(_o,Mz),e(_o,ug),e(ug,lc),e(lc,Ez),e(_o,zz),e(_o,gg),e(gg,dc),e(dc,Pz),e(_o,qz),e(_o,_g),e(_g,cc),e(cc,jz),e(Ue,Cz),e(Ue,Xt),w(pc,Xt,null),e(Xt,Nz),e(Xt,Kn),e(Kn,Oz),e(Kn,bg),e(bg,Az),e(Kn,Iz),e(Kn,kg),e(kg,Lz),e(Kn,Dz),e(Xt,Sz),w(Qr,Xt,null),e(Xt,Uz),w(Kr,Xt,null),b(o,ek,k),b(o,Jn,k),e(Jn,Jr),e(Jr,yg),w(hc,yg,null),e(Jn,Wz),e(Jn,vg),e(vg,Hz),b(o,tk,k),b(o,We,k),w(mc,We,null),e(We,Rz),e(We,Tg),e(Tg,Vz),e(We,Qz),e(We,fc),e(fc,Kz),e(fc,ph),e(ph,Jz),e(fc,Gz),e(We,Xz),e(We,uc),e(uc,Yz),e(uc,gc),e(gc,Zz),e(uc,e4),e(We,t4),e(We,wg),e(wg,o4),e(We,n4),e(We,bo),e(bo,$g),e($g,_c),e(_c,s4),e(bo,r4),e(bo,xg),e(xg,bc),e(bc,a4),e(bo,i4),e(bo,Fg),e(Fg,kc),e(kc,l4),e(bo,d4),e(bo,Bg),e(Bg,yc),e(yc,c4),e(We,p4),e(We,Yt),w(vc,Yt,null),e(Yt,h4),e(Yt,Gn),e(Gn,m4),e(Gn,Mg),e(Mg,f4),e(Gn,u4),e(Gn,Eg),e(Eg,g4),e(Gn,_4),e(Yt,b4),w(Gr,Yt,null),e(Yt,k4),w(Xr,Yt,null),b(o,ok,k),b(o,Xn,k),e(Xn,Yr),e(Yr,zg),w(Tc,zg,null),e(Xn,y4),e(Xn,Pg),e(Pg,v4),b(o,nk,k),b(o,He,k),w(wc,He,null),e(He,T4),e(He,qg),e(qg,w4),e(He,$4),e(He,$c),e($c,x4),e($c,hh),e(hh,F4),e($c,B4),e(He,M4),e(He,xc),e(xc,E4),e(xc,Fc),e(Fc,z4),e(xc,P4),e(He,q4),e(He,jg),e(jg,j4),e(He,C4),e(He,ko),e(ko,Cg),e(Cg,Bc),e(Bc,N4),e(ko,O4),e(ko,Ng),e(Ng,Mc),e(Mc,A4),e(ko,I4),e(ko,Og),e(Og,Ec),e(Ec,L4),e(ko,D4),e(ko,Ag),e(Ag,zc),e(zc,S4),e(He,U4),e(He,Zt),w(Pc,Zt,null),e(Zt,W4),e(Zt,Yn),e(Yn,H4),e(Yn,Ig),e(Ig,R4),e(Yn,V4),e(Yn,Lg),e(Lg,Q4),e(Yn,K4),e(Zt,J4),w(Zr,Zt,null),e(Zt,G4),w(ea,Zt,null),b(o,sk,k),b(o,Zn,k),e(Zn,ta),e(ta,Dg),w(qc,Dg,null),e(Zn,X4),e(Zn,Sg),e(Sg,Y4),b(o,rk,k),b(o,Re,k),w(jc,Re,null),e(Re,Z4),e(Re,Ug),e(Ug,eP),e(Re,tP),e(Re,Cc),e(Cc,oP),e(Cc,mh),e(mh,nP),e(Cc,sP),e(Re,rP),e(Re,Nc),e(Nc,aP),e(Nc,Oc),e(Oc,iP),e(Nc,lP),e(Re,dP),e(Re,Wg),e(Wg,cP),e(Re,pP),e(Re,yo),e(yo,Hg),e(Hg,Ac),e(Ac,hP),e(yo,mP),e(yo,Rg),e(Rg,Ic),e(Ic,fP),e(yo,uP),e(yo,Vg),e(Vg,Lc),e(Lc,gP),e(yo,_P),e(yo,Qg),e(Qg,Dc),e(Dc,bP),e(Re,kP),e(Re,eo),w(Sc,eo,null),e(eo,yP),e(eo,es),e(es,vP),e(es,Kg),e(Kg,TP),e(es,wP),e(es,Jg),e(Jg,$P),e(es,xP),e(eo,FP),w(oa,eo,null),e(eo,BP),w(na,eo,null),b(o,ak,k),b(o,ts,k),e(ts,sa),e(sa,Gg),w(Uc,Gg,null),e(ts,MP),e(ts,Xg),e(Xg,EP),b(o,ik,k),b(o,Ve,k),w(Wc,Ve,null),e(Ve,zP),e(Ve,os),e(os,PP),e(os,Yg),e(Yg,qP),e(os,jP),e(os,Zg),e(Zg,CP),e(os,NP),e(Ve,OP),e(Ve,Hc),e(Hc,AP),e(Hc,fh),e(fh,IP),e(Hc,LP),e(Ve,DP),e(Ve,Rc),e(Rc,SP),e(Rc,Vc),e(Vc,UP),e(Rc,WP),e(Ve,HP),e(Ve,e_),e(e_,RP),e(Ve,VP),e(Ve,vo),e(vo,t_),e(t_,Qc),e(Qc,QP),e(vo,KP),e(vo,o_),e(o_,Kc),e(Kc,JP),e(vo,GP),e(vo,n_),e(n_,Jc),e(Jc,XP),e(vo,YP),e(vo,s_),e(s_,Gc),e(Gc,ZP),e(Ve,e8),e(Ve,to),w(Xc,to,null),e(to,t8),e(to,ns),e(ns,o8),e(ns,r_),e(r_,n8),e(ns,s8),e(ns,a_),e(a_,r8),e(ns,a8),e(to,i8),w(ra,to,null),e(to,l8),w(aa,to,null),lk=!0},p(o,[k]){const Yc={};k&2&&(Yc.$$scope={dirty:k,ctx:o}),ds.$set(Yc);const i_={};k&2&&(i_.$$scope={dirty:k,ctx:o}),hs.$set(i_);const l_={};k&2&&(l_.$$scope={dirty:k,ctx:o}),fs.$set(l_);const d_={};k&2&&(d_.$$scope={dirty:k,ctx:o}),bs.$set(d_);const Zc={};k&2&&(Zc.$$scope={dirty:k,ctx:o}),ks.$set(Zc);const c_={};k&2&&(c_.$$scope={dirty:k,ctx:o}),vs.$set(c_);const p_={};k&2&&(p_.$$scope={dirty:k,ctx:o}),Ts.$set(p_);const h_={};k&2&&(h_.$$scope={dirty:k,ctx:o}),$s.$set(h_);const ep={};k&2&&(ep.$$scope={dirty:k,ctx:o}),xs.$set(ep);const m_={};k&2&&(m_.$$scope={dirty:k,ctx:o}),Bs.$set(m_);const f_={};k&2&&(f_.$$scope={dirty:k,ctx:o}),Ms.$set(f_);const u_={};k&2&&(u_.$$scope={dirty:k,ctx:o}),Es.$set(u_);const g_={};k&2&&(g_.$$scope={dirty:k,ctx:o}),Ps.$set(g_);const __={};k&2&&(__.$$scope={dirty:k,ctx:o}),qs.$set(__);const b_={};k&2&&(b_.$$scope={dirty:k,ctx:o}),Cs.$set(b_);const k_={};k&2&&(k_.$$scope={dirty:k,ctx:o}),Ns.$set(k_);const tp={};k&2&&(tp.$$scope={dirty:k,ctx:o}),Os.$set(tp);const y_={};k&2&&(y_.$$scope={dirty:k,ctx:o}),As.$set(y_);const v_={};k&2&&(v_.$$scope={dirty:k,ctx:o}),Is.$set(v_);const ss={};k&2&&(ss.$$scope={dirty:k,ctx:o}),Ds.$set(ss);const T_={};k&2&&(T_.$$scope={dirty:k,ctx:o}),Ss.$set(T_);const w_={};k&2&&(w_.$$scope={dirty:k,ctx:o}),Ws.$set(w_);const op={};k&2&&(op.$$scope={dirty:k,ctx:o}),Hs.$set(op);const $_={};k&2&&($_.$$scope={dirty:k,ctx:o}),Rs.$set($_);const x_={};k&2&&(x_.$$scope={dirty:k,ctx:o}),Qs.$set(x_);const F_={};k&2&&(F_.$$scope={dirty:k,ctx:o}),Ks.$set(F_);const To={};k&2&&(To.$$scope={dirty:k,ctx:o}),Js.$set(To);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),Xs.$set(wo);const B_={};k&2&&(B_.$$scope={dirty:k,ctx:o}),Ys.$set(B_);const M_={};k&2&&(M_.$$scope={dirty:k,ctx:o}),Zs.$set(M_);const E_={};k&2&&(E_.$$scope={dirty:k,ctx:o}),tr.$set(E_);const rs={};k&2&&(rs.$$scope={dirty:k,ctx:o}),or.$set(rs);const z_={};k&2&&(z_.$$scope={dirty:k,ctx:o}),nr.$set(z_);const P_={};k&2&&(P_.$$scope={dirty:k,ctx:o}),rr.$set(P_);const np={};k&2&&(np.$$scope={dirty:k,ctx:o}),ir.$set(np);const q_={};k&2&&(q_.$$scope={dirty:k,ctx:o}),lr.$set(q_);const j_={};k&2&&(j_.$$scope={dirty:k,ctx:o}),dr.$set(j_);const C_={};k&2&&(C_.$$scope={dirty:k,ctx:o}),cr.$set(C_);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:o}),hr.$set(nt);const N_={};k&2&&(N_.$$scope={dirty:k,ctx:o}),mr.$set(N_);const sp={};k&2&&(sp.$$scope={dirty:k,ctx:o}),fr.$set(sp);const O_={};k&2&&(O_.$$scope={dirty:k,ctx:o}),gr.$set(O_);const as={};k&2&&(as.$$scope={dirty:k,ctx:o}),_r.$set(as);const A_={};k&2&&(A_.$$scope={dirty:k,ctx:o}),br.$set(A_);const rp={};k&2&&(rp.$$scope={dirty:k,ctx:o}),kr.$set(rp);const uh={};k&2&&(uh.$$scope={dirty:k,ctx:o}),vr.$set(uh);const I_={};k&2&&(I_.$$scope={dirty:k,ctx:o}),Tr.$set(I_);const gh={};k&2&&(gh.$$scope={dirty:k,ctx:o}),wr.$set(gh);const L_={};k&2&&(L_.$$scope={dirty:k,ctx:o}),xr.$set(L_);const ap={};k&2&&(ap.$$scope={dirty:k,ctx:o}),Fr.$set(ap);const ip={};k&2&&(ip.$$scope={dirty:k,ctx:o}),Br.$set(ip);const D_={};k&2&&(D_.$$scope={dirty:k,ctx:o}),Mr.$set(D_);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),zr.$set($o);const S_={};k&2&&(S_.$$scope={dirty:k,ctx:o}),Pr.$set(S_);const is={};k&2&&(is.$$scope={dirty:k,ctx:o}),qr.$set(is);const U_={};k&2&&(U_.$$scope={dirty:k,ctx:o}),jr.$set(U_);const W_={};k&2&&(W_.$$scope={dirty:k,ctx:o}),Nr.$set(W_);const H_={};k&2&&(H_.$$scope={dirty:k,ctx:o}),Or.$set(H_);const lp={};k&2&&(lp.$$scope={dirty:k,ctx:o}),Ir.$set(lp);const R_={};k&2&&(R_.$$scope={dirty:k,ctx:o}),Lr.$set(R_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:o}),Sr.$set(V_);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:o}),Ur.$set(Q_);const Nt={};k&2&&(Nt.$$scope={dirty:k,ctx:o}),Hr.$set(Nt);const dp={};k&2&&(dp.$$scope={dirty:k,ctx:o}),Rr.$set(dp);const K_={};k&2&&(K_.$$scope={dirty:k,ctx:o}),Qr.$set(K_);const cp={};k&2&&(cp.$$scope={dirty:k,ctx:o}),Kr.$set(cp);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:o}),Gr.$set(J_);const ls={};k&2&&(ls.$$scope={dirty:k,ctx:o}),Xr.$set(ls);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:o}),Zr.$set(G_);const pp={};k&2&&(pp.$$scope={dirty:k,ctx:o}),ea.$set(pp);const _h={};k&2&&(_h.$$scope={dirty:k,ctx:o}),oa.$set(_h);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:o}),na.$set(X_);const bh={};k&2&&(bh.$$scope={dirty:k,ctx:o}),ra.$set(bh);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:o}),aa.$set(Y_)},i(o){lk||($(l.$$.fragment,o),$(re.$$.fragment,o),$(Ee.$$.fragment,o),$(Na.$$.fragment,o),$(ds.$$.fragment,o),$(Aa.$$.fragment,o),$(Ia.$$.fragment,o),$(Da.$$.fragment,o),$(Ua.$$.fragment,o),$(Ha.$$.fragment,o),$(hs.$$.fragment,o),$(Ra.$$.fragment,o),$(Va.$$.fragment,o),$(Qa.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(fs.$$.fragment,o),$(Za.$$.fragment,o),$(ei.$$.fragment,o),$(oi.$$.fragment,o),$(si.$$.fragment,o),$(ai.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$(fi.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(yi.$$.fragment,o),$(vs.$$.fragment,o),$(Ts.$$.fragment,o),$(vi.$$.fragment,o),$(Ti.$$.fragment,o),$(Bi.$$.fragment,o),$($s.$$.fragment,o),$(xs.$$.fragment,o),$(Mi.$$.fragment,o),$(Ei.$$.fragment,o),$(Ci.$$.fragment,o),$(Bs.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Ni.$$.fragment,o),$(Oi.$$.fragment,o),$(Si.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ui.$$.fragment,o),$(Wi.$$.fragment,o),$(Qi.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ki.$$.fragment,o),$(Ji.$$.fragment,o),$(Zi.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(el.$$.fragment,o),$(tl.$$.fragment,o),$(rl.$$.fragment,o),$(Ws.$$.fragment,o),$(Hs.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(il.$$.fragment,o),$(pl.$$.fragment,o),$(Qs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(ml.$$.fragment,o),$(Xs.$$.fragment,o),$(_l.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(bl.$$.fragment,o),$(kl.$$.fragment,o),$(tr.$$.fragment,o),$(wl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$($l.$$.fragment,o),$(xl.$$.fragment,o),$(Fl.$$.fragment,o),$(rr.$$.fragment,o),$(zl.$$.fragment,o),$(Pl.$$.fragment,o),$(ir.$$.fragment,o),$(Ol.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Al.$$.fragment,o),$(Il.$$.fragment,o),$(hr.$$.fragment,o),$(Wl.$$.fragment,o),$(mr.$$.fragment,o),$(fr.$$.fragment,o),$(Hl.$$.fragment,o),$(Rl.$$.fragment,o),$(gr.$$.fragment,o),$(Jl.$$.fragment,o),$(_r.$$.fragment,o),$(br.$$.fragment,o),$(kr.$$.fragment,o),$(Gl.$$.fragment,o),$(Xl.$$.fragment,o),$(vr.$$.fragment,o),$(td.$$.fragment,o),$(Tr.$$.fragment,o),$(wr.$$.fragment,o),$(od.$$.fragment,o),$(nd.$$.fragment,o),$(xr.$$.fragment,o),$(id.$$.fragment,o),$(Fr.$$.fragment,o),$(Br.$$.fragment,o),$(Mr.$$.fragment,o),$(ld.$$.fragment,o),$(dd.$$.fragment,o),$(zr.$$.fragment,o),$(md.$$.fragment,o),$(Pr.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(fd.$$.fragment,o),$(ud.$$.fragment,o),$(wd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$($d.$$.fragment,o),$(xd.$$.fragment,o),$(jd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Wd.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(Hd.$$.fragment,o),$(Rd.$$.fragment,o),$(ec.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(pc.$$.fragment,o),$(Qr.$$.fragment,o),$(Kr.$$.fragment,o),$(hc.$$.fragment,o),$(mc.$$.fragment,o),$(vc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(Tc.$$.fragment,o),$(wc.$$.fragment,o),$(Pc.$$.fragment,o),$(Zr.$$.fragment,o),$(ea.$$.fragment,o),$(qc.$$.fragment,o),$(jc.$$.fragment,o),$(Sc.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(Uc.$$.fragment,o),$(Wc.$$.fragment,o),$(Xc.$$.fragment,o),$(ra.$$.fragment,o),$(aa.$$.fragment,o),lk=!0)},o(o){x(l.$$.fragment,o),x(re.$$.fragment,o),x(Ee.$$.fragment,o),x(Na.$$.fragment,o),x(ds.$$.fragment,o),x(Aa.$$.fragment,o),x(Ia.$$.fragment,o),x(Da.$$.fragment,o),x(Ua.$$.fragment,o),x(Ha.$$.fragment,o),x(hs.$$.fragment,o),x(Ra.$$.fragment,o),x(Va.$$.fragment,o),x(Qa.$$.fragment,o),x(Ga.$$.fragment,o),x(Ya.$$.fragment,o),x(fs.$$.fragment,o),x(Za.$$.fragment,o),x(ei.$$.fragment,o),x(oi.$$.fragment,o),x(si.$$.fragment,o),x(ai.$$.fragment,o),x(ii.$$.fragment,o),x(li.$$.fragment,o),x(fi.$$.fragment,o),x(bs.$$.fragment,o),x(ks.$$.fragment,o),x(ui.$$.fragment,o),x(gi.$$.fragment,o),x(yi.$$.fragment,o),x(vs.$$.fragment,o),x(Ts.$$.fragment,o),x(vi.$$.fragment,o),x(Ti.$$.fragment,o),x(Bi.$$.fragment,o),x($s.$$.fragment,o),x(xs.$$.fragment,o),x(Mi.$$.fragment,o),x(Ei.$$.fragment,o),x(Ci.$$.fragment,o),x(Bs.$$.fragment,o),x(Ms.$$.fragment,o),x(Es.$$.fragment,o),x(Ni.$$.fragment,o),x(Oi.$$.fragment,o),x(Si.$$.fragment,o),x(Ps.$$.fragment,o),x(qs.$$.fragment,o),x(Ui.$$.fragment,o),x(Wi.$$.fragment,o),x(Qi.$$.fragment,o),x(Cs.$$.fragment,o),x(Ns.$$.fragment,o),x(Os.$$.fragment,o),x(As.$$.fragment,o),x(Is.$$.fragment,o),x(Ki.$$.fragment,o),x(Ji.$$.fragment,o),x(Zi.$$.fragment,o),x(Ds.$$.fragment,o),x(Ss.$$.fragment,o),x(el.$$.fragment,o),x(tl.$$.fragment,o),x(rl.$$.fragment,o),x(Ws.$$.fragment,o),x(Hs.$$.fragment,o),x(Rs.$$.fragment,o),x(al.$$.fragment,o),x(il.$$.fragment,o),x(pl.$$.fragment,o),x(Qs.$$.fragment,o),x(Ks.$$.fragment,o),x(Js.$$.fragment,o),x(hl.$$.fragment,o),x(ml.$$.fragment,o),x(Xs.$$.fragment,o),x(_l.$$.fragment,o),x(Ys.$$.fragment,o),x(Zs.$$.fragment,o),x(bl.$$.fragment,o),x(kl.$$.fragment,o),x(tr.$$.fragment,o),x(wl.$$.fragment,o),x(or.$$.fragment,o),x(nr.$$.fragment,o),x($l.$$.fragment,o),x(xl.$$.fragment,o),x(Fl.$$.fragment,o),x(rr.$$.fragment,o),x(zl.$$.fragment,o),x(Pl.$$.fragment,o),x(ir.$$.fragment,o),x(Ol.$$.fragment,o),x(lr.$$.fragment,o),x(dr.$$.fragment,o),x(cr.$$.fragment,o),x(Al.$$.fragment,o),x(Il.$$.fragment,o),x(hr.$$.fragment,o),x(Wl.$$.fragment,o),x(mr.$$.fragment,o),x(fr.$$.fragment,o),x(Hl.$$.fragment,o),x(Rl.$$.fragment,o),x(gr.$$.fragment,o),x(Jl.$$.fragment,o),x(_r.$$.fragment,o),x(br.$$.fragment,o),x(kr.$$.fragment,o),x(Gl.$$.fragment,o),x(Xl.$$.fragment,o),x(vr.$$.fragment,o),x(td.$$.fragment,o),x(Tr.$$.fragment,o),x(wr.$$.fragment,o),x(od.$$.fragment,o),x(nd.$$.fragment,o),x(xr.$$.fragment,o),x(id.$$.fragment,o),x(Fr.$$.fragment,o),x(Br.$$.fragment,o),x(Mr.$$.fragment,o),x(ld.$$.fragment,o),x(dd.$$.fragment,o),x(zr.$$.fragment,o),x(md.$$.fragment,o),x(Pr.$$.fragment,o),x(qr.$$.fragment,o),x(jr.$$.fragment,o),x(fd.$$.fragment,o),x(ud.$$.fragment,o),x(wd.$$.fragment,o),x(Nr.$$.fragment,o),x(Or.$$.fragment,o),x($d.$$.fragment,o),x(xd.$$.fragment,o),x(jd.$$.fragment,o),x(Ir.$$.fragment,o),x(Lr.$$.fragment,o),x(Cd.$$.fragment,o),x(Nd.$$.fragment,o),x(Wd.$$.fragment,o),x(Sr.$$.fragment,o),x(Ur.$$.fragment,o),x(Hd.$$.fragment,o),x(Rd.$$.fragment,o),x(ec.$$.fragment,o),x(Hr.$$.fragment,o),x(Rr.$$.fragment,o),x(tc.$$.fragment,o),x(oc.$$.fragment,o),x(pc.$$.fragment,o),x(Qr.$$.fragment,o),x(Kr.$$.fragment,o),x(hc.$$.fragment,o),x(mc.$$.fragment,o),x(vc.$$.fragment,o),x(Gr.$$.fragment,o),x(Xr.$$.fragment,o),x(Tc.$$.fragment,o),x(wc.$$.fragment,o),x(Pc.$$.fragment,o),x(Zr.$$.fragment,o),x(ea.$$.fragment,o),x(qc.$$.fragment,o),x(jc.$$.fragment,o),x(Sc.$$.fragment,o),x(oa.$$.fragment,o),x(na.$$.fragment,o),x(Uc.$$.fragment,o),x(Wc.$$.fragment,o),x(Xc.$$.fragment,o),x(ra.$$.fragment,o),x(aa.$$.fragment,o),lk=!1},d(o){t(d),o&&t(_),o&&t(h),F(l),o&&t(X),o&&t(z),F(re),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t($e),F(Ee),o&&t(Z_),o&&t(Ct),F(Na),F(ds),o&&t(eb),o&&t(Ho),F(Aa),o&&t(tb),o&&t(Ne),F(Ia),F(Da),F(Ua),F(Ha),F(hs),F(Ra),o&&t(ob),o&&t(Vo),F(Va),o&&t(nb),o&&t(rt),F(Qa),F(Ga),F(Ya),F(fs),o&&t(sb),o&&t(Ko),F(Za),o&&t(rb),o&&t(Jo),F(ei),o&&t(ab),o&&t(Go),F(oi),o&&t(ib),o&&t(ho),F(si),F(ai),o&&t(lb),o&&t(Xo),F(ii),o&&t(db),o&&t(Oe),F(li),F(fi),F(bs),F(ks),o&&t(cb),o&&t(Zo),F(ui),o&&t(pb),o&&t(at),F(gi),F(yi),F(vs),F(Ts),o&&t(hb),o&&t(on),F(vi),o&&t(mb),o&&t(it),F(Ti),F(Bi),F($s),F(xs),o&&t(fb),o&&t(sn),F(Mi),o&&t(ub),o&&t(lt),F(Ei),F(Ci),F(Bs),F(Ms),F(Es),o&&t(gb),o&&t(an),F(Ni),o&&t(_b),o&&t(dt),F(Oi),F(Si),F(Ps),F(qs),o&&t(bb),o&&t(dn),F(Ui),o&&t(kb),o&&t(ct),F(Wi),F(Qi),F(Cs),F(Ns),F(Os),F(As),F(Is),o&&t(yb),o&&t(pn),F(Ki),o&&t(vb),o&&t(pt),F(Ji),F(Zi),F(Ds),F(Ss),o&&t(Tb),o&&t(mn),F(el),o&&t(wb),o&&t(ht),F(tl),F(rl),F(Ws),F(Hs),F(Rs),o&&t($b),o&&t(un),F(al),o&&t(xb),o&&t(mt),F(il),F(pl),F(Qs),F(Ks),F(Js),o&&t(Fb),o&&t(bn),F(hl),o&&t(Bb),o&&t(Je),F(ml),F(Xs),F(_l),F(Ys),F(Zs),o&&t(Mb),o&&t(yn),F(bl),o&&t(Eb),o&&t(Ge),F(kl),F(tr),F(wl),F(or),F(nr),o&&t(zb),o&&t(wn),F($l),o&&t(Pb),o&&t($n),F(xl),F(Fl),F(rr),o&&t(qb),o&&t(xn),F(zl),o&&t(jb),o&&t(Xe),F(Pl),F(ir),F(Ol),F(lr),F(dr),F(cr),o&&t(Cb),o&&t(Bn),F(Al),o&&t(Nb),o&&t(Ye),F(Il),F(hr),F(Wl),F(mr),F(fr),o&&t(Ob),o&&t(En),F(Hl),o&&t(Ab),o&&t(Ze),F(Rl),F(gr),F(Jl),F(_r),F(br),F(kr),o&&t(Ib),o&&t(Pn),F(Gl),o&&t(Lb),o&&t(et),F(Xl),F(vr),F(td),F(Tr),F(wr),o&&t(Db),o&&t(jn),F(od),o&&t(Sb),o&&t(tt),F(nd),F(xr),F(id),F(Fr),F(Br),F(Mr),o&&t(Ub),o&&t(Nn),F(ld),o&&t(Wb),o&&t(ot),F(dd),F(zr),F(md),F(Pr),F(qr),F(jr),o&&t(Hb),o&&t(In),F(fd),o&&t(Rb),o&&t(Ie),F(ud),F(wd),F(Nr),F(Or),o&&t(Vb),o&&t(Dn),F($d),o&&t(Qb),o&&t(Le),F(xd),F(jd),F(Ir),F(Lr),o&&t(Kb),o&&t(Wn),F(Cd),o&&t(Jb),o&&t(De),F(Nd),F(Wd),F(Sr),F(Ur),o&&t(Gb),o&&t(Rn),F(Hd),o&&t(Xb),o&&t(Se),F(Rd),F(ec),F(Hr),F(Rr),o&&t(Yb),o&&t(Qn),F(tc),o&&t(Zb),o&&t(Ue),F(oc),F(pc),F(Qr),F(Kr),o&&t(ek),o&&t(Jn),F(hc),o&&t(tk),o&&t(We),F(mc),F(vc),F(Gr),F(Xr),o&&t(ok),o&&t(Xn),F(Tc),o&&t(nk),o&&t(He),F(wc),F(Pc),F(Zr),F(ea),o&&t(sk),o&&t(Zn),F(qc),o&&t(rk),o&&t(Re),F(jc),F(Sc),F(oa),F(na),o&&t(ak),o&&t(ts),F(Uc),o&&t(ik),o&&t(Ve),F(Wc),F(Xc),F(ra),F(aa)}}}const tO={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function oO(B){return j5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dO extends E5{constructor(d){super();z5(this,d,oO,eO,P5,{})}}export{dO as default,tO as metadata};
