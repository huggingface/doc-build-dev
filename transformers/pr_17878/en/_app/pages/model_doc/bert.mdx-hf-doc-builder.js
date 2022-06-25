import{S as E5,i as z5,s as P5,e as r,k as c,w as T,t as n,M as q5,c as a,d as t,m as p,a as i,x as v,h as s,b as u,G as e,g as b,y as w,q as $,o as x,B as F,v as j5,L as ne}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as se}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as oe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function C5(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function N5(B){let d,_,h,f,g;return f=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"pair mask has the following format:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function O5(B){let d,_,h,f,g;return f=new se({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"pair mask has the following format:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function A5(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function I5(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function L5(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function D5(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function S5(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function U5(B){let d,_,h,f,g;return f=new se({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function W5(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function H5(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function R5(B){let d,_;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function Q5(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function V5(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function K5(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function J5(B){let d,_,h,f,g;return f=new se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example of single-label classification:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function G5(B){let d,_;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function X5(B){let d,_,h,f,g;return f=new se({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example of multi-label classification:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function Y5(B){let d,_;return d=new se({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function Z5(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function eN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function tN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function oN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function nN(B){let d,_;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function sN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function rN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function aN(B){let d,_;return d=new se({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function iN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function lN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function dN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function cN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function pN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function hN(B){let d,_,h,f,g;return f=new se({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function fN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function mN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function uN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function gN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function _N(B){let d,_;return d=new se({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function bN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function kN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function yN(B){let d,_,h,f,g;return f=new se({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function TN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function vN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function wN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function $N(B){let d,_;return d=new se({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function xN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function FN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function BN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function MN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function EN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function zN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function PN(B){let d,_;return d=new se({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function qN(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),f=a(y,"UL",{});var K=i(f);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var $e=i(H);me=s($e,"input_ids"),$e.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,f,E),e(f,g),e(g,l),e(f,m),e(f,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,fe),b(y,J,E),b(y,O,E),e(O,ae),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(h),y&&t(f),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function jN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function CN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function NN(B){let d,_;return d=new se({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),_=!0},p:ne,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){x(d.$$.fragment,h),_=!1},d(h){F(d,h)}}}function ON(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function AN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function IN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function LN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function DN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function SN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function UN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function WN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function HN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function RN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function QN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function VN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function KN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function JN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function GN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function XN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function YN(B){let d,_,h,f,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),g=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){b(l,d,m),e(d,_),e(d,h),e(h,f),e(d,g)},d(l){l&&t(d)}}}function ZN(B){let d,_,h,f,g;return f=new se({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){b(l,d,m),e(d,_),b(l,h,m),w(f,l,m),g=!0},p:ne,i(l){g||($(f.$$.fragment,l),g=!0)},o(l){x(f.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function eO(B){let d,_,h,f,g,l,m,M,be,X,z,ee,L,re,ke,D,ye,fe,J,O,ae,Y,P,j,ie,H,me,le,S,Te,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe,y,E,K,ze,Be,A,Pe,Me,qe,I,W,$e,Fe,U,Ee,je,he,Ce,Z_,Ct,Na,Zy,po,eT,hp,tT,oT,fp,nT,sT,Oa,rT,aT,iT,Wo,lT,mp,dT,cT,up,pT,hT,fT,ds,eb,Ho,cs,Zh,Aa,mT,ef,uT,tb,Ne,Ia,gT,tf,_T,bT,La,kT,gp,yT,TT,vT,xo,Da,wT,of,$T,xT,Sa,_p,FT,nf,BT,MT,bp,ET,sf,zT,PT,ps,Ua,qT,Wa,jT,rf,CT,NT,OT,Ot,Ha,AT,af,IT,LT,hs,DT,Ro,ST,lf,UT,WT,df,HT,RT,QT,kp,Ra,ob,Qo,fs,cf,Qa,VT,pf,KT,nb,rt,Va,JT,Ka,GT,hf,XT,YT,ZT,Ja,ev,yp,tv,ov,nv,Fo,Ga,sv,ff,rv,av,Xa,Tp,iv,mf,lv,dv,vp,cv,uf,pv,hv,At,Ya,fv,gf,mv,uv,ms,gv,Vo,_v,_f,bv,kv,bf,yv,Tv,sb,Ko,us,kf,Za,vv,yf,wv,rb,Jo,ei,$v,ti,xv,wp,Fv,Bv,ab,Go,oi,Mv,ni,Ev,$p,zv,Pv,ib,ho,si,qv,ri,jv,xp,Cv,Nv,Ov,gs,ai,Av,Tf,Iv,lb,Xo,_s,vf,ii,Lv,wf,Dv,db,Oe,li,Sv,$f,Uv,Wv,di,Hv,Fp,Rv,Qv,Vv,ci,Kv,pi,Jv,Gv,Xv,hi,Yv,fi,Zv,e1,t1,Ke,o1,xf,n1,s1,Ff,r1,a1,Bf,i1,l1,Mf,d1,c1,Ef,p1,h1,zf,f1,m1,u1,It,mi,g1,Yo,_1,Bp,b1,k1,Pf,y1,T1,v1,bs,w1,ks,cb,Zo,ys,qf,ui,$1,jf,x1,pb,at,gi,F1,en,B1,Cf,M1,E1,Nf,z1,P1,q1,_i,j1,Mp,C1,N1,O1,bi,A1,ki,I1,L1,D1,Lt,yi,S1,tn,U1,Ep,W1,H1,Of,R1,Q1,V1,Ts,K1,vs,hb,on,ws,Af,Ti,J1,If,G1,fb,it,vi,X1,wi,Y1,Lf,Z1,ew,tw,$i,ow,zp,nw,sw,rw,xi,aw,Fi,iw,lw,dw,Dt,Bi,cw,nn,pw,Pp,hw,fw,Df,mw,uw,gw,$s,_w,xs,mb,sn,Fs,Sf,Mi,bw,Uf,kw,ub,lt,Ei,yw,zi,Tw,Wf,vw,ww,$w,Pi,xw,qp,Fw,Bw,Mw,qi,Ew,ji,zw,Pw,qw,mt,Ci,jw,rn,Cw,jp,Nw,Ow,Hf,Aw,Iw,Lw,Bs,Dw,Ms,Sw,Es,gb,an,zs,Rf,Ni,Uw,Qf,Ww,_b,dt,Oi,Hw,Ai,Rw,Vf,Qw,Vw,Kw,Ii,Jw,Cp,Gw,Xw,Yw,Li,Zw,Di,e$,t$,o$,St,Si,n$,ln,s$,Np,r$,a$,Kf,i$,l$,d$,Ps,c$,qs,bb,dn,js,Jf,Ui,p$,Gf,h$,kb,ct,Wi,f$,Xf,m$,u$,Hi,g$,Op,_$,b$,k$,Ri,y$,Qi,T$,v$,w$,Ve,Vi,$$,cn,x$,Ap,F$,B$,Yf,M$,E$,z$,Cs,P$,Ns,q$,Os,j$,As,C$,Is,yb,pn,Ls,Zf,Ki,N$,em,O$,Tb,pt,Ji,A$,tm,I$,L$,Gi,D$,Ip,S$,U$,W$,Xi,H$,Yi,R$,Q$,V$,Ut,Zi,K$,hn,J$,Lp,G$,X$,om,Y$,Z$,e2,Ds,t2,Ss,vb,fn,Us,nm,el,o2,sm,n2,wb,ht,tl,s2,rm,r2,a2,ol,i2,Dp,l2,d2,c2,nl,p2,sl,h2,f2,m2,ut,rl,u2,mn,g2,Sp,_2,b2,am,k2,y2,T2,Ws,v2,Hs,w2,Rs,$b,un,Qs,im,al,$2,lm,x2,xb,ft,il,F2,gn,B2,dm,M2,E2,cm,z2,P2,q2,ll,j2,Up,C2,N2,O2,dl,A2,cl,I2,L2,D2,gt,pl,S2,_n,U2,Wp,W2,H2,pm,R2,Q2,V2,Vs,K2,Ks,J2,Js,Fb,bn,Gs,hm,hl,G2,fm,X2,Bb,Je,fl,Y2,mm,Z2,ex,ml,tx,Hp,ox,nx,sx,ul,rx,gl,ax,ix,lx,Xs,dx,Wt,_l,cx,kn,px,Rp,hx,fx,um,mx,ux,gx,Ys,_x,Zs,Mb,yn,er,gm,bl,bx,_m,kx,Eb,Ge,kl,yx,Tn,Tx,bm,vx,wx,km,$x,xx,Fx,yl,Bx,Qp,Mx,Ex,zx,Tl,Px,vl,qx,jx,Cx,tr,Nx,Ht,wl,Ox,vn,Ax,Vp,Ix,Lx,ym,Dx,Sx,Ux,or,Wx,nr,zb,wn,sr,Tm,$l,Hx,vm,Rx,Pb,$n,xl,Qx,_t,Fl,Vx,Ae,Kx,wm,Jx,Gx,$m,Xx,Yx,xm,Zx,eF,Fm,tF,oF,Bm,nF,sF,Mm,rF,aF,Em,iF,lF,dF,Bl,Ml,cF,zm,pF,hF,fF,El,mF,Pm,uF,gF,_F,G,bF,qm,kF,yF,jm,TF,vF,Cm,wF,$F,Nm,xF,FF,Om,BF,MF,Am,EF,zF,Im,PF,qF,Lm,jF,CF,Dm,NF,OF,Sm,AF,IF,Um,LF,DF,Wm,SF,UF,Hm,WF,HF,Rm,RF,QF,Qm,VF,KF,Vm,JF,GF,Km,XF,YF,Jm,ZF,e0,Gm,t0,o0,Xm,n0,s0,r0,rr,qb,xn,ar,Ym,zl,a0,Zm,i0,jb,Xe,Pl,l0,ql,d0,eu,c0,p0,h0,jl,f0,Kp,m0,u0,g0,Cl,_0,Nl,b0,k0,y0,ir,T0,bt,Ol,v0,Fn,w0,Jp,$0,x0,tu,F0,B0,M0,lr,E0,dr,z0,cr,Cb,Bn,pr,ou,Al,P0,nu,q0,Nb,Ye,Il,j0,Ll,C0,su,N0,O0,A0,Dl,I0,Gp,L0,D0,S0,Sl,U0,Ul,W0,H0,R0,hr,Q0,Rt,Wl,V0,Mn,K0,Xp,J0,G0,ru,X0,Y0,Z0,fr,e8,mr,Ob,En,ur,au,Hl,t8,iu,o8,Ab,Ze,Rl,n8,lu,s8,r8,Ql,a8,Yp,i8,l8,d8,Vl,c8,Kl,p8,h8,f8,gr,m8,kt,Jl,u8,zn,g8,Zp,_8,b8,du,k8,y8,T8,_r,v8,br,w8,kr,Ib,Pn,yr,cu,Gl,$8,pu,x8,Lb,et,Xl,F8,hu,B8,M8,Yl,E8,eh,z8,P8,q8,Zl,j8,ed,C8,N8,O8,Tr,A8,Qt,td,I8,qn,L8,th,D8,S8,fu,U8,W8,H8,vr,R8,wr,Db,jn,$r,mu,od,Q8,uu,V8,Sb,tt,nd,K8,gu,J8,G8,sd,X8,oh,Y8,Z8,e7,rd,t7,ad,o7,n7,s7,xr,r7,yt,id,a7,Cn,i7,nh,l7,d7,_u,c7,p7,h7,Fr,f7,Br,m7,Mr,Ub,Nn,Er,bu,ld,u7,ku,g7,Wb,ot,dd,_7,On,b7,yu,k7,y7,Tu,T7,v7,w7,cd,$7,sh,x7,F7,B7,pd,M7,hd,E7,z7,P7,zr,q7,Tt,fd,j7,An,C7,rh,N7,O7,vu,A7,I7,L7,Pr,D7,qr,S7,jr,Hb,In,Cr,wu,md,U7,$u,W7,Rb,Ie,ud,H7,xu,R7,Q7,gd,V7,ah,K7,J7,G7,_d,X7,bd,Y7,Z7,eB,Fu,tB,oB,fo,Bu,kd,nB,sB,Mu,yd,rB,aB,Eu,Td,iB,lB,zu,vd,dB,cB,Vt,wd,pB,Ln,hB,Pu,fB,mB,qu,uB,gB,_B,Nr,bB,Or,Qb,Dn,Ar,ju,$d,kB,Cu,yB,Vb,Le,xd,TB,Sn,vB,Nu,wB,$B,Ou,xB,FB,BB,Fd,MB,ih,EB,zB,PB,Bd,qB,Md,jB,CB,NB,Au,OB,AB,mo,Iu,Ed,IB,LB,Lu,zd,DB,SB,Du,Pd,UB,WB,Su,qd,HB,RB,Kt,jd,QB,Un,VB,Uu,KB,JB,Wu,GB,XB,YB,Ir,ZB,Lr,Kb,Wn,Dr,Hu,Cd,eM,Ru,tM,Jb,De,Nd,oM,Qu,nM,sM,Od,rM,lh,aM,iM,lM,Ad,dM,Id,cM,pM,hM,Vu,fM,mM,uo,Ku,Ld,uM,gM,Ju,Dd,_M,bM,Gu,Sd,kM,yM,Xu,Ud,TM,vM,Jt,Wd,wM,Hn,$M,Yu,xM,FM,Zu,BM,MM,EM,Sr,zM,Ur,Gb,Rn,Wr,eg,Hd,PM,tg,qM,Xb,Se,Rd,jM,Qd,CM,og,NM,OM,AM,Vd,IM,dh,LM,DM,SM,Kd,UM,Jd,WM,HM,RM,ng,QM,VM,go,sg,Gd,KM,JM,rg,Xd,GM,XM,ag,Yd,YM,ZM,ig,Zd,eE,tE,Gt,ec,oE,Qn,nE,lg,sE,rE,dg,aE,iE,lE,Hr,dE,Rr,Yb,Vn,Qr,cg,tc,cE,pg,pE,Zb,Ue,oc,hE,nc,fE,hg,mE,uE,gE,sc,_E,ch,bE,kE,yE,rc,TE,ac,vE,wE,$E,fg,xE,FE,_o,mg,ic,BE,ME,ug,lc,EE,zE,gg,dc,PE,qE,_g,cc,jE,CE,Xt,pc,NE,Kn,OE,bg,AE,IE,kg,LE,DE,SE,Vr,UE,Kr,ek,Jn,Jr,yg,hc,WE,Tg,HE,tk,We,fc,RE,vg,QE,VE,mc,KE,ph,JE,GE,XE,uc,YE,gc,ZE,ez,tz,wg,oz,nz,bo,$g,_c,sz,rz,xg,bc,az,iz,Fg,kc,lz,dz,Bg,yc,cz,pz,Yt,Tc,hz,Gn,fz,Mg,mz,uz,Eg,gz,_z,bz,Gr,kz,Xr,ok,Xn,Yr,zg,vc,yz,Pg,Tz,nk,He,wc,vz,qg,wz,$z,$c,xz,hh,Fz,Bz,Mz,xc,Ez,Fc,zz,Pz,qz,jg,jz,Cz,ko,Cg,Bc,Nz,Oz,Ng,Mc,Az,Iz,Og,Ec,Lz,Dz,Ag,zc,Sz,Uz,Zt,Pc,Wz,Yn,Hz,Ig,Rz,Qz,Lg,Vz,Kz,Jz,Zr,Gz,ea,sk,Zn,ta,Dg,qc,Xz,Sg,Yz,rk,Re,jc,Zz,Ug,e4,t4,Cc,o4,fh,n4,s4,r4,Nc,a4,Oc,i4,l4,d4,Wg,c4,p4,yo,Hg,Ac,h4,f4,Rg,Ic,m4,u4,Qg,Lc,g4,_4,Vg,Dc,b4,k4,eo,Sc,y4,es,T4,Kg,v4,w4,Jg,$4,x4,F4,oa,B4,na,ak,ts,sa,Gg,Uc,M4,Xg,E4,ik,Qe,Wc,z4,os,P4,Yg,q4,j4,Zg,C4,N4,O4,Hc,A4,mh,I4,L4,D4,Rc,S4,Qc,U4,W4,H4,e_,R4,Q4,To,t_,Vc,V4,K4,o_,Kc,J4,G4,n_,Jc,X4,Y4,s_,Gc,Z4,eP,to,Xc,tP,ns,oP,r_,nP,sP,a_,rP,aP,iP,ra,lP,aa,lk;return l=new xe({}),re=new xe({}),Ee=new xe({}),Na=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/configuration_bert.py#L72"}}),ds=new oe({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[C5]},$$scope:{ctx:B}}}),Aa=new xe({}),Ia=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert.py#L137"}}),Da=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ua=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ha=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new oe({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[N5]},$$scope:{ctx:B}}}),Ra=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert.py#L350"}}),Qa=new xe({}),Va=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),Ga=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ya=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new oe({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[O5]},$$scope:{ctx:B}}}),Za=new xe({}),ei=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L767"}}),oi=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),si=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L61"}}),ai=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/flax/struct.py#L109"}}),ii=new xe({}),li=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L870"}}),mi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new we({props:{$$slots:{default:[A5]},$$scope:{ctx:B}}}),ks=new oe({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[I5]},$$scope:{ctx:B}}}),ui=new xe({}),gi=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1053"}}),yi=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1069",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ts=new we({props:{$$slots:{default:[L5]},$$scope:{ctx:B}}}),vs=new oe({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[D5]},$$scope:{ctx:B}}}),Ti=new xe({}),vi=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1157"}}),Bi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$s=new we({props:{$$slots:{default:[S5]},$$scope:{ctx:B}}}),xs=new oe({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[U5]},$$scope:{ctx:B}}}),Mi=new xe({}),Ei=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1292"}}),Ci=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new we({props:{$$slots:{default:[W5]},$$scope:{ctx:B}}}),Ms=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[H5]},$$scope:{ctx:B}}}),Es=new oe({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[R5]},$$scope:{ctx:B}}}),Ni=new xe({}),Oi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1405"}}),Si=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1415",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new we({props:{$$slots:{default:[Q5]},$$scope:{ctx:B}}}),qs=new oe({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[V5]},$$scope:{ctx:B}}}),Ui=new xe({}),Wi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1510"}}),Vi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1526",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new we({props:{$$slots:{default:[K5]},$$scope:{ctx:B}}}),Ns=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[J5]},$$scope:{ctx:B}}}),Os=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[G5]},$$scope:{ctx:B}}}),As=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[X5]},$$scope:{ctx:B}}}),Is=new oe({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[Y5]},$$scope:{ctx:B}}}),Ki=new xe({}),Ji=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1614"}}),Zi=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new we({props:{$$slots:{default:[Z5]},$$scope:{ctx:B}}}),Ss=new oe({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[eN]},$$scope:{ctx:B}}}),el=new xe({}),tl=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1709"}}),rl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new we({props:{$$slots:{default:[tN]},$$scope:{ctx:B}}}),Hs=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),Rs=new oe({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[nN]},$$scope:{ctx:B}}}),al=new xe({}),il=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1796"}}),pl=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_bert.py#L1810",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vs=new we({props:{$$slots:{default:[sN]},$$scope:{ctx:B}}}),Ks=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[rN]},$$scope:{ctx:B}}}),Js=new oe({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[aN]},$$scope:{ctx:B}}}),hl=new xe({}),fl=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),Xs=new we({props:{$$slots:{default:[iN]},$$scope:{ctx:B}}}),_l=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[lN]},$$scope:{ctx:B}}}),Zs=new oe({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[dN]},$$scope:{ctx:B}}}),bl=new xe({}),kl=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),tr=new we({props:{$$slots:{default:[cN]},$$scope:{ctx:B}}}),wl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new we({props:{$$slots:{default:[pN]},$$scope:{ctx:B}}}),nr=new oe({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[hN]},$$scope:{ctx:B}}}),$l=new xe({}),xl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),Fl=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rr=new oe({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[fN]},$$scope:{ctx:B}}}),zl=new xe({}),Pl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),ir=new we({props:{$$slots:{default:[mN]},$$scope:{ctx:B}}}),Ol=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),lr=new we({props:{$$slots:{default:[uN]},$$scope:{ctx:B}}}),dr=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[gN]},$$scope:{ctx:B}}}),cr=new oe({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[_N]},$$scope:{ctx:B}}}),Al=new xe({}),Il=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),hr=new we({props:{$$slots:{default:[bN]},$$scope:{ctx:B}}}),Wl=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fr=new we({props:{$$slots:{default:[kN]},$$scope:{ctx:B}}}),mr=new oe({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[yN]},$$scope:{ctx:B}}}),Hl=new xe({}),Rl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),gr=new we({props:{$$slots:{default:[TN]},$$scope:{ctx:B}}}),Jl=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_r=new we({props:{$$slots:{default:[vN]},$$scope:{ctx:B}}}),br=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[wN]},$$scope:{ctx:B}}}),kr=new oe({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[$N]},$$scope:{ctx:B}}}),Gl=new xe({}),Xl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),Tr=new we({props:{$$slots:{default:[xN]},$$scope:{ctx:B}}}),td=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vr=new we({props:{$$slots:{default:[FN]},$$scope:{ctx:B}}}),wr=new oe({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[BN]},$$scope:{ctx:B}}}),od=new xe({}),nd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),xr=new we({props:{$$slots:{default:[MN]},$$scope:{ctx:B}}}),id=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new we({props:{$$slots:{default:[EN]},$$scope:{ctx:B}}}),Br=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[zN]},$$scope:{ctx:B}}}),Mr=new oe({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[PN]},$$scope:{ctx:B}}}),ld=new xe({}),dd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),zr=new we({props:{$$slots:{default:[qN]},$$scope:{ctx:B}}}),fd=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pr=new we({props:{$$slots:{default:[jN]},$$scope:{ctx:B}}}),qr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[CN]},$$scope:{ctx:B}}}),jr=new oe({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[NN]},$$scope:{ctx:B}}}),md=new xe({}),ud=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L994"}}),wd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new we({props:{$$slots:{default:[ON]},$$scope:{ctx:B}}}),Or=new oe({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[AN]},$$scope:{ctx:B}}}),$d=new xe({}),xd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1067"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new we({props:{$$slots:{default:[IN]},$$scope:{ctx:B}}}),Lr=new oe({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[LN]},$$scope:{ctx:B}}}),Cd=new xe({}),Nd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1605"}}),Wd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new we({props:{$$slots:{default:[DN]},$$scope:{ctx:B}}}),Ur=new oe({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[SN]},$$scope:{ctx:B}}}),Hd=new xe({}),Rd=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1152"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new we({props:{$$slots:{default:[UN]},$$scope:{ctx:B}}}),Rr=new oe({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[WN]},$$scope:{ctx:B}}}),tc=new xe({}),oc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1213"}}),pc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vr=new we({props:{$$slots:{default:[HN]},$$scope:{ctx:B}}}),Kr=new oe({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[RN]},$$scope:{ctx:B}}}),hc=new xe({}),fc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1311"}}),Tc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new we({props:{$$slots:{default:[QN]},$$scope:{ctx:B}}}),Xr=new oe({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[VN]},$$scope:{ctx:B}}}),vc=new xe({}),wc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1387"}}),Pc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zr=new we({props:{$$slots:{default:[KN]},$$scope:{ctx:B}}}),ea=new oe({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[JN]},$$scope:{ctx:B}}}),qc=new xe({}),jc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1459"}}),Sc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oa=new we({props:{$$slots:{default:[GN]},$$scope:{ctx:B}}}),na=new oe({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[XN]},$$scope:{ctx:B}}}),Uc=new xe({}),Wc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L1526"}}),Xc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17878/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17878/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17878/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17878/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new we({props:{$$slots:{default:[YN]},$$scope:{ctx:B}}}),aa=new oe({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[ZN]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),h=r("h1"),f=r("a"),g=r("span"),T(l.$$.fragment),m=c(),M=r("span"),be=n("BERT"),X=c(),z=r("h2"),ee=r("a"),L=r("span"),T(re.$$.fragment),ke=c(),D=r("span"),ye=n("Overview"),fe=c(),J=r("p"),O=n("The BERT model was proposed in "),ae=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),me=c(),le=r("p"),S=r("em"),Te=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),Q=n("Tips:"),_e=c(),te=r("ul"),N=r("li"),ve=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),V=c(),pe=r("li"),y=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),A=n("thomwolf"),Pe=n(". The original code can be found "),Me=r("a"),qe=n("here"),I=n("."),W=c(),$e=r("h2"),Fe=r("a"),U=r("span"),T(Ee.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),Z_=c(),Ct=r("div"),T(Na.$$.fragment),Zy=c(),po=r("p"),eT=n("This is the configuration class to store the configuration of a "),hp=r("a"),tT=n("BertModel"),oT=n(" or a "),fp=r("a"),nT=n("TFBertModel"),sT=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Oa=r("a"),rT=n("bert-base-uncased"),aT=n(" architecture."),iT=c(),Wo=r("p"),lT=n("Configuration objects inherit from "),mp=r("a"),dT=n("PretrainedConfig"),cT=n(` and can be used to control the model outputs. Read the
documentation from `),up=r("a"),pT=n("PretrainedConfig"),hT=n(" for more information."),fT=c(),T(ds.$$.fragment),eb=c(),Ho=r("h2"),cs=r("a"),Zh=r("span"),T(Aa.$$.fragment),mT=c(),ef=r("span"),uT=n("BertTokenizer"),tb=c(),Ne=r("div"),T(Ia.$$.fragment),gT=c(),tf=r("p"),_T=n("Construct a BERT tokenizer. Based on WordPiece."),bT=c(),La=r("p"),kT=n("This tokenizer inherits from "),gp=r("a"),yT=n("PreTrainedTokenizer"),TT=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vT=c(),xo=r("div"),T(Da.$$.fragment),wT=c(),of=r("p"),$T=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),xT=c(),Sa=r("ul"),_p=r("li"),FT=n("single sequence: "),nf=r("code"),BT=n("[CLS] X [SEP]"),MT=c(),bp=r("li"),ET=n("pair of sequences: "),sf=r("code"),zT=n("[CLS] A [SEP] B [SEP]"),PT=c(),ps=r("div"),T(Ua.$$.fragment),qT=c(),Wa=r("p"),jT=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rf=r("code"),CT=n("prepare_for_model"),NT=n(" method."),OT=c(),Ot=r("div"),T(Ha.$$.fragment),AT=c(),af=r("p"),IT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),LT=c(),T(hs.$$.fragment),DT=c(),Ro=r("p"),ST=n("If "),lf=r("code"),UT=n("token_ids_1"),WT=n(" is "),df=r("code"),HT=n("None"),RT=n(", this method only returns the first portion of the mask (0s)."),QT=c(),kp=r("div"),T(Ra.$$.fragment),ob=c(),Qo=r("h2"),fs=r("a"),cf=r("span"),T(Qa.$$.fragment),VT=c(),pf=r("span"),KT=n("BertTokenizerFast"),nb=c(),rt=r("div"),T(Va.$$.fragment),JT=c(),Ka=r("p"),GT=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),hf=r("em"),XT=n("tokenizers"),YT=n(" library). Based on WordPiece."),ZT=c(),Ja=r("p"),ev=n("This tokenizer inherits from "),yp=r("a"),tv=n("PreTrainedTokenizerFast"),ov=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),nv=c(),Fo=r("div"),T(Ga.$$.fragment),sv=c(),ff=r("p"),rv=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),av=c(),Xa=r("ul"),Tp=r("li"),iv=n("single sequence: "),mf=r("code"),lv=n("[CLS] X [SEP]"),dv=c(),vp=r("li"),cv=n("pair of sequences: "),uf=r("code"),pv=n("[CLS] A [SEP] B [SEP]"),hv=c(),At=r("div"),T(Ya.$$.fragment),fv=c(),gf=r("p"),mv=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),uv=c(),T(ms.$$.fragment),gv=c(),Vo=r("p"),_v=n("If "),_f=r("code"),bv=n("token_ids_1"),kv=n(" is "),bf=r("code"),yv=n("None"),Tv=n(", this method only returns the first portion of the mask (0s)."),sb=c(),Ko=r("h2"),us=r("a"),kf=r("span"),T(Za.$$.fragment),vv=c(),yf=r("span"),wv=n("Bert specific outputs"),rb=c(),Jo=r("div"),T(ei.$$.fragment),$v=c(),ti=r("p"),xv=n("Output type of "),wp=r("a"),Fv=n("BertForPreTraining"),Bv=n("."),ab=c(),Go=r("div"),T(oi.$$.fragment),Mv=c(),ni=r("p"),Ev=n("Output type of "),$p=r("a"),zv=n("TFBertForPreTraining"),Pv=n("."),ib=c(),ho=r("div"),T(si.$$.fragment),qv=c(),ri=r("p"),jv=n("Output type of "),xp=r("a"),Cv=n("BertForPreTraining"),Nv=n("."),Ov=c(),gs=r("div"),T(ai.$$.fragment),Av=c(),Tf=r("p"),Iv=n("\u201CReturns a new object replacing the specified fields with new values."),lb=c(),Xo=r("h2"),_s=r("a"),vf=r("span"),T(ii.$$.fragment),Lv=c(),wf=r("span"),Dv=n("BertModel"),db=c(),Oe=r("div"),T(li.$$.fragment),Sv=c(),$f=r("p"),Uv=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Wv=c(),di=r("p"),Hv=n("This model inherits from "),Fp=r("a"),Rv=n("PreTrainedModel"),Qv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vv=c(),ci=r("p"),Kv=n("This model is also a PyTorch "),pi=r("a"),Jv=n("torch.nn.Module"),Gv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xv=c(),hi=r("p"),Yv=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fi=r("a"),Zv=n(`Attention is
all you need`),e1=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),t1=c(),Ke=r("p"),o1=n("To behave as an decoder the model needs to be initialized with the "),xf=r("code"),n1=n("is_decoder"),s1=n(` argument of the configuration set
to `),Ff=r("code"),r1=n("True"),a1=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Bf=r("code"),i1=n("is_decoder"),l1=n(` argument and
`),Mf=r("code"),d1=n("add_cross_attention"),c1=n(" set to "),Ef=r("code"),p1=n("True"),h1=n("; an "),zf=r("code"),f1=n("encoder_hidden_states"),m1=n(" is then expected as an input to the forward pass."),u1=c(),It=r("div"),T(mi.$$.fragment),g1=c(),Yo=r("p"),_1=n("The "),Bp=r("a"),b1=n("BertModel"),k1=n(" forward method, overrides the "),Pf=r("code"),y1=n("__call__"),T1=n(" special method."),v1=c(),T(bs.$$.fragment),w1=c(),T(ks.$$.fragment),cb=c(),Zo=r("h2"),ys=r("a"),qf=r("span"),T(ui.$$.fragment),$1=c(),jf=r("span"),x1=n("BertForPreTraining"),pb=c(),at=r("div"),T(gi.$$.fragment),F1=c(),en=r("p"),B1=n("Bert Model with two heads on top as done during the pretraining: a "),Cf=r("code"),M1=n("masked language modeling"),E1=n(" head and a "),Nf=r("code"),z1=n("next sentence prediction (classification)"),P1=n(" head."),q1=c(),_i=r("p"),j1=n("This model inherits from "),Mp=r("a"),C1=n("PreTrainedModel"),N1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O1=c(),bi=r("p"),A1=n("This model is also a PyTorch "),ki=r("a"),I1=n("torch.nn.Module"),L1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D1=c(),Lt=r("div"),T(yi.$$.fragment),S1=c(),tn=r("p"),U1=n("The "),Ep=r("a"),W1=n("BertForPreTraining"),H1=n(" forward method, overrides the "),Of=r("code"),R1=n("__call__"),Q1=n(" special method."),V1=c(),T(Ts.$$.fragment),K1=c(),T(vs.$$.fragment),hb=c(),on=r("h2"),ws=r("a"),Af=r("span"),T(Ti.$$.fragment),J1=c(),If=r("span"),G1=n("BertLMHeadModel"),fb=c(),it=r("div"),T(vi.$$.fragment),X1=c(),wi=r("p"),Y1=n("Bert Model with a "),Lf=r("code"),Z1=n("language modeling"),ew=n(" head on top for CLM fine-tuning."),tw=c(),$i=r("p"),ow=n("This model inherits from "),zp=r("a"),nw=n("PreTrainedModel"),sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rw=c(),xi=r("p"),aw=n("This model is also a PyTorch "),Fi=r("a"),iw=n("torch.nn.Module"),lw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dw=c(),Dt=r("div"),T(Bi.$$.fragment),cw=c(),nn=r("p"),pw=n("The "),Pp=r("a"),hw=n("BertLMHeadModel"),fw=n(" forward method, overrides the "),Df=r("code"),mw=n("__call__"),uw=n(" special method."),gw=c(),T($s.$$.fragment),_w=c(),T(xs.$$.fragment),mb=c(),sn=r("h2"),Fs=r("a"),Sf=r("span"),T(Mi.$$.fragment),bw=c(),Uf=r("span"),kw=n("BertForMaskedLM"),ub=c(),lt=r("div"),T(Ei.$$.fragment),yw=c(),zi=r("p"),Tw=n("Bert Model with a "),Wf=r("code"),vw=n("language modeling"),ww=n(" head on top."),$w=c(),Pi=r("p"),xw=n("This model inherits from "),qp=r("a"),Fw=n("PreTrainedModel"),Bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mw=c(),qi=r("p"),Ew=n("This model is also a PyTorch "),ji=r("a"),zw=n("torch.nn.Module"),Pw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qw=c(),mt=r("div"),T(Ci.$$.fragment),jw=c(),rn=r("p"),Cw=n("The "),jp=r("a"),Nw=n("BertForMaskedLM"),Ow=n(" forward method, overrides the "),Hf=r("code"),Aw=n("__call__"),Iw=n(" special method."),Lw=c(),T(Bs.$$.fragment),Dw=c(),T(Ms.$$.fragment),Sw=c(),T(Es.$$.fragment),gb=c(),an=r("h2"),zs=r("a"),Rf=r("span"),T(Ni.$$.fragment),Uw=c(),Qf=r("span"),Ww=n("BertForNextSentencePrediction"),_b=c(),dt=r("div"),T(Oi.$$.fragment),Hw=c(),Ai=r("p"),Rw=n("Bert Model with a "),Vf=r("code"),Qw=n("next sentence prediction (classification)"),Vw=n(" head on top."),Kw=c(),Ii=r("p"),Jw=n("This model inherits from "),Cp=r("a"),Gw=n("PreTrainedModel"),Xw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yw=c(),Li=r("p"),Zw=n("This model is also a PyTorch "),Di=r("a"),e$=n("torch.nn.Module"),t$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),o$=c(),St=r("div"),T(Si.$$.fragment),n$=c(),ln=r("p"),s$=n("The "),Np=r("a"),r$=n("BertForNextSentencePrediction"),a$=n(" forward method, overrides the "),Kf=r("code"),i$=n("__call__"),l$=n(" special method."),d$=c(),T(Ps.$$.fragment),c$=c(),T(qs.$$.fragment),bb=c(),dn=r("h2"),js=r("a"),Jf=r("span"),T(Ui.$$.fragment),p$=c(),Gf=r("span"),h$=n("BertForSequenceClassification"),kb=c(),ct=r("div"),T(Wi.$$.fragment),f$=c(),Xf=r("p"),m$=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),u$=c(),Hi=r("p"),g$=n("This model inherits from "),Op=r("a"),_$=n("PreTrainedModel"),b$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k$=c(),Ri=r("p"),y$=n("This model is also a PyTorch "),Qi=r("a"),T$=n("torch.nn.Module"),v$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w$=c(),Ve=r("div"),T(Vi.$$.fragment),$$=c(),cn=r("p"),x$=n("The "),Ap=r("a"),F$=n("BertForSequenceClassification"),B$=n(" forward method, overrides the "),Yf=r("code"),M$=n("__call__"),E$=n(" special method."),z$=c(),T(Cs.$$.fragment),P$=c(),T(Ns.$$.fragment),q$=c(),T(Os.$$.fragment),j$=c(),T(As.$$.fragment),C$=c(),T(Is.$$.fragment),yb=c(),pn=r("h2"),Ls=r("a"),Zf=r("span"),T(Ki.$$.fragment),N$=c(),em=r("span"),O$=n("BertForMultipleChoice"),Tb=c(),pt=r("div"),T(Ji.$$.fragment),A$=c(),tm=r("p"),I$=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),L$=c(),Gi=r("p"),D$=n("This model inherits from "),Ip=r("a"),S$=n("PreTrainedModel"),U$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W$=c(),Xi=r("p"),H$=n("This model is also a PyTorch "),Yi=r("a"),R$=n("torch.nn.Module"),Q$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),V$=c(),Ut=r("div"),T(Zi.$$.fragment),K$=c(),hn=r("p"),J$=n("The "),Lp=r("a"),G$=n("BertForMultipleChoice"),X$=n(" forward method, overrides the "),om=r("code"),Y$=n("__call__"),Z$=n(" special method."),e2=c(),T(Ds.$$.fragment),t2=c(),T(Ss.$$.fragment),vb=c(),fn=r("h2"),Us=r("a"),nm=r("span"),T(el.$$.fragment),o2=c(),sm=r("span"),n2=n("BertForTokenClassification"),wb=c(),ht=r("div"),T(tl.$$.fragment),s2=c(),rm=r("p"),r2=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),a2=c(),ol=r("p"),i2=n("This model inherits from "),Dp=r("a"),l2=n("PreTrainedModel"),d2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c2=c(),nl=r("p"),p2=n("This model is also a PyTorch "),sl=r("a"),h2=n("torch.nn.Module"),f2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),m2=c(),ut=r("div"),T(rl.$$.fragment),u2=c(),mn=r("p"),g2=n("The "),Sp=r("a"),_2=n("BertForTokenClassification"),b2=n(" forward method, overrides the "),am=r("code"),k2=n("__call__"),y2=n(" special method."),T2=c(),T(Ws.$$.fragment),v2=c(),T(Hs.$$.fragment),w2=c(),T(Rs.$$.fragment),$b=c(),un=r("h2"),Qs=r("a"),im=r("span"),T(al.$$.fragment),$2=c(),lm=r("span"),x2=n("BertForQuestionAnswering"),xb=c(),ft=r("div"),T(il.$$.fragment),F2=c(),gn=r("p"),B2=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dm=r("code"),M2=n("span start logits"),E2=n(" and "),cm=r("code"),z2=n("span end logits"),P2=n(")."),q2=c(),ll=r("p"),j2=n("This model inherits from "),Up=r("a"),C2=n("PreTrainedModel"),N2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O2=c(),dl=r("p"),A2=n("This model is also a PyTorch "),cl=r("a"),I2=n("torch.nn.Module"),L2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D2=c(),gt=r("div"),T(pl.$$.fragment),S2=c(),_n=r("p"),U2=n("The "),Wp=r("a"),W2=n("BertForQuestionAnswering"),H2=n(" forward method, overrides the "),pm=r("code"),R2=n("__call__"),Q2=n(" special method."),V2=c(),T(Vs.$$.fragment),K2=c(),T(Ks.$$.fragment),J2=c(),T(Js.$$.fragment),Fb=c(),bn=r("h2"),Gs=r("a"),hm=r("span"),T(hl.$$.fragment),G2=c(),fm=r("span"),X2=n("TFBertModel"),Bb=c(),Je=r("div"),T(fl.$$.fragment),Y2=c(),mm=r("p"),Z2=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),ex=c(),ml=r("p"),tx=n("This model inherits from "),Hp=r("a"),ox=n("TFPreTrainedModel"),nx=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sx=c(),ul=r("p"),rx=n("This model is also a "),gl=r("a"),ax=n("tf.keras.Model"),ix=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lx=c(),T(Xs.$$.fragment),dx=c(),Wt=r("div"),T(_l.$$.fragment),cx=c(),kn=r("p"),px=n("The "),Rp=r("a"),hx=n("TFBertModel"),fx=n(" forward method, overrides the "),um=r("code"),mx=n("__call__"),ux=n(" special method."),gx=c(),T(Ys.$$.fragment),_x=c(),T(Zs.$$.fragment),Mb=c(),yn=r("h2"),er=r("a"),gm=r("span"),T(bl.$$.fragment),bx=c(),_m=r("span"),kx=n("TFBertForPreTraining"),Eb=c(),Ge=r("div"),T(kl.$$.fragment),yx=c(),Tn=r("p"),Tx=n(`Bert Model with two heads on top as done during the pretraining:
a `),bm=r("code"),vx=n("masked language modeling"),wx=n(" head and a "),km=r("code"),$x=n("next sentence prediction (classification)"),xx=n(" head."),Fx=c(),yl=r("p"),Bx=n("This model inherits from "),Qp=r("a"),Mx=n("TFPreTrainedModel"),Ex=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zx=c(),Tl=r("p"),Px=n("This model is also a "),vl=r("a"),qx=n("tf.keras.Model"),jx=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cx=c(),T(tr.$$.fragment),Nx=c(),Ht=r("div"),T(wl.$$.fragment),Ox=c(),vn=r("p"),Ax=n("The "),Vp=r("a"),Ix=n("TFBertForPreTraining"),Lx=n(" forward method, overrides the "),ym=r("code"),Dx=n("__call__"),Sx=n(" special method."),Ux=c(),T(or.$$.fragment),Wx=c(),T(nr.$$.fragment),zb=c(),wn=r("h2"),sr=r("a"),Tm=r("span"),T($l.$$.fragment),Hx=c(),vm=r("span"),Rx=n("TFBertModelLMHeadModel"),Pb=c(),$n=r("div"),T(xl.$$.fragment),Qx=c(),_t=r("div"),T(Fl.$$.fragment),Vx=c(),Ae=r("p"),Kx=n("encoder_hidden_states  ("),wm=r("code"),Jx=n("tf.Tensor"),Gx=n(" of shape "),$m=r("code"),Xx=n("(batch_size, sequence_length, hidden_size)"),Yx=n(", "),xm=r("em"),Zx=n("optional"),eF=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Fm=r("code"),tF=n("tf.Tensor"),oF=n(" of shape "),Bm=r("code"),nF=n("(batch_size, sequence_length)"),sF=n(", "),Mm=r("em"),rF=n("optional"),aF=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Em=r("code"),iF=n("[0, 1]"),lF=n(":"),dF=c(),Bl=r("ul"),Ml=r("li"),cF=n("1 for tokens that are "),zm=r("strong"),pF=n("not masked"),hF=n(","),fF=c(),El=r("li"),mF=n("0 for tokens that are "),Pm=r("strong"),uF=n("masked"),gF=n("."),_F=c(),G=r("p"),bF=n("past_key_values ("),qm=r("code"),kF=n("Tuple[Tuple[tf.Tensor]]"),yF=n(" of length "),jm=r("code"),TF=n("config.n_layers"),vF=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Cm=r("code"),wF=n("past_key_values"),$F=n(" are used, the user can optionally input only the last "),Nm=r("code"),xF=n("decoder_input_ids"),FF=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),Om=r("code"),BF=n("(batch_size, 1)"),MF=n(` instead of all
`),Am=r("code"),EF=n("decoder_input_ids"),zF=n(" of shape "),Im=r("code"),PF=n("(batch_size, sequence_length)"),qF=n(`.
use_cache (`),Lm=r("code"),jF=n("bool"),CF=n(", "),Dm=r("em"),NF=n("optional"),OF=n(", defaults to "),Sm=r("code"),AF=n("True"),IF=n(`):
If set to `),Um=r("code"),LF=n("True"),DF=n(", "),Wm=r("code"),SF=n("past_key_values"),UF=n(` key value states are returned and can be used to speed up decoding (see
`),Hm=r("code"),WF=n("past_key_values"),HF=n("). Set to "),Rm=r("code"),RF=n("False"),QF=n(" during training, "),Qm=r("code"),VF=n("True"),KF=n(` during generation
labels (`),Vm=r("code"),JF=n("tf.Tensor"),GF=n(" or "),Km=r("code"),XF=n("np.ndarray"),YF=n(" of shape "),Jm=r("code"),ZF=n("(batch_size, sequence_length)"),e0=n(", "),Gm=r("em"),t0=n("optional"),o0=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Xm=r("code"),n0=n("[0, ..., config.vocab_size - 1]"),s0=n("."),r0=c(),T(rr.$$.fragment),qb=c(),xn=r("h2"),ar=r("a"),Ym=r("span"),T(zl.$$.fragment),a0=c(),Zm=r("span"),i0=n("TFBertForMaskedLM"),jb=c(),Xe=r("div"),T(Pl.$$.fragment),l0=c(),ql=r("p"),d0=n("Bert Model with a "),eu=r("code"),c0=n("language modeling"),p0=n(" head on top."),h0=c(),jl=r("p"),f0=n("This model inherits from "),Kp=r("a"),m0=n("TFPreTrainedModel"),u0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g0=c(),Cl=r("p"),_0=n("This model is also a "),Nl=r("a"),b0=n("tf.keras.Model"),k0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),y0=c(),T(ir.$$.fragment),T0=c(),bt=r("div"),T(Ol.$$.fragment),v0=c(),Fn=r("p"),w0=n("The "),Jp=r("a"),$0=n("TFBertForMaskedLM"),x0=n(" forward method, overrides the "),tu=r("code"),F0=n("__call__"),B0=n(" special method."),M0=c(),T(lr.$$.fragment),E0=c(),T(dr.$$.fragment),z0=c(),T(cr.$$.fragment),Cb=c(),Bn=r("h2"),pr=r("a"),ou=r("span"),T(Al.$$.fragment),P0=c(),nu=r("span"),q0=n("TFBertForNextSentencePrediction"),Nb=c(),Ye=r("div"),T(Il.$$.fragment),j0=c(),Ll=r("p"),C0=n("Bert Model with a "),su=r("code"),N0=n("next sentence prediction (classification)"),O0=n(" head on top."),A0=c(),Dl=r("p"),I0=n("This model inherits from "),Gp=r("a"),L0=n("TFPreTrainedModel"),D0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S0=c(),Sl=r("p"),U0=n("This model is also a "),Ul=r("a"),W0=n("tf.keras.Model"),H0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),R0=c(),T(hr.$$.fragment),Q0=c(),Rt=r("div"),T(Wl.$$.fragment),V0=c(),Mn=r("p"),K0=n("The "),Xp=r("a"),J0=n("TFBertForNextSentencePrediction"),G0=n(" forward method, overrides the "),ru=r("code"),X0=n("__call__"),Y0=n(" special method."),Z0=c(),T(fr.$$.fragment),e8=c(),T(mr.$$.fragment),Ob=c(),En=r("h2"),ur=r("a"),au=r("span"),T(Hl.$$.fragment),t8=c(),iu=r("span"),o8=n("TFBertForSequenceClassification"),Ab=c(),Ze=r("div"),T(Rl.$$.fragment),n8=c(),lu=r("p"),s8=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),r8=c(),Ql=r("p"),a8=n("This model inherits from "),Yp=r("a"),i8=n("TFPreTrainedModel"),l8=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d8=c(),Vl=r("p"),c8=n("This model is also a "),Kl=r("a"),p8=n("tf.keras.Model"),h8=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),f8=c(),T(gr.$$.fragment),m8=c(),kt=r("div"),T(Jl.$$.fragment),u8=c(),zn=r("p"),g8=n("The "),Zp=r("a"),_8=n("TFBertForSequenceClassification"),b8=n(" forward method, overrides the "),du=r("code"),k8=n("__call__"),y8=n(" special method."),T8=c(),T(_r.$$.fragment),v8=c(),T(br.$$.fragment),w8=c(),T(kr.$$.fragment),Ib=c(),Pn=r("h2"),yr=r("a"),cu=r("span"),T(Gl.$$.fragment),$8=c(),pu=r("span"),x8=n("TFBertForMultipleChoice"),Lb=c(),et=r("div"),T(Xl.$$.fragment),F8=c(),hu=r("p"),B8=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),M8=c(),Yl=r("p"),E8=n("This model inherits from "),eh=r("a"),z8=n("TFPreTrainedModel"),P8=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q8=c(),Zl=r("p"),j8=n("This model is also a "),ed=r("a"),C8=n("tf.keras.Model"),N8=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),O8=c(),T(Tr.$$.fragment),A8=c(),Qt=r("div"),T(td.$$.fragment),I8=c(),qn=r("p"),L8=n("The "),th=r("a"),D8=n("TFBertForMultipleChoice"),S8=n(" forward method, overrides the "),fu=r("code"),U8=n("__call__"),W8=n(" special method."),H8=c(),T(vr.$$.fragment),R8=c(),T(wr.$$.fragment),Db=c(),jn=r("h2"),$r=r("a"),mu=r("span"),T(od.$$.fragment),Q8=c(),uu=r("span"),V8=n("TFBertForTokenClassification"),Sb=c(),tt=r("div"),T(nd.$$.fragment),K8=c(),gu=r("p"),J8=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),G8=c(),sd=r("p"),X8=n("This model inherits from "),oh=r("a"),Y8=n("TFPreTrainedModel"),Z8=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),e7=c(),rd=r("p"),t7=n("This model is also a "),ad=r("a"),o7=n("tf.keras.Model"),n7=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),s7=c(),T(xr.$$.fragment),r7=c(),yt=r("div"),T(id.$$.fragment),a7=c(),Cn=r("p"),i7=n("The "),nh=r("a"),l7=n("TFBertForTokenClassification"),d7=n(" forward method, overrides the "),_u=r("code"),c7=n("__call__"),p7=n(" special method."),h7=c(),T(Fr.$$.fragment),f7=c(),T(Br.$$.fragment),m7=c(),T(Mr.$$.fragment),Ub=c(),Nn=r("h2"),Er=r("a"),bu=r("span"),T(ld.$$.fragment),u7=c(),ku=r("span"),g7=n("TFBertForQuestionAnswering"),Wb=c(),ot=r("div"),T(dd.$$.fragment),_7=c(),On=r("p"),b7=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yu=r("code"),k7=n("span start logits"),y7=n(" and "),Tu=r("code"),T7=n("span end logits"),v7=n(")."),w7=c(),cd=r("p"),$7=n("This model inherits from "),sh=r("a"),x7=n("TFPreTrainedModel"),F7=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B7=c(),pd=r("p"),M7=n("This model is also a "),hd=r("a"),E7=n("tf.keras.Model"),z7=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),P7=c(),T(zr.$$.fragment),q7=c(),Tt=r("div"),T(fd.$$.fragment),j7=c(),An=r("p"),C7=n("The "),rh=r("a"),N7=n("TFBertForQuestionAnswering"),O7=n(" forward method, overrides the "),vu=r("code"),A7=n("__call__"),I7=n(" special method."),L7=c(),T(Pr.$$.fragment),D7=c(),T(qr.$$.fragment),S7=c(),T(jr.$$.fragment),Hb=c(),In=r("h2"),Cr=r("a"),wu=r("span"),T(md.$$.fragment),U7=c(),$u=r("span"),W7=n("FlaxBertModel"),Rb=c(),Ie=r("div"),T(ud.$$.fragment),H7=c(),xu=r("p"),R7=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Q7=c(),gd=r("p"),V7=n("This model inherits from "),ah=r("a"),K7=n("FlaxPreTrainedModel"),J7=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G7=c(),_d=r("p"),X7=n("This model is also a Flax Linen "),bd=r("a"),Y7=n("flax.linen.Module"),Z7=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eB=c(),Fu=r("p"),tB=n("Finally, this model supports inherent JAX features such as:"),oB=c(),fo=r("ul"),Bu=r("li"),kd=r("a"),nB=n("Just-In-Time (JIT) compilation"),sB=c(),Mu=r("li"),yd=r("a"),rB=n("Automatic Differentiation"),aB=c(),Eu=r("li"),Td=r("a"),iB=n("Vectorization"),lB=c(),zu=r("li"),vd=r("a"),dB=n("Parallelization"),cB=c(),Vt=r("div"),T(wd.$$.fragment),pB=c(),Ln=r("p"),hB=n("The "),Pu=r("code"),fB=n("FlaxBertPreTrainedModel"),mB=n(" forward method, overrides the "),qu=r("code"),uB=n("__call__"),gB=n(" special method."),_B=c(),T(Nr.$$.fragment),bB=c(),T(Or.$$.fragment),Qb=c(),Dn=r("h2"),Ar=r("a"),ju=r("span"),T($d.$$.fragment),kB=c(),Cu=r("span"),yB=n("FlaxBertForPreTraining"),Vb=c(),Le=r("div"),T(xd.$$.fragment),TB=c(),Sn=r("p"),vB=n("Bert Model with two heads on top as done during the pretraining: a "),Nu=r("code"),wB=n("masked language modeling"),$B=n(" head and a "),Ou=r("code"),xB=n("next sentence prediction (classification)"),FB=n(" head."),BB=c(),Fd=r("p"),MB=n("This model inherits from "),ih=r("a"),EB=n("FlaxPreTrainedModel"),zB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),PB=c(),Bd=r("p"),qB=n("This model is also a Flax Linen "),Md=r("a"),jB=n("flax.linen.Module"),CB=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),NB=c(),Au=r("p"),OB=n("Finally, this model supports inherent JAX features such as:"),AB=c(),mo=r("ul"),Iu=r("li"),Ed=r("a"),IB=n("Just-In-Time (JIT) compilation"),LB=c(),Lu=r("li"),zd=r("a"),DB=n("Automatic Differentiation"),SB=c(),Du=r("li"),Pd=r("a"),UB=n("Vectorization"),WB=c(),Su=r("li"),qd=r("a"),HB=n("Parallelization"),RB=c(),Kt=r("div"),T(jd.$$.fragment),QB=c(),Un=r("p"),VB=n("The "),Uu=r("code"),KB=n("FlaxBertPreTrainedModel"),JB=n(" forward method, overrides the "),Wu=r("code"),GB=n("__call__"),XB=n(" special method."),YB=c(),T(Ir.$$.fragment),ZB=c(),T(Lr.$$.fragment),Kb=c(),Wn=r("h2"),Dr=r("a"),Hu=r("span"),T(Cd.$$.fragment),eM=c(),Ru=r("span"),tM=n("FlaxBertForCausalLM"),Jb=c(),De=r("div"),T(Nd.$$.fragment),oM=c(),Qu=r("p"),nM=n(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),sM=c(),Od=r("p"),rM=n("This model inherits from "),lh=r("a"),aM=n("FlaxPreTrainedModel"),iM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lM=c(),Ad=r("p"),dM=n("This model is also a Flax Linen "),Id=r("a"),cM=n("flax.linen.Module"),pM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hM=c(),Vu=r("p"),fM=n("Finally, this model supports inherent JAX features such as:"),mM=c(),uo=r("ul"),Ku=r("li"),Ld=r("a"),uM=n("Just-In-Time (JIT) compilation"),gM=c(),Ju=r("li"),Dd=r("a"),_M=n("Automatic Differentiation"),bM=c(),Gu=r("li"),Sd=r("a"),kM=n("Vectorization"),yM=c(),Xu=r("li"),Ud=r("a"),TM=n("Parallelization"),vM=c(),Jt=r("div"),T(Wd.$$.fragment),wM=c(),Hn=r("p"),$M=n("The "),Yu=r("code"),xM=n("FlaxBertPreTrainedModel"),FM=n(" forward method, overrides the "),Zu=r("code"),BM=n("__call__"),MM=n(" special method."),EM=c(),T(Sr.$$.fragment),zM=c(),T(Ur.$$.fragment),Gb=c(),Rn=r("h2"),Wr=r("a"),eg=r("span"),T(Hd.$$.fragment),PM=c(),tg=r("span"),qM=n("FlaxBertForMaskedLM"),Xb=c(),Se=r("div"),T(Rd.$$.fragment),jM=c(),Qd=r("p"),CM=n("Bert Model with a "),og=r("code"),NM=n("language modeling"),OM=n(" head on top."),AM=c(),Vd=r("p"),IM=n("This model inherits from "),dh=r("a"),LM=n("FlaxPreTrainedModel"),DM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),SM=c(),Kd=r("p"),UM=n("This model is also a Flax Linen "),Jd=r("a"),WM=n("flax.linen.Module"),HM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RM=c(),ng=r("p"),QM=n("Finally, this model supports inherent JAX features such as:"),VM=c(),go=r("ul"),sg=r("li"),Gd=r("a"),KM=n("Just-In-Time (JIT) compilation"),JM=c(),rg=r("li"),Xd=r("a"),GM=n("Automatic Differentiation"),XM=c(),ag=r("li"),Yd=r("a"),YM=n("Vectorization"),ZM=c(),ig=r("li"),Zd=r("a"),eE=n("Parallelization"),tE=c(),Gt=r("div"),T(ec.$$.fragment),oE=c(),Qn=r("p"),nE=n("The "),lg=r("code"),sE=n("FlaxBertPreTrainedModel"),rE=n(" forward method, overrides the "),dg=r("code"),aE=n("__call__"),iE=n(" special method."),lE=c(),T(Hr.$$.fragment),dE=c(),T(Rr.$$.fragment),Yb=c(),Vn=r("h2"),Qr=r("a"),cg=r("span"),T(tc.$$.fragment),cE=c(),pg=r("span"),pE=n("FlaxBertForNextSentencePrediction"),Zb=c(),Ue=r("div"),T(oc.$$.fragment),hE=c(),nc=r("p"),fE=n("Bert Model with a "),hg=r("code"),mE=n("next sentence prediction (classification)"),uE=n(" head on top."),gE=c(),sc=r("p"),_E=n("This model inherits from "),ch=r("a"),bE=n("FlaxPreTrainedModel"),kE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yE=c(),rc=r("p"),TE=n("This model is also a Flax Linen "),ac=r("a"),vE=n("flax.linen.Module"),wE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$E=c(),fg=r("p"),xE=n("Finally, this model supports inherent JAX features such as:"),FE=c(),_o=r("ul"),mg=r("li"),ic=r("a"),BE=n("Just-In-Time (JIT) compilation"),ME=c(),ug=r("li"),lc=r("a"),EE=n("Automatic Differentiation"),zE=c(),gg=r("li"),dc=r("a"),PE=n("Vectorization"),qE=c(),_g=r("li"),cc=r("a"),jE=n("Parallelization"),CE=c(),Xt=r("div"),T(pc.$$.fragment),NE=c(),Kn=r("p"),OE=n("The "),bg=r("code"),AE=n("FlaxBertPreTrainedModel"),IE=n(" forward method, overrides the "),kg=r("code"),LE=n("__call__"),DE=n(" special method."),SE=c(),T(Vr.$$.fragment),UE=c(),T(Kr.$$.fragment),ek=c(),Jn=r("h2"),Jr=r("a"),yg=r("span"),T(hc.$$.fragment),WE=c(),Tg=r("span"),HE=n("FlaxBertForSequenceClassification"),tk=c(),We=r("div"),T(fc.$$.fragment),RE=c(),vg=r("p"),QE=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),VE=c(),mc=r("p"),KE=n("This model inherits from "),ph=r("a"),JE=n("FlaxPreTrainedModel"),GE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),XE=c(),uc=r("p"),YE=n("This model is also a Flax Linen "),gc=r("a"),ZE=n("flax.linen.Module"),ez=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tz=c(),wg=r("p"),oz=n("Finally, this model supports inherent JAX features such as:"),nz=c(),bo=r("ul"),$g=r("li"),_c=r("a"),sz=n("Just-In-Time (JIT) compilation"),rz=c(),xg=r("li"),bc=r("a"),az=n("Automatic Differentiation"),iz=c(),Fg=r("li"),kc=r("a"),lz=n("Vectorization"),dz=c(),Bg=r("li"),yc=r("a"),cz=n("Parallelization"),pz=c(),Yt=r("div"),T(Tc.$$.fragment),hz=c(),Gn=r("p"),fz=n("The "),Mg=r("code"),mz=n("FlaxBertPreTrainedModel"),uz=n(" forward method, overrides the "),Eg=r("code"),gz=n("__call__"),_z=n(" special method."),bz=c(),T(Gr.$$.fragment),kz=c(),T(Xr.$$.fragment),ok=c(),Xn=r("h2"),Yr=r("a"),zg=r("span"),T(vc.$$.fragment),yz=c(),Pg=r("span"),Tz=n("FlaxBertForMultipleChoice"),nk=c(),He=r("div"),T(wc.$$.fragment),vz=c(),qg=r("p"),wz=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$z=c(),$c=r("p"),xz=n("This model inherits from "),hh=r("a"),Fz=n("FlaxPreTrainedModel"),Bz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mz=c(),xc=r("p"),Ez=n("This model is also a Flax Linen "),Fc=r("a"),zz=n("flax.linen.Module"),Pz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qz=c(),jg=r("p"),jz=n("Finally, this model supports inherent JAX features such as:"),Cz=c(),ko=r("ul"),Cg=r("li"),Bc=r("a"),Nz=n("Just-In-Time (JIT) compilation"),Oz=c(),Ng=r("li"),Mc=r("a"),Az=n("Automatic Differentiation"),Iz=c(),Og=r("li"),Ec=r("a"),Lz=n("Vectorization"),Dz=c(),Ag=r("li"),zc=r("a"),Sz=n("Parallelization"),Uz=c(),Zt=r("div"),T(Pc.$$.fragment),Wz=c(),Yn=r("p"),Hz=n("The "),Ig=r("code"),Rz=n("FlaxBertPreTrainedModel"),Qz=n(" forward method, overrides the "),Lg=r("code"),Vz=n("__call__"),Kz=n(" special method."),Jz=c(),T(Zr.$$.fragment),Gz=c(),T(ea.$$.fragment),sk=c(),Zn=r("h2"),ta=r("a"),Dg=r("span"),T(qc.$$.fragment),Xz=c(),Sg=r("span"),Yz=n("FlaxBertForTokenClassification"),rk=c(),Re=r("div"),T(jc.$$.fragment),Zz=c(),Ug=r("p"),e4=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),t4=c(),Cc=r("p"),o4=n("This model inherits from "),fh=r("a"),n4=n("FlaxPreTrainedModel"),s4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r4=c(),Nc=r("p"),a4=n("This model is also a Flax Linen "),Oc=r("a"),i4=n("flax.linen.Module"),l4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),d4=c(),Wg=r("p"),c4=n("Finally, this model supports inherent JAX features such as:"),p4=c(),yo=r("ul"),Hg=r("li"),Ac=r("a"),h4=n("Just-In-Time (JIT) compilation"),f4=c(),Rg=r("li"),Ic=r("a"),m4=n("Automatic Differentiation"),u4=c(),Qg=r("li"),Lc=r("a"),g4=n("Vectorization"),_4=c(),Vg=r("li"),Dc=r("a"),b4=n("Parallelization"),k4=c(),eo=r("div"),T(Sc.$$.fragment),y4=c(),es=r("p"),T4=n("The "),Kg=r("code"),v4=n("FlaxBertPreTrainedModel"),w4=n(" forward method, overrides the "),Jg=r("code"),$4=n("__call__"),x4=n(" special method."),F4=c(),T(oa.$$.fragment),B4=c(),T(na.$$.fragment),ak=c(),ts=r("h2"),sa=r("a"),Gg=r("span"),T(Uc.$$.fragment),M4=c(),Xg=r("span"),E4=n("FlaxBertForQuestionAnswering"),ik=c(),Qe=r("div"),T(Wc.$$.fragment),z4=c(),os=r("p"),P4=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yg=r("code"),q4=n("span start logits"),j4=n(" and "),Zg=r("code"),C4=n("span end logits"),N4=n(")."),O4=c(),Hc=r("p"),A4=n("This model inherits from "),mh=r("a"),I4=n("FlaxPreTrainedModel"),L4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),D4=c(),Rc=r("p"),S4=n("This model is also a Flax Linen "),Qc=r("a"),U4=n("flax.linen.Module"),W4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),H4=c(),e_=r("p"),R4=n("Finally, this model supports inherent JAX features such as:"),Q4=c(),To=r("ul"),t_=r("li"),Vc=r("a"),V4=n("Just-In-Time (JIT) compilation"),K4=c(),o_=r("li"),Kc=r("a"),J4=n("Automatic Differentiation"),G4=c(),n_=r("li"),Jc=r("a"),X4=n("Vectorization"),Y4=c(),s_=r("li"),Gc=r("a"),Z4=n("Parallelization"),eP=c(),to=r("div"),T(Xc.$$.fragment),tP=c(),ns=r("p"),oP=n("The "),r_=r("code"),nP=n("FlaxBertPreTrainedModel"),sP=n(" forward method, overrides the "),a_=r("code"),rP=n("__call__"),aP=n(" special method."),iP=c(),T(ra.$$.fragment),lP=c(),T(aa.$$.fragment),this.h()},l(o){const k=q5('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),h=a(o,"H1",{class:!0});var Yc=i(h);f=a(Yc,"A",{id:!0,class:!0,href:!0});var i_=i(f);g=a(i_,"SPAN",{});var l_=i(g);v(l.$$.fragment,l_),l_.forEach(t),i_.forEach(t),m=p(Yc),M=a(Yc,"SPAN",{});var d_=i(M);be=s(d_,"BERT"),d_.forEach(t),Yc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var Zc=i(z);ee=a(Zc,"A",{id:!0,class:!0,href:!0});var c_=i(ee);L=a(c_,"SPAN",{});var p_=i(L);v(re.$$.fragment,p_),p_.forEach(t),c_.forEach(t),ke=p(Zc),D=a(Zc,"SPAN",{});var h_=i(D);ye=s(h_,"Overview"),h_.forEach(t),Zc.forEach(t),fe=p(o),J=a(o,"P",{});var ep=i(J);O=s(ep,"The BERT model was proposed in "),ae=a(ep,"A",{href:!0,rel:!0});var f_=i(ae);Y=s(f_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),f_.forEach(t),P=s(ep,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),ep.forEach(t),j=p(o),ie=a(o,"P",{});var m_=i(ie);H=s(m_,"The abstract from the paper is the following:"),m_.forEach(t),me=p(o),le=a(o,"P",{});var u_=i(le);S=a(u_,"EM",{});var g_=i(S);Te=s(g_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),g_.forEach(t),u_.forEach(t),ue=p(o),q=a(o,"P",{});var __=i(q);ce=a(__,"EM",{});var b_=i(ce);R=s(b_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),b_.forEach(t),__.forEach(t),ge=p(o),de=a(o,"P",{});var k_=i(de);Q=s(k_,"Tips:"),k_.forEach(t),_e=p(o),te=a(o,"UL",{});var tp=i(te);N=a(tp,"LI",{});var y_=i(N);ve=s(y_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),y_.forEach(t),V=p(tp),pe=a(tp,"LI",{});var T_=i(pe);y=s(T_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),T_.forEach(t),tp.forEach(t),E=p(o),K=a(o,"P",{});var ss=i(K);ze=s(ss,"This model was contributed by "),Be=a(ss,"A",{href:!0,rel:!0});var v_=i(Be);A=s(v_,"thomwolf"),v_.forEach(t),Pe=s(ss,". The original code can be found "),Me=a(ss,"A",{href:!0,rel:!0});var w_=i(Me);qe=s(w_,"here"),w_.forEach(t),I=s(ss,"."),ss.forEach(t),W=p(o),$e=a(o,"H2",{class:!0});var op=i($e);Fe=a(op,"A",{id:!0,class:!0,href:!0});var $_=i(Fe);U=a($_,"SPAN",{});var x_=i(U);v(Ee.$$.fragment,x_),x_.forEach(t),$_.forEach(t),je=p(op),he=a(op,"SPAN",{});var F_=i(he);Ce=s(F_,"BertConfig"),F_.forEach(t),op.forEach(t),Z_=p(o),Ct=a(o,"DIV",{class:!0});var vo=i(Ct);v(Na.$$.fragment,vo),Zy=p(vo),po=a(vo,"P",{});var wo=i(po);eT=s(wo,"This is the configuration class to store the configuration of a "),hp=a(wo,"A",{href:!0});var B_=i(hp);tT=s(B_,"BertModel"),B_.forEach(t),oT=s(wo," or a "),fp=a(wo,"A",{href:!0});var M_=i(fp);nT=s(M_,"TFBertModel"),M_.forEach(t),sT=s(wo,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Oa=a(wo,"A",{href:!0,rel:!0});var E_=i(Oa);rT=s(E_,"bert-base-uncased"),E_.forEach(t),aT=s(wo," architecture."),wo.forEach(t),iT=p(vo),Wo=a(vo,"P",{});var rs=i(Wo);lT=s(rs,"Configuration objects inherit from "),mp=a(rs,"A",{href:!0});var z_=i(mp);dT=s(z_,"PretrainedConfig"),z_.forEach(t),cT=s(rs,` and can be used to control the model outputs. Read the
documentation from `),up=a(rs,"A",{href:!0});var P_=i(up);pT=s(P_,"PretrainedConfig"),P_.forEach(t),hT=s(rs," for more information."),rs.forEach(t),fT=p(vo),v(ds.$$.fragment,vo),vo.forEach(t),eb=p(o),Ho=a(o,"H2",{class:!0});var np=i(Ho);cs=a(np,"A",{id:!0,class:!0,href:!0});var q_=i(cs);Zh=a(q_,"SPAN",{});var j_=i(Zh);v(Aa.$$.fragment,j_),j_.forEach(t),q_.forEach(t),mT=p(np),ef=a(np,"SPAN",{});var C_=i(ef);uT=s(C_,"BertTokenizer"),C_.forEach(t),np.forEach(t),tb=p(o),Ne=a(o,"DIV",{class:!0});var nt=i(Ne);v(Ia.$$.fragment,nt),gT=p(nt),tf=a(nt,"P",{});var N_=i(tf);_T=s(N_,"Construct a BERT tokenizer. Based on WordPiece."),N_.forEach(t),bT=p(nt),La=a(nt,"P",{});var sp=i(La);kT=s(sp,"This tokenizer inherits from "),gp=a(sp,"A",{href:!0});var O_=i(gp);yT=s(O_,"PreTrainedTokenizer"),O_.forEach(t),TT=s(sp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),sp.forEach(t),vT=p(nt),xo=a(nt,"DIV",{class:!0});var as=i(xo);v(Da.$$.fragment,as),wT=p(as),of=a(as,"P",{});var A_=i(of);$T=s(A_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),A_.forEach(t),xT=p(as),Sa=a(as,"UL",{});var rp=i(Sa);_p=a(rp,"LI",{});var uh=i(_p);FT=s(uh,"single sequence: "),nf=a(uh,"CODE",{});var I_=i(nf);BT=s(I_,"[CLS] X [SEP]"),I_.forEach(t),uh.forEach(t),MT=p(rp),bp=a(rp,"LI",{});var gh=i(bp);ET=s(gh,"pair of sequences: "),sf=a(gh,"CODE",{});var L_=i(sf);zT=s(L_,"[CLS] A [SEP] B [SEP]"),L_.forEach(t),gh.forEach(t),rp.forEach(t),as.forEach(t),PT=p(nt),ps=a(nt,"DIV",{class:!0});var ap=i(ps);v(Ua.$$.fragment,ap),qT=p(ap),Wa=a(ap,"P",{});var ip=i(Wa);jT=s(ip,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rf=a(ip,"CODE",{});var D_=i(rf);CT=s(D_,"prepare_for_model"),D_.forEach(t),NT=s(ip," method."),ip.forEach(t),ap.forEach(t),OT=p(nt),Ot=a(nt,"DIV",{class:!0});var $o=i(Ot);v(Ha.$$.fragment,$o),AT=p($o),af=a($o,"P",{});var S_=i(af);IT=s(S_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),S_.forEach(t),LT=p($o),v(hs.$$.fragment,$o),DT=p($o),Ro=a($o,"P",{});var is=i(Ro);ST=s(is,"If "),lf=a(is,"CODE",{});var U_=i(lf);UT=s(U_,"token_ids_1"),U_.forEach(t),WT=s(is," is "),df=a(is,"CODE",{});var W_=i(df);HT=s(W_,"None"),W_.forEach(t),RT=s(is,", this method only returns the first portion of the mask (0s)."),is.forEach(t),$o.forEach(t),QT=p(nt),kp=a(nt,"DIV",{class:!0});var H_=i(kp);v(Ra.$$.fragment,H_),H_.forEach(t),nt.forEach(t),ob=p(o),Qo=a(o,"H2",{class:!0});var lp=i(Qo);fs=a(lp,"A",{id:!0,class:!0,href:!0});var R_=i(fs);cf=a(R_,"SPAN",{});var Q_=i(cf);v(Qa.$$.fragment,Q_),Q_.forEach(t),R_.forEach(t),VT=p(lp),pf=a(lp,"SPAN",{});var V_=i(pf);KT=s(V_,"BertTokenizerFast"),V_.forEach(t),lp.forEach(t),nb=p(o),rt=a(o,"DIV",{class:!0});var Nt=i(rt);v(Va.$$.fragment,Nt),JT=p(Nt),Ka=a(Nt,"P",{});var dp=i(Ka);GT=s(dp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),hf=a(dp,"EM",{});var K_=i(hf);XT=s(K_,"tokenizers"),K_.forEach(t),YT=s(dp," library). Based on WordPiece."),dp.forEach(t),ZT=p(Nt),Ja=a(Nt,"P",{});var cp=i(Ja);ev=s(cp,"This tokenizer inherits from "),yp=a(cp,"A",{href:!0});var J_=i(yp);tv=s(J_,"PreTrainedTokenizerFast"),J_.forEach(t),ov=s(cp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cp.forEach(t),nv=p(Nt),Fo=a(Nt,"DIV",{class:!0});var ls=i(Fo);v(Ga.$$.fragment,ls),sv=p(ls),ff=a(ls,"P",{});var G_=i(ff);rv=s(G_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),G_.forEach(t),av=p(ls),Xa=a(ls,"UL",{});var pp=i(Xa);Tp=a(pp,"LI",{});var _h=i(Tp);iv=s(_h,"single sequence: "),mf=a(_h,"CODE",{});var X_=i(mf);lv=s(X_,"[CLS] X [SEP]"),X_.forEach(t),_h.forEach(t),dv=p(pp),vp=a(pp,"LI",{});var bh=i(vp);cv=s(bh,"pair of sequences: "),uf=a(bh,"CODE",{});var Y_=i(uf);pv=s(Y_,"[CLS] A [SEP] B [SEP]"),Y_.forEach(t),bh.forEach(t),pp.forEach(t),ls.forEach(t),hv=p(Nt),At=a(Nt,"DIV",{class:!0});var ia=i(At);v(Ya.$$.fragment,ia),fv=p(ia),gf=a(ia,"P",{});var dP=i(gf);mv=s(dP,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),dP.forEach(t),uv=p(ia),v(ms.$$.fragment,ia),gv=p(ia),Vo=a(ia,"P",{});var kh=i(Vo);_v=s(kh,"If "),_f=a(kh,"CODE",{});var cP=i(_f);bv=s(cP,"token_ids_1"),cP.forEach(t),kv=s(kh," is "),bf=a(kh,"CODE",{});var pP=i(bf);yv=s(pP,"None"),pP.forEach(t),Tv=s(kh,", this method only returns the first portion of the mask (0s)."),kh.forEach(t),ia.forEach(t),Nt.forEach(t),sb=p(o),Ko=a(o,"H2",{class:!0});var dk=i(Ko);us=a(dk,"A",{id:!0,class:!0,href:!0});var hP=i(us);kf=a(hP,"SPAN",{});var fP=i(kf);v(Za.$$.fragment,fP),fP.forEach(t),hP.forEach(t),vv=p(dk),yf=a(dk,"SPAN",{});var mP=i(yf);wv=s(mP,"Bert specific outputs"),mP.forEach(t),dk.forEach(t),rb=p(o),Jo=a(o,"DIV",{class:!0});var ck=i(Jo);v(ei.$$.fragment,ck),$v=p(ck),ti=a(ck,"P",{});var pk=i(ti);xv=s(pk,"Output type of "),wp=a(pk,"A",{href:!0});var uP=i(wp);Fv=s(uP,"BertForPreTraining"),uP.forEach(t),Bv=s(pk,"."),pk.forEach(t),ck.forEach(t),ab=p(o),Go=a(o,"DIV",{class:!0});var hk=i(Go);v(oi.$$.fragment,hk),Mv=p(hk),ni=a(hk,"P",{});var fk=i(ni);Ev=s(fk,"Output type of "),$p=a(fk,"A",{href:!0});var gP=i($p);zv=s(gP,"TFBertForPreTraining"),gP.forEach(t),Pv=s(fk,"."),fk.forEach(t),hk.forEach(t),ib=p(o),ho=a(o,"DIV",{class:!0});var yh=i(ho);v(si.$$.fragment,yh),qv=p(yh),ri=a(yh,"P",{});var mk=i(ri);jv=s(mk,"Output type of "),xp=a(mk,"A",{href:!0});var _P=i(xp);Cv=s(_P,"BertForPreTraining"),_P.forEach(t),Nv=s(mk,"."),mk.forEach(t),Ov=p(yh),gs=a(yh,"DIV",{class:!0});var uk=i(gs);v(ai.$$.fragment,uk),Av=p(uk),Tf=a(uk,"P",{});var bP=i(Tf);Iv=s(bP,"\u201CReturns a new object replacing the specified fields with new values."),bP.forEach(t),uk.forEach(t),yh.forEach(t),lb=p(o),Xo=a(o,"H2",{class:!0});var gk=i(Xo);_s=a(gk,"A",{id:!0,class:!0,href:!0});var kP=i(_s);vf=a(kP,"SPAN",{});var yP=i(vf);v(ii.$$.fragment,yP),yP.forEach(t),kP.forEach(t),Lv=p(gk),wf=a(gk,"SPAN",{});var TP=i(wf);Dv=s(TP,"BertModel"),TP.forEach(t),gk.forEach(t),db=p(o),Oe=a(o,"DIV",{class:!0});var vt=i(Oe);v(li.$$.fragment,vt),Sv=p(vt),$f=a(vt,"P",{});var vP=i($f);Uv=s(vP,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),vP.forEach(t),Wv=p(vt),di=a(vt,"P",{});var _k=i(di);Hv=s(_k,"This model inherits from "),Fp=a(_k,"A",{href:!0});var wP=i(Fp);Rv=s(wP,"PreTrainedModel"),wP.forEach(t),Qv=s(_k,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_k.forEach(t),Vv=p(vt),ci=a(vt,"P",{});var bk=i(ci);Kv=s(bk,"This model is also a PyTorch "),pi=a(bk,"A",{href:!0,rel:!0});var $P=i(pi);Jv=s($P,"torch.nn.Module"),$P.forEach(t),Gv=s(bk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bk.forEach(t),Xv=p(vt),hi=a(vt,"P",{});var kk=i(hi);Yv=s(kk,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fi=a(kk,"A",{href:!0,rel:!0});var xP=i(fi);Zv=s(xP,`Attention is
all you need`),xP.forEach(t),e1=s(kk,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),kk.forEach(t),t1=p(vt),Ke=a(vt,"P",{});var wt=i(Ke);o1=s(wt,"To behave as an decoder the model needs to be initialized with the "),xf=a(wt,"CODE",{});var FP=i(xf);n1=s(FP,"is_decoder"),FP.forEach(t),s1=s(wt,` argument of the configuration set
to `),Ff=a(wt,"CODE",{});var BP=i(Ff);r1=s(BP,"True"),BP.forEach(t),a1=s(wt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Bf=a(wt,"CODE",{});var MP=i(Bf);i1=s(MP,"is_decoder"),MP.forEach(t),l1=s(wt,` argument and
`),Mf=a(wt,"CODE",{});var EP=i(Mf);d1=s(EP,"add_cross_attention"),EP.forEach(t),c1=s(wt," set to "),Ef=a(wt,"CODE",{});var zP=i(Ef);p1=s(zP,"True"),zP.forEach(t),h1=s(wt,"; an "),zf=a(wt,"CODE",{});var PP=i(zf);f1=s(PP,"encoder_hidden_states"),PP.forEach(t),m1=s(wt," is then expected as an input to the forward pass."),wt.forEach(t),u1=p(vt),It=a(vt,"DIV",{class:!0});var la=i(It);v(mi.$$.fragment,la),g1=p(la),Yo=a(la,"P",{});var Th=i(Yo);_1=s(Th,"The "),Bp=a(Th,"A",{href:!0});var qP=i(Bp);b1=s(qP,"BertModel"),qP.forEach(t),k1=s(Th," forward method, overrides the "),Pf=a(Th,"CODE",{});var jP=i(Pf);y1=s(jP,"__call__"),jP.forEach(t),T1=s(Th," special method."),Th.forEach(t),v1=p(la),v(bs.$$.fragment,la),w1=p(la),v(ks.$$.fragment,la),la.forEach(t),vt.forEach(t),cb=p(o),Zo=a(o,"H2",{class:!0});var yk=i(Zo);ys=a(yk,"A",{id:!0,class:!0,href:!0});var CP=i(ys);qf=a(CP,"SPAN",{});var NP=i(qf);v(ui.$$.fragment,NP),NP.forEach(t),CP.forEach(t),$1=p(yk),jf=a(yk,"SPAN",{});var OP=i(jf);x1=s(OP,"BertForPreTraining"),OP.forEach(t),yk.forEach(t),pb=p(o),at=a(o,"DIV",{class:!0});var Bo=i(at);v(gi.$$.fragment,Bo),F1=p(Bo),en=a(Bo,"P",{});var vh=i(en);B1=s(vh,"Bert Model with two heads on top as done during the pretraining: a "),Cf=a(vh,"CODE",{});var AP=i(Cf);M1=s(AP,"masked language modeling"),AP.forEach(t),E1=s(vh," head and a "),Nf=a(vh,"CODE",{});var IP=i(Nf);z1=s(IP,"next sentence prediction (classification)"),IP.forEach(t),P1=s(vh," head."),vh.forEach(t),q1=p(Bo),_i=a(Bo,"P",{});var Tk=i(_i);j1=s(Tk,"This model inherits from "),Mp=a(Tk,"A",{href:!0});var LP=i(Mp);C1=s(LP,"PreTrainedModel"),LP.forEach(t),N1=s(Tk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk.forEach(t),O1=p(Bo),bi=a(Bo,"P",{});var vk=i(bi);A1=s(vk,"This model is also a PyTorch "),ki=a(vk,"A",{href:!0,rel:!0});var DP=i(ki);I1=s(DP,"torch.nn.Module"),DP.forEach(t),L1=s(vk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vk.forEach(t),D1=p(Bo),Lt=a(Bo,"DIV",{class:!0});var da=i(Lt);v(yi.$$.fragment,da),S1=p(da),tn=a(da,"P",{});var wh=i(tn);U1=s(wh,"The "),Ep=a(wh,"A",{href:!0});var SP=i(Ep);W1=s(SP,"BertForPreTraining"),SP.forEach(t),H1=s(wh," forward method, overrides the "),Of=a(wh,"CODE",{});var UP=i(Of);R1=s(UP,"__call__"),UP.forEach(t),Q1=s(wh," special method."),wh.forEach(t),V1=p(da),v(Ts.$$.fragment,da),K1=p(da),v(vs.$$.fragment,da),da.forEach(t),Bo.forEach(t),hb=p(o),on=a(o,"H2",{class:!0});var wk=i(on);ws=a(wk,"A",{id:!0,class:!0,href:!0});var WP=i(ws);Af=a(WP,"SPAN",{});var HP=i(Af);v(Ti.$$.fragment,HP),HP.forEach(t),WP.forEach(t),J1=p(wk),If=a(wk,"SPAN",{});var RP=i(If);G1=s(RP,"BertLMHeadModel"),RP.forEach(t),wk.forEach(t),fb=p(o),it=a(o,"DIV",{class:!0});var Mo=i(it);v(vi.$$.fragment,Mo),X1=p(Mo),wi=a(Mo,"P",{});var $k=i(wi);Y1=s($k,"Bert Model with a "),Lf=a($k,"CODE",{});var QP=i(Lf);Z1=s(QP,"language modeling"),QP.forEach(t),ew=s($k," head on top for CLM fine-tuning."),$k.forEach(t),tw=p(Mo),$i=a(Mo,"P",{});var xk=i($i);ow=s(xk,"This model inherits from "),zp=a(xk,"A",{href:!0});var VP=i(zp);nw=s(VP,"PreTrainedModel"),VP.forEach(t),sw=s(xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xk.forEach(t),rw=p(Mo),xi=a(Mo,"P",{});var Fk=i(xi);aw=s(Fk,"This model is also a PyTorch "),Fi=a(Fk,"A",{href:!0,rel:!0});var KP=i(Fi);iw=s(KP,"torch.nn.Module"),KP.forEach(t),lw=s(Fk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fk.forEach(t),dw=p(Mo),Dt=a(Mo,"DIV",{class:!0});var ca=i(Dt);v(Bi.$$.fragment,ca),cw=p(ca),nn=a(ca,"P",{});var $h=i(nn);pw=s($h,"The "),Pp=a($h,"A",{href:!0});var JP=i(Pp);hw=s(JP,"BertLMHeadModel"),JP.forEach(t),fw=s($h," forward method, overrides the "),Df=a($h,"CODE",{});var GP=i(Df);mw=s(GP,"__call__"),GP.forEach(t),uw=s($h," special method."),$h.forEach(t),gw=p(ca),v($s.$$.fragment,ca),_w=p(ca),v(xs.$$.fragment,ca),ca.forEach(t),Mo.forEach(t),mb=p(o),sn=a(o,"H2",{class:!0});var Bk=i(sn);Fs=a(Bk,"A",{id:!0,class:!0,href:!0});var XP=i(Fs);Sf=a(XP,"SPAN",{});var YP=i(Sf);v(Mi.$$.fragment,YP),YP.forEach(t),XP.forEach(t),bw=p(Bk),Uf=a(Bk,"SPAN",{});var ZP=i(Uf);kw=s(ZP,"BertForMaskedLM"),ZP.forEach(t),Bk.forEach(t),ub=p(o),lt=a(o,"DIV",{class:!0});var Eo=i(lt);v(Ei.$$.fragment,Eo),yw=p(Eo),zi=a(Eo,"P",{});var Mk=i(zi);Tw=s(Mk,"Bert Model with a "),Wf=a(Mk,"CODE",{});var eq=i(Wf);vw=s(eq,"language modeling"),eq.forEach(t),ww=s(Mk," head on top."),Mk.forEach(t),$w=p(Eo),Pi=a(Eo,"P",{});var Ek=i(Pi);xw=s(Ek,"This model inherits from "),qp=a(Ek,"A",{href:!0});var tq=i(qp);Fw=s(tq,"PreTrainedModel"),tq.forEach(t),Bw=s(Ek,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ek.forEach(t),Mw=p(Eo),qi=a(Eo,"P",{});var zk=i(qi);Ew=s(zk,"This model is also a PyTorch "),ji=a(zk,"A",{href:!0,rel:!0});var oq=i(ji);zw=s(oq,"torch.nn.Module"),oq.forEach(t),Pw=s(zk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zk.forEach(t),qw=p(Eo),mt=a(Eo,"DIV",{class:!0});var zo=i(mt);v(Ci.$$.fragment,zo),jw=p(zo),rn=a(zo,"P",{});var xh=i(rn);Cw=s(xh,"The "),jp=a(xh,"A",{href:!0});var nq=i(jp);Nw=s(nq,"BertForMaskedLM"),nq.forEach(t),Ow=s(xh," forward method, overrides the "),Hf=a(xh,"CODE",{});var sq=i(Hf);Aw=s(sq,"__call__"),sq.forEach(t),Iw=s(xh," special method."),xh.forEach(t),Lw=p(zo),v(Bs.$$.fragment,zo),Dw=p(zo),v(Ms.$$.fragment,zo),Sw=p(zo),v(Es.$$.fragment,zo),zo.forEach(t),Eo.forEach(t),gb=p(o),an=a(o,"H2",{class:!0});var Pk=i(an);zs=a(Pk,"A",{id:!0,class:!0,href:!0});var rq=i(zs);Rf=a(rq,"SPAN",{});var aq=i(Rf);v(Ni.$$.fragment,aq),aq.forEach(t),rq.forEach(t),Uw=p(Pk),Qf=a(Pk,"SPAN",{});var iq=i(Qf);Ww=s(iq,"BertForNextSentencePrediction"),iq.forEach(t),Pk.forEach(t),_b=p(o),dt=a(o,"DIV",{class:!0});var Po=i(dt);v(Oi.$$.fragment,Po),Hw=p(Po),Ai=a(Po,"P",{});var qk=i(Ai);Rw=s(qk,"Bert Model with a "),Vf=a(qk,"CODE",{});var lq=i(Vf);Qw=s(lq,"next sentence prediction (classification)"),lq.forEach(t),Vw=s(qk," head on top."),qk.forEach(t),Kw=p(Po),Ii=a(Po,"P",{});var jk=i(Ii);Jw=s(jk,"This model inherits from "),Cp=a(jk,"A",{href:!0});var dq=i(Cp);Gw=s(dq,"PreTrainedModel"),dq.forEach(t),Xw=s(jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk.forEach(t),Yw=p(Po),Li=a(Po,"P",{});var Ck=i(Li);Zw=s(Ck,"This model is also a PyTorch "),Di=a(Ck,"A",{href:!0,rel:!0});var cq=i(Di);e$=s(cq,"torch.nn.Module"),cq.forEach(t),t$=s(Ck,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ck.forEach(t),o$=p(Po),St=a(Po,"DIV",{class:!0});var pa=i(St);v(Si.$$.fragment,pa),n$=p(pa),ln=a(pa,"P",{});var Fh=i(ln);s$=s(Fh,"The "),Np=a(Fh,"A",{href:!0});var pq=i(Np);r$=s(pq,"BertForNextSentencePrediction"),pq.forEach(t),a$=s(Fh," forward method, overrides the "),Kf=a(Fh,"CODE",{});var hq=i(Kf);i$=s(hq,"__call__"),hq.forEach(t),l$=s(Fh," special method."),Fh.forEach(t),d$=p(pa),v(Ps.$$.fragment,pa),c$=p(pa),v(qs.$$.fragment,pa),pa.forEach(t),Po.forEach(t),bb=p(o),dn=a(o,"H2",{class:!0});var Nk=i(dn);js=a(Nk,"A",{id:!0,class:!0,href:!0});var fq=i(js);Jf=a(fq,"SPAN",{});var mq=i(Jf);v(Ui.$$.fragment,mq),mq.forEach(t),fq.forEach(t),p$=p(Nk),Gf=a(Nk,"SPAN",{});var uq=i(Gf);h$=s(uq,"BertForSequenceClassification"),uq.forEach(t),Nk.forEach(t),kb=p(o),ct=a(o,"DIV",{class:!0});var qo=i(ct);v(Wi.$$.fragment,qo),f$=p(qo),Xf=a(qo,"P",{});var gq=i(Xf);m$=s(gq,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),gq.forEach(t),u$=p(qo),Hi=a(qo,"P",{});var Ok=i(Hi);g$=s(Ok,"This model inherits from "),Op=a(Ok,"A",{href:!0});var _q=i(Op);_$=s(_q,"PreTrainedModel"),_q.forEach(t),b$=s(Ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok.forEach(t),k$=p(qo),Ri=a(qo,"P",{});var Ak=i(Ri);y$=s(Ak,"This model is also a PyTorch "),Qi=a(Ak,"A",{href:!0,rel:!0});var bq=i(Qi);T$=s(bq,"torch.nn.Module"),bq.forEach(t),v$=s(Ak,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ak.forEach(t),w$=p(qo),Ve=a(qo,"DIV",{class:!0});var $t=i(Ve);v(Vi.$$.fragment,$t),$$=p($t),cn=a($t,"P",{});var Bh=i(cn);x$=s(Bh,"The "),Ap=a(Bh,"A",{href:!0});var kq=i(Ap);F$=s(kq,"BertForSequenceClassification"),kq.forEach(t),B$=s(Bh," forward method, overrides the "),Yf=a(Bh,"CODE",{});var yq=i(Yf);M$=s(yq,"__call__"),yq.forEach(t),E$=s(Bh," special method."),Bh.forEach(t),z$=p($t),v(Cs.$$.fragment,$t),P$=p($t),v(Ns.$$.fragment,$t),q$=p($t),v(Os.$$.fragment,$t),j$=p($t),v(As.$$.fragment,$t),C$=p($t),v(Is.$$.fragment,$t),$t.forEach(t),qo.forEach(t),yb=p(o),pn=a(o,"H2",{class:!0});var Ik=i(pn);Ls=a(Ik,"A",{id:!0,class:!0,href:!0});var Tq=i(Ls);Zf=a(Tq,"SPAN",{});var vq=i(Zf);v(Ki.$$.fragment,vq),vq.forEach(t),Tq.forEach(t),N$=p(Ik),em=a(Ik,"SPAN",{});var wq=i(em);O$=s(wq,"BertForMultipleChoice"),wq.forEach(t),Ik.forEach(t),Tb=p(o),pt=a(o,"DIV",{class:!0});var jo=i(pt);v(Ji.$$.fragment,jo),A$=p(jo),tm=a(jo,"P",{});var $q=i(tm);I$=s($q,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$q.forEach(t),L$=p(jo),Gi=a(jo,"P",{});var Lk=i(Gi);D$=s(Lk,"This model inherits from "),Ip=a(Lk,"A",{href:!0});var xq=i(Ip);S$=s(xq,"PreTrainedModel"),xq.forEach(t),U$=s(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk.forEach(t),W$=p(jo),Xi=a(jo,"P",{});var Dk=i(Xi);H$=s(Dk,"This model is also a PyTorch "),Yi=a(Dk,"A",{href:!0,rel:!0});var Fq=i(Yi);R$=s(Fq,"torch.nn.Module"),Fq.forEach(t),Q$=s(Dk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dk.forEach(t),V$=p(jo),Ut=a(jo,"DIV",{class:!0});var ha=i(Ut);v(Zi.$$.fragment,ha),K$=p(ha),hn=a(ha,"P",{});var Mh=i(hn);J$=s(Mh,"The "),Lp=a(Mh,"A",{href:!0});var Bq=i(Lp);G$=s(Bq,"BertForMultipleChoice"),Bq.forEach(t),X$=s(Mh," forward method, overrides the "),om=a(Mh,"CODE",{});var Mq=i(om);Y$=s(Mq,"__call__"),Mq.forEach(t),Z$=s(Mh," special method."),Mh.forEach(t),e2=p(ha),v(Ds.$$.fragment,ha),t2=p(ha),v(Ss.$$.fragment,ha),ha.forEach(t),jo.forEach(t),vb=p(o),fn=a(o,"H2",{class:!0});var Sk=i(fn);Us=a(Sk,"A",{id:!0,class:!0,href:!0});var Eq=i(Us);nm=a(Eq,"SPAN",{});var zq=i(nm);v(el.$$.fragment,zq),zq.forEach(t),Eq.forEach(t),o2=p(Sk),sm=a(Sk,"SPAN",{});var Pq=i(sm);n2=s(Pq,"BertForTokenClassification"),Pq.forEach(t),Sk.forEach(t),wb=p(o),ht=a(o,"DIV",{class:!0});var Co=i(ht);v(tl.$$.fragment,Co),s2=p(Co),rm=a(Co,"P",{});var qq=i(rm);r2=s(qq,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),qq.forEach(t),a2=p(Co),ol=a(Co,"P",{});var Uk=i(ol);i2=s(Uk,"This model inherits from "),Dp=a(Uk,"A",{href:!0});var jq=i(Dp);l2=s(jq,"PreTrainedModel"),jq.forEach(t),d2=s(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uk.forEach(t),c2=p(Co),nl=a(Co,"P",{});var Wk=i(nl);p2=s(Wk,"This model is also a PyTorch "),sl=a(Wk,"A",{href:!0,rel:!0});var Cq=i(sl);h2=s(Cq,"torch.nn.Module"),Cq.forEach(t),f2=s(Wk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wk.forEach(t),m2=p(Co),ut=a(Co,"DIV",{class:!0});var No=i(ut);v(rl.$$.fragment,No),u2=p(No),mn=a(No,"P",{});var Eh=i(mn);g2=s(Eh,"The "),Sp=a(Eh,"A",{href:!0});var Nq=i(Sp);_2=s(Nq,"BertForTokenClassification"),Nq.forEach(t),b2=s(Eh," forward method, overrides the "),am=a(Eh,"CODE",{});var Oq=i(am);k2=s(Oq,"__call__"),Oq.forEach(t),y2=s(Eh," special method."),Eh.forEach(t),T2=p(No),v(Ws.$$.fragment,No),v2=p(No),v(Hs.$$.fragment,No),w2=p(No),v(Rs.$$.fragment,No),No.forEach(t),Co.forEach(t),$b=p(o),un=a(o,"H2",{class:!0});var Hk=i(un);Qs=a(Hk,"A",{id:!0,class:!0,href:!0});var Aq=i(Qs);im=a(Aq,"SPAN",{});var Iq=i(im);v(al.$$.fragment,Iq),Iq.forEach(t),Aq.forEach(t),$2=p(Hk),lm=a(Hk,"SPAN",{});var Lq=i(lm);x2=s(Lq,"BertForQuestionAnswering"),Lq.forEach(t),Hk.forEach(t),xb=p(o),ft=a(o,"DIV",{class:!0});var Oo=i(ft);v(il.$$.fragment,Oo),F2=p(Oo),gn=a(Oo,"P",{});var zh=i(gn);B2=s(zh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dm=a(zh,"CODE",{});var Dq=i(dm);M2=s(Dq,"span start logits"),Dq.forEach(t),E2=s(zh," and "),cm=a(zh,"CODE",{});var Sq=i(cm);z2=s(Sq,"span end logits"),Sq.forEach(t),P2=s(zh,")."),zh.forEach(t),q2=p(Oo),ll=a(Oo,"P",{});var Rk=i(ll);j2=s(Rk,"This model inherits from "),Up=a(Rk,"A",{href:!0});var Uq=i(Up);C2=s(Uq,"PreTrainedModel"),Uq.forEach(t),N2=s(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rk.forEach(t),O2=p(Oo),dl=a(Oo,"P",{});var Qk=i(dl);A2=s(Qk,"This model is also a PyTorch "),cl=a(Qk,"A",{href:!0,rel:!0});var Wq=i(cl);I2=s(Wq,"torch.nn.Module"),Wq.forEach(t),L2=s(Qk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qk.forEach(t),D2=p(Oo),gt=a(Oo,"DIV",{class:!0});var Ao=i(gt);v(pl.$$.fragment,Ao),S2=p(Ao),_n=a(Ao,"P",{});var Ph=i(_n);U2=s(Ph,"The "),Wp=a(Ph,"A",{href:!0});var Hq=i(Wp);W2=s(Hq,"BertForQuestionAnswering"),Hq.forEach(t),H2=s(Ph," forward method, overrides the "),pm=a(Ph,"CODE",{});var Rq=i(pm);R2=s(Rq,"__call__"),Rq.forEach(t),Q2=s(Ph," special method."),Ph.forEach(t),V2=p(Ao),v(Vs.$$.fragment,Ao),K2=p(Ao),v(Ks.$$.fragment,Ao),J2=p(Ao),v(Js.$$.fragment,Ao),Ao.forEach(t),Oo.forEach(t),Fb=p(o),bn=a(o,"H2",{class:!0});var Vk=i(bn);Gs=a(Vk,"A",{id:!0,class:!0,href:!0});var Qq=i(Gs);hm=a(Qq,"SPAN",{});var Vq=i(hm);v(hl.$$.fragment,Vq),Vq.forEach(t),Qq.forEach(t),G2=p(Vk),fm=a(Vk,"SPAN",{});var Kq=i(fm);X2=s(Kq,"TFBertModel"),Kq.forEach(t),Vk.forEach(t),Bb=p(o),Je=a(o,"DIV",{class:!0});var oo=i(Je);v(fl.$$.fragment,oo),Y2=p(oo),mm=a(oo,"P",{});var Jq=i(mm);Z2=s(Jq,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Jq.forEach(t),ex=p(oo),ml=a(oo,"P",{});var Kk=i(ml);tx=s(Kk,"This model inherits from "),Hp=a(Kk,"A",{href:!0});var Gq=i(Hp);ox=s(Gq,"TFPreTrainedModel"),Gq.forEach(t),nx=s(Kk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk.forEach(t),sx=p(oo),ul=a(oo,"P",{});var Jk=i(ul);rx=s(Jk,"This model is also a "),gl=a(Jk,"A",{href:!0,rel:!0});var Xq=i(gl);ax=s(Xq,"tf.keras.Model"),Xq.forEach(t),ix=s(Jk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jk.forEach(t),lx=p(oo),v(Xs.$$.fragment,oo),dx=p(oo),Wt=a(oo,"DIV",{class:!0});var fa=i(Wt);v(_l.$$.fragment,fa),cx=p(fa),kn=a(fa,"P",{});var qh=i(kn);px=s(qh,"The "),Rp=a(qh,"A",{href:!0});var Yq=i(Rp);hx=s(Yq,"TFBertModel"),Yq.forEach(t),fx=s(qh," forward method, overrides the "),um=a(qh,"CODE",{});var Zq=i(um);mx=s(Zq,"__call__"),Zq.forEach(t),ux=s(qh," special method."),qh.forEach(t),gx=p(fa),v(Ys.$$.fragment,fa),_x=p(fa),v(Zs.$$.fragment,fa),fa.forEach(t),oo.forEach(t),Mb=p(o),yn=a(o,"H2",{class:!0});var Gk=i(yn);er=a(Gk,"A",{id:!0,class:!0,href:!0});var ej=i(er);gm=a(ej,"SPAN",{});var tj=i(gm);v(bl.$$.fragment,tj),tj.forEach(t),ej.forEach(t),bx=p(Gk),_m=a(Gk,"SPAN",{});var oj=i(_m);kx=s(oj,"TFBertForPreTraining"),oj.forEach(t),Gk.forEach(t),Eb=p(o),Ge=a(o,"DIV",{class:!0});var no=i(Ge);v(kl.$$.fragment,no),yx=p(no),Tn=a(no,"P",{});var jh=i(Tn);Tx=s(jh,`Bert Model with two heads on top as done during the pretraining:
a `),bm=a(jh,"CODE",{});var nj=i(bm);vx=s(nj,"masked language modeling"),nj.forEach(t),wx=s(jh," head and a "),km=a(jh,"CODE",{});var sj=i(km);$x=s(sj,"next sentence prediction (classification)"),sj.forEach(t),xx=s(jh," head."),jh.forEach(t),Fx=p(no),yl=a(no,"P",{});var Xk=i(yl);Bx=s(Xk,"This model inherits from "),Qp=a(Xk,"A",{href:!0});var rj=i(Qp);Mx=s(rj,"TFPreTrainedModel"),rj.forEach(t),Ex=s(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk.forEach(t),zx=p(no),Tl=a(no,"P",{});var Yk=i(Tl);Px=s(Yk,"This model is also a "),vl=a(Yk,"A",{href:!0,rel:!0});var aj=i(vl);qx=s(aj,"tf.keras.Model"),aj.forEach(t),jx=s(Yk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yk.forEach(t),Cx=p(no),v(tr.$$.fragment,no),Nx=p(no),Ht=a(no,"DIV",{class:!0});var ma=i(Ht);v(wl.$$.fragment,ma),Ox=p(ma),vn=a(ma,"P",{});var Ch=i(vn);Ax=s(Ch,"The "),Vp=a(Ch,"A",{href:!0});var ij=i(Vp);Ix=s(ij,"TFBertForPreTraining"),ij.forEach(t),Lx=s(Ch," forward method, overrides the "),ym=a(Ch,"CODE",{});var lj=i(ym);Dx=s(lj,"__call__"),lj.forEach(t),Sx=s(Ch," special method."),Ch.forEach(t),Ux=p(ma),v(or.$$.fragment,ma),Wx=p(ma),v(nr.$$.fragment,ma),ma.forEach(t),no.forEach(t),zb=p(o),wn=a(o,"H2",{class:!0});var Zk=i(wn);sr=a(Zk,"A",{id:!0,class:!0,href:!0});var dj=i(sr);Tm=a(dj,"SPAN",{});var cj=i(Tm);v($l.$$.fragment,cj),cj.forEach(t),dj.forEach(t),Hx=p(Zk),vm=a(Zk,"SPAN",{});var pj=i(vm);Rx=s(pj,"TFBertModelLMHeadModel"),pj.forEach(t),Zk.forEach(t),Pb=p(o),$n=a(o,"DIV",{class:!0});var ey=i($n);v(xl.$$.fragment,ey),Qx=p(ey),_t=a(ey,"DIV",{class:!0});var Io=i(_t);v(Fl.$$.fragment,Io),Vx=p(Io),Ae=a(Io,"P",{});var st=i(Ae);Kx=s(st,"encoder_hidden_states  ("),wm=a(st,"CODE",{});var hj=i(wm);Jx=s(hj,"tf.Tensor"),hj.forEach(t),Gx=s(st," of shape "),$m=a(st,"CODE",{});var fj=i($m);Xx=s(fj,"(batch_size, sequence_length, hidden_size)"),fj.forEach(t),Yx=s(st,", "),xm=a(st,"EM",{});var mj=i(xm);Zx=s(mj,"optional"),mj.forEach(t),eF=s(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),Fm=a(st,"CODE",{});var uj=i(Fm);tF=s(uj,"tf.Tensor"),uj.forEach(t),oF=s(st," of shape "),Bm=a(st,"CODE",{});var gj=i(Bm);nF=s(gj,"(batch_size, sequence_length)"),gj.forEach(t),sF=s(st,", "),Mm=a(st,"EM",{});var _j=i(Mm);rF=s(_j,"optional"),_j.forEach(t),aF=s(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Em=a(st,"CODE",{});var bj=i(Em);iF=s(bj,"[0, 1]"),bj.forEach(t),lF=s(st,":"),st.forEach(t),dF=p(Io),Bl=a(Io,"UL",{});var ty=i(Bl);Ml=a(ty,"LI",{});var oy=i(Ml);cF=s(oy,"1 for tokens that are "),zm=a(oy,"STRONG",{});var kj=i(zm);pF=s(kj,"not masked"),kj.forEach(t),hF=s(oy,","),oy.forEach(t),fF=p(ty),El=a(ty,"LI",{});var ny=i(El);mF=s(ny,"0 for tokens that are "),Pm=a(ny,"STRONG",{});var yj=i(Pm);uF=s(yj,"masked"),yj.forEach(t),gF=s(ny,"."),ny.forEach(t),ty.forEach(t),_F=p(Io),G=a(Io,"P",{});var Z=i(G);bF=s(Z,"past_key_values ("),qm=a(Z,"CODE",{});var Tj=i(qm);kF=s(Tj,"Tuple[Tuple[tf.Tensor]]"),Tj.forEach(t),yF=s(Z," of length "),jm=a(Z,"CODE",{});var vj=i(jm);TF=s(vj,"config.n_layers"),vj.forEach(t),vF=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Cm=a(Z,"CODE",{});var wj=i(Cm);wF=s(wj,"past_key_values"),wj.forEach(t),$F=s(Z," are used, the user can optionally input only the last "),Nm=a(Z,"CODE",{});var $j=i(Nm);xF=s($j,"decoder_input_ids"),$j.forEach(t),FF=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),Om=a(Z,"CODE",{});var xj=i(Om);BF=s(xj,"(batch_size, 1)"),xj.forEach(t),MF=s(Z,` instead of all
`),Am=a(Z,"CODE",{});var Fj=i(Am);EF=s(Fj,"decoder_input_ids"),Fj.forEach(t),zF=s(Z," of shape "),Im=a(Z,"CODE",{});var Bj=i(Im);PF=s(Bj,"(batch_size, sequence_length)"),Bj.forEach(t),qF=s(Z,`.
use_cache (`),Lm=a(Z,"CODE",{});var Mj=i(Lm);jF=s(Mj,"bool"),Mj.forEach(t),CF=s(Z,", "),Dm=a(Z,"EM",{});var Ej=i(Dm);NF=s(Ej,"optional"),Ej.forEach(t),OF=s(Z,", defaults to "),Sm=a(Z,"CODE",{});var zj=i(Sm);AF=s(zj,"True"),zj.forEach(t),IF=s(Z,`):
If set to `),Um=a(Z,"CODE",{});var Pj=i(Um);LF=s(Pj,"True"),Pj.forEach(t),DF=s(Z,", "),Wm=a(Z,"CODE",{});var qj=i(Wm);SF=s(qj,"past_key_values"),qj.forEach(t),UF=s(Z,` key value states are returned and can be used to speed up decoding (see
`),Hm=a(Z,"CODE",{});var jj=i(Hm);WF=s(jj,"past_key_values"),jj.forEach(t),HF=s(Z,"). Set to "),Rm=a(Z,"CODE",{});var Cj=i(Rm);RF=s(Cj,"False"),Cj.forEach(t),QF=s(Z," during training, "),Qm=a(Z,"CODE",{});var Nj=i(Qm);VF=s(Nj,"True"),Nj.forEach(t),KF=s(Z,` during generation
labels (`),Vm=a(Z,"CODE",{});var Oj=i(Vm);JF=s(Oj,"tf.Tensor"),Oj.forEach(t),GF=s(Z," or "),Km=a(Z,"CODE",{});var Aj=i(Km);XF=s(Aj,"np.ndarray"),Aj.forEach(t),YF=s(Z," of shape "),Jm=a(Z,"CODE",{});var Ij=i(Jm);ZF=s(Ij,"(batch_size, sequence_length)"),Ij.forEach(t),e0=s(Z,", "),Gm=a(Z,"EM",{});var Lj=i(Gm);t0=s(Lj,"optional"),Lj.forEach(t),o0=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Xm=a(Z,"CODE",{});var Dj=i(Xm);n0=s(Dj,"[0, ..., config.vocab_size - 1]"),Dj.forEach(t),s0=s(Z,"."),Z.forEach(t),r0=p(Io),v(rr.$$.fragment,Io),Io.forEach(t),ey.forEach(t),qb=p(o),xn=a(o,"H2",{class:!0});var sy=i(xn);ar=a(sy,"A",{id:!0,class:!0,href:!0});var Sj=i(ar);Ym=a(Sj,"SPAN",{});var Uj=i(Ym);v(zl.$$.fragment,Uj),Uj.forEach(t),Sj.forEach(t),a0=p(sy),Zm=a(sy,"SPAN",{});var Wj=i(Zm);i0=s(Wj,"TFBertForMaskedLM"),Wj.forEach(t),sy.forEach(t),jb=p(o),Xe=a(o,"DIV",{class:!0});var so=i(Xe);v(Pl.$$.fragment,so),l0=p(so),ql=a(so,"P",{});var ry=i(ql);d0=s(ry,"Bert Model with a "),eu=a(ry,"CODE",{});var Hj=i(eu);c0=s(Hj,"language modeling"),Hj.forEach(t),p0=s(ry," head on top."),ry.forEach(t),h0=p(so),jl=a(so,"P",{});var ay=i(jl);f0=s(ay,"This model inherits from "),Kp=a(ay,"A",{href:!0});var Rj=i(Kp);m0=s(Rj,"TFPreTrainedModel"),Rj.forEach(t),u0=s(ay,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ay.forEach(t),g0=p(so),Cl=a(so,"P",{});var iy=i(Cl);_0=s(iy,"This model is also a "),Nl=a(iy,"A",{href:!0,rel:!0});var Qj=i(Nl);b0=s(Qj,"tf.keras.Model"),Qj.forEach(t),k0=s(iy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iy.forEach(t),y0=p(so),v(ir.$$.fragment,so),T0=p(so),bt=a(so,"DIV",{class:!0});var Lo=i(bt);v(Ol.$$.fragment,Lo),v0=p(Lo),Fn=a(Lo,"P",{});var Nh=i(Fn);w0=s(Nh,"The "),Jp=a(Nh,"A",{href:!0});var Vj=i(Jp);$0=s(Vj,"TFBertForMaskedLM"),Vj.forEach(t),x0=s(Nh," forward method, overrides the "),tu=a(Nh,"CODE",{});var Kj=i(tu);F0=s(Kj,"__call__"),Kj.forEach(t),B0=s(Nh," special method."),Nh.forEach(t),M0=p(Lo),v(lr.$$.fragment,Lo),E0=p(Lo),v(dr.$$.fragment,Lo),z0=p(Lo),v(cr.$$.fragment,Lo),Lo.forEach(t),so.forEach(t),Cb=p(o),Bn=a(o,"H2",{class:!0});var ly=i(Bn);pr=a(ly,"A",{id:!0,class:!0,href:!0});var Jj=i(pr);ou=a(Jj,"SPAN",{});var Gj=i(ou);v(Al.$$.fragment,Gj),Gj.forEach(t),Jj.forEach(t),P0=p(ly),nu=a(ly,"SPAN",{});var Xj=i(nu);q0=s(Xj,"TFBertForNextSentencePrediction"),Xj.forEach(t),ly.forEach(t),Nb=p(o),Ye=a(o,"DIV",{class:!0});var ro=i(Ye);v(Il.$$.fragment,ro),j0=p(ro),Ll=a(ro,"P",{});var dy=i(Ll);C0=s(dy,"Bert Model with a "),su=a(dy,"CODE",{});var Yj=i(su);N0=s(Yj,"next sentence prediction (classification)"),Yj.forEach(t),O0=s(dy," head on top."),dy.forEach(t),A0=p(ro),Dl=a(ro,"P",{});var cy=i(Dl);I0=s(cy,"This model inherits from "),Gp=a(cy,"A",{href:!0});var Zj=i(Gp);L0=s(Zj,"TFPreTrainedModel"),Zj.forEach(t),D0=s(cy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cy.forEach(t),S0=p(ro),Sl=a(ro,"P",{});var py=i(Sl);U0=s(py,"This model is also a "),Ul=a(py,"A",{href:!0,rel:!0});var e3=i(Ul);W0=s(e3,"tf.keras.Model"),e3.forEach(t),H0=s(py,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),py.forEach(t),R0=p(ro),v(hr.$$.fragment,ro),Q0=p(ro),Rt=a(ro,"DIV",{class:!0});var ua=i(Rt);v(Wl.$$.fragment,ua),V0=p(ua),Mn=a(ua,"P",{});var Oh=i(Mn);K0=s(Oh,"The "),Xp=a(Oh,"A",{href:!0});var t3=i(Xp);J0=s(t3,"TFBertForNextSentencePrediction"),t3.forEach(t),G0=s(Oh," forward method, overrides the "),ru=a(Oh,"CODE",{});var o3=i(ru);X0=s(o3,"__call__"),o3.forEach(t),Y0=s(Oh," special method."),Oh.forEach(t),Z0=p(ua),v(fr.$$.fragment,ua),e8=p(ua),v(mr.$$.fragment,ua),ua.forEach(t),ro.forEach(t),Ob=p(o),En=a(o,"H2",{class:!0});var hy=i(En);ur=a(hy,"A",{id:!0,class:!0,href:!0});var n3=i(ur);au=a(n3,"SPAN",{});var s3=i(au);v(Hl.$$.fragment,s3),s3.forEach(t),n3.forEach(t),t8=p(hy),iu=a(hy,"SPAN",{});var r3=i(iu);o8=s(r3,"TFBertForSequenceClassification"),r3.forEach(t),hy.forEach(t),Ab=p(o),Ze=a(o,"DIV",{class:!0});var ao=i(Ze);v(Rl.$$.fragment,ao),n8=p(ao),lu=a(ao,"P",{});var a3=i(lu);s8=s(a3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),a3.forEach(t),r8=p(ao),Ql=a(ao,"P",{});var fy=i(Ql);a8=s(fy,"This model inherits from "),Yp=a(fy,"A",{href:!0});var i3=i(Yp);i8=s(i3,"TFPreTrainedModel"),i3.forEach(t),l8=s(fy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fy.forEach(t),d8=p(ao),Vl=a(ao,"P",{});var my=i(Vl);c8=s(my,"This model is also a "),Kl=a(my,"A",{href:!0,rel:!0});var l3=i(Kl);p8=s(l3,"tf.keras.Model"),l3.forEach(t),h8=s(my,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),my.forEach(t),f8=p(ao),v(gr.$$.fragment,ao),m8=p(ao),kt=a(ao,"DIV",{class:!0});var Do=i(kt);v(Jl.$$.fragment,Do),u8=p(Do),zn=a(Do,"P",{});var Ah=i(zn);g8=s(Ah,"The "),Zp=a(Ah,"A",{href:!0});var d3=i(Zp);_8=s(d3,"TFBertForSequenceClassification"),d3.forEach(t),b8=s(Ah," forward method, overrides the "),du=a(Ah,"CODE",{});var c3=i(du);k8=s(c3,"__call__"),c3.forEach(t),y8=s(Ah," special method."),Ah.forEach(t),T8=p(Do),v(_r.$$.fragment,Do),v8=p(Do),v(br.$$.fragment,Do),w8=p(Do),v(kr.$$.fragment,Do),Do.forEach(t),ao.forEach(t),Ib=p(o),Pn=a(o,"H2",{class:!0});var uy=i(Pn);yr=a(uy,"A",{id:!0,class:!0,href:!0});var p3=i(yr);cu=a(p3,"SPAN",{});var h3=i(cu);v(Gl.$$.fragment,h3),h3.forEach(t),p3.forEach(t),$8=p(uy),pu=a(uy,"SPAN",{});var f3=i(pu);x8=s(f3,"TFBertForMultipleChoice"),f3.forEach(t),uy.forEach(t),Lb=p(o),et=a(o,"DIV",{class:!0});var io=i(et);v(Xl.$$.fragment,io),F8=p(io),hu=a(io,"P",{});var m3=i(hu);B8=s(m3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),m3.forEach(t),M8=p(io),Yl=a(io,"P",{});var gy=i(Yl);E8=s(gy,"This model inherits from "),eh=a(gy,"A",{href:!0});var u3=i(eh);z8=s(u3,"TFPreTrainedModel"),u3.forEach(t),P8=s(gy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gy.forEach(t),q8=p(io),Zl=a(io,"P",{});var _y=i(Zl);j8=s(_y,"This model is also a "),ed=a(_y,"A",{href:!0,rel:!0});var g3=i(ed);C8=s(g3,"tf.keras.Model"),g3.forEach(t),N8=s(_y,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_y.forEach(t),O8=p(io),v(Tr.$$.fragment,io),A8=p(io),Qt=a(io,"DIV",{class:!0});var ga=i(Qt);v(td.$$.fragment,ga),I8=p(ga),qn=a(ga,"P",{});var Ih=i(qn);L8=s(Ih,"The "),th=a(Ih,"A",{href:!0});var _3=i(th);D8=s(_3,"TFBertForMultipleChoice"),_3.forEach(t),S8=s(Ih," forward method, overrides the "),fu=a(Ih,"CODE",{});var b3=i(fu);U8=s(b3,"__call__"),b3.forEach(t),W8=s(Ih," special method."),Ih.forEach(t),H8=p(ga),v(vr.$$.fragment,ga),R8=p(ga),v(wr.$$.fragment,ga),ga.forEach(t),io.forEach(t),Db=p(o),jn=a(o,"H2",{class:!0});var by=i(jn);$r=a(by,"A",{id:!0,class:!0,href:!0});var k3=i($r);mu=a(k3,"SPAN",{});var y3=i(mu);v(od.$$.fragment,y3),y3.forEach(t),k3.forEach(t),Q8=p(by),uu=a(by,"SPAN",{});var T3=i(uu);V8=s(T3,"TFBertForTokenClassification"),T3.forEach(t),by.forEach(t),Sb=p(o),tt=a(o,"DIV",{class:!0});var lo=i(tt);v(nd.$$.fragment,lo),K8=p(lo),gu=a(lo,"P",{});var v3=i(gu);J8=s(v3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),v3.forEach(t),G8=p(lo),sd=a(lo,"P",{});var ky=i(sd);X8=s(ky,"This model inherits from "),oh=a(ky,"A",{href:!0});var w3=i(oh);Y8=s(w3,"TFPreTrainedModel"),w3.forEach(t),Z8=s(ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky.forEach(t),e7=p(lo),rd=a(lo,"P",{});var yy=i(rd);t7=s(yy,"This model is also a "),ad=a(yy,"A",{href:!0,rel:!0});var $3=i(ad);o7=s($3,"tf.keras.Model"),$3.forEach(t),n7=s(yy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yy.forEach(t),s7=p(lo),v(xr.$$.fragment,lo),r7=p(lo),yt=a(lo,"DIV",{class:!0});var So=i(yt);v(id.$$.fragment,So),a7=p(So),Cn=a(So,"P",{});var Lh=i(Cn);i7=s(Lh,"The "),nh=a(Lh,"A",{href:!0});var x3=i(nh);l7=s(x3,"TFBertForTokenClassification"),x3.forEach(t),d7=s(Lh," forward method, overrides the "),_u=a(Lh,"CODE",{});var F3=i(_u);c7=s(F3,"__call__"),F3.forEach(t),p7=s(Lh," special method."),Lh.forEach(t),h7=p(So),v(Fr.$$.fragment,So),f7=p(So),v(Br.$$.fragment,So),m7=p(So),v(Mr.$$.fragment,So),So.forEach(t),lo.forEach(t),Ub=p(o),Nn=a(o,"H2",{class:!0});var Ty=i(Nn);Er=a(Ty,"A",{id:!0,class:!0,href:!0});var B3=i(Er);bu=a(B3,"SPAN",{});var M3=i(bu);v(ld.$$.fragment,M3),M3.forEach(t),B3.forEach(t),u7=p(Ty),ku=a(Ty,"SPAN",{});var E3=i(ku);g7=s(E3,"TFBertForQuestionAnswering"),E3.forEach(t),Ty.forEach(t),Wb=p(o),ot=a(o,"DIV",{class:!0});var co=i(ot);v(dd.$$.fragment,co),_7=p(co),On=a(co,"P",{});var Dh=i(On);b7=s(Dh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),yu=a(Dh,"CODE",{});var z3=i(yu);k7=s(z3,"span start logits"),z3.forEach(t),y7=s(Dh," and "),Tu=a(Dh,"CODE",{});var P3=i(Tu);T7=s(P3,"span end logits"),P3.forEach(t),v7=s(Dh,")."),Dh.forEach(t),w7=p(co),cd=a(co,"P",{});var vy=i(cd);$7=s(vy,"This model inherits from "),sh=a(vy,"A",{href:!0});var q3=i(sh);x7=s(q3,"TFPreTrainedModel"),q3.forEach(t),F7=s(vy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vy.forEach(t),B7=p(co),pd=a(co,"P",{});var wy=i(pd);M7=s(wy,"This model is also a "),hd=a(wy,"A",{href:!0,rel:!0});var j3=i(hd);E7=s(j3,"tf.keras.Model"),j3.forEach(t),z7=s(wy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wy.forEach(t),P7=p(co),v(zr.$$.fragment,co),q7=p(co),Tt=a(co,"DIV",{class:!0});var Uo=i(Tt);v(fd.$$.fragment,Uo),j7=p(Uo),An=a(Uo,"P",{});var Sh=i(An);C7=s(Sh,"The "),rh=a(Sh,"A",{href:!0});var C3=i(rh);N7=s(C3,"TFBertForQuestionAnswering"),C3.forEach(t),O7=s(Sh," forward method, overrides the "),vu=a(Sh,"CODE",{});var N3=i(vu);A7=s(N3,"__call__"),N3.forEach(t),I7=s(Sh," special method."),Sh.forEach(t),L7=p(Uo),v(Pr.$$.fragment,Uo),D7=p(Uo),v(qr.$$.fragment,Uo),S7=p(Uo),v(jr.$$.fragment,Uo),Uo.forEach(t),co.forEach(t),Hb=p(o),In=a(o,"H2",{class:!0});var $y=i(In);Cr=a($y,"A",{id:!0,class:!0,href:!0});var O3=i(Cr);wu=a(O3,"SPAN",{});var A3=i(wu);v(md.$$.fragment,A3),A3.forEach(t),O3.forEach(t),U7=p($y),$u=a($y,"SPAN",{});var I3=i($u);W7=s(I3,"FlaxBertModel"),I3.forEach(t),$y.forEach(t),Rb=p(o),Ie=a(o,"DIV",{class:!0});var xt=i(Ie);v(ud.$$.fragment,xt),H7=p(xt),xu=a(xt,"P",{});var L3=i(xu);R7=s(L3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),L3.forEach(t),Q7=p(xt),gd=a(xt,"P",{});var xy=i(gd);V7=s(xy,"This model inherits from "),ah=a(xy,"A",{href:!0});var D3=i(ah);K7=s(D3,"FlaxPreTrainedModel"),D3.forEach(t),J7=s(xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xy.forEach(t),G7=p(xt),_d=a(xt,"P",{});var Fy=i(_d);X7=s(Fy,"This model is also a Flax Linen "),bd=a(Fy,"A",{href:!0,rel:!0});var S3=i(bd);Y7=s(S3,"flax.linen.Module"),S3.forEach(t),Z7=s(Fy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fy.forEach(t),eB=p(xt),Fu=a(xt,"P",{});var U3=i(Fu);tB=s(U3,"Finally, this model supports inherent JAX features such as:"),U3.forEach(t),oB=p(xt),fo=a(xt,"UL",{});var _a=i(fo);Bu=a(_a,"LI",{});var W3=i(Bu);kd=a(W3,"A",{href:!0,rel:!0});var H3=i(kd);nB=s(H3,"Just-In-Time (JIT) compilation"),H3.forEach(t),W3.forEach(t),sB=p(_a),Mu=a(_a,"LI",{});var R3=i(Mu);yd=a(R3,"A",{href:!0,rel:!0});var Q3=i(yd);rB=s(Q3,"Automatic Differentiation"),Q3.forEach(t),R3.forEach(t),aB=p(_a),Eu=a(_a,"LI",{});var V3=i(Eu);Td=a(V3,"A",{href:!0,rel:!0});var K3=i(Td);iB=s(K3,"Vectorization"),K3.forEach(t),V3.forEach(t),lB=p(_a),zu=a(_a,"LI",{});var J3=i(zu);vd=a(J3,"A",{href:!0,rel:!0});var G3=i(vd);dB=s(G3,"Parallelization"),G3.forEach(t),J3.forEach(t),_a.forEach(t),cB=p(xt),Vt=a(xt,"DIV",{class:!0});var ba=i(Vt);v(wd.$$.fragment,ba),pB=p(ba),Ln=a(ba,"P",{});var Uh=i(Ln);hB=s(Uh,"The "),Pu=a(Uh,"CODE",{});var X3=i(Pu);fB=s(X3,"FlaxBertPreTrainedModel"),X3.forEach(t),mB=s(Uh," forward method, overrides the "),qu=a(Uh,"CODE",{});var Y3=i(qu);uB=s(Y3,"__call__"),Y3.forEach(t),gB=s(Uh," special method."),Uh.forEach(t),_B=p(ba),v(Nr.$$.fragment,ba),bB=p(ba),v(Or.$$.fragment,ba),ba.forEach(t),xt.forEach(t),Qb=p(o),Dn=a(o,"H2",{class:!0});var By=i(Dn);Ar=a(By,"A",{id:!0,class:!0,href:!0});var Z3=i(Ar);ju=a(Z3,"SPAN",{});var eC=i(ju);v($d.$$.fragment,eC),eC.forEach(t),Z3.forEach(t),kB=p(By),Cu=a(By,"SPAN",{});var tC=i(Cu);yB=s(tC,"FlaxBertForPreTraining"),tC.forEach(t),By.forEach(t),Vb=p(o),Le=a(o,"DIV",{class:!0});var Ft=i(Le);v(xd.$$.fragment,Ft),TB=p(Ft),Sn=a(Ft,"P",{});var Wh=i(Sn);vB=s(Wh,"Bert Model with two heads on top as done during the pretraining: a "),Nu=a(Wh,"CODE",{});var oC=i(Nu);wB=s(oC,"masked language modeling"),oC.forEach(t),$B=s(Wh," head and a "),Ou=a(Wh,"CODE",{});var nC=i(Ou);xB=s(nC,"next sentence prediction (classification)"),nC.forEach(t),FB=s(Wh," head."),Wh.forEach(t),BB=p(Ft),Fd=a(Ft,"P",{});var My=i(Fd);MB=s(My,"This model inherits from "),ih=a(My,"A",{href:!0});var sC=i(ih);EB=s(sC,"FlaxPreTrainedModel"),sC.forEach(t),zB=s(My,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),My.forEach(t),PB=p(Ft),Bd=a(Ft,"P",{});var Ey=i(Bd);qB=s(Ey,"This model is also a Flax Linen "),Md=a(Ey,"A",{href:!0,rel:!0});var rC=i(Md);jB=s(rC,"flax.linen.Module"),rC.forEach(t),CB=s(Ey,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ey.forEach(t),NB=p(Ft),Au=a(Ft,"P",{});var aC=i(Au);OB=s(aC,"Finally, this model supports inherent JAX features such as:"),aC.forEach(t),AB=p(Ft),mo=a(Ft,"UL",{});var ka=i(mo);Iu=a(ka,"LI",{});var iC=i(Iu);Ed=a(iC,"A",{href:!0,rel:!0});var lC=i(Ed);IB=s(lC,"Just-In-Time (JIT) compilation"),lC.forEach(t),iC.forEach(t),LB=p(ka),Lu=a(ka,"LI",{});var dC=i(Lu);zd=a(dC,"A",{href:!0,rel:!0});var cC=i(zd);DB=s(cC,"Automatic Differentiation"),cC.forEach(t),dC.forEach(t),SB=p(ka),Du=a(ka,"LI",{});var pC=i(Du);Pd=a(pC,"A",{href:!0,rel:!0});var hC=i(Pd);UB=s(hC,"Vectorization"),hC.forEach(t),pC.forEach(t),WB=p(ka),Su=a(ka,"LI",{});var fC=i(Su);qd=a(fC,"A",{href:!0,rel:!0});var mC=i(qd);HB=s(mC,"Parallelization"),mC.forEach(t),fC.forEach(t),ka.forEach(t),RB=p(Ft),Kt=a(Ft,"DIV",{class:!0});var ya=i(Kt);v(jd.$$.fragment,ya),QB=p(ya),Un=a(ya,"P",{});var Hh=i(Un);VB=s(Hh,"The "),Uu=a(Hh,"CODE",{});var uC=i(Uu);KB=s(uC,"FlaxBertPreTrainedModel"),uC.forEach(t),JB=s(Hh," forward method, overrides the "),Wu=a(Hh,"CODE",{});var gC=i(Wu);GB=s(gC,"__call__"),gC.forEach(t),XB=s(Hh," special method."),Hh.forEach(t),YB=p(ya),v(Ir.$$.fragment,ya),ZB=p(ya),v(Lr.$$.fragment,ya),ya.forEach(t),Ft.forEach(t),Kb=p(o),Wn=a(o,"H2",{class:!0});var zy=i(Wn);Dr=a(zy,"A",{id:!0,class:!0,href:!0});var _C=i(Dr);Hu=a(_C,"SPAN",{});var bC=i(Hu);v(Cd.$$.fragment,bC),bC.forEach(t),_C.forEach(t),eM=p(zy),Ru=a(zy,"SPAN",{});var kC=i(Ru);tM=s(kC,"FlaxBertForCausalLM"),kC.forEach(t),zy.forEach(t),Jb=p(o),De=a(o,"DIV",{class:!0});var Bt=i(De);v(Nd.$$.fragment,Bt),oM=p(Bt),Qu=a(Bt,"P",{});var yC=i(Qu);nM=s(yC,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),yC.forEach(t),sM=p(Bt),Od=a(Bt,"P",{});var Py=i(Od);rM=s(Py,"This model inherits from "),lh=a(Py,"A",{href:!0});var TC=i(lh);aM=s(TC,"FlaxPreTrainedModel"),TC.forEach(t),iM=s(Py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Py.forEach(t),lM=p(Bt),Ad=a(Bt,"P",{});var qy=i(Ad);dM=s(qy,"This model is also a Flax Linen "),Id=a(qy,"A",{href:!0,rel:!0});var vC=i(Id);cM=s(vC,"flax.linen.Module"),vC.forEach(t),pM=s(qy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qy.forEach(t),hM=p(Bt),Vu=a(Bt,"P",{});var wC=i(Vu);fM=s(wC,"Finally, this model supports inherent JAX features such as:"),wC.forEach(t),mM=p(Bt),uo=a(Bt,"UL",{});var Ta=i(uo);Ku=a(Ta,"LI",{});var $C=i(Ku);Ld=a($C,"A",{href:!0,rel:!0});var xC=i(Ld);uM=s(xC,"Just-In-Time (JIT) compilation"),xC.forEach(t),$C.forEach(t),gM=p(Ta),Ju=a(Ta,"LI",{});var FC=i(Ju);Dd=a(FC,"A",{href:!0,rel:!0});var BC=i(Dd);_M=s(BC,"Automatic Differentiation"),BC.forEach(t),FC.forEach(t),bM=p(Ta),Gu=a(Ta,"LI",{});var MC=i(Gu);Sd=a(MC,"A",{href:!0,rel:!0});var EC=i(Sd);kM=s(EC,"Vectorization"),EC.forEach(t),MC.forEach(t),yM=p(Ta),Xu=a(Ta,"LI",{});var zC=i(Xu);Ud=a(zC,"A",{href:!0,rel:!0});var PC=i(Ud);TM=s(PC,"Parallelization"),PC.forEach(t),zC.forEach(t),Ta.forEach(t),vM=p(Bt),Jt=a(Bt,"DIV",{class:!0});var va=i(Jt);v(Wd.$$.fragment,va),wM=p(va),Hn=a(va,"P",{});var Rh=i(Hn);$M=s(Rh,"The "),Yu=a(Rh,"CODE",{});var qC=i(Yu);xM=s(qC,"FlaxBertPreTrainedModel"),qC.forEach(t),FM=s(Rh," forward method, overrides the "),Zu=a(Rh,"CODE",{});var jC=i(Zu);BM=s(jC,"__call__"),jC.forEach(t),MM=s(Rh," special method."),Rh.forEach(t),EM=p(va),v(Sr.$$.fragment,va),zM=p(va),v(Ur.$$.fragment,va),va.forEach(t),Bt.forEach(t),Gb=p(o),Rn=a(o,"H2",{class:!0});var jy=i(Rn);Wr=a(jy,"A",{id:!0,class:!0,href:!0});var CC=i(Wr);eg=a(CC,"SPAN",{});var NC=i(eg);v(Hd.$$.fragment,NC),NC.forEach(t),CC.forEach(t),PM=p(jy),tg=a(jy,"SPAN",{});var OC=i(tg);qM=s(OC,"FlaxBertForMaskedLM"),OC.forEach(t),jy.forEach(t),Xb=p(o),Se=a(o,"DIV",{class:!0});var Mt=i(Se);v(Rd.$$.fragment,Mt),jM=p(Mt),Qd=a(Mt,"P",{});var Cy=i(Qd);CM=s(Cy,"Bert Model with a "),og=a(Cy,"CODE",{});var AC=i(og);NM=s(AC,"language modeling"),AC.forEach(t),OM=s(Cy," head on top."),Cy.forEach(t),AM=p(Mt),Vd=a(Mt,"P",{});var Ny=i(Vd);IM=s(Ny,"This model inherits from "),dh=a(Ny,"A",{href:!0});var IC=i(dh);LM=s(IC,"FlaxPreTrainedModel"),IC.forEach(t),DM=s(Ny,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ny.forEach(t),SM=p(Mt),Kd=a(Mt,"P",{});var Oy=i(Kd);UM=s(Oy,"This model is also a Flax Linen "),Jd=a(Oy,"A",{href:!0,rel:!0});var LC=i(Jd);WM=s(LC,"flax.linen.Module"),LC.forEach(t),HM=s(Oy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Oy.forEach(t),RM=p(Mt),ng=a(Mt,"P",{});var DC=i(ng);QM=s(DC,"Finally, this model supports inherent JAX features such as:"),DC.forEach(t),VM=p(Mt),go=a(Mt,"UL",{});var wa=i(go);sg=a(wa,"LI",{});var SC=i(sg);Gd=a(SC,"A",{href:!0,rel:!0});var UC=i(Gd);KM=s(UC,"Just-In-Time (JIT) compilation"),UC.forEach(t),SC.forEach(t),JM=p(wa),rg=a(wa,"LI",{});var WC=i(rg);Xd=a(WC,"A",{href:!0,rel:!0});var HC=i(Xd);GM=s(HC,"Automatic Differentiation"),HC.forEach(t),WC.forEach(t),XM=p(wa),ag=a(wa,"LI",{});var RC=i(ag);Yd=a(RC,"A",{href:!0,rel:!0});var QC=i(Yd);YM=s(QC,"Vectorization"),QC.forEach(t),RC.forEach(t),ZM=p(wa),ig=a(wa,"LI",{});var VC=i(ig);Zd=a(VC,"A",{href:!0,rel:!0});var KC=i(Zd);eE=s(KC,"Parallelization"),KC.forEach(t),VC.forEach(t),wa.forEach(t),tE=p(Mt),Gt=a(Mt,"DIV",{class:!0});var $a=i(Gt);v(ec.$$.fragment,$a),oE=p($a),Qn=a($a,"P",{});var Qh=i(Qn);nE=s(Qh,"The "),lg=a(Qh,"CODE",{});var JC=i(lg);sE=s(JC,"FlaxBertPreTrainedModel"),JC.forEach(t),rE=s(Qh," forward method, overrides the "),dg=a(Qh,"CODE",{});var GC=i(dg);aE=s(GC,"__call__"),GC.forEach(t),iE=s(Qh," special method."),Qh.forEach(t),lE=p($a),v(Hr.$$.fragment,$a),dE=p($a),v(Rr.$$.fragment,$a),$a.forEach(t),Mt.forEach(t),Yb=p(o),Vn=a(o,"H2",{class:!0});var Ay=i(Vn);Qr=a(Ay,"A",{id:!0,class:!0,href:!0});var XC=i(Qr);cg=a(XC,"SPAN",{});var YC=i(cg);v(tc.$$.fragment,YC),YC.forEach(t),XC.forEach(t),cE=p(Ay),pg=a(Ay,"SPAN",{});var ZC=i(pg);pE=s(ZC,"FlaxBertForNextSentencePrediction"),ZC.forEach(t),Ay.forEach(t),Zb=p(o),Ue=a(o,"DIV",{class:!0});var Et=i(Ue);v(oc.$$.fragment,Et),hE=p(Et),nc=a(Et,"P",{});var Iy=i(nc);fE=s(Iy,"Bert Model with a "),hg=a(Iy,"CODE",{});var e6=i(hg);mE=s(e6,"next sentence prediction (classification)"),e6.forEach(t),uE=s(Iy," head on top."),Iy.forEach(t),gE=p(Et),sc=a(Et,"P",{});var Ly=i(sc);_E=s(Ly,"This model inherits from "),ch=a(Ly,"A",{href:!0});var t6=i(ch);bE=s(t6,"FlaxPreTrainedModel"),t6.forEach(t),kE=s(Ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ly.forEach(t),yE=p(Et),rc=a(Et,"P",{});var Dy=i(rc);TE=s(Dy,"This model is also a Flax Linen "),ac=a(Dy,"A",{href:!0,rel:!0});var o6=i(ac);vE=s(o6,"flax.linen.Module"),o6.forEach(t),wE=s(Dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dy.forEach(t),$E=p(Et),fg=a(Et,"P",{});var n6=i(fg);xE=s(n6,"Finally, this model supports inherent JAX features such as:"),n6.forEach(t),FE=p(Et),_o=a(Et,"UL",{});var xa=i(_o);mg=a(xa,"LI",{});var s6=i(mg);ic=a(s6,"A",{href:!0,rel:!0});var r6=i(ic);BE=s(r6,"Just-In-Time (JIT) compilation"),r6.forEach(t),s6.forEach(t),ME=p(xa),ug=a(xa,"LI",{});var a6=i(ug);lc=a(a6,"A",{href:!0,rel:!0});var i6=i(lc);EE=s(i6,"Automatic Differentiation"),i6.forEach(t),a6.forEach(t),zE=p(xa),gg=a(xa,"LI",{});var l6=i(gg);dc=a(l6,"A",{href:!0,rel:!0});var d6=i(dc);PE=s(d6,"Vectorization"),d6.forEach(t),l6.forEach(t),qE=p(xa),_g=a(xa,"LI",{});var c6=i(_g);cc=a(c6,"A",{href:!0,rel:!0});var p6=i(cc);jE=s(p6,"Parallelization"),p6.forEach(t),c6.forEach(t),xa.forEach(t),CE=p(Et),Xt=a(Et,"DIV",{class:!0});var Fa=i(Xt);v(pc.$$.fragment,Fa),NE=p(Fa),Kn=a(Fa,"P",{});var Vh=i(Kn);OE=s(Vh,"The "),bg=a(Vh,"CODE",{});var h6=i(bg);AE=s(h6,"FlaxBertPreTrainedModel"),h6.forEach(t),IE=s(Vh," forward method, overrides the "),kg=a(Vh,"CODE",{});var f6=i(kg);LE=s(f6,"__call__"),f6.forEach(t),DE=s(Vh," special method."),Vh.forEach(t),SE=p(Fa),v(Vr.$$.fragment,Fa),UE=p(Fa),v(Kr.$$.fragment,Fa),Fa.forEach(t),Et.forEach(t),ek=p(o),Jn=a(o,"H2",{class:!0});var Sy=i(Jn);Jr=a(Sy,"A",{id:!0,class:!0,href:!0});var m6=i(Jr);yg=a(m6,"SPAN",{});var u6=i(yg);v(hc.$$.fragment,u6),u6.forEach(t),m6.forEach(t),WE=p(Sy),Tg=a(Sy,"SPAN",{});var g6=i(Tg);HE=s(g6,"FlaxBertForSequenceClassification"),g6.forEach(t),Sy.forEach(t),tk=p(o),We=a(o,"DIV",{class:!0});var zt=i(We);v(fc.$$.fragment,zt),RE=p(zt),vg=a(zt,"P",{});var _6=i(vg);QE=s(_6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),_6.forEach(t),VE=p(zt),mc=a(zt,"P",{});var Uy=i(mc);KE=s(Uy,"This model inherits from "),ph=a(Uy,"A",{href:!0});var b6=i(ph);JE=s(b6,"FlaxPreTrainedModel"),b6.forEach(t),GE=s(Uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uy.forEach(t),XE=p(zt),uc=a(zt,"P",{});var Wy=i(uc);YE=s(Wy,"This model is also a Flax Linen "),gc=a(Wy,"A",{href:!0,rel:!0});var k6=i(gc);ZE=s(k6,"flax.linen.Module"),k6.forEach(t),ez=s(Wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wy.forEach(t),tz=p(zt),wg=a(zt,"P",{});var y6=i(wg);oz=s(y6,"Finally, this model supports inherent JAX features such as:"),y6.forEach(t),nz=p(zt),bo=a(zt,"UL",{});var Ba=i(bo);$g=a(Ba,"LI",{});var T6=i($g);_c=a(T6,"A",{href:!0,rel:!0});var v6=i(_c);sz=s(v6,"Just-In-Time (JIT) compilation"),v6.forEach(t),T6.forEach(t),rz=p(Ba),xg=a(Ba,"LI",{});var w6=i(xg);bc=a(w6,"A",{href:!0,rel:!0});var $6=i(bc);az=s($6,"Automatic Differentiation"),$6.forEach(t),w6.forEach(t),iz=p(Ba),Fg=a(Ba,"LI",{});var x6=i(Fg);kc=a(x6,"A",{href:!0,rel:!0});var F6=i(kc);lz=s(F6,"Vectorization"),F6.forEach(t),x6.forEach(t),dz=p(Ba),Bg=a(Ba,"LI",{});var B6=i(Bg);yc=a(B6,"A",{href:!0,rel:!0});var M6=i(yc);cz=s(M6,"Parallelization"),M6.forEach(t),B6.forEach(t),Ba.forEach(t),pz=p(zt),Yt=a(zt,"DIV",{class:!0});var Ma=i(Yt);v(Tc.$$.fragment,Ma),hz=p(Ma),Gn=a(Ma,"P",{});var Kh=i(Gn);fz=s(Kh,"The "),Mg=a(Kh,"CODE",{});var E6=i(Mg);mz=s(E6,"FlaxBertPreTrainedModel"),E6.forEach(t),uz=s(Kh," forward method, overrides the "),Eg=a(Kh,"CODE",{});var z6=i(Eg);gz=s(z6,"__call__"),z6.forEach(t),_z=s(Kh," special method."),Kh.forEach(t),bz=p(Ma),v(Gr.$$.fragment,Ma),kz=p(Ma),v(Xr.$$.fragment,Ma),Ma.forEach(t),zt.forEach(t),ok=p(o),Xn=a(o,"H2",{class:!0});var Hy=i(Xn);Yr=a(Hy,"A",{id:!0,class:!0,href:!0});var P6=i(Yr);zg=a(P6,"SPAN",{});var q6=i(zg);v(vc.$$.fragment,q6),q6.forEach(t),P6.forEach(t),yz=p(Hy),Pg=a(Hy,"SPAN",{});var j6=i(Pg);Tz=s(j6,"FlaxBertForMultipleChoice"),j6.forEach(t),Hy.forEach(t),nk=p(o),He=a(o,"DIV",{class:!0});var Pt=i(He);v(wc.$$.fragment,Pt),vz=p(Pt),qg=a(Pt,"P",{});var C6=i(qg);wz=s(C6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),C6.forEach(t),$z=p(Pt),$c=a(Pt,"P",{});var Ry=i($c);xz=s(Ry,"This model inherits from "),hh=a(Ry,"A",{href:!0});var N6=i(hh);Fz=s(N6,"FlaxPreTrainedModel"),N6.forEach(t),Bz=s(Ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ry.forEach(t),Mz=p(Pt),xc=a(Pt,"P",{});var Qy=i(xc);Ez=s(Qy,"This model is also a Flax Linen "),Fc=a(Qy,"A",{href:!0,rel:!0});var O6=i(Fc);zz=s(O6,"flax.linen.Module"),O6.forEach(t),Pz=s(Qy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qy.forEach(t),qz=p(Pt),jg=a(Pt,"P",{});var A6=i(jg);jz=s(A6,"Finally, this model supports inherent JAX features such as:"),A6.forEach(t),Cz=p(Pt),ko=a(Pt,"UL",{});var Ea=i(ko);Cg=a(Ea,"LI",{});var I6=i(Cg);Bc=a(I6,"A",{href:!0,rel:!0});var L6=i(Bc);Nz=s(L6,"Just-In-Time (JIT) compilation"),L6.forEach(t),I6.forEach(t),Oz=p(Ea),Ng=a(Ea,"LI",{});var D6=i(Ng);Mc=a(D6,"A",{href:!0,rel:!0});var S6=i(Mc);Az=s(S6,"Automatic Differentiation"),S6.forEach(t),D6.forEach(t),Iz=p(Ea),Og=a(Ea,"LI",{});var U6=i(Og);Ec=a(U6,"A",{href:!0,rel:!0});var W6=i(Ec);Lz=s(W6,"Vectorization"),W6.forEach(t),U6.forEach(t),Dz=p(Ea),Ag=a(Ea,"LI",{});var H6=i(Ag);zc=a(H6,"A",{href:!0,rel:!0});var R6=i(zc);Sz=s(R6,"Parallelization"),R6.forEach(t),H6.forEach(t),Ea.forEach(t),Uz=p(Pt),Zt=a(Pt,"DIV",{class:!0});var za=i(Zt);v(Pc.$$.fragment,za),Wz=p(za),Yn=a(za,"P",{});var Jh=i(Yn);Hz=s(Jh,"The "),Ig=a(Jh,"CODE",{});var Q6=i(Ig);Rz=s(Q6,"FlaxBertPreTrainedModel"),Q6.forEach(t),Qz=s(Jh," forward method, overrides the "),Lg=a(Jh,"CODE",{});var V6=i(Lg);Vz=s(V6,"__call__"),V6.forEach(t),Kz=s(Jh," special method."),Jh.forEach(t),Jz=p(za),v(Zr.$$.fragment,za),Gz=p(za),v(ea.$$.fragment,za),za.forEach(t),Pt.forEach(t),sk=p(o),Zn=a(o,"H2",{class:!0});var Vy=i(Zn);ta=a(Vy,"A",{id:!0,class:!0,href:!0});var K6=i(ta);Dg=a(K6,"SPAN",{});var J6=i(Dg);v(qc.$$.fragment,J6),J6.forEach(t),K6.forEach(t),Xz=p(Vy),Sg=a(Vy,"SPAN",{});var G6=i(Sg);Yz=s(G6,"FlaxBertForTokenClassification"),G6.forEach(t),Vy.forEach(t),rk=p(o),Re=a(o,"DIV",{class:!0});var qt=i(Re);v(jc.$$.fragment,qt),Zz=p(qt),Ug=a(qt,"P",{});var X6=i(Ug);e4=s(X6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),X6.forEach(t),t4=p(qt),Cc=a(qt,"P",{});var Ky=i(Cc);o4=s(Ky,"This model inherits from "),fh=a(Ky,"A",{href:!0});var Y6=i(fh);n4=s(Y6,"FlaxPreTrainedModel"),Y6.forEach(t),s4=s(Ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ky.forEach(t),r4=p(qt),Nc=a(qt,"P",{});var Jy=i(Nc);a4=s(Jy,"This model is also a Flax Linen "),Oc=a(Jy,"A",{href:!0,rel:!0});var Z6=i(Oc);i4=s(Z6,"flax.linen.Module"),Z6.forEach(t),l4=s(Jy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jy.forEach(t),d4=p(qt),Wg=a(qt,"P",{});var e5=i(Wg);c4=s(e5,"Finally, this model supports inherent JAX features such as:"),e5.forEach(t),p4=p(qt),yo=a(qt,"UL",{});var Pa=i(yo);Hg=a(Pa,"LI",{});var t5=i(Hg);Ac=a(t5,"A",{href:!0,rel:!0});var o5=i(Ac);h4=s(o5,"Just-In-Time (JIT) compilation"),o5.forEach(t),t5.forEach(t),f4=p(Pa),Rg=a(Pa,"LI",{});var n5=i(Rg);Ic=a(n5,"A",{href:!0,rel:!0});var s5=i(Ic);m4=s(s5,"Automatic Differentiation"),s5.forEach(t),n5.forEach(t),u4=p(Pa),Qg=a(Pa,"LI",{});var r5=i(Qg);Lc=a(r5,"A",{href:!0,rel:!0});var a5=i(Lc);g4=s(a5,"Vectorization"),a5.forEach(t),r5.forEach(t),_4=p(Pa),Vg=a(Pa,"LI",{});var i5=i(Vg);Dc=a(i5,"A",{href:!0,rel:!0});var l5=i(Dc);b4=s(l5,"Parallelization"),l5.forEach(t),i5.forEach(t),Pa.forEach(t),k4=p(qt),eo=a(qt,"DIV",{class:!0});var qa=i(eo);v(Sc.$$.fragment,qa),y4=p(qa),es=a(qa,"P",{});var Gh=i(es);T4=s(Gh,"The "),Kg=a(Gh,"CODE",{});var d5=i(Kg);v4=s(d5,"FlaxBertPreTrainedModel"),d5.forEach(t),w4=s(Gh," forward method, overrides the "),Jg=a(Gh,"CODE",{});var c5=i(Jg);$4=s(c5,"__call__"),c5.forEach(t),x4=s(Gh," special method."),Gh.forEach(t),F4=p(qa),v(oa.$$.fragment,qa),B4=p(qa),v(na.$$.fragment,qa),qa.forEach(t),qt.forEach(t),ak=p(o),ts=a(o,"H2",{class:!0});var Gy=i(ts);sa=a(Gy,"A",{id:!0,class:!0,href:!0});var p5=i(sa);Gg=a(p5,"SPAN",{});var h5=i(Gg);v(Uc.$$.fragment,h5),h5.forEach(t),p5.forEach(t),M4=p(Gy),Xg=a(Gy,"SPAN",{});var f5=i(Xg);E4=s(f5,"FlaxBertForQuestionAnswering"),f5.forEach(t),Gy.forEach(t),ik=p(o),Qe=a(o,"DIV",{class:!0});var jt=i(Qe);v(Wc.$$.fragment,jt),z4=p(jt),os=a(jt,"P",{});var Xh=i(os);P4=s(Xh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yg=a(Xh,"CODE",{});var m5=i(Yg);q4=s(m5,"span start logits"),m5.forEach(t),j4=s(Xh," and "),Zg=a(Xh,"CODE",{});var u5=i(Zg);C4=s(u5,"span end logits"),u5.forEach(t),N4=s(Xh,")."),Xh.forEach(t),O4=p(jt),Hc=a(jt,"P",{});var Xy=i(Hc);A4=s(Xy,"This model inherits from "),mh=a(Xy,"A",{href:!0});var g5=i(mh);I4=s(g5,"FlaxPreTrainedModel"),g5.forEach(t),L4=s(Xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xy.forEach(t),D4=p(jt),Rc=a(jt,"P",{});var Yy=i(Rc);S4=s(Yy,"This model is also a Flax Linen "),Qc=a(Yy,"A",{href:!0,rel:!0});var _5=i(Qc);U4=s(_5,"flax.linen.Module"),_5.forEach(t),W4=s(Yy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yy.forEach(t),H4=p(jt),e_=a(jt,"P",{});var b5=i(e_);R4=s(b5,"Finally, this model supports inherent JAX features such as:"),b5.forEach(t),Q4=p(jt),To=a(jt,"UL",{});var ja=i(To);t_=a(ja,"LI",{});var k5=i(t_);Vc=a(k5,"A",{href:!0,rel:!0});var y5=i(Vc);V4=s(y5,"Just-In-Time (JIT) compilation"),y5.forEach(t),k5.forEach(t),K4=p(ja),o_=a(ja,"LI",{});var T5=i(o_);Kc=a(T5,"A",{href:!0,rel:!0});var v5=i(Kc);J4=s(v5,"Automatic Differentiation"),v5.forEach(t),T5.forEach(t),G4=p(ja),n_=a(ja,"LI",{});var w5=i(n_);Jc=a(w5,"A",{href:!0,rel:!0});var $5=i(Jc);X4=s($5,"Vectorization"),$5.forEach(t),w5.forEach(t),Y4=p(ja),s_=a(ja,"LI",{});var x5=i(s_);Gc=a(x5,"A",{href:!0,rel:!0});var F5=i(Gc);Z4=s(F5,"Parallelization"),F5.forEach(t),x5.forEach(t),ja.forEach(t),eP=p(jt),to=a(jt,"DIV",{class:!0});var Ca=i(to);v(Xc.$$.fragment,Ca),tP=p(Ca),ns=a(Ca,"P",{});var Yh=i(ns);oP=s(Yh,"The "),r_=a(Yh,"CODE",{});var B5=i(r_);nP=s(B5,"FlaxBertPreTrainedModel"),B5.forEach(t),sP=s(Yh," forward method, overrides the "),a_=a(Yh,"CODE",{});var M5=i(a_);rP=s(M5,"__call__"),M5.forEach(t),aP=s(Yh," special method."),Yh.forEach(t),iP=p(Ca),v(ra.$$.fragment,Ca),lP=p(Ca),v(aa.$$.fragment,Ca),Ca.forEach(t),jt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(tO)),u(f,"id","bert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u($e,"class","relative group"),u(hp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertModel"),u(fp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertModel"),u(Oa,"href","https://huggingface.co/bert-base-uncased"),u(Oa,"rel","nofollow"),u(mp,"href","/docs/transformers/pr_17878/en/main_classes/configuration#transformers.PretrainedConfig"),u(up,"href","/docs/transformers/pr_17878/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cs,"id","transformers.BertTokenizer"),u(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cs,"href","#transformers.BertTokenizer"),u(Ho,"class","relative group"),u(gp,"href","/docs/transformers/pr_17878/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.BertTokenizerFast"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.BertTokenizerFast"),u(Qo,"class","relative group"),u(yp,"href","/docs/transformers/pr_17878/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(us,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ko,"class","relative group"),u(wp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForPreTraining"),u(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($p,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForPreTraining"),u(gs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertModel"),u(Xo,"class","relative group"),u(Fp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(pi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pi,"rel","nofollow"),u(fi,"href","https://arxiv.org/abs/1706.03762"),u(fi,"rel","nofollow"),u(Bp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.BertForPreTraining"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.BertForPreTraining"),u(Zo,"class","relative group"),u(Mp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(ki,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ki,"rel","nofollow"),u(Ep,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForPreTraining"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.BertLMHeadModel"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.BertLMHeadModel"),u(on,"class","relative group"),u(zp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(Fi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fi,"rel","nofollow"),u(Pp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertLMHeadModel"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.BertForMaskedLM"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.BertForMaskedLM"),u(sn,"class","relative group"),u(qp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ji,"rel","nofollow"),u(jp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForMaskedLM"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zs,"id","transformers.BertForNextSentencePrediction"),u(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zs,"href","#transformers.BertForNextSentencePrediction"),u(an,"class","relative group"),u(Cp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(Di,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Di,"rel","nofollow"),u(Np,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForSequenceClassification"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForSequenceClassification"),u(dn,"class","relative group"),u(Op,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(Qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qi,"rel","nofollow"),u(Ap,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ls,"id","transformers.BertForMultipleChoice"),u(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ls,"href","#transformers.BertForMultipleChoice"),u(pn,"class","relative group"),u(Ip,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(Yi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yi,"rel","nofollow"),u(Lp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.BertForTokenClassification"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.BertForTokenClassification"),u(fn,"class","relative group"),u(Dp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(sl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(sl,"rel","nofollow"),u(Sp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForTokenClassification"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qs,"id","transformers.BertForQuestionAnswering"),u(Qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qs,"href","#transformers.BertForQuestionAnswering"),u(un,"class","relative group"),u(Up,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.PreTrainedModel"),u(cl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(cl,"rel","nofollow"),u(Wp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.TFBertModel"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.TFBertModel"),u(bn,"class","relative group"),u(Hp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(gl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(gl,"rel","nofollow"),u(Rp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertModel"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForPreTraining"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForPreTraining"),u(yn,"class","relative group"),u(Qp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(vl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(vl,"rel","nofollow"),u(Vp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.TFBertLMHeadModel"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.TFBertLMHeadModel"),u(wn,"class","relative group"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ar,"id","transformers.TFBertForMaskedLM"),u(ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ar,"href","#transformers.TFBertForMaskedLM"),u(xn,"class","relative group"),u(Kp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(Nl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Nl,"rel","nofollow"),u(Jp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertForNextSentencePrediction"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertForNextSentencePrediction"),u(Bn,"class","relative group"),u(Gp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ul,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ul,"rel","nofollow"),u(Xp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ur,"id","transformers.TFBertForSequenceClassification"),u(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ur,"href","#transformers.TFBertForSequenceClassification"),u(En,"class","relative group"),u(Yp,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(Kl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Kl,"rel","nofollow"),u(Zp,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yr,"id","transformers.TFBertForMultipleChoice"),u(yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yr,"href","#transformers.TFBertForMultipleChoice"),u(Pn,"class","relative group"),u(eh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(ed,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ed,"rel","nofollow"),u(th,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFBertForTokenClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFBertForTokenClassification"),u(jn,"class","relative group"),u(oh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(ad,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ad,"rel","nofollow"),u(nh,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Er,"id","transformers.TFBertForQuestionAnswering"),u(Er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Er,"href","#transformers.TFBertForQuestionAnswering"),u(Nn,"class","relative group"),u(sh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.TFPreTrainedModel"),u(hd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hd,"rel","nofollow"),u(rh,"href","/docs/transformers/pr_17878/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertModel"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertModel"),u(In,"class","relative group"),u(ah,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(bd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(bd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(kd,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Td,"rel","nofollow"),u(vd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(vd,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForPreTraining"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForPreTraining"),u(Dn,"class","relative group"),u(ih,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForCausalLM"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForCausalLM"),u(Wn,"class","relative group"),u(lh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Id,"rel","nofollow"),u(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ud,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMaskedLM"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMaskedLM"),u(Rn,"class","relative group"),u(dh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qr,"id","transformers.FlaxBertForNextSentencePrediction"),u(Qr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qr,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Vn,"class","relative group"),u(ch,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ac,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(dc,"rel","nofollow"),u(cc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(cc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForSequenceClassification"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForSequenceClassification"),u(Jn,"class","relative group"),u(ph,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(kc,"rel","nofollow"),u(yc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yr,"id","transformers.FlaxBertForMultipleChoice"),u(Yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yr,"href","#transformers.FlaxBertForMultipleChoice"),u(Xn,"class","relative group"),u(hh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ec,"rel","nofollow"),u(zc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(zc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ta,"id","transformers.FlaxBertForTokenClassification"),u(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ta,"href","#transformers.FlaxBertForTokenClassification"),u(Zn,"class","relative group"),u(fh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Oc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Oc,"rel","nofollow"),u(Ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ac,"rel","nofollow"),u(Ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ic,"rel","nofollow"),u(Lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Lc,"rel","nofollow"),u(Dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Dc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sa,"id","transformers.FlaxBertForQuestionAnswering"),u(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sa,"href","#transformers.FlaxBertForQuestionAnswering"),u(ts,"class","relative group"),u(mh,"href","/docs/transformers/pr_17878/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Qc,"rel","nofollow"),u(Vc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vc,"rel","nofollow"),u(Kc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Kc,"rel","nofollow"),u(Jc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Jc,"rel","nofollow"),u(Gc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Gc,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,h,k),e(h,f),e(f,g),w(l,g,null),e(h,m),e(h,M),e(M,be),b(o,X,k),b(o,z,k),e(z,ee),e(ee,L),w(re,L,null),e(z,ke),e(z,D),e(D,ye),b(o,fe,k),b(o,J,k),e(J,O),e(J,ae),e(ae,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,me,k),b(o,le,k),e(le,S),e(S,Te),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,Q),b(o,_e,k),b(o,te,k),e(te,N),e(N,ve),e(te,V),e(te,pe),e(pe,y),b(o,E,k),b(o,K,k),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),b(o,W,k),b(o,$e,k),e($e,Fe),e(Fe,U),w(Ee,U,null),e($e,je),e($e,he),e(he,Ce),b(o,Z_,k),b(o,Ct,k),w(Na,Ct,null),e(Ct,Zy),e(Ct,po),e(po,eT),e(po,hp),e(hp,tT),e(po,oT),e(po,fp),e(fp,nT),e(po,sT),e(po,Oa),e(Oa,rT),e(po,aT),e(Ct,iT),e(Ct,Wo),e(Wo,lT),e(Wo,mp),e(mp,dT),e(Wo,cT),e(Wo,up),e(up,pT),e(Wo,hT),e(Ct,fT),w(ds,Ct,null),b(o,eb,k),b(o,Ho,k),e(Ho,cs),e(cs,Zh),w(Aa,Zh,null),e(Ho,mT),e(Ho,ef),e(ef,uT),b(o,tb,k),b(o,Ne,k),w(Ia,Ne,null),e(Ne,gT),e(Ne,tf),e(tf,_T),e(Ne,bT),e(Ne,La),e(La,kT),e(La,gp),e(gp,yT),e(La,TT),e(Ne,vT),e(Ne,xo),w(Da,xo,null),e(xo,wT),e(xo,of),e(of,$T),e(xo,xT),e(xo,Sa),e(Sa,_p),e(_p,FT),e(_p,nf),e(nf,BT),e(Sa,MT),e(Sa,bp),e(bp,ET),e(bp,sf),e(sf,zT),e(Ne,PT),e(Ne,ps),w(Ua,ps,null),e(ps,qT),e(ps,Wa),e(Wa,jT),e(Wa,rf),e(rf,CT),e(Wa,NT),e(Ne,OT),e(Ne,Ot),w(Ha,Ot,null),e(Ot,AT),e(Ot,af),e(af,IT),e(Ot,LT),w(hs,Ot,null),e(Ot,DT),e(Ot,Ro),e(Ro,ST),e(Ro,lf),e(lf,UT),e(Ro,WT),e(Ro,df),e(df,HT),e(Ro,RT),e(Ne,QT),e(Ne,kp),w(Ra,kp,null),b(o,ob,k),b(o,Qo,k),e(Qo,fs),e(fs,cf),w(Qa,cf,null),e(Qo,VT),e(Qo,pf),e(pf,KT),b(o,nb,k),b(o,rt,k),w(Va,rt,null),e(rt,JT),e(rt,Ka),e(Ka,GT),e(Ka,hf),e(hf,XT),e(Ka,YT),e(rt,ZT),e(rt,Ja),e(Ja,ev),e(Ja,yp),e(yp,tv),e(Ja,ov),e(rt,nv),e(rt,Fo),w(Ga,Fo,null),e(Fo,sv),e(Fo,ff),e(ff,rv),e(Fo,av),e(Fo,Xa),e(Xa,Tp),e(Tp,iv),e(Tp,mf),e(mf,lv),e(Xa,dv),e(Xa,vp),e(vp,cv),e(vp,uf),e(uf,pv),e(rt,hv),e(rt,At),w(Ya,At,null),e(At,fv),e(At,gf),e(gf,mv),e(At,uv),w(ms,At,null),e(At,gv),e(At,Vo),e(Vo,_v),e(Vo,_f),e(_f,bv),e(Vo,kv),e(Vo,bf),e(bf,yv),e(Vo,Tv),b(o,sb,k),b(o,Ko,k),e(Ko,us),e(us,kf),w(Za,kf,null),e(Ko,vv),e(Ko,yf),e(yf,wv),b(o,rb,k),b(o,Jo,k),w(ei,Jo,null),e(Jo,$v),e(Jo,ti),e(ti,xv),e(ti,wp),e(wp,Fv),e(ti,Bv),b(o,ab,k),b(o,Go,k),w(oi,Go,null),e(Go,Mv),e(Go,ni),e(ni,Ev),e(ni,$p),e($p,zv),e(ni,Pv),b(o,ib,k),b(o,ho,k),w(si,ho,null),e(ho,qv),e(ho,ri),e(ri,jv),e(ri,xp),e(xp,Cv),e(ri,Nv),e(ho,Ov),e(ho,gs),w(ai,gs,null),e(gs,Av),e(gs,Tf),e(Tf,Iv),b(o,lb,k),b(o,Xo,k),e(Xo,_s),e(_s,vf),w(ii,vf,null),e(Xo,Lv),e(Xo,wf),e(wf,Dv),b(o,db,k),b(o,Oe,k),w(li,Oe,null),e(Oe,Sv),e(Oe,$f),e($f,Uv),e(Oe,Wv),e(Oe,di),e(di,Hv),e(di,Fp),e(Fp,Rv),e(di,Qv),e(Oe,Vv),e(Oe,ci),e(ci,Kv),e(ci,pi),e(pi,Jv),e(ci,Gv),e(Oe,Xv),e(Oe,hi),e(hi,Yv),e(hi,fi),e(fi,Zv),e(hi,e1),e(Oe,t1),e(Oe,Ke),e(Ke,o1),e(Ke,xf),e(xf,n1),e(Ke,s1),e(Ke,Ff),e(Ff,r1),e(Ke,a1),e(Ke,Bf),e(Bf,i1),e(Ke,l1),e(Ke,Mf),e(Mf,d1),e(Ke,c1),e(Ke,Ef),e(Ef,p1),e(Ke,h1),e(Ke,zf),e(zf,f1),e(Ke,m1),e(Oe,u1),e(Oe,It),w(mi,It,null),e(It,g1),e(It,Yo),e(Yo,_1),e(Yo,Bp),e(Bp,b1),e(Yo,k1),e(Yo,Pf),e(Pf,y1),e(Yo,T1),e(It,v1),w(bs,It,null),e(It,w1),w(ks,It,null),b(o,cb,k),b(o,Zo,k),e(Zo,ys),e(ys,qf),w(ui,qf,null),e(Zo,$1),e(Zo,jf),e(jf,x1),b(o,pb,k),b(o,at,k),w(gi,at,null),e(at,F1),e(at,en),e(en,B1),e(en,Cf),e(Cf,M1),e(en,E1),e(en,Nf),e(Nf,z1),e(en,P1),e(at,q1),e(at,_i),e(_i,j1),e(_i,Mp),e(Mp,C1),e(_i,N1),e(at,O1),e(at,bi),e(bi,A1),e(bi,ki),e(ki,I1),e(bi,L1),e(at,D1),e(at,Lt),w(yi,Lt,null),e(Lt,S1),e(Lt,tn),e(tn,U1),e(tn,Ep),e(Ep,W1),e(tn,H1),e(tn,Of),e(Of,R1),e(tn,Q1),e(Lt,V1),w(Ts,Lt,null),e(Lt,K1),w(vs,Lt,null),b(o,hb,k),b(o,on,k),e(on,ws),e(ws,Af),w(Ti,Af,null),e(on,J1),e(on,If),e(If,G1),b(o,fb,k),b(o,it,k),w(vi,it,null),e(it,X1),e(it,wi),e(wi,Y1),e(wi,Lf),e(Lf,Z1),e(wi,ew),e(it,tw),e(it,$i),e($i,ow),e($i,zp),e(zp,nw),e($i,sw),e(it,rw),e(it,xi),e(xi,aw),e(xi,Fi),e(Fi,iw),e(xi,lw),e(it,dw),e(it,Dt),w(Bi,Dt,null),e(Dt,cw),e(Dt,nn),e(nn,pw),e(nn,Pp),e(Pp,hw),e(nn,fw),e(nn,Df),e(Df,mw),e(nn,uw),e(Dt,gw),w($s,Dt,null),e(Dt,_w),w(xs,Dt,null),b(o,mb,k),b(o,sn,k),e(sn,Fs),e(Fs,Sf),w(Mi,Sf,null),e(sn,bw),e(sn,Uf),e(Uf,kw),b(o,ub,k),b(o,lt,k),w(Ei,lt,null),e(lt,yw),e(lt,zi),e(zi,Tw),e(zi,Wf),e(Wf,vw),e(zi,ww),e(lt,$w),e(lt,Pi),e(Pi,xw),e(Pi,qp),e(qp,Fw),e(Pi,Bw),e(lt,Mw),e(lt,qi),e(qi,Ew),e(qi,ji),e(ji,zw),e(qi,Pw),e(lt,qw),e(lt,mt),w(Ci,mt,null),e(mt,jw),e(mt,rn),e(rn,Cw),e(rn,jp),e(jp,Nw),e(rn,Ow),e(rn,Hf),e(Hf,Aw),e(rn,Iw),e(mt,Lw),w(Bs,mt,null),e(mt,Dw),w(Ms,mt,null),e(mt,Sw),w(Es,mt,null),b(o,gb,k),b(o,an,k),e(an,zs),e(zs,Rf),w(Ni,Rf,null),e(an,Uw),e(an,Qf),e(Qf,Ww),b(o,_b,k),b(o,dt,k),w(Oi,dt,null),e(dt,Hw),e(dt,Ai),e(Ai,Rw),e(Ai,Vf),e(Vf,Qw),e(Ai,Vw),e(dt,Kw),e(dt,Ii),e(Ii,Jw),e(Ii,Cp),e(Cp,Gw),e(Ii,Xw),e(dt,Yw),e(dt,Li),e(Li,Zw),e(Li,Di),e(Di,e$),e(Li,t$),e(dt,o$),e(dt,St),w(Si,St,null),e(St,n$),e(St,ln),e(ln,s$),e(ln,Np),e(Np,r$),e(ln,a$),e(ln,Kf),e(Kf,i$),e(ln,l$),e(St,d$),w(Ps,St,null),e(St,c$),w(qs,St,null),b(o,bb,k),b(o,dn,k),e(dn,js),e(js,Jf),w(Ui,Jf,null),e(dn,p$),e(dn,Gf),e(Gf,h$),b(o,kb,k),b(o,ct,k),w(Wi,ct,null),e(ct,f$),e(ct,Xf),e(Xf,m$),e(ct,u$),e(ct,Hi),e(Hi,g$),e(Hi,Op),e(Op,_$),e(Hi,b$),e(ct,k$),e(ct,Ri),e(Ri,y$),e(Ri,Qi),e(Qi,T$),e(Ri,v$),e(ct,w$),e(ct,Ve),w(Vi,Ve,null),e(Ve,$$),e(Ve,cn),e(cn,x$),e(cn,Ap),e(Ap,F$),e(cn,B$),e(cn,Yf),e(Yf,M$),e(cn,E$),e(Ve,z$),w(Cs,Ve,null),e(Ve,P$),w(Ns,Ve,null),e(Ve,q$),w(Os,Ve,null),e(Ve,j$),w(As,Ve,null),e(Ve,C$),w(Is,Ve,null),b(o,yb,k),b(o,pn,k),e(pn,Ls),e(Ls,Zf),w(Ki,Zf,null),e(pn,N$),e(pn,em),e(em,O$),b(o,Tb,k),b(o,pt,k),w(Ji,pt,null),e(pt,A$),e(pt,tm),e(tm,I$),e(pt,L$),e(pt,Gi),e(Gi,D$),e(Gi,Ip),e(Ip,S$),e(Gi,U$),e(pt,W$),e(pt,Xi),e(Xi,H$),e(Xi,Yi),e(Yi,R$),e(Xi,Q$),e(pt,V$),e(pt,Ut),w(Zi,Ut,null),e(Ut,K$),e(Ut,hn),e(hn,J$),e(hn,Lp),e(Lp,G$),e(hn,X$),e(hn,om),e(om,Y$),e(hn,Z$),e(Ut,e2),w(Ds,Ut,null),e(Ut,t2),w(Ss,Ut,null),b(o,vb,k),b(o,fn,k),e(fn,Us),e(Us,nm),w(el,nm,null),e(fn,o2),e(fn,sm),e(sm,n2),b(o,wb,k),b(o,ht,k),w(tl,ht,null),e(ht,s2),e(ht,rm),e(rm,r2),e(ht,a2),e(ht,ol),e(ol,i2),e(ol,Dp),e(Dp,l2),e(ol,d2),e(ht,c2),e(ht,nl),e(nl,p2),e(nl,sl),e(sl,h2),e(nl,f2),e(ht,m2),e(ht,ut),w(rl,ut,null),e(ut,u2),e(ut,mn),e(mn,g2),e(mn,Sp),e(Sp,_2),e(mn,b2),e(mn,am),e(am,k2),e(mn,y2),e(ut,T2),w(Ws,ut,null),e(ut,v2),w(Hs,ut,null),e(ut,w2),w(Rs,ut,null),b(o,$b,k),b(o,un,k),e(un,Qs),e(Qs,im),w(al,im,null),e(un,$2),e(un,lm),e(lm,x2),b(o,xb,k),b(o,ft,k),w(il,ft,null),e(ft,F2),e(ft,gn),e(gn,B2),e(gn,dm),e(dm,M2),e(gn,E2),e(gn,cm),e(cm,z2),e(gn,P2),e(ft,q2),e(ft,ll),e(ll,j2),e(ll,Up),e(Up,C2),e(ll,N2),e(ft,O2),e(ft,dl),e(dl,A2),e(dl,cl),e(cl,I2),e(dl,L2),e(ft,D2),e(ft,gt),w(pl,gt,null),e(gt,S2),e(gt,_n),e(_n,U2),e(_n,Wp),e(Wp,W2),e(_n,H2),e(_n,pm),e(pm,R2),e(_n,Q2),e(gt,V2),w(Vs,gt,null),e(gt,K2),w(Ks,gt,null),e(gt,J2),w(Js,gt,null),b(o,Fb,k),b(o,bn,k),e(bn,Gs),e(Gs,hm),w(hl,hm,null),e(bn,G2),e(bn,fm),e(fm,X2),b(o,Bb,k),b(o,Je,k),w(fl,Je,null),e(Je,Y2),e(Je,mm),e(mm,Z2),e(Je,ex),e(Je,ml),e(ml,tx),e(ml,Hp),e(Hp,ox),e(ml,nx),e(Je,sx),e(Je,ul),e(ul,rx),e(ul,gl),e(gl,ax),e(ul,ix),e(Je,lx),w(Xs,Je,null),e(Je,dx),e(Je,Wt),w(_l,Wt,null),e(Wt,cx),e(Wt,kn),e(kn,px),e(kn,Rp),e(Rp,hx),e(kn,fx),e(kn,um),e(um,mx),e(kn,ux),e(Wt,gx),w(Ys,Wt,null),e(Wt,_x),w(Zs,Wt,null),b(o,Mb,k),b(o,yn,k),e(yn,er),e(er,gm),w(bl,gm,null),e(yn,bx),e(yn,_m),e(_m,kx),b(o,Eb,k),b(o,Ge,k),w(kl,Ge,null),e(Ge,yx),e(Ge,Tn),e(Tn,Tx),e(Tn,bm),e(bm,vx),e(Tn,wx),e(Tn,km),e(km,$x),e(Tn,xx),e(Ge,Fx),e(Ge,yl),e(yl,Bx),e(yl,Qp),e(Qp,Mx),e(yl,Ex),e(Ge,zx),e(Ge,Tl),e(Tl,Px),e(Tl,vl),e(vl,qx),e(Tl,jx),e(Ge,Cx),w(tr,Ge,null),e(Ge,Nx),e(Ge,Ht),w(wl,Ht,null),e(Ht,Ox),e(Ht,vn),e(vn,Ax),e(vn,Vp),e(Vp,Ix),e(vn,Lx),e(vn,ym),e(ym,Dx),e(vn,Sx),e(Ht,Ux),w(or,Ht,null),e(Ht,Wx),w(nr,Ht,null),b(o,zb,k),b(o,wn,k),e(wn,sr),e(sr,Tm),w($l,Tm,null),e(wn,Hx),e(wn,vm),e(vm,Rx),b(o,Pb,k),b(o,$n,k),w(xl,$n,null),e($n,Qx),e($n,_t),w(Fl,_t,null),e(_t,Vx),e(_t,Ae),e(Ae,Kx),e(Ae,wm),e(wm,Jx),e(Ae,Gx),e(Ae,$m),e($m,Xx),e(Ae,Yx),e(Ae,xm),e(xm,Zx),e(Ae,eF),e(Ae,Fm),e(Fm,tF),e(Ae,oF),e(Ae,Bm),e(Bm,nF),e(Ae,sF),e(Ae,Mm),e(Mm,rF),e(Ae,aF),e(Ae,Em),e(Em,iF),e(Ae,lF),e(_t,dF),e(_t,Bl),e(Bl,Ml),e(Ml,cF),e(Ml,zm),e(zm,pF),e(Ml,hF),e(Bl,fF),e(Bl,El),e(El,mF),e(El,Pm),e(Pm,uF),e(El,gF),e(_t,_F),e(_t,G),e(G,bF),e(G,qm),e(qm,kF),e(G,yF),e(G,jm),e(jm,TF),e(G,vF),e(G,Cm),e(Cm,wF),e(G,$F),e(G,Nm),e(Nm,xF),e(G,FF),e(G,Om),e(Om,BF),e(G,MF),e(G,Am),e(Am,EF),e(G,zF),e(G,Im),e(Im,PF),e(G,qF),e(G,Lm),e(Lm,jF),e(G,CF),e(G,Dm),e(Dm,NF),e(G,OF),e(G,Sm),e(Sm,AF),e(G,IF),e(G,Um),e(Um,LF),e(G,DF),e(G,Wm),e(Wm,SF),e(G,UF),e(G,Hm),e(Hm,WF),e(G,HF),e(G,Rm),e(Rm,RF),e(G,QF),e(G,Qm),e(Qm,VF),e(G,KF),e(G,Vm),e(Vm,JF),e(G,GF),e(G,Km),e(Km,XF),e(G,YF),e(G,Jm),e(Jm,ZF),e(G,e0),e(G,Gm),e(Gm,t0),e(G,o0),e(G,Xm),e(Xm,n0),e(G,s0),e(_t,r0),w(rr,_t,null),b(o,qb,k),b(o,xn,k),e(xn,ar),e(ar,Ym),w(zl,Ym,null),e(xn,a0),e(xn,Zm),e(Zm,i0),b(o,jb,k),b(o,Xe,k),w(Pl,Xe,null),e(Xe,l0),e(Xe,ql),e(ql,d0),e(ql,eu),e(eu,c0),e(ql,p0),e(Xe,h0),e(Xe,jl),e(jl,f0),e(jl,Kp),e(Kp,m0),e(jl,u0),e(Xe,g0),e(Xe,Cl),e(Cl,_0),e(Cl,Nl),e(Nl,b0),e(Cl,k0),e(Xe,y0),w(ir,Xe,null),e(Xe,T0),e(Xe,bt),w(Ol,bt,null),e(bt,v0),e(bt,Fn),e(Fn,w0),e(Fn,Jp),e(Jp,$0),e(Fn,x0),e(Fn,tu),e(tu,F0),e(Fn,B0),e(bt,M0),w(lr,bt,null),e(bt,E0),w(dr,bt,null),e(bt,z0),w(cr,bt,null),b(o,Cb,k),b(o,Bn,k),e(Bn,pr),e(pr,ou),w(Al,ou,null),e(Bn,P0),e(Bn,nu),e(nu,q0),b(o,Nb,k),b(o,Ye,k),w(Il,Ye,null),e(Ye,j0),e(Ye,Ll),e(Ll,C0),e(Ll,su),e(su,N0),e(Ll,O0),e(Ye,A0),e(Ye,Dl),e(Dl,I0),e(Dl,Gp),e(Gp,L0),e(Dl,D0),e(Ye,S0),e(Ye,Sl),e(Sl,U0),e(Sl,Ul),e(Ul,W0),e(Sl,H0),e(Ye,R0),w(hr,Ye,null),e(Ye,Q0),e(Ye,Rt),w(Wl,Rt,null),e(Rt,V0),e(Rt,Mn),e(Mn,K0),e(Mn,Xp),e(Xp,J0),e(Mn,G0),e(Mn,ru),e(ru,X0),e(Mn,Y0),e(Rt,Z0),w(fr,Rt,null),e(Rt,e8),w(mr,Rt,null),b(o,Ob,k),b(o,En,k),e(En,ur),e(ur,au),w(Hl,au,null),e(En,t8),e(En,iu),e(iu,o8),b(o,Ab,k),b(o,Ze,k),w(Rl,Ze,null),e(Ze,n8),e(Ze,lu),e(lu,s8),e(Ze,r8),e(Ze,Ql),e(Ql,a8),e(Ql,Yp),e(Yp,i8),e(Ql,l8),e(Ze,d8),e(Ze,Vl),e(Vl,c8),e(Vl,Kl),e(Kl,p8),e(Vl,h8),e(Ze,f8),w(gr,Ze,null),e(Ze,m8),e(Ze,kt),w(Jl,kt,null),e(kt,u8),e(kt,zn),e(zn,g8),e(zn,Zp),e(Zp,_8),e(zn,b8),e(zn,du),e(du,k8),e(zn,y8),e(kt,T8),w(_r,kt,null),e(kt,v8),w(br,kt,null),e(kt,w8),w(kr,kt,null),b(o,Ib,k),b(o,Pn,k),e(Pn,yr),e(yr,cu),w(Gl,cu,null),e(Pn,$8),e(Pn,pu),e(pu,x8),b(o,Lb,k),b(o,et,k),w(Xl,et,null),e(et,F8),e(et,hu),e(hu,B8),e(et,M8),e(et,Yl),e(Yl,E8),e(Yl,eh),e(eh,z8),e(Yl,P8),e(et,q8),e(et,Zl),e(Zl,j8),e(Zl,ed),e(ed,C8),e(Zl,N8),e(et,O8),w(Tr,et,null),e(et,A8),e(et,Qt),w(td,Qt,null),e(Qt,I8),e(Qt,qn),e(qn,L8),e(qn,th),e(th,D8),e(qn,S8),e(qn,fu),e(fu,U8),e(qn,W8),e(Qt,H8),w(vr,Qt,null),e(Qt,R8),w(wr,Qt,null),b(o,Db,k),b(o,jn,k),e(jn,$r),e($r,mu),w(od,mu,null),e(jn,Q8),e(jn,uu),e(uu,V8),b(o,Sb,k),b(o,tt,k),w(nd,tt,null),e(tt,K8),e(tt,gu),e(gu,J8),e(tt,G8),e(tt,sd),e(sd,X8),e(sd,oh),e(oh,Y8),e(sd,Z8),e(tt,e7),e(tt,rd),e(rd,t7),e(rd,ad),e(ad,o7),e(rd,n7),e(tt,s7),w(xr,tt,null),e(tt,r7),e(tt,yt),w(id,yt,null),e(yt,a7),e(yt,Cn),e(Cn,i7),e(Cn,nh),e(nh,l7),e(Cn,d7),e(Cn,_u),e(_u,c7),e(Cn,p7),e(yt,h7),w(Fr,yt,null),e(yt,f7),w(Br,yt,null),e(yt,m7),w(Mr,yt,null),b(o,Ub,k),b(o,Nn,k),e(Nn,Er),e(Er,bu),w(ld,bu,null),e(Nn,u7),e(Nn,ku),e(ku,g7),b(o,Wb,k),b(o,ot,k),w(dd,ot,null),e(ot,_7),e(ot,On),e(On,b7),e(On,yu),e(yu,k7),e(On,y7),e(On,Tu),e(Tu,T7),e(On,v7),e(ot,w7),e(ot,cd),e(cd,$7),e(cd,sh),e(sh,x7),e(cd,F7),e(ot,B7),e(ot,pd),e(pd,M7),e(pd,hd),e(hd,E7),e(pd,z7),e(ot,P7),w(zr,ot,null),e(ot,q7),e(ot,Tt),w(fd,Tt,null),e(Tt,j7),e(Tt,An),e(An,C7),e(An,rh),e(rh,N7),e(An,O7),e(An,vu),e(vu,A7),e(An,I7),e(Tt,L7),w(Pr,Tt,null),e(Tt,D7),w(qr,Tt,null),e(Tt,S7),w(jr,Tt,null),b(o,Hb,k),b(o,In,k),e(In,Cr),e(Cr,wu),w(md,wu,null),e(In,U7),e(In,$u),e($u,W7),b(o,Rb,k),b(o,Ie,k),w(ud,Ie,null),e(Ie,H7),e(Ie,xu),e(xu,R7),e(Ie,Q7),e(Ie,gd),e(gd,V7),e(gd,ah),e(ah,K7),e(gd,J7),e(Ie,G7),e(Ie,_d),e(_d,X7),e(_d,bd),e(bd,Y7),e(_d,Z7),e(Ie,eB),e(Ie,Fu),e(Fu,tB),e(Ie,oB),e(Ie,fo),e(fo,Bu),e(Bu,kd),e(kd,nB),e(fo,sB),e(fo,Mu),e(Mu,yd),e(yd,rB),e(fo,aB),e(fo,Eu),e(Eu,Td),e(Td,iB),e(fo,lB),e(fo,zu),e(zu,vd),e(vd,dB),e(Ie,cB),e(Ie,Vt),w(wd,Vt,null),e(Vt,pB),e(Vt,Ln),e(Ln,hB),e(Ln,Pu),e(Pu,fB),e(Ln,mB),e(Ln,qu),e(qu,uB),e(Ln,gB),e(Vt,_B),w(Nr,Vt,null),e(Vt,bB),w(Or,Vt,null),b(o,Qb,k),b(o,Dn,k),e(Dn,Ar),e(Ar,ju),w($d,ju,null),e(Dn,kB),e(Dn,Cu),e(Cu,yB),b(o,Vb,k),b(o,Le,k),w(xd,Le,null),e(Le,TB),e(Le,Sn),e(Sn,vB),e(Sn,Nu),e(Nu,wB),e(Sn,$B),e(Sn,Ou),e(Ou,xB),e(Sn,FB),e(Le,BB),e(Le,Fd),e(Fd,MB),e(Fd,ih),e(ih,EB),e(Fd,zB),e(Le,PB),e(Le,Bd),e(Bd,qB),e(Bd,Md),e(Md,jB),e(Bd,CB),e(Le,NB),e(Le,Au),e(Au,OB),e(Le,AB),e(Le,mo),e(mo,Iu),e(Iu,Ed),e(Ed,IB),e(mo,LB),e(mo,Lu),e(Lu,zd),e(zd,DB),e(mo,SB),e(mo,Du),e(Du,Pd),e(Pd,UB),e(mo,WB),e(mo,Su),e(Su,qd),e(qd,HB),e(Le,RB),e(Le,Kt),w(jd,Kt,null),e(Kt,QB),e(Kt,Un),e(Un,VB),e(Un,Uu),e(Uu,KB),e(Un,JB),e(Un,Wu),e(Wu,GB),e(Un,XB),e(Kt,YB),w(Ir,Kt,null),e(Kt,ZB),w(Lr,Kt,null),b(o,Kb,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Hu),w(Cd,Hu,null),e(Wn,eM),e(Wn,Ru),e(Ru,tM),b(o,Jb,k),b(o,De,k),w(Nd,De,null),e(De,oM),e(De,Qu),e(Qu,nM),e(De,sM),e(De,Od),e(Od,rM),e(Od,lh),e(lh,aM),e(Od,iM),e(De,lM),e(De,Ad),e(Ad,dM),e(Ad,Id),e(Id,cM),e(Ad,pM),e(De,hM),e(De,Vu),e(Vu,fM),e(De,mM),e(De,uo),e(uo,Ku),e(Ku,Ld),e(Ld,uM),e(uo,gM),e(uo,Ju),e(Ju,Dd),e(Dd,_M),e(uo,bM),e(uo,Gu),e(Gu,Sd),e(Sd,kM),e(uo,yM),e(uo,Xu),e(Xu,Ud),e(Ud,TM),e(De,vM),e(De,Jt),w(Wd,Jt,null),e(Jt,wM),e(Jt,Hn),e(Hn,$M),e(Hn,Yu),e(Yu,xM),e(Hn,FM),e(Hn,Zu),e(Zu,BM),e(Hn,MM),e(Jt,EM),w(Sr,Jt,null),e(Jt,zM),w(Ur,Jt,null),b(o,Gb,k),b(o,Rn,k),e(Rn,Wr),e(Wr,eg),w(Hd,eg,null),e(Rn,PM),e(Rn,tg),e(tg,qM),b(o,Xb,k),b(o,Se,k),w(Rd,Se,null),e(Se,jM),e(Se,Qd),e(Qd,CM),e(Qd,og),e(og,NM),e(Qd,OM),e(Se,AM),e(Se,Vd),e(Vd,IM),e(Vd,dh),e(dh,LM),e(Vd,DM),e(Se,SM),e(Se,Kd),e(Kd,UM),e(Kd,Jd),e(Jd,WM),e(Kd,HM),e(Se,RM),e(Se,ng),e(ng,QM),e(Se,VM),e(Se,go),e(go,sg),e(sg,Gd),e(Gd,KM),e(go,JM),e(go,rg),e(rg,Xd),e(Xd,GM),e(go,XM),e(go,ag),e(ag,Yd),e(Yd,YM),e(go,ZM),e(go,ig),e(ig,Zd),e(Zd,eE),e(Se,tE),e(Se,Gt),w(ec,Gt,null),e(Gt,oE),e(Gt,Qn),e(Qn,nE),e(Qn,lg),e(lg,sE),e(Qn,rE),e(Qn,dg),e(dg,aE),e(Qn,iE),e(Gt,lE),w(Hr,Gt,null),e(Gt,dE),w(Rr,Gt,null),b(o,Yb,k),b(o,Vn,k),e(Vn,Qr),e(Qr,cg),w(tc,cg,null),e(Vn,cE),e(Vn,pg),e(pg,pE),b(o,Zb,k),b(o,Ue,k),w(oc,Ue,null),e(Ue,hE),e(Ue,nc),e(nc,fE),e(nc,hg),e(hg,mE),e(nc,uE),e(Ue,gE),e(Ue,sc),e(sc,_E),e(sc,ch),e(ch,bE),e(sc,kE),e(Ue,yE),e(Ue,rc),e(rc,TE),e(rc,ac),e(ac,vE),e(rc,wE),e(Ue,$E),e(Ue,fg),e(fg,xE),e(Ue,FE),e(Ue,_o),e(_o,mg),e(mg,ic),e(ic,BE),e(_o,ME),e(_o,ug),e(ug,lc),e(lc,EE),e(_o,zE),e(_o,gg),e(gg,dc),e(dc,PE),e(_o,qE),e(_o,_g),e(_g,cc),e(cc,jE),e(Ue,CE),e(Ue,Xt),w(pc,Xt,null),e(Xt,NE),e(Xt,Kn),e(Kn,OE),e(Kn,bg),e(bg,AE),e(Kn,IE),e(Kn,kg),e(kg,LE),e(Kn,DE),e(Xt,SE),w(Vr,Xt,null),e(Xt,UE),w(Kr,Xt,null),b(o,ek,k),b(o,Jn,k),e(Jn,Jr),e(Jr,yg),w(hc,yg,null),e(Jn,WE),e(Jn,Tg),e(Tg,HE),b(o,tk,k),b(o,We,k),w(fc,We,null),e(We,RE),e(We,vg),e(vg,QE),e(We,VE),e(We,mc),e(mc,KE),e(mc,ph),e(ph,JE),e(mc,GE),e(We,XE),e(We,uc),e(uc,YE),e(uc,gc),e(gc,ZE),e(uc,ez),e(We,tz),e(We,wg),e(wg,oz),e(We,nz),e(We,bo),e(bo,$g),e($g,_c),e(_c,sz),e(bo,rz),e(bo,xg),e(xg,bc),e(bc,az),e(bo,iz),e(bo,Fg),e(Fg,kc),e(kc,lz),e(bo,dz),e(bo,Bg),e(Bg,yc),e(yc,cz),e(We,pz),e(We,Yt),w(Tc,Yt,null),e(Yt,hz),e(Yt,Gn),e(Gn,fz),e(Gn,Mg),e(Mg,mz),e(Gn,uz),e(Gn,Eg),e(Eg,gz),e(Gn,_z),e(Yt,bz),w(Gr,Yt,null),e(Yt,kz),w(Xr,Yt,null),b(o,ok,k),b(o,Xn,k),e(Xn,Yr),e(Yr,zg),w(vc,zg,null),e(Xn,yz),e(Xn,Pg),e(Pg,Tz),b(o,nk,k),b(o,He,k),w(wc,He,null),e(He,vz),e(He,qg),e(qg,wz),e(He,$z),e(He,$c),e($c,xz),e($c,hh),e(hh,Fz),e($c,Bz),e(He,Mz),e(He,xc),e(xc,Ez),e(xc,Fc),e(Fc,zz),e(xc,Pz),e(He,qz),e(He,jg),e(jg,jz),e(He,Cz),e(He,ko),e(ko,Cg),e(Cg,Bc),e(Bc,Nz),e(ko,Oz),e(ko,Ng),e(Ng,Mc),e(Mc,Az),e(ko,Iz),e(ko,Og),e(Og,Ec),e(Ec,Lz),e(ko,Dz),e(ko,Ag),e(Ag,zc),e(zc,Sz),e(He,Uz),e(He,Zt),w(Pc,Zt,null),e(Zt,Wz),e(Zt,Yn),e(Yn,Hz),e(Yn,Ig),e(Ig,Rz),e(Yn,Qz),e(Yn,Lg),e(Lg,Vz),e(Yn,Kz),e(Zt,Jz),w(Zr,Zt,null),e(Zt,Gz),w(ea,Zt,null),b(o,sk,k),b(o,Zn,k),e(Zn,ta),e(ta,Dg),w(qc,Dg,null),e(Zn,Xz),e(Zn,Sg),e(Sg,Yz),b(o,rk,k),b(o,Re,k),w(jc,Re,null),e(Re,Zz),e(Re,Ug),e(Ug,e4),e(Re,t4),e(Re,Cc),e(Cc,o4),e(Cc,fh),e(fh,n4),e(Cc,s4),e(Re,r4),e(Re,Nc),e(Nc,a4),e(Nc,Oc),e(Oc,i4),e(Nc,l4),e(Re,d4),e(Re,Wg),e(Wg,c4),e(Re,p4),e(Re,yo),e(yo,Hg),e(Hg,Ac),e(Ac,h4),e(yo,f4),e(yo,Rg),e(Rg,Ic),e(Ic,m4),e(yo,u4),e(yo,Qg),e(Qg,Lc),e(Lc,g4),e(yo,_4),e(yo,Vg),e(Vg,Dc),e(Dc,b4),e(Re,k4),e(Re,eo),w(Sc,eo,null),e(eo,y4),e(eo,es),e(es,T4),e(es,Kg),e(Kg,v4),e(es,w4),e(es,Jg),e(Jg,$4),e(es,x4),e(eo,F4),w(oa,eo,null),e(eo,B4),w(na,eo,null),b(o,ak,k),b(o,ts,k),e(ts,sa),e(sa,Gg),w(Uc,Gg,null),e(ts,M4),e(ts,Xg),e(Xg,E4),b(o,ik,k),b(o,Qe,k),w(Wc,Qe,null),e(Qe,z4),e(Qe,os),e(os,P4),e(os,Yg),e(Yg,q4),e(os,j4),e(os,Zg),e(Zg,C4),e(os,N4),e(Qe,O4),e(Qe,Hc),e(Hc,A4),e(Hc,mh),e(mh,I4),e(Hc,L4),e(Qe,D4),e(Qe,Rc),e(Rc,S4),e(Rc,Qc),e(Qc,U4),e(Rc,W4),e(Qe,H4),e(Qe,e_),e(e_,R4),e(Qe,Q4),e(Qe,To),e(To,t_),e(t_,Vc),e(Vc,V4),e(To,K4),e(To,o_),e(o_,Kc),e(Kc,J4),e(To,G4),e(To,n_),e(n_,Jc),e(Jc,X4),e(To,Y4),e(To,s_),e(s_,Gc),e(Gc,Z4),e(Qe,eP),e(Qe,to),w(Xc,to,null),e(to,tP),e(to,ns),e(ns,oP),e(ns,r_),e(r_,nP),e(ns,sP),e(ns,a_),e(a_,rP),e(ns,aP),e(to,iP),w(ra,to,null),e(to,lP),w(aa,to,null),lk=!0},p(o,[k]){const Yc={};k&2&&(Yc.$$scope={dirty:k,ctx:o}),ds.$set(Yc);const i_={};k&2&&(i_.$$scope={dirty:k,ctx:o}),hs.$set(i_);const l_={};k&2&&(l_.$$scope={dirty:k,ctx:o}),ms.$set(l_);const d_={};k&2&&(d_.$$scope={dirty:k,ctx:o}),bs.$set(d_);const Zc={};k&2&&(Zc.$$scope={dirty:k,ctx:o}),ks.$set(Zc);const c_={};k&2&&(c_.$$scope={dirty:k,ctx:o}),Ts.$set(c_);const p_={};k&2&&(p_.$$scope={dirty:k,ctx:o}),vs.$set(p_);const h_={};k&2&&(h_.$$scope={dirty:k,ctx:o}),$s.$set(h_);const ep={};k&2&&(ep.$$scope={dirty:k,ctx:o}),xs.$set(ep);const f_={};k&2&&(f_.$$scope={dirty:k,ctx:o}),Bs.$set(f_);const m_={};k&2&&(m_.$$scope={dirty:k,ctx:o}),Ms.$set(m_);const u_={};k&2&&(u_.$$scope={dirty:k,ctx:o}),Es.$set(u_);const g_={};k&2&&(g_.$$scope={dirty:k,ctx:o}),Ps.$set(g_);const __={};k&2&&(__.$$scope={dirty:k,ctx:o}),qs.$set(__);const b_={};k&2&&(b_.$$scope={dirty:k,ctx:o}),Cs.$set(b_);const k_={};k&2&&(k_.$$scope={dirty:k,ctx:o}),Ns.$set(k_);const tp={};k&2&&(tp.$$scope={dirty:k,ctx:o}),Os.$set(tp);const y_={};k&2&&(y_.$$scope={dirty:k,ctx:o}),As.$set(y_);const T_={};k&2&&(T_.$$scope={dirty:k,ctx:o}),Is.$set(T_);const ss={};k&2&&(ss.$$scope={dirty:k,ctx:o}),Ds.$set(ss);const v_={};k&2&&(v_.$$scope={dirty:k,ctx:o}),Ss.$set(v_);const w_={};k&2&&(w_.$$scope={dirty:k,ctx:o}),Ws.$set(w_);const op={};k&2&&(op.$$scope={dirty:k,ctx:o}),Hs.$set(op);const $_={};k&2&&($_.$$scope={dirty:k,ctx:o}),Rs.$set($_);const x_={};k&2&&(x_.$$scope={dirty:k,ctx:o}),Vs.$set(x_);const F_={};k&2&&(F_.$$scope={dirty:k,ctx:o}),Ks.$set(F_);const vo={};k&2&&(vo.$$scope={dirty:k,ctx:o}),Js.$set(vo);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),Xs.$set(wo);const B_={};k&2&&(B_.$$scope={dirty:k,ctx:o}),Ys.$set(B_);const M_={};k&2&&(M_.$$scope={dirty:k,ctx:o}),Zs.$set(M_);const E_={};k&2&&(E_.$$scope={dirty:k,ctx:o}),tr.$set(E_);const rs={};k&2&&(rs.$$scope={dirty:k,ctx:o}),or.$set(rs);const z_={};k&2&&(z_.$$scope={dirty:k,ctx:o}),nr.$set(z_);const P_={};k&2&&(P_.$$scope={dirty:k,ctx:o}),rr.$set(P_);const np={};k&2&&(np.$$scope={dirty:k,ctx:o}),ir.$set(np);const q_={};k&2&&(q_.$$scope={dirty:k,ctx:o}),lr.$set(q_);const j_={};k&2&&(j_.$$scope={dirty:k,ctx:o}),dr.$set(j_);const C_={};k&2&&(C_.$$scope={dirty:k,ctx:o}),cr.$set(C_);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:o}),hr.$set(nt);const N_={};k&2&&(N_.$$scope={dirty:k,ctx:o}),fr.$set(N_);const sp={};k&2&&(sp.$$scope={dirty:k,ctx:o}),mr.$set(sp);const O_={};k&2&&(O_.$$scope={dirty:k,ctx:o}),gr.$set(O_);const as={};k&2&&(as.$$scope={dirty:k,ctx:o}),_r.$set(as);const A_={};k&2&&(A_.$$scope={dirty:k,ctx:o}),br.$set(A_);const rp={};k&2&&(rp.$$scope={dirty:k,ctx:o}),kr.$set(rp);const uh={};k&2&&(uh.$$scope={dirty:k,ctx:o}),Tr.$set(uh);const I_={};k&2&&(I_.$$scope={dirty:k,ctx:o}),vr.$set(I_);const gh={};k&2&&(gh.$$scope={dirty:k,ctx:o}),wr.$set(gh);const L_={};k&2&&(L_.$$scope={dirty:k,ctx:o}),xr.$set(L_);const ap={};k&2&&(ap.$$scope={dirty:k,ctx:o}),Fr.$set(ap);const ip={};k&2&&(ip.$$scope={dirty:k,ctx:o}),Br.$set(ip);const D_={};k&2&&(D_.$$scope={dirty:k,ctx:o}),Mr.$set(D_);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),zr.$set($o);const S_={};k&2&&(S_.$$scope={dirty:k,ctx:o}),Pr.$set(S_);const is={};k&2&&(is.$$scope={dirty:k,ctx:o}),qr.$set(is);const U_={};k&2&&(U_.$$scope={dirty:k,ctx:o}),jr.$set(U_);const W_={};k&2&&(W_.$$scope={dirty:k,ctx:o}),Nr.$set(W_);const H_={};k&2&&(H_.$$scope={dirty:k,ctx:o}),Or.$set(H_);const lp={};k&2&&(lp.$$scope={dirty:k,ctx:o}),Ir.$set(lp);const R_={};k&2&&(R_.$$scope={dirty:k,ctx:o}),Lr.$set(R_);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:o}),Sr.$set(Q_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:o}),Ur.$set(V_);const Nt={};k&2&&(Nt.$$scope={dirty:k,ctx:o}),Hr.$set(Nt);const dp={};k&2&&(dp.$$scope={dirty:k,ctx:o}),Rr.$set(dp);const K_={};k&2&&(K_.$$scope={dirty:k,ctx:o}),Vr.$set(K_);const cp={};k&2&&(cp.$$scope={dirty:k,ctx:o}),Kr.$set(cp);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:o}),Gr.$set(J_);const ls={};k&2&&(ls.$$scope={dirty:k,ctx:o}),Xr.$set(ls);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:o}),Zr.$set(G_);const pp={};k&2&&(pp.$$scope={dirty:k,ctx:o}),ea.$set(pp);const _h={};k&2&&(_h.$$scope={dirty:k,ctx:o}),oa.$set(_h);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:o}),na.$set(X_);const bh={};k&2&&(bh.$$scope={dirty:k,ctx:o}),ra.$set(bh);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:o}),aa.$set(Y_)},i(o){lk||($(l.$$.fragment,o),$(re.$$.fragment,o),$(Ee.$$.fragment,o),$(Na.$$.fragment,o),$(ds.$$.fragment,o),$(Aa.$$.fragment,o),$(Ia.$$.fragment,o),$(Da.$$.fragment,o),$(Ua.$$.fragment,o),$(Ha.$$.fragment,o),$(hs.$$.fragment,o),$(Ra.$$.fragment,o),$(Qa.$$.fragment,o),$(Va.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(ms.$$.fragment,o),$(Za.$$.fragment,o),$(ei.$$.fragment,o),$(oi.$$.fragment,o),$(si.$$.fragment,o),$(ai.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$(mi.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(yi.$$.fragment,o),$(Ts.$$.fragment,o),$(vs.$$.fragment,o),$(Ti.$$.fragment,o),$(vi.$$.fragment,o),$(Bi.$$.fragment,o),$($s.$$.fragment,o),$(xs.$$.fragment,o),$(Mi.$$.fragment,o),$(Ei.$$.fragment,o),$(Ci.$$.fragment,o),$(Bs.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Ni.$$.fragment,o),$(Oi.$$.fragment,o),$(Si.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ui.$$.fragment,o),$(Wi.$$.fragment,o),$(Vi.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ki.$$.fragment,o),$(Ji.$$.fragment,o),$(Zi.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(el.$$.fragment,o),$(tl.$$.fragment,o),$(rl.$$.fragment,o),$(Ws.$$.fragment,o),$(Hs.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(il.$$.fragment,o),$(pl.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(fl.$$.fragment,o),$(Xs.$$.fragment,o),$(_l.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(bl.$$.fragment,o),$(kl.$$.fragment,o),$(tr.$$.fragment,o),$(wl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$($l.$$.fragment,o),$(xl.$$.fragment,o),$(Fl.$$.fragment,o),$(rr.$$.fragment,o),$(zl.$$.fragment,o),$(Pl.$$.fragment,o),$(ir.$$.fragment,o),$(Ol.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Al.$$.fragment,o),$(Il.$$.fragment,o),$(hr.$$.fragment,o),$(Wl.$$.fragment,o),$(fr.$$.fragment,o),$(mr.$$.fragment,o),$(Hl.$$.fragment,o),$(Rl.$$.fragment,o),$(gr.$$.fragment,o),$(Jl.$$.fragment,o),$(_r.$$.fragment,o),$(br.$$.fragment,o),$(kr.$$.fragment,o),$(Gl.$$.fragment,o),$(Xl.$$.fragment,o),$(Tr.$$.fragment,o),$(td.$$.fragment,o),$(vr.$$.fragment,o),$(wr.$$.fragment,o),$(od.$$.fragment,o),$(nd.$$.fragment,o),$(xr.$$.fragment,o),$(id.$$.fragment,o),$(Fr.$$.fragment,o),$(Br.$$.fragment,o),$(Mr.$$.fragment,o),$(ld.$$.fragment,o),$(dd.$$.fragment,o),$(zr.$$.fragment,o),$(fd.$$.fragment,o),$(Pr.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(md.$$.fragment,o),$(ud.$$.fragment,o),$(wd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$($d.$$.fragment,o),$(xd.$$.fragment,o),$(jd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Wd.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(Hd.$$.fragment,o),$(Rd.$$.fragment,o),$(ec.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(pc.$$.fragment,o),$(Vr.$$.fragment,o),$(Kr.$$.fragment,o),$(hc.$$.fragment,o),$(fc.$$.fragment,o),$(Tc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(vc.$$.fragment,o),$(wc.$$.fragment,o),$(Pc.$$.fragment,o),$(Zr.$$.fragment,o),$(ea.$$.fragment,o),$(qc.$$.fragment,o),$(jc.$$.fragment,o),$(Sc.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(Uc.$$.fragment,o),$(Wc.$$.fragment,o),$(Xc.$$.fragment,o),$(ra.$$.fragment,o),$(aa.$$.fragment,o),lk=!0)},o(o){x(l.$$.fragment,o),x(re.$$.fragment,o),x(Ee.$$.fragment,o),x(Na.$$.fragment,o),x(ds.$$.fragment,o),x(Aa.$$.fragment,o),x(Ia.$$.fragment,o),x(Da.$$.fragment,o),x(Ua.$$.fragment,o),x(Ha.$$.fragment,o),x(hs.$$.fragment,o),x(Ra.$$.fragment,o),x(Qa.$$.fragment,o),x(Va.$$.fragment,o),x(Ga.$$.fragment,o),x(Ya.$$.fragment,o),x(ms.$$.fragment,o),x(Za.$$.fragment,o),x(ei.$$.fragment,o),x(oi.$$.fragment,o),x(si.$$.fragment,o),x(ai.$$.fragment,o),x(ii.$$.fragment,o),x(li.$$.fragment,o),x(mi.$$.fragment,o),x(bs.$$.fragment,o),x(ks.$$.fragment,o),x(ui.$$.fragment,o),x(gi.$$.fragment,o),x(yi.$$.fragment,o),x(Ts.$$.fragment,o),x(vs.$$.fragment,o),x(Ti.$$.fragment,o),x(vi.$$.fragment,o),x(Bi.$$.fragment,o),x($s.$$.fragment,o),x(xs.$$.fragment,o),x(Mi.$$.fragment,o),x(Ei.$$.fragment,o),x(Ci.$$.fragment,o),x(Bs.$$.fragment,o),x(Ms.$$.fragment,o),x(Es.$$.fragment,o),x(Ni.$$.fragment,o),x(Oi.$$.fragment,o),x(Si.$$.fragment,o),x(Ps.$$.fragment,o),x(qs.$$.fragment,o),x(Ui.$$.fragment,o),x(Wi.$$.fragment,o),x(Vi.$$.fragment,o),x(Cs.$$.fragment,o),x(Ns.$$.fragment,o),x(Os.$$.fragment,o),x(As.$$.fragment,o),x(Is.$$.fragment,o),x(Ki.$$.fragment,o),x(Ji.$$.fragment,o),x(Zi.$$.fragment,o),x(Ds.$$.fragment,o),x(Ss.$$.fragment,o),x(el.$$.fragment,o),x(tl.$$.fragment,o),x(rl.$$.fragment,o),x(Ws.$$.fragment,o),x(Hs.$$.fragment,o),x(Rs.$$.fragment,o),x(al.$$.fragment,o),x(il.$$.fragment,o),x(pl.$$.fragment,o),x(Vs.$$.fragment,o),x(Ks.$$.fragment,o),x(Js.$$.fragment,o),x(hl.$$.fragment,o),x(fl.$$.fragment,o),x(Xs.$$.fragment,o),x(_l.$$.fragment,o),x(Ys.$$.fragment,o),x(Zs.$$.fragment,o),x(bl.$$.fragment,o),x(kl.$$.fragment,o),x(tr.$$.fragment,o),x(wl.$$.fragment,o),x(or.$$.fragment,o),x(nr.$$.fragment,o),x($l.$$.fragment,o),x(xl.$$.fragment,o),x(Fl.$$.fragment,o),x(rr.$$.fragment,o),x(zl.$$.fragment,o),x(Pl.$$.fragment,o),x(ir.$$.fragment,o),x(Ol.$$.fragment,o),x(lr.$$.fragment,o),x(dr.$$.fragment,o),x(cr.$$.fragment,o),x(Al.$$.fragment,o),x(Il.$$.fragment,o),x(hr.$$.fragment,o),x(Wl.$$.fragment,o),x(fr.$$.fragment,o),x(mr.$$.fragment,o),x(Hl.$$.fragment,o),x(Rl.$$.fragment,o),x(gr.$$.fragment,o),x(Jl.$$.fragment,o),x(_r.$$.fragment,o),x(br.$$.fragment,o),x(kr.$$.fragment,o),x(Gl.$$.fragment,o),x(Xl.$$.fragment,o),x(Tr.$$.fragment,o),x(td.$$.fragment,o),x(vr.$$.fragment,o),x(wr.$$.fragment,o),x(od.$$.fragment,o),x(nd.$$.fragment,o),x(xr.$$.fragment,o),x(id.$$.fragment,o),x(Fr.$$.fragment,o),x(Br.$$.fragment,o),x(Mr.$$.fragment,o),x(ld.$$.fragment,o),x(dd.$$.fragment,o),x(zr.$$.fragment,o),x(fd.$$.fragment,o),x(Pr.$$.fragment,o),x(qr.$$.fragment,o),x(jr.$$.fragment,o),x(md.$$.fragment,o),x(ud.$$.fragment,o),x(wd.$$.fragment,o),x(Nr.$$.fragment,o),x(Or.$$.fragment,o),x($d.$$.fragment,o),x(xd.$$.fragment,o),x(jd.$$.fragment,o),x(Ir.$$.fragment,o),x(Lr.$$.fragment,o),x(Cd.$$.fragment,o),x(Nd.$$.fragment,o),x(Wd.$$.fragment,o),x(Sr.$$.fragment,o),x(Ur.$$.fragment,o),x(Hd.$$.fragment,o),x(Rd.$$.fragment,o),x(ec.$$.fragment,o),x(Hr.$$.fragment,o),x(Rr.$$.fragment,o),x(tc.$$.fragment,o),x(oc.$$.fragment,o),x(pc.$$.fragment,o),x(Vr.$$.fragment,o),x(Kr.$$.fragment,o),x(hc.$$.fragment,o),x(fc.$$.fragment,o),x(Tc.$$.fragment,o),x(Gr.$$.fragment,o),x(Xr.$$.fragment,o),x(vc.$$.fragment,o),x(wc.$$.fragment,o),x(Pc.$$.fragment,o),x(Zr.$$.fragment,o),x(ea.$$.fragment,o),x(qc.$$.fragment,o),x(jc.$$.fragment,o),x(Sc.$$.fragment,o),x(oa.$$.fragment,o),x(na.$$.fragment,o),x(Uc.$$.fragment,o),x(Wc.$$.fragment,o),x(Xc.$$.fragment,o),x(ra.$$.fragment,o),x(aa.$$.fragment,o),lk=!1},d(o){t(d),o&&t(_),o&&t(h),F(l),o&&t(X),o&&t(z),F(re),o&&t(fe),o&&t(J),o&&t(j),o&&t(ie),o&&t(me),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t($e),F(Ee),o&&t(Z_),o&&t(Ct),F(Na),F(ds),o&&t(eb),o&&t(Ho),F(Aa),o&&t(tb),o&&t(Ne),F(Ia),F(Da),F(Ua),F(Ha),F(hs),F(Ra),o&&t(ob),o&&t(Qo),F(Qa),o&&t(nb),o&&t(rt),F(Va),F(Ga),F(Ya),F(ms),o&&t(sb),o&&t(Ko),F(Za),o&&t(rb),o&&t(Jo),F(ei),o&&t(ab),o&&t(Go),F(oi),o&&t(ib),o&&t(ho),F(si),F(ai),o&&t(lb),o&&t(Xo),F(ii),o&&t(db),o&&t(Oe),F(li),F(mi),F(bs),F(ks),o&&t(cb),o&&t(Zo),F(ui),o&&t(pb),o&&t(at),F(gi),F(yi),F(Ts),F(vs),o&&t(hb),o&&t(on),F(Ti),o&&t(fb),o&&t(it),F(vi),F(Bi),F($s),F(xs),o&&t(mb),o&&t(sn),F(Mi),o&&t(ub),o&&t(lt),F(Ei),F(Ci),F(Bs),F(Ms),F(Es),o&&t(gb),o&&t(an),F(Ni),o&&t(_b),o&&t(dt),F(Oi),F(Si),F(Ps),F(qs),o&&t(bb),o&&t(dn),F(Ui),o&&t(kb),o&&t(ct),F(Wi),F(Vi),F(Cs),F(Ns),F(Os),F(As),F(Is),o&&t(yb),o&&t(pn),F(Ki),o&&t(Tb),o&&t(pt),F(Ji),F(Zi),F(Ds),F(Ss),o&&t(vb),o&&t(fn),F(el),o&&t(wb),o&&t(ht),F(tl),F(rl),F(Ws),F(Hs),F(Rs),o&&t($b),o&&t(un),F(al),o&&t(xb),o&&t(ft),F(il),F(pl),F(Vs),F(Ks),F(Js),o&&t(Fb),o&&t(bn),F(hl),o&&t(Bb),o&&t(Je),F(fl),F(Xs),F(_l),F(Ys),F(Zs),o&&t(Mb),o&&t(yn),F(bl),o&&t(Eb),o&&t(Ge),F(kl),F(tr),F(wl),F(or),F(nr),o&&t(zb),o&&t(wn),F($l),o&&t(Pb),o&&t($n),F(xl),F(Fl),F(rr),o&&t(qb),o&&t(xn),F(zl),o&&t(jb),o&&t(Xe),F(Pl),F(ir),F(Ol),F(lr),F(dr),F(cr),o&&t(Cb),o&&t(Bn),F(Al),o&&t(Nb),o&&t(Ye),F(Il),F(hr),F(Wl),F(fr),F(mr),o&&t(Ob),o&&t(En),F(Hl),o&&t(Ab),o&&t(Ze),F(Rl),F(gr),F(Jl),F(_r),F(br),F(kr),o&&t(Ib),o&&t(Pn),F(Gl),o&&t(Lb),o&&t(et),F(Xl),F(Tr),F(td),F(vr),F(wr),o&&t(Db),o&&t(jn),F(od),o&&t(Sb),o&&t(tt),F(nd),F(xr),F(id),F(Fr),F(Br),F(Mr),o&&t(Ub),o&&t(Nn),F(ld),o&&t(Wb),o&&t(ot),F(dd),F(zr),F(fd),F(Pr),F(qr),F(jr),o&&t(Hb),o&&t(In),F(md),o&&t(Rb),o&&t(Ie),F(ud),F(wd),F(Nr),F(Or),o&&t(Qb),o&&t(Dn),F($d),o&&t(Vb),o&&t(Le),F(xd),F(jd),F(Ir),F(Lr),o&&t(Kb),o&&t(Wn),F(Cd),o&&t(Jb),o&&t(De),F(Nd),F(Wd),F(Sr),F(Ur),o&&t(Gb),o&&t(Rn),F(Hd),o&&t(Xb),o&&t(Se),F(Rd),F(ec),F(Hr),F(Rr),o&&t(Yb),o&&t(Vn),F(tc),o&&t(Zb),o&&t(Ue),F(oc),F(pc),F(Vr),F(Kr),o&&t(ek),o&&t(Jn),F(hc),o&&t(tk),o&&t(We),F(fc),F(Tc),F(Gr),F(Xr),o&&t(ok),o&&t(Xn),F(vc),o&&t(nk),o&&t(He),F(wc),F(Pc),F(Zr),F(ea),o&&t(sk),o&&t(Zn),F(qc),o&&t(rk),o&&t(Re),F(jc),F(Sc),F(oa),F(na),o&&t(ak),o&&t(ts),F(Uc),o&&t(ik),o&&t(Qe),F(Wc),F(Xc),F(ra),F(aa)}}}const tO={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function oO(B){return j5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dO extends E5{constructor(d){super();z5(this,d,oO,eO,P5,{})}}export{dO as default,tO as metadata};
