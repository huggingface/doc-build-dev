import{S as W5,i as H5,s as R5,e as r,k as c,w as T,t as n,M as Q5,c as a,d as t,m as p,a as i,x as v,h as s,b as u,G as e,g as b,y as w,q as $,o as x,B as F,v as V5,L as te}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function K5(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function J5(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function G5(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function X5(B){let d,_,m,h,g;return h=new oe({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function Y5(B){let d,_,m,h,g;return h=new oe({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function Z5(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function eN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function tN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function oN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function nN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function sN(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function rN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function aN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function iN(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function lN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function dN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function cN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function pN(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function hN(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function mN(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function fN(B){let d,_;return d=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function uN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function gN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function _N(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function bN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function kN(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function yN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function TN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function vN(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function wN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function $N(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function xN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function FN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function BN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function EN(B){let d,_,m,h,g;return h=new oe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function MN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function zN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function PN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function qN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function jN(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function CN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function NN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function ON(B){let d,_,m,h,g;return h=new oe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function IN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function AN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function LN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function DN(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function SN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function UN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function WN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function HN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function RN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function QN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function VN(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function KN(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),z=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),ye=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),Te=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(y){d=a(y,"P",{});var M=i(d);_=s(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=p(y),h=a(y,"UL",{});var K=i(h);g=a(K,"LI",{});var ze=i(g);l=s(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(y),z=a(y,"P",{});var I=i(z);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);ye=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(y),O=a(y,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(y),P=a(y,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var xe=i(H);fe=s(xe,"input_ids"),xe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var Fe=i(S);Te=s(Fe,"model(inputs_ids)"),Fe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var Me=i(R);ge=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(y,M){b(y,d,M),e(d,_),b(y,m,M),b(y,h,M),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(y,X,M),b(y,z,M),e(z,ne),e(z,L),e(L,re),e(z,ke),e(z,D),e(D,ye),e(z,me),b(y,J,M),b(y,O,M),e(O,ae),b(y,Y,M),b(y,P,M),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,Te),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(y){y&&t(d),y&&t(m),y&&t(h),y&&t(X),y&&t(z),y&&t(J),y&&t(O),y&&t(Y),y&&t(P)}}}function JN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function GN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function XN(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){x(d.$$.fragment,m),_=!1},d(m){F(d,m)}}}function YN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function ZN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function eO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function tO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function oO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function nO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function sO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function rO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function aO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function iO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function lO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function dO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function cO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function pO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function hO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function mO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function fO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function uO(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),T(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){x(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),F(h,l)}}}function gO(B){let d,_,m,h,g,l,f,E,be,X,z,ne,L,re,ke,D,ye,me,J,O,ae,Y,P,j,ie,H,fe,le,S,Te,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe,y,M,K,ze,Be,I,Pe,Ee,qe,A,W,xe,Fe,U,Me,je,he,Ce,Eb,Nt,Ra,jy,ho,Cy,Ep,Ny,Oy,Mp,Iy,Ay,Qa,Ly,Dy,Sy,Ko,Uy,zp,Wy,Hy,Pp,Ry,Qy,Vy,_s,Mb,Jo,bs,km,Va,Ky,ym,Jy,zb,Ne,Ka,Gy,Tm,Xy,Yy,Ja,Zy,qp,eT,tT,oT,Bo,Ga,nT,vm,sT,rT,Xa,jp,aT,wm,iT,lT,Cp,dT,$m,cT,pT,ks,Ya,hT,Za,mT,xm,fT,uT,gT,It,ei,_T,Fm,bT,kT,ys,yT,Go,TT,Bm,vT,wT,Em,$T,xT,FT,Np,ti,Pb,Xo,Ts,Mm,oi,BT,zm,ET,qb,rt,ni,MT,si,zT,Pm,PT,qT,jT,ri,CT,Op,NT,OT,IT,Eo,ai,AT,qm,LT,DT,ii,Ip,ST,jm,UT,WT,Ap,HT,Cm,RT,QT,At,li,VT,Nm,KT,JT,vs,GT,Yo,XT,Om,YT,ZT,Im,ev,tv,jb,Zo,ws,Am,di,ov,Lm,nv,Cb,at,ci,sv,en,rv,Dm,av,iv,Sm,lv,dv,cv,pi,pv,Um,hv,mv,fv,Mo,hi,uv,mi,gv,Wm,_v,bv,kv,$s,yv,zo,fi,Tv,tn,vv,Hm,wv,$v,Rm,xv,Fv,Bv,xs,Nb,on,Fs,Qm,ui,Ev,Vm,Mv,Ob,nn,gi,zv,_i,Pv,Lp,qv,jv,Ib,sn,bi,Cv,ki,Nv,Dp,Ov,Iv,Ab,mo,yi,Av,Ti,Lv,Sp,Dv,Sv,Uv,Bs,vi,Wv,Km,Hv,Lb,rn,Es,Jm,wi,Rv,Gm,Qv,Db,Oe,$i,Vv,Xm,Kv,Jv,xi,Gv,Up,Xv,Yv,Zv,Fi,ew,Bi,tw,ow,nw,Ei,sw,Mi,rw,aw,iw,Ke,lw,Ym,dw,cw,Zm,pw,hw,ef,mw,fw,tf,uw,gw,of,_w,bw,nf,kw,yw,Tw,Lt,zi,vw,an,ww,Wp,$w,xw,sf,Fw,Bw,Ew,Ms,Mw,zs,Sb,ln,Ps,rf,Pi,zw,af,Pw,Ub,it,qi,qw,dn,jw,lf,Cw,Nw,df,Ow,Iw,Aw,ji,Lw,Hp,Dw,Sw,Uw,Ci,Ww,Ni,Hw,Rw,Qw,Dt,Oi,Vw,cn,Kw,Rp,Jw,Gw,cf,Xw,Yw,Zw,qs,e$,js,Wb,pn,Cs,pf,Ii,t$,hf,o$,Hb,lt,Ai,n$,Li,s$,mf,r$,a$,i$,Di,l$,Qp,d$,c$,p$,Si,h$,Ui,m$,f$,u$,St,Wi,g$,hn,_$,Vp,b$,k$,ff,y$,T$,v$,Ns,w$,Os,Rb,mn,Is,uf,Hi,$$,gf,x$,Qb,dt,Ri,F$,Qi,B$,_f,E$,M$,z$,Vi,P$,Kp,q$,j$,C$,Ki,N$,Ji,O$,I$,A$,ut,Gi,L$,fn,D$,Jp,S$,U$,bf,W$,H$,R$,As,Q$,Ls,V$,Ds,Vb,un,Ss,kf,Xi,K$,yf,J$,Kb,ct,Yi,G$,Zi,X$,Tf,Y$,Z$,e2,el,t2,Gp,o2,n2,s2,tl,r2,ol,a2,i2,l2,Ut,nl,d2,gn,c2,Xp,p2,h2,vf,m2,f2,u2,Us,g2,Ws,Jb,_n,Hs,wf,sl,_2,$f,b2,Gb,pt,rl,k2,xf,y2,T2,al,v2,Yp,w2,$2,x2,il,F2,ll,B2,E2,M2,Ve,dl,z2,bn,P2,Zp,q2,j2,Ff,C2,N2,O2,Rs,I2,Qs,A2,Vs,L2,Ks,D2,Js,Xb,kn,Gs,Bf,cl,S2,Ef,U2,Yb,ht,pl,W2,Mf,H2,R2,hl,Q2,eh,V2,K2,J2,ml,G2,fl,X2,Y2,Z2,Wt,ul,ex,yn,tx,th,ox,nx,zf,sx,rx,ax,Xs,ix,Ys,Zb,Tn,Zs,Pf,gl,lx,qf,dx,ek,mt,_l,cx,jf,px,hx,bl,mx,oh,fx,ux,gx,kl,_x,yl,bx,kx,yx,gt,Tl,Tx,vn,vx,nh,wx,$x,Cf,xx,Fx,Bx,er,Ex,tr,Mx,or,tk,wn,nr,Nf,vl,zx,Of,Px,ok,ft,wl,qx,$n,jx,If,Cx,Nx,Af,Ox,Ix,Ax,$l,Lx,sh,Dx,Sx,Ux,xl,Wx,Fl,Hx,Rx,Qx,_t,Bl,Vx,xn,Kx,rh,Jx,Gx,Lf,Xx,Yx,Zx,sr,eF,rr,tF,ar,nk,Fn,ir,Df,El,oF,Sf,nF,sk,Je,Ml,sF,Uf,rF,aF,zl,iF,ah,lF,dF,cF,Pl,pF,ql,hF,mF,fF,lr,uF,Ht,jl,gF,Bn,_F,ih,bF,kF,Wf,yF,TF,vF,dr,wF,cr,rk,En,pr,Hf,Cl,$F,Rf,xF,ak,Ge,Nl,FF,Mn,BF,Qf,EF,MF,Vf,zF,PF,qF,Ol,jF,lh,CF,NF,OF,Il,IF,Al,AF,LF,DF,hr,SF,Rt,Ll,UF,zn,WF,dh,HF,RF,Kf,QF,VF,KF,mr,JF,fr,ik,Pn,ur,Jf,Dl,GF,Gf,XF,lk,qn,Sl,YF,bt,Ul,ZF,Ie,e0,Xf,t0,o0,Yf,n0,s0,Zf,r0,a0,eu,i0,l0,tu,d0,c0,ou,p0,h0,nu,m0,f0,u0,Wl,Hl,g0,su,_0,b0,k0,Rl,y0,ru,T0,v0,w0,G,$0,au,x0,F0,iu,B0,E0,lu,M0,z0,du,P0,q0,cu,j0,C0,pu,N0,O0,hu,I0,A0,mu,L0,D0,fu,S0,U0,uu,W0,H0,gu,R0,Q0,_u,V0,K0,bu,J0,G0,ku,X0,Y0,yu,Z0,eB,Tu,tB,oB,vu,nB,sB,wu,rB,aB,$u,iB,lB,xu,dB,cB,pB,gr,dk,jn,_r,Fu,Ql,hB,Bu,mB,ck,Xe,Vl,fB,Kl,uB,Eu,gB,_B,bB,Jl,kB,ch,yB,TB,vB,Gl,wB,Xl,$B,xB,FB,br,BB,kt,Yl,EB,Cn,MB,ph,zB,PB,Mu,qB,jB,CB,kr,NB,yr,OB,Tr,pk,Nn,vr,zu,Zl,IB,Pu,AB,hk,Ye,ed,LB,td,DB,qu,SB,UB,WB,od,HB,hh,RB,QB,VB,nd,KB,sd,JB,GB,XB,wr,YB,Qt,rd,ZB,On,eE,mh,tE,oE,ju,nE,sE,rE,$r,aE,xr,mk,In,Fr,Cu,ad,iE,Nu,lE,fk,Ze,id,dE,Ou,cE,pE,ld,hE,fh,mE,fE,uE,dd,gE,cd,_E,bE,kE,Br,yE,yt,pd,TE,An,vE,uh,wE,$E,Iu,xE,FE,BE,Er,EE,Mr,ME,zr,uk,Ln,Pr,Au,hd,zE,Lu,PE,gk,et,md,qE,Du,jE,CE,fd,NE,gh,OE,IE,AE,ud,LE,gd,DE,SE,UE,qr,WE,Vt,_d,HE,Dn,RE,_h,QE,VE,Su,KE,JE,GE,jr,XE,Cr,_k,Sn,Nr,Uu,bd,YE,Wu,ZE,bk,tt,kd,eM,Hu,tM,oM,yd,nM,bh,sM,rM,aM,Td,iM,vd,lM,dM,cM,Or,pM,Tt,wd,hM,Un,mM,kh,fM,uM,Ru,gM,_M,bM,Ir,kM,Ar,yM,Lr,kk,Wn,Dr,Qu,$d,TM,Vu,vM,yk,ot,xd,wM,Hn,$M,Ku,xM,FM,Ju,BM,EM,MM,Fd,zM,yh,PM,qM,jM,Bd,CM,Ed,NM,OM,IM,Sr,AM,vt,Md,LM,Rn,DM,Th,SM,UM,Gu,WM,HM,RM,Ur,QM,Wr,VM,Hr,Tk,Qn,Rr,Xu,zd,KM,Yu,JM,vk,Ae,Pd,GM,Zu,XM,YM,qd,ZM,vh,ez,tz,oz,jd,nz,Cd,sz,rz,az,eg,iz,lz,fo,tg,Nd,dz,cz,og,Od,pz,hz,ng,Id,mz,fz,sg,Ad,uz,gz,Kt,Ld,_z,Vn,bz,rg,kz,yz,ag,Tz,vz,wz,Qr,$z,Vr,wk,Kn,Kr,ig,Dd,xz,lg,Fz,$k,Le,Sd,Bz,Jn,Ez,dg,Mz,zz,cg,Pz,qz,jz,Ud,Cz,wh,Nz,Oz,Iz,Wd,Az,Hd,Lz,Dz,Sz,pg,Uz,Wz,uo,hg,Rd,Hz,Rz,mg,Qd,Qz,Vz,fg,Vd,Kz,Jz,ug,Kd,Gz,Xz,Jt,Jd,Yz,Gn,Zz,gg,e4,t4,_g,o4,n4,s4,Jr,r4,Gr,xk,Xn,Xr,bg,Gd,a4,kg,i4,Fk,De,Xd,l4,yg,d4,c4,Yd,p4,$h,h4,m4,f4,Zd,u4,ec,g4,_4,b4,Tg,k4,y4,go,vg,tc,T4,v4,wg,oc,w4,$4,$g,nc,x4,F4,xg,sc,B4,E4,Gt,rc,M4,Yn,z4,Fg,P4,q4,Bg,j4,C4,N4,Yr,O4,Zr,Bk,Zn,ea,Eg,ac,I4,Mg,A4,Ek,Se,ic,L4,lc,D4,zg,S4,U4,W4,dc,H4,xh,R4,Q4,V4,cc,K4,pc,J4,G4,X4,Pg,Y4,Z4,_o,qg,hc,eP,tP,jg,mc,oP,nP,Cg,fc,sP,rP,Ng,uc,aP,iP,Xt,gc,lP,es,dP,Og,cP,pP,Ig,hP,mP,fP,ta,uP,oa,Mk,ts,na,Ag,_c,gP,Lg,_P,zk,Ue,bc,bP,kc,kP,Dg,yP,TP,vP,yc,wP,Fh,$P,xP,FP,Tc,BP,vc,EP,MP,zP,Sg,PP,qP,bo,Ug,wc,jP,CP,Wg,$c,NP,OP,Hg,xc,IP,AP,Rg,Fc,LP,DP,Yt,Bc,SP,os,UP,Qg,WP,HP,Vg,RP,QP,VP,sa,KP,ra,Pk,ns,aa,Kg,Ec,JP,Jg,GP,qk,We,Mc,XP,Gg,YP,ZP,zc,eq,Bh,tq,oq,nq,Pc,sq,qc,rq,aq,iq,Xg,lq,dq,ko,Yg,jc,cq,pq,Zg,Cc,hq,mq,e_,Nc,fq,uq,t_,Oc,gq,_q,Zt,Ic,bq,ss,kq,o_,yq,Tq,n_,vq,wq,$q,ia,xq,la,jk,rs,da,s_,Ac,Fq,r_,Bq,Ck,He,Lc,Eq,a_,Mq,zq,Dc,Pq,Eh,qq,jq,Cq,Sc,Nq,Uc,Oq,Iq,Aq,i_,Lq,Dq,yo,l_,Wc,Sq,Uq,d_,Hc,Wq,Hq,c_,Rc,Rq,Qq,p_,Qc,Vq,Kq,eo,Vc,Jq,as,Gq,h_,Xq,Yq,m_,Zq,e8,t8,ca,o8,pa,Nk,is,ha,f_,Kc,n8,u_,s8,Ok,Re,Jc,r8,g_,a8,i8,Gc,l8,Mh,d8,c8,p8,Xc,h8,Yc,m8,f8,u8,__,g8,_8,To,b_,Zc,b8,k8,k_,ep,y8,T8,y_,tp,v8,w8,T_,op,$8,x8,to,np,F8,ls,B8,v_,E8,M8,w_,z8,P8,q8,ma,j8,fa,Ik,ds,ua,$_,sp,C8,x_,N8,Ak,Qe,rp,O8,cs,I8,F_,A8,L8,B_,D8,S8,U8,ap,W8,zh,H8,R8,Q8,ip,V8,lp,K8,J8,G8,E_,X8,Y8,vo,M_,dp,Z8,e7,z_,cp,t7,o7,P_,pp,n7,s7,q_,hp,r7,a7,oo,mp,i7,ps,l7,j_,d7,c7,C_,p7,h7,m7,ga,f7,_a,Lk;return l=new $e({}),re=new $e({}),Me=new $e({}),Ra=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/configuration_bert.py#L72"}}),_s=new ee({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[K5]},$$scope:{ctx:B}}}),Va=new $e({}),Ka=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert.py#L137"}}),Ga=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ya=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ei=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ys=new ee({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[J5]},$$scope:{ctx:B}}}),ti=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert.py#L350"}}),oi=new $e({}),ni=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),ai=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),li=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new ee({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[G5]},$$scope:{ctx:B}}}),di=new $e({}),ci=new C({props:{name:"class transformers.TFBertTokenizer",anchor:"transformers.TFBertTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.vocab_list",description:`<strong>vocab_list</strong> (<code>list</code>) &#x2014;
List containing the vocabulary.`,name:"vocab_list"},{anchor:"transformers.TFBertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TFBertTokenizer.cls_token_id",description:`<strong>cls_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token_id"},{anchor:"transformers.TFBertTokenizer.sep_token_id",description:`<strong>sep_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token_id"},{anchor:"transformers.TFBertTokenizer.pad_token_id",description:`<strong>pad_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token_id"},{anchor:"transformers.TFBertTokenizer.padding",description:`<strong>padding</strong> (<code>str</code>, defaults to <code>&quot;longest&quot;</code>) &#x2014;
The type of padding to use. Can be either <code>&quot;longest&quot;</code>, to pad only up to the longest sample in the batch,
or \`&#x201C;max_length&#x201D;, to pad all inputs to the maximum length supported by the tokenizer.`,name:"padding"},{anchor:"transformers.TFBertTokenizer.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to truncate the sequence to the maximum length.`,name:"truncation"},{anchor:"transformers.TFBertTokenizer.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>512</code>) &#x2014;
The maximum length of the sequence, used for padding (if <code>padding</code> is &#x201C;max_length&#x201D;) and/or truncation (if
<code>truncation</code> is <code>True</code>).`,name:"max_length"},{anchor:"transformers.TFBertTokenizer.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
If set, the sequence will be padded to a multiple of this value.`,name:"pad_to_multiple_of"},{anchor:"transformers.TFBertTokenizer.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to return token_type_ids.`,name:"return_token_type_ids"},{anchor:"transformers.TFBertTokenizer.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to return the attention_mask.`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert_tf.py#L11"}}),hi=new C({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert_tf.py#L113"}}),$s=new ee({props:{anchor:"transformers.TFBertTokenizer.from_pretrained.example",$$slots:{default:[X5]},$$scope:{ctx:B}}}),fi=new C({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/tokenization_bert_tf.py#L83"}}),xs=new ee({props:{anchor:"transformers.TFBertTokenizer.from_tokenizer.example",$$slots:{default:[Y5]},$$scope:{ctx:B}}}),ui=new $e({}),gi=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L767"}}),bi=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L931"}}),yi=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L61"}}),vi=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/flax/struct.py#L109"}}),wi=new $e({}),$i=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L870"}}),zi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new we({props:{$$slots:{default:[Z5]},$$scope:{ctx:B}}}),zs=new ee({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[eN]},$$scope:{ctx:B}}}),Pi=new $e({}),qi=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1053"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1069",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new we({props:{$$slots:{default:[tN]},$$scope:{ctx:B}}}),js=new ee({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[oN]},$$scope:{ctx:B}}}),Ii=new $e({}),Ai=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1157"}}),Wi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new we({props:{$$slots:{default:[nN]},$$scope:{ctx:B}}}),Os=new ee({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[sN]},$$scope:{ctx:B}}}),Hi=new $e({}),Ri=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1292"}}),Gi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new we({props:{$$slots:{default:[rN]},$$scope:{ctx:B}}}),Ls=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[aN]},$$scope:{ctx:B}}}),Ds=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[iN]},$$scope:{ctx:B}}}),Xi=new $e({}),Yi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1405"}}),nl=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1415",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new we({props:{$$slots:{default:[lN]},$$scope:{ctx:B}}}),Ws=new ee({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[dN]},$$scope:{ctx:B}}}),sl=new $e({}),rl=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1510"}}),dl=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1526",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new we({props:{$$slots:{default:[cN]},$$scope:{ctx:B}}}),Qs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[pN]},$$scope:{ctx:B}}}),Vs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[hN]},$$scope:{ctx:B}}}),Ks=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[mN]},$$scope:{ctx:B}}}),Js=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[fN]},$$scope:{ctx:B}}}),cl=new $e({}),pl=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1614"}}),ul=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new we({props:{$$slots:{default:[uN]},$$scope:{ctx:B}}}),Ys=new ee({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[gN]},$$scope:{ctx:B}}}),gl=new $e({}),_l=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1709"}}),Tl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new we({props:{$$slots:{default:[_N]},$$scope:{ctx:B}}}),tr=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[bN]},$$scope:{ctx:B}}}),or=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[kN]},$$scope:{ctx:B}}}),vl=new $e({}),wl=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1796"}}),Bl=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_bert.py#L1810",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sr=new we({props:{$$slots:{default:[yN]},$$scope:{ctx:B}}}),rr=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[TN]},$$scope:{ctx:B}}}),ar=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[vN]},$$scope:{ctx:B}}}),El=new $e({}),Ml=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1058"}}),lr=new we({props:{$$slots:{default:[wN]},$$scope:{ctx:B}}}),jl=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dr=new we({props:{$$slots:{default:[$N]},$$scope:{ctx:B}}}),cr=new ee({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[xN]},$$scope:{ctx:B}}}),Cl=new $e({}),Nl=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1155"}}),hr=new we({props:{$$slots:{default:[FN]},$$scope:{ctx:B}}}),Ll=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mr=new we({props:{$$slots:{default:[BN]},$$scope:{ctx:B}}}),fr=new ee({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[EN]},$$scope:{ctx:B}}}),Dl=new $e({}),Sl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1364"}}),Ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1401",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new ee({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[MN]},$$scope:{ctx:B}}}),Ql=new $e({}),Vl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1272"}}),br=new we({props:{$$slots:{default:[zN]},$$scope:{ctx:B}}}),Yl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1300",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kr=new we({props:{$$slots:{default:[PN]},$$scope:{ctx:B}}}),yr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[qN]},$$scope:{ctx:B}}}),Tr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[jN]},$$scope:{ctx:B}}}),Zl=new $e({}),ed=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1514"}}),wr=new we({props:{$$slots:{default:[CN]},$$scope:{ctx:B}}}),rd=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1524",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$r=new we({props:{$$slots:{default:[NN]},$$scope:{ctx:B}}}),xr=new ee({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[ON]},$$scope:{ctx:B}}}),ad=new $e({}),id=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1605"}}),Br=new we({props:{$$slots:{default:[IN]},$$scope:{ctx:B}}}),pd=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1626",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Er=new we({props:{$$slots:{default:[AN]},$$scope:{ctx:B}}}),Mr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[LN]},$$scope:{ctx:B}}}),zr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[DN]},$$scope:{ctx:B}}}),hd=new $e({}),md=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1698"}}),qr=new we({props:{$$slots:{default:[SN]},$$scope:{ctx:B}}}),_d=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1722",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jr=new we({props:{$$slots:{default:[UN]},$$scope:{ctx:B}}}),Cr=new ee({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[WN]},$$scope:{ctx:B}}}),bd=new $e({}),kd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1828"}}),Or=new we({props:{$$slots:{default:[HN]},$$scope:{ctx:B}}}),wd=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ir=new we({props:{$$slots:{default:[RN]},$$scope:{ctx:B}}}),Ar=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[QN]},$$scope:{ctx:B}}}),Lr=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[VN]},$$scope:{ctx:B}}}),$d=new $e({}),xd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1925"}}),Sr=new we({props:{$$slots:{default:[KN]},$$scope:{ctx:B}}}),Md=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_tf_bert.py#L1947",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ur=new we({props:{$$slots:{default:[JN]},$$scope:{ctx:B}}}),Wr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[GN]},$$scope:{ctx:B}}}),Hr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[XN]},$$scope:{ctx:B}}}),zd=new $e({}),Pd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L994"}}),Ld=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new we({props:{$$slots:{default:[YN]},$$scope:{ctx:B}}}),Vr=new ee({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[ZN]},$$scope:{ctx:B}}}),Dd=new $e({}),Sd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1067"}}),Jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jr=new we({props:{$$slots:{default:[eO]},$$scope:{ctx:B}}}),Gr=new ee({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[tO]},$$scope:{ctx:B}}}),Gd=new $e({}),Xd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1605"}}),rc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yr=new we({props:{$$slots:{default:[oO]},$$scope:{ctx:B}}}),Zr=new ee({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[nO]},$$scope:{ctx:B}}}),ac=new $e({}),ic=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1152"}}),gc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ta=new we({props:{$$slots:{default:[sO]},$$scope:{ctx:B}}}),oa=new ee({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[rO]},$$scope:{ctx:B}}}),_c=new $e({}),bc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1213"}}),Bc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sa=new we({props:{$$slots:{default:[aO]},$$scope:{ctx:B}}}),ra=new ee({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[iO]},$$scope:{ctx:B}}}),Ec=new $e({}),Mc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1311"}}),Ic=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ia=new we({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),la=new ee({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),Ac=new $e({}),Lc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1387"}}),Vc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ca=new we({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),pa=new ee({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),Kc=new $e({}),Jc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1459"}}),np=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ma=new we({props:{$$slots:{default:[hO]},$$scope:{ctx:B}}}),fa=new ee({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[mO]},$$scope:{ctx:B}}}),sp=new $e({}),rp=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L1526"}}),mp=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17918/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17918/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17918/src/transformers/models/bert/modeling_flax_bert.py#L826",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_17918/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ga=new we({props:{$$slots:{default:[fO]},$$scope:{ctx:B}}}),_a=new ee({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[uO]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),m=r("h1"),h=r("a"),g=r("span"),T(l.$$.fragment),f=c(),E=r("span"),be=n("BERT"),X=c(),z=r("h2"),ne=r("a"),L=r("span"),T(re.$$.fragment),ke=c(),D=r("span"),ye=n("Overview"),me=c(),J=r("p"),O=n("The BERT model was proposed in "),ae=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),fe=c(),le=r("p"),S=r("em"),Te=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),Q=n("Tips:"),_e=c(),se=r("ul"),N=r("li"),ve=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),V=c(),pe=r("li"),y=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),M=c(),K=r("p"),ze=n("This model was contributed by "),Be=r("a"),I=n("thomwolf"),Pe=n(". The original code can be found "),Ee=r("a"),qe=n("here"),A=n("."),W=c(),xe=r("h2"),Fe=r("a"),U=r("span"),T(Me.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),Eb=c(),Nt=r("div"),T(Ra.$$.fragment),jy=c(),ho=r("p"),Cy=n("This is the configuration class to store the configuration of a "),Ep=r("a"),Ny=n("BertModel"),Oy=n(" or a "),Mp=r("a"),Iy=n("TFBertModel"),Ay=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Qa=r("a"),Ly=n("bert-base-uncased"),Dy=n(" architecture."),Sy=c(),Ko=r("p"),Uy=n("Configuration objects inherit from "),zp=r("a"),Wy=n("PretrainedConfig"),Hy=n(` and can be used to control the model outputs. Read the
documentation from `),Pp=r("a"),Ry=n("PretrainedConfig"),Qy=n(" for more information."),Vy=c(),T(_s.$$.fragment),Mb=c(),Jo=r("h2"),bs=r("a"),km=r("span"),T(Va.$$.fragment),Ky=c(),ym=r("span"),Jy=n("BertTokenizer"),zb=c(),Ne=r("div"),T(Ka.$$.fragment),Gy=c(),Tm=r("p"),Xy=n("Construct a BERT tokenizer. Based on WordPiece."),Yy=c(),Ja=r("p"),Zy=n("This tokenizer inherits from "),qp=r("a"),eT=n("PreTrainedTokenizer"),tT=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),oT=c(),Bo=r("div"),T(Ga.$$.fragment),nT=c(),vm=r("p"),sT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),rT=c(),Xa=r("ul"),jp=r("li"),aT=n("single sequence: "),wm=r("code"),iT=n("[CLS] X [SEP]"),lT=c(),Cp=r("li"),dT=n("pair of sequences: "),$m=r("code"),cT=n("[CLS] A [SEP] B [SEP]"),pT=c(),ks=r("div"),T(Ya.$$.fragment),hT=c(),Za=r("p"),mT=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xm=r("code"),fT=n("prepare_for_model"),uT=n(" method."),gT=c(),It=r("div"),T(ei.$$.fragment),_T=c(),Fm=r("p"),bT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),kT=c(),T(ys.$$.fragment),yT=c(),Go=r("p"),TT=n("If "),Bm=r("code"),vT=n("token_ids_1"),wT=n(" is "),Em=r("code"),$T=n("None"),xT=n(", this method only returns the first portion of the mask (0s)."),FT=c(),Np=r("div"),T(ti.$$.fragment),Pb=c(),Xo=r("h2"),Ts=r("a"),Mm=r("span"),T(oi.$$.fragment),BT=c(),zm=r("span"),ET=n("BertTokenizerFast"),qb=c(),rt=r("div"),T(ni.$$.fragment),MT=c(),si=r("p"),zT=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=r("em"),PT=n("tokenizers"),qT=n(" library). Based on WordPiece."),jT=c(),ri=r("p"),CT=n("This tokenizer inherits from "),Op=r("a"),NT=n("PreTrainedTokenizerFast"),OT=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),IT=c(),Eo=r("div"),T(ai.$$.fragment),AT=c(),qm=r("p"),LT=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),DT=c(),ii=r("ul"),Ip=r("li"),ST=n("single sequence: "),jm=r("code"),UT=n("[CLS] X [SEP]"),WT=c(),Ap=r("li"),HT=n("pair of sequences: "),Cm=r("code"),RT=n("[CLS] A [SEP] B [SEP]"),QT=c(),At=r("div"),T(li.$$.fragment),VT=c(),Nm=r("p"),KT=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),JT=c(),T(vs.$$.fragment),GT=c(),Yo=r("p"),XT=n("If "),Om=r("code"),YT=n("token_ids_1"),ZT=n(" is "),Im=r("code"),ev=n("None"),tv=n(", this method only returns the first portion of the mask (0s)."),jb=c(),Zo=r("h2"),ws=r("a"),Am=r("span"),T(di.$$.fragment),ov=c(),Lm=r("span"),nv=n("TFBertTokenizer"),Cb=c(),at=r("div"),T(ci.$$.fragment),sv=c(),en=r("p"),rv=n(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=r("code"),av=n("from_pretrained()"),iv=n(" method. It can also be initialized with the "),Sm=r("code"),lv=n("from_tokenizer()"),dv=n(` method, which imports settings
from an existing standard tokenizer object.`),cv=c(),pi=r("p"),pv=n(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=r("code"),hv=n("tf.string"),mv=n(" inputs to outputs."),fv=c(),Mo=r("div"),T(hi.$$.fragment),uv=c(),mi=r("p"),gv=n("Instantiate a "),Wm=r("code"),_v=n("TFBertTokenizer"),bv=n(" from a pre-trained tokenizer."),kv=c(),T($s.$$.fragment),yv=c(),zo=r("div"),T(fi.$$.fragment),Tv=c(),tn=r("p"),vv=n("Initialize a "),Hm=r("code"),wv=n("TFBertTokenizer"),$v=n(" from an existing "),Rm=r("code"),xv=n("Tokenizer"),Fv=n("."),Bv=c(),T(xs.$$.fragment),Nb=c(),on=r("h2"),Fs=r("a"),Qm=r("span"),T(ui.$$.fragment),Ev=c(),Vm=r("span"),Mv=n("Bert specific outputs"),Ob=c(),nn=r("div"),T(gi.$$.fragment),zv=c(),_i=r("p"),Pv=n("Output type of "),Lp=r("a"),qv=n("BertForPreTraining"),jv=n("."),Ib=c(),sn=r("div"),T(bi.$$.fragment),Cv=c(),ki=r("p"),Nv=n("Output type of "),Dp=r("a"),Ov=n("TFBertForPreTraining"),Iv=n("."),Ab=c(),mo=r("div"),T(yi.$$.fragment),Av=c(),Ti=r("p"),Lv=n("Output type of "),Sp=r("a"),Dv=n("BertForPreTraining"),Sv=n("."),Uv=c(),Bs=r("div"),T(vi.$$.fragment),Wv=c(),Km=r("p"),Hv=n("\u201CReturns a new object replacing the specified fields with new values."),Lb=c(),rn=r("h2"),Es=r("a"),Jm=r("span"),T(wi.$$.fragment),Rv=c(),Gm=r("span"),Qv=n("BertModel"),Db=c(),Oe=r("div"),T($i.$$.fragment),Vv=c(),Xm=r("p"),Kv=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Jv=c(),xi=r("p"),Gv=n("This model inherits from "),Up=r("a"),Xv=n("PreTrainedModel"),Yv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zv=c(),Fi=r("p"),ew=n("This model is also a PyTorch "),Bi=r("a"),tw=n("torch.nn.Module"),ow=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nw=c(),Ei=r("p"),sw=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Mi=r("a"),rw=n(`Attention is
all you need`),aw=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),iw=c(),Ke=r("p"),lw=n("To behave as an decoder the model needs to be initialized with the "),Ym=r("code"),dw=n("is_decoder"),cw=n(` argument of the configuration set
to `),Zm=r("code"),pw=n("True"),hw=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=r("code"),mw=n("is_decoder"),fw=n(` argument and
`),tf=r("code"),uw=n("add_cross_attention"),gw=n(" set to "),of=r("code"),_w=n("True"),bw=n("; an "),nf=r("code"),kw=n("encoder_hidden_states"),yw=n(" is then expected as an input to the forward pass."),Tw=c(),Lt=r("div"),T(zi.$$.fragment),vw=c(),an=r("p"),ww=n("The "),Wp=r("a"),$w=n("BertModel"),xw=n(" forward method, overrides the "),sf=r("code"),Fw=n("__call__"),Bw=n(" special method."),Ew=c(),T(Ms.$$.fragment),Mw=c(),T(zs.$$.fragment),Sb=c(),ln=r("h2"),Ps=r("a"),rf=r("span"),T(Pi.$$.fragment),zw=c(),af=r("span"),Pw=n("BertForPreTraining"),Ub=c(),it=r("div"),T(qi.$$.fragment),qw=c(),dn=r("p"),jw=n("Bert Model with two heads on top as done during the pretraining: a "),lf=r("code"),Cw=n("masked language modeling"),Nw=n(" head and a "),df=r("code"),Ow=n("next sentence prediction (classification)"),Iw=n(" head."),Aw=c(),ji=r("p"),Lw=n("This model inherits from "),Hp=r("a"),Dw=n("PreTrainedModel"),Sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uw=c(),Ci=r("p"),Ww=n("This model is also a PyTorch "),Ni=r("a"),Hw=n("torch.nn.Module"),Rw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qw=c(),Dt=r("div"),T(Oi.$$.fragment),Vw=c(),cn=r("p"),Kw=n("The "),Rp=r("a"),Jw=n("BertForPreTraining"),Gw=n(" forward method, overrides the "),cf=r("code"),Xw=n("__call__"),Yw=n(" special method."),Zw=c(),T(qs.$$.fragment),e$=c(),T(js.$$.fragment),Wb=c(),pn=r("h2"),Cs=r("a"),pf=r("span"),T(Ii.$$.fragment),t$=c(),hf=r("span"),o$=n("BertLMHeadModel"),Hb=c(),lt=r("div"),T(Ai.$$.fragment),n$=c(),Li=r("p"),s$=n("Bert Model with a "),mf=r("code"),r$=n("language modeling"),a$=n(" head on top for CLM fine-tuning."),i$=c(),Di=r("p"),l$=n("This model inherits from "),Qp=r("a"),d$=n("PreTrainedModel"),c$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p$=c(),Si=r("p"),h$=n("This model is also a PyTorch "),Ui=r("a"),m$=n("torch.nn.Module"),f$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u$=c(),St=r("div"),T(Wi.$$.fragment),g$=c(),hn=r("p"),_$=n("The "),Vp=r("a"),b$=n("BertLMHeadModel"),k$=n(" forward method, overrides the "),ff=r("code"),y$=n("__call__"),T$=n(" special method."),v$=c(),T(Ns.$$.fragment),w$=c(),T(Os.$$.fragment),Rb=c(),mn=r("h2"),Is=r("a"),uf=r("span"),T(Hi.$$.fragment),$$=c(),gf=r("span"),x$=n("BertForMaskedLM"),Qb=c(),dt=r("div"),T(Ri.$$.fragment),F$=c(),Qi=r("p"),B$=n("Bert Model with a "),_f=r("code"),E$=n("language modeling"),M$=n(" head on top."),z$=c(),Vi=r("p"),P$=n("This model inherits from "),Kp=r("a"),q$=n("PreTrainedModel"),j$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C$=c(),Ki=r("p"),N$=n("This model is also a PyTorch "),Ji=r("a"),O$=n("torch.nn.Module"),I$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A$=c(),ut=r("div"),T(Gi.$$.fragment),L$=c(),fn=r("p"),D$=n("The "),Jp=r("a"),S$=n("BertForMaskedLM"),U$=n(" forward method, overrides the "),bf=r("code"),W$=n("__call__"),H$=n(" special method."),R$=c(),T(As.$$.fragment),Q$=c(),T(Ls.$$.fragment),V$=c(),T(Ds.$$.fragment),Vb=c(),un=r("h2"),Ss=r("a"),kf=r("span"),T(Xi.$$.fragment),K$=c(),yf=r("span"),J$=n("BertForNextSentencePrediction"),Kb=c(),ct=r("div"),T(Yi.$$.fragment),G$=c(),Zi=r("p"),X$=n("Bert Model with a "),Tf=r("code"),Y$=n("next sentence prediction (classification)"),Z$=n(" head on top."),e2=c(),el=r("p"),t2=n("This model inherits from "),Gp=r("a"),o2=n("PreTrainedModel"),n2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s2=c(),tl=r("p"),r2=n("This model is also a PyTorch "),ol=r("a"),a2=n("torch.nn.Module"),i2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l2=c(),Ut=r("div"),T(nl.$$.fragment),d2=c(),gn=r("p"),c2=n("The "),Xp=r("a"),p2=n("BertForNextSentencePrediction"),h2=n(" forward method, overrides the "),vf=r("code"),m2=n("__call__"),f2=n(" special method."),u2=c(),T(Us.$$.fragment),g2=c(),T(Ws.$$.fragment),Jb=c(),_n=r("h2"),Hs=r("a"),wf=r("span"),T(sl.$$.fragment),_2=c(),$f=r("span"),b2=n("BertForSequenceClassification"),Gb=c(),pt=r("div"),T(rl.$$.fragment),k2=c(),xf=r("p"),y2=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),T2=c(),al=r("p"),v2=n("This model inherits from "),Yp=r("a"),w2=n("PreTrainedModel"),$2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x2=c(),il=r("p"),F2=n("This model is also a PyTorch "),ll=r("a"),B2=n("torch.nn.Module"),E2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),M2=c(),Ve=r("div"),T(dl.$$.fragment),z2=c(),bn=r("p"),P2=n("The "),Zp=r("a"),q2=n("BertForSequenceClassification"),j2=n(" forward method, overrides the "),Ff=r("code"),C2=n("__call__"),N2=n(" special method."),O2=c(),T(Rs.$$.fragment),I2=c(),T(Qs.$$.fragment),A2=c(),T(Vs.$$.fragment),L2=c(),T(Ks.$$.fragment),D2=c(),T(Js.$$.fragment),Xb=c(),kn=r("h2"),Gs=r("a"),Bf=r("span"),T(cl.$$.fragment),S2=c(),Ef=r("span"),U2=n("BertForMultipleChoice"),Yb=c(),ht=r("div"),T(pl.$$.fragment),W2=c(),Mf=r("p"),H2=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),R2=c(),hl=r("p"),Q2=n("This model inherits from "),eh=r("a"),V2=n("PreTrainedModel"),K2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J2=c(),ml=r("p"),G2=n("This model is also a PyTorch "),fl=r("a"),X2=n("torch.nn.Module"),Y2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z2=c(),Wt=r("div"),T(ul.$$.fragment),ex=c(),yn=r("p"),tx=n("The "),th=r("a"),ox=n("BertForMultipleChoice"),nx=n(" forward method, overrides the "),zf=r("code"),sx=n("__call__"),rx=n(" special method."),ax=c(),T(Xs.$$.fragment),ix=c(),T(Ys.$$.fragment),Zb=c(),Tn=r("h2"),Zs=r("a"),Pf=r("span"),T(gl.$$.fragment),lx=c(),qf=r("span"),dx=n("BertForTokenClassification"),ek=c(),mt=r("div"),T(_l.$$.fragment),cx=c(),jf=r("p"),px=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hx=c(),bl=r("p"),mx=n("This model inherits from "),oh=r("a"),fx=n("PreTrainedModel"),ux=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gx=c(),kl=r("p"),_x=n("This model is also a PyTorch "),yl=r("a"),bx=n("torch.nn.Module"),kx=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yx=c(),gt=r("div"),T(Tl.$$.fragment),Tx=c(),vn=r("p"),vx=n("The "),nh=r("a"),wx=n("BertForTokenClassification"),$x=n(" forward method, overrides the "),Cf=r("code"),xx=n("__call__"),Fx=n(" special method."),Bx=c(),T(er.$$.fragment),Ex=c(),T(tr.$$.fragment),Mx=c(),T(or.$$.fragment),tk=c(),wn=r("h2"),nr=r("a"),Nf=r("span"),T(vl.$$.fragment),zx=c(),Of=r("span"),Px=n("BertForQuestionAnswering"),ok=c(),ft=r("div"),T(wl.$$.fragment),qx=c(),$n=r("p"),jx=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=r("code"),Cx=n("span start logits"),Nx=n(" and "),Af=r("code"),Ox=n("span end logits"),Ix=n(")."),Ax=c(),$l=r("p"),Lx=n("This model inherits from "),sh=r("a"),Dx=n("PreTrainedModel"),Sx=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ux=c(),xl=r("p"),Wx=n("This model is also a PyTorch "),Fl=r("a"),Hx=n("torch.nn.Module"),Rx=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qx=c(),_t=r("div"),T(Bl.$$.fragment),Vx=c(),xn=r("p"),Kx=n("The "),rh=r("a"),Jx=n("BertForQuestionAnswering"),Gx=n(" forward method, overrides the "),Lf=r("code"),Xx=n("__call__"),Yx=n(" special method."),Zx=c(),T(sr.$$.fragment),eF=c(),T(rr.$$.fragment),tF=c(),T(ar.$$.fragment),nk=c(),Fn=r("h2"),ir=r("a"),Df=r("span"),T(El.$$.fragment),oF=c(),Sf=r("span"),nF=n("TFBertModel"),sk=c(),Je=r("div"),T(Ml.$$.fragment),sF=c(),Uf=r("p"),rF=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aF=c(),zl=r("p"),iF=n("This model inherits from "),ah=r("a"),lF=n("TFPreTrainedModel"),dF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cF=c(),Pl=r("p"),pF=n("This model is also a "),ql=r("a"),hF=n("tf.keras.Model"),mF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fF=c(),T(lr.$$.fragment),uF=c(),Ht=r("div"),T(jl.$$.fragment),gF=c(),Bn=r("p"),_F=n("The "),ih=r("a"),bF=n("TFBertModel"),kF=n(" forward method, overrides the "),Wf=r("code"),yF=n("__call__"),TF=n(" special method."),vF=c(),T(dr.$$.fragment),wF=c(),T(cr.$$.fragment),rk=c(),En=r("h2"),pr=r("a"),Hf=r("span"),T(Cl.$$.fragment),$F=c(),Rf=r("span"),xF=n("TFBertForPreTraining"),ak=c(),Ge=r("div"),T(Nl.$$.fragment),FF=c(),Mn=r("p"),BF=n(`Bert Model with two heads on top as done during the pretraining:
a `),Qf=r("code"),EF=n("masked language modeling"),MF=n(" head and a "),Vf=r("code"),zF=n("next sentence prediction (classification)"),PF=n(" head."),qF=c(),Ol=r("p"),jF=n("This model inherits from "),lh=r("a"),CF=n("TFPreTrainedModel"),NF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OF=c(),Il=r("p"),IF=n("This model is also a "),Al=r("a"),AF=n("tf.keras.Model"),LF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DF=c(),T(hr.$$.fragment),SF=c(),Rt=r("div"),T(Ll.$$.fragment),UF=c(),zn=r("p"),WF=n("The "),dh=r("a"),HF=n("TFBertForPreTraining"),RF=n(" forward method, overrides the "),Kf=r("code"),QF=n("__call__"),VF=n(" special method."),KF=c(),T(mr.$$.fragment),JF=c(),T(fr.$$.fragment),ik=c(),Pn=r("h2"),ur=r("a"),Jf=r("span"),T(Dl.$$.fragment),GF=c(),Gf=r("span"),XF=n("TFBertModelLMHeadModel"),lk=c(),qn=r("div"),T(Sl.$$.fragment),YF=c(),bt=r("div"),T(Ul.$$.fragment),ZF=c(),Ie=r("p"),e0=n("encoder_hidden_states  ("),Xf=r("code"),t0=n("tf.Tensor"),o0=n(" of shape "),Yf=r("code"),n0=n("(batch_size, sequence_length, hidden_size)"),s0=n(", "),Zf=r("em"),r0=n("optional"),a0=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=r("code"),i0=n("tf.Tensor"),l0=n(" of shape "),tu=r("code"),d0=n("(batch_size, sequence_length)"),c0=n(", "),ou=r("em"),p0=n("optional"),h0=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=r("code"),m0=n("[0, 1]"),f0=n(":"),u0=c(),Wl=r("ul"),Hl=r("li"),g0=n("1 for tokens that are "),su=r("strong"),_0=n("not masked"),b0=n(","),k0=c(),Rl=r("li"),y0=n("0 for tokens that are "),ru=r("strong"),T0=n("masked"),v0=n("."),w0=c(),G=r("p"),$0=n("past_key_values ("),au=r("code"),x0=n("Tuple[Tuple[tf.Tensor]]"),F0=n(" of length "),iu=r("code"),B0=n("config.n_layers"),E0=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=r("code"),M0=n("past_key_values"),z0=n(" are used, the user can optionally input only the last "),du=r("code"),P0=n("decoder_input_ids"),q0=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=r("code"),j0=n("(batch_size, 1)"),C0=n(` instead of all
`),pu=r("code"),N0=n("decoder_input_ids"),O0=n(" of shape "),hu=r("code"),I0=n("(batch_size, sequence_length)"),A0=n(`.
use_cache (`),mu=r("code"),L0=n("bool"),D0=n(", "),fu=r("em"),S0=n("optional"),U0=n(", defaults to "),uu=r("code"),W0=n("True"),H0=n(`):
If set to `),gu=r("code"),R0=n("True"),Q0=n(", "),_u=r("code"),V0=n("past_key_values"),K0=n(` key value states are returned and can be used to speed up decoding (see
`),bu=r("code"),J0=n("past_key_values"),G0=n("). Set to "),ku=r("code"),X0=n("False"),Y0=n(" during training, "),yu=r("code"),Z0=n("True"),eB=n(` during generation
labels (`),Tu=r("code"),tB=n("tf.Tensor"),oB=n(" or "),vu=r("code"),nB=n("np.ndarray"),sB=n(" of shape "),wu=r("code"),rB=n("(batch_size, sequence_length)"),aB=n(", "),$u=r("em"),iB=n("optional"),lB=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),xu=r("code"),dB=n("[0, ..., config.vocab_size - 1]"),cB=n("."),pB=c(),T(gr.$$.fragment),dk=c(),jn=r("h2"),_r=r("a"),Fu=r("span"),T(Ql.$$.fragment),hB=c(),Bu=r("span"),mB=n("TFBertForMaskedLM"),ck=c(),Xe=r("div"),T(Vl.$$.fragment),fB=c(),Kl=r("p"),uB=n("Bert Model with a "),Eu=r("code"),gB=n("language modeling"),_B=n(" head on top."),bB=c(),Jl=r("p"),kB=n("This model inherits from "),ch=r("a"),yB=n("TFPreTrainedModel"),TB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vB=c(),Gl=r("p"),wB=n("This model is also a "),Xl=r("a"),$B=n("tf.keras.Model"),xB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),FB=c(),T(br.$$.fragment),BB=c(),kt=r("div"),T(Yl.$$.fragment),EB=c(),Cn=r("p"),MB=n("The "),ph=r("a"),zB=n("TFBertForMaskedLM"),PB=n(" forward method, overrides the "),Mu=r("code"),qB=n("__call__"),jB=n(" special method."),CB=c(),T(kr.$$.fragment),NB=c(),T(yr.$$.fragment),OB=c(),T(Tr.$$.fragment),pk=c(),Nn=r("h2"),vr=r("a"),zu=r("span"),T(Zl.$$.fragment),IB=c(),Pu=r("span"),AB=n("TFBertForNextSentencePrediction"),hk=c(),Ye=r("div"),T(ed.$$.fragment),LB=c(),td=r("p"),DB=n("Bert Model with a "),qu=r("code"),SB=n("next sentence prediction (classification)"),UB=n(" head on top."),WB=c(),od=r("p"),HB=n("This model inherits from "),hh=r("a"),RB=n("TFPreTrainedModel"),QB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VB=c(),nd=r("p"),KB=n("This model is also a "),sd=r("a"),JB=n("tf.keras.Model"),GB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XB=c(),T(wr.$$.fragment),YB=c(),Qt=r("div"),T(rd.$$.fragment),ZB=c(),On=r("p"),eE=n("The "),mh=r("a"),tE=n("TFBertForNextSentencePrediction"),oE=n(" forward method, overrides the "),ju=r("code"),nE=n("__call__"),sE=n(" special method."),rE=c(),T($r.$$.fragment),aE=c(),T(xr.$$.fragment),mk=c(),In=r("h2"),Fr=r("a"),Cu=r("span"),T(ad.$$.fragment),iE=c(),Nu=r("span"),lE=n("TFBertForSequenceClassification"),fk=c(),Ze=r("div"),T(id.$$.fragment),dE=c(),Ou=r("p"),cE=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pE=c(),ld=r("p"),hE=n("This model inherits from "),fh=r("a"),mE=n("TFPreTrainedModel"),fE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uE=c(),dd=r("p"),gE=n("This model is also a "),cd=r("a"),_E=n("tf.keras.Model"),bE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kE=c(),T(Br.$$.fragment),yE=c(),yt=r("div"),T(pd.$$.fragment),TE=c(),An=r("p"),vE=n("The "),uh=r("a"),wE=n("TFBertForSequenceClassification"),$E=n(" forward method, overrides the "),Iu=r("code"),xE=n("__call__"),FE=n(" special method."),BE=c(),T(Er.$$.fragment),EE=c(),T(Mr.$$.fragment),ME=c(),T(zr.$$.fragment),uk=c(),Ln=r("h2"),Pr=r("a"),Au=r("span"),T(hd.$$.fragment),zE=c(),Lu=r("span"),PE=n("TFBertForMultipleChoice"),gk=c(),et=r("div"),T(md.$$.fragment),qE=c(),Du=r("p"),jE=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CE=c(),fd=r("p"),NE=n("This model inherits from "),gh=r("a"),OE=n("TFPreTrainedModel"),IE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AE=c(),ud=r("p"),LE=n("This model is also a "),gd=r("a"),DE=n("tf.keras.Model"),SE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UE=c(),T(qr.$$.fragment),WE=c(),Vt=r("div"),T(_d.$$.fragment),HE=c(),Dn=r("p"),RE=n("The "),_h=r("a"),QE=n("TFBertForMultipleChoice"),VE=n(" forward method, overrides the "),Su=r("code"),KE=n("__call__"),JE=n(" special method."),GE=c(),T(jr.$$.fragment),XE=c(),T(Cr.$$.fragment),_k=c(),Sn=r("h2"),Nr=r("a"),Uu=r("span"),T(bd.$$.fragment),YE=c(),Wu=r("span"),ZE=n("TFBertForTokenClassification"),bk=c(),tt=r("div"),T(kd.$$.fragment),eM=c(),Hu=r("p"),tM=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oM=c(),yd=r("p"),nM=n("This model inherits from "),bh=r("a"),sM=n("TFPreTrainedModel"),rM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aM=c(),Td=r("p"),iM=n("This model is also a "),vd=r("a"),lM=n("tf.keras.Model"),dM=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cM=c(),T(Or.$$.fragment),pM=c(),Tt=r("div"),T(wd.$$.fragment),hM=c(),Un=r("p"),mM=n("The "),kh=r("a"),fM=n("TFBertForTokenClassification"),uM=n(" forward method, overrides the "),Ru=r("code"),gM=n("__call__"),_M=n(" special method."),bM=c(),T(Ir.$$.fragment),kM=c(),T(Ar.$$.fragment),yM=c(),T(Lr.$$.fragment),kk=c(),Wn=r("h2"),Dr=r("a"),Qu=r("span"),T($d.$$.fragment),TM=c(),Vu=r("span"),vM=n("TFBertForQuestionAnswering"),yk=c(),ot=r("div"),T(xd.$$.fragment),wM=c(),Hn=r("p"),$M=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=r("code"),xM=n("span start logits"),FM=n(" and "),Ju=r("code"),BM=n("span end logits"),EM=n(")."),MM=c(),Fd=r("p"),zM=n("This model inherits from "),yh=r("a"),PM=n("TFPreTrainedModel"),qM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jM=c(),Bd=r("p"),CM=n("This model is also a "),Ed=r("a"),NM=n("tf.keras.Model"),OM=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),IM=c(),T(Sr.$$.fragment),AM=c(),vt=r("div"),T(Md.$$.fragment),LM=c(),Rn=r("p"),DM=n("The "),Th=r("a"),SM=n("TFBertForQuestionAnswering"),UM=n(" forward method, overrides the "),Gu=r("code"),WM=n("__call__"),HM=n(" special method."),RM=c(),T(Ur.$$.fragment),QM=c(),T(Wr.$$.fragment),VM=c(),T(Hr.$$.fragment),Tk=c(),Qn=r("h2"),Rr=r("a"),Xu=r("span"),T(zd.$$.fragment),KM=c(),Yu=r("span"),JM=n("FlaxBertModel"),vk=c(),Ae=r("div"),T(Pd.$$.fragment),GM=c(),Zu=r("p"),XM=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),YM=c(),qd=r("p"),ZM=n("This model inherits from "),vh=r("a"),ez=n("FlaxPreTrainedModel"),tz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oz=c(),jd=r("p"),nz=n("This model is also a Flax Linen "),Cd=r("a"),sz=n("flax.linen.Module"),rz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),az=c(),eg=r("p"),iz=n("Finally, this model supports inherent JAX features such as:"),lz=c(),fo=r("ul"),tg=r("li"),Nd=r("a"),dz=n("Just-In-Time (JIT) compilation"),cz=c(),og=r("li"),Od=r("a"),pz=n("Automatic Differentiation"),hz=c(),ng=r("li"),Id=r("a"),mz=n("Vectorization"),fz=c(),sg=r("li"),Ad=r("a"),uz=n("Parallelization"),gz=c(),Kt=r("div"),T(Ld.$$.fragment),_z=c(),Vn=r("p"),bz=n("The "),rg=r("code"),kz=n("FlaxBertPreTrainedModel"),yz=n(" forward method, overrides the "),ag=r("code"),Tz=n("__call__"),vz=n(" special method."),wz=c(),T(Qr.$$.fragment),$z=c(),T(Vr.$$.fragment),wk=c(),Kn=r("h2"),Kr=r("a"),ig=r("span"),T(Dd.$$.fragment),xz=c(),lg=r("span"),Fz=n("FlaxBertForPreTraining"),$k=c(),Le=r("div"),T(Sd.$$.fragment),Bz=c(),Jn=r("p"),Ez=n("Bert Model with two heads on top as done during the pretraining: a "),dg=r("code"),Mz=n("masked language modeling"),zz=n(" head and a "),cg=r("code"),Pz=n("next sentence prediction (classification)"),qz=n(" head."),jz=c(),Ud=r("p"),Cz=n("This model inherits from "),wh=r("a"),Nz=n("FlaxPreTrainedModel"),Oz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Iz=c(),Wd=r("p"),Az=n("This model is also a Flax Linen "),Hd=r("a"),Lz=n("flax.linen.Module"),Dz=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sz=c(),pg=r("p"),Uz=n("Finally, this model supports inherent JAX features such as:"),Wz=c(),uo=r("ul"),hg=r("li"),Rd=r("a"),Hz=n("Just-In-Time (JIT) compilation"),Rz=c(),mg=r("li"),Qd=r("a"),Qz=n("Automatic Differentiation"),Vz=c(),fg=r("li"),Vd=r("a"),Kz=n("Vectorization"),Jz=c(),ug=r("li"),Kd=r("a"),Gz=n("Parallelization"),Xz=c(),Jt=r("div"),T(Jd.$$.fragment),Yz=c(),Gn=r("p"),Zz=n("The "),gg=r("code"),e4=n("FlaxBertPreTrainedModel"),t4=n(" forward method, overrides the "),_g=r("code"),o4=n("__call__"),n4=n(" special method."),s4=c(),T(Jr.$$.fragment),r4=c(),T(Gr.$$.fragment),xk=c(),Xn=r("h2"),Xr=r("a"),bg=r("span"),T(Gd.$$.fragment),a4=c(),kg=r("span"),i4=n("FlaxBertForCausalLM"),Fk=c(),De=r("div"),T(Xd.$$.fragment),l4=c(),yg=r("p"),d4=n(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),c4=c(),Yd=r("p"),p4=n("This model inherits from "),$h=r("a"),h4=n("FlaxPreTrainedModel"),m4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f4=c(),Zd=r("p"),u4=n("This model is also a Flax Linen "),ec=r("a"),g4=n("flax.linen.Module"),_4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b4=c(),Tg=r("p"),k4=n("Finally, this model supports inherent JAX features such as:"),y4=c(),go=r("ul"),vg=r("li"),tc=r("a"),T4=n("Just-In-Time (JIT) compilation"),v4=c(),wg=r("li"),oc=r("a"),w4=n("Automatic Differentiation"),$4=c(),$g=r("li"),nc=r("a"),x4=n("Vectorization"),F4=c(),xg=r("li"),sc=r("a"),B4=n("Parallelization"),E4=c(),Gt=r("div"),T(rc.$$.fragment),M4=c(),Yn=r("p"),z4=n("The "),Fg=r("code"),P4=n("FlaxBertPreTrainedModel"),q4=n(" forward method, overrides the "),Bg=r("code"),j4=n("__call__"),C4=n(" special method."),N4=c(),T(Yr.$$.fragment),O4=c(),T(Zr.$$.fragment),Bk=c(),Zn=r("h2"),ea=r("a"),Eg=r("span"),T(ac.$$.fragment),I4=c(),Mg=r("span"),A4=n("FlaxBertForMaskedLM"),Ek=c(),Se=r("div"),T(ic.$$.fragment),L4=c(),lc=r("p"),D4=n("Bert Model with a "),zg=r("code"),S4=n("language modeling"),U4=n(" head on top."),W4=c(),dc=r("p"),H4=n("This model inherits from "),xh=r("a"),R4=n("FlaxPreTrainedModel"),Q4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V4=c(),cc=r("p"),K4=n("This model is also a Flax Linen "),pc=r("a"),J4=n("flax.linen.Module"),G4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),X4=c(),Pg=r("p"),Y4=n("Finally, this model supports inherent JAX features such as:"),Z4=c(),_o=r("ul"),qg=r("li"),hc=r("a"),eP=n("Just-In-Time (JIT) compilation"),tP=c(),jg=r("li"),mc=r("a"),oP=n("Automatic Differentiation"),nP=c(),Cg=r("li"),fc=r("a"),sP=n("Vectorization"),rP=c(),Ng=r("li"),uc=r("a"),aP=n("Parallelization"),iP=c(),Xt=r("div"),T(gc.$$.fragment),lP=c(),es=r("p"),dP=n("The "),Og=r("code"),cP=n("FlaxBertPreTrainedModel"),pP=n(" forward method, overrides the "),Ig=r("code"),hP=n("__call__"),mP=n(" special method."),fP=c(),T(ta.$$.fragment),uP=c(),T(oa.$$.fragment),Mk=c(),ts=r("h2"),na=r("a"),Ag=r("span"),T(_c.$$.fragment),gP=c(),Lg=r("span"),_P=n("FlaxBertForNextSentencePrediction"),zk=c(),Ue=r("div"),T(bc.$$.fragment),bP=c(),kc=r("p"),kP=n("Bert Model with a "),Dg=r("code"),yP=n("next sentence prediction (classification)"),TP=n(" head on top."),vP=c(),yc=r("p"),wP=n("This model inherits from "),Fh=r("a"),$P=n("FlaxPreTrainedModel"),xP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),FP=c(),Tc=r("p"),BP=n("This model is also a Flax Linen "),vc=r("a"),EP=n("flax.linen.Module"),MP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zP=c(),Sg=r("p"),PP=n("Finally, this model supports inherent JAX features such as:"),qP=c(),bo=r("ul"),Ug=r("li"),wc=r("a"),jP=n("Just-In-Time (JIT) compilation"),CP=c(),Wg=r("li"),$c=r("a"),NP=n("Automatic Differentiation"),OP=c(),Hg=r("li"),xc=r("a"),IP=n("Vectorization"),AP=c(),Rg=r("li"),Fc=r("a"),LP=n("Parallelization"),DP=c(),Yt=r("div"),T(Bc.$$.fragment),SP=c(),os=r("p"),UP=n("The "),Qg=r("code"),WP=n("FlaxBertPreTrainedModel"),HP=n(" forward method, overrides the "),Vg=r("code"),RP=n("__call__"),QP=n(" special method."),VP=c(),T(sa.$$.fragment),KP=c(),T(ra.$$.fragment),Pk=c(),ns=r("h2"),aa=r("a"),Kg=r("span"),T(Ec.$$.fragment),JP=c(),Jg=r("span"),GP=n("FlaxBertForSequenceClassification"),qk=c(),We=r("div"),T(Mc.$$.fragment),XP=c(),Gg=r("p"),YP=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ZP=c(),zc=r("p"),eq=n("This model inherits from "),Bh=r("a"),tq=n("FlaxPreTrainedModel"),oq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nq=c(),Pc=r("p"),sq=n("This model is also a Flax Linen "),qc=r("a"),rq=n("flax.linen.Module"),aq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iq=c(),Xg=r("p"),lq=n("Finally, this model supports inherent JAX features such as:"),dq=c(),ko=r("ul"),Yg=r("li"),jc=r("a"),cq=n("Just-In-Time (JIT) compilation"),pq=c(),Zg=r("li"),Cc=r("a"),hq=n("Automatic Differentiation"),mq=c(),e_=r("li"),Nc=r("a"),fq=n("Vectorization"),uq=c(),t_=r("li"),Oc=r("a"),gq=n("Parallelization"),_q=c(),Zt=r("div"),T(Ic.$$.fragment),bq=c(),ss=r("p"),kq=n("The "),o_=r("code"),yq=n("FlaxBertPreTrainedModel"),Tq=n(" forward method, overrides the "),n_=r("code"),vq=n("__call__"),wq=n(" special method."),$q=c(),T(ia.$$.fragment),xq=c(),T(la.$$.fragment),jk=c(),rs=r("h2"),da=r("a"),s_=r("span"),T(Ac.$$.fragment),Fq=c(),r_=r("span"),Bq=n("FlaxBertForMultipleChoice"),Ck=c(),He=r("div"),T(Lc.$$.fragment),Eq=c(),a_=r("p"),Mq=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zq=c(),Dc=r("p"),Pq=n("This model inherits from "),Eh=r("a"),qq=n("FlaxPreTrainedModel"),jq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cq=c(),Sc=r("p"),Nq=n("This model is also a Flax Linen "),Uc=r("a"),Oq=n("flax.linen.Module"),Iq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Aq=c(),i_=r("p"),Lq=n("Finally, this model supports inherent JAX features such as:"),Dq=c(),yo=r("ul"),l_=r("li"),Wc=r("a"),Sq=n("Just-In-Time (JIT) compilation"),Uq=c(),d_=r("li"),Hc=r("a"),Wq=n("Automatic Differentiation"),Hq=c(),c_=r("li"),Rc=r("a"),Rq=n("Vectorization"),Qq=c(),p_=r("li"),Qc=r("a"),Vq=n("Parallelization"),Kq=c(),eo=r("div"),T(Vc.$$.fragment),Jq=c(),as=r("p"),Gq=n("The "),h_=r("code"),Xq=n("FlaxBertPreTrainedModel"),Yq=n(" forward method, overrides the "),m_=r("code"),Zq=n("__call__"),e8=n(" special method."),t8=c(),T(ca.$$.fragment),o8=c(),T(pa.$$.fragment),Nk=c(),is=r("h2"),ha=r("a"),f_=r("span"),T(Kc.$$.fragment),n8=c(),u_=r("span"),s8=n("FlaxBertForTokenClassification"),Ok=c(),Re=r("div"),T(Jc.$$.fragment),r8=c(),g_=r("p"),a8=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),i8=c(),Gc=r("p"),l8=n("This model inherits from "),Mh=r("a"),d8=n("FlaxPreTrainedModel"),c8=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p8=c(),Xc=r("p"),h8=n("This model is also a Flax Linen "),Yc=r("a"),m8=n("flax.linen.Module"),f8=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),u8=c(),__=r("p"),g8=n("Finally, this model supports inherent JAX features such as:"),_8=c(),To=r("ul"),b_=r("li"),Zc=r("a"),b8=n("Just-In-Time (JIT) compilation"),k8=c(),k_=r("li"),ep=r("a"),y8=n("Automatic Differentiation"),T8=c(),y_=r("li"),tp=r("a"),v8=n("Vectorization"),w8=c(),T_=r("li"),op=r("a"),$8=n("Parallelization"),x8=c(),to=r("div"),T(np.$$.fragment),F8=c(),ls=r("p"),B8=n("The "),v_=r("code"),E8=n("FlaxBertPreTrainedModel"),M8=n(" forward method, overrides the "),w_=r("code"),z8=n("__call__"),P8=n(" special method."),q8=c(),T(ma.$$.fragment),j8=c(),T(fa.$$.fragment),Ik=c(),ds=r("h2"),ua=r("a"),$_=r("span"),T(sp.$$.fragment),C8=c(),x_=r("span"),N8=n("FlaxBertForQuestionAnswering"),Ak=c(),Qe=r("div"),T(rp.$$.fragment),O8=c(),cs=r("p"),I8=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),F_=r("code"),A8=n("span start logits"),L8=n(" and "),B_=r("code"),D8=n("span end logits"),S8=n(")."),U8=c(),ap=r("p"),W8=n("This model inherits from "),zh=r("a"),H8=n("FlaxPreTrainedModel"),R8=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Q8=c(),ip=r("p"),V8=n("This model is also a Flax Linen "),lp=r("a"),K8=n("flax.linen.Module"),J8=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),G8=c(),E_=r("p"),X8=n("Finally, this model supports inherent JAX features such as:"),Y8=c(),vo=r("ul"),M_=r("li"),dp=r("a"),Z8=n("Just-In-Time (JIT) compilation"),e7=c(),z_=r("li"),cp=r("a"),t7=n("Automatic Differentiation"),o7=c(),P_=r("li"),pp=r("a"),n7=n("Vectorization"),s7=c(),q_=r("li"),hp=r("a"),r7=n("Parallelization"),a7=c(),oo=r("div"),T(mp.$$.fragment),i7=c(),ps=r("p"),l7=n("The "),j_=r("code"),d7=n("FlaxBertPreTrainedModel"),c7=n(" forward method, overrides the "),C_=r("code"),p7=n("__call__"),h7=n(" special method."),m7=c(),T(ga.$$.fragment),f7=c(),T(_a.$$.fragment),this.h()},l(o){const k=Q5('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),m=a(o,"H1",{class:!0});var fp=i(m);h=a(fp,"A",{id:!0,class:!0,href:!0});var N_=i(h);g=a(N_,"SPAN",{});var O_=i(g);v(l.$$.fragment,O_),O_.forEach(t),N_.forEach(t),f=p(fp),E=a(fp,"SPAN",{});var I_=i(E);be=s(I_,"BERT"),I_.forEach(t),fp.forEach(t),X=p(o),z=a(o,"H2",{class:!0});var up=i(z);ne=a(up,"A",{id:!0,class:!0,href:!0});var A_=i(ne);L=a(A_,"SPAN",{});var L_=i(L);v(re.$$.fragment,L_),L_.forEach(t),A_.forEach(t),ke=p(up),D=a(up,"SPAN",{});var D_=i(D);ye=s(D_,"Overview"),D_.forEach(t),up.forEach(t),me=p(o),J=a(o,"P",{});var gp=i(J);O=s(gp,"The BERT model was proposed in "),ae=a(gp,"A",{href:!0,rel:!0});var S_=i(ae);Y=s(S_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),S_.forEach(t),P=s(gp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),gp.forEach(t),j=p(o),ie=a(o,"P",{});var U_=i(ie);H=s(U_,"The abstract from the paper is the following:"),U_.forEach(t),fe=p(o),le=a(o,"P",{});var W_=i(le);S=a(W_,"EM",{});var H_=i(S);Te=s(H_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),H_.forEach(t),W_.forEach(t),ue=p(o),q=a(o,"P",{});var R_=i(q);ce=a(R_,"EM",{});var Q_=i(ce);R=s(Q_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Q_.forEach(t),R_.forEach(t),ge=p(o),de=a(o,"P",{});var V_=i(de);Q=s(V_,"Tips:"),V_.forEach(t),_e=p(o),se=a(o,"UL",{});var _p=i(se);N=a(_p,"LI",{});var K_=i(N);ve=s(K_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),K_.forEach(t),V=p(_p),pe=a(_p,"LI",{});var J_=i(pe);y=s(J_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),J_.forEach(t),_p.forEach(t),M=p(o),K=a(o,"P",{});var hs=i(K);ze=s(hs,"This model was contributed by "),Be=a(hs,"A",{href:!0,rel:!0});var G_=i(Be);I=s(G_,"thomwolf"),G_.forEach(t),Pe=s(hs,". The original code can be found "),Ee=a(hs,"A",{href:!0,rel:!0});var X_=i(Ee);qe=s(X_,"here"),X_.forEach(t),A=s(hs,"."),hs.forEach(t),W=p(o),xe=a(o,"H2",{class:!0});var bp=i(xe);Fe=a(bp,"A",{id:!0,class:!0,href:!0});var Y_=i(Fe);U=a(Y_,"SPAN",{});var Z_=i(U);v(Me.$$.fragment,Z_),Z_.forEach(t),Y_.forEach(t),je=p(bp),he=a(bp,"SPAN",{});var eb=i(he);Ce=s(eb,"BertConfig"),eb.forEach(t),bp.forEach(t),Eb=p(o),Nt=a(o,"DIV",{class:!0});var wo=i(Nt);v(Ra.$$.fragment,wo),jy=p(wo),ho=a(wo,"P",{});var $o=i(ho);Cy=s($o,"This is the configuration class to store the configuration of a "),Ep=a($o,"A",{href:!0});var tb=i(Ep);Ny=s(tb,"BertModel"),tb.forEach(t),Oy=s($o," or a "),Mp=a($o,"A",{href:!0});var ob=i(Mp);Iy=s(ob,"TFBertModel"),ob.forEach(t),Ay=s($o,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Qa=a($o,"A",{href:!0,rel:!0});var nb=i(Qa);Ly=s(nb,"bert-base-uncased"),nb.forEach(t),Dy=s($o," architecture."),$o.forEach(t),Sy=p(wo),Ko=a(wo,"P",{});var ms=i(Ko);Uy=s(ms,"Configuration objects inherit from "),zp=a(ms,"A",{href:!0});var sb=i(zp);Wy=s(sb,"PretrainedConfig"),sb.forEach(t),Hy=s(ms,` and can be used to control the model outputs. Read the
documentation from `),Pp=a(ms,"A",{href:!0});var rb=i(Pp);Ry=s(rb,"PretrainedConfig"),rb.forEach(t),Qy=s(ms," for more information."),ms.forEach(t),Vy=p(wo),v(_s.$$.fragment,wo),wo.forEach(t),Mb=p(o),Jo=a(o,"H2",{class:!0});var kp=i(Jo);bs=a(kp,"A",{id:!0,class:!0,href:!0});var ab=i(bs);km=a(ab,"SPAN",{});var ib=i(km);v(Va.$$.fragment,ib),ib.forEach(t),ab.forEach(t),Ky=p(kp),ym=a(kp,"SPAN",{});var lb=i(ym);Jy=s(lb,"BertTokenizer"),lb.forEach(t),kp.forEach(t),zb=p(o),Ne=a(o,"DIV",{class:!0});var nt=i(Ne);v(Ka.$$.fragment,nt),Gy=p(nt),Tm=a(nt,"P",{});var db=i(Tm);Xy=s(db,"Construct a BERT tokenizer. Based on WordPiece."),db.forEach(t),Yy=p(nt),Ja=a(nt,"P",{});var yp=i(Ja);Zy=s(yp,"This tokenizer inherits from "),qp=a(yp,"A",{href:!0});var cb=i(qp);eT=s(cb,"PreTrainedTokenizer"),cb.forEach(t),tT=s(yp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yp.forEach(t),oT=p(nt),Bo=a(nt,"DIV",{class:!0});var fs=i(Bo);v(Ga.$$.fragment,fs),nT=p(fs),vm=a(fs,"P",{});var pb=i(vm);sT=s(pb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),pb.forEach(t),rT=p(fs),Xa=a(fs,"UL",{});var Tp=i(Xa);jp=a(Tp,"LI",{});var Ph=i(jp);aT=s(Ph,"single sequence: "),wm=a(Ph,"CODE",{});var hb=i(wm);iT=s(hb,"[CLS] X [SEP]"),hb.forEach(t),Ph.forEach(t),lT=p(Tp),Cp=a(Tp,"LI",{});var qh=i(Cp);dT=s(qh,"pair of sequences: "),$m=a(qh,"CODE",{});var mb=i($m);cT=s(mb,"[CLS] A [SEP] B [SEP]"),mb.forEach(t),qh.forEach(t),Tp.forEach(t),fs.forEach(t),pT=p(nt),ks=a(nt,"DIV",{class:!0});var vp=i(ks);v(Ya.$$.fragment,vp),hT=p(vp),Za=a(vp,"P",{});var wp=i(Za);mT=s(wp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xm=a(wp,"CODE",{});var fb=i(xm);fT=s(fb,"prepare_for_model"),fb.forEach(t),uT=s(wp," method."),wp.forEach(t),vp.forEach(t),gT=p(nt),It=a(nt,"DIV",{class:!0});var xo=i(It);v(ei.$$.fragment,xo),_T=p(xo),Fm=a(xo,"P",{});var ub=i(Fm);bT=s(ub,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ub.forEach(t),kT=p(xo),v(ys.$$.fragment,xo),yT=p(xo),Go=a(xo,"P",{});var us=i(Go);TT=s(us,"If "),Bm=a(us,"CODE",{});var gb=i(Bm);vT=s(gb,"token_ids_1"),gb.forEach(t),wT=s(us," is "),Em=a(us,"CODE",{});var _b=i(Em);$T=s(_b,"None"),_b.forEach(t),xT=s(us,", this method only returns the first portion of the mask (0s)."),us.forEach(t),xo.forEach(t),FT=p(nt),Np=a(nt,"DIV",{class:!0});var bb=i(Np);v(ti.$$.fragment,bb),bb.forEach(t),nt.forEach(t),Pb=p(o),Xo=a(o,"H2",{class:!0});var $p=i(Xo);Ts=a($p,"A",{id:!0,class:!0,href:!0});var kb=i(Ts);Mm=a(kb,"SPAN",{});var yb=i(Mm);v(oi.$$.fragment,yb),yb.forEach(t),kb.forEach(t),BT=p($p),zm=a($p,"SPAN",{});var Tb=i(zm);ET=s(Tb,"BertTokenizerFast"),Tb.forEach(t),$p.forEach(t),qb=p(o),rt=a(o,"DIV",{class:!0});var Ot=i(rt);v(ni.$$.fragment,Ot),MT=p(Ot),si=a(Ot,"P",{});var xp=i(si);zT=s(xp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=a(xp,"EM",{});var vb=i(Pm);PT=s(vb,"tokenizers"),vb.forEach(t),qT=s(xp," library). Based on WordPiece."),xp.forEach(t),jT=p(Ot),ri=a(Ot,"P",{});var Fp=i(ri);CT=s(Fp,"This tokenizer inherits from "),Op=a(Fp,"A",{href:!0});var wb=i(Op);NT=s(wb,"PreTrainedTokenizerFast"),wb.forEach(t),OT=s(Fp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Fp.forEach(t),IT=p(Ot),Eo=a(Ot,"DIV",{class:!0});var gs=i(Eo);v(ai.$$.fragment,gs),AT=p(gs),qm=a(gs,"P",{});var $b=i(qm);LT=s($b,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),$b.forEach(t),DT=p(gs),ii=a(gs,"UL",{});var Bp=i(ii);Ip=a(Bp,"LI",{});var jh=i(Ip);ST=s(jh,"single sequence: "),jm=a(jh,"CODE",{});var xb=i(jm);UT=s(xb,"[CLS] X [SEP]"),xb.forEach(t),jh.forEach(t),WT=p(Bp),Ap=a(Bp,"LI",{});var Ch=i(Ap);HT=s(Ch,"pair of sequences: "),Cm=a(Ch,"CODE",{});var Fb=i(Cm);RT=s(Fb,"[CLS] A [SEP] B [SEP]"),Fb.forEach(t),Ch.forEach(t),Bp.forEach(t),gs.forEach(t),QT=p(Ot),At=a(Ot,"DIV",{class:!0});var Fo=i(At);v(li.$$.fragment,Fo),VT=p(Fo),Nm=a(Fo,"P",{});var Bb=i(Nm);KT=s(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bb.forEach(t),JT=p(Fo),v(vs.$$.fragment,Fo),GT=p(Fo),Yo=a(Fo,"P",{});var Nh=i(Yo);XT=s(Nh,"If "),Om=a(Nh,"CODE",{});var u7=i(Om);YT=s(u7,"token_ids_1"),u7.forEach(t),ZT=s(Nh," is "),Im=a(Nh,"CODE",{});var g7=i(Im);ev=s(g7,"None"),g7.forEach(t),tv=s(Nh,", this method only returns the first portion of the mask (0s)."),Nh.forEach(t),Fo.forEach(t),Ot.forEach(t),jb=p(o),Zo=a(o,"H2",{class:!0});var Dk=i(Zo);ws=a(Dk,"A",{id:!0,class:!0,href:!0});var _7=i(ws);Am=a(_7,"SPAN",{});var b7=i(Am);v(di.$$.fragment,b7),b7.forEach(t),_7.forEach(t),ov=p(Dk),Lm=a(Dk,"SPAN",{});var k7=i(Lm);nv=s(k7,"TFBertTokenizer"),k7.forEach(t),Dk.forEach(t),Cb=p(o),at=a(o,"DIV",{class:!0});var Po=i(at);v(ci.$$.fragment,Po),sv=p(Po),en=a(Po,"P",{});var Oh=i(en);rv=s(Oh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=a(Oh,"CODE",{});var y7=i(Dm);av=s(y7,"from_pretrained()"),y7.forEach(t),iv=s(Oh," method. It can also be initialized with the "),Sm=a(Oh,"CODE",{});var T7=i(Sm);lv=s(T7,"from_tokenizer()"),T7.forEach(t),dv=s(Oh,` method, which imports settings
from an existing standard tokenizer object.`),Oh.forEach(t),cv=p(Po),pi=a(Po,"P",{});var Sk=i(pi);pv=s(Sk,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=a(Sk,"CODE",{});var v7=i(Um);hv=s(v7,"tf.string"),v7.forEach(t),mv=s(Sk," inputs to outputs."),Sk.forEach(t),fv=p(Po),Mo=a(Po,"DIV",{class:!0});var Ih=i(Mo);v(hi.$$.fragment,Ih),uv=p(Ih),mi=a(Ih,"P",{});var Uk=i(mi);gv=s(Uk,"Instantiate a "),Wm=a(Uk,"CODE",{});var w7=i(Wm);_v=s(w7,"TFBertTokenizer"),w7.forEach(t),bv=s(Uk," from a pre-trained tokenizer."),Uk.forEach(t),kv=p(Ih),v($s.$$.fragment,Ih),Ih.forEach(t),yv=p(Po),zo=a(Po,"DIV",{class:!0});var Ah=i(zo);v(fi.$$.fragment,Ah),Tv=p(Ah),tn=a(Ah,"P",{});var Lh=i(tn);vv=s(Lh,"Initialize a "),Hm=a(Lh,"CODE",{});var $7=i(Hm);wv=s($7,"TFBertTokenizer"),$7.forEach(t),$v=s(Lh," from an existing "),Rm=a(Lh,"CODE",{});var x7=i(Rm);xv=s(x7,"Tokenizer"),x7.forEach(t),Fv=s(Lh,"."),Lh.forEach(t),Bv=p(Ah),v(xs.$$.fragment,Ah),Ah.forEach(t),Po.forEach(t),Nb=p(o),on=a(o,"H2",{class:!0});var Wk=i(on);Fs=a(Wk,"A",{id:!0,class:!0,href:!0});var F7=i(Fs);Qm=a(F7,"SPAN",{});var B7=i(Qm);v(ui.$$.fragment,B7),B7.forEach(t),F7.forEach(t),Ev=p(Wk),Vm=a(Wk,"SPAN",{});var E7=i(Vm);Mv=s(E7,"Bert specific outputs"),E7.forEach(t),Wk.forEach(t),Ob=p(o),nn=a(o,"DIV",{class:!0});var Hk=i(nn);v(gi.$$.fragment,Hk),zv=p(Hk),_i=a(Hk,"P",{});var Rk=i(_i);Pv=s(Rk,"Output type of "),Lp=a(Rk,"A",{href:!0});var M7=i(Lp);qv=s(M7,"BertForPreTraining"),M7.forEach(t),jv=s(Rk,"."),Rk.forEach(t),Hk.forEach(t),Ib=p(o),sn=a(o,"DIV",{class:!0});var Qk=i(sn);v(bi.$$.fragment,Qk),Cv=p(Qk),ki=a(Qk,"P",{});var Vk=i(ki);Nv=s(Vk,"Output type of "),Dp=a(Vk,"A",{href:!0});var z7=i(Dp);Ov=s(z7,"TFBertForPreTraining"),z7.forEach(t),Iv=s(Vk,"."),Vk.forEach(t),Qk.forEach(t),Ab=p(o),mo=a(o,"DIV",{class:!0});var Dh=i(mo);v(yi.$$.fragment,Dh),Av=p(Dh),Ti=a(Dh,"P",{});var Kk=i(Ti);Lv=s(Kk,"Output type of "),Sp=a(Kk,"A",{href:!0});var P7=i(Sp);Dv=s(P7,"BertForPreTraining"),P7.forEach(t),Sv=s(Kk,"."),Kk.forEach(t),Uv=p(Dh),Bs=a(Dh,"DIV",{class:!0});var Jk=i(Bs);v(vi.$$.fragment,Jk),Wv=p(Jk),Km=a(Jk,"P",{});var q7=i(Km);Hv=s(q7,"\u201CReturns a new object replacing the specified fields with new values."),q7.forEach(t),Jk.forEach(t),Dh.forEach(t),Lb=p(o),rn=a(o,"H2",{class:!0});var Gk=i(rn);Es=a(Gk,"A",{id:!0,class:!0,href:!0});var j7=i(Es);Jm=a(j7,"SPAN",{});var C7=i(Jm);v(wi.$$.fragment,C7),C7.forEach(t),j7.forEach(t),Rv=p(Gk),Gm=a(Gk,"SPAN",{});var N7=i(Gm);Qv=s(N7,"BertModel"),N7.forEach(t),Gk.forEach(t),Db=p(o),Oe=a(o,"DIV",{class:!0});var wt=i(Oe);v($i.$$.fragment,wt),Vv=p(wt),Xm=a(wt,"P",{});var O7=i(Xm);Kv=s(O7,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),O7.forEach(t),Jv=p(wt),xi=a(wt,"P",{});var Xk=i(xi);Gv=s(Xk,"This model inherits from "),Up=a(Xk,"A",{href:!0});var I7=i(Up);Xv=s(I7,"PreTrainedModel"),I7.forEach(t),Yv=s(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk.forEach(t),Zv=p(wt),Fi=a(wt,"P",{});var Yk=i(Fi);ew=s(Yk,"This model is also a PyTorch "),Bi=a(Yk,"A",{href:!0,rel:!0});var A7=i(Bi);tw=s(A7,"torch.nn.Module"),A7.forEach(t),ow=s(Yk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk.forEach(t),nw=p(wt),Ei=a(wt,"P",{});var Zk=i(Ei);sw=s(Zk,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Mi=a(Zk,"A",{href:!0,rel:!0});var L7=i(Mi);rw=s(L7,`Attention is
all you need`),L7.forEach(t),aw=s(Zk,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zk.forEach(t),iw=p(wt),Ke=a(wt,"P",{});var $t=i(Ke);lw=s($t,"To behave as an decoder the model needs to be initialized with the "),Ym=a($t,"CODE",{});var D7=i(Ym);dw=s(D7,"is_decoder"),D7.forEach(t),cw=s($t,` argument of the configuration set
to `),Zm=a($t,"CODE",{});var S7=i(Zm);pw=s(S7,"True"),S7.forEach(t),hw=s($t,". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=a($t,"CODE",{});var U7=i(ef);mw=s(U7,"is_decoder"),U7.forEach(t),fw=s($t,` argument and
`),tf=a($t,"CODE",{});var W7=i(tf);uw=s(W7,"add_cross_attention"),W7.forEach(t),gw=s($t," set to "),of=a($t,"CODE",{});var H7=i(of);_w=s(H7,"True"),H7.forEach(t),bw=s($t,"; an "),nf=a($t,"CODE",{});var R7=i(nf);kw=s(R7,"encoder_hidden_states"),R7.forEach(t),yw=s($t," is then expected as an input to the forward pass."),$t.forEach(t),Tw=p(wt),Lt=a(wt,"DIV",{class:!0});var ba=i(Lt);v(zi.$$.fragment,ba),vw=p(ba),an=a(ba,"P",{});var Sh=i(an);ww=s(Sh,"The "),Wp=a(Sh,"A",{href:!0});var Q7=i(Wp);$w=s(Q7,"BertModel"),Q7.forEach(t),xw=s(Sh," forward method, overrides the "),sf=a(Sh,"CODE",{});var V7=i(sf);Fw=s(V7,"__call__"),V7.forEach(t),Bw=s(Sh," special method."),Sh.forEach(t),Ew=p(ba),v(Ms.$$.fragment,ba),Mw=p(ba),v(zs.$$.fragment,ba),ba.forEach(t),wt.forEach(t),Sb=p(o),ln=a(o,"H2",{class:!0});var e1=i(ln);Ps=a(e1,"A",{id:!0,class:!0,href:!0});var K7=i(Ps);rf=a(K7,"SPAN",{});var J7=i(rf);v(Pi.$$.fragment,J7),J7.forEach(t),K7.forEach(t),zw=p(e1),af=a(e1,"SPAN",{});var G7=i(af);Pw=s(G7,"BertForPreTraining"),G7.forEach(t),e1.forEach(t),Ub=p(o),it=a(o,"DIV",{class:!0});var qo=i(it);v(qi.$$.fragment,qo),qw=p(qo),dn=a(qo,"P",{});var Uh=i(dn);jw=s(Uh,"Bert Model with two heads on top as done during the pretraining: a "),lf=a(Uh,"CODE",{});var X7=i(lf);Cw=s(X7,"masked language modeling"),X7.forEach(t),Nw=s(Uh," head and a "),df=a(Uh,"CODE",{});var Y7=i(df);Ow=s(Y7,"next sentence prediction (classification)"),Y7.forEach(t),Iw=s(Uh," head."),Uh.forEach(t),Aw=p(qo),ji=a(qo,"P",{});var t1=i(ji);Lw=s(t1,"This model inherits from "),Hp=a(t1,"A",{href:!0});var Z7=i(Hp);Dw=s(Z7,"PreTrainedModel"),Z7.forEach(t),Sw=s(t1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),t1.forEach(t),Uw=p(qo),Ci=a(qo,"P",{});var o1=i(Ci);Ww=s(o1,"This model is also a PyTorch "),Ni=a(o1,"A",{href:!0,rel:!0});var ej=i(Ni);Hw=s(ej,"torch.nn.Module"),ej.forEach(t),Rw=s(o1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),o1.forEach(t),Qw=p(qo),Dt=a(qo,"DIV",{class:!0});var ka=i(Dt);v(Oi.$$.fragment,ka),Vw=p(ka),cn=a(ka,"P",{});var Wh=i(cn);Kw=s(Wh,"The "),Rp=a(Wh,"A",{href:!0});var tj=i(Rp);Jw=s(tj,"BertForPreTraining"),tj.forEach(t),Gw=s(Wh," forward method, overrides the "),cf=a(Wh,"CODE",{});var oj=i(cf);Xw=s(oj,"__call__"),oj.forEach(t),Yw=s(Wh," special method."),Wh.forEach(t),Zw=p(ka),v(qs.$$.fragment,ka),e$=p(ka),v(js.$$.fragment,ka),ka.forEach(t),qo.forEach(t),Wb=p(o),pn=a(o,"H2",{class:!0});var n1=i(pn);Cs=a(n1,"A",{id:!0,class:!0,href:!0});var nj=i(Cs);pf=a(nj,"SPAN",{});var sj=i(pf);v(Ii.$$.fragment,sj),sj.forEach(t),nj.forEach(t),t$=p(n1),hf=a(n1,"SPAN",{});var rj=i(hf);o$=s(rj,"BertLMHeadModel"),rj.forEach(t),n1.forEach(t),Hb=p(o),lt=a(o,"DIV",{class:!0});var jo=i(lt);v(Ai.$$.fragment,jo),n$=p(jo),Li=a(jo,"P",{});var s1=i(Li);s$=s(s1,"Bert Model with a "),mf=a(s1,"CODE",{});var aj=i(mf);r$=s(aj,"language modeling"),aj.forEach(t),a$=s(s1," head on top for CLM fine-tuning."),s1.forEach(t),i$=p(jo),Di=a(jo,"P",{});var r1=i(Di);l$=s(r1,"This model inherits from "),Qp=a(r1,"A",{href:!0});var ij=i(Qp);d$=s(ij,"PreTrainedModel"),ij.forEach(t),c$=s(r1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r1.forEach(t),p$=p(jo),Si=a(jo,"P",{});var a1=i(Si);h$=s(a1,"This model is also a PyTorch "),Ui=a(a1,"A",{href:!0,rel:!0});var lj=i(Ui);m$=s(lj,"torch.nn.Module"),lj.forEach(t),f$=s(a1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),a1.forEach(t),u$=p(jo),St=a(jo,"DIV",{class:!0});var ya=i(St);v(Wi.$$.fragment,ya),g$=p(ya),hn=a(ya,"P",{});var Hh=i(hn);_$=s(Hh,"The "),Vp=a(Hh,"A",{href:!0});var dj=i(Vp);b$=s(dj,"BertLMHeadModel"),dj.forEach(t),k$=s(Hh," forward method, overrides the "),ff=a(Hh,"CODE",{});var cj=i(ff);y$=s(cj,"__call__"),cj.forEach(t),T$=s(Hh," special method."),Hh.forEach(t),v$=p(ya),v(Ns.$$.fragment,ya),w$=p(ya),v(Os.$$.fragment,ya),ya.forEach(t),jo.forEach(t),Rb=p(o),mn=a(o,"H2",{class:!0});var i1=i(mn);Is=a(i1,"A",{id:!0,class:!0,href:!0});var pj=i(Is);uf=a(pj,"SPAN",{});var hj=i(uf);v(Hi.$$.fragment,hj),hj.forEach(t),pj.forEach(t),$$=p(i1),gf=a(i1,"SPAN",{});var mj=i(gf);x$=s(mj,"BertForMaskedLM"),mj.forEach(t),i1.forEach(t),Qb=p(o),dt=a(o,"DIV",{class:!0});var Co=i(dt);v(Ri.$$.fragment,Co),F$=p(Co),Qi=a(Co,"P",{});var l1=i(Qi);B$=s(l1,"Bert Model with a "),_f=a(l1,"CODE",{});var fj=i(_f);E$=s(fj,"language modeling"),fj.forEach(t),M$=s(l1," head on top."),l1.forEach(t),z$=p(Co),Vi=a(Co,"P",{});var d1=i(Vi);P$=s(d1,"This model inherits from "),Kp=a(d1,"A",{href:!0});var uj=i(Kp);q$=s(uj,"PreTrainedModel"),uj.forEach(t),j$=s(d1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),d1.forEach(t),C$=p(Co),Ki=a(Co,"P",{});var c1=i(Ki);N$=s(c1,"This model is also a PyTorch "),Ji=a(c1,"A",{href:!0,rel:!0});var gj=i(Ji);O$=s(gj,"torch.nn.Module"),gj.forEach(t),I$=s(c1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),c1.forEach(t),A$=p(Co),ut=a(Co,"DIV",{class:!0});var No=i(ut);v(Gi.$$.fragment,No),L$=p(No),fn=a(No,"P",{});var Rh=i(fn);D$=s(Rh,"The "),Jp=a(Rh,"A",{href:!0});var _j=i(Jp);S$=s(_j,"BertForMaskedLM"),_j.forEach(t),U$=s(Rh," forward method, overrides the "),bf=a(Rh,"CODE",{});var bj=i(bf);W$=s(bj,"__call__"),bj.forEach(t),H$=s(Rh," special method."),Rh.forEach(t),R$=p(No),v(As.$$.fragment,No),Q$=p(No),v(Ls.$$.fragment,No),V$=p(No),v(Ds.$$.fragment,No),No.forEach(t),Co.forEach(t),Vb=p(o),un=a(o,"H2",{class:!0});var p1=i(un);Ss=a(p1,"A",{id:!0,class:!0,href:!0});var kj=i(Ss);kf=a(kj,"SPAN",{});var yj=i(kf);v(Xi.$$.fragment,yj),yj.forEach(t),kj.forEach(t),K$=p(p1),yf=a(p1,"SPAN",{});var Tj=i(yf);J$=s(Tj,"BertForNextSentencePrediction"),Tj.forEach(t),p1.forEach(t),Kb=p(o),ct=a(o,"DIV",{class:!0});var Oo=i(ct);v(Yi.$$.fragment,Oo),G$=p(Oo),Zi=a(Oo,"P",{});var h1=i(Zi);X$=s(h1,"Bert Model with a "),Tf=a(h1,"CODE",{});var vj=i(Tf);Y$=s(vj,"next sentence prediction (classification)"),vj.forEach(t),Z$=s(h1," head on top."),h1.forEach(t),e2=p(Oo),el=a(Oo,"P",{});var m1=i(el);t2=s(m1,"This model inherits from "),Gp=a(m1,"A",{href:!0});var wj=i(Gp);o2=s(wj,"PreTrainedModel"),wj.forEach(t),n2=s(m1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m1.forEach(t),s2=p(Oo),tl=a(Oo,"P",{});var f1=i(tl);r2=s(f1,"This model is also a PyTorch "),ol=a(f1,"A",{href:!0,rel:!0});var $j=i(ol);a2=s($j,"torch.nn.Module"),$j.forEach(t),i2=s(f1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),f1.forEach(t),l2=p(Oo),Ut=a(Oo,"DIV",{class:!0});var Ta=i(Ut);v(nl.$$.fragment,Ta),d2=p(Ta),gn=a(Ta,"P",{});var Qh=i(gn);c2=s(Qh,"The "),Xp=a(Qh,"A",{href:!0});var xj=i(Xp);p2=s(xj,"BertForNextSentencePrediction"),xj.forEach(t),h2=s(Qh," forward method, overrides the "),vf=a(Qh,"CODE",{});var Fj=i(vf);m2=s(Fj,"__call__"),Fj.forEach(t),f2=s(Qh," special method."),Qh.forEach(t),u2=p(Ta),v(Us.$$.fragment,Ta),g2=p(Ta),v(Ws.$$.fragment,Ta),Ta.forEach(t),Oo.forEach(t),Jb=p(o),_n=a(o,"H2",{class:!0});var u1=i(_n);Hs=a(u1,"A",{id:!0,class:!0,href:!0});var Bj=i(Hs);wf=a(Bj,"SPAN",{});var Ej=i(wf);v(sl.$$.fragment,Ej),Ej.forEach(t),Bj.forEach(t),_2=p(u1),$f=a(u1,"SPAN",{});var Mj=i($f);b2=s(Mj,"BertForSequenceClassification"),Mj.forEach(t),u1.forEach(t),Gb=p(o),pt=a(o,"DIV",{class:!0});var Io=i(pt);v(rl.$$.fragment,Io),k2=p(Io),xf=a(Io,"P",{});var zj=i(xf);y2=s(zj,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zj.forEach(t),T2=p(Io),al=a(Io,"P",{});var g1=i(al);v2=s(g1,"This model inherits from "),Yp=a(g1,"A",{href:!0});var Pj=i(Yp);w2=s(Pj,"PreTrainedModel"),Pj.forEach(t),$2=s(g1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g1.forEach(t),x2=p(Io),il=a(Io,"P",{});var _1=i(il);F2=s(_1,"This model is also a PyTorch "),ll=a(_1,"A",{href:!0,rel:!0});var qj=i(ll);B2=s(qj,"torch.nn.Module"),qj.forEach(t),E2=s(_1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_1.forEach(t),M2=p(Io),Ve=a(Io,"DIV",{class:!0});var xt=i(Ve);v(dl.$$.fragment,xt),z2=p(xt),bn=a(xt,"P",{});var Vh=i(bn);P2=s(Vh,"The "),Zp=a(Vh,"A",{href:!0});var jj=i(Zp);q2=s(jj,"BertForSequenceClassification"),jj.forEach(t),j2=s(Vh," forward method, overrides the "),Ff=a(Vh,"CODE",{});var Cj=i(Ff);C2=s(Cj,"__call__"),Cj.forEach(t),N2=s(Vh," special method."),Vh.forEach(t),O2=p(xt),v(Rs.$$.fragment,xt),I2=p(xt),v(Qs.$$.fragment,xt),A2=p(xt),v(Vs.$$.fragment,xt),L2=p(xt),v(Ks.$$.fragment,xt),D2=p(xt),v(Js.$$.fragment,xt),xt.forEach(t),Io.forEach(t),Xb=p(o),kn=a(o,"H2",{class:!0});var b1=i(kn);Gs=a(b1,"A",{id:!0,class:!0,href:!0});var Nj=i(Gs);Bf=a(Nj,"SPAN",{});var Oj=i(Bf);v(cl.$$.fragment,Oj),Oj.forEach(t),Nj.forEach(t),S2=p(b1),Ef=a(b1,"SPAN",{});var Ij=i(Ef);U2=s(Ij,"BertForMultipleChoice"),Ij.forEach(t),b1.forEach(t),Yb=p(o),ht=a(o,"DIV",{class:!0});var Ao=i(ht);v(pl.$$.fragment,Ao),W2=p(Ao),Mf=a(Ao,"P",{});var Aj=i(Mf);H2=s(Aj,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Aj.forEach(t),R2=p(Ao),hl=a(Ao,"P",{});var k1=i(hl);Q2=s(k1,"This model inherits from "),eh=a(k1,"A",{href:!0});var Lj=i(eh);V2=s(Lj,"PreTrainedModel"),Lj.forEach(t),K2=s(k1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k1.forEach(t),J2=p(Ao),ml=a(Ao,"P",{});var y1=i(ml);G2=s(y1,"This model is also a PyTorch "),fl=a(y1,"A",{href:!0,rel:!0});var Dj=i(fl);X2=s(Dj,"torch.nn.Module"),Dj.forEach(t),Y2=s(y1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),y1.forEach(t),Z2=p(Ao),Wt=a(Ao,"DIV",{class:!0});var va=i(Wt);v(ul.$$.fragment,va),ex=p(va),yn=a(va,"P",{});var Kh=i(yn);tx=s(Kh,"The "),th=a(Kh,"A",{href:!0});var Sj=i(th);ox=s(Sj,"BertForMultipleChoice"),Sj.forEach(t),nx=s(Kh," forward method, overrides the "),zf=a(Kh,"CODE",{});var Uj=i(zf);sx=s(Uj,"__call__"),Uj.forEach(t),rx=s(Kh," special method."),Kh.forEach(t),ax=p(va),v(Xs.$$.fragment,va),ix=p(va),v(Ys.$$.fragment,va),va.forEach(t),Ao.forEach(t),Zb=p(o),Tn=a(o,"H2",{class:!0});var T1=i(Tn);Zs=a(T1,"A",{id:!0,class:!0,href:!0});var Wj=i(Zs);Pf=a(Wj,"SPAN",{});var Hj=i(Pf);v(gl.$$.fragment,Hj),Hj.forEach(t),Wj.forEach(t),lx=p(T1),qf=a(T1,"SPAN",{});var Rj=i(qf);dx=s(Rj,"BertForTokenClassification"),Rj.forEach(t),T1.forEach(t),ek=p(o),mt=a(o,"DIV",{class:!0});var Lo=i(mt);v(_l.$$.fragment,Lo),cx=p(Lo),jf=a(Lo,"P",{});var Qj=i(jf);px=s(Qj,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qj.forEach(t),hx=p(Lo),bl=a(Lo,"P",{});var v1=i(bl);mx=s(v1,"This model inherits from "),oh=a(v1,"A",{href:!0});var Vj=i(oh);fx=s(Vj,"PreTrainedModel"),Vj.forEach(t),ux=s(v1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v1.forEach(t),gx=p(Lo),kl=a(Lo,"P",{});var w1=i(kl);_x=s(w1,"This model is also a PyTorch "),yl=a(w1,"A",{href:!0,rel:!0});var Kj=i(yl);bx=s(Kj,"torch.nn.Module"),Kj.forEach(t),kx=s(w1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w1.forEach(t),yx=p(Lo),gt=a(Lo,"DIV",{class:!0});var Do=i(gt);v(Tl.$$.fragment,Do),Tx=p(Do),vn=a(Do,"P",{});var Jh=i(vn);vx=s(Jh,"The "),nh=a(Jh,"A",{href:!0});var Jj=i(nh);wx=s(Jj,"BertForTokenClassification"),Jj.forEach(t),$x=s(Jh," forward method, overrides the "),Cf=a(Jh,"CODE",{});var Gj=i(Cf);xx=s(Gj,"__call__"),Gj.forEach(t),Fx=s(Jh," special method."),Jh.forEach(t),Bx=p(Do),v(er.$$.fragment,Do),Ex=p(Do),v(tr.$$.fragment,Do),Mx=p(Do),v(or.$$.fragment,Do),Do.forEach(t),Lo.forEach(t),tk=p(o),wn=a(o,"H2",{class:!0});var $1=i(wn);nr=a($1,"A",{id:!0,class:!0,href:!0});var Xj=i(nr);Nf=a(Xj,"SPAN",{});var Yj=i(Nf);v(vl.$$.fragment,Yj),Yj.forEach(t),Xj.forEach(t),zx=p($1),Of=a($1,"SPAN",{});var Zj=i(Of);Px=s(Zj,"BertForQuestionAnswering"),Zj.forEach(t),$1.forEach(t),ok=p(o),ft=a(o,"DIV",{class:!0});var So=i(ft);v(wl.$$.fragment,So),qx=p(So),$n=a(So,"P",{});var Gh=i($n);jx=s(Gh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=a(Gh,"CODE",{});var e9=i(If);Cx=s(e9,"span start logits"),e9.forEach(t),Nx=s(Gh," and "),Af=a(Gh,"CODE",{});var t9=i(Af);Ox=s(t9,"span end logits"),t9.forEach(t),Ix=s(Gh,")."),Gh.forEach(t),Ax=p(So),$l=a(So,"P",{});var x1=i($l);Lx=s(x1,"This model inherits from "),sh=a(x1,"A",{href:!0});var o9=i(sh);Dx=s(o9,"PreTrainedModel"),o9.forEach(t),Sx=s(x1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x1.forEach(t),Ux=p(So),xl=a(So,"P",{});var F1=i(xl);Wx=s(F1,"This model is also a PyTorch "),Fl=a(F1,"A",{href:!0,rel:!0});var n9=i(Fl);Hx=s(n9,"torch.nn.Module"),n9.forEach(t),Rx=s(F1,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),F1.forEach(t),Qx=p(So),_t=a(So,"DIV",{class:!0});var Uo=i(_t);v(Bl.$$.fragment,Uo),Vx=p(Uo),xn=a(Uo,"P",{});var Xh=i(xn);Kx=s(Xh,"The "),rh=a(Xh,"A",{href:!0});var s9=i(rh);Jx=s(s9,"BertForQuestionAnswering"),s9.forEach(t),Gx=s(Xh," forward method, overrides the "),Lf=a(Xh,"CODE",{});var r9=i(Lf);Xx=s(r9,"__call__"),r9.forEach(t),Yx=s(Xh," special method."),Xh.forEach(t),Zx=p(Uo),v(sr.$$.fragment,Uo),eF=p(Uo),v(rr.$$.fragment,Uo),tF=p(Uo),v(ar.$$.fragment,Uo),Uo.forEach(t),So.forEach(t),nk=p(o),Fn=a(o,"H2",{class:!0});var B1=i(Fn);ir=a(B1,"A",{id:!0,class:!0,href:!0});var a9=i(ir);Df=a(a9,"SPAN",{});var i9=i(Df);v(El.$$.fragment,i9),i9.forEach(t),a9.forEach(t),oF=p(B1),Sf=a(B1,"SPAN",{});var l9=i(Sf);nF=s(l9,"TFBertModel"),l9.forEach(t),B1.forEach(t),sk=p(o),Je=a(o,"DIV",{class:!0});var no=i(Je);v(Ml.$$.fragment,no),sF=p(no),Uf=a(no,"P",{});var d9=i(Uf);rF=s(d9,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),d9.forEach(t),aF=p(no),zl=a(no,"P",{});var E1=i(zl);iF=s(E1,"This model inherits from "),ah=a(E1,"A",{href:!0});var c9=i(ah);lF=s(c9,"TFPreTrainedModel"),c9.forEach(t),dF=s(E1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),E1.forEach(t),cF=p(no),Pl=a(no,"P",{});var M1=i(Pl);pF=s(M1,"This model is also a "),ql=a(M1,"A",{href:!0,rel:!0});var p9=i(ql);hF=s(p9,"tf.keras.Model"),p9.forEach(t),mF=s(M1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),M1.forEach(t),fF=p(no),v(lr.$$.fragment,no),uF=p(no),Ht=a(no,"DIV",{class:!0});var wa=i(Ht);v(jl.$$.fragment,wa),gF=p(wa),Bn=a(wa,"P",{});var Yh=i(Bn);_F=s(Yh,"The "),ih=a(Yh,"A",{href:!0});var h9=i(ih);bF=s(h9,"TFBertModel"),h9.forEach(t),kF=s(Yh," forward method, overrides the "),Wf=a(Yh,"CODE",{});var m9=i(Wf);yF=s(m9,"__call__"),m9.forEach(t),TF=s(Yh," special method."),Yh.forEach(t),vF=p(wa),v(dr.$$.fragment,wa),wF=p(wa),v(cr.$$.fragment,wa),wa.forEach(t),no.forEach(t),rk=p(o),En=a(o,"H2",{class:!0});var z1=i(En);pr=a(z1,"A",{id:!0,class:!0,href:!0});var f9=i(pr);Hf=a(f9,"SPAN",{});var u9=i(Hf);v(Cl.$$.fragment,u9),u9.forEach(t),f9.forEach(t),$F=p(z1),Rf=a(z1,"SPAN",{});var g9=i(Rf);xF=s(g9,"TFBertForPreTraining"),g9.forEach(t),z1.forEach(t),ak=p(o),Ge=a(o,"DIV",{class:!0});var so=i(Ge);v(Nl.$$.fragment,so),FF=p(so),Mn=a(so,"P",{});var Zh=i(Mn);BF=s(Zh,`Bert Model with two heads on top as done during the pretraining:
a `),Qf=a(Zh,"CODE",{});var _9=i(Qf);EF=s(_9,"masked language modeling"),_9.forEach(t),MF=s(Zh," head and a "),Vf=a(Zh,"CODE",{});var b9=i(Vf);zF=s(b9,"next sentence prediction (classification)"),b9.forEach(t),PF=s(Zh," head."),Zh.forEach(t),qF=p(so),Ol=a(so,"P",{});var P1=i(Ol);jF=s(P1,"This model inherits from "),lh=a(P1,"A",{href:!0});var k9=i(lh);CF=s(k9,"TFPreTrainedModel"),k9.forEach(t),NF=s(P1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),P1.forEach(t),OF=p(so),Il=a(so,"P",{});var q1=i(Il);IF=s(q1,"This model is also a "),Al=a(q1,"A",{href:!0,rel:!0});var y9=i(Al);AF=s(y9,"tf.keras.Model"),y9.forEach(t),LF=s(q1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),q1.forEach(t),DF=p(so),v(hr.$$.fragment,so),SF=p(so),Rt=a(so,"DIV",{class:!0});var $a=i(Rt);v(Ll.$$.fragment,$a),UF=p($a),zn=a($a,"P",{});var em=i(zn);WF=s(em,"The "),dh=a(em,"A",{href:!0});var T9=i(dh);HF=s(T9,"TFBertForPreTraining"),T9.forEach(t),RF=s(em," forward method, overrides the "),Kf=a(em,"CODE",{});var v9=i(Kf);QF=s(v9,"__call__"),v9.forEach(t),VF=s(em," special method."),em.forEach(t),KF=p($a),v(mr.$$.fragment,$a),JF=p($a),v(fr.$$.fragment,$a),$a.forEach(t),so.forEach(t),ik=p(o),Pn=a(o,"H2",{class:!0});var j1=i(Pn);ur=a(j1,"A",{id:!0,class:!0,href:!0});var w9=i(ur);Jf=a(w9,"SPAN",{});var $9=i(Jf);v(Dl.$$.fragment,$9),$9.forEach(t),w9.forEach(t),GF=p(j1),Gf=a(j1,"SPAN",{});var x9=i(Gf);XF=s(x9,"TFBertModelLMHeadModel"),x9.forEach(t),j1.forEach(t),lk=p(o),qn=a(o,"DIV",{class:!0});var C1=i(qn);v(Sl.$$.fragment,C1),YF=p(C1),bt=a(C1,"DIV",{class:!0});var Wo=i(bt);v(Ul.$$.fragment,Wo),ZF=p(Wo),Ie=a(Wo,"P",{});var st=i(Ie);e0=s(st,"encoder_hidden_states  ("),Xf=a(st,"CODE",{});var F9=i(Xf);t0=s(F9,"tf.Tensor"),F9.forEach(t),o0=s(st," of shape "),Yf=a(st,"CODE",{});var B9=i(Yf);n0=s(B9,"(batch_size, sequence_length, hidden_size)"),B9.forEach(t),s0=s(st,", "),Zf=a(st,"EM",{});var E9=i(Zf);r0=s(E9,"optional"),E9.forEach(t),a0=s(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=a(st,"CODE",{});var M9=i(eu);i0=s(M9,"tf.Tensor"),M9.forEach(t),l0=s(st," of shape "),tu=a(st,"CODE",{});var z9=i(tu);d0=s(z9,"(batch_size, sequence_length)"),z9.forEach(t),c0=s(st,", "),ou=a(st,"EM",{});var P9=i(ou);p0=s(P9,"optional"),P9.forEach(t),h0=s(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=a(st,"CODE",{});var q9=i(nu);m0=s(q9,"[0, 1]"),q9.forEach(t),f0=s(st,":"),st.forEach(t),u0=p(Wo),Wl=a(Wo,"UL",{});var N1=i(Wl);Hl=a(N1,"LI",{});var O1=i(Hl);g0=s(O1,"1 for tokens that are "),su=a(O1,"STRONG",{});var j9=i(su);_0=s(j9,"not masked"),j9.forEach(t),b0=s(O1,","),O1.forEach(t),k0=p(N1),Rl=a(N1,"LI",{});var I1=i(Rl);y0=s(I1,"0 for tokens that are "),ru=a(I1,"STRONG",{});var C9=i(ru);T0=s(C9,"masked"),C9.forEach(t),v0=s(I1,"."),I1.forEach(t),N1.forEach(t),w0=p(Wo),G=a(Wo,"P",{});var Z=i(G);$0=s(Z,"past_key_values ("),au=a(Z,"CODE",{});var N9=i(au);x0=s(N9,"Tuple[Tuple[tf.Tensor]]"),N9.forEach(t),F0=s(Z," of length "),iu=a(Z,"CODE",{});var O9=i(iu);B0=s(O9,"config.n_layers"),O9.forEach(t),E0=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=a(Z,"CODE",{});var I9=i(lu);M0=s(I9,"past_key_values"),I9.forEach(t),z0=s(Z," are used, the user can optionally input only the last "),du=a(Z,"CODE",{});var A9=i(du);P0=s(A9,"decoder_input_ids"),A9.forEach(t),q0=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=a(Z,"CODE",{});var L9=i(cu);j0=s(L9,"(batch_size, 1)"),L9.forEach(t),C0=s(Z,` instead of all
`),pu=a(Z,"CODE",{});var D9=i(pu);N0=s(D9,"decoder_input_ids"),D9.forEach(t),O0=s(Z," of shape "),hu=a(Z,"CODE",{});var S9=i(hu);I0=s(S9,"(batch_size, sequence_length)"),S9.forEach(t),A0=s(Z,`.
use_cache (`),mu=a(Z,"CODE",{});var U9=i(mu);L0=s(U9,"bool"),U9.forEach(t),D0=s(Z,", "),fu=a(Z,"EM",{});var W9=i(fu);S0=s(W9,"optional"),W9.forEach(t),U0=s(Z,", defaults to "),uu=a(Z,"CODE",{});var H9=i(uu);W0=s(H9,"True"),H9.forEach(t),H0=s(Z,`):
If set to `),gu=a(Z,"CODE",{});var R9=i(gu);R0=s(R9,"True"),R9.forEach(t),Q0=s(Z,", "),_u=a(Z,"CODE",{});var Q9=i(_u);V0=s(Q9,"past_key_values"),Q9.forEach(t),K0=s(Z,` key value states are returned and can be used to speed up decoding (see
`),bu=a(Z,"CODE",{});var V9=i(bu);J0=s(V9,"past_key_values"),V9.forEach(t),G0=s(Z,"). Set to "),ku=a(Z,"CODE",{});var K9=i(ku);X0=s(K9,"False"),K9.forEach(t),Y0=s(Z," during training, "),yu=a(Z,"CODE",{});var J9=i(yu);Z0=s(J9,"True"),J9.forEach(t),eB=s(Z,` during generation
labels (`),Tu=a(Z,"CODE",{});var G9=i(Tu);tB=s(G9,"tf.Tensor"),G9.forEach(t),oB=s(Z," or "),vu=a(Z,"CODE",{});var X9=i(vu);nB=s(X9,"np.ndarray"),X9.forEach(t),sB=s(Z," of shape "),wu=a(Z,"CODE",{});var Y9=i(wu);rB=s(Y9,"(batch_size, sequence_length)"),Y9.forEach(t),aB=s(Z,", "),$u=a(Z,"EM",{});var Z9=i($u);iB=s(Z9,"optional"),Z9.forEach(t),lB=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),xu=a(Z,"CODE",{});var e3=i(xu);dB=s(e3,"[0, ..., config.vocab_size - 1]"),e3.forEach(t),cB=s(Z,"."),Z.forEach(t),pB=p(Wo),v(gr.$$.fragment,Wo),Wo.forEach(t),C1.forEach(t),dk=p(o),jn=a(o,"H2",{class:!0});var A1=i(jn);_r=a(A1,"A",{id:!0,class:!0,href:!0});var t3=i(_r);Fu=a(t3,"SPAN",{});var o3=i(Fu);v(Ql.$$.fragment,o3),o3.forEach(t),t3.forEach(t),hB=p(A1),Bu=a(A1,"SPAN",{});var n3=i(Bu);mB=s(n3,"TFBertForMaskedLM"),n3.forEach(t),A1.forEach(t),ck=p(o),Xe=a(o,"DIV",{class:!0});var ro=i(Xe);v(Vl.$$.fragment,ro),fB=p(ro),Kl=a(ro,"P",{});var L1=i(Kl);uB=s(L1,"Bert Model with a "),Eu=a(L1,"CODE",{});var s3=i(Eu);gB=s(s3,"language modeling"),s3.forEach(t),_B=s(L1," head on top."),L1.forEach(t),bB=p(ro),Jl=a(ro,"P",{});var D1=i(Jl);kB=s(D1,"This model inherits from "),ch=a(D1,"A",{href:!0});var r3=i(ch);yB=s(r3,"TFPreTrainedModel"),r3.forEach(t),TB=s(D1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D1.forEach(t),vB=p(ro),Gl=a(ro,"P",{});var S1=i(Gl);wB=s(S1,"This model is also a "),Xl=a(S1,"A",{href:!0,rel:!0});var a3=i(Xl);$B=s(a3,"tf.keras.Model"),a3.forEach(t),xB=s(S1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),S1.forEach(t),FB=p(ro),v(br.$$.fragment,ro),BB=p(ro),kt=a(ro,"DIV",{class:!0});var Ho=i(kt);v(Yl.$$.fragment,Ho),EB=p(Ho),Cn=a(Ho,"P",{});var tm=i(Cn);MB=s(tm,"The "),ph=a(tm,"A",{href:!0});var i3=i(ph);zB=s(i3,"TFBertForMaskedLM"),i3.forEach(t),PB=s(tm," forward method, overrides the "),Mu=a(tm,"CODE",{});var l3=i(Mu);qB=s(l3,"__call__"),l3.forEach(t),jB=s(tm," special method."),tm.forEach(t),CB=p(Ho),v(kr.$$.fragment,Ho),NB=p(Ho),v(yr.$$.fragment,Ho),OB=p(Ho),v(Tr.$$.fragment,Ho),Ho.forEach(t),ro.forEach(t),pk=p(o),Nn=a(o,"H2",{class:!0});var U1=i(Nn);vr=a(U1,"A",{id:!0,class:!0,href:!0});var d3=i(vr);zu=a(d3,"SPAN",{});var c3=i(zu);v(Zl.$$.fragment,c3),c3.forEach(t),d3.forEach(t),IB=p(U1),Pu=a(U1,"SPAN",{});var p3=i(Pu);AB=s(p3,"TFBertForNextSentencePrediction"),p3.forEach(t),U1.forEach(t),hk=p(o),Ye=a(o,"DIV",{class:!0});var ao=i(Ye);v(ed.$$.fragment,ao),LB=p(ao),td=a(ao,"P",{});var W1=i(td);DB=s(W1,"Bert Model with a "),qu=a(W1,"CODE",{});var h3=i(qu);SB=s(h3,"next sentence prediction (classification)"),h3.forEach(t),UB=s(W1," head on top."),W1.forEach(t),WB=p(ao),od=a(ao,"P",{});var H1=i(od);HB=s(H1,"This model inherits from "),hh=a(H1,"A",{href:!0});var m3=i(hh);RB=s(m3,"TFPreTrainedModel"),m3.forEach(t),QB=s(H1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H1.forEach(t),VB=p(ao),nd=a(ao,"P",{});var R1=i(nd);KB=s(R1,"This model is also a "),sd=a(R1,"A",{href:!0,rel:!0});var f3=i(sd);JB=s(f3,"tf.keras.Model"),f3.forEach(t),GB=s(R1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),R1.forEach(t),XB=p(ao),v(wr.$$.fragment,ao),YB=p(ao),Qt=a(ao,"DIV",{class:!0});var xa=i(Qt);v(rd.$$.fragment,xa),ZB=p(xa),On=a(xa,"P",{});var om=i(On);eE=s(om,"The "),mh=a(om,"A",{href:!0});var u3=i(mh);tE=s(u3,"TFBertForNextSentencePrediction"),u3.forEach(t),oE=s(om," forward method, overrides the "),ju=a(om,"CODE",{});var g3=i(ju);nE=s(g3,"__call__"),g3.forEach(t),sE=s(om," special method."),om.forEach(t),rE=p(xa),v($r.$$.fragment,xa),aE=p(xa),v(xr.$$.fragment,xa),xa.forEach(t),ao.forEach(t),mk=p(o),In=a(o,"H2",{class:!0});var Q1=i(In);Fr=a(Q1,"A",{id:!0,class:!0,href:!0});var _3=i(Fr);Cu=a(_3,"SPAN",{});var b3=i(Cu);v(ad.$$.fragment,b3),b3.forEach(t),_3.forEach(t),iE=p(Q1),Nu=a(Q1,"SPAN",{});var k3=i(Nu);lE=s(k3,"TFBertForSequenceClassification"),k3.forEach(t),Q1.forEach(t),fk=p(o),Ze=a(o,"DIV",{class:!0});var io=i(Ze);v(id.$$.fragment,io),dE=p(io),Ou=a(io,"P",{});var y3=i(Ou);cE=s(y3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),y3.forEach(t),pE=p(io),ld=a(io,"P",{});var V1=i(ld);hE=s(V1,"This model inherits from "),fh=a(V1,"A",{href:!0});var T3=i(fh);mE=s(T3,"TFPreTrainedModel"),T3.forEach(t),fE=s(V1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V1.forEach(t),uE=p(io),dd=a(io,"P",{});var K1=i(dd);gE=s(K1,"This model is also a "),cd=a(K1,"A",{href:!0,rel:!0});var v3=i(cd);_E=s(v3,"tf.keras.Model"),v3.forEach(t),bE=s(K1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K1.forEach(t),kE=p(io),v(Br.$$.fragment,io),yE=p(io),yt=a(io,"DIV",{class:!0});var Ro=i(yt);v(pd.$$.fragment,Ro),TE=p(Ro),An=a(Ro,"P",{});var nm=i(An);vE=s(nm,"The "),uh=a(nm,"A",{href:!0});var w3=i(uh);wE=s(w3,"TFBertForSequenceClassification"),w3.forEach(t),$E=s(nm," forward method, overrides the "),Iu=a(nm,"CODE",{});var $3=i(Iu);xE=s($3,"__call__"),$3.forEach(t),FE=s(nm," special method."),nm.forEach(t),BE=p(Ro),v(Er.$$.fragment,Ro),EE=p(Ro),v(Mr.$$.fragment,Ro),ME=p(Ro),v(zr.$$.fragment,Ro),Ro.forEach(t),io.forEach(t),uk=p(o),Ln=a(o,"H2",{class:!0});var J1=i(Ln);Pr=a(J1,"A",{id:!0,class:!0,href:!0});var x3=i(Pr);Au=a(x3,"SPAN",{});var F3=i(Au);v(hd.$$.fragment,F3),F3.forEach(t),x3.forEach(t),zE=p(J1),Lu=a(J1,"SPAN",{});var B3=i(Lu);PE=s(B3,"TFBertForMultipleChoice"),B3.forEach(t),J1.forEach(t),gk=p(o),et=a(o,"DIV",{class:!0});var lo=i(et);v(md.$$.fragment,lo),qE=p(lo),Du=a(lo,"P",{});var E3=i(Du);jE=s(E3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E3.forEach(t),CE=p(lo),fd=a(lo,"P",{});var G1=i(fd);NE=s(G1,"This model inherits from "),gh=a(G1,"A",{href:!0});var M3=i(gh);OE=s(M3,"TFPreTrainedModel"),M3.forEach(t),IE=s(G1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G1.forEach(t),AE=p(lo),ud=a(lo,"P",{});var X1=i(ud);LE=s(X1,"This model is also a "),gd=a(X1,"A",{href:!0,rel:!0});var z3=i(gd);DE=s(z3,"tf.keras.Model"),z3.forEach(t),SE=s(X1,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X1.forEach(t),UE=p(lo),v(qr.$$.fragment,lo),WE=p(lo),Vt=a(lo,"DIV",{class:!0});var Fa=i(Vt);v(_d.$$.fragment,Fa),HE=p(Fa),Dn=a(Fa,"P",{});var sm=i(Dn);RE=s(sm,"The "),_h=a(sm,"A",{href:!0});var P3=i(_h);QE=s(P3,"TFBertForMultipleChoice"),P3.forEach(t),VE=s(sm," forward method, overrides the "),Su=a(sm,"CODE",{});var q3=i(Su);KE=s(q3,"__call__"),q3.forEach(t),JE=s(sm," special method."),sm.forEach(t),GE=p(Fa),v(jr.$$.fragment,Fa),XE=p(Fa),v(Cr.$$.fragment,Fa),Fa.forEach(t),lo.forEach(t),_k=p(o),Sn=a(o,"H2",{class:!0});var Y1=i(Sn);Nr=a(Y1,"A",{id:!0,class:!0,href:!0});var j3=i(Nr);Uu=a(j3,"SPAN",{});var C3=i(Uu);v(bd.$$.fragment,C3),C3.forEach(t),j3.forEach(t),YE=p(Y1),Wu=a(Y1,"SPAN",{});var N3=i(Wu);ZE=s(N3,"TFBertForTokenClassification"),N3.forEach(t),Y1.forEach(t),bk=p(o),tt=a(o,"DIV",{class:!0});var co=i(tt);v(kd.$$.fragment,co),eM=p(co),Hu=a(co,"P",{});var O3=i(Hu);tM=s(O3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O3.forEach(t),oM=p(co),yd=a(co,"P",{});var Z1=i(yd);nM=s(Z1,"This model inherits from "),bh=a(Z1,"A",{href:!0});var I3=i(bh);sM=s(I3,"TFPreTrainedModel"),I3.forEach(t),rM=s(Z1,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z1.forEach(t),aM=p(co),Td=a(co,"P",{});var ey=i(Td);iM=s(ey,"This model is also a "),vd=a(ey,"A",{href:!0,rel:!0});var A3=i(vd);lM=s(A3,"tf.keras.Model"),A3.forEach(t),dM=s(ey,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ey.forEach(t),cM=p(co),v(Or.$$.fragment,co),pM=p(co),Tt=a(co,"DIV",{class:!0});var Qo=i(Tt);v(wd.$$.fragment,Qo),hM=p(Qo),Un=a(Qo,"P",{});var rm=i(Un);mM=s(rm,"The "),kh=a(rm,"A",{href:!0});var L3=i(kh);fM=s(L3,"TFBertForTokenClassification"),L3.forEach(t),uM=s(rm," forward method, overrides the "),Ru=a(rm,"CODE",{});var D3=i(Ru);gM=s(D3,"__call__"),D3.forEach(t),_M=s(rm," special method."),rm.forEach(t),bM=p(Qo),v(Ir.$$.fragment,Qo),kM=p(Qo),v(Ar.$$.fragment,Qo),yM=p(Qo),v(Lr.$$.fragment,Qo),Qo.forEach(t),co.forEach(t),kk=p(o),Wn=a(o,"H2",{class:!0});var ty=i(Wn);Dr=a(ty,"A",{id:!0,class:!0,href:!0});var S3=i(Dr);Qu=a(S3,"SPAN",{});var U3=i(Qu);v($d.$$.fragment,U3),U3.forEach(t),S3.forEach(t),TM=p(ty),Vu=a(ty,"SPAN",{});var W3=i(Vu);vM=s(W3,"TFBertForQuestionAnswering"),W3.forEach(t),ty.forEach(t),yk=p(o),ot=a(o,"DIV",{class:!0});var po=i(ot);v(xd.$$.fragment,po),wM=p(po),Hn=a(po,"P",{});var am=i(Hn);$M=s(am,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=a(am,"CODE",{});var H3=i(Ku);xM=s(H3,"span start logits"),H3.forEach(t),FM=s(am," and "),Ju=a(am,"CODE",{});var R3=i(Ju);BM=s(R3,"span end logits"),R3.forEach(t),EM=s(am,")."),am.forEach(t),MM=p(po),Fd=a(po,"P",{});var oy=i(Fd);zM=s(oy,"This model inherits from "),yh=a(oy,"A",{href:!0});var Q3=i(yh);PM=s(Q3,"TFPreTrainedModel"),Q3.forEach(t),qM=s(oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oy.forEach(t),jM=p(po),Bd=a(po,"P",{});var ny=i(Bd);CM=s(ny,"This model is also a "),Ed=a(ny,"A",{href:!0,rel:!0});var V3=i(Ed);NM=s(V3,"tf.keras.Model"),V3.forEach(t),OM=s(ny,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ny.forEach(t),IM=p(po),v(Sr.$$.fragment,po),AM=p(po),vt=a(po,"DIV",{class:!0});var Vo=i(vt);v(Md.$$.fragment,Vo),LM=p(Vo),Rn=a(Vo,"P",{});var im=i(Rn);DM=s(im,"The "),Th=a(im,"A",{href:!0});var K3=i(Th);SM=s(K3,"TFBertForQuestionAnswering"),K3.forEach(t),UM=s(im," forward method, overrides the "),Gu=a(im,"CODE",{});var J3=i(Gu);WM=s(J3,"__call__"),J3.forEach(t),HM=s(im," special method."),im.forEach(t),RM=p(Vo),v(Ur.$$.fragment,Vo),QM=p(Vo),v(Wr.$$.fragment,Vo),VM=p(Vo),v(Hr.$$.fragment,Vo),Vo.forEach(t),po.forEach(t),Tk=p(o),Qn=a(o,"H2",{class:!0});var sy=i(Qn);Rr=a(sy,"A",{id:!0,class:!0,href:!0});var G3=i(Rr);Xu=a(G3,"SPAN",{});var X3=i(Xu);v(zd.$$.fragment,X3),X3.forEach(t),G3.forEach(t),KM=p(sy),Yu=a(sy,"SPAN",{});var Y3=i(Yu);JM=s(Y3,"FlaxBertModel"),Y3.forEach(t),sy.forEach(t),vk=p(o),Ae=a(o,"DIV",{class:!0});var Ft=i(Ae);v(Pd.$$.fragment,Ft),GM=p(Ft),Zu=a(Ft,"P",{});var Z3=i(Zu);XM=s(Z3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Z3.forEach(t),YM=p(Ft),qd=a(Ft,"P",{});var ry=i(qd);ZM=s(ry,"This model inherits from "),vh=a(ry,"A",{href:!0});var eC=i(vh);ez=s(eC,"FlaxPreTrainedModel"),eC.forEach(t),tz=s(ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ry.forEach(t),oz=p(Ft),jd=a(Ft,"P",{});var ay=i(jd);nz=s(ay,"This model is also a Flax Linen "),Cd=a(ay,"A",{href:!0,rel:!0});var tC=i(Cd);sz=s(tC,"flax.linen.Module"),tC.forEach(t),rz=s(ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ay.forEach(t),az=p(Ft),eg=a(Ft,"P",{});var oC=i(eg);iz=s(oC,"Finally, this model supports inherent JAX features such as:"),oC.forEach(t),lz=p(Ft),fo=a(Ft,"UL",{});var Ba=i(fo);tg=a(Ba,"LI",{});var nC=i(tg);Nd=a(nC,"A",{href:!0,rel:!0});var sC=i(Nd);dz=s(sC,"Just-In-Time (JIT) compilation"),sC.forEach(t),nC.forEach(t),cz=p(Ba),og=a(Ba,"LI",{});var rC=i(og);Od=a(rC,"A",{href:!0,rel:!0});var aC=i(Od);pz=s(aC,"Automatic Differentiation"),aC.forEach(t),rC.forEach(t),hz=p(Ba),ng=a(Ba,"LI",{});var iC=i(ng);Id=a(iC,"A",{href:!0,rel:!0});var lC=i(Id);mz=s(lC,"Vectorization"),lC.forEach(t),iC.forEach(t),fz=p(Ba),sg=a(Ba,"LI",{});var dC=i(sg);Ad=a(dC,"A",{href:!0,rel:!0});var cC=i(Ad);uz=s(cC,"Parallelization"),cC.forEach(t),dC.forEach(t),Ba.forEach(t),gz=p(Ft),Kt=a(Ft,"DIV",{class:!0});var Ea=i(Kt);v(Ld.$$.fragment,Ea),_z=p(Ea),Vn=a(Ea,"P",{});var lm=i(Vn);bz=s(lm,"The "),rg=a(lm,"CODE",{});var pC=i(rg);kz=s(pC,"FlaxBertPreTrainedModel"),pC.forEach(t),yz=s(lm," forward method, overrides the "),ag=a(lm,"CODE",{});var hC=i(ag);Tz=s(hC,"__call__"),hC.forEach(t),vz=s(lm," special method."),lm.forEach(t),wz=p(Ea),v(Qr.$$.fragment,Ea),$z=p(Ea),v(Vr.$$.fragment,Ea),Ea.forEach(t),Ft.forEach(t),wk=p(o),Kn=a(o,"H2",{class:!0});var iy=i(Kn);Kr=a(iy,"A",{id:!0,class:!0,href:!0});var mC=i(Kr);ig=a(mC,"SPAN",{});var fC=i(ig);v(Dd.$$.fragment,fC),fC.forEach(t),mC.forEach(t),xz=p(iy),lg=a(iy,"SPAN",{});var uC=i(lg);Fz=s(uC,"FlaxBertForPreTraining"),uC.forEach(t),iy.forEach(t),$k=p(o),Le=a(o,"DIV",{class:!0});var Bt=i(Le);v(Sd.$$.fragment,Bt),Bz=p(Bt),Jn=a(Bt,"P",{});var dm=i(Jn);Ez=s(dm,"Bert Model with two heads on top as done during the pretraining: a "),dg=a(dm,"CODE",{});var gC=i(dg);Mz=s(gC,"masked language modeling"),gC.forEach(t),zz=s(dm," head and a "),cg=a(dm,"CODE",{});var _C=i(cg);Pz=s(_C,"next sentence prediction (classification)"),_C.forEach(t),qz=s(dm," head."),dm.forEach(t),jz=p(Bt),Ud=a(Bt,"P",{});var ly=i(Ud);Cz=s(ly,"This model inherits from "),wh=a(ly,"A",{href:!0});var bC=i(wh);Nz=s(bC,"FlaxPreTrainedModel"),bC.forEach(t),Oz=s(ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ly.forEach(t),Iz=p(Bt),Wd=a(Bt,"P",{});var dy=i(Wd);Az=s(dy,"This model is also a Flax Linen "),Hd=a(dy,"A",{href:!0,rel:!0});var kC=i(Hd);Lz=s(kC,"flax.linen.Module"),kC.forEach(t),Dz=s(dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dy.forEach(t),Sz=p(Bt),pg=a(Bt,"P",{});var yC=i(pg);Uz=s(yC,"Finally, this model supports inherent JAX features such as:"),yC.forEach(t),Wz=p(Bt),uo=a(Bt,"UL",{});var Ma=i(uo);hg=a(Ma,"LI",{});var TC=i(hg);Rd=a(TC,"A",{href:!0,rel:!0});var vC=i(Rd);Hz=s(vC,"Just-In-Time (JIT) compilation"),vC.forEach(t),TC.forEach(t),Rz=p(Ma),mg=a(Ma,"LI",{});var wC=i(mg);Qd=a(wC,"A",{href:!0,rel:!0});var $C=i(Qd);Qz=s($C,"Automatic Differentiation"),$C.forEach(t),wC.forEach(t),Vz=p(Ma),fg=a(Ma,"LI",{});var xC=i(fg);Vd=a(xC,"A",{href:!0,rel:!0});var FC=i(Vd);Kz=s(FC,"Vectorization"),FC.forEach(t),xC.forEach(t),Jz=p(Ma),ug=a(Ma,"LI",{});var BC=i(ug);Kd=a(BC,"A",{href:!0,rel:!0});var EC=i(Kd);Gz=s(EC,"Parallelization"),EC.forEach(t),BC.forEach(t),Ma.forEach(t),Xz=p(Bt),Jt=a(Bt,"DIV",{class:!0});var za=i(Jt);v(Jd.$$.fragment,za),Yz=p(za),Gn=a(za,"P",{});var cm=i(Gn);Zz=s(cm,"The "),gg=a(cm,"CODE",{});var MC=i(gg);e4=s(MC,"FlaxBertPreTrainedModel"),MC.forEach(t),t4=s(cm," forward method, overrides the "),_g=a(cm,"CODE",{});var zC=i(_g);o4=s(zC,"__call__"),zC.forEach(t),n4=s(cm," special method."),cm.forEach(t),s4=p(za),v(Jr.$$.fragment,za),r4=p(za),v(Gr.$$.fragment,za),za.forEach(t),Bt.forEach(t),xk=p(o),Xn=a(o,"H2",{class:!0});var cy=i(Xn);Xr=a(cy,"A",{id:!0,class:!0,href:!0});var PC=i(Xr);bg=a(PC,"SPAN",{});var qC=i(bg);v(Gd.$$.fragment,qC),qC.forEach(t),PC.forEach(t),a4=p(cy),kg=a(cy,"SPAN",{});var jC=i(kg);i4=s(jC,"FlaxBertForCausalLM"),jC.forEach(t),cy.forEach(t),Fk=p(o),De=a(o,"DIV",{class:!0});var Et=i(De);v(Xd.$$.fragment,Et),l4=p(Et),yg=a(Et,"P",{});var CC=i(yg);d4=s(CC,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),CC.forEach(t),c4=p(Et),Yd=a(Et,"P",{});var py=i(Yd);p4=s(py,"This model inherits from "),$h=a(py,"A",{href:!0});var NC=i($h);h4=s(NC,"FlaxPreTrainedModel"),NC.forEach(t),m4=s(py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),py.forEach(t),f4=p(Et),Zd=a(Et,"P",{});var hy=i(Zd);u4=s(hy,"This model is also a Flax Linen "),ec=a(hy,"A",{href:!0,rel:!0});var OC=i(ec);g4=s(OC,"flax.linen.Module"),OC.forEach(t),_4=s(hy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hy.forEach(t),b4=p(Et),Tg=a(Et,"P",{});var IC=i(Tg);k4=s(IC,"Finally, this model supports inherent JAX features such as:"),IC.forEach(t),y4=p(Et),go=a(Et,"UL",{});var Pa=i(go);vg=a(Pa,"LI",{});var AC=i(vg);tc=a(AC,"A",{href:!0,rel:!0});var LC=i(tc);T4=s(LC,"Just-In-Time (JIT) compilation"),LC.forEach(t),AC.forEach(t),v4=p(Pa),wg=a(Pa,"LI",{});var DC=i(wg);oc=a(DC,"A",{href:!0,rel:!0});var SC=i(oc);w4=s(SC,"Automatic Differentiation"),SC.forEach(t),DC.forEach(t),$4=p(Pa),$g=a(Pa,"LI",{});var UC=i($g);nc=a(UC,"A",{href:!0,rel:!0});var WC=i(nc);x4=s(WC,"Vectorization"),WC.forEach(t),UC.forEach(t),F4=p(Pa),xg=a(Pa,"LI",{});var HC=i(xg);sc=a(HC,"A",{href:!0,rel:!0});var RC=i(sc);B4=s(RC,"Parallelization"),RC.forEach(t),HC.forEach(t),Pa.forEach(t),E4=p(Et),Gt=a(Et,"DIV",{class:!0});var qa=i(Gt);v(rc.$$.fragment,qa),M4=p(qa),Yn=a(qa,"P",{});var pm=i(Yn);z4=s(pm,"The "),Fg=a(pm,"CODE",{});var QC=i(Fg);P4=s(QC,"FlaxBertPreTrainedModel"),QC.forEach(t),q4=s(pm," forward method, overrides the "),Bg=a(pm,"CODE",{});var VC=i(Bg);j4=s(VC,"__call__"),VC.forEach(t),C4=s(pm," special method."),pm.forEach(t),N4=p(qa),v(Yr.$$.fragment,qa),O4=p(qa),v(Zr.$$.fragment,qa),qa.forEach(t),Et.forEach(t),Bk=p(o),Zn=a(o,"H2",{class:!0});var my=i(Zn);ea=a(my,"A",{id:!0,class:!0,href:!0});var KC=i(ea);Eg=a(KC,"SPAN",{});var JC=i(Eg);v(ac.$$.fragment,JC),JC.forEach(t),KC.forEach(t),I4=p(my),Mg=a(my,"SPAN",{});var GC=i(Mg);A4=s(GC,"FlaxBertForMaskedLM"),GC.forEach(t),my.forEach(t),Ek=p(o),Se=a(o,"DIV",{class:!0});var Mt=i(Se);v(ic.$$.fragment,Mt),L4=p(Mt),lc=a(Mt,"P",{});var fy=i(lc);D4=s(fy,"Bert Model with a "),zg=a(fy,"CODE",{});var XC=i(zg);S4=s(XC,"language modeling"),XC.forEach(t),U4=s(fy," head on top."),fy.forEach(t),W4=p(Mt),dc=a(Mt,"P",{});var uy=i(dc);H4=s(uy,"This model inherits from "),xh=a(uy,"A",{href:!0});var YC=i(xh);R4=s(YC,"FlaxPreTrainedModel"),YC.forEach(t),Q4=s(uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uy.forEach(t),V4=p(Mt),cc=a(Mt,"P",{});var gy=i(cc);K4=s(gy,"This model is also a Flax Linen "),pc=a(gy,"A",{href:!0,rel:!0});var ZC=i(pc);J4=s(ZC,"flax.linen.Module"),ZC.forEach(t),G4=s(gy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gy.forEach(t),X4=p(Mt),Pg=a(Mt,"P",{});var e6=i(Pg);Y4=s(e6,"Finally, this model supports inherent JAX features such as:"),e6.forEach(t),Z4=p(Mt),_o=a(Mt,"UL",{});var ja=i(_o);qg=a(ja,"LI",{});var t6=i(qg);hc=a(t6,"A",{href:!0,rel:!0});var o6=i(hc);eP=s(o6,"Just-In-Time (JIT) compilation"),o6.forEach(t),t6.forEach(t),tP=p(ja),jg=a(ja,"LI",{});var n6=i(jg);mc=a(n6,"A",{href:!0,rel:!0});var s6=i(mc);oP=s(s6,"Automatic Differentiation"),s6.forEach(t),n6.forEach(t),nP=p(ja),Cg=a(ja,"LI",{});var r6=i(Cg);fc=a(r6,"A",{href:!0,rel:!0});var a6=i(fc);sP=s(a6,"Vectorization"),a6.forEach(t),r6.forEach(t),rP=p(ja),Ng=a(ja,"LI",{});var i6=i(Ng);uc=a(i6,"A",{href:!0,rel:!0});var l6=i(uc);aP=s(l6,"Parallelization"),l6.forEach(t),i6.forEach(t),ja.forEach(t),iP=p(Mt),Xt=a(Mt,"DIV",{class:!0});var Ca=i(Xt);v(gc.$$.fragment,Ca),lP=p(Ca),es=a(Ca,"P",{});var hm=i(es);dP=s(hm,"The "),Og=a(hm,"CODE",{});var d6=i(Og);cP=s(d6,"FlaxBertPreTrainedModel"),d6.forEach(t),pP=s(hm," forward method, overrides the "),Ig=a(hm,"CODE",{});var c6=i(Ig);hP=s(c6,"__call__"),c6.forEach(t),mP=s(hm," special method."),hm.forEach(t),fP=p(Ca),v(ta.$$.fragment,Ca),uP=p(Ca),v(oa.$$.fragment,Ca),Ca.forEach(t),Mt.forEach(t),Mk=p(o),ts=a(o,"H2",{class:!0});var _y=i(ts);na=a(_y,"A",{id:!0,class:!0,href:!0});var p6=i(na);Ag=a(p6,"SPAN",{});var h6=i(Ag);v(_c.$$.fragment,h6),h6.forEach(t),p6.forEach(t),gP=p(_y),Lg=a(_y,"SPAN",{});var m6=i(Lg);_P=s(m6,"FlaxBertForNextSentencePrediction"),m6.forEach(t),_y.forEach(t),zk=p(o),Ue=a(o,"DIV",{class:!0});var zt=i(Ue);v(bc.$$.fragment,zt),bP=p(zt),kc=a(zt,"P",{});var by=i(kc);kP=s(by,"Bert Model with a "),Dg=a(by,"CODE",{});var f6=i(Dg);yP=s(f6,"next sentence prediction (classification)"),f6.forEach(t),TP=s(by," head on top."),by.forEach(t),vP=p(zt),yc=a(zt,"P",{});var ky=i(yc);wP=s(ky,"This model inherits from "),Fh=a(ky,"A",{href:!0});var u6=i(Fh);$P=s(u6,"FlaxPreTrainedModel"),u6.forEach(t),xP=s(ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ky.forEach(t),FP=p(zt),Tc=a(zt,"P",{});var yy=i(Tc);BP=s(yy,"This model is also a Flax Linen "),vc=a(yy,"A",{href:!0,rel:!0});var g6=i(vc);EP=s(g6,"flax.linen.Module"),g6.forEach(t),MP=s(yy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yy.forEach(t),zP=p(zt),Sg=a(zt,"P",{});var _6=i(Sg);PP=s(_6,"Finally, this model supports inherent JAX features such as:"),_6.forEach(t),qP=p(zt),bo=a(zt,"UL",{});var Na=i(bo);Ug=a(Na,"LI",{});var b6=i(Ug);wc=a(b6,"A",{href:!0,rel:!0});var k6=i(wc);jP=s(k6,"Just-In-Time (JIT) compilation"),k6.forEach(t),b6.forEach(t),CP=p(Na),Wg=a(Na,"LI",{});var y6=i(Wg);$c=a(y6,"A",{href:!0,rel:!0});var T6=i($c);NP=s(T6,"Automatic Differentiation"),T6.forEach(t),y6.forEach(t),OP=p(Na),Hg=a(Na,"LI",{});var v6=i(Hg);xc=a(v6,"A",{href:!0,rel:!0});var w6=i(xc);IP=s(w6,"Vectorization"),w6.forEach(t),v6.forEach(t),AP=p(Na),Rg=a(Na,"LI",{});var $6=i(Rg);Fc=a($6,"A",{href:!0,rel:!0});var x6=i(Fc);LP=s(x6,"Parallelization"),x6.forEach(t),$6.forEach(t),Na.forEach(t),DP=p(zt),Yt=a(zt,"DIV",{class:!0});var Oa=i(Yt);v(Bc.$$.fragment,Oa),SP=p(Oa),os=a(Oa,"P",{});var mm=i(os);UP=s(mm,"The "),Qg=a(mm,"CODE",{});var F6=i(Qg);WP=s(F6,"FlaxBertPreTrainedModel"),F6.forEach(t),HP=s(mm," forward method, overrides the "),Vg=a(mm,"CODE",{});var B6=i(Vg);RP=s(B6,"__call__"),B6.forEach(t),QP=s(mm," special method."),mm.forEach(t),VP=p(Oa),v(sa.$$.fragment,Oa),KP=p(Oa),v(ra.$$.fragment,Oa),Oa.forEach(t),zt.forEach(t),Pk=p(o),ns=a(o,"H2",{class:!0});var Ty=i(ns);aa=a(Ty,"A",{id:!0,class:!0,href:!0});var E6=i(aa);Kg=a(E6,"SPAN",{});var M6=i(Kg);v(Ec.$$.fragment,M6),M6.forEach(t),E6.forEach(t),JP=p(Ty),Jg=a(Ty,"SPAN",{});var z6=i(Jg);GP=s(z6,"FlaxBertForSequenceClassification"),z6.forEach(t),Ty.forEach(t),qk=p(o),We=a(o,"DIV",{class:!0});var Pt=i(We);v(Mc.$$.fragment,Pt),XP=p(Pt),Gg=a(Pt,"P",{});var P6=i(Gg);YP=s(P6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),P6.forEach(t),ZP=p(Pt),zc=a(Pt,"P",{});var vy=i(zc);eq=s(vy,"This model inherits from "),Bh=a(vy,"A",{href:!0});var q6=i(Bh);tq=s(q6,"FlaxPreTrainedModel"),q6.forEach(t),oq=s(vy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vy.forEach(t),nq=p(Pt),Pc=a(Pt,"P",{});var wy=i(Pc);sq=s(wy,"This model is also a Flax Linen "),qc=a(wy,"A",{href:!0,rel:!0});var j6=i(qc);rq=s(j6,"flax.linen.Module"),j6.forEach(t),aq=s(wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wy.forEach(t),iq=p(Pt),Xg=a(Pt,"P",{});var C6=i(Xg);lq=s(C6,"Finally, this model supports inherent JAX features such as:"),C6.forEach(t),dq=p(Pt),ko=a(Pt,"UL",{});var Ia=i(ko);Yg=a(Ia,"LI",{});var N6=i(Yg);jc=a(N6,"A",{href:!0,rel:!0});var O6=i(jc);cq=s(O6,"Just-In-Time (JIT) compilation"),O6.forEach(t),N6.forEach(t),pq=p(Ia),Zg=a(Ia,"LI",{});var I6=i(Zg);Cc=a(I6,"A",{href:!0,rel:!0});var A6=i(Cc);hq=s(A6,"Automatic Differentiation"),A6.forEach(t),I6.forEach(t),mq=p(Ia),e_=a(Ia,"LI",{});var L6=i(e_);Nc=a(L6,"A",{href:!0,rel:!0});var D6=i(Nc);fq=s(D6,"Vectorization"),D6.forEach(t),L6.forEach(t),uq=p(Ia),t_=a(Ia,"LI",{});var S6=i(t_);Oc=a(S6,"A",{href:!0,rel:!0});var U6=i(Oc);gq=s(U6,"Parallelization"),U6.forEach(t),S6.forEach(t),Ia.forEach(t),_q=p(Pt),Zt=a(Pt,"DIV",{class:!0});var Aa=i(Zt);v(Ic.$$.fragment,Aa),bq=p(Aa),ss=a(Aa,"P",{});var fm=i(ss);kq=s(fm,"The "),o_=a(fm,"CODE",{});var W6=i(o_);yq=s(W6,"FlaxBertPreTrainedModel"),W6.forEach(t),Tq=s(fm," forward method, overrides the "),n_=a(fm,"CODE",{});var H6=i(n_);vq=s(H6,"__call__"),H6.forEach(t),wq=s(fm," special method."),fm.forEach(t),$q=p(Aa),v(ia.$$.fragment,Aa),xq=p(Aa),v(la.$$.fragment,Aa),Aa.forEach(t),Pt.forEach(t),jk=p(o),rs=a(o,"H2",{class:!0});var $y=i(rs);da=a($y,"A",{id:!0,class:!0,href:!0});var R6=i(da);s_=a(R6,"SPAN",{});var Q6=i(s_);v(Ac.$$.fragment,Q6),Q6.forEach(t),R6.forEach(t),Fq=p($y),r_=a($y,"SPAN",{});var V6=i(r_);Bq=s(V6,"FlaxBertForMultipleChoice"),V6.forEach(t),$y.forEach(t),Ck=p(o),He=a(o,"DIV",{class:!0});var qt=i(He);v(Lc.$$.fragment,qt),Eq=p(qt),a_=a(qt,"P",{});var K6=i(a_);Mq=s(K6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),K6.forEach(t),zq=p(qt),Dc=a(qt,"P",{});var xy=i(Dc);Pq=s(xy,"This model inherits from "),Eh=a(xy,"A",{href:!0});var J6=i(Eh);qq=s(J6,"FlaxPreTrainedModel"),J6.forEach(t),jq=s(xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xy.forEach(t),Cq=p(qt),Sc=a(qt,"P",{});var Fy=i(Sc);Nq=s(Fy,"This model is also a Flax Linen "),Uc=a(Fy,"A",{href:!0,rel:!0});var G6=i(Uc);Oq=s(G6,"flax.linen.Module"),G6.forEach(t),Iq=s(Fy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fy.forEach(t),Aq=p(qt),i_=a(qt,"P",{});var X6=i(i_);Lq=s(X6,"Finally, this model supports inherent JAX features such as:"),X6.forEach(t),Dq=p(qt),yo=a(qt,"UL",{});var La=i(yo);l_=a(La,"LI",{});var Y6=i(l_);Wc=a(Y6,"A",{href:!0,rel:!0});var Z6=i(Wc);Sq=s(Z6,"Just-In-Time (JIT) compilation"),Z6.forEach(t),Y6.forEach(t),Uq=p(La),d_=a(La,"LI",{});var e5=i(d_);Hc=a(e5,"A",{href:!0,rel:!0});var t5=i(Hc);Wq=s(t5,"Automatic Differentiation"),t5.forEach(t),e5.forEach(t),Hq=p(La),c_=a(La,"LI",{});var o5=i(c_);Rc=a(o5,"A",{href:!0,rel:!0});var n5=i(Rc);Rq=s(n5,"Vectorization"),n5.forEach(t),o5.forEach(t),Qq=p(La),p_=a(La,"LI",{});var s5=i(p_);Qc=a(s5,"A",{href:!0,rel:!0});var r5=i(Qc);Vq=s(r5,"Parallelization"),r5.forEach(t),s5.forEach(t),La.forEach(t),Kq=p(qt),eo=a(qt,"DIV",{class:!0});var Da=i(eo);v(Vc.$$.fragment,Da),Jq=p(Da),as=a(Da,"P",{});var um=i(as);Gq=s(um,"The "),h_=a(um,"CODE",{});var a5=i(h_);Xq=s(a5,"FlaxBertPreTrainedModel"),a5.forEach(t),Yq=s(um," forward method, overrides the "),m_=a(um,"CODE",{});var i5=i(m_);Zq=s(i5,"__call__"),i5.forEach(t),e8=s(um," special method."),um.forEach(t),t8=p(Da),v(ca.$$.fragment,Da),o8=p(Da),v(pa.$$.fragment,Da),Da.forEach(t),qt.forEach(t),Nk=p(o),is=a(o,"H2",{class:!0});var By=i(is);ha=a(By,"A",{id:!0,class:!0,href:!0});var l5=i(ha);f_=a(l5,"SPAN",{});var d5=i(f_);v(Kc.$$.fragment,d5),d5.forEach(t),l5.forEach(t),n8=p(By),u_=a(By,"SPAN",{});var c5=i(u_);s8=s(c5,"FlaxBertForTokenClassification"),c5.forEach(t),By.forEach(t),Ok=p(o),Re=a(o,"DIV",{class:!0});var jt=i(Re);v(Jc.$$.fragment,jt),r8=p(jt),g_=a(jt,"P",{});var p5=i(g_);a8=s(p5,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p5.forEach(t),i8=p(jt),Gc=a(jt,"P",{});var Ey=i(Gc);l8=s(Ey,"This model inherits from "),Mh=a(Ey,"A",{href:!0});var h5=i(Mh);d8=s(h5,"FlaxPreTrainedModel"),h5.forEach(t),c8=s(Ey,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ey.forEach(t),p8=p(jt),Xc=a(jt,"P",{});var My=i(Xc);h8=s(My,"This model is also a Flax Linen "),Yc=a(My,"A",{href:!0,rel:!0});var m5=i(Yc);m8=s(m5,"flax.linen.Module"),m5.forEach(t),f8=s(My,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),My.forEach(t),u8=p(jt),__=a(jt,"P",{});var f5=i(__);g8=s(f5,"Finally, this model supports inherent JAX features such as:"),f5.forEach(t),_8=p(jt),To=a(jt,"UL",{});var Sa=i(To);b_=a(Sa,"LI",{});var u5=i(b_);Zc=a(u5,"A",{href:!0,rel:!0});var g5=i(Zc);b8=s(g5,"Just-In-Time (JIT) compilation"),g5.forEach(t),u5.forEach(t),k8=p(Sa),k_=a(Sa,"LI",{});var _5=i(k_);ep=a(_5,"A",{href:!0,rel:!0});var b5=i(ep);y8=s(b5,"Automatic Differentiation"),b5.forEach(t),_5.forEach(t),T8=p(Sa),y_=a(Sa,"LI",{});var k5=i(y_);tp=a(k5,"A",{href:!0,rel:!0});var y5=i(tp);v8=s(y5,"Vectorization"),y5.forEach(t),k5.forEach(t),w8=p(Sa),T_=a(Sa,"LI",{});var T5=i(T_);op=a(T5,"A",{href:!0,rel:!0});var v5=i(op);$8=s(v5,"Parallelization"),v5.forEach(t),T5.forEach(t),Sa.forEach(t),x8=p(jt),to=a(jt,"DIV",{class:!0});var Ua=i(to);v(np.$$.fragment,Ua),F8=p(Ua),ls=a(Ua,"P",{});var gm=i(ls);B8=s(gm,"The "),v_=a(gm,"CODE",{});var w5=i(v_);E8=s(w5,"FlaxBertPreTrainedModel"),w5.forEach(t),M8=s(gm," forward method, overrides the "),w_=a(gm,"CODE",{});var $5=i(w_);z8=s($5,"__call__"),$5.forEach(t),P8=s(gm," special method."),gm.forEach(t),q8=p(Ua),v(ma.$$.fragment,Ua),j8=p(Ua),v(fa.$$.fragment,Ua),Ua.forEach(t),jt.forEach(t),Ik=p(o),ds=a(o,"H2",{class:!0});var zy=i(ds);ua=a(zy,"A",{id:!0,class:!0,href:!0});var x5=i(ua);$_=a(x5,"SPAN",{});var F5=i($_);v(sp.$$.fragment,F5),F5.forEach(t),x5.forEach(t),C8=p(zy),x_=a(zy,"SPAN",{});var B5=i(x_);N8=s(B5,"FlaxBertForQuestionAnswering"),B5.forEach(t),zy.forEach(t),Ak=p(o),Qe=a(o,"DIV",{class:!0});var Ct=i(Qe);v(rp.$$.fragment,Ct),O8=p(Ct),cs=a(Ct,"P",{});var _m=i(cs);I8=s(_m,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),F_=a(_m,"CODE",{});var E5=i(F_);A8=s(E5,"span start logits"),E5.forEach(t),L8=s(_m," and "),B_=a(_m,"CODE",{});var M5=i(B_);D8=s(M5,"span end logits"),M5.forEach(t),S8=s(_m,")."),_m.forEach(t),U8=p(Ct),ap=a(Ct,"P",{});var Py=i(ap);W8=s(Py,"This model inherits from "),zh=a(Py,"A",{href:!0});var z5=i(zh);H8=s(z5,"FlaxPreTrainedModel"),z5.forEach(t),R8=s(Py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Py.forEach(t),Q8=p(Ct),ip=a(Ct,"P",{});var qy=i(ip);V8=s(qy,"This model is also a Flax Linen "),lp=a(qy,"A",{href:!0,rel:!0});var P5=i(lp);K8=s(P5,"flax.linen.Module"),P5.forEach(t),J8=s(qy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qy.forEach(t),G8=p(Ct),E_=a(Ct,"P",{});var q5=i(E_);X8=s(q5,"Finally, this model supports inherent JAX features such as:"),q5.forEach(t),Y8=p(Ct),vo=a(Ct,"UL",{});var Wa=i(vo);M_=a(Wa,"LI",{});var j5=i(M_);dp=a(j5,"A",{href:!0,rel:!0});var C5=i(dp);Z8=s(C5,"Just-In-Time (JIT) compilation"),C5.forEach(t),j5.forEach(t),e7=p(Wa),z_=a(Wa,"LI",{});var N5=i(z_);cp=a(N5,"A",{href:!0,rel:!0});var O5=i(cp);t7=s(O5,"Automatic Differentiation"),O5.forEach(t),N5.forEach(t),o7=p(Wa),P_=a(Wa,"LI",{});var I5=i(P_);pp=a(I5,"A",{href:!0,rel:!0});var A5=i(pp);n7=s(A5,"Vectorization"),A5.forEach(t),I5.forEach(t),s7=p(Wa),q_=a(Wa,"LI",{});var L5=i(q_);hp=a(L5,"A",{href:!0,rel:!0});var D5=i(hp);r7=s(D5,"Parallelization"),D5.forEach(t),L5.forEach(t),Wa.forEach(t),a7=p(Ct),oo=a(Ct,"DIV",{class:!0});var Ha=i(oo);v(mp.$$.fragment,Ha),i7=p(Ha),ps=a(Ha,"P",{});var bm=i(ps);l7=s(bm,"The "),j_=a(bm,"CODE",{});var S5=i(j_);d7=s(S5,"FlaxBertPreTrainedModel"),S5.forEach(t),c7=s(bm," forward method, overrides the "),C_=a(bm,"CODE",{});var U5=i(C_);p7=s(U5,"__call__"),U5.forEach(t),h7=s(bm," special method."),bm.forEach(t),m7=p(Ha),v(ga.$$.fragment,Ha),f7=p(Ha),v(_a.$$.fragment,Ha),Ha.forEach(t),Ct.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_O)),u(h,"id","bert"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#bert"),u(m,"class","relative group"),u(ne,"id","overview"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Ee,"href","https://github.com/google-research/bert"),u(Ee,"rel","nofollow"),u(Fe,"id","transformers.BertConfig"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.BertConfig"),u(xe,"class","relative group"),u(Ep,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertModel"),u(Mp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertModel"),u(Qa,"href","https://huggingface.co/bert-base-uncased"),u(Qa,"rel","nofollow"),u(zp,"href","/docs/transformers/pr_17918/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pp,"href","/docs/transformers/pr_17918/en/main_classes/configuration#transformers.PretrainedConfig"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.BertTokenizer"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.BertTokenizer"),u(Jo,"class","relative group"),u(qp,"href","/docs/transformers/pr_17918/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Np,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ts,"id","transformers.BertTokenizerFast"),u(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ts,"href","#transformers.BertTokenizerFast"),u(Xo,"class","relative group"),u(Op,"href","/docs/transformers/pr_17918/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.TFBertTokenizer"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.TFBertTokenizer"),u(Zo,"class","relative group"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fs,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fs,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(on,"class","relative group"),u(Lp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForPreTraining"),u(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForPreTraining"),u(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForPreTraining"),u(Bs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Es,"id","transformers.BertModel"),u(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Es,"href","#transformers.BertModel"),u(rn,"class","relative group"),u(Up,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(Bi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Bi,"rel","nofollow"),u(Mi,"href","https://arxiv.org/abs/1706.03762"),u(Mi,"rel","nofollow"),u(Wp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertModel"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ps,"id","transformers.BertForPreTraining"),u(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ps,"href","#transformers.BertForPreTraining"),u(ln,"class","relative group"),u(Hp,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(Rp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForPreTraining"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.BertLMHeadModel"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.BertLMHeadModel"),u(pn,"class","relative group"),u(Qp,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(Ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ui,"rel","nofollow"),u(Vp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertLMHeadModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertForMaskedLM"),u(mn,"class","relative group"),u(Kp,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(Ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ji,"rel","nofollow"),u(Jp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForMaskedLM"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.BertForNextSentencePrediction"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.BertForNextSentencePrediction"),u(un,"class","relative group"),u(Gp,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(ol,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ol,"rel","nofollow"),u(Xp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.BertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.BertForSequenceClassification"),u(_n,"class","relative group"),u(Yp,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(ll,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ll,"rel","nofollow"),u(Zp,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.BertForMultipleChoice"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.BertForMultipleChoice"),u(kn,"class","relative group"),u(eh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(fl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fl,"rel","nofollow"),u(th,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.BertForTokenClassification"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.BertForTokenClassification"),u(Tn,"class","relative group"),u(oh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(yl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(yl,"rel","nofollow"),u(nh,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForTokenClassification"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"id","transformers.BertForQuestionAnswering"),u(nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nr,"href","#transformers.BertForQuestionAnswering"),u(wn,"class","relative group"),u(sh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.PreTrainedModel"),u(Fl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fl,"rel","nofollow"),u(rh,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.TFBertModel"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.TFBertModel"),u(Fn,"class","relative group"),u(ah,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(ql,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ql,"rel","nofollow"),u(ih,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertModel"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertForPreTraining"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertForPreTraining"),u(En,"class","relative group"),u(lh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(dh,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ur,"id","transformers.TFBertLMHeadModel"),u(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ur,"href","#transformers.TFBertLMHeadModel"),u(Pn,"class","relative group"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_r,"id","transformers.TFBertForMaskedLM"),u(_r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_r,"href","#transformers.TFBertForMaskedLM"),u(jn,"class","relative group"),u(ch,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(Xl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Xl,"rel","nofollow"),u(ph,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vr,"id","transformers.TFBertForNextSentencePrediction"),u(vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vr,"href","#transformers.TFBertForNextSentencePrediction"),u(Nn,"class","relative group"),u(hh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(sd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(sd,"rel","nofollow"),u(mh,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fr,"id","transformers.TFBertForSequenceClassification"),u(Fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fr,"href","#transformers.TFBertForSequenceClassification"),u(In,"class","relative group"),u(fh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(cd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(cd,"rel","nofollow"),u(uh,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.TFBertForMultipleChoice"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.TFBertForMultipleChoice"),u(Ln,"class","relative group"),u(gh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(gd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(gd,"rel","nofollow"),u(_h,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nr,"id","transformers.TFBertForTokenClassification"),u(Nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nr,"href","#transformers.TFBertForTokenClassification"),u(Sn,"class","relative group"),u(bh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(vd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(vd,"rel","nofollow"),u(kh,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.TFBertForQuestionAnswering"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.TFBertForQuestionAnswering"),u(Wn,"class","relative group"),u(yh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ed,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ed,"rel","nofollow"),u(Th,"href","/docs/transformers/pr_17918/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rr,"id","transformers.FlaxBertModel"),u(Rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rr,"href","#transformers.FlaxBertModel"),u(Qn,"class","relative group"),u(vh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cd,"rel","nofollow"),u(Nd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Nd,"rel","nofollow"),u(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Od,"rel","nofollow"),u(Id,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Id,"rel","nofollow"),u(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ad,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kr,"id","transformers.FlaxBertForPreTraining"),u(Kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kr,"href","#transformers.FlaxBertForPreTraining"),u(Kn,"class","relative group"),u(wh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Hd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Hd,"rel","nofollow"),u(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Rd,"rel","nofollow"),u(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Qd,"rel","nofollow"),u(Vd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Vd,"rel","nofollow"),u(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Kd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xr,"id","transformers.FlaxBertForCausalLM"),u(Xr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xr,"href","#transformers.FlaxBertForCausalLM"),u(Xn,"class","relative group"),u($h,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ec,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ec,"rel","nofollow"),u(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tc,"rel","nofollow"),u(oc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(oc,"rel","nofollow"),u(nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nc,"rel","nofollow"),u(sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ea,"id","transformers.FlaxBertForMaskedLM"),u(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ea,"href","#transformers.FlaxBertForMaskedLM"),u(Zn,"class","relative group"),u(xh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(pc,"rel","nofollow"),u(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hc,"rel","nofollow"),u(mc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(mc,"rel","nofollow"),u(fc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fc,"rel","nofollow"),u(uc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(uc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"id","transformers.FlaxBertForNextSentencePrediction"),u(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(na,"href","#transformers.FlaxBertForNextSentencePrediction"),u(ts,"class","relative group"),u(Fh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(vc,"rel","nofollow"),u(wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(wc,"rel","nofollow"),u($c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($c,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xc,"rel","nofollow"),u(Fc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Fc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"id","transformers.FlaxBertForSequenceClassification"),u(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(aa,"href","#transformers.FlaxBertForSequenceClassification"),u(ns,"class","relative group"),u(Bh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qc,"rel","nofollow"),u(jc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(jc,"rel","nofollow"),u(Cc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Cc,"rel","nofollow"),u(Nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Nc,"rel","nofollow"),u(Oc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(da,"id","transformers.FlaxBertForMultipleChoice"),u(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(da,"href","#transformers.FlaxBertForMultipleChoice"),u(rs,"class","relative group"),u(Eh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Uc,"rel","nofollow"),u(Wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wc,"rel","nofollow"),u(Hc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hc,"rel","nofollow"),u(Rc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Rc,"rel","nofollow"),u(Qc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Qc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ha,"id","transformers.FlaxBertForTokenClassification"),u(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ha,"href","#transformers.FlaxBertForTokenClassification"),u(is,"class","relative group"),u(Mh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Yc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Yc,"rel","nofollow"),u(Zc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Zc,"rel","nofollow"),u(ep,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ep,"rel","nofollow"),u(tp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tp,"rel","nofollow"),u(op,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(op,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ua,"id","transformers.FlaxBertForQuestionAnswering"),u(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ua,"href","#transformers.FlaxBertForQuestionAnswering"),u(ds,"class","relative group"),u(zh,"href","/docs/transformers/pr_17918/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(lp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(lp,"rel","nofollow"),u(dp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(dp,"rel","nofollow"),u(cp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(cp,"rel","nofollow"),u(pp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pp,"rel","nofollow"),u(hp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hp,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,m,k),e(m,h),e(h,g),w(l,g,null),e(m,f),e(m,E),e(E,be),b(o,X,k),b(o,z,k),e(z,ne),e(ne,L),w(re,L,null),e(z,ke),e(z,D),e(D,ye),b(o,me,k),b(o,J,k),e(J,O),e(J,ae),e(ae,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,Te),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,Q),b(o,_e,k),b(o,se,k),e(se,N),e(N,ve),e(se,V),e(se,pe),e(pe,y),b(o,M,k),b(o,K,k),e(K,ze),e(K,Be),e(Be,I),e(K,Pe),e(K,Ee),e(Ee,qe),e(K,A),b(o,W,k),b(o,xe,k),e(xe,Fe),e(Fe,U),w(Me,U,null),e(xe,je),e(xe,he),e(he,Ce),b(o,Eb,k),b(o,Nt,k),w(Ra,Nt,null),e(Nt,jy),e(Nt,ho),e(ho,Cy),e(ho,Ep),e(Ep,Ny),e(ho,Oy),e(ho,Mp),e(Mp,Iy),e(ho,Ay),e(ho,Qa),e(Qa,Ly),e(ho,Dy),e(Nt,Sy),e(Nt,Ko),e(Ko,Uy),e(Ko,zp),e(zp,Wy),e(Ko,Hy),e(Ko,Pp),e(Pp,Ry),e(Ko,Qy),e(Nt,Vy),w(_s,Nt,null),b(o,Mb,k),b(o,Jo,k),e(Jo,bs),e(bs,km),w(Va,km,null),e(Jo,Ky),e(Jo,ym),e(ym,Jy),b(o,zb,k),b(o,Ne,k),w(Ka,Ne,null),e(Ne,Gy),e(Ne,Tm),e(Tm,Xy),e(Ne,Yy),e(Ne,Ja),e(Ja,Zy),e(Ja,qp),e(qp,eT),e(Ja,tT),e(Ne,oT),e(Ne,Bo),w(Ga,Bo,null),e(Bo,nT),e(Bo,vm),e(vm,sT),e(Bo,rT),e(Bo,Xa),e(Xa,jp),e(jp,aT),e(jp,wm),e(wm,iT),e(Xa,lT),e(Xa,Cp),e(Cp,dT),e(Cp,$m),e($m,cT),e(Ne,pT),e(Ne,ks),w(Ya,ks,null),e(ks,hT),e(ks,Za),e(Za,mT),e(Za,xm),e(xm,fT),e(Za,uT),e(Ne,gT),e(Ne,It),w(ei,It,null),e(It,_T),e(It,Fm),e(Fm,bT),e(It,kT),w(ys,It,null),e(It,yT),e(It,Go),e(Go,TT),e(Go,Bm),e(Bm,vT),e(Go,wT),e(Go,Em),e(Em,$T),e(Go,xT),e(Ne,FT),e(Ne,Np),w(ti,Np,null),b(o,Pb,k),b(o,Xo,k),e(Xo,Ts),e(Ts,Mm),w(oi,Mm,null),e(Xo,BT),e(Xo,zm),e(zm,ET),b(o,qb,k),b(o,rt,k),w(ni,rt,null),e(rt,MT),e(rt,si),e(si,zT),e(si,Pm),e(Pm,PT),e(si,qT),e(rt,jT),e(rt,ri),e(ri,CT),e(ri,Op),e(Op,NT),e(ri,OT),e(rt,IT),e(rt,Eo),w(ai,Eo,null),e(Eo,AT),e(Eo,qm),e(qm,LT),e(Eo,DT),e(Eo,ii),e(ii,Ip),e(Ip,ST),e(Ip,jm),e(jm,UT),e(ii,WT),e(ii,Ap),e(Ap,HT),e(Ap,Cm),e(Cm,RT),e(rt,QT),e(rt,At),w(li,At,null),e(At,VT),e(At,Nm),e(Nm,KT),e(At,JT),w(vs,At,null),e(At,GT),e(At,Yo),e(Yo,XT),e(Yo,Om),e(Om,YT),e(Yo,ZT),e(Yo,Im),e(Im,ev),e(Yo,tv),b(o,jb,k),b(o,Zo,k),e(Zo,ws),e(ws,Am),w(di,Am,null),e(Zo,ov),e(Zo,Lm),e(Lm,nv),b(o,Cb,k),b(o,at,k),w(ci,at,null),e(at,sv),e(at,en),e(en,rv),e(en,Dm),e(Dm,av),e(en,iv),e(en,Sm),e(Sm,lv),e(en,dv),e(at,cv),e(at,pi),e(pi,pv),e(pi,Um),e(Um,hv),e(pi,mv),e(at,fv),e(at,Mo),w(hi,Mo,null),e(Mo,uv),e(Mo,mi),e(mi,gv),e(mi,Wm),e(Wm,_v),e(mi,bv),e(Mo,kv),w($s,Mo,null),e(at,yv),e(at,zo),w(fi,zo,null),e(zo,Tv),e(zo,tn),e(tn,vv),e(tn,Hm),e(Hm,wv),e(tn,$v),e(tn,Rm),e(Rm,xv),e(tn,Fv),e(zo,Bv),w(xs,zo,null),b(o,Nb,k),b(o,on,k),e(on,Fs),e(Fs,Qm),w(ui,Qm,null),e(on,Ev),e(on,Vm),e(Vm,Mv),b(o,Ob,k),b(o,nn,k),w(gi,nn,null),e(nn,zv),e(nn,_i),e(_i,Pv),e(_i,Lp),e(Lp,qv),e(_i,jv),b(o,Ib,k),b(o,sn,k),w(bi,sn,null),e(sn,Cv),e(sn,ki),e(ki,Nv),e(ki,Dp),e(Dp,Ov),e(ki,Iv),b(o,Ab,k),b(o,mo,k),w(yi,mo,null),e(mo,Av),e(mo,Ti),e(Ti,Lv),e(Ti,Sp),e(Sp,Dv),e(Ti,Sv),e(mo,Uv),e(mo,Bs),w(vi,Bs,null),e(Bs,Wv),e(Bs,Km),e(Km,Hv),b(o,Lb,k),b(o,rn,k),e(rn,Es),e(Es,Jm),w(wi,Jm,null),e(rn,Rv),e(rn,Gm),e(Gm,Qv),b(o,Db,k),b(o,Oe,k),w($i,Oe,null),e(Oe,Vv),e(Oe,Xm),e(Xm,Kv),e(Oe,Jv),e(Oe,xi),e(xi,Gv),e(xi,Up),e(Up,Xv),e(xi,Yv),e(Oe,Zv),e(Oe,Fi),e(Fi,ew),e(Fi,Bi),e(Bi,tw),e(Fi,ow),e(Oe,nw),e(Oe,Ei),e(Ei,sw),e(Ei,Mi),e(Mi,rw),e(Ei,aw),e(Oe,iw),e(Oe,Ke),e(Ke,lw),e(Ke,Ym),e(Ym,dw),e(Ke,cw),e(Ke,Zm),e(Zm,pw),e(Ke,hw),e(Ke,ef),e(ef,mw),e(Ke,fw),e(Ke,tf),e(tf,uw),e(Ke,gw),e(Ke,of),e(of,_w),e(Ke,bw),e(Ke,nf),e(nf,kw),e(Ke,yw),e(Oe,Tw),e(Oe,Lt),w(zi,Lt,null),e(Lt,vw),e(Lt,an),e(an,ww),e(an,Wp),e(Wp,$w),e(an,xw),e(an,sf),e(sf,Fw),e(an,Bw),e(Lt,Ew),w(Ms,Lt,null),e(Lt,Mw),w(zs,Lt,null),b(o,Sb,k),b(o,ln,k),e(ln,Ps),e(Ps,rf),w(Pi,rf,null),e(ln,zw),e(ln,af),e(af,Pw),b(o,Ub,k),b(o,it,k),w(qi,it,null),e(it,qw),e(it,dn),e(dn,jw),e(dn,lf),e(lf,Cw),e(dn,Nw),e(dn,df),e(df,Ow),e(dn,Iw),e(it,Aw),e(it,ji),e(ji,Lw),e(ji,Hp),e(Hp,Dw),e(ji,Sw),e(it,Uw),e(it,Ci),e(Ci,Ww),e(Ci,Ni),e(Ni,Hw),e(Ci,Rw),e(it,Qw),e(it,Dt),w(Oi,Dt,null),e(Dt,Vw),e(Dt,cn),e(cn,Kw),e(cn,Rp),e(Rp,Jw),e(cn,Gw),e(cn,cf),e(cf,Xw),e(cn,Yw),e(Dt,Zw),w(qs,Dt,null),e(Dt,e$),w(js,Dt,null),b(o,Wb,k),b(o,pn,k),e(pn,Cs),e(Cs,pf),w(Ii,pf,null),e(pn,t$),e(pn,hf),e(hf,o$),b(o,Hb,k),b(o,lt,k),w(Ai,lt,null),e(lt,n$),e(lt,Li),e(Li,s$),e(Li,mf),e(mf,r$),e(Li,a$),e(lt,i$),e(lt,Di),e(Di,l$),e(Di,Qp),e(Qp,d$),e(Di,c$),e(lt,p$),e(lt,Si),e(Si,h$),e(Si,Ui),e(Ui,m$),e(Si,f$),e(lt,u$),e(lt,St),w(Wi,St,null),e(St,g$),e(St,hn),e(hn,_$),e(hn,Vp),e(Vp,b$),e(hn,k$),e(hn,ff),e(ff,y$),e(hn,T$),e(St,v$),w(Ns,St,null),e(St,w$),w(Os,St,null),b(o,Rb,k),b(o,mn,k),e(mn,Is),e(Is,uf),w(Hi,uf,null),e(mn,$$),e(mn,gf),e(gf,x$),b(o,Qb,k),b(o,dt,k),w(Ri,dt,null),e(dt,F$),e(dt,Qi),e(Qi,B$),e(Qi,_f),e(_f,E$),e(Qi,M$),e(dt,z$),e(dt,Vi),e(Vi,P$),e(Vi,Kp),e(Kp,q$),e(Vi,j$),e(dt,C$),e(dt,Ki),e(Ki,N$),e(Ki,Ji),e(Ji,O$),e(Ki,I$),e(dt,A$),e(dt,ut),w(Gi,ut,null),e(ut,L$),e(ut,fn),e(fn,D$),e(fn,Jp),e(Jp,S$),e(fn,U$),e(fn,bf),e(bf,W$),e(fn,H$),e(ut,R$),w(As,ut,null),e(ut,Q$),w(Ls,ut,null),e(ut,V$),w(Ds,ut,null),b(o,Vb,k),b(o,un,k),e(un,Ss),e(Ss,kf),w(Xi,kf,null),e(un,K$),e(un,yf),e(yf,J$),b(o,Kb,k),b(o,ct,k),w(Yi,ct,null),e(ct,G$),e(ct,Zi),e(Zi,X$),e(Zi,Tf),e(Tf,Y$),e(Zi,Z$),e(ct,e2),e(ct,el),e(el,t2),e(el,Gp),e(Gp,o2),e(el,n2),e(ct,s2),e(ct,tl),e(tl,r2),e(tl,ol),e(ol,a2),e(tl,i2),e(ct,l2),e(ct,Ut),w(nl,Ut,null),e(Ut,d2),e(Ut,gn),e(gn,c2),e(gn,Xp),e(Xp,p2),e(gn,h2),e(gn,vf),e(vf,m2),e(gn,f2),e(Ut,u2),w(Us,Ut,null),e(Ut,g2),w(Ws,Ut,null),b(o,Jb,k),b(o,_n,k),e(_n,Hs),e(Hs,wf),w(sl,wf,null),e(_n,_2),e(_n,$f),e($f,b2),b(o,Gb,k),b(o,pt,k),w(rl,pt,null),e(pt,k2),e(pt,xf),e(xf,y2),e(pt,T2),e(pt,al),e(al,v2),e(al,Yp),e(Yp,w2),e(al,$2),e(pt,x2),e(pt,il),e(il,F2),e(il,ll),e(ll,B2),e(il,E2),e(pt,M2),e(pt,Ve),w(dl,Ve,null),e(Ve,z2),e(Ve,bn),e(bn,P2),e(bn,Zp),e(Zp,q2),e(bn,j2),e(bn,Ff),e(Ff,C2),e(bn,N2),e(Ve,O2),w(Rs,Ve,null),e(Ve,I2),w(Qs,Ve,null),e(Ve,A2),w(Vs,Ve,null),e(Ve,L2),w(Ks,Ve,null),e(Ve,D2),w(Js,Ve,null),b(o,Xb,k),b(o,kn,k),e(kn,Gs),e(Gs,Bf),w(cl,Bf,null),e(kn,S2),e(kn,Ef),e(Ef,U2),b(o,Yb,k),b(o,ht,k),w(pl,ht,null),e(ht,W2),e(ht,Mf),e(Mf,H2),e(ht,R2),e(ht,hl),e(hl,Q2),e(hl,eh),e(eh,V2),e(hl,K2),e(ht,J2),e(ht,ml),e(ml,G2),e(ml,fl),e(fl,X2),e(ml,Y2),e(ht,Z2),e(ht,Wt),w(ul,Wt,null),e(Wt,ex),e(Wt,yn),e(yn,tx),e(yn,th),e(th,ox),e(yn,nx),e(yn,zf),e(zf,sx),e(yn,rx),e(Wt,ax),w(Xs,Wt,null),e(Wt,ix),w(Ys,Wt,null),b(o,Zb,k),b(o,Tn,k),e(Tn,Zs),e(Zs,Pf),w(gl,Pf,null),e(Tn,lx),e(Tn,qf),e(qf,dx),b(o,ek,k),b(o,mt,k),w(_l,mt,null),e(mt,cx),e(mt,jf),e(jf,px),e(mt,hx),e(mt,bl),e(bl,mx),e(bl,oh),e(oh,fx),e(bl,ux),e(mt,gx),e(mt,kl),e(kl,_x),e(kl,yl),e(yl,bx),e(kl,kx),e(mt,yx),e(mt,gt),w(Tl,gt,null),e(gt,Tx),e(gt,vn),e(vn,vx),e(vn,nh),e(nh,wx),e(vn,$x),e(vn,Cf),e(Cf,xx),e(vn,Fx),e(gt,Bx),w(er,gt,null),e(gt,Ex),w(tr,gt,null),e(gt,Mx),w(or,gt,null),b(o,tk,k),b(o,wn,k),e(wn,nr),e(nr,Nf),w(vl,Nf,null),e(wn,zx),e(wn,Of),e(Of,Px),b(o,ok,k),b(o,ft,k),w(wl,ft,null),e(ft,qx),e(ft,$n),e($n,jx),e($n,If),e(If,Cx),e($n,Nx),e($n,Af),e(Af,Ox),e($n,Ix),e(ft,Ax),e(ft,$l),e($l,Lx),e($l,sh),e(sh,Dx),e($l,Sx),e(ft,Ux),e(ft,xl),e(xl,Wx),e(xl,Fl),e(Fl,Hx),e(xl,Rx),e(ft,Qx),e(ft,_t),w(Bl,_t,null),e(_t,Vx),e(_t,xn),e(xn,Kx),e(xn,rh),e(rh,Jx),e(xn,Gx),e(xn,Lf),e(Lf,Xx),e(xn,Yx),e(_t,Zx),w(sr,_t,null),e(_t,eF),w(rr,_t,null),e(_t,tF),w(ar,_t,null),b(o,nk,k),b(o,Fn,k),e(Fn,ir),e(ir,Df),w(El,Df,null),e(Fn,oF),e(Fn,Sf),e(Sf,nF),b(o,sk,k),b(o,Je,k),w(Ml,Je,null),e(Je,sF),e(Je,Uf),e(Uf,rF),e(Je,aF),e(Je,zl),e(zl,iF),e(zl,ah),e(ah,lF),e(zl,dF),e(Je,cF),e(Je,Pl),e(Pl,pF),e(Pl,ql),e(ql,hF),e(Pl,mF),e(Je,fF),w(lr,Je,null),e(Je,uF),e(Je,Ht),w(jl,Ht,null),e(Ht,gF),e(Ht,Bn),e(Bn,_F),e(Bn,ih),e(ih,bF),e(Bn,kF),e(Bn,Wf),e(Wf,yF),e(Bn,TF),e(Ht,vF),w(dr,Ht,null),e(Ht,wF),w(cr,Ht,null),b(o,rk,k),b(o,En,k),e(En,pr),e(pr,Hf),w(Cl,Hf,null),e(En,$F),e(En,Rf),e(Rf,xF),b(o,ak,k),b(o,Ge,k),w(Nl,Ge,null),e(Ge,FF),e(Ge,Mn),e(Mn,BF),e(Mn,Qf),e(Qf,EF),e(Mn,MF),e(Mn,Vf),e(Vf,zF),e(Mn,PF),e(Ge,qF),e(Ge,Ol),e(Ol,jF),e(Ol,lh),e(lh,CF),e(Ol,NF),e(Ge,OF),e(Ge,Il),e(Il,IF),e(Il,Al),e(Al,AF),e(Il,LF),e(Ge,DF),w(hr,Ge,null),e(Ge,SF),e(Ge,Rt),w(Ll,Rt,null),e(Rt,UF),e(Rt,zn),e(zn,WF),e(zn,dh),e(dh,HF),e(zn,RF),e(zn,Kf),e(Kf,QF),e(zn,VF),e(Rt,KF),w(mr,Rt,null),e(Rt,JF),w(fr,Rt,null),b(o,ik,k),b(o,Pn,k),e(Pn,ur),e(ur,Jf),w(Dl,Jf,null),e(Pn,GF),e(Pn,Gf),e(Gf,XF),b(o,lk,k),b(o,qn,k),w(Sl,qn,null),e(qn,YF),e(qn,bt),w(Ul,bt,null),e(bt,ZF),e(bt,Ie),e(Ie,e0),e(Ie,Xf),e(Xf,t0),e(Ie,o0),e(Ie,Yf),e(Yf,n0),e(Ie,s0),e(Ie,Zf),e(Zf,r0),e(Ie,a0),e(Ie,eu),e(eu,i0),e(Ie,l0),e(Ie,tu),e(tu,d0),e(Ie,c0),e(Ie,ou),e(ou,p0),e(Ie,h0),e(Ie,nu),e(nu,m0),e(Ie,f0),e(bt,u0),e(bt,Wl),e(Wl,Hl),e(Hl,g0),e(Hl,su),e(su,_0),e(Hl,b0),e(Wl,k0),e(Wl,Rl),e(Rl,y0),e(Rl,ru),e(ru,T0),e(Rl,v0),e(bt,w0),e(bt,G),e(G,$0),e(G,au),e(au,x0),e(G,F0),e(G,iu),e(iu,B0),e(G,E0),e(G,lu),e(lu,M0),e(G,z0),e(G,du),e(du,P0),e(G,q0),e(G,cu),e(cu,j0),e(G,C0),e(G,pu),e(pu,N0),e(G,O0),e(G,hu),e(hu,I0),e(G,A0),e(G,mu),e(mu,L0),e(G,D0),e(G,fu),e(fu,S0),e(G,U0),e(G,uu),e(uu,W0),e(G,H0),e(G,gu),e(gu,R0),e(G,Q0),e(G,_u),e(_u,V0),e(G,K0),e(G,bu),e(bu,J0),e(G,G0),e(G,ku),e(ku,X0),e(G,Y0),e(G,yu),e(yu,Z0),e(G,eB),e(G,Tu),e(Tu,tB),e(G,oB),e(G,vu),e(vu,nB),e(G,sB),e(G,wu),e(wu,rB),e(G,aB),e(G,$u),e($u,iB),e(G,lB),e(G,xu),e(xu,dB),e(G,cB),e(bt,pB),w(gr,bt,null),b(o,dk,k),b(o,jn,k),e(jn,_r),e(_r,Fu),w(Ql,Fu,null),e(jn,hB),e(jn,Bu),e(Bu,mB),b(o,ck,k),b(o,Xe,k),w(Vl,Xe,null),e(Xe,fB),e(Xe,Kl),e(Kl,uB),e(Kl,Eu),e(Eu,gB),e(Kl,_B),e(Xe,bB),e(Xe,Jl),e(Jl,kB),e(Jl,ch),e(ch,yB),e(Jl,TB),e(Xe,vB),e(Xe,Gl),e(Gl,wB),e(Gl,Xl),e(Xl,$B),e(Gl,xB),e(Xe,FB),w(br,Xe,null),e(Xe,BB),e(Xe,kt),w(Yl,kt,null),e(kt,EB),e(kt,Cn),e(Cn,MB),e(Cn,ph),e(ph,zB),e(Cn,PB),e(Cn,Mu),e(Mu,qB),e(Cn,jB),e(kt,CB),w(kr,kt,null),e(kt,NB),w(yr,kt,null),e(kt,OB),w(Tr,kt,null),b(o,pk,k),b(o,Nn,k),e(Nn,vr),e(vr,zu),w(Zl,zu,null),e(Nn,IB),e(Nn,Pu),e(Pu,AB),b(o,hk,k),b(o,Ye,k),w(ed,Ye,null),e(Ye,LB),e(Ye,td),e(td,DB),e(td,qu),e(qu,SB),e(td,UB),e(Ye,WB),e(Ye,od),e(od,HB),e(od,hh),e(hh,RB),e(od,QB),e(Ye,VB),e(Ye,nd),e(nd,KB),e(nd,sd),e(sd,JB),e(nd,GB),e(Ye,XB),w(wr,Ye,null),e(Ye,YB),e(Ye,Qt),w(rd,Qt,null),e(Qt,ZB),e(Qt,On),e(On,eE),e(On,mh),e(mh,tE),e(On,oE),e(On,ju),e(ju,nE),e(On,sE),e(Qt,rE),w($r,Qt,null),e(Qt,aE),w(xr,Qt,null),b(o,mk,k),b(o,In,k),e(In,Fr),e(Fr,Cu),w(ad,Cu,null),e(In,iE),e(In,Nu),e(Nu,lE),b(o,fk,k),b(o,Ze,k),w(id,Ze,null),e(Ze,dE),e(Ze,Ou),e(Ou,cE),e(Ze,pE),e(Ze,ld),e(ld,hE),e(ld,fh),e(fh,mE),e(ld,fE),e(Ze,uE),e(Ze,dd),e(dd,gE),e(dd,cd),e(cd,_E),e(dd,bE),e(Ze,kE),w(Br,Ze,null),e(Ze,yE),e(Ze,yt),w(pd,yt,null),e(yt,TE),e(yt,An),e(An,vE),e(An,uh),e(uh,wE),e(An,$E),e(An,Iu),e(Iu,xE),e(An,FE),e(yt,BE),w(Er,yt,null),e(yt,EE),w(Mr,yt,null),e(yt,ME),w(zr,yt,null),b(o,uk,k),b(o,Ln,k),e(Ln,Pr),e(Pr,Au),w(hd,Au,null),e(Ln,zE),e(Ln,Lu),e(Lu,PE),b(o,gk,k),b(o,et,k),w(md,et,null),e(et,qE),e(et,Du),e(Du,jE),e(et,CE),e(et,fd),e(fd,NE),e(fd,gh),e(gh,OE),e(fd,IE),e(et,AE),e(et,ud),e(ud,LE),e(ud,gd),e(gd,DE),e(ud,SE),e(et,UE),w(qr,et,null),e(et,WE),e(et,Vt),w(_d,Vt,null),e(Vt,HE),e(Vt,Dn),e(Dn,RE),e(Dn,_h),e(_h,QE),e(Dn,VE),e(Dn,Su),e(Su,KE),e(Dn,JE),e(Vt,GE),w(jr,Vt,null),e(Vt,XE),w(Cr,Vt,null),b(o,_k,k),b(o,Sn,k),e(Sn,Nr),e(Nr,Uu),w(bd,Uu,null),e(Sn,YE),e(Sn,Wu),e(Wu,ZE),b(o,bk,k),b(o,tt,k),w(kd,tt,null),e(tt,eM),e(tt,Hu),e(Hu,tM),e(tt,oM),e(tt,yd),e(yd,nM),e(yd,bh),e(bh,sM),e(yd,rM),e(tt,aM),e(tt,Td),e(Td,iM),e(Td,vd),e(vd,lM),e(Td,dM),e(tt,cM),w(Or,tt,null),e(tt,pM),e(tt,Tt),w(wd,Tt,null),e(Tt,hM),e(Tt,Un),e(Un,mM),e(Un,kh),e(kh,fM),e(Un,uM),e(Un,Ru),e(Ru,gM),e(Un,_M),e(Tt,bM),w(Ir,Tt,null),e(Tt,kM),w(Ar,Tt,null),e(Tt,yM),w(Lr,Tt,null),b(o,kk,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Qu),w($d,Qu,null),e(Wn,TM),e(Wn,Vu),e(Vu,vM),b(o,yk,k),b(o,ot,k),w(xd,ot,null),e(ot,wM),e(ot,Hn),e(Hn,$M),e(Hn,Ku),e(Ku,xM),e(Hn,FM),e(Hn,Ju),e(Ju,BM),e(Hn,EM),e(ot,MM),e(ot,Fd),e(Fd,zM),e(Fd,yh),e(yh,PM),e(Fd,qM),e(ot,jM),e(ot,Bd),e(Bd,CM),e(Bd,Ed),e(Ed,NM),e(Bd,OM),e(ot,IM),w(Sr,ot,null),e(ot,AM),e(ot,vt),w(Md,vt,null),e(vt,LM),e(vt,Rn),e(Rn,DM),e(Rn,Th),e(Th,SM),e(Rn,UM),e(Rn,Gu),e(Gu,WM),e(Rn,HM),e(vt,RM),w(Ur,vt,null),e(vt,QM),w(Wr,vt,null),e(vt,VM),w(Hr,vt,null),b(o,Tk,k),b(o,Qn,k),e(Qn,Rr),e(Rr,Xu),w(zd,Xu,null),e(Qn,KM),e(Qn,Yu),e(Yu,JM),b(o,vk,k),b(o,Ae,k),w(Pd,Ae,null),e(Ae,GM),e(Ae,Zu),e(Zu,XM),e(Ae,YM),e(Ae,qd),e(qd,ZM),e(qd,vh),e(vh,ez),e(qd,tz),e(Ae,oz),e(Ae,jd),e(jd,nz),e(jd,Cd),e(Cd,sz),e(jd,rz),e(Ae,az),e(Ae,eg),e(eg,iz),e(Ae,lz),e(Ae,fo),e(fo,tg),e(tg,Nd),e(Nd,dz),e(fo,cz),e(fo,og),e(og,Od),e(Od,pz),e(fo,hz),e(fo,ng),e(ng,Id),e(Id,mz),e(fo,fz),e(fo,sg),e(sg,Ad),e(Ad,uz),e(Ae,gz),e(Ae,Kt),w(Ld,Kt,null),e(Kt,_z),e(Kt,Vn),e(Vn,bz),e(Vn,rg),e(rg,kz),e(Vn,yz),e(Vn,ag),e(ag,Tz),e(Vn,vz),e(Kt,wz),w(Qr,Kt,null),e(Kt,$z),w(Vr,Kt,null),b(o,wk,k),b(o,Kn,k),e(Kn,Kr),e(Kr,ig),w(Dd,ig,null),e(Kn,xz),e(Kn,lg),e(lg,Fz),b(o,$k,k),b(o,Le,k),w(Sd,Le,null),e(Le,Bz),e(Le,Jn),e(Jn,Ez),e(Jn,dg),e(dg,Mz),e(Jn,zz),e(Jn,cg),e(cg,Pz),e(Jn,qz),e(Le,jz),e(Le,Ud),e(Ud,Cz),e(Ud,wh),e(wh,Nz),e(Ud,Oz),e(Le,Iz),e(Le,Wd),e(Wd,Az),e(Wd,Hd),e(Hd,Lz),e(Wd,Dz),e(Le,Sz),e(Le,pg),e(pg,Uz),e(Le,Wz),e(Le,uo),e(uo,hg),e(hg,Rd),e(Rd,Hz),e(uo,Rz),e(uo,mg),e(mg,Qd),e(Qd,Qz),e(uo,Vz),e(uo,fg),e(fg,Vd),e(Vd,Kz),e(uo,Jz),e(uo,ug),e(ug,Kd),e(Kd,Gz),e(Le,Xz),e(Le,Jt),w(Jd,Jt,null),e(Jt,Yz),e(Jt,Gn),e(Gn,Zz),e(Gn,gg),e(gg,e4),e(Gn,t4),e(Gn,_g),e(_g,o4),e(Gn,n4),e(Jt,s4),w(Jr,Jt,null),e(Jt,r4),w(Gr,Jt,null),b(o,xk,k),b(o,Xn,k),e(Xn,Xr),e(Xr,bg),w(Gd,bg,null),e(Xn,a4),e(Xn,kg),e(kg,i4),b(o,Fk,k),b(o,De,k),w(Xd,De,null),e(De,l4),e(De,yg),e(yg,d4),e(De,c4),e(De,Yd),e(Yd,p4),e(Yd,$h),e($h,h4),e(Yd,m4),e(De,f4),e(De,Zd),e(Zd,u4),e(Zd,ec),e(ec,g4),e(Zd,_4),e(De,b4),e(De,Tg),e(Tg,k4),e(De,y4),e(De,go),e(go,vg),e(vg,tc),e(tc,T4),e(go,v4),e(go,wg),e(wg,oc),e(oc,w4),e(go,$4),e(go,$g),e($g,nc),e(nc,x4),e(go,F4),e(go,xg),e(xg,sc),e(sc,B4),e(De,E4),e(De,Gt),w(rc,Gt,null),e(Gt,M4),e(Gt,Yn),e(Yn,z4),e(Yn,Fg),e(Fg,P4),e(Yn,q4),e(Yn,Bg),e(Bg,j4),e(Yn,C4),e(Gt,N4),w(Yr,Gt,null),e(Gt,O4),w(Zr,Gt,null),b(o,Bk,k),b(o,Zn,k),e(Zn,ea),e(ea,Eg),w(ac,Eg,null),e(Zn,I4),e(Zn,Mg),e(Mg,A4),b(o,Ek,k),b(o,Se,k),w(ic,Se,null),e(Se,L4),e(Se,lc),e(lc,D4),e(lc,zg),e(zg,S4),e(lc,U4),e(Se,W4),e(Se,dc),e(dc,H4),e(dc,xh),e(xh,R4),e(dc,Q4),e(Se,V4),e(Se,cc),e(cc,K4),e(cc,pc),e(pc,J4),e(cc,G4),e(Se,X4),e(Se,Pg),e(Pg,Y4),e(Se,Z4),e(Se,_o),e(_o,qg),e(qg,hc),e(hc,eP),e(_o,tP),e(_o,jg),e(jg,mc),e(mc,oP),e(_o,nP),e(_o,Cg),e(Cg,fc),e(fc,sP),e(_o,rP),e(_o,Ng),e(Ng,uc),e(uc,aP),e(Se,iP),e(Se,Xt),w(gc,Xt,null),e(Xt,lP),e(Xt,es),e(es,dP),e(es,Og),e(Og,cP),e(es,pP),e(es,Ig),e(Ig,hP),e(es,mP),e(Xt,fP),w(ta,Xt,null),e(Xt,uP),w(oa,Xt,null),b(o,Mk,k),b(o,ts,k),e(ts,na),e(na,Ag),w(_c,Ag,null),e(ts,gP),e(ts,Lg),e(Lg,_P),b(o,zk,k),b(o,Ue,k),w(bc,Ue,null),e(Ue,bP),e(Ue,kc),e(kc,kP),e(kc,Dg),e(Dg,yP),e(kc,TP),e(Ue,vP),e(Ue,yc),e(yc,wP),e(yc,Fh),e(Fh,$P),e(yc,xP),e(Ue,FP),e(Ue,Tc),e(Tc,BP),e(Tc,vc),e(vc,EP),e(Tc,MP),e(Ue,zP),e(Ue,Sg),e(Sg,PP),e(Ue,qP),e(Ue,bo),e(bo,Ug),e(Ug,wc),e(wc,jP),e(bo,CP),e(bo,Wg),e(Wg,$c),e($c,NP),e(bo,OP),e(bo,Hg),e(Hg,xc),e(xc,IP),e(bo,AP),e(bo,Rg),e(Rg,Fc),e(Fc,LP),e(Ue,DP),e(Ue,Yt),w(Bc,Yt,null),e(Yt,SP),e(Yt,os),e(os,UP),e(os,Qg),e(Qg,WP),e(os,HP),e(os,Vg),e(Vg,RP),e(os,QP),e(Yt,VP),w(sa,Yt,null),e(Yt,KP),w(ra,Yt,null),b(o,Pk,k),b(o,ns,k),e(ns,aa),e(aa,Kg),w(Ec,Kg,null),e(ns,JP),e(ns,Jg),e(Jg,GP),b(o,qk,k),b(o,We,k),w(Mc,We,null),e(We,XP),e(We,Gg),e(Gg,YP),e(We,ZP),e(We,zc),e(zc,eq),e(zc,Bh),e(Bh,tq),e(zc,oq),e(We,nq),e(We,Pc),e(Pc,sq),e(Pc,qc),e(qc,rq),e(Pc,aq),e(We,iq),e(We,Xg),e(Xg,lq),e(We,dq),e(We,ko),e(ko,Yg),e(Yg,jc),e(jc,cq),e(ko,pq),e(ko,Zg),e(Zg,Cc),e(Cc,hq),e(ko,mq),e(ko,e_),e(e_,Nc),e(Nc,fq),e(ko,uq),e(ko,t_),e(t_,Oc),e(Oc,gq),e(We,_q),e(We,Zt),w(Ic,Zt,null),e(Zt,bq),e(Zt,ss),e(ss,kq),e(ss,o_),e(o_,yq),e(ss,Tq),e(ss,n_),e(n_,vq),e(ss,wq),e(Zt,$q),w(ia,Zt,null),e(Zt,xq),w(la,Zt,null),b(o,jk,k),b(o,rs,k),e(rs,da),e(da,s_),w(Ac,s_,null),e(rs,Fq),e(rs,r_),e(r_,Bq),b(o,Ck,k),b(o,He,k),w(Lc,He,null),e(He,Eq),e(He,a_),e(a_,Mq),e(He,zq),e(He,Dc),e(Dc,Pq),e(Dc,Eh),e(Eh,qq),e(Dc,jq),e(He,Cq),e(He,Sc),e(Sc,Nq),e(Sc,Uc),e(Uc,Oq),e(Sc,Iq),e(He,Aq),e(He,i_),e(i_,Lq),e(He,Dq),e(He,yo),e(yo,l_),e(l_,Wc),e(Wc,Sq),e(yo,Uq),e(yo,d_),e(d_,Hc),e(Hc,Wq),e(yo,Hq),e(yo,c_),e(c_,Rc),e(Rc,Rq),e(yo,Qq),e(yo,p_),e(p_,Qc),e(Qc,Vq),e(He,Kq),e(He,eo),w(Vc,eo,null),e(eo,Jq),e(eo,as),e(as,Gq),e(as,h_),e(h_,Xq),e(as,Yq),e(as,m_),e(m_,Zq),e(as,e8),e(eo,t8),w(ca,eo,null),e(eo,o8),w(pa,eo,null),b(o,Nk,k),b(o,is,k),e(is,ha),e(ha,f_),w(Kc,f_,null),e(is,n8),e(is,u_),e(u_,s8),b(o,Ok,k),b(o,Re,k),w(Jc,Re,null),e(Re,r8),e(Re,g_),e(g_,a8),e(Re,i8),e(Re,Gc),e(Gc,l8),e(Gc,Mh),e(Mh,d8),e(Gc,c8),e(Re,p8),e(Re,Xc),e(Xc,h8),e(Xc,Yc),e(Yc,m8),e(Xc,f8),e(Re,u8),e(Re,__),e(__,g8),e(Re,_8),e(Re,To),e(To,b_),e(b_,Zc),e(Zc,b8),e(To,k8),e(To,k_),e(k_,ep),e(ep,y8),e(To,T8),e(To,y_),e(y_,tp),e(tp,v8),e(To,w8),e(To,T_),e(T_,op),e(op,$8),e(Re,x8),e(Re,to),w(np,to,null),e(to,F8),e(to,ls),e(ls,B8),e(ls,v_),e(v_,E8),e(ls,M8),e(ls,w_),e(w_,z8),e(ls,P8),e(to,q8),w(ma,to,null),e(to,j8),w(fa,to,null),b(o,Ik,k),b(o,ds,k),e(ds,ua),e(ua,$_),w(sp,$_,null),e(ds,C8),e(ds,x_),e(x_,N8),b(o,Ak,k),b(o,Qe,k),w(rp,Qe,null),e(Qe,O8),e(Qe,cs),e(cs,I8),e(cs,F_),e(F_,A8),e(cs,L8),e(cs,B_),e(B_,D8),e(cs,S8),e(Qe,U8),e(Qe,ap),e(ap,W8),e(ap,zh),e(zh,H8),e(ap,R8),e(Qe,Q8),e(Qe,ip),e(ip,V8),e(ip,lp),e(lp,K8),e(ip,J8),e(Qe,G8),e(Qe,E_),e(E_,X8),e(Qe,Y8),e(Qe,vo),e(vo,M_),e(M_,dp),e(dp,Z8),e(vo,e7),e(vo,z_),e(z_,cp),e(cp,t7),e(vo,o7),e(vo,P_),e(P_,pp),e(pp,n7),e(vo,s7),e(vo,q_),e(q_,hp),e(hp,r7),e(Qe,a7),e(Qe,oo),w(mp,oo,null),e(oo,i7),e(oo,ps),e(ps,l7),e(ps,j_),e(j_,d7),e(ps,c7),e(ps,C_),e(C_,p7),e(ps,h7),e(oo,m7),w(ga,oo,null),e(oo,f7),w(_a,oo,null),Lk=!0},p(o,[k]){const fp={};k&2&&(fp.$$scope={dirty:k,ctx:o}),_s.$set(fp);const N_={};k&2&&(N_.$$scope={dirty:k,ctx:o}),ys.$set(N_);const O_={};k&2&&(O_.$$scope={dirty:k,ctx:o}),vs.$set(O_);const I_={};k&2&&(I_.$$scope={dirty:k,ctx:o}),$s.$set(I_);const up={};k&2&&(up.$$scope={dirty:k,ctx:o}),xs.$set(up);const A_={};k&2&&(A_.$$scope={dirty:k,ctx:o}),Ms.$set(A_);const L_={};k&2&&(L_.$$scope={dirty:k,ctx:o}),zs.$set(L_);const D_={};k&2&&(D_.$$scope={dirty:k,ctx:o}),qs.$set(D_);const gp={};k&2&&(gp.$$scope={dirty:k,ctx:o}),js.$set(gp);const S_={};k&2&&(S_.$$scope={dirty:k,ctx:o}),Ns.$set(S_);const U_={};k&2&&(U_.$$scope={dirty:k,ctx:o}),Os.$set(U_);const W_={};k&2&&(W_.$$scope={dirty:k,ctx:o}),As.$set(W_);const H_={};k&2&&(H_.$$scope={dirty:k,ctx:o}),Ls.$set(H_);const R_={};k&2&&(R_.$$scope={dirty:k,ctx:o}),Ds.$set(R_);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:o}),Us.$set(Q_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:o}),Ws.$set(V_);const _p={};k&2&&(_p.$$scope={dirty:k,ctx:o}),Rs.$set(_p);const K_={};k&2&&(K_.$$scope={dirty:k,ctx:o}),Qs.$set(K_);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:o}),Vs.$set(J_);const hs={};k&2&&(hs.$$scope={dirty:k,ctx:o}),Ks.$set(hs);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:o}),Js.$set(G_);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:o}),Xs.$set(X_);const bp={};k&2&&(bp.$$scope={dirty:k,ctx:o}),Ys.$set(bp);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:o}),er.$set(Y_);const Z_={};k&2&&(Z_.$$scope={dirty:k,ctx:o}),tr.$set(Z_);const eb={};k&2&&(eb.$$scope={dirty:k,ctx:o}),or.$set(eb);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),sr.$set(wo);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),rr.$set($o);const tb={};k&2&&(tb.$$scope={dirty:k,ctx:o}),ar.$set(tb);const ob={};k&2&&(ob.$$scope={dirty:k,ctx:o}),lr.$set(ob);const nb={};k&2&&(nb.$$scope={dirty:k,ctx:o}),dr.$set(nb);const ms={};k&2&&(ms.$$scope={dirty:k,ctx:o}),cr.$set(ms);const sb={};k&2&&(sb.$$scope={dirty:k,ctx:o}),hr.$set(sb);const rb={};k&2&&(rb.$$scope={dirty:k,ctx:o}),mr.$set(rb);const kp={};k&2&&(kp.$$scope={dirty:k,ctx:o}),fr.$set(kp);const ab={};k&2&&(ab.$$scope={dirty:k,ctx:o}),gr.$set(ab);const ib={};k&2&&(ib.$$scope={dirty:k,ctx:o}),br.$set(ib);const lb={};k&2&&(lb.$$scope={dirty:k,ctx:o}),kr.$set(lb);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:o}),yr.$set(nt);const db={};k&2&&(db.$$scope={dirty:k,ctx:o}),Tr.$set(db);const yp={};k&2&&(yp.$$scope={dirty:k,ctx:o}),wr.$set(yp);const cb={};k&2&&(cb.$$scope={dirty:k,ctx:o}),$r.$set(cb);const fs={};k&2&&(fs.$$scope={dirty:k,ctx:o}),xr.$set(fs);const pb={};k&2&&(pb.$$scope={dirty:k,ctx:o}),Br.$set(pb);const Tp={};k&2&&(Tp.$$scope={dirty:k,ctx:o}),Er.$set(Tp);const Ph={};k&2&&(Ph.$$scope={dirty:k,ctx:o}),Mr.$set(Ph);const hb={};k&2&&(hb.$$scope={dirty:k,ctx:o}),zr.$set(hb);const qh={};k&2&&(qh.$$scope={dirty:k,ctx:o}),qr.$set(qh);const mb={};k&2&&(mb.$$scope={dirty:k,ctx:o}),jr.$set(mb);const vp={};k&2&&(vp.$$scope={dirty:k,ctx:o}),Cr.$set(vp);const wp={};k&2&&(wp.$$scope={dirty:k,ctx:o}),Or.$set(wp);const fb={};k&2&&(fb.$$scope={dirty:k,ctx:o}),Ir.$set(fb);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:o}),Ar.$set(xo);const ub={};k&2&&(ub.$$scope={dirty:k,ctx:o}),Lr.$set(ub);const us={};k&2&&(us.$$scope={dirty:k,ctx:o}),Sr.$set(us);const gb={};k&2&&(gb.$$scope={dirty:k,ctx:o}),Ur.$set(gb);const _b={};k&2&&(_b.$$scope={dirty:k,ctx:o}),Wr.$set(_b);const bb={};k&2&&(bb.$$scope={dirty:k,ctx:o}),Hr.$set(bb);const $p={};k&2&&($p.$$scope={dirty:k,ctx:o}),Qr.$set($p);const kb={};k&2&&(kb.$$scope={dirty:k,ctx:o}),Vr.$set(kb);const yb={};k&2&&(yb.$$scope={dirty:k,ctx:o}),Jr.$set(yb);const Tb={};k&2&&(Tb.$$scope={dirty:k,ctx:o}),Gr.$set(Tb);const Ot={};k&2&&(Ot.$$scope={dirty:k,ctx:o}),Yr.$set(Ot);const xp={};k&2&&(xp.$$scope={dirty:k,ctx:o}),Zr.$set(xp);const vb={};k&2&&(vb.$$scope={dirty:k,ctx:o}),ta.$set(vb);const Fp={};k&2&&(Fp.$$scope={dirty:k,ctx:o}),oa.$set(Fp);const wb={};k&2&&(wb.$$scope={dirty:k,ctx:o}),sa.$set(wb);const gs={};k&2&&(gs.$$scope={dirty:k,ctx:o}),ra.$set(gs);const $b={};k&2&&($b.$$scope={dirty:k,ctx:o}),ia.$set($b);const Bp={};k&2&&(Bp.$$scope={dirty:k,ctx:o}),la.$set(Bp);const jh={};k&2&&(jh.$$scope={dirty:k,ctx:o}),ca.$set(jh);const xb={};k&2&&(xb.$$scope={dirty:k,ctx:o}),pa.$set(xb);const Ch={};k&2&&(Ch.$$scope={dirty:k,ctx:o}),ma.$set(Ch);const Fb={};k&2&&(Fb.$$scope={dirty:k,ctx:o}),fa.$set(Fb);const Fo={};k&2&&(Fo.$$scope={dirty:k,ctx:o}),ga.$set(Fo);const Bb={};k&2&&(Bb.$$scope={dirty:k,ctx:o}),_a.$set(Bb)},i(o){Lk||($(l.$$.fragment,o),$(re.$$.fragment,o),$(Me.$$.fragment,o),$(Ra.$$.fragment,o),$(_s.$$.fragment,o),$(Va.$$.fragment,o),$(Ka.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(ei.$$.fragment,o),$(ys.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(ai.$$.fragment,o),$(li.$$.fragment,o),$(vs.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(hi.$$.fragment,o),$($s.$$.fragment,o),$(fi.$$.fragment,o),$(xs.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(bi.$$.fragment,o),$(yi.$$.fragment,o),$(vi.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(zi.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Ii.$$.fragment,o),$(Ai.$$.fragment,o),$(Wi.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(Hi.$$.fragment,o),$(Ri.$$.fragment,o),$(Gi.$$.fragment,o),$(As.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(nl.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(sl.$$.fragment,o),$(rl.$$.fragment,o),$(dl.$$.fragment,o),$(Rs.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(ul.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Tl.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(vl.$$.fragment,o),$(wl.$$.fragment,o),$(Bl.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(El.$$.fragment,o),$(Ml.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Cl.$$.fragment,o),$(Nl.$$.fragment,o),$(hr.$$.fragment,o),$(Ll.$$.fragment,o),$(mr.$$.fragment,o),$(fr.$$.fragment,o),$(Dl.$$.fragment,o),$(Sl.$$.fragment,o),$(Ul.$$.fragment,o),$(gr.$$.fragment,o),$(Ql.$$.fragment,o),$(Vl.$$.fragment,o),$(br.$$.fragment,o),$(Yl.$$.fragment,o),$(kr.$$.fragment,o),$(yr.$$.fragment,o),$(Tr.$$.fragment,o),$(Zl.$$.fragment,o),$(ed.$$.fragment,o),$(wr.$$.fragment,o),$(rd.$$.fragment,o),$($r.$$.fragment,o),$(xr.$$.fragment,o),$(ad.$$.fragment,o),$(id.$$.fragment,o),$(Br.$$.fragment,o),$(pd.$$.fragment,o),$(Er.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(hd.$$.fragment,o),$(md.$$.fragment,o),$(qr.$$.fragment,o),$(_d.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(bd.$$.fragment,o),$(kd.$$.fragment,o),$(Or.$$.fragment,o),$(wd.$$.fragment,o),$(Ir.$$.fragment,o),$(Ar.$$.fragment,o),$(Lr.$$.fragment,o),$($d.$$.fragment,o),$(xd.$$.fragment,o),$(Sr.$$.fragment,o),$(Md.$$.fragment,o),$(Ur.$$.fragment,o),$(Wr.$$.fragment,o),$(Hr.$$.fragment,o),$(zd.$$.fragment,o),$(Pd.$$.fragment,o),$(Ld.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Dd.$$.fragment,o),$(Sd.$$.fragment,o),$(Jd.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(Gd.$$.fragment,o),$(Xd.$$.fragment,o),$(rc.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ac.$$.fragment,o),$(ic.$$.fragment,o),$(gc.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(_c.$$.fragment,o),$(bc.$$.fragment,o),$(Bc.$$.fragment,o),$(sa.$$.fragment,o),$(ra.$$.fragment,o),$(Ec.$$.fragment,o),$(Mc.$$.fragment,o),$(Ic.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(Ac.$$.fragment,o),$(Lc.$$.fragment,o),$(Vc.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(Kc.$$.fragment,o),$(Jc.$$.fragment,o),$(np.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(sp.$$.fragment,o),$(rp.$$.fragment,o),$(mp.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),Lk=!0)},o(o){x(l.$$.fragment,o),x(re.$$.fragment,o),x(Me.$$.fragment,o),x(Ra.$$.fragment,o),x(_s.$$.fragment,o),x(Va.$$.fragment,o),x(Ka.$$.fragment,o),x(Ga.$$.fragment,o),x(Ya.$$.fragment,o),x(ei.$$.fragment,o),x(ys.$$.fragment,o),x(ti.$$.fragment,o),x(oi.$$.fragment,o),x(ni.$$.fragment,o),x(ai.$$.fragment,o),x(li.$$.fragment,o),x(vs.$$.fragment,o),x(di.$$.fragment,o),x(ci.$$.fragment,o),x(hi.$$.fragment,o),x($s.$$.fragment,o),x(fi.$$.fragment,o),x(xs.$$.fragment,o),x(ui.$$.fragment,o),x(gi.$$.fragment,o),x(bi.$$.fragment,o),x(yi.$$.fragment,o),x(vi.$$.fragment,o),x(wi.$$.fragment,o),x($i.$$.fragment,o),x(zi.$$.fragment,o),x(Ms.$$.fragment,o),x(zs.$$.fragment,o),x(Pi.$$.fragment,o),x(qi.$$.fragment,o),x(Oi.$$.fragment,o),x(qs.$$.fragment,o),x(js.$$.fragment,o),x(Ii.$$.fragment,o),x(Ai.$$.fragment,o),x(Wi.$$.fragment,o),x(Ns.$$.fragment,o),x(Os.$$.fragment,o),x(Hi.$$.fragment,o),x(Ri.$$.fragment,o),x(Gi.$$.fragment,o),x(As.$$.fragment,o),x(Ls.$$.fragment,o),x(Ds.$$.fragment,o),x(Xi.$$.fragment,o),x(Yi.$$.fragment,o),x(nl.$$.fragment,o),x(Us.$$.fragment,o),x(Ws.$$.fragment,o),x(sl.$$.fragment,o),x(rl.$$.fragment,o),x(dl.$$.fragment,o),x(Rs.$$.fragment,o),x(Qs.$$.fragment,o),x(Vs.$$.fragment,o),x(Ks.$$.fragment,o),x(Js.$$.fragment,o),x(cl.$$.fragment,o),x(pl.$$.fragment,o),x(ul.$$.fragment,o),x(Xs.$$.fragment,o),x(Ys.$$.fragment,o),x(gl.$$.fragment,o),x(_l.$$.fragment,o),x(Tl.$$.fragment,o),x(er.$$.fragment,o),x(tr.$$.fragment,o),x(or.$$.fragment,o),x(vl.$$.fragment,o),x(wl.$$.fragment,o),x(Bl.$$.fragment,o),x(sr.$$.fragment,o),x(rr.$$.fragment,o),x(ar.$$.fragment,o),x(El.$$.fragment,o),x(Ml.$$.fragment,o),x(lr.$$.fragment,o),x(jl.$$.fragment,o),x(dr.$$.fragment,o),x(cr.$$.fragment,o),x(Cl.$$.fragment,o),x(Nl.$$.fragment,o),x(hr.$$.fragment,o),x(Ll.$$.fragment,o),x(mr.$$.fragment,o),x(fr.$$.fragment,o),x(Dl.$$.fragment,o),x(Sl.$$.fragment,o),x(Ul.$$.fragment,o),x(gr.$$.fragment,o),x(Ql.$$.fragment,o),x(Vl.$$.fragment,o),x(br.$$.fragment,o),x(Yl.$$.fragment,o),x(kr.$$.fragment,o),x(yr.$$.fragment,o),x(Tr.$$.fragment,o),x(Zl.$$.fragment,o),x(ed.$$.fragment,o),x(wr.$$.fragment,o),x(rd.$$.fragment,o),x($r.$$.fragment,o),x(xr.$$.fragment,o),x(ad.$$.fragment,o),x(id.$$.fragment,o),x(Br.$$.fragment,o),x(pd.$$.fragment,o),x(Er.$$.fragment,o),x(Mr.$$.fragment,o),x(zr.$$.fragment,o),x(hd.$$.fragment,o),x(md.$$.fragment,o),x(qr.$$.fragment,o),x(_d.$$.fragment,o),x(jr.$$.fragment,o),x(Cr.$$.fragment,o),x(bd.$$.fragment,o),x(kd.$$.fragment,o),x(Or.$$.fragment,o),x(wd.$$.fragment,o),x(Ir.$$.fragment,o),x(Ar.$$.fragment,o),x(Lr.$$.fragment,o),x($d.$$.fragment,o),x(xd.$$.fragment,o),x(Sr.$$.fragment,o),x(Md.$$.fragment,o),x(Ur.$$.fragment,o),x(Wr.$$.fragment,o),x(Hr.$$.fragment,o),x(zd.$$.fragment,o),x(Pd.$$.fragment,o),x(Ld.$$.fragment,o),x(Qr.$$.fragment,o),x(Vr.$$.fragment,o),x(Dd.$$.fragment,o),x(Sd.$$.fragment,o),x(Jd.$$.fragment,o),x(Jr.$$.fragment,o),x(Gr.$$.fragment,o),x(Gd.$$.fragment,o),x(Xd.$$.fragment,o),x(rc.$$.fragment,o),x(Yr.$$.fragment,o),x(Zr.$$.fragment,o),x(ac.$$.fragment,o),x(ic.$$.fragment,o),x(gc.$$.fragment,o),x(ta.$$.fragment,o),x(oa.$$.fragment,o),x(_c.$$.fragment,o),x(bc.$$.fragment,o),x(Bc.$$.fragment,o),x(sa.$$.fragment,o),x(ra.$$.fragment,o),x(Ec.$$.fragment,o),x(Mc.$$.fragment,o),x(Ic.$$.fragment,o),x(ia.$$.fragment,o),x(la.$$.fragment,o),x(Ac.$$.fragment,o),x(Lc.$$.fragment,o),x(Vc.$$.fragment,o),x(ca.$$.fragment,o),x(pa.$$.fragment,o),x(Kc.$$.fragment,o),x(Jc.$$.fragment,o),x(np.$$.fragment,o),x(ma.$$.fragment,o),x(fa.$$.fragment,o),x(sp.$$.fragment,o),x(rp.$$.fragment,o),x(mp.$$.fragment,o),x(ga.$$.fragment,o),x(_a.$$.fragment,o),Lk=!1},d(o){t(d),o&&t(_),o&&t(m),F(l),o&&t(X),o&&t(z),F(re),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(se),o&&t(M),o&&t(K),o&&t(W),o&&t(xe),F(Me),o&&t(Eb),o&&t(Nt),F(Ra),F(_s),o&&t(Mb),o&&t(Jo),F(Va),o&&t(zb),o&&t(Ne),F(Ka),F(Ga),F(Ya),F(ei),F(ys),F(ti),o&&t(Pb),o&&t(Xo),F(oi),o&&t(qb),o&&t(rt),F(ni),F(ai),F(li),F(vs),o&&t(jb),o&&t(Zo),F(di),o&&t(Cb),o&&t(at),F(ci),F(hi),F($s),F(fi),F(xs),o&&t(Nb),o&&t(on),F(ui),o&&t(Ob),o&&t(nn),F(gi),o&&t(Ib),o&&t(sn),F(bi),o&&t(Ab),o&&t(mo),F(yi),F(vi),o&&t(Lb),o&&t(rn),F(wi),o&&t(Db),o&&t(Oe),F($i),F(zi),F(Ms),F(zs),o&&t(Sb),o&&t(ln),F(Pi),o&&t(Ub),o&&t(it),F(qi),F(Oi),F(qs),F(js),o&&t(Wb),o&&t(pn),F(Ii),o&&t(Hb),o&&t(lt),F(Ai),F(Wi),F(Ns),F(Os),o&&t(Rb),o&&t(mn),F(Hi),o&&t(Qb),o&&t(dt),F(Ri),F(Gi),F(As),F(Ls),F(Ds),o&&t(Vb),o&&t(un),F(Xi),o&&t(Kb),o&&t(ct),F(Yi),F(nl),F(Us),F(Ws),o&&t(Jb),o&&t(_n),F(sl),o&&t(Gb),o&&t(pt),F(rl),F(dl),F(Rs),F(Qs),F(Vs),F(Ks),F(Js),o&&t(Xb),o&&t(kn),F(cl),o&&t(Yb),o&&t(ht),F(pl),F(ul),F(Xs),F(Ys),o&&t(Zb),o&&t(Tn),F(gl),o&&t(ek),o&&t(mt),F(_l),F(Tl),F(er),F(tr),F(or),o&&t(tk),o&&t(wn),F(vl),o&&t(ok),o&&t(ft),F(wl),F(Bl),F(sr),F(rr),F(ar),o&&t(nk),o&&t(Fn),F(El),o&&t(sk),o&&t(Je),F(Ml),F(lr),F(jl),F(dr),F(cr),o&&t(rk),o&&t(En),F(Cl),o&&t(ak),o&&t(Ge),F(Nl),F(hr),F(Ll),F(mr),F(fr),o&&t(ik),o&&t(Pn),F(Dl),o&&t(lk),o&&t(qn),F(Sl),F(Ul),F(gr),o&&t(dk),o&&t(jn),F(Ql),o&&t(ck),o&&t(Xe),F(Vl),F(br),F(Yl),F(kr),F(yr),F(Tr),o&&t(pk),o&&t(Nn),F(Zl),o&&t(hk),o&&t(Ye),F(ed),F(wr),F(rd),F($r),F(xr),o&&t(mk),o&&t(In),F(ad),o&&t(fk),o&&t(Ze),F(id),F(Br),F(pd),F(Er),F(Mr),F(zr),o&&t(uk),o&&t(Ln),F(hd),o&&t(gk),o&&t(et),F(md),F(qr),F(_d),F(jr),F(Cr),o&&t(_k),o&&t(Sn),F(bd),o&&t(bk),o&&t(tt),F(kd),F(Or),F(wd),F(Ir),F(Ar),F(Lr),o&&t(kk),o&&t(Wn),F($d),o&&t(yk),o&&t(ot),F(xd),F(Sr),F(Md),F(Ur),F(Wr),F(Hr),o&&t(Tk),o&&t(Qn),F(zd),o&&t(vk),o&&t(Ae),F(Pd),F(Ld),F(Qr),F(Vr),o&&t(wk),o&&t(Kn),F(Dd),o&&t($k),o&&t(Le),F(Sd),F(Jd),F(Jr),F(Gr),o&&t(xk),o&&t(Xn),F(Gd),o&&t(Fk),o&&t(De),F(Xd),F(rc),F(Yr),F(Zr),o&&t(Bk),o&&t(Zn),F(ac),o&&t(Ek),o&&t(Se),F(ic),F(gc),F(ta),F(oa),o&&t(Mk),o&&t(ts),F(_c),o&&t(zk),o&&t(Ue),F(bc),F(Bc),F(sa),F(ra),o&&t(Pk),o&&t(ns),F(Ec),o&&t(qk),o&&t(We),F(Mc),F(Ic),F(ia),F(la),o&&t(jk),o&&t(rs),F(Ac),o&&t(Ck),o&&t(He),F(Lc),F(Vc),F(ca),F(pa),o&&t(Nk),o&&t(is),F(Kc),o&&t(Ok),o&&t(Re),F(Jc),F(np),F(ma),F(fa),o&&t(Ik),o&&t(ds),F(sp),o&&t(Ak),o&&t(Qe),F(rp),F(mp),F(ga),F(_a)}}}const _O={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function bO(B){return V5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xO extends W5{constructor(d){super();H5(this,d,bO,gO,R5,{})}}export{xO as default,_O as metadata};
