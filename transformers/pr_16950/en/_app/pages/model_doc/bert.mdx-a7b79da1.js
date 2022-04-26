import{S as X3,i as Y3,s as Z3,e as r,k as c,w as T,t as n,M as e9,c as a,d as t,m as p,a as i,x as v,h as s,b as u,F as e,g as b,y as w,q as $,o as F,B as x,v as t9,L as re}from"../../chunks/vendor-6b77c823.js";import{T as $e}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function o9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function n9(B){let d,_,h,m,g;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function s9(B){let d,_,h,m,g;return m=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function r9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function a9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function i9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function l9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function d9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function c9(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function p9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function h9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function m9(B){let d,_;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function f9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function u9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function g9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function _9(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function b9(B){let d,_;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function k9(B){let d,_,h,m,g;return m=new ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function y9(B){let d,_;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function T9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function v9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function w9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function $9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function F9(B){let d,_;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function x9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function B9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function M9(B){let d,_;return d=new ae({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function E9(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function z9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function P9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function q9(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function j9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function C9(B){let d,_,h,m,g;return m=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function N9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function O9(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function A9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function I9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function L9(B){let d,_;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function D9(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function S9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function U9(B){let d,_,h,m,g;return m=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function W9(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function H9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function R9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function V9(B){let d,_;return d=new ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,m){w(d,h,m),_=!0},p:re,i(h){_||($(d.$$.fragment,h),_=!0)},o(h){F(d.$$.fragment,h),_=!1},d(h){x(d,h)}}}function Q9(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function K9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function J9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function G9(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),h=c(),m=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),V=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var E=i(d);_=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(y),m=a(y,"UL",{});var K=i(m);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);ye=s(Me,"model(inputs)"),Me.forEach(t),me=s(A,"."),A.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);fe=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),V=a(U,"CODE",{});var je=i(V);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(he,"CODE",{});var Ce=i(Q);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(y,E){b(y,d,E),e(d,_),b(y,h,E),b(y,m,E),e(m,g),e(g,l),e(m,f),e(m,M),e(M,be),b(y,X,E),b(y,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,E),b(y,O,E),e(O,ne),b(y,Y,E),b(y,P,E),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,V),e(V,_e),e(P,te),e(P,N),e(N,ve),e(N,Q),e(Q,pe)},d(y){y&&t(d),y&&t(h),y&&t(m),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function X9(B){let d,_,h,m,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),m=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(f,"CODE",{});var M=i(h);m=s(M,"Module"),M.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,h),e(h,m),e(d,g)},d(l){l&&t(d)}}}function Y9(B){let d,_,h,m,g;return m=new ae({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function Z9(B){let d,_;return d=new ae({props:{code:`labels = predicted_token_class_ids
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),h=c(),T(m.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),h=p(l),v(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,h,f),w(m,l,f),g=!0},p:re,i(l){g||($(m.$$.fragment,l),g=!0)},o(l){F(m.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(h),x(m,l)}}}function yN(B){let d,_,h,m,g,l,f,M,be,X,z,ee,L,oe,ke,D,ye,me,J,O,ne,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,V,_e,te,N,ve,Q,pe,y,E,K,ze,Be,A,Pe,Me,qe,I,W,we,Fe,U,Ee,je,he,Ce,b_,qt,$a,my,io,fy,Rc,uy,gy,Vc,_y,by,Fa,ky,yy,Ty,Lo,vy,Qc,wy,$y,Kc,Fy,xy,By,ns,k_,Do,ss,Eh,xa,My,zh,Ey,y_,Ne,Ba,zy,Ph,Py,qy,Ma,jy,Jc,Cy,Ny,Oy,To,Ea,Ay,qh,Iy,Ly,za,Gc,Dy,jh,Sy,Uy,Xc,Wy,Ch,Hy,Ry,rs,Pa,Vy,qa,Qy,Nh,Ky,Jy,Gy,Ct,ja,Xy,Oh,Yy,Zy,as,eT,So,tT,Ah,oT,nT,Ih,sT,rT,aT,Yc,Ca,T_,Uo,is,Lh,Na,iT,Dh,lT,v_,st,Oa,dT,Aa,cT,Sh,pT,hT,mT,Ia,fT,Zc,uT,gT,_T,vo,La,bT,Uh,kT,yT,Da,ep,TT,Wh,vT,wT,tp,$T,Hh,FT,xT,Nt,Sa,BT,Rh,MT,ET,ls,zT,Wo,PT,Vh,qT,jT,Qh,CT,NT,w_,Ho,ds,Kh,Ua,OT,Jh,AT,$_,Ro,Wa,IT,Ha,LT,op,DT,ST,F_,Vo,Ra,UT,Va,WT,np,HT,RT,x_,lo,Qa,VT,Ka,QT,sp,KT,JT,GT,cs,Ja,XT,Gh,YT,B_,Qo,ps,Xh,Ga,ZT,Yh,ev,M_,Oe,Xa,tv,Zh,ov,nv,Ya,sv,rp,rv,av,iv,Za,lv,ei,dv,cv,pv,ti,hv,oi,mv,fv,uv,Qe,gv,em,_v,bv,tm,kv,yv,om,Tv,vv,nm,wv,$v,sm,Fv,xv,rm,Bv,Mv,Ev,Ot,ni,zv,Ko,Pv,ap,qv,jv,am,Cv,Nv,Ov,hs,Av,ms,E_,Jo,fs,im,si,Iv,lm,Lv,z_,rt,ri,Dv,Go,Sv,dm,Uv,Wv,cm,Hv,Rv,Vv,ai,Qv,ip,Kv,Jv,Gv,ii,Xv,li,Yv,Zv,e1,At,di,t1,Xo,o1,lp,n1,s1,pm,r1,a1,i1,us,l1,gs,P_,Yo,_s,hm,ci,d1,mm,c1,q_,at,pi,p1,hi,h1,fm,m1,f1,u1,mi,g1,dp,_1,b1,k1,fi,y1,ui,T1,v1,w1,It,gi,$1,Zo,F1,cp,x1,B1,um,M1,E1,z1,bs,P1,ks,j_,en,ys,gm,_i,q1,_m,j1,C_,it,bi,C1,ki,N1,bm,O1,A1,I1,yi,L1,pp,D1,S1,U1,Ti,W1,vi,H1,R1,V1,mt,wi,Q1,tn,K1,hp,J1,G1,km,X1,Y1,Z1,Ts,ew,vs,tw,ws,N_,on,$s,ym,$i,ow,Tm,nw,O_,lt,Fi,sw,xi,rw,vm,aw,iw,lw,Bi,dw,mp,cw,pw,hw,Mi,mw,Ei,fw,uw,gw,Lt,zi,_w,nn,bw,fp,kw,yw,wm,Tw,vw,ww,Fs,$w,xs,A_,sn,Bs,$m,Pi,Fw,Fm,xw,I_,dt,qi,Bw,xm,Mw,Ew,ji,zw,up,Pw,qw,jw,Ci,Cw,Ni,Nw,Ow,Aw,Ve,Oi,Iw,rn,Lw,gp,Dw,Sw,Bm,Uw,Ww,Hw,Ms,Rw,Es,Vw,zs,Qw,Ps,Kw,qs,L_,an,js,Mm,Ai,Jw,Em,Gw,D_,ct,Ii,Xw,zm,Yw,Zw,Li,e$,_p,t$,o$,n$,Di,s$,Si,r$,a$,i$,Dt,Ui,l$,ln,d$,bp,c$,p$,Pm,h$,m$,f$,Cs,u$,Ns,S_,dn,Os,qm,Wi,g$,jm,_$,U_,pt,Hi,b$,Cm,k$,y$,Ri,T$,kp,v$,w$,$$,Vi,F$,Qi,x$,B$,M$,ft,Ki,E$,cn,z$,yp,P$,q$,Nm,j$,C$,N$,As,O$,Is,A$,Ls,W_,pn,Ds,Om,Ji,I$,Am,L$,H_,ht,Gi,D$,hn,S$,Im,U$,W$,Lm,H$,R$,V$,Xi,Q$,Tp,K$,J$,G$,Yi,X$,Zi,Y$,Z$,e0,ut,el,t0,mn,o0,vp,n0,s0,Dm,r0,a0,i0,Ss,l0,Us,d0,Ws,R_,fn,Hs,Sm,tl,c0,Um,p0,V_,Ke,ol,h0,Wm,m0,f0,nl,u0,wp,g0,_0,b0,sl,k0,rl,y0,T0,v0,Rs,w0,St,al,$0,un,F0,$p,x0,B0,Hm,M0,E0,z0,Vs,P0,Qs,Q_,gn,Ks,Rm,il,q0,Vm,j0,K_,Je,ll,C0,_n,N0,Qm,O0,A0,Km,I0,L0,D0,dl,S0,Fp,U0,W0,H0,cl,R0,pl,V0,Q0,K0,Js,J0,Ut,hl,G0,bn,X0,xp,Y0,Z0,Jm,e2,t2,o2,Gs,n2,Xs,J_,kn,Ys,Gm,ml,s2,Xm,r2,G_,yn,fl,a2,gt,ul,i2,Ae,l2,Ym,d2,c2,Zm,p2,h2,ef,m2,f2,tf,u2,g2,of,_2,b2,nf,k2,y2,sf,T2,v2,w2,gl,_l,$2,rf,F2,x2,B2,bl,M2,af,E2,z2,P2,G,q2,lf,j2,C2,df,N2,O2,cf,A2,I2,pf,L2,D2,hf,S2,U2,mf,W2,H2,ff,R2,V2,uf,Q2,K2,gf,J2,G2,_f,X2,Y2,bf,Z2,eF,kf,tF,oF,yf,nF,sF,Tf,rF,aF,vf,iF,lF,wf,dF,cF,$f,pF,hF,Ff,mF,fF,xf,uF,gF,Bf,_F,bF,kF,Zs,X_,Tn,er,Mf,kl,yF,Ef,TF,Y_,Ge,yl,vF,Tl,wF,zf,$F,FF,xF,vl,BF,Bp,MF,EF,zF,wl,PF,$l,qF,jF,CF,tr,NF,_t,Fl,OF,vn,AF,Mp,IF,LF,Pf,DF,SF,UF,or,WF,nr,HF,sr,Z_,wn,rr,qf,xl,RF,jf,VF,eb,Xe,Bl,QF,Ml,KF,Cf,JF,GF,XF,El,YF,Ep,ZF,ex,tx,zl,ox,Pl,nx,sx,rx,ar,ax,Wt,ql,ix,$n,lx,zp,dx,cx,Nf,px,hx,mx,ir,fx,lr,tb,Fn,dr,Of,jl,ux,Af,gx,ob,Ye,Cl,_x,If,bx,kx,Nl,yx,Pp,Tx,vx,wx,Ol,$x,Al,Fx,xx,Bx,cr,Mx,bt,Il,Ex,xn,zx,qp,Px,qx,Lf,jx,Cx,Nx,pr,Ox,hr,Ax,mr,nb,Bn,fr,Df,Ll,Ix,Sf,Lx,sb,Ze,Dl,Dx,Uf,Sx,Ux,Sl,Wx,jp,Hx,Rx,Vx,Ul,Qx,Wl,Kx,Jx,Gx,ur,Xx,Ht,Hl,Yx,Mn,Zx,Cp,eB,tB,Wf,oB,nB,sB,gr,rB,_r,rb,En,br,Hf,Rl,aB,Rf,iB,ab,et,Vl,lB,Vf,dB,cB,Ql,pB,Np,hB,mB,fB,Kl,uB,Jl,gB,_B,bB,kr,kB,kt,Gl,yB,zn,TB,Op,vB,wB,Qf,$B,FB,xB,yr,BB,Tr,MB,vr,ib,Pn,wr,Kf,Xl,EB,Jf,zB,lb,tt,Yl,PB,qn,qB,Gf,jB,CB,Xf,NB,OB,AB,Zl,IB,Ap,LB,DB,SB,ed,UB,td,WB,HB,RB,$r,VB,yt,od,QB,jn,KB,Ip,JB,GB,Yf,XB,YB,ZB,Fr,eM,xr,tM,Br,db,Cn,Mr,Zf,nd,oM,eu,nM,cb,Ie,sd,sM,tu,rM,aM,rd,iM,Lp,lM,dM,cM,ad,pM,id,hM,mM,fM,ou,uM,gM,co,nu,ld,_M,bM,su,dd,kM,yM,ru,cd,TM,vM,au,pd,wM,$M,Rt,hd,FM,Nn,xM,iu,BM,MM,lu,EM,zM,PM,Er,qM,zr,pb,On,Pr,du,md,jM,cu,CM,hb,Le,fd,NM,An,OM,pu,AM,IM,hu,LM,DM,SM,ud,UM,Dp,WM,HM,RM,gd,VM,_d,QM,KM,JM,mu,GM,XM,po,fu,bd,YM,ZM,uu,kd,eE,tE,gu,yd,oE,nE,_u,Td,sE,rE,Vt,vd,aE,In,iE,bu,lE,dE,ku,cE,pE,hE,qr,mE,jr,mb,Ln,Cr,yu,wd,fE,Tu,uE,fb,De,$d,gE,Fd,_E,vu,bE,kE,yE,xd,TE,Sp,vE,wE,$E,Bd,FE,Md,xE,BE,ME,wu,EE,zE,ho,$u,Ed,PE,qE,Fu,zd,jE,CE,xu,Pd,NE,OE,Bu,qd,AE,IE,Qt,jd,LE,Dn,DE,Mu,SE,UE,Eu,WE,HE,RE,Nr,VE,Or,ub,Sn,Ar,zu,Cd,QE,Pu,KE,gb,Se,Nd,JE,Od,GE,qu,XE,YE,ZE,Ad,e5,Up,t5,o5,n5,Id,s5,Ld,r5,a5,i5,ju,l5,d5,mo,Cu,Dd,c5,p5,Nu,Sd,h5,m5,Ou,Ud,f5,u5,Au,Wd,g5,_5,Kt,Hd,b5,Un,k5,Iu,y5,T5,Lu,v5,w5,$5,Ir,F5,Lr,_b,Wn,Dr,Du,Rd,x5,Su,B5,bb,Ue,Vd,M5,Uu,E5,z5,Qd,P5,Wp,q5,j5,C5,Kd,N5,Jd,O5,A5,I5,Wu,L5,D5,fo,Hu,Gd,S5,U5,Ru,Xd,W5,H5,Vu,Yd,R5,V5,Qu,Zd,Q5,K5,Jt,ec,J5,Hn,G5,Ku,X5,Y5,Ju,Z5,e6,t6,Sr,o6,Ur,kb,Rn,Wr,Gu,tc,n6,Xu,s6,yb,We,oc,r6,Yu,a6,i6,nc,l6,Hp,d6,c6,p6,sc,h6,rc,m6,f6,u6,Zu,g6,_6,uo,eg,ac,b6,k6,tg,ic,y6,T6,og,lc,v6,w6,ng,dc,$6,F6,Gt,cc,x6,Vn,B6,sg,M6,E6,rg,z6,P6,q6,Hr,j6,Rr,Tb,Qn,Vr,ag,pc,C6,ig,N6,vb,He,hc,O6,lg,A6,I6,mc,L6,Rp,D6,S6,U6,fc,W6,uc,H6,R6,V6,dg,Q6,K6,go,cg,gc,J6,G6,pg,_c,X6,Y6,hg,bc,Z6,ez,mg,kc,tz,oz,Xt,yc,nz,Kn,sz,fg,rz,az,ug,iz,lz,dz,Qr,cz,Kr,wb,Jn,Jr,gg,Tc,pz,_g,hz,$b,Re,vc,mz,Gn,fz,bg,uz,gz,kg,_z,bz,kz,wc,yz,Vp,Tz,vz,wz,$c,$z,Fc,Fz,xz,Bz,yg,Mz,Ez,_o,Tg,xc,zz,Pz,vg,Bc,qz,jz,wg,Mc,Cz,Nz,$g,Ec,Oz,Az,Yt,zc,Iz,Xn,Lz,Fg,Dz,Sz,xg,Uz,Wz,Hz,Gr,Rz,Xr,Fb;return l=new xe({}),oe=new xe({}),Ee=new xe({}),$a=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/configuration_bert.py#L54"}}),ns=new se({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[o9]},$$scope:{ctx:B}}}),xa=new xe({}),Ba=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert.py#L117"}}),Ea=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new se({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[n9]},$$scope:{ctx:B}}}),Ca=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert.py#L330"}}),Na=new xe({}),Oa=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert_fast.py#L117"}}),La=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert_fast.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sa=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/tokenization_bert_fast.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new se({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[s9]},$$scope:{ctx:B}}}),Ua=new xe({}),Wa=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L761"}}),Ra=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),Qa=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L58"}}),Ja=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/flax/struct.py#L120"}}),Ga=new xe({}),Xa=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L864"}}),ni=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L903",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new $e({props:{$$slots:{default:[r9]},$$scope:{ctx:B}}}),ms=new se({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[a9]},$$scope:{ctx:B}}}),si=new xe({}),ri=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1047"}}),di=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new $e({props:{$$slots:{default:[i9]},$$scope:{ctx:B}}}),gs=new se({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[l9]},$$scope:{ctx:B}}}),ci=new xe({}),pi=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1151"}}),gi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1174",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new $e({props:{$$slots:{default:[d9]},$$scope:{ctx:B}}}),ks=new se({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[c9]},$$scope:{ctx:B}}}),_i=new xe({}),bi=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1286"}}),wi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ts=new $e({props:{$$slots:{default:[p9]},$$scope:{ctx:B}}}),vs=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[h9]},$$scope:{ctx:B}}}),ws=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[m9]},$$scope:{ctx:B}}}),$i=new xe({}),Fi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1399"}}),zi=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1409",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fs=new $e({props:{$$slots:{default:[f9]},$$scope:{ctx:B}}}),xs=new se({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[u9]},$$scope:{ctx:B}}}),Pi=new xe({}),qi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1503"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1519",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new $e({props:{$$slots:{default:[g9]},$$scope:{ctx:B}}}),Es=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[_9]},$$scope:{ctx:B}}}),zs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[b9]},$$scope:{ctx:B}}}),Ps=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[k9]},$$scope:{ctx:B}}}),qs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[y9]},$$scope:{ctx:B}}}),Ai=new xe({}),Ii=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1607"}}),Ui=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1621",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new $e({props:{$$slots:{default:[T9]},$$scope:{ctx:B}}}),Ns=new se({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[v9]},$$scope:{ctx:B}}}),Wi=new xe({}),Hi=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1702"}}),Ki=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1720",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new $e({props:{$$slots:{default:[w9]},$$scope:{ctx:B}}}),Is=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[$9]},$$scope:{ctx:B}}}),Ls=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[F9]},$$scope:{ctx:B}}}),Ji=new xe({}),Gi=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1789"}}),el=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_bert.py#L1803",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new $e({props:{$$slots:{default:[x9]},$$scope:{ctx:B}}}),Us=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[B9]},$$scope:{ctx:B}}}),Ws=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[M9]},$$scope:{ctx:B}}}),tl=new xe({}),ol=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),Rs=new $e({props:{$$slots:{default:[E9]},$$scope:{ctx:B}}}),al=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vs=new $e({props:{$$slots:{default:[z9]},$$scope:{ctx:B}}}),Qs=new se({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[P9]},$$scope:{ctx:B}}}),il=new xe({}),ll=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),Js=new $e({props:{$$slots:{default:[q9]},$$scope:{ctx:B}}}),hl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gs=new $e({props:{$$slots:{default:[j9]},$$scope:{ctx:B}}}),Xs=new se({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[C9]},$$scope:{ctx:B}}}),ml=new xe({}),fl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zs=new se({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[N9]},$$scope:{ctx:B}}}),kl=new xe({}),yl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),tr=new $e({props:{$$slots:{default:[O9]},$$scope:{ctx:B}}}),Fl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new $e({props:{$$slots:{default:[A9]},$$scope:{ctx:B}}}),nr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[I9]},$$scope:{ctx:B}}}),sr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[L9]},$$scope:{ctx:B}}}),xl=new xe({}),Bl=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),ar=new $e({props:{$$slots:{default:[D9]},$$scope:{ctx:B}}}),ql=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new $e({props:{$$slots:{default:[S9]},$$scope:{ctx:B}}}),lr=new se({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[U9]},$$scope:{ctx:B}}}),jl=new xe({}),Cl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),cr=new $e({props:{$$slots:{default:[W9]},$$scope:{ctx:B}}}),Il=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new $e({props:{$$slots:{default:[H9]},$$scope:{ctx:B}}}),hr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[R9]},$$scope:{ctx:B}}}),mr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[V9]},$$scope:{ctx:B}}}),Ll=new xe({}),Dl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),ur=new $e({props:{$$slots:{default:[Q9]},$$scope:{ctx:B}}}),Hl=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new $e({props:{$$slots:{default:[K9]},$$scope:{ctx:B}}}),_r=new se({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[J9]},$$scope:{ctx:B}}}),Rl=new xe({}),Vl=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),kr=new $e({props:{$$slots:{default:[G9]},$$scope:{ctx:B}}}),Gl=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yr=new $e({props:{$$slots:{default:[X9]},$$scope:{ctx:B}}}),Tr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[Y9]},$$scope:{ctx:B}}}),vr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[Z9]},$$scope:{ctx:B}}}),Xl=new xe({}),Yl=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),$r=new $e({props:{$$slots:{default:[eN]},$$scope:{ctx:B}}}),od=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new $e({props:{$$slots:{default:[tN]},$$scope:{ctx:B}}}),xr=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),Br=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[nN]},$$scope:{ctx:B}}}),nd=new xe({}),sd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L773"}}),hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new $e({props:{$$slots:{default:[sN]},$$scope:{ctx:B}}}),zr=new se({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[rN]},$$scope:{ctx:B}}}),md=new xe({}),fd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L846"}}),vd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qr=new $e({props:{$$slots:{default:[aN]},$$scope:{ctx:B}}}),jr=new se({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[iN]},$$scope:{ctx:B}}}),wd=new xe({}),$d=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L931"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new $e({props:{$$slots:{default:[lN]},$$scope:{ctx:B}}}),Or=new se({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[dN]},$$scope:{ctx:B}}}),Cd=new xe({}),Nd=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L992"}}),Hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new $e({props:{$$slots:{default:[cN]},$$scope:{ctx:B}}}),Lr=new se({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[pN]},$$scope:{ctx:B}}}),Rd=new xe({}),Vd=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L1090"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $e({props:{$$slots:{default:[hN]},$$scope:{ctx:B}}}),Ur=new se({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[mN]},$$scope:{ctx:B}}}),tc=new xe({}),oc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L1166"}}),cc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new $e({props:{$$slots:{default:[fN]},$$scope:{ctx:B}}}),Rr=new se({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[uN]},$$scope:{ctx:B}}}),pc=new xe({}),hc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L1238"}}),yc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new $e({props:{$$slots:{default:[gN]},$$scope:{ctx:B}}}),Kr=new se({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[_N]},$$scope:{ctx:B}}}),Tc=new xe({}),vc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L1305"}}),zc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16950/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16950/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16950/src/transformers/models/bert/modeling_flax_bert.py#L656",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16950/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
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
and behavior.`),e0=c(),ut=r("div"),T(el.$$.fragment),t0=c(),mn=r("p"),o0=n("The "),vp=r("a"),n0=n("BertForQuestionAnswering"),s0=n(" forward method, overrides the "),Dm=r("code"),r0=n("__call__"),a0=n(" special method."),i0=c(),T(Ss.$$.fragment),l0=c(),T(Us.$$.fragment),d0=c(),T(Ws.$$.fragment),R_=c(),fn=r("h2"),Hs=r("a"),Sm=r("span"),T(tl.$$.fragment),c0=c(),Um=r("span"),p0=n("TFBertModel"),V_=c(),Ke=r("div"),T(ol.$$.fragment),h0=c(),Wm=r("p"),m0=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),f0=c(),nl=r("p"),u0=n("This model inherits from "),wp=r("a"),g0=n("TFPreTrainedModel"),_0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b0=c(),sl=r("p"),k0=n("This model is also a "),rl=r("a"),y0=n("tf.keras.Model"),T0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),v0=c(),T(Rs.$$.fragment),w0=c(),St=r("div"),T(al.$$.fragment),$0=c(),un=r("p"),F0=n("The "),$p=r("a"),x0=n("TFBertModel"),B0=n(" forward method, overrides the "),Hm=r("code"),M0=n("__call__"),E0=n(" special method."),z0=c(),T(Vs.$$.fragment),P0=c(),T(Qs.$$.fragment),Q_=c(),gn=r("h2"),Ks=r("a"),Rm=r("span"),T(il.$$.fragment),q0=c(),Vm=r("span"),j0=n("TFBertForPreTraining"),K_=c(),Je=r("div"),T(ll.$$.fragment),C0=c(),_n=r("p"),N0=n(`Bert Model with two heads on top as done during the pretraining:
a `),Qm=r("code"),O0=n("masked language modeling"),A0=n(" head and a "),Km=r("code"),I0=n("next sentence prediction (classification)"),L0=n(" head."),D0=c(),dl=r("p"),S0=n("This model inherits from "),Fp=r("a"),U0=n("TFPreTrainedModel"),W0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H0=c(),cl=r("p"),R0=n("This model is also a "),pl=r("a"),V0=n("tf.keras.Model"),Q0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K0=c(),T(Js.$$.fragment),J0=c(),Ut=r("div"),T(hl.$$.fragment),G0=c(),bn=r("p"),X0=n("The "),xp=r("a"),Y0=n("TFBertForPreTraining"),Z0=n(" forward method, overrides the "),Jm=r("code"),e2=n("__call__"),t2=n(" special method."),o2=c(),T(Gs.$$.fragment),n2=c(),T(Xs.$$.fragment),J_=c(),kn=r("h2"),Ys=r("a"),Gm=r("span"),T(ml.$$.fragment),s2=c(),Xm=r("span"),r2=n("TFBertModelLMHeadModel"),G_=c(),yn=r("div"),T(fl.$$.fragment),a2=c(),gt=r("div"),T(ul.$$.fragment),i2=c(),Ae=r("p"),l2=n("encoder_hidden_states  ("),Ym=r("code"),d2=n("tf.Tensor"),c2=n(" of shape "),Zm=r("code"),p2=n("(batch_size, sequence_length, hidden_size)"),h2=n(", "),ef=r("em"),m2=n("optional"),f2=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),tf=r("code"),u2=n("tf.Tensor"),g2=n(" of shape "),of=r("code"),_2=n("(batch_size, sequence_length)"),b2=n(", "),nf=r("em"),k2=n("optional"),y2=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),sf=r("code"),T2=n("[0, 1]"),v2=n(":"),w2=c(),gl=r("ul"),_l=r("li"),$2=n("1 for tokens that are "),rf=r("strong"),F2=n("not masked"),x2=n(","),B2=c(),bl=r("li"),M2=n("0 for tokens that are "),af=r("strong"),E2=n("masked"),z2=n("."),P2=c(),G=r("p"),q2=n("past_key_values ("),lf=r("code"),j2=n("Tuple[Tuple[tf.Tensor]]"),C2=n(" of length "),df=r("code"),N2=n("config.n_layers"),O2=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cf=r("code"),A2=n("past_key_values"),I2=n(" are used, the user can optionally input only the last "),pf=r("code"),L2=n("decoder_input_ids"),D2=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),hf=r("code"),S2=n("(batch_size, 1)"),U2=n(` instead of all
`),mf=r("code"),W2=n("decoder_input_ids"),H2=n(" of shape "),ff=r("code"),R2=n("(batch_size, sequence_length)"),V2=n(`.
use_cache (`),uf=r("code"),Q2=n("bool"),K2=n(", "),gf=r("em"),J2=n("optional"),G2=n(", defaults to "),_f=r("code"),X2=n("True"),Y2=n(`):
If set to `),bf=r("code"),Z2=n("True"),eF=n(", "),kf=r("code"),tF=n("past_key_values"),oF=n(` key value states are returned and can be used to speed up decoding (see
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
behavior.`),Gx=c(),T(ur.$$.fragment),Xx=c(),Ht=r("div"),T(Hl.$$.fragment),Yx=c(),Mn=r("p"),Zx=n("The "),Cp=r("a"),eB=n("TFBertForMultipleChoice"),tB=n(" forward method, overrides the "),Wf=r("code"),oB=n("__call__"),nB=n(" special method."),sB=c(),T(gr.$$.fragment),rB=c(),T(_r.$$.fragment),rb=c(),En=r("h2"),br=r("a"),Hf=r("span"),T(Rl.$$.fragment),aB=c(),Rf=r("span"),iB=n("TFBertForTokenClassification"),ab=c(),et=r("div"),T(Vl.$$.fragment),lB=c(),Vf=r("p"),dB=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cB=c(),Ql=r("p"),pB=n("This model inherits from "),Np=r("a"),hB=n("TFPreTrainedModel"),mB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fB=c(),Kl=r("p"),uB=n("This model is also a "),Jl=r("a"),gB=n("tf.keras.Model"),_B=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bB=c(),T(kr.$$.fragment),kB=c(),kt=r("div"),T(Gl.$$.fragment),yB=c(),zn=r("p"),TB=n("The "),Op=r("a"),vB=n("TFBertForTokenClassification"),wB=n(" forward method, overrides the "),Qf=r("code"),$B=n("__call__"),FB=n(" special method."),xB=c(),T(yr.$$.fragment),BB=c(),T(Tr.$$.fragment),MB=c(),T(vr.$$.fragment),ib=c(),Pn=r("h2"),wr=r("a"),Kf=r("span"),T(Xl.$$.fragment),EB=c(),Jf=r("span"),zB=n("TFBertForQuestionAnswering"),lb=c(),tt=r("div"),T(Yl.$$.fragment),PB=c(),qn=r("p"),qB=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gf=r("code"),jB=n("span start logits"),CB=n(" and "),Xf=r("code"),NB=n("span end logits"),OB=n(")."),AB=c(),Zl=r("p"),IB=n("This model inherits from "),Ap=r("a"),LB=n("TFPreTrainedModel"),DB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),SB=c(),ed=r("p"),UB=n("This model is also a "),td=r("a"),WB=n("tf.keras.Model"),HB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RB=c(),T($r.$$.fragment),VB=c(),yt=r("div"),T(od.$$.fragment),QB=c(),jn=r("p"),KB=n("The "),Ip=r("a"),JB=n("TFBertForQuestionAnswering"),GB=n(" forward method, overrides the "),Yf=r("code"),XB=n("__call__"),YB=n(" special method."),ZB=c(),T(Fr.$$.fragment),eM=c(),T(xr.$$.fragment),tM=c(),T(Br.$$.fragment),db=c(),Cn=r("h2"),Mr=r("a"),Zf=r("span"),T(nd.$$.fragment),oM=c(),eu=r("span"),nM=n("FlaxBertModel"),cb=c(),Ie=r("div"),T(sd.$$.fragment),sM=c(),tu=r("p"),rM=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aM=c(),rd=r("p"),iM=n("This model inherits from "),Lp=r("a"),lM=n("FlaxPreTrainedModel"),dM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cM=c(),ad=r("p"),pM=n("This model is also a Flax Linen "),id=r("a"),hM=n("flax.linen.Module"),mM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fM=c(),ou=r("p"),uM=n("Finally, this model supports inherent JAX features such as:"),gM=c(),co=r("ul"),nu=r("li"),ld=r("a"),_M=n("Just-In-Time (JIT) compilation"),bM=c(),su=r("li"),dd=r("a"),kM=n("Automatic Differentiation"),yM=c(),ru=r("li"),cd=r("a"),TM=n("Vectorization"),vM=c(),au=r("li"),pd=r("a"),wM=n("Parallelization"),$M=c(),Rt=r("div"),T(hd.$$.fragment),FM=c(),Nn=r("p"),xM=n("The "),iu=r("code"),BM=n("FlaxBertPreTrainedModel"),MM=n(" forward method, overrides the "),lu=r("code"),EM=n("__call__"),zM=n(" special method."),PM=c(),T(Er.$$.fragment),qM=c(),T(zr.$$.fragment),pb=c(),On=r("h2"),Pr=r("a"),du=r("span"),T(md.$$.fragment),jM=c(),cu=r("span"),CM=n("FlaxBertForPreTraining"),hb=c(),Le=r("div"),T(fd.$$.fragment),NM=c(),An=r("p"),OM=n("Bert Model with two heads on top as done during the pretraining: a "),pu=r("code"),AM=n("masked language modeling"),IM=n(" head and a "),hu=r("code"),LM=n("next sentence prediction (classification)"),DM=n(" head."),SM=c(),ud=r("p"),UM=n("This model inherits from "),Dp=r("a"),WM=n("FlaxPreTrainedModel"),HM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),RM=c(),gd=r("p"),VM=n("This model is also a Flax Linen "),_d=r("a"),QM=n("flax.linen.Module"),KM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),JM=c(),mu=r("p"),GM=n("Finally, this model supports inherent JAX features such as:"),XM=c(),po=r("ul"),fu=r("li"),bd=r("a"),YM=n("Just-In-Time (JIT) compilation"),ZM=c(),uu=r("li"),kd=r("a"),eE=n("Automatic Differentiation"),tE=c(),gu=r("li"),yd=r("a"),oE=n("Vectorization"),nE=c(),_u=r("li"),Td=r("a"),sE=n("Parallelization"),rE=c(),Vt=r("div"),T(vd.$$.fragment),aE=c(),In=r("p"),iE=n("The "),bu=r("code"),lE=n("FlaxBertPreTrainedModel"),dE=n(" forward method, overrides the "),ku=r("code"),cE=n("__call__"),pE=n(" special method."),hE=c(),T(qr.$$.fragment),mE=c(),T(jr.$$.fragment),mb=c(),Ln=r("h2"),Cr=r("a"),yu=r("span"),T(wd.$$.fragment),fE=c(),Tu=r("span"),uE=n("FlaxBertForMaskedLM"),fb=c(),De=r("div"),T($d.$$.fragment),gE=c(),Fd=r("p"),_E=n("Bert Model with a "),vu=r("code"),bE=n("language modeling"),kE=n(" head on top."),yE=c(),xd=r("p"),TE=n("This model inherits from "),Sp=r("a"),vE=n("FlaxPreTrainedModel"),wE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$E=c(),Bd=r("p"),FE=n("This model is also a Flax Linen "),Md=r("a"),xE=n("flax.linen.Module"),BE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ME=c(),wu=r("p"),EE=n("Finally, this model supports inherent JAX features such as:"),zE=c(),ho=r("ul"),$u=r("li"),Ed=r("a"),PE=n("Just-In-Time (JIT) compilation"),qE=c(),Fu=r("li"),zd=r("a"),jE=n("Automatic Differentiation"),CE=c(),xu=r("li"),Pd=r("a"),NE=n("Vectorization"),OE=c(),Bu=r("li"),qd=r("a"),AE=n("Parallelization"),IE=c(),Qt=r("div"),T(jd.$$.fragment),LE=c(),Dn=r("p"),DE=n("The "),Mu=r("code"),SE=n("FlaxBertPreTrainedModel"),UE=n(" forward method, overrides the "),Eu=r("code"),WE=n("__call__"),HE=n(" special method."),RE=c(),T(Nr.$$.fragment),VE=c(),T(Or.$$.fragment),ub=c(),Sn=r("h2"),Ar=r("a"),zu=r("span"),T(Cd.$$.fragment),QE=c(),Pu=r("span"),KE=n("FlaxBertForNextSentencePrediction"),gb=c(),Se=r("div"),T(Nd.$$.fragment),JE=c(),Od=r("p"),GE=n("Bert Model with a "),qu=r("code"),XE=n("next sentence prediction (classification)"),YE=n(" head on top."),ZE=c(),Ad=r("p"),e5=n("This model inherits from "),Up=r("a"),t5=n("FlaxPreTrainedModel"),o5=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n5=c(),Id=r("p"),s5=n("This model is also a Flax Linen "),Ld=r("a"),r5=n("flax.linen.Module"),a5=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i5=c(),ju=r("p"),l5=n("Finally, this model supports inherent JAX features such as:"),d5=c(),mo=r("ul"),Cu=r("li"),Dd=r("a"),c5=n("Just-In-Time (JIT) compilation"),p5=c(),Nu=r("li"),Sd=r("a"),h5=n("Automatic Differentiation"),m5=c(),Ou=r("li"),Ud=r("a"),f5=n("Vectorization"),u5=c(),Au=r("li"),Wd=r("a"),g5=n("Parallelization"),_5=c(),Kt=r("div"),T(Hd.$$.fragment),b5=c(),Un=r("p"),k5=n("The "),Iu=r("code"),y5=n("FlaxBertPreTrainedModel"),T5=n(" forward method, overrides the "),Lu=r("code"),v5=n("__call__"),w5=n(" special method."),$5=c(),T(Ir.$$.fragment),F5=c(),T(Lr.$$.fragment),_b=c(),Wn=r("h2"),Dr=r("a"),Du=r("span"),T(Rd.$$.fragment),x5=c(),Su=r("span"),B5=n("FlaxBertForSequenceClassification"),bb=c(),Ue=r("div"),T(Vd.$$.fragment),M5=c(),Uu=r("p"),E5=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),z5=c(),Qd=r("p"),P5=n("This model inherits from "),Wp=r("a"),q5=n("FlaxPreTrainedModel"),j5=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),C5=c(),Kd=r("p"),N5=n("This model is also a Flax Linen "),Jd=r("a"),O5=n("flax.linen.Module"),A5=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),I5=c(),Wu=r("p"),L5=n("Finally, this model supports inherent JAX features such as:"),D5=c(),fo=r("ul"),Hu=r("li"),Gd=r("a"),S5=n("Just-In-Time (JIT) compilation"),U5=c(),Ru=r("li"),Xd=r("a"),W5=n("Automatic Differentiation"),H5=c(),Vu=r("li"),Yd=r("a"),R5=n("Vectorization"),V5=c(),Qu=r("li"),Zd=r("a"),Q5=n("Parallelization"),K5=c(),Jt=r("div"),T(ec.$$.fragment),J5=c(),Hn=r("p"),G5=n("The "),Ku=r("code"),X5=n("FlaxBertPreTrainedModel"),Y5=n(" forward method, overrides the "),Ju=r("code"),Z5=n("__call__"),e6=n(" special method."),t6=c(),T(Sr.$$.fragment),o6=c(),T(Ur.$$.fragment),kb=c(),Rn=r("h2"),Wr=r("a"),Gu=r("span"),T(tc.$$.fragment),n6=c(),Xu=r("span"),s6=n("FlaxBertForMultipleChoice"),yb=c(),We=r("div"),T(oc.$$.fragment),r6=c(),Yu=r("p"),a6=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),i6=c(),nc=r("p"),l6=n("This model inherits from "),Hp=r("a"),d6=n("FlaxPreTrainedModel"),c6=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p6=c(),sc=r("p"),h6=n("This model is also a Flax Linen "),rc=r("a"),m6=n("flax.linen.Module"),f6=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),u6=c(),Zu=r("p"),g6=n("Finally, this model supports inherent JAX features such as:"),_6=c(),uo=r("ul"),eg=r("li"),ac=r("a"),b6=n("Just-In-Time (JIT) compilation"),k6=c(),tg=r("li"),ic=r("a"),y6=n("Automatic Differentiation"),T6=c(),og=r("li"),lc=r("a"),v6=n("Vectorization"),w6=c(),ng=r("li"),dc=r("a"),$6=n("Parallelization"),F6=c(),Gt=r("div"),T(cc.$$.fragment),x6=c(),Vn=r("p"),B6=n("The "),sg=r("code"),M6=n("FlaxBertPreTrainedModel"),E6=n(" forward method, overrides the "),rg=r("code"),z6=n("__call__"),P6=n(" special method."),q6=c(),T(Hr.$$.fragment),j6=c(),T(Rr.$$.fragment),Tb=c(),Qn=r("h2"),Vr=r("a"),ag=r("span"),T(pc.$$.fragment),C6=c(),ig=r("span"),N6=n("FlaxBertForTokenClassification"),vb=c(),He=r("div"),T(hc.$$.fragment),O6=c(),lg=r("p"),A6=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),I6=c(),mc=r("p"),L6=n("This model inherits from "),Rp=r("a"),D6=n("FlaxPreTrainedModel"),S6=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),U6=c(),fc=r("p"),W6=n("This model is also a Flax Linen "),uc=r("a"),H6=n("flax.linen.Module"),R6=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),V6=c(),dg=r("p"),Q6=n("Finally, this model supports inherent JAX features such as:"),K6=c(),go=r("ul"),cg=r("li"),gc=r("a"),J6=n("Just-In-Time (JIT) compilation"),G6=c(),pg=r("li"),_c=r("a"),X6=n("Automatic Differentiation"),Y6=c(),hg=r("li"),bc=r("a"),Z6=n("Vectorization"),ez=c(),mg=r("li"),kc=r("a"),tz=n("Parallelization"),oz=c(),Xt=r("div"),T(yc.$$.fragment),nz=c(),Kn=r("p"),sz=n("The "),fg=r("code"),rz=n("FlaxBertPreTrainedModel"),az=n(" forward method, overrides the "),ug=r("code"),iz=n("__call__"),lz=n(" special method."),dz=c(),T(Qr.$$.fragment),cz=c(),T(Kr.$$.fragment),wb=c(),Jn=r("h2"),Jr=r("a"),gg=r("span"),T(Tc.$$.fragment),pz=c(),_g=r("span"),hz=n("FlaxBertForQuestionAnswering"),$b=c(),Re=r("div"),T(vc.$$.fragment),mz=c(),Gn=r("p"),fz=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=r("code"),uz=n("span start logits"),gz=n(" and "),kg=r("code"),_z=n("span end logits"),bz=n(")."),kz=c(),wc=r("p"),yz=n("This model inherits from "),Vp=r("a"),Tz=n("FlaxPreTrainedModel"),vz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wz=c(),$c=r("p"),$z=n("This model is also a Flax Linen "),Fc=r("a"),Fz=n("flax.linen.Module"),xz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Bz=c(),yg=r("p"),Mz=n("Finally, this model supports inherent JAX features such as:"),Ez=c(),_o=r("ul"),Tg=r("li"),xc=r("a"),zz=n("Just-In-Time (JIT) compilation"),Pz=c(),vg=r("li"),Bc=r("a"),qz=n("Automatic Differentiation"),jz=c(),wg=r("li"),Mc=r("a"),Cz=n("Vectorization"),Nz=c(),$g=r("li"),Ec=r("a"),Oz=n("Parallelization"),Az=c(),Yt=r("div"),T(zc.$$.fragment),Iz=c(),Xn=r("p"),Lz=n("The "),Fg=r("code"),Dz=n("FlaxBertPreTrainedModel"),Sz=n(" forward method, overrides the "),xg=r("code"),Uz=n("__call__"),Wz=n(" special method."),Hz=c(),T(Gr.$$.fragment),Rz=c(),T(Xr.$$.fragment),this.h()},l(o){const k=e9('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),h=a(o,"H1",{class:!0});var Pc=i(h);m=a(Pc,"A",{id:!0,class:!0,href:!0});var Bg=i(m);g=a(Bg,"SPAN",{});var Mg=i(g);v(l.$$.fragment,Mg),Mg.forEach(t),Bg.forEach(t),f=p(Pc),M=a(Pc,"SPAN",{});var Eg=i(M);be=s(Eg,"BERT"),Eg.forEach(t),Pc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var qc=i(z);ee=a(qc,"A",{id:!0,class:!0,href:!0});var zg=i(ee);L=a(zg,"SPAN",{});var Pg=i(L);v(oe.$$.fragment,Pg),Pg.forEach(t),zg.forEach(t),ke=p(qc),D=a(qc,"SPAN",{});var qg=i(D);ye=s(qg,"Overview"),qg.forEach(t),qc.forEach(t),me=p(o),J=a(o,"P",{});var jc=i(J);O=s(jc,"The BERT model was proposed in "),ne=a(jc,"A",{href:!0,rel:!0});var jg=i(ne);Y=s(jg,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),jg.forEach(t),P=s(jc,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
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
adding special tokens. A BERT sequence has the following format:`),g_.forEach(t),yT=p(os),Da=a(os,"UL",{});var Hc=i(Da);ep=a(Hc,"LI",{});var Jp=i(ep);TT=s(Jp,"single sequence: "),Wh=a(Jp,"CODE",{});var __=i(Wh);vT=s(__,"[CLS] X [SEP]"),__.forEach(t),Jp.forEach(t),wT=p(Hc),tp=a(Hc,"LI",{});var Vz=i(tp);$T=s(Vz,"pair of sequences: "),Hh=a(Vz,"CODE",{});var Qz=i(Hh);FT=s(Qz,"[CLS] A [SEP] B [SEP]"),Qz.forEach(t),Vz.forEach(t),Hc.forEach(t),os.forEach(t),xT=p(jt),Nt=a(jt,"DIV",{class:!0});var Yr=i(Nt);v(Sa.$$.fragment,Yr),BT=p(Yr),Rh=a(Yr,"P",{});var Kz=i(Rh);MT=s(Kz,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Kz.forEach(t),ET=p(Yr),v(ls.$$.fragment,Yr),zT=p(Yr),Wo=a(Yr,"P",{});var Gp=i(Wo);PT=s(Gp,"If "),Vh=a(Gp,"CODE",{});var Jz=i(Vh);qT=s(Jz,"token_ids_1"),Jz.forEach(t),jT=s(Gp," is "),Qh=a(Gp,"CODE",{});var Gz=i(Qh);CT=s(Gz,"None"),Gz.forEach(t),NT=s(Gp,", this method only returns the first portion of the mask (0s)."),Gp.forEach(t),Yr.forEach(t),jt.forEach(t),w_=p(o),Ho=a(o,"H2",{class:!0});var xb=i(Ho);ds=a(xb,"A",{id:!0,class:!0,href:!0});var Xz=i(ds);Kh=a(Xz,"SPAN",{});var Yz=i(Kh);v(Ua.$$.fragment,Yz),Yz.forEach(t),Xz.forEach(t),OT=p(xb),Jh=a(xb,"SPAN",{});var Zz=i(Jh);AT=s(Zz,"Bert specific outputs"),Zz.forEach(t),xb.forEach(t),$_=p(o),Ro=a(o,"DIV",{class:!0});var Bb=i(Ro);v(Wa.$$.fragment,Bb),IT=p(Bb),Ha=a(Bb,"P",{});var Mb=i(Ha);LT=s(Mb,"Output type of "),op=a(Mb,"A",{href:!0});var e4=i(op);DT=s(e4,"BertForPreTraining"),e4.forEach(t),ST=s(Mb,"."),Mb.forEach(t),Bb.forEach(t),F_=p(o),Vo=a(o,"DIV",{class:!0});var Eb=i(Vo);v(Ra.$$.fragment,Eb),UT=p(Eb),Va=a(Eb,"P",{});var zb=i(Va);WT=s(zb,"Output type of "),np=a(zb,"A",{href:!0});var t4=i(np);HT=s(t4,"TFBertForPreTraining"),t4.forEach(t),RT=s(zb,"."),zb.forEach(t),Eb.forEach(t),x_=p(o),lo=a(o,"DIV",{class:!0});var Xp=i(lo);v(Qa.$$.fragment,Xp),VT=p(Xp),Ka=a(Xp,"P",{});var Pb=i(Ka);QT=s(Pb,"Output type of "),sp=a(Pb,"A",{href:!0});var o4=i(sp);KT=s(o4,"BertForPreTraining"),o4.forEach(t),JT=s(Pb,"."),Pb.forEach(t),GT=p(Xp),cs=a(Xp,"DIV",{class:!0});var qb=i(cs);v(Ja.$$.fragment,qb),XT=p(qb),Gh=a(qb,"P",{});var n4=i(Gh);YT=s(n4,"\u201CReturns a new object replacing the specified fields with new values."),n4.forEach(t),qb.forEach(t),Xp.forEach(t),B_=p(o),Qo=a(o,"H2",{class:!0});var jb=i(Qo);ps=a(jb,"A",{id:!0,class:!0,href:!0});var s4=i(ps);Xh=a(s4,"SPAN",{});var r4=i(Xh);v(Ga.$$.fragment,r4),r4.forEach(t),s4.forEach(t),ZT=p(jb),Yh=a(jb,"SPAN",{});var a4=i(Yh);ev=s(a4,"BertModel"),a4.forEach(t),jb.forEach(t),M_=p(o),Oe=a(o,"DIV",{class:!0});var Tt=i(Oe);v(Xa.$$.fragment,Tt),tv=p(Tt),Zh=a(Tt,"P",{});var i4=i(Zh);ov=s(i4,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),i4.forEach(t),nv=p(Tt),Ya=a(Tt,"P",{});var Cb=i(Ya);sv=s(Cb,"This model inherits from "),rp=a(Cb,"A",{href:!0});var l4=i(rp);rv=s(l4,"PreTrainedModel"),l4.forEach(t),av=s(Cb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb.forEach(t),iv=p(Tt),Za=a(Tt,"P",{});var Nb=i(Za);lv=s(Nb,"This model is also a PyTorch "),ei=a(Nb,"A",{href:!0,rel:!0});var d4=i(ei);dv=s(d4,"torch.nn.Module"),d4.forEach(t),cv=s(Nb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb.forEach(t),pv=p(Tt),ti=a(Tt,"P",{});var Ob=i(ti);hv=s(Ob,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=a(Ob,"A",{href:!0,rel:!0});var c4=i(oi);mv=s(c4,`Attention is
all you need`),c4.forEach(t),fv=s(Ob,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ob.forEach(t),uv=p(Tt),Qe=a(Tt,"P",{});var vt=i(Qe);gv=s(vt,"To behave as an decoder the model needs to be initialized with the "),em=a(vt,"CODE",{});var p4=i(em);_v=s(p4,"is_decoder"),p4.forEach(t),bv=s(vt,` argument of the configuration set
to `),tm=a(vt,"CODE",{});var h4=i(tm);kv=s(h4,"True"),h4.forEach(t),yv=s(vt,". To be used in a Seq2Seq model, the model needs to initialized with both "),om=a(vt,"CODE",{});var m4=i(om);Tv=s(m4,"is_decoder"),m4.forEach(t),vv=s(vt,` argument and
`),nm=a(vt,"CODE",{});var f4=i(nm);wv=s(f4,"add_cross_attention"),f4.forEach(t),$v=s(vt," set to "),sm=a(vt,"CODE",{});var u4=i(sm);Fv=s(u4,"True"),u4.forEach(t),xv=s(vt,"; an "),rm=a(vt,"CODE",{});var g4=i(rm);Bv=s(g4,"encoder_hidden_states"),g4.forEach(t),Mv=s(vt," is then expected as an input to the forward pass."),vt.forEach(t),Ev=p(Tt),Ot=a(Tt,"DIV",{class:!0});var Zr=i(Ot);v(ni.$$.fragment,Zr),zv=p(Zr),Ko=a(Zr,"P",{});var Yp=i(Ko);Pv=s(Yp,"The "),ap=a(Yp,"A",{href:!0});var _4=i(ap);qv=s(_4,"BertModel"),_4.forEach(t),jv=s(Yp," forward method, overrides the "),am=a(Yp,"CODE",{});var b4=i(am);Cv=s(b4,"__call__"),b4.forEach(t),Nv=s(Yp," special method."),Yp.forEach(t),Ov=p(Zr),v(hs.$$.fragment,Zr),Av=p(Zr),v(ms.$$.fragment,Zr),Zr.forEach(t),Tt.forEach(t),E_=p(o),Jo=a(o,"H2",{class:!0});var Ab=i(Jo);fs=a(Ab,"A",{id:!0,class:!0,href:!0});var k4=i(fs);im=a(k4,"SPAN",{});var y4=i(im);v(si.$$.fragment,y4),y4.forEach(t),k4.forEach(t),Iv=p(Ab),lm=a(Ab,"SPAN",{});var T4=i(lm);Lv=s(T4,"BertForPreTraining"),T4.forEach(t),Ab.forEach(t),z_=p(o),rt=a(o,"DIV",{class:!0});var wo=i(rt);v(ri.$$.fragment,wo),Dv=p(wo),Go=a(wo,"P",{});var Zp=i(Go);Sv=s(Zp,"Bert Model with two heads on top as done during the pretraining: a "),dm=a(Zp,"CODE",{});var v4=i(dm);Uv=s(v4,"masked language modeling"),v4.forEach(t),Wv=s(Zp," head and a "),cm=a(Zp,"CODE",{});var w4=i(cm);Hv=s(w4,"next sentence prediction (classification)"),w4.forEach(t),Rv=s(Zp," head."),Zp.forEach(t),Vv=p(wo),ai=a(wo,"P",{});var Ib=i(ai);Qv=s(Ib,"This model inherits from "),ip=a(Ib,"A",{href:!0});var $4=i(ip);Kv=s($4,"PreTrainedModel"),$4.forEach(t),Jv=s(Ib,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib.forEach(t),Gv=p(wo),ii=a(wo,"P",{});var Lb=i(ii);Xv=s(Lb,"This model is also a PyTorch "),li=a(Lb,"A",{href:!0,rel:!0});var F4=i(li);Yv=s(F4,"torch.nn.Module"),F4.forEach(t),Zv=s(Lb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lb.forEach(t),e1=p(wo),At=a(wo,"DIV",{class:!0});var ea=i(At);v(di.$$.fragment,ea),t1=p(ea),Xo=a(ea,"P",{});var eh=i(Xo);o1=s(eh,"The "),lp=a(eh,"A",{href:!0});var x4=i(lp);n1=s(x4,"BertForPreTraining"),x4.forEach(t),s1=s(eh," forward method, overrides the "),pm=a(eh,"CODE",{});var B4=i(pm);r1=s(B4,"__call__"),B4.forEach(t),a1=s(eh," special method."),eh.forEach(t),i1=p(ea),v(us.$$.fragment,ea),l1=p(ea),v(gs.$$.fragment,ea),ea.forEach(t),wo.forEach(t),P_=p(o),Yo=a(o,"H2",{class:!0});var Db=i(Yo);_s=a(Db,"A",{id:!0,class:!0,href:!0});var M4=i(_s);hm=a(M4,"SPAN",{});var E4=i(hm);v(ci.$$.fragment,E4),E4.forEach(t),M4.forEach(t),d1=p(Db),mm=a(Db,"SPAN",{});var z4=i(mm);c1=s(z4,"BertLMHeadModel"),z4.forEach(t),Db.forEach(t),q_=p(o),at=a(o,"DIV",{class:!0});var $o=i(at);v(pi.$$.fragment,$o),p1=p($o),hi=a($o,"P",{});var Sb=i(hi);h1=s(Sb,"Bert Model with a "),fm=a(Sb,"CODE",{});var P4=i(fm);m1=s(P4,"language modeling"),P4.forEach(t),f1=s(Sb," head on top for CLM fine-tuning."),Sb.forEach(t),u1=p($o),mi=a($o,"P",{});var Ub=i(mi);g1=s(Ub,"This model inherits from "),dp=a(Ub,"A",{href:!0});var q4=i(dp);_1=s(q4,"PreTrainedModel"),q4.forEach(t),b1=s(Ub,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub.forEach(t),k1=p($o),fi=a($o,"P",{});var Wb=i(fi);y1=s(Wb,"This model is also a PyTorch "),ui=a(Wb,"A",{href:!0,rel:!0});var j4=i(ui);T1=s(j4,"torch.nn.Module"),j4.forEach(t),v1=s(Wb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wb.forEach(t),w1=p($o),It=a($o,"DIV",{class:!0});var ta=i(It);v(gi.$$.fragment,ta),$1=p(ta),Zo=a(ta,"P",{});var th=i(Zo);F1=s(th,"The "),cp=a(th,"A",{href:!0});var C4=i(cp);x1=s(C4,"BertLMHeadModel"),C4.forEach(t),B1=s(th," forward method, overrides the "),um=a(th,"CODE",{});var N4=i(um);M1=s(N4,"__call__"),N4.forEach(t),E1=s(th," special method."),th.forEach(t),z1=p(ta),v(bs.$$.fragment,ta),P1=p(ta),v(ks.$$.fragment,ta),ta.forEach(t),$o.forEach(t),j_=p(o),en=a(o,"H2",{class:!0});var Hb=i(en);ys=a(Hb,"A",{id:!0,class:!0,href:!0});var O4=i(ys);gm=a(O4,"SPAN",{});var A4=i(gm);v(_i.$$.fragment,A4),A4.forEach(t),O4.forEach(t),q1=p(Hb),_m=a(Hb,"SPAN",{});var I4=i(_m);j1=s(I4,"BertForMaskedLM"),I4.forEach(t),Hb.forEach(t),C_=p(o),it=a(o,"DIV",{class:!0});var Fo=i(it);v(bi.$$.fragment,Fo),C1=p(Fo),ki=a(Fo,"P",{});var Rb=i(ki);N1=s(Rb,"Bert Model with a "),bm=a(Rb,"CODE",{});var L4=i(bm);O1=s(L4,"language modeling"),L4.forEach(t),A1=s(Rb," head on top."),Rb.forEach(t),I1=p(Fo),yi=a(Fo,"P",{});var Vb=i(yi);L1=s(Vb,"This model inherits from "),pp=a(Vb,"A",{href:!0});var D4=i(pp);D1=s(D4,"PreTrainedModel"),D4.forEach(t),S1=s(Vb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vb.forEach(t),U1=p(Fo),Ti=a(Fo,"P",{});var Qb=i(Ti);W1=s(Qb,"This model is also a PyTorch "),vi=a(Qb,"A",{href:!0,rel:!0});var S4=i(vi);H1=s(S4,"torch.nn.Module"),S4.forEach(t),R1=s(Qb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qb.forEach(t),V1=p(Fo),mt=a(Fo,"DIV",{class:!0});var xo=i(mt);v(wi.$$.fragment,xo),Q1=p(xo),tn=a(xo,"P",{});var oh=i(tn);K1=s(oh,"The "),hp=a(oh,"A",{href:!0});var U4=i(hp);J1=s(U4,"BertForMaskedLM"),U4.forEach(t),G1=s(oh," forward method, overrides the "),km=a(oh,"CODE",{});var W4=i(km);X1=s(W4,"__call__"),W4.forEach(t),Y1=s(oh," special method."),oh.forEach(t),Z1=p(xo),v(Ts.$$.fragment,xo),ew=p(xo),v(vs.$$.fragment,xo),tw=p(xo),v(ws.$$.fragment,xo),xo.forEach(t),Fo.forEach(t),N_=p(o),on=a(o,"H2",{class:!0});var Kb=i(on);$s=a(Kb,"A",{id:!0,class:!0,href:!0});var H4=i($s);ym=a(H4,"SPAN",{});var R4=i(ym);v($i.$$.fragment,R4),R4.forEach(t),H4.forEach(t),ow=p(Kb),Tm=a(Kb,"SPAN",{});var V4=i(Tm);nw=s(V4,"BertForNextSentencePrediction"),V4.forEach(t),Kb.forEach(t),O_=p(o),lt=a(o,"DIV",{class:!0});var Bo=i(lt);v(Fi.$$.fragment,Bo),sw=p(Bo),xi=a(Bo,"P",{});var Jb=i(xi);rw=s(Jb,"Bert Model with a "),vm=a(Jb,"CODE",{});var Q4=i(vm);aw=s(Q4,"next sentence prediction (classification)"),Q4.forEach(t),iw=s(Jb," head on top."),Jb.forEach(t),lw=p(Bo),Bi=a(Bo,"P",{});var Gb=i(Bi);dw=s(Gb,"This model inherits from "),mp=a(Gb,"A",{href:!0});var K4=i(mp);cw=s(K4,"PreTrainedModel"),K4.forEach(t),pw=s(Gb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gb.forEach(t),hw=p(Bo),Mi=a(Bo,"P",{});var Xb=i(Mi);mw=s(Xb,"This model is also a PyTorch "),Ei=a(Xb,"A",{href:!0,rel:!0});var J4=i(Ei);fw=s(J4,"torch.nn.Module"),J4.forEach(t),uw=s(Xb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xb.forEach(t),gw=p(Bo),Lt=a(Bo,"DIV",{class:!0});var oa=i(Lt);v(zi.$$.fragment,oa),_w=p(oa),nn=a(oa,"P",{});var nh=i(nn);bw=s(nh,"The "),fp=a(nh,"A",{href:!0});var G4=i(fp);kw=s(G4,"BertForNextSentencePrediction"),G4.forEach(t),yw=s(nh," forward method, overrides the "),wm=a(nh,"CODE",{});var X4=i(wm);Tw=s(X4,"__call__"),X4.forEach(t),vw=s(nh," special method."),nh.forEach(t),ww=p(oa),v(Fs.$$.fragment,oa),$w=p(oa),v(xs.$$.fragment,oa),oa.forEach(t),Bo.forEach(t),A_=p(o),sn=a(o,"H2",{class:!0});var Yb=i(sn);Bs=a(Yb,"A",{id:!0,class:!0,href:!0});var Y4=i(Bs);$m=a(Y4,"SPAN",{});var Z4=i($m);v(Pi.$$.fragment,Z4),Z4.forEach(t),Y4.forEach(t),Fw=p(Yb),Fm=a(Yb,"SPAN",{});var eP=i(Fm);xw=s(eP,"BertForSequenceClassification"),eP.forEach(t),Yb.forEach(t),I_=p(o),dt=a(o,"DIV",{class:!0});var Mo=i(dt);v(qi.$$.fragment,Mo),Bw=p(Mo),xm=a(Mo,"P",{});var tP=i(xm);Mw=s(tP,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),tP.forEach(t),Ew=p(Mo),ji=a(Mo,"P",{});var Zb=i(ji);zw=s(Zb,"This model inherits from "),up=a(Zb,"A",{href:!0});var oP=i(up);Pw=s(oP,"PreTrainedModel"),oP.forEach(t),qw=s(Zb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb.forEach(t),jw=p(Mo),Ci=a(Mo,"P",{});var ek=i(Ci);Cw=s(ek,"This model is also a PyTorch "),Ni=a(ek,"A",{href:!0,rel:!0});var nP=i(Ni);Nw=s(nP,"torch.nn.Module"),nP.forEach(t),Ow=s(ek,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ek.forEach(t),Aw=p(Mo),Ve=a(Mo,"DIV",{class:!0});var wt=i(Ve);v(Oi.$$.fragment,wt),Iw=p(wt),rn=a(wt,"P",{});var sh=i(rn);Lw=s(sh,"The "),gp=a(sh,"A",{href:!0});var sP=i(gp);Dw=s(sP,"BertForSequenceClassification"),sP.forEach(t),Sw=s(sh," forward method, overrides the "),Bm=a(sh,"CODE",{});var rP=i(Bm);Uw=s(rP,"__call__"),rP.forEach(t),Ww=s(sh," special method."),sh.forEach(t),Hw=p(wt),v(Ms.$$.fragment,wt),Rw=p(wt),v(Es.$$.fragment,wt),Vw=p(wt),v(zs.$$.fragment,wt),Qw=p(wt),v(Ps.$$.fragment,wt),Kw=p(wt),v(qs.$$.fragment,wt),wt.forEach(t),Mo.forEach(t),L_=p(o),an=a(o,"H2",{class:!0});var tk=i(an);js=a(tk,"A",{id:!0,class:!0,href:!0});var aP=i(js);Mm=a(aP,"SPAN",{});var iP=i(Mm);v(Ai.$$.fragment,iP),iP.forEach(t),aP.forEach(t),Jw=p(tk),Em=a(tk,"SPAN",{});var lP=i(Em);Gw=s(lP,"BertForMultipleChoice"),lP.forEach(t),tk.forEach(t),D_=p(o),ct=a(o,"DIV",{class:!0});var Eo=i(ct);v(Ii.$$.fragment,Eo),Xw=p(Eo),zm=a(Eo,"P",{});var dP=i(zm);Yw=s(dP,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dP.forEach(t),Zw=p(Eo),Li=a(Eo,"P",{});var ok=i(Li);e$=s(ok,"This model inherits from "),_p=a(ok,"A",{href:!0});var cP=i(_p);t$=s(cP,"PreTrainedModel"),cP.forEach(t),o$=s(ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok.forEach(t),n$=p(Eo),Di=a(Eo,"P",{});var nk=i(Di);s$=s(nk,"This model is also a PyTorch "),Si=a(nk,"A",{href:!0,rel:!0});var pP=i(Si);r$=s(pP,"torch.nn.Module"),pP.forEach(t),a$=s(nk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nk.forEach(t),i$=p(Eo),Dt=a(Eo,"DIV",{class:!0});var na=i(Dt);v(Ui.$$.fragment,na),l$=p(na),ln=a(na,"P",{});var rh=i(ln);d$=s(rh,"The "),bp=a(rh,"A",{href:!0});var hP=i(bp);c$=s(hP,"BertForMultipleChoice"),hP.forEach(t),p$=s(rh," forward method, overrides the "),Pm=a(rh,"CODE",{});var mP=i(Pm);h$=s(mP,"__call__"),mP.forEach(t),m$=s(rh," special method."),rh.forEach(t),f$=p(na),v(Cs.$$.fragment,na),u$=p(na),v(Ns.$$.fragment,na),na.forEach(t),Eo.forEach(t),S_=p(o),dn=a(o,"H2",{class:!0});var sk=i(dn);Os=a(sk,"A",{id:!0,class:!0,href:!0});var fP=i(Os);qm=a(fP,"SPAN",{});var uP=i(qm);v(Wi.$$.fragment,uP),uP.forEach(t),fP.forEach(t),g$=p(sk),jm=a(sk,"SPAN",{});var gP=i(jm);_$=s(gP,"BertForTokenClassification"),gP.forEach(t),sk.forEach(t),U_=p(o),pt=a(o,"DIV",{class:!0});var zo=i(pt);v(Hi.$$.fragment,zo),b$=p(zo),Cm=a(zo,"P",{});var _P=i(Cm);k$=s(_P,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_P.forEach(t),y$=p(zo),Ri=a(zo,"P",{});var rk=i(Ri);T$=s(rk,"This model inherits from "),kp=a(rk,"A",{href:!0});var bP=i(kp);v$=s(bP,"PreTrainedModel"),bP.forEach(t),w$=s(rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk.forEach(t),$$=p(zo),Vi=a(zo,"P",{});var ak=i(Vi);F$=s(ak,"This model is also a PyTorch "),Qi=a(ak,"A",{href:!0,rel:!0});var kP=i(Qi);x$=s(kP,"torch.nn.Module"),kP.forEach(t),B$=s(ak,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak.forEach(t),M$=p(zo),ft=a(zo,"DIV",{class:!0});var Po=i(ft);v(Ki.$$.fragment,Po),E$=p(Po),cn=a(Po,"P",{});var ah=i(cn);z$=s(ah,"The "),yp=a(ah,"A",{href:!0});var yP=i(yp);P$=s(yP,"BertForTokenClassification"),yP.forEach(t),q$=s(ah," forward method, overrides the "),Nm=a(ah,"CODE",{});var TP=i(Nm);j$=s(TP,"__call__"),TP.forEach(t),C$=s(ah," special method."),ah.forEach(t),N$=p(Po),v(As.$$.fragment,Po),O$=p(Po),v(Is.$$.fragment,Po),A$=p(Po),v(Ls.$$.fragment,Po),Po.forEach(t),zo.forEach(t),W_=p(o),pn=a(o,"H2",{class:!0});var ik=i(pn);Ds=a(ik,"A",{id:!0,class:!0,href:!0});var vP=i(Ds);Om=a(vP,"SPAN",{});var wP=i(Om);v(Ji.$$.fragment,wP),wP.forEach(t),vP.forEach(t),I$=p(ik),Am=a(ik,"SPAN",{});var $P=i(Am);L$=s($P,"BertForQuestionAnswering"),$P.forEach(t),ik.forEach(t),H_=p(o),ht=a(o,"DIV",{class:!0});var qo=i(ht);v(Gi.$$.fragment,qo),D$=p(qo),hn=a(qo,"P",{});var ih=i(hn);S$=s(ih,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Im=a(ih,"CODE",{});var FP=i(Im);U$=s(FP,"span start logits"),FP.forEach(t),W$=s(ih," and "),Lm=a(ih,"CODE",{});var xP=i(Lm);H$=s(xP,"span end logits"),xP.forEach(t),R$=s(ih,")."),ih.forEach(t),V$=p(qo),Xi=a(qo,"P",{});var lk=i(Xi);Q$=s(lk,"This model inherits from "),Tp=a(lk,"A",{href:!0});var BP=i(Tp);K$=s(BP,"PreTrainedModel"),BP.forEach(t),J$=s(lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk.forEach(t),G$=p(qo),Yi=a(qo,"P",{});var dk=i(Yi);X$=s(dk,"This model is also a PyTorch "),Zi=a(dk,"A",{href:!0,rel:!0});var MP=i(Zi);Y$=s(MP,"torch.nn.Module"),MP.forEach(t),Z$=s(dk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dk.forEach(t),e0=p(qo),ut=a(qo,"DIV",{class:!0});var jo=i(ut);v(el.$$.fragment,jo),t0=p(jo),mn=a(jo,"P",{});var lh=i(mn);o0=s(lh,"The "),vp=a(lh,"A",{href:!0});var EP=i(vp);n0=s(EP,"BertForQuestionAnswering"),EP.forEach(t),s0=s(lh," forward method, overrides the "),Dm=a(lh,"CODE",{});var zP=i(Dm);r0=s(zP,"__call__"),zP.forEach(t),a0=s(lh," special method."),lh.forEach(t),i0=p(jo),v(Ss.$$.fragment,jo),l0=p(jo),v(Us.$$.fragment,jo),d0=p(jo),v(Ws.$$.fragment,jo),jo.forEach(t),qo.forEach(t),R_=p(o),fn=a(o,"H2",{class:!0});var ck=i(fn);Hs=a(ck,"A",{id:!0,class:!0,href:!0});var PP=i(Hs);Sm=a(PP,"SPAN",{});var qP=i(Sm);v(tl.$$.fragment,qP),qP.forEach(t),PP.forEach(t),c0=p(ck),Um=a(ck,"SPAN",{});var jP=i(Um);p0=s(jP,"TFBertModel"),jP.forEach(t),ck.forEach(t),V_=p(o),Ke=a(o,"DIV",{class:!0});var Zt=i(Ke);v(ol.$$.fragment,Zt),h0=p(Zt),Wm=a(Zt,"P",{});var CP=i(Wm);m0=s(CP,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),CP.forEach(t),f0=p(Zt),nl=a(Zt,"P",{});var pk=i(nl);u0=s(pk,"This model inherits from "),wp=a(pk,"A",{href:!0});var NP=i(wp);g0=s(NP,"TFPreTrainedModel"),NP.forEach(t),_0=s(pk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pk.forEach(t),b0=p(Zt),sl=a(Zt,"P",{});var hk=i(sl);k0=s(hk,"This model is also a "),rl=a(hk,"A",{href:!0,rel:!0});var OP=i(rl);y0=s(OP,"tf.keras.Model"),OP.forEach(t),T0=s(hk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hk.forEach(t),v0=p(Zt),v(Rs.$$.fragment,Zt),w0=p(Zt),St=a(Zt,"DIV",{class:!0});var sa=i(St);v(al.$$.fragment,sa),$0=p(sa),un=a(sa,"P",{});var dh=i(un);F0=s(dh,"The "),$p=a(dh,"A",{href:!0});var AP=i($p);x0=s(AP,"TFBertModel"),AP.forEach(t),B0=s(dh," forward method, overrides the "),Hm=a(dh,"CODE",{});var IP=i(Hm);M0=s(IP,"__call__"),IP.forEach(t),E0=s(dh," special method."),dh.forEach(t),z0=p(sa),v(Vs.$$.fragment,sa),P0=p(sa),v(Qs.$$.fragment,sa),sa.forEach(t),Zt.forEach(t),Q_=p(o),gn=a(o,"H2",{class:!0});var mk=i(gn);Ks=a(mk,"A",{id:!0,class:!0,href:!0});var LP=i(Ks);Rm=a(LP,"SPAN",{});var DP=i(Rm);v(il.$$.fragment,DP),DP.forEach(t),LP.forEach(t),q0=p(mk),Vm=a(mk,"SPAN",{});var SP=i(Vm);j0=s(SP,"TFBertForPreTraining"),SP.forEach(t),mk.forEach(t),K_=p(o),Je=a(o,"DIV",{class:!0});var eo=i(Je);v(ll.$$.fragment,eo),C0=p(eo),_n=a(eo,"P",{});var ch=i(_n);N0=s(ch,`Bert Model with two heads on top as done during the pretraining:
a `),Qm=a(ch,"CODE",{});var UP=i(Qm);O0=s(UP,"masked language modeling"),UP.forEach(t),A0=s(ch," head and a "),Km=a(ch,"CODE",{});var WP=i(Km);I0=s(WP,"next sentence prediction (classification)"),WP.forEach(t),L0=s(ch," head."),ch.forEach(t),D0=p(eo),dl=a(eo,"P",{});var fk=i(dl);S0=s(fk,"This model inherits from "),Fp=a(fk,"A",{href:!0});var HP=i(Fp);U0=s(HP,"TFPreTrainedModel"),HP.forEach(t),W0=s(fk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fk.forEach(t),H0=p(eo),cl=a(eo,"P",{});var uk=i(cl);R0=s(uk,"This model is also a "),pl=a(uk,"A",{href:!0,rel:!0});var RP=i(pl);V0=s(RP,"tf.keras.Model"),RP.forEach(t),Q0=s(uk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uk.forEach(t),K0=p(eo),v(Js.$$.fragment,eo),J0=p(eo),Ut=a(eo,"DIV",{class:!0});var ra=i(Ut);v(hl.$$.fragment,ra),G0=p(ra),bn=a(ra,"P",{});var ph=i(bn);X0=s(ph,"The "),xp=a(ph,"A",{href:!0});var VP=i(xp);Y0=s(VP,"TFBertForPreTraining"),VP.forEach(t),Z0=s(ph," forward method, overrides the "),Jm=a(ph,"CODE",{});var QP=i(Jm);e2=s(QP,"__call__"),QP.forEach(t),t2=s(ph," special method."),ph.forEach(t),o2=p(ra),v(Gs.$$.fragment,ra),n2=p(ra),v(Xs.$$.fragment,ra),ra.forEach(t),eo.forEach(t),J_=p(o),kn=a(o,"H2",{class:!0});var gk=i(kn);Ys=a(gk,"A",{id:!0,class:!0,href:!0});var KP=i(Ys);Gm=a(KP,"SPAN",{});var JP=i(Gm);v(ml.$$.fragment,JP),JP.forEach(t),KP.forEach(t),s2=p(gk),Xm=a(gk,"SPAN",{});var GP=i(Xm);r2=s(GP,"TFBertModelLMHeadModel"),GP.forEach(t),gk.forEach(t),G_=p(o),yn=a(o,"DIV",{class:!0});var _k=i(yn);v(fl.$$.fragment,_k),a2=p(_k),gt=a(_k,"DIV",{class:!0});var Co=i(gt);v(ul.$$.fragment,Co),i2=p(Co),Ae=a(Co,"P",{});var nt=i(Ae);l2=s(nt,"encoder_hidden_states  ("),Ym=a(nt,"CODE",{});var XP=i(Ym);d2=s(XP,"tf.Tensor"),XP.forEach(t),c2=s(nt," of shape "),Zm=a(nt,"CODE",{});var YP=i(Zm);p2=s(YP,"(batch_size, sequence_length, hidden_size)"),YP.forEach(t),h2=s(nt,", "),ef=a(nt,"EM",{});var ZP=i(ef);m2=s(ZP,"optional"),ZP.forEach(t),f2=s(nt,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),tf=a(nt,"CODE",{});var eq=i(tf);u2=s(eq,"tf.Tensor"),eq.forEach(t),g2=s(nt," of shape "),of=a(nt,"CODE",{});var tq=i(of);_2=s(tq,"(batch_size, sequence_length)"),tq.forEach(t),b2=s(nt,", "),nf=a(nt,"EM",{});var oq=i(nf);k2=s(oq,"optional"),oq.forEach(t),y2=s(nt,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),sf=a(nt,"CODE",{});var nq=i(sf);T2=s(nq,"[0, 1]"),nq.forEach(t),v2=s(nt,":"),nt.forEach(t),w2=p(Co),gl=a(Co,"UL",{});var bk=i(gl);_l=a(bk,"LI",{});var kk=i(_l);$2=s(kk,"1 for tokens that are "),rf=a(kk,"STRONG",{});var sq=i(rf);F2=s(sq,"not masked"),sq.forEach(t),x2=s(kk,","),kk.forEach(t),B2=p(bk),bl=a(bk,"LI",{});var yk=i(bl);M2=s(yk,"0 for tokens that are "),af=a(yk,"STRONG",{});var rq=i(af);E2=s(rq,"masked"),rq.forEach(t),z2=s(yk,"."),yk.forEach(t),bk.forEach(t),P2=p(Co),G=a(Co,"P",{});var Z=i(G);q2=s(Z,"past_key_values ("),lf=a(Z,"CODE",{});var aq=i(lf);j2=s(aq,"Tuple[Tuple[tf.Tensor]]"),aq.forEach(t),C2=s(Z," of length "),df=a(Z,"CODE",{});var iq=i(df);N2=s(iq,"config.n_layers"),iq.forEach(t),O2=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cf=a(Z,"CODE",{});var lq=i(cf);A2=s(lq,"past_key_values"),lq.forEach(t),I2=s(Z," are used, the user can optionally input only the last "),pf=a(Z,"CODE",{});var dq=i(pf);L2=s(dq,"decoder_input_ids"),dq.forEach(t),D2=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),hf=a(Z,"CODE",{});var cq=i(hf);S2=s(cq,"(batch_size, 1)"),cq.forEach(t),U2=s(Z,` instead of all
`),mf=a(Z,"CODE",{});var pq=i(mf);W2=s(pq,"decoder_input_ids"),pq.forEach(t),H2=s(Z," of shape "),ff=a(Z,"CODE",{});var hq=i(ff);R2=s(hq,"(batch_size, sequence_length)"),hq.forEach(t),V2=s(Z,`.
use_cache (`),uf=a(Z,"CODE",{});var mq=i(uf);Q2=s(mq,"bool"),mq.forEach(t),K2=s(Z,", "),gf=a(Z,"EM",{});var fq=i(gf);J2=s(fq,"optional"),fq.forEach(t),G2=s(Z,", defaults to "),_f=a(Z,"CODE",{});var uq=i(_f);X2=s(uq,"True"),uq.forEach(t),Y2=s(Z,`):
If set to `),bf=a(Z,"CODE",{});var gq=i(bf);Z2=s(gq,"True"),gq.forEach(t),eF=s(Z,", "),kf=a(Z,"CODE",{});var _q=i(kf);tF=s(_q,"past_key_values"),_q.forEach(t),oF=s(Z,` key value states are returned and can be used to speed up decoding (see
`),yf=a(Z,"CODE",{});var bq=i(yf);nF=s(bq,"past_key_values"),bq.forEach(t),sF=s(Z,"). Set to "),Tf=a(Z,"CODE",{});var kq=i(Tf);rF=s(kq,"False"),kq.forEach(t),aF=s(Z," during training, "),vf=a(Z,"CODE",{});var yq=i(vf);iF=s(yq,"True"),yq.forEach(t),lF=s(Z,` during generation
labels (`),wf=a(Z,"CODE",{});var Tq=i(wf);dF=s(Tq,"tf.Tensor"),Tq.forEach(t),cF=s(Z," or "),$f=a(Z,"CODE",{});var vq=i($f);pF=s(vq,"np.ndarray"),vq.forEach(t),hF=s(Z," of shape "),Ff=a(Z,"CODE",{});var wq=i(Ff);mF=s(wq,"(batch_size, sequence_length)"),wq.forEach(t),fF=s(Z,", "),xf=a(Z,"EM",{});var $q=i(xf);uF=s($q,"optional"),$q.forEach(t),gF=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bf=a(Z,"CODE",{});var Fq=i(Bf);_F=s(Fq,"[0, ..., config.vocab_size - 1]"),Fq.forEach(t),bF=s(Z,"."),Z.forEach(t),kF=p(Co),v(Zs.$$.fragment,Co),Co.forEach(t),_k.forEach(t),X_=p(o),Tn=a(o,"H2",{class:!0});var Tk=i(Tn);er=a(Tk,"A",{id:!0,class:!0,href:!0});var xq=i(er);Mf=a(xq,"SPAN",{});var Bq=i(Mf);v(kl.$$.fragment,Bq),Bq.forEach(t),xq.forEach(t),yF=p(Tk),Ef=a(Tk,"SPAN",{});var Mq=i(Ef);TF=s(Mq,"TFBertForMaskedLM"),Mq.forEach(t),Tk.forEach(t),Y_=p(o),Ge=a(o,"DIV",{class:!0});var to=i(Ge);v(yl.$$.fragment,to),vF=p(to),Tl=a(to,"P",{});var vk=i(Tl);wF=s(vk,"Bert Model with a "),zf=a(vk,"CODE",{});var Eq=i(zf);$F=s(Eq,"language modeling"),Eq.forEach(t),FF=s(vk," head on top."),vk.forEach(t),xF=p(to),vl=a(to,"P",{});var wk=i(vl);BF=s(wk,"This model inherits from "),Bp=a(wk,"A",{href:!0});var zq=i(Bp);MF=s(zq,"TFPreTrainedModel"),zq.forEach(t),EF=s(wk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wk.forEach(t),zF=p(to),wl=a(to,"P",{});var $k=i(wl);PF=s($k,"This model is also a "),$l=a($k,"A",{href:!0,rel:!0});var Pq=i($l);qF=s(Pq,"tf.keras.Model"),Pq.forEach(t),jF=s($k,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$k.forEach(t),CF=p(to),v(tr.$$.fragment,to),NF=p(to),_t=a(to,"DIV",{class:!0});var No=i(_t);v(Fl.$$.fragment,No),OF=p(No),vn=a(No,"P",{});var hh=i(vn);AF=s(hh,"The "),Mp=a(hh,"A",{href:!0});var qq=i(Mp);IF=s(qq,"TFBertForMaskedLM"),qq.forEach(t),LF=s(hh," forward method, overrides the "),Pf=a(hh,"CODE",{});var jq=i(Pf);DF=s(jq,"__call__"),jq.forEach(t),SF=s(hh," special method."),hh.forEach(t),UF=p(No),v(or.$$.fragment,No),WF=p(No),v(nr.$$.fragment,No),HF=p(No),v(sr.$$.fragment,No),No.forEach(t),to.forEach(t),Z_=p(o),wn=a(o,"H2",{class:!0});var Fk=i(wn);rr=a(Fk,"A",{id:!0,class:!0,href:!0});var Cq=i(rr);qf=a(Cq,"SPAN",{});var Nq=i(qf);v(xl.$$.fragment,Nq),Nq.forEach(t),Cq.forEach(t),RF=p(Fk),jf=a(Fk,"SPAN",{});var Oq=i(jf);VF=s(Oq,"TFBertForNextSentencePrediction"),Oq.forEach(t),Fk.forEach(t),eb=p(o),Xe=a(o,"DIV",{class:!0});var oo=i(Xe);v(Bl.$$.fragment,oo),QF=p(oo),Ml=a(oo,"P",{});var xk=i(Ml);KF=s(xk,"Bert Model with a "),Cf=a(xk,"CODE",{});var Aq=i(Cf);JF=s(Aq,"next sentence prediction (classification)"),Aq.forEach(t),GF=s(xk," head on top."),xk.forEach(t),XF=p(oo),El=a(oo,"P",{});var Bk=i(El);YF=s(Bk,"This model inherits from "),Ep=a(Bk,"A",{href:!0});var Iq=i(Ep);ZF=s(Iq,"TFPreTrainedModel"),Iq.forEach(t),ex=s(Bk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk.forEach(t),tx=p(oo),zl=a(oo,"P",{});var Mk=i(zl);ox=s(Mk,"This model is also a "),Pl=a(Mk,"A",{href:!0,rel:!0});var Lq=i(Pl);nx=s(Lq,"tf.keras.Model"),Lq.forEach(t),sx=s(Mk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mk.forEach(t),rx=p(oo),v(ar.$$.fragment,oo),ax=p(oo),Wt=a(oo,"DIV",{class:!0});var aa=i(Wt);v(ql.$$.fragment,aa),ix=p(aa),$n=a(aa,"P",{});var mh=i($n);lx=s(mh,"The "),zp=a(mh,"A",{href:!0});var Dq=i(zp);dx=s(Dq,"TFBertForNextSentencePrediction"),Dq.forEach(t),cx=s(mh," forward method, overrides the "),Nf=a(mh,"CODE",{});var Sq=i(Nf);px=s(Sq,"__call__"),Sq.forEach(t),hx=s(mh," special method."),mh.forEach(t),mx=p(aa),v(ir.$$.fragment,aa),fx=p(aa),v(lr.$$.fragment,aa),aa.forEach(t),oo.forEach(t),tb=p(o),Fn=a(o,"H2",{class:!0});var Ek=i(Fn);dr=a(Ek,"A",{id:!0,class:!0,href:!0});var Uq=i(dr);Of=a(Uq,"SPAN",{});var Wq=i(Of);v(jl.$$.fragment,Wq),Wq.forEach(t),Uq.forEach(t),ux=p(Ek),Af=a(Ek,"SPAN",{});var Hq=i(Af);gx=s(Hq,"TFBertForSequenceClassification"),Hq.forEach(t),Ek.forEach(t),ob=p(o),Ye=a(o,"DIV",{class:!0});var no=i(Ye);v(Cl.$$.fragment,no),_x=p(no),If=a(no,"P",{});var Rq=i(If);bx=s(Rq,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Rq.forEach(t),kx=p(no),Nl=a(no,"P",{});var zk=i(Nl);yx=s(zk,"This model inherits from "),Pp=a(zk,"A",{href:!0});var Vq=i(Pp);Tx=s(Vq,"TFPreTrainedModel"),Vq.forEach(t),vx=s(zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk.forEach(t),wx=p(no),Ol=a(no,"P",{});var Pk=i(Ol);$x=s(Pk,"This model is also a "),Al=a(Pk,"A",{href:!0,rel:!0});var Qq=i(Al);Fx=s(Qq,"tf.keras.Model"),Qq.forEach(t),xx=s(Pk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pk.forEach(t),Bx=p(no),v(cr.$$.fragment,no),Mx=p(no),bt=a(no,"DIV",{class:!0});var Oo=i(bt);v(Il.$$.fragment,Oo),Ex=p(Oo),xn=a(Oo,"P",{});var fh=i(xn);zx=s(fh,"The "),qp=a(fh,"A",{href:!0});var Kq=i(qp);Px=s(Kq,"TFBertForSequenceClassification"),Kq.forEach(t),qx=s(fh," forward method, overrides the "),Lf=a(fh,"CODE",{});var Jq=i(Lf);jx=s(Jq,"__call__"),Jq.forEach(t),Cx=s(fh," special method."),fh.forEach(t),Nx=p(Oo),v(pr.$$.fragment,Oo),Ox=p(Oo),v(hr.$$.fragment,Oo),Ax=p(Oo),v(mr.$$.fragment,Oo),Oo.forEach(t),no.forEach(t),nb=p(o),Bn=a(o,"H2",{class:!0});var qk=i(Bn);fr=a(qk,"A",{id:!0,class:!0,href:!0});var Gq=i(fr);Df=a(Gq,"SPAN",{});var Xq=i(Df);v(Ll.$$.fragment,Xq),Xq.forEach(t),Gq.forEach(t),Ix=p(qk),Sf=a(qk,"SPAN",{});var Yq=i(Sf);Lx=s(Yq,"TFBertForMultipleChoice"),Yq.forEach(t),qk.forEach(t),sb=p(o),Ze=a(o,"DIV",{class:!0});var so=i(Ze);v(Dl.$$.fragment,so),Dx=p(so),Uf=a(so,"P",{});var Zq=i(Uf);Sx=s(Zq,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zq.forEach(t),Ux=p(so),Sl=a(so,"P",{});var jk=i(Sl);Wx=s(jk,"This model inherits from "),jp=a(jk,"A",{href:!0});var ej=i(jp);Hx=s(ej,"TFPreTrainedModel"),ej.forEach(t),Rx=s(jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk.forEach(t),Vx=p(so),Ul=a(so,"P",{});var Ck=i(Ul);Qx=s(Ck,"This model is also a "),Wl=a(Ck,"A",{href:!0,rel:!0});var tj=i(Wl);Kx=s(tj,"tf.keras.Model"),tj.forEach(t),Jx=s(Ck,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ck.forEach(t),Gx=p(so),v(ur.$$.fragment,so),Xx=p(so),Ht=a(so,"DIV",{class:!0});var ia=i(Ht);v(Hl.$$.fragment,ia),Yx=p(ia),Mn=a(ia,"P",{});var uh=i(Mn);Zx=s(uh,"The "),Cp=a(uh,"A",{href:!0});var oj=i(Cp);eB=s(oj,"TFBertForMultipleChoice"),oj.forEach(t),tB=s(uh," forward method, overrides the "),Wf=a(uh,"CODE",{});var nj=i(Wf);oB=s(nj,"__call__"),nj.forEach(t),nB=s(uh," special method."),uh.forEach(t),sB=p(ia),v(gr.$$.fragment,ia),rB=p(ia),v(_r.$$.fragment,ia),ia.forEach(t),so.forEach(t),rb=p(o),En=a(o,"H2",{class:!0});var Nk=i(En);br=a(Nk,"A",{id:!0,class:!0,href:!0});var sj=i(br);Hf=a(sj,"SPAN",{});var rj=i(Hf);v(Rl.$$.fragment,rj),rj.forEach(t),sj.forEach(t),aB=p(Nk),Rf=a(Nk,"SPAN",{});var aj=i(Rf);iB=s(aj,"TFBertForTokenClassification"),aj.forEach(t),Nk.forEach(t),ab=p(o),et=a(o,"DIV",{class:!0});var ro=i(et);v(Vl.$$.fragment,ro),lB=p(ro),Vf=a(ro,"P",{});var ij=i(Vf);dB=s(ij,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ij.forEach(t),cB=p(ro),Ql=a(ro,"P",{});var Ok=i(Ql);pB=s(Ok,"This model inherits from "),Np=a(Ok,"A",{href:!0});var lj=i(Np);hB=s(lj,"TFPreTrainedModel"),lj.forEach(t),mB=s(Ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok.forEach(t),fB=p(ro),Kl=a(ro,"P",{});var Ak=i(Kl);uB=s(Ak,"This model is also a "),Jl=a(Ak,"A",{href:!0,rel:!0});var dj=i(Jl);gB=s(dj,"tf.keras.Model"),dj.forEach(t),_B=s(Ak,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak.forEach(t),bB=p(ro),v(kr.$$.fragment,ro),kB=p(ro),kt=a(ro,"DIV",{class:!0});var Ao=i(kt);v(Gl.$$.fragment,Ao),yB=p(Ao),zn=a(Ao,"P",{});var gh=i(zn);TB=s(gh,"The "),Op=a(gh,"A",{href:!0});var cj=i(Op);vB=s(cj,"TFBertForTokenClassification"),cj.forEach(t),wB=s(gh," forward method, overrides the "),Qf=a(gh,"CODE",{});var pj=i(Qf);$B=s(pj,"__call__"),pj.forEach(t),FB=s(gh," special method."),gh.forEach(t),xB=p(Ao),v(yr.$$.fragment,Ao),BB=p(Ao),v(Tr.$$.fragment,Ao),MB=p(Ao),v(vr.$$.fragment,Ao),Ao.forEach(t),ro.forEach(t),ib=p(o),Pn=a(o,"H2",{class:!0});var Ik=i(Pn);wr=a(Ik,"A",{id:!0,class:!0,href:!0});var hj=i(wr);Kf=a(hj,"SPAN",{});var mj=i(Kf);v(Xl.$$.fragment,mj),mj.forEach(t),hj.forEach(t),EB=p(Ik),Jf=a(Ik,"SPAN",{});var fj=i(Jf);zB=s(fj,"TFBertForQuestionAnswering"),fj.forEach(t),Ik.forEach(t),lb=p(o),tt=a(o,"DIV",{class:!0});var ao=i(tt);v(Yl.$$.fragment,ao),PB=p(ao),qn=a(ao,"P",{});var _h=i(qn);qB=s(_h,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gf=a(_h,"CODE",{});var uj=i(Gf);jB=s(uj,"span start logits"),uj.forEach(t),CB=s(_h," and "),Xf=a(_h,"CODE",{});var gj=i(Xf);NB=s(gj,"span end logits"),gj.forEach(t),OB=s(_h,")."),_h.forEach(t),AB=p(ao),Zl=a(ao,"P",{});var Lk=i(Zl);IB=s(Lk,"This model inherits from "),Ap=a(Lk,"A",{href:!0});var _j=i(Ap);LB=s(_j,"TFPreTrainedModel"),_j.forEach(t),DB=s(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk.forEach(t),SB=p(ao),ed=a(ao,"P",{});var Dk=i(ed);UB=s(Dk,"This model is also a "),td=a(Dk,"A",{href:!0,rel:!0});var bj=i(td);WB=s(bj,"tf.keras.Model"),bj.forEach(t),HB=s(Dk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk.forEach(t),RB=p(ao),v($r.$$.fragment,ao),VB=p(ao),yt=a(ao,"DIV",{class:!0});var Io=i(yt);v(od.$$.fragment,Io),QB=p(Io),jn=a(Io,"P",{});var bh=i(jn);KB=s(bh,"The "),Ip=a(bh,"A",{href:!0});var kj=i(Ip);JB=s(kj,"TFBertForQuestionAnswering"),kj.forEach(t),GB=s(bh," forward method, overrides the "),Yf=a(bh,"CODE",{});var yj=i(Yf);XB=s(yj,"__call__"),yj.forEach(t),YB=s(bh," special method."),bh.forEach(t),ZB=p(Io),v(Fr.$$.fragment,Io),eM=p(Io),v(xr.$$.fragment,Io),tM=p(Io),v(Br.$$.fragment,Io),Io.forEach(t),ao.forEach(t),db=p(o),Cn=a(o,"H2",{class:!0});var Sk=i(Cn);Mr=a(Sk,"A",{id:!0,class:!0,href:!0});var Tj=i(Mr);Zf=a(Tj,"SPAN",{});var vj=i(Zf);v(nd.$$.fragment,vj),vj.forEach(t),Tj.forEach(t),oM=p(Sk),eu=a(Sk,"SPAN",{});var wj=i(eu);nM=s(wj,"FlaxBertModel"),wj.forEach(t),Sk.forEach(t),cb=p(o),Ie=a(o,"DIV",{class:!0});var $t=i(Ie);v(sd.$$.fragment,$t),sM=p($t),tu=a($t,"P",{});var $j=i(tu);rM=s($j,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),$j.forEach(t),aM=p($t),rd=a($t,"P",{});var Uk=i(rd);iM=s(Uk,"This model inherits from "),Lp=a(Uk,"A",{href:!0});var Fj=i(Lp);lM=s(Fj,"FlaxPreTrainedModel"),Fj.forEach(t),dM=s(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uk.forEach(t),cM=p($t),ad=a($t,"P",{});var Wk=i(ad);pM=s(Wk,"This model is also a Flax Linen "),id=a(Wk,"A",{href:!0,rel:!0});var xj=i(id);hM=s(xj,"flax.linen.Module"),xj.forEach(t),mM=s(Wk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wk.forEach(t),fM=p($t),ou=a($t,"P",{});var Bj=i(ou);uM=s(Bj,"Finally, this model supports inherent JAX features such as:"),Bj.forEach(t),gM=p($t),co=a($t,"UL",{});var la=i(co);nu=a(la,"LI",{});var Mj=i(nu);ld=a(Mj,"A",{href:!0,rel:!0});var Ej=i(ld);_M=s(Ej,"Just-In-Time (JIT) compilation"),Ej.forEach(t),Mj.forEach(t),bM=p(la),su=a(la,"LI",{});var zj=i(su);dd=a(zj,"A",{href:!0,rel:!0});var Pj=i(dd);kM=s(Pj,"Automatic Differentiation"),Pj.forEach(t),zj.forEach(t),yM=p(la),ru=a(la,"LI",{});var qj=i(ru);cd=a(qj,"A",{href:!0,rel:!0});var jj=i(cd);TM=s(jj,"Vectorization"),jj.forEach(t),qj.forEach(t),vM=p(la),au=a(la,"LI",{});var Cj=i(au);pd=a(Cj,"A",{href:!0,rel:!0});var Nj=i(pd);wM=s(Nj,"Parallelization"),Nj.forEach(t),Cj.forEach(t),la.forEach(t),$M=p($t),Rt=a($t,"DIV",{class:!0});var da=i(Rt);v(hd.$$.fragment,da),FM=p(da),Nn=a(da,"P",{});var kh=i(Nn);xM=s(kh,"The "),iu=a(kh,"CODE",{});var Oj=i(iu);BM=s(Oj,"FlaxBertPreTrainedModel"),Oj.forEach(t),MM=s(kh," forward method, overrides the "),lu=a(kh,"CODE",{});var Aj=i(lu);EM=s(Aj,"__call__"),Aj.forEach(t),zM=s(kh," special method."),kh.forEach(t),PM=p(da),v(Er.$$.fragment,da),qM=p(da),v(zr.$$.fragment,da),da.forEach(t),$t.forEach(t),pb=p(o),On=a(o,"H2",{class:!0});var Hk=i(On);Pr=a(Hk,"A",{id:!0,class:!0,href:!0});var Ij=i(Pr);du=a(Ij,"SPAN",{});var Lj=i(du);v(md.$$.fragment,Lj),Lj.forEach(t),Ij.forEach(t),jM=p(Hk),cu=a(Hk,"SPAN",{});var Dj=i(cu);CM=s(Dj,"FlaxBertForPreTraining"),Dj.forEach(t),Hk.forEach(t),hb=p(o),Le=a(o,"DIV",{class:!0});var Ft=i(Le);v(fd.$$.fragment,Ft),NM=p(Ft),An=a(Ft,"P",{});var yh=i(An);OM=s(yh,"Bert Model with two heads on top as done during the pretraining: a "),pu=a(yh,"CODE",{});var Sj=i(pu);AM=s(Sj,"masked language modeling"),Sj.forEach(t),IM=s(yh," head and a "),hu=a(yh,"CODE",{});var Uj=i(hu);LM=s(Uj,"next sentence prediction (classification)"),Uj.forEach(t),DM=s(yh," head."),yh.forEach(t),SM=p(Ft),ud=a(Ft,"P",{});var Rk=i(ud);UM=s(Rk,"This model inherits from "),Dp=a(Rk,"A",{href:!0});var Wj=i(Dp);WM=s(Wj,"FlaxPreTrainedModel"),Wj.forEach(t),HM=s(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rk.forEach(t),RM=p(Ft),gd=a(Ft,"P",{});var Vk=i(gd);VM=s(Vk,"This model is also a Flax Linen "),_d=a(Vk,"A",{href:!0,rel:!0});var Hj=i(_d);QM=s(Hj,"flax.linen.Module"),Hj.forEach(t),KM=s(Vk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vk.forEach(t),JM=p(Ft),mu=a(Ft,"P",{});var Rj=i(mu);GM=s(Rj,"Finally, this model supports inherent JAX features such as:"),Rj.forEach(t),XM=p(Ft),po=a(Ft,"UL",{});var ca=i(po);fu=a(ca,"LI",{});var Vj=i(fu);bd=a(Vj,"A",{href:!0,rel:!0});var Qj=i(bd);YM=s(Qj,"Just-In-Time (JIT) compilation"),Qj.forEach(t),Vj.forEach(t),ZM=p(ca),uu=a(ca,"LI",{});var Kj=i(uu);kd=a(Kj,"A",{href:!0,rel:!0});var Jj=i(kd);eE=s(Jj,"Automatic Differentiation"),Jj.forEach(t),Kj.forEach(t),tE=p(ca),gu=a(ca,"LI",{});var Gj=i(gu);yd=a(Gj,"A",{href:!0,rel:!0});var Xj=i(yd);oE=s(Xj,"Vectorization"),Xj.forEach(t),Gj.forEach(t),nE=p(ca),_u=a(ca,"LI",{});var Yj=i(_u);Td=a(Yj,"A",{href:!0,rel:!0});var Zj=i(Td);sE=s(Zj,"Parallelization"),Zj.forEach(t),Yj.forEach(t),ca.forEach(t),rE=p(Ft),Vt=a(Ft,"DIV",{class:!0});var pa=i(Vt);v(vd.$$.fragment,pa),aE=p(pa),In=a(pa,"P",{});var Th=i(In);iE=s(Th,"The "),bu=a(Th,"CODE",{});var eC=i(bu);lE=s(eC,"FlaxBertPreTrainedModel"),eC.forEach(t),dE=s(Th," forward method, overrides the "),ku=a(Th,"CODE",{});var tC=i(ku);cE=s(tC,"__call__"),tC.forEach(t),pE=s(Th," special method."),Th.forEach(t),hE=p(pa),v(qr.$$.fragment,pa),mE=p(pa),v(jr.$$.fragment,pa),pa.forEach(t),Ft.forEach(t),mb=p(o),Ln=a(o,"H2",{class:!0});var Qk=i(Ln);Cr=a(Qk,"A",{id:!0,class:!0,href:!0});var oC=i(Cr);yu=a(oC,"SPAN",{});var nC=i(yu);v(wd.$$.fragment,nC),nC.forEach(t),oC.forEach(t),fE=p(Qk),Tu=a(Qk,"SPAN",{});var sC=i(Tu);uE=s(sC,"FlaxBertForMaskedLM"),sC.forEach(t),Qk.forEach(t),fb=p(o),De=a(o,"DIV",{class:!0});var xt=i(De);v($d.$$.fragment,xt),gE=p(xt),Fd=a(xt,"P",{});var Kk=i(Fd);_E=s(Kk,"Bert Model with a "),vu=a(Kk,"CODE",{});var rC=i(vu);bE=s(rC,"language modeling"),rC.forEach(t),kE=s(Kk," head on top."),Kk.forEach(t),yE=p(xt),xd=a(xt,"P",{});var Jk=i(xd);TE=s(Jk,"This model inherits from "),Sp=a(Jk,"A",{href:!0});var aC=i(Sp);vE=s(aC,"FlaxPreTrainedModel"),aC.forEach(t),wE=s(Jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jk.forEach(t),$E=p(xt),Bd=a(xt,"P",{});var Gk=i(Bd);FE=s(Gk,"This model is also a Flax Linen "),Md=a(Gk,"A",{href:!0,rel:!0});var iC=i(Md);xE=s(iC,"flax.linen.Module"),iC.forEach(t),BE=s(Gk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gk.forEach(t),ME=p(xt),wu=a(xt,"P",{});var lC=i(wu);EE=s(lC,"Finally, this model supports inherent JAX features such as:"),lC.forEach(t),zE=p(xt),ho=a(xt,"UL",{});var ha=i(ho);$u=a(ha,"LI",{});var dC=i($u);Ed=a(dC,"A",{href:!0,rel:!0});var cC=i(Ed);PE=s(cC,"Just-In-Time (JIT) compilation"),cC.forEach(t),dC.forEach(t),qE=p(ha),Fu=a(ha,"LI",{});var pC=i(Fu);zd=a(pC,"A",{href:!0,rel:!0});var hC=i(zd);jE=s(hC,"Automatic Differentiation"),hC.forEach(t),pC.forEach(t),CE=p(ha),xu=a(ha,"LI",{});var mC=i(xu);Pd=a(mC,"A",{href:!0,rel:!0});var fC=i(Pd);NE=s(fC,"Vectorization"),fC.forEach(t),mC.forEach(t),OE=p(ha),Bu=a(ha,"LI",{});var uC=i(Bu);qd=a(uC,"A",{href:!0,rel:!0});var gC=i(qd);AE=s(gC,"Parallelization"),gC.forEach(t),uC.forEach(t),ha.forEach(t),IE=p(xt),Qt=a(xt,"DIV",{class:!0});var ma=i(Qt);v(jd.$$.fragment,ma),LE=p(ma),Dn=a(ma,"P",{});var vh=i(Dn);DE=s(vh,"The "),Mu=a(vh,"CODE",{});var _C=i(Mu);SE=s(_C,"FlaxBertPreTrainedModel"),_C.forEach(t),UE=s(vh," forward method, overrides the "),Eu=a(vh,"CODE",{});var bC=i(Eu);WE=s(bC,"__call__"),bC.forEach(t),HE=s(vh," special method."),vh.forEach(t),RE=p(ma),v(Nr.$$.fragment,ma),VE=p(ma),v(Or.$$.fragment,ma),ma.forEach(t),xt.forEach(t),ub=p(o),Sn=a(o,"H2",{class:!0});var Xk=i(Sn);Ar=a(Xk,"A",{id:!0,class:!0,href:!0});var kC=i(Ar);zu=a(kC,"SPAN",{});var yC=i(zu);v(Cd.$$.fragment,yC),yC.forEach(t),kC.forEach(t),QE=p(Xk),Pu=a(Xk,"SPAN",{});var TC=i(Pu);KE=s(TC,"FlaxBertForNextSentencePrediction"),TC.forEach(t),Xk.forEach(t),gb=p(o),Se=a(o,"DIV",{class:!0});var Bt=i(Se);v(Nd.$$.fragment,Bt),JE=p(Bt),Od=a(Bt,"P",{});var Yk=i(Od);GE=s(Yk,"Bert Model with a "),qu=a(Yk,"CODE",{});var vC=i(qu);XE=s(vC,"next sentence prediction (classification)"),vC.forEach(t),YE=s(Yk," head on top."),Yk.forEach(t),ZE=p(Bt),Ad=a(Bt,"P",{});var Zk=i(Ad);e5=s(Zk,"This model inherits from "),Up=a(Zk,"A",{href:!0});var wC=i(Up);t5=s(wC,"FlaxPreTrainedModel"),wC.forEach(t),o5=s(Zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zk.forEach(t),n5=p(Bt),Id=a(Bt,"P",{});var ey=i(Id);s5=s(ey,"This model is also a Flax Linen "),Ld=a(ey,"A",{href:!0,rel:!0});var $C=i(Ld);r5=s($C,"flax.linen.Module"),$C.forEach(t),a5=s(ey,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ey.forEach(t),i5=p(Bt),ju=a(Bt,"P",{});var FC=i(ju);l5=s(FC,"Finally, this model supports inherent JAX features such as:"),FC.forEach(t),d5=p(Bt),mo=a(Bt,"UL",{});var fa=i(mo);Cu=a(fa,"LI",{});var xC=i(Cu);Dd=a(xC,"A",{href:!0,rel:!0});var BC=i(Dd);c5=s(BC,"Just-In-Time (JIT) compilation"),BC.forEach(t),xC.forEach(t),p5=p(fa),Nu=a(fa,"LI",{});var MC=i(Nu);Sd=a(MC,"A",{href:!0,rel:!0});var EC=i(Sd);h5=s(EC,"Automatic Differentiation"),EC.forEach(t),MC.forEach(t),m5=p(fa),Ou=a(fa,"LI",{});var zC=i(Ou);Ud=a(zC,"A",{href:!0,rel:!0});var PC=i(Ud);f5=s(PC,"Vectorization"),PC.forEach(t),zC.forEach(t),u5=p(fa),Au=a(fa,"LI",{});var qC=i(Au);Wd=a(qC,"A",{href:!0,rel:!0});var jC=i(Wd);g5=s(jC,"Parallelization"),jC.forEach(t),qC.forEach(t),fa.forEach(t),_5=p(Bt),Kt=a(Bt,"DIV",{class:!0});var ua=i(Kt);v(Hd.$$.fragment,ua),b5=p(ua),Un=a(ua,"P",{});var wh=i(Un);k5=s(wh,"The "),Iu=a(wh,"CODE",{});var CC=i(Iu);y5=s(CC,"FlaxBertPreTrainedModel"),CC.forEach(t),T5=s(wh," forward method, overrides the "),Lu=a(wh,"CODE",{});var NC=i(Lu);v5=s(NC,"__call__"),NC.forEach(t),w5=s(wh," special method."),wh.forEach(t),$5=p(ua),v(Ir.$$.fragment,ua),F5=p(ua),v(Lr.$$.fragment,ua),ua.forEach(t),Bt.forEach(t),_b=p(o),Wn=a(o,"H2",{class:!0});var ty=i(Wn);Dr=a(ty,"A",{id:!0,class:!0,href:!0});var OC=i(Dr);Du=a(OC,"SPAN",{});var AC=i(Du);v(Rd.$$.fragment,AC),AC.forEach(t),OC.forEach(t),x5=p(ty),Su=a(ty,"SPAN",{});var IC=i(Su);B5=s(IC,"FlaxBertForSequenceClassification"),IC.forEach(t),ty.forEach(t),bb=p(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);v(Vd.$$.fragment,Mt),M5=p(Mt),Uu=a(Mt,"P",{});var LC=i(Uu);E5=s(LC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),LC.forEach(t),z5=p(Mt),Qd=a(Mt,"P",{});var oy=i(Qd);P5=s(oy,"This model inherits from "),Wp=a(oy,"A",{href:!0});var DC=i(Wp);q5=s(DC,"FlaxPreTrainedModel"),DC.forEach(t),j5=s(oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oy.forEach(t),C5=p(Mt),Kd=a(Mt,"P",{});var ny=i(Kd);N5=s(ny,"This model is also a Flax Linen "),Jd=a(ny,"A",{href:!0,rel:!0});var SC=i(Jd);O5=s(SC,"flax.linen.Module"),SC.forEach(t),A5=s(ny,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ny.forEach(t),I5=p(Mt),Wu=a(Mt,"P",{});var UC=i(Wu);L5=s(UC,"Finally, this model supports inherent JAX features such as:"),UC.forEach(t),D5=p(Mt),fo=a(Mt,"UL",{});var ga=i(fo);Hu=a(ga,"LI",{});var WC=i(Hu);Gd=a(WC,"A",{href:!0,rel:!0});var HC=i(Gd);S5=s(HC,"Just-In-Time (JIT) compilation"),HC.forEach(t),WC.forEach(t),U5=p(ga),Ru=a(ga,"LI",{});var RC=i(Ru);Xd=a(RC,"A",{href:!0,rel:!0});var VC=i(Xd);W5=s(VC,"Automatic Differentiation"),VC.forEach(t),RC.forEach(t),H5=p(ga),Vu=a(ga,"LI",{});var QC=i(Vu);Yd=a(QC,"A",{href:!0,rel:!0});var KC=i(Yd);R5=s(KC,"Vectorization"),KC.forEach(t),QC.forEach(t),V5=p(ga),Qu=a(ga,"LI",{});var JC=i(Qu);Zd=a(JC,"A",{href:!0,rel:!0});var GC=i(Zd);Q5=s(GC,"Parallelization"),GC.forEach(t),JC.forEach(t),ga.forEach(t),K5=p(Mt),Jt=a(Mt,"DIV",{class:!0});var _a=i(Jt);v(ec.$$.fragment,_a),J5=p(_a),Hn=a(_a,"P",{});var $h=i(Hn);G5=s($h,"The "),Ku=a($h,"CODE",{});var XC=i(Ku);X5=s(XC,"FlaxBertPreTrainedModel"),XC.forEach(t),Y5=s($h," forward method, overrides the "),Ju=a($h,"CODE",{});var YC=i(Ju);Z5=s(YC,"__call__"),YC.forEach(t),e6=s($h," special method."),$h.forEach(t),t6=p(_a),v(Sr.$$.fragment,_a),o6=p(_a),v(Ur.$$.fragment,_a),_a.forEach(t),Mt.forEach(t),kb=p(o),Rn=a(o,"H2",{class:!0});var sy=i(Rn);Wr=a(sy,"A",{id:!0,class:!0,href:!0});var ZC=i(Wr);Gu=a(ZC,"SPAN",{});var e3=i(Gu);v(tc.$$.fragment,e3),e3.forEach(t),ZC.forEach(t),n6=p(sy),Xu=a(sy,"SPAN",{});var t3=i(Xu);s6=s(t3,"FlaxBertForMultipleChoice"),t3.forEach(t),sy.forEach(t),yb=p(o),We=a(o,"DIV",{class:!0});var Et=i(We);v(oc.$$.fragment,Et),r6=p(Et),Yu=a(Et,"P",{});var o3=i(Yu);a6=s(o3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),o3.forEach(t),i6=p(Et),nc=a(Et,"P",{});var ry=i(nc);l6=s(ry,"This model inherits from "),Hp=a(ry,"A",{href:!0});var n3=i(Hp);d6=s(n3,"FlaxPreTrainedModel"),n3.forEach(t),c6=s(ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ry.forEach(t),p6=p(Et),sc=a(Et,"P",{});var ay=i(sc);h6=s(ay,"This model is also a Flax Linen "),rc=a(ay,"A",{href:!0,rel:!0});var s3=i(rc);m6=s(s3,"flax.linen.Module"),s3.forEach(t),f6=s(ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ay.forEach(t),u6=p(Et),Zu=a(Et,"P",{});var r3=i(Zu);g6=s(r3,"Finally, this model supports inherent JAX features such as:"),r3.forEach(t),_6=p(Et),uo=a(Et,"UL",{});var ba=i(uo);eg=a(ba,"LI",{});var a3=i(eg);ac=a(a3,"A",{href:!0,rel:!0});var i3=i(ac);b6=s(i3,"Just-In-Time (JIT) compilation"),i3.forEach(t),a3.forEach(t),k6=p(ba),tg=a(ba,"LI",{});var l3=i(tg);ic=a(l3,"A",{href:!0,rel:!0});var d3=i(ic);y6=s(d3,"Automatic Differentiation"),d3.forEach(t),l3.forEach(t),T6=p(ba),og=a(ba,"LI",{});var c3=i(og);lc=a(c3,"A",{href:!0,rel:!0});var p3=i(lc);v6=s(p3,"Vectorization"),p3.forEach(t),c3.forEach(t),w6=p(ba),ng=a(ba,"LI",{});var h3=i(ng);dc=a(h3,"A",{href:!0,rel:!0});var m3=i(dc);$6=s(m3,"Parallelization"),m3.forEach(t),h3.forEach(t),ba.forEach(t),F6=p(Et),Gt=a(Et,"DIV",{class:!0});var ka=i(Gt);v(cc.$$.fragment,ka),x6=p(ka),Vn=a(ka,"P",{});var Fh=i(Vn);B6=s(Fh,"The "),sg=a(Fh,"CODE",{});var f3=i(sg);M6=s(f3,"FlaxBertPreTrainedModel"),f3.forEach(t),E6=s(Fh," forward method, overrides the "),rg=a(Fh,"CODE",{});var u3=i(rg);z6=s(u3,"__call__"),u3.forEach(t),P6=s(Fh," special method."),Fh.forEach(t),q6=p(ka),v(Hr.$$.fragment,ka),j6=p(ka),v(Rr.$$.fragment,ka),ka.forEach(t),Et.forEach(t),Tb=p(o),Qn=a(o,"H2",{class:!0});var iy=i(Qn);Vr=a(iy,"A",{id:!0,class:!0,href:!0});var g3=i(Vr);ag=a(g3,"SPAN",{});var _3=i(ag);v(pc.$$.fragment,_3),_3.forEach(t),g3.forEach(t),C6=p(iy),ig=a(iy,"SPAN",{});var b3=i(ig);N6=s(b3,"FlaxBertForTokenClassification"),b3.forEach(t),iy.forEach(t),vb=p(o),He=a(o,"DIV",{class:!0});var zt=i(He);v(hc.$$.fragment,zt),O6=p(zt),lg=a(zt,"P",{});var k3=i(lg);A6=s(k3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),k3.forEach(t),I6=p(zt),mc=a(zt,"P",{});var ly=i(mc);L6=s(ly,"This model inherits from "),Rp=a(ly,"A",{href:!0});var y3=i(Rp);D6=s(y3,"FlaxPreTrainedModel"),y3.forEach(t),S6=s(ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ly.forEach(t),U6=p(zt),fc=a(zt,"P",{});var dy=i(fc);W6=s(dy,"This model is also a Flax Linen "),uc=a(dy,"A",{href:!0,rel:!0});var T3=i(uc);H6=s(T3,"flax.linen.Module"),T3.forEach(t),R6=s(dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dy.forEach(t),V6=p(zt),dg=a(zt,"P",{});var v3=i(dg);Q6=s(v3,"Finally, this model supports inherent JAX features such as:"),v3.forEach(t),K6=p(zt),go=a(zt,"UL",{});var ya=i(go);cg=a(ya,"LI",{});var w3=i(cg);gc=a(w3,"A",{href:!0,rel:!0});var $3=i(gc);J6=s($3,"Just-In-Time (JIT) compilation"),$3.forEach(t),w3.forEach(t),G6=p(ya),pg=a(ya,"LI",{});var F3=i(pg);_c=a(F3,"A",{href:!0,rel:!0});var x3=i(_c);X6=s(x3,"Automatic Differentiation"),x3.forEach(t),F3.forEach(t),Y6=p(ya),hg=a(ya,"LI",{});var B3=i(hg);bc=a(B3,"A",{href:!0,rel:!0});var M3=i(bc);Z6=s(M3,"Vectorization"),M3.forEach(t),B3.forEach(t),ez=p(ya),mg=a(ya,"LI",{});var E3=i(mg);kc=a(E3,"A",{href:!0,rel:!0});var z3=i(kc);tz=s(z3,"Parallelization"),z3.forEach(t),E3.forEach(t),ya.forEach(t),oz=p(zt),Xt=a(zt,"DIV",{class:!0});var Ta=i(Xt);v(yc.$$.fragment,Ta),nz=p(Ta),Kn=a(Ta,"P",{});var xh=i(Kn);sz=s(xh,"The "),fg=a(xh,"CODE",{});var P3=i(fg);rz=s(P3,"FlaxBertPreTrainedModel"),P3.forEach(t),az=s(xh," forward method, overrides the "),ug=a(xh,"CODE",{});var q3=i(ug);iz=s(q3,"__call__"),q3.forEach(t),lz=s(xh," special method."),xh.forEach(t),dz=p(Ta),v(Qr.$$.fragment,Ta),cz=p(Ta),v(Kr.$$.fragment,Ta),Ta.forEach(t),zt.forEach(t),wb=p(o),Jn=a(o,"H2",{class:!0});var cy=i(Jn);Jr=a(cy,"A",{id:!0,class:!0,href:!0});var j3=i(Jr);gg=a(j3,"SPAN",{});var C3=i(gg);v(Tc.$$.fragment,C3),C3.forEach(t),j3.forEach(t),pz=p(cy),_g=a(cy,"SPAN",{});var N3=i(_g);hz=s(N3,"FlaxBertForQuestionAnswering"),N3.forEach(t),cy.forEach(t),$b=p(o),Re=a(o,"DIV",{class:!0});var Pt=i(Re);v(vc.$$.fragment,Pt),mz=p(Pt),Gn=a(Pt,"P",{});var Bh=i(Gn);fz=s(Bh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=a(Bh,"CODE",{});var O3=i(bg);uz=s(O3,"span start logits"),O3.forEach(t),gz=s(Bh," and "),kg=a(Bh,"CODE",{});var A3=i(kg);_z=s(A3,"span end logits"),A3.forEach(t),bz=s(Bh,")."),Bh.forEach(t),kz=p(Pt),wc=a(Pt,"P",{});var py=i(wc);yz=s(py,"This model inherits from "),Vp=a(py,"A",{href:!0});var I3=i(Vp);Tz=s(I3,"FlaxPreTrainedModel"),I3.forEach(t),vz=s(py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),py.forEach(t),wz=p(Pt),$c=a(Pt,"P",{});var hy=i($c);$z=s(hy,"This model is also a Flax Linen "),Fc=a(hy,"A",{href:!0,rel:!0});var L3=i(Fc);Fz=s(L3,"flax.linen.Module"),L3.forEach(t),xz=s(hy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hy.forEach(t),Bz=p(Pt),yg=a(Pt,"P",{});var D3=i(yg);Mz=s(D3,"Finally, this model supports inherent JAX features such as:"),D3.forEach(t),Ez=p(Pt),_o=a(Pt,"UL",{});var va=i(_o);Tg=a(va,"LI",{});var S3=i(Tg);xc=a(S3,"A",{href:!0,rel:!0});var U3=i(xc);zz=s(U3,"Just-In-Time (JIT) compilation"),U3.forEach(t),S3.forEach(t),Pz=p(va),vg=a(va,"LI",{});var W3=i(vg);Bc=a(W3,"A",{href:!0,rel:!0});var H3=i(Bc);qz=s(H3,"Automatic Differentiation"),H3.forEach(t),W3.forEach(t),jz=p(va),wg=a(va,"LI",{});var R3=i(wg);Mc=a(R3,"A",{href:!0,rel:!0});var V3=i(Mc);Cz=s(V3,"Vectorization"),V3.forEach(t),R3.forEach(t),Nz=p(va),$g=a(va,"LI",{});var Q3=i($g);Ec=a(Q3,"A",{href:!0,rel:!0});var K3=i(Ec);Oz=s(K3,"Parallelization"),K3.forEach(t),Q3.forEach(t),va.forEach(t),Az=p(Pt),Yt=a(Pt,"DIV",{class:!0});var wa=i(Yt);v(zc.$$.fragment,wa),Iz=p(wa),Xn=a(wa,"P",{});var Mh=i(Xn);Lz=s(Mh,"The "),Fg=a(Mh,"CODE",{});var J3=i(Fg);Dz=s(J3,"FlaxBertPreTrainedModel"),J3.forEach(t),Sz=s(Mh," forward method, overrides the "),xg=a(Mh,"CODE",{});var G3=i(xg);Uz=s(G3,"__call__"),G3.forEach(t),Wz=s(Mh," special method."),Mh.forEach(t),Hz=p(wa),v(Gr.$$.fragment,wa),Rz=p(wa),v(Xr.$$.fragment,wa),wa.forEach(t),Pt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(TN)),u(m,"id","bert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ne,"href","https://arxiv.org/abs/1810.04805"),u(ne,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u(we,"class","relative group"),u(Rc,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertModel"),u(Vc,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertModel"),u(Fa,"href","https://huggingface.co/bert-base-uncased"),u(Fa,"rel","nofollow"),u(Qc,"href","/docs/transformers/pr_16950/en/main_classes/configuration#transformers.PretrainedConfig"),u(Kc,"href","/docs/transformers/pr_16950/en/main_classes/configuration#transformers.PretrainedConfig"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.BertTokenizer"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.BertTokenizer"),u(Do,"class","relative group"),u(Jc,"href","/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yc,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.BertTokenizerFast"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.BertTokenizerFast"),u(Uo,"class","relative group"),u(Zc,"href","/docs/transformers/pr_16950/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ho,"class","relative group"),u(op,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForPreTraining"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(np,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForPreTraining"),u(cs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.BertModel"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.BertModel"),u(Qo,"class","relative group"),u(rp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ei,"rel","nofollow"),u(oi,"href","https://arxiv.org/abs/1706.03762"),u(oi,"rel","nofollow"),u(ap,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertModel"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.BertForPreTraining"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.BertForPreTraining"),u(Jo,"class","relative group"),u(ip,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(li,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(li,"rel","nofollow"),u(lp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForPreTraining"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertLMHeadModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertLMHeadModel"),u(Yo,"class","relative group"),u(dp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ui,"rel","nofollow"),u(cp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertLMHeadModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.BertForMaskedLM"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.BertForMaskedLM"),u(en,"class","relative group"),u(pp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vi,"rel","nofollow"),u(hp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForMaskedLM"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.BertForNextSentencePrediction"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.BertForNextSentencePrediction"),u(on,"class","relative group"),u(mp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(Ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ei,"rel","nofollow"),u(fp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.BertForSequenceClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.BertForSequenceClassification"),u(sn,"class","relative group"),u(up,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(gp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForMultipleChoice"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForMultipleChoice"),u(an,"class","relative group"),u(_p,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(Si,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Si,"rel","nofollow"),u(bp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.BertForTokenClassification"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.BertForTokenClassification"),u(dn,"class","relative group"),u(kp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(Qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Qi,"rel","nofollow"),u(yp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForTokenClassification"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.BertForQuestionAnswering"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.BertForQuestionAnswering"),u(pn,"class","relative group"),u(Tp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.PreTrainedModel"),u(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Zi,"rel","nofollow"),u(vp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.TFBertModel"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.TFBertModel"),u(fn,"class","relative group"),u(wp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u(rl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(rl,"rel","nofollow"),u($p,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.TFBertForPreTraining"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.TFBertForPreTraining"),u(gn,"class","relative group"),u(Fp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u(pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(pl,"rel","nofollow"),u(xp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ys,"id","transformers.TFBertLMHeadModel"),u(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ys,"href","#transformers.TFBertLMHeadModel"),u(kn,"class","relative group"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForMaskedLM"),u(Tn,"class","relative group"),u(Bp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u($l,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($l,"rel","nofollow"),u(Mp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.TFBertForNextSentencePrediction"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.TFBertForNextSentencePrediction"),u(wn,"class","relative group"),u(Ep,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pl,"rel","nofollow"),u(zp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFBertForSequenceClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFBertForSequenceClassification"),u(Fn,"class","relative group"),u(Pp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(qp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.TFBertForMultipleChoice"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.TFBertForMultipleChoice"),u(Bn,"class","relative group"),u(jp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wl,"rel","nofollow"),u(Cp,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.TFBertForTokenClassification"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.TFBertForTokenClassification"),u(En,"class","relative group"),u(Np,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u(Jl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Jl,"rel","nofollow"),u(Op,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wr,"id","transformers.TFBertForQuestionAnswering"),u(wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wr,"href","#transformers.TFBertForQuestionAnswering"),u(Pn,"class","relative group"),u(Ap,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.TFPreTrainedModel"),u(td,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(td,"rel","nofollow"),u(Ip,"href","/docs/transformers/pr_16950/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxBertModel"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxBertModel"),u(Cn,"class","relative group"),u(Lp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(id,"rel","nofollow"),u(ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ld,"rel","nofollow"),u(dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(dd,"rel","nofollow"),u(cd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(cd,"rel","nofollow"),u(pd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(pd,"rel","nofollow"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxBertForPreTraining"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxBertForPreTraining"),u(On,"class","relative group"),u(Dp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(_d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(_d,"rel","nofollow"),u(bd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kd,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(yd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Td,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertForMaskedLM"),u(Ln,"class","relative group"),u(Sp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForNextSentencePrediction"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Sn,"class","relative group"),u(Up,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ld,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ud,"rel","nofollow"),u(Wd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForSequenceClassification"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForSequenceClassification"),u(Wn,"class","relative group"),u(Wp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMultipleChoice"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMultipleChoice"),u(Rn,"class","relative group"),u(Hp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vr,"id","transformers.FlaxBertForTokenClassification"),u(Vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vr,"href","#transformers.FlaxBertForTokenClassification"),u(Qn,"class","relative group"),u(Rp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForQuestionAnswering"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForQuestionAnswering"),u(Jn,"class","relative group"),u(Vp,"href","/docs/transformers/pr_16950/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(xc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ec,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,h,k),e(h,m),e(m,g),w(l,g,null),e(h,f),e(h,M),e(M,be),b(o,X,k),b(o,z,k),e(z,ee),e(ee,L),w(oe,L,null),e(z,ke),e(z,D),e(D,ye),b(o,me,k),b(o,J,k),e(J,O),e(J,ne),e(ne,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,Te),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,V),b(o,_e,k),b(o,te,k),e(te,N),e(N,ve),e(te,Q),e(te,pe),e(pe,y),b(o,E,k),b(o,K,k),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),b(o,W,k),b(o,we,k),e(we,Fe),e(Fe,U),w(Ee,U,null),e(we,je),e(we,he),e(he,Ce),b(o,b_,k),b(o,qt,k),w($a,qt,null),e(qt,my),e(qt,io),e(io,fy),e(io,Rc),e(Rc,uy),e(io,gy),e(io,Vc),e(Vc,_y),e(io,by),e(io,Fa),e(Fa,ky),e(io,yy),e(qt,Ty),e(qt,Lo),e(Lo,vy),e(Lo,Qc),e(Qc,wy),e(Lo,$y),e(Lo,Kc),e(Kc,Fy),e(Lo,xy),e(qt,By),w(ns,qt,null),b(o,k_,k),b(o,Do,k),e(Do,ss),e(ss,Eh),w(xa,Eh,null),e(Do,My),e(Do,zh),e(zh,Ey),b(o,y_,k),b(o,Ne,k),w(Ba,Ne,null),e(Ne,zy),e(Ne,Ph),e(Ph,Py),e(Ne,qy),e(Ne,Ma),e(Ma,jy),e(Ma,Jc),e(Jc,Cy),e(Ma,Ny),e(Ne,Oy),e(Ne,To),w(Ea,To,null),e(To,Ay),e(To,qh),e(qh,Iy),e(To,Ly),e(To,za),e(za,Gc),e(Gc,Dy),e(Gc,jh),e(jh,Sy),e(za,Uy),e(za,Xc),e(Xc,Wy),e(Xc,Ch),e(Ch,Hy),e(Ne,Ry),e(Ne,rs),w(Pa,rs,null),e(rs,Vy),e(rs,qa),e(qa,Qy),e(qa,Nh),e(Nh,Ky),e(qa,Jy),e(Ne,Gy),e(Ne,Ct),w(ja,Ct,null),e(Ct,Xy),e(Ct,Oh),e(Oh,Yy),e(Ct,Zy),w(as,Ct,null),e(Ct,eT),e(Ct,So),e(So,tT),e(So,Ah),e(Ah,oT),e(So,nT),e(So,Ih),e(Ih,sT),e(So,rT),e(Ne,aT),e(Ne,Yc),w(Ca,Yc,null),b(o,T_,k),b(o,Uo,k),e(Uo,is),e(is,Lh),w(Na,Lh,null),e(Uo,iT),e(Uo,Dh),e(Dh,lT),b(o,v_,k),b(o,st,k),w(Oa,st,null),e(st,dT),e(st,Aa),e(Aa,cT),e(Aa,Sh),e(Sh,pT),e(Aa,hT),e(st,mT),e(st,Ia),e(Ia,fT),e(Ia,Zc),e(Zc,uT),e(Ia,gT),e(st,_T),e(st,vo),w(La,vo,null),e(vo,bT),e(vo,Uh),e(Uh,kT),e(vo,yT),e(vo,Da),e(Da,ep),e(ep,TT),e(ep,Wh),e(Wh,vT),e(Da,wT),e(Da,tp),e(tp,$T),e(tp,Hh),e(Hh,FT),e(st,xT),e(st,Nt),w(Sa,Nt,null),e(Nt,BT),e(Nt,Rh),e(Rh,MT),e(Nt,ET),w(ls,Nt,null),e(Nt,zT),e(Nt,Wo),e(Wo,PT),e(Wo,Vh),e(Vh,qT),e(Wo,jT),e(Wo,Qh),e(Qh,CT),e(Wo,NT),b(o,w_,k),b(o,Ho,k),e(Ho,ds),e(ds,Kh),w(Ua,Kh,null),e(Ho,OT),e(Ho,Jh),e(Jh,AT),b(o,$_,k),b(o,Ro,k),w(Wa,Ro,null),e(Ro,IT),e(Ro,Ha),e(Ha,LT),e(Ha,op),e(op,DT),e(Ha,ST),b(o,F_,k),b(o,Vo,k),w(Ra,Vo,null),e(Vo,UT),e(Vo,Va),e(Va,WT),e(Va,np),e(np,HT),e(Va,RT),b(o,x_,k),b(o,lo,k),w(Qa,lo,null),e(lo,VT),e(lo,Ka),e(Ka,QT),e(Ka,sp),e(sp,KT),e(Ka,JT),e(lo,GT),e(lo,cs),w(Ja,cs,null),e(cs,XT),e(cs,Gh),e(Gh,YT),b(o,B_,k),b(o,Qo,k),e(Qo,ps),e(ps,Xh),w(Ga,Xh,null),e(Qo,ZT),e(Qo,Yh),e(Yh,ev),b(o,M_,k),b(o,Oe,k),w(Xa,Oe,null),e(Oe,tv),e(Oe,Zh),e(Zh,ov),e(Oe,nv),e(Oe,Ya),e(Ya,sv),e(Ya,rp),e(rp,rv),e(Ya,av),e(Oe,iv),e(Oe,Za),e(Za,lv),e(Za,ei),e(ei,dv),e(Za,cv),e(Oe,pv),e(Oe,ti),e(ti,hv),e(ti,oi),e(oi,mv),e(ti,fv),e(Oe,uv),e(Oe,Qe),e(Qe,gv),e(Qe,em),e(em,_v),e(Qe,bv),e(Qe,tm),e(tm,kv),e(Qe,yv),e(Qe,om),e(om,Tv),e(Qe,vv),e(Qe,nm),e(nm,wv),e(Qe,$v),e(Qe,sm),e(sm,Fv),e(Qe,xv),e(Qe,rm),e(rm,Bv),e(Qe,Mv),e(Oe,Ev),e(Oe,Ot),w(ni,Ot,null),e(Ot,zv),e(Ot,Ko),e(Ko,Pv),e(Ko,ap),e(ap,qv),e(Ko,jv),e(Ko,am),e(am,Cv),e(Ko,Nv),e(Ot,Ov),w(hs,Ot,null),e(Ot,Av),w(ms,Ot,null),b(o,E_,k),b(o,Jo,k),e(Jo,fs),e(fs,im),w(si,im,null),e(Jo,Iv),e(Jo,lm),e(lm,Lv),b(o,z_,k),b(o,rt,k),w(ri,rt,null),e(rt,Dv),e(rt,Go),e(Go,Sv),e(Go,dm),e(dm,Uv),e(Go,Wv),e(Go,cm),e(cm,Hv),e(Go,Rv),e(rt,Vv),e(rt,ai),e(ai,Qv),e(ai,ip),e(ip,Kv),e(ai,Jv),e(rt,Gv),e(rt,ii),e(ii,Xv),e(ii,li),e(li,Yv),e(ii,Zv),e(rt,e1),e(rt,At),w(di,At,null),e(At,t1),e(At,Xo),e(Xo,o1),e(Xo,lp),e(lp,n1),e(Xo,s1),e(Xo,pm),e(pm,r1),e(Xo,a1),e(At,i1),w(us,At,null),e(At,l1),w(gs,At,null),b(o,P_,k),b(o,Yo,k),e(Yo,_s),e(_s,hm),w(ci,hm,null),e(Yo,d1),e(Yo,mm),e(mm,c1),b(o,q_,k),b(o,at,k),w(pi,at,null),e(at,p1),e(at,hi),e(hi,h1),e(hi,fm),e(fm,m1),e(hi,f1),e(at,u1),e(at,mi),e(mi,g1),e(mi,dp),e(dp,_1),e(mi,b1),e(at,k1),e(at,fi),e(fi,y1),e(fi,ui),e(ui,T1),e(fi,v1),e(at,w1),e(at,It),w(gi,It,null),e(It,$1),e(It,Zo),e(Zo,F1),e(Zo,cp),e(cp,x1),e(Zo,B1),e(Zo,um),e(um,M1),e(Zo,E1),e(It,z1),w(bs,It,null),e(It,P1),w(ks,It,null),b(o,j_,k),b(o,en,k),e(en,ys),e(ys,gm),w(_i,gm,null),e(en,q1),e(en,_m),e(_m,j1),b(o,C_,k),b(o,it,k),w(bi,it,null),e(it,C1),e(it,ki),e(ki,N1),e(ki,bm),e(bm,O1),e(ki,A1),e(it,I1),e(it,yi),e(yi,L1),e(yi,pp),e(pp,D1),e(yi,S1),e(it,U1),e(it,Ti),e(Ti,W1),e(Ti,vi),e(vi,H1),e(Ti,R1),e(it,V1),e(it,mt),w(wi,mt,null),e(mt,Q1),e(mt,tn),e(tn,K1),e(tn,hp),e(hp,J1),e(tn,G1),e(tn,km),e(km,X1),e(tn,Y1),e(mt,Z1),w(Ts,mt,null),e(mt,ew),w(vs,mt,null),e(mt,tw),w(ws,mt,null),b(o,N_,k),b(o,on,k),e(on,$s),e($s,ym),w($i,ym,null),e(on,ow),e(on,Tm),e(Tm,nw),b(o,O_,k),b(o,lt,k),w(Fi,lt,null),e(lt,sw),e(lt,xi),e(xi,rw),e(xi,vm),e(vm,aw),e(xi,iw),e(lt,lw),e(lt,Bi),e(Bi,dw),e(Bi,mp),e(mp,cw),e(Bi,pw),e(lt,hw),e(lt,Mi),e(Mi,mw),e(Mi,Ei),e(Ei,fw),e(Mi,uw),e(lt,gw),e(lt,Lt),w(zi,Lt,null),e(Lt,_w),e(Lt,nn),e(nn,bw),e(nn,fp),e(fp,kw),e(nn,yw),e(nn,wm),e(wm,Tw),e(nn,vw),e(Lt,ww),w(Fs,Lt,null),e(Lt,$w),w(xs,Lt,null),b(o,A_,k),b(o,sn,k),e(sn,Bs),e(Bs,$m),w(Pi,$m,null),e(sn,Fw),e(sn,Fm),e(Fm,xw),b(o,I_,k),b(o,dt,k),w(qi,dt,null),e(dt,Bw),e(dt,xm),e(xm,Mw),e(dt,Ew),e(dt,ji),e(ji,zw),e(ji,up),e(up,Pw),e(ji,qw),e(dt,jw),e(dt,Ci),e(Ci,Cw),e(Ci,Ni),e(Ni,Nw),e(Ci,Ow),e(dt,Aw),e(dt,Ve),w(Oi,Ve,null),e(Ve,Iw),e(Ve,rn),e(rn,Lw),e(rn,gp),e(gp,Dw),e(rn,Sw),e(rn,Bm),e(Bm,Uw),e(rn,Ww),e(Ve,Hw),w(Ms,Ve,null),e(Ve,Rw),w(Es,Ve,null),e(Ve,Vw),w(zs,Ve,null),e(Ve,Qw),w(Ps,Ve,null),e(Ve,Kw),w(qs,Ve,null),b(o,L_,k),b(o,an,k),e(an,js),e(js,Mm),w(Ai,Mm,null),e(an,Jw),e(an,Em),e(Em,Gw),b(o,D_,k),b(o,ct,k),w(Ii,ct,null),e(ct,Xw),e(ct,zm),e(zm,Yw),e(ct,Zw),e(ct,Li),e(Li,e$),e(Li,_p),e(_p,t$),e(Li,o$),e(ct,n$),e(ct,Di),e(Di,s$),e(Di,Si),e(Si,r$),e(Di,a$),e(ct,i$),e(ct,Dt),w(Ui,Dt,null),e(Dt,l$),e(Dt,ln),e(ln,d$),e(ln,bp),e(bp,c$),e(ln,p$),e(ln,Pm),e(Pm,h$),e(ln,m$),e(Dt,f$),w(Cs,Dt,null),e(Dt,u$),w(Ns,Dt,null),b(o,S_,k),b(o,dn,k),e(dn,Os),e(Os,qm),w(Wi,qm,null),e(dn,g$),e(dn,jm),e(jm,_$),b(o,U_,k),b(o,pt,k),w(Hi,pt,null),e(pt,b$),e(pt,Cm),e(Cm,k$),e(pt,y$),e(pt,Ri),e(Ri,T$),e(Ri,kp),e(kp,v$),e(Ri,w$),e(pt,$$),e(pt,Vi),e(Vi,F$),e(Vi,Qi),e(Qi,x$),e(Vi,B$),e(pt,M$),e(pt,ft),w(Ki,ft,null),e(ft,E$),e(ft,cn),e(cn,z$),e(cn,yp),e(yp,P$),e(cn,q$),e(cn,Nm),e(Nm,j$),e(cn,C$),e(ft,N$),w(As,ft,null),e(ft,O$),w(Is,ft,null),e(ft,A$),w(Ls,ft,null),b(o,W_,k),b(o,pn,k),e(pn,Ds),e(Ds,Om),w(Ji,Om,null),e(pn,I$),e(pn,Am),e(Am,L$),b(o,H_,k),b(o,ht,k),w(Gi,ht,null),e(ht,D$),e(ht,hn),e(hn,S$),e(hn,Im),e(Im,U$),e(hn,W$),e(hn,Lm),e(Lm,H$),e(hn,R$),e(ht,V$),e(ht,Xi),e(Xi,Q$),e(Xi,Tp),e(Tp,K$),e(Xi,J$),e(ht,G$),e(ht,Yi),e(Yi,X$),e(Yi,Zi),e(Zi,Y$),e(Yi,Z$),e(ht,e0),e(ht,ut),w(el,ut,null),e(ut,t0),e(ut,mn),e(mn,o0),e(mn,vp),e(vp,n0),e(mn,s0),e(mn,Dm),e(Dm,r0),e(mn,a0),e(ut,i0),w(Ss,ut,null),e(ut,l0),w(Us,ut,null),e(ut,d0),w(Ws,ut,null),b(o,R_,k),b(o,fn,k),e(fn,Hs),e(Hs,Sm),w(tl,Sm,null),e(fn,c0),e(fn,Um),e(Um,p0),b(o,V_,k),b(o,Ke,k),w(ol,Ke,null),e(Ke,h0),e(Ke,Wm),e(Wm,m0),e(Ke,f0),e(Ke,nl),e(nl,u0),e(nl,wp),e(wp,g0),e(nl,_0),e(Ke,b0),e(Ke,sl),e(sl,k0),e(sl,rl),e(rl,y0),e(sl,T0),e(Ke,v0),w(Rs,Ke,null),e(Ke,w0),e(Ke,St),w(al,St,null),e(St,$0),e(St,un),e(un,F0),e(un,$p),e($p,x0),e(un,B0),e(un,Hm),e(Hm,M0),e(un,E0),e(St,z0),w(Vs,St,null),e(St,P0),w(Qs,St,null),b(o,Q_,k),b(o,gn,k),e(gn,Ks),e(Ks,Rm),w(il,Rm,null),e(gn,q0),e(gn,Vm),e(Vm,j0),b(o,K_,k),b(o,Je,k),w(ll,Je,null),e(Je,C0),e(Je,_n),e(_n,N0),e(_n,Qm),e(Qm,O0),e(_n,A0),e(_n,Km),e(Km,I0),e(_n,L0),e(Je,D0),e(Je,dl),e(dl,S0),e(dl,Fp),e(Fp,U0),e(dl,W0),e(Je,H0),e(Je,cl),e(cl,R0),e(cl,pl),e(pl,V0),e(cl,Q0),e(Je,K0),w(Js,Je,null),e(Je,J0),e(Je,Ut),w(hl,Ut,null),e(Ut,G0),e(Ut,bn),e(bn,X0),e(bn,xp),e(xp,Y0),e(bn,Z0),e(bn,Jm),e(Jm,e2),e(bn,t2),e(Ut,o2),w(Gs,Ut,null),e(Ut,n2),w(Xs,Ut,null),b(o,J_,k),b(o,kn,k),e(kn,Ys),e(Ys,Gm),w(ml,Gm,null),e(kn,s2),e(kn,Xm),e(Xm,r2),b(o,G_,k),b(o,yn,k),w(fl,yn,null),e(yn,a2),e(yn,gt),w(ul,gt,null),e(gt,i2),e(gt,Ae),e(Ae,l2),e(Ae,Ym),e(Ym,d2),e(Ae,c2),e(Ae,Zm),e(Zm,p2),e(Ae,h2),e(Ae,ef),e(ef,m2),e(Ae,f2),e(Ae,tf),e(tf,u2),e(Ae,g2),e(Ae,of),e(of,_2),e(Ae,b2),e(Ae,nf),e(nf,k2),e(Ae,y2),e(Ae,sf),e(sf,T2),e(Ae,v2),e(gt,w2),e(gt,gl),e(gl,_l),e(_l,$2),e(_l,rf),e(rf,F2),e(_l,x2),e(gl,B2),e(gl,bl),e(bl,M2),e(bl,af),e(af,E2),e(bl,z2),e(gt,P2),e(gt,G),e(G,q2),e(G,lf),e(lf,j2),e(G,C2),e(G,df),e(df,N2),e(G,O2),e(G,cf),e(cf,A2),e(G,I2),e(G,pf),e(pf,L2),e(G,D2),e(G,hf),e(hf,S2),e(G,U2),e(G,mf),e(mf,W2),e(G,H2),e(G,ff),e(ff,R2),e(G,V2),e(G,uf),e(uf,Q2),e(G,K2),e(G,gf),e(gf,J2),e(G,G2),e(G,_f),e(_f,X2),e(G,Y2),e(G,bf),e(bf,Z2),e(G,eF),e(G,kf),e(kf,tF),e(G,oF),e(G,yf),e(yf,nF),e(G,sF),e(G,Tf),e(Tf,rF),e(G,aF),e(G,vf),e(vf,iF),e(G,lF),e(G,wf),e(wf,dF),e(G,cF),e(G,$f),e($f,pF),e(G,hF),e(G,Ff),e(Ff,mF),e(G,fF),e(G,xf),e(xf,uF),e(G,gF),e(G,Bf),e(Bf,_F),e(G,bF),e(gt,kF),w(Zs,gt,null),b(o,X_,k),b(o,Tn,k),e(Tn,er),e(er,Mf),w(kl,Mf,null),e(Tn,yF),e(Tn,Ef),e(Ef,TF),b(o,Y_,k),b(o,Ge,k),w(yl,Ge,null),e(Ge,vF),e(Ge,Tl),e(Tl,wF),e(Tl,zf),e(zf,$F),e(Tl,FF),e(Ge,xF),e(Ge,vl),e(vl,BF),e(vl,Bp),e(Bp,MF),e(vl,EF),e(Ge,zF),e(Ge,wl),e(wl,PF),e(wl,$l),e($l,qF),e(wl,jF),e(Ge,CF),w(tr,Ge,null),e(Ge,NF),e(Ge,_t),w(Fl,_t,null),e(_t,OF),e(_t,vn),e(vn,AF),e(vn,Mp),e(Mp,IF),e(vn,LF),e(vn,Pf),e(Pf,DF),e(vn,SF),e(_t,UF),w(or,_t,null),e(_t,WF),w(nr,_t,null),e(_t,HF),w(sr,_t,null),b(o,Z_,k),b(o,wn,k),e(wn,rr),e(rr,qf),w(xl,qf,null),e(wn,RF),e(wn,jf),e(jf,VF),b(o,eb,k),b(o,Xe,k),w(Bl,Xe,null),e(Xe,QF),e(Xe,Ml),e(Ml,KF),e(Ml,Cf),e(Cf,JF),e(Ml,GF),e(Xe,XF),e(Xe,El),e(El,YF),e(El,Ep),e(Ep,ZF),e(El,ex),e(Xe,tx),e(Xe,zl),e(zl,ox),e(zl,Pl),e(Pl,nx),e(zl,sx),e(Xe,rx),w(ar,Xe,null),e(Xe,ax),e(Xe,Wt),w(ql,Wt,null),e(Wt,ix),e(Wt,$n),e($n,lx),e($n,zp),e(zp,dx),e($n,cx),e($n,Nf),e(Nf,px),e($n,hx),e(Wt,mx),w(ir,Wt,null),e(Wt,fx),w(lr,Wt,null),b(o,tb,k),b(o,Fn,k),e(Fn,dr),e(dr,Of),w(jl,Of,null),e(Fn,ux),e(Fn,Af),e(Af,gx),b(o,ob,k),b(o,Ye,k),w(Cl,Ye,null),e(Ye,_x),e(Ye,If),e(If,bx),e(Ye,kx),e(Ye,Nl),e(Nl,yx),e(Nl,Pp),e(Pp,Tx),e(Nl,vx),e(Ye,wx),e(Ye,Ol),e(Ol,$x),e(Ol,Al),e(Al,Fx),e(Ol,xx),e(Ye,Bx),w(cr,Ye,null),e(Ye,Mx),e(Ye,bt),w(Il,bt,null),e(bt,Ex),e(bt,xn),e(xn,zx),e(xn,qp),e(qp,Px),e(xn,qx),e(xn,Lf),e(Lf,jx),e(xn,Cx),e(bt,Nx),w(pr,bt,null),e(bt,Ox),w(hr,bt,null),e(bt,Ax),w(mr,bt,null),b(o,nb,k),b(o,Bn,k),e(Bn,fr),e(fr,Df),w(Ll,Df,null),e(Bn,Ix),e(Bn,Sf),e(Sf,Lx),b(o,sb,k),b(o,Ze,k),w(Dl,Ze,null),e(Ze,Dx),e(Ze,Uf),e(Uf,Sx),e(Ze,Ux),e(Ze,Sl),e(Sl,Wx),e(Sl,jp),e(jp,Hx),e(Sl,Rx),e(Ze,Vx),e(Ze,Ul),e(Ul,Qx),e(Ul,Wl),e(Wl,Kx),e(Ul,Jx),e(Ze,Gx),w(ur,Ze,null),e(Ze,Xx),e(Ze,Ht),w(Hl,Ht,null),e(Ht,Yx),e(Ht,Mn),e(Mn,Zx),e(Mn,Cp),e(Cp,eB),e(Mn,tB),e(Mn,Wf),e(Wf,oB),e(Mn,nB),e(Ht,sB),w(gr,Ht,null),e(Ht,rB),w(_r,Ht,null),b(o,rb,k),b(o,En,k),e(En,br),e(br,Hf),w(Rl,Hf,null),e(En,aB),e(En,Rf),e(Rf,iB),b(o,ab,k),b(o,et,k),w(Vl,et,null),e(et,lB),e(et,Vf),e(Vf,dB),e(et,cB),e(et,Ql),e(Ql,pB),e(Ql,Np),e(Np,hB),e(Ql,mB),e(et,fB),e(et,Kl),e(Kl,uB),e(Kl,Jl),e(Jl,gB),e(Kl,_B),e(et,bB),w(kr,et,null),e(et,kB),e(et,kt),w(Gl,kt,null),e(kt,yB),e(kt,zn),e(zn,TB),e(zn,Op),e(Op,vB),e(zn,wB),e(zn,Qf),e(Qf,$B),e(zn,FB),e(kt,xB),w(yr,kt,null),e(kt,BB),w(Tr,kt,null),e(kt,MB),w(vr,kt,null),b(o,ib,k),b(o,Pn,k),e(Pn,wr),e(wr,Kf),w(Xl,Kf,null),e(Pn,EB),e(Pn,Jf),e(Jf,zB),b(o,lb,k),b(o,tt,k),w(Yl,tt,null),e(tt,PB),e(tt,qn),e(qn,qB),e(qn,Gf),e(Gf,jB),e(qn,CB),e(qn,Xf),e(Xf,NB),e(qn,OB),e(tt,AB),e(tt,Zl),e(Zl,IB),e(Zl,Ap),e(Ap,LB),e(Zl,DB),e(tt,SB),e(tt,ed),e(ed,UB),e(ed,td),e(td,WB),e(ed,HB),e(tt,RB),w($r,tt,null),e(tt,VB),e(tt,yt),w(od,yt,null),e(yt,QB),e(yt,jn),e(jn,KB),e(jn,Ip),e(Ip,JB),e(jn,GB),e(jn,Yf),e(Yf,XB),e(jn,YB),e(yt,ZB),w(Fr,yt,null),e(yt,eM),w(xr,yt,null),e(yt,tM),w(Br,yt,null),b(o,db,k),b(o,Cn,k),e(Cn,Mr),e(Mr,Zf),w(nd,Zf,null),e(Cn,oM),e(Cn,eu),e(eu,nM),b(o,cb,k),b(o,Ie,k),w(sd,Ie,null),e(Ie,sM),e(Ie,tu),e(tu,rM),e(Ie,aM),e(Ie,rd),e(rd,iM),e(rd,Lp),e(Lp,lM),e(rd,dM),e(Ie,cM),e(Ie,ad),e(ad,pM),e(ad,id),e(id,hM),e(ad,mM),e(Ie,fM),e(Ie,ou),e(ou,uM),e(Ie,gM),e(Ie,co),e(co,nu),e(nu,ld),e(ld,_M),e(co,bM),e(co,su),e(su,dd),e(dd,kM),e(co,yM),e(co,ru),e(ru,cd),e(cd,TM),e(co,vM),e(co,au),e(au,pd),e(pd,wM),e(Ie,$M),e(Ie,Rt),w(hd,Rt,null),e(Rt,FM),e(Rt,Nn),e(Nn,xM),e(Nn,iu),e(iu,BM),e(Nn,MM),e(Nn,lu),e(lu,EM),e(Nn,zM),e(Rt,PM),w(Er,Rt,null),e(Rt,qM),w(zr,Rt,null),b(o,pb,k),b(o,On,k),e(On,Pr),e(Pr,du),w(md,du,null),e(On,jM),e(On,cu),e(cu,CM),b(o,hb,k),b(o,Le,k),w(fd,Le,null),e(Le,NM),e(Le,An),e(An,OM),e(An,pu),e(pu,AM),e(An,IM),e(An,hu),e(hu,LM),e(An,DM),e(Le,SM),e(Le,ud),e(ud,UM),e(ud,Dp),e(Dp,WM),e(ud,HM),e(Le,RM),e(Le,gd),e(gd,VM),e(gd,_d),e(_d,QM),e(gd,KM),e(Le,JM),e(Le,mu),e(mu,GM),e(Le,XM),e(Le,po),e(po,fu),e(fu,bd),e(bd,YM),e(po,ZM),e(po,uu),e(uu,kd),e(kd,eE),e(po,tE),e(po,gu),e(gu,yd),e(yd,oE),e(po,nE),e(po,_u),e(_u,Td),e(Td,sE),e(Le,rE),e(Le,Vt),w(vd,Vt,null),e(Vt,aE),e(Vt,In),e(In,iE),e(In,bu),e(bu,lE),e(In,dE),e(In,ku),e(ku,cE),e(In,pE),e(Vt,hE),w(qr,Vt,null),e(Vt,mE),w(jr,Vt,null),b(o,mb,k),b(o,Ln,k),e(Ln,Cr),e(Cr,yu),w(wd,yu,null),e(Ln,fE),e(Ln,Tu),e(Tu,uE),b(o,fb,k),b(o,De,k),w($d,De,null),e(De,gE),e(De,Fd),e(Fd,_E),e(Fd,vu),e(vu,bE),e(Fd,kE),e(De,yE),e(De,xd),e(xd,TE),e(xd,Sp),e(Sp,vE),e(xd,wE),e(De,$E),e(De,Bd),e(Bd,FE),e(Bd,Md),e(Md,xE),e(Bd,BE),e(De,ME),e(De,wu),e(wu,EE),e(De,zE),e(De,ho),e(ho,$u),e($u,Ed),e(Ed,PE),e(ho,qE),e(ho,Fu),e(Fu,zd),e(zd,jE),e(ho,CE),e(ho,xu),e(xu,Pd),e(Pd,NE),e(ho,OE),e(ho,Bu),e(Bu,qd),e(qd,AE),e(De,IE),e(De,Qt),w(jd,Qt,null),e(Qt,LE),e(Qt,Dn),e(Dn,DE),e(Dn,Mu),e(Mu,SE),e(Dn,UE),e(Dn,Eu),e(Eu,WE),e(Dn,HE),e(Qt,RE),w(Nr,Qt,null),e(Qt,VE),w(Or,Qt,null),b(o,ub,k),b(o,Sn,k),e(Sn,Ar),e(Ar,zu),w(Cd,zu,null),e(Sn,QE),e(Sn,Pu),e(Pu,KE),b(o,gb,k),b(o,Se,k),w(Nd,Se,null),e(Se,JE),e(Se,Od),e(Od,GE),e(Od,qu),e(qu,XE),e(Od,YE),e(Se,ZE),e(Se,Ad),e(Ad,e5),e(Ad,Up),e(Up,t5),e(Ad,o5),e(Se,n5),e(Se,Id),e(Id,s5),e(Id,Ld),e(Ld,r5),e(Id,a5),e(Se,i5),e(Se,ju),e(ju,l5),e(Se,d5),e(Se,mo),e(mo,Cu),e(Cu,Dd),e(Dd,c5),e(mo,p5),e(mo,Nu),e(Nu,Sd),e(Sd,h5),e(mo,m5),e(mo,Ou),e(Ou,Ud),e(Ud,f5),e(mo,u5),e(mo,Au),e(Au,Wd),e(Wd,g5),e(Se,_5),e(Se,Kt),w(Hd,Kt,null),e(Kt,b5),e(Kt,Un),e(Un,k5),e(Un,Iu),e(Iu,y5),e(Un,T5),e(Un,Lu),e(Lu,v5),e(Un,w5),e(Kt,$5),w(Ir,Kt,null),e(Kt,F5),w(Lr,Kt,null),b(o,_b,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Du),w(Rd,Du,null),e(Wn,x5),e(Wn,Su),e(Su,B5),b(o,bb,k),b(o,Ue,k),w(Vd,Ue,null),e(Ue,M5),e(Ue,Uu),e(Uu,E5),e(Ue,z5),e(Ue,Qd),e(Qd,P5),e(Qd,Wp),e(Wp,q5),e(Qd,j5),e(Ue,C5),e(Ue,Kd),e(Kd,N5),e(Kd,Jd),e(Jd,O5),e(Kd,A5),e(Ue,I5),e(Ue,Wu),e(Wu,L5),e(Ue,D5),e(Ue,fo),e(fo,Hu),e(Hu,Gd),e(Gd,S5),e(fo,U5),e(fo,Ru),e(Ru,Xd),e(Xd,W5),e(fo,H5),e(fo,Vu),e(Vu,Yd),e(Yd,R5),e(fo,V5),e(fo,Qu),e(Qu,Zd),e(Zd,Q5),e(Ue,K5),e(Ue,Jt),w(ec,Jt,null),e(Jt,J5),e(Jt,Hn),e(Hn,G5),e(Hn,Ku),e(Ku,X5),e(Hn,Y5),e(Hn,Ju),e(Ju,Z5),e(Hn,e6),e(Jt,t6),w(Sr,Jt,null),e(Jt,o6),w(Ur,Jt,null),b(o,kb,k),b(o,Rn,k),e(Rn,Wr),e(Wr,Gu),w(tc,Gu,null),e(Rn,n6),e(Rn,Xu),e(Xu,s6),b(o,yb,k),b(o,We,k),w(oc,We,null),e(We,r6),e(We,Yu),e(Yu,a6),e(We,i6),e(We,nc),e(nc,l6),e(nc,Hp),e(Hp,d6),e(nc,c6),e(We,p6),e(We,sc),e(sc,h6),e(sc,rc),e(rc,m6),e(sc,f6),e(We,u6),e(We,Zu),e(Zu,g6),e(We,_6),e(We,uo),e(uo,eg),e(eg,ac),e(ac,b6),e(uo,k6),e(uo,tg),e(tg,ic),e(ic,y6),e(uo,T6),e(uo,og),e(og,lc),e(lc,v6),e(uo,w6),e(uo,ng),e(ng,dc),e(dc,$6),e(We,F6),e(We,Gt),w(cc,Gt,null),e(Gt,x6),e(Gt,Vn),e(Vn,B6),e(Vn,sg),e(sg,M6),e(Vn,E6),e(Vn,rg),e(rg,z6),e(Vn,P6),e(Gt,q6),w(Hr,Gt,null),e(Gt,j6),w(Rr,Gt,null),b(o,Tb,k),b(o,Qn,k),e(Qn,Vr),e(Vr,ag),w(pc,ag,null),e(Qn,C6),e(Qn,ig),e(ig,N6),b(o,vb,k),b(o,He,k),w(hc,He,null),e(He,O6),e(He,lg),e(lg,A6),e(He,I6),e(He,mc),e(mc,L6),e(mc,Rp),e(Rp,D6),e(mc,S6),e(He,U6),e(He,fc),e(fc,W6),e(fc,uc),e(uc,H6),e(fc,R6),e(He,V6),e(He,dg),e(dg,Q6),e(He,K6),e(He,go),e(go,cg),e(cg,gc),e(gc,J6),e(go,G6),e(go,pg),e(pg,_c),e(_c,X6),e(go,Y6),e(go,hg),e(hg,bc),e(bc,Z6),e(go,ez),e(go,mg),e(mg,kc),e(kc,tz),e(He,oz),e(He,Xt),w(yc,Xt,null),e(Xt,nz),e(Xt,Kn),e(Kn,sz),e(Kn,fg),e(fg,rz),e(Kn,az),e(Kn,ug),e(ug,iz),e(Kn,lz),e(Xt,dz),w(Qr,Xt,null),e(Xt,cz),w(Kr,Xt,null),b(o,wb,k),b(o,Jn,k),e(Jn,Jr),e(Jr,gg),w(Tc,gg,null),e(Jn,pz),e(Jn,_g),e(_g,hz),b(o,$b,k),b(o,Re,k),w(vc,Re,null),e(Re,mz),e(Re,Gn),e(Gn,fz),e(Gn,bg),e(bg,uz),e(Gn,gz),e(Gn,kg),e(kg,_z),e(Gn,bz),e(Re,kz),e(Re,wc),e(wc,yz),e(wc,Vp),e(Vp,Tz),e(wc,vz),e(Re,wz),e(Re,$c),e($c,$z),e($c,Fc),e(Fc,Fz),e($c,xz),e(Re,Bz),e(Re,yg),e(yg,Mz),e(Re,Ez),e(Re,_o),e(_o,Tg),e(Tg,xc),e(xc,zz),e(_o,Pz),e(_o,vg),e(vg,Bc),e(Bc,qz),e(_o,jz),e(_o,wg),e(wg,Mc),e(Mc,Cz),e(_o,Nz),e(_o,$g),e($g,Ec),e(Ec,Oz),e(Re,Az),e(Re,Yt),w(zc,Yt,null),e(Yt,Iz),e(Yt,Xn),e(Xn,Lz),e(Xn,Fg),e(Fg,Dz),e(Xn,Sz),e(Xn,xg),e(xg,Uz),e(Xn,Wz),e(Yt,Hz),w(Gr,Yt,null),e(Yt,Rz),w(Xr,Yt,null),Fb=!0},p(o,[k]){const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:o}),ns.$set(Pc);const Bg={};k&2&&(Bg.$$scope={dirty:k,ctx:o}),as.$set(Bg);const Mg={};k&2&&(Mg.$$scope={dirty:k,ctx:o}),ls.$set(Mg);const Eg={};k&2&&(Eg.$$scope={dirty:k,ctx:o}),hs.$set(Eg);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:o}),ms.$set(qc);const zg={};k&2&&(zg.$$scope={dirty:k,ctx:o}),us.$set(zg);const Pg={};k&2&&(Pg.$$scope={dirty:k,ctx:o}),gs.$set(Pg);const qg={};k&2&&(qg.$$scope={dirty:k,ctx:o}),bs.$set(qg);const jc={};k&2&&(jc.$$scope={dirty:k,ctx:o}),ks.$set(jc);const jg={};k&2&&(jg.$$scope={dirty:k,ctx:o}),Ts.$set(jg);const Cg={};k&2&&(Cg.$$scope={dirty:k,ctx:o}),vs.$set(Cg);const Ng={};k&2&&(Ng.$$scope={dirty:k,ctx:o}),ws.$set(Ng);const Og={};k&2&&(Og.$$scope={dirty:k,ctx:o}),Fs.$set(Og);const Ag={};k&2&&(Ag.$$scope={dirty:k,ctx:o}),xs.$set(Ag);const Ig={};k&2&&(Ig.$$scope={dirty:k,ctx:o}),Ms.$set(Ig);const Lg={};k&2&&(Lg.$$scope={dirty:k,ctx:o}),Es.$set(Lg);const Cc={};k&2&&(Cc.$$scope={dirty:k,ctx:o}),zs.$set(Cc);const Dg={};k&2&&(Dg.$$scope={dirty:k,ctx:o}),Ps.$set(Dg);const Sg={};k&2&&(Sg.$$scope={dirty:k,ctx:o}),qs.$set(Sg);const Yn={};k&2&&(Yn.$$scope={dirty:k,ctx:o}),Cs.$set(Yn);const Ug={};k&2&&(Ug.$$scope={dirty:k,ctx:o}),Ns.$set(Ug);const Wg={};k&2&&(Wg.$$scope={dirty:k,ctx:o}),As.$set(Wg);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:o}),Is.$set(Nc);const Hg={};k&2&&(Hg.$$scope={dirty:k,ctx:o}),Ls.$set(Hg);const Rg={};k&2&&(Rg.$$scope={dirty:k,ctx:o}),Ss.$set(Rg);const Vg={};k&2&&(Vg.$$scope={dirty:k,ctx:o}),Us.$set(Vg);const bo={};k&2&&(bo.$$scope={dirty:k,ctx:o}),Ws.$set(bo);const ko={};k&2&&(ko.$$scope={dirty:k,ctx:o}),Rs.$set(ko);const Qg={};k&2&&(Qg.$$scope={dirty:k,ctx:o}),Vs.$set(Qg);const Kg={};k&2&&(Kg.$$scope={dirty:k,ctx:o}),Qs.$set(Kg);const Jg={};k&2&&(Jg.$$scope={dirty:k,ctx:o}),Js.$set(Jg);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Gs.$set(Zn);const Gg={};k&2&&(Gg.$$scope={dirty:k,ctx:o}),Xs.$set(Gg);const Xg={};k&2&&(Xg.$$scope={dirty:k,ctx:o}),Zs.$set(Xg);const Oc={};k&2&&(Oc.$$scope={dirty:k,ctx:o}),tr.$set(Oc);const Yg={};k&2&&(Yg.$$scope={dirty:k,ctx:o}),or.$set(Yg);const Zg={};k&2&&(Zg.$$scope={dirty:k,ctx:o}),nr.$set(Zg);const e_={};k&2&&(e_.$$scope={dirty:k,ctx:o}),sr.$set(e_);const ot={};k&2&&(ot.$$scope={dirty:k,ctx:o}),ar.$set(ot);const t_={};k&2&&(t_.$$scope={dirty:k,ctx:o}),ir.$set(t_);const Ac={};k&2&&(Ac.$$scope={dirty:k,ctx:o}),lr.$set(Ac);const o_={};k&2&&(o_.$$scope={dirty:k,ctx:o}),cr.$set(o_);const es={};k&2&&(es.$$scope={dirty:k,ctx:o}),pr.$set(es);const n_={};k&2&&(n_.$$scope={dirty:k,ctx:o}),hr.$set(n_);const Ic={};k&2&&(Ic.$$scope={dirty:k,ctx:o}),mr.$set(Ic);const Qp={};k&2&&(Qp.$$scope={dirty:k,ctx:o}),ur.$set(Qp);const s_={};k&2&&(s_.$$scope={dirty:k,ctx:o}),gr.$set(s_);const Kp={};k&2&&(Kp.$$scope={dirty:k,ctx:o}),_r.$set(Kp);const r_={};k&2&&(r_.$$scope={dirty:k,ctx:o}),kr.$set(r_);const Lc={};k&2&&(Lc.$$scope={dirty:k,ctx:o}),yr.$set(Lc);const Dc={};k&2&&(Dc.$$scope={dirty:k,ctx:o}),Tr.$set(Dc);const a_={};k&2&&(a_.$$scope={dirty:k,ctx:o}),vr.$set(a_);const yo={};k&2&&(yo.$$scope={dirty:k,ctx:o}),$r.$set(yo);const i_={};k&2&&(i_.$$scope={dirty:k,ctx:o}),Fr.$set(i_);const ts={};k&2&&(ts.$$scope={dirty:k,ctx:o}),xr.$set(ts);const l_={};k&2&&(l_.$$scope={dirty:k,ctx:o}),Br.$set(l_);const d_={};k&2&&(d_.$$scope={dirty:k,ctx:o}),Er.$set(d_);const c_={};k&2&&(c_.$$scope={dirty:k,ctx:o}),zr.$set(c_);const Sc={};k&2&&(Sc.$$scope={dirty:k,ctx:o}),qr.$set(Sc);const p_={};k&2&&(p_.$$scope={dirty:k,ctx:o}),jr.$set(p_);const h_={};k&2&&(h_.$$scope={dirty:k,ctx:o}),Nr.$set(h_);const m_={};k&2&&(m_.$$scope={dirty:k,ctx:o}),Or.$set(m_);const jt={};k&2&&(jt.$$scope={dirty:k,ctx:o}),Ir.$set(jt);const Uc={};k&2&&(Uc.$$scope={dirty:k,ctx:o}),Lr.$set(Uc);const f_={};k&2&&(f_.$$scope={dirty:k,ctx:o}),Sr.$set(f_);const Wc={};k&2&&(Wc.$$scope={dirty:k,ctx:o}),Ur.$set(Wc);const u_={};k&2&&(u_.$$scope={dirty:k,ctx:o}),Hr.$set(u_);const os={};k&2&&(os.$$scope={dirty:k,ctx:o}),Rr.$set(os);const g_={};k&2&&(g_.$$scope={dirty:k,ctx:o}),Qr.$set(g_);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:o}),Kr.$set(Hc);const Jp={};k&2&&(Jp.$$scope={dirty:k,ctx:o}),Gr.$set(Jp);const __={};k&2&&(__.$$scope={dirty:k,ctx:o}),Xr.$set(__)},i(o){Fb||($(l.$$.fragment,o),$(oe.$$.fragment,o),$(Ee.$$.fragment,o),$($a.$$.fragment,o),$(ns.$$.fragment,o),$(xa.$$.fragment,o),$(Ba.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(ja.$$.fragment,o),$(as.$$.fragment,o),$(Ca.$$.fragment,o),$(Na.$$.fragment,o),$(Oa.$$.fragment,o),$(La.$$.fragment,o),$(Sa.$$.fragment,o),$(ls.$$.fragment,o),$(Ua.$$.fragment,o),$(Wa.$$.fragment,o),$(Ra.$$.fragment,o),$(Qa.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(ni.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(si.$$.fragment,o),$(ri.$$.fragment,o),$(di.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(gi.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(Ts.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$($i.$$.fragment,o),$(Fi.$$.fragment,o),$(zi.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(zs.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ai.$$.fragment,o),$(Ii.$$.fragment,o),$(Ui.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Wi.$$.fragment,o),$(Hi.$$.fragment,o),$(Ki.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ls.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(el.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(tl.$$.fragment,o),$(ol.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(Vs.$$.fragment,o),$(Qs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(ml.$$.fragment,o),$(fl.$$.fragment,o),$(ul.$$.fragment,o),$(Zs.$$.fragment,o),$(kl.$$.fragment,o),$(yl.$$.fragment,o),$(tr.$$.fragment,o),$(Fl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(xl.$$.fragment,o),$(Bl.$$.fragment,o),$(ar.$$.fragment,o),$(ql.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(Cl.$$.fragment,o),$(cr.$$.fragment,o),$(Il.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(Ll.$$.fragment,o),$(Dl.$$.fragment,o),$(ur.$$.fragment,o),$(Hl.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(Rl.$$.fragment,o),$(Vl.$$.fragment,o),$(kr.$$.fragment,o),$(Gl.$$.fragment,o),$(yr.$$.fragment,o),$(Tr.$$.fragment,o),$(vr.$$.fragment,o),$(Xl.$$.fragment,o),$(Yl.$$.fragment,o),$($r.$$.fragment,o),$(od.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$(Br.$$.fragment,o),$(nd.$$.fragment,o),$(sd.$$.fragment,o),$(hd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(md.$$.fragment,o),$(fd.$$.fragment,o),$(vd.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(wd.$$.fragment,o),$($d.$$.fragment,o),$(jd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Hd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Rd.$$.fragment,o),$(Vd.$$.fragment,o),$(ec.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(cc.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(pc.$$.fragment,o),$(hc.$$.fragment,o),$(yc.$$.fragment,o),$(Qr.$$.fragment,o),$(Kr.$$.fragment,o),$(Tc.$$.fragment,o),$(vc.$$.fragment,o),$(zc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),Fb=!0)},o(o){F(l.$$.fragment,o),F(oe.$$.fragment,o),F(Ee.$$.fragment,o),F($a.$$.fragment,o),F(ns.$$.fragment,o),F(xa.$$.fragment,o),F(Ba.$$.fragment,o),F(Ea.$$.fragment,o),F(Pa.$$.fragment,o),F(ja.$$.fragment,o),F(as.$$.fragment,o),F(Ca.$$.fragment,o),F(Na.$$.fragment,o),F(Oa.$$.fragment,o),F(La.$$.fragment,o),F(Sa.$$.fragment,o),F(ls.$$.fragment,o),F(Ua.$$.fragment,o),F(Wa.$$.fragment,o),F(Ra.$$.fragment,o),F(Qa.$$.fragment,o),F(Ja.$$.fragment,o),F(Ga.$$.fragment,o),F(Xa.$$.fragment,o),F(ni.$$.fragment,o),F(hs.$$.fragment,o),F(ms.$$.fragment,o),F(si.$$.fragment,o),F(ri.$$.fragment,o),F(di.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(ci.$$.fragment,o),F(pi.$$.fragment,o),F(gi.$$.fragment,o),F(bs.$$.fragment,o),F(ks.$$.fragment,o),F(_i.$$.fragment,o),F(bi.$$.fragment,o),F(wi.$$.fragment,o),F(Ts.$$.fragment,o),F(vs.$$.fragment,o),F(ws.$$.fragment,o),F($i.$$.fragment,o),F(Fi.$$.fragment,o),F(zi.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(Pi.$$.fragment,o),F(qi.$$.fragment,o),F(Oi.$$.fragment,o),F(Ms.$$.fragment,o),F(Es.$$.fragment,o),F(zs.$$.fragment,o),F(Ps.$$.fragment,o),F(qs.$$.fragment,o),F(Ai.$$.fragment,o),F(Ii.$$.fragment,o),F(Ui.$$.fragment,o),F(Cs.$$.fragment,o),F(Ns.$$.fragment,o),F(Wi.$$.fragment,o),F(Hi.$$.fragment,o),F(Ki.$$.fragment,o),F(As.$$.fragment,o),F(Is.$$.fragment,o),F(Ls.$$.fragment,o),F(Ji.$$.fragment,o),F(Gi.$$.fragment,o),F(el.$$.fragment,o),F(Ss.$$.fragment,o),F(Us.$$.fragment,o),F(Ws.$$.fragment,o),F(tl.$$.fragment,o),F(ol.$$.fragment,o),F(Rs.$$.fragment,o),F(al.$$.fragment,o),F(Vs.$$.fragment,o),F(Qs.$$.fragment,o),F(il.$$.fragment,o),F(ll.$$.fragment,o),F(Js.$$.fragment,o),F(hl.$$.fragment,o),F(Gs.$$.fragment,o),F(Xs.$$.fragment,o),F(ml.$$.fragment,o),F(fl.$$.fragment,o),F(ul.$$.fragment,o),F(Zs.$$.fragment,o),F(kl.$$.fragment,o),F(yl.$$.fragment,o),F(tr.$$.fragment,o),F(Fl.$$.fragment,o),F(or.$$.fragment,o),F(nr.$$.fragment,o),F(sr.$$.fragment,o),F(xl.$$.fragment,o),F(Bl.$$.fragment,o),F(ar.$$.fragment,o),F(ql.$$.fragment,o),F(ir.$$.fragment,o),F(lr.$$.fragment,o),F(jl.$$.fragment,o),F(Cl.$$.fragment,o),F(cr.$$.fragment,o),F(Il.$$.fragment,o),F(pr.$$.fragment,o),F(hr.$$.fragment,o),F(mr.$$.fragment,o),F(Ll.$$.fragment,o),F(Dl.$$.fragment,o),F(ur.$$.fragment,o),F(Hl.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(Rl.$$.fragment,o),F(Vl.$$.fragment,o),F(kr.$$.fragment,o),F(Gl.$$.fragment,o),F(yr.$$.fragment,o),F(Tr.$$.fragment,o),F(vr.$$.fragment,o),F(Xl.$$.fragment,o),F(Yl.$$.fragment,o),F($r.$$.fragment,o),F(od.$$.fragment,o),F(Fr.$$.fragment,o),F(xr.$$.fragment,o),F(Br.$$.fragment,o),F(nd.$$.fragment,o),F(sd.$$.fragment,o),F(hd.$$.fragment,o),F(Er.$$.fragment,o),F(zr.$$.fragment,o),F(md.$$.fragment,o),F(fd.$$.fragment,o),F(vd.$$.fragment,o),F(qr.$$.fragment,o),F(jr.$$.fragment,o),F(wd.$$.fragment,o),F($d.$$.fragment,o),F(jd.$$.fragment,o),F(Nr.$$.fragment,o),F(Or.$$.fragment,o),F(Cd.$$.fragment,o),F(Nd.$$.fragment,o),F(Hd.$$.fragment,o),F(Ir.$$.fragment,o),F(Lr.$$.fragment,o),F(Rd.$$.fragment,o),F(Vd.$$.fragment,o),F(ec.$$.fragment,o),F(Sr.$$.fragment,o),F(Ur.$$.fragment,o),F(tc.$$.fragment,o),F(oc.$$.fragment,o),F(cc.$$.fragment,o),F(Hr.$$.fragment,o),F(Rr.$$.fragment,o),F(pc.$$.fragment,o),F(hc.$$.fragment,o),F(yc.$$.fragment,o),F(Qr.$$.fragment,o),F(Kr.$$.fragment,o),F(Tc.$$.fragment,o),F(vc.$$.fragment,o),F(zc.$$.fragment,o),F(Gr.$$.fragment,o),F(Xr.$$.fragment,o),Fb=!1},d(o){t(d),o&&t(_),o&&t(h),x(l),o&&t(X),o&&t(z),x(oe),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t(we),x(Ee),o&&t(b_),o&&t(qt),x($a),x(ns),o&&t(k_),o&&t(Do),x(xa),o&&t(y_),o&&t(Ne),x(Ba),x(Ea),x(Pa),x(ja),x(as),x(Ca),o&&t(T_),o&&t(Uo),x(Na),o&&t(v_),o&&t(st),x(Oa),x(La),x(Sa),x(ls),o&&t(w_),o&&t(Ho),x(Ua),o&&t($_),o&&t(Ro),x(Wa),o&&t(F_),o&&t(Vo),x(Ra),o&&t(x_),o&&t(lo),x(Qa),x(Ja),o&&t(B_),o&&t(Qo),x(Ga),o&&t(M_),o&&t(Oe),x(Xa),x(ni),x(hs),x(ms),o&&t(E_),o&&t(Jo),x(si),o&&t(z_),o&&t(rt),x(ri),x(di),x(us),x(gs),o&&t(P_),o&&t(Yo),x(ci),o&&t(q_),o&&t(at),x(pi),x(gi),x(bs),x(ks),o&&t(j_),o&&t(en),x(_i),o&&t(C_),o&&t(it),x(bi),x(wi),x(Ts),x(vs),x(ws),o&&t(N_),o&&t(on),x($i),o&&t(O_),o&&t(lt),x(Fi),x(zi),x(Fs),x(xs),o&&t(A_),o&&t(sn),x(Pi),o&&t(I_),o&&t(dt),x(qi),x(Oi),x(Ms),x(Es),x(zs),x(Ps),x(qs),o&&t(L_),o&&t(an),x(Ai),o&&t(D_),o&&t(ct),x(Ii),x(Ui),x(Cs),x(Ns),o&&t(S_),o&&t(dn),x(Wi),o&&t(U_),o&&t(pt),x(Hi),x(Ki),x(As),x(Is),x(Ls),o&&t(W_),o&&t(pn),x(Ji),o&&t(H_),o&&t(ht),x(Gi),x(el),x(Ss),x(Us),x(Ws),o&&t(R_),o&&t(fn),x(tl),o&&t(V_),o&&t(Ke),x(ol),x(Rs),x(al),x(Vs),x(Qs),o&&t(Q_),o&&t(gn),x(il),o&&t(K_),o&&t(Je),x(ll),x(Js),x(hl),x(Gs),x(Xs),o&&t(J_),o&&t(kn),x(ml),o&&t(G_),o&&t(yn),x(fl),x(ul),x(Zs),o&&t(X_),o&&t(Tn),x(kl),o&&t(Y_),o&&t(Ge),x(yl),x(tr),x(Fl),x(or),x(nr),x(sr),o&&t(Z_),o&&t(wn),x(xl),o&&t(eb),o&&t(Xe),x(Bl),x(ar),x(ql),x(ir),x(lr),o&&t(tb),o&&t(Fn),x(jl),o&&t(ob),o&&t(Ye),x(Cl),x(cr),x(Il),x(pr),x(hr),x(mr),o&&t(nb),o&&t(Bn),x(Ll),o&&t(sb),o&&t(Ze),x(Dl),x(ur),x(Hl),x(gr),x(_r),o&&t(rb),o&&t(En),x(Rl),o&&t(ab),o&&t(et),x(Vl),x(kr),x(Gl),x(yr),x(Tr),x(vr),o&&t(ib),o&&t(Pn),x(Xl),o&&t(lb),o&&t(tt),x(Yl),x($r),x(od),x(Fr),x(xr),x(Br),o&&t(db),o&&t(Cn),x(nd),o&&t(cb),o&&t(Ie),x(sd),x(hd),x(Er),x(zr),o&&t(pb),o&&t(On),x(md),o&&t(hb),o&&t(Le),x(fd),x(vd),x(qr),x(jr),o&&t(mb),o&&t(Ln),x(wd),o&&t(fb),o&&t(De),x($d),x(jd),x(Nr),x(Or),o&&t(ub),o&&t(Sn),x(Cd),o&&t(gb),o&&t(Se),x(Nd),x(Hd),x(Ir),x(Lr),o&&t(_b),o&&t(Wn),x(Rd),o&&t(bb),o&&t(Ue),x(Vd),x(ec),x(Sr),x(Ur),o&&t(kb),o&&t(Rn),x(tc),o&&t(yb),o&&t(We),x(oc),x(cc),x(Hr),x(Rr),o&&t(Tb),o&&t(Qn),x(pc),o&&t(vb),o&&t(He),x(hc),x(yc),x(Qr),x(Kr),o&&t(wb),o&&t(Jn),x(Tc),o&&t($b),o&&t(Re),x(vc),x(zc),x(Gr),x(Xr)}}}const TN={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function vN(B){return t9(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class EN extends X3{constructor(d){super();Y3(this,d,vN,yN,Z3,{})}}export{EN as default,TN as metadata};
