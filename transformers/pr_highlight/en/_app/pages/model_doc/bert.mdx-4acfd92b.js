import{S as X6,i as Y6,s as Z6,e as r,k as c,w as y,t as n,M as eN,c as a,d as t,m as p,a as i,x as v,h as s,b as u,F as e,g as _,y as w,q as $,o as F,B as x,v as tN,L as re}from"../../chunks/vendor-6b77c823.js";import{T as $e}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function oN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function nN(B){let d,g;return d=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function sN(B){let d,g;return d=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function rN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function aN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function iN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function lN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function dN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function cN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertLMHeadModel, BertConfig
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
config = BertConfig.from_pretrained("bert-base-cased")
config.is_decoder = True
model = BertLMHeadModel.from_pretrained("bert-base-cased", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertLMHeadModel, BertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BertConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function pN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function hN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function fN(B){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function mN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function uN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function gN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function _N(B){let d,g,h,f,b;return f=new ae({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function bN(B){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function kN(B){let d,g,h,f,b;return f=new ae({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForSequenceClassification.from_pretrained("bert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function TN(B){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function yN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function vN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function wN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function $N(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForTokenClassification.from_pretrained("bert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function FN(B){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function xN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function BN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForQuestionAnswering.from_pretrained("bert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function MN(B){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function EN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function zN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function PN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertModel.from_pretrained("bert-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function qN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function jN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function CN(B){let d,g,h,f,b;return f=new ae({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForPreTraining.from_pretrained("bert-base-uncased")
input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True))[
    None, :
]  # Batch size 1
outputs = model(input_ids)
prediction_scores, seq_relationship_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),g=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function NN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertLMHeadModel.from_pretrained("bert-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function ON(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function AN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function IN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForMaskedLM.from_pretrained("bert-base-cased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function LN(B){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function DN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function SN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function UN(B){let d,g,h,f,b;return f=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),g=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function WN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function HN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function RN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForSequenceClassification.from_pretrained("bert-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function QN(B){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFBertForSequenceClassification.from_pretrained("bert-base-cased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function VN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function KN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function JN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForMultipleChoice.from_pretrained("bert-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function GN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function XN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function YN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForTokenClassification.from_pretrained("bert-base-cased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function ZN(B){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function e8(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function t8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function o8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
model = TFBertForQuestionAnswering.from_pretrained("bert-base-cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function n8(B){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function s8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function r8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function a8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function i8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function l8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function d8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function c8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function p8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function h8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function f8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function m8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function u8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function g8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function _8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function b8(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function k8(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function T8(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe,T,E,K,ze,Be,A,Pe,Me,qe,I,W,we,Fe,U,Ee,je,he,Ce,b_,qt,$a,fT,io,mT,Rc,uT,gT,Qc,_T,bT,Fa,kT,TT,yT,Lo,vT,Vc,wT,$T,Kc,FT,xT,BT,ns,k_,Do,ss,Eh,xa,MT,zh,ET,T_,Ne,Ba,zT,Ph,PT,qT,Ma,jT,Jc,CT,NT,OT,yo,Ea,AT,qh,IT,LT,za,Gc,DT,jh,ST,UT,Xc,WT,Ch,HT,RT,rs,Pa,QT,qa,VT,Nh,KT,JT,GT,Ct,ja,XT,Oh,YT,ZT,as,ey,So,ty,Ah,oy,ny,Ih,sy,ry,ay,Yc,Ca,y_,Uo,is,Lh,Na,iy,Dh,ly,v_,st,Oa,dy,Aa,cy,Sh,py,hy,fy,Ia,my,Zc,uy,gy,_y,vo,La,by,Uh,ky,Ty,Da,ep,yy,Wh,vy,wy,tp,$y,Hh,Fy,xy,Nt,Sa,By,Rh,My,Ey,ls,zy,Wo,Py,Qh,qy,jy,Vh,Cy,Ny,w_,Ho,ds,Kh,Ua,Oy,Jh,Ay,$_,Ro,Wa,Iy,Ha,Ly,op,Dy,Sy,F_,Qo,Ra,Uy,Qa,Wy,np,Hy,Ry,x_,lo,Va,Qy,Ka,Vy,sp,Ky,Jy,Gy,cs,Ja,Xy,Gh,Yy,B_,Vo,ps,Xh,Ga,Zy,Yh,ev,M_,Oe,Xa,tv,Zh,ov,nv,Ya,sv,rp,rv,av,iv,Za,lv,ei,dv,cv,pv,ti,hv,oi,fv,mv,uv,Ve,gv,ef,_v,bv,tf,kv,Tv,of,yv,vv,nf,wv,$v,sf,Fv,xv,rf,Bv,Mv,Ev,Ot,ni,zv,Ko,Pv,ap,qv,jv,af,Cv,Nv,Ov,hs,Av,fs,E_,Jo,ms,lf,si,Iv,df,Lv,z_,rt,ri,Dv,Go,Sv,cf,Uv,Wv,pf,Hv,Rv,Qv,ai,Vv,ip,Kv,Jv,Gv,ii,Xv,li,Yv,Zv,ew,At,di,tw,Xo,ow,lp,nw,sw,hf,rw,aw,iw,us,lw,gs,P_,Yo,_s,ff,ci,dw,mf,cw,q_,at,pi,pw,hi,hw,uf,fw,mw,uw,fi,gw,dp,_w,bw,kw,mi,Tw,ui,yw,vw,ww,It,gi,$w,Zo,Fw,cp,xw,Bw,gf,Mw,Ew,zw,bs,Pw,ks,j_,en,Ts,_f,_i,qw,bf,jw,C_,it,bi,Cw,ki,Nw,kf,Ow,Aw,Iw,Ti,Lw,pp,Dw,Sw,Uw,yi,Ww,vi,Hw,Rw,Qw,ft,wi,Vw,tn,Kw,hp,Jw,Gw,Tf,Xw,Yw,Zw,ys,e1,vs,t1,ws,N_,on,$s,yf,$i,o1,vf,n1,O_,lt,Fi,s1,xi,r1,wf,a1,i1,l1,Bi,d1,fp,c1,p1,h1,Mi,f1,Ei,m1,u1,g1,Lt,zi,_1,nn,b1,mp,k1,T1,$f,y1,v1,w1,Fs,$1,xs,A_,sn,Bs,Ff,Pi,F1,xf,x1,I_,dt,qi,B1,Bf,M1,E1,ji,z1,up,P1,q1,j1,Ci,C1,Ni,N1,O1,A1,Qe,Oi,I1,rn,L1,gp,D1,S1,Mf,U1,W1,H1,Ms,R1,Es,Q1,zs,V1,Ps,K1,qs,L_,an,js,Ef,Ai,J1,zf,G1,D_,ct,Ii,X1,Pf,Y1,Z1,Li,e$,_p,t$,o$,n$,Di,s$,Si,r$,a$,i$,Dt,Ui,l$,ln,d$,bp,c$,p$,qf,h$,f$,m$,Cs,u$,Ns,S_,dn,Os,jf,Wi,g$,Cf,_$,U_,pt,Hi,b$,Nf,k$,T$,Ri,y$,kp,v$,w$,$$,Qi,F$,Vi,x$,B$,M$,mt,Ki,E$,cn,z$,Tp,P$,q$,Of,j$,C$,N$,As,O$,Is,A$,Ls,W_,pn,Ds,Af,Ji,I$,If,L$,H_,ht,Gi,D$,hn,S$,Lf,U$,W$,Df,H$,R$,Q$,Xi,V$,yp,K$,J$,G$,Yi,X$,Zi,Y$,Z$,eF,ut,el,tF,fn,oF,vp,nF,sF,Sf,rF,aF,iF,Ss,lF,Us,dF,Ws,R_,mn,Hs,Uf,tl,cF,Wf,pF,Q_,Ke,ol,hF,Hf,fF,mF,nl,uF,wp,gF,_F,bF,sl,kF,rl,TF,yF,vF,Rs,wF,St,al,$F,un,FF,$p,xF,BF,Rf,MF,EF,zF,Qs,PF,Vs,V_,gn,Ks,Qf,il,qF,Vf,jF,K_,Je,ll,CF,_n,NF,Kf,OF,AF,Jf,IF,LF,DF,dl,SF,Fp,UF,WF,HF,cl,RF,pl,QF,VF,KF,Js,JF,Ut,hl,GF,bn,XF,xp,YF,ZF,Gf,e2,t2,o2,Gs,n2,Xs,J_,kn,Ys,Xf,fl,s2,Yf,r2,G_,Tn,ml,a2,gt,ul,i2,Ae,l2,Zf,d2,c2,em,p2,h2,tm,f2,m2,om,u2,g2,nm,_2,b2,sm,k2,T2,rm,y2,v2,w2,gl,_l,$2,am,F2,x2,B2,bl,M2,im,E2,z2,P2,G,q2,lm,j2,C2,dm,N2,O2,cm,A2,I2,pm,L2,D2,hm,S2,U2,fm,W2,H2,mm,R2,Q2,um,V2,K2,gm,J2,G2,_m,X2,Y2,bm,Z2,ex,km,tx,ox,Tm,nx,sx,ym,rx,ax,vm,ix,lx,wm,dx,cx,$m,px,hx,Fm,fx,mx,xm,ux,gx,Bm,_x,bx,kx,Zs,X_,yn,er,Mm,kl,Tx,Em,yx,Y_,Ge,Tl,vx,yl,wx,zm,$x,Fx,xx,vl,Bx,Bp,Mx,Ex,zx,wl,Px,$l,qx,jx,Cx,tr,Nx,_t,Fl,Ox,vn,Ax,Mp,Ix,Lx,Pm,Dx,Sx,Ux,or,Wx,nr,Hx,sr,Z_,wn,rr,qm,xl,Rx,jm,Qx,eb,Xe,Bl,Vx,Ml,Kx,Cm,Jx,Gx,Xx,El,Yx,Ep,Zx,e0,t0,zl,o0,Pl,n0,s0,r0,ar,a0,Wt,ql,i0,$n,l0,zp,d0,c0,Nm,p0,h0,f0,ir,m0,lr,tb,Fn,dr,Om,jl,u0,Am,g0,ob,Ye,Cl,_0,Im,b0,k0,Nl,T0,Pp,y0,v0,w0,Ol,$0,Al,F0,x0,B0,cr,M0,bt,Il,E0,xn,z0,qp,P0,q0,Lm,j0,C0,N0,pr,O0,hr,A0,fr,nb,Bn,mr,Dm,Ll,I0,Sm,L0,sb,Ze,Dl,D0,Um,S0,U0,Sl,W0,jp,H0,R0,Q0,Ul,V0,Wl,K0,J0,G0,ur,X0,Ht,Hl,Y0,Mn,Z0,Cp,eB,tB,Wm,oB,nB,sB,gr,rB,_r,rb,En,br,Hm,Rl,aB,Rm,iB,ab,et,Ql,lB,Qm,dB,cB,Vl,pB,Np,hB,fB,mB,Kl,uB,Jl,gB,_B,bB,kr,kB,kt,Gl,TB,zn,yB,Op,vB,wB,Vm,$B,FB,xB,Tr,BB,yr,MB,vr,ib,Pn,wr,Km,Xl,EB,Jm,zB,lb,tt,Yl,PB,qn,qB,Gm,jB,CB,Xm,NB,OB,AB,Zl,IB,Ap,LB,DB,SB,ed,UB,td,WB,HB,RB,$r,QB,Tt,od,VB,jn,KB,Ip,JB,GB,Ym,XB,YB,ZB,Fr,eM,xr,tM,Br,db,Cn,Mr,Zm,nd,oM,eu,nM,cb,Ie,sd,sM,tu,rM,aM,rd,iM,Lp,lM,dM,cM,ad,pM,id,hM,fM,mM,ou,uM,gM,co,nu,ld,_M,bM,su,dd,kM,TM,ru,cd,yM,vM,au,pd,wM,$M,Rt,hd,FM,Nn,xM,iu,BM,MM,lu,EM,zM,PM,Er,qM,zr,pb,On,Pr,du,fd,jM,cu,CM,hb,Le,md,NM,An,OM,pu,AM,IM,hu,LM,DM,SM,ud,UM,Dp,WM,HM,RM,gd,QM,_d,VM,KM,JM,fu,GM,XM,po,mu,bd,YM,ZM,uu,kd,eE,tE,gu,Td,oE,nE,_u,yd,sE,rE,Qt,vd,aE,In,iE,bu,lE,dE,ku,cE,pE,hE,qr,fE,jr,fb,Ln,Cr,Tu,wd,mE,yu,uE,mb,De,$d,gE,Fd,_E,vu,bE,kE,TE,xd,yE,Sp,vE,wE,$E,Bd,FE,Md,xE,BE,ME,wu,EE,zE,ho,$u,Ed,PE,qE,Fu,zd,jE,CE,xu,Pd,NE,OE,Bu,qd,AE,IE,Vt,jd,LE,Dn,DE,Mu,SE,UE,Eu,WE,HE,RE,Nr,QE,Or,ub,Sn,Ar,zu,Cd,VE,Pu,KE,gb,Se,Nd,JE,Od,GE,qu,XE,YE,ZE,Ad,ez,Up,tz,oz,nz,Id,sz,Ld,rz,az,iz,ju,lz,dz,fo,Cu,Dd,cz,pz,Nu,Sd,hz,fz,Ou,Ud,mz,uz,Au,Wd,gz,_z,Kt,Hd,bz,Un,kz,Iu,Tz,yz,Lu,vz,wz,$z,Ir,Fz,Lr,_b,Wn,Dr,Du,Rd,xz,Su,Bz,bb,Ue,Qd,Mz,Uu,Ez,zz,Vd,Pz,Wp,qz,jz,Cz,Kd,Nz,Jd,Oz,Az,Iz,Wu,Lz,Dz,mo,Hu,Gd,Sz,Uz,Ru,Xd,Wz,Hz,Qu,Yd,Rz,Qz,Vu,Zd,Vz,Kz,Jt,ec,Jz,Hn,Gz,Ku,Xz,Yz,Ju,Zz,e4,t4,Sr,o4,Ur,kb,Rn,Wr,Gu,tc,n4,Xu,s4,Tb,We,oc,r4,Yu,a4,i4,nc,l4,Hp,d4,c4,p4,sc,h4,rc,f4,m4,u4,Zu,g4,_4,uo,eg,ac,b4,k4,tg,ic,T4,y4,og,lc,v4,w4,ng,dc,$4,F4,Gt,cc,x4,Qn,B4,sg,M4,E4,rg,z4,P4,q4,Hr,j4,Rr,yb,Vn,Qr,ag,pc,C4,ig,N4,vb,He,hc,O4,lg,A4,I4,fc,L4,Rp,D4,S4,U4,mc,W4,uc,H4,R4,Q4,dg,V4,K4,go,cg,gc,J4,G4,pg,_c,X4,Y4,hg,bc,Z4,eP,fg,kc,tP,oP,Xt,Tc,nP,Kn,sP,mg,rP,aP,ug,iP,lP,dP,Vr,cP,Kr,wb,Jn,Jr,gg,yc,pP,_g,hP,$b,Re,vc,fP,Gn,mP,bg,uP,gP,kg,_P,bP,kP,wc,TP,Qp,yP,vP,wP,$c,$P,Fc,FP,xP,BP,Tg,MP,EP,_o,yg,xc,zP,PP,vg,Bc,qP,jP,wg,Mc,CP,NP,$g,Ec,OP,AP,Yt,zc,IP,Xn,LP,Fg,DP,SP,xg,UP,WP,HP,Gr,RP,Xr,Fb;return l=new xe({}),oe=new xe({}),Ee=new xe({}),$a=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/configuration_bert.py#L54"}}),ns=new se({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),xa=new xe({}),Ba=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert.py#L117"}}),Ea=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new se({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[nN]},$$scope:{ctx:B}}}),Ca=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert.py#L330"}}),Na=new xe({}),Oa=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert_fast.py#L117"}}),La=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert_fast.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sa=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/tokenization_bert_fast.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new se({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[sN]},$$scope:{ctx:B}}}),Ua=new xe({}),Wa=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L745"}}),Ra=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L913"}}),Va=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L57"}}),Ja=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/flax/struct.py#L120"}}),Ga=new xe({}),Xa=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L848"}}),ni=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L887",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new $e({props:{$$slots:{default:[rN]},$$scope:{ctx:B}}}),fs=new se({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[aN]},$$scope:{ctx:B}}}),si=new xe({}),ri=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1031"}}),di=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1047",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new $e({props:{$$slots:{default:[iN]},$$scope:{ctx:B}}}),gs=new se({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[lN]},$$scope:{ctx:B}}}),ci=new xe({}),pi=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1135"}}),gi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>encoder_hidden_states  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.
encoder_attention_mask (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be
in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code>
are ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>
past_key_values (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>):
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up
decoding.</li>
</ul>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.
use_cache (<code>bool</code>, <em>optional</em>):
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1158",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
`}}),bs=new $e({props:{$$slots:{default:[dN]},$$scope:{ctx:B}}}),ks=new se({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[cN]},$$scope:{ctx:B}}}),_i=new xe({}),bi=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1286"}}),wi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
`}}),ys=new $e({props:{$$slots:{default:[pN]},$$scope:{ctx:B}}}),vs=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[hN]},$$scope:{ctx:B}}}),ws=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[fN]},$$scope:{ctx:B}}}),$i=new xe({}),Fi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1397"}}),zi=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1407",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fs=new $e({props:{$$slots:{default:[mN]},$$scope:{ctx:B}}}),xs=new se({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[uN]},$$scope:{ctx:B}}}),Pi=new xe({}),qi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1501"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1517",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
`}}),Ms=new $e({props:{$$slots:{default:[gN]},$$scope:{ctx:B}}}),Es=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[_N]},$$scope:{ctx:B}}}),zs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[bN]},$$scope:{ctx:B}}}),Ps=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[kN]},$$scope:{ctx:B}}}),qs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[TN]},$$scope:{ctx:B}}}),Ai=new xe({}),Ii=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1603"}}),Ui=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1617",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
`}}),Cs=new $e({props:{$$slots:{default:[yN]},$$scope:{ctx:B}}}),Ns=new se({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[vN]},$$scope:{ctx:B}}}),Wi=new xe({}),Hi=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1698"}}),Ki=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1716",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
`}}),As=new $e({props:{$$slots:{default:[wN]},$$scope:{ctx:B}}}),Is=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[$N]},$$scope:{ctx:B}}}),Ls=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[FN]},$$scope:{ctx:B}}}),Ji=new xe({}),Gi=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1783"}}),el=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_bert.py#L1797",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
`}}),Ss=new $e({props:{$$slots:{default:[xN]},$$scope:{ctx:B}}}),Us=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[BN]},$$scope:{ctx:B}}}),Ws=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[MN]},$$scope:{ctx:B}}}),tl=new xe({}),ol=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1040"}}),Rs=new $e({props:{$$slots:{default:[EN]},$$scope:{ctx:B}}}),al=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1046",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qs=new $e({props:{$$slots:{default:[zN]},$$scope:{ctx:B}}}),Vs=new se({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[PN]},$$scope:{ctx:B}}}),il=new xe({}),ll=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1138"}}),Js=new $e({props:{$$slots:{default:[qN]},$$scope:{ctx:B}}}),hl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1160",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gs=new $e({props:{$$slots:{default:[jN]},$$scope:{ctx:B}}}),Xs=new se({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[CN]},$$scope:{ctx:B}}}),fl=new xe({}),ml=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1347"}}),ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1384",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zs=new se({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[NN]},$$scope:{ctx:B}}}),kl=new xe({}),Tl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1256"}}),tr=new $e({props:{$$slots:{default:[ON]},$$scope:{ctx:B}}}),Fl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new $e({props:{$$slots:{default:[AN]},$$scope:{ctx:B}}}),nr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[IN]},$$scope:{ctx:B}}}),sr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[LN]},$$scope:{ctx:B}}}),xl=new xe({}),Bl=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1497"}}),ar=new $e({props:{$$slots:{default:[DN]},$$scope:{ctx:B}}}),ql=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1507",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new $e({props:{$$slots:{default:[SN]},$$scope:{ctx:B}}}),lr=new se({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[UN]},$$scope:{ctx:B}}}),jl=new xe({}),Cl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1589"}}),cr=new $e({props:{$$slots:{default:[WN]},$$scope:{ctx:B}}}),Il=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1610",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new $e({props:{$$slots:{default:[HN]},$$scope:{ctx:B}}}),hr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[RN]},$$scope:{ctx:B}}}),fr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[QN]},$$scope:{ctx:B}}}),Ll=new xe({}),Dl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1681"}}),ur=new $e({props:{$$slots:{default:[VN]},$$scope:{ctx:B}}}),Hl=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1705",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new $e({props:{$$slots:{default:[KN]},$$scope:{ctx:B}}}),_r=new se({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[JN]},$$scope:{ctx:B}}}),Rl=new xe({}),Ql=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1812"}}),kr=new $e({props:{$$slots:{default:[GN]},$$scope:{ctx:B}}}),Gl=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1839",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tr=new $e({props:{$$slots:{default:[XN]},$$scope:{ctx:B}}}),yr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[YN]},$$scope:{ctx:B}}}),vr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[ZN]},$$scope:{ctx:B}}}),Xl=new xe({}),Yl=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1908"}}),$r=new $e({props:{$$slots:{default:[e8]},$$scope:{ctx:B}}}),od=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_tf_bert.py#L1930",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new $e({props:{$$slots:{default:[t8]},$$scope:{ctx:B}}}),xr=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[o8]},$$scope:{ctx:B}}}),Br=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[n8]},$$scope:{ctx:B}}}),nd=new xe({}),sd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L756"}}),hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new $e({props:{$$slots:{default:[s8]},$$scope:{ctx:B}}}),zr=new se({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[r8]},$$scope:{ctx:B}}}),fd=new xe({}),md=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L829"}}),vd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qr=new $e({props:{$$slots:{default:[a8]},$$scope:{ctx:B}}}),jr=new se({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[i8]},$$scope:{ctx:B}}}),wd=new xe({}),$d=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L914"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new $e({props:{$$slots:{default:[l8]},$$scope:{ctx:B}}}),Or=new se({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[d8]},$$scope:{ctx:B}}}),Cd=new xe({}),Nd=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L975"}}),Hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new $e({props:{$$slots:{default:[c8]},$$scope:{ctx:B}}}),Lr=new se({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[p8]},$$scope:{ctx:B}}}),Rd=new xe({}),Qd=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L1073"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $e({props:{$$slots:{default:[h8]},$$scope:{ctx:B}}}),Ur=new se({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[f8]},$$scope:{ctx:B}}}),tc=new xe({}),oc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L1149"}}),cc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new $e({props:{$$slots:{default:[m8]},$$scope:{ctx:B}}}),Rr=new se({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[u8]},$$scope:{ctx:B}}}),pc=new xe({}),hc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L1221"}}),Tc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vr=new $e({props:{$$slots:{default:[g8]},$$scope:{ctx:B}}}),Kr=new se({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[_8]},$$scope:{ctx:B}}}),yc=new xe({}),vc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L1288"}}),zc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new $e({props:{$$slots:{default:[b8]},$$scope:{ctx:B}}}),Xr=new se({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[k8]},$$scope:{ctx:B}}}),{c(){d=r("meta"),g=c(),h=r("h1"),f=r("a"),b=r("span"),y(l.$$.fragment),m=c(),M=r("span"),be=n("BERT"),X=c(),z=r("h2"),ee=r("a"),L=r("span"),y(oe.$$.fragment),ke=c(),D=r("span"),Te=n("Overview"),fe=c(),J=r("p"),O=n("The BERT model was proposed in "),ne=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),me=c(),le=r("p"),S=r("em"),ye=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),Q=n("Tips:"),_e=c(),te=r("ul"),N=r("li"),ve=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),V=c(),pe=r("li"),T=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),A=n("thomwolf"),Pe=n(". The original code can be found "),Me=r("a"),qe=n("here"),I=n("."),W=c(),we=r("h2"),Fe=r("a"),U=r("span"),y(Ee.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),b_=c(),qt=r("div"),y($a.$$.fragment),fT=c(),io=r("p"),mT=n("This is the configuration class to store the configuration of a "),Rc=r("a"),uT=n("BertModel"),gT=n(" or a "),Qc=r("a"),_T=n("TFBertModel"),bT=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Fa=r("a"),kT=n("bert-base-uncased"),TT=n(" architecture."),yT=c(),Lo=r("p"),vT=n("Configuration objects inherit from "),Vc=r("a"),wT=n("PretrainedConfig"),$T=n(` and can be used to control the model outputs. Read the
documentation from `),Kc=r("a"),FT=n("PretrainedConfig"),xT=n(" for more information."),BT=c(),y(ns.$$.fragment),k_=c(),Do=r("h2"),ss=r("a"),Eh=r("span"),y(xa.$$.fragment),MT=c(),zh=r("span"),ET=n("BertTokenizer"),T_=c(),Ne=r("div"),y(Ba.$$.fragment),zT=c(),Ph=r("p"),PT=n("Construct a BERT tokenizer. Based on WordPiece."),qT=c(),Ma=r("p"),jT=n("This tokenizer inherits from "),Jc=r("a"),CT=n("PreTrainedTokenizer"),NT=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),OT=c(),yo=r("div"),y(Ea.$$.fragment),AT=c(),qh=r("p"),IT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),LT=c(),za=r("ul"),Gc=r("li"),DT=n("single sequence: "),jh=r("code"),ST=n("[CLS] X [SEP]"),UT=c(),Xc=r("li"),WT=n("pair of sequences: "),Ch=r("code"),HT=n("[CLS] A [SEP] B [SEP]"),RT=c(),rs=r("div"),y(Pa.$$.fragment),QT=c(),qa=r("p"),VT=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=r("code"),KT=n("prepare_for_model"),JT=n(" method."),GT=c(),Ct=r("div"),y(ja.$$.fragment),XT=c(),Oh=r("p"),YT=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),ZT=c(),y(as.$$.fragment),ey=c(),So=r("p"),ty=n("If "),Ah=r("code"),oy=n("token_ids_1"),ny=n(" is "),Ih=r("code"),sy=n("None"),ry=n(", this method only returns the first portion of the mask (0s)."),ay=c(),Yc=r("div"),y(Ca.$$.fragment),y_=c(),Uo=r("h2"),is=r("a"),Lh=r("span"),y(Na.$$.fragment),iy=c(),Dh=r("span"),ly=n("BertTokenizerFast"),v_=c(),st=r("div"),y(Oa.$$.fragment),dy=c(),Aa=r("p"),cy=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=r("em"),py=n("tokenizers"),hy=n(" library). Based on WordPiece."),fy=c(),Ia=r("p"),my=n("This tokenizer inherits from "),Zc=r("a"),uy=n("PreTrainedTokenizerFast"),gy=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),_y=c(),vo=r("div"),y(La.$$.fragment),by=c(),Uh=r("p"),ky=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ty=c(),Da=r("ul"),ep=r("li"),yy=n("single sequence: "),Wh=r("code"),vy=n("[CLS] X [SEP]"),wy=c(),tp=r("li"),$y=n("pair of sequences: "),Hh=r("code"),Fy=n("[CLS] A [SEP] B [SEP]"),xy=c(),Nt=r("div"),y(Sa.$$.fragment),By=c(),Rh=r("p"),My=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Ey=c(),y(ls.$$.fragment),zy=c(),Wo=r("p"),Py=n("If "),Qh=r("code"),qy=n("token_ids_1"),jy=n(" is "),Vh=r("code"),Cy=n("None"),Ny=n(", this method only returns the first portion of the mask (0s)."),w_=c(),Ho=r("h2"),ds=r("a"),Kh=r("span"),y(Ua.$$.fragment),Oy=c(),Jh=r("span"),Ay=n("Bert specific outputs"),$_=c(),Ro=r("div"),y(Wa.$$.fragment),Iy=c(),Ha=r("p"),Ly=n("Output type of "),op=r("a"),Dy=n("BertForPreTraining"),Sy=n("."),F_=c(),Qo=r("div"),y(Ra.$$.fragment),Uy=c(),Qa=r("p"),Wy=n("Output type of "),np=r("a"),Hy=n("TFBertForPreTraining"),Ry=n("."),x_=c(),lo=r("div"),y(Va.$$.fragment),Qy=c(),Ka=r("p"),Vy=n("Output type of "),sp=r("a"),Ky=n("BertForPreTraining"),Jy=n("."),Gy=c(),cs=r("div"),y(Ja.$$.fragment),Xy=c(),Gh=r("p"),Yy=n("\u201CReturns a new object replacing the specified fields with new values."),B_=c(),Vo=r("h2"),ps=r("a"),Xh=r("span"),y(Ga.$$.fragment),Zy=c(),Yh=r("span"),ev=n("BertModel"),M_=c(),Oe=r("div"),y(Xa.$$.fragment),tv=c(),Zh=r("p"),ov=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),nv=c(),Ya=r("p"),sv=n("This model inherits from "),rp=r("a"),rv=n("PreTrainedModel"),av=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iv=c(),Za=r("p"),lv=n("This model is also a PyTorch "),ei=r("a"),dv=n("torch.nn.Module"),cv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pv=c(),ti=r("p"),hv=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=r("a"),fv=n(`Attention is
all you need`),mv=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),uv=c(),Ve=r("p"),gv=n("To behave as an decoder the model needs to be initialized with the "),ef=r("code"),_v=n("is_decoder"),bv=n(` argument of the configuration set
to `),tf=r("code"),kv=n("True"),Tv=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),of=r("code"),yv=n("is_decoder"),vv=n(` argument and
`),nf=r("code"),wv=n("add_cross_attention"),$v=n(" set to "),sf=r("code"),Fv=n("True"),xv=n("; an "),rf=r("code"),Bv=n("encoder_hidden_states"),Mv=n(" is then expected as an input to the forward pass."),Ev=c(),Ot=r("div"),y(ni.$$.fragment),zv=c(),Ko=r("p"),Pv=n("The "),ap=r("a"),qv=n("BertModel"),jv=n(" forward method, overrides the "),af=r("code"),Cv=n("__call__"),Nv=n(" special method."),Ov=c(),y(hs.$$.fragment),Av=c(),y(fs.$$.fragment),E_=c(),Jo=r("h2"),ms=r("a"),lf=r("span"),y(si.$$.fragment),Iv=c(),df=r("span"),Lv=n("BertForPreTraining"),z_=c(),rt=r("div"),y(ri.$$.fragment),Dv=c(),Go=r("p"),Sv=n("Bert Model with two heads on top as done during the pretraining: a "),cf=r("code"),Uv=n("masked language modeling"),Wv=n(" head and a "),pf=r("code"),Hv=n("next sentence prediction (classification)"),Rv=n(" head."),Qv=c(),ai=r("p"),Vv=n("This model inherits from "),ip=r("a"),Kv=n("PreTrainedModel"),Jv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gv=c(),ii=r("p"),Xv=n("This model is also a PyTorch "),li=r("a"),Yv=n("torch.nn.Module"),Zv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ew=c(),At=r("div"),y(di.$$.fragment),tw=c(),Xo=r("p"),ow=n("The "),lp=r("a"),nw=n("BertForPreTraining"),sw=n(" forward method, overrides the "),hf=r("code"),rw=n("__call__"),aw=n(" special method."),iw=c(),y(us.$$.fragment),lw=c(),y(gs.$$.fragment),P_=c(),Yo=r("h2"),_s=r("a"),ff=r("span"),y(ci.$$.fragment),dw=c(),mf=r("span"),cw=n("BertLMHeadModel"),q_=c(),at=r("div"),y(pi.$$.fragment),pw=c(),hi=r("p"),hw=n("Bert Model with a "),uf=r("code"),fw=n("language modeling"),mw=n(" head on top for CLM fine-tuning."),uw=c(),fi=r("p"),gw=n("This model inherits from "),dp=r("a"),_w=n("PreTrainedModel"),bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kw=c(),mi=r("p"),Tw=n("This model is also a PyTorch "),ui=r("a"),yw=n("torch.nn.Module"),vw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ww=c(),It=r("div"),y(gi.$$.fragment),$w=c(),Zo=r("p"),Fw=n("The "),cp=r("a"),xw=n("BertLMHeadModel"),Bw=n(" forward method, overrides the "),gf=r("code"),Mw=n("__call__"),Ew=n(" special method."),zw=c(),y(bs.$$.fragment),Pw=c(),y(ks.$$.fragment),j_=c(),en=r("h2"),Ts=r("a"),_f=r("span"),y(_i.$$.fragment),qw=c(),bf=r("span"),jw=n("BertForMaskedLM"),C_=c(),it=r("div"),y(bi.$$.fragment),Cw=c(),ki=r("p"),Nw=n("Bert Model with a "),kf=r("code"),Ow=n("language modeling"),Aw=n(" head on top."),Iw=c(),Ti=r("p"),Lw=n("This model inherits from "),pp=r("a"),Dw=n("PreTrainedModel"),Sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uw=c(),yi=r("p"),Ww=n("This model is also a PyTorch "),vi=r("a"),Hw=n("torch.nn.Module"),Rw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qw=c(),ft=r("div"),y(wi.$$.fragment),Vw=c(),tn=r("p"),Kw=n("The "),hp=r("a"),Jw=n("BertForMaskedLM"),Gw=n(" forward method, overrides the "),Tf=r("code"),Xw=n("__call__"),Yw=n(" special method."),Zw=c(),y(ys.$$.fragment),e1=c(),y(vs.$$.fragment),t1=c(),y(ws.$$.fragment),N_=c(),on=r("h2"),$s=r("a"),yf=r("span"),y($i.$$.fragment),o1=c(),vf=r("span"),n1=n("BertForNextSentencePrediction"),O_=c(),lt=r("div"),y(Fi.$$.fragment),s1=c(),xi=r("p"),r1=n("Bert Model with a "),wf=r("code"),a1=n("next sentence prediction (classification)"),i1=n(" head on top."),l1=c(),Bi=r("p"),d1=n("This model inherits from "),fp=r("a"),c1=n("PreTrainedModel"),p1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h1=c(),Mi=r("p"),f1=n("This model is also a PyTorch "),Ei=r("a"),m1=n("torch.nn.Module"),u1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),g1=c(),Lt=r("div"),y(zi.$$.fragment),_1=c(),nn=r("p"),b1=n("The "),mp=r("a"),k1=n("BertForNextSentencePrediction"),T1=n(" forward method, overrides the "),$f=r("code"),y1=n("__call__"),v1=n(" special method."),w1=c(),y(Fs.$$.fragment),$1=c(),y(xs.$$.fragment),A_=c(),sn=r("h2"),Bs=r("a"),Ff=r("span"),y(Pi.$$.fragment),F1=c(),xf=r("span"),x1=n("BertForSequenceClassification"),I_=c(),dt=r("div"),y(qi.$$.fragment),B1=c(),Bf=r("p"),M1=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),E1=c(),ji=r("p"),z1=n("This model inherits from "),up=r("a"),P1=n("PreTrainedModel"),q1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j1=c(),Ci=r("p"),C1=n("This model is also a PyTorch "),Ni=r("a"),N1=n("torch.nn.Module"),O1=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A1=c(),Qe=r("div"),y(Oi.$$.fragment),I1=c(),rn=r("p"),L1=n("The "),gp=r("a"),D1=n("BertForSequenceClassification"),S1=n(" forward method, overrides the "),Mf=r("code"),U1=n("__call__"),W1=n(" special method."),H1=c(),y(Ms.$$.fragment),R1=c(),y(Es.$$.fragment),Q1=c(),y(zs.$$.fragment),V1=c(),y(Ps.$$.fragment),K1=c(),y(qs.$$.fragment),L_=c(),an=r("h2"),js=r("a"),Ef=r("span"),y(Ai.$$.fragment),J1=c(),zf=r("span"),G1=n("BertForMultipleChoice"),D_=c(),ct=r("div"),y(Ii.$$.fragment),X1=c(),Pf=r("p"),Y1=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Z1=c(),Li=r("p"),e$=n("This model inherits from "),_p=r("a"),t$=n("PreTrainedModel"),o$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n$=c(),Di=r("p"),s$=n("This model is also a PyTorch "),Si=r("a"),r$=n("torch.nn.Module"),a$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),i$=c(),Dt=r("div"),y(Ui.$$.fragment),l$=c(),ln=r("p"),d$=n("The "),bp=r("a"),c$=n("BertForMultipleChoice"),p$=n(" forward method, overrides the "),qf=r("code"),h$=n("__call__"),f$=n(" special method."),m$=c(),y(Cs.$$.fragment),u$=c(),y(Ns.$$.fragment),S_=c(),dn=r("h2"),Os=r("a"),jf=r("span"),y(Wi.$$.fragment),g$=c(),Cf=r("span"),_$=n("BertForTokenClassification"),U_=c(),pt=r("div"),y(Hi.$$.fragment),b$=c(),Nf=r("p"),k$=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),T$=c(),Ri=r("p"),y$=n("This model inherits from "),kp=r("a"),v$=n("PreTrainedModel"),w$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$$=c(),Qi=r("p"),F$=n("This model is also a PyTorch "),Vi=r("a"),x$=n("torch.nn.Module"),B$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),M$=c(),mt=r("div"),y(Ki.$$.fragment),E$=c(),cn=r("p"),z$=n("The "),Tp=r("a"),P$=n("BertForTokenClassification"),q$=n(" forward method, overrides the "),Of=r("code"),j$=n("__call__"),C$=n(" special method."),N$=c(),y(As.$$.fragment),O$=c(),y(Is.$$.fragment),A$=c(),y(Ls.$$.fragment),W_=c(),pn=r("h2"),Ds=r("a"),Af=r("span"),y(Ji.$$.fragment),I$=c(),If=r("span"),L$=n("BertForQuestionAnswering"),H_=c(),ht=r("div"),y(Gi.$$.fragment),D$=c(),hn=r("p"),S$=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Lf=r("code"),U$=n("span start logits"),W$=n(" and "),Df=r("code"),H$=n("span end logits"),R$=n(")."),Q$=c(),Xi=r("p"),V$=n("This model inherits from "),yp=r("a"),K$=n("PreTrainedModel"),J$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G$=c(),Yi=r("p"),X$=n("This model is also a PyTorch "),Zi=r("a"),Y$=n("torch.nn.Module"),Z$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eF=c(),ut=r("div"),y(el.$$.fragment),tF=c(),fn=r("p"),oF=n("The "),vp=r("a"),nF=n("BertForQuestionAnswering"),sF=n(" forward method, overrides the "),Sf=r("code"),rF=n("__call__"),aF=n(" special method."),iF=c(),y(Ss.$$.fragment),lF=c(),y(Us.$$.fragment),dF=c(),y(Ws.$$.fragment),R_=c(),mn=r("h2"),Hs=r("a"),Uf=r("span"),y(tl.$$.fragment),cF=c(),Wf=r("span"),pF=n("TFBertModel"),Q_=c(),Ke=r("div"),y(ol.$$.fragment),hF=c(),Hf=r("p"),fF=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),mF=c(),nl=r("p"),uF=n("This model inherits from "),wp=r("a"),gF=n("TFPreTrainedModel"),_F=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bF=c(),sl=r("p"),kF=n("This model is also a "),rl=r("a"),TF=n("tf.keras.Model"),yF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vF=c(),y(Rs.$$.fragment),wF=c(),St=r("div"),y(al.$$.fragment),$F=c(),un=r("p"),FF=n("The "),$p=r("a"),xF=n("TFBertModel"),BF=n(" forward method, overrides the "),Rf=r("code"),MF=n("__call__"),EF=n(" special method."),zF=c(),y(Qs.$$.fragment),PF=c(),y(Vs.$$.fragment),V_=c(),gn=r("h2"),Ks=r("a"),Qf=r("span"),y(il.$$.fragment),qF=c(),Vf=r("span"),jF=n("TFBertForPreTraining"),K_=c(),Je=r("div"),y(ll.$$.fragment),CF=c(),_n=r("p"),NF=n(`Bert Model with two heads on top as done during the pretraining:
a `),Kf=r("code"),OF=n("masked language modeling"),AF=n(" head and a "),Jf=r("code"),IF=n("next sentence prediction (classification)"),LF=n(" head."),DF=c(),dl=r("p"),SF=n("This model inherits from "),Fp=r("a"),UF=n("TFPreTrainedModel"),WF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),HF=c(),cl=r("p"),RF=n("This model is also a "),pl=r("a"),QF=n("tf.keras.Model"),VF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KF=c(),y(Js.$$.fragment),JF=c(),Ut=r("div"),y(hl.$$.fragment),GF=c(),bn=r("p"),XF=n("The "),xp=r("a"),YF=n("TFBertForPreTraining"),ZF=n(" forward method, overrides the "),Gf=r("code"),e2=n("__call__"),t2=n(" special method."),o2=c(),y(Gs.$$.fragment),n2=c(),y(Xs.$$.fragment),J_=c(),kn=r("h2"),Ys=r("a"),Xf=r("span"),y(fl.$$.fragment),s2=c(),Yf=r("span"),r2=n("TFBertModelLMHeadModel"),G_=c(),Tn=r("div"),y(ml.$$.fragment),a2=c(),gt=r("div"),y(ul.$$.fragment),i2=c(),Ae=r("p"),l2=n("encoder_hidden_states  ("),Zf=r("code"),d2=n("tf.Tensor"),c2=n(" of shape "),em=r("code"),p2=n("(batch_size, sequence_length, hidden_size)"),h2=n(", "),tm=r("em"),f2=n("optional"),m2=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),om=r("code"),u2=n("tf.Tensor"),g2=n(" of shape "),nm=r("code"),_2=n("(batch_size, sequence_length)"),b2=n(", "),sm=r("em"),k2=n("optional"),T2=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),rm=r("code"),y2=n("[0, 1]"),v2=n(":"),w2=c(),gl=r("ul"),_l=r("li"),$2=n("1 for tokens that are "),am=r("strong"),F2=n("not masked"),x2=n(","),B2=c(),bl=r("li"),M2=n("0 for tokens that are "),im=r("strong"),E2=n("masked"),z2=n("."),P2=c(),G=r("p"),q2=n("past_key_values ("),lm=r("code"),j2=n("Tuple[Tuple[tf.Tensor]]"),C2=n(" of length "),dm=r("code"),N2=n("config.n_layers"),O2=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cm=r("code"),A2=n("past_key_values"),I2=n(" are used, the user can optionally input only the last "),pm=r("code"),L2=n("decoder_input_ids"),D2=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),hm=r("code"),S2=n("(batch_size, 1)"),U2=n(` instead of all
`),fm=r("code"),W2=n("decoder_input_ids"),H2=n(" of shape "),mm=r("code"),R2=n("(batch_size, sequence_length)"),Q2=n(`.
use_cache (`),um=r("code"),V2=n("bool"),K2=n(", "),gm=r("em"),J2=n("optional"),G2=n(", defaults to "),_m=r("code"),X2=n("True"),Y2=n(`):
If set to `),bm=r("code"),Z2=n("True"),ex=n(", "),km=r("code"),tx=n("past_key_values"),ox=n(` key value states are returned and can be used to speed up decoding (see
`),Tm=r("code"),nx=n("past_key_values"),sx=n("). Set to "),ym=r("code"),rx=n("False"),ax=n(" during training, "),vm=r("code"),ix=n("True"),lx=n(` during generation
labels (`),wm=r("code"),dx=n("tf.Tensor"),cx=n(" or "),$m=r("code"),px=n("np.ndarray"),hx=n(" of shape "),Fm=r("code"),fx=n("(batch_size, sequence_length)"),mx=n(", "),xm=r("em"),ux=n("optional"),gx=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bm=r("code"),_x=n("[0, ..., config.vocab_size - 1]"),bx=n("."),kx=c(),y(Zs.$$.fragment),X_=c(),yn=r("h2"),er=r("a"),Mm=r("span"),y(kl.$$.fragment),Tx=c(),Em=r("span"),yx=n("TFBertForMaskedLM"),Y_=c(),Ge=r("div"),y(Tl.$$.fragment),vx=c(),yl=r("p"),wx=n("Bert Model with a "),zm=r("code"),$x=n("language modeling"),Fx=n(" head on top."),xx=c(),vl=r("p"),Bx=n("This model inherits from "),Bp=r("a"),Mx=n("TFPreTrainedModel"),Ex=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zx=c(),wl=r("p"),Px=n("This model is also a "),$l=r("a"),qx=n("tf.keras.Model"),jx=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cx=c(),y(tr.$$.fragment),Nx=c(),_t=r("div"),y(Fl.$$.fragment),Ox=c(),vn=r("p"),Ax=n("The "),Mp=r("a"),Ix=n("TFBertForMaskedLM"),Lx=n(" forward method, overrides the "),Pm=r("code"),Dx=n("__call__"),Sx=n(" special method."),Ux=c(),y(or.$$.fragment),Wx=c(),y(nr.$$.fragment),Hx=c(),y(sr.$$.fragment),Z_=c(),wn=r("h2"),rr=r("a"),qm=r("span"),y(xl.$$.fragment),Rx=c(),jm=r("span"),Qx=n("TFBertForNextSentencePrediction"),eb=c(),Xe=r("div"),y(Bl.$$.fragment),Vx=c(),Ml=r("p"),Kx=n("Bert Model with a "),Cm=r("code"),Jx=n("next sentence prediction (classification)"),Gx=n(" head on top."),Xx=c(),El=r("p"),Yx=n("This model inherits from "),Ep=r("a"),Zx=n("TFPreTrainedModel"),e0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),t0=c(),zl=r("p"),o0=n("This model is also a "),Pl=r("a"),n0=n("tf.keras.Model"),s0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),r0=c(),y(ar.$$.fragment),a0=c(),Wt=r("div"),y(ql.$$.fragment),i0=c(),$n=r("p"),l0=n("The "),zp=r("a"),d0=n("TFBertForNextSentencePrediction"),c0=n(" forward method, overrides the "),Nm=r("code"),p0=n("__call__"),h0=n(" special method."),f0=c(),y(ir.$$.fragment),m0=c(),y(lr.$$.fragment),tb=c(),Fn=r("h2"),dr=r("a"),Om=r("span"),y(jl.$$.fragment),u0=c(),Am=r("span"),g0=n("TFBertForSequenceClassification"),ob=c(),Ye=r("div"),y(Cl.$$.fragment),_0=c(),Im=r("p"),b0=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),k0=c(),Nl=r("p"),T0=n("This model inherits from "),Pp=r("a"),y0=n("TFPreTrainedModel"),v0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),w0=c(),Ol=r("p"),$0=n("This model is also a "),Al=r("a"),F0=n("tf.keras.Model"),x0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),B0=c(),y(cr.$$.fragment),M0=c(),bt=r("div"),y(Il.$$.fragment),E0=c(),xn=r("p"),z0=n("The "),qp=r("a"),P0=n("TFBertForSequenceClassification"),q0=n(" forward method, overrides the "),Lm=r("code"),j0=n("__call__"),C0=n(" special method."),N0=c(),y(pr.$$.fragment),O0=c(),y(hr.$$.fragment),A0=c(),y(fr.$$.fragment),nb=c(),Bn=r("h2"),mr=r("a"),Dm=r("span"),y(Ll.$$.fragment),I0=c(),Sm=r("span"),L0=n("TFBertForMultipleChoice"),sb=c(),Ze=r("div"),y(Dl.$$.fragment),D0=c(),Um=r("p"),S0=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0=c(),Sl=r("p"),W0=n("This model inherits from "),jp=r("a"),H0=n("TFPreTrainedModel"),R0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q0=c(),Ul=r("p"),V0=n("This model is also a "),Wl=r("a"),K0=n("tf.keras.Model"),J0=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),G0=c(),y(ur.$$.fragment),X0=c(),Ht=r("div"),y(Hl.$$.fragment),Y0=c(),Mn=r("p"),Z0=n("The "),Cp=r("a"),eB=n("TFBertForMultipleChoice"),tB=n(" forward method, overrides the "),Wm=r("code"),oB=n("__call__"),nB=n(" special method."),sB=c(),y(gr.$$.fragment),rB=c(),y(_r.$$.fragment),rb=c(),En=r("h2"),br=r("a"),Hm=r("span"),y(Rl.$$.fragment),aB=c(),Rm=r("span"),iB=n("TFBertForTokenClassification"),ab=c(),et=r("div"),y(Ql.$$.fragment),lB=c(),Qm=r("p"),dB=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cB=c(),Vl=r("p"),pB=n("This model inherits from "),Np=r("a"),hB=n("TFPreTrainedModel"),fB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mB=c(),Kl=r("p"),uB=n("This model is also a "),Jl=r("a"),gB=n("tf.keras.Model"),_B=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bB=c(),y(kr.$$.fragment),kB=c(),kt=r("div"),y(Gl.$$.fragment),TB=c(),zn=r("p"),yB=n("The "),Op=r("a"),vB=n("TFBertForTokenClassification"),wB=n(" forward method, overrides the "),Vm=r("code"),$B=n("__call__"),FB=n(" special method."),xB=c(),y(Tr.$$.fragment),BB=c(),y(yr.$$.fragment),MB=c(),y(vr.$$.fragment),ib=c(),Pn=r("h2"),wr=r("a"),Km=r("span"),y(Xl.$$.fragment),EB=c(),Jm=r("span"),zB=n("TFBertForQuestionAnswering"),lb=c(),tt=r("div"),y(Yl.$$.fragment),PB=c(),qn=r("p"),qB=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gm=r("code"),jB=n("span start logits"),CB=n(" and "),Xm=r("code"),NB=n("span end logits"),OB=n(")."),AB=c(),Zl=r("p"),IB=n("This model inherits from "),Ap=r("a"),LB=n("TFPreTrainedModel"),DB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),SB=c(),ed=r("p"),UB=n("This model is also a "),td=r("a"),WB=n("tf.keras.Model"),HB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RB=c(),y($r.$$.fragment),QB=c(),Tt=r("div"),y(od.$$.fragment),VB=c(),jn=r("p"),KB=n("The "),Ip=r("a"),JB=n("TFBertForQuestionAnswering"),GB=n(" forward method, overrides the "),Ym=r("code"),XB=n("__call__"),YB=n(" special method."),ZB=c(),y(Fr.$$.fragment),eM=c(),y(xr.$$.fragment),tM=c(),y(Br.$$.fragment),db=c(),Cn=r("h2"),Mr=r("a"),Zm=r("span"),y(nd.$$.fragment),oM=c(),eu=r("span"),nM=n("FlaxBertModel"),cb=c(),Ie=r("div"),y(sd.$$.fragment),sM=c(),tu=r("p"),rM=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aM=c(),rd=r("p"),iM=n("This model inherits from "),Lp=r("a"),lM=n("FlaxPreTrainedModel"),dM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cM=c(),ad=r("p"),pM=n("This model is also a Flax Linen "),id=r("a"),hM=n("flax.linen.Module"),fM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mM=c(),ou=r("p"),uM=n("Finally, this model supports inherent JAX features such as:"),gM=c(),co=r("ul"),nu=r("li"),ld=r("a"),_M=n("Just-In-Time (JIT) compilation"),bM=c(),su=r("li"),dd=r("a"),kM=n("Automatic Differentiation"),TM=c(),ru=r("li"),cd=r("a"),yM=n("Vectorization"),vM=c(),au=r("li"),pd=r("a"),wM=n("Parallelization"),$M=c(),Rt=r("div"),y(hd.$$.fragment),FM=c(),Nn=r("p"),xM=n("The "),iu=r("code"),BM=n("FlaxBertPreTrainedModel"),MM=n(" forward method, overrides the "),lu=r("code"),EM=n("__call__"),zM=n(" special method."),PM=c(),y(Er.$$.fragment),qM=c(),y(zr.$$.fragment),pb=c(),On=r("h2"),Pr=r("a"),du=r("span"),y(fd.$$.fragment),jM=c(),cu=r("span"),CM=n("FlaxBertForPreTraining"),hb=c(),Le=r("div"),y(md.$$.fragment),NM=c(),An=r("p"),OM=n("Bert Model with two heads on top as done during the pretraining: a "),pu=r("code"),AM=n("masked language modeling"),IM=n(" head and a "),hu=r("code"),LM=n("next sentence prediction (classification)"),DM=n(" head."),SM=c(),ud=r("p"),UM=n("This model inherits from "),Dp=r("a"),WM=n("FlaxPreTrainedModel"),HM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),RM=c(),gd=r("p"),QM=n("This model is also a Flax Linen "),_d=r("a"),VM=n("flax.linen.Module"),KM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),JM=c(),fu=r("p"),GM=n("Finally, this model supports inherent JAX features such as:"),XM=c(),po=r("ul"),mu=r("li"),bd=r("a"),YM=n("Just-In-Time (JIT) compilation"),ZM=c(),uu=r("li"),kd=r("a"),eE=n("Automatic Differentiation"),tE=c(),gu=r("li"),Td=r("a"),oE=n("Vectorization"),nE=c(),_u=r("li"),yd=r("a"),sE=n("Parallelization"),rE=c(),Qt=r("div"),y(vd.$$.fragment),aE=c(),In=r("p"),iE=n("The "),bu=r("code"),lE=n("FlaxBertPreTrainedModel"),dE=n(" forward method, overrides the "),ku=r("code"),cE=n("__call__"),pE=n(" special method."),hE=c(),y(qr.$$.fragment),fE=c(),y(jr.$$.fragment),fb=c(),Ln=r("h2"),Cr=r("a"),Tu=r("span"),y(wd.$$.fragment),mE=c(),yu=r("span"),uE=n("FlaxBertForMaskedLM"),mb=c(),De=r("div"),y($d.$$.fragment),gE=c(),Fd=r("p"),_E=n("Bert Model with a "),vu=r("code"),bE=n("language modeling"),kE=n(" head on top."),TE=c(),xd=r("p"),yE=n("This model inherits from "),Sp=r("a"),vE=n("FlaxPreTrainedModel"),wE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$E=c(),Bd=r("p"),FE=n("This model is also a Flax Linen "),Md=r("a"),xE=n("flax.linen.Module"),BE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ME=c(),wu=r("p"),EE=n("Finally, this model supports inherent JAX features such as:"),zE=c(),ho=r("ul"),$u=r("li"),Ed=r("a"),PE=n("Just-In-Time (JIT) compilation"),qE=c(),Fu=r("li"),zd=r("a"),jE=n("Automatic Differentiation"),CE=c(),xu=r("li"),Pd=r("a"),NE=n("Vectorization"),OE=c(),Bu=r("li"),qd=r("a"),AE=n("Parallelization"),IE=c(),Vt=r("div"),y(jd.$$.fragment),LE=c(),Dn=r("p"),DE=n("The "),Mu=r("code"),SE=n("FlaxBertPreTrainedModel"),UE=n(" forward method, overrides the "),Eu=r("code"),WE=n("__call__"),HE=n(" special method."),RE=c(),y(Nr.$$.fragment),QE=c(),y(Or.$$.fragment),ub=c(),Sn=r("h2"),Ar=r("a"),zu=r("span"),y(Cd.$$.fragment),VE=c(),Pu=r("span"),KE=n("FlaxBertForNextSentencePrediction"),gb=c(),Se=r("div"),y(Nd.$$.fragment),JE=c(),Od=r("p"),GE=n("Bert Model with a "),qu=r("code"),XE=n("next sentence prediction (classification)"),YE=n(" head on top."),ZE=c(),Ad=r("p"),ez=n("This model inherits from "),Up=r("a"),tz=n("FlaxPreTrainedModel"),oz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nz=c(),Id=r("p"),sz=n("This model is also a Flax Linen "),Ld=r("a"),rz=n("flax.linen.Module"),az=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iz=c(),ju=r("p"),lz=n("Finally, this model supports inherent JAX features such as:"),dz=c(),fo=r("ul"),Cu=r("li"),Dd=r("a"),cz=n("Just-In-Time (JIT) compilation"),pz=c(),Nu=r("li"),Sd=r("a"),hz=n("Automatic Differentiation"),fz=c(),Ou=r("li"),Ud=r("a"),mz=n("Vectorization"),uz=c(),Au=r("li"),Wd=r("a"),gz=n("Parallelization"),_z=c(),Kt=r("div"),y(Hd.$$.fragment),bz=c(),Un=r("p"),kz=n("The "),Iu=r("code"),Tz=n("FlaxBertPreTrainedModel"),yz=n(" forward method, overrides the "),Lu=r("code"),vz=n("__call__"),wz=n(" special method."),$z=c(),y(Ir.$$.fragment),Fz=c(),y(Lr.$$.fragment),_b=c(),Wn=r("h2"),Dr=r("a"),Du=r("span"),y(Rd.$$.fragment),xz=c(),Su=r("span"),Bz=n("FlaxBertForSequenceClassification"),bb=c(),Ue=r("div"),y(Qd.$$.fragment),Mz=c(),Uu=r("p"),Ez=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zz=c(),Vd=r("p"),Pz=n("This model inherits from "),Wp=r("a"),qz=n("FlaxPreTrainedModel"),jz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cz=c(),Kd=r("p"),Nz=n("This model is also a Flax Linen "),Jd=r("a"),Oz=n("flax.linen.Module"),Az=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Iz=c(),Wu=r("p"),Lz=n("Finally, this model supports inherent JAX features such as:"),Dz=c(),mo=r("ul"),Hu=r("li"),Gd=r("a"),Sz=n("Just-In-Time (JIT) compilation"),Uz=c(),Ru=r("li"),Xd=r("a"),Wz=n("Automatic Differentiation"),Hz=c(),Qu=r("li"),Yd=r("a"),Rz=n("Vectorization"),Qz=c(),Vu=r("li"),Zd=r("a"),Vz=n("Parallelization"),Kz=c(),Jt=r("div"),y(ec.$$.fragment),Jz=c(),Hn=r("p"),Gz=n("The "),Ku=r("code"),Xz=n("FlaxBertPreTrainedModel"),Yz=n(" forward method, overrides the "),Ju=r("code"),Zz=n("__call__"),e4=n(" special method."),t4=c(),y(Sr.$$.fragment),o4=c(),y(Ur.$$.fragment),kb=c(),Rn=r("h2"),Wr=r("a"),Gu=r("span"),y(tc.$$.fragment),n4=c(),Xu=r("span"),s4=n("FlaxBertForMultipleChoice"),Tb=c(),We=r("div"),y(oc.$$.fragment),r4=c(),Yu=r("p"),a4=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),i4=c(),nc=r("p"),l4=n("This model inherits from "),Hp=r("a"),d4=n("FlaxPreTrainedModel"),c4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p4=c(),sc=r("p"),h4=n("This model is also a Flax Linen "),rc=r("a"),f4=n("flax.linen.Module"),m4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),u4=c(),Zu=r("p"),g4=n("Finally, this model supports inherent JAX features such as:"),_4=c(),uo=r("ul"),eg=r("li"),ac=r("a"),b4=n("Just-In-Time (JIT) compilation"),k4=c(),tg=r("li"),ic=r("a"),T4=n("Automatic Differentiation"),y4=c(),og=r("li"),lc=r("a"),v4=n("Vectorization"),w4=c(),ng=r("li"),dc=r("a"),$4=n("Parallelization"),F4=c(),Gt=r("div"),y(cc.$$.fragment),x4=c(),Qn=r("p"),B4=n("The "),sg=r("code"),M4=n("FlaxBertPreTrainedModel"),E4=n(" forward method, overrides the "),rg=r("code"),z4=n("__call__"),P4=n(" special method."),q4=c(),y(Hr.$$.fragment),j4=c(),y(Rr.$$.fragment),yb=c(),Vn=r("h2"),Qr=r("a"),ag=r("span"),y(pc.$$.fragment),C4=c(),ig=r("span"),N4=n("FlaxBertForTokenClassification"),vb=c(),He=r("div"),y(hc.$$.fragment),O4=c(),lg=r("p"),A4=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),I4=c(),fc=r("p"),L4=n("This model inherits from "),Rp=r("a"),D4=n("FlaxPreTrainedModel"),S4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),U4=c(),mc=r("p"),W4=n("This model is also a Flax Linen "),uc=r("a"),H4=n("flax.linen.Module"),R4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Q4=c(),dg=r("p"),V4=n("Finally, this model supports inherent JAX features such as:"),K4=c(),go=r("ul"),cg=r("li"),gc=r("a"),J4=n("Just-In-Time (JIT) compilation"),G4=c(),pg=r("li"),_c=r("a"),X4=n("Automatic Differentiation"),Y4=c(),hg=r("li"),bc=r("a"),Z4=n("Vectorization"),eP=c(),fg=r("li"),kc=r("a"),tP=n("Parallelization"),oP=c(),Xt=r("div"),y(Tc.$$.fragment),nP=c(),Kn=r("p"),sP=n("The "),mg=r("code"),rP=n("FlaxBertPreTrainedModel"),aP=n(" forward method, overrides the "),ug=r("code"),iP=n("__call__"),lP=n(" special method."),dP=c(),y(Vr.$$.fragment),cP=c(),y(Kr.$$.fragment),wb=c(),Jn=r("h2"),Jr=r("a"),gg=r("span"),y(yc.$$.fragment),pP=c(),_g=r("span"),hP=n("FlaxBertForQuestionAnswering"),$b=c(),Re=r("div"),y(vc.$$.fragment),fP=c(),Gn=r("p"),mP=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=r("code"),uP=n("span start logits"),gP=n(" and "),kg=r("code"),_P=n("span end logits"),bP=n(")."),kP=c(),wc=r("p"),TP=n("This model inherits from "),Qp=r("a"),yP=n("FlaxPreTrainedModel"),vP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wP=c(),$c=r("p"),$P=n("This model is also a Flax Linen "),Fc=r("a"),FP=n("flax.linen.Module"),xP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),BP=c(),Tg=r("p"),MP=n("Finally, this model supports inherent JAX features such as:"),EP=c(),_o=r("ul"),yg=r("li"),xc=r("a"),zP=n("Just-In-Time (JIT) compilation"),PP=c(),vg=r("li"),Bc=r("a"),qP=n("Automatic Differentiation"),jP=c(),wg=r("li"),Mc=r("a"),CP=n("Vectorization"),NP=c(),$g=r("li"),Ec=r("a"),OP=n("Parallelization"),AP=c(),Yt=r("div"),y(zc.$$.fragment),IP=c(),Xn=r("p"),LP=n("The "),Fg=r("code"),DP=n("FlaxBertPreTrainedModel"),SP=n(" forward method, overrides the "),xg=r("code"),UP=n("__call__"),WP=n(" special method."),HP=c(),y(Gr.$$.fragment),RP=c(),y(Xr.$$.fragment),this.h()},l(o){const k=eN('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=a(o,"H1",{class:!0});var Pc=i(h);f=a(Pc,"A",{id:!0,class:!0,href:!0});var Bg=i(f);b=a(Bg,"SPAN",{});var Mg=i(b);v(l.$$.fragment,Mg),Mg.forEach(t),Bg.forEach(t),m=p(Pc),M=a(Pc,"SPAN",{});var Eg=i(M);be=s(Eg,"BERT"),Eg.forEach(t),Pc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var qc=i(z);ee=a(qc,"A",{id:!0,class:!0,href:!0});var zg=i(ee);L=a(zg,"SPAN",{});var Pg=i(L);v(oe.$$.fragment,Pg),Pg.forEach(t),zg.forEach(t),ke=p(qc),D=a(qc,"SPAN",{});var qg=i(D);Te=s(qg,"Overview"),qg.forEach(t),qc.forEach(t),fe=p(o),J=a(o,"P",{});var jc=i(J);O=s(jc,"The BERT model was proposed in "),ne=a(jc,"A",{href:!0,rel:!0});var jg=i(ne);Y=s(jg,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),jg.forEach(t),P=s(jc,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),jc.forEach(t),j=p(o),ie=a(o,"P",{});var Cg=i(ie);H=s(Cg,"The abstract from the paper is the following:"),Cg.forEach(t),me=p(o),le=a(o,"P",{});var Ng=i(le);S=a(Ng,"EM",{});var Og=i(S);ye=s(Og,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),Og.forEach(t),Ng.forEach(t),ue=p(o),q=a(o,"P",{});var Ag=i(q);ce=a(Ag,"EM",{});var Ig=i(ce);R=s(Ig,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Ig.forEach(t),Ag.forEach(t),ge=p(o),de=a(o,"P",{});var Lg=i(de);Q=s(Lg,"Tips:"),Lg.forEach(t),_e=p(o),te=a(o,"UL",{});var Cc=i(te);N=a(Cc,"LI",{});var Dg=i(N);ve=s(Dg,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Dg.forEach(t),V=p(Cc),pe=a(Cc,"LI",{});var Sg=i(pe);T=s(Sg,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),Sg.forEach(t),Cc.forEach(t),E=p(o),K=a(o,"P",{});var Yn=i(K);ze=s(Yn,"This model was contributed by "),Be=a(Yn,"A",{href:!0,rel:!0});var Ug=i(Be);A=s(Ug,"thomwolf"),Ug.forEach(t),Pe=s(Yn,". The original code can be found "),Me=a(Yn,"A",{href:!0,rel:!0});var Wg=i(Me);qe=s(Wg,"here"),Wg.forEach(t),I=s(Yn,"."),Yn.forEach(t),W=p(o),we=a(o,"H2",{class:!0});var Nc=i(we);Fe=a(Nc,"A",{id:!0,class:!0,href:!0});var Hg=i(Fe);U=a(Hg,"SPAN",{});var Rg=i(U);v(Ee.$$.fragment,Rg),Rg.forEach(t),Hg.forEach(t),je=p(Nc),he=a(Nc,"SPAN",{});var Qg=i(he);Ce=s(Qg,"BertConfig"),Qg.forEach(t),Nc.forEach(t),b_=p(o),qt=a(o,"DIV",{class:!0});var bo=i(qt);v($a.$$.fragment,bo),fT=p(bo),io=a(bo,"P",{});var ko=i(io);mT=s(ko,"This is the configuration class to store the configuration of a "),Rc=a(ko,"A",{href:!0});var Vg=i(Rc);uT=s(Vg,"BertModel"),Vg.forEach(t),gT=s(ko," or a "),Qc=a(ko,"A",{href:!0});var Kg=i(Qc);_T=s(Kg,"TFBertModel"),Kg.forEach(t),bT=s(ko,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Fa=a(ko,"A",{href:!0,rel:!0});var Jg=i(Fa);kT=s(Jg,"bert-base-uncased"),Jg.forEach(t),TT=s(ko," architecture."),ko.forEach(t),yT=p(bo),Lo=a(bo,"P",{});var Zn=i(Lo);vT=s(Zn,"Configuration objects inherit from "),Vc=a(Zn,"A",{href:!0});var Gg=i(Vc);wT=s(Gg,"PretrainedConfig"),Gg.forEach(t),$T=s(Zn,` and can be used to control the model outputs. Read the
documentation from `),Kc=a(Zn,"A",{href:!0});var Xg=i(Kc);FT=s(Xg,"PretrainedConfig"),Xg.forEach(t),xT=s(Zn," for more information."),Zn.forEach(t),BT=p(bo),v(ns.$$.fragment,bo),bo.forEach(t),k_=p(o),Do=a(o,"H2",{class:!0});var Oc=i(Do);ss=a(Oc,"A",{id:!0,class:!0,href:!0});var Yg=i(ss);Eh=a(Yg,"SPAN",{});var Zg=i(Eh);v(xa.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),MT=p(Oc),zh=a(Oc,"SPAN",{});var e_=i(zh);ET=s(e_,"BertTokenizer"),e_.forEach(t),Oc.forEach(t),T_=p(o),Ne=a(o,"DIV",{class:!0});var ot=i(Ne);v(Ba.$$.fragment,ot),zT=p(ot),Ph=a(ot,"P",{});var t_=i(Ph);PT=s(t_,"Construct a BERT tokenizer. Based on WordPiece."),t_.forEach(t),qT=p(ot),Ma=a(ot,"P",{});var Ac=i(Ma);jT=s(Ac,"This tokenizer inherits from "),Jc=a(Ac,"A",{href:!0});var o_=i(Jc);CT=s(o_,"PreTrainedTokenizer"),o_.forEach(t),NT=s(Ac,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ac.forEach(t),OT=p(ot),yo=a(ot,"DIV",{class:!0});var es=i(yo);v(Ea.$$.fragment,es),AT=p(es),qh=a(es,"P",{});var n_=i(qh);IT=s(n_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),n_.forEach(t),LT=p(es),za=a(es,"UL",{});var Ic=i(za);Gc=a(Ic,"LI",{});var Vp=i(Gc);DT=s(Vp,"single sequence: "),jh=a(Vp,"CODE",{});var s_=i(jh);ST=s(s_,"[CLS] X [SEP]"),s_.forEach(t),Vp.forEach(t),UT=p(Ic),Xc=a(Ic,"LI",{});var Kp=i(Xc);WT=s(Kp,"pair of sequences: "),Ch=a(Kp,"CODE",{});var r_=i(Ch);HT=s(r_,"[CLS] A [SEP] B [SEP]"),r_.forEach(t),Kp.forEach(t),Ic.forEach(t),es.forEach(t),RT=p(ot),rs=a(ot,"DIV",{class:!0});var Lc=i(rs);v(Pa.$$.fragment,Lc),QT=p(Lc),qa=a(Lc,"P",{});var Dc=i(qa);VT=s(Dc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=a(Dc,"CODE",{});var a_=i(Nh);KT=s(a_,"prepare_for_model"),a_.forEach(t),JT=s(Dc," method."),Dc.forEach(t),Lc.forEach(t),GT=p(ot),Ct=a(ot,"DIV",{class:!0});var To=i(Ct);v(ja.$$.fragment,To),XT=p(To),Oh=a(To,"P",{});var i_=i(Oh);YT=s(i_,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),i_.forEach(t),ZT=p(To),v(as.$$.fragment,To),ey=p(To),So=a(To,"P",{});var ts=i(So);ty=s(ts,"If "),Ah=a(ts,"CODE",{});var l_=i(Ah);oy=s(l_,"token_ids_1"),l_.forEach(t),ny=s(ts," is "),Ih=a(ts,"CODE",{});var d_=i(Ih);sy=s(d_,"None"),d_.forEach(t),ry=s(ts,", this method only returns the first portion of the mask (0s)."),ts.forEach(t),To.forEach(t),ay=p(ot),Yc=a(ot,"DIV",{class:!0});var c_=i(Yc);v(Ca.$$.fragment,c_),c_.forEach(t),ot.forEach(t),y_=p(o),Uo=a(o,"H2",{class:!0});var Sc=i(Uo);is=a(Sc,"A",{id:!0,class:!0,href:!0});var p_=i(is);Lh=a(p_,"SPAN",{});var h_=i(Lh);v(Na.$$.fragment,h_),h_.forEach(t),p_.forEach(t),iy=p(Sc),Dh=a(Sc,"SPAN",{});var f_=i(Dh);ly=s(f_,"BertTokenizerFast"),f_.forEach(t),Sc.forEach(t),v_=p(o),st=a(o,"DIV",{class:!0});var jt=i(st);v(Oa.$$.fragment,jt),dy=p(jt),Aa=a(jt,"P",{});var Uc=i(Aa);cy=s(Uc,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=a(Uc,"EM",{});var m_=i(Sh);py=s(m_,"tokenizers"),m_.forEach(t),hy=s(Uc," library). Based on WordPiece."),Uc.forEach(t),fy=p(jt),Ia=a(jt,"P",{});var Wc=i(Ia);my=s(Wc,"This tokenizer inherits from "),Zc=a(Wc,"A",{href:!0});var u_=i(Zc);uy=s(u_,"PreTrainedTokenizerFast"),u_.forEach(t),gy=s(Wc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wc.forEach(t),_y=p(jt),vo=a(jt,"DIV",{class:!0});var os=i(vo);v(La.$$.fragment,os),by=p(os),Uh=a(os,"P",{});var g_=i(Uh);ky=s(g_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),g_.forEach(t),Ty=p(os),Da=a(os,"UL",{});var Hc=i(Da);ep=a(Hc,"LI",{});var Jp=i(ep);yy=s(Jp,"single sequence: "),Wh=a(Jp,"CODE",{});var __=i(Wh);vy=s(__,"[CLS] X [SEP]"),__.forEach(t),Jp.forEach(t),wy=p(Hc),tp=a(Hc,"LI",{});var QP=i(tp);$y=s(QP,"pair of sequences: "),Hh=a(QP,"CODE",{});var VP=i(Hh);Fy=s(VP,"[CLS] A [SEP] B [SEP]"),VP.forEach(t),QP.forEach(t),Hc.forEach(t),os.forEach(t),xy=p(jt),Nt=a(jt,"DIV",{class:!0});var Yr=i(Nt);v(Sa.$$.fragment,Yr),By=p(Yr),Rh=a(Yr,"P",{});var KP=i(Rh);My=s(KP,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),KP.forEach(t),Ey=p(Yr),v(ls.$$.fragment,Yr),zy=p(Yr),Wo=a(Yr,"P",{});var Gp=i(Wo);Py=s(Gp,"If "),Qh=a(Gp,"CODE",{});var JP=i(Qh);qy=s(JP,"token_ids_1"),JP.forEach(t),jy=s(Gp," is "),Vh=a(Gp,"CODE",{});var GP=i(Vh);Cy=s(GP,"None"),GP.forEach(t),Ny=s(Gp,", this method only returns the first portion of the mask (0s)."),Gp.forEach(t),Yr.forEach(t),jt.forEach(t),w_=p(o),Ho=a(o,"H2",{class:!0});var xb=i(Ho);ds=a(xb,"A",{id:!0,class:!0,href:!0});var XP=i(ds);Kh=a(XP,"SPAN",{});var YP=i(Kh);v(Ua.$$.fragment,YP),YP.forEach(t),XP.forEach(t),Oy=p(xb),Jh=a(xb,"SPAN",{});var ZP=i(Jh);Ay=s(ZP,"Bert specific outputs"),ZP.forEach(t),xb.forEach(t),$_=p(o),Ro=a(o,"DIV",{class:!0});var Bb=i(Ro);v(Wa.$$.fragment,Bb),Iy=p(Bb),Ha=a(Bb,"P",{});var Mb=i(Ha);Ly=s(Mb,"Output type of "),op=a(Mb,"A",{href:!0});var eq=i(op);Dy=s(eq,"BertForPreTraining"),eq.forEach(t),Sy=s(Mb,"."),Mb.forEach(t),Bb.forEach(t),F_=p(o),Qo=a(o,"DIV",{class:!0});var Eb=i(Qo);v(Ra.$$.fragment,Eb),Uy=p(Eb),Qa=a(Eb,"P",{});var zb=i(Qa);Wy=s(zb,"Output type of "),np=a(zb,"A",{href:!0});var tq=i(np);Hy=s(tq,"TFBertForPreTraining"),tq.forEach(t),Ry=s(zb,"."),zb.forEach(t),Eb.forEach(t),x_=p(o),lo=a(o,"DIV",{class:!0});var Xp=i(lo);v(Va.$$.fragment,Xp),Qy=p(Xp),Ka=a(Xp,"P",{});var Pb=i(Ka);Vy=s(Pb,"Output type of "),sp=a(Pb,"A",{href:!0});var oq=i(sp);Ky=s(oq,"BertForPreTraining"),oq.forEach(t),Jy=s(Pb,"."),Pb.forEach(t),Gy=p(Xp),cs=a(Xp,"DIV",{class:!0});var qb=i(cs);v(Ja.$$.fragment,qb),Xy=p(qb),Gh=a(qb,"P",{});var nq=i(Gh);Yy=s(nq,"\u201CReturns a new object replacing the specified fields with new values."),nq.forEach(t),qb.forEach(t),Xp.forEach(t),B_=p(o),Vo=a(o,"H2",{class:!0});var jb=i(Vo);ps=a(jb,"A",{id:!0,class:!0,href:!0});var sq=i(ps);Xh=a(sq,"SPAN",{});var rq=i(Xh);v(Ga.$$.fragment,rq),rq.forEach(t),sq.forEach(t),Zy=p(jb),Yh=a(jb,"SPAN",{});var aq=i(Yh);ev=s(aq,"BertModel"),aq.forEach(t),jb.forEach(t),M_=p(o),Oe=a(o,"DIV",{class:!0});var yt=i(Oe);v(Xa.$$.fragment,yt),tv=p(yt),Zh=a(yt,"P",{});var iq=i(Zh);ov=s(iq,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),iq.forEach(t),nv=p(yt),Ya=a(yt,"P",{});var Cb=i(Ya);sv=s(Cb,"This model inherits from "),rp=a(Cb,"A",{href:!0});var lq=i(rp);rv=s(lq,"PreTrainedModel"),lq.forEach(t),av=s(Cb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb.forEach(t),iv=p(yt),Za=a(yt,"P",{});var Nb=i(Za);lv=s(Nb,"This model is also a PyTorch "),ei=a(Nb,"A",{href:!0,rel:!0});var dq=i(ei);dv=s(dq,"torch.nn.Module"),dq.forEach(t),cv=s(Nb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb.forEach(t),pv=p(yt),ti=a(yt,"P",{});var Ob=i(ti);hv=s(Ob,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=a(Ob,"A",{href:!0,rel:!0});var cq=i(oi);fv=s(cq,`Attention is
all you need`),cq.forEach(t),mv=s(Ob,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ob.forEach(t),uv=p(yt),Ve=a(yt,"P",{});var vt=i(Ve);gv=s(vt,"To behave as an decoder the model needs to be initialized with the "),ef=a(vt,"CODE",{});var pq=i(ef);_v=s(pq,"is_decoder"),pq.forEach(t),bv=s(vt,` argument of the configuration set
to `),tf=a(vt,"CODE",{});var hq=i(tf);kv=s(hq,"True"),hq.forEach(t),Tv=s(vt,". To be used in a Seq2Seq model, the model needs to initialized with both "),of=a(vt,"CODE",{});var fq=i(of);yv=s(fq,"is_decoder"),fq.forEach(t),vv=s(vt,` argument and
`),nf=a(vt,"CODE",{});var mq=i(nf);wv=s(mq,"add_cross_attention"),mq.forEach(t),$v=s(vt," set to "),sf=a(vt,"CODE",{});var uq=i(sf);Fv=s(uq,"True"),uq.forEach(t),xv=s(vt,"; an "),rf=a(vt,"CODE",{});var gq=i(rf);Bv=s(gq,"encoder_hidden_states"),gq.forEach(t),Mv=s(vt," is then expected as an input to the forward pass."),vt.forEach(t),Ev=p(yt),Ot=a(yt,"DIV",{class:!0});var Zr=i(Ot);v(ni.$$.fragment,Zr),zv=p(Zr),Ko=a(Zr,"P",{});var Yp=i(Ko);Pv=s(Yp,"The "),ap=a(Yp,"A",{href:!0});var _q=i(ap);qv=s(_q,"BertModel"),_q.forEach(t),jv=s(Yp," forward method, overrides the "),af=a(Yp,"CODE",{});var bq=i(af);Cv=s(bq,"__call__"),bq.forEach(t),Nv=s(Yp," special method."),Yp.forEach(t),Ov=p(Zr),v(hs.$$.fragment,Zr),Av=p(Zr),v(fs.$$.fragment,Zr),Zr.forEach(t),yt.forEach(t),E_=p(o),Jo=a(o,"H2",{class:!0});var Ab=i(Jo);ms=a(Ab,"A",{id:!0,class:!0,href:!0});var kq=i(ms);lf=a(kq,"SPAN",{});var Tq=i(lf);v(si.$$.fragment,Tq),Tq.forEach(t),kq.forEach(t),Iv=p(Ab),df=a(Ab,"SPAN",{});var yq=i(df);Lv=s(yq,"BertForPreTraining"),yq.forEach(t),Ab.forEach(t),z_=p(o),rt=a(o,"DIV",{class:!0});var wo=i(rt);v(ri.$$.fragment,wo),Dv=p(wo),Go=a(wo,"P",{});var Zp=i(Go);Sv=s(Zp,"Bert Model with two heads on top as done during the pretraining: a "),cf=a(Zp,"CODE",{});var vq=i(cf);Uv=s(vq,"masked language modeling"),vq.forEach(t),Wv=s(Zp," head and a "),pf=a(Zp,"CODE",{});var wq=i(pf);Hv=s(wq,"next sentence prediction (classification)"),wq.forEach(t),Rv=s(Zp," head."),Zp.forEach(t),Qv=p(wo),ai=a(wo,"P",{});var Ib=i(ai);Vv=s(Ib,"This model inherits from "),ip=a(Ib,"A",{href:!0});var $q=i(ip);Kv=s($q,"PreTrainedModel"),$q.forEach(t),Jv=s(Ib,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib.forEach(t),Gv=p(wo),ii=a(wo,"P",{});var Lb=i(ii);Xv=s(Lb,"This model is also a PyTorch "),li=a(Lb,"A",{href:!0,rel:!0});var Fq=i(li);Yv=s(Fq,"torch.nn.Module"),Fq.forEach(t),Zv=s(Lb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lb.forEach(t),ew=p(wo),At=a(wo,"DIV",{class:!0});var ea=i(At);v(di.$$.fragment,ea),tw=p(ea),Xo=a(ea,"P",{});var eh=i(Xo);ow=s(eh,"The "),lp=a(eh,"A",{href:!0});var xq=i(lp);nw=s(xq,"BertForPreTraining"),xq.forEach(t),sw=s(eh," forward method, overrides the "),hf=a(eh,"CODE",{});var Bq=i(hf);rw=s(Bq,"__call__"),Bq.forEach(t),aw=s(eh," special method."),eh.forEach(t),iw=p(ea),v(us.$$.fragment,ea),lw=p(ea),v(gs.$$.fragment,ea),ea.forEach(t),wo.forEach(t),P_=p(o),Yo=a(o,"H2",{class:!0});var Db=i(Yo);_s=a(Db,"A",{id:!0,class:!0,href:!0});var Mq=i(_s);ff=a(Mq,"SPAN",{});var Eq=i(ff);v(ci.$$.fragment,Eq),Eq.forEach(t),Mq.forEach(t),dw=p(Db),mf=a(Db,"SPAN",{});var zq=i(mf);cw=s(zq,"BertLMHeadModel"),zq.forEach(t),Db.forEach(t),q_=p(o),at=a(o,"DIV",{class:!0});var $o=i(at);v(pi.$$.fragment,$o),pw=p($o),hi=a($o,"P",{});var Sb=i(hi);hw=s(Sb,"Bert Model with a "),uf=a(Sb,"CODE",{});var Pq=i(uf);fw=s(Pq,"language modeling"),Pq.forEach(t),mw=s(Sb," head on top for CLM fine-tuning."),Sb.forEach(t),uw=p($o),fi=a($o,"P",{});var Ub=i(fi);gw=s(Ub,"This model inherits from "),dp=a(Ub,"A",{href:!0});var qq=i(dp);_w=s(qq,"PreTrainedModel"),qq.forEach(t),bw=s(Ub,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub.forEach(t),kw=p($o),mi=a($o,"P",{});var Wb=i(mi);Tw=s(Wb,"This model is also a PyTorch "),ui=a(Wb,"A",{href:!0,rel:!0});var jq=i(ui);yw=s(jq,"torch.nn.Module"),jq.forEach(t),vw=s(Wb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wb.forEach(t),ww=p($o),It=a($o,"DIV",{class:!0});var ta=i(It);v(gi.$$.fragment,ta),$w=p(ta),Zo=a(ta,"P",{});var th=i(Zo);Fw=s(th,"The "),cp=a(th,"A",{href:!0});var Cq=i(cp);xw=s(Cq,"BertLMHeadModel"),Cq.forEach(t),Bw=s(th," forward method, overrides the "),gf=a(th,"CODE",{});var Nq=i(gf);Mw=s(Nq,"__call__"),Nq.forEach(t),Ew=s(th," special method."),th.forEach(t),zw=p(ta),v(bs.$$.fragment,ta),Pw=p(ta),v(ks.$$.fragment,ta),ta.forEach(t),$o.forEach(t),j_=p(o),en=a(o,"H2",{class:!0});var Hb=i(en);Ts=a(Hb,"A",{id:!0,class:!0,href:!0});var Oq=i(Ts);_f=a(Oq,"SPAN",{});var Aq=i(_f);v(_i.$$.fragment,Aq),Aq.forEach(t),Oq.forEach(t),qw=p(Hb),bf=a(Hb,"SPAN",{});var Iq=i(bf);jw=s(Iq,"BertForMaskedLM"),Iq.forEach(t),Hb.forEach(t),C_=p(o),it=a(o,"DIV",{class:!0});var Fo=i(it);v(bi.$$.fragment,Fo),Cw=p(Fo),ki=a(Fo,"P",{});var Rb=i(ki);Nw=s(Rb,"Bert Model with a "),kf=a(Rb,"CODE",{});var Lq=i(kf);Ow=s(Lq,"language modeling"),Lq.forEach(t),Aw=s(Rb," head on top."),Rb.forEach(t),Iw=p(Fo),Ti=a(Fo,"P",{});var Qb=i(Ti);Lw=s(Qb,"This model inherits from "),pp=a(Qb,"A",{href:!0});var Dq=i(pp);Dw=s(Dq,"PreTrainedModel"),Dq.forEach(t),Sw=s(Qb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qb.forEach(t),Uw=p(Fo),yi=a(Fo,"P",{});var Vb=i(yi);Ww=s(Vb,"This model is also a PyTorch "),vi=a(Vb,"A",{href:!0,rel:!0});var Sq=i(vi);Hw=s(Sq,"torch.nn.Module"),Sq.forEach(t),Rw=s(Vb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vb.forEach(t),Qw=p(Fo),ft=a(Fo,"DIV",{class:!0});var xo=i(ft);v(wi.$$.fragment,xo),Vw=p(xo),tn=a(xo,"P",{});var oh=i(tn);Kw=s(oh,"The "),hp=a(oh,"A",{href:!0});var Uq=i(hp);Jw=s(Uq,"BertForMaskedLM"),Uq.forEach(t),Gw=s(oh," forward method, overrides the "),Tf=a(oh,"CODE",{});var Wq=i(Tf);Xw=s(Wq,"__call__"),Wq.forEach(t),Yw=s(oh," special method."),oh.forEach(t),Zw=p(xo),v(ys.$$.fragment,xo),e1=p(xo),v(vs.$$.fragment,xo),t1=p(xo),v(ws.$$.fragment,xo),xo.forEach(t),Fo.forEach(t),N_=p(o),on=a(o,"H2",{class:!0});var Kb=i(on);$s=a(Kb,"A",{id:!0,class:!0,href:!0});var Hq=i($s);yf=a(Hq,"SPAN",{});var Rq=i(yf);v($i.$$.fragment,Rq),Rq.forEach(t),Hq.forEach(t),o1=p(Kb),vf=a(Kb,"SPAN",{});var Qq=i(vf);n1=s(Qq,"BertForNextSentencePrediction"),Qq.forEach(t),Kb.forEach(t),O_=p(o),lt=a(o,"DIV",{class:!0});var Bo=i(lt);v(Fi.$$.fragment,Bo),s1=p(Bo),xi=a(Bo,"P",{});var Jb=i(xi);r1=s(Jb,"Bert Model with a "),wf=a(Jb,"CODE",{});var Vq=i(wf);a1=s(Vq,"next sentence prediction (classification)"),Vq.forEach(t),i1=s(Jb," head on top."),Jb.forEach(t),l1=p(Bo),Bi=a(Bo,"P",{});var Gb=i(Bi);d1=s(Gb,"This model inherits from "),fp=a(Gb,"A",{href:!0});var Kq=i(fp);c1=s(Kq,"PreTrainedModel"),Kq.forEach(t),p1=s(Gb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gb.forEach(t),h1=p(Bo),Mi=a(Bo,"P",{});var Xb=i(Mi);f1=s(Xb,"This model is also a PyTorch "),Ei=a(Xb,"A",{href:!0,rel:!0});var Jq=i(Ei);m1=s(Jq,"torch.nn.Module"),Jq.forEach(t),u1=s(Xb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xb.forEach(t),g1=p(Bo),Lt=a(Bo,"DIV",{class:!0});var oa=i(Lt);v(zi.$$.fragment,oa),_1=p(oa),nn=a(oa,"P",{});var nh=i(nn);b1=s(nh,"The "),mp=a(nh,"A",{href:!0});var Gq=i(mp);k1=s(Gq,"BertForNextSentencePrediction"),Gq.forEach(t),T1=s(nh," forward method, overrides the "),$f=a(nh,"CODE",{});var Xq=i($f);y1=s(Xq,"__call__"),Xq.forEach(t),v1=s(nh," special method."),nh.forEach(t),w1=p(oa),v(Fs.$$.fragment,oa),$1=p(oa),v(xs.$$.fragment,oa),oa.forEach(t),Bo.forEach(t),A_=p(o),sn=a(o,"H2",{class:!0});var Yb=i(sn);Bs=a(Yb,"A",{id:!0,class:!0,href:!0});var Yq=i(Bs);Ff=a(Yq,"SPAN",{});var Zq=i(Ff);v(Pi.$$.fragment,Zq),Zq.forEach(t),Yq.forEach(t),F1=p(Yb),xf=a(Yb,"SPAN",{});var ej=i(xf);x1=s(ej,"BertForSequenceClassification"),ej.forEach(t),Yb.forEach(t),I_=p(o),dt=a(o,"DIV",{class:!0});var Mo=i(dt);v(qi.$$.fragment,Mo),B1=p(Mo),Bf=a(Mo,"P",{});var tj=i(Bf);M1=s(tj,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),tj.forEach(t),E1=p(Mo),ji=a(Mo,"P",{});var Zb=i(ji);z1=s(Zb,"This model inherits from "),up=a(Zb,"A",{href:!0});var oj=i(up);P1=s(oj,"PreTrainedModel"),oj.forEach(t),q1=s(Zb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb.forEach(t),j1=p(Mo),Ci=a(Mo,"P",{});var ek=i(Ci);C1=s(ek,"This model is also a PyTorch "),Ni=a(ek,"A",{href:!0,rel:!0});var nj=i(Ni);N1=s(nj,"torch.nn.Module"),nj.forEach(t),O1=s(ek,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ek.forEach(t),A1=p(Mo),Qe=a(Mo,"DIV",{class:!0});var wt=i(Qe);v(Oi.$$.fragment,wt),I1=p(wt),rn=a(wt,"P",{});var sh=i(rn);L1=s(sh,"The "),gp=a(sh,"A",{href:!0});var sj=i(gp);D1=s(sj,"BertForSequenceClassification"),sj.forEach(t),S1=s(sh," forward method, overrides the "),Mf=a(sh,"CODE",{});var rj=i(Mf);U1=s(rj,"__call__"),rj.forEach(t),W1=s(sh," special method."),sh.forEach(t),H1=p(wt),v(Ms.$$.fragment,wt),R1=p(wt),v(Es.$$.fragment,wt),Q1=p(wt),v(zs.$$.fragment,wt),V1=p(wt),v(Ps.$$.fragment,wt),K1=p(wt),v(qs.$$.fragment,wt),wt.forEach(t),Mo.forEach(t),L_=p(o),an=a(o,"H2",{class:!0});var tk=i(an);js=a(tk,"A",{id:!0,class:!0,href:!0});var aj=i(js);Ef=a(aj,"SPAN",{});var ij=i(Ef);v(Ai.$$.fragment,ij),ij.forEach(t),aj.forEach(t),J1=p(tk),zf=a(tk,"SPAN",{});var lj=i(zf);G1=s(lj,"BertForMultipleChoice"),lj.forEach(t),tk.forEach(t),D_=p(o),ct=a(o,"DIV",{class:!0});var Eo=i(ct);v(Ii.$$.fragment,Eo),X1=p(Eo),Pf=a(Eo,"P",{});var dj=i(Pf);Y1=s(dj,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dj.forEach(t),Z1=p(Eo),Li=a(Eo,"P",{});var ok=i(Li);e$=s(ok,"This model inherits from "),_p=a(ok,"A",{href:!0});var cj=i(_p);t$=s(cj,"PreTrainedModel"),cj.forEach(t),o$=s(ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok.forEach(t),n$=p(Eo),Di=a(Eo,"P",{});var nk=i(Di);s$=s(nk,"This model is also a PyTorch "),Si=a(nk,"A",{href:!0,rel:!0});var pj=i(Si);r$=s(pj,"torch.nn.Module"),pj.forEach(t),a$=s(nk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nk.forEach(t),i$=p(Eo),Dt=a(Eo,"DIV",{class:!0});var na=i(Dt);v(Ui.$$.fragment,na),l$=p(na),ln=a(na,"P",{});var rh=i(ln);d$=s(rh,"The "),bp=a(rh,"A",{href:!0});var hj=i(bp);c$=s(hj,"BertForMultipleChoice"),hj.forEach(t),p$=s(rh," forward method, overrides the "),qf=a(rh,"CODE",{});var fj=i(qf);h$=s(fj,"__call__"),fj.forEach(t),f$=s(rh," special method."),rh.forEach(t),m$=p(na),v(Cs.$$.fragment,na),u$=p(na),v(Ns.$$.fragment,na),na.forEach(t),Eo.forEach(t),S_=p(o),dn=a(o,"H2",{class:!0});var sk=i(dn);Os=a(sk,"A",{id:!0,class:!0,href:!0});var mj=i(Os);jf=a(mj,"SPAN",{});var uj=i(jf);v(Wi.$$.fragment,uj),uj.forEach(t),mj.forEach(t),g$=p(sk),Cf=a(sk,"SPAN",{});var gj=i(Cf);_$=s(gj,"BertForTokenClassification"),gj.forEach(t),sk.forEach(t),U_=p(o),pt=a(o,"DIV",{class:!0});var zo=i(pt);v(Hi.$$.fragment,zo),b$=p(zo),Nf=a(zo,"P",{});var _j=i(Nf);k$=s(_j,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_j.forEach(t),T$=p(zo),Ri=a(zo,"P",{});var rk=i(Ri);y$=s(rk,"This model inherits from "),kp=a(rk,"A",{href:!0});var bj=i(kp);v$=s(bj,"PreTrainedModel"),bj.forEach(t),w$=s(rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk.forEach(t),$$=p(zo),Qi=a(zo,"P",{});var ak=i(Qi);F$=s(ak,"This model is also a PyTorch "),Vi=a(ak,"A",{href:!0,rel:!0});var kj=i(Vi);x$=s(kj,"torch.nn.Module"),kj.forEach(t),B$=s(ak,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak.forEach(t),M$=p(zo),mt=a(zo,"DIV",{class:!0});var Po=i(mt);v(Ki.$$.fragment,Po),E$=p(Po),cn=a(Po,"P",{});var ah=i(cn);z$=s(ah,"The "),Tp=a(ah,"A",{href:!0});var Tj=i(Tp);P$=s(Tj,"BertForTokenClassification"),Tj.forEach(t),q$=s(ah," forward method, overrides the "),Of=a(ah,"CODE",{});var yj=i(Of);j$=s(yj,"__call__"),yj.forEach(t),C$=s(ah," special method."),ah.forEach(t),N$=p(Po),v(As.$$.fragment,Po),O$=p(Po),v(Is.$$.fragment,Po),A$=p(Po),v(Ls.$$.fragment,Po),Po.forEach(t),zo.forEach(t),W_=p(o),pn=a(o,"H2",{class:!0});var ik=i(pn);Ds=a(ik,"A",{id:!0,class:!0,href:!0});var vj=i(Ds);Af=a(vj,"SPAN",{});var wj=i(Af);v(Ji.$$.fragment,wj),wj.forEach(t),vj.forEach(t),I$=p(ik),If=a(ik,"SPAN",{});var $j=i(If);L$=s($j,"BertForQuestionAnswering"),$j.forEach(t),ik.forEach(t),H_=p(o),ht=a(o,"DIV",{class:!0});var qo=i(ht);v(Gi.$$.fragment,qo),D$=p(qo),hn=a(qo,"P",{});var ih=i(hn);S$=s(ih,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Lf=a(ih,"CODE",{});var Fj=i(Lf);U$=s(Fj,"span start logits"),Fj.forEach(t),W$=s(ih," and "),Df=a(ih,"CODE",{});var xj=i(Df);H$=s(xj,"span end logits"),xj.forEach(t),R$=s(ih,")."),ih.forEach(t),Q$=p(qo),Xi=a(qo,"P",{});var lk=i(Xi);V$=s(lk,"This model inherits from "),yp=a(lk,"A",{href:!0});var Bj=i(yp);K$=s(Bj,"PreTrainedModel"),Bj.forEach(t),J$=s(lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk.forEach(t),G$=p(qo),Yi=a(qo,"P",{});var dk=i(Yi);X$=s(dk,"This model is also a PyTorch "),Zi=a(dk,"A",{href:!0,rel:!0});var Mj=i(Zi);Y$=s(Mj,"torch.nn.Module"),Mj.forEach(t),Z$=s(dk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dk.forEach(t),eF=p(qo),ut=a(qo,"DIV",{class:!0});var jo=i(ut);v(el.$$.fragment,jo),tF=p(jo),fn=a(jo,"P",{});var lh=i(fn);oF=s(lh,"The "),vp=a(lh,"A",{href:!0});var Ej=i(vp);nF=s(Ej,"BertForQuestionAnswering"),Ej.forEach(t),sF=s(lh," forward method, overrides the "),Sf=a(lh,"CODE",{});var zj=i(Sf);rF=s(zj,"__call__"),zj.forEach(t),aF=s(lh," special method."),lh.forEach(t),iF=p(jo),v(Ss.$$.fragment,jo),lF=p(jo),v(Us.$$.fragment,jo),dF=p(jo),v(Ws.$$.fragment,jo),jo.forEach(t),qo.forEach(t),R_=p(o),mn=a(o,"H2",{class:!0});var ck=i(mn);Hs=a(ck,"A",{id:!0,class:!0,href:!0});var Pj=i(Hs);Uf=a(Pj,"SPAN",{});var qj=i(Uf);v(tl.$$.fragment,qj),qj.forEach(t),Pj.forEach(t),cF=p(ck),Wf=a(ck,"SPAN",{});var jj=i(Wf);pF=s(jj,"TFBertModel"),jj.forEach(t),ck.forEach(t),Q_=p(o),Ke=a(o,"DIV",{class:!0});var Zt=i(Ke);v(ol.$$.fragment,Zt),hF=p(Zt),Hf=a(Zt,"P",{});var Cj=i(Hf);fF=s(Cj,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Cj.forEach(t),mF=p(Zt),nl=a(Zt,"P",{});var pk=i(nl);uF=s(pk,"This model inherits from "),wp=a(pk,"A",{href:!0});var Nj=i(wp);gF=s(Nj,"TFPreTrainedModel"),Nj.forEach(t),_F=s(pk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pk.forEach(t),bF=p(Zt),sl=a(Zt,"P",{});var hk=i(sl);kF=s(hk,"This model is also a "),rl=a(hk,"A",{href:!0,rel:!0});var Oj=i(rl);TF=s(Oj,"tf.keras.Model"),Oj.forEach(t),yF=s(hk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hk.forEach(t),vF=p(Zt),v(Rs.$$.fragment,Zt),wF=p(Zt),St=a(Zt,"DIV",{class:!0});var sa=i(St);v(al.$$.fragment,sa),$F=p(sa),un=a(sa,"P",{});var dh=i(un);FF=s(dh,"The "),$p=a(dh,"A",{href:!0});var Aj=i($p);xF=s(Aj,"TFBertModel"),Aj.forEach(t),BF=s(dh," forward method, overrides the "),Rf=a(dh,"CODE",{});var Ij=i(Rf);MF=s(Ij,"__call__"),Ij.forEach(t),EF=s(dh," special method."),dh.forEach(t),zF=p(sa),v(Qs.$$.fragment,sa),PF=p(sa),v(Vs.$$.fragment,sa),sa.forEach(t),Zt.forEach(t),V_=p(o),gn=a(o,"H2",{class:!0});var fk=i(gn);Ks=a(fk,"A",{id:!0,class:!0,href:!0});var Lj=i(Ks);Qf=a(Lj,"SPAN",{});var Dj=i(Qf);v(il.$$.fragment,Dj),Dj.forEach(t),Lj.forEach(t),qF=p(fk),Vf=a(fk,"SPAN",{});var Sj=i(Vf);jF=s(Sj,"TFBertForPreTraining"),Sj.forEach(t),fk.forEach(t),K_=p(o),Je=a(o,"DIV",{class:!0});var eo=i(Je);v(ll.$$.fragment,eo),CF=p(eo),_n=a(eo,"P",{});var ch=i(_n);NF=s(ch,`Bert Model with two heads on top as done during the pretraining:
a `),Kf=a(ch,"CODE",{});var Uj=i(Kf);OF=s(Uj,"masked language modeling"),Uj.forEach(t),AF=s(ch," head and a "),Jf=a(ch,"CODE",{});var Wj=i(Jf);IF=s(Wj,"next sentence prediction (classification)"),Wj.forEach(t),LF=s(ch," head."),ch.forEach(t),DF=p(eo),dl=a(eo,"P",{});var mk=i(dl);SF=s(mk,"This model inherits from "),Fp=a(mk,"A",{href:!0});var Hj=i(Fp);UF=s(Hj,"TFPreTrainedModel"),Hj.forEach(t),WF=s(mk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mk.forEach(t),HF=p(eo),cl=a(eo,"P",{});var uk=i(cl);RF=s(uk,"This model is also a "),pl=a(uk,"A",{href:!0,rel:!0});var Rj=i(pl);QF=s(Rj,"tf.keras.Model"),Rj.forEach(t),VF=s(uk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uk.forEach(t),KF=p(eo),v(Js.$$.fragment,eo),JF=p(eo),Ut=a(eo,"DIV",{class:!0});var ra=i(Ut);v(hl.$$.fragment,ra),GF=p(ra),bn=a(ra,"P",{});var ph=i(bn);XF=s(ph,"The "),xp=a(ph,"A",{href:!0});var Qj=i(xp);YF=s(Qj,"TFBertForPreTraining"),Qj.forEach(t),ZF=s(ph," forward method, overrides the "),Gf=a(ph,"CODE",{});var Vj=i(Gf);e2=s(Vj,"__call__"),Vj.forEach(t),t2=s(ph," special method."),ph.forEach(t),o2=p(ra),v(Gs.$$.fragment,ra),n2=p(ra),v(Xs.$$.fragment,ra),ra.forEach(t),eo.forEach(t),J_=p(o),kn=a(o,"H2",{class:!0});var gk=i(kn);Ys=a(gk,"A",{id:!0,class:!0,href:!0});var Kj=i(Ys);Xf=a(Kj,"SPAN",{});var Jj=i(Xf);v(fl.$$.fragment,Jj),Jj.forEach(t),Kj.forEach(t),s2=p(gk),Yf=a(gk,"SPAN",{});var Gj=i(Yf);r2=s(Gj,"TFBertModelLMHeadModel"),Gj.forEach(t),gk.forEach(t),G_=p(o),Tn=a(o,"DIV",{class:!0});var _k=i(Tn);v(ml.$$.fragment,_k),a2=p(_k),gt=a(_k,"DIV",{class:!0});var Co=i(gt);v(ul.$$.fragment,Co),i2=p(Co),Ae=a(Co,"P",{});var nt=i(Ae);l2=s(nt,"encoder_hidden_states  ("),Zf=a(nt,"CODE",{});var Xj=i(Zf);d2=s(Xj,"tf.Tensor"),Xj.forEach(t),c2=s(nt," of shape "),em=a(nt,"CODE",{});var Yj=i(em);p2=s(Yj,"(batch_size, sequence_length, hidden_size)"),Yj.forEach(t),h2=s(nt,", "),tm=a(nt,"EM",{});var Zj=i(tm);f2=s(Zj,"optional"),Zj.forEach(t),m2=s(nt,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),om=a(nt,"CODE",{});var e3=i(om);u2=s(e3,"tf.Tensor"),e3.forEach(t),g2=s(nt," of shape "),nm=a(nt,"CODE",{});var t3=i(nm);_2=s(t3,"(batch_size, sequence_length)"),t3.forEach(t),b2=s(nt,", "),sm=a(nt,"EM",{});var o3=i(sm);k2=s(o3,"optional"),o3.forEach(t),T2=s(nt,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),rm=a(nt,"CODE",{});var n3=i(rm);y2=s(n3,"[0, 1]"),n3.forEach(t),v2=s(nt,":"),nt.forEach(t),w2=p(Co),gl=a(Co,"UL",{});var bk=i(gl);_l=a(bk,"LI",{});var kk=i(_l);$2=s(kk,"1 for tokens that are "),am=a(kk,"STRONG",{});var s3=i(am);F2=s(s3,"not masked"),s3.forEach(t),x2=s(kk,","),kk.forEach(t),B2=p(bk),bl=a(bk,"LI",{});var Tk=i(bl);M2=s(Tk,"0 for tokens that are "),im=a(Tk,"STRONG",{});var r3=i(im);E2=s(r3,"masked"),r3.forEach(t),z2=s(Tk,"."),Tk.forEach(t),bk.forEach(t),P2=p(Co),G=a(Co,"P",{});var Z=i(G);q2=s(Z,"past_key_values ("),lm=a(Z,"CODE",{});var a3=i(lm);j2=s(a3,"Tuple[Tuple[tf.Tensor]]"),a3.forEach(t),C2=s(Z," of length "),dm=a(Z,"CODE",{});var i3=i(dm);N2=s(i3,"config.n_layers"),i3.forEach(t),O2=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cm=a(Z,"CODE",{});var l3=i(cm);A2=s(l3,"past_key_values"),l3.forEach(t),I2=s(Z," are used, the user can optionally input only the last "),pm=a(Z,"CODE",{});var d3=i(pm);L2=s(d3,"decoder_input_ids"),d3.forEach(t),D2=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),hm=a(Z,"CODE",{});var c3=i(hm);S2=s(c3,"(batch_size, 1)"),c3.forEach(t),U2=s(Z,` instead of all
`),fm=a(Z,"CODE",{});var p3=i(fm);W2=s(p3,"decoder_input_ids"),p3.forEach(t),H2=s(Z," of shape "),mm=a(Z,"CODE",{});var h3=i(mm);R2=s(h3,"(batch_size, sequence_length)"),h3.forEach(t),Q2=s(Z,`.
use_cache (`),um=a(Z,"CODE",{});var f3=i(um);V2=s(f3,"bool"),f3.forEach(t),K2=s(Z,", "),gm=a(Z,"EM",{});var m3=i(gm);J2=s(m3,"optional"),m3.forEach(t),G2=s(Z,", defaults to "),_m=a(Z,"CODE",{});var u3=i(_m);X2=s(u3,"True"),u3.forEach(t),Y2=s(Z,`):
If set to `),bm=a(Z,"CODE",{});var g3=i(bm);Z2=s(g3,"True"),g3.forEach(t),ex=s(Z,", "),km=a(Z,"CODE",{});var _3=i(km);tx=s(_3,"past_key_values"),_3.forEach(t),ox=s(Z,` key value states are returned and can be used to speed up decoding (see
`),Tm=a(Z,"CODE",{});var b3=i(Tm);nx=s(b3,"past_key_values"),b3.forEach(t),sx=s(Z,"). Set to "),ym=a(Z,"CODE",{});var k3=i(ym);rx=s(k3,"False"),k3.forEach(t),ax=s(Z," during training, "),vm=a(Z,"CODE",{});var T3=i(vm);ix=s(T3,"True"),T3.forEach(t),lx=s(Z,` during generation
labels (`),wm=a(Z,"CODE",{});var y3=i(wm);dx=s(y3,"tf.Tensor"),y3.forEach(t),cx=s(Z," or "),$m=a(Z,"CODE",{});var v3=i($m);px=s(v3,"np.ndarray"),v3.forEach(t),hx=s(Z," of shape "),Fm=a(Z,"CODE",{});var w3=i(Fm);fx=s(w3,"(batch_size, sequence_length)"),w3.forEach(t),mx=s(Z,", "),xm=a(Z,"EM",{});var $3=i(xm);ux=s($3,"optional"),$3.forEach(t),gx=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bm=a(Z,"CODE",{});var F3=i(Bm);_x=s(F3,"[0, ..., config.vocab_size - 1]"),F3.forEach(t),bx=s(Z,"."),Z.forEach(t),kx=p(Co),v(Zs.$$.fragment,Co),Co.forEach(t),_k.forEach(t),X_=p(o),yn=a(o,"H2",{class:!0});var yk=i(yn);er=a(yk,"A",{id:!0,class:!0,href:!0});var x3=i(er);Mm=a(x3,"SPAN",{});var B3=i(Mm);v(kl.$$.fragment,B3),B3.forEach(t),x3.forEach(t),Tx=p(yk),Em=a(yk,"SPAN",{});var M3=i(Em);yx=s(M3,"TFBertForMaskedLM"),M3.forEach(t),yk.forEach(t),Y_=p(o),Ge=a(o,"DIV",{class:!0});var to=i(Ge);v(Tl.$$.fragment,to),vx=p(to),yl=a(to,"P",{});var vk=i(yl);wx=s(vk,"Bert Model with a "),zm=a(vk,"CODE",{});var E3=i(zm);$x=s(E3,"language modeling"),E3.forEach(t),Fx=s(vk," head on top."),vk.forEach(t),xx=p(to),vl=a(to,"P",{});var wk=i(vl);Bx=s(wk,"This model inherits from "),Bp=a(wk,"A",{href:!0});var z3=i(Bp);Mx=s(z3,"TFPreTrainedModel"),z3.forEach(t),Ex=s(wk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wk.forEach(t),zx=p(to),wl=a(to,"P",{});var $k=i(wl);Px=s($k,"This model is also a "),$l=a($k,"A",{href:!0,rel:!0});var P3=i($l);qx=s(P3,"tf.keras.Model"),P3.forEach(t),jx=s($k,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$k.forEach(t),Cx=p(to),v(tr.$$.fragment,to),Nx=p(to),_t=a(to,"DIV",{class:!0});var No=i(_t);v(Fl.$$.fragment,No),Ox=p(No),vn=a(No,"P",{});var hh=i(vn);Ax=s(hh,"The "),Mp=a(hh,"A",{href:!0});var q3=i(Mp);Ix=s(q3,"TFBertForMaskedLM"),q3.forEach(t),Lx=s(hh," forward method, overrides the "),Pm=a(hh,"CODE",{});var j3=i(Pm);Dx=s(j3,"__call__"),j3.forEach(t),Sx=s(hh," special method."),hh.forEach(t),Ux=p(No),v(or.$$.fragment,No),Wx=p(No),v(nr.$$.fragment,No),Hx=p(No),v(sr.$$.fragment,No),No.forEach(t),to.forEach(t),Z_=p(o),wn=a(o,"H2",{class:!0});var Fk=i(wn);rr=a(Fk,"A",{id:!0,class:!0,href:!0});var C3=i(rr);qm=a(C3,"SPAN",{});var N3=i(qm);v(xl.$$.fragment,N3),N3.forEach(t),C3.forEach(t),Rx=p(Fk),jm=a(Fk,"SPAN",{});var O3=i(jm);Qx=s(O3,"TFBertForNextSentencePrediction"),O3.forEach(t),Fk.forEach(t),eb=p(o),Xe=a(o,"DIV",{class:!0});var oo=i(Xe);v(Bl.$$.fragment,oo),Vx=p(oo),Ml=a(oo,"P",{});var xk=i(Ml);Kx=s(xk,"Bert Model with a "),Cm=a(xk,"CODE",{});var A3=i(Cm);Jx=s(A3,"next sentence prediction (classification)"),A3.forEach(t),Gx=s(xk," head on top."),xk.forEach(t),Xx=p(oo),El=a(oo,"P",{});var Bk=i(El);Yx=s(Bk,"This model inherits from "),Ep=a(Bk,"A",{href:!0});var I3=i(Ep);Zx=s(I3,"TFPreTrainedModel"),I3.forEach(t),e0=s(Bk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk.forEach(t),t0=p(oo),zl=a(oo,"P",{});var Mk=i(zl);o0=s(Mk,"This model is also a "),Pl=a(Mk,"A",{href:!0,rel:!0});var L3=i(Pl);n0=s(L3,"tf.keras.Model"),L3.forEach(t),s0=s(Mk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mk.forEach(t),r0=p(oo),v(ar.$$.fragment,oo),a0=p(oo),Wt=a(oo,"DIV",{class:!0});var aa=i(Wt);v(ql.$$.fragment,aa),i0=p(aa),$n=a(aa,"P",{});var fh=i($n);l0=s(fh,"The "),zp=a(fh,"A",{href:!0});var D3=i(zp);d0=s(D3,"TFBertForNextSentencePrediction"),D3.forEach(t),c0=s(fh," forward method, overrides the "),Nm=a(fh,"CODE",{});var S3=i(Nm);p0=s(S3,"__call__"),S3.forEach(t),h0=s(fh," special method."),fh.forEach(t),f0=p(aa),v(ir.$$.fragment,aa),m0=p(aa),v(lr.$$.fragment,aa),aa.forEach(t),oo.forEach(t),tb=p(o),Fn=a(o,"H2",{class:!0});var Ek=i(Fn);dr=a(Ek,"A",{id:!0,class:!0,href:!0});var U3=i(dr);Om=a(U3,"SPAN",{});var W3=i(Om);v(jl.$$.fragment,W3),W3.forEach(t),U3.forEach(t),u0=p(Ek),Am=a(Ek,"SPAN",{});var H3=i(Am);g0=s(H3,"TFBertForSequenceClassification"),H3.forEach(t),Ek.forEach(t),ob=p(o),Ye=a(o,"DIV",{class:!0});var no=i(Ye);v(Cl.$$.fragment,no),_0=p(no),Im=a(no,"P",{});var R3=i(Im);b0=s(R3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),R3.forEach(t),k0=p(no),Nl=a(no,"P",{});var zk=i(Nl);T0=s(zk,"This model inherits from "),Pp=a(zk,"A",{href:!0});var Q3=i(Pp);y0=s(Q3,"TFPreTrainedModel"),Q3.forEach(t),v0=s(zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk.forEach(t),w0=p(no),Ol=a(no,"P",{});var Pk=i(Ol);$0=s(Pk,"This model is also a "),Al=a(Pk,"A",{href:!0,rel:!0});var V3=i(Al);F0=s(V3,"tf.keras.Model"),V3.forEach(t),x0=s(Pk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pk.forEach(t),B0=p(no),v(cr.$$.fragment,no),M0=p(no),bt=a(no,"DIV",{class:!0});var Oo=i(bt);v(Il.$$.fragment,Oo),E0=p(Oo),xn=a(Oo,"P",{});var mh=i(xn);z0=s(mh,"The "),qp=a(mh,"A",{href:!0});var K3=i(qp);P0=s(K3,"TFBertForSequenceClassification"),K3.forEach(t),q0=s(mh," forward method, overrides the "),Lm=a(mh,"CODE",{});var J3=i(Lm);j0=s(J3,"__call__"),J3.forEach(t),C0=s(mh," special method."),mh.forEach(t),N0=p(Oo),v(pr.$$.fragment,Oo),O0=p(Oo),v(hr.$$.fragment,Oo),A0=p(Oo),v(fr.$$.fragment,Oo),Oo.forEach(t),no.forEach(t),nb=p(o),Bn=a(o,"H2",{class:!0});var qk=i(Bn);mr=a(qk,"A",{id:!0,class:!0,href:!0});var G3=i(mr);Dm=a(G3,"SPAN",{});var X3=i(Dm);v(Ll.$$.fragment,X3),X3.forEach(t),G3.forEach(t),I0=p(qk),Sm=a(qk,"SPAN",{});var Y3=i(Sm);L0=s(Y3,"TFBertForMultipleChoice"),Y3.forEach(t),qk.forEach(t),sb=p(o),Ze=a(o,"DIV",{class:!0});var so=i(Ze);v(Dl.$$.fragment,so),D0=p(so),Um=a(so,"P",{});var Z3=i(Um);S0=s(Z3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Z3.forEach(t),U0=p(so),Sl=a(so,"P",{});var jk=i(Sl);W0=s(jk,"This model inherits from "),jp=a(jk,"A",{href:!0});var eC=i(jp);H0=s(eC,"TFPreTrainedModel"),eC.forEach(t),R0=s(jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk.forEach(t),Q0=p(so),Ul=a(so,"P",{});var Ck=i(Ul);V0=s(Ck,"This model is also a "),Wl=a(Ck,"A",{href:!0,rel:!0});var tC=i(Wl);K0=s(tC,"tf.keras.Model"),tC.forEach(t),J0=s(Ck,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ck.forEach(t),G0=p(so),v(ur.$$.fragment,so),X0=p(so),Ht=a(so,"DIV",{class:!0});var ia=i(Ht);v(Hl.$$.fragment,ia),Y0=p(ia),Mn=a(ia,"P",{});var uh=i(Mn);Z0=s(uh,"The "),Cp=a(uh,"A",{href:!0});var oC=i(Cp);eB=s(oC,"TFBertForMultipleChoice"),oC.forEach(t),tB=s(uh," forward method, overrides the "),Wm=a(uh,"CODE",{});var nC=i(Wm);oB=s(nC,"__call__"),nC.forEach(t),nB=s(uh," special method."),uh.forEach(t),sB=p(ia),v(gr.$$.fragment,ia),rB=p(ia),v(_r.$$.fragment,ia),ia.forEach(t),so.forEach(t),rb=p(o),En=a(o,"H2",{class:!0});var Nk=i(En);br=a(Nk,"A",{id:!0,class:!0,href:!0});var sC=i(br);Hm=a(sC,"SPAN",{});var rC=i(Hm);v(Rl.$$.fragment,rC),rC.forEach(t),sC.forEach(t),aB=p(Nk),Rm=a(Nk,"SPAN",{});var aC=i(Rm);iB=s(aC,"TFBertForTokenClassification"),aC.forEach(t),Nk.forEach(t),ab=p(o),et=a(o,"DIV",{class:!0});var ro=i(et);v(Ql.$$.fragment,ro),lB=p(ro),Qm=a(ro,"P",{});var iC=i(Qm);dB=s(iC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iC.forEach(t),cB=p(ro),Vl=a(ro,"P",{});var Ok=i(Vl);pB=s(Ok,"This model inherits from "),Np=a(Ok,"A",{href:!0});var lC=i(Np);hB=s(lC,"TFPreTrainedModel"),lC.forEach(t),fB=s(Ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok.forEach(t),mB=p(ro),Kl=a(ro,"P",{});var Ak=i(Kl);uB=s(Ak,"This model is also a "),Jl=a(Ak,"A",{href:!0,rel:!0});var dC=i(Jl);gB=s(dC,"tf.keras.Model"),dC.forEach(t),_B=s(Ak,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak.forEach(t),bB=p(ro),v(kr.$$.fragment,ro),kB=p(ro),kt=a(ro,"DIV",{class:!0});var Ao=i(kt);v(Gl.$$.fragment,Ao),TB=p(Ao),zn=a(Ao,"P",{});var gh=i(zn);yB=s(gh,"The "),Op=a(gh,"A",{href:!0});var cC=i(Op);vB=s(cC,"TFBertForTokenClassification"),cC.forEach(t),wB=s(gh," forward method, overrides the "),Vm=a(gh,"CODE",{});var pC=i(Vm);$B=s(pC,"__call__"),pC.forEach(t),FB=s(gh," special method."),gh.forEach(t),xB=p(Ao),v(Tr.$$.fragment,Ao),BB=p(Ao),v(yr.$$.fragment,Ao),MB=p(Ao),v(vr.$$.fragment,Ao),Ao.forEach(t),ro.forEach(t),ib=p(o),Pn=a(o,"H2",{class:!0});var Ik=i(Pn);wr=a(Ik,"A",{id:!0,class:!0,href:!0});var hC=i(wr);Km=a(hC,"SPAN",{});var fC=i(Km);v(Xl.$$.fragment,fC),fC.forEach(t),hC.forEach(t),EB=p(Ik),Jm=a(Ik,"SPAN",{});var mC=i(Jm);zB=s(mC,"TFBertForQuestionAnswering"),mC.forEach(t),Ik.forEach(t),lb=p(o),tt=a(o,"DIV",{class:!0});var ao=i(tt);v(Yl.$$.fragment,ao),PB=p(ao),qn=a(ao,"P",{});var _h=i(qn);qB=s(_h,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gm=a(_h,"CODE",{});var uC=i(Gm);jB=s(uC,"span start logits"),uC.forEach(t),CB=s(_h," and "),Xm=a(_h,"CODE",{});var gC=i(Xm);NB=s(gC,"span end logits"),gC.forEach(t),OB=s(_h,")."),_h.forEach(t),AB=p(ao),Zl=a(ao,"P",{});var Lk=i(Zl);IB=s(Lk,"This model inherits from "),Ap=a(Lk,"A",{href:!0});var _C=i(Ap);LB=s(_C,"TFPreTrainedModel"),_C.forEach(t),DB=s(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk.forEach(t),SB=p(ao),ed=a(ao,"P",{});var Dk=i(ed);UB=s(Dk,"This model is also a "),td=a(Dk,"A",{href:!0,rel:!0});var bC=i(td);WB=s(bC,"tf.keras.Model"),bC.forEach(t),HB=s(Dk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk.forEach(t),RB=p(ao),v($r.$$.fragment,ao),QB=p(ao),Tt=a(ao,"DIV",{class:!0});var Io=i(Tt);v(od.$$.fragment,Io),VB=p(Io),jn=a(Io,"P",{});var bh=i(jn);KB=s(bh,"The "),Ip=a(bh,"A",{href:!0});var kC=i(Ip);JB=s(kC,"TFBertForQuestionAnswering"),kC.forEach(t),GB=s(bh," forward method, overrides the "),Ym=a(bh,"CODE",{});var TC=i(Ym);XB=s(TC,"__call__"),TC.forEach(t),YB=s(bh," special method."),bh.forEach(t),ZB=p(Io),v(Fr.$$.fragment,Io),eM=p(Io),v(xr.$$.fragment,Io),tM=p(Io),v(Br.$$.fragment,Io),Io.forEach(t),ao.forEach(t),db=p(o),Cn=a(o,"H2",{class:!0});var Sk=i(Cn);Mr=a(Sk,"A",{id:!0,class:!0,href:!0});var yC=i(Mr);Zm=a(yC,"SPAN",{});var vC=i(Zm);v(nd.$$.fragment,vC),vC.forEach(t),yC.forEach(t),oM=p(Sk),eu=a(Sk,"SPAN",{});var wC=i(eu);nM=s(wC,"FlaxBertModel"),wC.forEach(t),Sk.forEach(t),cb=p(o),Ie=a(o,"DIV",{class:!0});var $t=i(Ie);v(sd.$$.fragment,$t),sM=p($t),tu=a($t,"P",{});var $C=i(tu);rM=s($C,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),$C.forEach(t),aM=p($t),rd=a($t,"P",{});var Uk=i(rd);iM=s(Uk,"This model inherits from "),Lp=a(Uk,"A",{href:!0});var FC=i(Lp);lM=s(FC,"FlaxPreTrainedModel"),FC.forEach(t),dM=s(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uk.forEach(t),cM=p($t),ad=a($t,"P",{});var Wk=i(ad);pM=s(Wk,"This model is also a Flax Linen "),id=a(Wk,"A",{href:!0,rel:!0});var xC=i(id);hM=s(xC,"flax.linen.Module"),xC.forEach(t),fM=s(Wk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wk.forEach(t),mM=p($t),ou=a($t,"P",{});var BC=i(ou);uM=s(BC,"Finally, this model supports inherent JAX features such as:"),BC.forEach(t),gM=p($t),co=a($t,"UL",{});var la=i(co);nu=a(la,"LI",{});var MC=i(nu);ld=a(MC,"A",{href:!0,rel:!0});var EC=i(ld);_M=s(EC,"Just-In-Time (JIT) compilation"),EC.forEach(t),MC.forEach(t),bM=p(la),su=a(la,"LI",{});var zC=i(su);dd=a(zC,"A",{href:!0,rel:!0});var PC=i(dd);kM=s(PC,"Automatic Differentiation"),PC.forEach(t),zC.forEach(t),TM=p(la),ru=a(la,"LI",{});var qC=i(ru);cd=a(qC,"A",{href:!0,rel:!0});var jC=i(cd);yM=s(jC,"Vectorization"),jC.forEach(t),qC.forEach(t),vM=p(la),au=a(la,"LI",{});var CC=i(au);pd=a(CC,"A",{href:!0,rel:!0});var NC=i(pd);wM=s(NC,"Parallelization"),NC.forEach(t),CC.forEach(t),la.forEach(t),$M=p($t),Rt=a($t,"DIV",{class:!0});var da=i(Rt);v(hd.$$.fragment,da),FM=p(da),Nn=a(da,"P",{});var kh=i(Nn);xM=s(kh,"The "),iu=a(kh,"CODE",{});var OC=i(iu);BM=s(OC,"FlaxBertPreTrainedModel"),OC.forEach(t),MM=s(kh," forward method, overrides the "),lu=a(kh,"CODE",{});var AC=i(lu);EM=s(AC,"__call__"),AC.forEach(t),zM=s(kh," special method."),kh.forEach(t),PM=p(da),v(Er.$$.fragment,da),qM=p(da),v(zr.$$.fragment,da),da.forEach(t),$t.forEach(t),pb=p(o),On=a(o,"H2",{class:!0});var Hk=i(On);Pr=a(Hk,"A",{id:!0,class:!0,href:!0});var IC=i(Pr);du=a(IC,"SPAN",{});var LC=i(du);v(fd.$$.fragment,LC),LC.forEach(t),IC.forEach(t),jM=p(Hk),cu=a(Hk,"SPAN",{});var DC=i(cu);CM=s(DC,"FlaxBertForPreTraining"),DC.forEach(t),Hk.forEach(t),hb=p(o),Le=a(o,"DIV",{class:!0});var Ft=i(Le);v(md.$$.fragment,Ft),NM=p(Ft),An=a(Ft,"P",{});var Th=i(An);OM=s(Th,"Bert Model with two heads on top as done during the pretraining: a "),pu=a(Th,"CODE",{});var SC=i(pu);AM=s(SC,"masked language modeling"),SC.forEach(t),IM=s(Th," head and a "),hu=a(Th,"CODE",{});var UC=i(hu);LM=s(UC,"next sentence prediction (classification)"),UC.forEach(t),DM=s(Th," head."),Th.forEach(t),SM=p(Ft),ud=a(Ft,"P",{});var Rk=i(ud);UM=s(Rk,"This model inherits from "),Dp=a(Rk,"A",{href:!0});var WC=i(Dp);WM=s(WC,"FlaxPreTrainedModel"),WC.forEach(t),HM=s(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rk.forEach(t),RM=p(Ft),gd=a(Ft,"P",{});var Qk=i(gd);QM=s(Qk,"This model is also a Flax Linen "),_d=a(Qk,"A",{href:!0,rel:!0});var HC=i(_d);VM=s(HC,"flax.linen.Module"),HC.forEach(t),KM=s(Qk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qk.forEach(t),JM=p(Ft),fu=a(Ft,"P",{});var RC=i(fu);GM=s(RC,"Finally, this model supports inherent JAX features such as:"),RC.forEach(t),XM=p(Ft),po=a(Ft,"UL",{});var ca=i(po);mu=a(ca,"LI",{});var QC=i(mu);bd=a(QC,"A",{href:!0,rel:!0});var VC=i(bd);YM=s(VC,"Just-In-Time (JIT) compilation"),VC.forEach(t),QC.forEach(t),ZM=p(ca),uu=a(ca,"LI",{});var KC=i(uu);kd=a(KC,"A",{href:!0,rel:!0});var JC=i(kd);eE=s(JC,"Automatic Differentiation"),JC.forEach(t),KC.forEach(t),tE=p(ca),gu=a(ca,"LI",{});var GC=i(gu);Td=a(GC,"A",{href:!0,rel:!0});var XC=i(Td);oE=s(XC,"Vectorization"),XC.forEach(t),GC.forEach(t),nE=p(ca),_u=a(ca,"LI",{});var YC=i(_u);yd=a(YC,"A",{href:!0,rel:!0});var ZC=i(yd);sE=s(ZC,"Parallelization"),ZC.forEach(t),YC.forEach(t),ca.forEach(t),rE=p(Ft),Qt=a(Ft,"DIV",{class:!0});var pa=i(Qt);v(vd.$$.fragment,pa),aE=p(pa),In=a(pa,"P",{});var yh=i(In);iE=s(yh,"The "),bu=a(yh,"CODE",{});var e5=i(bu);lE=s(e5,"FlaxBertPreTrainedModel"),e5.forEach(t),dE=s(yh," forward method, overrides the "),ku=a(yh,"CODE",{});var t5=i(ku);cE=s(t5,"__call__"),t5.forEach(t),pE=s(yh," special method."),yh.forEach(t),hE=p(pa),v(qr.$$.fragment,pa),fE=p(pa),v(jr.$$.fragment,pa),pa.forEach(t),Ft.forEach(t),fb=p(o),Ln=a(o,"H2",{class:!0});var Vk=i(Ln);Cr=a(Vk,"A",{id:!0,class:!0,href:!0});var o5=i(Cr);Tu=a(o5,"SPAN",{});var n5=i(Tu);v(wd.$$.fragment,n5),n5.forEach(t),o5.forEach(t),mE=p(Vk),yu=a(Vk,"SPAN",{});var s5=i(yu);uE=s(s5,"FlaxBertForMaskedLM"),s5.forEach(t),Vk.forEach(t),mb=p(o),De=a(o,"DIV",{class:!0});var xt=i(De);v($d.$$.fragment,xt),gE=p(xt),Fd=a(xt,"P",{});var Kk=i(Fd);_E=s(Kk,"Bert Model with a "),vu=a(Kk,"CODE",{});var r5=i(vu);bE=s(r5,"language modeling"),r5.forEach(t),kE=s(Kk," head on top."),Kk.forEach(t),TE=p(xt),xd=a(xt,"P",{});var Jk=i(xd);yE=s(Jk,"This model inherits from "),Sp=a(Jk,"A",{href:!0});var a5=i(Sp);vE=s(a5,"FlaxPreTrainedModel"),a5.forEach(t),wE=s(Jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jk.forEach(t),$E=p(xt),Bd=a(xt,"P",{});var Gk=i(Bd);FE=s(Gk,"This model is also a Flax Linen "),Md=a(Gk,"A",{href:!0,rel:!0});var i5=i(Md);xE=s(i5,"flax.linen.Module"),i5.forEach(t),BE=s(Gk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gk.forEach(t),ME=p(xt),wu=a(xt,"P",{});var l5=i(wu);EE=s(l5,"Finally, this model supports inherent JAX features such as:"),l5.forEach(t),zE=p(xt),ho=a(xt,"UL",{});var ha=i(ho);$u=a(ha,"LI",{});var d5=i($u);Ed=a(d5,"A",{href:!0,rel:!0});var c5=i(Ed);PE=s(c5,"Just-In-Time (JIT) compilation"),c5.forEach(t),d5.forEach(t),qE=p(ha),Fu=a(ha,"LI",{});var p5=i(Fu);zd=a(p5,"A",{href:!0,rel:!0});var h5=i(zd);jE=s(h5,"Automatic Differentiation"),h5.forEach(t),p5.forEach(t),CE=p(ha),xu=a(ha,"LI",{});var f5=i(xu);Pd=a(f5,"A",{href:!0,rel:!0});var m5=i(Pd);NE=s(m5,"Vectorization"),m5.forEach(t),f5.forEach(t),OE=p(ha),Bu=a(ha,"LI",{});var u5=i(Bu);qd=a(u5,"A",{href:!0,rel:!0});var g5=i(qd);AE=s(g5,"Parallelization"),g5.forEach(t),u5.forEach(t),ha.forEach(t),IE=p(xt),Vt=a(xt,"DIV",{class:!0});var fa=i(Vt);v(jd.$$.fragment,fa),LE=p(fa),Dn=a(fa,"P",{});var vh=i(Dn);DE=s(vh,"The "),Mu=a(vh,"CODE",{});var _5=i(Mu);SE=s(_5,"FlaxBertPreTrainedModel"),_5.forEach(t),UE=s(vh," forward method, overrides the "),Eu=a(vh,"CODE",{});var b5=i(Eu);WE=s(b5,"__call__"),b5.forEach(t),HE=s(vh," special method."),vh.forEach(t),RE=p(fa),v(Nr.$$.fragment,fa),QE=p(fa),v(Or.$$.fragment,fa),fa.forEach(t),xt.forEach(t),ub=p(o),Sn=a(o,"H2",{class:!0});var Xk=i(Sn);Ar=a(Xk,"A",{id:!0,class:!0,href:!0});var k5=i(Ar);zu=a(k5,"SPAN",{});var T5=i(zu);v(Cd.$$.fragment,T5),T5.forEach(t),k5.forEach(t),VE=p(Xk),Pu=a(Xk,"SPAN",{});var y5=i(Pu);KE=s(y5,"FlaxBertForNextSentencePrediction"),y5.forEach(t),Xk.forEach(t),gb=p(o),Se=a(o,"DIV",{class:!0});var Bt=i(Se);v(Nd.$$.fragment,Bt),JE=p(Bt),Od=a(Bt,"P",{});var Yk=i(Od);GE=s(Yk,"Bert Model with a "),qu=a(Yk,"CODE",{});var v5=i(qu);XE=s(v5,"next sentence prediction (classification)"),v5.forEach(t),YE=s(Yk," head on top."),Yk.forEach(t),ZE=p(Bt),Ad=a(Bt,"P",{});var Zk=i(Ad);ez=s(Zk,"This model inherits from "),Up=a(Zk,"A",{href:!0});var w5=i(Up);tz=s(w5,"FlaxPreTrainedModel"),w5.forEach(t),oz=s(Zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zk.forEach(t),nz=p(Bt),Id=a(Bt,"P",{});var eT=i(Id);sz=s(eT,"This model is also a Flax Linen "),Ld=a(eT,"A",{href:!0,rel:!0});var $5=i(Ld);rz=s($5,"flax.linen.Module"),$5.forEach(t),az=s(eT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eT.forEach(t),iz=p(Bt),ju=a(Bt,"P",{});var F5=i(ju);lz=s(F5,"Finally, this model supports inherent JAX features such as:"),F5.forEach(t),dz=p(Bt),fo=a(Bt,"UL",{});var ma=i(fo);Cu=a(ma,"LI",{});var x5=i(Cu);Dd=a(x5,"A",{href:!0,rel:!0});var B5=i(Dd);cz=s(B5,"Just-In-Time (JIT) compilation"),B5.forEach(t),x5.forEach(t),pz=p(ma),Nu=a(ma,"LI",{});var M5=i(Nu);Sd=a(M5,"A",{href:!0,rel:!0});var E5=i(Sd);hz=s(E5,"Automatic Differentiation"),E5.forEach(t),M5.forEach(t),fz=p(ma),Ou=a(ma,"LI",{});var z5=i(Ou);Ud=a(z5,"A",{href:!0,rel:!0});var P5=i(Ud);mz=s(P5,"Vectorization"),P5.forEach(t),z5.forEach(t),uz=p(ma),Au=a(ma,"LI",{});var q5=i(Au);Wd=a(q5,"A",{href:!0,rel:!0});var j5=i(Wd);gz=s(j5,"Parallelization"),j5.forEach(t),q5.forEach(t),ma.forEach(t),_z=p(Bt),Kt=a(Bt,"DIV",{class:!0});var ua=i(Kt);v(Hd.$$.fragment,ua),bz=p(ua),Un=a(ua,"P",{});var wh=i(Un);kz=s(wh,"The "),Iu=a(wh,"CODE",{});var C5=i(Iu);Tz=s(C5,"FlaxBertPreTrainedModel"),C5.forEach(t),yz=s(wh," forward method, overrides the "),Lu=a(wh,"CODE",{});var N5=i(Lu);vz=s(N5,"__call__"),N5.forEach(t),wz=s(wh," special method."),wh.forEach(t),$z=p(ua),v(Ir.$$.fragment,ua),Fz=p(ua),v(Lr.$$.fragment,ua),ua.forEach(t),Bt.forEach(t),_b=p(o),Wn=a(o,"H2",{class:!0});var tT=i(Wn);Dr=a(tT,"A",{id:!0,class:!0,href:!0});var O5=i(Dr);Du=a(O5,"SPAN",{});var A5=i(Du);v(Rd.$$.fragment,A5),A5.forEach(t),O5.forEach(t),xz=p(tT),Su=a(tT,"SPAN",{});var I5=i(Su);Bz=s(I5,"FlaxBertForSequenceClassification"),I5.forEach(t),tT.forEach(t),bb=p(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);v(Qd.$$.fragment,Mt),Mz=p(Mt),Uu=a(Mt,"P",{});var L5=i(Uu);Ez=s(L5,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),L5.forEach(t),zz=p(Mt),Vd=a(Mt,"P",{});var oT=i(Vd);Pz=s(oT,"This model inherits from "),Wp=a(oT,"A",{href:!0});var D5=i(Wp);qz=s(D5,"FlaxPreTrainedModel"),D5.forEach(t),jz=s(oT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oT.forEach(t),Cz=p(Mt),Kd=a(Mt,"P",{});var nT=i(Kd);Nz=s(nT,"This model is also a Flax Linen "),Jd=a(nT,"A",{href:!0,rel:!0});var S5=i(Jd);Oz=s(S5,"flax.linen.Module"),S5.forEach(t),Az=s(nT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nT.forEach(t),Iz=p(Mt),Wu=a(Mt,"P",{});var U5=i(Wu);Lz=s(U5,"Finally, this model supports inherent JAX features such as:"),U5.forEach(t),Dz=p(Mt),mo=a(Mt,"UL",{});var ga=i(mo);Hu=a(ga,"LI",{});var W5=i(Hu);Gd=a(W5,"A",{href:!0,rel:!0});var H5=i(Gd);Sz=s(H5,"Just-In-Time (JIT) compilation"),H5.forEach(t),W5.forEach(t),Uz=p(ga),Ru=a(ga,"LI",{});var R5=i(Ru);Xd=a(R5,"A",{href:!0,rel:!0});var Q5=i(Xd);Wz=s(Q5,"Automatic Differentiation"),Q5.forEach(t),R5.forEach(t),Hz=p(ga),Qu=a(ga,"LI",{});var V5=i(Qu);Yd=a(V5,"A",{href:!0,rel:!0});var K5=i(Yd);Rz=s(K5,"Vectorization"),K5.forEach(t),V5.forEach(t),Qz=p(ga),Vu=a(ga,"LI",{});var J5=i(Vu);Zd=a(J5,"A",{href:!0,rel:!0});var G5=i(Zd);Vz=s(G5,"Parallelization"),G5.forEach(t),J5.forEach(t),ga.forEach(t),Kz=p(Mt),Jt=a(Mt,"DIV",{class:!0});var _a=i(Jt);v(ec.$$.fragment,_a),Jz=p(_a),Hn=a(_a,"P",{});var $h=i(Hn);Gz=s($h,"The "),Ku=a($h,"CODE",{});var X5=i(Ku);Xz=s(X5,"FlaxBertPreTrainedModel"),X5.forEach(t),Yz=s($h," forward method, overrides the "),Ju=a($h,"CODE",{});var Y5=i(Ju);Zz=s(Y5,"__call__"),Y5.forEach(t),e4=s($h," special method."),$h.forEach(t),t4=p(_a),v(Sr.$$.fragment,_a),o4=p(_a),v(Ur.$$.fragment,_a),_a.forEach(t),Mt.forEach(t),kb=p(o),Rn=a(o,"H2",{class:!0});var sT=i(Rn);Wr=a(sT,"A",{id:!0,class:!0,href:!0});var Z5=i(Wr);Gu=a(Z5,"SPAN",{});var e6=i(Gu);v(tc.$$.fragment,e6),e6.forEach(t),Z5.forEach(t),n4=p(sT),Xu=a(sT,"SPAN",{});var t6=i(Xu);s4=s(t6,"FlaxBertForMultipleChoice"),t6.forEach(t),sT.forEach(t),Tb=p(o),We=a(o,"DIV",{class:!0});var Et=i(We);v(oc.$$.fragment,Et),r4=p(Et),Yu=a(Et,"P",{});var o6=i(Yu);a4=s(o6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),o6.forEach(t),i4=p(Et),nc=a(Et,"P",{});var rT=i(nc);l4=s(rT,"This model inherits from "),Hp=a(rT,"A",{href:!0});var n6=i(Hp);d4=s(n6,"FlaxPreTrainedModel"),n6.forEach(t),c4=s(rT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rT.forEach(t),p4=p(Et),sc=a(Et,"P",{});var aT=i(sc);h4=s(aT,"This model is also a Flax Linen "),rc=a(aT,"A",{href:!0,rel:!0});var s6=i(rc);f4=s(s6,"flax.linen.Module"),s6.forEach(t),m4=s(aT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),aT.forEach(t),u4=p(Et),Zu=a(Et,"P",{});var r6=i(Zu);g4=s(r6,"Finally, this model supports inherent JAX features such as:"),r6.forEach(t),_4=p(Et),uo=a(Et,"UL",{});var ba=i(uo);eg=a(ba,"LI",{});var a6=i(eg);ac=a(a6,"A",{href:!0,rel:!0});var i6=i(ac);b4=s(i6,"Just-In-Time (JIT) compilation"),i6.forEach(t),a6.forEach(t),k4=p(ba),tg=a(ba,"LI",{});var l6=i(tg);ic=a(l6,"A",{href:!0,rel:!0});var d6=i(ic);T4=s(d6,"Automatic Differentiation"),d6.forEach(t),l6.forEach(t),y4=p(ba),og=a(ba,"LI",{});var c6=i(og);lc=a(c6,"A",{href:!0,rel:!0});var p6=i(lc);v4=s(p6,"Vectorization"),p6.forEach(t),c6.forEach(t),w4=p(ba),ng=a(ba,"LI",{});var h6=i(ng);dc=a(h6,"A",{href:!0,rel:!0});var f6=i(dc);$4=s(f6,"Parallelization"),f6.forEach(t),h6.forEach(t),ba.forEach(t),F4=p(Et),Gt=a(Et,"DIV",{class:!0});var ka=i(Gt);v(cc.$$.fragment,ka),x4=p(ka),Qn=a(ka,"P",{});var Fh=i(Qn);B4=s(Fh,"The "),sg=a(Fh,"CODE",{});var m6=i(sg);M4=s(m6,"FlaxBertPreTrainedModel"),m6.forEach(t),E4=s(Fh," forward method, overrides the "),rg=a(Fh,"CODE",{});var u6=i(rg);z4=s(u6,"__call__"),u6.forEach(t),P4=s(Fh," special method."),Fh.forEach(t),q4=p(ka),v(Hr.$$.fragment,ka),j4=p(ka),v(Rr.$$.fragment,ka),ka.forEach(t),Et.forEach(t),yb=p(o),Vn=a(o,"H2",{class:!0});var iT=i(Vn);Qr=a(iT,"A",{id:!0,class:!0,href:!0});var g6=i(Qr);ag=a(g6,"SPAN",{});var _6=i(ag);v(pc.$$.fragment,_6),_6.forEach(t),g6.forEach(t),C4=p(iT),ig=a(iT,"SPAN",{});var b6=i(ig);N4=s(b6,"FlaxBertForTokenClassification"),b6.forEach(t),iT.forEach(t),vb=p(o),He=a(o,"DIV",{class:!0});var zt=i(He);v(hc.$$.fragment,zt),O4=p(zt),lg=a(zt,"P",{});var k6=i(lg);A4=s(k6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),k6.forEach(t),I4=p(zt),fc=a(zt,"P",{});var lT=i(fc);L4=s(lT,"This model inherits from "),Rp=a(lT,"A",{href:!0});var T6=i(Rp);D4=s(T6,"FlaxPreTrainedModel"),T6.forEach(t),S4=s(lT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lT.forEach(t),U4=p(zt),mc=a(zt,"P",{});var dT=i(mc);W4=s(dT,"This model is also a Flax Linen "),uc=a(dT,"A",{href:!0,rel:!0});var y6=i(uc);H4=s(y6,"flax.linen.Module"),y6.forEach(t),R4=s(dT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dT.forEach(t),Q4=p(zt),dg=a(zt,"P",{});var v6=i(dg);V4=s(v6,"Finally, this model supports inherent JAX features such as:"),v6.forEach(t),K4=p(zt),go=a(zt,"UL",{});var Ta=i(go);cg=a(Ta,"LI",{});var w6=i(cg);gc=a(w6,"A",{href:!0,rel:!0});var $6=i(gc);J4=s($6,"Just-In-Time (JIT) compilation"),$6.forEach(t),w6.forEach(t),G4=p(Ta),pg=a(Ta,"LI",{});var F6=i(pg);_c=a(F6,"A",{href:!0,rel:!0});var x6=i(_c);X4=s(x6,"Automatic Differentiation"),x6.forEach(t),F6.forEach(t),Y4=p(Ta),hg=a(Ta,"LI",{});var B6=i(hg);bc=a(B6,"A",{href:!0,rel:!0});var M6=i(bc);Z4=s(M6,"Vectorization"),M6.forEach(t),B6.forEach(t),eP=p(Ta),fg=a(Ta,"LI",{});var E6=i(fg);kc=a(E6,"A",{href:!0,rel:!0});var z6=i(kc);tP=s(z6,"Parallelization"),z6.forEach(t),E6.forEach(t),Ta.forEach(t),oP=p(zt),Xt=a(zt,"DIV",{class:!0});var ya=i(Xt);v(Tc.$$.fragment,ya),nP=p(ya),Kn=a(ya,"P",{});var xh=i(Kn);sP=s(xh,"The "),mg=a(xh,"CODE",{});var P6=i(mg);rP=s(P6,"FlaxBertPreTrainedModel"),P6.forEach(t),aP=s(xh," forward method, overrides the "),ug=a(xh,"CODE",{});var q6=i(ug);iP=s(q6,"__call__"),q6.forEach(t),lP=s(xh," special method."),xh.forEach(t),dP=p(ya),v(Vr.$$.fragment,ya),cP=p(ya),v(Kr.$$.fragment,ya),ya.forEach(t),zt.forEach(t),wb=p(o),Jn=a(o,"H2",{class:!0});var cT=i(Jn);Jr=a(cT,"A",{id:!0,class:!0,href:!0});var j6=i(Jr);gg=a(j6,"SPAN",{});var C6=i(gg);v(yc.$$.fragment,C6),C6.forEach(t),j6.forEach(t),pP=p(cT),_g=a(cT,"SPAN",{});var N6=i(_g);hP=s(N6,"FlaxBertForQuestionAnswering"),N6.forEach(t),cT.forEach(t),$b=p(o),Re=a(o,"DIV",{class:!0});var Pt=i(Re);v(vc.$$.fragment,Pt),fP=p(Pt),Gn=a(Pt,"P",{});var Bh=i(Gn);mP=s(Bh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=a(Bh,"CODE",{});var O6=i(bg);uP=s(O6,"span start logits"),O6.forEach(t),gP=s(Bh," and "),kg=a(Bh,"CODE",{});var A6=i(kg);_P=s(A6,"span end logits"),A6.forEach(t),bP=s(Bh,")."),Bh.forEach(t),kP=p(Pt),wc=a(Pt,"P",{});var pT=i(wc);TP=s(pT,"This model inherits from "),Qp=a(pT,"A",{href:!0});var I6=i(Qp);yP=s(I6,"FlaxPreTrainedModel"),I6.forEach(t),vP=s(pT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pT.forEach(t),wP=p(Pt),$c=a(Pt,"P",{});var hT=i($c);$P=s(hT,"This model is also a Flax Linen "),Fc=a(hT,"A",{href:!0,rel:!0});var L6=i(Fc);FP=s(L6,"flax.linen.Module"),L6.forEach(t),xP=s(hT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hT.forEach(t),BP=p(Pt),Tg=a(Pt,"P",{});var D6=i(Tg);MP=s(D6,"Finally, this model supports inherent JAX features such as:"),D6.forEach(t),EP=p(Pt),_o=a(Pt,"UL",{});var va=i(_o);yg=a(va,"LI",{});var S6=i(yg);xc=a(S6,"A",{href:!0,rel:!0});var U6=i(xc);zP=s(U6,"Just-In-Time (JIT) compilation"),U6.forEach(t),S6.forEach(t),PP=p(va),vg=a(va,"LI",{});var W6=i(vg);Bc=a(W6,"A",{href:!0,rel:!0});var H6=i(Bc);qP=s(H6,"Automatic Differentiation"),H6.forEach(t),W6.forEach(t),jP=p(va),wg=a(va,"LI",{});var R6=i(wg);Mc=a(R6,"A",{href:!0,rel:!0});var Q6=i(Mc);CP=s(Q6,"Vectorization"),Q6.forEach(t),R6.forEach(t),NP=p(va),$g=a(va,"LI",{});var V6=i($g);Ec=a(V6,"A",{href:!0,rel:!0});var K6=i(Ec);OP=s(K6,"Parallelization"),K6.forEach(t),V6.forEach(t),va.forEach(t),AP=p(Pt),Yt=a(Pt,"DIV",{class:!0});var wa=i(Yt);v(zc.$$.fragment,wa),IP=p(wa),Xn=a(wa,"P",{});var Mh=i(Xn);LP=s(Mh,"The "),Fg=a(Mh,"CODE",{});var J6=i(Fg);DP=s(J6,"FlaxBertPreTrainedModel"),J6.forEach(t),SP=s(Mh," forward method, overrides the "),xg=a(Mh,"CODE",{});var G6=i(xg);UP=s(G6,"__call__"),G6.forEach(t),WP=s(Mh," special method."),Mh.forEach(t),HP=p(wa),v(Gr.$$.fragment,wa),RP=p(wa),v(Xr.$$.fragment,wa),wa.forEach(t),Pt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(y8)),u(f,"id","bert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ne,"href","https://arxiv.org/abs/1810.04805"),u(ne,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u(we,"class","relative group"),u(Rc,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertModel"),u(Qc,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertModel"),u(Fa,"href","https://huggingface.co/bert-base-uncased"),u(Fa,"rel","nofollow"),u(Vc,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),u(Kc,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.BertTokenizer"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.BertTokenizer"),u(Do,"class","relative group"),u(Jc,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yc,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.BertTokenizerFast"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.BertTokenizerFast"),u(Uo,"class","relative group"),u(Zc,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ho,"class","relative group"),u(op,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForPreTraining"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(np,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForPreTraining"),u(cs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.BertModel"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.BertModel"),u(Vo,"class","relative group"),u(rp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ei,"rel","nofollow"),u(oi,"href","https://arxiv.org/abs/1706.03762"),u(oi,"rel","nofollow"),u(ap,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertModel"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.BertForPreTraining"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.BertForPreTraining"),u(Jo,"class","relative group"),u(ip,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(li,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(li,"rel","nofollow"),u(lp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForPreTraining"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertLMHeadModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertLMHeadModel"),u(Yo,"class","relative group"),u(dp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ui,"rel","nofollow"),u(cp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertLMHeadModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ts,"id","transformers.BertForMaskedLM"),u(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ts,"href","#transformers.BertForMaskedLM"),u(en,"class","relative group"),u(pp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vi,"rel","nofollow"),u(hp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForMaskedLM"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.BertForNextSentencePrediction"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.BertForNextSentencePrediction"),u(on,"class","relative group"),u(fp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(Ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ei,"rel","nofollow"),u(mp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.BertForSequenceClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.BertForSequenceClassification"),u(sn,"class","relative group"),u(up,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(gp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForMultipleChoice"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForMultipleChoice"),u(an,"class","relative group"),u(_p,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(Si,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Si,"rel","nofollow"),u(bp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.BertForTokenClassification"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.BertForTokenClassification"),u(dn,"class","relative group"),u(kp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(Vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vi,"rel","nofollow"),u(Tp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForTokenClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.BertForQuestionAnswering"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.BertForQuestionAnswering"),u(pn,"class","relative group"),u(yp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),u(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Zi,"rel","nofollow"),u(vp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.TFBertModel"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.TFBertModel"),u(mn,"class","relative group"),u(wp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(rl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(rl,"rel","nofollow"),u($p,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.TFBertForPreTraining"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.TFBertForPreTraining"),u(gn,"class","relative group"),u(Fp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(pl,"rel","nofollow"),u(xp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ys,"id","transformers.TFBertLMHeadModel"),u(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ys,"href","#transformers.TFBertLMHeadModel"),u(kn,"class","relative group"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForMaskedLM"),u(yn,"class","relative group"),u(Bp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u($l,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($l,"rel","nofollow"),u(Mp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.TFBertForNextSentencePrediction"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.TFBertForNextSentencePrediction"),u(wn,"class","relative group"),u(Ep,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pl,"rel","nofollow"),u(zp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFBertForSequenceClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFBertForSequenceClassification"),u(Fn,"class","relative group"),u(Pp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(qp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mr,"id","transformers.TFBertForMultipleChoice"),u(mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mr,"href","#transformers.TFBertForMultipleChoice"),u(Bn,"class","relative group"),u(jp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wl,"rel","nofollow"),u(Cp,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.TFBertForTokenClassification"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.TFBertForTokenClassification"),u(En,"class","relative group"),u(Np,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(Jl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Jl,"rel","nofollow"),u(Op,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wr,"id","transformers.TFBertForQuestionAnswering"),u(wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wr,"href","#transformers.TFBertForQuestionAnswering"),u(Pn,"class","relative group"),u(Ap,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),u(td,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(td,"rel","nofollow"),u(Ip,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxBertModel"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxBertModel"),u(Cn,"class","relative group"),u(Lp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(id,"rel","nofollow"),u(ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ld,"rel","nofollow"),u(dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(dd,"rel","nofollow"),u(cd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(cd,"rel","nofollow"),u(pd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(pd,"rel","nofollow"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxBertForPreTraining"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxBertForPreTraining"),u(On,"class","relative group"),u(Dp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(_d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(_d,"rel","nofollow"),u(bd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Td,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yd,"rel","nofollow"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertForMaskedLM"),u(Ln,"class","relative group"),u(Sp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForNextSentencePrediction"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Sn,"class","relative group"),u(Up,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ld,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ud,"rel","nofollow"),u(Wd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForSequenceClassification"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForSequenceClassification"),u(Wn,"class","relative group"),u(Wp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMultipleChoice"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMultipleChoice"),u(Rn,"class","relative group"),u(Hp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qr,"id","transformers.FlaxBertForTokenClassification"),u(Qr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qr,"href","#transformers.FlaxBertForTokenClassification"),u(Vn,"class","relative group"),u(Rp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForQuestionAnswering"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForQuestionAnswering"),u(Jn,"class","relative group"),u(Qp,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(xc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ec,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),_(o,g,k),_(o,h,k),e(h,f),e(f,b),w(l,b,null),e(h,m),e(h,M),e(M,be),_(o,X,k),_(o,z,k),e(z,ee),e(ee,L),w(oe,L,null),e(z,ke),e(z,D),e(D,Te),_(o,fe,k),_(o,J,k),e(J,O),e(J,ne),e(ne,Y),e(J,P),_(o,j,k),_(o,ie,k),e(ie,H),_(o,me,k),_(o,le,k),e(le,S),e(S,ye),_(o,ue,k),_(o,q,k),e(q,ce),e(ce,R),_(o,ge,k),_(o,de,k),e(de,Q),_(o,_e,k),_(o,te,k),e(te,N),e(N,ve),e(te,V),e(te,pe),e(pe,T),_(o,E,k),_(o,K,k),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),_(o,W,k),_(o,we,k),e(we,Fe),e(Fe,U),w(Ee,U,null),e(we,je),e(we,he),e(he,Ce),_(o,b_,k),_(o,qt,k),w($a,qt,null),e(qt,fT),e(qt,io),e(io,mT),e(io,Rc),e(Rc,uT),e(io,gT),e(io,Qc),e(Qc,_T),e(io,bT),e(io,Fa),e(Fa,kT),e(io,TT),e(qt,yT),e(qt,Lo),e(Lo,vT),e(Lo,Vc),e(Vc,wT),e(Lo,$T),e(Lo,Kc),e(Kc,FT),e(Lo,xT),e(qt,BT),w(ns,qt,null),_(o,k_,k),_(o,Do,k),e(Do,ss),e(ss,Eh),w(xa,Eh,null),e(Do,MT),e(Do,zh),e(zh,ET),_(o,T_,k),_(o,Ne,k),w(Ba,Ne,null),e(Ne,zT),e(Ne,Ph),e(Ph,PT),e(Ne,qT),e(Ne,Ma),e(Ma,jT),e(Ma,Jc),e(Jc,CT),e(Ma,NT),e(Ne,OT),e(Ne,yo),w(Ea,yo,null),e(yo,AT),e(yo,qh),e(qh,IT),e(yo,LT),e(yo,za),e(za,Gc),e(Gc,DT),e(Gc,jh),e(jh,ST),e(za,UT),e(za,Xc),e(Xc,WT),e(Xc,Ch),e(Ch,HT),e(Ne,RT),e(Ne,rs),w(Pa,rs,null),e(rs,QT),e(rs,qa),e(qa,VT),e(qa,Nh),e(Nh,KT),e(qa,JT),e(Ne,GT),e(Ne,Ct),w(ja,Ct,null),e(Ct,XT),e(Ct,Oh),e(Oh,YT),e(Ct,ZT),w(as,Ct,null),e(Ct,ey),e(Ct,So),e(So,ty),e(So,Ah),e(Ah,oy),e(So,ny),e(So,Ih),e(Ih,sy),e(So,ry),e(Ne,ay),e(Ne,Yc),w(Ca,Yc,null),_(o,y_,k),_(o,Uo,k),e(Uo,is),e(is,Lh),w(Na,Lh,null),e(Uo,iy),e(Uo,Dh),e(Dh,ly),_(o,v_,k),_(o,st,k),w(Oa,st,null),e(st,dy),e(st,Aa),e(Aa,cy),e(Aa,Sh),e(Sh,py),e(Aa,hy),e(st,fy),e(st,Ia),e(Ia,my),e(Ia,Zc),e(Zc,uy),e(Ia,gy),e(st,_y),e(st,vo),w(La,vo,null),e(vo,by),e(vo,Uh),e(Uh,ky),e(vo,Ty),e(vo,Da),e(Da,ep),e(ep,yy),e(ep,Wh),e(Wh,vy),e(Da,wy),e(Da,tp),e(tp,$y),e(tp,Hh),e(Hh,Fy),e(st,xy),e(st,Nt),w(Sa,Nt,null),e(Nt,By),e(Nt,Rh),e(Rh,My),e(Nt,Ey),w(ls,Nt,null),e(Nt,zy),e(Nt,Wo),e(Wo,Py),e(Wo,Qh),e(Qh,qy),e(Wo,jy),e(Wo,Vh),e(Vh,Cy),e(Wo,Ny),_(o,w_,k),_(o,Ho,k),e(Ho,ds),e(ds,Kh),w(Ua,Kh,null),e(Ho,Oy),e(Ho,Jh),e(Jh,Ay),_(o,$_,k),_(o,Ro,k),w(Wa,Ro,null),e(Ro,Iy),e(Ro,Ha),e(Ha,Ly),e(Ha,op),e(op,Dy),e(Ha,Sy),_(o,F_,k),_(o,Qo,k),w(Ra,Qo,null),e(Qo,Uy),e(Qo,Qa),e(Qa,Wy),e(Qa,np),e(np,Hy),e(Qa,Ry),_(o,x_,k),_(o,lo,k),w(Va,lo,null),e(lo,Qy),e(lo,Ka),e(Ka,Vy),e(Ka,sp),e(sp,Ky),e(Ka,Jy),e(lo,Gy),e(lo,cs),w(Ja,cs,null),e(cs,Xy),e(cs,Gh),e(Gh,Yy),_(o,B_,k),_(o,Vo,k),e(Vo,ps),e(ps,Xh),w(Ga,Xh,null),e(Vo,Zy),e(Vo,Yh),e(Yh,ev),_(o,M_,k),_(o,Oe,k),w(Xa,Oe,null),e(Oe,tv),e(Oe,Zh),e(Zh,ov),e(Oe,nv),e(Oe,Ya),e(Ya,sv),e(Ya,rp),e(rp,rv),e(Ya,av),e(Oe,iv),e(Oe,Za),e(Za,lv),e(Za,ei),e(ei,dv),e(Za,cv),e(Oe,pv),e(Oe,ti),e(ti,hv),e(ti,oi),e(oi,fv),e(ti,mv),e(Oe,uv),e(Oe,Ve),e(Ve,gv),e(Ve,ef),e(ef,_v),e(Ve,bv),e(Ve,tf),e(tf,kv),e(Ve,Tv),e(Ve,of),e(of,yv),e(Ve,vv),e(Ve,nf),e(nf,wv),e(Ve,$v),e(Ve,sf),e(sf,Fv),e(Ve,xv),e(Ve,rf),e(rf,Bv),e(Ve,Mv),e(Oe,Ev),e(Oe,Ot),w(ni,Ot,null),e(Ot,zv),e(Ot,Ko),e(Ko,Pv),e(Ko,ap),e(ap,qv),e(Ko,jv),e(Ko,af),e(af,Cv),e(Ko,Nv),e(Ot,Ov),w(hs,Ot,null),e(Ot,Av),w(fs,Ot,null),_(o,E_,k),_(o,Jo,k),e(Jo,ms),e(ms,lf),w(si,lf,null),e(Jo,Iv),e(Jo,df),e(df,Lv),_(o,z_,k),_(o,rt,k),w(ri,rt,null),e(rt,Dv),e(rt,Go),e(Go,Sv),e(Go,cf),e(cf,Uv),e(Go,Wv),e(Go,pf),e(pf,Hv),e(Go,Rv),e(rt,Qv),e(rt,ai),e(ai,Vv),e(ai,ip),e(ip,Kv),e(ai,Jv),e(rt,Gv),e(rt,ii),e(ii,Xv),e(ii,li),e(li,Yv),e(ii,Zv),e(rt,ew),e(rt,At),w(di,At,null),e(At,tw),e(At,Xo),e(Xo,ow),e(Xo,lp),e(lp,nw),e(Xo,sw),e(Xo,hf),e(hf,rw),e(Xo,aw),e(At,iw),w(us,At,null),e(At,lw),w(gs,At,null),_(o,P_,k),_(o,Yo,k),e(Yo,_s),e(_s,ff),w(ci,ff,null),e(Yo,dw),e(Yo,mf),e(mf,cw),_(o,q_,k),_(o,at,k),w(pi,at,null),e(at,pw),e(at,hi),e(hi,hw),e(hi,uf),e(uf,fw),e(hi,mw),e(at,uw),e(at,fi),e(fi,gw),e(fi,dp),e(dp,_w),e(fi,bw),e(at,kw),e(at,mi),e(mi,Tw),e(mi,ui),e(ui,yw),e(mi,vw),e(at,ww),e(at,It),w(gi,It,null),e(It,$w),e(It,Zo),e(Zo,Fw),e(Zo,cp),e(cp,xw),e(Zo,Bw),e(Zo,gf),e(gf,Mw),e(Zo,Ew),e(It,zw),w(bs,It,null),e(It,Pw),w(ks,It,null),_(o,j_,k),_(o,en,k),e(en,Ts),e(Ts,_f),w(_i,_f,null),e(en,qw),e(en,bf),e(bf,jw),_(o,C_,k),_(o,it,k),w(bi,it,null),e(it,Cw),e(it,ki),e(ki,Nw),e(ki,kf),e(kf,Ow),e(ki,Aw),e(it,Iw),e(it,Ti),e(Ti,Lw),e(Ti,pp),e(pp,Dw),e(Ti,Sw),e(it,Uw),e(it,yi),e(yi,Ww),e(yi,vi),e(vi,Hw),e(yi,Rw),e(it,Qw),e(it,ft),w(wi,ft,null),e(ft,Vw),e(ft,tn),e(tn,Kw),e(tn,hp),e(hp,Jw),e(tn,Gw),e(tn,Tf),e(Tf,Xw),e(tn,Yw),e(ft,Zw),w(ys,ft,null),e(ft,e1),w(vs,ft,null),e(ft,t1),w(ws,ft,null),_(o,N_,k),_(o,on,k),e(on,$s),e($s,yf),w($i,yf,null),e(on,o1),e(on,vf),e(vf,n1),_(o,O_,k),_(o,lt,k),w(Fi,lt,null),e(lt,s1),e(lt,xi),e(xi,r1),e(xi,wf),e(wf,a1),e(xi,i1),e(lt,l1),e(lt,Bi),e(Bi,d1),e(Bi,fp),e(fp,c1),e(Bi,p1),e(lt,h1),e(lt,Mi),e(Mi,f1),e(Mi,Ei),e(Ei,m1),e(Mi,u1),e(lt,g1),e(lt,Lt),w(zi,Lt,null),e(Lt,_1),e(Lt,nn),e(nn,b1),e(nn,mp),e(mp,k1),e(nn,T1),e(nn,$f),e($f,y1),e(nn,v1),e(Lt,w1),w(Fs,Lt,null),e(Lt,$1),w(xs,Lt,null),_(o,A_,k),_(o,sn,k),e(sn,Bs),e(Bs,Ff),w(Pi,Ff,null),e(sn,F1),e(sn,xf),e(xf,x1),_(o,I_,k),_(o,dt,k),w(qi,dt,null),e(dt,B1),e(dt,Bf),e(Bf,M1),e(dt,E1),e(dt,ji),e(ji,z1),e(ji,up),e(up,P1),e(ji,q1),e(dt,j1),e(dt,Ci),e(Ci,C1),e(Ci,Ni),e(Ni,N1),e(Ci,O1),e(dt,A1),e(dt,Qe),w(Oi,Qe,null),e(Qe,I1),e(Qe,rn),e(rn,L1),e(rn,gp),e(gp,D1),e(rn,S1),e(rn,Mf),e(Mf,U1),e(rn,W1),e(Qe,H1),w(Ms,Qe,null),e(Qe,R1),w(Es,Qe,null),e(Qe,Q1),w(zs,Qe,null),e(Qe,V1),w(Ps,Qe,null),e(Qe,K1),w(qs,Qe,null),_(o,L_,k),_(o,an,k),e(an,js),e(js,Ef),w(Ai,Ef,null),e(an,J1),e(an,zf),e(zf,G1),_(o,D_,k),_(o,ct,k),w(Ii,ct,null),e(ct,X1),e(ct,Pf),e(Pf,Y1),e(ct,Z1),e(ct,Li),e(Li,e$),e(Li,_p),e(_p,t$),e(Li,o$),e(ct,n$),e(ct,Di),e(Di,s$),e(Di,Si),e(Si,r$),e(Di,a$),e(ct,i$),e(ct,Dt),w(Ui,Dt,null),e(Dt,l$),e(Dt,ln),e(ln,d$),e(ln,bp),e(bp,c$),e(ln,p$),e(ln,qf),e(qf,h$),e(ln,f$),e(Dt,m$),w(Cs,Dt,null),e(Dt,u$),w(Ns,Dt,null),_(o,S_,k),_(o,dn,k),e(dn,Os),e(Os,jf),w(Wi,jf,null),e(dn,g$),e(dn,Cf),e(Cf,_$),_(o,U_,k),_(o,pt,k),w(Hi,pt,null),e(pt,b$),e(pt,Nf),e(Nf,k$),e(pt,T$),e(pt,Ri),e(Ri,y$),e(Ri,kp),e(kp,v$),e(Ri,w$),e(pt,$$),e(pt,Qi),e(Qi,F$),e(Qi,Vi),e(Vi,x$),e(Qi,B$),e(pt,M$),e(pt,mt),w(Ki,mt,null),e(mt,E$),e(mt,cn),e(cn,z$),e(cn,Tp),e(Tp,P$),e(cn,q$),e(cn,Of),e(Of,j$),e(cn,C$),e(mt,N$),w(As,mt,null),e(mt,O$),w(Is,mt,null),e(mt,A$),w(Ls,mt,null),_(o,W_,k),_(o,pn,k),e(pn,Ds),e(Ds,Af),w(Ji,Af,null),e(pn,I$),e(pn,If),e(If,L$),_(o,H_,k),_(o,ht,k),w(Gi,ht,null),e(ht,D$),e(ht,hn),e(hn,S$),e(hn,Lf),e(Lf,U$),e(hn,W$),e(hn,Df),e(Df,H$),e(hn,R$),e(ht,Q$),e(ht,Xi),e(Xi,V$),e(Xi,yp),e(yp,K$),e(Xi,J$),e(ht,G$),e(ht,Yi),e(Yi,X$),e(Yi,Zi),e(Zi,Y$),e(Yi,Z$),e(ht,eF),e(ht,ut),w(el,ut,null),e(ut,tF),e(ut,fn),e(fn,oF),e(fn,vp),e(vp,nF),e(fn,sF),e(fn,Sf),e(Sf,rF),e(fn,aF),e(ut,iF),w(Ss,ut,null),e(ut,lF),w(Us,ut,null),e(ut,dF),w(Ws,ut,null),_(o,R_,k),_(o,mn,k),e(mn,Hs),e(Hs,Uf),w(tl,Uf,null),e(mn,cF),e(mn,Wf),e(Wf,pF),_(o,Q_,k),_(o,Ke,k),w(ol,Ke,null),e(Ke,hF),e(Ke,Hf),e(Hf,fF),e(Ke,mF),e(Ke,nl),e(nl,uF),e(nl,wp),e(wp,gF),e(nl,_F),e(Ke,bF),e(Ke,sl),e(sl,kF),e(sl,rl),e(rl,TF),e(sl,yF),e(Ke,vF),w(Rs,Ke,null),e(Ke,wF),e(Ke,St),w(al,St,null),e(St,$F),e(St,un),e(un,FF),e(un,$p),e($p,xF),e(un,BF),e(un,Rf),e(Rf,MF),e(un,EF),e(St,zF),w(Qs,St,null),e(St,PF),w(Vs,St,null),_(o,V_,k),_(o,gn,k),e(gn,Ks),e(Ks,Qf),w(il,Qf,null),e(gn,qF),e(gn,Vf),e(Vf,jF),_(o,K_,k),_(o,Je,k),w(ll,Je,null),e(Je,CF),e(Je,_n),e(_n,NF),e(_n,Kf),e(Kf,OF),e(_n,AF),e(_n,Jf),e(Jf,IF),e(_n,LF),e(Je,DF),e(Je,dl),e(dl,SF),e(dl,Fp),e(Fp,UF),e(dl,WF),e(Je,HF),e(Je,cl),e(cl,RF),e(cl,pl),e(pl,QF),e(cl,VF),e(Je,KF),w(Js,Je,null),e(Je,JF),e(Je,Ut),w(hl,Ut,null),e(Ut,GF),e(Ut,bn),e(bn,XF),e(bn,xp),e(xp,YF),e(bn,ZF),e(bn,Gf),e(Gf,e2),e(bn,t2),e(Ut,o2),w(Gs,Ut,null),e(Ut,n2),w(Xs,Ut,null),_(o,J_,k),_(o,kn,k),e(kn,Ys),e(Ys,Xf),w(fl,Xf,null),e(kn,s2),e(kn,Yf),e(Yf,r2),_(o,G_,k),_(o,Tn,k),w(ml,Tn,null),e(Tn,a2),e(Tn,gt),w(ul,gt,null),e(gt,i2),e(gt,Ae),e(Ae,l2),e(Ae,Zf),e(Zf,d2),e(Ae,c2),e(Ae,em),e(em,p2),e(Ae,h2),e(Ae,tm),e(tm,f2),e(Ae,m2),e(Ae,om),e(om,u2),e(Ae,g2),e(Ae,nm),e(nm,_2),e(Ae,b2),e(Ae,sm),e(sm,k2),e(Ae,T2),e(Ae,rm),e(rm,y2),e(Ae,v2),e(gt,w2),e(gt,gl),e(gl,_l),e(_l,$2),e(_l,am),e(am,F2),e(_l,x2),e(gl,B2),e(gl,bl),e(bl,M2),e(bl,im),e(im,E2),e(bl,z2),e(gt,P2),e(gt,G),e(G,q2),e(G,lm),e(lm,j2),e(G,C2),e(G,dm),e(dm,N2),e(G,O2),e(G,cm),e(cm,A2),e(G,I2),e(G,pm),e(pm,L2),e(G,D2),e(G,hm),e(hm,S2),e(G,U2),e(G,fm),e(fm,W2),e(G,H2),e(G,mm),e(mm,R2),e(G,Q2),e(G,um),e(um,V2),e(G,K2),e(G,gm),e(gm,J2),e(G,G2),e(G,_m),e(_m,X2),e(G,Y2),e(G,bm),e(bm,Z2),e(G,ex),e(G,km),e(km,tx),e(G,ox),e(G,Tm),e(Tm,nx),e(G,sx),e(G,ym),e(ym,rx),e(G,ax),e(G,vm),e(vm,ix),e(G,lx),e(G,wm),e(wm,dx),e(G,cx),e(G,$m),e($m,px),e(G,hx),e(G,Fm),e(Fm,fx),e(G,mx),e(G,xm),e(xm,ux),e(G,gx),e(G,Bm),e(Bm,_x),e(G,bx),e(gt,kx),w(Zs,gt,null),_(o,X_,k),_(o,yn,k),e(yn,er),e(er,Mm),w(kl,Mm,null),e(yn,Tx),e(yn,Em),e(Em,yx),_(o,Y_,k),_(o,Ge,k),w(Tl,Ge,null),e(Ge,vx),e(Ge,yl),e(yl,wx),e(yl,zm),e(zm,$x),e(yl,Fx),e(Ge,xx),e(Ge,vl),e(vl,Bx),e(vl,Bp),e(Bp,Mx),e(vl,Ex),e(Ge,zx),e(Ge,wl),e(wl,Px),e(wl,$l),e($l,qx),e(wl,jx),e(Ge,Cx),w(tr,Ge,null),e(Ge,Nx),e(Ge,_t),w(Fl,_t,null),e(_t,Ox),e(_t,vn),e(vn,Ax),e(vn,Mp),e(Mp,Ix),e(vn,Lx),e(vn,Pm),e(Pm,Dx),e(vn,Sx),e(_t,Ux),w(or,_t,null),e(_t,Wx),w(nr,_t,null),e(_t,Hx),w(sr,_t,null),_(o,Z_,k),_(o,wn,k),e(wn,rr),e(rr,qm),w(xl,qm,null),e(wn,Rx),e(wn,jm),e(jm,Qx),_(o,eb,k),_(o,Xe,k),w(Bl,Xe,null),e(Xe,Vx),e(Xe,Ml),e(Ml,Kx),e(Ml,Cm),e(Cm,Jx),e(Ml,Gx),e(Xe,Xx),e(Xe,El),e(El,Yx),e(El,Ep),e(Ep,Zx),e(El,e0),e(Xe,t0),e(Xe,zl),e(zl,o0),e(zl,Pl),e(Pl,n0),e(zl,s0),e(Xe,r0),w(ar,Xe,null),e(Xe,a0),e(Xe,Wt),w(ql,Wt,null),e(Wt,i0),e(Wt,$n),e($n,l0),e($n,zp),e(zp,d0),e($n,c0),e($n,Nm),e(Nm,p0),e($n,h0),e(Wt,f0),w(ir,Wt,null),e(Wt,m0),w(lr,Wt,null),_(o,tb,k),_(o,Fn,k),e(Fn,dr),e(dr,Om),w(jl,Om,null),e(Fn,u0),e(Fn,Am),e(Am,g0),_(o,ob,k),_(o,Ye,k),w(Cl,Ye,null),e(Ye,_0),e(Ye,Im),e(Im,b0),e(Ye,k0),e(Ye,Nl),e(Nl,T0),e(Nl,Pp),e(Pp,y0),e(Nl,v0),e(Ye,w0),e(Ye,Ol),e(Ol,$0),e(Ol,Al),e(Al,F0),e(Ol,x0),e(Ye,B0),w(cr,Ye,null),e(Ye,M0),e(Ye,bt),w(Il,bt,null),e(bt,E0),e(bt,xn),e(xn,z0),e(xn,qp),e(qp,P0),e(xn,q0),e(xn,Lm),e(Lm,j0),e(xn,C0),e(bt,N0),w(pr,bt,null),e(bt,O0),w(hr,bt,null),e(bt,A0),w(fr,bt,null),_(o,nb,k),_(o,Bn,k),e(Bn,mr),e(mr,Dm),w(Ll,Dm,null),e(Bn,I0),e(Bn,Sm),e(Sm,L0),_(o,sb,k),_(o,Ze,k),w(Dl,Ze,null),e(Ze,D0),e(Ze,Um),e(Um,S0),e(Ze,U0),e(Ze,Sl),e(Sl,W0),e(Sl,jp),e(jp,H0),e(Sl,R0),e(Ze,Q0),e(Ze,Ul),e(Ul,V0),e(Ul,Wl),e(Wl,K0),e(Ul,J0),e(Ze,G0),w(ur,Ze,null),e(Ze,X0),e(Ze,Ht),w(Hl,Ht,null),e(Ht,Y0),e(Ht,Mn),e(Mn,Z0),e(Mn,Cp),e(Cp,eB),e(Mn,tB),e(Mn,Wm),e(Wm,oB),e(Mn,nB),e(Ht,sB),w(gr,Ht,null),e(Ht,rB),w(_r,Ht,null),_(o,rb,k),_(o,En,k),e(En,br),e(br,Hm),w(Rl,Hm,null),e(En,aB),e(En,Rm),e(Rm,iB),_(o,ab,k),_(o,et,k),w(Ql,et,null),e(et,lB),e(et,Qm),e(Qm,dB),e(et,cB),e(et,Vl),e(Vl,pB),e(Vl,Np),e(Np,hB),e(Vl,fB),e(et,mB),e(et,Kl),e(Kl,uB),e(Kl,Jl),e(Jl,gB),e(Kl,_B),e(et,bB),w(kr,et,null),e(et,kB),e(et,kt),w(Gl,kt,null),e(kt,TB),e(kt,zn),e(zn,yB),e(zn,Op),e(Op,vB),e(zn,wB),e(zn,Vm),e(Vm,$B),e(zn,FB),e(kt,xB),w(Tr,kt,null),e(kt,BB),w(yr,kt,null),e(kt,MB),w(vr,kt,null),_(o,ib,k),_(o,Pn,k),e(Pn,wr),e(wr,Km),w(Xl,Km,null),e(Pn,EB),e(Pn,Jm),e(Jm,zB),_(o,lb,k),_(o,tt,k),w(Yl,tt,null),e(tt,PB),e(tt,qn),e(qn,qB),e(qn,Gm),e(Gm,jB),e(qn,CB),e(qn,Xm),e(Xm,NB),e(qn,OB),e(tt,AB),e(tt,Zl),e(Zl,IB),e(Zl,Ap),e(Ap,LB),e(Zl,DB),e(tt,SB),e(tt,ed),e(ed,UB),e(ed,td),e(td,WB),e(ed,HB),e(tt,RB),w($r,tt,null),e(tt,QB),e(tt,Tt),w(od,Tt,null),e(Tt,VB),e(Tt,jn),e(jn,KB),e(jn,Ip),e(Ip,JB),e(jn,GB),e(jn,Ym),e(Ym,XB),e(jn,YB),e(Tt,ZB),w(Fr,Tt,null),e(Tt,eM),w(xr,Tt,null),e(Tt,tM),w(Br,Tt,null),_(o,db,k),_(o,Cn,k),e(Cn,Mr),e(Mr,Zm),w(nd,Zm,null),e(Cn,oM),e(Cn,eu),e(eu,nM),_(o,cb,k),_(o,Ie,k),w(sd,Ie,null),e(Ie,sM),e(Ie,tu),e(tu,rM),e(Ie,aM),e(Ie,rd),e(rd,iM),e(rd,Lp),e(Lp,lM),e(rd,dM),e(Ie,cM),e(Ie,ad),e(ad,pM),e(ad,id),e(id,hM),e(ad,fM),e(Ie,mM),e(Ie,ou),e(ou,uM),e(Ie,gM),e(Ie,co),e(co,nu),e(nu,ld),e(ld,_M),e(co,bM),e(co,su),e(su,dd),e(dd,kM),e(co,TM),e(co,ru),e(ru,cd),e(cd,yM),e(co,vM),e(co,au),e(au,pd),e(pd,wM),e(Ie,$M),e(Ie,Rt),w(hd,Rt,null),e(Rt,FM),e(Rt,Nn),e(Nn,xM),e(Nn,iu),e(iu,BM),e(Nn,MM),e(Nn,lu),e(lu,EM),e(Nn,zM),e(Rt,PM),w(Er,Rt,null),e(Rt,qM),w(zr,Rt,null),_(o,pb,k),_(o,On,k),e(On,Pr),e(Pr,du),w(fd,du,null),e(On,jM),e(On,cu),e(cu,CM),_(o,hb,k),_(o,Le,k),w(md,Le,null),e(Le,NM),e(Le,An),e(An,OM),e(An,pu),e(pu,AM),e(An,IM),e(An,hu),e(hu,LM),e(An,DM),e(Le,SM),e(Le,ud),e(ud,UM),e(ud,Dp),e(Dp,WM),e(ud,HM),e(Le,RM),e(Le,gd),e(gd,QM),e(gd,_d),e(_d,VM),e(gd,KM),e(Le,JM),e(Le,fu),e(fu,GM),e(Le,XM),e(Le,po),e(po,mu),e(mu,bd),e(bd,YM),e(po,ZM),e(po,uu),e(uu,kd),e(kd,eE),e(po,tE),e(po,gu),e(gu,Td),e(Td,oE),e(po,nE),e(po,_u),e(_u,yd),e(yd,sE),e(Le,rE),e(Le,Qt),w(vd,Qt,null),e(Qt,aE),e(Qt,In),e(In,iE),e(In,bu),e(bu,lE),e(In,dE),e(In,ku),e(ku,cE),e(In,pE),e(Qt,hE),w(qr,Qt,null),e(Qt,fE),w(jr,Qt,null),_(o,fb,k),_(o,Ln,k),e(Ln,Cr),e(Cr,Tu),w(wd,Tu,null),e(Ln,mE),e(Ln,yu),e(yu,uE),_(o,mb,k),_(o,De,k),w($d,De,null),e(De,gE),e(De,Fd),e(Fd,_E),e(Fd,vu),e(vu,bE),e(Fd,kE),e(De,TE),e(De,xd),e(xd,yE),e(xd,Sp),e(Sp,vE),e(xd,wE),e(De,$E),e(De,Bd),e(Bd,FE),e(Bd,Md),e(Md,xE),e(Bd,BE),e(De,ME),e(De,wu),e(wu,EE),e(De,zE),e(De,ho),e(ho,$u),e($u,Ed),e(Ed,PE),e(ho,qE),e(ho,Fu),e(Fu,zd),e(zd,jE),e(ho,CE),e(ho,xu),e(xu,Pd),e(Pd,NE),e(ho,OE),e(ho,Bu),e(Bu,qd),e(qd,AE),e(De,IE),e(De,Vt),w(jd,Vt,null),e(Vt,LE),e(Vt,Dn),e(Dn,DE),e(Dn,Mu),e(Mu,SE),e(Dn,UE),e(Dn,Eu),e(Eu,WE),e(Dn,HE),e(Vt,RE),w(Nr,Vt,null),e(Vt,QE),w(Or,Vt,null),_(o,ub,k),_(o,Sn,k),e(Sn,Ar),e(Ar,zu),w(Cd,zu,null),e(Sn,VE),e(Sn,Pu),e(Pu,KE),_(o,gb,k),_(o,Se,k),w(Nd,Se,null),e(Se,JE),e(Se,Od),e(Od,GE),e(Od,qu),e(qu,XE),e(Od,YE),e(Se,ZE),e(Se,Ad),e(Ad,ez),e(Ad,Up),e(Up,tz),e(Ad,oz),e(Se,nz),e(Se,Id),e(Id,sz),e(Id,Ld),e(Ld,rz),e(Id,az),e(Se,iz),e(Se,ju),e(ju,lz),e(Se,dz),e(Se,fo),e(fo,Cu),e(Cu,Dd),e(Dd,cz),e(fo,pz),e(fo,Nu),e(Nu,Sd),e(Sd,hz),e(fo,fz),e(fo,Ou),e(Ou,Ud),e(Ud,mz),e(fo,uz),e(fo,Au),e(Au,Wd),e(Wd,gz),e(Se,_z),e(Se,Kt),w(Hd,Kt,null),e(Kt,bz),e(Kt,Un),e(Un,kz),e(Un,Iu),e(Iu,Tz),e(Un,yz),e(Un,Lu),e(Lu,vz),e(Un,wz),e(Kt,$z),w(Ir,Kt,null),e(Kt,Fz),w(Lr,Kt,null),_(o,_b,k),_(o,Wn,k),e(Wn,Dr),e(Dr,Du),w(Rd,Du,null),e(Wn,xz),e(Wn,Su),e(Su,Bz),_(o,bb,k),_(o,Ue,k),w(Qd,Ue,null),e(Ue,Mz),e(Ue,Uu),e(Uu,Ez),e(Ue,zz),e(Ue,Vd),e(Vd,Pz),e(Vd,Wp),e(Wp,qz),e(Vd,jz),e(Ue,Cz),e(Ue,Kd),e(Kd,Nz),e(Kd,Jd),e(Jd,Oz),e(Kd,Az),e(Ue,Iz),e(Ue,Wu),e(Wu,Lz),e(Ue,Dz),e(Ue,mo),e(mo,Hu),e(Hu,Gd),e(Gd,Sz),e(mo,Uz),e(mo,Ru),e(Ru,Xd),e(Xd,Wz),e(mo,Hz),e(mo,Qu),e(Qu,Yd),e(Yd,Rz),e(mo,Qz),e(mo,Vu),e(Vu,Zd),e(Zd,Vz),e(Ue,Kz),e(Ue,Jt),w(ec,Jt,null),e(Jt,Jz),e(Jt,Hn),e(Hn,Gz),e(Hn,Ku),e(Ku,Xz),e(Hn,Yz),e(Hn,Ju),e(Ju,Zz),e(Hn,e4),e(Jt,t4),w(Sr,Jt,null),e(Jt,o4),w(Ur,Jt,null),_(o,kb,k),_(o,Rn,k),e(Rn,Wr),e(Wr,Gu),w(tc,Gu,null),e(Rn,n4),e(Rn,Xu),e(Xu,s4),_(o,Tb,k),_(o,We,k),w(oc,We,null),e(We,r4),e(We,Yu),e(Yu,a4),e(We,i4),e(We,nc),e(nc,l4),e(nc,Hp),e(Hp,d4),e(nc,c4),e(We,p4),e(We,sc),e(sc,h4),e(sc,rc),e(rc,f4),e(sc,m4),e(We,u4),e(We,Zu),e(Zu,g4),e(We,_4),e(We,uo),e(uo,eg),e(eg,ac),e(ac,b4),e(uo,k4),e(uo,tg),e(tg,ic),e(ic,T4),e(uo,y4),e(uo,og),e(og,lc),e(lc,v4),e(uo,w4),e(uo,ng),e(ng,dc),e(dc,$4),e(We,F4),e(We,Gt),w(cc,Gt,null),e(Gt,x4),e(Gt,Qn),e(Qn,B4),e(Qn,sg),e(sg,M4),e(Qn,E4),e(Qn,rg),e(rg,z4),e(Qn,P4),e(Gt,q4),w(Hr,Gt,null),e(Gt,j4),w(Rr,Gt,null),_(o,yb,k),_(o,Vn,k),e(Vn,Qr),e(Qr,ag),w(pc,ag,null),e(Vn,C4),e(Vn,ig),e(ig,N4),_(o,vb,k),_(o,He,k),w(hc,He,null),e(He,O4),e(He,lg),e(lg,A4),e(He,I4),e(He,fc),e(fc,L4),e(fc,Rp),e(Rp,D4),e(fc,S4),e(He,U4),e(He,mc),e(mc,W4),e(mc,uc),e(uc,H4),e(mc,R4),e(He,Q4),e(He,dg),e(dg,V4),e(He,K4),e(He,go),e(go,cg),e(cg,gc),e(gc,J4),e(go,G4),e(go,pg),e(pg,_c),e(_c,X4),e(go,Y4),e(go,hg),e(hg,bc),e(bc,Z4),e(go,eP),e(go,fg),e(fg,kc),e(kc,tP),e(He,oP),e(He,Xt),w(Tc,Xt,null),e(Xt,nP),e(Xt,Kn),e(Kn,sP),e(Kn,mg),e(mg,rP),e(Kn,aP),e(Kn,ug),e(ug,iP),e(Kn,lP),e(Xt,dP),w(Vr,Xt,null),e(Xt,cP),w(Kr,Xt,null),_(o,wb,k),_(o,Jn,k),e(Jn,Jr),e(Jr,gg),w(yc,gg,null),e(Jn,pP),e(Jn,_g),e(_g,hP),_(o,$b,k),_(o,Re,k),w(vc,Re,null),e(Re,fP),e(Re,Gn),e(Gn,mP),e(Gn,bg),e(bg,uP),e(Gn,gP),e(Gn,kg),e(kg,_P),e(Gn,bP),e(Re,kP),e(Re,wc),e(wc,TP),e(wc,Qp),e(Qp,yP),e(wc,vP),e(Re,wP),e(Re,$c),e($c,$P),e($c,Fc),e(Fc,FP),e($c,xP),e(Re,BP),e(Re,Tg),e(Tg,MP),e(Re,EP),e(Re,_o),e(_o,yg),e(yg,xc),e(xc,zP),e(_o,PP),e(_o,vg),e(vg,Bc),e(Bc,qP),e(_o,jP),e(_o,wg),e(wg,Mc),e(Mc,CP),e(_o,NP),e(_o,$g),e($g,Ec),e(Ec,OP),e(Re,AP),e(Re,Yt),w(zc,Yt,null),e(Yt,IP),e(Yt,Xn),e(Xn,LP),e(Xn,Fg),e(Fg,DP),e(Xn,SP),e(Xn,xg),e(xg,UP),e(Xn,WP),e(Yt,HP),w(Gr,Yt,null),e(Yt,RP),w(Xr,Yt,null),Fb=!0},p(o,[k]){const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:o}),ns.$set(Pc);const Bg={};k&2&&(Bg.$$scope={dirty:k,ctx:o}),as.$set(Bg);const Mg={};k&2&&(Mg.$$scope={dirty:k,ctx:o}),ls.$set(Mg);const Eg={};k&2&&(Eg.$$scope={dirty:k,ctx:o}),hs.$set(Eg);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:o}),fs.$set(qc);const zg={};k&2&&(zg.$$scope={dirty:k,ctx:o}),us.$set(zg);const Pg={};k&2&&(Pg.$$scope={dirty:k,ctx:o}),gs.$set(Pg);const qg={};k&2&&(qg.$$scope={dirty:k,ctx:o}),bs.$set(qg);const jc={};k&2&&(jc.$$scope={dirty:k,ctx:o}),ks.$set(jc);const jg={};k&2&&(jg.$$scope={dirty:k,ctx:o}),ys.$set(jg);const Cg={};k&2&&(Cg.$$scope={dirty:k,ctx:o}),vs.$set(Cg);const Ng={};k&2&&(Ng.$$scope={dirty:k,ctx:o}),ws.$set(Ng);const Og={};k&2&&(Og.$$scope={dirty:k,ctx:o}),Fs.$set(Og);const Ag={};k&2&&(Ag.$$scope={dirty:k,ctx:o}),xs.$set(Ag);const Ig={};k&2&&(Ig.$$scope={dirty:k,ctx:o}),Ms.$set(Ig);const Lg={};k&2&&(Lg.$$scope={dirty:k,ctx:o}),Es.$set(Lg);const Cc={};k&2&&(Cc.$$scope={dirty:k,ctx:o}),zs.$set(Cc);const Dg={};k&2&&(Dg.$$scope={dirty:k,ctx:o}),Ps.$set(Dg);const Sg={};k&2&&(Sg.$$scope={dirty:k,ctx:o}),qs.$set(Sg);const Yn={};k&2&&(Yn.$$scope={dirty:k,ctx:o}),Cs.$set(Yn);const Ug={};k&2&&(Ug.$$scope={dirty:k,ctx:o}),Ns.$set(Ug);const Wg={};k&2&&(Wg.$$scope={dirty:k,ctx:o}),As.$set(Wg);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:o}),Is.$set(Nc);const Hg={};k&2&&(Hg.$$scope={dirty:k,ctx:o}),Ls.$set(Hg);const Rg={};k&2&&(Rg.$$scope={dirty:k,ctx:o}),Ss.$set(Rg);const Qg={};k&2&&(Qg.$$scope={dirty:k,ctx:o}),Us.$set(Qg);const bo={};k&2&&(bo.$$scope={dirty:k,ctx:o}),Ws.$set(bo);const ko={};k&2&&(ko.$$scope={dirty:k,ctx:o}),Rs.$set(ko);const Vg={};k&2&&(Vg.$$scope={dirty:k,ctx:o}),Qs.$set(Vg);const Kg={};k&2&&(Kg.$$scope={dirty:k,ctx:o}),Vs.$set(Kg);const Jg={};k&2&&(Jg.$$scope={dirty:k,ctx:o}),Js.$set(Jg);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Gs.$set(Zn);const Gg={};k&2&&(Gg.$$scope={dirty:k,ctx:o}),Xs.$set(Gg);const Xg={};k&2&&(Xg.$$scope={dirty:k,ctx:o}),Zs.$set(Xg);const Oc={};k&2&&(Oc.$$scope={dirty:k,ctx:o}),tr.$set(Oc);const Yg={};k&2&&(Yg.$$scope={dirty:k,ctx:o}),or.$set(Yg);const Zg={};k&2&&(Zg.$$scope={dirty:k,ctx:o}),nr.$set(Zg);const e_={};k&2&&(e_.$$scope={dirty:k,ctx:o}),sr.$set(e_);const ot={};k&2&&(ot.$$scope={dirty:k,ctx:o}),ar.$set(ot);const t_={};k&2&&(t_.$$scope={dirty:k,ctx:o}),ir.$set(t_);const Ac={};k&2&&(Ac.$$scope={dirty:k,ctx:o}),lr.$set(Ac);const o_={};k&2&&(o_.$$scope={dirty:k,ctx:o}),cr.$set(o_);const es={};k&2&&(es.$$scope={dirty:k,ctx:o}),pr.$set(es);const n_={};k&2&&(n_.$$scope={dirty:k,ctx:o}),hr.$set(n_);const Ic={};k&2&&(Ic.$$scope={dirty:k,ctx:o}),fr.$set(Ic);const Vp={};k&2&&(Vp.$$scope={dirty:k,ctx:o}),ur.$set(Vp);const s_={};k&2&&(s_.$$scope={dirty:k,ctx:o}),gr.$set(s_);const Kp={};k&2&&(Kp.$$scope={dirty:k,ctx:o}),_r.$set(Kp);const r_={};k&2&&(r_.$$scope={dirty:k,ctx:o}),kr.$set(r_);const Lc={};k&2&&(Lc.$$scope={dirty:k,ctx:o}),Tr.$set(Lc);const Dc={};k&2&&(Dc.$$scope={dirty:k,ctx:o}),yr.$set(Dc);const a_={};k&2&&(a_.$$scope={dirty:k,ctx:o}),vr.$set(a_);const To={};k&2&&(To.$$scope={dirty:k,ctx:o}),$r.$set(To);const i_={};k&2&&(i_.$$scope={dirty:k,ctx:o}),Fr.$set(i_);const ts={};k&2&&(ts.$$scope={dirty:k,ctx:o}),xr.$set(ts);const l_={};k&2&&(l_.$$scope={dirty:k,ctx:o}),Br.$set(l_);const d_={};k&2&&(d_.$$scope={dirty:k,ctx:o}),Er.$set(d_);const c_={};k&2&&(c_.$$scope={dirty:k,ctx:o}),zr.$set(c_);const Sc={};k&2&&(Sc.$$scope={dirty:k,ctx:o}),qr.$set(Sc);const p_={};k&2&&(p_.$$scope={dirty:k,ctx:o}),jr.$set(p_);const h_={};k&2&&(h_.$$scope={dirty:k,ctx:o}),Nr.$set(h_);const f_={};k&2&&(f_.$$scope={dirty:k,ctx:o}),Or.$set(f_);const jt={};k&2&&(jt.$$scope={dirty:k,ctx:o}),Ir.$set(jt);const Uc={};k&2&&(Uc.$$scope={dirty:k,ctx:o}),Lr.$set(Uc);const m_={};k&2&&(m_.$$scope={dirty:k,ctx:o}),Sr.$set(m_);const Wc={};k&2&&(Wc.$$scope={dirty:k,ctx:o}),Ur.$set(Wc);const u_={};k&2&&(u_.$$scope={dirty:k,ctx:o}),Hr.$set(u_);const os={};k&2&&(os.$$scope={dirty:k,ctx:o}),Rr.$set(os);const g_={};k&2&&(g_.$$scope={dirty:k,ctx:o}),Vr.$set(g_);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:o}),Kr.$set(Hc);const Jp={};k&2&&(Jp.$$scope={dirty:k,ctx:o}),Gr.$set(Jp);const __={};k&2&&(__.$$scope={dirty:k,ctx:o}),Xr.$set(__)},i(o){Fb||($(l.$$.fragment,o),$(oe.$$.fragment,o),$(Ee.$$.fragment,o),$($a.$$.fragment,o),$(ns.$$.fragment,o),$(xa.$$.fragment,o),$(Ba.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(ja.$$.fragment,o),$(as.$$.fragment,o),$(Ca.$$.fragment,o),$(Na.$$.fragment,o),$(Oa.$$.fragment,o),$(La.$$.fragment,o),$(Sa.$$.fragment,o),$(ls.$$.fragment,o),$(Ua.$$.fragment,o),$(Wa.$$.fragment,o),$(Ra.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(ni.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(si.$$.fragment,o),$(ri.$$.fragment,o),$(di.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(gi.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(ys.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$($i.$$.fragment,o),$(Fi.$$.fragment,o),$(zi.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(zs.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ai.$$.fragment,o),$(Ii.$$.fragment,o),$(Ui.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Wi.$$.fragment,o),$(Hi.$$.fragment,o),$(Ki.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ls.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(el.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(tl.$$.fragment,o),$(ol.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(fl.$$.fragment,o),$(ml.$$.fragment,o),$(ul.$$.fragment,o),$(Zs.$$.fragment,o),$(kl.$$.fragment,o),$(Tl.$$.fragment,o),$(tr.$$.fragment,o),$(Fl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(xl.$$.fragment,o),$(Bl.$$.fragment,o),$(ar.$$.fragment,o),$(ql.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(Cl.$$.fragment,o),$(cr.$$.fragment,o),$(Il.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(fr.$$.fragment,o),$(Ll.$$.fragment,o),$(Dl.$$.fragment,o),$(ur.$$.fragment,o),$(Hl.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(Rl.$$.fragment,o),$(Ql.$$.fragment,o),$(kr.$$.fragment,o),$(Gl.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(vr.$$.fragment,o),$(Xl.$$.fragment,o),$(Yl.$$.fragment,o),$($r.$$.fragment,o),$(od.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$(Br.$$.fragment,o),$(nd.$$.fragment,o),$(sd.$$.fragment,o),$(hd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(fd.$$.fragment,o),$(md.$$.fragment,o),$(vd.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(wd.$$.fragment,o),$($d.$$.fragment,o),$(jd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Hd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Rd.$$.fragment,o),$(Qd.$$.fragment,o),$(ec.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(cc.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(pc.$$.fragment,o),$(hc.$$.fragment,o),$(Tc.$$.fragment,o),$(Vr.$$.fragment,o),$(Kr.$$.fragment,o),$(yc.$$.fragment,o),$(vc.$$.fragment,o),$(zc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),Fb=!0)},o(o){F(l.$$.fragment,o),F(oe.$$.fragment,o),F(Ee.$$.fragment,o),F($a.$$.fragment,o),F(ns.$$.fragment,o),F(xa.$$.fragment,o),F(Ba.$$.fragment,o),F(Ea.$$.fragment,o),F(Pa.$$.fragment,o),F(ja.$$.fragment,o),F(as.$$.fragment,o),F(Ca.$$.fragment,o),F(Na.$$.fragment,o),F(Oa.$$.fragment,o),F(La.$$.fragment,o),F(Sa.$$.fragment,o),F(ls.$$.fragment,o),F(Ua.$$.fragment,o),F(Wa.$$.fragment,o),F(Ra.$$.fragment,o),F(Va.$$.fragment,o),F(Ja.$$.fragment,o),F(Ga.$$.fragment,o),F(Xa.$$.fragment,o),F(ni.$$.fragment,o),F(hs.$$.fragment,o),F(fs.$$.fragment,o),F(si.$$.fragment,o),F(ri.$$.fragment,o),F(di.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(ci.$$.fragment,o),F(pi.$$.fragment,o),F(gi.$$.fragment,o),F(bs.$$.fragment,o),F(ks.$$.fragment,o),F(_i.$$.fragment,o),F(bi.$$.fragment,o),F(wi.$$.fragment,o),F(ys.$$.fragment,o),F(vs.$$.fragment,o),F(ws.$$.fragment,o),F($i.$$.fragment,o),F(Fi.$$.fragment,o),F(zi.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(Pi.$$.fragment,o),F(qi.$$.fragment,o),F(Oi.$$.fragment,o),F(Ms.$$.fragment,o),F(Es.$$.fragment,o),F(zs.$$.fragment,o),F(Ps.$$.fragment,o),F(qs.$$.fragment,o),F(Ai.$$.fragment,o),F(Ii.$$.fragment,o),F(Ui.$$.fragment,o),F(Cs.$$.fragment,o),F(Ns.$$.fragment,o),F(Wi.$$.fragment,o),F(Hi.$$.fragment,o),F(Ki.$$.fragment,o),F(As.$$.fragment,o),F(Is.$$.fragment,o),F(Ls.$$.fragment,o),F(Ji.$$.fragment,o),F(Gi.$$.fragment,o),F(el.$$.fragment,o),F(Ss.$$.fragment,o),F(Us.$$.fragment,o),F(Ws.$$.fragment,o),F(tl.$$.fragment,o),F(ol.$$.fragment,o),F(Rs.$$.fragment,o),F(al.$$.fragment,o),F(Qs.$$.fragment,o),F(Vs.$$.fragment,o),F(il.$$.fragment,o),F(ll.$$.fragment,o),F(Js.$$.fragment,o),F(hl.$$.fragment,o),F(Gs.$$.fragment,o),F(Xs.$$.fragment,o),F(fl.$$.fragment,o),F(ml.$$.fragment,o),F(ul.$$.fragment,o),F(Zs.$$.fragment,o),F(kl.$$.fragment,o),F(Tl.$$.fragment,o),F(tr.$$.fragment,o),F(Fl.$$.fragment,o),F(or.$$.fragment,o),F(nr.$$.fragment,o),F(sr.$$.fragment,o),F(xl.$$.fragment,o),F(Bl.$$.fragment,o),F(ar.$$.fragment,o),F(ql.$$.fragment,o),F(ir.$$.fragment,o),F(lr.$$.fragment,o),F(jl.$$.fragment,o),F(Cl.$$.fragment,o),F(cr.$$.fragment,o),F(Il.$$.fragment,o),F(pr.$$.fragment,o),F(hr.$$.fragment,o),F(fr.$$.fragment,o),F(Ll.$$.fragment,o),F(Dl.$$.fragment,o),F(ur.$$.fragment,o),F(Hl.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(Rl.$$.fragment,o),F(Ql.$$.fragment,o),F(kr.$$.fragment,o),F(Gl.$$.fragment,o),F(Tr.$$.fragment,o),F(yr.$$.fragment,o),F(vr.$$.fragment,o),F(Xl.$$.fragment,o),F(Yl.$$.fragment,o),F($r.$$.fragment,o),F(od.$$.fragment,o),F(Fr.$$.fragment,o),F(xr.$$.fragment,o),F(Br.$$.fragment,o),F(nd.$$.fragment,o),F(sd.$$.fragment,o),F(hd.$$.fragment,o),F(Er.$$.fragment,o),F(zr.$$.fragment,o),F(fd.$$.fragment,o),F(md.$$.fragment,o),F(vd.$$.fragment,o),F(qr.$$.fragment,o),F(jr.$$.fragment,o),F(wd.$$.fragment,o),F($d.$$.fragment,o),F(jd.$$.fragment,o),F(Nr.$$.fragment,o),F(Or.$$.fragment,o),F(Cd.$$.fragment,o),F(Nd.$$.fragment,o),F(Hd.$$.fragment,o),F(Ir.$$.fragment,o),F(Lr.$$.fragment,o),F(Rd.$$.fragment,o),F(Qd.$$.fragment,o),F(ec.$$.fragment,o),F(Sr.$$.fragment,o),F(Ur.$$.fragment,o),F(tc.$$.fragment,o),F(oc.$$.fragment,o),F(cc.$$.fragment,o),F(Hr.$$.fragment,o),F(Rr.$$.fragment,o),F(pc.$$.fragment,o),F(hc.$$.fragment,o),F(Tc.$$.fragment,o),F(Vr.$$.fragment,o),F(Kr.$$.fragment,o),F(yc.$$.fragment,o),F(vc.$$.fragment,o),F(zc.$$.fragment,o),F(Gr.$$.fragment,o),F(Xr.$$.fragment,o),Fb=!1},d(o){t(d),o&&t(g),o&&t(h),x(l),o&&t(X),o&&t(z),x(oe),o&&t(fe),o&&t(J),o&&t(j),o&&t(ie),o&&t(me),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t(we),x(Ee),o&&t(b_),o&&t(qt),x($a),x(ns),o&&t(k_),o&&t(Do),x(xa),o&&t(T_),o&&t(Ne),x(Ba),x(Ea),x(Pa),x(ja),x(as),x(Ca),o&&t(y_),o&&t(Uo),x(Na),o&&t(v_),o&&t(st),x(Oa),x(La),x(Sa),x(ls),o&&t(w_),o&&t(Ho),x(Ua),o&&t($_),o&&t(Ro),x(Wa),o&&t(F_),o&&t(Qo),x(Ra),o&&t(x_),o&&t(lo),x(Va),x(Ja),o&&t(B_),o&&t(Vo),x(Ga),o&&t(M_),o&&t(Oe),x(Xa),x(ni),x(hs),x(fs),o&&t(E_),o&&t(Jo),x(si),o&&t(z_),o&&t(rt),x(ri),x(di),x(us),x(gs),o&&t(P_),o&&t(Yo),x(ci),o&&t(q_),o&&t(at),x(pi),x(gi),x(bs),x(ks),o&&t(j_),o&&t(en),x(_i),o&&t(C_),o&&t(it),x(bi),x(wi),x(ys),x(vs),x(ws),o&&t(N_),o&&t(on),x($i),o&&t(O_),o&&t(lt),x(Fi),x(zi),x(Fs),x(xs),o&&t(A_),o&&t(sn),x(Pi),o&&t(I_),o&&t(dt),x(qi),x(Oi),x(Ms),x(Es),x(zs),x(Ps),x(qs),o&&t(L_),o&&t(an),x(Ai),o&&t(D_),o&&t(ct),x(Ii),x(Ui),x(Cs),x(Ns),o&&t(S_),o&&t(dn),x(Wi),o&&t(U_),o&&t(pt),x(Hi),x(Ki),x(As),x(Is),x(Ls),o&&t(W_),o&&t(pn),x(Ji),o&&t(H_),o&&t(ht),x(Gi),x(el),x(Ss),x(Us),x(Ws),o&&t(R_),o&&t(mn),x(tl),o&&t(Q_),o&&t(Ke),x(ol),x(Rs),x(al),x(Qs),x(Vs),o&&t(V_),o&&t(gn),x(il),o&&t(K_),o&&t(Je),x(ll),x(Js),x(hl),x(Gs),x(Xs),o&&t(J_),o&&t(kn),x(fl),o&&t(G_),o&&t(Tn),x(ml),x(ul),x(Zs),o&&t(X_),o&&t(yn),x(kl),o&&t(Y_),o&&t(Ge),x(Tl),x(tr),x(Fl),x(or),x(nr),x(sr),o&&t(Z_),o&&t(wn),x(xl),o&&t(eb),o&&t(Xe),x(Bl),x(ar),x(ql),x(ir),x(lr),o&&t(tb),o&&t(Fn),x(jl),o&&t(ob),o&&t(Ye),x(Cl),x(cr),x(Il),x(pr),x(hr),x(fr),o&&t(nb),o&&t(Bn),x(Ll),o&&t(sb),o&&t(Ze),x(Dl),x(ur),x(Hl),x(gr),x(_r),o&&t(rb),o&&t(En),x(Rl),o&&t(ab),o&&t(et),x(Ql),x(kr),x(Gl),x(Tr),x(yr),x(vr),o&&t(ib),o&&t(Pn),x(Xl),o&&t(lb),o&&t(tt),x(Yl),x($r),x(od),x(Fr),x(xr),x(Br),o&&t(db),o&&t(Cn),x(nd),o&&t(cb),o&&t(Ie),x(sd),x(hd),x(Er),x(zr),o&&t(pb),o&&t(On),x(fd),o&&t(hb),o&&t(Le),x(md),x(vd),x(qr),x(jr),o&&t(fb),o&&t(Ln),x(wd),o&&t(mb),o&&t(De),x($d),x(jd),x(Nr),x(Or),o&&t(ub),o&&t(Sn),x(Cd),o&&t(gb),o&&t(Se),x(Nd),x(Hd),x(Ir),x(Lr),o&&t(_b),o&&t(Wn),x(Rd),o&&t(bb),o&&t(Ue),x(Qd),x(ec),x(Sr),x(Ur),o&&t(kb),o&&t(Rn),x(tc),o&&t(Tb),o&&t(We),x(oc),x(cc),x(Hr),x(Rr),o&&t(yb),o&&t(Vn),x(pc),o&&t(vb),o&&t(He),x(hc),x(Tc),x(Vr),x(Kr),o&&t(wb),o&&t(Jn),x(yc),o&&t($b),o&&t(Re),x(vc),x(zc),x(Gr),x(Xr)}}}const y8={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function v8(B){return tN(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class E8 extends X6{constructor(d){super();Y6(this,d,v8,T8,Z6,{})}}export{E8 as default,y8 as metadata};
