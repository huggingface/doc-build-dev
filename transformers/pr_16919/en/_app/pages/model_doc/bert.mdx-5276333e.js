import{S as XC,i as YC,s as ZC,e as r,k as c,w as y,t as n,M as e5,c as a,d as t,m as p,a as i,x as v,h as s,b as u,F as e,g as _,y as w,q as $,o as F,B as x,v as t5,L as re}from"../../chunks/vendor-6b77c823.js";import{T as $e}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function o5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function n5(B){let d,g;return d=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function s5(B){let d,g;return d=new ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function r5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function a5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function i5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function l5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function d5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function c5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertLMHeadModel, BertConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function p5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function h5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function f5(B){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function m5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function u5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function g5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function _5(B){let d,g,h,f,b;return f=new ae({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of single-label classification:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function b5(B){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function k5(B){let d,g,h,f,b;return f=new ae({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example of multi-label classification:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function T5(B){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function y5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function v5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function w5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function $5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function F5(B){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function x5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function B5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function M5(B){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function E5(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function z5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function P5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function q5(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function j5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function C5(B){let d,g,h,f,b;return f=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),g=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function N5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function O5(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function A5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function I5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function L5(B){let d,g;return d=new ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function D5(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function S5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function U5(B){let d,g,h,f,b;return f=new ae({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),g=n("Examples:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Examples:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function W5(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function H5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function R5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function Q5(B){let d,g;return d=new ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function V5(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function K5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function J5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function G5(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function X5(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function Y5(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function Z5(B){let d,g;return d=new ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function eN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),h=c(),f=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),M=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ee=n("This second option is useful when using "),L=r("code"),oe=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),fe=n("."),J=c(),O=r("p"),ne=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),me=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),h=p(T),f=a(T,"UL",{});var K=i(f);b=a(K,"LI",{});var ze=i(b);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),m=p(K),M=a(K,"LI",{});var Be=i(M);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),z=a(T,"P",{});var A=i(z);ee=s(A,"This second option is useful when using "),L=a(A,"CODE",{});var Pe=i(L);oe=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Me=i(D);Te=s(Me,"model(inputs)"),Me.forEach(t),fe=s(A,"."),A.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ne=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var I=i(P);j=a(I,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var we=i(H);me=s(we,"input_ids"),we.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);ye=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(I),q=a(I,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Ee=i(R);ge=s(Ee,"model([input_ids, attention_mask])"),Ee.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),te=p(I),N=a(I,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),I.forEach(t)},m(T,E){_(T,d,E),e(d,g),_(T,h,E),_(T,f,E),e(f,b),e(b,l),e(f,m),e(f,M),e(M,be),_(T,X,E),_(T,z,E),e(z,ee),e(z,L),e(L,oe),e(z,ke),e(z,D),e(D,Te),e(z,fe),_(T,J,E),_(T,O,E),e(O,ne),_(T,Y,E),_(T,P,E),e(P,j),e(j,ie),e(j,H),e(H,me),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,te),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(h),T&&t(f),T&&t(X),T&&t(z),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function tN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function oN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function nN(B){let d,g;return d=new ae({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(h){v(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:re,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){F(d.$$.fragment,h),g=!1},d(h){x(d,h)}}}function sN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function rN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function aN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function iN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function lN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function dN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function cN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function pN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function hN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function fN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function mN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function uN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function gN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function _N(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function bN(B){let d,g,h,f,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),f=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var M=i(h);f=s(M,"Module"),M.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,b)},d(l){l&&t(d)}}}function kN(B){let d,g,h,f,b;return f=new ae({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),g=n("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=i(d);g=s(m,"Example:"),m.forEach(t),h=p(l),v(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),b=!0},p:re,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){F(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(f,l)}}}function TN(B){let d,g,h,f,b,l,m,M,be,X,z,ee,L,oe,ke,D,Te,fe,J,O,ne,Y,P,j,ie,H,me,le,S,ye,ue,q,ce,R,ge,de,Q,_e,te,N,ve,V,pe,T,E,K,ze,Be,A,Pe,Me,qe,I,W,we,Fe,U,Ee,je,he,Ce,b_,qt,$a,f1,io,m1,Rc,u1,g1,Qc,_1,b1,Fa,k1,T1,y1,Lo,v1,Vc,w1,$1,Kc,F1,x1,B1,ns,k_,Do,ss,Eh,xa,M1,zh,E1,T_,Ne,Ba,z1,Ph,P1,q1,Ma,j1,Jc,C1,N1,O1,yo,Ea,A1,qh,I1,L1,za,Gc,D1,jh,S1,U1,Xc,W1,Ch,H1,R1,rs,Pa,Q1,qa,V1,Nh,K1,J1,G1,Ct,ja,X1,Oh,Y1,Z1,as,eT,So,tT,Ah,oT,nT,Ih,sT,rT,aT,Yc,Ca,y_,Uo,is,Lh,Na,iT,Dh,lT,v_,st,Oa,dT,Aa,cT,Sh,pT,hT,fT,Ia,mT,Zc,uT,gT,_T,vo,La,bT,Uh,kT,TT,Da,ep,yT,Wh,vT,wT,tp,$T,Hh,FT,xT,Nt,Sa,BT,Rh,MT,ET,ls,zT,Wo,PT,Qh,qT,jT,Vh,CT,NT,w_,Ho,ds,Kh,Ua,OT,Jh,AT,$_,Ro,Wa,IT,Ha,LT,op,DT,ST,F_,Qo,Ra,UT,Qa,WT,np,HT,RT,x_,lo,Va,QT,Ka,VT,sp,KT,JT,GT,cs,Ja,XT,Gh,YT,B_,Vo,ps,Xh,Ga,ZT,Yh,ey,M_,Oe,Xa,ty,Zh,oy,ny,Ya,sy,rp,ry,ay,iy,Za,ly,ei,dy,cy,py,ti,hy,oi,fy,my,uy,Ve,gy,ef,_y,by,tf,ky,Ty,of,yy,vy,nf,wy,$y,sf,Fy,xy,rf,By,My,Ey,Ot,ni,zy,Ko,Py,ap,qy,jy,af,Cy,Ny,Oy,hs,Ay,fs,E_,Jo,ms,lf,si,Iy,df,Ly,z_,rt,ri,Dy,Go,Sy,cf,Uy,Wy,pf,Hy,Ry,Qy,ai,Vy,ip,Ky,Jy,Gy,ii,Xy,li,Yy,Zy,ev,At,di,tv,Xo,ov,lp,nv,sv,hf,rv,av,iv,us,lv,gs,P_,Yo,_s,ff,ci,dv,mf,cv,q_,at,pi,pv,hi,hv,uf,fv,mv,uv,fi,gv,dp,_v,bv,kv,mi,Tv,ui,yv,vv,wv,It,gi,$v,Zo,Fv,cp,xv,Bv,gf,Mv,Ev,zv,bs,Pv,ks,j_,en,Ts,_f,_i,qv,bf,jv,C_,it,bi,Cv,ki,Nv,kf,Ov,Av,Iv,Ti,Lv,pp,Dv,Sv,Uv,yi,Wv,vi,Hv,Rv,Qv,ft,wi,Vv,tn,Kv,hp,Jv,Gv,Tf,Xv,Yv,Zv,ys,ew,vs,tw,ws,N_,on,$s,yf,$i,ow,vf,nw,O_,lt,Fi,sw,xi,rw,wf,aw,iw,lw,Bi,dw,fp,cw,pw,hw,Mi,fw,Ei,mw,uw,gw,Lt,zi,_w,nn,bw,mp,kw,Tw,$f,yw,vw,ww,Fs,$w,xs,A_,sn,Bs,Ff,Pi,Fw,xf,xw,I_,dt,qi,Bw,Bf,Mw,Ew,ji,zw,up,Pw,qw,jw,Ci,Cw,Ni,Nw,Ow,Aw,Qe,Oi,Iw,rn,Lw,gp,Dw,Sw,Mf,Uw,Ww,Hw,Ms,Rw,Es,Qw,zs,Vw,Ps,Kw,qs,L_,an,js,Ef,Ai,Jw,zf,Gw,D_,ct,Ii,Xw,Pf,Yw,Zw,Li,e$,_p,t$,o$,n$,Di,s$,Si,r$,a$,i$,Dt,Ui,l$,ln,d$,bp,c$,p$,qf,h$,f$,m$,Cs,u$,Ns,S_,dn,Os,jf,Wi,g$,Cf,_$,U_,pt,Hi,b$,Nf,k$,T$,Ri,y$,kp,v$,w$,$$,Qi,F$,Vi,x$,B$,M$,mt,Ki,E$,cn,z$,Tp,P$,q$,Of,j$,C$,N$,As,O$,Is,A$,Ls,W_,pn,Ds,Af,Ji,I$,If,L$,H_,ht,Gi,D$,hn,S$,Lf,U$,W$,Df,H$,R$,Q$,Xi,V$,yp,K$,J$,G$,Yi,X$,Zi,Y$,Z$,eF,ut,el,tF,fn,oF,vp,nF,sF,Sf,rF,aF,iF,Ss,lF,Us,dF,Ws,R_,mn,Hs,Uf,tl,cF,Wf,pF,Q_,Ke,ol,hF,Hf,fF,mF,nl,uF,wp,gF,_F,bF,sl,kF,rl,TF,yF,vF,Rs,wF,St,al,$F,un,FF,$p,xF,BF,Rf,MF,EF,zF,Qs,PF,Vs,V_,gn,Ks,Qf,il,qF,Vf,jF,K_,Je,ll,CF,_n,NF,Kf,OF,AF,Jf,IF,LF,DF,dl,SF,Fp,UF,WF,HF,cl,RF,pl,QF,VF,KF,Js,JF,Ut,hl,GF,bn,XF,xp,YF,ZF,Gf,e2,t2,o2,Gs,n2,Xs,J_,kn,Ys,Xf,fl,s2,Yf,r2,G_,Tn,ml,a2,gt,ul,i2,Ae,l2,Zf,d2,c2,em,p2,h2,tm,f2,m2,om,u2,g2,nm,_2,b2,sm,k2,T2,rm,y2,v2,w2,gl,_l,$2,am,F2,x2,B2,bl,M2,im,E2,z2,P2,G,q2,lm,j2,C2,dm,N2,O2,cm,A2,I2,pm,L2,D2,hm,S2,U2,fm,W2,H2,mm,R2,Q2,um,V2,K2,gm,J2,G2,_m,X2,Y2,bm,Z2,ex,km,tx,ox,Tm,nx,sx,ym,rx,ax,vm,ix,lx,wm,dx,cx,$m,px,hx,Fm,fx,mx,xm,ux,gx,Bm,_x,bx,kx,Zs,X_,yn,er,Mm,kl,Tx,Em,yx,Y_,Ge,Tl,vx,yl,wx,zm,$x,Fx,xx,vl,Bx,Bp,Mx,Ex,zx,wl,Px,$l,qx,jx,Cx,tr,Nx,_t,Fl,Ox,vn,Ax,Mp,Ix,Lx,Pm,Dx,Sx,Ux,or,Wx,nr,Hx,sr,Z_,wn,rr,qm,xl,Rx,jm,Qx,eb,Xe,Bl,Vx,Ml,Kx,Cm,Jx,Gx,Xx,El,Yx,Ep,Zx,e0,t0,zl,o0,Pl,n0,s0,r0,ar,a0,Wt,ql,i0,$n,l0,zp,d0,c0,Nm,p0,h0,f0,ir,m0,lr,tb,Fn,dr,Om,jl,u0,Am,g0,ob,Ye,Cl,_0,Im,b0,k0,Nl,T0,Pp,y0,v0,w0,Ol,$0,Al,F0,x0,B0,cr,M0,bt,Il,E0,xn,z0,qp,P0,q0,Lm,j0,C0,N0,pr,O0,hr,A0,fr,nb,Bn,mr,Dm,Ll,I0,Sm,L0,sb,Ze,Dl,D0,Um,S0,U0,Sl,W0,jp,H0,R0,Q0,Ul,V0,Wl,K0,J0,G0,ur,X0,Ht,Hl,Y0,Mn,Z0,Cp,eB,tB,Wm,oB,nB,sB,gr,rB,_r,rb,En,br,Hm,Rl,aB,Rm,iB,ab,et,Ql,lB,Qm,dB,cB,Vl,pB,Np,hB,fB,mB,Kl,uB,Jl,gB,_B,bB,kr,kB,kt,Gl,TB,zn,yB,Op,vB,wB,Vm,$B,FB,xB,Tr,BB,yr,MB,vr,ib,Pn,wr,Km,Xl,EB,Jm,zB,lb,tt,Yl,PB,qn,qB,Gm,jB,CB,Xm,NB,OB,AB,Zl,IB,Ap,LB,DB,SB,ed,UB,td,WB,HB,RB,$r,QB,Tt,od,VB,jn,KB,Ip,JB,GB,Ym,XB,YB,ZB,Fr,e9,xr,t9,Br,db,Cn,Mr,Zm,nd,o9,eu,n9,cb,Ie,sd,s9,tu,r9,a9,rd,i9,Lp,l9,d9,c9,ad,p9,id,h9,f9,m9,ou,u9,g9,co,nu,ld,_9,b9,su,dd,k9,T9,ru,cd,y9,v9,au,pd,w9,$9,Rt,hd,F9,Nn,x9,iu,B9,M9,lu,E9,z9,P9,Er,q9,zr,pb,On,Pr,du,fd,j9,cu,C9,hb,Le,md,N9,An,O9,pu,A9,I9,hu,L9,D9,S9,ud,U9,Dp,W9,H9,R9,gd,Q9,_d,V9,K9,J9,fu,G9,X9,po,mu,bd,Y9,Z9,uu,kd,eM,tM,gu,Td,oM,nM,_u,yd,sM,rM,Qt,vd,aM,In,iM,bu,lM,dM,ku,cM,pM,hM,qr,fM,jr,fb,Ln,Cr,Tu,wd,mM,yu,uM,mb,De,$d,gM,Fd,_M,vu,bM,kM,TM,xd,yM,Sp,vM,wM,$M,Bd,FM,Md,xM,BM,MM,wu,EM,zM,ho,$u,Ed,PM,qM,Fu,zd,jM,CM,xu,Pd,NM,OM,Bu,qd,AM,IM,Vt,jd,LM,Dn,DM,Mu,SM,UM,Eu,WM,HM,RM,Nr,QM,Or,ub,Sn,Ar,zu,Cd,VM,Pu,KM,gb,Se,Nd,JM,Od,GM,qu,XM,YM,ZM,Ad,eE,Up,tE,oE,nE,Id,sE,Ld,rE,aE,iE,ju,lE,dE,fo,Cu,Dd,cE,pE,Nu,Sd,hE,fE,Ou,Ud,mE,uE,Au,Wd,gE,_E,Kt,Hd,bE,Un,kE,Iu,TE,yE,Lu,vE,wE,$E,Ir,FE,Lr,_b,Wn,Dr,Du,Rd,xE,Su,BE,bb,Ue,Qd,ME,Uu,EE,zE,Vd,PE,Wp,qE,jE,CE,Kd,NE,Jd,OE,AE,IE,Wu,LE,DE,mo,Hu,Gd,SE,UE,Ru,Xd,WE,HE,Qu,Yd,RE,QE,Vu,Zd,VE,KE,Jt,ec,JE,Hn,GE,Ku,XE,YE,Ju,ZE,e6,t6,Sr,o6,Ur,kb,Rn,Wr,Gu,tc,n6,Xu,s6,Tb,We,oc,r6,Yu,a6,i6,nc,l6,Hp,d6,c6,p6,sc,h6,rc,f6,m6,u6,Zu,g6,_6,uo,eg,ac,b6,k6,tg,ic,T6,y6,og,lc,v6,w6,ng,dc,$6,F6,Gt,cc,x6,Qn,B6,sg,M6,E6,rg,z6,P6,q6,Hr,j6,Rr,yb,Vn,Qr,ag,pc,C6,ig,N6,vb,He,hc,O6,lg,A6,I6,fc,L6,Rp,D6,S6,U6,mc,W6,uc,H6,R6,Q6,dg,V6,K6,go,cg,gc,J6,G6,pg,_c,X6,Y6,hg,bc,Z6,ez,fg,kc,tz,oz,Xt,Tc,nz,Kn,sz,mg,rz,az,ug,iz,lz,dz,Vr,cz,Kr,wb,Jn,Jr,gg,yc,pz,_g,hz,$b,Re,vc,fz,Gn,mz,bg,uz,gz,kg,_z,bz,kz,wc,Tz,Qp,yz,vz,wz,$c,$z,Fc,Fz,xz,Bz,Tg,Mz,Ez,_o,yg,xc,zz,Pz,vg,Bc,qz,jz,wg,Mc,Cz,Nz,$g,Ec,Oz,Az,Yt,zc,Iz,Xn,Lz,Fg,Dz,Sz,xg,Uz,Wz,Hz,Gr,Rz,Xr,Fb;return l=new xe({}),oe=new xe({}),Ee=new xe({}),$a=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/configuration_bert.py#L54"}}),ns=new se({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[o5]},$$scope:{ctx:B}}}),xa=new xe({}),Ba=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L117"}}),Ea=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new se({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[n5]},$$scope:{ctx:B}}}),Ca=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L330"}}),Na=new xe({}),Oa=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert_fast.py#L117"}}),La=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert_fast.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sa=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert_fast.py#L229",returnDescription:`
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L745"}}),Ra=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L913"}}),Va=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.lax_numpy.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L57"}}),Ja=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/flax/struct.py#L120"}}),Ga=new xe({}),Xa=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L848"}}),ni=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L887",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new $e({props:{$$slots:{default:[r5]},$$scope:{ctx:B}}}),fs=new se({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[a5]},$$scope:{ctx:B}}}),si=new xe({}),ri=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1031"}}),di=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1047",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new $e({props:{$$slots:{default:[i5]},$$scope:{ctx:B}}}),gs=new se({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[l5]},$$scope:{ctx:B}}}),ci=new xe({}),pi=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1135"}}),gi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
(see <code>past_key_values</code>).`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1158",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bs=new $e({props:{$$slots:{default:[d5]},$$scope:{ctx:B}}}),ks=new se({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[c5]},$$scope:{ctx:B}}}),_i=new xe({}),bi=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1286"}}),wi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ys=new $e({props:{$$slots:{default:[p5]},$$scope:{ctx:B}}}),vs=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[h5]},$$scope:{ctx:B}}}),ws=new se({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[f5]},$$scope:{ctx:B}}}),$i=new xe({}),Fi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1397"}}),zi=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1407",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fs=new $e({props:{$$slots:{default:[m5]},$$scope:{ctx:B}}}),xs=new se({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[u5]},$$scope:{ctx:B}}}),Pi=new xe({}),qi=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1501"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1517",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new $e({props:{$$slots:{default:[g5]},$$scope:{ctx:B}}}),Es=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[_5]},$$scope:{ctx:B}}}),zs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[b5]},$$scope:{ctx:B}}}),Ps=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[k5]},$$scope:{ctx:B}}}),qs=new se({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[T5]},$$scope:{ctx:B}}}),Ai=new xe({}),Ii=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1603"}}),Ui=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1617",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new $e({props:{$$slots:{default:[y5]},$$scope:{ctx:B}}}),Ns=new se({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[v5]},$$scope:{ctx:B}}}),Wi=new xe({}),Hi=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1698"}}),Ki=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1716",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new $e({props:{$$slots:{default:[w5]},$$scope:{ctx:B}}}),Is=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[$5]},$$scope:{ctx:B}}}),Ls=new se({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[F5]},$$scope:{ctx:B}}}),Ji=new xe({}),Gi=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1783"}}),el=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_bert.py#L1797",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ss=new $e({props:{$$slots:{default:[x5]},$$scope:{ctx:B}}}),Us=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[B5]},$$scope:{ctx:B}}}),Ws=new se({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[M5]},$$scope:{ctx:B}}}),tl=new xe({}),ol=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1040"}}),Rs=new $e({props:{$$slots:{default:[E5]},$$scope:{ctx:B}}}),al=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1046",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qs=new $e({props:{$$slots:{default:[z5]},$$scope:{ctx:B}}}),Vs=new se({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[P5]},$$scope:{ctx:B}}}),il=new xe({}),ll=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1138"}}),Js=new $e({props:{$$slots:{default:[q5]},$$scope:{ctx:B}}}),hl=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1160",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gs=new $e({props:{$$slots:{default:[j5]},$$scope:{ctx:B}}}),Xs=new se({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[C5]},$$scope:{ctx:B}}}),fl=new xe({}),ml=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1347"}}),ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1384",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zs=new se({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[N5]},$$scope:{ctx:B}}}),kl=new xe({}),Tl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1256"}}),tr=new $e({props:{$$slots:{default:[O5]},$$scope:{ctx:B}}}),Fl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),or=new $e({props:{$$slots:{default:[A5]},$$scope:{ctx:B}}}),nr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[I5]},$$scope:{ctx:B}}}),sr=new se({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[L5]},$$scope:{ctx:B}}}),xl=new xe({}),Bl=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1497"}}),ar=new $e({props:{$$slots:{default:[D5]},$$scope:{ctx:B}}}),ql=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1507",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new $e({props:{$$slots:{default:[S5]},$$scope:{ctx:B}}}),lr=new se({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[U5]},$$scope:{ctx:B}}}),jl=new xe({}),Cl=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1589"}}),cr=new $e({props:{$$slots:{default:[W5]},$$scope:{ctx:B}}}),Il=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1610",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new $e({props:{$$slots:{default:[H5]},$$scope:{ctx:B}}}),hr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[R5]},$$scope:{ctx:B}}}),fr=new se({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[Q5]},$$scope:{ctx:B}}}),Ll=new xe({}),Dl=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1681"}}),ur=new $e({props:{$$slots:{default:[V5]},$$scope:{ctx:B}}}),Hl=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1705",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new $e({props:{$$slots:{default:[K5]},$$scope:{ctx:B}}}),_r=new se({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[J5]},$$scope:{ctx:B}}}),Rl=new xe({}),Ql=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1812"}}),kr=new $e({props:{$$slots:{default:[G5]},$$scope:{ctx:B}}}),Gl=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1839",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tr=new $e({props:{$$slots:{default:[X5]},$$scope:{ctx:B}}}),yr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[Y5]},$$scope:{ctx:B}}}),vr=new se({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[Z5]},$$scope:{ctx:B}}}),Xl=new xe({}),Yl=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1908"}}),$r=new $e({props:{$$slots:{default:[eN]},$$scope:{ctx:B}}}),od=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_tf_bert.py#L1930",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new $e({props:{$$slots:{default:[tN]},$$scope:{ctx:B}}}),xr=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),Br=new se({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[nN]},$$scope:{ctx:B}}}),nd=new xe({}),sd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L756"}}),hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new $e({props:{$$slots:{default:[sN]},$$scope:{ctx:B}}}),zr=new se({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[rN]},$$scope:{ctx:B}}}),fd=new xe({}),md=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L829"}}),vd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qr=new $e({props:{$$slots:{default:[aN]},$$scope:{ctx:B}}}),jr=new se({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[iN]},$$scope:{ctx:B}}}),wd=new xe({}),$d=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L914"}}),jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nr=new $e({props:{$$slots:{default:[lN]},$$scope:{ctx:B}}}),Or=new se({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[dN]},$$scope:{ctx:B}}}),Cd=new xe({}),Nd=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L975"}}),Hd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ir=new $e({props:{$$slots:{default:[cN]},$$scope:{ctx:B}}}),Lr=new se({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[pN]},$$scope:{ctx:B}}}),Rd=new xe({}),Qd=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L1073"}}),ec=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $e({props:{$$slots:{default:[hN]},$$scope:{ctx:B}}}),Ur=new se({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[fN]},$$scope:{ctx:B}}}),tc=new xe({}),oc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L1149"}}),cc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new $e({props:{$$slots:{default:[mN]},$$scope:{ctx:B}}}),Rr=new se({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[uN]},$$scope:{ctx:B}}}),pc=new xe({}),hc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L1221"}}),Tc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vr=new $e({props:{$$slots:{default:[gN]},$$scope:{ctx:B}}}),Kr=new se({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[_N]},$$scope:{ctx:B}}}),yc=new xe({}),vc=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L1288"}}),zc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/modeling_flax_bert.py#L639",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gr=new $e({props:{$$slots:{default:[bN]},$$scope:{ctx:B}}}),Xr=new se({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[kN]},$$scope:{ctx:B}}}),{c(){d=r("meta"),g=c(),h=r("h1"),f=r("a"),b=r("span"),y(l.$$.fragment),m=c(),M=r("span"),be=n("BERT"),X=c(),z=r("h2"),ee=r("a"),L=r("span"),y(oe.$$.fragment),ke=c(),D=r("span"),Te=n("Overview"),fe=c(),J=r("p"),O=n("The BERT model was proposed in "),ne=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
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
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),E=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),A=n("thomwolf"),Pe=n(". The original code can be found "),Me=r("a"),qe=n("here"),I=n("."),W=c(),we=r("h2"),Fe=r("a"),U=r("span"),y(Ee.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),b_=c(),qt=r("div"),y($a.$$.fragment),f1=c(),io=r("p"),m1=n("This is the configuration class to store the configuration of a "),Rc=r("a"),u1=n("BertModel"),g1=n(" or a "),Qc=r("a"),_1=n("TFBertModel"),b1=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Fa=r("a"),k1=n("bert-base-uncased"),T1=n(" architecture."),y1=c(),Lo=r("p"),v1=n("Configuration objects inherit from "),Vc=r("a"),w1=n("PretrainedConfig"),$1=n(` and can be used to control the model outputs. Read the
documentation from `),Kc=r("a"),F1=n("PretrainedConfig"),x1=n(" for more information."),B1=c(),y(ns.$$.fragment),k_=c(),Do=r("h2"),ss=r("a"),Eh=r("span"),y(xa.$$.fragment),M1=c(),zh=r("span"),E1=n("BertTokenizer"),T_=c(),Ne=r("div"),y(Ba.$$.fragment),z1=c(),Ph=r("p"),P1=n("Construct a BERT tokenizer. Based on WordPiece."),q1=c(),Ma=r("p"),j1=n("This tokenizer inherits from "),Jc=r("a"),C1=n("PreTrainedTokenizer"),N1=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),O1=c(),yo=r("div"),y(Ea.$$.fragment),A1=c(),qh=r("p"),I1=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),L1=c(),za=r("ul"),Gc=r("li"),D1=n("single sequence: "),jh=r("code"),S1=n("[CLS] X [SEP]"),U1=c(),Xc=r("li"),W1=n("pair of sequences: "),Ch=r("code"),H1=n("[CLS] A [SEP] B [SEP]"),R1=c(),rs=r("div"),y(Pa.$$.fragment),Q1=c(),qa=r("p"),V1=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=r("code"),K1=n("prepare_for_model"),J1=n(" method."),G1=c(),Ct=r("div"),y(ja.$$.fragment),X1=c(),Oh=r("p"),Y1=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Z1=c(),y(as.$$.fragment),eT=c(),So=r("p"),tT=n("If "),Ah=r("code"),oT=n("token_ids_1"),nT=n(" is "),Ih=r("code"),sT=n("None"),rT=n(", this method only returns the first portion of the mask (0s)."),aT=c(),Yc=r("div"),y(Ca.$$.fragment),y_=c(),Uo=r("h2"),is=r("a"),Lh=r("span"),y(Na.$$.fragment),iT=c(),Dh=r("span"),lT=n("BertTokenizerFast"),v_=c(),st=r("div"),y(Oa.$$.fragment),dT=c(),Aa=r("p"),cT=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=r("em"),pT=n("tokenizers"),hT=n(" library). Based on WordPiece."),fT=c(),Ia=r("p"),mT=n("This tokenizer inherits from "),Zc=r("a"),uT=n("PreTrainedTokenizerFast"),gT=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),_T=c(),vo=r("div"),y(La.$$.fragment),bT=c(),Uh=r("p"),kT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),TT=c(),Da=r("ul"),ep=r("li"),yT=n("single sequence: "),Wh=r("code"),vT=n("[CLS] X [SEP]"),wT=c(),tp=r("li"),$T=n("pair of sequences: "),Hh=r("code"),FT=n("[CLS] A [SEP] B [SEP]"),xT=c(),Nt=r("div"),y(Sa.$$.fragment),BT=c(),Rh=r("p"),MT=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),ET=c(),y(ls.$$.fragment),zT=c(),Wo=r("p"),PT=n("If "),Qh=r("code"),qT=n("token_ids_1"),jT=n(" is "),Vh=r("code"),CT=n("None"),NT=n(", this method only returns the first portion of the mask (0s)."),w_=c(),Ho=r("h2"),ds=r("a"),Kh=r("span"),y(Ua.$$.fragment),OT=c(),Jh=r("span"),AT=n("Bert specific outputs"),$_=c(),Ro=r("div"),y(Wa.$$.fragment),IT=c(),Ha=r("p"),LT=n("Output type of "),op=r("a"),DT=n("BertForPreTraining"),ST=n("."),F_=c(),Qo=r("div"),y(Ra.$$.fragment),UT=c(),Qa=r("p"),WT=n("Output type of "),np=r("a"),HT=n("TFBertForPreTraining"),RT=n("."),x_=c(),lo=r("div"),y(Va.$$.fragment),QT=c(),Ka=r("p"),VT=n("Output type of "),sp=r("a"),KT=n("BertForPreTraining"),JT=n("."),GT=c(),cs=r("div"),y(Ja.$$.fragment),XT=c(),Gh=r("p"),YT=n("\u201CReturns a new object replacing the specified fields with new values."),B_=c(),Vo=r("h2"),ps=r("a"),Xh=r("span"),y(Ga.$$.fragment),ZT=c(),Yh=r("span"),ey=n("BertModel"),M_=c(),Oe=r("div"),y(Xa.$$.fragment),ty=c(),Zh=r("p"),oy=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),ny=c(),Ya=r("p"),sy=n("This model inherits from "),rp=r("a"),ry=n("PreTrainedModel"),ay=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iy=c(),Za=r("p"),ly=n("This model is also a PyTorch "),ei=r("a"),dy=n("torch.nn.Module"),cy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),py=c(),ti=r("p"),hy=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=r("a"),fy=n(`Attention is
all you need`),my=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),uy=c(),Ve=r("p"),gy=n("To behave as an decoder the model needs to be initialized with the "),ef=r("code"),_y=n("is_decoder"),by=n(` argument of the configuration set
to `),tf=r("code"),ky=n("True"),Ty=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),of=r("code"),yy=n("is_decoder"),vy=n(` argument and
`),nf=r("code"),wy=n("add_cross_attention"),$y=n(" set to "),sf=r("code"),Fy=n("True"),xy=n("; an "),rf=r("code"),By=n("encoder_hidden_states"),My=n(" is then expected as an input to the forward pass."),Ey=c(),Ot=r("div"),y(ni.$$.fragment),zy=c(),Ko=r("p"),Py=n("The "),ap=r("a"),qy=n("BertModel"),jy=n(" forward method, overrides the "),af=r("code"),Cy=n("__call__"),Ny=n(" special method."),Oy=c(),y(hs.$$.fragment),Ay=c(),y(fs.$$.fragment),E_=c(),Jo=r("h2"),ms=r("a"),lf=r("span"),y(si.$$.fragment),Iy=c(),df=r("span"),Ly=n("BertForPreTraining"),z_=c(),rt=r("div"),y(ri.$$.fragment),Dy=c(),Go=r("p"),Sy=n("Bert Model with two heads on top as done during the pretraining: a "),cf=r("code"),Uy=n("masked language modeling"),Wy=n(" head and a "),pf=r("code"),Hy=n("next sentence prediction (classification)"),Ry=n(" head."),Qy=c(),ai=r("p"),Vy=n("This model inherits from "),ip=r("a"),Ky=n("PreTrainedModel"),Jy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gy=c(),ii=r("p"),Xy=n("This model is also a PyTorch "),li=r("a"),Yy=n("torch.nn.Module"),Zy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ev=c(),At=r("div"),y(di.$$.fragment),tv=c(),Xo=r("p"),ov=n("The "),lp=r("a"),nv=n("BertForPreTraining"),sv=n(" forward method, overrides the "),hf=r("code"),rv=n("__call__"),av=n(" special method."),iv=c(),y(us.$$.fragment),lv=c(),y(gs.$$.fragment),P_=c(),Yo=r("h2"),_s=r("a"),ff=r("span"),y(ci.$$.fragment),dv=c(),mf=r("span"),cv=n("BertLMHeadModel"),q_=c(),at=r("div"),y(pi.$$.fragment),pv=c(),hi=r("p"),hv=n("Bert Model with a "),uf=r("code"),fv=n("language modeling"),mv=n(" head on top for CLM fine-tuning."),uv=c(),fi=r("p"),gv=n("This model inherits from "),dp=r("a"),_v=n("PreTrainedModel"),bv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kv=c(),mi=r("p"),Tv=n("This model is also a PyTorch "),ui=r("a"),yv=n("torch.nn.Module"),vv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wv=c(),It=r("div"),y(gi.$$.fragment),$v=c(),Zo=r("p"),Fv=n("The "),cp=r("a"),xv=n("BertLMHeadModel"),Bv=n(" forward method, overrides the "),gf=r("code"),Mv=n("__call__"),Ev=n(" special method."),zv=c(),y(bs.$$.fragment),Pv=c(),y(ks.$$.fragment),j_=c(),en=r("h2"),Ts=r("a"),_f=r("span"),y(_i.$$.fragment),qv=c(),bf=r("span"),jv=n("BertForMaskedLM"),C_=c(),it=r("div"),y(bi.$$.fragment),Cv=c(),ki=r("p"),Nv=n("Bert Model with a "),kf=r("code"),Ov=n("language modeling"),Av=n(" head on top."),Iv=c(),Ti=r("p"),Lv=n("This model inherits from "),pp=r("a"),Dv=n("PreTrainedModel"),Sv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv=c(),yi=r("p"),Wv=n("This model is also a PyTorch "),vi=r("a"),Hv=n("torch.nn.Module"),Rv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qv=c(),ft=r("div"),y(wi.$$.fragment),Vv=c(),tn=r("p"),Kv=n("The "),hp=r("a"),Jv=n("BertForMaskedLM"),Gv=n(" forward method, overrides the "),Tf=r("code"),Xv=n("__call__"),Yv=n(" special method."),Zv=c(),y(ys.$$.fragment),ew=c(),y(vs.$$.fragment),tw=c(),y(ws.$$.fragment),N_=c(),on=r("h2"),$s=r("a"),yf=r("span"),y($i.$$.fragment),ow=c(),vf=r("span"),nw=n("BertForNextSentencePrediction"),O_=c(),lt=r("div"),y(Fi.$$.fragment),sw=c(),xi=r("p"),rw=n("Bert Model with a "),wf=r("code"),aw=n("next sentence prediction (classification)"),iw=n(" head on top."),lw=c(),Bi=r("p"),dw=n("This model inherits from "),fp=r("a"),cw=n("PreTrainedModel"),pw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hw=c(),Mi=r("p"),fw=n("This model is also a PyTorch "),Ei=r("a"),mw=n("torch.nn.Module"),uw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gw=c(),Lt=r("div"),y(zi.$$.fragment),_w=c(),nn=r("p"),bw=n("The "),mp=r("a"),kw=n("BertForNextSentencePrediction"),Tw=n(" forward method, overrides the "),$f=r("code"),yw=n("__call__"),vw=n(" special method."),ww=c(),y(Fs.$$.fragment),$w=c(),y(xs.$$.fragment),A_=c(),sn=r("h2"),Bs=r("a"),Ff=r("span"),y(Pi.$$.fragment),Fw=c(),xf=r("span"),xw=n("BertForSequenceClassification"),I_=c(),dt=r("div"),y(qi.$$.fragment),Bw=c(),Bf=r("p"),Mw=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ew=c(),ji=r("p"),zw=n("This model inherits from "),up=r("a"),Pw=n("PreTrainedModel"),qw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jw=c(),Ci=r("p"),Cw=n("This model is also a PyTorch "),Ni=r("a"),Nw=n("torch.nn.Module"),Ow=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Aw=c(),Qe=r("div"),y(Oi.$$.fragment),Iw=c(),rn=r("p"),Lw=n("The "),gp=r("a"),Dw=n("BertForSequenceClassification"),Sw=n(" forward method, overrides the "),Mf=r("code"),Uw=n("__call__"),Ww=n(" special method."),Hw=c(),y(Ms.$$.fragment),Rw=c(),y(Es.$$.fragment),Qw=c(),y(zs.$$.fragment),Vw=c(),y(Ps.$$.fragment),Kw=c(),y(qs.$$.fragment),L_=c(),an=r("h2"),js=r("a"),Ef=r("span"),y(Ai.$$.fragment),Jw=c(),zf=r("span"),Gw=n("BertForMultipleChoice"),D_=c(),ct=r("div"),y(Ii.$$.fragment),Xw=c(),Pf=r("p"),Yw=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zw=c(),Li=r("p"),e$=n("This model inherits from "),_p=r("a"),t$=n("PreTrainedModel"),o$=n(`. Check the superclass documentation for the generic methods the
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
behavior.`),RB=c(),y($r.$$.fragment),QB=c(),Tt=r("div"),y(od.$$.fragment),VB=c(),jn=r("p"),KB=n("The "),Ip=r("a"),JB=n("TFBertForQuestionAnswering"),GB=n(" forward method, overrides the "),Ym=r("code"),XB=n("__call__"),YB=n(" special method."),ZB=c(),y(Fr.$$.fragment),e9=c(),y(xr.$$.fragment),t9=c(),y(Br.$$.fragment),db=c(),Cn=r("h2"),Mr=r("a"),Zm=r("span"),y(nd.$$.fragment),o9=c(),eu=r("span"),n9=n("FlaxBertModel"),cb=c(),Ie=r("div"),y(sd.$$.fragment),s9=c(),tu=r("p"),r9=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),a9=c(),rd=r("p"),i9=n("This model inherits from "),Lp=r("a"),l9=n("FlaxPreTrainedModel"),d9=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),c9=c(),ad=r("p"),p9=n("This model is also a Flax Linen "),id=r("a"),h9=n("flax.linen.Module"),f9=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),m9=c(),ou=r("p"),u9=n("Finally, this model supports inherent JAX features such as:"),g9=c(),co=r("ul"),nu=r("li"),ld=r("a"),_9=n("Just-In-Time (JIT) compilation"),b9=c(),su=r("li"),dd=r("a"),k9=n("Automatic Differentiation"),T9=c(),ru=r("li"),cd=r("a"),y9=n("Vectorization"),v9=c(),au=r("li"),pd=r("a"),w9=n("Parallelization"),$9=c(),Rt=r("div"),y(hd.$$.fragment),F9=c(),Nn=r("p"),x9=n("The "),iu=r("code"),B9=n("FlaxBertPreTrainedModel"),M9=n(" forward method, overrides the "),lu=r("code"),E9=n("__call__"),z9=n(" special method."),P9=c(),y(Er.$$.fragment),q9=c(),y(zr.$$.fragment),pb=c(),On=r("h2"),Pr=r("a"),du=r("span"),y(fd.$$.fragment),j9=c(),cu=r("span"),C9=n("FlaxBertForPreTraining"),hb=c(),Le=r("div"),y(md.$$.fragment),N9=c(),An=r("p"),O9=n("Bert Model with two heads on top as done during the pretraining: a "),pu=r("code"),A9=n("masked language modeling"),I9=n(" head and a "),hu=r("code"),L9=n("next sentence prediction (classification)"),D9=n(" head."),S9=c(),ud=r("p"),U9=n("This model inherits from "),Dp=r("a"),W9=n("FlaxPreTrainedModel"),H9=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),R9=c(),gd=r("p"),Q9=n("This model is also a Flax Linen "),_d=r("a"),V9=n("flax.linen.Module"),K9=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),J9=c(),fu=r("p"),G9=n("Finally, this model supports inherent JAX features such as:"),X9=c(),po=r("ul"),mu=r("li"),bd=r("a"),Y9=n("Just-In-Time (JIT) compilation"),Z9=c(),uu=r("li"),kd=r("a"),eM=n("Automatic Differentiation"),tM=c(),gu=r("li"),Td=r("a"),oM=n("Vectorization"),nM=c(),_u=r("li"),yd=r("a"),sM=n("Parallelization"),rM=c(),Qt=r("div"),y(vd.$$.fragment),aM=c(),In=r("p"),iM=n("The "),bu=r("code"),lM=n("FlaxBertPreTrainedModel"),dM=n(" forward method, overrides the "),ku=r("code"),cM=n("__call__"),pM=n(" special method."),hM=c(),y(qr.$$.fragment),fM=c(),y(jr.$$.fragment),fb=c(),Ln=r("h2"),Cr=r("a"),Tu=r("span"),y(wd.$$.fragment),mM=c(),yu=r("span"),uM=n("FlaxBertForMaskedLM"),mb=c(),De=r("div"),y($d.$$.fragment),gM=c(),Fd=r("p"),_M=n("Bert Model with a "),vu=r("code"),bM=n("language modeling"),kM=n(" head on top."),TM=c(),xd=r("p"),yM=n("This model inherits from "),Sp=r("a"),vM=n("FlaxPreTrainedModel"),wM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$M=c(),Bd=r("p"),FM=n("This model is also a Flax Linen "),Md=r("a"),xM=n("flax.linen.Module"),BM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),MM=c(),wu=r("p"),EM=n("Finally, this model supports inherent JAX features such as:"),zM=c(),ho=r("ul"),$u=r("li"),Ed=r("a"),PM=n("Just-In-Time (JIT) compilation"),qM=c(),Fu=r("li"),zd=r("a"),jM=n("Automatic Differentiation"),CM=c(),xu=r("li"),Pd=r("a"),NM=n("Vectorization"),OM=c(),Bu=r("li"),qd=r("a"),AM=n("Parallelization"),IM=c(),Vt=r("div"),y(jd.$$.fragment),LM=c(),Dn=r("p"),DM=n("The "),Mu=r("code"),SM=n("FlaxBertPreTrainedModel"),UM=n(" forward method, overrides the "),Eu=r("code"),WM=n("__call__"),HM=n(" special method."),RM=c(),y(Nr.$$.fragment),QM=c(),y(Or.$$.fragment),ub=c(),Sn=r("h2"),Ar=r("a"),zu=r("span"),y(Cd.$$.fragment),VM=c(),Pu=r("span"),KM=n("FlaxBertForNextSentencePrediction"),gb=c(),Se=r("div"),y(Nd.$$.fragment),JM=c(),Od=r("p"),GM=n("Bert Model with a "),qu=r("code"),XM=n("next sentence prediction (classification)"),YM=n(" head on top."),ZM=c(),Ad=r("p"),eE=n("This model inherits from "),Up=r("a"),tE=n("FlaxPreTrainedModel"),oE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nE=c(),Id=r("p"),sE=n("This model is also a Flax Linen "),Ld=r("a"),rE=n("flax.linen.Module"),aE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iE=c(),ju=r("p"),lE=n("Finally, this model supports inherent JAX features such as:"),dE=c(),fo=r("ul"),Cu=r("li"),Dd=r("a"),cE=n("Just-In-Time (JIT) compilation"),pE=c(),Nu=r("li"),Sd=r("a"),hE=n("Automatic Differentiation"),fE=c(),Ou=r("li"),Ud=r("a"),mE=n("Vectorization"),uE=c(),Au=r("li"),Wd=r("a"),gE=n("Parallelization"),_E=c(),Kt=r("div"),y(Hd.$$.fragment),bE=c(),Un=r("p"),kE=n("The "),Iu=r("code"),TE=n("FlaxBertPreTrainedModel"),yE=n(" forward method, overrides the "),Lu=r("code"),vE=n("__call__"),wE=n(" special method."),$E=c(),y(Ir.$$.fragment),FE=c(),y(Lr.$$.fragment),_b=c(),Wn=r("h2"),Dr=r("a"),Du=r("span"),y(Rd.$$.fragment),xE=c(),Su=r("span"),BE=n("FlaxBertForSequenceClassification"),bb=c(),Ue=r("div"),y(Qd.$$.fragment),ME=c(),Uu=r("p"),EE=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zE=c(),Vd=r("p"),PE=n("This model inherits from "),Wp=r("a"),qE=n("FlaxPreTrainedModel"),jE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CE=c(),Kd=r("p"),NE=n("This model is also a Flax Linen "),Jd=r("a"),OE=n("flax.linen.Module"),AE=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),IE=c(),Wu=r("p"),LE=n("Finally, this model supports inherent JAX features such as:"),DE=c(),mo=r("ul"),Hu=r("li"),Gd=r("a"),SE=n("Just-In-Time (JIT) compilation"),UE=c(),Ru=r("li"),Xd=r("a"),WE=n("Automatic Differentiation"),HE=c(),Qu=r("li"),Yd=r("a"),RE=n("Vectorization"),QE=c(),Vu=r("li"),Zd=r("a"),VE=n("Parallelization"),KE=c(),Jt=r("div"),y(ec.$$.fragment),JE=c(),Hn=r("p"),GE=n("The "),Ku=r("code"),XE=n("FlaxBertPreTrainedModel"),YE=n(" forward method, overrides the "),Ju=r("code"),ZE=n("__call__"),e6=n(" special method."),t6=c(),y(Sr.$$.fragment),o6=c(),y(Ur.$$.fragment),kb=c(),Rn=r("h2"),Wr=r("a"),Gu=r("span"),y(tc.$$.fragment),n6=c(),Xu=r("span"),s6=n("FlaxBertForMultipleChoice"),Tb=c(),We=r("div"),y(oc.$$.fragment),r6=c(),Yu=r("p"),a6=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),i6=c(),nc=r("p"),l6=n("This model inherits from "),Hp=r("a"),d6=n("FlaxPreTrainedModel"),c6=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p6=c(),sc=r("p"),h6=n("This model is also a Flax Linen "),rc=r("a"),f6=n("flax.linen.Module"),m6=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),u6=c(),Zu=r("p"),g6=n("Finally, this model supports inherent JAX features such as:"),_6=c(),uo=r("ul"),eg=r("li"),ac=r("a"),b6=n("Just-In-Time (JIT) compilation"),k6=c(),tg=r("li"),ic=r("a"),T6=n("Automatic Differentiation"),y6=c(),og=r("li"),lc=r("a"),v6=n("Vectorization"),w6=c(),ng=r("li"),dc=r("a"),$6=n("Parallelization"),F6=c(),Gt=r("div"),y(cc.$$.fragment),x6=c(),Qn=r("p"),B6=n("The "),sg=r("code"),M6=n("FlaxBertPreTrainedModel"),E6=n(" forward method, overrides the "),rg=r("code"),z6=n("__call__"),P6=n(" special method."),q6=c(),y(Hr.$$.fragment),j6=c(),y(Rr.$$.fragment),yb=c(),Vn=r("h2"),Qr=r("a"),ag=r("span"),y(pc.$$.fragment),C6=c(),ig=r("span"),N6=n("FlaxBertForTokenClassification"),vb=c(),He=r("div"),y(hc.$$.fragment),O6=c(),lg=r("p"),A6=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),I6=c(),fc=r("p"),L6=n("This model inherits from "),Rp=r("a"),D6=n("FlaxPreTrainedModel"),S6=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),U6=c(),mc=r("p"),W6=n("This model is also a Flax Linen "),uc=r("a"),H6=n("flax.linen.Module"),R6=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Q6=c(),dg=r("p"),V6=n("Finally, this model supports inherent JAX features such as:"),K6=c(),go=r("ul"),cg=r("li"),gc=r("a"),J6=n("Just-In-Time (JIT) compilation"),G6=c(),pg=r("li"),_c=r("a"),X6=n("Automatic Differentiation"),Y6=c(),hg=r("li"),bc=r("a"),Z6=n("Vectorization"),ez=c(),fg=r("li"),kc=r("a"),tz=n("Parallelization"),oz=c(),Xt=r("div"),y(Tc.$$.fragment),nz=c(),Kn=r("p"),sz=n("The "),mg=r("code"),rz=n("FlaxBertPreTrainedModel"),az=n(" forward method, overrides the "),ug=r("code"),iz=n("__call__"),lz=n(" special method."),dz=c(),y(Vr.$$.fragment),cz=c(),y(Kr.$$.fragment),wb=c(),Jn=r("h2"),Jr=r("a"),gg=r("span"),y(yc.$$.fragment),pz=c(),_g=r("span"),hz=n("FlaxBertForQuestionAnswering"),$b=c(),Re=r("div"),y(vc.$$.fragment),fz=c(),Gn=r("p"),mz=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=r("code"),uz=n("span start logits"),gz=n(" and "),kg=r("code"),_z=n("span end logits"),bz=n(")."),kz=c(),wc=r("p"),Tz=n("This model inherits from "),Qp=r("a"),yz=n("FlaxPreTrainedModel"),vz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wz=c(),$c=r("p"),$z=n("This model is also a Flax Linen "),Fc=r("a"),Fz=n("flax.linen.Module"),xz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Bz=c(),Tg=r("p"),Mz=n("Finally, this model supports inherent JAX features such as:"),Ez=c(),_o=r("ul"),yg=r("li"),xc=r("a"),zz=n("Just-In-Time (JIT) compilation"),Pz=c(),vg=r("li"),Bc=r("a"),qz=n("Automatic Differentiation"),jz=c(),wg=r("li"),Mc=r("a"),Cz=n("Vectorization"),Nz=c(),$g=r("li"),Ec=r("a"),Oz=n("Parallelization"),Az=c(),Yt=r("div"),y(zc.$$.fragment),Iz=c(),Xn=r("p"),Lz=n("The "),Fg=r("code"),Dz=n("FlaxBertPreTrainedModel"),Sz=n(" forward method, overrides the "),xg=r("code"),Uz=n("__call__"),Wz=n(" special method."),Hz=c(),y(Gr.$$.fragment),Rz=c(),y(Xr.$$.fragment),this.h()},l(o){const k=e5('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=a(o,"H1",{class:!0});var Pc=i(h);f=a(Pc,"A",{id:!0,class:!0,href:!0});var Bg=i(f);b=a(Bg,"SPAN",{});var Mg=i(b);v(l.$$.fragment,Mg),Mg.forEach(t),Bg.forEach(t),m=p(Pc),M=a(Pc,"SPAN",{});var Eg=i(M);be=s(Eg,"BERT"),Eg.forEach(t),Pc.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var qc=i(z);ee=a(qc,"A",{id:!0,class:!0,href:!0});var zg=i(ee);L=a(zg,"SPAN",{});var Pg=i(L);v(oe.$$.fragment,Pg),Pg.forEach(t),zg.forEach(t),ke=p(qc),D=a(qc,"SPAN",{});var qg=i(D);Te=s(qg,"Overview"),qg.forEach(t),qc.forEach(t),fe=p(o),J=a(o,"P",{});var jc=i(J);O=s(jc,"The BERT model was proposed in "),ne=a(jc,"A",{href:!0,rel:!0});var jg=i(ne);Y=s(jg,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),jg.forEach(t),P=s(jc,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
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
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),Sg.forEach(t),Cc.forEach(t),E=p(o),K=a(o,"P",{});var Yn=i(K);ze=s(Yn,"This model was contributed by "),Be=a(Yn,"A",{href:!0,rel:!0});var Ug=i(Be);A=s(Ug,"thomwolf"),Ug.forEach(t),Pe=s(Yn,". The original code can be found "),Me=a(Yn,"A",{href:!0,rel:!0});var Wg=i(Me);qe=s(Wg,"here"),Wg.forEach(t),I=s(Yn,"."),Yn.forEach(t),W=p(o),we=a(o,"H2",{class:!0});var Nc=i(we);Fe=a(Nc,"A",{id:!0,class:!0,href:!0});var Hg=i(Fe);U=a(Hg,"SPAN",{});var Rg=i(U);v(Ee.$$.fragment,Rg),Rg.forEach(t),Hg.forEach(t),je=p(Nc),he=a(Nc,"SPAN",{});var Qg=i(he);Ce=s(Qg,"BertConfig"),Qg.forEach(t),Nc.forEach(t),b_=p(o),qt=a(o,"DIV",{class:!0});var bo=i(qt);v($a.$$.fragment,bo),f1=p(bo),io=a(bo,"P",{});var ko=i(io);m1=s(ko,"This is the configuration class to store the configuration of a "),Rc=a(ko,"A",{href:!0});var Vg=i(Rc);u1=s(Vg,"BertModel"),Vg.forEach(t),g1=s(ko," or a "),Qc=a(ko,"A",{href:!0});var Kg=i(Qc);_1=s(Kg,"TFBertModel"),Kg.forEach(t),b1=s(ko,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Fa=a(ko,"A",{href:!0,rel:!0});var Jg=i(Fa);k1=s(Jg,"bert-base-uncased"),Jg.forEach(t),T1=s(ko," architecture."),ko.forEach(t),y1=p(bo),Lo=a(bo,"P",{});var Zn=i(Lo);v1=s(Zn,"Configuration objects inherit from "),Vc=a(Zn,"A",{href:!0});var Gg=i(Vc);w1=s(Gg,"PretrainedConfig"),Gg.forEach(t),$1=s(Zn,` and can be used to control the model outputs. Read the
documentation from `),Kc=a(Zn,"A",{href:!0});var Xg=i(Kc);F1=s(Xg,"PretrainedConfig"),Xg.forEach(t),x1=s(Zn," for more information."),Zn.forEach(t),B1=p(bo),v(ns.$$.fragment,bo),bo.forEach(t),k_=p(o),Do=a(o,"H2",{class:!0});var Oc=i(Do);ss=a(Oc,"A",{id:!0,class:!0,href:!0});var Yg=i(ss);Eh=a(Yg,"SPAN",{});var Zg=i(Eh);v(xa.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),M1=p(Oc),zh=a(Oc,"SPAN",{});var e_=i(zh);E1=s(e_,"BertTokenizer"),e_.forEach(t),Oc.forEach(t),T_=p(o),Ne=a(o,"DIV",{class:!0});var ot=i(Ne);v(Ba.$$.fragment,ot),z1=p(ot),Ph=a(ot,"P",{});var t_=i(Ph);P1=s(t_,"Construct a BERT tokenizer. Based on WordPiece."),t_.forEach(t),q1=p(ot),Ma=a(ot,"P",{});var Ac=i(Ma);j1=s(Ac,"This tokenizer inherits from "),Jc=a(Ac,"A",{href:!0});var o_=i(Jc);C1=s(o_,"PreTrainedTokenizer"),o_.forEach(t),N1=s(Ac,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ac.forEach(t),O1=p(ot),yo=a(ot,"DIV",{class:!0});var es=i(yo);v(Ea.$$.fragment,es),A1=p(es),qh=a(es,"P",{});var n_=i(qh);I1=s(n_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),n_.forEach(t),L1=p(es),za=a(es,"UL",{});var Ic=i(za);Gc=a(Ic,"LI",{});var Vp=i(Gc);D1=s(Vp,"single sequence: "),jh=a(Vp,"CODE",{});var s_=i(jh);S1=s(s_,"[CLS] X [SEP]"),s_.forEach(t),Vp.forEach(t),U1=p(Ic),Xc=a(Ic,"LI",{});var Kp=i(Xc);W1=s(Kp,"pair of sequences: "),Ch=a(Kp,"CODE",{});var r_=i(Ch);H1=s(r_,"[CLS] A [SEP] B [SEP]"),r_.forEach(t),Kp.forEach(t),Ic.forEach(t),es.forEach(t),R1=p(ot),rs=a(ot,"DIV",{class:!0});var Lc=i(rs);v(Pa.$$.fragment,Lc),Q1=p(Lc),qa=a(Lc,"P",{});var Dc=i(qa);V1=s(Dc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nh=a(Dc,"CODE",{});var a_=i(Nh);K1=s(a_,"prepare_for_model"),a_.forEach(t),J1=s(Dc," method."),Dc.forEach(t),Lc.forEach(t),G1=p(ot),Ct=a(ot,"DIV",{class:!0});var To=i(Ct);v(ja.$$.fragment,To),X1=p(To),Oh=a(To,"P",{});var i_=i(Oh);Y1=s(i_,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),i_.forEach(t),Z1=p(To),v(as.$$.fragment,To),eT=p(To),So=a(To,"P",{});var ts=i(So);tT=s(ts,"If "),Ah=a(ts,"CODE",{});var l_=i(Ah);oT=s(l_,"token_ids_1"),l_.forEach(t),nT=s(ts," is "),Ih=a(ts,"CODE",{});var d_=i(Ih);sT=s(d_,"None"),d_.forEach(t),rT=s(ts,", this method only returns the first portion of the mask (0s)."),ts.forEach(t),To.forEach(t),aT=p(ot),Yc=a(ot,"DIV",{class:!0});var c_=i(Yc);v(Ca.$$.fragment,c_),c_.forEach(t),ot.forEach(t),y_=p(o),Uo=a(o,"H2",{class:!0});var Sc=i(Uo);is=a(Sc,"A",{id:!0,class:!0,href:!0});var p_=i(is);Lh=a(p_,"SPAN",{});var h_=i(Lh);v(Na.$$.fragment,h_),h_.forEach(t),p_.forEach(t),iT=p(Sc),Dh=a(Sc,"SPAN",{});var f_=i(Dh);lT=s(f_,"BertTokenizerFast"),f_.forEach(t),Sc.forEach(t),v_=p(o),st=a(o,"DIV",{class:!0});var jt=i(st);v(Oa.$$.fragment,jt),dT=p(jt),Aa=a(jt,"P",{});var Uc=i(Aa);cT=s(Uc,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Sh=a(Uc,"EM",{});var m_=i(Sh);pT=s(m_,"tokenizers"),m_.forEach(t),hT=s(Uc," library). Based on WordPiece."),Uc.forEach(t),fT=p(jt),Ia=a(jt,"P",{});var Wc=i(Ia);mT=s(Wc,"This tokenizer inherits from "),Zc=a(Wc,"A",{href:!0});var u_=i(Zc);uT=s(u_,"PreTrainedTokenizerFast"),u_.forEach(t),gT=s(Wc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wc.forEach(t),_T=p(jt),vo=a(jt,"DIV",{class:!0});var os=i(vo);v(La.$$.fragment,os),bT=p(os),Uh=a(os,"P",{});var g_=i(Uh);kT=s(g_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),g_.forEach(t),TT=p(os),Da=a(os,"UL",{});var Hc=i(Da);ep=a(Hc,"LI",{});var Jp=i(ep);yT=s(Jp,"single sequence: "),Wh=a(Jp,"CODE",{});var __=i(Wh);vT=s(__,"[CLS] X [SEP]"),__.forEach(t),Jp.forEach(t),wT=p(Hc),tp=a(Hc,"LI",{});var Qz=i(tp);$T=s(Qz,"pair of sequences: "),Hh=a(Qz,"CODE",{});var Vz=i(Hh);FT=s(Vz,"[CLS] A [SEP] B [SEP]"),Vz.forEach(t),Qz.forEach(t),Hc.forEach(t),os.forEach(t),xT=p(jt),Nt=a(jt,"DIV",{class:!0});var Yr=i(Nt);v(Sa.$$.fragment,Yr),BT=p(Yr),Rh=a(Yr,"P",{});var Kz=i(Rh);MT=s(Kz,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Kz.forEach(t),ET=p(Yr),v(ls.$$.fragment,Yr),zT=p(Yr),Wo=a(Yr,"P",{});var Gp=i(Wo);PT=s(Gp,"If "),Qh=a(Gp,"CODE",{});var Jz=i(Qh);qT=s(Jz,"token_ids_1"),Jz.forEach(t),jT=s(Gp," is "),Vh=a(Gp,"CODE",{});var Gz=i(Vh);CT=s(Gz,"None"),Gz.forEach(t),NT=s(Gp,", this method only returns the first portion of the mask (0s)."),Gp.forEach(t),Yr.forEach(t),jt.forEach(t),w_=p(o),Ho=a(o,"H2",{class:!0});var xb=i(Ho);ds=a(xb,"A",{id:!0,class:!0,href:!0});var Xz=i(ds);Kh=a(Xz,"SPAN",{});var Yz=i(Kh);v(Ua.$$.fragment,Yz),Yz.forEach(t),Xz.forEach(t),OT=p(xb),Jh=a(xb,"SPAN",{});var Zz=i(Jh);AT=s(Zz,"Bert specific outputs"),Zz.forEach(t),xb.forEach(t),$_=p(o),Ro=a(o,"DIV",{class:!0});var Bb=i(Ro);v(Wa.$$.fragment,Bb),IT=p(Bb),Ha=a(Bb,"P",{});var Mb=i(Ha);LT=s(Mb,"Output type of "),op=a(Mb,"A",{href:!0});var e4=i(op);DT=s(e4,"BertForPreTraining"),e4.forEach(t),ST=s(Mb,"."),Mb.forEach(t),Bb.forEach(t),F_=p(o),Qo=a(o,"DIV",{class:!0});var Eb=i(Qo);v(Ra.$$.fragment,Eb),UT=p(Eb),Qa=a(Eb,"P",{});var zb=i(Qa);WT=s(zb,"Output type of "),np=a(zb,"A",{href:!0});var t4=i(np);HT=s(t4,"TFBertForPreTraining"),t4.forEach(t),RT=s(zb,"."),zb.forEach(t),Eb.forEach(t),x_=p(o),lo=a(o,"DIV",{class:!0});var Xp=i(lo);v(Va.$$.fragment,Xp),QT=p(Xp),Ka=a(Xp,"P",{});var Pb=i(Ka);VT=s(Pb,"Output type of "),sp=a(Pb,"A",{href:!0});var o4=i(sp);KT=s(o4,"BertForPreTraining"),o4.forEach(t),JT=s(Pb,"."),Pb.forEach(t),GT=p(Xp),cs=a(Xp,"DIV",{class:!0});var qb=i(cs);v(Ja.$$.fragment,qb),XT=p(qb),Gh=a(qb,"P",{});var n4=i(Gh);YT=s(n4,"\u201CReturns a new object replacing the specified fields with new values."),n4.forEach(t),qb.forEach(t),Xp.forEach(t),B_=p(o),Vo=a(o,"H2",{class:!0});var jb=i(Vo);ps=a(jb,"A",{id:!0,class:!0,href:!0});var s4=i(ps);Xh=a(s4,"SPAN",{});var r4=i(Xh);v(Ga.$$.fragment,r4),r4.forEach(t),s4.forEach(t),ZT=p(jb),Yh=a(jb,"SPAN",{});var a4=i(Yh);ey=s(a4,"BertModel"),a4.forEach(t),jb.forEach(t),M_=p(o),Oe=a(o,"DIV",{class:!0});var yt=i(Oe);v(Xa.$$.fragment,yt),ty=p(yt),Zh=a(yt,"P",{});var i4=i(Zh);oy=s(i4,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),i4.forEach(t),ny=p(yt),Ya=a(yt,"P",{});var Cb=i(Ya);sy=s(Cb,"This model inherits from "),rp=a(Cb,"A",{href:!0});var l4=i(rp);ry=s(l4,"PreTrainedModel"),l4.forEach(t),ay=s(Cb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb.forEach(t),iy=p(yt),Za=a(yt,"P",{});var Nb=i(Za);ly=s(Nb,"This model is also a PyTorch "),ei=a(Nb,"A",{href:!0,rel:!0});var d4=i(ei);dy=s(d4,"torch.nn.Module"),d4.forEach(t),cy=s(Nb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb.forEach(t),py=p(yt),ti=a(yt,"P",{});var Ob=i(ti);hy=s(Ob,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),oi=a(Ob,"A",{href:!0,rel:!0});var c4=i(oi);fy=s(c4,`Attention is
all you need`),c4.forEach(t),my=s(Ob,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ob.forEach(t),uy=p(yt),Ve=a(yt,"P",{});var vt=i(Ve);gy=s(vt,"To behave as an decoder the model needs to be initialized with the "),ef=a(vt,"CODE",{});var p4=i(ef);_y=s(p4,"is_decoder"),p4.forEach(t),by=s(vt,` argument of the configuration set
to `),tf=a(vt,"CODE",{});var h4=i(tf);ky=s(h4,"True"),h4.forEach(t),Ty=s(vt,". To be used in a Seq2Seq model, the model needs to initialized with both "),of=a(vt,"CODE",{});var f4=i(of);yy=s(f4,"is_decoder"),f4.forEach(t),vy=s(vt,` argument and
`),nf=a(vt,"CODE",{});var m4=i(nf);wy=s(m4,"add_cross_attention"),m4.forEach(t),$y=s(vt," set to "),sf=a(vt,"CODE",{});var u4=i(sf);Fy=s(u4,"True"),u4.forEach(t),xy=s(vt,"; an "),rf=a(vt,"CODE",{});var g4=i(rf);By=s(g4,"encoder_hidden_states"),g4.forEach(t),My=s(vt," is then expected as an input to the forward pass."),vt.forEach(t),Ey=p(yt),Ot=a(yt,"DIV",{class:!0});var Zr=i(Ot);v(ni.$$.fragment,Zr),zy=p(Zr),Ko=a(Zr,"P",{});var Yp=i(Ko);Py=s(Yp,"The "),ap=a(Yp,"A",{href:!0});var _4=i(ap);qy=s(_4,"BertModel"),_4.forEach(t),jy=s(Yp," forward method, overrides the "),af=a(Yp,"CODE",{});var b4=i(af);Cy=s(b4,"__call__"),b4.forEach(t),Ny=s(Yp," special method."),Yp.forEach(t),Oy=p(Zr),v(hs.$$.fragment,Zr),Ay=p(Zr),v(fs.$$.fragment,Zr),Zr.forEach(t),yt.forEach(t),E_=p(o),Jo=a(o,"H2",{class:!0});var Ab=i(Jo);ms=a(Ab,"A",{id:!0,class:!0,href:!0});var k4=i(ms);lf=a(k4,"SPAN",{});var T4=i(lf);v(si.$$.fragment,T4),T4.forEach(t),k4.forEach(t),Iy=p(Ab),df=a(Ab,"SPAN",{});var y4=i(df);Ly=s(y4,"BertForPreTraining"),y4.forEach(t),Ab.forEach(t),z_=p(o),rt=a(o,"DIV",{class:!0});var wo=i(rt);v(ri.$$.fragment,wo),Dy=p(wo),Go=a(wo,"P",{});var Zp=i(Go);Sy=s(Zp,"Bert Model with two heads on top as done during the pretraining: a "),cf=a(Zp,"CODE",{});var v4=i(cf);Uy=s(v4,"masked language modeling"),v4.forEach(t),Wy=s(Zp," head and a "),pf=a(Zp,"CODE",{});var w4=i(pf);Hy=s(w4,"next sentence prediction (classification)"),w4.forEach(t),Ry=s(Zp," head."),Zp.forEach(t),Qy=p(wo),ai=a(wo,"P",{});var Ib=i(ai);Vy=s(Ib,"This model inherits from "),ip=a(Ib,"A",{href:!0});var $4=i(ip);Ky=s($4,"PreTrainedModel"),$4.forEach(t),Jy=s(Ib,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib.forEach(t),Gy=p(wo),ii=a(wo,"P",{});var Lb=i(ii);Xy=s(Lb,"This model is also a PyTorch "),li=a(Lb,"A",{href:!0,rel:!0});var F4=i(li);Yy=s(F4,"torch.nn.Module"),F4.forEach(t),Zy=s(Lb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lb.forEach(t),ev=p(wo),At=a(wo,"DIV",{class:!0});var ea=i(At);v(di.$$.fragment,ea),tv=p(ea),Xo=a(ea,"P",{});var eh=i(Xo);ov=s(eh,"The "),lp=a(eh,"A",{href:!0});var x4=i(lp);nv=s(x4,"BertForPreTraining"),x4.forEach(t),sv=s(eh," forward method, overrides the "),hf=a(eh,"CODE",{});var B4=i(hf);rv=s(B4,"__call__"),B4.forEach(t),av=s(eh," special method."),eh.forEach(t),iv=p(ea),v(us.$$.fragment,ea),lv=p(ea),v(gs.$$.fragment,ea),ea.forEach(t),wo.forEach(t),P_=p(o),Yo=a(o,"H2",{class:!0});var Db=i(Yo);_s=a(Db,"A",{id:!0,class:!0,href:!0});var M4=i(_s);ff=a(M4,"SPAN",{});var E4=i(ff);v(ci.$$.fragment,E4),E4.forEach(t),M4.forEach(t),dv=p(Db),mf=a(Db,"SPAN",{});var z4=i(mf);cv=s(z4,"BertLMHeadModel"),z4.forEach(t),Db.forEach(t),q_=p(o),at=a(o,"DIV",{class:!0});var $o=i(at);v(pi.$$.fragment,$o),pv=p($o),hi=a($o,"P",{});var Sb=i(hi);hv=s(Sb,"Bert Model with a "),uf=a(Sb,"CODE",{});var P4=i(uf);fv=s(P4,"language modeling"),P4.forEach(t),mv=s(Sb," head on top for CLM fine-tuning."),Sb.forEach(t),uv=p($o),fi=a($o,"P",{});var Ub=i(fi);gv=s(Ub,"This model inherits from "),dp=a(Ub,"A",{href:!0});var q4=i(dp);_v=s(q4,"PreTrainedModel"),q4.forEach(t),bv=s(Ub,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub.forEach(t),kv=p($o),mi=a($o,"P",{});var Wb=i(mi);Tv=s(Wb,"This model is also a PyTorch "),ui=a(Wb,"A",{href:!0,rel:!0});var j4=i(ui);yv=s(j4,"torch.nn.Module"),j4.forEach(t),vv=s(Wb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wb.forEach(t),wv=p($o),It=a($o,"DIV",{class:!0});var ta=i(It);v(gi.$$.fragment,ta),$v=p(ta),Zo=a(ta,"P",{});var th=i(Zo);Fv=s(th,"The "),cp=a(th,"A",{href:!0});var C4=i(cp);xv=s(C4,"BertLMHeadModel"),C4.forEach(t),Bv=s(th," forward method, overrides the "),gf=a(th,"CODE",{});var N4=i(gf);Mv=s(N4,"__call__"),N4.forEach(t),Ev=s(th," special method."),th.forEach(t),zv=p(ta),v(bs.$$.fragment,ta),Pv=p(ta),v(ks.$$.fragment,ta),ta.forEach(t),$o.forEach(t),j_=p(o),en=a(o,"H2",{class:!0});var Hb=i(en);Ts=a(Hb,"A",{id:!0,class:!0,href:!0});var O4=i(Ts);_f=a(O4,"SPAN",{});var A4=i(_f);v(_i.$$.fragment,A4),A4.forEach(t),O4.forEach(t),qv=p(Hb),bf=a(Hb,"SPAN",{});var I4=i(bf);jv=s(I4,"BertForMaskedLM"),I4.forEach(t),Hb.forEach(t),C_=p(o),it=a(o,"DIV",{class:!0});var Fo=i(it);v(bi.$$.fragment,Fo),Cv=p(Fo),ki=a(Fo,"P",{});var Rb=i(ki);Nv=s(Rb,"Bert Model with a "),kf=a(Rb,"CODE",{});var L4=i(kf);Ov=s(L4,"language modeling"),L4.forEach(t),Av=s(Rb," head on top."),Rb.forEach(t),Iv=p(Fo),Ti=a(Fo,"P",{});var Qb=i(Ti);Lv=s(Qb,"This model inherits from "),pp=a(Qb,"A",{href:!0});var D4=i(pp);Dv=s(D4,"PreTrainedModel"),D4.forEach(t),Sv=s(Qb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qb.forEach(t),Uv=p(Fo),yi=a(Fo,"P",{});var Vb=i(yi);Wv=s(Vb,"This model is also a PyTorch "),vi=a(Vb,"A",{href:!0,rel:!0});var S4=i(vi);Hv=s(S4,"torch.nn.Module"),S4.forEach(t),Rv=s(Vb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vb.forEach(t),Qv=p(Fo),ft=a(Fo,"DIV",{class:!0});var xo=i(ft);v(wi.$$.fragment,xo),Vv=p(xo),tn=a(xo,"P",{});var oh=i(tn);Kv=s(oh,"The "),hp=a(oh,"A",{href:!0});var U4=i(hp);Jv=s(U4,"BertForMaskedLM"),U4.forEach(t),Gv=s(oh," forward method, overrides the "),Tf=a(oh,"CODE",{});var W4=i(Tf);Xv=s(W4,"__call__"),W4.forEach(t),Yv=s(oh," special method."),oh.forEach(t),Zv=p(xo),v(ys.$$.fragment,xo),ew=p(xo),v(vs.$$.fragment,xo),tw=p(xo),v(ws.$$.fragment,xo),xo.forEach(t),Fo.forEach(t),N_=p(o),on=a(o,"H2",{class:!0});var Kb=i(on);$s=a(Kb,"A",{id:!0,class:!0,href:!0});var H4=i($s);yf=a(H4,"SPAN",{});var R4=i(yf);v($i.$$.fragment,R4),R4.forEach(t),H4.forEach(t),ow=p(Kb),vf=a(Kb,"SPAN",{});var Q4=i(vf);nw=s(Q4,"BertForNextSentencePrediction"),Q4.forEach(t),Kb.forEach(t),O_=p(o),lt=a(o,"DIV",{class:!0});var Bo=i(lt);v(Fi.$$.fragment,Bo),sw=p(Bo),xi=a(Bo,"P",{});var Jb=i(xi);rw=s(Jb,"Bert Model with a "),wf=a(Jb,"CODE",{});var V4=i(wf);aw=s(V4,"next sentence prediction (classification)"),V4.forEach(t),iw=s(Jb," head on top."),Jb.forEach(t),lw=p(Bo),Bi=a(Bo,"P",{});var Gb=i(Bi);dw=s(Gb,"This model inherits from "),fp=a(Gb,"A",{href:!0});var K4=i(fp);cw=s(K4,"PreTrainedModel"),K4.forEach(t),pw=s(Gb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gb.forEach(t),hw=p(Bo),Mi=a(Bo,"P",{});var Xb=i(Mi);fw=s(Xb,"This model is also a PyTorch "),Ei=a(Xb,"A",{href:!0,rel:!0});var J4=i(Ei);mw=s(J4,"torch.nn.Module"),J4.forEach(t),uw=s(Xb,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xb.forEach(t),gw=p(Bo),Lt=a(Bo,"DIV",{class:!0});var oa=i(Lt);v(zi.$$.fragment,oa),_w=p(oa),nn=a(oa,"P",{});var nh=i(nn);bw=s(nh,"The "),mp=a(nh,"A",{href:!0});var G4=i(mp);kw=s(G4,"BertForNextSentencePrediction"),G4.forEach(t),Tw=s(nh," forward method, overrides the "),$f=a(nh,"CODE",{});var X4=i($f);yw=s(X4,"__call__"),X4.forEach(t),vw=s(nh," special method."),nh.forEach(t),ww=p(oa),v(Fs.$$.fragment,oa),$w=p(oa),v(xs.$$.fragment,oa),oa.forEach(t),Bo.forEach(t),A_=p(o),sn=a(o,"H2",{class:!0});var Yb=i(sn);Bs=a(Yb,"A",{id:!0,class:!0,href:!0});var Y4=i(Bs);Ff=a(Y4,"SPAN",{});var Z4=i(Ff);v(Pi.$$.fragment,Z4),Z4.forEach(t),Y4.forEach(t),Fw=p(Yb),xf=a(Yb,"SPAN",{});var eP=i(xf);xw=s(eP,"BertForSequenceClassification"),eP.forEach(t),Yb.forEach(t),I_=p(o),dt=a(o,"DIV",{class:!0});var Mo=i(dt);v(qi.$$.fragment,Mo),Bw=p(Mo),Bf=a(Mo,"P",{});var tP=i(Bf);Mw=s(tP,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),tP.forEach(t),Ew=p(Mo),ji=a(Mo,"P",{});var Zb=i(ji);zw=s(Zb,"This model inherits from "),up=a(Zb,"A",{href:!0});var oP=i(up);Pw=s(oP,"PreTrainedModel"),oP.forEach(t),qw=s(Zb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb.forEach(t),jw=p(Mo),Ci=a(Mo,"P",{});var ek=i(Ci);Cw=s(ek,"This model is also a PyTorch "),Ni=a(ek,"A",{href:!0,rel:!0});var nP=i(Ni);Nw=s(nP,"torch.nn.Module"),nP.forEach(t),Ow=s(ek,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ek.forEach(t),Aw=p(Mo),Qe=a(Mo,"DIV",{class:!0});var wt=i(Qe);v(Oi.$$.fragment,wt),Iw=p(wt),rn=a(wt,"P",{});var sh=i(rn);Lw=s(sh,"The "),gp=a(sh,"A",{href:!0});var sP=i(gp);Dw=s(sP,"BertForSequenceClassification"),sP.forEach(t),Sw=s(sh," forward method, overrides the "),Mf=a(sh,"CODE",{});var rP=i(Mf);Uw=s(rP,"__call__"),rP.forEach(t),Ww=s(sh," special method."),sh.forEach(t),Hw=p(wt),v(Ms.$$.fragment,wt),Rw=p(wt),v(Es.$$.fragment,wt),Qw=p(wt),v(zs.$$.fragment,wt),Vw=p(wt),v(Ps.$$.fragment,wt),Kw=p(wt),v(qs.$$.fragment,wt),wt.forEach(t),Mo.forEach(t),L_=p(o),an=a(o,"H2",{class:!0});var tk=i(an);js=a(tk,"A",{id:!0,class:!0,href:!0});var aP=i(js);Ef=a(aP,"SPAN",{});var iP=i(Ef);v(Ai.$$.fragment,iP),iP.forEach(t),aP.forEach(t),Jw=p(tk),zf=a(tk,"SPAN",{});var lP=i(zf);Gw=s(lP,"BertForMultipleChoice"),lP.forEach(t),tk.forEach(t),D_=p(o),ct=a(o,"DIV",{class:!0});var Eo=i(ct);v(Ii.$$.fragment,Eo),Xw=p(Eo),Pf=a(Eo,"P",{});var dP=i(Pf);Yw=s(dP,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dP.forEach(t),Zw=p(Eo),Li=a(Eo,"P",{});var ok=i(Li);e$=s(ok,"This model inherits from "),_p=a(ok,"A",{href:!0});var cP=i(_p);t$=s(cP,"PreTrainedModel"),cP.forEach(t),o$=s(ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok.forEach(t),n$=p(Eo),Di=a(Eo,"P",{});var nk=i(Di);s$=s(nk,"This model is also a PyTorch "),Si=a(nk,"A",{href:!0,rel:!0});var pP=i(Si);r$=s(pP,"torch.nn.Module"),pP.forEach(t),a$=s(nk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nk.forEach(t),i$=p(Eo),Dt=a(Eo,"DIV",{class:!0});var na=i(Dt);v(Ui.$$.fragment,na),l$=p(na),ln=a(na,"P",{});var rh=i(ln);d$=s(rh,"The "),bp=a(rh,"A",{href:!0});var hP=i(bp);c$=s(hP,"BertForMultipleChoice"),hP.forEach(t),p$=s(rh," forward method, overrides the "),qf=a(rh,"CODE",{});var fP=i(qf);h$=s(fP,"__call__"),fP.forEach(t),f$=s(rh," special method."),rh.forEach(t),m$=p(na),v(Cs.$$.fragment,na),u$=p(na),v(Ns.$$.fragment,na),na.forEach(t),Eo.forEach(t),S_=p(o),dn=a(o,"H2",{class:!0});var sk=i(dn);Os=a(sk,"A",{id:!0,class:!0,href:!0});var mP=i(Os);jf=a(mP,"SPAN",{});var uP=i(jf);v(Wi.$$.fragment,uP),uP.forEach(t),mP.forEach(t),g$=p(sk),Cf=a(sk,"SPAN",{});var gP=i(Cf);_$=s(gP,"BertForTokenClassification"),gP.forEach(t),sk.forEach(t),U_=p(o),pt=a(o,"DIV",{class:!0});var zo=i(pt);v(Hi.$$.fragment,zo),b$=p(zo),Nf=a(zo,"P",{});var _P=i(Nf);k$=s(_P,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_P.forEach(t),T$=p(zo),Ri=a(zo,"P",{});var rk=i(Ri);y$=s(rk,"This model inherits from "),kp=a(rk,"A",{href:!0});var bP=i(kp);v$=s(bP,"PreTrainedModel"),bP.forEach(t),w$=s(rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk.forEach(t),$$=p(zo),Qi=a(zo,"P",{});var ak=i(Qi);F$=s(ak,"This model is also a PyTorch "),Vi=a(ak,"A",{href:!0,rel:!0});var kP=i(Vi);x$=s(kP,"torch.nn.Module"),kP.forEach(t),B$=s(ak,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ak.forEach(t),M$=p(zo),mt=a(zo,"DIV",{class:!0});var Po=i(mt);v(Ki.$$.fragment,Po),E$=p(Po),cn=a(Po,"P",{});var ah=i(cn);z$=s(ah,"The "),Tp=a(ah,"A",{href:!0});var TP=i(Tp);P$=s(TP,"BertForTokenClassification"),TP.forEach(t),q$=s(ah," forward method, overrides the "),Of=a(ah,"CODE",{});var yP=i(Of);j$=s(yP,"__call__"),yP.forEach(t),C$=s(ah," special method."),ah.forEach(t),N$=p(Po),v(As.$$.fragment,Po),O$=p(Po),v(Is.$$.fragment,Po),A$=p(Po),v(Ls.$$.fragment,Po),Po.forEach(t),zo.forEach(t),W_=p(o),pn=a(o,"H2",{class:!0});var ik=i(pn);Ds=a(ik,"A",{id:!0,class:!0,href:!0});var vP=i(Ds);Af=a(vP,"SPAN",{});var wP=i(Af);v(Ji.$$.fragment,wP),wP.forEach(t),vP.forEach(t),I$=p(ik),If=a(ik,"SPAN",{});var $P=i(If);L$=s($P,"BertForQuestionAnswering"),$P.forEach(t),ik.forEach(t),H_=p(o),ht=a(o,"DIV",{class:!0});var qo=i(ht);v(Gi.$$.fragment,qo),D$=p(qo),hn=a(qo,"P",{});var ih=i(hn);S$=s(ih,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Lf=a(ih,"CODE",{});var FP=i(Lf);U$=s(FP,"span start logits"),FP.forEach(t),W$=s(ih," and "),Df=a(ih,"CODE",{});var xP=i(Df);H$=s(xP,"span end logits"),xP.forEach(t),R$=s(ih,")."),ih.forEach(t),Q$=p(qo),Xi=a(qo,"P",{});var lk=i(Xi);V$=s(lk,"This model inherits from "),yp=a(lk,"A",{href:!0});var BP=i(yp);K$=s(BP,"PreTrainedModel"),BP.forEach(t),J$=s(lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk.forEach(t),G$=p(qo),Yi=a(qo,"P",{});var dk=i(Yi);X$=s(dk,"This model is also a PyTorch "),Zi=a(dk,"A",{href:!0,rel:!0});var MP=i(Zi);Y$=s(MP,"torch.nn.Module"),MP.forEach(t),Z$=s(dk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dk.forEach(t),eF=p(qo),ut=a(qo,"DIV",{class:!0});var jo=i(ut);v(el.$$.fragment,jo),tF=p(jo),fn=a(jo,"P",{});var lh=i(fn);oF=s(lh,"The "),vp=a(lh,"A",{href:!0});var EP=i(vp);nF=s(EP,"BertForQuestionAnswering"),EP.forEach(t),sF=s(lh," forward method, overrides the "),Sf=a(lh,"CODE",{});var zP=i(Sf);rF=s(zP,"__call__"),zP.forEach(t),aF=s(lh," special method."),lh.forEach(t),iF=p(jo),v(Ss.$$.fragment,jo),lF=p(jo),v(Us.$$.fragment,jo),dF=p(jo),v(Ws.$$.fragment,jo),jo.forEach(t),qo.forEach(t),R_=p(o),mn=a(o,"H2",{class:!0});var ck=i(mn);Hs=a(ck,"A",{id:!0,class:!0,href:!0});var PP=i(Hs);Uf=a(PP,"SPAN",{});var qP=i(Uf);v(tl.$$.fragment,qP),qP.forEach(t),PP.forEach(t),cF=p(ck),Wf=a(ck,"SPAN",{});var jP=i(Wf);pF=s(jP,"TFBertModel"),jP.forEach(t),ck.forEach(t),Q_=p(o),Ke=a(o,"DIV",{class:!0});var Zt=i(Ke);v(ol.$$.fragment,Zt),hF=p(Zt),Hf=a(Zt,"P",{});var CP=i(Hf);fF=s(CP,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),CP.forEach(t),mF=p(Zt),nl=a(Zt,"P",{});var pk=i(nl);uF=s(pk,"This model inherits from "),wp=a(pk,"A",{href:!0});var NP=i(wp);gF=s(NP,"TFPreTrainedModel"),NP.forEach(t),_F=s(pk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pk.forEach(t),bF=p(Zt),sl=a(Zt,"P",{});var hk=i(sl);kF=s(hk,"This model is also a "),rl=a(hk,"A",{href:!0,rel:!0});var OP=i(rl);TF=s(OP,"tf.keras.Model"),OP.forEach(t),yF=s(hk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hk.forEach(t),vF=p(Zt),v(Rs.$$.fragment,Zt),wF=p(Zt),St=a(Zt,"DIV",{class:!0});var sa=i(St);v(al.$$.fragment,sa),$F=p(sa),un=a(sa,"P",{});var dh=i(un);FF=s(dh,"The "),$p=a(dh,"A",{href:!0});var AP=i($p);xF=s(AP,"TFBertModel"),AP.forEach(t),BF=s(dh," forward method, overrides the "),Rf=a(dh,"CODE",{});var IP=i(Rf);MF=s(IP,"__call__"),IP.forEach(t),EF=s(dh," special method."),dh.forEach(t),zF=p(sa),v(Qs.$$.fragment,sa),PF=p(sa),v(Vs.$$.fragment,sa),sa.forEach(t),Zt.forEach(t),V_=p(o),gn=a(o,"H2",{class:!0});var fk=i(gn);Ks=a(fk,"A",{id:!0,class:!0,href:!0});var LP=i(Ks);Qf=a(LP,"SPAN",{});var DP=i(Qf);v(il.$$.fragment,DP),DP.forEach(t),LP.forEach(t),qF=p(fk),Vf=a(fk,"SPAN",{});var SP=i(Vf);jF=s(SP,"TFBertForPreTraining"),SP.forEach(t),fk.forEach(t),K_=p(o),Je=a(o,"DIV",{class:!0});var eo=i(Je);v(ll.$$.fragment,eo),CF=p(eo),_n=a(eo,"P",{});var ch=i(_n);NF=s(ch,`Bert Model with two heads on top as done during the pretraining:
a `),Kf=a(ch,"CODE",{});var UP=i(Kf);OF=s(UP,"masked language modeling"),UP.forEach(t),AF=s(ch," head and a "),Jf=a(ch,"CODE",{});var WP=i(Jf);IF=s(WP,"next sentence prediction (classification)"),WP.forEach(t),LF=s(ch," head."),ch.forEach(t),DF=p(eo),dl=a(eo,"P",{});var mk=i(dl);SF=s(mk,"This model inherits from "),Fp=a(mk,"A",{href:!0});var HP=i(Fp);UF=s(HP,"TFPreTrainedModel"),HP.forEach(t),WF=s(mk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mk.forEach(t),HF=p(eo),cl=a(eo,"P",{});var uk=i(cl);RF=s(uk,"This model is also a "),pl=a(uk,"A",{href:!0,rel:!0});var RP=i(pl);QF=s(RP,"tf.keras.Model"),RP.forEach(t),VF=s(uk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uk.forEach(t),KF=p(eo),v(Js.$$.fragment,eo),JF=p(eo),Ut=a(eo,"DIV",{class:!0});var ra=i(Ut);v(hl.$$.fragment,ra),GF=p(ra),bn=a(ra,"P",{});var ph=i(bn);XF=s(ph,"The "),xp=a(ph,"A",{href:!0});var QP=i(xp);YF=s(QP,"TFBertForPreTraining"),QP.forEach(t),ZF=s(ph," forward method, overrides the "),Gf=a(ph,"CODE",{});var VP=i(Gf);e2=s(VP,"__call__"),VP.forEach(t),t2=s(ph," special method."),ph.forEach(t),o2=p(ra),v(Gs.$$.fragment,ra),n2=p(ra),v(Xs.$$.fragment,ra),ra.forEach(t),eo.forEach(t),J_=p(o),kn=a(o,"H2",{class:!0});var gk=i(kn);Ys=a(gk,"A",{id:!0,class:!0,href:!0});var KP=i(Ys);Xf=a(KP,"SPAN",{});var JP=i(Xf);v(fl.$$.fragment,JP),JP.forEach(t),KP.forEach(t),s2=p(gk),Yf=a(gk,"SPAN",{});var GP=i(Yf);r2=s(GP,"TFBertModelLMHeadModel"),GP.forEach(t),gk.forEach(t),G_=p(o),Tn=a(o,"DIV",{class:!0});var _k=i(Tn);v(ml.$$.fragment,_k),a2=p(_k),gt=a(_k,"DIV",{class:!0});var Co=i(gt);v(ul.$$.fragment,Co),i2=p(Co),Ae=a(Co,"P",{});var nt=i(Ae);l2=s(nt,"encoder_hidden_states  ("),Zf=a(nt,"CODE",{});var XP=i(Zf);d2=s(XP,"tf.Tensor"),XP.forEach(t),c2=s(nt," of shape "),em=a(nt,"CODE",{});var YP=i(em);p2=s(YP,"(batch_size, sequence_length, hidden_size)"),YP.forEach(t),h2=s(nt,", "),tm=a(nt,"EM",{});var ZP=i(tm);f2=s(ZP,"optional"),ZP.forEach(t),m2=s(nt,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),om=a(nt,"CODE",{});var eq=i(om);u2=s(eq,"tf.Tensor"),eq.forEach(t),g2=s(nt," of shape "),nm=a(nt,"CODE",{});var tq=i(nm);_2=s(tq,"(batch_size, sequence_length)"),tq.forEach(t),b2=s(nt,", "),sm=a(nt,"EM",{});var oq=i(sm);k2=s(oq,"optional"),oq.forEach(t),T2=s(nt,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),rm=a(nt,"CODE",{});var nq=i(rm);y2=s(nq,"[0, 1]"),nq.forEach(t),v2=s(nt,":"),nt.forEach(t),w2=p(Co),gl=a(Co,"UL",{});var bk=i(gl);_l=a(bk,"LI",{});var kk=i(_l);$2=s(kk,"1 for tokens that are "),am=a(kk,"STRONG",{});var sq=i(am);F2=s(sq,"not masked"),sq.forEach(t),x2=s(kk,","),kk.forEach(t),B2=p(bk),bl=a(bk,"LI",{});var Tk=i(bl);M2=s(Tk,"0 for tokens that are "),im=a(Tk,"STRONG",{});var rq=i(im);E2=s(rq,"masked"),rq.forEach(t),z2=s(Tk,"."),Tk.forEach(t),bk.forEach(t),P2=p(Co),G=a(Co,"P",{});var Z=i(G);q2=s(Z,"past_key_values ("),lm=a(Z,"CODE",{});var aq=i(lm);j2=s(aq,"Tuple[Tuple[tf.Tensor]]"),aq.forEach(t),C2=s(Z," of length "),dm=a(Z,"CODE",{});var iq=i(dm);N2=s(iq,"config.n_layers"),iq.forEach(t),O2=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),cm=a(Z,"CODE",{});var lq=i(cm);A2=s(lq,"past_key_values"),lq.forEach(t),I2=s(Z," are used, the user can optionally input only the last "),pm=a(Z,"CODE",{});var dq=i(pm);L2=s(dq,"decoder_input_ids"),dq.forEach(t),D2=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),hm=a(Z,"CODE",{});var cq=i(hm);S2=s(cq,"(batch_size, 1)"),cq.forEach(t),U2=s(Z,` instead of all
`),fm=a(Z,"CODE",{});var pq=i(fm);W2=s(pq,"decoder_input_ids"),pq.forEach(t),H2=s(Z," of shape "),mm=a(Z,"CODE",{});var hq=i(mm);R2=s(hq,"(batch_size, sequence_length)"),hq.forEach(t),Q2=s(Z,`.
use_cache (`),um=a(Z,"CODE",{});var fq=i(um);V2=s(fq,"bool"),fq.forEach(t),K2=s(Z,", "),gm=a(Z,"EM",{});var mq=i(gm);J2=s(mq,"optional"),mq.forEach(t),G2=s(Z,", defaults to "),_m=a(Z,"CODE",{});var uq=i(_m);X2=s(uq,"True"),uq.forEach(t),Y2=s(Z,`):
If set to `),bm=a(Z,"CODE",{});var gq=i(bm);Z2=s(gq,"True"),gq.forEach(t),ex=s(Z,", "),km=a(Z,"CODE",{});var _q=i(km);tx=s(_q,"past_key_values"),_q.forEach(t),ox=s(Z,` key value states are returned and can be used to speed up decoding (see
`),Tm=a(Z,"CODE",{});var bq=i(Tm);nx=s(bq,"past_key_values"),bq.forEach(t),sx=s(Z,"). Set to "),ym=a(Z,"CODE",{});var kq=i(ym);rx=s(kq,"False"),kq.forEach(t),ax=s(Z," during training, "),vm=a(Z,"CODE",{});var Tq=i(vm);ix=s(Tq,"True"),Tq.forEach(t),lx=s(Z,` during generation
labels (`),wm=a(Z,"CODE",{});var yq=i(wm);dx=s(yq,"tf.Tensor"),yq.forEach(t),cx=s(Z," or "),$m=a(Z,"CODE",{});var vq=i($m);px=s(vq,"np.ndarray"),vq.forEach(t),hx=s(Z," of shape "),Fm=a(Z,"CODE",{});var wq=i(Fm);fx=s(wq,"(batch_size, sequence_length)"),wq.forEach(t),mx=s(Z,", "),xm=a(Z,"EM",{});var $q=i(xm);ux=s($q,"optional"),$q.forEach(t),gx=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Bm=a(Z,"CODE",{});var Fq=i(Bm);_x=s(Fq,"[0, ..., config.vocab_size - 1]"),Fq.forEach(t),bx=s(Z,"."),Z.forEach(t),kx=p(Co),v(Zs.$$.fragment,Co),Co.forEach(t),_k.forEach(t),X_=p(o),yn=a(o,"H2",{class:!0});var yk=i(yn);er=a(yk,"A",{id:!0,class:!0,href:!0});var xq=i(er);Mm=a(xq,"SPAN",{});var Bq=i(Mm);v(kl.$$.fragment,Bq),Bq.forEach(t),xq.forEach(t),Tx=p(yk),Em=a(yk,"SPAN",{});var Mq=i(Em);yx=s(Mq,"TFBertForMaskedLM"),Mq.forEach(t),yk.forEach(t),Y_=p(o),Ge=a(o,"DIV",{class:!0});var to=i(Ge);v(Tl.$$.fragment,to),vx=p(to),yl=a(to,"P",{});var vk=i(yl);wx=s(vk,"Bert Model with a "),zm=a(vk,"CODE",{});var Eq=i(zm);$x=s(Eq,"language modeling"),Eq.forEach(t),Fx=s(vk," head on top."),vk.forEach(t),xx=p(to),vl=a(to,"P",{});var wk=i(vl);Bx=s(wk,"This model inherits from "),Bp=a(wk,"A",{href:!0});var zq=i(Bp);Mx=s(zq,"TFPreTrainedModel"),zq.forEach(t),Ex=s(wk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wk.forEach(t),zx=p(to),wl=a(to,"P",{});var $k=i(wl);Px=s($k,"This model is also a "),$l=a($k,"A",{href:!0,rel:!0});var Pq=i($l);qx=s(Pq,"tf.keras.Model"),Pq.forEach(t),jx=s($k,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$k.forEach(t),Cx=p(to),v(tr.$$.fragment,to),Nx=p(to),_t=a(to,"DIV",{class:!0});var No=i(_t);v(Fl.$$.fragment,No),Ox=p(No),vn=a(No,"P",{});var hh=i(vn);Ax=s(hh,"The "),Mp=a(hh,"A",{href:!0});var qq=i(Mp);Ix=s(qq,"TFBertForMaskedLM"),qq.forEach(t),Lx=s(hh," forward method, overrides the "),Pm=a(hh,"CODE",{});var jq=i(Pm);Dx=s(jq,"__call__"),jq.forEach(t),Sx=s(hh," special method."),hh.forEach(t),Ux=p(No),v(or.$$.fragment,No),Wx=p(No),v(nr.$$.fragment,No),Hx=p(No),v(sr.$$.fragment,No),No.forEach(t),to.forEach(t),Z_=p(o),wn=a(o,"H2",{class:!0});var Fk=i(wn);rr=a(Fk,"A",{id:!0,class:!0,href:!0});var Cq=i(rr);qm=a(Cq,"SPAN",{});var Nq=i(qm);v(xl.$$.fragment,Nq),Nq.forEach(t),Cq.forEach(t),Rx=p(Fk),jm=a(Fk,"SPAN",{});var Oq=i(jm);Qx=s(Oq,"TFBertForNextSentencePrediction"),Oq.forEach(t),Fk.forEach(t),eb=p(o),Xe=a(o,"DIV",{class:!0});var oo=i(Xe);v(Bl.$$.fragment,oo),Vx=p(oo),Ml=a(oo,"P",{});var xk=i(Ml);Kx=s(xk,"Bert Model with a "),Cm=a(xk,"CODE",{});var Aq=i(Cm);Jx=s(Aq,"next sentence prediction (classification)"),Aq.forEach(t),Gx=s(xk," head on top."),xk.forEach(t),Xx=p(oo),El=a(oo,"P",{});var Bk=i(El);Yx=s(Bk,"This model inherits from "),Ep=a(Bk,"A",{href:!0});var Iq=i(Ep);Zx=s(Iq,"TFPreTrainedModel"),Iq.forEach(t),e0=s(Bk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bk.forEach(t),t0=p(oo),zl=a(oo,"P",{});var Mk=i(zl);o0=s(Mk,"This model is also a "),Pl=a(Mk,"A",{href:!0,rel:!0});var Lq=i(Pl);n0=s(Lq,"tf.keras.Model"),Lq.forEach(t),s0=s(Mk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mk.forEach(t),r0=p(oo),v(ar.$$.fragment,oo),a0=p(oo),Wt=a(oo,"DIV",{class:!0});var aa=i(Wt);v(ql.$$.fragment,aa),i0=p(aa),$n=a(aa,"P",{});var fh=i($n);l0=s(fh,"The "),zp=a(fh,"A",{href:!0});var Dq=i(zp);d0=s(Dq,"TFBertForNextSentencePrediction"),Dq.forEach(t),c0=s(fh," forward method, overrides the "),Nm=a(fh,"CODE",{});var Sq=i(Nm);p0=s(Sq,"__call__"),Sq.forEach(t),h0=s(fh," special method."),fh.forEach(t),f0=p(aa),v(ir.$$.fragment,aa),m0=p(aa),v(lr.$$.fragment,aa),aa.forEach(t),oo.forEach(t),tb=p(o),Fn=a(o,"H2",{class:!0});var Ek=i(Fn);dr=a(Ek,"A",{id:!0,class:!0,href:!0});var Uq=i(dr);Om=a(Uq,"SPAN",{});var Wq=i(Om);v(jl.$$.fragment,Wq),Wq.forEach(t),Uq.forEach(t),u0=p(Ek),Am=a(Ek,"SPAN",{});var Hq=i(Am);g0=s(Hq,"TFBertForSequenceClassification"),Hq.forEach(t),Ek.forEach(t),ob=p(o),Ye=a(o,"DIV",{class:!0});var no=i(Ye);v(Cl.$$.fragment,no),_0=p(no),Im=a(no,"P",{});var Rq=i(Im);b0=s(Rq,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Rq.forEach(t),k0=p(no),Nl=a(no,"P",{});var zk=i(Nl);T0=s(zk,"This model inherits from "),Pp=a(zk,"A",{href:!0});var Qq=i(Pp);y0=s(Qq,"TFPreTrainedModel"),Qq.forEach(t),v0=s(zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk.forEach(t),w0=p(no),Ol=a(no,"P",{});var Pk=i(Ol);$0=s(Pk,"This model is also a "),Al=a(Pk,"A",{href:!0,rel:!0});var Vq=i(Al);F0=s(Vq,"tf.keras.Model"),Vq.forEach(t),x0=s(Pk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pk.forEach(t),B0=p(no),v(cr.$$.fragment,no),M0=p(no),bt=a(no,"DIV",{class:!0});var Oo=i(bt);v(Il.$$.fragment,Oo),E0=p(Oo),xn=a(Oo,"P",{});var mh=i(xn);z0=s(mh,"The "),qp=a(mh,"A",{href:!0});var Kq=i(qp);P0=s(Kq,"TFBertForSequenceClassification"),Kq.forEach(t),q0=s(mh," forward method, overrides the "),Lm=a(mh,"CODE",{});var Jq=i(Lm);j0=s(Jq,"__call__"),Jq.forEach(t),C0=s(mh," special method."),mh.forEach(t),N0=p(Oo),v(pr.$$.fragment,Oo),O0=p(Oo),v(hr.$$.fragment,Oo),A0=p(Oo),v(fr.$$.fragment,Oo),Oo.forEach(t),no.forEach(t),nb=p(o),Bn=a(o,"H2",{class:!0});var qk=i(Bn);mr=a(qk,"A",{id:!0,class:!0,href:!0});var Gq=i(mr);Dm=a(Gq,"SPAN",{});var Xq=i(Dm);v(Ll.$$.fragment,Xq),Xq.forEach(t),Gq.forEach(t),I0=p(qk),Sm=a(qk,"SPAN",{});var Yq=i(Sm);L0=s(Yq,"TFBertForMultipleChoice"),Yq.forEach(t),qk.forEach(t),sb=p(o),Ze=a(o,"DIV",{class:!0});var so=i(Ze);v(Dl.$$.fragment,so),D0=p(so),Um=a(so,"P",{});var Zq=i(Um);S0=s(Zq,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zq.forEach(t),U0=p(so),Sl=a(so,"P",{});var jk=i(Sl);W0=s(jk,"This model inherits from "),jp=a(jk,"A",{href:!0});var ej=i(jp);H0=s(ej,"TFPreTrainedModel"),ej.forEach(t),R0=s(jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk.forEach(t),Q0=p(so),Ul=a(so,"P",{});var Ck=i(Ul);V0=s(Ck,"This model is also a "),Wl=a(Ck,"A",{href:!0,rel:!0});var tj=i(Wl);K0=s(tj,"tf.keras.Model"),tj.forEach(t),J0=s(Ck,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ck.forEach(t),G0=p(so),v(ur.$$.fragment,so),X0=p(so),Ht=a(so,"DIV",{class:!0});var ia=i(Ht);v(Hl.$$.fragment,ia),Y0=p(ia),Mn=a(ia,"P",{});var uh=i(Mn);Z0=s(uh,"The "),Cp=a(uh,"A",{href:!0});var oj=i(Cp);eB=s(oj,"TFBertForMultipleChoice"),oj.forEach(t),tB=s(uh," forward method, overrides the "),Wm=a(uh,"CODE",{});var nj=i(Wm);oB=s(nj,"__call__"),nj.forEach(t),nB=s(uh," special method."),uh.forEach(t),sB=p(ia),v(gr.$$.fragment,ia),rB=p(ia),v(_r.$$.fragment,ia),ia.forEach(t),so.forEach(t),rb=p(o),En=a(o,"H2",{class:!0});var Nk=i(En);br=a(Nk,"A",{id:!0,class:!0,href:!0});var sj=i(br);Hm=a(sj,"SPAN",{});var rj=i(Hm);v(Rl.$$.fragment,rj),rj.forEach(t),sj.forEach(t),aB=p(Nk),Rm=a(Nk,"SPAN",{});var aj=i(Rm);iB=s(aj,"TFBertForTokenClassification"),aj.forEach(t),Nk.forEach(t),ab=p(o),et=a(o,"DIV",{class:!0});var ro=i(et);v(Ql.$$.fragment,ro),lB=p(ro),Qm=a(ro,"P",{});var ij=i(Qm);dB=s(ij,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ij.forEach(t),cB=p(ro),Vl=a(ro,"P",{});var Ok=i(Vl);pB=s(Ok,"This model inherits from "),Np=a(Ok,"A",{href:!0});var lj=i(Np);hB=s(lj,"TFPreTrainedModel"),lj.forEach(t),fB=s(Ok,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok.forEach(t),mB=p(ro),Kl=a(ro,"P",{});var Ak=i(Kl);uB=s(Ak,"This model is also a "),Jl=a(Ak,"A",{href:!0,rel:!0});var dj=i(Jl);gB=s(dj,"tf.keras.Model"),dj.forEach(t),_B=s(Ak,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak.forEach(t),bB=p(ro),v(kr.$$.fragment,ro),kB=p(ro),kt=a(ro,"DIV",{class:!0});var Ao=i(kt);v(Gl.$$.fragment,Ao),TB=p(Ao),zn=a(Ao,"P",{});var gh=i(zn);yB=s(gh,"The "),Op=a(gh,"A",{href:!0});var cj=i(Op);vB=s(cj,"TFBertForTokenClassification"),cj.forEach(t),wB=s(gh," forward method, overrides the "),Vm=a(gh,"CODE",{});var pj=i(Vm);$B=s(pj,"__call__"),pj.forEach(t),FB=s(gh," special method."),gh.forEach(t),xB=p(Ao),v(Tr.$$.fragment,Ao),BB=p(Ao),v(yr.$$.fragment,Ao),MB=p(Ao),v(vr.$$.fragment,Ao),Ao.forEach(t),ro.forEach(t),ib=p(o),Pn=a(o,"H2",{class:!0});var Ik=i(Pn);wr=a(Ik,"A",{id:!0,class:!0,href:!0});var hj=i(wr);Km=a(hj,"SPAN",{});var fj=i(Km);v(Xl.$$.fragment,fj),fj.forEach(t),hj.forEach(t),EB=p(Ik),Jm=a(Ik,"SPAN",{});var mj=i(Jm);zB=s(mj,"TFBertForQuestionAnswering"),mj.forEach(t),Ik.forEach(t),lb=p(o),tt=a(o,"DIV",{class:!0});var ao=i(tt);v(Yl.$$.fragment,ao),PB=p(ao),qn=a(ao,"P",{});var _h=i(qn);qB=s(_h,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gm=a(_h,"CODE",{});var uj=i(Gm);jB=s(uj,"span start logits"),uj.forEach(t),CB=s(_h," and "),Xm=a(_h,"CODE",{});var gj=i(Xm);NB=s(gj,"span end logits"),gj.forEach(t),OB=s(_h,")."),_h.forEach(t),AB=p(ao),Zl=a(ao,"P",{});var Lk=i(Zl);IB=s(Lk,"This model inherits from "),Ap=a(Lk,"A",{href:!0});var _j=i(Ap);LB=s(_j,"TFPreTrainedModel"),_j.forEach(t),DB=s(Lk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lk.forEach(t),SB=p(ao),ed=a(ao,"P",{});var Dk=i(ed);UB=s(Dk,"This model is also a "),td=a(Dk,"A",{href:!0,rel:!0});var bj=i(td);WB=s(bj,"tf.keras.Model"),bj.forEach(t),HB=s(Dk,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk.forEach(t),RB=p(ao),v($r.$$.fragment,ao),QB=p(ao),Tt=a(ao,"DIV",{class:!0});var Io=i(Tt);v(od.$$.fragment,Io),VB=p(Io),jn=a(Io,"P",{});var bh=i(jn);KB=s(bh,"The "),Ip=a(bh,"A",{href:!0});var kj=i(Ip);JB=s(kj,"TFBertForQuestionAnswering"),kj.forEach(t),GB=s(bh," forward method, overrides the "),Ym=a(bh,"CODE",{});var Tj=i(Ym);XB=s(Tj,"__call__"),Tj.forEach(t),YB=s(bh," special method."),bh.forEach(t),ZB=p(Io),v(Fr.$$.fragment,Io),e9=p(Io),v(xr.$$.fragment,Io),t9=p(Io),v(Br.$$.fragment,Io),Io.forEach(t),ao.forEach(t),db=p(o),Cn=a(o,"H2",{class:!0});var Sk=i(Cn);Mr=a(Sk,"A",{id:!0,class:!0,href:!0});var yj=i(Mr);Zm=a(yj,"SPAN",{});var vj=i(Zm);v(nd.$$.fragment,vj),vj.forEach(t),yj.forEach(t),o9=p(Sk),eu=a(Sk,"SPAN",{});var wj=i(eu);n9=s(wj,"FlaxBertModel"),wj.forEach(t),Sk.forEach(t),cb=p(o),Ie=a(o,"DIV",{class:!0});var $t=i(Ie);v(sd.$$.fragment,$t),s9=p($t),tu=a($t,"P",{});var $j=i(tu);r9=s($j,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),$j.forEach(t),a9=p($t),rd=a($t,"P",{});var Uk=i(rd);i9=s(Uk,"This model inherits from "),Lp=a(Uk,"A",{href:!0});var Fj=i(Lp);l9=s(Fj,"FlaxPreTrainedModel"),Fj.forEach(t),d9=s(Uk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uk.forEach(t),c9=p($t),ad=a($t,"P",{});var Wk=i(ad);p9=s(Wk,"This model is also a Flax Linen "),id=a(Wk,"A",{href:!0,rel:!0});var xj=i(id);h9=s(xj,"flax.linen.Module"),xj.forEach(t),f9=s(Wk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wk.forEach(t),m9=p($t),ou=a($t,"P",{});var Bj=i(ou);u9=s(Bj,"Finally, this model supports inherent JAX features such as:"),Bj.forEach(t),g9=p($t),co=a($t,"UL",{});var la=i(co);nu=a(la,"LI",{});var Mj=i(nu);ld=a(Mj,"A",{href:!0,rel:!0});var Ej=i(ld);_9=s(Ej,"Just-In-Time (JIT) compilation"),Ej.forEach(t),Mj.forEach(t),b9=p(la),su=a(la,"LI",{});var zj=i(su);dd=a(zj,"A",{href:!0,rel:!0});var Pj=i(dd);k9=s(Pj,"Automatic Differentiation"),Pj.forEach(t),zj.forEach(t),T9=p(la),ru=a(la,"LI",{});var qj=i(ru);cd=a(qj,"A",{href:!0,rel:!0});var jj=i(cd);y9=s(jj,"Vectorization"),jj.forEach(t),qj.forEach(t),v9=p(la),au=a(la,"LI",{});var Cj=i(au);pd=a(Cj,"A",{href:!0,rel:!0});var Nj=i(pd);w9=s(Nj,"Parallelization"),Nj.forEach(t),Cj.forEach(t),la.forEach(t),$9=p($t),Rt=a($t,"DIV",{class:!0});var da=i(Rt);v(hd.$$.fragment,da),F9=p(da),Nn=a(da,"P",{});var kh=i(Nn);x9=s(kh,"The "),iu=a(kh,"CODE",{});var Oj=i(iu);B9=s(Oj,"FlaxBertPreTrainedModel"),Oj.forEach(t),M9=s(kh," forward method, overrides the "),lu=a(kh,"CODE",{});var Aj=i(lu);E9=s(Aj,"__call__"),Aj.forEach(t),z9=s(kh," special method."),kh.forEach(t),P9=p(da),v(Er.$$.fragment,da),q9=p(da),v(zr.$$.fragment,da),da.forEach(t),$t.forEach(t),pb=p(o),On=a(o,"H2",{class:!0});var Hk=i(On);Pr=a(Hk,"A",{id:!0,class:!0,href:!0});var Ij=i(Pr);du=a(Ij,"SPAN",{});var Lj=i(du);v(fd.$$.fragment,Lj),Lj.forEach(t),Ij.forEach(t),j9=p(Hk),cu=a(Hk,"SPAN",{});var Dj=i(cu);C9=s(Dj,"FlaxBertForPreTraining"),Dj.forEach(t),Hk.forEach(t),hb=p(o),Le=a(o,"DIV",{class:!0});var Ft=i(Le);v(md.$$.fragment,Ft),N9=p(Ft),An=a(Ft,"P",{});var Th=i(An);O9=s(Th,"Bert Model with two heads on top as done during the pretraining: a "),pu=a(Th,"CODE",{});var Sj=i(pu);A9=s(Sj,"masked language modeling"),Sj.forEach(t),I9=s(Th," head and a "),hu=a(Th,"CODE",{});var Uj=i(hu);L9=s(Uj,"next sentence prediction (classification)"),Uj.forEach(t),D9=s(Th," head."),Th.forEach(t),S9=p(Ft),ud=a(Ft,"P",{});var Rk=i(ud);U9=s(Rk,"This model inherits from "),Dp=a(Rk,"A",{href:!0});var Wj=i(Dp);W9=s(Wj,"FlaxPreTrainedModel"),Wj.forEach(t),H9=s(Rk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rk.forEach(t),R9=p(Ft),gd=a(Ft,"P",{});var Qk=i(gd);Q9=s(Qk,"This model is also a Flax Linen "),_d=a(Qk,"A",{href:!0,rel:!0});var Hj=i(_d);V9=s(Hj,"flax.linen.Module"),Hj.forEach(t),K9=s(Qk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qk.forEach(t),J9=p(Ft),fu=a(Ft,"P",{});var Rj=i(fu);G9=s(Rj,"Finally, this model supports inherent JAX features such as:"),Rj.forEach(t),X9=p(Ft),po=a(Ft,"UL",{});var ca=i(po);mu=a(ca,"LI",{});var Qj=i(mu);bd=a(Qj,"A",{href:!0,rel:!0});var Vj=i(bd);Y9=s(Vj,"Just-In-Time (JIT) compilation"),Vj.forEach(t),Qj.forEach(t),Z9=p(ca),uu=a(ca,"LI",{});var Kj=i(uu);kd=a(Kj,"A",{href:!0,rel:!0});var Jj=i(kd);eM=s(Jj,"Automatic Differentiation"),Jj.forEach(t),Kj.forEach(t),tM=p(ca),gu=a(ca,"LI",{});var Gj=i(gu);Td=a(Gj,"A",{href:!0,rel:!0});var Xj=i(Td);oM=s(Xj,"Vectorization"),Xj.forEach(t),Gj.forEach(t),nM=p(ca),_u=a(ca,"LI",{});var Yj=i(_u);yd=a(Yj,"A",{href:!0,rel:!0});var Zj=i(yd);sM=s(Zj,"Parallelization"),Zj.forEach(t),Yj.forEach(t),ca.forEach(t),rM=p(Ft),Qt=a(Ft,"DIV",{class:!0});var pa=i(Qt);v(vd.$$.fragment,pa),aM=p(pa),In=a(pa,"P",{});var yh=i(In);iM=s(yh,"The "),bu=a(yh,"CODE",{});var e3=i(bu);lM=s(e3,"FlaxBertPreTrainedModel"),e3.forEach(t),dM=s(yh," forward method, overrides the "),ku=a(yh,"CODE",{});var t3=i(ku);cM=s(t3,"__call__"),t3.forEach(t),pM=s(yh," special method."),yh.forEach(t),hM=p(pa),v(qr.$$.fragment,pa),fM=p(pa),v(jr.$$.fragment,pa),pa.forEach(t),Ft.forEach(t),fb=p(o),Ln=a(o,"H2",{class:!0});var Vk=i(Ln);Cr=a(Vk,"A",{id:!0,class:!0,href:!0});var o3=i(Cr);Tu=a(o3,"SPAN",{});var n3=i(Tu);v(wd.$$.fragment,n3),n3.forEach(t),o3.forEach(t),mM=p(Vk),yu=a(Vk,"SPAN",{});var s3=i(yu);uM=s(s3,"FlaxBertForMaskedLM"),s3.forEach(t),Vk.forEach(t),mb=p(o),De=a(o,"DIV",{class:!0});var xt=i(De);v($d.$$.fragment,xt),gM=p(xt),Fd=a(xt,"P",{});var Kk=i(Fd);_M=s(Kk,"Bert Model with a "),vu=a(Kk,"CODE",{});var r3=i(vu);bM=s(r3,"language modeling"),r3.forEach(t),kM=s(Kk," head on top."),Kk.forEach(t),TM=p(xt),xd=a(xt,"P",{});var Jk=i(xd);yM=s(Jk,"This model inherits from "),Sp=a(Jk,"A",{href:!0});var a3=i(Sp);vM=s(a3,"FlaxPreTrainedModel"),a3.forEach(t),wM=s(Jk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jk.forEach(t),$M=p(xt),Bd=a(xt,"P",{});var Gk=i(Bd);FM=s(Gk,"This model is also a Flax Linen "),Md=a(Gk,"A",{href:!0,rel:!0});var i3=i(Md);xM=s(i3,"flax.linen.Module"),i3.forEach(t),BM=s(Gk,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gk.forEach(t),MM=p(xt),wu=a(xt,"P",{});var l3=i(wu);EM=s(l3,"Finally, this model supports inherent JAX features such as:"),l3.forEach(t),zM=p(xt),ho=a(xt,"UL",{});var ha=i(ho);$u=a(ha,"LI",{});var d3=i($u);Ed=a(d3,"A",{href:!0,rel:!0});var c3=i(Ed);PM=s(c3,"Just-In-Time (JIT) compilation"),c3.forEach(t),d3.forEach(t),qM=p(ha),Fu=a(ha,"LI",{});var p3=i(Fu);zd=a(p3,"A",{href:!0,rel:!0});var h3=i(zd);jM=s(h3,"Automatic Differentiation"),h3.forEach(t),p3.forEach(t),CM=p(ha),xu=a(ha,"LI",{});var f3=i(xu);Pd=a(f3,"A",{href:!0,rel:!0});var m3=i(Pd);NM=s(m3,"Vectorization"),m3.forEach(t),f3.forEach(t),OM=p(ha),Bu=a(ha,"LI",{});var u3=i(Bu);qd=a(u3,"A",{href:!0,rel:!0});var g3=i(qd);AM=s(g3,"Parallelization"),g3.forEach(t),u3.forEach(t),ha.forEach(t),IM=p(xt),Vt=a(xt,"DIV",{class:!0});var fa=i(Vt);v(jd.$$.fragment,fa),LM=p(fa),Dn=a(fa,"P",{});var vh=i(Dn);DM=s(vh,"The "),Mu=a(vh,"CODE",{});var _3=i(Mu);SM=s(_3,"FlaxBertPreTrainedModel"),_3.forEach(t),UM=s(vh," forward method, overrides the "),Eu=a(vh,"CODE",{});var b3=i(Eu);WM=s(b3,"__call__"),b3.forEach(t),HM=s(vh," special method."),vh.forEach(t),RM=p(fa),v(Nr.$$.fragment,fa),QM=p(fa),v(Or.$$.fragment,fa),fa.forEach(t),xt.forEach(t),ub=p(o),Sn=a(o,"H2",{class:!0});var Xk=i(Sn);Ar=a(Xk,"A",{id:!0,class:!0,href:!0});var k3=i(Ar);zu=a(k3,"SPAN",{});var T3=i(zu);v(Cd.$$.fragment,T3),T3.forEach(t),k3.forEach(t),VM=p(Xk),Pu=a(Xk,"SPAN",{});var y3=i(Pu);KM=s(y3,"FlaxBertForNextSentencePrediction"),y3.forEach(t),Xk.forEach(t),gb=p(o),Se=a(o,"DIV",{class:!0});var Bt=i(Se);v(Nd.$$.fragment,Bt),JM=p(Bt),Od=a(Bt,"P",{});var Yk=i(Od);GM=s(Yk,"Bert Model with a "),qu=a(Yk,"CODE",{});var v3=i(qu);XM=s(v3,"next sentence prediction (classification)"),v3.forEach(t),YM=s(Yk," head on top."),Yk.forEach(t),ZM=p(Bt),Ad=a(Bt,"P",{});var Zk=i(Ad);eE=s(Zk,"This model inherits from "),Up=a(Zk,"A",{href:!0});var w3=i(Up);tE=s(w3,"FlaxPreTrainedModel"),w3.forEach(t),oE=s(Zk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zk.forEach(t),nE=p(Bt),Id=a(Bt,"P",{});var e1=i(Id);sE=s(e1,"This model is also a Flax Linen "),Ld=a(e1,"A",{href:!0,rel:!0});var $3=i(Ld);rE=s($3,"flax.linen.Module"),$3.forEach(t),aE=s(e1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e1.forEach(t),iE=p(Bt),ju=a(Bt,"P",{});var F3=i(ju);lE=s(F3,"Finally, this model supports inherent JAX features such as:"),F3.forEach(t),dE=p(Bt),fo=a(Bt,"UL",{});var ma=i(fo);Cu=a(ma,"LI",{});var x3=i(Cu);Dd=a(x3,"A",{href:!0,rel:!0});var B3=i(Dd);cE=s(B3,"Just-In-Time (JIT) compilation"),B3.forEach(t),x3.forEach(t),pE=p(ma),Nu=a(ma,"LI",{});var M3=i(Nu);Sd=a(M3,"A",{href:!0,rel:!0});var E3=i(Sd);hE=s(E3,"Automatic Differentiation"),E3.forEach(t),M3.forEach(t),fE=p(ma),Ou=a(ma,"LI",{});var z3=i(Ou);Ud=a(z3,"A",{href:!0,rel:!0});var P3=i(Ud);mE=s(P3,"Vectorization"),P3.forEach(t),z3.forEach(t),uE=p(ma),Au=a(ma,"LI",{});var q3=i(Au);Wd=a(q3,"A",{href:!0,rel:!0});var j3=i(Wd);gE=s(j3,"Parallelization"),j3.forEach(t),q3.forEach(t),ma.forEach(t),_E=p(Bt),Kt=a(Bt,"DIV",{class:!0});var ua=i(Kt);v(Hd.$$.fragment,ua),bE=p(ua),Un=a(ua,"P",{});var wh=i(Un);kE=s(wh,"The "),Iu=a(wh,"CODE",{});var C3=i(Iu);TE=s(C3,"FlaxBertPreTrainedModel"),C3.forEach(t),yE=s(wh," forward method, overrides the "),Lu=a(wh,"CODE",{});var N3=i(Lu);vE=s(N3,"__call__"),N3.forEach(t),wE=s(wh," special method."),wh.forEach(t),$E=p(ua),v(Ir.$$.fragment,ua),FE=p(ua),v(Lr.$$.fragment,ua),ua.forEach(t),Bt.forEach(t),_b=p(o),Wn=a(o,"H2",{class:!0});var t1=i(Wn);Dr=a(t1,"A",{id:!0,class:!0,href:!0});var O3=i(Dr);Du=a(O3,"SPAN",{});var A3=i(Du);v(Rd.$$.fragment,A3),A3.forEach(t),O3.forEach(t),xE=p(t1),Su=a(t1,"SPAN",{});var I3=i(Su);BE=s(I3,"FlaxBertForSequenceClassification"),I3.forEach(t),t1.forEach(t),bb=p(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);v(Qd.$$.fragment,Mt),ME=p(Mt),Uu=a(Mt,"P",{});var L3=i(Uu);EE=s(L3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),L3.forEach(t),zE=p(Mt),Vd=a(Mt,"P",{});var o1=i(Vd);PE=s(o1,"This model inherits from "),Wp=a(o1,"A",{href:!0});var D3=i(Wp);qE=s(D3,"FlaxPreTrainedModel"),D3.forEach(t),jE=s(o1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),o1.forEach(t),CE=p(Mt),Kd=a(Mt,"P",{});var n1=i(Kd);NE=s(n1,"This model is also a Flax Linen "),Jd=a(n1,"A",{href:!0,rel:!0});var S3=i(Jd);OE=s(S3,"flax.linen.Module"),S3.forEach(t),AE=s(n1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),n1.forEach(t),IE=p(Mt),Wu=a(Mt,"P",{});var U3=i(Wu);LE=s(U3,"Finally, this model supports inherent JAX features such as:"),U3.forEach(t),DE=p(Mt),mo=a(Mt,"UL",{});var ga=i(mo);Hu=a(ga,"LI",{});var W3=i(Hu);Gd=a(W3,"A",{href:!0,rel:!0});var H3=i(Gd);SE=s(H3,"Just-In-Time (JIT) compilation"),H3.forEach(t),W3.forEach(t),UE=p(ga),Ru=a(ga,"LI",{});var R3=i(Ru);Xd=a(R3,"A",{href:!0,rel:!0});var Q3=i(Xd);WE=s(Q3,"Automatic Differentiation"),Q3.forEach(t),R3.forEach(t),HE=p(ga),Qu=a(ga,"LI",{});var V3=i(Qu);Yd=a(V3,"A",{href:!0,rel:!0});var K3=i(Yd);RE=s(K3,"Vectorization"),K3.forEach(t),V3.forEach(t),QE=p(ga),Vu=a(ga,"LI",{});var J3=i(Vu);Zd=a(J3,"A",{href:!0,rel:!0});var G3=i(Zd);VE=s(G3,"Parallelization"),G3.forEach(t),J3.forEach(t),ga.forEach(t),KE=p(Mt),Jt=a(Mt,"DIV",{class:!0});var _a=i(Jt);v(ec.$$.fragment,_a),JE=p(_a),Hn=a(_a,"P",{});var $h=i(Hn);GE=s($h,"The "),Ku=a($h,"CODE",{});var X3=i(Ku);XE=s(X3,"FlaxBertPreTrainedModel"),X3.forEach(t),YE=s($h," forward method, overrides the "),Ju=a($h,"CODE",{});var Y3=i(Ju);ZE=s(Y3,"__call__"),Y3.forEach(t),e6=s($h," special method."),$h.forEach(t),t6=p(_a),v(Sr.$$.fragment,_a),o6=p(_a),v(Ur.$$.fragment,_a),_a.forEach(t),Mt.forEach(t),kb=p(o),Rn=a(o,"H2",{class:!0});var s1=i(Rn);Wr=a(s1,"A",{id:!0,class:!0,href:!0});var Z3=i(Wr);Gu=a(Z3,"SPAN",{});var eC=i(Gu);v(tc.$$.fragment,eC),eC.forEach(t),Z3.forEach(t),n6=p(s1),Xu=a(s1,"SPAN",{});var tC=i(Xu);s6=s(tC,"FlaxBertForMultipleChoice"),tC.forEach(t),s1.forEach(t),Tb=p(o),We=a(o,"DIV",{class:!0});var Et=i(We);v(oc.$$.fragment,Et),r6=p(Et),Yu=a(Et,"P",{});var oC=i(Yu);a6=s(oC,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),oC.forEach(t),i6=p(Et),nc=a(Et,"P",{});var r1=i(nc);l6=s(r1,"This model inherits from "),Hp=a(r1,"A",{href:!0});var nC=i(Hp);d6=s(nC,"FlaxPreTrainedModel"),nC.forEach(t),c6=s(r1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),r1.forEach(t),p6=p(Et),sc=a(Et,"P",{});var a1=i(sc);h6=s(a1,"This model is also a Flax Linen "),rc=a(a1,"A",{href:!0,rel:!0});var sC=i(rc);f6=s(sC,"flax.linen.Module"),sC.forEach(t),m6=s(a1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),a1.forEach(t),u6=p(Et),Zu=a(Et,"P",{});var rC=i(Zu);g6=s(rC,"Finally, this model supports inherent JAX features such as:"),rC.forEach(t),_6=p(Et),uo=a(Et,"UL",{});var ba=i(uo);eg=a(ba,"LI",{});var aC=i(eg);ac=a(aC,"A",{href:!0,rel:!0});var iC=i(ac);b6=s(iC,"Just-In-Time (JIT) compilation"),iC.forEach(t),aC.forEach(t),k6=p(ba),tg=a(ba,"LI",{});var lC=i(tg);ic=a(lC,"A",{href:!0,rel:!0});var dC=i(ic);T6=s(dC,"Automatic Differentiation"),dC.forEach(t),lC.forEach(t),y6=p(ba),og=a(ba,"LI",{});var cC=i(og);lc=a(cC,"A",{href:!0,rel:!0});var pC=i(lc);v6=s(pC,"Vectorization"),pC.forEach(t),cC.forEach(t),w6=p(ba),ng=a(ba,"LI",{});var hC=i(ng);dc=a(hC,"A",{href:!0,rel:!0});var fC=i(dc);$6=s(fC,"Parallelization"),fC.forEach(t),hC.forEach(t),ba.forEach(t),F6=p(Et),Gt=a(Et,"DIV",{class:!0});var ka=i(Gt);v(cc.$$.fragment,ka),x6=p(ka),Qn=a(ka,"P",{});var Fh=i(Qn);B6=s(Fh,"The "),sg=a(Fh,"CODE",{});var mC=i(sg);M6=s(mC,"FlaxBertPreTrainedModel"),mC.forEach(t),E6=s(Fh," forward method, overrides the "),rg=a(Fh,"CODE",{});var uC=i(rg);z6=s(uC,"__call__"),uC.forEach(t),P6=s(Fh," special method."),Fh.forEach(t),q6=p(ka),v(Hr.$$.fragment,ka),j6=p(ka),v(Rr.$$.fragment,ka),ka.forEach(t),Et.forEach(t),yb=p(o),Vn=a(o,"H2",{class:!0});var i1=i(Vn);Qr=a(i1,"A",{id:!0,class:!0,href:!0});var gC=i(Qr);ag=a(gC,"SPAN",{});var _C=i(ag);v(pc.$$.fragment,_C),_C.forEach(t),gC.forEach(t),C6=p(i1),ig=a(i1,"SPAN",{});var bC=i(ig);N6=s(bC,"FlaxBertForTokenClassification"),bC.forEach(t),i1.forEach(t),vb=p(o),He=a(o,"DIV",{class:!0});var zt=i(He);v(hc.$$.fragment,zt),O6=p(zt),lg=a(zt,"P",{});var kC=i(lg);A6=s(kC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kC.forEach(t),I6=p(zt),fc=a(zt,"P",{});var l1=i(fc);L6=s(l1,"This model inherits from "),Rp=a(l1,"A",{href:!0});var TC=i(Rp);D6=s(TC,"FlaxPreTrainedModel"),TC.forEach(t),S6=s(l1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),l1.forEach(t),U6=p(zt),mc=a(zt,"P",{});var d1=i(mc);W6=s(d1,"This model is also a Flax Linen "),uc=a(d1,"A",{href:!0,rel:!0});var yC=i(uc);H6=s(yC,"flax.linen.Module"),yC.forEach(t),R6=s(d1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),d1.forEach(t),Q6=p(zt),dg=a(zt,"P",{});var vC=i(dg);V6=s(vC,"Finally, this model supports inherent JAX features such as:"),vC.forEach(t),K6=p(zt),go=a(zt,"UL",{});var Ta=i(go);cg=a(Ta,"LI",{});var wC=i(cg);gc=a(wC,"A",{href:!0,rel:!0});var $C=i(gc);J6=s($C,"Just-In-Time (JIT) compilation"),$C.forEach(t),wC.forEach(t),G6=p(Ta),pg=a(Ta,"LI",{});var FC=i(pg);_c=a(FC,"A",{href:!0,rel:!0});var xC=i(_c);X6=s(xC,"Automatic Differentiation"),xC.forEach(t),FC.forEach(t),Y6=p(Ta),hg=a(Ta,"LI",{});var BC=i(hg);bc=a(BC,"A",{href:!0,rel:!0});var MC=i(bc);Z6=s(MC,"Vectorization"),MC.forEach(t),BC.forEach(t),ez=p(Ta),fg=a(Ta,"LI",{});var EC=i(fg);kc=a(EC,"A",{href:!0,rel:!0});var zC=i(kc);tz=s(zC,"Parallelization"),zC.forEach(t),EC.forEach(t),Ta.forEach(t),oz=p(zt),Xt=a(zt,"DIV",{class:!0});var ya=i(Xt);v(Tc.$$.fragment,ya),nz=p(ya),Kn=a(ya,"P",{});var xh=i(Kn);sz=s(xh,"The "),mg=a(xh,"CODE",{});var PC=i(mg);rz=s(PC,"FlaxBertPreTrainedModel"),PC.forEach(t),az=s(xh," forward method, overrides the "),ug=a(xh,"CODE",{});var qC=i(ug);iz=s(qC,"__call__"),qC.forEach(t),lz=s(xh," special method."),xh.forEach(t),dz=p(ya),v(Vr.$$.fragment,ya),cz=p(ya),v(Kr.$$.fragment,ya),ya.forEach(t),zt.forEach(t),wb=p(o),Jn=a(o,"H2",{class:!0});var c1=i(Jn);Jr=a(c1,"A",{id:!0,class:!0,href:!0});var jC=i(Jr);gg=a(jC,"SPAN",{});var CC=i(gg);v(yc.$$.fragment,CC),CC.forEach(t),jC.forEach(t),pz=p(c1),_g=a(c1,"SPAN",{});var NC=i(_g);hz=s(NC,"FlaxBertForQuestionAnswering"),NC.forEach(t),c1.forEach(t),$b=p(o),Re=a(o,"DIV",{class:!0});var Pt=i(Re);v(vc.$$.fragment,Pt),fz=p(Pt),Gn=a(Pt,"P",{});var Bh=i(Gn);mz=s(Bh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bg=a(Bh,"CODE",{});var OC=i(bg);uz=s(OC,"span start logits"),OC.forEach(t),gz=s(Bh," and "),kg=a(Bh,"CODE",{});var AC=i(kg);_z=s(AC,"span end logits"),AC.forEach(t),bz=s(Bh,")."),Bh.forEach(t),kz=p(Pt),wc=a(Pt,"P",{});var p1=i(wc);Tz=s(p1,"This model inherits from "),Qp=a(p1,"A",{href:!0});var IC=i(Qp);yz=s(IC,"FlaxPreTrainedModel"),IC.forEach(t),vz=s(p1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p1.forEach(t),wz=p(Pt),$c=a(Pt,"P",{});var h1=i($c);$z=s(h1,"This model is also a Flax Linen "),Fc=a(h1,"A",{href:!0,rel:!0});var LC=i(Fc);Fz=s(LC,"flax.linen.Module"),LC.forEach(t),xz=s(h1,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),h1.forEach(t),Bz=p(Pt),Tg=a(Pt,"P",{});var DC=i(Tg);Mz=s(DC,"Finally, this model supports inherent JAX features such as:"),DC.forEach(t),Ez=p(Pt),_o=a(Pt,"UL",{});var va=i(_o);yg=a(va,"LI",{});var SC=i(yg);xc=a(SC,"A",{href:!0,rel:!0});var UC=i(xc);zz=s(UC,"Just-In-Time (JIT) compilation"),UC.forEach(t),SC.forEach(t),Pz=p(va),vg=a(va,"LI",{});var WC=i(vg);Bc=a(WC,"A",{href:!0,rel:!0});var HC=i(Bc);qz=s(HC,"Automatic Differentiation"),HC.forEach(t),WC.forEach(t),jz=p(va),wg=a(va,"LI",{});var RC=i(wg);Mc=a(RC,"A",{href:!0,rel:!0});var QC=i(Mc);Cz=s(QC,"Vectorization"),QC.forEach(t),RC.forEach(t),Nz=p(va),$g=a(va,"LI",{});var VC=i($g);Ec=a(VC,"A",{href:!0,rel:!0});var KC=i(Ec);Oz=s(KC,"Parallelization"),KC.forEach(t),VC.forEach(t),va.forEach(t),Az=p(Pt),Yt=a(Pt,"DIV",{class:!0});var wa=i(Yt);v(zc.$$.fragment,wa),Iz=p(wa),Xn=a(wa,"P",{});var Mh=i(Xn);Lz=s(Mh,"The "),Fg=a(Mh,"CODE",{});var JC=i(Fg);Dz=s(JC,"FlaxBertPreTrainedModel"),JC.forEach(t),Sz=s(Mh," forward method, overrides the "),xg=a(Mh,"CODE",{});var GC=i(xg);Uz=s(GC,"__call__"),GC.forEach(t),Wz=s(Mh," special method."),Mh.forEach(t),Hz=p(wa),v(Gr.$$.fragment,wa),Rz=p(wa),v(Xr.$$.fragment,wa),wa.forEach(t),Pt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(yN)),u(f,"id","bert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#bert"),u(h,"class","relative group"),u(ee,"id","overview"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#overview"),u(z,"class","relative group"),u(ne,"href","https://arxiv.org/abs/1810.04805"),u(ne,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Me,"href","https://github.com/google-research/bert"),u(Me,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u(we,"class","relative group"),u(Rc,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertModel"),u(Qc,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertModel"),u(Fa,"href","https://huggingface.co/bert-base-uncased"),u(Fa,"rel","nofollow"),u(Vc,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(Kc,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.BertTokenizer"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.BertTokenizer"),u(Do,"class","relative group"),u(Jc,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yc,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.BertTokenizerFast"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.BertTokenizerFast"),u(Uo,"class","relative group"),u(Zc,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ho,"class","relative group"),u(op,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForPreTraining"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(np,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForPreTraining"),u(cs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.BertModel"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.BertModel"),u(Vo,"class","relative group"),u(rp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ei,"rel","nofollow"),u(oi,"href","https://arxiv.org/abs/1706.03762"),u(oi,"rel","nofollow"),u(ap,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertModel"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.BertForPreTraining"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.BertForPreTraining"),u(Jo,"class","relative group"),u(ip,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(li,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(li,"rel","nofollow"),u(lp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForPreTraining"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.BertLMHeadModel"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.BertLMHeadModel"),u(Yo,"class","relative group"),u(dp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ui,"rel","nofollow"),u(cp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertLMHeadModel"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ts,"id","transformers.BertForMaskedLM"),u(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ts,"href","#transformers.BertForMaskedLM"),u(en,"class","relative group"),u(pp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vi,"rel","nofollow"),u(hp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForMaskedLM"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.BertForNextSentencePrediction"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.BertForNextSentencePrediction"),u(on,"class","relative group"),u(fp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Ei,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ei,"rel","nofollow"),u(mp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bs,"id","transformers.BertForSequenceClassification"),u(Bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bs,"href","#transformers.BertForSequenceClassification"),u(sn,"class","relative group"),u(up,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(gp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.BertForMultipleChoice"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.BertForMultipleChoice"),u(an,"class","relative group"),u(_p,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Si,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Si,"rel","nofollow"),u(bp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"id","transformers.BertForTokenClassification"),u(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Os,"href","#transformers.BertForTokenClassification"),u(dn,"class","relative group"),u(kp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Vi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vi,"rel","nofollow"),u(Tp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForTokenClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.BertForQuestionAnswering"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.BertForQuestionAnswering"),u(pn,"class","relative group"),u(yp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),u(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Zi,"rel","nofollow"),u(vp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.TFBertModel"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.TFBertModel"),u(mn,"class","relative group"),u(wp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(rl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(rl,"rel","nofollow"),u($p,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.TFBertForPreTraining"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.TFBertForPreTraining"),u(gn,"class","relative group"),u(Fp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(pl,"rel","nofollow"),u(xp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ys,"id","transformers.TFBertLMHeadModel"),u(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ys,"href","#transformers.TFBertLMHeadModel"),u(kn,"class","relative group"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFBertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFBertForMaskedLM"),u(yn,"class","relative group"),u(Bp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u($l,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($l,"rel","nofollow"),u(Mp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rr,"id","transformers.TFBertForNextSentencePrediction"),u(rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rr,"href","#transformers.TFBertForNextSentencePrediction"),u(wn,"class","relative group"),u(Ep,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pl,"rel","nofollow"),u(zp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFBertForSequenceClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFBertForSequenceClassification"),u(Fn,"class","relative group"),u(Pp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(qp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mr,"id","transformers.TFBertForMultipleChoice"),u(mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mr,"href","#transformers.TFBertForMultipleChoice"),u(Bn,"class","relative group"),u(jp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wl,"rel","nofollow"),u(Cp,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(br,"id","transformers.TFBertForTokenClassification"),u(br,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(br,"href","#transformers.TFBertForTokenClassification"),u(En,"class","relative group"),u(Np,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(Jl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Jl,"rel","nofollow"),u(Op,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wr,"id","transformers.TFBertForQuestionAnswering"),u(wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wr,"href","#transformers.TFBertForQuestionAnswering"),u(Pn,"class","relative group"),u(Ap,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),u(td,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(td,"rel","nofollow"),u(Ip,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxBertModel"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxBertModel"),u(Cn,"class","relative group"),u(Lp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(id,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(id,"rel","nofollow"),u(ld,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ld,"rel","nofollow"),u(dd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(dd,"rel","nofollow"),u(cd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(cd,"rel","nofollow"),u(pd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(pd,"rel","nofollow"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxBertForPreTraining"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxBertForPreTraining"),u(On,"class","relative group"),u(Dp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(_d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(_d,"rel","nofollow"),u(bd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(bd,"rel","nofollow"),u(kd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(kd,"rel","nofollow"),u(Td,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Td,"rel","nofollow"),u(yd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yd,"rel","nofollow"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.FlaxBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.FlaxBertForMaskedLM"),u(Ln,"class","relative group"),u(Sp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Md,"rel","nofollow"),u(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ed,"rel","nofollow"),u(zd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zd,"rel","nofollow"),u(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pd,"rel","nofollow"),u(qd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qd,"rel","nofollow"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ar,"id","transformers.FlaxBertForNextSentencePrediction"),u(Ar,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ar,"href","#transformers.FlaxBertForNextSentencePrediction"),u(Sn,"class","relative group"),u(Up,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ld,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ld,"rel","nofollow"),u(Dd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Dd,"rel","nofollow"),u(Sd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Sd,"rel","nofollow"),u(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ud,"rel","nofollow"),u(Wd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wd,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.FlaxBertForSequenceClassification"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.FlaxBertForSequenceClassification"),u(Wn,"class","relative group"),u(Wp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.FlaxBertForMultipleChoice"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.FlaxBertForMultipleChoice"),u(Rn,"class","relative group"),u(Hp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qr,"id","transformers.FlaxBertForTokenClassification"),u(Qr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qr,"href","#transformers.FlaxBertForTokenClassification"),u(Vn,"class","relative group"),u(Rp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jr,"id","transformers.FlaxBertForQuestionAnswering"),u(Jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jr,"href","#transformers.FlaxBertForQuestionAnswering"),u(Jn,"class","relative group"),u(Qp,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(xc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Mc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ec,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),_(o,g,k),_(o,h,k),e(h,f),e(f,b),w(l,b,null),e(h,m),e(h,M),e(M,be),_(o,X,k),_(o,z,k),e(z,ee),e(ee,L),w(oe,L,null),e(z,ke),e(z,D),e(D,Te),_(o,fe,k),_(o,J,k),e(J,O),e(J,ne),e(ne,Y),e(J,P),_(o,j,k),_(o,ie,k),e(ie,H),_(o,me,k),_(o,le,k),e(le,S),e(S,ye),_(o,ue,k),_(o,q,k),e(q,ce),e(ce,R),_(o,ge,k),_(o,de,k),e(de,Q),_(o,_e,k),_(o,te,k),e(te,N),e(N,ve),e(te,V),e(te,pe),e(pe,T),_(o,E,k),_(o,K,k),e(K,ze),e(K,Be),e(Be,A),e(K,Pe),e(K,Me),e(Me,qe),e(K,I),_(o,W,k),_(o,we,k),e(we,Fe),e(Fe,U),w(Ee,U,null),e(we,je),e(we,he),e(he,Ce),_(o,b_,k),_(o,qt,k),w($a,qt,null),e(qt,f1),e(qt,io),e(io,m1),e(io,Rc),e(Rc,u1),e(io,g1),e(io,Qc),e(Qc,_1),e(io,b1),e(io,Fa),e(Fa,k1),e(io,T1),e(qt,y1),e(qt,Lo),e(Lo,v1),e(Lo,Vc),e(Vc,w1),e(Lo,$1),e(Lo,Kc),e(Kc,F1),e(Lo,x1),e(qt,B1),w(ns,qt,null),_(o,k_,k),_(o,Do,k),e(Do,ss),e(ss,Eh),w(xa,Eh,null),e(Do,M1),e(Do,zh),e(zh,E1),_(o,T_,k),_(o,Ne,k),w(Ba,Ne,null),e(Ne,z1),e(Ne,Ph),e(Ph,P1),e(Ne,q1),e(Ne,Ma),e(Ma,j1),e(Ma,Jc),e(Jc,C1),e(Ma,N1),e(Ne,O1),e(Ne,yo),w(Ea,yo,null),e(yo,A1),e(yo,qh),e(qh,I1),e(yo,L1),e(yo,za),e(za,Gc),e(Gc,D1),e(Gc,jh),e(jh,S1),e(za,U1),e(za,Xc),e(Xc,W1),e(Xc,Ch),e(Ch,H1),e(Ne,R1),e(Ne,rs),w(Pa,rs,null),e(rs,Q1),e(rs,qa),e(qa,V1),e(qa,Nh),e(Nh,K1),e(qa,J1),e(Ne,G1),e(Ne,Ct),w(ja,Ct,null),e(Ct,X1),e(Ct,Oh),e(Oh,Y1),e(Ct,Z1),w(as,Ct,null),e(Ct,eT),e(Ct,So),e(So,tT),e(So,Ah),e(Ah,oT),e(So,nT),e(So,Ih),e(Ih,sT),e(So,rT),e(Ne,aT),e(Ne,Yc),w(Ca,Yc,null),_(o,y_,k),_(o,Uo,k),e(Uo,is),e(is,Lh),w(Na,Lh,null),e(Uo,iT),e(Uo,Dh),e(Dh,lT),_(o,v_,k),_(o,st,k),w(Oa,st,null),e(st,dT),e(st,Aa),e(Aa,cT),e(Aa,Sh),e(Sh,pT),e(Aa,hT),e(st,fT),e(st,Ia),e(Ia,mT),e(Ia,Zc),e(Zc,uT),e(Ia,gT),e(st,_T),e(st,vo),w(La,vo,null),e(vo,bT),e(vo,Uh),e(Uh,kT),e(vo,TT),e(vo,Da),e(Da,ep),e(ep,yT),e(ep,Wh),e(Wh,vT),e(Da,wT),e(Da,tp),e(tp,$T),e(tp,Hh),e(Hh,FT),e(st,xT),e(st,Nt),w(Sa,Nt,null),e(Nt,BT),e(Nt,Rh),e(Rh,MT),e(Nt,ET),w(ls,Nt,null),e(Nt,zT),e(Nt,Wo),e(Wo,PT),e(Wo,Qh),e(Qh,qT),e(Wo,jT),e(Wo,Vh),e(Vh,CT),e(Wo,NT),_(o,w_,k),_(o,Ho,k),e(Ho,ds),e(ds,Kh),w(Ua,Kh,null),e(Ho,OT),e(Ho,Jh),e(Jh,AT),_(o,$_,k),_(o,Ro,k),w(Wa,Ro,null),e(Ro,IT),e(Ro,Ha),e(Ha,LT),e(Ha,op),e(op,DT),e(Ha,ST),_(o,F_,k),_(o,Qo,k),w(Ra,Qo,null),e(Qo,UT),e(Qo,Qa),e(Qa,WT),e(Qa,np),e(np,HT),e(Qa,RT),_(o,x_,k),_(o,lo,k),w(Va,lo,null),e(lo,QT),e(lo,Ka),e(Ka,VT),e(Ka,sp),e(sp,KT),e(Ka,JT),e(lo,GT),e(lo,cs),w(Ja,cs,null),e(cs,XT),e(cs,Gh),e(Gh,YT),_(o,B_,k),_(o,Vo,k),e(Vo,ps),e(ps,Xh),w(Ga,Xh,null),e(Vo,ZT),e(Vo,Yh),e(Yh,ey),_(o,M_,k),_(o,Oe,k),w(Xa,Oe,null),e(Oe,ty),e(Oe,Zh),e(Zh,oy),e(Oe,ny),e(Oe,Ya),e(Ya,sy),e(Ya,rp),e(rp,ry),e(Ya,ay),e(Oe,iy),e(Oe,Za),e(Za,ly),e(Za,ei),e(ei,dy),e(Za,cy),e(Oe,py),e(Oe,ti),e(ti,hy),e(ti,oi),e(oi,fy),e(ti,my),e(Oe,uy),e(Oe,Ve),e(Ve,gy),e(Ve,ef),e(ef,_y),e(Ve,by),e(Ve,tf),e(tf,ky),e(Ve,Ty),e(Ve,of),e(of,yy),e(Ve,vy),e(Ve,nf),e(nf,wy),e(Ve,$y),e(Ve,sf),e(sf,Fy),e(Ve,xy),e(Ve,rf),e(rf,By),e(Ve,My),e(Oe,Ey),e(Oe,Ot),w(ni,Ot,null),e(Ot,zy),e(Ot,Ko),e(Ko,Py),e(Ko,ap),e(ap,qy),e(Ko,jy),e(Ko,af),e(af,Cy),e(Ko,Ny),e(Ot,Oy),w(hs,Ot,null),e(Ot,Ay),w(fs,Ot,null),_(o,E_,k),_(o,Jo,k),e(Jo,ms),e(ms,lf),w(si,lf,null),e(Jo,Iy),e(Jo,df),e(df,Ly),_(o,z_,k),_(o,rt,k),w(ri,rt,null),e(rt,Dy),e(rt,Go),e(Go,Sy),e(Go,cf),e(cf,Uy),e(Go,Wy),e(Go,pf),e(pf,Hy),e(Go,Ry),e(rt,Qy),e(rt,ai),e(ai,Vy),e(ai,ip),e(ip,Ky),e(ai,Jy),e(rt,Gy),e(rt,ii),e(ii,Xy),e(ii,li),e(li,Yy),e(ii,Zy),e(rt,ev),e(rt,At),w(di,At,null),e(At,tv),e(At,Xo),e(Xo,ov),e(Xo,lp),e(lp,nv),e(Xo,sv),e(Xo,hf),e(hf,rv),e(Xo,av),e(At,iv),w(us,At,null),e(At,lv),w(gs,At,null),_(o,P_,k),_(o,Yo,k),e(Yo,_s),e(_s,ff),w(ci,ff,null),e(Yo,dv),e(Yo,mf),e(mf,cv),_(o,q_,k),_(o,at,k),w(pi,at,null),e(at,pv),e(at,hi),e(hi,hv),e(hi,uf),e(uf,fv),e(hi,mv),e(at,uv),e(at,fi),e(fi,gv),e(fi,dp),e(dp,_v),e(fi,bv),e(at,kv),e(at,mi),e(mi,Tv),e(mi,ui),e(ui,yv),e(mi,vv),e(at,wv),e(at,It),w(gi,It,null),e(It,$v),e(It,Zo),e(Zo,Fv),e(Zo,cp),e(cp,xv),e(Zo,Bv),e(Zo,gf),e(gf,Mv),e(Zo,Ev),e(It,zv),w(bs,It,null),e(It,Pv),w(ks,It,null),_(o,j_,k),_(o,en,k),e(en,Ts),e(Ts,_f),w(_i,_f,null),e(en,qv),e(en,bf),e(bf,jv),_(o,C_,k),_(o,it,k),w(bi,it,null),e(it,Cv),e(it,ki),e(ki,Nv),e(ki,kf),e(kf,Ov),e(ki,Av),e(it,Iv),e(it,Ti),e(Ti,Lv),e(Ti,pp),e(pp,Dv),e(Ti,Sv),e(it,Uv),e(it,yi),e(yi,Wv),e(yi,vi),e(vi,Hv),e(yi,Rv),e(it,Qv),e(it,ft),w(wi,ft,null),e(ft,Vv),e(ft,tn),e(tn,Kv),e(tn,hp),e(hp,Jv),e(tn,Gv),e(tn,Tf),e(Tf,Xv),e(tn,Yv),e(ft,Zv),w(ys,ft,null),e(ft,ew),w(vs,ft,null),e(ft,tw),w(ws,ft,null),_(o,N_,k),_(o,on,k),e(on,$s),e($s,yf),w($i,yf,null),e(on,ow),e(on,vf),e(vf,nw),_(o,O_,k),_(o,lt,k),w(Fi,lt,null),e(lt,sw),e(lt,xi),e(xi,rw),e(xi,wf),e(wf,aw),e(xi,iw),e(lt,lw),e(lt,Bi),e(Bi,dw),e(Bi,fp),e(fp,cw),e(Bi,pw),e(lt,hw),e(lt,Mi),e(Mi,fw),e(Mi,Ei),e(Ei,mw),e(Mi,uw),e(lt,gw),e(lt,Lt),w(zi,Lt,null),e(Lt,_w),e(Lt,nn),e(nn,bw),e(nn,mp),e(mp,kw),e(nn,Tw),e(nn,$f),e($f,yw),e(nn,vw),e(Lt,ww),w(Fs,Lt,null),e(Lt,$w),w(xs,Lt,null),_(o,A_,k),_(o,sn,k),e(sn,Bs),e(Bs,Ff),w(Pi,Ff,null),e(sn,Fw),e(sn,xf),e(xf,xw),_(o,I_,k),_(o,dt,k),w(qi,dt,null),e(dt,Bw),e(dt,Bf),e(Bf,Mw),e(dt,Ew),e(dt,ji),e(ji,zw),e(ji,up),e(up,Pw),e(ji,qw),e(dt,jw),e(dt,Ci),e(Ci,Cw),e(Ci,Ni),e(Ni,Nw),e(Ci,Ow),e(dt,Aw),e(dt,Qe),w(Oi,Qe,null),e(Qe,Iw),e(Qe,rn),e(rn,Lw),e(rn,gp),e(gp,Dw),e(rn,Sw),e(rn,Mf),e(Mf,Uw),e(rn,Ww),e(Qe,Hw),w(Ms,Qe,null),e(Qe,Rw),w(Es,Qe,null),e(Qe,Qw),w(zs,Qe,null),e(Qe,Vw),w(Ps,Qe,null),e(Qe,Kw),w(qs,Qe,null),_(o,L_,k),_(o,an,k),e(an,js),e(js,Ef),w(Ai,Ef,null),e(an,Jw),e(an,zf),e(zf,Gw),_(o,D_,k),_(o,ct,k),w(Ii,ct,null),e(ct,Xw),e(ct,Pf),e(Pf,Yw),e(ct,Zw),e(ct,Li),e(Li,e$),e(Li,_p),e(_p,t$),e(Li,o$),e(ct,n$),e(ct,Di),e(Di,s$),e(Di,Si),e(Si,r$),e(Di,a$),e(ct,i$),e(ct,Dt),w(Ui,Dt,null),e(Dt,l$),e(Dt,ln),e(ln,d$),e(ln,bp),e(bp,c$),e(ln,p$),e(ln,qf),e(qf,h$),e(ln,f$),e(Dt,m$),w(Cs,Dt,null),e(Dt,u$),w(Ns,Dt,null),_(o,S_,k),_(o,dn,k),e(dn,Os),e(Os,jf),w(Wi,jf,null),e(dn,g$),e(dn,Cf),e(Cf,_$),_(o,U_,k),_(o,pt,k),w(Hi,pt,null),e(pt,b$),e(pt,Nf),e(Nf,k$),e(pt,T$),e(pt,Ri),e(Ri,y$),e(Ri,kp),e(kp,v$),e(Ri,w$),e(pt,$$),e(pt,Qi),e(Qi,F$),e(Qi,Vi),e(Vi,x$),e(Qi,B$),e(pt,M$),e(pt,mt),w(Ki,mt,null),e(mt,E$),e(mt,cn),e(cn,z$),e(cn,Tp),e(Tp,P$),e(cn,q$),e(cn,Of),e(Of,j$),e(cn,C$),e(mt,N$),w(As,mt,null),e(mt,O$),w(Is,mt,null),e(mt,A$),w(Ls,mt,null),_(o,W_,k),_(o,pn,k),e(pn,Ds),e(Ds,Af),w(Ji,Af,null),e(pn,I$),e(pn,If),e(If,L$),_(o,H_,k),_(o,ht,k),w(Gi,ht,null),e(ht,D$),e(ht,hn),e(hn,S$),e(hn,Lf),e(Lf,U$),e(hn,W$),e(hn,Df),e(Df,H$),e(hn,R$),e(ht,Q$),e(ht,Xi),e(Xi,V$),e(Xi,yp),e(yp,K$),e(Xi,J$),e(ht,G$),e(ht,Yi),e(Yi,X$),e(Yi,Zi),e(Zi,Y$),e(Yi,Z$),e(ht,eF),e(ht,ut),w(el,ut,null),e(ut,tF),e(ut,fn),e(fn,oF),e(fn,vp),e(vp,nF),e(fn,sF),e(fn,Sf),e(Sf,rF),e(fn,aF),e(ut,iF),w(Ss,ut,null),e(ut,lF),w(Us,ut,null),e(ut,dF),w(Ws,ut,null),_(o,R_,k),_(o,mn,k),e(mn,Hs),e(Hs,Uf),w(tl,Uf,null),e(mn,cF),e(mn,Wf),e(Wf,pF),_(o,Q_,k),_(o,Ke,k),w(ol,Ke,null),e(Ke,hF),e(Ke,Hf),e(Hf,fF),e(Ke,mF),e(Ke,nl),e(nl,uF),e(nl,wp),e(wp,gF),e(nl,_F),e(Ke,bF),e(Ke,sl),e(sl,kF),e(sl,rl),e(rl,TF),e(sl,yF),e(Ke,vF),w(Rs,Ke,null),e(Ke,wF),e(Ke,St),w(al,St,null),e(St,$F),e(St,un),e(un,FF),e(un,$p),e($p,xF),e(un,BF),e(un,Rf),e(Rf,MF),e(un,EF),e(St,zF),w(Qs,St,null),e(St,PF),w(Vs,St,null),_(o,V_,k),_(o,gn,k),e(gn,Ks),e(Ks,Qf),w(il,Qf,null),e(gn,qF),e(gn,Vf),e(Vf,jF),_(o,K_,k),_(o,Je,k),w(ll,Je,null),e(Je,CF),e(Je,_n),e(_n,NF),e(_n,Kf),e(Kf,OF),e(_n,AF),e(_n,Jf),e(Jf,IF),e(_n,LF),e(Je,DF),e(Je,dl),e(dl,SF),e(dl,Fp),e(Fp,UF),e(dl,WF),e(Je,HF),e(Je,cl),e(cl,RF),e(cl,pl),e(pl,QF),e(cl,VF),e(Je,KF),w(Js,Je,null),e(Je,JF),e(Je,Ut),w(hl,Ut,null),e(Ut,GF),e(Ut,bn),e(bn,XF),e(bn,xp),e(xp,YF),e(bn,ZF),e(bn,Gf),e(Gf,e2),e(bn,t2),e(Ut,o2),w(Gs,Ut,null),e(Ut,n2),w(Xs,Ut,null),_(o,J_,k),_(o,kn,k),e(kn,Ys),e(Ys,Xf),w(fl,Xf,null),e(kn,s2),e(kn,Yf),e(Yf,r2),_(o,G_,k),_(o,Tn,k),w(ml,Tn,null),e(Tn,a2),e(Tn,gt),w(ul,gt,null),e(gt,i2),e(gt,Ae),e(Ae,l2),e(Ae,Zf),e(Zf,d2),e(Ae,c2),e(Ae,em),e(em,p2),e(Ae,h2),e(Ae,tm),e(tm,f2),e(Ae,m2),e(Ae,om),e(om,u2),e(Ae,g2),e(Ae,nm),e(nm,_2),e(Ae,b2),e(Ae,sm),e(sm,k2),e(Ae,T2),e(Ae,rm),e(rm,y2),e(Ae,v2),e(gt,w2),e(gt,gl),e(gl,_l),e(_l,$2),e(_l,am),e(am,F2),e(_l,x2),e(gl,B2),e(gl,bl),e(bl,M2),e(bl,im),e(im,E2),e(bl,z2),e(gt,P2),e(gt,G),e(G,q2),e(G,lm),e(lm,j2),e(G,C2),e(G,dm),e(dm,N2),e(G,O2),e(G,cm),e(cm,A2),e(G,I2),e(G,pm),e(pm,L2),e(G,D2),e(G,hm),e(hm,S2),e(G,U2),e(G,fm),e(fm,W2),e(G,H2),e(G,mm),e(mm,R2),e(G,Q2),e(G,um),e(um,V2),e(G,K2),e(G,gm),e(gm,J2),e(G,G2),e(G,_m),e(_m,X2),e(G,Y2),e(G,bm),e(bm,Z2),e(G,ex),e(G,km),e(km,tx),e(G,ox),e(G,Tm),e(Tm,nx),e(G,sx),e(G,ym),e(ym,rx),e(G,ax),e(G,vm),e(vm,ix),e(G,lx),e(G,wm),e(wm,dx),e(G,cx),e(G,$m),e($m,px),e(G,hx),e(G,Fm),e(Fm,fx),e(G,mx),e(G,xm),e(xm,ux),e(G,gx),e(G,Bm),e(Bm,_x),e(G,bx),e(gt,kx),w(Zs,gt,null),_(o,X_,k),_(o,yn,k),e(yn,er),e(er,Mm),w(kl,Mm,null),e(yn,Tx),e(yn,Em),e(Em,yx),_(o,Y_,k),_(o,Ge,k),w(Tl,Ge,null),e(Ge,vx),e(Ge,yl),e(yl,wx),e(yl,zm),e(zm,$x),e(yl,Fx),e(Ge,xx),e(Ge,vl),e(vl,Bx),e(vl,Bp),e(Bp,Mx),e(vl,Ex),e(Ge,zx),e(Ge,wl),e(wl,Px),e(wl,$l),e($l,qx),e(wl,jx),e(Ge,Cx),w(tr,Ge,null),e(Ge,Nx),e(Ge,_t),w(Fl,_t,null),e(_t,Ox),e(_t,vn),e(vn,Ax),e(vn,Mp),e(Mp,Ix),e(vn,Lx),e(vn,Pm),e(Pm,Dx),e(vn,Sx),e(_t,Ux),w(or,_t,null),e(_t,Wx),w(nr,_t,null),e(_t,Hx),w(sr,_t,null),_(o,Z_,k),_(o,wn,k),e(wn,rr),e(rr,qm),w(xl,qm,null),e(wn,Rx),e(wn,jm),e(jm,Qx),_(o,eb,k),_(o,Xe,k),w(Bl,Xe,null),e(Xe,Vx),e(Xe,Ml),e(Ml,Kx),e(Ml,Cm),e(Cm,Jx),e(Ml,Gx),e(Xe,Xx),e(Xe,El),e(El,Yx),e(El,Ep),e(Ep,Zx),e(El,e0),e(Xe,t0),e(Xe,zl),e(zl,o0),e(zl,Pl),e(Pl,n0),e(zl,s0),e(Xe,r0),w(ar,Xe,null),e(Xe,a0),e(Xe,Wt),w(ql,Wt,null),e(Wt,i0),e(Wt,$n),e($n,l0),e($n,zp),e(zp,d0),e($n,c0),e($n,Nm),e(Nm,p0),e($n,h0),e(Wt,f0),w(ir,Wt,null),e(Wt,m0),w(lr,Wt,null),_(o,tb,k),_(o,Fn,k),e(Fn,dr),e(dr,Om),w(jl,Om,null),e(Fn,u0),e(Fn,Am),e(Am,g0),_(o,ob,k),_(o,Ye,k),w(Cl,Ye,null),e(Ye,_0),e(Ye,Im),e(Im,b0),e(Ye,k0),e(Ye,Nl),e(Nl,T0),e(Nl,Pp),e(Pp,y0),e(Nl,v0),e(Ye,w0),e(Ye,Ol),e(Ol,$0),e(Ol,Al),e(Al,F0),e(Ol,x0),e(Ye,B0),w(cr,Ye,null),e(Ye,M0),e(Ye,bt),w(Il,bt,null),e(bt,E0),e(bt,xn),e(xn,z0),e(xn,qp),e(qp,P0),e(xn,q0),e(xn,Lm),e(Lm,j0),e(xn,C0),e(bt,N0),w(pr,bt,null),e(bt,O0),w(hr,bt,null),e(bt,A0),w(fr,bt,null),_(o,nb,k),_(o,Bn,k),e(Bn,mr),e(mr,Dm),w(Ll,Dm,null),e(Bn,I0),e(Bn,Sm),e(Sm,L0),_(o,sb,k),_(o,Ze,k),w(Dl,Ze,null),e(Ze,D0),e(Ze,Um),e(Um,S0),e(Ze,U0),e(Ze,Sl),e(Sl,W0),e(Sl,jp),e(jp,H0),e(Sl,R0),e(Ze,Q0),e(Ze,Ul),e(Ul,V0),e(Ul,Wl),e(Wl,K0),e(Ul,J0),e(Ze,G0),w(ur,Ze,null),e(Ze,X0),e(Ze,Ht),w(Hl,Ht,null),e(Ht,Y0),e(Ht,Mn),e(Mn,Z0),e(Mn,Cp),e(Cp,eB),e(Mn,tB),e(Mn,Wm),e(Wm,oB),e(Mn,nB),e(Ht,sB),w(gr,Ht,null),e(Ht,rB),w(_r,Ht,null),_(o,rb,k),_(o,En,k),e(En,br),e(br,Hm),w(Rl,Hm,null),e(En,aB),e(En,Rm),e(Rm,iB),_(o,ab,k),_(o,et,k),w(Ql,et,null),e(et,lB),e(et,Qm),e(Qm,dB),e(et,cB),e(et,Vl),e(Vl,pB),e(Vl,Np),e(Np,hB),e(Vl,fB),e(et,mB),e(et,Kl),e(Kl,uB),e(Kl,Jl),e(Jl,gB),e(Kl,_B),e(et,bB),w(kr,et,null),e(et,kB),e(et,kt),w(Gl,kt,null),e(kt,TB),e(kt,zn),e(zn,yB),e(zn,Op),e(Op,vB),e(zn,wB),e(zn,Vm),e(Vm,$B),e(zn,FB),e(kt,xB),w(Tr,kt,null),e(kt,BB),w(yr,kt,null),e(kt,MB),w(vr,kt,null),_(o,ib,k),_(o,Pn,k),e(Pn,wr),e(wr,Km),w(Xl,Km,null),e(Pn,EB),e(Pn,Jm),e(Jm,zB),_(o,lb,k),_(o,tt,k),w(Yl,tt,null),e(tt,PB),e(tt,qn),e(qn,qB),e(qn,Gm),e(Gm,jB),e(qn,CB),e(qn,Xm),e(Xm,NB),e(qn,OB),e(tt,AB),e(tt,Zl),e(Zl,IB),e(Zl,Ap),e(Ap,LB),e(Zl,DB),e(tt,SB),e(tt,ed),e(ed,UB),e(ed,td),e(td,WB),e(ed,HB),e(tt,RB),w($r,tt,null),e(tt,QB),e(tt,Tt),w(od,Tt,null),e(Tt,VB),e(Tt,jn),e(jn,KB),e(jn,Ip),e(Ip,JB),e(jn,GB),e(jn,Ym),e(Ym,XB),e(jn,YB),e(Tt,ZB),w(Fr,Tt,null),e(Tt,e9),w(xr,Tt,null),e(Tt,t9),w(Br,Tt,null),_(o,db,k),_(o,Cn,k),e(Cn,Mr),e(Mr,Zm),w(nd,Zm,null),e(Cn,o9),e(Cn,eu),e(eu,n9),_(o,cb,k),_(o,Ie,k),w(sd,Ie,null),e(Ie,s9),e(Ie,tu),e(tu,r9),e(Ie,a9),e(Ie,rd),e(rd,i9),e(rd,Lp),e(Lp,l9),e(rd,d9),e(Ie,c9),e(Ie,ad),e(ad,p9),e(ad,id),e(id,h9),e(ad,f9),e(Ie,m9),e(Ie,ou),e(ou,u9),e(Ie,g9),e(Ie,co),e(co,nu),e(nu,ld),e(ld,_9),e(co,b9),e(co,su),e(su,dd),e(dd,k9),e(co,T9),e(co,ru),e(ru,cd),e(cd,y9),e(co,v9),e(co,au),e(au,pd),e(pd,w9),e(Ie,$9),e(Ie,Rt),w(hd,Rt,null),e(Rt,F9),e(Rt,Nn),e(Nn,x9),e(Nn,iu),e(iu,B9),e(Nn,M9),e(Nn,lu),e(lu,E9),e(Nn,z9),e(Rt,P9),w(Er,Rt,null),e(Rt,q9),w(zr,Rt,null),_(o,pb,k),_(o,On,k),e(On,Pr),e(Pr,du),w(fd,du,null),e(On,j9),e(On,cu),e(cu,C9),_(o,hb,k),_(o,Le,k),w(md,Le,null),e(Le,N9),e(Le,An),e(An,O9),e(An,pu),e(pu,A9),e(An,I9),e(An,hu),e(hu,L9),e(An,D9),e(Le,S9),e(Le,ud),e(ud,U9),e(ud,Dp),e(Dp,W9),e(ud,H9),e(Le,R9),e(Le,gd),e(gd,Q9),e(gd,_d),e(_d,V9),e(gd,K9),e(Le,J9),e(Le,fu),e(fu,G9),e(Le,X9),e(Le,po),e(po,mu),e(mu,bd),e(bd,Y9),e(po,Z9),e(po,uu),e(uu,kd),e(kd,eM),e(po,tM),e(po,gu),e(gu,Td),e(Td,oM),e(po,nM),e(po,_u),e(_u,yd),e(yd,sM),e(Le,rM),e(Le,Qt),w(vd,Qt,null),e(Qt,aM),e(Qt,In),e(In,iM),e(In,bu),e(bu,lM),e(In,dM),e(In,ku),e(ku,cM),e(In,pM),e(Qt,hM),w(qr,Qt,null),e(Qt,fM),w(jr,Qt,null),_(o,fb,k),_(o,Ln,k),e(Ln,Cr),e(Cr,Tu),w(wd,Tu,null),e(Ln,mM),e(Ln,yu),e(yu,uM),_(o,mb,k),_(o,De,k),w($d,De,null),e(De,gM),e(De,Fd),e(Fd,_M),e(Fd,vu),e(vu,bM),e(Fd,kM),e(De,TM),e(De,xd),e(xd,yM),e(xd,Sp),e(Sp,vM),e(xd,wM),e(De,$M),e(De,Bd),e(Bd,FM),e(Bd,Md),e(Md,xM),e(Bd,BM),e(De,MM),e(De,wu),e(wu,EM),e(De,zM),e(De,ho),e(ho,$u),e($u,Ed),e(Ed,PM),e(ho,qM),e(ho,Fu),e(Fu,zd),e(zd,jM),e(ho,CM),e(ho,xu),e(xu,Pd),e(Pd,NM),e(ho,OM),e(ho,Bu),e(Bu,qd),e(qd,AM),e(De,IM),e(De,Vt),w(jd,Vt,null),e(Vt,LM),e(Vt,Dn),e(Dn,DM),e(Dn,Mu),e(Mu,SM),e(Dn,UM),e(Dn,Eu),e(Eu,WM),e(Dn,HM),e(Vt,RM),w(Nr,Vt,null),e(Vt,QM),w(Or,Vt,null),_(o,ub,k),_(o,Sn,k),e(Sn,Ar),e(Ar,zu),w(Cd,zu,null),e(Sn,VM),e(Sn,Pu),e(Pu,KM),_(o,gb,k),_(o,Se,k),w(Nd,Se,null),e(Se,JM),e(Se,Od),e(Od,GM),e(Od,qu),e(qu,XM),e(Od,YM),e(Se,ZM),e(Se,Ad),e(Ad,eE),e(Ad,Up),e(Up,tE),e(Ad,oE),e(Se,nE),e(Se,Id),e(Id,sE),e(Id,Ld),e(Ld,rE),e(Id,aE),e(Se,iE),e(Se,ju),e(ju,lE),e(Se,dE),e(Se,fo),e(fo,Cu),e(Cu,Dd),e(Dd,cE),e(fo,pE),e(fo,Nu),e(Nu,Sd),e(Sd,hE),e(fo,fE),e(fo,Ou),e(Ou,Ud),e(Ud,mE),e(fo,uE),e(fo,Au),e(Au,Wd),e(Wd,gE),e(Se,_E),e(Se,Kt),w(Hd,Kt,null),e(Kt,bE),e(Kt,Un),e(Un,kE),e(Un,Iu),e(Iu,TE),e(Un,yE),e(Un,Lu),e(Lu,vE),e(Un,wE),e(Kt,$E),w(Ir,Kt,null),e(Kt,FE),w(Lr,Kt,null),_(o,_b,k),_(o,Wn,k),e(Wn,Dr),e(Dr,Du),w(Rd,Du,null),e(Wn,xE),e(Wn,Su),e(Su,BE),_(o,bb,k),_(o,Ue,k),w(Qd,Ue,null),e(Ue,ME),e(Ue,Uu),e(Uu,EE),e(Ue,zE),e(Ue,Vd),e(Vd,PE),e(Vd,Wp),e(Wp,qE),e(Vd,jE),e(Ue,CE),e(Ue,Kd),e(Kd,NE),e(Kd,Jd),e(Jd,OE),e(Kd,AE),e(Ue,IE),e(Ue,Wu),e(Wu,LE),e(Ue,DE),e(Ue,mo),e(mo,Hu),e(Hu,Gd),e(Gd,SE),e(mo,UE),e(mo,Ru),e(Ru,Xd),e(Xd,WE),e(mo,HE),e(mo,Qu),e(Qu,Yd),e(Yd,RE),e(mo,QE),e(mo,Vu),e(Vu,Zd),e(Zd,VE),e(Ue,KE),e(Ue,Jt),w(ec,Jt,null),e(Jt,JE),e(Jt,Hn),e(Hn,GE),e(Hn,Ku),e(Ku,XE),e(Hn,YE),e(Hn,Ju),e(Ju,ZE),e(Hn,e6),e(Jt,t6),w(Sr,Jt,null),e(Jt,o6),w(Ur,Jt,null),_(o,kb,k),_(o,Rn,k),e(Rn,Wr),e(Wr,Gu),w(tc,Gu,null),e(Rn,n6),e(Rn,Xu),e(Xu,s6),_(o,Tb,k),_(o,We,k),w(oc,We,null),e(We,r6),e(We,Yu),e(Yu,a6),e(We,i6),e(We,nc),e(nc,l6),e(nc,Hp),e(Hp,d6),e(nc,c6),e(We,p6),e(We,sc),e(sc,h6),e(sc,rc),e(rc,f6),e(sc,m6),e(We,u6),e(We,Zu),e(Zu,g6),e(We,_6),e(We,uo),e(uo,eg),e(eg,ac),e(ac,b6),e(uo,k6),e(uo,tg),e(tg,ic),e(ic,T6),e(uo,y6),e(uo,og),e(og,lc),e(lc,v6),e(uo,w6),e(uo,ng),e(ng,dc),e(dc,$6),e(We,F6),e(We,Gt),w(cc,Gt,null),e(Gt,x6),e(Gt,Qn),e(Qn,B6),e(Qn,sg),e(sg,M6),e(Qn,E6),e(Qn,rg),e(rg,z6),e(Qn,P6),e(Gt,q6),w(Hr,Gt,null),e(Gt,j6),w(Rr,Gt,null),_(o,yb,k),_(o,Vn,k),e(Vn,Qr),e(Qr,ag),w(pc,ag,null),e(Vn,C6),e(Vn,ig),e(ig,N6),_(o,vb,k),_(o,He,k),w(hc,He,null),e(He,O6),e(He,lg),e(lg,A6),e(He,I6),e(He,fc),e(fc,L6),e(fc,Rp),e(Rp,D6),e(fc,S6),e(He,U6),e(He,mc),e(mc,W6),e(mc,uc),e(uc,H6),e(mc,R6),e(He,Q6),e(He,dg),e(dg,V6),e(He,K6),e(He,go),e(go,cg),e(cg,gc),e(gc,J6),e(go,G6),e(go,pg),e(pg,_c),e(_c,X6),e(go,Y6),e(go,hg),e(hg,bc),e(bc,Z6),e(go,ez),e(go,fg),e(fg,kc),e(kc,tz),e(He,oz),e(He,Xt),w(Tc,Xt,null),e(Xt,nz),e(Xt,Kn),e(Kn,sz),e(Kn,mg),e(mg,rz),e(Kn,az),e(Kn,ug),e(ug,iz),e(Kn,lz),e(Xt,dz),w(Vr,Xt,null),e(Xt,cz),w(Kr,Xt,null),_(o,wb,k),_(o,Jn,k),e(Jn,Jr),e(Jr,gg),w(yc,gg,null),e(Jn,pz),e(Jn,_g),e(_g,hz),_(o,$b,k),_(o,Re,k),w(vc,Re,null),e(Re,fz),e(Re,Gn),e(Gn,mz),e(Gn,bg),e(bg,uz),e(Gn,gz),e(Gn,kg),e(kg,_z),e(Gn,bz),e(Re,kz),e(Re,wc),e(wc,Tz),e(wc,Qp),e(Qp,yz),e(wc,vz),e(Re,wz),e(Re,$c),e($c,$z),e($c,Fc),e(Fc,Fz),e($c,xz),e(Re,Bz),e(Re,Tg),e(Tg,Mz),e(Re,Ez),e(Re,_o),e(_o,yg),e(yg,xc),e(xc,zz),e(_o,Pz),e(_o,vg),e(vg,Bc),e(Bc,qz),e(_o,jz),e(_o,wg),e(wg,Mc),e(Mc,Cz),e(_o,Nz),e(_o,$g),e($g,Ec),e(Ec,Oz),e(Re,Az),e(Re,Yt),w(zc,Yt,null),e(Yt,Iz),e(Yt,Xn),e(Xn,Lz),e(Xn,Fg),e(Fg,Dz),e(Xn,Sz),e(Xn,xg),e(xg,Uz),e(Xn,Wz),e(Yt,Hz),w(Gr,Yt,null),e(Yt,Rz),w(Xr,Yt,null),Fb=!0},p(o,[k]){const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:o}),ns.$set(Pc);const Bg={};k&2&&(Bg.$$scope={dirty:k,ctx:o}),as.$set(Bg);const Mg={};k&2&&(Mg.$$scope={dirty:k,ctx:o}),ls.$set(Mg);const Eg={};k&2&&(Eg.$$scope={dirty:k,ctx:o}),hs.$set(Eg);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:o}),fs.$set(qc);const zg={};k&2&&(zg.$$scope={dirty:k,ctx:o}),us.$set(zg);const Pg={};k&2&&(Pg.$$scope={dirty:k,ctx:o}),gs.$set(Pg);const qg={};k&2&&(qg.$$scope={dirty:k,ctx:o}),bs.$set(qg);const jc={};k&2&&(jc.$$scope={dirty:k,ctx:o}),ks.$set(jc);const jg={};k&2&&(jg.$$scope={dirty:k,ctx:o}),ys.$set(jg);const Cg={};k&2&&(Cg.$$scope={dirty:k,ctx:o}),vs.$set(Cg);const Ng={};k&2&&(Ng.$$scope={dirty:k,ctx:o}),ws.$set(Ng);const Og={};k&2&&(Og.$$scope={dirty:k,ctx:o}),Fs.$set(Og);const Ag={};k&2&&(Ag.$$scope={dirty:k,ctx:o}),xs.$set(Ag);const Ig={};k&2&&(Ig.$$scope={dirty:k,ctx:o}),Ms.$set(Ig);const Lg={};k&2&&(Lg.$$scope={dirty:k,ctx:o}),Es.$set(Lg);const Cc={};k&2&&(Cc.$$scope={dirty:k,ctx:o}),zs.$set(Cc);const Dg={};k&2&&(Dg.$$scope={dirty:k,ctx:o}),Ps.$set(Dg);const Sg={};k&2&&(Sg.$$scope={dirty:k,ctx:o}),qs.$set(Sg);const Yn={};k&2&&(Yn.$$scope={dirty:k,ctx:o}),Cs.$set(Yn);const Ug={};k&2&&(Ug.$$scope={dirty:k,ctx:o}),Ns.$set(Ug);const Wg={};k&2&&(Wg.$$scope={dirty:k,ctx:o}),As.$set(Wg);const Nc={};k&2&&(Nc.$$scope={dirty:k,ctx:o}),Is.$set(Nc);const Hg={};k&2&&(Hg.$$scope={dirty:k,ctx:o}),Ls.$set(Hg);const Rg={};k&2&&(Rg.$$scope={dirty:k,ctx:o}),Ss.$set(Rg);const Qg={};k&2&&(Qg.$$scope={dirty:k,ctx:o}),Us.$set(Qg);const bo={};k&2&&(bo.$$scope={dirty:k,ctx:o}),Ws.$set(bo);const ko={};k&2&&(ko.$$scope={dirty:k,ctx:o}),Rs.$set(ko);const Vg={};k&2&&(Vg.$$scope={dirty:k,ctx:o}),Qs.$set(Vg);const Kg={};k&2&&(Kg.$$scope={dirty:k,ctx:o}),Vs.$set(Kg);const Jg={};k&2&&(Jg.$$scope={dirty:k,ctx:o}),Js.$set(Jg);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Gs.$set(Zn);const Gg={};k&2&&(Gg.$$scope={dirty:k,ctx:o}),Xs.$set(Gg);const Xg={};k&2&&(Xg.$$scope={dirty:k,ctx:o}),Zs.$set(Xg);const Oc={};k&2&&(Oc.$$scope={dirty:k,ctx:o}),tr.$set(Oc);const Yg={};k&2&&(Yg.$$scope={dirty:k,ctx:o}),or.$set(Yg);const Zg={};k&2&&(Zg.$$scope={dirty:k,ctx:o}),nr.$set(Zg);const e_={};k&2&&(e_.$$scope={dirty:k,ctx:o}),sr.$set(e_);const ot={};k&2&&(ot.$$scope={dirty:k,ctx:o}),ar.$set(ot);const t_={};k&2&&(t_.$$scope={dirty:k,ctx:o}),ir.$set(t_);const Ac={};k&2&&(Ac.$$scope={dirty:k,ctx:o}),lr.$set(Ac);const o_={};k&2&&(o_.$$scope={dirty:k,ctx:o}),cr.$set(o_);const es={};k&2&&(es.$$scope={dirty:k,ctx:o}),pr.$set(es);const n_={};k&2&&(n_.$$scope={dirty:k,ctx:o}),hr.$set(n_);const Ic={};k&2&&(Ic.$$scope={dirty:k,ctx:o}),fr.$set(Ic);const Vp={};k&2&&(Vp.$$scope={dirty:k,ctx:o}),ur.$set(Vp);const s_={};k&2&&(s_.$$scope={dirty:k,ctx:o}),gr.$set(s_);const Kp={};k&2&&(Kp.$$scope={dirty:k,ctx:o}),_r.$set(Kp);const r_={};k&2&&(r_.$$scope={dirty:k,ctx:o}),kr.$set(r_);const Lc={};k&2&&(Lc.$$scope={dirty:k,ctx:o}),Tr.$set(Lc);const Dc={};k&2&&(Dc.$$scope={dirty:k,ctx:o}),yr.$set(Dc);const a_={};k&2&&(a_.$$scope={dirty:k,ctx:o}),vr.$set(a_);const To={};k&2&&(To.$$scope={dirty:k,ctx:o}),$r.$set(To);const i_={};k&2&&(i_.$$scope={dirty:k,ctx:o}),Fr.$set(i_);const ts={};k&2&&(ts.$$scope={dirty:k,ctx:o}),xr.$set(ts);const l_={};k&2&&(l_.$$scope={dirty:k,ctx:o}),Br.$set(l_);const d_={};k&2&&(d_.$$scope={dirty:k,ctx:o}),Er.$set(d_);const c_={};k&2&&(c_.$$scope={dirty:k,ctx:o}),zr.$set(c_);const Sc={};k&2&&(Sc.$$scope={dirty:k,ctx:o}),qr.$set(Sc);const p_={};k&2&&(p_.$$scope={dirty:k,ctx:o}),jr.$set(p_);const h_={};k&2&&(h_.$$scope={dirty:k,ctx:o}),Nr.$set(h_);const f_={};k&2&&(f_.$$scope={dirty:k,ctx:o}),Or.$set(f_);const jt={};k&2&&(jt.$$scope={dirty:k,ctx:o}),Ir.$set(jt);const Uc={};k&2&&(Uc.$$scope={dirty:k,ctx:o}),Lr.$set(Uc);const m_={};k&2&&(m_.$$scope={dirty:k,ctx:o}),Sr.$set(m_);const Wc={};k&2&&(Wc.$$scope={dirty:k,ctx:o}),Ur.$set(Wc);const u_={};k&2&&(u_.$$scope={dirty:k,ctx:o}),Hr.$set(u_);const os={};k&2&&(os.$$scope={dirty:k,ctx:o}),Rr.$set(os);const g_={};k&2&&(g_.$$scope={dirty:k,ctx:o}),Vr.$set(g_);const Hc={};k&2&&(Hc.$$scope={dirty:k,ctx:o}),Kr.$set(Hc);const Jp={};k&2&&(Jp.$$scope={dirty:k,ctx:o}),Gr.$set(Jp);const __={};k&2&&(__.$$scope={dirty:k,ctx:o}),Xr.$set(__)},i(o){Fb||($(l.$$.fragment,o),$(oe.$$.fragment,o),$(Ee.$$.fragment,o),$($a.$$.fragment,o),$(ns.$$.fragment,o),$(xa.$$.fragment,o),$(Ba.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(ja.$$.fragment,o),$(as.$$.fragment,o),$(Ca.$$.fragment,o),$(Na.$$.fragment,o),$(Oa.$$.fragment,o),$(La.$$.fragment,o),$(Sa.$$.fragment,o),$(ls.$$.fragment,o),$(Ua.$$.fragment,o),$(Wa.$$.fragment,o),$(Ra.$$.fragment,o),$(Va.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(ni.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(si.$$.fragment,o),$(ri.$$.fragment,o),$(di.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(ci.$$.fragment,o),$(pi.$$.fragment,o),$(gi.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(wi.$$.fragment,o),$(ys.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$($i.$$.fragment,o),$(Fi.$$.fragment,o),$(zi.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(zs.$$.fragment,o),$(Ps.$$.fragment,o),$(qs.$$.fragment,o),$(Ai.$$.fragment,o),$(Ii.$$.fragment,o),$(Ui.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(Wi.$$.fragment,o),$(Hi.$$.fragment,o),$(Ki.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ls.$$.fragment,o),$(Ji.$$.fragment,o),$(Gi.$$.fragment,o),$(el.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(tl.$$.fragment,o),$(ol.$$.fragment,o),$(Rs.$$.fragment,o),$(al.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(il.$$.fragment,o),$(ll.$$.fragment,o),$(Js.$$.fragment,o),$(hl.$$.fragment,o),$(Gs.$$.fragment,o),$(Xs.$$.fragment,o),$(fl.$$.fragment,o),$(ml.$$.fragment,o),$(ul.$$.fragment,o),$(Zs.$$.fragment,o),$(kl.$$.fragment,o),$(Tl.$$.fragment,o),$(tr.$$.fragment,o),$(Fl.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(xl.$$.fragment,o),$(Bl.$$.fragment,o),$(ar.$$.fragment,o),$(ql.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(Cl.$$.fragment,o),$(cr.$$.fragment,o),$(Il.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(fr.$$.fragment,o),$(Ll.$$.fragment,o),$(Dl.$$.fragment,o),$(ur.$$.fragment,o),$(Hl.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(Rl.$$.fragment,o),$(Ql.$$.fragment,o),$(kr.$$.fragment,o),$(Gl.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(vr.$$.fragment,o),$(Xl.$$.fragment,o),$(Yl.$$.fragment,o),$($r.$$.fragment,o),$(od.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$(Br.$$.fragment,o),$(nd.$$.fragment,o),$(sd.$$.fragment,o),$(hd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(fd.$$.fragment,o),$(md.$$.fragment,o),$(vd.$$.fragment,o),$(qr.$$.fragment,o),$(jr.$$.fragment,o),$(wd.$$.fragment,o),$($d.$$.fragment,o),$(jd.$$.fragment,o),$(Nr.$$.fragment,o),$(Or.$$.fragment,o),$(Cd.$$.fragment,o),$(Nd.$$.fragment,o),$(Hd.$$.fragment,o),$(Ir.$$.fragment,o),$(Lr.$$.fragment,o),$(Rd.$$.fragment,o),$(Qd.$$.fragment,o),$(ec.$$.fragment,o),$(Sr.$$.fragment,o),$(Ur.$$.fragment,o),$(tc.$$.fragment,o),$(oc.$$.fragment,o),$(cc.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(pc.$$.fragment,o),$(hc.$$.fragment,o),$(Tc.$$.fragment,o),$(Vr.$$.fragment,o),$(Kr.$$.fragment,o),$(yc.$$.fragment,o),$(vc.$$.fragment,o),$(zc.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),Fb=!0)},o(o){F(l.$$.fragment,o),F(oe.$$.fragment,o),F(Ee.$$.fragment,o),F($a.$$.fragment,o),F(ns.$$.fragment,o),F(xa.$$.fragment,o),F(Ba.$$.fragment,o),F(Ea.$$.fragment,o),F(Pa.$$.fragment,o),F(ja.$$.fragment,o),F(as.$$.fragment,o),F(Ca.$$.fragment,o),F(Na.$$.fragment,o),F(Oa.$$.fragment,o),F(La.$$.fragment,o),F(Sa.$$.fragment,o),F(ls.$$.fragment,o),F(Ua.$$.fragment,o),F(Wa.$$.fragment,o),F(Ra.$$.fragment,o),F(Va.$$.fragment,o),F(Ja.$$.fragment,o),F(Ga.$$.fragment,o),F(Xa.$$.fragment,o),F(ni.$$.fragment,o),F(hs.$$.fragment,o),F(fs.$$.fragment,o),F(si.$$.fragment,o),F(ri.$$.fragment,o),F(di.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(ci.$$.fragment,o),F(pi.$$.fragment,o),F(gi.$$.fragment,o),F(bs.$$.fragment,o),F(ks.$$.fragment,o),F(_i.$$.fragment,o),F(bi.$$.fragment,o),F(wi.$$.fragment,o),F(ys.$$.fragment,o),F(vs.$$.fragment,o),F(ws.$$.fragment,o),F($i.$$.fragment,o),F(Fi.$$.fragment,o),F(zi.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(Pi.$$.fragment,o),F(qi.$$.fragment,o),F(Oi.$$.fragment,o),F(Ms.$$.fragment,o),F(Es.$$.fragment,o),F(zs.$$.fragment,o),F(Ps.$$.fragment,o),F(qs.$$.fragment,o),F(Ai.$$.fragment,o),F(Ii.$$.fragment,o),F(Ui.$$.fragment,o),F(Cs.$$.fragment,o),F(Ns.$$.fragment,o),F(Wi.$$.fragment,o),F(Hi.$$.fragment,o),F(Ki.$$.fragment,o),F(As.$$.fragment,o),F(Is.$$.fragment,o),F(Ls.$$.fragment,o),F(Ji.$$.fragment,o),F(Gi.$$.fragment,o),F(el.$$.fragment,o),F(Ss.$$.fragment,o),F(Us.$$.fragment,o),F(Ws.$$.fragment,o),F(tl.$$.fragment,o),F(ol.$$.fragment,o),F(Rs.$$.fragment,o),F(al.$$.fragment,o),F(Qs.$$.fragment,o),F(Vs.$$.fragment,o),F(il.$$.fragment,o),F(ll.$$.fragment,o),F(Js.$$.fragment,o),F(hl.$$.fragment,o),F(Gs.$$.fragment,o),F(Xs.$$.fragment,o),F(fl.$$.fragment,o),F(ml.$$.fragment,o),F(ul.$$.fragment,o),F(Zs.$$.fragment,o),F(kl.$$.fragment,o),F(Tl.$$.fragment,o),F(tr.$$.fragment,o),F(Fl.$$.fragment,o),F(or.$$.fragment,o),F(nr.$$.fragment,o),F(sr.$$.fragment,o),F(xl.$$.fragment,o),F(Bl.$$.fragment,o),F(ar.$$.fragment,o),F(ql.$$.fragment,o),F(ir.$$.fragment,o),F(lr.$$.fragment,o),F(jl.$$.fragment,o),F(Cl.$$.fragment,o),F(cr.$$.fragment,o),F(Il.$$.fragment,o),F(pr.$$.fragment,o),F(hr.$$.fragment,o),F(fr.$$.fragment,o),F(Ll.$$.fragment,o),F(Dl.$$.fragment,o),F(ur.$$.fragment,o),F(Hl.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(Rl.$$.fragment,o),F(Ql.$$.fragment,o),F(kr.$$.fragment,o),F(Gl.$$.fragment,o),F(Tr.$$.fragment,o),F(yr.$$.fragment,o),F(vr.$$.fragment,o),F(Xl.$$.fragment,o),F(Yl.$$.fragment,o),F($r.$$.fragment,o),F(od.$$.fragment,o),F(Fr.$$.fragment,o),F(xr.$$.fragment,o),F(Br.$$.fragment,o),F(nd.$$.fragment,o),F(sd.$$.fragment,o),F(hd.$$.fragment,o),F(Er.$$.fragment,o),F(zr.$$.fragment,o),F(fd.$$.fragment,o),F(md.$$.fragment,o),F(vd.$$.fragment,o),F(qr.$$.fragment,o),F(jr.$$.fragment,o),F(wd.$$.fragment,o),F($d.$$.fragment,o),F(jd.$$.fragment,o),F(Nr.$$.fragment,o),F(Or.$$.fragment,o),F(Cd.$$.fragment,o),F(Nd.$$.fragment,o),F(Hd.$$.fragment,o),F(Ir.$$.fragment,o),F(Lr.$$.fragment,o),F(Rd.$$.fragment,o),F(Qd.$$.fragment,o),F(ec.$$.fragment,o),F(Sr.$$.fragment,o),F(Ur.$$.fragment,o),F(tc.$$.fragment,o),F(oc.$$.fragment,o),F(cc.$$.fragment,o),F(Hr.$$.fragment,o),F(Rr.$$.fragment,o),F(pc.$$.fragment,o),F(hc.$$.fragment,o),F(Tc.$$.fragment,o),F(Vr.$$.fragment,o),F(Kr.$$.fragment,o),F(yc.$$.fragment,o),F(vc.$$.fragment,o),F(zc.$$.fragment,o),F(Gr.$$.fragment,o),F(Xr.$$.fragment,o),Fb=!1},d(o){t(d),o&&t(g),o&&t(h),x(l),o&&t(X),o&&t(z),x(oe),o&&t(fe),o&&t(J),o&&t(j),o&&t(ie),o&&t(me),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(te),o&&t(E),o&&t(K),o&&t(W),o&&t(we),x(Ee),o&&t(b_),o&&t(qt),x($a),x(ns),o&&t(k_),o&&t(Do),x(xa),o&&t(T_),o&&t(Ne),x(Ba),x(Ea),x(Pa),x(ja),x(as),x(Ca),o&&t(y_),o&&t(Uo),x(Na),o&&t(v_),o&&t(st),x(Oa),x(La),x(Sa),x(ls),o&&t(w_),o&&t(Ho),x(Ua),o&&t($_),o&&t(Ro),x(Wa),o&&t(F_),o&&t(Qo),x(Ra),o&&t(x_),o&&t(lo),x(Va),x(Ja),o&&t(B_),o&&t(Vo),x(Ga),o&&t(M_),o&&t(Oe),x(Xa),x(ni),x(hs),x(fs),o&&t(E_),o&&t(Jo),x(si),o&&t(z_),o&&t(rt),x(ri),x(di),x(us),x(gs),o&&t(P_),o&&t(Yo),x(ci),o&&t(q_),o&&t(at),x(pi),x(gi),x(bs),x(ks),o&&t(j_),o&&t(en),x(_i),o&&t(C_),o&&t(it),x(bi),x(wi),x(ys),x(vs),x(ws),o&&t(N_),o&&t(on),x($i),o&&t(O_),o&&t(lt),x(Fi),x(zi),x(Fs),x(xs),o&&t(A_),o&&t(sn),x(Pi),o&&t(I_),o&&t(dt),x(qi),x(Oi),x(Ms),x(Es),x(zs),x(Ps),x(qs),o&&t(L_),o&&t(an),x(Ai),o&&t(D_),o&&t(ct),x(Ii),x(Ui),x(Cs),x(Ns),o&&t(S_),o&&t(dn),x(Wi),o&&t(U_),o&&t(pt),x(Hi),x(Ki),x(As),x(Is),x(Ls),o&&t(W_),o&&t(pn),x(Ji),o&&t(H_),o&&t(ht),x(Gi),x(el),x(Ss),x(Us),x(Ws),o&&t(R_),o&&t(mn),x(tl),o&&t(Q_),o&&t(Ke),x(ol),x(Rs),x(al),x(Qs),x(Vs),o&&t(V_),o&&t(gn),x(il),o&&t(K_),o&&t(Je),x(ll),x(Js),x(hl),x(Gs),x(Xs),o&&t(J_),o&&t(kn),x(fl),o&&t(G_),o&&t(Tn),x(ml),x(ul),x(Zs),o&&t(X_),o&&t(yn),x(kl),o&&t(Y_),o&&t(Ge),x(Tl),x(tr),x(Fl),x(or),x(nr),x(sr),o&&t(Z_),o&&t(wn),x(xl),o&&t(eb),o&&t(Xe),x(Bl),x(ar),x(ql),x(ir),x(lr),o&&t(tb),o&&t(Fn),x(jl),o&&t(ob),o&&t(Ye),x(Cl),x(cr),x(Il),x(pr),x(hr),x(fr),o&&t(nb),o&&t(Bn),x(Ll),o&&t(sb),o&&t(Ze),x(Dl),x(ur),x(Hl),x(gr),x(_r),o&&t(rb),o&&t(En),x(Rl),o&&t(ab),o&&t(et),x(Ql),x(kr),x(Gl),x(Tr),x(yr),x(vr),o&&t(ib),o&&t(Pn),x(Xl),o&&t(lb),o&&t(tt),x(Yl),x($r),x(od),x(Fr),x(xr),x(Br),o&&t(db),o&&t(Cn),x(nd),o&&t(cb),o&&t(Ie),x(sd),x(hd),x(Er),x(zr),o&&t(pb),o&&t(On),x(fd),o&&t(hb),o&&t(Le),x(md),x(vd),x(qr),x(jr),o&&t(fb),o&&t(Ln),x(wd),o&&t(mb),o&&t(De),x($d),x(jd),x(Nr),x(Or),o&&t(ub),o&&t(Sn),x(Cd),o&&t(gb),o&&t(Se),x(Nd),x(Hd),x(Ir),x(Lr),o&&t(_b),o&&t(Wn),x(Rd),o&&t(bb),o&&t(Ue),x(Qd),x(ec),x(Sr),x(Ur),o&&t(kb),o&&t(Rn),x(tc),o&&t(Tb),o&&t(We),x(oc),x(cc),x(Hr),x(Rr),o&&t(yb),o&&t(Vn),x(pc),o&&t(vb),o&&t(He),x(hc),x(Tc),x(Vr),x(Kr),o&&t(wb),o&&t(Jn),x(yc),o&&t($b),o&&t(Re),x(vc),x(zc),x(Gr),x(Xr)}}}const yN={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function vN(B){return t5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class EN extends XC{constructor(d){super();YC(this,d,vN,TN,ZC,{})}}export{EN as default,yN as metadata};
