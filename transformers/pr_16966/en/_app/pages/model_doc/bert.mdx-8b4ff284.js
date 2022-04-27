import{S as X9,i as Y9,s as Z9,e as r,k as c,w as T,t as n,M as e5,c as a,d as t,m as p,a as i,x as v,h as s,b as u,F as e,g as b,y as w,q as $,o as F,B as x,v as t5,L as re}from"../../chunks/vendor-6b77c823.js";import{T as $e}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function o5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function n5(B){let d,_,h,m,g;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function s5(B){let d,_,h,m,g;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function r5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function a5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function i5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function l5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function d5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function c5(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function p5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function h5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function m5(B){let d,_;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function f5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function u5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function g5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function _5(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function b5(B){let d,_;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function k5(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function y5(B){let d,_;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function T5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function v5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function w5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function $5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function F5(B){let d,_;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function x5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function B5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function M5(B){let d,_;return d=new ae({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function E5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function z5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function P5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function q5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function j5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function C5(B){let d,_,h,m,g;return m=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function N5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function O5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function A5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function I5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function L5(B){let d,_;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function D5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function S5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function U5(B){let d,_,h,m,g;return m=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function W5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function H5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function R5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function V5(B){let d,_;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function Q5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function K5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function J5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function G5(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function X5(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function Y5(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function Z5(B){let d,_;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function eN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function tN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function oN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function nN(B){let d,_;return d=new ae({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function sN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function rN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function aN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function iN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function lN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function dN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function cN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function pN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function hN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function mN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function fN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function uN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function gN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function _N(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function bN(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function kN(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function yN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe,y,E,K,ze,Be,A,Pe,Me,qe,I,W,we,Fe,U,Ee,je,he,Ce,b_,qt,$a,my,io,fy,Rc,uy,gy,Vc,_y,by,Fa,ky,yy,Ty,Lo,vy,Qc,wy,$y,Kc,Fy,xy,By,ns,k_,Do,ss,Eh,xa,My,zh,Ey,y_,Ne,Ba,zy,Ph,Py,qy,Ma,jy,Jc,Cy,Ny,Oy,To,Ea,Ay,qh,Iy,Ly,za,Gc,Dy,jh,Sy,Uy,Xc,Wy,Ch,Hy,Ry,rs,Pa,Vy,qa,Qy,Nh,Ky,Jy,Gy,Ct,ja,Xy,Oh,Yy,Zy,as,eT,So,tT,Ah,oT,nT,Ih,sT,rT,aT,Yc,Ca,T_,Uo,is,Lh,Na,iT,Dh,lT,v_,st,Oa,dT,Aa,cT,Sh,pT,hT,mT,Ia,fT,Zc,uT,gT,_T,vo,La,bT,Uh,kT,yT,Da,ep,TT,Wh,vT,wT,tp,$T,Hh,FT,xT,Nt,Sa,BT,Rh,MT,ET,ls,zT,Wo,PT,Vh,qT,jT,Qh,CT,NT,w_,Ho,ds,Kh,Ua,OT,Jh,AT,$_,Ro,Wa,IT,Ha,LT,op,DT,ST,F_,Vo,Ra,UT,Va,WT,np,HT,RT,x_,lo,Qa,VT,Ka,QT,sp,KT,JT,GT,cs,Ja,XT,Gh,YT,B_,Qo,ps,Xh,Ga,ZT,Yh,ev,M_,Oe,Xa,tv,Zh,ov,nv,Ya,sv,rp,rv,av,iv,Za,lv,ei,dv,cv,pv,ti,hv,oi,mv,fv,uv,Qe,gv,em,_v,bv,tm,kv,yv,om,Tv,vv,nm,wv,$v,sm,Fv,xv,rm,Bv,Mv,Ev,Ot,ni,zv,Ko,Pv,ap,qv,jv,am,Cv,Nv,Ov,hs,Av,ms,E_,Jo,fs,im,si,Iv,lm,Lv,z_,rt,ri,Dv,Go,Sv,dm,Uv,Wv,cm,Hv,Rv,Vv,ai,Qv,ip,Kv,Jv,Gv,ii,Xv,li,Yv,Zv,e1,At,di,t1,Xo,o1,lp,n1,s1,pm,r1,a1,i1,us,l1,gs,P_,Yo,_s,hm,ci,d1,mm,c1,q_,at,pi,p1,hi,h1,fm,m1,f1,u1,mi,g1,dp,_1,b1,k1,fi,y1,ui,T1,v1,w1,It,gi,$1,Zo,F1,cp,x1,B1,um,M1,E1,z1,bs,P1,ks,j_,en,ys,gm,_i,q1,_m,j1,C_,it,bi,C1,ki,N1,bm,O1,A1,I1,yi,L1,pp,D1,S1,U1,Ti,W1,vi,H1,R1,V1,mt,wi,Q1,tn,K1,hp,J1,G1,km,X1,Y1,Z1,Ts,ew,vs,tw,ws,N_,on,$s,ym,$i,ow,Tm,nw,O_,lt,Fi,sw,xi,rw,vm,aw,iw,lw,Bi,dw,mp,cw,pw,hw,Mi,mw,Ei,fw,uw,gw,Lt,zi,_w,nn,bw,fp,kw,yw,wm,Tw,vw,ww,Fs,$w,xs,A_,sn,Bs,$m,Pi,Fw,Fm,xw,I_,dt,qi,Bw,xm,Mw,Ew,ji,zw,up,Pw,qw,jw,Ci,Cw,Ni,Nw,Ow,Aw,Ve,Oi,Iw,rn,Lw,gp,Dw,Sw,Bm,Uw,Ww,Hw,Ms,Rw,Es,Vw,zs,Qw,Ps,Kw,qs,L_,an,js,Mm,Ai,Jw,Em,Gw,D_,ct,Ii,Xw,zm,Yw,Zw,Li,e$,_p,t$,o$,n$,Di,s$,Si,r$,a$,i$,Dt,Ui,l$,ln,d$,bp,c$,p$,Pm,h$,m$,f$,Cs,u$,Ns,S_,dn,Os,qm,Wi,g$,jm,_$,U_,pt,Hi,b$,Cm,k$,y$,Ri,T$,kp,v$,w$,$$,Vi,F$,Qi,x$,B$,M$,ft,Ki,E$,cn,z$,yp,P$,q$,Nm,j$,C$,N$,As,O$,Is,A$,Ls,W_,pn,Ds,Om,Ji,I$,Am,L$,H_,ht,Gi,D$,hn,S$,Im,U$,W$,Lm,H$,R$,V$,Xi,Q$,Tp,K$,J$,G$,Yi,X$,Zi,Y$,Z$,e2,ut,el,t2,mn,o2,vp,n2,s2,Dm,r2,a2,i2,Ss,l2,Us,d2,Ws,R_,fn,Hs,Sm,tl,c2,Um,p2,V_,Ke,ol,h2,Wm,m2,f2,nl,u2,wp,g2,_2,b2,sl,k2,rl,y2,T2,v2,Rs,w2,St,al,$2,un,F2,$p,x2,B2,Hm,M2,E2,z2,Vs,P2,Qs,Q_,gn,Ks,Rm,il,q2,Vm,j2,K_,Je,ll,C2,_n,N2,Qm,O2,A2,Km,I2,L2,D2,dl,S2,Fp,U2,W2,H2,cl,R2,pl,V2,Q2,K2,Js,J2,Ut,hl,G2,bn,X2,xp,Y2,Z2,Jm,e6,t6,o6,Gs,n6,Xs,J_,kn,Ys,Gm,ml,s6,Xm,r6,G_,yn,fl,a6,gt,ul,i6,Ae,l6,Ym,d6,c6,Zm,p6,h6,ef,m6,f6,tf,u6,g6,of,_6,b6,nf,k6,y6,sf,T6,v6,w6,gl,_l,$6,rf,F6,x6,B6,bl,M6,af,E6,z6,P6,G,q6,lf,j6,C6,df,N6,O6,cf,A6,I6,pf,L6,D6,hf,S6,U6,mf,W6,H6,ff,R6,V6,uf,Q6,K6,gf,J6,G6,_f,X6,Y6,bf,Z6,eF,kf,tF,oF,yf,nF,sF,Tf,rF,aF,vf,iF,lF,wf,dF,cF,$f,pF,hF,Ff,mF,fF,xf,uF,gF,Bf,_F,bF,kF,Zs,X_,Tn,er,Mf,kl,yF,Ef,TF,Y_,Ge,yl,vF,Tl,wF,zf,$F,FF,xF,vl,BF,Bp,MF,EF,zF,wl,PF,$l,qF,jF,CF,tr,NF,_t,Fl,OF,vn,AF,Mp,IF,LF,Pf,DF,SF,UF,or,WF,nr,HF,sr,Z_,wn,rr,qf,xl,RF,jf,VF,eb,Xe,Bl,QF,Ml,KF,Cf,JF,GF,XF,El,YF,Ep,ZF,ex,tx,zl,ox,Pl,nx,sx,rx,ar,ax,Wt,ql,ix,$n,lx,zp,dx,cx,Nf,px,hx,mx,ir,fx,lr,tb,Fn,dr,Of,jl,ux,Af,gx,ob,Ye,Cl,_x,If,bx,kx,Nl,yx,Pp,Tx,vx,wx,Ol,$x,Al,Fx,xx,Bx,cr,Mx,bt,Il,Ex,xn,zx,qp,Px,qx,Lf,jx,Cx,Nx,pr,Ox,hr,Ax,mr,nb,Bn,fr,Df,Ll,Ix,Sf,Lx,sb,Ze,Dl,Dx,Uf,Sx,Ux,Sl,Wx,jp,Hx,Rx,Vx,Ul,Qx,Wl,Kx,Jx,Gx,ur,Xx,Ht,Hl,Yx,Mn,Zx,Cp,e0,t0,Wf,o0,n0,s0,gr,r0,_r,rb,En,br,Hf,Rl,a0,Rf,i0,ab,et,Vl,l0,Vf,d0,c0,Ql,p0,Np,h0,m0,f0,Kl,u0,Jl,g0,_0,b0,kr,k0,kt,Gl,y0,zn,T0,Op,v0,w0,Qf,$0,F0,x0,yr,B0,Tr,M0,vr,ib,Pn,wr,Kf,Xl,E0,Jf,z0,lb,tt,Yl,P0,qn,q0,Gf,j0,C0,Xf,N0,O0,A0,Zl,I0,Ap,L0,D0,S0,ed,U0,td,W0,H0,R0,$r,V0,yt,od,Q0,jn,K0,Ip,J0,G0,Yf,X0,Y0,Z0,Fr,eB,xr,tB,Br,db,Cn,Mr,Zf,nd,oB,eu,nB,cb,Ie,sd,sB,tu,rB,aB,rd,iB,Lp,lB,dB,cB,ad,pB,id,hB,mB,fB,ou,uB,gB,co,nu,ld,_B,bB,su,dd,kB,yB,ru,cd,TB,vB,au,pd,wB,$B,Rt,hd,FB,Nn,xB,iu,BB,MB,lu,EB,zB,PB,Er,qB,zr,pb,On,Pr,du,md,jB,cu,CB,hb,Le,fd,NB,An,OB,pu,AB,IB,hu,LB,DB,SB,ud,UB,Dp,WB,HB,RB,gd,VB,_d,QB,KB,JB,mu,GB,XB,po,fu,bd,YB,ZB,uu,kd,eM,tM,gu,yd,oM,nM,_u,Td,sM,rM,Vt,vd,aM,In,iM,bu,lM,dM,ku,cM,pM,hM,qr,mM,jr,mb,Ln,Cr,yu,wd,fM,Tu,uM,fb,De,$d,gM,Fd,_M,vu,bM,kM,yM,xd,TM,Sp,vM,wM,$M,Bd,FM,Md,xM,BM,MM,wu,EM,zM,ho,$u,Ed,PM,qM,Fu,zd,jM,CM,xu,Pd,NM,OM,Bu,qd,AM,IM,Qt,jd,LM,Dn,DM,Mu,SM,UM,Eu,WM,HM,RM,Nr,VM,Or,ub,Sn,Ar,zu,Cd,QM,Pu,KM,gb,Se,Nd,JM,Od,GM,qu,XM,YM,ZM,Ad,eE,Up,tE,oE,nE,Id,sE,Ld,rE,aE,iE,ju,lE,dE,mo,Cu,Dd,cE,pE,Nu,Sd,hE,mE,Ou,Ud,fE,uE,Au,Wd,gE,_E,Kt,Hd,bE,Un,kE,Iu,yE,TE,Lu,vE,wE,$E,Ir,FE,Lr,_b,Wn,Dr,Du,Rd,xE,Su,BE,bb,Ue,Vd,ME,Uu,EE,zE,Qd,PE,Wp,qE,jE,CE,Kd,NE,Jd,OE,AE,IE,Wu,LE,DE,fo,Hu,Gd,SE,UE,Ru,Xd,WE,HE,Vu,Yd,RE,VE,Qu,Zd,QE,KE,Jt,ec,JE,Hn,GE,Ku,XE,YE,Ju,ZE,ez,tz,Sr,oz,Ur,kb,Rn,Wr,Gu,tc,nz,Xu,sz,yb,We,oc,rz,Yu,az,iz,nc,lz,Hp,dz,cz,pz,sc,hz,rc,mz,fz,uz,Zu,gz,_z,uo,eg,ac,bz,kz,tg,ic,yz,Tz,og,lc,vz,wz,ng,dc,$z,Fz,Gt,cc,xz,Vn,Bz,sg,Mz,Ez,rg,zz,Pz,qz,Hr,jz,Rr,Tb,Qn,Vr,ag,pc,Cz,ig,Nz,vb,He,hc,Oz,lg,Az,Iz,mc,Lz,Rp,Dz,Sz,Uz,fc,Wz,uc,Hz,Rz,Vz,dg,Qz,Kz,go,cg,gc,Jz,Gz,pg,_c,Xz,Yz,hg,bc,Zz,e4,mg,kc,t4,o4,Xt,yc,n4,Kn,s4,fg,r4,a4,ug,i4,l4,d4,Qr,c4,Kr,wb,Jn,Jr,gg,Tc,p4,_g,h4,$b,Re,vc,m4,Gn,f4,bg,u4,g4,kg,_4,b4,k4,wc,y4,Vp,T4,v4,w4,$c,$4,Fc,F4,x4,B4,yg,M4,E4,_o,Tg,xc,z4,P4,vg,Bc,q4,j4,wg,Mc,C4,N4,$g,Ec,O4,A4,Yt,zc,I4,Xn,L4,Fg,D4,S4,xg,U4,W4,H4,Gr,R4,Xr,Fb;return l=new xe({}),oe=new xe({}),Ee=new xe({}),$a=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/configuration_bert.py#L54"}}),ns=new se({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[o5]},$$scope:{ctx:B}}}),xa=new xe({}),Ba=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert.py#L117"}}),Ea=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new se({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[n5]},$$scope:{ctx:B}}}),Ca=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert.py#L330"}}),Na=new xe({}),Oa=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert_fast.py#L117"}}),La=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert_fast.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sa=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/tokenization_bert_fast.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new se({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[s5]},$$scope:{ctx:B}}}),Ua=new xe({}),Wa=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L761"}}),Ra=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),Qa=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L58"}}),Ja=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/flax/struct.py#L120"}}),Ga=new xe({}),Xa=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L864"}}),ni=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L903",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new $e({props:{$$slots:{default:[r5]},$$scope:{ctx:B}}}),ms=new se({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[a5]},$$scope:{ctx:B}}}),si=new xe({}),ri=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1047"}}),di=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new $e({props:{$$slots:{default:[i5]},$$scope:{ctx:B}}}),gs=new se({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[l5]},$$scope:{ctx:B}}}),ci=new xe({}),pi=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1151"}}),gi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1174",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new $e({props:{$$slots:{default:[d5]},$$scope:{ctx:B}}}),ks=new se({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[c5]},$$scope:{ctx:B}}}),_i=new xe({}),bi=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1286"}}),wi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ts=new $e({props:{$$slots:{default:[p5]},$$scope:{ctx:B}}}),vs=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[h5]},$$scope:{ctx:B}}}),ws=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[m5]},$$scope:{ctx:B}}}),$i=new xe({}),Fi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1399"}}),zi=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1409",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fs=new $e({props:{$$slots:{default:[f5]},$$scope:{ctx:B}}}),xs=new se({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[u5]},$$scope:{ctx:B}}}),Pi=new xe({}),qi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1503"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1519",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new $e({props:{$$slots:{default:[g5]},$$scope:{ctx:B}}}),Es=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[_5]},$$scope:{ctx:B}}}),zs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[b5]},$$scope:{ctx:B}}}),Ps=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[k5]},$$scope:{ctx:B}}}),qs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[y5]},$$scope:{ctx:B}}}),Ai=new xe({}),Ii=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1607"}}),Ui=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1621",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new $e({props:{$$slots:{default:[T5]},$$scope:{ctx:B}}}),Ns=new se({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[v5]},$$scope:{ctx:B}}}),Wi=new xe({}),Hi=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1702"}}),Ki=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1720",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new $e({props:{$$slots:{default:[w5]},$$scope:{ctx:B}}}),Is=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[$5]},$$scope:{ctx:B}}}),Ls=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[F5]},$$scope:{ctx:B}}}),Ji=new xe({}),Gi=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1789"}}),el=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_bert.py#L1803",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new $e({props:{$$slots:{default:[x5]},$$scope:{ctx:B}}}),Us=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[B5]},$$scope:{ctx:B}}}),Ws=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[M5]},$$scope:{ctx:B}}}),tl=new xe({}),ol=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),Rs=new $e({props:{$$slots:{default:[E5]},$$scope:{ctx:B}}}),al=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vs=new $e({props:{$$slots:{default:[z5]},$$scope:{ctx:B}}}),Qs=new se({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[P5]},$$scope:{ctx:B}}}),il=new xe({}),ll=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),Js=new $e({props:{$$slots:{default:[q5]},$$scope:{ctx:B}}}),hl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gs=new $e({props:{$$slots:{default:[j5]},$$scope:{ctx:B}}}),Xs=new se({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[C5]},$$scope:{ctx:B}}}),ml=new xe({}),fl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zs=new se({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[N5]},$$scope:{ctx:B}}}),kl=new xe({}),yl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),tr=new $e({props:{$$slots:{default:[O5]},$$scope:{ctx:B}}}),Fl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new $e({props:{$$slots:{default:[A5]},$$scope:{ctx:B}}}),nr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[I5]},$$scope:{ctx:B}}}),sr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[L5]},$$scope:{ctx:B}}}),xl=new xe({}),Bl=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),ar=new $e({props:{$$slots:{default:[D5]},$$scope:{ctx:B}}}),ql=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new $e({props:{$$slots:{default:[S5]},$$scope:{ctx:B}}}),lr=new se({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[U5]},$$scope:{ctx:B}}}),jl=new xe({}),Cl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),cr=new $e({props:{$$slots:{default:[W5]},$$scope:{ctx:B}}}),Il=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new $e({props:{$$slots:{default:[H5]},$$scope:{ctx:B}}}),hr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[R5]},$$scope:{ctx:B}}}),mr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[V5]},$$scope:{ctx:B}}}),Ll=new xe({}),Dl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),ur=new $e({props:{$$slots:{default:[Q5]},$$scope:{ctx:B}}}),Hl=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new $e({props:{$$slots:{default:[K5]},$$scope:{ctx:B}}}),_r=new se({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[J5]},$$scope:{ctx:B}}}),Rl=new xe({}),Vl=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),kr=new $e({props:{$$slots:{default:[G5]},$$scope:{ctx:B}}}),Gl=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yr=new $e({props:{$$slots:{default:[X5]},$$scope:{ctx:B}}}),Tr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[Y5]},$$scope:{ctx:B}}}),vr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[Z5]},$$scope:{ctx:B}}}),Xl=new xe({}),Yl=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),$r=new $e({props:{$$slots:{default:[eN]},$$scope:{ctx:B}}}),od=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new $e({props:{$$slots:{default:[tN]},$$scope:{ctx:B}}}),xr=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),Br=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[nN]},$$scope:{ctx:B}}}),nd=new xe({}),sd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L773"}}),hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new $e({props:{$$slots:{default:[sN]},$$scope:{ctx:B}}}),zr=new se({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[rN]},$$scope:{ctx:B}}}),md=new xe({}),fd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L846"}}),vd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qr=new $e({props:{$$slots:{default:[aN]},$$scope:{ctx:B}}}),jr=new se({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[iN]},$$scope:{ctx:B}}}),wd=new xe({}),$d=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L931"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new $e({props:{$$slots:{default:[lN]},$$scope:{ctx:B}}}),Or=new se({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[dN]},$$scope:{ctx:B}}}),Cd=new xe({}),Nd=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L992"}}),Hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new $e({props:{$$slots:{default:[cN]},$$scope:{ctx:B}}}),Lr=new se({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[pN]},$$scope:{ctx:B}}}),Rd=new xe({}),Vd=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L1090"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $e({props:{$$slots:{default:[hN]},$$scope:{ctx:B}}}),Ur=new se({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[mN]},$$scope:{ctx:B}}}),tc=new xe({}),oc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L1166"}}),cc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new $e({props:{$$slots:{default:[fN]},$$scope:{ctx:B}}}),Rr=new se({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[uN]},$$scope:{ctx:B}}}),pc=new xe({}),hc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L1238"}}),yc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new $e({props:{$$slots:{default:[gN]},$$scope:{ctx:B}}}),Kr=new se({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[_N]},$$scope:{ctx:B}}}),Tc=new xe({}),vc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L1305"}}),zc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16966/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16966/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16966/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16966/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new $e({props:{$$slots:{default:[bN]},$$scope:{ctx:B}}}),Xr=new se({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[kN]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),h=r("h1"),m=r("a"),g=r("span"),T(l.$$.fragment),f=c(),M=r("span"),be=n("BERT"),X=c(),z=r("h2"),ee=r("a"),L=r("span"),T(oe.$$.fragment),ke=c(),D=r("span"),ye=n("Overview"),me=c(),J=r("p"),O=n("The BERT model was proposed in "),ne=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),fe=c(),le=r("p"),S=r("em"),Te=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),V=n("Tips:"),_e=c(),te=r("ul"),N=r("li"),ve=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Q=c(),pe=r("li"),y=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),A=n("thomwolf"),Pe=n(". The original code can be found "),Me=r("a"),qe=n("here"),I=n("."),W=c(),we=r("h2"),Fe=r("a"),U=r("span"),T(Ee.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),b_=c(),qt=r("div"),T($a.$$.fragment),my=c(),io=r("p"),fy=n("This is the configuration class to store the configuration of a "),Rc=r("a"),uy=n("BertModel"),gy=n(" or a "),Vc=r("a"),_y=n("TFBertModel"),by=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Fa=r("a"),ky=n("bert-base-uncased"),yy=n(" architecture."),Ty=c(),Lo=r("p"),vy=n("Configuration objects inherit from "),Qc=r("a"),wy=n("PretrainedConfig"),$y=n(` and can be used to control the model outputs. Read the
documentation from `),Kc=r("a"),Fy=n("PretrainedConfig"),xy=n(" for more information."),By=c(),T(ns.$$.fragment),k_=c(),Do=r("h2"),ss=r("a"),Eh=r("span"),T(xa.$$.fragment),My=c(),zh=r("span"),Ey=n("BertTokenizer"),y_=c(),Ne=r("div"),T(Ba.$$.fragment),zy=c(),Ph=r("p"),Py=n("Construct a BERT tokenizer. Based on WordPiece."),qy=c(),Ma=r("p"),jy=n("This tokenizer inherits from "),Jc=r("a"),Cy=n("PreTrainedTokenizer"),Ny=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Oy=c(),To=r("div"),T(Ea.$$.fragment),Ay=c(),qh=r("p"),Iy=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ly=c(),za=r("ul"),Gc=r("li"),Dy=n("single sequence: "),jh=r("code"),Sy=n("[CLS] X [SEP]"),Uy=c(),Xc=r("li"),Wy=n("pair of sequences: "),Ch=r("code"),Hy=n("[CLS] A [SEP] B [SEP]"),Ry=c(),rs=r("div"),T(Pa.$$.fragment),Vy=c(),qa=r("p"),Qy=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=r("code"),Ky=n("prepare_for_model"),Jy=n(" method."),Gy=c(),Ct=r("div"),T(ja.$$.fragment),Xy=c(),Oh=r("p"),Yy=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Zy=c(),T(as.$$.fragment),eT=c(),So=r("p"),tT=n("If "),Ah=r("code"),oT=n("token_ids_1"),nT=n(" is "),Ih=r("code"),sT=n("None"),rT=n(", this method only returns the first portion of the mask (0s)."),aT=c(),Yc=r("div"),T(Ca.$$.fragment),T_=c(),Uo=r("h2"),is=r("a"),Lh=r("span"),T(Na.$$.fragment),iT=c(),Dh=r("span"),lT=n("BertTokenizerFast"),v_=c(),st=r("div"),T(Oa.$$.fragment),dT=c(),Aa=r("p"),cT=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=r("em"),pT=n("tokenizers"),hT=n(" library). Based on WordPiece."),mT=c(),Ia=r("p"),fT=n("This tokenizer inherits from "),Zc=r("a"),uT=n("PreTrainedTokenizerFast"),gT=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),_T=c(),vo=r("div"),T(La.$$.fragment),bT=c(),Uh=r("p"),kT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),yT=c(),Da=r("ul"),ep=r("li"),TT=n("single sequence: "),Wh=r("code"),vT=n("[CLS] X [SEP]"),wT=c(),tp=r("li"),$T=n("pair of sequences: "),Hh=r("code"),FT=n("[CLS] A [SEP] B [SEP]"),xT=c(),Nt=r("div"),T(Sa.$$.fragment),BT=c(),Rh=r("p"),MT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ET=c(),T(ls.$$.fragment),zT=c(),Wo=r("p"),PT=n("If "),Vh=r("code"),qT=n("token_ids_1"),jT=n(" is "),Qh=r("code"),CT=n("None"),NT=n(", this method only returns the first portion of the mask (0s)."),w_=c(),Ho=r("h2"),ds=r("a"),Kh=r("span"),T(Ua.$$.fragment),OT=c(),Jh=r("span"),AT=n("Bert specific outputs"),$_=c(),Ro=r("div"),T(Wa.$$.fragment),IT=c(),Ha=r("p"),LT=n("Output type of "),op=r("a"),DT=n("BertForPreTraining"),ST=n("."),F_=c(),Vo=r("div"),T(Ra.$$.fragment),UT=c(),Va=r("p"),WT=n("Output type of "),np=r("a"),HT=n("TFBertForPreTraining"),RT=n("."),x_=c(),lo=r("div"),T(Qa.$$.fragment),VT=c(),Ka=r("p"),QT=n("Output type of "),sp=r("a"),KT=n("BertForPreTraining"),JT=n("."),GT=c(),cs=r("div"),T(Ja.$$.fragment),XT=c(),Gh=r("p"),YT=n("\u201CReturns a new object replacing the specified fields with new values."),B_=c(),Qo=r("h2"),ps=r("a"),Xh=r("span"),T(Ga.$$.fragment),ZT=c(),Yh=r("span"),ev=n("BertModel"),M_=c(),Oe=r("div"),T(Xa.$$.fragment),tv=c(),Zh=r("p"),ov=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),nv=c(),Ya=r("p"),sv=n("This model inherits from "),rp=r("a"),rv=n("PreTrainedModel"),av=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iv=c(),Za=r("p"),lv=n("This model is also a PyTorch "),ei=r("a"),dv=n("torch.nn.Module"),cv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pv=c(),ti=r("p"),hv=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=r("a"),mv=n(`Attention is
all you need`),fv=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),uv=c(),Qe=r("p"),gv=n("To behave as an decoder the model needs to be initialized with the "),em=r("code"),_v=n("is_decoder"),bv=n(` argument of the configuration set
to `),tm=r("code"),kv=n("True"),yv=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),om=r("code"),Tv=n("is_decoder"),vv=n(` argument and
`),nm=r("code"),wv=n("add_cross_attention"),$v=n(" set to "),sm=r("code"),Fv=n("True"),xv=n("; an "),rm=r("code"),Bv=n("encoder_hidden_states"),Mv=n(" is then expected as an input to the forward pass."),Ev=c(),Ot=r("div"),T(ni.$$.fragment),zv=c(),Ko=r("p"),Pv=n("The "),ap=r("a"),qv=n("BertModel"),jv=n(" forward method, overrides the "),am=r("code"),Cv=n("__call__"),Nv=n(" special method."),Ov=c(),T(hs.$$.fragment),Av=c(),T(ms.$$.fragment),E_=c(),Jo=r("h2"),fs=r("a"),im=r("span"),T(si.$$.fragment),Iv=c(),lm=r("span"),Lv=n("BertForPreTraining"),z_=c(),rt=r("div"),T(ri.$$.fragment),Dv=c(),Go=r("p"),Sv=n("Bert Model with two heads on top as done during the pretraining: a "),dm=r("code"),Uv=n("masked language modeling"),Wv=n(" head and a "),cm=r("code"),Hv=n("next sentence prediction (classification)"),Rv=n(" head."),Vv=c(),ai=r("p"),Qv=n("This model inherits from "),ip=r("a"),Kv=n("PreTrainedModel"),Jv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gv=c(),ii=r("p"),Xv=n("This model is also a PyTorch "),li=r("a"),Yv=n("torch.nn.Module"),Zv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),e1=c(),At=r("div"),T(di.$$.fragment),t1=c(),Xo=r("p"),o1=n("The "),lp=r("a"),n1=n("BertForPreTraining"),s1=n(" forward method, overrides the "),pm=r("code"),r1=n("__call__"),a1=n(" special method."),i1=c(),T(us.$$.fragment),l1=c(),T(gs.$$.fragment),P_=c(),Yo=r("h2"),_s=r("a"),hm=r("span"),T(ci.$$.fragment),d1=c(),mm=r("span"),c1=n("BertLMHeadModel"),q_=c(),at=r("div"),T(pi.$$.fragment),p1=c(),hi=r("p"),h1=n("Bert Model with a "),fm=r("code"),m1=n("language modeling"),f1=n(" head on top for CLM fine-tuning."),u1=c(),mi=r("p"),g1=n("This model inherits from "),dp=r("a"),_1=n("PreTrainedModel"),b1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k1=c(),fi=r("p"),y1=n("This model is also a PyTorch "),ui=r("a"),T1=n("torch.nn.Module"),v1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w1=c(),It=r("div"),T(gi.$$.fragment),$1=c(),Zo=r("p"),F1=n("The "),cp=r("a"),x1=n("BertLMHeadModel"),B1=n(" forward method, overrides the "),um=r("code"),M1=n("__call__"),E1=n(" special method."),z1=c(),T(bs.$$.fragment),P1=c(),T(ks.$$.fragment),j_=c(),en=r("h2"),ys=r("a"),gm=r("span"),T(_i.$$.fragment),q1=c(),_m=r("span"),j1=n("BertForMaskedLM"),C_=c(),it=r("div"),T(bi.$$.fragment),C1=c(),ki=r("p"),N1=n("Bert Model with a "),bm=r("code"),O1=n("language modeling"),A1=n(" head on top."),I1=c(),yi=r("p"),L1=n("This model inherits from "),pp=r("a"),D1=n("PreTrainedModel"),S1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U1=c(),Ti=r("p"),W1=n("This model is also a PyTorch "),vi=r("a"),H1=n("torch.nn.Module"),R1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),V1=c(),mt=r("div"),T(wi.$$.fragment),Q1=c(),tn=r("p"),K1=n("The "),hp=r("a"),J1=n("BertForMaskedLM"),G1=n(" forward method, overrides the "),km=r("code"),X1=n("__call__"),Y1=n(" special method."),Z1=c(),T(Ts.$$.fragment),ew=c(),T(vs.$$.fragment),tw=c(),T(ws.$$.fragment),N_=c(),on=r("h2"),$s=r("a"),ym=r("span"),T($i.$$.fragment),ow=c(),Tm=r("span"),nw=n("BertForNextSentencePrediction"),O_=c(),lt=r("div"),T(Fi.$$.fragment),sw=c(),xi=r("p"),rw=n("Bert Model with a "),vm=r("code"),aw=n("next sentence prediction (classification)"),iw=n(" head on top."),lw=c(),Bi=r("p"),dw=n("This model inherits from "),mp=r("a"),cw=n("PreTrainedModel"),pw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hw=c(),Mi=r("p"),mw=n("This model is also a PyTorch "),Ei=r("a"),fw=n("torch.nn.Module"),uw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gw=c(),Lt=r("div"),T(zi.$$.fragment),_w=c(),nn=r("p"),bw=n("The "),fp=r("a"),kw=n("BertForNextSentencePrediction"),yw=n(" forward method, overrides the "),wm=r("code"),Tw=n("__call__"),vw=n(" special method."),ww=c(),T(Fs.$$.fragment),$w=c(),T(xs.$$.fragment),A_=c(),sn=r("h2"),Bs=r("a"),$m=r("span"),T(Pi.$$.fragment),Fw=c(),Fm=r("span"),xw=n("BertForSequenceClassification"),I_=c(),dt=r("div"),T(qi.$$.fragment),Bw=c(),xm=r("p"),Mw=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ew=c(),ji=r("p"),zw=n("This model inherits from "),up=r("a"),Pw=n("PreTrainedModel"),qw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jw=c(),Ci=r("p"),Cw=n("This model is also a PyTorch "),Ni=r("a"),Nw=n("torch.nn.Module"),Ow=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Aw=c(),Ve=r("div"),T(Oi.$$.fragment),Iw=c(),rn=r("p"),Lw=n("The "),gp=r("a"),Dw=n("BertForSequenceClassification"),Sw=n(" forward method, overrides the "),Bm=r("code"),Uw=n("__call__"),Ww=n(" special method."),Hw=c(),T(Ms.$$.fragment),Rw=c(),T(Es.$$.fragment),Vw=c(),T(zs.$$.fragment),Qw=c(),T(Ps.$$.fragment),Kw=c(),T(qs.$$.fragment),L_=c(),an=r("h2"),js=r("a"),Mm=r("span"),T(Ai.$$.fragment),Jw=c(),Em=r("span"),Gw=n("BertForMultipleChoice"),D_=c(),ct=r("div"),T(Ii.$$.fragment),Xw=c(),zm=r("p"),Yw=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zw=c(),Li=r("p"),e$=n("This model inherits from "),_p=r("a"),t$=n("PreTrainedModel"),o$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n$=c(),Di=r("p"),s$=n("This model is also a PyTorch "),Si=r("a"),r$=n("torch.nn.Module"),a$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),i$=c(),Dt=r("div"),T(Ui.$$.fragment),l$=c(),ln=r("p"),d$=n("The "),bp=r("a"),c$=n("BertForMultipleChoice"),p$=n(" forward method, overrides the "),Pm=r("code"),h$=n("__call__"),m$=n(" special method."),f$=c(),T(Cs.$$.fragment),u$=c(),T(Ns.$$.fragment),S_=c(),dn=r("h2"),Os=r("a"),qm=r("span"),T(Wi.$$.fragment),g$=c(),jm=r("span"),_$=n("BertForTokenClassification"),U_=c(),pt=r("div"),T(Hi.$$.fragment),b$=c(),Cm=r("p"),k$=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),y$=c(),Ri=r("p"),T$=n("This model inherits from "),kp=r("a"),v$=n("PreTrainedModel"),w$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$$=c(),Vi=r("p"),F$=n("This model is also a PyTorch "),Qi=r("a"),x$=n("torch.nn.Module"),B$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),M$=c(),ft=r("div"),T(Ki.$$.fragment),E$=c(),cn=r("p"),z$=n("The "),yp=r("a"),P$=n("BertForTokenClassification"),q$=n(" forward method, overrides the "),Nm=r("code"),j$=n("__call__"),C$=n(" special method."),N$=c(),T(As.$$.fragment),O$=c(),T(Is.$$.fragment),A$=c(),T(Ls.$$.fragment),W_=c(),pn=r("h2"),Ds=r("a"),Om=r("span"),T(Ji.$$.fragment),I$=c(),Am=r("span"),L$=n("BertForQuestionAnswering"),H_=c(),ht=r("div"),T(Gi.$$.fragment),D$=c(),hn=r("p"),S$=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Im=r("code"),U$=n("span start logits"),W$=n(" and "),Lm=r("code"),H$=n("span end logits"),R$=n(")."),V$=c(),Xi=r("p"),Q$=n("This model inherits from "),Tp=r("a"),K$=n("PreTrainedModel"),J$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G$=c(),Yi=r("p"),X$=n("This model is also a PyTorch "),Zi=r("a"),Y$=n("torch.nn.Module"),Z$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),e2=c(),ut=r("div"),T(el.$$.fragment),t2=c(),mn=r("p"),o2=n("The "),vp=r("a"),n2=n("BertForQuestionAnswering"),s2=n(" forward method, overrides the "),Dm=r("code"),r2=n("__call__"),a2=n(" special method."),i2=c(),T(Ss.$$.fragment),l2=c(),T(Us.$$.fragment),d2=c(),T(Ws.$$.fragment),R_=c(),fn=r("h2"),Hs=r("a"),Sm=r("span"),T(tl.$$.fragment),c2=c(),Um=r("span"),p2=n("TFBertModel"),V_=c(),Ke=r("div"),T(ol.$$.fragment),h2=c(),Wm=r("p"),m2=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),f2=c(),nl=r("p"),u2=n("This model inherits from "),wp=r("a"),g2=n("TFPreTrainedModel"),_2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b2=c(),sl=r("p"),k2=n("This model is also a "),rl=r("a"),y2=n("tf.keras.Model"),T2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),v2=c(),T(Rs.$$.fragment),w2=c(),St=r("div"),T(al.$$.fragment),$2=c(),un=r("p"),F2=n("The "),$p=r("a"),x2=n("TFBertModel"),B2=n(" forward method, overrides the "),Hm=r("code"),M2=n("__call__"),E2=n(" special method."),z2=c(),T(Vs.$$.fragment),P2=c(),T(Qs.$$.fragment),Q_=c(),gn=r("h2"),Ks=r("a"),Rm=r("span"),T(il.$$.fragment),q2=c(),Vm=r("span"),j2=n("TFBertForPreTraining"),K_=c(),Je=r("div"),T(ll.$$.fragment),C2=c(),_n=r("p"),N2=n(`Bert Model with two heads on top as done during the pretraining:
a `),Qm=r("code"),O2=n("masked language modeling"),A2=n(" head and a "),Km=r("code"),I2=n("next sentence prediction (classification)"),L2=n(" head."),D2=c(),dl=r("p"),S2=n("This model inherits from "),Fp=r("a"),U2=n("TFPreTrainedModel"),W2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H2=c(),cl=r("p"),R2=n("This model is also a "),pl=r("a"),V2=n("tf.keras.Model"),Q2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K2=c(),T(Js.$$.fragment),J2=c(),Ut=r("div"),T(hl.$$.fragment),G2=c(),bn=r("p"),X2=n("The "),xp=r("a"),Y2=n("TFBertForPreTraining"),Z2=n(" forward method, overrides the "),Jm=r("code"),e6=n("__call__"),t6=n(" special method."),o6=c(),T(Gs.$$.fragment),n6=c(),T(Xs.$$.fragment),J_=c(),kn=r("h2"),Ys=r("a"),Gm=r("span"),T(ml.$$.fragment),s6=c(),Xm=r("span"),r6=n("TFBertModelLMHeadModel"),G_=c(),yn=r("div"),T(fl.$$.fragment),a6=c(),gt=r("div"),T(ul.$$.fragment),i6=c(),Ae=r("p"),l6=n("encoder_hidden_states  ("),Ym=r("code"),d6=n("tf.Tensor"),c6=n(" of shape "),Zm=r("code"),p6=n("(batch_size, sequence_length, hidden_size)"),h6=n(", "),ef=r("em"),m6=n("optional"),f6=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),tf=r("code"),u6=n("tf.Tensor"),g6=n(" of shape "),of=r("code"),_6=n("(batch_size, sequence_length)"),b6=n(", "),nf=r("em"),k6=n("optional"),y6=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),sf=r("code"),T6=n("[0, 1]"),v6=n(":"),w6=c(),gl=r("ul"),_l=r("li"),$6=n("1 for tokens that are "),rf=r("strong"),F6=n("not masked"),x6=n(","),B6=c(),bl=r("li"),M6=n("0 for tokens that are "),af=r("strong"),E6=n("masked"),z6=n("."),P6=c(),G=r("p"),q6=n("past_key_values ("),lf=r("code"),j6=n("Tuple[Tuple[tf.Tensor]]"),C6=n(" of length "),df=r("code"),N6=n("config.n_layers"),O6=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cf=r("code"),A6=n("past_key_values"),I6=n(" are used, the user can optionally input only the last "),pf=r("code"),L6=n("decoder_input_ids"),D6=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),hf=r("code"),S6=n("(batch_size, 1)"),U6=n(` instead of all
`),mf=r("code"),W6=n("decoder_input_ids"),H6=n(" of shape "),ff=r("code"),R6=n("(batch_size, sequence_length)"),V6=n(`.
use_cache (`),uf=r("code"),Q6=n("bool"),K6=n(", "),gf=r("em"),J6=n("optional"),G6=n(", defaults to "),_f=r("code"),X6=n("True"),Y6=n(`):
If set to `),bf=r("code"),Z6=n("True"),eF=n(", "),kf=r("code"),tF=n("past_key_values"),oF=n(` key value states are returned and can be used to speed up decoding (see
`),yf=r("code"),nF=n("past_key_values"),sF=n("). Set to "),Tf=r("code"),rF=n("False"),aF=n(" during training, "),vf=r("code"),iF=n("True"),lF=n(` during generation
labels (`),wf=r("code"),dF=n("tf.Tensor"),cF=n(" or "),$f=r("code"),pF=n("np.ndarray"),hF=n(" of shape "),Ff=r("code"),mF=n("(batch_size, sequence_length)"),fF=n(", "),xf=r("em"),uF=n("optional"),gF=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bf=r("code"),_F=n("[0, ..., config.vocab_size - 1]"),bF=n("."),kF=c(),T(Zs.$$.fragment),X_=c(),Tn=r("h2"),er=r("a"),Mf=r("span"),T(kl.$$.fragment),yF=c(),Ef=r("span"),TF=n("TFBertForMaskedLM"),Y_=c(),Ge=r("div"),T(yl.$$.fragment),vF=c(),Tl=r("p"),wF=n("Bert Model with a "),zf=r("code"),$F=n("language modeling"),FF=n(" head on top."),xF=c(),vl=r("p"),BF=n("This model inherits from "),Bp=r("a"),MF=n("TFPreTrainedModel"),EF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zF=c(),wl=r("p"),PF=n("This model is also a "),$l=r("a"),qF=n("tf.keras.Model"),jF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),CF=c(),T(tr.$$.fragment),NF=c(),_t=r("div"),T(Fl.$$.fragment),OF=c(),vn=r("p"),AF=n("The "),Mp=r("a"),IF=n("TFBertForMaskedLM"),LF=n(" forward method, overrides the "),Pf=r("code"),DF=n("__call__"),SF=n(" special method."),UF=c(),T(or.$$.fragment),WF=c(),T(nr.$$.fragment),HF=c(),T(sr.$$.fragment),Z_=c(),wn=r("h2"),rr=r("a"),qf=r("span"),T(xl.$$.fragment),RF=c(),jf=r("span"),VF=n("TFBertForNextSentencePrediction"),eb=c(),Xe=r("div"),T(Bl.$$.fragment),QF=c(),Ml=r("p"),KF=n("Bert Model with a "),Cf=r("code"),JF=n("next sentence prediction (classification)"),GF=n(" head on top."),XF=c(),El=r("p"),YF=n("This model inherits from "),Ep=r("a"),ZF=n("TFPreTrainedModel"),ex=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tx=c(),zl=r("p"),ox=n("This model is also a "),Pl=r("a"),nx=n("tf.keras.Model"),sx=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rx=c(),T(ar.$$.fragment),ax=c(),Wt=r("div"),T(ql.$$.fragment),ix=c(),$n=r("p"),lx=n("The "),zp=r("a"),dx=n("TFBertForNextSentencePrediction"),cx=n(" forward method, overrides the "),Nf=r("code"),px=n("__call__"),hx=n(" special method."),mx=c(),T(ir.$$.fragment),fx=c(),T(lr.$$.fragment),tb=c(),Fn=r("h2"),dr=r("a"),Of=r("span"),T(jl.$$.fragment),ux=c(),Af=r("span"),gx=n("TFBertForSequenceClassification"),ob=c(),Ye=r("div"),T(Cl.$$.fragment),_x=c(),If=r("p"),bx=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),kx=c(),Nl=r("p"),yx=n("This model inherits from "),Pp=r("a"),Tx=n("TFPreTrainedModel"),vx=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wx=c(),Ol=r("p"),$x=n("This model is also a "),Al=r("a"),Fx=n("tf.keras.Model"),xx=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bx=c(),T(cr.$$.fragment),Mx=c(),bt=r("div"),T(Il.$$.fragment),Ex=c(),xn=r("p"),zx=n("The "),qp=r("a"),Px=n("TFBertForSequenceClassification"),qx=n(" forward method, overrides the "),Lf=r("code"),jx=n("__call__"),Cx=n(" special method."),Nx=c(),T(pr.$$.fragment),Ox=c(),T(hr.$$.fragment),Ax=c(),T(mr.$$.fragment),nb=c(),Bn=r("h2"),fr=r("a"),Df=r("span"),T(Ll.$$.fragment),Ix=c(),Sf=r("span"),Lx=n("TFBertForMultipleChoice"),sb=c(),Ze=r("div"),T(Dl.$$.fragment),Dx=c(),Uf=r("p"),Sx=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ux=c(),Sl=r("p"),Wx=n("This model inherits from "),jp=r("a"),Hx=n("TFPreTrainedModel"),Rx=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vx=c(),Ul=r("p"),Qx=n("This model is also a "),Wl=r("a"),Kx=n("tf.keras.Model"),Jx=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gx=c(),T(ur.$$.fragment),Xx=c(),Ht=r("div"),T(Hl.$$.fragment),Yx=c(),Mn=r("p"),Zx=n("The "),Cp=r("a"),e0=n("TFBertForMultipleChoice"),t0=n(" forward method, overrides the "),Wf=r("code"),o0=n("__call__"),n0=n(" special method."),s0=c(),T(gr.$$.fragment),r0=c(),T(_r.$$.fragment),rb=c(),En=r("h2"),br=r("a"),Hf=r("span"),T(Rl.$$.fragment),a0=c(),Rf=r("span"),i0=n("TFBertForTokenClassification"),ab=c(),et=r("div"),T(Vl.$$.fragment),l0=c(),Vf=r("p"),d0=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),c0=c(),Ql=r("p"),p0=n("This model inherits from "),Np=r("a"),h0=n("TFPreTrainedModel"),m0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f0=c(),Kl=r("p"),u0=n("This model is also a "),Jl=r("a"),g0=n("tf.keras.Model"),_0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),b0=c(),T(kr.$$.fragment),k0=c(),kt=r("div"),T(Gl.$$.fragment),y0=c(),zn=r("p"),T0=n("The "),Op=r("a"),v0=n("TFBertForTokenClassification"),w0=n(" forward method, overrides the "),Qf=r("code"),$0=n("__call__"),F0=n(" special method."),x0=c(),T(yr.$$.fragment),B0=c(),T(Tr.$$.fragment),M0=c(),T(vr.$$.fragment),ib=c(),Pn=r("h2"),wr=r("a"),Kf=r("span"),T(Xl.$$.fragment),E0=c(),Jf=r("span"),z0=n("TFBertForQuestionAnswering"),lb=c(),tt=r("div"),T(Yl.$$.fragment),P0=c(),qn=r("p"),q0=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gf=r("code"),j0=n("span start logits"),C0=n(" and "),Xf=r("code"),N0=n("span end logits"),O0=n(")."),A0=c(),Zl=r("p"),I0=n("This model inherits from "),Ap=r("a"),L0=n("TFPreTrainedModel"),D0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S0=c(),ed=r("p"),U0=n("This model is also a "),td=r("a"),W0=n("tf.keras.Model"),H0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),R0=c(),T($r.$$.fragment),V0=c(),yt=r("div"),T(od.$$.fragment),Q0=c(),jn=r("p"),K0=n("The "),Ip=r("a"),J0=n("TFBertForQuestionAnswering"),G0=n(" forward method, overrides the "),Yf=r("code"),X0=n("__call__"),Y0=n(" special method."),Z0=c(),T(Fr.$$.fragment),eB=c(),T(xr.$$.fragment),tB=c(),T(Br.$$.fragment),db=c(),Cn=r("h2"),Mr=r("a"),Zf=r("span"),T(nd.$$.fragment),oB=c(),eu=r("span"),nB=n("FlaxBertModel"),cb=c(),Ie=r("div"),T(sd.$$.fragment),sB=c(),tu=r("p"),rB=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aB=c(),rd=r("p"),iB=n("This model inherits from "),Lp=r("a"),lB=n("FlaxPreTrainedModel"),dB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cB=c(),ad=r("p"),pB=n("This model is also a Flax Linen "),id=r("a"),hB=n("flax.linen.Module"),mB=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fB=c(),ou=r("p"),uB=n("Finally, this model supports inherent JAX features such as:"),gB=c(),co=r("ul"),nu=r("li"),ld=r("a"),_B=n("Just-In-Time (JIT) compilation"),bB=c(),su=r("li"),dd=r("a"),kB=n("Automatic Differentiation"),yB=c(),ru=r("li"),cd=r("a"),TB=n("Vectorization"),vB=c(),au=r("li"),pd=r("a"),wB=n("Parallelization"),$B=c(),Rt=r("div"),T(hd.$$.fragment),FB=c(),Nn=r("p"),xB=n("The "),iu=r("code"),BB=n("FlaxBertPreTrainedModel"),MB=n(" forward method, overrides the "),lu=r("code"),EB=n("__call__"),zB=n(" special method."),PB=c(),T(Er.$$.fragment),qB=c(),T(zr.$$.fragment),pb=c(),On=r("h2"),Pr=r("a"),du=r("span"),T(md.$$.fragment),jB=c(),cu=r("span"),CB=n("FlaxBertForPreTraining"),hb=c(),Le=r("div"),T(fd.$$.fragment),NB=c(),An=r("p"),OB=n("Bert Model with two heads on top as done during the pretraining: a "),pu=r("code"),AB=n("masked language modeling"),IB=n(" head and a "),hu=r("code"),LB=n("next sentence prediction (classification)"),DB=n(" head."),SB=c(),ud=r("p"),UB=n("This model inherits from "),Dp=r("a"),WB=n("FlaxPreTrainedModel"),HB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),RB=c(),gd=r("p"),VB=n("This model is also a Flax Linen "),_d=r("a"),QB=n("flax.linen.Module"),KB=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),JB=c(),mu=r("p"),GB=n("Finally, this model supports inherent JAX features such as:"),XB=c(),po=r("ul"),fu=r("li"),bd=r("a"),YB=n("Just-In-Time (JIT) compilation"),ZB=c(),uu=r("li"),kd=r("a"),eM=n("Automatic Differentiation"),tM=c(),gu=r("li"),yd=r("a"),oM=n("Vectorization"),nM=c(),_u=r("li"),Td=r("a"),sM=n("Parallelization"),rM=c(),Vt=r("div"),T(vd.$$.fragment),aM=c(),In=r("p"),iM=n("The "),bu=r("code"),lM=n("FlaxBertPreTrainedModel"),dM=n(" forward method, overrides the "),ku=r("code"),cM=n("__call__"),pM=n(" special method."),hM=c(),T(qr.$$.fragment),mM=c(),T(jr.$$.fragment),mb=c(),Ln=r("h2"),Cr=r("a"),yu=r("span"),T(wd.$$.fragment),fM=c(),Tu=r("span"),uM=n("FlaxBertForMaskedLM"),fb=c(),De=r("div"),T($d.$$.fragment),gM=c(),Fd=r("p"),_M=n("Bert Model with a "),vu=r("code"),bM=n("language modeling"),kM=n(" head on top."),yM=c(),xd=r("p"),TM=n("This model inherits from "),Sp=r("a"),vM=n("FlaxPreTrainedModel"),wM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$M=c(),Bd=r("p"),FM=n("This model is also a Flax Linen "),Md=r("a"),xM=n("flax.linen.Module"),BM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),MM=c(),wu=r("p"),EM=n("Finally, this model supports inherent JAX features such as:"),zM=c(),ho=r("ul"),$u=r("li"),Ed=r("a"),PM=n("Just-In-Time (JIT) compilation"),qM=c(),Fu=r("li"),zd=r("a"),jM=n("Automatic Differentiation"),CM=c(),xu=r("li"),Pd=r("a"),NM=n("Vectorization"),OM=c(),Bu=r("li"),qd=r("a"),AM=n("Parallelization"),IM=c(),Qt=r("div"),T(jd.$$.fragment),LM=c(),Dn=r("p"),DM=n("The "),Mu=r("code"),SM=n("FlaxBertPreTrainedModel"),UM=n(" forward method, overrides the "),Eu=r("code"),WM=n("__call__"),HM=n(" special method."),RM=c(),T(Nr.$$.fragment),VM=c(),T(Or.$$.fragment),ub=c(),Sn=r("h2"),Ar=r("a"),zu=r("span"),T(Cd.$$.fragment),QM=c(),Pu=r("span"),KM=n("FlaxBertForNextSentencePrediction"),gb=c(),Se=r("div"),T(Nd.$$.fragment),JM=c(),Od=r("p"),GM=n("Bert Model with a "),qu=r("code"),XM=n("next sentence prediction (classification)"),YM=n(" head on top."),ZM=c(),Ad=r("p"),eE=n("This model inherits from "),Up=r("a"),tE=n("FlaxPreTrainedModel"),oE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nE=c(),Id=r("p"),sE=n("This model is also a Flax Linen "),Ld=r("a"),rE=n("flax.linen.Module"),aE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iE=c(),ju=r("p"),lE=n("Finally, this model supports inherent JAX features such as:"),dE=c(),mo=r("ul"),Cu=r("li"),Dd=r("a"),cE=n("Just-In-Time (JIT) compilation"),pE=c(),Nu=r("li"),Sd=r("a"),hE=n("Automatic Differentiation"),mE=c(),Ou=r("li"),Ud=r("a"),fE=n("Vectorization"),uE=c(),Au=r("li"),Wd=r("a"),gE=n("Parallelization"),_E=c(),Kt=r("div"),T(Hd.$$.fragment),bE=c(),Un=r("p"),kE=n("The "),Iu=r("code"),yE=n("FlaxBertPreTrainedModel"),TE=n(" forward method, overrides the "),Lu=r("code"),vE=n("__call__"),wE=n(" special method."),$E=c(),T(Ir.$$.fragment),FE=c(),T(Lr.$$.fragment),_b=c(),Wn=r("h2"),Dr=r("a"),Du=r("span"),T(Rd.$$.fragment),xE=c(),Su=r("span"),BE=n("FlaxBertForSequenceClassification"),bb=c(),Ue=r("div"),T(Vd.$$.fragment),ME=c(),Uu=r("p"),EE=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zE=c(),Qd=r("p"),PE=n("This model inherits from "),Wp=r("a"),qE=n("FlaxPreTrainedModel"),jE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CE=c(),Kd=r("p"),NE=n("This model is also a Flax Linen "),Jd=r("a"),OE=n("flax.linen.Module"),AE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),IE=c(),Wu=r("p"),LE=n("Finally, this model supports inherent JAX features such as:"),DE=c(),fo=r("ul"),Hu=r("li"),Gd=r("a"),SE=n("Just-In-Time (JIT) compilation"),UE=c(),Ru=r("li"),Xd=r("a"),WE=n("Automatic Differentiation"),HE=c(),Vu=r("li"),Yd=r("a"),RE=n("Vectorization"),VE=c(),Qu=r("li"),Zd=r("a"),QE=n("Parallelization"),KE=c(),Jt=r("div"),T(ec.$$.fragment),JE=c(),Hn=r("p"),GE=n("The "),Ku=r("code"),XE=n("FlaxBertPreTrainedModel"),YE=n(" forward method, overrides the "),Ju=r("code"),ZE=n("__call__"),ez=n(" special method."),tz=c(),T(Sr.$$.fragment),oz=c(),T(Ur.$$.fragment),kb=c(),Rn=r("h2"),Wr=r("a"),Gu=r("span"),T(tc.$$.fragment),nz=c(),Xu=r("span"),sz=n("FlaxBertForMultipleChoice"),yb=c(),We=r("div"),T(oc.$$.fragment),rz=c(),Yu=r("p"),az=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),iz=c(),nc=r("p"),lz=n("This model inherits from "),Hp=r("a"),dz=n("FlaxPreTrainedModel"),cz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pz=c(),sc=r("p"),hz=n("This model is also a Flax Linen "),rc=r("a"),mz=n("flax.linen.Module"),fz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uz=c(),Zu=r("p"),gz=n("Finally, this model supports inherent JAX features such as:"),_z=c(),uo=r("ul"),eg=r("li"),ac=r("a"),bz=n("Just-In-Time (JIT) compilation"),kz=c(),tg=r("li"),ic=r("a"),yz=n("Automatic Differentiation"),Tz=c(),og=r("li"),lc=r("a"),vz=n("Vectorization"),wz=c(),ng=r("li"),dc=r("a"),$z=n("Parallelization"),Fz=c(),Gt=r("div"),T(cc.$$.fragment),xz=c(),Vn=r("p"),Bz=n("The "),sg=r("code"),Mz=n("FlaxBertPreTrainedModel"),Ez=n(" forward method, overrides the "),rg=r("code"),zz=n("__call__"),Pz=n(" special method."),qz=c(),T(Hr.$$.fragment),jz=c(),T(Rr.$$.fragment),Tb=c(),Qn=r("h2"),Vr=r("a"),ag=r("span"),T(pc.$$.fragment),Cz=c(),ig=r("span"),Nz=n("FlaxBertForTokenClassification"),vb=c(),He=r("div"),T(hc.$$.fragment),Oz=c(),lg=r("p"),Az=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Iz=c(),mc=r("p"),Lz=n("This model inherits from "),Rp=r("a"),Dz=n("FlaxPreTrainedModel"),Sz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uz=c(),fc=r("p"),Wz=n("This model is also a Flax Linen "),uc=r("a"),Hz=n("flax.linen.Module"),Rz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vz=c(),dg=r("p"),Qz=n("Finally, this model supports inherent JAX features such as:"),Kz=c(),go=r("ul"),cg=r("li"),gc=r("a"),Jz=n("Just-In-Time (JIT) compilation"),Gz=c(),pg=r("li"),_c=r("a"),Xz=n("Automatic Differentiation"),Yz=c(),hg=r("li"),bc=r("a"),Zz=n("Vectorization"),e4=c(),mg=r("li"),kc=r("a"),t4=n("Parallelization"),o4=c(),Xt=r("div"),T(yc.$$.fragment),n4=c(),Kn=r("p"),s4=n("The "),fg=r("code"),r4=n("FlaxBertPreTrainedModel"),a4=n(" forward method, overrides the "),ug=r("code"),i4=n("__call__"),l4=n(" special method."),d4=c(),T(Qr.$$.fragment),c4=c(),T(Kr.$$.fragment),wb=c(),Jn=r("h2"),Jr=r("a"),gg=r("span"),T(Tc.$$.fragment),p4=c(),_g=r("span"),h4=n("FlaxBertForQuestionAnswering"),$b=c(),Re=r("div"),T(vc.$$.fragment),m4=c(),Gn=r("p"),f4=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=r("code"),u4=n("span start logits"),g4=n(" and "),kg=r("code"),_4=n("span end logits"),b4=n(")."),k4=c(),wc=r("p"),y4=n("This model inherits from "),Vp=r("a"),T4=n("FlaxPreTrainedModel"),v4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),w4=c(),$c=r("p"),$4=n("This model is also a Flax Linen "),Fc=r("a"),F4=n("flax.linen.Module"),x4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),B4=c(),yg=r("p"),M4=n("Finally, this model supports inherent JAX features such as:"),E4=c(),_o=r("ul"),Tg=r("li"),xc=r("a"),z4=n("Just-In-Time (JIT) compilation"),P4=c(),vg=r("li"),Bc=r("a"),q4=n("Automatic Differentiation"),j4=c(),wg=r("li"),Mc=r("a"),C4=n("Vectorization"),N4=c(),$g=r("li"),Ec=r("a"),O4=n("Parallelization"),A4=c(),Yt=r("div"),T(zc.$$.fragment),I4=c(),Xn=r("p"),L4=n("The "),Fg=r("code"),D4=n("FlaxBertPreTrainedModel"),S4=n(" forward method, overrides the "),xg=r("code"),U4=n("__call__"),W4=n(" special method."),H4=c(),T(Gr.$$.fragment),R4=c(),T(Xr.$$.fragment),this.h()},l(o){const k=e5('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),h=a(o,"H1",{class:!0});var Pc=i(h);m=a(Pc,"A",{id:!0,class:!0,href:!0});var Bg=i(m);g=a(Bg,"SPAN",{});var Mg=i(g);v(l.$$.fragment,Mg),Mg.forEach(t),Bg.forEach(t),f=p(Pc),M=a(Pc,"SPAN",{});var Eg=i(M);be=s(Eg,"BERT"),Eg.forEach(t),Pc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var qc=i(z);ee=a(qc,"A",{id:!0,class:!0,href:!0});var zg=i(ee);L=a(zg,"SPAN",{});var Pg=i(L);v(oe.$$.fragment,Pg),Pg.forEach(t),zg.forEach(t),ke=p(qc),D=a(qc,"SPAN",{});var qg=i(D);ye=s(qg,"Overview"),qg.forEach(t),qc.forEach(t),me=p(o),J=a(o,"P",{});var jc=i(J);O=s(jc,"The BERT model was proposed in "),ne=a(jc,"A",{href:!0,rel:!0});var jg=i(ne);Y=s(jg,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),jg.forEach(t),P=s(jc,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),jc.forEach(t),j=p(o),ie=a(o,"P",{});var Cg=i(ie);H=s(Cg,"The abstract from the paper is the following:"),Cg.forEach(t),fe=p(o),le=a(o,"P",{});var Ng=i(le);S=a(Ng,"EM",{});var Og=i(S);Te=s(Og,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),Og.forEach(t),Ng.forEach(t),ue=p(o),q=a(o,"P",{});var Ag=i(q);ce=a(Ag,"EM",{});var Ig=i(ce);R=s(Ig,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Ig.forEach(t),Ag.forEach(t),ge=p(o),de=a(o,"P",{});var Lg=i(de);V=s(Lg,"Tips:"),Lg.forEach(t),_e=p(o),te=a(o,"UL",{});var Cc=i(te);N=a(Cc,"LI",{});var Dg=i(N);ve=s(Dg,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Dg.forEach(t),Q=p(Cc),pe=a(Cc,"LI",{});var Sg=i(pe);y=s(Sg,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),Sg.forEach(t),Cc.forEach(t),E=p(o),K=a(o,"P",{});var Yn=i(K);ze=s(Yn,"This model was contributed by "),Be=a(Yn,"A",{href:!0,rel:!0});var Ug=i(Be);A=s(Ug,"thomwolf"),Ug.forEach(t),Pe=s(Yn,". The original code can be found "),Me=a(Yn,"A",{href:!0,rel:!0});var Wg=i(Me);qe=s(Wg,"here"),Wg.forEach(t),I=s(Yn,"."),Yn.forEach(t),W=p(o),we=a(o,"H2",{class:!0});var Nc=i(we);Fe=a(Nc,"A",{id:!0,class:!0,href:!0});var Hg=i(Fe);U=a(Hg,"SPAN",{});var Rg=i(U);v(Ee.$$.fragment,Rg),Rg.forEach(t),Hg.forEach(t),je=p(Nc),he=a(Nc,"SPAN",{});var Vg=i(he);Ce=s(Vg,"BertConfig"),Vg.forEach(t),Nc.forEach(t),b_=p(o),qt=a(o,"DIV",{class:!0});var bo=i(qt);v($a.$$.fragment,bo),my=p(bo),io=a(bo,"P",{});var ko=i(io);fy=s(ko,"This is the configuration class to store the configuration of a "),Rc=a(ko,"A",{href:!0});var Qg=i(Rc);uy=s(Qg,"BertModel"),Qg.forEach(t),gy=s(ko," or a "),Vc=a(ko,"A",{href:!0});var Kg=i(Vc);_y=s(Kg,"TFBertModel"),Kg.forEach(t),by=s(ko,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Fa=a(ko,"A",{href:!0,rel:!0});var Jg=i(Fa);ky=s(Jg,"bert-base-uncased"),Jg.forEach(t),yy=s(ko," architecture."),ko.forEach(t),Ty=p(bo),Lo=a(bo,"P",{});var Zn=i(Lo);vy=s(Zn,"Configuration objects inherit from "),Qc=a(Zn,"A",{href:!0});var Gg=i(Qc);wy=s(Gg,"PretrainedConfig"),Gg.forEach(t),$y=s(Zn,` and can be used to control the model outputs. Read the
documentation from `),Kc=a(Zn,"A",{href:!0});var Xg=i(Kc);Fy=s(Xg,"PretrainedConfig"),Xg.forEach(t),xy=s(Zn," for more information."),Zn.forEach(t),By=p(bo),v(ns.$$.fragment,bo),bo.forEach(t),k_=p(o),Do=a(o,"H2",{class:!0});var Oc=i(Do);ss=a(Oc,"A",{id:!0,class:!0,href:!0});var Yg=i(ss);Eh=a(Yg,"SPAN",{});var Zg=i(Eh);v(xa.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),My=p(Oc),zh=a(Oc,"SPAN",{});var e_=i(zh);Ey=s(e_,"BertTokenizer"),e_.forEach(t),Oc.forEach(t),y_=p(o),Ne=a(o,"DIV",{class:!0});var ot=i(Ne);v(Ba.$$.fragment,ot),zy=p(ot),Ph=a(ot,"P",{});var t_=i(Ph);Py=s(t_,"Construct a BERT tokenizer. Based on WordPiece."),t_.forEach(t),qy=p(ot),Ma=a(ot,"P",{});var Ac=i(Ma);jy=s(Ac,"This tokenizer inherits from "),Jc=a(Ac,"A",{href:!0});var o_=i(Jc);Cy=s(o_,"PreTrainedTokenizer"),o_.forEach(t),Ny=s(Ac,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ac.forEach(t),Oy=p(ot),To=a(ot,"DIV",{class:!0});var es=i(To);v(Ea.$$.fragment,es),Ay=p(es),qh=a(es,"P",{});var n_=i(qh);Iy=s(n_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),n_.forEach(t),Ly=p(es),za=a(es,"UL",{});var Ic=i(za);Gc=a(Ic,"LI",{});var Qp=i(Gc);Dy=s(Qp,"single sequence: "),jh=a(Qp,"CODE",{});var s_=i(jh);Sy=s(s_,"[CLS] X [SEP]"),s_.forEach(t),Qp.forEach(t),Uy=p(Ic),Xc=a(Ic,"LI",{});var Kp=i(Xc);Wy=s(Kp,"pair of sequences: "),Ch=a(Kp,"CODE",{});var r_=i(Ch);Hy=s(r_,"[CLS] A [SEP] B [SEP]"),r_.forEach(t),Kp.forEach(t),Ic.forEach(t),es.forEach(t),Ry=p(ot),rs=a(ot,"DIV",{class:!0});var Lc=i(rs);v(Pa.$$.fragment,Lc),Vy=p(Lc),qa=a(Lc,"P",{});var Dc=i(qa);Qy=s(Dc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=a(Dc,"CODE",{});var a_=i(Nh);Ky=s(a_,"prepare_for_model"),a_.forEach(t),Jy=s(Dc," method."),Dc.forEach(t),Lc.forEach(t),Gy=p(ot),Ct=a(ot,"DIV",{class:!0});var yo=i(Ct);v(ja.$$.fragment,yo),Xy=p(yo),Oh=a(yo,"P",{});var i_=i(Oh);Yy=s(i_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),i_.forEach(t),Zy=p(yo),v(as.$$.fragment,yo),eT=p(yo),So=a(yo,"P",{});var ts=i(So);tT=s(ts,"If "),Ah=a(ts,"CODE",{});var l_=i(Ah);oT=s(l_,"token_ids_1"),l_.forEach(t),nT=s(ts," is "),Ih=a(ts,"CODE",{});var d_=i(Ih);sT=s(d_,"None"),d_.forEach(t),rT=s(ts,", this method only returns the first portion of the mask (0s)."),ts.forEach(t),yo.forEach(t),aT=p(ot),Yc=a(ot,"DIV",{class:!0});var c_=i(Yc);v(Ca.$$.fragment,c_),c_.forEach(t),ot.forEach(t),T_=p(o),Uo=a(o,"H2",{class:!0});var Sc=i(Uo);is=a(Sc,"A",{id:!0,class:!0,href:!0});var p_=i(is);Lh=a(p_,"SPAN",{});var h_=i(Lh);v(Na.$$.fragment,h_),h_.forEach(t),p_.forEach(t),iT=p(Sc),Dh=a(Sc,"SPAN",{});var m_=i(Dh);lT=s(m_,"BertTokenizerFast"),m_.forEach(t),Sc.forEach(t),v_=p(o),st=a(o,"DIV",{class:!0});var jt=i(st);v(Oa.$$.fragment,jt),dT=p(jt),Aa=a(jt,"P",{});var Uc=i(Aa);cT=s(Uc,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=a(Uc,"EM",{});var f_=i(Sh);pT=s(f_,"tokenizers"),f_.forEach(t),hT=s(Uc," library). Based on WordPiece."),Uc.forEach(t),mT=p(jt),Ia=a(jt,"P",{});var Wc=i(Ia);fT=s(Wc,"This tokenizer inherits from "),Zc=a(Wc,"A",{href:!0});var u_=i(Zc);uT=s(u_,"PreTrainedTokenizerFast"),u_.forEach(t),gT=s(Wc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wc.forEach(t),_T=p(jt),vo=a(jt,"DIV",{class:!0});var os=i(vo);v(La.$$.fragment,os),bT=p(os),Uh=a(os,"P",{});var g_=i(Uh);kT=s(g_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),g_.forEach(t),yT=p(os),Da=a(os,"UL",{});var Hc=i(Da);ep=a(Hc,"LI",{});var Jp=i(ep);TT=s(Jp,"single sequence: "),Wh=a(Jp,"CODE",{});var __=i(Wh);vT=s(__,"[CLS] X [SEP]"),__.forEach(t),Jp.forEach(t),wT=p(Hc),tp=a(Hc,"LI",{});var V4=i(tp);$T=s(V4,"pair of sequences: "),Hh=a(V4,"CODE",{});var Q4=i(Hh);FT=s(Q4,"[CLS] A [SEP] B [SEP]"),Q4.forEach(t),V4.forEach(t),Hc.forEach(t),os.forEach(t),xT=p(jt),Nt=a(jt,"DIV",{class:!0});var Yr=i(Nt);v(Sa.$$.fragment,Yr),BT=p(Yr),Rh=a(Yr,"P",{});var K4=i(Rh);MT=s(K4,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),K4.forEach(t),ET=p(Yr),v(ls.$$.fragment,Yr),zT=p(Yr),Wo=a(Yr,"P",{});var Gp=i(Wo);PT=s(Gp,"If "),Vh=a(Gp,"CODE",{});var J4=i(Vh);qT=s(J4,"token_ids_1"),J4.forEach(t),jT=s(Gp," is "),Qh=a(Gp,"CODE",{});var G4=i(Qh);CT=s(G4,"None"),G4.forEach(t),NT=s(Gp,", this method only returns the first portion of the mask (0s)."),Gp.forEach(t),Yr.forEach(t),jt.forEach(t),w_=p(o),Ho=a(o,"H2",{class:!0});var xb=i(Ho);ds=a(xb,"A",{id:!0,class:!0,href:!0});var X4=i(ds);Kh=a(X4,"SPAN",{});var Y4=i(Kh);v(Ua.$$.fragment,Y4),Y4.forEach(t),X4.forEach(t),OT=p(xb),Jh=a(xb,"SPAN",{});var Z4=i(Jh);AT=s(Z4,"Bert specific outputs"),Z4.forEach(t),xb.forEach(t),$_=p(o),Ro=a(o,"DIV",{class:!0});var Bb=i(Ro);v(Wa.$$.fragment,Bb),IT=p(Bb),Ha=a(Bb,"P",{});var Mb=i(Ha);LT=s(Mb,"Output type of "),op=a(Mb,"A",{href:!0});var eP=i(op);DT=s(eP,"BertForPreTraining"),eP.forEach(t),ST=s(Mb,"."),Mb.forEach(t),Bb.forEach(t),F_=p(o),Vo=a(o,"DIV",{class:!0});var Eb=i(Vo);v(Ra.$$.fragment,Eb),UT=p(Eb),Va=a(Eb,"P",{});var zb=i(Va);WT=s(zb,"Output type of "),np=a(zb,"A",{href:!0});var tP=i(np);HT=s(tP,"TFBertForPreTraining"),tP.forEach(t),RT=s(zb,"."),zb.forEach(t),Eb.forEach(t),x_=p(o),lo=a(o,"DIV",{class:!0});var Xp=i(lo);v(Qa.$$.fragment,Xp),VT=p(Xp),Ka=a(Xp,"P",{});var Pb=i(Ka);QT=s(Pb,"Output type of "),sp=a(Pb,"A",{href:!0});var oP=i(sp);KT=s(oP,"BertForPreTraining"),oP.forEach(t),JT=s(Pb,"."),Pb.forEach(t),GT=p(Xp),cs=a(Xp,"DIV",{class:!0});var qb=i(cs);v(Ja.$$.fragment,qb),XT=p(qb),Gh=a(qb,"P",{});var nP=i(Gh);YT=s(nP,"\u201CReturns a new object replacing the specified fields with new values."),nP.forEach(t),qb.forEach(t),Xp.forEach(t),B_=p(o),Qo=a(o,"H2",{class:!0});var jb=i(Qo);ps=a(jb,"A",{id:!0,class:!0,href:!0});var sP=i(ps);Xh=a(sP,"SPAN",{});var rP=i(Xh);v(Ga.$$.fragment,rP),rP.forEach(t),sP.forEach(t),ZT=p(jb),Yh=a(jb,"SPAN",{});var aP=i(Yh);ev=s(aP,"BertModel"),aP.forEach(t),jb.forEach(t),M_=p(o),Oe=a(o,"DIV",{class:!0});var Tt=i(Oe);v(Xa.$$.fragment,Tt),tv=p(Tt),Zh=a(Tt,"P",{});var iP=i(Zh);ov=s(iP,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),iP.forEach(t),nv=p(Tt),Ya=a(Tt,"P",{});var Cb=i(Ya);sv=s(Cb,"This model inherits from "),rp=a(Cb,"A",{href:!0});var lP=i(rp);rv=s(lP,"PreTrainedModel"),lP.forEach(t),av=s(Cb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb.forEach(t),iv=p(Tt),Za=a(Tt,"P",{});var Nb=i(Za);lv=s(Nb,"This model is also a PyTorch "),ei=a(Nb,"A",{href:!0,rel:!0});var dP=i(ei);dv=s(dP,"torch.nn.Module"),dP.forEach(t),cv=s(Nb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb.forEach(t),pv=p(Tt),ti=a(Tt,"P",{});var Ob=i(ti);hv=s(Ob,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=a(Ob,"A",{href:!0,rel:!0});var cP=i(oi);mv=s(cP,`Attention is
all you need`),cP.forEach(t),fv=s(Ob,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ob.forEach(t),uv=p(Tt),Qe=a(Tt,"P",{});var vt=i(Qe);gv=s(vt,"To behave as an decoder the model needs to be initialized with the "),em=a(vt,"CODE",{});var pP=i(em);_v=s(pP,"is_decoder"),pP.forEach(t),bv=s(vt,` argument of the configuration set
to `),tm=a(vt,"CODE",{});var hP=i(tm);kv=s(hP,"True"),hP.forEach(t),yv=s(vt,". To be used in a Seq2Seq model, the model needs to initialized with both "),om=a(vt,"CODE",{});var mP=i(om);Tv=s(mP,"is_decoder"),mP.forEach(t),vv=s(vt,` argument and
`),nm=a(vt,"CODE",{});var fP=i(nm);wv=s(fP,"add_cross_attention"),fP.forEach(t),$v=s(vt," set to "),sm=a(vt,"CODE",{});var uP=i(sm);Fv=s(uP,"True"),uP.forEach(t),xv=s(vt,"; an "),rm=a(vt,"CODE",{});var gP=i(rm);Bv=s(gP,"encoder_hidden_states"),gP.forEach(t),Mv=s(vt," is then expected as an input to the forward pass."),vt.forEach(t),Ev=p(Tt),Ot=a(Tt,"DIV",{class:!0});var Zr=i(Ot);v(ni.$$.fragment,Zr),zv=p(Zr),Ko=a(Zr,"P",{});var Yp=i(Ko);Pv=s(Yp,"The "),ap=a(Yp,"A",{href:!0});var _P=i(ap);qv=s(_P,"BertModel"),_P.forEach(t),jv=s(Yp," forward method, overrides the "),am=a(Yp,"CODE",{});var bP=i(am);Cv=s(bP,"__call__"),bP.forEach(t),Nv=s(Yp," special method."),Yp.forEach(t),Ov=p(Zr),v(hs.$$.fragment,Zr),Av=p(Zr),v(ms.$$.fragment,Zr),Zr.forEach(t),Tt.forEach(t),E_=p(o),Jo=a(o,"H2",{class:!0});var Ab=i(Jo);fs=a(Ab,"A",{id:!0,class:!0,href:!0});var kP=i(fs);im=a(kP,"SPAN",{});var yP=i(im);v(si.$$.fragment,yP),yP.forEach(t),kP.forEach(t),Iv=p(Ab),lm=a(Ab,"SPAN",{});var TP=i(lm);Lv=s(TP,"BertForPreTraining"),TP.forEach(t),Ab.forEach(t),z_=p(o),rt=a(o,"DIV",{class:!0});var wo=i(rt);v(ri.$$.fragment,wo),Dv=p(wo),Go=a(wo,"P",{});var Zp=i(Go);Sv=s(Zp,"Bert Model with two heads on top as done during the pretraining: a "),dm=a(Zp,"CODE",{});var vP=i(dm);Uv=s(vP,"masked language modeling"),vP.forEach(t),Wv=s(Zp," head and a "),cm=a(Zp,"CODE",{});var wP=i(cm);Hv=s(wP,"next sentence prediction (classification)"),wP.forEach(t),Rv=s(Zp," head."),Zp.forEach(t),Vv=p(wo),ai=a(wo,"P",{});var Ib=i(ai);Qv=s(Ib,"This model inherits from "),ip=a(Ib,"A",{href:!0});var $P=i(ip);Kv=s($P,"PreTrainedModel"),$P.forEach(t),Jv=s(Ib,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib.forEach(t),Gv=p(wo),ii=a(wo,"P",{});var Lb=i(ii);Xv=s(Lb,"This model is also a PyTorch "),li=a(Lb,"A",{href:!0,rel:!0});var FP=i(li);Yv=s(FP,"torch.nn.Module"),FP.forEach(t),Zv=s(Lb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lb.forEach(t),e1=p(wo),At=a(wo,"DIV",{class:!0});var ea=i(At);v(di.$$.fragment,ea),t1=p(ea),Xo=a(ea,"P",{});var eh=i(Xo);o1=s(eh,"The "),lp=a(eh,"A",{href:!0});var xP=i(lp);n1=s(xP,"BertForPreTraining"),xP.forEach(t),s1=s(eh," forward method, overrides the "),pm=a(eh,"CODE",{});var BP=i(pm);r1=s(BP,"__call__"),BP.forEach(t),a1=s(eh," special method."),eh.forEach(t),i1=p(ea),v(us.$$.fragment,ea),l1=p(ea),v(gs.$$.fragment,ea),ea.forEach(t),wo.forEach(t),P_=p(o),Yo=a(o,"H2",{class:!0});var Db=i(Yo);_s=a(Db,"A",{id:!0,class:!0,href:!0});var MP=i(_s);hm=a(MP,"SPAN",{});var EP=i(hm);v(ci.$$.fragment,EP),EP.forEach(t),MP.forEach(t),d1=p(Db),mm=a(Db,"SPAN",{});var zP=i(mm);c1=s(zP,"BertLMHeadModel"),zP.forEach(t),Db.forEach(t),q_=p(o),at=a(o,"DIV",{class:!0});var $o=i(at);v(pi.$$.fragment,$o),p1=p($o),hi=a($o,"P",{});var Sb=i(hi);h1=s(Sb,"Bert Model with a "),fm=a(Sb,"CODE",{});var PP=i(fm);m1=s(PP,"language modeling"),PP.forEach(t),f1=s(Sb," head on top for CLM fine-tuning."),Sb.forEach(t),u1=p($o),mi=a($o,"P",{});var Ub=i(mi);g1=s(Ub,"This model inherits from "),dp=a(Ub,"A",{href:!0});var qP=i(dp);_1=s(qP,"PreTrainedModel"),qP.forEach(t),b1=s(Ub,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub.forEach(t),k1=p($o),fi=a($o,"P",{});var Wb=i(fi);y1=s(Wb,"This model is also a PyTorch "),ui=a(Wb,"A",{href:!0,rel:!0});var jP=i(ui);T1=s(jP,"torch.nn.Module"),jP.forEach(t),v1=s(Wb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wb.forEach(t),w1=p($o),It=a($o,"DIV",{class:!0});var ta=i(It);v(gi.$$.fragment,ta),$1=p(ta),Zo=a(ta,"P",{});var th=i(Zo);F1=s(th,"The "),cp=a(th,"A",{href:!0});var CP=i(cp);x1=s(CP,"BertLMHeadModel"),CP.forEach(t),B1=s(th," forward method, overrides the "),um=a(th,"CODE",{});var NP=i(um);M1=s(NP,"__call__"),NP.forEach(t),E1=s(th," special method."),th.forEach(t),z1=p(ta),v(bs.$$.fragment,ta),P1=p(ta),v(ks.$$.fragment,ta),ta.forEach(t),$o.forEach(t),j_=p(o),en=a(o,"H2",{class:!0});var Hb=i(en);ys=a(Hb,"A",{id:!0,class:!0,href:!0});var OP=i(ys);gm=a(OP,"SPAN",{});var AP=i(gm);v(_i.$$.fragment,AP),AP.forEach(t),OP.forEach(t),q1=p(Hb),_m=a(Hb,"SPAN",{});var IP=i(_m);j1=s(IP,"BertForMaskedLM"),IP.forEach(t),Hb.forEach(t),C_=p(o),it=a(o,"DIV",{class:!0});var Fo=i(it);v(bi.$$.fragment,Fo),C1=p(Fo),ki=a(Fo,"P",{});var Rb=i(ki);N1=s(Rb,"Bert Model with a "),bm=a(Rb,"CODE",{});var LP=i(bm);O1=s(LP,"language modeling"),LP.forEach(t),A1=s(Rb," head on top."),Rb.forEach(t),I1=p(Fo),yi=a(Fo,"P",{});var Vb=i(yi);L1=s(Vb,"This model inherits from "),pp=a(Vb,"A",{href:!0});var DP=i(pp);D1=s(DP,"PreTrainedModel"),DP.forEach(t),S1=s(Vb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vb.forEach(t),U1=p(Fo),Ti=a(Fo,"P",{});var Qb=i(Ti);W1=s(Qb,"This model is also a PyTorch "),vi=a(Qb,"A",{href:!0,rel:!0});var SP=i(vi);H1=s(SP,"torch.nn.Module"),SP.forEach(t),R1=s(Qb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qb.forEach(t),V1=p(Fo),mt=a(Fo,"DIV",{class:!0});var xo=i(mt);v(wi.$$.fragment,xo),Q1=p(xo),tn=a(xo,"P",{});var oh=i(tn);K1=s(oh,"The "),hp=a(oh,"A",{href:!0});var UP=i(hp);J1=s(UP,"BertForMaskedLM"),UP.forEach(t),G1=s(oh," forward method, overrides the "),km=a(oh,"CODE",{});var WP=i(km);X1=s(WP,"__call__"),WP.forEach(t),Y1=s(oh," special method."),oh.forEach(t),Z1=p(xo),v(Ts.$$.fragment,xo),ew=p(xo),v(vs.$$.fragment,xo),tw=p(xo),v(ws.$$.fragment,xo),xo.forEach(t),Fo.forEach(t),N_=p(o),on=a(o,"H2",{class:!0});var Kb=i(on);$s=a(Kb,"A",{id:!0,class:!0,href:!0});var HP=i($s);ym=a(HP,"SPAN",{});var RP=i(ym);v($i.$$.fragment,RP),RP.forEach(t),HP.forEach(t),ow=p(Kb),Tm=a(Kb,"SPAN",{});var VP=i(Tm);nw=s(VP,"BertForNextSentencePrediction"),VP.forEach(t),Kb.forEach(t),O_=p(o),lt=a(o,"DIV",{class:!0});var Bo=i(lt);v(Fi.$$.fragment,Bo),sw=p(Bo),xi=a(Bo,"P",{});var Jb=i(xi);rw=s(Jb,"Bert Model with a "),vm=a(Jb,"CODE",{});var QP=i(vm);aw=s(QP,"next sentence prediction (classification)"),QP.forEach(t),iw=s(Jb," head on top."),Jb.forEach(t),lw=p(Bo),Bi=a(Bo,"P",{});var Gb=i(Bi);dw=s(Gb,"This model inherits from "),mp=a(Gb,"A",{href:!0});var KP=i(mp);cw=s(KP,"PreTrainedModel"),KP.forEach(t),pw=s(Gb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gb.forEach(t),hw=p(Bo),Mi=a(Bo,"P",{});var Xb=i(Mi);mw=s(Xb,"This model is also a PyTorch "),Ei=a(Xb,"A",{href:!0,rel:!0});var JP=i(Ei);fw=s(JP,"torch.nn.Module"),JP.forEach(t),uw=s(Xb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xb.forEach(t),gw=p(Bo),Lt=a(Bo,"DIV",{class:!0});var oa=i(Lt);v(zi.$$.fragment,oa),_w=p(oa),nn=a(oa,"P",{});var nh=i(nn);bw=s(nh,"The "),fp=a(nh,"A",{href:!0});var GP=i(fp);kw=s(GP,"BertForNextSentencePrediction"),GP.forEach(t),yw=s(nh," forward method, overrides the "),wm=a(nh,"CODE",{});var XP=i(wm);Tw=s(XP,"__call__"),XP.forEach(t),vw=s(nh," special method."),nh.forEach(t),ww=p(oa),v(Fs.$$.fragment,oa),$w=p(oa),v(xs.$$.fragment,oa),oa.forEach(t),Bo.forEach(t),A_=p(o),sn=a(o,"H2",{class:!0});var Yb=i(sn);Bs=a(Yb,"A",{id:!0,class:!0,href:!0});var YP=i(Bs);$m=a(YP,"SPAN",{});var ZP=i($m);v(Pi.$$.fragment,ZP),ZP.forEach(t),YP.forEach(t),Fw=p(Yb),Fm=a(Yb,"SPAN",{});var eq=i(Fm);xw=s(eq,"BertForSequenceClassification"),eq.forEach(t),Yb.forEach(t),I_=p(o),dt=a(o,"DIV",{class:!0});var Mo=i(dt);v(qi.$$.fragment,Mo),Bw=p(Mo),xm=a(Mo,"P",{});var tq=i(xm);Mw=s(tq,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),tq.forEach(t),Ew=p(Mo),ji=a(Mo,"P",{});var Zb=i(ji);zw=s(Zb,"This model inherits from "),up=a(Zb,"A",{href:!0});var oq=i(up);Pw=s(oq,"PreTrainedModel"),oq.forEach(t),qw=s(Zb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb.forEach(t),jw=p(Mo),Ci=a(Mo,"P",{});var ek=i(Ci);Cw=s(ek,"This model is also a PyTorch "),Ni=a(ek,"A",{href:!0,rel:!0});var nq=i(Ni);Nw=s(nq,"torch.nn.Module"),nq.forEach(t),Ow=s(ek,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ek.forEach(t),Aw=p(Mo),Ve=a(Mo,"DIV",{class:!0});var wt=i(Ve);v(Oi.$$.fragment,wt),Iw=p(wt),rn=a(wt,"P",{});var sh=i(rn);Lw=s(sh,"The "),gp=a(sh,"A",{href:!0});var sq=i(gp);Dw=s(sq,"BertForSequenceClassification"),sq.forEach(t),Sw=s(sh," forward method, overrides the "),Bm=a(sh,"CODE",{});var rq=i(Bm);Uw=s(rq,"__call__"),rq.forEach(t),Ww=s(sh," special method."),sh.forEach(t),Hw=p(wt),v(Ms.$$.fragment,wt),Rw=p(wt),v(Es.$$.fragment,wt),Vw=p(wt),v(zs.$$.fragment,wt),Qw=p(wt),v(Ps.$$.fragment,wt),Kw=p(wt),v(qs.$$.fragment,wt),wt.forEach(t),Mo.forEach(t),L_=p(o),an=a(o,"H2",{class:!0});var tk=i(an);js=a(tk,"A",{id:!0,class:!0,href:!0});var aq=i(js);Mm=a(aq,"SPAN",{});var iq=i(Mm);v(Ai.$$.fragment,iq),iq.forEach(t),aq.forEach(t),Jw=p(tk),Em=a(tk,"SPAN",{});var lq=i(Em);Gw=s(lq,"BertForMultipleChoice"),lq.forEach(t),tk.forEach(t),D_=p(o),ct=a(o,"DIV",{class:!0});var Eo=i(ct);v(Ii.$$.fragment,Eo),Xw=p(Eo),zm=a(Eo,"P",{});var dq=i(zm);Yw=s(dq,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dq.forEach(t),Zw=p(Eo),Li=a(Eo,"P",{});var ok=i(Li);e$=s(ok,"This model inherits from "),_p=a(ok,"A",{href:!0});var cq=i(_p);t$=s(cq,"PreTrainedModel"),cq.forEach(t),o$=s(ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok.forEach(t),n$=p(Eo),Di=a(Eo,"P",{});var nk=i(Di);s$=s(nk,"This model is also a PyTorch "),Si=a(nk,"A",{href:!0,rel:!0});var pq=i(Si);r$=s(pq,"torch.nn.Module"),pq.forEach(t),a$=s(nk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nk.forEach(t),i$=p(Eo),Dt=a(Eo,"DIV",{class:!0});var na=i(Dt);v(Ui.$$.fragment,na),l$=p(na),ln=a(na,"P",{});var rh=i(ln);d$=s(rh,"The "),bp=a(rh,"A",{href:!0});var hq=i(bp);c$=s(hq,"BertForMultipleChoice"),hq.forEach(t),p$=s(rh," forward method, overrides the "),Pm=a(rh,"CODE",{});var mq=i(Pm);h$=s(mq,"__call__"),mq.forEach(t),m$=s(rh," special method."),rh.forEach(t),f$=p(na),v(Cs.$$.fragment,na),u$=p(na),v(Ns.$$.fragment,na),na.forEach(t),Eo.forEach(t),S_=p(o),dn=a(o,"H2",{class:!0});var sk=i(dn);Os=a(sk,"A",{id:!0,class:!0,href:!0});var fq=i(Os);qm=a(fq,"SPAN",{});var uq=i(qm);v(Wi.$$.fragment,uq),uq.forEach(t),fq.forEach(t),g$=p(sk),jm=a(sk,"SPAN",{});var gq=i(jm);_$=s(gq,"BertForTokenClassification"),gq.forEach(t),sk.forEach(t),U_=p(o),pt=a(o,"DIV",{class:!0});var zo=i(pt);v(Hi.$$.fragment,zo),b$=p(zo),Cm=a(zo,"P",{});var _q=i(Cm);k$=s(_q,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_q.forEach(t),y$=p(zo),Ri=a(zo,"P",{});var rk=i(Ri);T$=s(rk,"This model inherits from "),kp=a(rk,"A",{href:!0});var bq=i(kp);v$=s(bq,"PreTrainedModel"),bq.forEach(t),w$=s(rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk.forEach(t),$$=p(zo),Vi=a(zo,"P",{});var ak=i(Vi);F$=s(ak,"This model is also a PyTorch "),Qi=a(ak,"A",{href:!0,rel:!0});var kq=i(Qi);x$=s(kq,"torch.nn.Module"),kq.forEach(t),B$=s(ak,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak.forEach(t),M$=p(zo),ft=a(zo,"DIV",{class:!0});var Po=i(ft);v(Ki.$$.fragment,Po),E$=p(Po),cn=a(Po,"P",{});var ah=i(cn);z$=s(ah,"The "),yp=a(ah,"A",{href:!0});var yq=i(yp);P$=s(yq,"BertForTokenClassification"),yq.forEach(t),q$=s(ah," forward method, overrides the "),Nm=a(ah,"CODE",{});var Tq=i(Nm);j$=s(Tq,"__call__"),Tq.forEach(t),C$=s(ah," special method."),ah.forEach(t),N$=p(Po),v(As.$$.fragment,Po),O$=p(Po),v(Is.$$.fragment,Po),A$=p(Po),v(Ls.$$.fragment,Po),Po.forEach(t),zo.forEach(t),W_=p(o),pn=a(o,"H2",{class:!0});var ik=i(pn);Ds=a(ik,"A",{id:!0,class:!0,href:!0});var vq=i(Ds);Om=a(vq,"SPAN",{});var wq=i(Om);v(Ji.$$.fragment,wq),wq.forEach(t),vq.forEach(t),I$=p(ik),Am=a(ik,"SPAN",{});var $q=i(Am);L$=s($q,"BertForQuestionAnswering"),$q.forEach(t),ik.forEach(t),H_=p(o),ht=a(o,"DIV",{class:!0});var qo=i(ht);v(Gi.$$.fragment,qo),D$=p(qo),hn=a(qo,"P",{});var ih=i(hn);S$=s(ih,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Im=a(ih,"CODE",{});var Fq=i(Im);U$=s(Fq,"span start logits"),Fq.forEach(t),W$=s(ih," and "),Lm=a(ih,"CODE",{});var xq=i(Lm);H$=s(xq,"span end logits"),xq.forEach(t),R$=s(ih,")."),ih.forEach(t),V$=p(qo),Xi=a(qo,"P",{});var lk=i(Xi);Q$=s(lk,"This model inherits from "),Tp=a(lk,"A",{href:!0});var Bq=i(Tp);K$=s(Bq,"PreTrainedModel"),Bq.forEach(t),J$=s(lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk.forEach(t),G$=p(qo),Yi=a(qo,"P",{});var dk=i(Yi);X$=s(dk,"This model is also a PyTorch "),Zi=a(dk,"A",{href:!0,rel:!0});var Mq=i(Zi);Y$=s(Mq,"torch.nn.Module"),Mq.forEach(t),Z$=s(dk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dk.forEach(t),e2=p(qo),ut=a(qo,"DIV",{class:!0});var jo=i(ut);v(el.$$.fragment,jo),t2=p(jo),mn=a(jo,"P",{});var lh=i(mn);o2=s(lh,"The "),vp=a(lh,"A",{href:!0});var Eq=i(vp);n2=s(Eq,"BertForQuestionAnswering"),Eq.forEach(t),s2=s(lh," forward method, overrides the "),Dm=a(lh,"CODE",{});var zq=i(Dm);r2=s(zq,"__call__"),zq.forEach(t),a2=s(lh," special method."),lh.forEach(t),i2=p(jo),v(Ss.$$.fragment,jo),l2=p(jo),v(Us.$$.fragment,jo),d2=p(jo),v(Ws.$$.fragment,jo),jo.forEach(t),qo.forEach(t),R_=p(o),fn=a(o,"H2",{class:!0});var ck=i(fn);Hs=a(ck,"A",{id:!0,class:!0,href:!0});var Pq=i(Hs);Sm=a(Pq,"SPAN",{});var qq=i(Sm);v(tl.$$.fragment,qq),qq.forEach(t),Pq.forEach(t),c2=p(ck),Um=a(ck,"SPAN",{});var jq=i(Um);p2=s(jq,"TFBertModel"),jq.forEach(t),ck.forEach(t),V_=p(o),Ke=a(o,"DIV",{class:!0});var Zt=i(Ke);v(ol.$$.fragment,Zt),h2=p(Zt),Wm=a(Zt,"P",{});var Cq=i(Wm);m2=s(Cq,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Cq.forEach(t),f2=p(Zt),nl=a(Zt,"P",{});var pk=i(nl);u2=s(pk,"This model inherits from "),wp=a(pk,"A",{href:!0});var Nq=i(wp);g2=s(Nq,"TFPreTrainedModel"),Nq.forEach(t),_2=s(pk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pk.forEach(t),b2=p(Zt),sl=a(Zt,"P",{});var hk=i(sl);k2=s(hk,"This model is also a "),rl=a(hk,"A",{href:!0,rel:!0});var Oq=i(rl);y2=s(Oq,"tf.keras.Model"),Oq.forEach(t),T2=s(hk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hk.forEach(t),v2=p(Zt),v(Rs.$$.fragment,Zt),w2=p(Zt),St=a(Zt,"DIV",{class:!0});var sa=i(St);v(al.$$.fragment,sa),$2=p(sa),un=a(sa,"P",{});var dh=i(un);F2=s(dh,"The "),$p=a(dh,"A",{href:!0});var Aq=i($p);x2=s(Aq,"TFBertModel"),Aq.forEach(t),B2=s(dh," forward method, overrides the "),Hm=a(dh,"CODE",{});var Iq=i(Hm);M2=s(Iq,"__call__"),Iq.forEach(t),E2=s(dh," special method."),dh.forEach(t),z2=p(sa),v(Vs.$$.fragment,sa),P2=p(sa),v(Qs.$$.fragment,sa),sa.forEach(t),Zt.forEach(t),Q_=p(o),gn=a(o,"H2",{class:!0});var mk=i(gn);Ks=a(mk,"A",{id:!0,class:!0,href:!0});var Lq=i(Ks);Rm=a(Lq,"SPAN",{});var Dq=i(Rm);v(il.$$.fragment,Dq),Dq.forEach(t),Lq.forEach(t),q2=p(mk),Vm=a(mk,"SPAN",{});var Sq=i(Vm);j2=s(Sq,"TFBertForPreTraining"),Sq.forEach(t),mk.forEach(t),K_=p(o),Je=a(o,"DIV",{class:!0});var eo=i(Je);v(ll.$$.fragment,eo),C2=p(eo),_n=a(eo,"P",{});var ch=i(_n);N2=s(ch,`Bert Model with two heads on top as done during the pretraining:
a `),Qm=a(ch,"CODE",{});var Uq=i(Qm);O2=s(Uq,"masked language modeling"),Uq.forEach(t),A2=s(ch," head and a "),Km=a(ch,"CODE",{});var Wq=i(Km);I2=s(Wq,"next sentence prediction (classification)"),Wq.forEach(t),L2=s(ch," head."),ch.forEach(t),D2=p(eo),dl=a(eo,"P",{});var fk=i(dl);S2=s(fk,"This model inherits from "),Fp=a(fk,"A",{href:!0});var Hq=i(Fp);U2=s(Hq,"TFPreTrainedModel"),Hq.forEach(t),W2=s(fk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fk.forEach(t),H2=p(eo),cl=a(eo,"P",{});var uk=i(cl);R2=s(uk,"This model is also a "),pl=a(uk,"A",{href:!0,rel:!0});var Rq=i(pl);V2=s(Rq,"tf.keras.Model"),Rq.forEach(t),Q2=s(uk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uk.forEach(t),K2=p(eo),v(Js.$$.fragment,eo),J2=p(eo),Ut=a(eo,"DIV",{class:!0});var ra=i(Ut);v(hl.$$.fragment,ra),G2=p(ra),bn=a(ra,"P",{});var ph=i(bn);X2=s(ph,"The "),xp=a(ph,"A",{href:!0});var Vq=i(xp);Y2=s(Vq,"TFBertForPreTraining"),Vq.forEach(t),Z2=s(ph," forward method, overrides the "),Jm=a(ph,"CODE",{});var Qq=i(Jm);e6=s(Qq,"__call__"),Qq.forEach(t),t6=s(ph," special method."),ph.forEach(t),o6=p(ra),v(Gs.$$.fragment,ra),n6=p(ra),v(Xs.$$.fragment,ra),ra.forEach(t),eo.forEach(t),J_=p(o),kn=a(o,"H2",{class:!0});var gk=i(kn);Ys=a(gk,"A",{id:!0,class:!0,href:!0});var Kq=i(Ys);Gm=a(Kq,"SPAN",{});var Jq=i(Gm);v(ml.$$.fragment,Jq),Jq.forEach(t),Kq.forEach(t),s6=p(gk),Xm=a(gk,"SPAN",{});var Gq=i(Xm);r6=s(Gq,"TFBertModelLMHeadModel"),Gq.forEach(t),gk.forEach(t),G_=p(o),yn=a(o,"DIV",{class:!0});var _k=i(yn);v(fl.$$.fragment,_k),a6=p(_k),gt=a(_k,"DIV",{class:!0});var Co=i(gt);v(ul.$$.fragment,Co),i6=p(Co),Ae=a(Co,"P",{});var nt=i(Ae);l6=s(nt,"encoder_hidden_states  ("),Ym=a(nt,"CODE",{});var Xq=i(Ym);d6=s(Xq,"tf.Tensor"),Xq.forEach(t),c6=s(nt," of shape "),Zm=a(nt,"CODE",{});var Yq=i(Zm);p6=s(Yq,"(batch_size, sequence_length, hidden_size)"),Yq.forEach(t),h6=s(nt,", "),ef=a(nt,"EM",{});var Zq=i(ef);m6=s(Zq,"optional"),Zq.forEach(t),f6=s(nt,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),tf=a(nt,"CODE",{});var ej=i(tf);u6=s(ej,"tf.Tensor"),ej.forEach(t),g6=s(nt," of shape "),of=a(nt,"CODE",{});var tj=i(of);_6=s(tj,"(batch_size, sequence_length)"),tj.forEach(t),b6=s(nt,", "),nf=a(nt,"EM",{});var oj=i(nf);k6=s(oj,"optional"),oj.forEach(t),y6=s(nt,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),sf=a(nt,"CODE",{});var nj=i(sf);T6=s(nj,"[0, 1]"),nj.forEach(t),v6=s(nt,":"),nt.forEach(t),w6=p(Co),gl=a(Co,"UL",{});var bk=i(gl);_l=a(bk,"LI",{});var kk=i(_l);$6=s(kk,"1 for tokens that are "),rf=a(kk,"STRONG",{});var sj=i(rf);F6=s(sj,"not masked"),sj.forEach(t),x6=s(kk,","),kk.forEach(t),B6=p(bk),bl=a(bk,"LI",{});var yk=i(bl);M6=s(yk,"0 for tokens that are "),af=a(yk,"STRONG",{});var rj=i(af);E6=s(rj,"masked"),rj.forEach(t),z6=s(yk,"."),yk.forEach(t),bk.forEach(t),P6=p(Co),G=a(Co,"P",{});var Z=i(G);q6=s(Z,"past_key_values ("),lf=a(Z,"CODE",{});var aj=i(lf);j6=s(aj,"Tuple[Tuple[tf.Tensor]]"),aj.forEach(t),C6=s(Z," of length "),df=a(Z,"CODE",{});var ij=i(df);N6=s(ij,"config.n_layers"),ij.forEach(t),O6=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cf=a(Z,"CODE",{});var lj=i(cf);A6=s(lj,"past_key_values"),lj.forEach(t),I6=s(Z," are used, the user can optionally input only the last "),pf=a(Z,"CODE",{});var dj=i(pf);L6=s(dj,"decoder_input_ids"),dj.forEach(t),D6=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),hf=a(Z,"CODE",{});var cj=i(hf);S6=s(cj,"(batch_size, 1)"),cj.forEach(t),U6=s(Z,` instead of all
`),mf=a(Z,"CODE",{});var pj=i(mf);W6=s(pj,"decoder_input_ids"),pj.forEach(t),H6=s(Z," of shape "),ff=a(Z,"CODE",{});var hj=i(ff);R6=s(hj,"(batch_size, sequence_length)"),hj.forEach(t),V6=s(Z,`.
use_cache (`),uf=a(Z,"CODE",{});var mj=i(uf);Q6=s(mj,"bool"),mj.forEach(t),K6=s(Z,", "),gf=a(Z,"EM",{});var fj=i(gf);J6=s(fj,"optional"),fj.forEach(t),G6=s(Z,", defaults to "),_f=a(Z,"CODE",{});var uj=i(_f);X6=s(uj,"True"),uj.forEach(t),Y6=s(Z,`):
If set to `),bf=a(Z,"CODE",{});var gj=i(bf);Z6=s(gj,"True"),gj.forEach(t),eF=s(Z,", "),kf=a(Z,"CODE",{});var _j=i(kf);tF=s(_j,"past_key_values"),_j.forEach(t),oF=s(Z,` key value states are returned and can be used to speed up decoding (see
`),yf=a(Z,"CODE",{});var bj=i(yf);nF=s(bj,"past_key_values"),bj.forEach(t),sF=s(Z,"). Set to "),Tf=a(Z,"CODE",{});var kj=i(Tf);rF=s(kj,"False"),kj.forEach(t),aF=s(Z," during training, "),vf=a(Z,"CODE",{});var yj=i(vf);iF=s(yj,"True"),yj.forEach(t),lF=s(Z,` during generation
labels (`),wf=a(Z,"CODE",{});var Tj=i(wf);dF=s(Tj,"tf.Tensor"),Tj.forEach(t),cF=s(Z," or "),$f=a(Z,"CODE",{});var vj=i($f);pF=s(vj,"np.ndarray"),vj.forEach(t),hF=s(Z," of shape "),Ff=a(Z,"CODE",{});var wj=i(Ff);mF=s(wj,"(batch_size, sequence_length)"),wj.forEach(t),fF=s(Z,", "),xf=a(Z,"EM",{});var $j=i(xf);uF=s($j,"optional"),$j.forEach(t),gF=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bf=a(Z,"CODE",{});var Fj=i(Bf);_F=s(Fj,"[0, ..., config.vocab_size - 1]"),Fj.forEach(t),bF=s(Z,"."),Z.forEach(t),kF=p(Co),v(Zs.$$.fragment,Co),Co.forEach(t),_k.forEach(t),X_=p(o),Tn=a(o,"H2",{class:!0});var Tk=i(Tn);er=a(Tk,"A",{id:!0,class:!0,href:!0});var xj=i(er);Mf=a(xj,"SPAN",{});var Bj=i(Mf);v(kl.$$.fragment,Bj),Bj.forEach(t),xj.forEach(t),yF=p(Tk),Ef=a(Tk,"SPAN",{});var Mj=i(Ef);TF=s(Mj,"TFBertForMaskedLM"),Mj.forEach(t),Tk.forEach(t),Y_=p(o),Ge=a(o,"DIV",{class:!0});var to=i(Ge);v(yl.$$.fragment,to),vF=p(to),Tl=a(to,"P",{});var vk=i(Tl);wF=s(vk,"Bert Model with a "),zf=a(vk,"CODE",{});var Ej=i(zf);$F=s(Ej,"language modeling"),Ej.forEach(t),FF=s(vk," head on top."),vk.forEach(t),xF=p(to),vl=a(to,"P",{});var wk=i(vl);BF=s(wk,"This model inherits from "),Bp=a(wk,"A",{href:!0});var zj=i(Bp);MF=s(zj,"TFPreTrainedModel"),zj.forEach(t),EF=s(wk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wk.forEach(t),zF=p(to),wl=a(to,"P",{});var $k=i(wl);PF=s($k,"This model is also a "),$l=a($k,"A",{href:!0,rel:!0});var Pj=i($l);qF=s(Pj,"tf.keras.Model"),Pj.forEach(t),jF=s($k,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$k.forEach(t),CF=p(to),v(tr.$$.fragment,to),NF=p(to),_t=a(to,"DIV",{class:!0});var No=i(_t);v(Fl.$$.fragment,No),OF=p(No),vn=a(No,"P",{});var hh=i(vn);AF=s(hh,"The "),Mp=a(hh,"A",{href:!0});var qj=i(Mp);IF=s(qj,"TFBertForMaskedLM"),qj.forEach(t),LF=s(hh," forward method, overrides the "),Pf=a(hh,"CODE",{});var jj=i(Pf);DF=s(jj,"__call__"),jj.forEach(t),SF=s(hh," special method."),hh.forEach(t),UF=p(No),v(or.$$.fragment,No),WF=p(No),v(nr.$$.fragment,No),HF=p(No),v(sr.$$.fragment,No),No.forEach(t),to.forEach(t),Z_=p(o),wn=a(o,"H2",{class:!0});var Fk=i(wn);rr=a(Fk,"A",{id:!0,class:!0,href:!0});var Cj=i(rr);qf=a(Cj,"SPAN",{});var Nj=i(qf);v(xl.$$.fragment,Nj),Nj.forEach(t),Cj.forEach(t),RF=p(Fk),jf=a(Fk,"SPAN",{});var Oj=i(jf);VF=s(Oj,"TFBertForNextSentencePrediction"),Oj.forEach(t),Fk.forEach(t),eb=p(o),Xe=a(o,"DIV",{class:!0});var oo=i(Xe);v(Bl.$$.fragment,oo),QF=p(oo),Ml=a(oo,"P",{});var xk=i(Ml);KF=s(xk,"Bert Model with a "),Cf=a(xk,"CODE",{});var Aj=i(Cf);JF=s(Aj,"next sentence prediction (classification)"),Aj.forEach(t),GF=s(xk," head on top."),xk.forEach(t),XF=p(oo),El=a(oo,"P",{});var Bk=i(El);YF=s(Bk,"This model inherits from "),Ep=a(Bk,"A",{href:!0});var Ij=i(Ep);ZF=s(Ij,"TFPreTrainedModel"),Ij.forEach(t),ex=s(Bk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk.forEach(t),tx=p(oo),zl=a(oo,"P",{});var Mk=i(zl);ox=s(Mk,"This model is also a "),Pl=a(Mk,"A",{href:!0,rel:!0});var Lj=i(Pl);nx=s(Lj,"tf.keras.Model"),Lj.forEach(t),sx=s(Mk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mk.forEach(t),rx=p(oo),v(ar.$$.fragment,oo),ax=p(oo),Wt=a(oo,"DIV",{class:!0});var aa=i(Wt);v(ql.$$.fragment,aa),ix=p(aa),$n=a(aa,"P",{});var mh=i($n);lx=s(mh,"The "),zp=a(mh,"A",{href:!0});var Dj=i(zp);dx=s(Dj,"TFBertForNextSentencePrediction"),Dj.forEach(t),cx=s(mh," forward method, overrides the "),Nf=a(mh,"CODE",{});var Sj=i(Nf);px=s(Sj,"__call__"),Sj.forEach(t),hx=s(mh," special method."),mh.forEach(t),mx=p(aa),v(ir.$$.fragment,aa),fx=p(aa),v(lr.$$.fragment,aa),aa.forEach(t),oo.forEach(t),tb=p(o),Fn=a(o,"H2",{class:!0});var Ek=i(Fn);dr=a(Ek,"A",{id:!0,class:!0,href:!0});var Uj=i(dr);Of=a(Uj,"SPAN",{});var Wj=i(Of);v(jl.$$.fragment,Wj),Wj.forEach(t),Uj.forEach(t),ux=p(Ek),Af=a(Ek,"SPAN",{});var Hj=i(Af);gx=s(Hj,"TFBertForSequenceClassification"),Hj.forEach(t),Ek.forEach(t),ob=p(o),Ye=a(o,"DIV",{class:!0});var no=i(Ye);v(Cl.$$.fragment,no),_x=p(no),If=a(no,"P",{});var Rj=i(If);bx=s(Rj,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Rj.forEach(t),kx=p(no),Nl=a(no,"P",{});var zk=i(Nl);yx=s(zk,"This model inherits from "),Pp=a(zk,"A",{href:!0});var Vj=i(Pp);Tx=s(Vj,"TFPreTrainedModel"),Vj.forEach(t),vx=s(zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk.forEach(t),wx=p(no),Ol=a(no,"P",{});var Pk=i(Ol);$x=s(Pk,"This model is also a "),Al=a(Pk,"A",{href:!0,rel:!0});var Qj=i(Al);Fx=s(Qj,"tf.keras.Model"),Qj.forEach(t),xx=s(Pk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pk.forEach(t),Bx=p(no),v(cr.$$.fragment,no),Mx=p(no),bt=a(no,"DIV",{class:!0});var Oo=i(bt);v(Il.$$.fragment,Oo),Ex=p(Oo),xn=a(Oo,"P",{});var fh=i(xn);zx=s(fh,"The "),qp=a(fh,"A",{href:!0});var Kj=i(qp);Px=s(Kj,"TFBertForSequenceClassification"),Kj.forEach(t),qx=s(fh," forward method, overrides the "),Lf=a(fh,"CODE",{});var Jj=i(Lf);jx=s(Jj,"__call__"),Jj.forEach(t),Cx=s(fh," special method."),fh.forEach(t),Nx=p(Oo),v(pr.$$.fragment,Oo),Ox=p(Oo),v(hr.$$.fragment,Oo),Ax=p(Oo),v(mr.$$.fragment,Oo),Oo.forEach(t),no.forEach(t),nb=p(o),Bn=a(o,"H2",{class:!0});var qk=i(Bn);fr=a(qk,"A",{id:!0,class:!0,href:!0});var Gj=i(fr);Df=a(Gj,"SPAN",{});var Xj=i(Df);v(Ll.$$.fragment,Xj),Xj.forEach(t),Gj.forEach(t),Ix=p(qk),Sf=a(qk,"SPAN",{});var Yj=i(Sf);Lx=s(Yj,"TFBertForMultipleChoice"),Yj.forEach(t),qk.forEach(t),sb=p(o),Ze=a(o,"DIV",{class:!0});var so=i(Ze);v(Dl.$$.fragment,so),Dx=p(so),Uf=a(so,"P",{});var Zj=i(Uf);Sx=s(Zj,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zj.forEach(t),Ux=p(so),Sl=a(so,"P",{});var jk=i(Sl);Wx=s(jk,"This model inherits from "),jp=a(jk,"A",{href:!0});var eC=i(jp);Hx=s(eC,"TFPreTrainedModel"),eC.forEach(t),Rx=s(jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk.forEach(t),Vx=p(so),Ul=a(so,"P",{});var Ck=i(Ul);Qx=s(Ck,"This model is also a "),Wl=a(Ck,"A",{href:!0,rel:!0});var tC=i(Wl);Kx=s(tC,"tf.keras.Model"),tC.forEach(t),Jx=s(Ck,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ck.forEach(t),Gx=p(so),v(ur.$$.fragment,so),Xx=p(so),Ht=a(so,"DIV",{class:!0});var ia=i(Ht);v(Hl.$$.fragment,ia),Yx=p(ia),Mn=a(ia,"P",{});var uh=i(Mn);Zx=s(uh,"The "),Cp=a(uh,"A",{href:!0});var oC=i(Cp);e0=s(oC,"TFBertForMultipleChoice"),oC.forEach(t),t0=s(uh," forward method, overrides the "),Wf=a(uh,"CODE",{});var nC=i(Wf);o0=s(nC,"__call__"),nC.forEach(t),n0=s(uh," special method."),uh.forEach(t),s0=p(ia),v(gr.$$.fragment,ia),r0=p(ia),v(_r.$$.fragment,ia),ia.forEach(t),so.forEach(t),rb=p(o),En=a(o,"H2",{class:!0});var Nk=i(En);br=a(Nk,"A",{id:!0,class:!0,href:!0});var sC=i(br);Hf=a(sC,"SPAN",{});var rC=i(Hf);v(Rl.$$.fragment,rC),rC.forEach(t),sC.forEach(t),a0=p(Nk),Rf=a(Nk,"SPAN",{});var aC=i(Rf);i0=s(aC,"TFBertForTokenClassification"),aC.forEach(t),Nk.forEach(t),ab=p(o),et=a(o,"DIV",{class:!0});var ro=i(et);v(Vl.$$.fragment,ro),l0=p(ro),Vf=a(ro,"P",{});var iC=i(Vf);d0=s(iC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iC.forEach(t),c0=p(ro),Ql=a(ro,"P",{});var Ok=i(Ql);p0=s(Ok,"This model inherits from "),Np=a(Ok,"A",{href:!0});var lC=i(Np);h0=s(lC,"TFPreTrainedModel"),lC.forEach(t),m0=s(Ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok.forEach(t),f0=p(ro),Kl=a(ro,"P",{});var Ak=i(Kl);u0=s(Ak,"This model is also a "),Jl=a(Ak,"A",{href:!0,rel:!0});var dC=i(Jl);g0=s(dC,"tf.keras.Model"),dC.forEach(t),_0=s(Ak,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak.forEach(t),b0=p(ro),v(kr.$$.fragment,ro),k0=p(ro),kt=a(ro,"DIV",{class:!0});var Ao=i(kt);v(Gl.$$.fragment,Ao),y0=p(Ao),zn=a(Ao,"P",{});var gh=i(zn);T0=s(gh,"The "),Op=a(gh,"A",{href:!0});var cC=i(Op);v0=s(cC,"TFBertForTokenClassification"),cC.forEach(t),w0=s(gh," forward method, overrides the "),Qf=a(gh,"CODE",{});var pC=i(Qf);$0=s(pC,"__call__"),pC.forEach(t),F0=s(gh," special method."),gh.forEach(t),x0=p(Ao),v(yr.$$.fragment,Ao),B0=p(Ao),v(Tr.$$.fragment,Ao),M0=p(Ao),v(vr.$$.fragment,Ao),Ao.forEach(t),ro.forEach(t),ib=p(o),Pn=a(o,"H2",{class:!0});var Ik=i(Pn);wr=a(Ik,"A",{id:!0,class:!0,href:!0});var hC=i(wr);Kf=a(hC,"SPAN",{});var mC=i(Kf);v(Xl.$$.fragment,mC),mC.forEach(t),hC.forEach(t),E0=p(Ik),Jf=a(Ik,"SPAN",{});var fC=i(Jf);z0=s(fC,"TFBertForQuestionAnswering"),fC.forEach(t),Ik.forEach(t),lb=p(o),tt=a(o,"DIV",{class:!0});var ao=i(tt);v(Yl.$$.fragment,ao),P0=p(ao),qn=a(ao,"P",{});var _h=i(qn);q0=s(_h,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gf=a(_h,"CODE",{});var uC=i(Gf);j0=s(uC,"span start logits"),uC.forEach(t),C0=s(_h," and "),Xf=a(_h,"CODE",{});var gC=i(Xf);N0=s(gC,"span end logits"),gC.forEach(t),O0=s(_h,")."),_h.forEach(t),A0=p(ao),Zl=a(ao,"P",{});var Lk=i(Zl);I0=s(Lk,"This model inherits from "),Ap=a(Lk,"A",{href:!0});var _C=i(Ap);L0=s(_C,"TFPreTrainedModel"),_C.forEach(t),D0=s(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk.forEach(t),S0=p(ao),ed=a(ao,"P",{});var Dk=i(ed);U0=s(Dk,"This model is also a "),td=a(Dk,"A",{href:!0,rel:!0});var bC=i(td);W0=s(bC,"tf.keras.Model"),bC.forEach(t),H0=s(Dk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk.forEach(t),R0=p(ao),v($r.$$.fragment,ao),V0=p(ao),yt=a(ao,"DIV",{class:!0});var Io=i(yt);v(od.$$.fragment,Io),Q0=p(Io),jn=a(Io,"P",{});var bh=i(jn);K0=s(bh,"The "),Ip=a(bh,"A",{href:!0});var kC=i(Ip);J0=s(kC,"TFBertForQuestionAnswering"),kC.forEach(t),G0=s(bh," forward method, overrides the "),Yf=a(bh,"CODE",{});var yC=i(Yf);X0=s(yC,"__call__"),yC.forEach(t),Y0=s(bh," special method."),bh.forEach(t),Z0=p(Io),v(Fr.$$.fragment,Io),eB=p(Io),v(xr.$$.fragment,Io),tB=p(Io),v(Br.$$.fragment,Io),Io.forEach(t),ao.forEach(t),db=p(o),Cn=a(o,"H2",{class:!0});var Sk=i(Cn);Mr=a(Sk,"A",{id:!0,class:!0,href:!0});var TC=i(Mr);Zf=a(TC,"SPAN",{});var vC=i(Zf);v(nd.$$.fragment,vC),vC.forEach(t),TC.forEach(t),oB=p(Sk),eu=a(Sk,"SPAN",{});var wC=i(eu);nB=s(wC,"FlaxBertModel"),wC.forEach(t),Sk.forEach(t),cb=p(o),Ie=a(o,"DIV",{class:!0});var $t=i(Ie);v(sd.$$.fragment,$t),sB=p($t),tu=a($t,"P",{});var $C=i(tu);rB=s($C,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),$C.forEach(t),aB=p($t),rd=a($t,"P",{});var Uk=i(rd);iB=s(Uk,"This model inherits from "),Lp=a(Uk,"A",{href:!0});var FC=i(Lp);lB=s(FC,"FlaxPreTrainedModel"),FC.forEach(t),dB=s(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uk.forEach(t),cB=p($t),ad=a($t,"P",{});var Wk=i(ad);pB=s(Wk,"This model is also a Flax Linen "),id=a(Wk,"A",{href:!0,rel:!0});var xC=i(id);hB=s(xC,"flax.linen.Module"),xC.forEach(t),mB=s(Wk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wk.forEach(t),fB=p($t),ou=a($t,"P",{});var BC=i(ou);uB=s(BC,"Finally, this model supports inherent JAX features such as:"),BC.forEach(t),gB=p($t),co=a($t,"UL",{});var la=i(co);nu=a(la,"LI",{});var MC=i(nu);ld=a(MC,"A",{href:!0,rel:!0});var EC=i(ld);_B=s(EC,"Just-In-Time (JIT) compilation"),EC.forEach(t),MC.forEach(t),bB=p(la),su=a(la,"LI",{});var zC=i(su);dd=a(zC,"A",{href:!0,rel:!0});var PC=i(dd);kB=s(PC,"Automatic Differentiation"),PC.forEach(t),zC.forEach(t),yB=p(la),ru=a(la,"LI",{});var qC=i(ru);cd=a(qC,"A",{href:!0,rel:!0});var jC=i(cd);TB=s(jC,"Vectorization"),jC.forEach(t),qC.forEach(t),vB=p(la),au=a(la,"LI",{});var CC=i(au);pd=a(CC,"A",{href:!0,rel:!0});var NC=i(pd);wB=s(NC,"Parallelization"),NC.forEach(t),CC.forEach(t),la.forEach(t),$B=p($t),Rt=a($t,"DIV",{class:!0});var da=i(Rt);v(hd.$$.fragment,da),FB=p(da),Nn=a(da,"P",{});var kh=i(Nn);xB=s(kh,"The "),iu=a(kh,"CODE",{});var OC=i(iu);BB=s(OC,"FlaxBertPreTrainedModel"),OC.forEach(t),MB=s(kh," forward method, overrides the "),lu=a(kh,"CODE",{});var AC=i(lu);EB=s(AC,"__call__"),AC.forEach(t),zB=s(kh," special method."),kh.forEach(t),PB=p(da),v(Er.$$.fragment,da),qB=p(da),v(zr.$$.fragment,da),da.forEach(t),$t.forEach(t),pb=p(o),On=a(o,"H2",{class:!0});var Hk=i(On);Pr=a(Hk,"A",{id:!0,class:!0,href:!0});var IC=i(Pr);du=a(IC,"SPAN",{});var LC=i(du);v(md.$$.fragment,LC),LC.forEach(t),IC.forEach(t),jB=p(Hk),cu=a(Hk,"SPAN",{});var DC=i(cu);CB=s(DC,"FlaxBertForPreTraining"),DC.forEach(t),Hk.forEach(t),hb=p(o),Le=a(o,"DIV",{class:!0});var Ft=i(Le);v(fd.$$.fragment,Ft),NB=p(Ft),An=a(Ft,"P",{});var yh=i(An);OB=s(yh,"Bert Model with two heads on top as done during the pretraining: a "),pu=a(yh,"CODE",{});var SC=i(pu);AB=s(SC,"masked language modeling"),SC.forEach(t),IB=s(yh," head and a "),hu=a(yh,"CODE",{});var UC=i(hu);LB=s(UC,"next sentence prediction (classification)"),UC.forEach(t),DB=s(yh," head."),yh.forEach(t),SB=p(Ft),ud=a(Ft,"P",{});var Rk=i(ud);UB=s(Rk,"This model inherits from "),Dp=a(Rk,"A",{href:!0});var WC=i(Dp);WB=s(WC,"FlaxPreTrainedModel"),WC.forEach(t),HB=s(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rk.forEach(t),RB=p(Ft),gd=a(Ft,"P",{});var Vk=i(gd);VB=s(Vk,"This model is also a Flax Linen "),_d=a(Vk,"A",{href:!0,rel:!0});var HC=i(_d);QB=s(HC,"flax.linen.Module"),HC.forEach(t),KB=s(Vk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vk.forEach(t),JB=p(Ft),mu=a(Ft,"P",{});var RC=i(mu);GB=s(RC,"Finally, this model supports inherent JAX features such as:"),RC.forEach(t),XB=p(Ft),po=a(Ft,"UL",{});var ca=i(po);fu=a(ca,"LI",{});var VC=i(fu);bd=a(VC,"A",{href:!0,rel:!0});var QC=i(bd);YB=s(QC,"Just-In-Time (JIT) compilation"),QC.forEach(t),VC.forEach(t),ZB=p(ca),uu=a(ca,"LI",{});var KC=i(uu);kd=a(KC,"A",{href:!0,rel:!0});var JC=i(kd);eM=s(JC,"Automatic Differentiation"),JC.forEach(t),KC.forEach(t),tM=p(ca),gu=a(ca,"LI",{});var GC=i(gu);yd=a(GC,"A",{href:!0,rel:!0});var XC=i(yd);oM=s(XC,"Vectorization"),XC.forEach(t),GC.forEach(t),nM=p(ca),_u=a(ca,"LI",{});var YC=i(_u);Td=a(YC,"A",{href:!0,rel:!0});var ZC=i(Td);sM=s(ZC,"Parallelization"),ZC.forEach(t),YC.forEach(t),ca.forEach(t),rM=p(Ft),Vt=a(Ft,"DIV",{class:!0});var pa=i(Vt);v(vd.$$.fragment,pa),aM=p(pa),In=a(pa,"P",{});var Th=i(In);iM=s(Th,"The "),bu=a(Th,"CODE",{});var e3=i(bu);lM=s(e3,"FlaxBertPreTrainedModel"),e3.forEach(t),dM=s(Th," forward method, overrides the "),ku=a(Th,"CODE",{});var t3=i(ku);cM=s(t3,"__call__"),t3.forEach(t),pM=s(Th," special method."),Th.forEach(t),hM=p(pa),v(qr.$$.fragment,pa),mM=p(pa),v(jr.$$.fragment,pa),pa.forEach(t),Ft.forEach(t),mb=p(o),Ln=a(o,"H2",{class:!0});var Qk=i(Ln);Cr=a(Qk,"A",{id:!0,class:!0,href:!0});var o3=i(Cr);yu=a(o3,"SPAN",{});var n3=i(yu);v(wd.$$.fragment,n3),n3.forEach(t),o3.forEach(t),fM=p(Qk),Tu=a(Qk,"SPAN",{});var s3=i(Tu);uM=s(s3,"FlaxBertForMaskedLM"),s3.forEach(t),Qk.forEach(t),fb=p(o),De=a(o,"DIV",{class:!0});var xt=i(De);v($d.$$.fragment,xt),gM=p(xt),Fd=a(xt,"P",{});var Kk=i(Fd);_M=s(Kk,"Bert Model with a "),vu=a(Kk,"CODE",{});var r3=i(vu);bM=s(r3,"language modeling"),r3.forEach(t),kM=s(Kk," head on top."),Kk.forEach(t),yM=p(xt),xd=a(xt,"P",{});var Jk=i(xd);TM=s(Jk,"This model inherits from "),Sp=a(Jk,"A",{href:!0});var a3=i(Sp);vM=s(a3,"FlaxPreTrainedModel"),a3.forEach(t),wM=s(Jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jk.forEach(t),$M=p(xt),Bd=a(xt,"P",{});var Gk=i(Bd);FM=s(Gk,"This model is also a Flax Linen "),Md=a(Gk,"A",{href:!0,rel:!0});var i3=i(Md);xM=s(i3,"flax.linen.Module"),i3.forEach(t),BM=s(Gk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gk.forEach(t),MM=p(xt),wu=a(xt,"P",{});var l3=i(wu);EM=s(l3,"Finally, this model supports inherent JAX features such as:"),l3.forEach(t),zM=p(xt),ho=a(xt,"UL",{});var ha=i(ho);$u=a(ha,"LI",{});var d3=i($u);Ed=a(d3,"A",{href:!0,rel:!0});var c3=i(Ed);PM=s(c3,"Just-In-Time (JIT) compilation"),c3.forEach(t),d3.forEach(t),qM=p(ha),Fu=a(ha,"LI",{});var p3=i(Fu);zd=a(p3,"A",{href:!0,rel:!0});var h3=i(zd);jM=s(h3,"Automatic Differentiation"),h3.forEach(t),p3.forEach(t),CM=p(ha),xu=a(ha,"LI",{});var m3=i(xu);Pd=a(m3,"A",{href:!0,rel:!0});var f3=i(Pd);NM=s(f3,"Vectorization"),f3.forEach(t),m3.forEach(t),OM=p(ha),Bu=a(ha,"LI",{});var u3=i(Bu);qd=a(u3,"A",{href:!0,rel:!0});var g3=i(qd);AM=s(g3,"Parallelization"),g3.forEach(t),u3.forEach(t),ha.forEach(t),IM=p(xt),Qt=a(xt,"DIV",{class:!0});var ma=i(Qt);v(jd.$$.fragment,ma),LM=p(ma),Dn=a(ma,"P",{});var vh=i(Dn);DM=s(vh,"The "),Mu=a(vh,"CODE",{});var _3=i(Mu);SM=s(_3,"FlaxBertPreTrainedModel"),_3.forEach(t),UM=s(vh," forward method, overrides the "),Eu=a(vh,"CODE",{});var b3=i(Eu);WM=s(b3,"__call__"),b3.forEach(t),HM=s(vh," special method."),vh.forEach(t),RM=p(ma),v(Nr.$$.fragment,ma),VM=p(ma),v(Or.$$.fragment,ma),ma.forEach(t),xt.forEach(t),ub=p(o),Sn=a(o,"H2",{class:!0});var Xk=i(Sn);Ar=a(Xk,"A",{id:!0,class:!0,href:!0});var k3=i(Ar);zu=a(k3,"SPAN",{});var y3=i(zu);v(Cd.$$.fragment,y3),y3.forEach(t),k3.forEach(t),QM=p(Xk),Pu=a(Xk,"SPAN",{});var T3=i(Pu);KM=s(T3,"FlaxBertForNextSentencePrediction"),T3.forEach(t),Xk.forEach(t),gb=p(o),Se=a(o,"DIV",{class:!0});var Bt=i(Se);v(Nd.$$.fragment,Bt),JM=p(Bt),Od=a(Bt,"P",{});var Yk=i(Od);GM=s(Yk,"Bert Model with a "),qu=a(Yk,"CODE",{});var v3=i(qu);XM=s(v3,"next sentence prediction (classification)"),v3.forEach(t),YM=s(Yk," head on top."),Yk.forEach(t),ZM=p(Bt),Ad=a(Bt,"P",{});var Zk=i(Ad);eE=s(Zk,"This model inherits from "),Up=a(Zk,"A",{href:!0});var w3=i(Up);tE=s(w3,"FlaxPreTrainedModel"),w3.forEach(t),oE=s(Zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zk.forEach(t),nE=p(Bt),Id=a(Bt,"P",{});var ey=i(Id);sE=s(ey,"This model is also a Flax Linen "),Ld=a(ey,"A",{href:!0,rel:!0});var $3=i(Ld);rE=s($3,"flax.linen.Module"),$3.forEach(t),aE=s(ey,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ey.forEach(t),iE=p(Bt),ju=a(Bt,"P",{});var F3=i(ju);lE=s(F3,"Finally, this model supports inherent JAX features such as:"),F3.forEach(t),dE=p(Bt),mo=a(Bt,"UL",{});var fa=i(mo);Cu=a(fa,"LI",{});var x3=i(Cu);Dd=a(x3,"A",{href:!0,rel:!0});var B3=i(Dd);cE=s(B3,"Just-In-Time (JIT) compilation"),B3.forEach(t),x3.forEach(t),pE=p(fa),Nu=a(fa,"LI",{});var M3=i(Nu);Sd=a(M3,"A",{href:!0,rel:!0});var E3=i(Sd);hE=s(E3,"Automatic Differentiation"),E3.forEach(t),M3.forEach(t),mE=p(fa),Ou=a(fa,"LI",{});var z3=i(Ou);Ud=a(z3,"A",{href:!0,rel:!0});var P3=i(Ud);fE=s(P3,"Vectorization"),P3.forEach(t),z3.forEach(t),uE=p(fa),Au=a(fa,"LI",{});var q3=i(Au);Wd=a(q3,"A",{href:!0,rel:!0});var j3=i(Wd);gE=s(j3,"Parallelization"),j3.forEach(t),q3.forEach(t),fa.forEach(t),_E=p(Bt),Kt=a(Bt,"DIV",{class:!0});var ua=i(Kt);v(Hd.$$.fragment,ua),bE=p(ua),Un=a(ua,"P",{});var wh=i(Un);kE=s(wh,"The "),Iu=a(wh,"CODE",{});var C3=i(Iu);yE=s(C3,"FlaxBertPreTrainedModel"),C3.forEach(t),TE=s(wh," forward method, overrides the "),Lu=a(wh,"CODE",{});var N3=i(Lu);vE=s(N3,"__call__"),N3.forEach(t),wE=s(wh," special method."),wh.forEach(t),$E=p(ua),v(Ir.$$.fragment,ua),FE=p(ua),v(Lr.$$.fragment,ua),ua.forEach(t),Bt.forEach(t),_b=p(o),Wn=a(o,"H2",{class:!0});var ty=i(Wn);Dr=a(ty,"A",{id:!0,class:!0,href:!0});var O3=i(Dr);Du=a(O3,"SPAN",{});var A3=i(Du);v(Rd.$$.fragment,A3),A3.forEach(t),O3.forEach(t),xE=p(ty),Su=a(ty,"SPAN",{});var I3=i(Su);BE=s(I3,"FlaxBertForSequenceClassification"),I3.forEach(t),ty.forEach(t),bb=p(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);v(Vd.$$.fragment,Mt),ME=p(Mt),Uu=a(Mt,"P",{});var L3=i(Uu);EE=s(L3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),L3.forEach(t),zE=p(Mt),Qd=a(Mt,"P",{});var oy=i(Qd);PE=s(oy,"This model inherits from "),Wp=a(oy,"A",{href:!0});var D3=i(Wp);qE=s(D3,"FlaxPreTrainedModel"),D3.forEach(t),jE=s(oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oy.forEach(t),CE=p(Mt),Kd=a(Mt,"P",{});var ny=i(Kd);NE=s(ny,"This model is also a Flax Linen "),Jd=a(ny,"A",{href:!0,rel:!0});var S3=i(Jd);OE=s(S3,"flax.linen.Module"),S3.forEach(t),AE=s(ny,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ny.forEach(t),IE=p(Mt),Wu=a(Mt,"P",{});var U3=i(Wu);LE=s(U3,"Finally, this model supports inherent JAX features such as:"),U3.forEach(t),DE=p(Mt),fo=a(Mt,"UL",{});var ga=i(fo);Hu=a(ga,"LI",{});var W3=i(Hu);Gd=a(W3,"A",{href:!0,rel:!0});var H3=i(Gd);SE=s(H3,"Just-In-Time (JIT) compilation"),H3.forEach(t),W3.forEach(t),UE=p(ga),Ru=a(ga,"LI",{});var R3=i(Ru);Xd=a(R3,"A",{href:!0,rel:!0});var V3=i(Xd);WE=s(V3,"Automatic Differentiation"),V3.forEach(t),R3.forEach(t),HE=p(ga),Vu=a(ga,"LI",{});var Q3=i(Vu);Yd=a(Q3,"A",{href:!0,rel:!0});var K3=i(Yd);RE=s(K3,"Vectorization"),K3.forEach(t),Q3.forEach(t),VE=p(ga),Qu=a(ga,"LI",{});var J3=i(Qu);Zd=a(J3,"A",{href:!0,rel:!0});var G3=i(Zd);QE=s(G3,"Parallelization"),G3.forEach(t),J3.forEach(t),ga.forEach(t),KE=p(Mt),Jt=a(Mt,"DIV",{class:!0});var _a=i(Jt);v(ec.$$.fragment,_a),JE=p(_a),Hn=a(_a,"P",{});var $h=i(Hn);GE=s($h,"The "),Ku=a($h,"CODE",{});var X3=i(Ku);XE=s(X3,"FlaxBertPreTrainedModel"),X3.forEach(t),YE=s($h," forward method, overrides the "),Ju=a($h,"CODE",{});var Y3=i(Ju);ZE=s(Y3,"__call__"),Y3.forEach(t),ez=s($h," special method."),$h.forEach(t),tz=p(_a),v(Sr.$$.fragment,_a),oz=p(_a),v(Ur.$$.fragment,_a),_a.forEach(t),Mt.forEach(t),kb=p(o),Rn=a(o,"H2",{class:!0});var sy=i(Rn);Wr=a(sy,"A",{id:!0,class:!0,href:!0});var Z3=i(Wr);Gu=a(Z3,"SPAN",{});var e9=i(Gu);v(tc.$$.fragment,e9),e9.forEach(t),Z3.forEach(t),nz=p(sy),Xu=a(sy,"SPAN",{});var t9=i(Xu);sz=s(t9,"FlaxBertForMultipleChoice"),t9.forEach(t),sy.forEach(t),yb=p(o),We=a(o,"DIV",{class:!0});var Et=i(We);v(oc.$$.fragment,Et),rz=p(Et),Yu=a(Et,"P",{});var o9=i(Yu);az=s(o9,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),o9.forEach(t),iz=p(Et),nc=a(Et,"P",{});var ry=i(nc);lz=s(ry,"This model inherits from "),Hp=a(ry,"A",{href:!0});var n9=i(Hp);dz=s(n9,"FlaxPreTrainedModel"),n9.forEach(t),cz=s(ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ry.forEach(t),pz=p(Et),sc=a(Et,"P",{});var ay=i(sc);hz=s(ay,"This model is also a Flax Linen "),rc=a(ay,"A",{href:!0,rel:!0});var s9=i(rc);mz=s(s9,"flax.linen.Module"),s9.forEach(t),fz=s(ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ay.forEach(t),uz=p(Et),Zu=a(Et,"P",{});var r9=i(Zu);gz=s(r9,"Finally, this model supports inherent JAX features such as:"),r9.forEach(t),_z=p(Et),uo=a(Et,"UL",{});var ba=i(uo);eg=a(ba,"LI",{});var a9=i(eg);ac=a(a9,"A",{href:!0,rel:!0});var i9=i(ac);bz=s(i9,"Just-In-Time (JIT) compilation"),i9.forEach(t),a9.forEach(t),kz=p(ba),tg=a(ba,"LI",{});var l9=i(tg);ic=a(l9,"A",{href:!0,rel:!0});var d9=i(ic);yz=s(d9,"Automatic Differentiation"),d9.forEach(t),l9.forEach(t),Tz=p(ba),og=a(ba,"LI",{});var c9=i(og);lc=a(c9,"A",{href:!0,rel:!0});var p9=i(lc);vz=s(p9,"Vectorization"),p9.forEach(t),c9.forEach(t),wz=p(ba),ng=a(ba,"LI",{});var h9=i(ng);dc=a(h9,"A",{href:!0,rel:!0});var m9=i(dc);$z=s(m9,"Parallelization"),m9.forEach(t),h9.forEach(t),ba.forEach(t),Fz=p(Et),Gt=a(Et,"DIV",{class:!0});var ka=i(Gt);v(cc.$$.fragment,ka),xz=p(ka),Vn=a(ka,"P",{});var Fh=i(Vn);Bz=s(Fh,"The "),sg=a(Fh,"CODE",{});var f9=i(sg);Mz=s(f9,"FlaxBertPreTrainedModel"),f9.forEach(t),Ez=s(Fh," forward method, overrides the "),rg=a(Fh,"CODE",{});var u9=i(rg);zz=s(u9,"__call__"),u9.forEach(t),Pz=s(Fh," special method."),Fh.forEach(t),qz=p(ka),v(Hr.$$.fragment,ka),jz=p(ka),v(Rr.$$.fragment,ka),ka.forEach(t),Et.forEach(t),Tb=p(o),Qn=a(o,"H2",{class:!0});var iy=i(Qn);Vr=a(iy,"A",{id:!0,class:!0,href:!0});var g9=i(Vr);ag=a(g9,"SPAN",{});var _9=i(ag);v(pc.$$.fragment,_9),_9.forEach(t),g9.forEach(t),Cz=p(iy),ig=a(iy,"SPAN",{});var b9=i(ig);Nz=s(b9,"FlaxBertForTokenClassification"),b9.forEach(t),iy.forEach(t),vb=p(o),He=a(o,"DIV",{class:!0});var zt=i(He);v(hc.$$.fragment,zt),Oz=p(zt),lg=a(zt,"P",{});var k9=i(lg);Az=s(k9,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),k9.forEach(t),Iz=p(zt),mc=a(zt,"P",{});var ly=i(mc);Lz=s(ly,"This model inherits from "),Rp=a(ly,"A",{href:!0});var y9=i(Rp);Dz=s(y9,"FlaxPreTrainedModel"),y9.forEach(t),Sz=s(ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ly.forEach(t),Uz=p(zt),fc=a(zt,"P",{});var dy=i(fc);Wz=s(dy,"This model is also a Flax Linen "),uc=a(dy,"A",{href:!0,rel:!0});var T9=i(uc);Hz=s(T9,"flax.linen.Module"),T9.forEach(t),Rz=s(dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dy.forEach(t),Vz=p(zt),dg=a(zt,"P",{});var v9=i(dg);Qz=s(v9,"Finally, this model supports inherent JAX features such as:"),v9.forEach(t),Kz=p(zt),go=a(zt,"UL",{});var ya=i(go);cg=a(ya,"LI",{});var w9=i(cg);gc=a(w9,"A",{href:!0,rel:!0});var $9=i(gc);Jz=s($9,"Just-In-Time (JIT) compilation"),$9.forEach(t),w9.forEach(t),Gz=p(ya),pg=a(ya,"LI",{});var F9=i(pg);_c=a(F9,"A",{href:!0,rel:!0});var x9=i(_c);Xz=s(x9,"Automatic Differentiation"),x9.forEach(t),F9.forEach(t),Yz=p(ya),hg=a(ya,"LI",{});var B9=i(hg);bc=a(B9,"A",{href:!0,rel:!0});var M9=i(bc);Zz=s(M9,"Vectorization"),M9.forEach(t),B9.forEach(t),e4=p(ya),mg=a(ya,"LI",{});var E9=i(mg);kc=a(E9,"A",{href:!0,rel:!0});var z9=i(kc);t4=s(z9,"Parallelization"),z9.forEach(t),E9.forEach(t),ya.forEach(t),o4=p(zt),Xt=a(zt,"DIV",{class:!0});var Ta=i(Xt);v(yc.$$.fragment,Ta),n4=p(Ta),Kn=a(Ta,"P",{});var xh=i(Kn);s4=s(xh,"The "),fg=a(xh,"CODE",{});var P9=i(fg);r4=s(P9,"FlaxBertPreTrainedModel"),P9.forEach(t),a4=s(xh," forward method, overrides the "),ug=a(xh,"CODE",{});var q9=i(ug);i4=s(q9,"__call__"),q9.forEach(t),l4=s(xh," special method."),xh.forEach(t),d4=p(Ta),v(Qr.$$.fragment,Ta),c4=p(Ta),v(Kr.$$.fragment,Ta),Ta.forEach(t),zt.forEach(t),wb=p(o),Jn=a(o,"H2",{class:!0});var cy=i(Jn);Jr=a(cy,"A",{id:!0,class:!0,href:!0});var j9=i(Jr);gg=a(j9,"SPAN",{});var C9=i(gg);v(Tc.$$.fragment,C9),C9.forEach(t),j9.forEach(t),p4=p(cy),_g=a(cy,"SPAN",{});var N9=i(_g);h4=s(N9,"FlaxBertForQuestionAnswering"),N9.forEach(t),cy.forEach(t),$b=p(o),Re=a(o,"DIV",{class:!0});var Pt=i(Re);v(vc.$$.fragment,Pt),m4=p(Pt),Gn=a(Pt,"P",{});var Bh=i(Gn);f4=s(Bh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=a(Bh,"CODE",{});var O9=i(bg);u4=s(O9,"span start logits"),O9.forEach(t),g4=s(Bh," and "),kg=a(Bh,"CODE",{});var A9=i(kg);_4=s(A9,"span end logits"),A9.forEach(t),b4=s(Bh,")."),Bh.forEach(t),k4=p(Pt),wc=a(Pt,"P",{});var py=i(wc);y4=s(py,"This model inherits from "),Vp=a(py,"A",{href:!0});var I9=i(Vp);T4=s(I9,"FlaxPreTrainedModel"),I9.forEach(t),v4=s(py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),py.forEach(t),w4=p(Pt),$c=a(Pt,"P",{});var hy=i($c);$4=s(hy,"This model is also a Flax Linen "),Fc=a(hy,"A",{href:!0,rel:!0});var L9=i(Fc);F4=s(L9,"flax.linen.Module"),L9.forEach(t),x4=s(hy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hy.forEach(t),B4=p(Pt),yg=a(Pt,"P",{});var D9=i(yg);M4=s(D9,"Finally, this model supports inherent JAX features such as:"),D9.forEach(t),E4=p(Pt),_o=a(Pt,"UL",{});var va=i(_o);Tg=a(va,"LI",{});var S9=i(Tg);xc=a(S9,"A",{href:!0,rel:!0});var U9=i(xc);z4=s(U9,"Just-In-Time (JIT) compilation"),U9.forEach(t),S9.forEach(t),P4=p(va),vg=a(va,"LI",{});var W9=i(vg);Bc=a(W9,"A",{href:!0,rel:!0});var H9=i(Bc);q4=s(H9,"Automatic Differentiation"),H9.forEach(t),W9.forEach(t),j4=p(va),wg=a(va,"LI",{});var R9=i(wg);Mc=a(R9,"A",{href:!0,rel:!0});var V9=i(Mc);C4=s(V9,"Vectorization"),V9.forEach(t),R9.forEach(t),N4=p(va),$g=a(va,"LI",{});var Q9=i($g);Ec=a(Q9,"A",{href:!0,rel:!0});var K9=i(Ec);O4=s(K9,"Parallelization"),K9.forEach(t),Q9.forEach(t),va.forEach(t),A4=p(Pt),Yt=a(Pt,"DIV",{class:!0});var wa=i(Yt);v(zc.$$.fragment,wa),I4=p(wa),Xn=a(wa,"P",{});var Mh=i(Xn);L4=s(Mh,"The "),Fg=a(Mh,"CODE",{});var J9=i(Fg);D4=s(J9,"FlaxBertPreTrainedModel"),J9.forEach(t),S4=s(Mh," forward method, overrides the "),xg=a(Mh,"CODE",{});var G9=i(xg);U4=s(G9,"__call__"),G9.forEach(t),W4=s(Mh," special method."),Mh.forEach(t),H4=p(wa),v(Gr.$$.fragment,wa),R4=p(wa),v(Xr.$$.fragment,wa),wa.forEach(t),Pt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(TN)),u(m,"id","bert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ne,"href","https://arxiv.org/abs/1810.04805"),u(ne,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u(we,"class","relative group"),u(Rc,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertModel"),u(Vc,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertModel"),u(Fa,"href","https://huggingface.co/bert-base-uncased"),u(Fa,"rel","nofollow"),u(Qc,"href","/docs/transformers/pr_16966/en/main_classes/configuration#transformers.PretrainedConfig"),u(Kc,"href","/docs/transformers/pr_16966/en/main_classes/configuration#transformers.PretrainedConfig"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.BertTokenizer"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.BertTokenizer"),u(Do,"class","relative group"),u(Jc,"href","/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yc,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.BertTokenizerFast"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.BertTokenizerFast"),u(Uo,"class","relative group"),u(Zc,"href","/docs/transformers/pr_16966/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ho,"class","relative group"),u(op,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForPreTraining"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(np,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForPreTraining"),u(cs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.BertModel"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.BertModel"),u(Qo,"class","relative group"),u(rp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ei,"rel","nofollow"),u(oi,"href","https://arxiv.org/abs/1706.03762"),u(oi,"rel","nofollow"),u(ap,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertModel"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.BertForPreTraining"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.BertForPreTraining"),u(Jo,"class","relative group"),u(ip,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(li,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(li,"rel","nofollow"),u(lp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForPreTraining"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertLMHeadModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertLMHeadModel"),u(Yo,"class","relative group"),u(dp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ui,"rel","nofollow"),u(cp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertLMHeadModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.BertForMaskedLM"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.BertForMaskedLM"),u(en,"class","relative group"),u(pp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vi,"rel","nofollow"),u(hp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForMaskedLM"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.BertForNextSentencePrediction"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.BertForNextSentencePrediction"),u(on,"class","relative group"),u(mp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ei,"rel","nofollow"),u(fp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.BertForSequenceClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.BertForSequenceClassification"),u(sn,"class","relative group"),u(up,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(gp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForMultipleChoice"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForMultipleChoice"),u(an,"class","relative group"),u(_p,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Si,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Si,"rel","nofollow"),u(bp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.BertForTokenClassification"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.BertForTokenClassification"),u(dn,"class","relative group"),u(kp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qi,"rel","nofollow"),u(yp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForTokenClassification"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.BertForQuestionAnswering"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.BertForQuestionAnswering"),u(pn,"class","relative group"),u(Tp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.PreTrainedModel"),u(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Zi,"rel","nofollow"),u(vp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.TFBertModel"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.TFBertModel"),u(fn,"class","relative group"),u(wp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(rl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(rl,"rel","nofollow"),u($p,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.TFBertForPreTraining"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.TFBertForPreTraining"),u(gn,"class","relative group"),u(Fp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(pl,"rel","nofollow"),u(xp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ys,"id","transformers.TFBertLMHeadModel"),u(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ys,"href","#transformers.TFBertLMHeadModel"),u(kn,"class","relative group"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForMaskedLM"),u(Tn,"class","relative group"),u(Bp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u($l,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($l,"rel","nofollow"),u(Mp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.TFBertForNextSentencePrediction"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.TFBertForNextSentencePrediction"),u(wn,"class","relative group"),u(Ep,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pl,"rel","nofollow"),u(zp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFBertForSequenceClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFBertForSequenceClassification"),u(Fn,"class","relative group"),u(Pp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(qp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.TFBertForMultipleChoice"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.TFBertForMultipleChoice"),u(Bn,"class","relative group"),u(jp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wl,"rel","nofollow"),u(Cp,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.TFBertForTokenClassification"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.TFBertForTokenClassification"),u(En,"class","relative group"),u(Np,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(Jl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Jl,"rel","nofollow"),u(Op,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wr,"id","transformers.TFBertForQuestionAnswering"),u(wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wr,"href","#transformers.TFBertForQuestionAnswering"),u(Pn,"class","relative group"),u(Ap,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.TFPreTrainedModel"),u(td,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(td,"rel","nofollow"),u(Ip,"href","/docs/transformers/pr_16966/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxBertModel"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxBertModel"),u(Cn,"class","relative group"),u(Lp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(id,"rel","nofollow"),u(ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ld,"rel","nofollow"),u(dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(dd,"rel","nofollow"),u(cd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(cd,"rel","nofollow"),u(pd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(pd,"rel","nofollow"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxBertForPreTraining"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxBertForPreTraining"),u(On,"class","relative group"),u(Dp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(_d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(_d,"rel","nofollow"),u(bd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kd,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(yd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Td,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertForMaskedLM"),u(Ln,"class","relative group"),u(Sp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForNextSentencePrediction"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Sn,"class","relative group"),u(Up,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ld,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ud,"rel","nofollow"),u(Wd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForSequenceClassification"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForSequenceClassification"),u(Wn,"class","relative group"),u(Wp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMultipleChoice"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMultipleChoice"),u(Rn,"class","relative group"),u(Hp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vr,"id","transformers.FlaxBertForTokenClassification"),u(Vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vr,"href","#transformers.FlaxBertForTokenClassification"),u(Qn,"class","relative group"),u(Rp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForQuestionAnswering"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForQuestionAnswering"),u(Jn,"class","relative group"),u(Vp,"href","/docs/transformers/pr_16966/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(xc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ec,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,h,k),e(h,m),e(m,g),w(l,g,null),e(h,f),e(h,M),e(M,be),b(o,X,k),b(o,z,k),e(z,ee),e(ee,L),w(oe,L,null),e(z,ke),e(z,D),e(D,ye),b(o,me,k),b(o,J,k),e(J,O),e(J,ne),e(ne,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,Te),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,V),b(o,_e,k),b(o,te,k),e(te,N),e(N,ve),e(te,Q),e(te,pe),e(pe,y),b(o,E,k),b(o,K,k),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),b(o,W,k),b(o,we,k),e(we,Fe),e(Fe,U),w(Ee,U,null),e(we,je),e(we,he),e(he,Ce),b(o,b_,k),b(o,qt,k),w($a,qt,null),e(qt,my),e(qt,io),e(io,fy),e(io,Rc),e(Rc,uy),e(io,gy),e(io,Vc),e(Vc,_y),e(io,by),e(io,Fa),e(Fa,ky),e(io,yy),e(qt,Ty),e(qt,Lo),e(Lo,vy),e(Lo,Qc),e(Qc,wy),e(Lo,$y),e(Lo,Kc),e(Kc,Fy),e(Lo,xy),e(qt,By),w(ns,qt,null),b(o,k_,k),b(o,Do,k),e(Do,ss),e(ss,Eh),w(xa,Eh,null),e(Do,My),e(Do,zh),e(zh,Ey),b(o,y_,k),b(o,Ne,k),w(Ba,Ne,null),e(Ne,zy),e(Ne,Ph),e(Ph,Py),e(Ne,qy),e(Ne,Ma),e(Ma,jy),e(Ma,Jc),e(Jc,Cy),e(Ma,Ny),e(Ne,Oy),e(Ne,To),w(Ea,To,null),e(To,Ay),e(To,qh),e(qh,Iy),e(To,Ly),e(To,za),e(za,Gc),e(Gc,Dy),e(Gc,jh),e(jh,Sy),e(za,Uy),e(za,Xc),e(Xc,Wy),e(Xc,Ch),e(Ch,Hy),e(Ne,Ry),e(Ne,rs),w(Pa,rs,null),e(rs,Vy),e(rs,qa),e(qa,Qy),e(qa,Nh),e(Nh,Ky),e(qa,Jy),e(Ne,Gy),e(Ne,Ct),w(ja,Ct,null),e(Ct,Xy),e(Ct,Oh),e(Oh,Yy),e(Ct,Zy),w(as,Ct,null),e(Ct,eT),e(Ct,So),e(So,tT),e(So,Ah),e(Ah,oT),e(So,nT),e(So,Ih),e(Ih,sT),e(So,rT),e(Ne,aT),e(Ne,Yc),w(Ca,Yc,null),b(o,T_,k),b(o,Uo,k),e(Uo,is),e(is,Lh),w(Na,Lh,null),e(Uo,iT),e(Uo,Dh),e(Dh,lT),b(o,v_,k),b(o,st,k),w(Oa,st,null),e(st,dT),e(st,Aa),e(Aa,cT),e(Aa,Sh),e(Sh,pT),e(Aa,hT),e(st,mT),e(st,Ia),e(Ia,fT),e(Ia,Zc),e(Zc,uT),e(Ia,gT),e(st,_T),e(st,vo),w(La,vo,null),e(vo,bT),e(vo,Uh),e(Uh,kT),e(vo,yT),e(vo,Da),e(Da,ep),e(ep,TT),e(ep,Wh),e(Wh,vT),e(Da,wT),e(Da,tp),e(tp,$T),e(tp,Hh),e(Hh,FT),e(st,xT),e(st,Nt),w(Sa,Nt,null),e(Nt,BT),e(Nt,Rh),e(Rh,MT),e(Nt,ET),w(ls,Nt,null),e(Nt,zT),e(Nt,Wo),e(Wo,PT),e(Wo,Vh),e(Vh,qT),e(Wo,jT),e(Wo,Qh),e(Qh,CT),e(Wo,NT),b(o,w_,k),b(o,Ho,k),e(Ho,ds),e(ds,Kh),w(Ua,Kh,null),e(Ho,OT),e(Ho,Jh),e(Jh,AT),b(o,$_,k),b(o,Ro,k),w(Wa,Ro,null),e(Ro,IT),e(Ro,Ha),e(Ha,LT),e(Ha,op),e(op,DT),e(Ha,ST),b(o,F_,k),b(o,Vo,k),w(Ra,Vo,null),e(Vo,UT),e(Vo,Va),e(Va,WT),e(Va,np),e(np,HT),e(Va,RT),b(o,x_,k),b(o,lo,k),w(Qa,lo,null),e(lo,VT),e(lo,Ka),e(Ka,QT),e(Ka,sp),e(sp,KT),e(Ka,JT),e(lo,GT),e(lo,cs),w(Ja,cs,null),e(cs,XT),e(cs,Gh),e(Gh,YT),b(o,B_,k),b(o,Qo,k),e(Qo,ps),e(ps,Xh),w(Ga,Xh,null),e(Qo,ZT),e(Qo,Yh),e(Yh,ev),b(o,M_,k),b(o,Oe,k),w(Xa,Oe,null),e(Oe,tv),e(Oe,Zh),e(Zh,ov),e(Oe,nv),e(Oe,Ya),e(Ya,sv),e(Ya,rp),e(rp,rv),e(Ya,av),e(Oe,iv),e(Oe,Za),e(Za,lv),e(Za,ei),e(ei,dv),e(Za,cv),e(Oe,pv),e(Oe,ti),e(ti,hv),e(ti,oi),e(oi,mv),e(ti,fv),e(Oe,uv),e(Oe,Qe),e(Qe,gv),e(Qe,em),e(em,_v),e(Qe,bv),e(Qe,tm),e(tm,kv),e(Qe,yv),e(Qe,om),e(om,Tv),e(Qe,vv),e(Qe,nm),e(nm,wv),e(Qe,$v),e(Qe,sm),e(sm,Fv),e(Qe,xv),e(Qe,rm),e(rm,Bv),e(Qe,Mv),e(Oe,Ev),e(Oe,Ot),w(ni,Ot,null),e(Ot,zv),e(Ot,Ko),e(Ko,Pv),e(Ko,ap),e(ap,qv),e(Ko,jv),e(Ko,am),e(am,Cv),e(Ko,Nv),e(Ot,Ov),w(hs,Ot,null),e(Ot,Av),w(ms,Ot,null),b(o,E_,k),b(o,Jo,k),e(Jo,fs),e(fs,im),w(si,im,null),e(Jo,Iv),e(Jo,lm),e(lm,Lv),b(o,z_,k),b(o,rt,k),w(ri,rt,null),e(rt,Dv),e(rt,Go),e(Go,Sv),e(Go,dm),e(dm,Uv),e(Go,Wv),e(Go,cm),e(cm,Hv),e(Go,Rv),e(rt,Vv),e(rt,ai),e(ai,Qv),e(ai,ip),e(ip,Kv),e(ai,Jv),e(rt,Gv),e(rt,ii),e(ii,Xv),e(ii,li),e(li,Yv),e(ii,Zv),e(rt,e1),e(rt,At),w(di,At,null),e(At,t1),e(At,Xo),e(Xo,o1),e(Xo,lp),e(lp,n1),e(Xo,s1),e(Xo,pm),e(pm,r1),e(Xo,a1),e(At,i1),w(us,At,null),e(At,l1),w(gs,At,null),b(o,P_,k),b(o,Yo,k),e(Yo,_s),e(_s,hm),w(ci,hm,null),e(Yo,d1),e(Yo,mm),e(mm,c1),b(o,q_,k),b(o,at,k),w(pi,at,null),e(at,p1),e(at,hi),e(hi,h1),e(hi,fm),e(fm,m1),e(hi,f1),e(at,u1),e(at,mi),e(mi,g1),e(mi,dp),e(dp,_1),e(mi,b1),e(at,k1),e(at,fi),e(fi,y1),e(fi,ui),e(ui,T1),e(fi,v1),e(at,w1),e(at,It),w(gi,It,null),e(It,$1),e(It,Zo),e(Zo,F1),e(Zo,cp),e(cp,x1),e(Zo,B1),e(Zo,um),e(um,M1),e(Zo,E1),e(It,z1),w(bs,It,null),e(It,P1),w(ks,It,null),b(o,j_,k),b(o,en,k),e(en,ys),e(ys,gm),w(_i,gm,null),e(en,q1),e(en,_m),e(_m,j1),b(o,C_,k),b(o,it,k),w(bi,it,null),e(it,C1),e(it,ki),e(ki,N1),e(ki,bm),e(bm,O1),e(ki,A1),e(it,I1),e(it,yi),e(yi,L1),e(yi,pp),e(pp,D1),e(yi,S1),e(it,U1),e(it,Ti),e(Ti,W1),e(Ti,vi),e(vi,H1),e(Ti,R1),e(it,V1),e(it,mt),w(wi,mt,null),e(mt,Q1),e(mt,tn),e(tn,K1),e(tn,hp),e(hp,J1),e(tn,G1),e(tn,km),e(km,X1),e(tn,Y1),e(mt,Z1),w(Ts,mt,null),e(mt,ew),w(vs,mt,null),e(mt,tw),w(ws,mt,null),b(o,N_,k),b(o,on,k),e(on,$s),e($s,ym),w($i,ym,null),e(on,ow),e(on,Tm),e(Tm,nw),b(o,O_,k),b(o,lt,k),w(Fi,lt,null),e(lt,sw),e(lt,xi),e(xi,rw),e(xi,vm),e(vm,aw),e(xi,iw),e(lt,lw),e(lt,Bi),e(Bi,dw),e(Bi,mp),e(mp,cw),e(Bi,pw),e(lt,hw),e(lt,Mi),e(Mi,mw),e(Mi,Ei),e(Ei,fw),e(Mi,uw),e(lt,gw),e(lt,Lt),w(zi,Lt,null),e(Lt,_w),e(Lt,nn),e(nn,bw),e(nn,fp),e(fp,kw),e(nn,yw),e(nn,wm),e(wm,Tw),e(nn,vw),e(Lt,ww),w(Fs,Lt,null),e(Lt,$w),w(xs,Lt,null),b(o,A_,k),b(o,sn,k),e(sn,Bs),e(Bs,$m),w(Pi,$m,null),e(sn,Fw),e(sn,Fm),e(Fm,xw),b(o,I_,k),b(o,dt,k),w(qi,dt,null),e(dt,Bw),e(dt,xm),e(xm,Mw),e(dt,Ew),e(dt,ji),e(ji,zw),e(ji,up),e(up,Pw),e(ji,qw),e(dt,jw),e(dt,Ci),e(Ci,Cw),e(Ci,Ni),e(Ni,Nw),e(Ci,Ow),e(dt,Aw),e(dt,Ve),w(Oi,Ve,null),e(Ve,Iw),e(Ve,rn),e(rn,Lw),e(rn,gp),e(gp,Dw),e(rn,Sw),e(rn,Bm),e(Bm,Uw),e(rn,Ww),e(Ve,Hw),w(Ms,Ve,null),e(Ve,Rw),w(Es,Ve,null),e(Ve,Vw),w(zs,Ve,null),e(Ve,Qw),w(Ps,Ve,null),e(Ve,Kw),w(qs,Ve,null),b(o,L_,k),b(o,an,k),e(an,js),e(js,Mm),w(Ai,Mm,null),e(an,Jw),e(an,Em),e(Em,Gw),b(o,D_,k),b(o,ct,k),w(Ii,ct,null),e(ct,Xw),e(ct,zm),e(zm,Yw),e(ct,Zw),e(ct,Li),e(Li,e$),e(Li,_p),e(_p,t$),e(Li,o$),e(ct,n$),e(ct,Di),e(Di,s$),e(Di,Si),e(Si,r$),e(Di,a$),e(ct,i$),e(ct,Dt),w(Ui,Dt,null),e(Dt,l$),e(Dt,ln),e(ln,d$),e(ln,bp),e(bp,c$),e(ln,p$),e(ln,Pm),e(Pm,h$),e(ln,m$),e(Dt,f$),w(Cs,Dt,null),e(Dt,u$),w(Ns,Dt,null),b(o,S_,k),b(o,dn,k),e(dn,Os),e(Os,qm),w(Wi,qm,null),e(dn,g$),e(dn,jm),e(jm,_$),b(o,U_,k),b(o,pt,k),w(Hi,pt,null),e(pt,b$),e(pt,Cm),e(Cm,k$),e(pt,y$),e(pt,Ri),e(Ri,T$),e(Ri,kp),e(kp,v$),e(Ri,w$),e(pt,$$),e(pt,Vi),e(Vi,F$),e(Vi,Qi),e(Qi,x$),e(Vi,B$),e(pt,M$),e(pt,ft),w(Ki,ft,null),e(ft,E$),e(ft,cn),e(cn,z$),e(cn,yp),e(yp,P$),e(cn,q$),e(cn,Nm),e(Nm,j$),e(cn,C$),e(ft,N$),w(As,ft,null),e(ft,O$),w(Is,ft,null),e(ft,A$),w(Ls,ft,null),b(o,W_,k),b(o,pn,k),e(pn,Ds),e(Ds,Om),w(Ji,Om,null),e(pn,I$),e(pn,Am),e(Am,L$),b(o,H_,k),b(o,ht,k),w(Gi,ht,null),e(ht,D$),e(ht,hn),e(hn,S$),e(hn,Im),e(Im,U$),e(hn,W$),e(hn,Lm),e(Lm,H$),e(hn,R$),e(ht,V$),e(ht,Xi),e(Xi,Q$),e(Xi,Tp),e(Tp,K$),e(Xi,J$),e(ht,G$),e(ht,Yi),e(Yi,X$),e(Yi,Zi),e(Zi,Y$),e(Yi,Z$),e(ht,e2),e(ht,ut),w(el,ut,null),e(ut,t2),e(ut,mn),e(mn,o2),e(mn,vp),e(vp,n2),e(mn,s2),e(mn,Dm),e(Dm,r2),e(mn,a2),e(ut,i2),w(Ss,ut,null),e(ut,l2),w(Us,ut,null),e(ut,d2),w(Ws,ut,null),b(o,R_,k),b(o,fn,k),e(fn,Hs),e(Hs,Sm),w(tl,Sm,null),e(fn,c2),e(fn,Um),e(Um,p2),b(o,V_,k),b(o,Ke,k),w(ol,Ke,null),e(Ke,h2),e(Ke,Wm),e(Wm,m2),e(Ke,f2),e(Ke,nl),e(nl,u2),e(nl,wp),e(wp,g2),e(nl,_2),e(Ke,b2),e(Ke,sl),e(sl,k2),e(sl,rl),e(rl,y2),e(sl,T2),e(Ke,v2),w(Rs,Ke,null),e(Ke,w2),e(Ke,St),w(al,St,null),e(St,$2),e(St,un),e(un,F2),e(un,$p),e($p,x2),e(un,B2),e(un,Hm),e(Hm,M2),e(un,E2),e(St,z2),w(Vs,St,null),e(St,P2),w(Qs,St,null),b(o,Q_,k),b(o,gn,k),e(gn,Ks),e(Ks,Rm),w(il,Rm,null),e(gn,q2),e(gn,Vm),e(Vm,j2),b(o,K_,k),b(o,Je,k),w(ll,Je,null),e(Je,C2),e(Je,_n),e(_n,N2),e(_n,Qm),e(Qm,O2),e(_n,A2),e(_n,Km),e(Km,I2),e(_n,L2),e(Je,D2),e(Je,dl),e(dl,S2),e(dl,Fp),e(Fp,U2),e(dl,W2),e(Je,H2),e(Je,cl),e(cl,R2),e(cl,pl),e(pl,V2),e(cl,Q2),e(Je,K2),w(Js,Je,null),e(Je,J2),e(Je,Ut),w(hl,Ut,null),e(Ut,G2),e(Ut,bn),e(bn,X2),e(bn,xp),e(xp,Y2),e(bn,Z2),e(bn,Jm),e(Jm,e6),e(bn,t6),e(Ut,o6),w(Gs,Ut,null),e(Ut,n6),w(Xs,Ut,null),b(o,J_,k),b(o,kn,k),e(kn,Ys),e(Ys,Gm),w(ml,Gm,null),e(kn,s6),e(kn,Xm),e(Xm,r6),b(o,G_,k),b(o,yn,k),w(fl,yn,null),e(yn,a6),e(yn,gt),w(ul,gt,null),e(gt,i6),e(gt,Ae),e(Ae,l6),e(Ae,Ym),e(Ym,d6),e(Ae,c6),e(Ae,Zm),e(Zm,p6),e(Ae,h6),e(Ae,ef),e(ef,m6),e(Ae,f6),e(Ae,tf),e(tf,u6),e(Ae,g6),e(Ae,of),e(of,_6),e(Ae,b6),e(Ae,nf),e(nf,k6),e(Ae,y6),e(Ae,sf),e(sf,T6),e(Ae,v6),e(gt,w6),e(gt,gl),e(gl,_l),e(_l,$6),e(_l,rf),e(rf,F6),e(_l,x6),e(gl,B6),e(gl,bl),e(bl,M6),e(bl,af),e(af,E6),e(bl,z6),e(gt,P6),e(gt,G),e(G,q6),e(G,lf),e(lf,j6),e(G,C6),e(G,df),e(df,N6),e(G,O6),e(G,cf),e(cf,A6),e(G,I6),e(G,pf),e(pf,L6),e(G,D6),e(G,hf),e(hf,S6),e(G,U6),e(G,mf),e(mf,W6),e(G,H6),e(G,ff),e(ff,R6),e(G,V6),e(G,uf),e(uf,Q6),e(G,K6),e(G,gf),e(gf,J6),e(G,G6),e(G,_f),e(_f,X6),e(G,Y6),e(G,bf),e(bf,Z6),e(G,eF),e(G,kf),e(kf,tF),e(G,oF),e(G,yf),e(yf,nF),e(G,sF),e(G,Tf),e(Tf,rF),e(G,aF),e(G,vf),e(vf,iF),e(G,lF),e(G,wf),e(wf,dF),e(G,cF),e(G,$f),e($f,pF),e(G,hF),e(G,Ff),e(Ff,mF),e(G,fF),e(G,xf),e(xf,uF),e(G,gF),e(G,Bf),e(Bf,_F),e(G,bF),e(gt,kF),w(Zs,gt,null),b(o,X_,k),b(o,Tn,k),e(Tn,er),e(er,Mf),w(kl,Mf,null),e(Tn,yF),e(Tn,Ef),e(Ef,TF),b(o,Y_,k),b(o,Ge,k),w(yl,Ge,null),e(Ge,vF),e(Ge,Tl),e(Tl,wF),e(Tl,zf),e(zf,$F),e(Tl,FF),e(Ge,xF),e(Ge,vl),e(vl,BF),e(vl,Bp),e(Bp,MF),e(vl,EF),e(Ge,zF),e(Ge,wl),e(wl,PF),e(wl,$l),e($l,qF),e(wl,jF),e(Ge,CF),w(tr,Ge,null),e(Ge,NF),e(Ge,_t),w(Fl,_t,null),e(_t,OF),e(_t,vn),e(vn,AF),e(vn,Mp),e(Mp,IF),e(vn,LF),e(vn,Pf),e(Pf,DF),e(vn,SF),e(_t,UF),w(or,_t,null),e(_t,WF),w(nr,_t,null),e(_t,HF),w(sr,_t,null),b(o,Z_,k),b(o,wn,k),e(wn,rr),e(rr,qf),w(xl,qf,null),e(wn,RF),e(wn,jf),e(jf,VF),b(o,eb,k),b(o,Xe,k),w(Bl,Xe,null),e(Xe,QF),e(Xe,Ml),e(Ml,KF),e(Ml,Cf),e(Cf,JF),e(Ml,GF),e(Xe,XF),e(Xe,El),e(El,YF),e(El,Ep),e(Ep,ZF),e(El,ex),e(Xe,tx),e(Xe,zl),e(zl,ox),e(zl,Pl),e(Pl,nx),e(zl,sx),e(Xe,rx),w(ar,Xe,null),e(Xe,ax),e(Xe,Wt),w(ql,Wt,null),e(Wt,ix),e(Wt,$n),e($n,lx),e($n,zp),e(zp,dx),e($n,cx),e($n,Nf),e(Nf,px),e($n,hx),e(Wt,mx),w(ir,Wt,null),e(Wt,fx),w(lr,Wt,null),b(o,tb,k),b(o,Fn,k),e(Fn,dr),e(dr,Of),w(jl,Of,null),e(Fn,ux),e(Fn,Af),e(Af,gx),b(o,ob,k),b(o,Ye,k),w(Cl,Ye,null),e(Ye,_x),e(Ye,If),e(If,bx),e(Ye,kx),e(Ye,Nl),e(Nl,yx),e(Nl,Pp),e(Pp,Tx),e(Nl,vx),e(Ye,wx),e(Ye,Ol),e(Ol,$x),e(Ol,Al),e(Al,Fx),e(Ol,xx),e(Ye,Bx),w(cr,Ye,null),e(Ye,Mx),e(Ye,bt),w(Il,bt,null),e(bt,Ex),e(bt,xn),e(xn,zx),e(xn,qp),e(qp,Px),e(xn,qx),e(xn,Lf),e(Lf,jx),e(xn,Cx),e(bt,Nx),w(pr,bt,null),e(bt,Ox),w(hr,bt,null),e(bt,Ax),w(mr,bt,null),b(o,nb,k),b(o,Bn,k),e(Bn,fr),e(fr,Df),w(Ll,Df,null),e(Bn,Ix),e(Bn,Sf),e(Sf,Lx),b(o,sb,k),b(o,Ze,k),w(Dl,Ze,null),e(Ze,Dx),e(Ze,Uf),e(Uf,Sx),e(Ze,Ux),e(Ze,Sl),e(Sl,Wx),e(Sl,jp),e(jp,Hx),e(Sl,Rx),e(Ze,Vx),e(Ze,Ul),e(Ul,Qx),e(Ul,Wl),e(Wl,Kx),e(Ul,Jx),e(Ze,Gx),w(ur,Ze,null),e(Ze,Xx),e(Ze,Ht),w(Hl,Ht,null),e(Ht,Yx),e(Ht,Mn),e(Mn,Zx),e(Mn,Cp),e(Cp,e0),e(Mn,t0),e(Mn,Wf),e(Wf,o0),e(Mn,n0),e(Ht,s0),w(gr,Ht,null),e(Ht,r0),w(_r,Ht,null),b(o,rb,k),b(o,En,k),e(En,br),e(br,Hf),w(Rl,Hf,null),e(En,a0),e(En,Rf),e(Rf,i0),b(o,ab,k),b(o,et,k),w(Vl,et,null),e(et,l0),e(et,Vf),e(Vf,d0),e(et,c0),e(et,Ql),e(Ql,p0),e(Ql,Np),e(Np,h0),e(Ql,m0),e(et,f0),e(et,Kl),e(Kl,u0),e(Kl,Jl),e(Jl,g0),e(Kl,_0),e(et,b0),w(kr,et,null),e(et,k0),e(et,kt),w(Gl,kt,null),e(kt,y0),e(kt,zn),e(zn,T0),e(zn,Op),e(Op,v0),e(zn,w0),e(zn,Qf),e(Qf,$0),e(zn,F0),e(kt,x0),w(yr,kt,null),e(kt,B0),w(Tr,kt,null),e(kt,M0),w(vr,kt,null),b(o,ib,k),b(o,Pn,k),e(Pn,wr),e(wr,Kf),w(Xl,Kf,null),e(Pn,E0),e(Pn,Jf),e(Jf,z0),b(o,lb,k),b(o,tt,k),w(Yl,tt,null),e(tt,P0),e(tt,qn),e(qn,q0),e(qn,Gf),e(Gf,j0),e(qn,C0),e(qn,Xf),e(Xf,N0),e(qn,O0),e(tt,A0),e(tt,Zl),e(Zl,I0),e(Zl,Ap),e(Ap,L0),e(Zl,D0),e(tt,S0),e(tt,ed),e(ed,U0),e(ed,td),e(td,W0),e(ed,H0),e(tt,R0),w($r,tt,null),e(tt,V0),e(tt,yt),w(od,yt,null),e(yt,Q0),e(yt,jn),e(jn,K0),e(jn,Ip),e(Ip,J0),e(jn,G0),e(jn,Yf),e(Yf,X0),e(jn,Y0),e(yt,Z0),w(Fr,yt,null),e(yt,eB),w(xr,yt,null),e(yt,tB),w(Br,yt,null),b(o,db,k),b(o,Cn,k),e(Cn,Mr),e(Mr,Zf),w(nd,Zf,null),e(Cn,oB),e(Cn,eu),e(eu,nB),b(o,cb,k),b(o,Ie,k),w(sd,Ie,null),e(Ie,sB),e(Ie,tu),e(tu,rB),e(Ie,aB),e(Ie,rd),e(rd,iB),e(rd,Lp),e(Lp,lB),e(rd,dB),e(Ie,cB),e(Ie,ad),e(ad,pB),e(ad,id),e(id,hB),e(ad,mB),e(Ie,fB),e(Ie,ou),e(ou,uB),e(Ie,gB),e(Ie,co),e(co,nu),e(nu,ld),e(ld,_B),e(co,bB),e(co,su),e(su,dd),e(dd,kB),e(co,yB),e(co,ru),e(ru,cd),e(cd,TB),e(co,vB),e(co,au),e(au,pd),e(pd,wB),e(Ie,$B),e(Ie,Rt),w(hd,Rt,null),e(Rt,FB),e(Rt,Nn),e(Nn,xB),e(Nn,iu),e(iu,BB),e(Nn,MB),e(Nn,lu),e(lu,EB),e(Nn,zB),e(Rt,PB),w(Er,Rt,null),e(Rt,qB),w(zr,Rt,null),b(o,pb,k),b(o,On,k),e(On,Pr),e(Pr,du),w(md,du,null),e(On,jB),e(On,cu),e(cu,CB),b(o,hb,k),b(o,Le,k),w(fd,Le,null),e(Le,NB),e(Le,An),e(An,OB),e(An,pu),e(pu,AB),e(An,IB),e(An,hu),e(hu,LB),e(An,DB),e(Le,SB),e(Le,ud),e(ud,UB),e(ud,Dp),e(Dp,WB),e(ud,HB),e(Le,RB),e(Le,gd),e(gd,VB),e(gd,_d),e(_d,QB),e(gd,KB),e(Le,JB),e(Le,mu),e(mu,GB),e(Le,XB),e(Le,po),e(po,fu),e(fu,bd),e(bd,YB),e(po,ZB),e(po,uu),e(uu,kd),e(kd,eM),e(po,tM),e(po,gu),e(gu,yd),e(yd,oM),e(po,nM),e(po,_u),e(_u,Td),e(Td,sM),e(Le,rM),e(Le,Vt),w(vd,Vt,null),e(Vt,aM),e(Vt,In),e(In,iM),e(In,bu),e(bu,lM),e(In,dM),e(In,ku),e(ku,cM),e(In,pM),e(Vt,hM),w(qr,Vt,null),e(Vt,mM),w(jr,Vt,null),b(o,mb,k),b(o,Ln,k),e(Ln,Cr),e(Cr,yu),w(wd,yu,null),e(Ln,fM),e(Ln,Tu),e(Tu,uM),b(o,fb,k),b(o,De,k),w($d,De,null),e(De,gM),e(De,Fd),e(Fd,_M),e(Fd,vu),e(vu,bM),e(Fd,kM),e(De,yM),e(De,xd),e(xd,TM),e(xd,Sp),e(Sp,vM),e(xd,wM),e(De,$M),e(De,Bd),e(Bd,FM),e(Bd,Md),e(Md,xM),e(Bd,BM),e(De,MM),e(De,wu),e(wu,EM),e(De,zM),e(De,ho),e(ho,$u),e($u,Ed),e(Ed,PM),e(ho,qM),e(ho,Fu),e(Fu,zd),e(zd,jM),e(ho,CM),e(ho,xu),e(xu,Pd),e(Pd,NM),e(ho,OM),e(ho,Bu),e(Bu,qd),e(qd,AM),e(De,IM),e(De,Qt),w(jd,Qt,null),e(Qt,LM),e(Qt,Dn),e(Dn,DM),e(Dn,Mu),e(Mu,SM),e(Dn,UM),e(Dn,Eu),e(Eu,WM),e(Dn,HM),e(Qt,RM),w(Nr,Qt,null),e(Qt,VM),w(Or,Qt,null),b(o,ub,k),b(o,Sn,k),e(Sn,Ar),e(Ar,zu),w(Cd,zu,null),e(Sn,QM),e(Sn,Pu),e(Pu,KM),b(o,gb,k),b(o,Se,k),w(Nd,Se,null),e(Se,JM),e(Se,Od),e(Od,GM),e(Od,qu),e(qu,XM),e(Od,YM),e(Se,ZM),e(Se,Ad),e(Ad,eE),e(Ad,Up),e(Up,tE),e(Ad,oE),e(Se,nE),e(Se,Id),e(Id,sE),e(Id,Ld),e(Ld,rE),e(Id,aE),e(Se,iE),e(Se,ju),e(ju,lE),e(Se,dE),e(Se,mo),e(mo,Cu),e(Cu,Dd),e(Dd,cE),e(mo,pE),e(mo,Nu),e(Nu,Sd),e(Sd,hE),e(mo,mE),e(mo,Ou),e(Ou,Ud),e(Ud,fE),e(mo,uE),e(mo,Au),e(Au,Wd),e(Wd,gE),e(Se,_E),e(Se,Kt),w(Hd,Kt,null),e(Kt,bE),e(Kt,Un),e(Un,kE),e(Un,Iu),e(Iu,yE),e(Un,TE),e(Un,Lu),e(Lu,vE),e(Un,wE),e(Kt,$E),w(Ir,Kt,null),e(Kt,FE),w(Lr,Kt,null),b(o,_b,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Du),w(Rd,Du,null),e(Wn,xE),e(Wn,Su),e(Su,BE),b(o,bb,k),b(o,Ue,k),w(Vd,Ue,null),e(Ue,ME),e(Ue,Uu),e(Uu,EE),e(Ue,zE),e(Ue,Qd),e(Qd,PE),e(Qd,Wp),e(Wp,qE),e(Qd,jE),e(Ue,CE),e(Ue,Kd),e(Kd,NE),e(Kd,Jd),e(Jd,OE),e(Kd,AE),e(Ue,IE),e(Ue,Wu),e(Wu,LE),e(Ue,DE),e(Ue,fo),e(fo,Hu),e(Hu,Gd),e(Gd,SE),e(fo,UE),e(fo,Ru),e(Ru,Xd),e(Xd,WE),e(fo,HE),e(fo,Vu),e(Vu,Yd),e(Yd,RE),e(fo,VE),e(fo,Qu),e(Qu,Zd),e(Zd,QE),e(Ue,KE),e(Ue,Jt),w(ec,Jt,null),e(Jt,JE),e(Jt,Hn),e(Hn,GE),e(Hn,Ku),e(Ku,XE),e(Hn,YE),e(Hn,Ju),e(Ju,ZE),e(Hn,ez),e(Jt,tz),w(Sr,Jt,null),e(Jt,oz),w(Ur,Jt,null),b(o,kb,k),b(o,Rn,k),e(Rn,Wr),e(Wr,Gu),w(tc,Gu,null),e(Rn,nz),e(Rn,Xu),e(Xu,sz),b(o,yb,k),b(o,We,k),w(oc,We,null),e(We,rz),e(We,Yu),e(Yu,az),e(We,iz),e(We,nc),e(nc,lz),e(nc,Hp),e(Hp,dz),e(nc,cz),e(We,pz),e(We,sc),e(sc,hz),e(sc,rc),e(rc,mz),e(sc,fz),e(We,uz),e(We,Zu),e(Zu,gz),e(We,_z),e(We,uo),e(uo,eg),e(eg,ac),e(ac,bz),e(uo,kz),e(uo,tg),e(tg,ic),e(ic,yz),e(uo,Tz),e(uo,og),e(og,lc),e(lc,vz),e(uo,wz),e(uo,ng),e(ng,dc),e(dc,$z),e(We,Fz),e(We,Gt),w(cc,Gt,null),e(Gt,xz),e(Gt,Vn),e(Vn,Bz),e(Vn,sg),e(sg,Mz),e(Vn,Ez),e(Vn,rg),e(rg,zz),e(Vn,Pz),e(Gt,qz),w(Hr,Gt,null),e(Gt,jz),w(Rr,Gt,null),b(o,Tb,k),b(o,Qn,k),e(Qn,Vr),e(Vr,ag),w(pc,ag,null),e(Qn,Cz),e(Qn,ig),e(ig,Nz),b(o,vb,k),b(o,He,k),w(hc,He,null),e(He,Oz),e(He,lg),e(lg,Az),e(He,Iz),e(He,mc),e(mc,Lz),e(mc,Rp),e(Rp,Dz),e(mc,Sz),e(He,Uz),e(He,fc),e(fc,Wz),e(fc,uc),e(uc,Hz),e(fc,Rz),e(He,Vz),e(He,dg),e(dg,Qz),e(He,Kz),e(He,go),e(go,cg),e(cg,gc),e(gc,Jz),e(go,Gz),e(go,pg),e(pg,_c),e(_c,Xz),e(go,Yz),e(go,hg),e(hg,bc),e(bc,Zz),e(go,e4),e(go,mg),e(mg,kc),e(kc,t4),e(He,o4),e(He,Xt),w(yc,Xt,null),e(Xt,n4),e(Xt,Kn),e(Kn,s4),e(Kn,fg),e(fg,r4),e(Kn,a4),e(Kn,ug),e(ug,i4),e(Kn,l4),e(Xt,d4),w(Qr,Xt,null),e(Xt,c4),w(Kr,Xt,null),b(o,wb,k),b(o,Jn,k),e(Jn,Jr),e(Jr,gg),w(Tc,gg,null),e(Jn,p4),e(Jn,_g),e(_g,h4),b(o,$b,k),b(o,Re,k),w(vc,Re,null),e(Re,m4),e(Re,Gn),e(Gn,f4),e(Gn,bg),e(bg,u4),e(Gn,g4),e(Gn,kg),e(kg,_4),e(Gn,b4),e(Re,k4),e(Re,wc),e(wc,y4),e(wc,Vp),e(Vp,T4),e(wc,v4),e(Re,w4),e(Re,$c),e($c,$4),e($c,Fc),e(Fc,F4),e($c,x4),e(Re,B4),e(Re,yg),e(yg,M4),e(Re,E4),e(Re,_o),e(_o,Tg),e(Tg,xc),e(xc,z4),e(_o,P4),e(_o,vg),e(vg,Bc),e(Bc,q4),e(_o,j4),e(_o,wg),e(wg,Mc),e(Mc,C4),e(_o,N4),e(_o,$g),e($g,Ec),e(Ec,O4),e(Re,A4),e(Re,Yt),w(zc,Yt,null),e(Yt,I4),e(Yt,Xn),e(Xn,L4),e(Xn,Fg),e(Fg,D4),e(Xn,S4),e(Xn,xg),e(xg,U4),e(Xn,W4),e(Yt,H4),w(Gr,Yt,null),e(Yt,R4),w(Xr,Yt,null),Fb=!0},p(o,[k]){const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:o}),ns.$set(Pc);const Bg={};k&2&&(Bg.$$scope={dirty:k,ctx:o}),as.$set(Bg);const Mg={};k&2&&(Mg.$$scope={dirty:k,ctx:o}),ls.$set(Mg);const Eg={};k&2&&(Eg.$$scope={dirty:k,ctx:o}),hs.$set(Eg);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:o}),ms.$set(qc);const zg={};k&2&&(zg.$$scope={dirty:k,ctx:o}),us.$set(zg);const Pg={};k&2&&(Pg.$$scope={dirty:k,ctx:o}),gs.$set(Pg);const qg={};k&2&&(qg.$$scope={dirty:k,ctx:o}),bs.$set(qg);const jc={};k&2&&(jc.$$scope={dirty:k,ctx:o}),ks.$set(jc);const jg={};k&2&&(jg.$$scope={dirty:k,ctx:o}),Ts.$set(jg);const Cg={};k&2&&(Cg.$$scope={dirty:k,ctx:o}),vs.$set(Cg);const Ng={};k&2&&(Ng.$$scope={dirty:k,ctx:o}),ws.$set(Ng);const Og={};k&2&&(Og.$$scope={dirty:k,ctx:o}),Fs.$set(Og);const Ag={};k&2&&(Ag.$$scope={dirty:k,ctx:o}),xs.$set(Ag);const Ig={};k&2&&(Ig.$$scope={dirty:k,ctx:o}),Ms.$set(Ig);const Lg={};k&2&&(Lg.$$scope={dirty:k,ctx:o}),Es.$set(Lg);const Cc={};k&2&&(Cc.$$scope={dirty:k,ctx:o}),zs.$set(Cc);const Dg={};k&2&&(Dg.$$scope={dirty:k,ctx:o}),Ps.$set(Dg);const Sg={};k&2&&(Sg.$$scope={dirty:k,ctx:o}),qs.$set(Sg);const Yn={};k&2&&(Yn.$$scope={dirty:k,ctx:o}),Cs.$set(Yn);const Ug={};k&2&&(Ug.$$scope={dirty:k,ctx:o}),Ns.$set(Ug);const Wg={};k&2&&(Wg.$$scope={dirty:k,ctx:o}),As.$set(Wg);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:o}),Is.$set(Nc);const Hg={};k&2&&(Hg.$$scope={dirty:k,ctx:o}),Ls.$set(Hg);const Rg={};k&2&&(Rg.$$scope={dirty:k,ctx:o}),Ss.$set(Rg);const Vg={};k&2&&(Vg.$$scope={dirty:k,ctx:o}),Us.$set(Vg);const bo={};k&2&&(bo.$$scope={dirty:k,ctx:o}),Ws.$set(bo);const ko={};k&2&&(ko.$$scope={dirty:k,ctx:o}),Rs.$set(ko);const Qg={};k&2&&(Qg.$$scope={dirty:k,ctx:o}),Vs.$set(Qg);const Kg={};k&2&&(Kg.$$scope={dirty:k,ctx:o}),Qs.$set(Kg);const Jg={};k&2&&(Jg.$$scope={dirty:k,ctx:o}),Js.$set(Jg);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Gs.$set(Zn);const Gg={};k&2&&(Gg.$$scope={dirty:k,ctx:o}),Xs.$set(Gg);const Xg={};k&2&&(Xg.$$scope={dirty:k,ctx:o}),Zs.$set(Xg);const Oc={};k&2&&(Oc.$$scope={dirty:k,ctx:o}),tr.$set(Oc);const Yg={};k&2&&(Yg.$$scope={dirty:k,ctx:o}),or.$set(Yg);const Zg={};k&2&&(Zg.$$scope={dirty:k,ctx:o}),nr.$set(Zg);const e_={};k&2&&(e_.$$scope={dirty:k,ctx:o}),sr.$set(e_);const ot={};k&2&&(ot.$$scope={dirty:k,ctx:o}),ar.$set(ot);const t_={};k&2&&(t_.$$scope={dirty:k,ctx:o}),ir.$set(t_);const Ac={};k&2&&(Ac.$$scope={dirty:k,ctx:o}),lr.$set(Ac);const o_={};k&2&&(o_.$$scope={dirty:k,ctx:o}),cr.$set(o_);const es={};k&2&&(es.$$scope={dirty:k,ctx:o}),pr.$set(es);const n_={};k&2&&(n_.$$scope={dirty:k,ctx:o}),hr.$set(n_);const Ic={};k&2&&(Ic.$$scope={dirty:k,ctx:o}),mr.$set(Ic);const Qp={};k&2&&(Qp.$$scope={dirty:k,ctx:o}),ur.$set(Qp);const s_={};k&2&&(s_.$$scope={dirty:k,ctx:o}),gr.$set(s_);const Kp={};k&2&&(Kp.$$scope={dirty:k,ctx:o}),_r.$set(Kp);const r_={};k&2&&(r_.$$scope={dirty:k,ctx:o}),kr.$set(r_);const Lc={};k&2&&(Lc.$$scope={dirty:k,ctx:o}),yr.$set(Lc);const Dc={};k&2&&(Dc.$$scope={dirty:k,ctx:o}),Tr.$set(Dc);const a_={};k&2&&(a_.$$scope={dirty:k,ctx:o}),vr.$set(a_);const yo={};k&2&&(yo.$$scope={dirty:k,ctx:o}),$r.$set(yo);const i_={};k&2&&(i_.$$scope={dirty:k,ctx:o}),Fr.$set(i_);const ts={};k&2&&(ts.$$scope={dirty:k,ctx:o}),xr.$set(ts);const l_={};k&2&&(l_.$$scope={dirty:k,ctx:o}),Br.$set(l_);const d_={};k&2&&(d_.$$scope={dirty:k,ctx:o}),Er.$set(d_);const c_={};k&2&&(c_.$$scope={dirty:k,ctx:o}),zr.$set(c_);const Sc={};k&2&&(Sc.$$scope={dirty:k,ctx:o}),qr.$set(Sc);const p_={};k&2&&(p_.$$scope={dirty:k,ctx:o}),jr.$set(p_);const h_={};k&2&&(h_.$$scope={dirty:k,ctx:o}),Nr.$set(h_);const m_={};k&2&&(m_.$$scope={dirty:k,ctx:o}),Or.$set(m_);const jt={};k&2&&(jt.$$scope={dirty:k,ctx:o}),Ir.$set(jt);const Uc={};k&2&&(Uc.$$scope={dirty:k,ctx:o}),Lr.$set(Uc);const f_={};k&2&&(f_.$$scope={dirty:k,ctx:o}),Sr.$set(f_);const Wc={};k&2&&(Wc.$$scope={dirty:k,ctx:o}),Ur.$set(Wc);const u_={};k&2&&(u_.$$scope={dirty:k,ctx:o}),Hr.$set(u_);const os={};k&2&&(os.$$scope={dirty:k,ctx:o}),Rr.$set(os);const g_={};k&2&&(g_.$$scope={dirty:k,ctx:o}),Qr.$set(g_);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:o}),Kr.$set(Hc);const Jp={};k&2&&(Jp.$$scope={dirty:k,ctx:o}),Gr.$set(Jp);const __={};k&2&&(__.$$scope={dirty:k,ctx:o}),Xr.$set(__)},i(o){Fb||($(l.$$.fragment,o),$(oe.$$.fragment,o),$(Ee.$$.fragment,o),$($a.$$.fragment,o),$(ns.$$.fragment,o),$(xa.$$.fragment,o),$(Ba.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(ja.$$.fragment,o),$(as.$$.fragment,o),$(Ca.$$.fragment,o),$(Na.$$.fragment,o),$(Oa.$$.fragment,o),$(La.$$.fragment,o),$(Sa.$$.fragment,o),$(ls.$$.fragment,o),$(Ua.$$.fragment,o),$(Wa.$$.fragment,o),$(Ra.$$.fragment,o),$(Qa.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(ni.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(si.$$.fragment,o),$(ri.$$.fragment,o),$(di.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(gi.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(Ts.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$($i.$$.fragment,o),$(Fi.$$.fragment,o),$(zi.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(zs.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ai.$$.fragment,o),$(Ii.$$.fragment,o),$(Ui.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Wi.$$.fragment,o),$(Hi.$$.fragment,o),$(Ki.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ls.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(el.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(tl.$$.fragment,o),$(ol.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(Vs.$$.fragment,o),$(Qs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(ml.$$.fragment,o),$(fl.$$.fragment,o),$(ul.$$.fragment,o),$(Zs.$$.fragment,o),$(kl.$$.fragment,o),$(yl.$$.fragment,o),$(tr.$$.fragment,o),$(Fl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(xl.$$.fragment,o),$(Bl.$$.fragment,o),$(ar.$$.fragment,o),$(ql.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(Cl.$$.fragment,o),$(cr.$$.fragment,o),$(Il.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(Ll.$$.fragment,o),$(Dl.$$.fragment,o),$(ur.$$.fragment,o),$(Hl.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(Rl.$$.fragment,o),$(Vl.$$.fragment,o),$(kr.$$.fragment,o),$(Gl.$$.fragment,o),$(yr.$$.fragment,o),$(Tr.$$.fragment,o),$(vr.$$.fragment,o),$(Xl.$$.fragment,o),$(Yl.$$.fragment,o),$($r.$$.fragment,o),$(od.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$(Br.$$.fragment,o),$(nd.$$.fragment,o),$(sd.$$.fragment,o),$(hd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(md.$$.fragment,o),$(fd.$$.fragment,o),$(vd.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(wd.$$.fragment,o),$($d.$$.fragment,o),$(jd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Hd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Rd.$$.fragment,o),$(Vd.$$.fragment,o),$(ec.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(cc.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(pc.$$.fragment,o),$(hc.$$.fragment,o),$(yc.$$.fragment,o),$(Qr.$$.fragment,o),$(Kr.$$.fragment,o),$(Tc.$$.fragment,o),$(vc.$$.fragment,o),$(zc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),Fb=!0)},o(o){F(l.$$.fragment,o),F(oe.$$.fragment,o),F(Ee.$$.fragment,o),F($a.$$.fragment,o),F(ns.$$.fragment,o),F(xa.$$.fragment,o),F(Ba.$$.fragment,o),F(Ea.$$.fragment,o),F(Pa.$$.fragment,o),F(ja.$$.fragment,o),F(as.$$.fragment,o),F(Ca.$$.fragment,o),F(Na.$$.fragment,o),F(Oa.$$.fragment,o),F(La.$$.fragment,o),F(Sa.$$.fragment,o),F(ls.$$.fragment,o),F(Ua.$$.fragment,o),F(Wa.$$.fragment,o),F(Ra.$$.fragment,o),F(Qa.$$.fragment,o),F(Ja.$$.fragment,o),F(Ga.$$.fragment,o),F(Xa.$$.fragment,o),F(ni.$$.fragment,o),F(hs.$$.fragment,o),F(ms.$$.fragment,o),F(si.$$.fragment,o),F(ri.$$.fragment,o),F(di.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(ci.$$.fragment,o),F(pi.$$.fragment,o),F(gi.$$.fragment,o),F(bs.$$.fragment,o),F(ks.$$.fragment,o),F(_i.$$.fragment,o),F(bi.$$.fragment,o),F(wi.$$.fragment,o),F(Ts.$$.fragment,o),F(vs.$$.fragment,o),F(ws.$$.fragment,o),F($i.$$.fragment,o),F(Fi.$$.fragment,o),F(zi.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(Pi.$$.fragment,o),F(qi.$$.fragment,o),F(Oi.$$.fragment,o),F(Ms.$$.fragment,o),F(Es.$$.fragment,o),F(zs.$$.fragment,o),F(Ps.$$.fragment,o),F(qs.$$.fragment,o),F(Ai.$$.fragment,o),F(Ii.$$.fragment,o),F(Ui.$$.fragment,o),F(Cs.$$.fragment,o),F(Ns.$$.fragment,o),F(Wi.$$.fragment,o),F(Hi.$$.fragment,o),F(Ki.$$.fragment,o),F(As.$$.fragment,o),F(Is.$$.fragment,o),F(Ls.$$.fragment,o),F(Ji.$$.fragment,o),F(Gi.$$.fragment,o),F(el.$$.fragment,o),F(Ss.$$.fragment,o),F(Us.$$.fragment,o),F(Ws.$$.fragment,o),F(tl.$$.fragment,o),F(ol.$$.fragment,o),F(Rs.$$.fragment,o),F(al.$$.fragment,o),F(Vs.$$.fragment,o),F(Qs.$$.fragment,o),F(il.$$.fragment,o),F(ll.$$.fragment,o),F(Js.$$.fragment,o),F(hl.$$.fragment,o),F(Gs.$$.fragment,o),F(Xs.$$.fragment,o),F(ml.$$.fragment,o),F(fl.$$.fragment,o),F(ul.$$.fragment,o),F(Zs.$$.fragment,o),F(kl.$$.fragment,o),F(yl.$$.fragment,o),F(tr.$$.fragment,o),F(Fl.$$.fragment,o),F(or.$$.fragment,o),F(nr.$$.fragment,o),F(sr.$$.fragment,o),F(xl.$$.fragment,o),F(Bl.$$.fragment,o),F(ar.$$.fragment,o),F(ql.$$.fragment,o),F(ir.$$.fragment,o),F(lr.$$.fragment,o),F(jl.$$.fragment,o),F(Cl.$$.fragment,o),F(cr.$$.fragment,o),F(Il.$$.fragment,o),F(pr.$$.fragment,o),F(hr.$$.fragment,o),F(mr.$$.fragment,o),F(Ll.$$.fragment,o),F(Dl.$$.fragment,o),F(ur.$$.fragment,o),F(Hl.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(Rl.$$.fragment,o),F(Vl.$$.fragment,o),F(kr.$$.fragment,o),F(Gl.$$.fragment,o),F(yr.$$.fragment,o),F(Tr.$$.fragment,o),F(vr.$$.fragment,o),F(Xl.$$.fragment,o),F(Yl.$$.fragment,o),F($r.$$.fragment,o),F(od.$$.fragment,o),F(Fr.$$.fragment,o),F(xr.$$.fragment,o),F(Br.$$.fragment,o),F(nd.$$.fragment,o),F(sd.$$.fragment,o),F(hd.$$.fragment,o),F(Er.$$.fragment,o),F(zr.$$.fragment,o),F(md.$$.fragment,o),F(fd.$$.fragment,o),F(vd.$$.fragment,o),F(qr.$$.fragment,o),F(jr.$$.fragment,o),F(wd.$$.fragment,o),F($d.$$.fragment,o),F(jd.$$.fragment,o),F(Nr.$$.fragment,o),F(Or.$$.fragment,o),F(Cd.$$.fragment,o),F(Nd.$$.fragment,o),F(Hd.$$.fragment,o),F(Ir.$$.fragment,o),F(Lr.$$.fragment,o),F(Rd.$$.fragment,o),F(Vd.$$.fragment,o),F(ec.$$.fragment,o),F(Sr.$$.fragment,o),F(Ur.$$.fragment,o),F(tc.$$.fragment,o),F(oc.$$.fragment,o),F(cc.$$.fragment,o),F(Hr.$$.fragment,o),F(Rr.$$.fragment,o),F(pc.$$.fragment,o),F(hc.$$.fragment,o),F(yc.$$.fragment,o),F(Qr.$$.fragment,o),F(Kr.$$.fragment,o),F(Tc.$$.fragment,o),F(vc.$$.fragment,o),F(zc.$$.fragment,o),F(Gr.$$.fragment,o),F(Xr.$$.fragment,o),Fb=!1},d(o){t(d),o&&t(_),o&&t(h),x(l),o&&t(X),o&&t(z),x(oe),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t(we),x(Ee),o&&t(b_),o&&t(qt),x($a),x(ns),o&&t(k_),o&&t(Do),x(xa),o&&t(y_),o&&t(Ne),x(Ba),x(Ea),x(Pa),x(ja),x(as),x(Ca),o&&t(T_),o&&t(Uo),x(Na),o&&t(v_),o&&t(st),x(Oa),x(La),x(Sa),x(ls),o&&t(w_),o&&t(Ho),x(Ua),o&&t($_),o&&t(Ro),x(Wa),o&&t(F_),o&&t(Vo),x(Ra),o&&t(x_),o&&t(lo),x(Qa),x(Ja),o&&t(B_),o&&t(Qo),x(Ga),o&&t(M_),o&&t(Oe),x(Xa),x(ni),x(hs),x(ms),o&&t(E_),o&&t(Jo),x(si),o&&t(z_),o&&t(rt),x(ri),x(di),x(us),x(gs),o&&t(P_),o&&t(Yo),x(ci),o&&t(q_),o&&t(at),x(pi),x(gi),x(bs),x(ks),o&&t(j_),o&&t(en),x(_i),o&&t(C_),o&&t(it),x(bi),x(wi),x(Ts),x(vs),x(ws),o&&t(N_),o&&t(on),x($i),o&&t(O_),o&&t(lt),x(Fi),x(zi),x(Fs),x(xs),o&&t(A_),o&&t(sn),x(Pi),o&&t(I_),o&&t(dt),x(qi),x(Oi),x(Ms),x(Es),x(zs),x(Ps),x(qs),o&&t(L_),o&&t(an),x(Ai),o&&t(D_),o&&t(ct),x(Ii),x(Ui),x(Cs),x(Ns),o&&t(S_),o&&t(dn),x(Wi),o&&t(U_),o&&t(pt),x(Hi),x(Ki),x(As),x(Is),x(Ls),o&&t(W_),o&&t(pn),x(Ji),o&&t(H_),o&&t(ht),x(Gi),x(el),x(Ss),x(Us),x(Ws),o&&t(R_),o&&t(fn),x(tl),o&&t(V_),o&&t(Ke),x(ol),x(Rs),x(al),x(Vs),x(Qs),o&&t(Q_),o&&t(gn),x(il),o&&t(K_),o&&t(Je),x(ll),x(Js),x(hl),x(Gs),x(Xs),o&&t(J_),o&&t(kn),x(ml),o&&t(G_),o&&t(yn),x(fl),x(ul),x(Zs),o&&t(X_),o&&t(Tn),x(kl),o&&t(Y_),o&&t(Ge),x(yl),x(tr),x(Fl),x(or),x(nr),x(sr),o&&t(Z_),o&&t(wn),x(xl),o&&t(eb),o&&t(Xe),x(Bl),x(ar),x(ql),x(ir),x(lr),o&&t(tb),o&&t(Fn),x(jl),o&&t(ob),o&&t(Ye),x(Cl),x(cr),x(Il),x(pr),x(hr),x(mr),o&&t(nb),o&&t(Bn),x(Ll),o&&t(sb),o&&t(Ze),x(Dl),x(ur),x(Hl),x(gr),x(_r),o&&t(rb),o&&t(En),x(Rl),o&&t(ab),o&&t(et),x(Vl),x(kr),x(Gl),x(yr),x(Tr),x(vr),o&&t(ib),o&&t(Pn),x(Xl),o&&t(lb),o&&t(tt),x(Yl),x($r),x(od),x(Fr),x(xr),x(Br),o&&t(db),o&&t(Cn),x(nd),o&&t(cb),o&&t(Ie),x(sd),x(hd),x(Er),x(zr),o&&t(pb),o&&t(On),x(md),o&&t(hb),o&&t(Le),x(fd),x(vd),x(qr),x(jr),o&&t(mb),o&&t(Ln),x(wd),o&&t(fb),o&&t(De),x($d),x(jd),x(Nr),x(Or),o&&t(ub),o&&t(Sn),x(Cd),o&&t(gb),o&&t(Se),x(Nd),x(Hd),x(Ir),x(Lr),o&&t(_b),o&&t(Wn),x(Rd),o&&t(bb),o&&t(Ue),x(Vd),x(ec),x(Sr),x(Ur),o&&t(kb),o&&t(Rn),x(tc),o&&t(yb),o&&t(We),x(oc),x(cc),x(Hr),x(Rr),o&&t(Tb),o&&t(Qn),x(pc),o&&t(vb),o&&t(He),x(hc),x(yc),x(Qr),x(Kr),o&&t(wb),o&&t(Jn),x(Tc),o&&t($b),o&&t(Re),x(vc),x(zc),x(Gr),x(Xr)}}}const TN={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function vN(B){return t5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class EN extends X9{constructor(d){super();Y9(this,d,vN,yN,Z9,{})}}export{EN as default,TN as metadata};
