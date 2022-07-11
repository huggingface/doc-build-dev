import{S as WN,i as HN,s as RN,e as r,k as c,w as y,t as n,M as QN,c as a,d as t,m as p,a as i,x as v,h as s,b as u,G as e,g as b,y as w,q as $,o as F,B as x,v as VN,L as te}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ee}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function KN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertModel, BertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function JN(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function GN(B){let d,_,m,h,g;return h=new oe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),_=n("pair mask has the following format:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"pair mask has the following format:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function XN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function YN(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function ZN(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function e7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function t7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function o7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function n7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function s7(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function r7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function a7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function i7(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function l7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function d7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function c7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function p7(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function h7(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function m7(B){let d,_,m,h,g;return h=new oe({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function f7(B){let d,_;return d=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function u7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function g7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function _7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function b7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function k7(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function T7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function y7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function v7(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function w7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function $7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function F7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function x7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function B7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function E7(B){let d,_,m,h,g;return h=new oe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function z7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function M7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function P7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function q7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function j7(B){let d,_;return d=new oe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function C7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function N7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function O7(B){let d,_,m,h,g;return h=new oe({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=r("p"),_=n("Examples:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function I7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function A7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function L7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function D7(B){let d,_;return d=new oe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function S7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function U7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function W7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function H7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function R7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function Q7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function V7(B){let d,_;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function K7(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),g=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),E=r("li"),be=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=c(),M=r("p"),ne=n("This second option is useful when using "),L=r("code"),re=n("tf.keras.Model.fit"),ke=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),Te=n("model(inputs)"),me=n("."),J=c(),O=r("p"),ae=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Y=c(),P=r("ul"),j=r("li"),ie=n("a single Tensor with "),H=r("code"),fe=n("input_ids"),le=n(" only and nothing else: "),S=r("code"),ye=n("model(inputs_ids)"),ue=c(),q=r("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=r("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r("code"),pe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=a(T,"P",{});var z=i(d);_=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),m=p(T),h=a(T,"UL",{});var K=i(h);g=a(K,"LI",{});var Me=i(g);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(K),E=a(K,"LI",{});var Be=i(E);be=s(Be,"having all inputs as a list, tuple or dict in the first positional arguments."),Be.forEach(t),K.forEach(t),X=p(T),M=a(T,"P",{});var I=i(M);ne=s(I,"This second option is useful when using "),L=a(I,"CODE",{});var Pe=i(L);re=s(Pe,"tf.keras.Model.fit"),Pe.forEach(t),ke=s(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(I,"CODE",{});var Ee=i(D);Te=s(Ee,"model(inputs)"),Ee.forEach(t),me=s(I,"."),I.forEach(t),J=p(T),O=a(T,"P",{});var qe=i(O);ae=s(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Y=p(T),P=a(T,"UL",{});var A=i(P);j=a(A,"LI",{});var W=i(j);ie=s(W,"a single Tensor with "),H=a(W,"CODE",{});var Fe=i(H);fe=s(Fe,"input_ids"),Fe.forEach(t),le=s(W," only and nothing else: "),S=a(W,"CODE",{});var xe=i(S);ye=s(xe,"model(inputs_ids)"),xe.forEach(t),W.forEach(t),ue=p(A),q=a(A,"LI",{});var U=i(q);ce=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var ze=i(R);ge=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),de=s(U," or "),Q=a(U,"CODE",{});var je=i(Q);_e=s(je,"model([input_ids, attention_mask, token_type_ids])"),je.forEach(t),U.forEach(t),se=p(A),N=a(A,"LI",{});var he=i(N);ve=s(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a(he,"CODE",{});var Ce=i(V);pe=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),he.forEach(t),A.forEach(t)},m(T,z){b(T,d,z),e(d,_),b(T,m,z),b(T,h,z),e(h,g),e(g,l),e(h,f),e(h,E),e(E,be),b(T,X,z),b(T,M,z),e(M,ne),e(M,L),e(L,re),e(M,ke),e(M,D),e(D,Te),e(M,me),b(T,J,z),b(T,O,z),e(O,ae),b(T,Y,z),b(T,P,z),e(P,j),e(j,ie),e(j,H),e(H,fe),e(j,le),e(j,S),e(S,ye),e(P,ue),e(P,q),e(q,ce),e(q,R),e(R,ge),e(q,de),e(q,Q),e(Q,_e),e(P,se),e(P,N),e(N,ve),e(N,V),e(V,pe)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(X),T&&t(M),T&&t(J),T&&t(O),T&&t(Y),T&&t(P)}}}function J7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function G7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function X7(B){let d,_;return d=new oe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,h){w(d,m,h),_=!0},p:te,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function Y7(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(f,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),g=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,m),e(m,h),e(d,g)},d(l){l&&t(d)}}}function Z7(B){let d,_,m,h,g;return h=new oe({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function eO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function oO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function sO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function aO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function lO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function cO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function hO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function fO(B){let d,_,m,h,g;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),g=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=r("p"),_=n("Example:"),m=c(),y(h.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),m=p(l),v(h.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,m,f),w(h,l,f),g=!0},p:te,i(l){g||($(h.$$.fragment,l),g=!0)},o(l){F(h.$$.fragment,l),g=!1},d(l){l&&t(d),l&&t(m),x(h,l)}}}function gO(B){let d,_,m,h,g,l,f,E,be,X,M,ne,L,re,ke,D,Te,me,J,O,ae,Y,P,j,ie,H,fe,le,S,ye,ue,q,ce,R,ge,de,Q,_e,se,N,ve,V,pe,T,z,K,Me,Be,I,Pe,Ee,qe,A,W,Fe,xe,U,ze,je,he,Ce,Eb,Nt,Ra,jy,ho,Cy,Ep,Ny,Oy,zp,Iy,Ay,Qa,Ly,Dy,Sy,Ko,Uy,Mp,Wy,Hy,Pp,Ry,Qy,Vy,_s,zb,Jo,bs,km,Va,Ky,Tm,Jy,Mb,Ne,Ka,Gy,ym,Xy,Yy,Ja,Zy,qp,ev,tv,ov,Bo,Ga,nv,vm,sv,rv,Xa,jp,av,wm,iv,lv,Cp,dv,$m,cv,pv,ks,Ya,hv,Za,mv,Fm,fv,uv,gv,It,ei,_v,xm,bv,kv,Ts,Tv,Go,yv,Bm,vv,wv,Em,$v,Fv,xv,Np,ti,Pb,Xo,ys,zm,oi,Bv,Mm,Ev,qb,rt,ni,zv,si,Mv,Pm,Pv,qv,jv,ri,Cv,Op,Nv,Ov,Iv,Eo,ai,Av,qm,Lv,Dv,ii,Ip,Sv,jm,Uv,Wv,Ap,Hv,Cm,Rv,Qv,At,li,Vv,Nm,Kv,Jv,vs,Gv,Yo,Xv,Om,Yv,Zv,Im,e1,t1,jb,Zo,ws,Am,di,o1,Lm,n1,Cb,at,ci,s1,en,r1,Dm,a1,i1,Sm,l1,d1,c1,pi,p1,Um,h1,m1,f1,zo,hi,u1,mi,g1,Wm,_1,b1,k1,$s,T1,Mo,fi,y1,tn,v1,Hm,w1,$1,Rm,F1,x1,B1,Fs,Nb,on,xs,Qm,ui,E1,Vm,z1,Ob,nn,gi,M1,_i,P1,Lp,q1,j1,Ib,sn,bi,C1,ki,N1,Dp,O1,I1,Ab,mo,Ti,A1,yi,L1,Sp,D1,S1,U1,Bs,vi,W1,Km,H1,Lb,rn,Es,Jm,wi,R1,Gm,Q1,Db,Oe,$i,V1,Xm,K1,J1,Fi,G1,Up,X1,Y1,Z1,xi,ew,Bi,tw,ow,nw,Ei,sw,zi,rw,aw,iw,Ke,lw,Ym,dw,cw,Zm,pw,hw,ef,mw,fw,tf,uw,gw,of,_w,bw,nf,kw,Tw,yw,Lt,Mi,vw,an,ww,Wp,$w,Fw,sf,xw,Bw,Ew,zs,zw,Ms,Sb,ln,Ps,rf,Pi,Mw,af,Pw,Ub,it,qi,qw,dn,jw,lf,Cw,Nw,df,Ow,Iw,Aw,ji,Lw,Hp,Dw,Sw,Uw,Ci,Ww,Ni,Hw,Rw,Qw,Dt,Oi,Vw,cn,Kw,Rp,Jw,Gw,cf,Xw,Yw,Zw,qs,e$,js,Wb,pn,Cs,pf,Ii,t$,hf,o$,Hb,lt,Ai,n$,Li,s$,mf,r$,a$,i$,Di,l$,Qp,d$,c$,p$,Si,h$,Ui,m$,f$,u$,St,Wi,g$,hn,_$,Vp,b$,k$,ff,T$,y$,v$,Ns,w$,Os,Rb,mn,Is,uf,Hi,$$,gf,F$,Qb,dt,Ri,x$,Qi,B$,_f,E$,z$,M$,Vi,P$,Kp,q$,j$,C$,Ki,N$,Ji,O$,I$,A$,ut,Gi,L$,fn,D$,Jp,S$,U$,bf,W$,H$,R$,As,Q$,Ls,V$,Ds,Vb,un,Ss,kf,Xi,K$,Tf,J$,Kb,ct,Yi,G$,Zi,X$,yf,Y$,Z$,e0,el,t0,Gp,o0,n0,s0,tl,r0,ol,a0,i0,l0,Ut,nl,d0,gn,c0,Xp,p0,h0,vf,m0,f0,u0,Us,g0,Ws,Jb,_n,Hs,wf,sl,_0,$f,b0,Gb,pt,rl,k0,Ff,T0,y0,al,v0,Yp,w0,$0,F0,il,x0,ll,B0,E0,z0,Ve,dl,M0,bn,P0,Zp,q0,j0,xf,C0,N0,O0,Rs,I0,Qs,A0,Vs,L0,Ks,D0,Js,Xb,kn,Gs,Bf,cl,S0,Ef,U0,Yb,ht,pl,W0,zf,H0,R0,hl,Q0,eh,V0,K0,J0,ml,G0,fl,X0,Y0,Z0,Wt,ul,e2,Tn,t2,th,o2,n2,Mf,s2,r2,a2,Xs,i2,Ys,Zb,yn,Zs,Pf,gl,l2,qf,d2,ek,mt,_l,c2,jf,p2,h2,bl,m2,oh,f2,u2,g2,kl,_2,Tl,b2,k2,T2,gt,yl,y2,vn,v2,nh,w2,$2,Cf,F2,x2,B2,er,E2,tr,z2,or,tk,wn,nr,Nf,vl,M2,Of,P2,ok,ft,wl,q2,$n,j2,If,C2,N2,Af,O2,I2,A2,$l,L2,sh,D2,S2,U2,Fl,W2,xl,H2,R2,Q2,_t,Bl,V2,Fn,K2,rh,J2,G2,Lf,X2,Y2,Z2,sr,eF,rr,tF,ar,nk,xn,ir,Df,El,oF,Sf,nF,sk,Je,zl,sF,Uf,rF,aF,Ml,iF,ah,lF,dF,cF,Pl,pF,ql,hF,mF,fF,lr,uF,Ht,jl,gF,Bn,_F,ih,bF,kF,Wf,TF,yF,vF,dr,wF,cr,rk,En,pr,Hf,Cl,$F,Rf,FF,ak,Ge,Nl,xF,zn,BF,Qf,EF,zF,Vf,MF,PF,qF,Ol,jF,lh,CF,NF,OF,Il,IF,Al,AF,LF,DF,hr,SF,Rt,Ll,UF,Mn,WF,dh,HF,RF,Kf,QF,VF,KF,mr,JF,fr,ik,Pn,ur,Jf,Dl,GF,Gf,XF,lk,qn,Sl,YF,bt,Ul,ZF,Ie,ex,Xf,tx,ox,Yf,nx,sx,Zf,rx,ax,eu,ix,lx,tu,dx,cx,ou,px,hx,nu,mx,fx,ux,Wl,Hl,gx,su,_x,bx,kx,Rl,Tx,ru,yx,vx,wx,G,$x,au,Fx,xx,iu,Bx,Ex,lu,zx,Mx,du,Px,qx,cu,jx,Cx,pu,Nx,Ox,hu,Ix,Ax,mu,Lx,Dx,fu,Sx,Ux,uu,Wx,Hx,gu,Rx,Qx,_u,Vx,Kx,bu,Jx,Gx,ku,Xx,Yx,Tu,Zx,eB,yu,tB,oB,vu,nB,sB,wu,rB,aB,$u,iB,lB,Fu,dB,cB,pB,gr,dk,jn,_r,xu,Ql,hB,Bu,mB,ck,Xe,Vl,fB,Kl,uB,Eu,gB,_B,bB,Jl,kB,ch,TB,yB,vB,Gl,wB,Xl,$B,FB,xB,br,BB,kt,Yl,EB,Cn,zB,ph,MB,PB,zu,qB,jB,CB,kr,NB,Tr,OB,yr,pk,Nn,vr,Mu,Zl,IB,Pu,AB,hk,Ye,ed,LB,td,DB,qu,SB,UB,WB,od,HB,hh,RB,QB,VB,nd,KB,sd,JB,GB,XB,wr,YB,Qt,rd,ZB,On,eE,mh,tE,oE,ju,nE,sE,rE,$r,aE,Fr,mk,In,xr,Cu,ad,iE,Nu,lE,fk,Ze,id,dE,Ou,cE,pE,ld,hE,fh,mE,fE,uE,dd,gE,cd,_E,bE,kE,Br,TE,Tt,pd,yE,An,vE,uh,wE,$E,Iu,FE,xE,BE,Er,EE,zr,zE,Mr,uk,Ln,Pr,Au,hd,ME,Lu,PE,gk,et,md,qE,Du,jE,CE,fd,NE,gh,OE,IE,AE,ud,LE,gd,DE,SE,UE,qr,WE,Vt,_d,HE,Dn,RE,_h,QE,VE,Su,KE,JE,GE,jr,XE,Cr,_k,Sn,Nr,Uu,bd,YE,Wu,ZE,bk,tt,kd,ez,Hu,tz,oz,Td,nz,bh,sz,rz,az,yd,iz,vd,lz,dz,cz,Or,pz,yt,wd,hz,Un,mz,kh,fz,uz,Ru,gz,_z,bz,Ir,kz,Ar,Tz,Lr,kk,Wn,Dr,Qu,$d,yz,Vu,vz,Tk,ot,Fd,wz,Hn,$z,Ku,Fz,xz,Ju,Bz,Ez,zz,xd,Mz,Th,Pz,qz,jz,Bd,Cz,Ed,Nz,Oz,Iz,Sr,Az,vt,zd,Lz,Rn,Dz,yh,Sz,Uz,Gu,Wz,Hz,Rz,Ur,Qz,Wr,Vz,Hr,yk,Qn,Rr,Xu,Md,Kz,Yu,Jz,vk,Ae,Pd,Gz,Zu,Xz,Yz,qd,Zz,vh,eM,tM,oM,jd,nM,Cd,sM,rM,aM,eg,iM,lM,fo,tg,Nd,dM,cM,og,Od,pM,hM,ng,Id,mM,fM,sg,Ad,uM,gM,Kt,Ld,_M,Vn,bM,rg,kM,TM,ag,yM,vM,wM,Qr,$M,Vr,wk,Kn,Kr,ig,Dd,FM,lg,xM,$k,Le,Sd,BM,Jn,EM,dg,zM,MM,cg,PM,qM,jM,Ud,CM,wh,NM,OM,IM,Wd,AM,Hd,LM,DM,SM,pg,UM,WM,uo,hg,Rd,HM,RM,mg,Qd,QM,VM,fg,Vd,KM,JM,ug,Kd,GM,XM,Jt,Jd,YM,Gn,ZM,gg,e5,t5,_g,o5,n5,s5,Jr,r5,Gr,Fk,Xn,Xr,bg,Gd,a5,kg,i5,xk,De,Xd,l5,Tg,d5,c5,Yd,p5,$h,h5,m5,f5,Zd,u5,ec,g5,_5,b5,yg,k5,T5,go,vg,tc,y5,v5,wg,oc,w5,$5,$g,nc,F5,x5,Fg,sc,B5,E5,Gt,rc,z5,Yn,M5,xg,P5,q5,Bg,j5,C5,N5,Yr,O5,Zr,Bk,Zn,ea,Eg,ac,I5,zg,A5,Ek,Se,ic,L5,lc,D5,Mg,S5,U5,W5,dc,H5,Fh,R5,Q5,V5,cc,K5,pc,J5,G5,X5,Pg,Y5,Z5,_o,qg,hc,e4,t4,jg,mc,o4,n4,Cg,fc,s4,r4,Ng,uc,a4,i4,Xt,gc,l4,es,d4,Og,c4,p4,Ig,h4,m4,f4,ta,u4,oa,zk,ts,na,Ag,_c,g4,Lg,_4,Mk,Ue,bc,b4,kc,k4,Dg,T4,y4,v4,Tc,w4,xh,$4,F4,x4,yc,B4,vc,E4,z4,M4,Sg,P4,q4,bo,Ug,wc,j4,C4,Wg,$c,N4,O4,Hg,Fc,I4,A4,Rg,xc,L4,D4,Yt,Bc,S4,os,U4,Qg,W4,H4,Vg,R4,Q4,V4,sa,K4,ra,Pk,ns,aa,Kg,Ec,J4,Jg,G4,qk,We,zc,X4,Gg,Y4,Z4,Mc,eP,Bh,tP,oP,nP,Pc,sP,qc,rP,aP,iP,Xg,lP,dP,ko,Yg,jc,cP,pP,Zg,Cc,hP,mP,e_,Nc,fP,uP,t_,Oc,gP,_P,Zt,Ic,bP,ss,kP,o_,TP,yP,n_,vP,wP,$P,ia,FP,la,jk,rs,da,s_,Ac,xP,r_,BP,Ck,He,Lc,EP,a_,zP,MP,Dc,PP,Eh,qP,jP,CP,Sc,NP,Uc,OP,IP,AP,i_,LP,DP,To,l_,Wc,SP,UP,d_,Hc,WP,HP,c_,Rc,RP,QP,p_,Qc,VP,KP,eo,Vc,JP,as,GP,h_,XP,YP,m_,ZP,eq,tq,ca,oq,pa,Nk,is,ha,f_,Kc,nq,u_,sq,Ok,Re,Jc,rq,g_,aq,iq,Gc,lq,zh,dq,cq,pq,Xc,hq,Yc,mq,fq,uq,__,gq,_q,yo,b_,Zc,bq,kq,k_,ep,Tq,yq,T_,tp,vq,wq,y_,op,$q,Fq,to,np,xq,ls,Bq,v_,Eq,zq,w_,Mq,Pq,qq,ma,jq,fa,Ik,ds,ua,$_,sp,Cq,F_,Nq,Ak,Qe,rp,Oq,cs,Iq,x_,Aq,Lq,B_,Dq,Sq,Uq,ap,Wq,Mh,Hq,Rq,Qq,ip,Vq,lp,Kq,Jq,Gq,E_,Xq,Yq,vo,z_,dp,Zq,e8,M_,cp,t8,o8,P_,pp,n8,s8,q_,hp,r8,a8,oo,mp,i8,ps,l8,j_,d8,c8,C_,p8,h8,m8,ga,f8,_a,Lk;return l=new $e({}),re=new $e({}),ze=new $e({}),Ra=new C({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/configuration_bert.py#L72"}}),_s=new ee({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[KN]},$$scope:{ctx:B}}}),Va=new $e({}),Ka=new C({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert.py#L137"}}),Ga=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ya=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ei=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new ee({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[JN]},$$scope:{ctx:B}}}),ti=new C({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert.py#L350"}}),oi=new $e({}),ni=new C({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),ai=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),li=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new ee({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[GN]},$$scope:{ctx:B}}}),di=new $e({}),ci=new C({props:{name:"class transformers.TFBertTokenizer",anchor:"transformers.TFBertTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.vocab_list",description:`<strong>vocab_list</strong> (<code>list</code>) &#x2014;
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
Whether to return the attention_mask.`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert_tf.py#L11"}}),hi=new C({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert_tf.py#L113"}}),$s=new ee({props:{anchor:"transformers.TFBertTokenizer.from_pretrained.example",$$slots:{default:[XN]},$$scope:{ctx:B}}}),fi=new C({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/tokenization_bert_tf.py#L83"}}),Fs=new ee({props:{anchor:"transformers.TFBertTokenizer.from_tokenizer.example",$$slots:{default:[YN]},$$scope:{ctx:B}}}),ui=new $e({}),gi=new C({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L767"}}),bi=new C({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L925"}}),Ti=new C({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L64"}}),vi=new C({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/flax/struct.py#L109"}}),wi=new $e({}),$i=new C({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L870"}}),Mi=new C({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zs=new we({props:{$$slots:{default:[ZN]},$$scope:{ctx:B}}}),Ms=new ee({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[e7]},$$scope:{ctx:B}}}),Pi=new $e({}),qi=new C({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1053"}}),Oi=new C({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1069",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new we({props:{$$slots:{default:[t7]},$$scope:{ctx:B}}}),js=new ee({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[o7]},$$scope:{ctx:B}}}),Ii=new $e({}),Ai=new C({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1157"}}),Wi=new C({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new we({props:{$$slots:{default:[n7]},$$scope:{ctx:B}}}),Os=new ee({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[s7]},$$scope:{ctx:B}}}),Hi=new $e({}),Ri=new C({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1292"}}),Gi=new C({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new we({props:{$$slots:{default:[r7]},$$scope:{ctx:B}}}),Ls=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[a7]},$$scope:{ctx:B}}}),Ds=new ee({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[i7]},$$scope:{ctx:B}}}),Xi=new $e({}),Yi=new C({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1405"}}),nl=new C({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1415",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new we({props:{$$slots:{default:[l7]},$$scope:{ctx:B}}}),Ws=new ee({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[d7]},$$scope:{ctx:B}}}),sl=new $e({}),rl=new C({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1510"}}),dl=new C({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1526",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new we({props:{$$slots:{default:[c7]},$$scope:{ctx:B}}}),Qs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[p7]},$$scope:{ctx:B}}}),Vs=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[h7]},$$scope:{ctx:B}}}),Ks=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[m7]},$$scope:{ctx:B}}}),Js=new ee({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[f7]},$$scope:{ctx:B}}}),cl=new $e({}),pl=new C({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1614"}}),ul=new C({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1628",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new we({props:{$$slots:{default:[u7]},$$scope:{ctx:B}}}),Ys=new ee({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[g7]},$$scope:{ctx:B}}}),gl=new $e({}),_l=new C({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1709"}}),yl=new C({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1727",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new we({props:{$$slots:{default:[_7]},$$scope:{ctx:B}}}),tr=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[b7]},$$scope:{ctx:B}}}),or=new ee({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[k7]},$$scope:{ctx:B}}}),vl=new $e({}),wl=new C({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1796"}}),Bl=new C({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_bert.py#L1810",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sr=new we({props:{$$slots:{default:[T7]},$$scope:{ctx:B}}}),rr=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[y7]},$$scope:{ctx:B}}}),ar=new ee({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[v7]},$$scope:{ctx:B}}}),El=new $e({}),zl=new C({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1052"}}),lr=new we({props:{$$slots:{default:[w7]},$$scope:{ctx:B}}}),jl=new C({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dr=new we({props:{$$slots:{default:[$7]},$$scope:{ctx:B}}}),cr=new ee({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[F7]},$$scope:{ctx:B}}}),Cl=new $e({}),Nl=new C({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1149"}}),hr=new we({props:{$$slots:{default:[x7]},$$scope:{ctx:B}}}),Ll=new C({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mr=new we({props:{$$slots:{default:[B7]},$$scope:{ctx:B}}}),fr=new ee({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[E7]},$$scope:{ctx:B}}}),Dl=new $e({}),Sl=new C({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1358"}}),Ul=new C({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1395",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new ee({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[z7]},$$scope:{ctx:B}}}),Ql=new $e({}),Vl=new C({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1266"}}),br=new we({props:{$$slots:{default:[M7]},$$scope:{ctx:B}}}),Yl=new C({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1294",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kr=new we({props:{$$slots:{default:[P7]},$$scope:{ctx:B}}}),Tr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[q7]},$$scope:{ctx:B}}}),yr=new ee({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[j7]},$$scope:{ctx:B}}}),Zl=new $e({}),ed=new C({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1508"}}),wr=new we({props:{$$slots:{default:[C7]},$$scope:{ctx:B}}}),rd=new C({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1518",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$r=new we({props:{$$slots:{default:[N7]},$$scope:{ctx:B}}}),Fr=new ee({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[O7]},$$scope:{ctx:B}}}),ad=new $e({}),id=new C({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1599"}}),Br=new we({props:{$$slots:{default:[I7]},$$scope:{ctx:B}}}),pd=new C({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1620",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Er=new we({props:{$$slots:{default:[A7]},$$scope:{ctx:B}}}),zr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[L7]},$$scope:{ctx:B}}}),Mr=new ee({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[D7]},$$scope:{ctx:B}}}),hd=new $e({}),md=new C({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1692"}}),qr=new we({props:{$$slots:{default:[S7]},$$scope:{ctx:B}}}),_d=new C({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1716",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jr=new we({props:{$$slots:{default:[U7]},$$scope:{ctx:B}}}),Cr=new ee({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[W7]},$$scope:{ctx:B}}}),bd=new $e({}),kd=new C({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1822"}}),Or=new we({props:{$$slots:{default:[H7]},$$scope:{ctx:B}}}),wd=new C({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1849",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ir=new we({props:{$$slots:{default:[R7]},$$scope:{ctx:B}}}),Ar=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[Q7]},$$scope:{ctx:B}}}),Lr=new ee({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[V7]},$$scope:{ctx:B}}}),$d=new $e({}),Fd=new C({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1919"}}),Sr=new we({props:{$$slots:{default:[K7]},$$scope:{ctx:B}}}),zd=new C({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_tf_bert.py#L1941",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ur=new we({props:{$$slots:{default:[J7]},$$scope:{ctx:B}}}),Wr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[G7]},$$scope:{ctx:B}}}),Hr=new ee({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[X7]},$$scope:{ctx:B}}}),Md=new $e({}),Pd=new C({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1028"}}),Ld=new C({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new we({props:{$$slots:{default:[Y7]},$$scope:{ctx:B}}}),Vr=new ee({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[Z7]},$$scope:{ctx:B}}}),Dd=new $e({}),Sd=new C({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1106"}}),Jd=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jr=new we({props:{$$slots:{default:[eO]},$$scope:{ctx:B}}}),Gr=new ee({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[tO]},$$scope:{ctx:B}}}),Gd=new $e({}),Xd=new C({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1683"}}),rc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yr=new we({props:{$$slots:{default:[oO]},$$scope:{ctx:B}}}),Zr=new ee({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[nO]},$$scope:{ctx:B}}}),ac=new $e({}),ic=new C({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1197"}}),gc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ta=new we({props:{$$slots:{default:[sO]},$$scope:{ctx:B}}}),oa=new ee({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[rO]},$$scope:{ctx:B}}}),_c=new $e({}),bc=new C({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1263"}}),Bc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sa=new we({props:{$$slots:{default:[aO]},$$scope:{ctx:B}}}),ra=new ee({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[iO]},$$scope:{ctx:B}}}),Ec=new $e({}),zc=new C({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1366"}}),Ic=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ia=new we({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),la=new ee({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),Ac=new $e({}),Lc=new C({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1447"}}),Vc=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ca=new we({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),pa=new ee({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),Kc=new $e({}),Jc=new C({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1525"}}),np=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ma=new we({props:{$$slots:{default:[hO]},$$scope:{ctx:B}}}),fa=new ee({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[mO]},$$scope:{ctx:B}}}),sp=new $e({}),rp=new C({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L1598"}}),mp=new C({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ga=new we({props:{$$slots:{default:[fO]},$$scope:{ctx:B}}}),_a=new ee({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[uO]},$$scope:{ctx:B}}}),{c(){d=r("meta"),_=c(),m=r("h1"),h=r("a"),g=r("span"),y(l.$$.fragment),f=c(),E=r("span"),be=n("BERT"),X=c(),M=r("h2"),ne=r("a"),L=r("span"),y(re.$$.fragment),ke=c(),D=r("span"),Te=n("Overview"),me=c(),J=r("p"),O=n("The BERT model was proposed in "),ae=r("a"),Y=n("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),P=n(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),j=c(),ie=r("p"),H=n("The abstract from the paper is the following:"),fe=c(),le=r("p"),S=r("em"),ye=n(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ue=c(),q=r("p"),ce=r("em"),R=n(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),ge=c(),de=r("p"),Q=n("Tips:"),_e=c(),se=r("ul"),N=r("li"),ve=n(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),V=c(),pe=r("li"),T=n(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),z=c(),K=r("p"),Me=n("This model was contributed by "),Be=r("a"),I=n("thomwolf"),Pe=n(". The original code can be found "),Ee=r("a"),qe=n("here"),A=n("."),W=c(),Fe=r("h2"),xe=r("a"),U=r("span"),y(ze.$$.fragment),je=c(),he=r("span"),Ce=n("BertConfig"),Eb=c(),Nt=r("div"),y(Ra.$$.fragment),jy=c(),ho=r("p"),Cy=n("This is the configuration class to store the configuration of a "),Ep=r("a"),Ny=n("BertModel"),Oy=n(" or a "),zp=r("a"),Iy=n("TFBertModel"),Ay=n(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Qa=r("a"),Ly=n("bert-base-uncased"),Dy=n(" architecture."),Sy=c(),Ko=r("p"),Uy=n("Configuration objects inherit from "),Mp=r("a"),Wy=n("PretrainedConfig"),Hy=n(` and can be used to control the model outputs. Read the
documentation from `),Pp=r("a"),Ry=n("PretrainedConfig"),Qy=n(" for more information."),Vy=c(),y(_s.$$.fragment),zb=c(),Jo=r("h2"),bs=r("a"),km=r("span"),y(Va.$$.fragment),Ky=c(),Tm=r("span"),Jy=n("BertTokenizer"),Mb=c(),Ne=r("div"),y(Ka.$$.fragment),Gy=c(),ym=r("p"),Xy=n("Construct a BERT tokenizer. Based on WordPiece."),Yy=c(),Ja=r("p"),Zy=n("This tokenizer inherits from "),qp=r("a"),ev=n("PreTrainedTokenizer"),tv=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ov=c(),Bo=r("div"),y(Ga.$$.fragment),nv=c(),vm=r("p"),sv=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),rv=c(),Xa=r("ul"),jp=r("li"),av=n("single sequence: "),wm=r("code"),iv=n("[CLS] X [SEP]"),lv=c(),Cp=r("li"),dv=n("pair of sequences: "),$m=r("code"),cv=n("[CLS] A [SEP] B [SEP]"),pv=c(),ks=r("div"),y(Ya.$$.fragment),hv=c(),Za=r("p"),mv=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fm=r("code"),fv=n("prepare_for_model"),uv=n(" method."),gv=c(),It=r("div"),y(ei.$$.fragment),_v=c(),xm=r("p"),bv=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),kv=c(),y(Ts.$$.fragment),Tv=c(),Go=r("p"),yv=n("If "),Bm=r("code"),vv=n("token_ids_1"),wv=n(" is "),Em=r("code"),$v=n("None"),Fv=n(", this method only returns the first portion of the mask (0s)."),xv=c(),Np=r("div"),y(ti.$$.fragment),Pb=c(),Xo=r("h2"),ys=r("a"),zm=r("span"),y(oi.$$.fragment),Bv=c(),Mm=r("span"),Ev=n("BertTokenizerFast"),qb=c(),rt=r("div"),y(ni.$$.fragment),zv=c(),si=r("p"),Mv=n("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=r("em"),Pv=n("tokenizers"),qv=n(" library). Based on WordPiece."),jv=c(),ri=r("p"),Cv=n("This tokenizer inherits from "),Op=r("a"),Nv=n("PreTrainedTokenizerFast"),Ov=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Iv=c(),Eo=r("div"),y(ai.$$.fragment),Av=c(),qm=r("p"),Lv=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Dv=c(),ii=r("ul"),Ip=r("li"),Sv=n("single sequence: "),jm=r("code"),Uv=n("[CLS] X [SEP]"),Wv=c(),Ap=r("li"),Hv=n("pair of sequences: "),Cm=r("code"),Rv=n("[CLS] A [SEP] B [SEP]"),Qv=c(),At=r("div"),y(li.$$.fragment),Vv=c(),Nm=r("p"),Kv=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Jv=c(),y(vs.$$.fragment),Gv=c(),Yo=r("p"),Xv=n("If "),Om=r("code"),Yv=n("token_ids_1"),Zv=n(" is "),Im=r("code"),e1=n("None"),t1=n(", this method only returns the first portion of the mask (0s)."),jb=c(),Zo=r("h2"),ws=r("a"),Am=r("span"),y(di.$$.fragment),o1=c(),Lm=r("span"),n1=n("TFBertTokenizer"),Cb=c(),at=r("div"),y(ci.$$.fragment),s1=c(),en=r("p"),r1=n(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=r("code"),a1=n("from_pretrained()"),i1=n(" method. It can also be initialized with the "),Sm=r("code"),l1=n("from_tokenizer()"),d1=n(` method, which imports settings
from an existing standard tokenizer object.`),c1=c(),pi=r("p"),p1=n(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=r("code"),h1=n("tf.string"),m1=n(" inputs to outputs."),f1=c(),zo=r("div"),y(hi.$$.fragment),u1=c(),mi=r("p"),g1=n("Instantiate a "),Wm=r("code"),_1=n("TFBertTokenizer"),b1=n(" from a pre-trained tokenizer."),k1=c(),y($s.$$.fragment),T1=c(),Mo=r("div"),y(fi.$$.fragment),y1=c(),tn=r("p"),v1=n("Initialize a "),Hm=r("code"),w1=n("TFBertTokenizer"),$1=n(" from an existing "),Rm=r("code"),F1=n("Tokenizer"),x1=n("."),B1=c(),y(Fs.$$.fragment),Nb=c(),on=r("h2"),xs=r("a"),Qm=r("span"),y(ui.$$.fragment),E1=c(),Vm=r("span"),z1=n("Bert specific outputs"),Ob=c(),nn=r("div"),y(gi.$$.fragment),M1=c(),_i=r("p"),P1=n("Output type of "),Lp=r("a"),q1=n("BertForPreTraining"),j1=n("."),Ib=c(),sn=r("div"),y(bi.$$.fragment),C1=c(),ki=r("p"),N1=n("Output type of "),Dp=r("a"),O1=n("TFBertForPreTraining"),I1=n("."),Ab=c(),mo=r("div"),y(Ti.$$.fragment),A1=c(),yi=r("p"),L1=n("Output type of "),Sp=r("a"),D1=n("BertForPreTraining"),S1=n("."),U1=c(),Bs=r("div"),y(vi.$$.fragment),W1=c(),Km=r("p"),H1=n("\u201CReturns a new object replacing the specified fields with new values."),Lb=c(),rn=r("h2"),Es=r("a"),Jm=r("span"),y(wi.$$.fragment),R1=c(),Gm=r("span"),Q1=n("BertModel"),Db=c(),Oe=r("div"),y($i.$$.fragment),V1=c(),Xm=r("p"),K1=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),J1=c(),Fi=r("p"),G1=n("This model inherits from "),Up=r("a"),X1=n("PreTrainedModel"),Y1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z1=c(),xi=r("p"),ew=n("This model is also a PyTorch "),Bi=r("a"),tw=n("torch.nn.Module"),ow=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nw=c(),Ei=r("p"),sw=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),zi=r("a"),rw=n(`Attention is
all you need`),aw=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),iw=c(),Ke=r("p"),lw=n("To behave as an decoder the model needs to be initialized with the "),Ym=r("code"),dw=n("is_decoder"),cw=n(` argument of the configuration set
to `),Zm=r("code"),pw=n("True"),hw=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=r("code"),mw=n("is_decoder"),fw=n(` argument and
`),tf=r("code"),uw=n("add_cross_attention"),gw=n(" set to "),of=r("code"),_w=n("True"),bw=n("; an "),nf=r("code"),kw=n("encoder_hidden_states"),Tw=n(" is then expected as an input to the forward pass."),yw=c(),Lt=r("div"),y(Mi.$$.fragment),vw=c(),an=r("p"),ww=n("The "),Wp=r("a"),$w=n("BertModel"),Fw=n(" forward method, overrides the "),sf=r("code"),xw=n("__call__"),Bw=n(" special method."),Ew=c(),y(zs.$$.fragment),zw=c(),y(Ms.$$.fragment),Sb=c(),ln=r("h2"),Ps=r("a"),rf=r("span"),y(Pi.$$.fragment),Mw=c(),af=r("span"),Pw=n("BertForPreTraining"),Ub=c(),it=r("div"),y(qi.$$.fragment),qw=c(),dn=r("p"),jw=n("Bert Model with two heads on top as done during the pretraining: a "),lf=r("code"),Cw=n("masked language modeling"),Nw=n(" head and a "),df=r("code"),Ow=n("next sentence prediction (classification)"),Iw=n(" head."),Aw=c(),ji=r("p"),Lw=n("This model inherits from "),Hp=r("a"),Dw=n("PreTrainedModel"),Sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uw=c(),Ci=r("p"),Ww=n("This model is also a PyTorch "),Ni=r("a"),Hw=n("torch.nn.Module"),Rw=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qw=c(),Dt=r("div"),y(Oi.$$.fragment),Vw=c(),cn=r("p"),Kw=n("The "),Rp=r("a"),Jw=n("BertForPreTraining"),Gw=n(" forward method, overrides the "),cf=r("code"),Xw=n("__call__"),Yw=n(" special method."),Zw=c(),y(qs.$$.fragment),e$=c(),y(js.$$.fragment),Wb=c(),pn=r("h2"),Cs=r("a"),pf=r("span"),y(Ii.$$.fragment),t$=c(),hf=r("span"),o$=n("BertLMHeadModel"),Hb=c(),lt=r("div"),y(Ai.$$.fragment),n$=c(),Li=r("p"),s$=n("Bert Model with a "),mf=r("code"),r$=n("language modeling"),a$=n(" head on top for CLM fine-tuning."),i$=c(),Di=r("p"),l$=n("This model inherits from "),Qp=r("a"),d$=n("PreTrainedModel"),c$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p$=c(),Si=r("p"),h$=n("This model is also a PyTorch "),Ui=r("a"),m$=n("torch.nn.Module"),f$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u$=c(),St=r("div"),y(Wi.$$.fragment),g$=c(),hn=r("p"),_$=n("The "),Vp=r("a"),b$=n("BertLMHeadModel"),k$=n(" forward method, overrides the "),ff=r("code"),T$=n("__call__"),y$=n(" special method."),v$=c(),y(Ns.$$.fragment),w$=c(),y(Os.$$.fragment),Rb=c(),mn=r("h2"),Is=r("a"),uf=r("span"),y(Hi.$$.fragment),$$=c(),gf=r("span"),F$=n("BertForMaskedLM"),Qb=c(),dt=r("div"),y(Ri.$$.fragment),x$=c(),Qi=r("p"),B$=n("Bert Model with a "),_f=r("code"),E$=n("language modeling"),z$=n(" head on top."),M$=c(),Vi=r("p"),P$=n("This model inherits from "),Kp=r("a"),q$=n("PreTrainedModel"),j$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C$=c(),Ki=r("p"),N$=n("This model is also a PyTorch "),Ji=r("a"),O$=n("torch.nn.Module"),I$=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A$=c(),ut=r("div"),y(Gi.$$.fragment),L$=c(),fn=r("p"),D$=n("The "),Jp=r("a"),S$=n("BertForMaskedLM"),U$=n(" forward method, overrides the "),bf=r("code"),W$=n("__call__"),H$=n(" special method."),R$=c(),y(As.$$.fragment),Q$=c(),y(Ls.$$.fragment),V$=c(),y(Ds.$$.fragment),Vb=c(),un=r("h2"),Ss=r("a"),kf=r("span"),y(Xi.$$.fragment),K$=c(),Tf=r("span"),J$=n("BertForNextSentencePrediction"),Kb=c(),ct=r("div"),y(Yi.$$.fragment),G$=c(),Zi=r("p"),X$=n("Bert Model with a "),yf=r("code"),Y$=n("next sentence prediction (classification)"),Z$=n(" head on top."),e0=c(),el=r("p"),t0=n("This model inherits from "),Gp=r("a"),o0=n("PreTrainedModel"),n0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s0=c(),tl=r("p"),r0=n("This model is also a PyTorch "),ol=r("a"),a0=n("torch.nn.Module"),i0=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l0=c(),Ut=r("div"),y(nl.$$.fragment),d0=c(),gn=r("p"),c0=n("The "),Xp=r("a"),p0=n("BertForNextSentencePrediction"),h0=n(" forward method, overrides the "),vf=r("code"),m0=n("__call__"),f0=n(" special method."),u0=c(),y(Us.$$.fragment),g0=c(),y(Ws.$$.fragment),Jb=c(),_n=r("h2"),Hs=r("a"),wf=r("span"),y(sl.$$.fragment),_0=c(),$f=r("span"),b0=n("BertForSequenceClassification"),Gb=c(),pt=r("div"),y(rl.$$.fragment),k0=c(),Ff=r("p"),T0=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),y0=c(),al=r("p"),v0=n("This model inherits from "),Yp=r("a"),w0=n("PreTrainedModel"),$0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F0=c(),il=r("p"),x0=n("This model is also a PyTorch "),ll=r("a"),B0=n("torch.nn.Module"),E0=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z0=c(),Ve=r("div"),y(dl.$$.fragment),M0=c(),bn=r("p"),P0=n("The "),Zp=r("a"),q0=n("BertForSequenceClassification"),j0=n(" forward method, overrides the "),xf=r("code"),C0=n("__call__"),N0=n(" special method."),O0=c(),y(Rs.$$.fragment),I0=c(),y(Qs.$$.fragment),A0=c(),y(Vs.$$.fragment),L0=c(),y(Ks.$$.fragment),D0=c(),y(Js.$$.fragment),Xb=c(),kn=r("h2"),Gs=r("a"),Bf=r("span"),y(cl.$$.fragment),S0=c(),Ef=r("span"),U0=n("BertForMultipleChoice"),Yb=c(),ht=r("div"),y(pl.$$.fragment),W0=c(),zf=r("p"),H0=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),R0=c(),hl=r("p"),Q0=n("This model inherits from "),eh=r("a"),V0=n("PreTrainedModel"),K0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J0=c(),ml=r("p"),G0=n("This model is also a PyTorch "),fl=r("a"),X0=n("torch.nn.Module"),Y0=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z0=c(),Wt=r("div"),y(ul.$$.fragment),e2=c(),Tn=r("p"),t2=n("The "),th=r("a"),o2=n("BertForMultipleChoice"),n2=n(" forward method, overrides the "),Mf=r("code"),s2=n("__call__"),r2=n(" special method."),a2=c(),y(Xs.$$.fragment),i2=c(),y(Ys.$$.fragment),Zb=c(),yn=r("h2"),Zs=r("a"),Pf=r("span"),y(gl.$$.fragment),l2=c(),qf=r("span"),d2=n("BertForTokenClassification"),ek=c(),mt=r("div"),y(_l.$$.fragment),c2=c(),jf=r("p"),p2=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),h2=c(),bl=r("p"),m2=n("This model inherits from "),oh=r("a"),f2=n("PreTrainedModel"),u2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g2=c(),kl=r("p"),_2=n("This model is also a PyTorch "),Tl=r("a"),b2=n("torch.nn.Module"),k2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),T2=c(),gt=r("div"),y(yl.$$.fragment),y2=c(),vn=r("p"),v2=n("The "),nh=r("a"),w2=n("BertForTokenClassification"),$2=n(" forward method, overrides the "),Cf=r("code"),F2=n("__call__"),x2=n(" special method."),B2=c(),y(er.$$.fragment),E2=c(),y(tr.$$.fragment),z2=c(),y(or.$$.fragment),tk=c(),wn=r("h2"),nr=r("a"),Nf=r("span"),y(vl.$$.fragment),M2=c(),Of=r("span"),P2=n("BertForQuestionAnswering"),ok=c(),ft=r("div"),y(wl.$$.fragment),q2=c(),$n=r("p"),j2=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=r("code"),C2=n("span start logits"),N2=n(" and "),Af=r("code"),O2=n("span end logits"),I2=n(")."),A2=c(),$l=r("p"),L2=n("This model inherits from "),sh=r("a"),D2=n("PreTrainedModel"),S2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U2=c(),Fl=r("p"),W2=n("This model is also a PyTorch "),xl=r("a"),H2=n("torch.nn.Module"),R2=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q2=c(),_t=r("div"),y(Bl.$$.fragment),V2=c(),Fn=r("p"),K2=n("The "),rh=r("a"),J2=n("BertForQuestionAnswering"),G2=n(" forward method, overrides the "),Lf=r("code"),X2=n("__call__"),Y2=n(" special method."),Z2=c(),y(sr.$$.fragment),eF=c(),y(rr.$$.fragment),tF=c(),y(ar.$$.fragment),nk=c(),xn=r("h2"),ir=r("a"),Df=r("span"),y(El.$$.fragment),oF=c(),Sf=r("span"),nF=n("TFBertModel"),sk=c(),Je=r("div"),y(zl.$$.fragment),sF=c(),Uf=r("p"),rF=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aF=c(),Ml=r("p"),iF=n("This model inherits from "),ah=r("a"),lF=n("TFPreTrainedModel"),dF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cF=c(),Pl=r("p"),pF=n("This model is also a "),ql=r("a"),hF=n("tf.keras.Model"),mF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fF=c(),y(lr.$$.fragment),uF=c(),Ht=r("div"),y(jl.$$.fragment),gF=c(),Bn=r("p"),_F=n("The "),ih=r("a"),bF=n("TFBertModel"),kF=n(" forward method, overrides the "),Wf=r("code"),TF=n("__call__"),yF=n(" special method."),vF=c(),y(dr.$$.fragment),wF=c(),y(cr.$$.fragment),rk=c(),En=r("h2"),pr=r("a"),Hf=r("span"),y(Cl.$$.fragment),$F=c(),Rf=r("span"),FF=n("TFBertForPreTraining"),ak=c(),Ge=r("div"),y(Nl.$$.fragment),xF=c(),zn=r("p"),BF=n(`Bert Model with two heads on top as done during the pretraining:
a `),Qf=r("code"),EF=n("masked language modeling"),zF=n(" head and a "),Vf=r("code"),MF=n("next sentence prediction (classification)"),PF=n(" head."),qF=c(),Ol=r("p"),jF=n("This model inherits from "),lh=r("a"),CF=n("TFPreTrainedModel"),NF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OF=c(),Il=r("p"),IF=n("This model is also a "),Al=r("a"),AF=n("tf.keras.Model"),LF=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DF=c(),y(hr.$$.fragment),SF=c(),Rt=r("div"),y(Ll.$$.fragment),UF=c(),Mn=r("p"),WF=n("The "),dh=r("a"),HF=n("TFBertForPreTraining"),RF=n(" forward method, overrides the "),Kf=r("code"),QF=n("__call__"),VF=n(" special method."),KF=c(),y(mr.$$.fragment),JF=c(),y(fr.$$.fragment),ik=c(),Pn=r("h2"),ur=r("a"),Jf=r("span"),y(Dl.$$.fragment),GF=c(),Gf=r("span"),XF=n("TFBertModelLMHeadModel"),lk=c(),qn=r("div"),y(Sl.$$.fragment),YF=c(),bt=r("div"),y(Ul.$$.fragment),ZF=c(),Ie=r("p"),ex=n("encoder_hidden_states  ("),Xf=r("code"),tx=n("tf.Tensor"),ox=n(" of shape "),Yf=r("code"),nx=n("(batch_size, sequence_length, hidden_size)"),sx=n(", "),Zf=r("em"),rx=n("optional"),ax=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=r("code"),ix=n("tf.Tensor"),lx=n(" of shape "),tu=r("code"),dx=n("(batch_size, sequence_length)"),cx=n(", "),ou=r("em"),px=n("optional"),hx=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=r("code"),mx=n("[0, 1]"),fx=n(":"),ux=c(),Wl=r("ul"),Hl=r("li"),gx=n("1 for tokens that are "),su=r("strong"),_x=n("not masked"),bx=n(","),kx=c(),Rl=r("li"),Tx=n("0 for tokens that are "),ru=r("strong"),yx=n("masked"),vx=n("."),wx=c(),G=r("p"),$x=n("past_key_values ("),au=r("code"),Fx=n("Tuple[Tuple[tf.Tensor]]"),xx=n(" of length "),iu=r("code"),Bx=n("config.n_layers"),Ex=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=r("code"),zx=n("past_key_values"),Mx=n(" are used, the user can optionally input only the last "),du=r("code"),Px=n("decoder_input_ids"),qx=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=r("code"),jx=n("(batch_size, 1)"),Cx=n(` instead of all
`),pu=r("code"),Nx=n("decoder_input_ids"),Ox=n(" of shape "),hu=r("code"),Ix=n("(batch_size, sequence_length)"),Ax=n(`.
use_cache (`),mu=r("code"),Lx=n("bool"),Dx=n(", "),fu=r("em"),Sx=n("optional"),Ux=n(", defaults to "),uu=r("code"),Wx=n("True"),Hx=n(`):
If set to `),gu=r("code"),Rx=n("True"),Qx=n(", "),_u=r("code"),Vx=n("past_key_values"),Kx=n(` key value states are returned and can be used to speed up decoding (see
`),bu=r("code"),Jx=n("past_key_values"),Gx=n("). Set to "),ku=r("code"),Xx=n("False"),Yx=n(" during training, "),Tu=r("code"),Zx=n("True"),eB=n(` during generation
labels (`),yu=r("code"),tB=n("tf.Tensor"),oB=n(" or "),vu=r("code"),nB=n("np.ndarray"),sB=n(" of shape "),wu=r("code"),rB=n("(batch_size, sequence_length)"),aB=n(", "),$u=r("em"),iB=n("optional"),lB=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Fu=r("code"),dB=n("[0, ..., config.vocab_size - 1]"),cB=n("."),pB=c(),y(gr.$$.fragment),dk=c(),jn=r("h2"),_r=r("a"),xu=r("span"),y(Ql.$$.fragment),hB=c(),Bu=r("span"),mB=n("TFBertForMaskedLM"),ck=c(),Xe=r("div"),y(Vl.$$.fragment),fB=c(),Kl=r("p"),uB=n("Bert Model with a "),Eu=r("code"),gB=n("language modeling"),_B=n(" head on top."),bB=c(),Jl=r("p"),kB=n("This model inherits from "),ch=r("a"),TB=n("TFPreTrainedModel"),yB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vB=c(),Gl=r("p"),wB=n("This model is also a "),Xl=r("a"),$B=n("tf.keras.Model"),FB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xB=c(),y(br.$$.fragment),BB=c(),kt=r("div"),y(Yl.$$.fragment),EB=c(),Cn=r("p"),zB=n("The "),ph=r("a"),MB=n("TFBertForMaskedLM"),PB=n(" forward method, overrides the "),zu=r("code"),qB=n("__call__"),jB=n(" special method."),CB=c(),y(kr.$$.fragment),NB=c(),y(Tr.$$.fragment),OB=c(),y(yr.$$.fragment),pk=c(),Nn=r("h2"),vr=r("a"),Mu=r("span"),y(Zl.$$.fragment),IB=c(),Pu=r("span"),AB=n("TFBertForNextSentencePrediction"),hk=c(),Ye=r("div"),y(ed.$$.fragment),LB=c(),td=r("p"),DB=n("Bert Model with a "),qu=r("code"),SB=n("next sentence prediction (classification)"),UB=n(" head on top."),WB=c(),od=r("p"),HB=n("This model inherits from "),hh=r("a"),RB=n("TFPreTrainedModel"),QB=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VB=c(),nd=r("p"),KB=n("This model is also a "),sd=r("a"),JB=n("tf.keras.Model"),GB=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XB=c(),y(wr.$$.fragment),YB=c(),Qt=r("div"),y(rd.$$.fragment),ZB=c(),On=r("p"),eE=n("The "),mh=r("a"),tE=n("TFBertForNextSentencePrediction"),oE=n(" forward method, overrides the "),ju=r("code"),nE=n("__call__"),sE=n(" special method."),rE=c(),y($r.$$.fragment),aE=c(),y(Fr.$$.fragment),mk=c(),In=r("h2"),xr=r("a"),Cu=r("span"),y(ad.$$.fragment),iE=c(),Nu=r("span"),lE=n("TFBertForSequenceClassification"),fk=c(),Ze=r("div"),y(id.$$.fragment),dE=c(),Ou=r("p"),cE=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pE=c(),ld=r("p"),hE=n("This model inherits from "),fh=r("a"),mE=n("TFPreTrainedModel"),fE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uE=c(),dd=r("p"),gE=n("This model is also a "),cd=r("a"),_E=n("tf.keras.Model"),bE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kE=c(),y(Br.$$.fragment),TE=c(),Tt=r("div"),y(pd.$$.fragment),yE=c(),An=r("p"),vE=n("The "),uh=r("a"),wE=n("TFBertForSequenceClassification"),$E=n(" forward method, overrides the "),Iu=r("code"),FE=n("__call__"),xE=n(" special method."),BE=c(),y(Er.$$.fragment),EE=c(),y(zr.$$.fragment),zE=c(),y(Mr.$$.fragment),uk=c(),Ln=r("h2"),Pr=r("a"),Au=r("span"),y(hd.$$.fragment),ME=c(),Lu=r("span"),PE=n("TFBertForMultipleChoice"),gk=c(),et=r("div"),y(md.$$.fragment),qE=c(),Du=r("p"),jE=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CE=c(),fd=r("p"),NE=n("This model inherits from "),gh=r("a"),OE=n("TFPreTrainedModel"),IE=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AE=c(),ud=r("p"),LE=n("This model is also a "),gd=r("a"),DE=n("tf.keras.Model"),SE=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UE=c(),y(qr.$$.fragment),WE=c(),Vt=r("div"),y(_d.$$.fragment),HE=c(),Dn=r("p"),RE=n("The "),_h=r("a"),QE=n("TFBertForMultipleChoice"),VE=n(" forward method, overrides the "),Su=r("code"),KE=n("__call__"),JE=n(" special method."),GE=c(),y(jr.$$.fragment),XE=c(),y(Cr.$$.fragment),_k=c(),Sn=r("h2"),Nr=r("a"),Uu=r("span"),y(bd.$$.fragment),YE=c(),Wu=r("span"),ZE=n("TFBertForTokenClassification"),bk=c(),tt=r("div"),y(kd.$$.fragment),ez=c(),Hu=r("p"),tz=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oz=c(),Td=r("p"),nz=n("This model inherits from "),bh=r("a"),sz=n("TFPreTrainedModel"),rz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),az=c(),yd=r("p"),iz=n("This model is also a "),vd=r("a"),lz=n("tf.keras.Model"),dz=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cz=c(),y(Or.$$.fragment),pz=c(),yt=r("div"),y(wd.$$.fragment),hz=c(),Un=r("p"),mz=n("The "),kh=r("a"),fz=n("TFBertForTokenClassification"),uz=n(" forward method, overrides the "),Ru=r("code"),gz=n("__call__"),_z=n(" special method."),bz=c(),y(Ir.$$.fragment),kz=c(),y(Ar.$$.fragment),Tz=c(),y(Lr.$$.fragment),kk=c(),Wn=r("h2"),Dr=r("a"),Qu=r("span"),y($d.$$.fragment),yz=c(),Vu=r("span"),vz=n("TFBertForQuestionAnswering"),Tk=c(),ot=r("div"),y(Fd.$$.fragment),wz=c(),Hn=r("p"),$z=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=r("code"),Fz=n("span start logits"),xz=n(" and "),Ju=r("code"),Bz=n("span end logits"),Ez=n(")."),zz=c(),xd=r("p"),Mz=n("This model inherits from "),Th=r("a"),Pz=n("TFPreTrainedModel"),qz=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jz=c(),Bd=r("p"),Cz=n("This model is also a "),Ed=r("a"),Nz=n("tf.keras.Model"),Oz=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iz=c(),y(Sr.$$.fragment),Az=c(),vt=r("div"),y(zd.$$.fragment),Lz=c(),Rn=r("p"),Dz=n("The "),yh=r("a"),Sz=n("TFBertForQuestionAnswering"),Uz=n(" forward method, overrides the "),Gu=r("code"),Wz=n("__call__"),Hz=n(" special method."),Rz=c(),y(Ur.$$.fragment),Qz=c(),y(Wr.$$.fragment),Vz=c(),y(Hr.$$.fragment),yk=c(),Qn=r("h2"),Rr=r("a"),Xu=r("span"),y(Md.$$.fragment),Kz=c(),Yu=r("span"),Jz=n("FlaxBertModel"),vk=c(),Ae=r("div"),y(Pd.$$.fragment),Gz=c(),Zu=r("p"),Xz=n("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Yz=c(),qd=r("p"),Zz=n("This model inherits from "),vh=r("a"),eM=n("FlaxPreTrainedModel"),tM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oM=c(),jd=r("p"),nM=n("This model is also a Flax Linen "),Cd=r("a"),sM=n("flax.linen.Module"),rM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),aM=c(),eg=r("p"),iM=n("Finally, this model supports inherent JAX features such as:"),lM=c(),fo=r("ul"),tg=r("li"),Nd=r("a"),dM=n("Just-In-Time (JIT) compilation"),cM=c(),og=r("li"),Od=r("a"),pM=n("Automatic Differentiation"),hM=c(),ng=r("li"),Id=r("a"),mM=n("Vectorization"),fM=c(),sg=r("li"),Ad=r("a"),uM=n("Parallelization"),gM=c(),Kt=r("div"),y(Ld.$$.fragment),_M=c(),Vn=r("p"),bM=n("The "),rg=r("code"),kM=n("FlaxBertPreTrainedModel"),TM=n(" forward method, overrides the "),ag=r("code"),yM=n("__call__"),vM=n(" special method."),wM=c(),y(Qr.$$.fragment),$M=c(),y(Vr.$$.fragment),wk=c(),Kn=r("h2"),Kr=r("a"),ig=r("span"),y(Dd.$$.fragment),FM=c(),lg=r("span"),xM=n("FlaxBertForPreTraining"),$k=c(),Le=r("div"),y(Sd.$$.fragment),BM=c(),Jn=r("p"),EM=n("Bert Model with two heads on top as done during the pretraining: a "),dg=r("code"),zM=n("masked language modeling"),MM=n(" head and a "),cg=r("code"),PM=n("next sentence prediction (classification)"),qM=n(" head."),jM=c(),Ud=r("p"),CM=n("This model inherits from "),wh=r("a"),NM=n("FlaxPreTrainedModel"),OM=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),IM=c(),Wd=r("p"),AM=n("This model is also a Flax Linen "),Hd=r("a"),LM=n("flax.linen.Module"),DM=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),SM=c(),pg=r("p"),UM=n("Finally, this model supports inherent JAX features such as:"),WM=c(),uo=r("ul"),hg=r("li"),Rd=r("a"),HM=n("Just-In-Time (JIT) compilation"),RM=c(),mg=r("li"),Qd=r("a"),QM=n("Automatic Differentiation"),VM=c(),fg=r("li"),Vd=r("a"),KM=n("Vectorization"),JM=c(),ug=r("li"),Kd=r("a"),GM=n("Parallelization"),XM=c(),Jt=r("div"),y(Jd.$$.fragment),YM=c(),Gn=r("p"),ZM=n("The "),gg=r("code"),e5=n("FlaxBertPreTrainedModel"),t5=n(" forward method, overrides the "),_g=r("code"),o5=n("__call__"),n5=n(" special method."),s5=c(),y(Jr.$$.fragment),r5=c(),y(Gr.$$.fragment),Fk=c(),Xn=r("h2"),Xr=r("a"),bg=r("span"),y(Gd.$$.fragment),a5=c(),kg=r("span"),i5=n("FlaxBertForCausalLM"),xk=c(),De=r("div"),y(Xd.$$.fragment),l5=c(),Tg=r("p"),d5=n(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),c5=c(),Yd=r("p"),p5=n("This model inherits from "),$h=r("a"),h5=n("FlaxPreTrainedModel"),m5=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f5=c(),Zd=r("p"),u5=n("This model is also a Flax Linen "),ec=r("a"),g5=n("flax.linen.Module"),_5=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b5=c(),yg=r("p"),k5=n("Finally, this model supports inherent JAX features such as:"),T5=c(),go=r("ul"),vg=r("li"),tc=r("a"),y5=n("Just-In-Time (JIT) compilation"),v5=c(),wg=r("li"),oc=r("a"),w5=n("Automatic Differentiation"),$5=c(),$g=r("li"),nc=r("a"),F5=n("Vectorization"),x5=c(),Fg=r("li"),sc=r("a"),B5=n("Parallelization"),E5=c(),Gt=r("div"),y(rc.$$.fragment),z5=c(),Yn=r("p"),M5=n("The "),xg=r("code"),P5=n("FlaxBertPreTrainedModel"),q5=n(" forward method, overrides the "),Bg=r("code"),j5=n("__call__"),C5=n(" special method."),N5=c(),y(Yr.$$.fragment),O5=c(),y(Zr.$$.fragment),Bk=c(),Zn=r("h2"),ea=r("a"),Eg=r("span"),y(ac.$$.fragment),I5=c(),zg=r("span"),A5=n("FlaxBertForMaskedLM"),Ek=c(),Se=r("div"),y(ic.$$.fragment),L5=c(),lc=r("p"),D5=n("Bert Model with a "),Mg=r("code"),S5=n("language modeling"),U5=n(" head on top."),W5=c(),dc=r("p"),H5=n("This model inherits from "),Fh=r("a"),R5=n("FlaxPreTrainedModel"),Q5=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V5=c(),cc=r("p"),K5=n("This model is also a Flax Linen "),pc=r("a"),J5=n("flax.linen.Module"),G5=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),X5=c(),Pg=r("p"),Y5=n("Finally, this model supports inherent JAX features such as:"),Z5=c(),_o=r("ul"),qg=r("li"),hc=r("a"),e4=n("Just-In-Time (JIT) compilation"),t4=c(),jg=r("li"),mc=r("a"),o4=n("Automatic Differentiation"),n4=c(),Cg=r("li"),fc=r("a"),s4=n("Vectorization"),r4=c(),Ng=r("li"),uc=r("a"),a4=n("Parallelization"),i4=c(),Xt=r("div"),y(gc.$$.fragment),l4=c(),es=r("p"),d4=n("The "),Og=r("code"),c4=n("FlaxBertPreTrainedModel"),p4=n(" forward method, overrides the "),Ig=r("code"),h4=n("__call__"),m4=n(" special method."),f4=c(),y(ta.$$.fragment),u4=c(),y(oa.$$.fragment),zk=c(),ts=r("h2"),na=r("a"),Ag=r("span"),y(_c.$$.fragment),g4=c(),Lg=r("span"),_4=n("FlaxBertForNextSentencePrediction"),Mk=c(),Ue=r("div"),y(bc.$$.fragment),b4=c(),kc=r("p"),k4=n("Bert Model with a "),Dg=r("code"),T4=n("next sentence prediction (classification)"),y4=n(" head on top."),v4=c(),Tc=r("p"),w4=n("This model inherits from "),xh=r("a"),$4=n("FlaxPreTrainedModel"),F4=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),x4=c(),yc=r("p"),B4=n("This model is also a Flax Linen "),vc=r("a"),E4=n("flax.linen.Module"),z4=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),M4=c(),Sg=r("p"),P4=n("Finally, this model supports inherent JAX features such as:"),q4=c(),bo=r("ul"),Ug=r("li"),wc=r("a"),j4=n("Just-In-Time (JIT) compilation"),C4=c(),Wg=r("li"),$c=r("a"),N4=n("Automatic Differentiation"),O4=c(),Hg=r("li"),Fc=r("a"),I4=n("Vectorization"),A4=c(),Rg=r("li"),xc=r("a"),L4=n("Parallelization"),D4=c(),Yt=r("div"),y(Bc.$$.fragment),S4=c(),os=r("p"),U4=n("The "),Qg=r("code"),W4=n("FlaxBertPreTrainedModel"),H4=n(" forward method, overrides the "),Vg=r("code"),R4=n("__call__"),Q4=n(" special method."),V4=c(),y(sa.$$.fragment),K4=c(),y(ra.$$.fragment),Pk=c(),ns=r("h2"),aa=r("a"),Kg=r("span"),y(Ec.$$.fragment),J4=c(),Jg=r("span"),G4=n("FlaxBertForSequenceClassification"),qk=c(),We=r("div"),y(zc.$$.fragment),X4=c(),Gg=r("p"),Y4=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Z4=c(),Mc=r("p"),eP=n("This model inherits from "),Bh=r("a"),tP=n("FlaxPreTrainedModel"),oP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nP=c(),Pc=r("p"),sP=n("This model is also a Flax Linen "),qc=r("a"),rP=n("flax.linen.Module"),aP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iP=c(),Xg=r("p"),lP=n("Finally, this model supports inherent JAX features such as:"),dP=c(),ko=r("ul"),Yg=r("li"),jc=r("a"),cP=n("Just-In-Time (JIT) compilation"),pP=c(),Zg=r("li"),Cc=r("a"),hP=n("Automatic Differentiation"),mP=c(),e_=r("li"),Nc=r("a"),fP=n("Vectorization"),uP=c(),t_=r("li"),Oc=r("a"),gP=n("Parallelization"),_P=c(),Zt=r("div"),y(Ic.$$.fragment),bP=c(),ss=r("p"),kP=n("The "),o_=r("code"),TP=n("FlaxBertPreTrainedModel"),yP=n(" forward method, overrides the "),n_=r("code"),vP=n("__call__"),wP=n(" special method."),$P=c(),y(ia.$$.fragment),FP=c(),y(la.$$.fragment),jk=c(),rs=r("h2"),da=r("a"),s_=r("span"),y(Ac.$$.fragment),xP=c(),r_=r("span"),BP=n("FlaxBertForMultipleChoice"),Ck=c(),He=r("div"),y(Lc.$$.fragment),EP=c(),a_=r("p"),zP=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),MP=c(),Dc=r("p"),PP=n("This model inherits from "),Eh=r("a"),qP=n("FlaxPreTrainedModel"),jP=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CP=c(),Sc=r("p"),NP=n("This model is also a Flax Linen "),Uc=r("a"),OP=n("flax.linen.Module"),IP=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),AP=c(),i_=r("p"),LP=n("Finally, this model supports inherent JAX features such as:"),DP=c(),To=r("ul"),l_=r("li"),Wc=r("a"),SP=n("Just-In-Time (JIT) compilation"),UP=c(),d_=r("li"),Hc=r("a"),WP=n("Automatic Differentiation"),HP=c(),c_=r("li"),Rc=r("a"),RP=n("Vectorization"),QP=c(),p_=r("li"),Qc=r("a"),VP=n("Parallelization"),KP=c(),eo=r("div"),y(Vc.$$.fragment),JP=c(),as=r("p"),GP=n("The "),h_=r("code"),XP=n("FlaxBertPreTrainedModel"),YP=n(" forward method, overrides the "),m_=r("code"),ZP=n("__call__"),eq=n(" special method."),tq=c(),y(ca.$$.fragment),oq=c(),y(pa.$$.fragment),Nk=c(),is=r("h2"),ha=r("a"),f_=r("span"),y(Kc.$$.fragment),nq=c(),u_=r("span"),sq=n("FlaxBertForTokenClassification"),Ok=c(),Re=r("div"),y(Jc.$$.fragment),rq=c(),g_=r("p"),aq=n(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iq=c(),Gc=r("p"),lq=n("This model inherits from "),zh=r("a"),dq=n("FlaxPreTrainedModel"),cq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pq=c(),Xc=r("p"),hq=n("This model is also a Flax Linen "),Yc=r("a"),mq=n("flax.linen.Module"),fq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uq=c(),__=r("p"),gq=n("Finally, this model supports inherent JAX features such as:"),_q=c(),yo=r("ul"),b_=r("li"),Zc=r("a"),bq=n("Just-In-Time (JIT) compilation"),kq=c(),k_=r("li"),ep=r("a"),Tq=n("Automatic Differentiation"),yq=c(),T_=r("li"),tp=r("a"),vq=n("Vectorization"),wq=c(),y_=r("li"),op=r("a"),$q=n("Parallelization"),Fq=c(),to=r("div"),y(np.$$.fragment),xq=c(),ls=r("p"),Bq=n("The "),v_=r("code"),Eq=n("FlaxBertPreTrainedModel"),zq=n(" forward method, overrides the "),w_=r("code"),Mq=n("__call__"),Pq=n(" special method."),qq=c(),y(ma.$$.fragment),jq=c(),y(fa.$$.fragment),Ik=c(),ds=r("h2"),ua=r("a"),$_=r("span"),y(sp.$$.fragment),Cq=c(),F_=r("span"),Nq=n("FlaxBertForQuestionAnswering"),Ak=c(),Qe=r("div"),y(rp.$$.fragment),Oq=c(),cs=r("p"),Iq=n(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),x_=r("code"),Aq=n("span start logits"),Lq=n(" and "),B_=r("code"),Dq=n("span end logits"),Sq=n(")."),Uq=c(),ap=r("p"),Wq=n("This model inherits from "),Mh=r("a"),Hq=n("FlaxPreTrainedModel"),Rq=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qq=c(),ip=r("p"),Vq=n("This model is also a Flax Linen "),lp=r("a"),Kq=n("flax.linen.Module"),Jq=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gq=c(),E_=r("p"),Xq=n("Finally, this model supports inherent JAX features such as:"),Yq=c(),vo=r("ul"),z_=r("li"),dp=r("a"),Zq=n("Just-In-Time (JIT) compilation"),e8=c(),M_=r("li"),cp=r("a"),t8=n("Automatic Differentiation"),o8=c(),P_=r("li"),pp=r("a"),n8=n("Vectorization"),s8=c(),q_=r("li"),hp=r("a"),r8=n("Parallelization"),a8=c(),oo=r("div"),y(mp.$$.fragment),i8=c(),ps=r("p"),l8=n("The "),j_=r("code"),d8=n("FlaxBertPreTrainedModel"),c8=n(" forward method, overrides the "),C_=r("code"),p8=n("__call__"),h8=n(" special method."),m8=c(),y(ga.$$.fragment),f8=c(),y(_a.$$.fragment),this.h()},l(o){const k=QN('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=p(o),m=a(o,"H1",{class:!0});var fp=i(m);h=a(fp,"A",{id:!0,class:!0,href:!0});var N_=i(h);g=a(N_,"SPAN",{});var O_=i(g);v(l.$$.fragment,O_),O_.forEach(t),N_.forEach(t),f=p(fp),E=a(fp,"SPAN",{});var I_=i(E);be=s(I_,"BERT"),I_.forEach(t),fp.forEach(t),X=p(o),M=a(o,"H2",{class:!0});var up=i(M);ne=a(up,"A",{id:!0,class:!0,href:!0});var A_=i(ne);L=a(A_,"SPAN",{});var L_=i(L);v(re.$$.fragment,L_),L_.forEach(t),A_.forEach(t),ke=p(up),D=a(up,"SPAN",{});var D_=i(D);Te=s(D_,"Overview"),D_.forEach(t),up.forEach(t),me=p(o),J=a(o,"P",{});var gp=i(J);O=s(gp,"The BERT model was proposed in "),ae=a(gp,"A",{href:!0,rel:!0});var S_=i(ae);Y=s(S_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),S_.forEach(t),P=s(gp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),gp.forEach(t),j=p(o),ie=a(o,"P",{});var U_=i(ie);H=s(U_,"The abstract from the paper is the following:"),U_.forEach(t),fe=p(o),le=a(o,"P",{});var W_=i(le);S=a(W_,"EM",{});var H_=i(S);ye=s(H_,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),H_.forEach(t),W_.forEach(t),ue=p(o),q=a(o,"P",{});var R_=i(q);ce=a(R_,"EM",{});var Q_=i(ce);R=s(Q_,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),Q_.forEach(t),R_.forEach(t),ge=p(o),de=a(o,"P",{});var V_=i(de);Q=s(V_,"Tips:"),V_.forEach(t),_e=p(o),se=a(o,"UL",{});var _p=i(se);N=a(_p,"LI",{});var K_=i(N);ve=s(K_,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),K_.forEach(t),V=p(_p),pe=a(_p,"LI",{});var J_=i(pe);T=s(J_,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),J_.forEach(t),_p.forEach(t),z=p(o),K=a(o,"P",{});var hs=i(K);Me=s(hs,"This model was contributed by "),Be=a(hs,"A",{href:!0,rel:!0});var G_=i(Be);I=s(G_,"thomwolf"),G_.forEach(t),Pe=s(hs,". The original code can be found "),Ee=a(hs,"A",{href:!0,rel:!0});var X_=i(Ee);qe=s(X_,"here"),X_.forEach(t),A=s(hs,"."),hs.forEach(t),W=p(o),Fe=a(o,"H2",{class:!0});var bp=i(Fe);xe=a(bp,"A",{id:!0,class:!0,href:!0});var Y_=i(xe);U=a(Y_,"SPAN",{});var Z_=i(U);v(ze.$$.fragment,Z_),Z_.forEach(t),Y_.forEach(t),je=p(bp),he=a(bp,"SPAN",{});var eb=i(he);Ce=s(eb,"BertConfig"),eb.forEach(t),bp.forEach(t),Eb=p(o),Nt=a(o,"DIV",{class:!0});var wo=i(Nt);v(Ra.$$.fragment,wo),jy=p(wo),ho=a(wo,"P",{});var $o=i(ho);Cy=s($o,"This is the configuration class to store the configuration of a "),Ep=a($o,"A",{href:!0});var tb=i(Ep);Ny=s(tb,"BertModel"),tb.forEach(t),Oy=s($o," or a "),zp=a($o,"A",{href:!0});var ob=i(zp);Iy=s(ob,"TFBertModel"),ob.forEach(t),Ay=s($o,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),Qa=a($o,"A",{href:!0,rel:!0});var nb=i(Qa);Ly=s(nb,"bert-base-uncased"),nb.forEach(t),Dy=s($o," architecture."),$o.forEach(t),Sy=p(wo),Ko=a(wo,"P",{});var ms=i(Ko);Uy=s(ms,"Configuration objects inherit from "),Mp=a(ms,"A",{href:!0});var sb=i(Mp);Wy=s(sb,"PretrainedConfig"),sb.forEach(t),Hy=s(ms,` and can be used to control the model outputs. Read the
documentation from `),Pp=a(ms,"A",{href:!0});var rb=i(Pp);Ry=s(rb,"PretrainedConfig"),rb.forEach(t),Qy=s(ms," for more information."),ms.forEach(t),Vy=p(wo),v(_s.$$.fragment,wo),wo.forEach(t),zb=p(o),Jo=a(o,"H2",{class:!0});var kp=i(Jo);bs=a(kp,"A",{id:!0,class:!0,href:!0});var ab=i(bs);km=a(ab,"SPAN",{});var ib=i(km);v(Va.$$.fragment,ib),ib.forEach(t),ab.forEach(t),Ky=p(kp),Tm=a(kp,"SPAN",{});var lb=i(Tm);Jy=s(lb,"BertTokenizer"),lb.forEach(t),kp.forEach(t),Mb=p(o),Ne=a(o,"DIV",{class:!0});var nt=i(Ne);v(Ka.$$.fragment,nt),Gy=p(nt),ym=a(nt,"P",{});var db=i(ym);Xy=s(db,"Construct a BERT tokenizer. Based on WordPiece."),db.forEach(t),Yy=p(nt),Ja=a(nt,"P",{});var Tp=i(Ja);Zy=s(Tp,"This tokenizer inherits from "),qp=a(Tp,"A",{href:!0});var cb=i(qp);ev=s(cb,"PreTrainedTokenizer"),cb.forEach(t),tv=s(Tp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Tp.forEach(t),ov=p(nt),Bo=a(nt,"DIV",{class:!0});var fs=i(Bo);v(Ga.$$.fragment,fs),nv=p(fs),vm=a(fs,"P",{});var pb=i(vm);sv=s(pb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),pb.forEach(t),rv=p(fs),Xa=a(fs,"UL",{});var yp=i(Xa);jp=a(yp,"LI",{});var Ph=i(jp);av=s(Ph,"single sequence: "),wm=a(Ph,"CODE",{});var hb=i(wm);iv=s(hb,"[CLS] X [SEP]"),hb.forEach(t),Ph.forEach(t),lv=p(yp),Cp=a(yp,"LI",{});var qh=i(Cp);dv=s(qh,"pair of sequences: "),$m=a(qh,"CODE",{});var mb=i($m);cv=s(mb,"[CLS] A [SEP] B [SEP]"),mb.forEach(t),qh.forEach(t),yp.forEach(t),fs.forEach(t),pv=p(nt),ks=a(nt,"DIV",{class:!0});var vp=i(ks);v(Ya.$$.fragment,vp),hv=p(vp),Za=a(vp,"P",{});var wp=i(Za);mv=s(wp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fm=a(wp,"CODE",{});var fb=i(Fm);fv=s(fb,"prepare_for_model"),fb.forEach(t),uv=s(wp," method."),wp.forEach(t),vp.forEach(t),gv=p(nt),It=a(nt,"DIV",{class:!0});var Fo=i(It);v(ei.$$.fragment,Fo),_v=p(Fo),xm=a(Fo,"P",{});var ub=i(xm);bv=s(ub,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ub.forEach(t),kv=p(Fo),v(Ts.$$.fragment,Fo),Tv=p(Fo),Go=a(Fo,"P",{});var us=i(Go);yv=s(us,"If "),Bm=a(us,"CODE",{});var gb=i(Bm);vv=s(gb,"token_ids_1"),gb.forEach(t),wv=s(us," is "),Em=a(us,"CODE",{});var _b=i(Em);$v=s(_b,"None"),_b.forEach(t),Fv=s(us,", this method only returns the first portion of the mask (0s)."),us.forEach(t),Fo.forEach(t),xv=p(nt),Np=a(nt,"DIV",{class:!0});var bb=i(Np);v(ti.$$.fragment,bb),bb.forEach(t),nt.forEach(t),Pb=p(o),Xo=a(o,"H2",{class:!0});var $p=i(Xo);ys=a($p,"A",{id:!0,class:!0,href:!0});var kb=i(ys);zm=a(kb,"SPAN",{});var Tb=i(zm);v(oi.$$.fragment,Tb),Tb.forEach(t),kb.forEach(t),Bv=p($p),Mm=a($p,"SPAN",{});var yb=i(Mm);Ev=s(yb,"BertTokenizerFast"),yb.forEach(t),$p.forEach(t),qb=p(o),rt=a(o,"DIV",{class:!0});var Ot=i(rt);v(ni.$$.fragment,Ot),zv=p(Ot),si=a(Ot,"P",{});var Fp=i(si);Mv=s(Fp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Pm=a(Fp,"EM",{});var vb=i(Pm);Pv=s(vb,"tokenizers"),vb.forEach(t),qv=s(Fp," library). Based on WordPiece."),Fp.forEach(t),jv=p(Ot),ri=a(Ot,"P",{});var xp=i(ri);Cv=s(xp,"This tokenizer inherits from "),Op=a(xp,"A",{href:!0});var wb=i(Op);Nv=s(wb,"PreTrainedTokenizerFast"),wb.forEach(t),Ov=s(xp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xp.forEach(t),Iv=p(Ot),Eo=a(Ot,"DIV",{class:!0});var gs=i(Eo);v(ai.$$.fragment,gs),Av=p(gs),qm=a(gs,"P",{});var $b=i(qm);Lv=s($b,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),$b.forEach(t),Dv=p(gs),ii=a(gs,"UL",{});var Bp=i(ii);Ip=a(Bp,"LI",{});var jh=i(Ip);Sv=s(jh,"single sequence: "),jm=a(jh,"CODE",{});var Fb=i(jm);Uv=s(Fb,"[CLS] X [SEP]"),Fb.forEach(t),jh.forEach(t),Wv=p(Bp),Ap=a(Bp,"LI",{});var Ch=i(Ap);Hv=s(Ch,"pair of sequences: "),Cm=a(Ch,"CODE",{});var xb=i(Cm);Rv=s(xb,"[CLS] A [SEP] B [SEP]"),xb.forEach(t),Ch.forEach(t),Bp.forEach(t),gs.forEach(t),Qv=p(Ot),At=a(Ot,"DIV",{class:!0});var xo=i(At);v(li.$$.fragment,xo),Vv=p(xo),Nm=a(xo,"P",{});var Bb=i(Nm);Kv=s(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bb.forEach(t),Jv=p(xo),v(vs.$$.fragment,xo),Gv=p(xo),Yo=a(xo,"P",{});var Nh=i(Yo);Xv=s(Nh,"If "),Om=a(Nh,"CODE",{});var u8=i(Om);Yv=s(u8,"token_ids_1"),u8.forEach(t),Zv=s(Nh," is "),Im=a(Nh,"CODE",{});var g8=i(Im);e1=s(g8,"None"),g8.forEach(t),t1=s(Nh,", this method only returns the first portion of the mask (0s)."),Nh.forEach(t),xo.forEach(t),Ot.forEach(t),jb=p(o),Zo=a(o,"H2",{class:!0});var Dk=i(Zo);ws=a(Dk,"A",{id:!0,class:!0,href:!0});var _8=i(ws);Am=a(_8,"SPAN",{});var b8=i(Am);v(di.$$.fragment,b8),b8.forEach(t),_8.forEach(t),o1=p(Dk),Lm=a(Dk,"SPAN",{});var k8=i(Lm);n1=s(k8,"TFBertTokenizer"),k8.forEach(t),Dk.forEach(t),Cb=p(o),at=a(o,"DIV",{class:!0});var Po=i(at);v(ci.$$.fragment,Po),s1=p(Po),en=a(Po,"P",{});var Oh=i(en);r1=s(Oh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Dm=a(Oh,"CODE",{});var T8=i(Dm);a1=s(T8,"from_pretrained()"),T8.forEach(t),i1=s(Oh," method. It can also be initialized with the "),Sm=a(Oh,"CODE",{});var y8=i(Sm);l1=s(y8,"from_tokenizer()"),y8.forEach(t),d1=s(Oh,` method, which imports settings
from an existing standard tokenizer object.`),Oh.forEach(t),c1=p(Po),pi=a(Po,"P",{});var Sk=i(pi);p1=s(Sk,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),Um=a(Sk,"CODE",{});var v8=i(Um);h1=s(v8,"tf.string"),v8.forEach(t),m1=s(Sk," inputs to outputs."),Sk.forEach(t),f1=p(Po),zo=a(Po,"DIV",{class:!0});var Ih=i(zo);v(hi.$$.fragment,Ih),u1=p(Ih),mi=a(Ih,"P",{});var Uk=i(mi);g1=s(Uk,"Instantiate a "),Wm=a(Uk,"CODE",{});var w8=i(Wm);_1=s(w8,"TFBertTokenizer"),w8.forEach(t),b1=s(Uk," from a pre-trained tokenizer."),Uk.forEach(t),k1=p(Ih),v($s.$$.fragment,Ih),Ih.forEach(t),T1=p(Po),Mo=a(Po,"DIV",{class:!0});var Ah=i(Mo);v(fi.$$.fragment,Ah),y1=p(Ah),tn=a(Ah,"P",{});var Lh=i(tn);v1=s(Lh,"Initialize a "),Hm=a(Lh,"CODE",{});var $8=i(Hm);w1=s($8,"TFBertTokenizer"),$8.forEach(t),$1=s(Lh," from an existing "),Rm=a(Lh,"CODE",{});var F8=i(Rm);F1=s(F8,"Tokenizer"),F8.forEach(t),x1=s(Lh,"."),Lh.forEach(t),B1=p(Ah),v(Fs.$$.fragment,Ah),Ah.forEach(t),Po.forEach(t),Nb=p(o),on=a(o,"H2",{class:!0});var Wk=i(on);xs=a(Wk,"A",{id:!0,class:!0,href:!0});var x8=i(xs);Qm=a(x8,"SPAN",{});var B8=i(Qm);v(ui.$$.fragment,B8),B8.forEach(t),x8.forEach(t),E1=p(Wk),Vm=a(Wk,"SPAN",{});var E8=i(Vm);z1=s(E8,"Bert specific outputs"),E8.forEach(t),Wk.forEach(t),Ob=p(o),nn=a(o,"DIV",{class:!0});var Hk=i(nn);v(gi.$$.fragment,Hk),M1=p(Hk),_i=a(Hk,"P",{});var Rk=i(_i);P1=s(Rk,"Output type of "),Lp=a(Rk,"A",{href:!0});var z8=i(Lp);q1=s(z8,"BertForPreTraining"),z8.forEach(t),j1=s(Rk,"."),Rk.forEach(t),Hk.forEach(t),Ib=p(o),sn=a(o,"DIV",{class:!0});var Qk=i(sn);v(bi.$$.fragment,Qk),C1=p(Qk),ki=a(Qk,"P",{});var Vk=i(ki);N1=s(Vk,"Output type of "),Dp=a(Vk,"A",{href:!0});var M8=i(Dp);O1=s(M8,"TFBertForPreTraining"),M8.forEach(t),I1=s(Vk,"."),Vk.forEach(t),Qk.forEach(t),Ab=p(o),mo=a(o,"DIV",{class:!0});var Dh=i(mo);v(Ti.$$.fragment,Dh),A1=p(Dh),yi=a(Dh,"P",{});var Kk=i(yi);L1=s(Kk,"Output type of "),Sp=a(Kk,"A",{href:!0});var P8=i(Sp);D1=s(P8,"BertForPreTraining"),P8.forEach(t),S1=s(Kk,"."),Kk.forEach(t),U1=p(Dh),Bs=a(Dh,"DIV",{class:!0});var Jk=i(Bs);v(vi.$$.fragment,Jk),W1=p(Jk),Km=a(Jk,"P",{});var q8=i(Km);H1=s(q8,"\u201CReturns a new object replacing the specified fields with new values."),q8.forEach(t),Jk.forEach(t),Dh.forEach(t),Lb=p(o),rn=a(o,"H2",{class:!0});var Gk=i(rn);Es=a(Gk,"A",{id:!0,class:!0,href:!0});var j8=i(Es);Jm=a(j8,"SPAN",{});var C8=i(Jm);v(wi.$$.fragment,C8),C8.forEach(t),j8.forEach(t),R1=p(Gk),Gm=a(Gk,"SPAN",{});var N8=i(Gm);Q1=s(N8,"BertModel"),N8.forEach(t),Gk.forEach(t),Db=p(o),Oe=a(o,"DIV",{class:!0});var wt=i(Oe);v($i.$$.fragment,wt),V1=p(wt),Xm=a(wt,"P",{});var O8=i(Xm);K1=s(O8,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),O8.forEach(t),J1=p(wt),Fi=a(wt,"P",{});var Xk=i(Fi);G1=s(Xk,"This model inherits from "),Up=a(Xk,"A",{href:!0});var I8=i(Up);X1=s(I8,"PreTrainedModel"),I8.forEach(t),Y1=s(Xk,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk.forEach(t),Z1=p(wt),xi=a(wt,"P",{});var Yk=i(xi);ew=s(Yk,"This model is also a PyTorch "),Bi=a(Yk,"A",{href:!0,rel:!0});var A8=i(Bi);tw=s(A8,"torch.nn.Module"),A8.forEach(t),ow=s(Yk,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yk.forEach(t),nw=p(wt),Ei=a(wt,"P",{});var Zk=i(Ei);sw=s(Zk,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),zi=a(Zk,"A",{href:!0,rel:!0});var L8=i(zi);rw=s(L8,`Attention is
all you need`),L8.forEach(t),aw=s(Zk,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zk.forEach(t),iw=p(wt),Ke=a(wt,"P",{});var $t=i(Ke);lw=s($t,"To behave as an decoder the model needs to be initialized with the "),Ym=a($t,"CODE",{});var D8=i(Ym);dw=s(D8,"is_decoder"),D8.forEach(t),cw=s($t,` argument of the configuration set
to `),Zm=a($t,"CODE",{});var S8=i(Zm);pw=s(S8,"True"),S8.forEach(t),hw=s($t,". To be used in a Seq2Seq model, the model needs to initialized with both "),ef=a($t,"CODE",{});var U8=i(ef);mw=s(U8,"is_decoder"),U8.forEach(t),fw=s($t,` argument and
`),tf=a($t,"CODE",{});var W8=i(tf);uw=s(W8,"add_cross_attention"),W8.forEach(t),gw=s($t," set to "),of=a($t,"CODE",{});var H8=i(of);_w=s(H8,"True"),H8.forEach(t),bw=s($t,"; an "),nf=a($t,"CODE",{});var R8=i(nf);kw=s(R8,"encoder_hidden_states"),R8.forEach(t),Tw=s($t," is then expected as an input to the forward pass."),$t.forEach(t),yw=p(wt),Lt=a(wt,"DIV",{class:!0});var ba=i(Lt);v(Mi.$$.fragment,ba),vw=p(ba),an=a(ba,"P",{});var Sh=i(an);ww=s(Sh,"The "),Wp=a(Sh,"A",{href:!0});var Q8=i(Wp);$w=s(Q8,"BertModel"),Q8.forEach(t),Fw=s(Sh," forward method, overrides the "),sf=a(Sh,"CODE",{});var V8=i(sf);xw=s(V8,"__call__"),V8.forEach(t),Bw=s(Sh," special method."),Sh.forEach(t),Ew=p(ba),v(zs.$$.fragment,ba),zw=p(ba),v(Ms.$$.fragment,ba),ba.forEach(t),wt.forEach(t),Sb=p(o),ln=a(o,"H2",{class:!0});var eT=i(ln);Ps=a(eT,"A",{id:!0,class:!0,href:!0});var K8=i(Ps);rf=a(K8,"SPAN",{});var J8=i(rf);v(Pi.$$.fragment,J8),J8.forEach(t),K8.forEach(t),Mw=p(eT),af=a(eT,"SPAN",{});var G8=i(af);Pw=s(G8,"BertForPreTraining"),G8.forEach(t),eT.forEach(t),Ub=p(o),it=a(o,"DIV",{class:!0});var qo=i(it);v(qi.$$.fragment,qo),qw=p(qo),dn=a(qo,"P",{});var Uh=i(dn);jw=s(Uh,"Bert Model with two heads on top as done during the pretraining: a "),lf=a(Uh,"CODE",{});var X8=i(lf);Cw=s(X8,"masked language modeling"),X8.forEach(t),Nw=s(Uh," head and a "),df=a(Uh,"CODE",{});var Y8=i(df);Ow=s(Y8,"next sentence prediction (classification)"),Y8.forEach(t),Iw=s(Uh," head."),Uh.forEach(t),Aw=p(qo),ji=a(qo,"P",{});var tT=i(ji);Lw=s(tT,"This model inherits from "),Hp=a(tT,"A",{href:!0});var Z8=i(Hp);Dw=s(Z8,"PreTrainedModel"),Z8.forEach(t),Sw=s(tT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT.forEach(t),Uw=p(qo),Ci=a(qo,"P",{});var oT=i(Ci);Ww=s(oT,"This model is also a PyTorch "),Ni=a(oT,"A",{href:!0,rel:!0});var ej=i(Ni);Hw=s(ej,"torch.nn.Module"),ej.forEach(t),Rw=s(oT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oT.forEach(t),Qw=p(qo),Dt=a(qo,"DIV",{class:!0});var ka=i(Dt);v(Oi.$$.fragment,ka),Vw=p(ka),cn=a(ka,"P",{});var Wh=i(cn);Kw=s(Wh,"The "),Rp=a(Wh,"A",{href:!0});var tj=i(Rp);Jw=s(tj,"BertForPreTraining"),tj.forEach(t),Gw=s(Wh," forward method, overrides the "),cf=a(Wh,"CODE",{});var oj=i(cf);Xw=s(oj,"__call__"),oj.forEach(t),Yw=s(Wh," special method."),Wh.forEach(t),Zw=p(ka),v(qs.$$.fragment,ka),e$=p(ka),v(js.$$.fragment,ka),ka.forEach(t),qo.forEach(t),Wb=p(o),pn=a(o,"H2",{class:!0});var nT=i(pn);Cs=a(nT,"A",{id:!0,class:!0,href:!0});var nj=i(Cs);pf=a(nj,"SPAN",{});var sj=i(pf);v(Ii.$$.fragment,sj),sj.forEach(t),nj.forEach(t),t$=p(nT),hf=a(nT,"SPAN",{});var rj=i(hf);o$=s(rj,"BertLMHeadModel"),rj.forEach(t),nT.forEach(t),Hb=p(o),lt=a(o,"DIV",{class:!0});var jo=i(lt);v(Ai.$$.fragment,jo),n$=p(jo),Li=a(jo,"P",{});var sT=i(Li);s$=s(sT,"Bert Model with a "),mf=a(sT,"CODE",{});var aj=i(mf);r$=s(aj,"language modeling"),aj.forEach(t),a$=s(sT," head on top for CLM fine-tuning."),sT.forEach(t),i$=p(jo),Di=a(jo,"P",{});var rT=i(Di);l$=s(rT,"This model inherits from "),Qp=a(rT,"A",{href:!0});var ij=i(Qp);d$=s(ij,"PreTrainedModel"),ij.forEach(t),c$=s(rT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rT.forEach(t),p$=p(jo),Si=a(jo,"P",{});var aT=i(Si);h$=s(aT,"This model is also a PyTorch "),Ui=a(aT,"A",{href:!0,rel:!0});var lj=i(Ui);m$=s(lj,"torch.nn.Module"),lj.forEach(t),f$=s(aT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aT.forEach(t),u$=p(jo),St=a(jo,"DIV",{class:!0});var Ta=i(St);v(Wi.$$.fragment,Ta),g$=p(Ta),hn=a(Ta,"P",{});var Hh=i(hn);_$=s(Hh,"The "),Vp=a(Hh,"A",{href:!0});var dj=i(Vp);b$=s(dj,"BertLMHeadModel"),dj.forEach(t),k$=s(Hh," forward method, overrides the "),ff=a(Hh,"CODE",{});var cj=i(ff);T$=s(cj,"__call__"),cj.forEach(t),y$=s(Hh," special method."),Hh.forEach(t),v$=p(Ta),v(Ns.$$.fragment,Ta),w$=p(Ta),v(Os.$$.fragment,Ta),Ta.forEach(t),jo.forEach(t),Rb=p(o),mn=a(o,"H2",{class:!0});var iT=i(mn);Is=a(iT,"A",{id:!0,class:!0,href:!0});var pj=i(Is);uf=a(pj,"SPAN",{});var hj=i(uf);v(Hi.$$.fragment,hj),hj.forEach(t),pj.forEach(t),$$=p(iT),gf=a(iT,"SPAN",{});var mj=i(gf);F$=s(mj,"BertForMaskedLM"),mj.forEach(t),iT.forEach(t),Qb=p(o),dt=a(o,"DIV",{class:!0});var Co=i(dt);v(Ri.$$.fragment,Co),x$=p(Co),Qi=a(Co,"P",{});var lT=i(Qi);B$=s(lT,"Bert Model with a "),_f=a(lT,"CODE",{});var fj=i(_f);E$=s(fj,"language modeling"),fj.forEach(t),z$=s(lT," head on top."),lT.forEach(t),M$=p(Co),Vi=a(Co,"P",{});var dT=i(Vi);P$=s(dT,"This model inherits from "),Kp=a(dT,"A",{href:!0});var uj=i(Kp);q$=s(uj,"PreTrainedModel"),uj.forEach(t),j$=s(dT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dT.forEach(t),C$=p(Co),Ki=a(Co,"P",{});var cT=i(Ki);N$=s(cT,"This model is also a PyTorch "),Ji=a(cT,"A",{href:!0,rel:!0});var gj=i(Ji);O$=s(gj,"torch.nn.Module"),gj.forEach(t),I$=s(cT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cT.forEach(t),A$=p(Co),ut=a(Co,"DIV",{class:!0});var No=i(ut);v(Gi.$$.fragment,No),L$=p(No),fn=a(No,"P",{});var Rh=i(fn);D$=s(Rh,"The "),Jp=a(Rh,"A",{href:!0});var _j=i(Jp);S$=s(_j,"BertForMaskedLM"),_j.forEach(t),U$=s(Rh," forward method, overrides the "),bf=a(Rh,"CODE",{});var bj=i(bf);W$=s(bj,"__call__"),bj.forEach(t),H$=s(Rh," special method."),Rh.forEach(t),R$=p(No),v(As.$$.fragment,No),Q$=p(No),v(Ls.$$.fragment,No),V$=p(No),v(Ds.$$.fragment,No),No.forEach(t),Co.forEach(t),Vb=p(o),un=a(o,"H2",{class:!0});var pT=i(un);Ss=a(pT,"A",{id:!0,class:!0,href:!0});var kj=i(Ss);kf=a(kj,"SPAN",{});var Tj=i(kf);v(Xi.$$.fragment,Tj),Tj.forEach(t),kj.forEach(t),K$=p(pT),Tf=a(pT,"SPAN",{});var yj=i(Tf);J$=s(yj,"BertForNextSentencePrediction"),yj.forEach(t),pT.forEach(t),Kb=p(o),ct=a(o,"DIV",{class:!0});var Oo=i(ct);v(Yi.$$.fragment,Oo),G$=p(Oo),Zi=a(Oo,"P",{});var hT=i(Zi);X$=s(hT,"Bert Model with a "),yf=a(hT,"CODE",{});var vj=i(yf);Y$=s(vj,"next sentence prediction (classification)"),vj.forEach(t),Z$=s(hT," head on top."),hT.forEach(t),e0=p(Oo),el=a(Oo,"P",{});var mT=i(el);t0=s(mT,"This model inherits from "),Gp=a(mT,"A",{href:!0});var wj=i(Gp);o0=s(wj,"PreTrainedModel"),wj.forEach(t),n0=s(mT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mT.forEach(t),s0=p(Oo),tl=a(Oo,"P",{});var fT=i(tl);r0=s(fT,"This model is also a PyTorch "),ol=a(fT,"A",{href:!0,rel:!0});var $j=i(ol);a0=s($j,"torch.nn.Module"),$j.forEach(t),i0=s(fT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fT.forEach(t),l0=p(Oo),Ut=a(Oo,"DIV",{class:!0});var ya=i(Ut);v(nl.$$.fragment,ya),d0=p(ya),gn=a(ya,"P",{});var Qh=i(gn);c0=s(Qh,"The "),Xp=a(Qh,"A",{href:!0});var Fj=i(Xp);p0=s(Fj,"BertForNextSentencePrediction"),Fj.forEach(t),h0=s(Qh," forward method, overrides the "),vf=a(Qh,"CODE",{});var xj=i(vf);m0=s(xj,"__call__"),xj.forEach(t),f0=s(Qh," special method."),Qh.forEach(t),u0=p(ya),v(Us.$$.fragment,ya),g0=p(ya),v(Ws.$$.fragment,ya),ya.forEach(t),Oo.forEach(t),Jb=p(o),_n=a(o,"H2",{class:!0});var uT=i(_n);Hs=a(uT,"A",{id:!0,class:!0,href:!0});var Bj=i(Hs);wf=a(Bj,"SPAN",{});var Ej=i(wf);v(sl.$$.fragment,Ej),Ej.forEach(t),Bj.forEach(t),_0=p(uT),$f=a(uT,"SPAN",{});var zj=i($f);b0=s(zj,"BertForSequenceClassification"),zj.forEach(t),uT.forEach(t),Gb=p(o),pt=a(o,"DIV",{class:!0});var Io=i(pt);v(rl.$$.fragment,Io),k0=p(Io),Ff=a(Io,"P",{});var Mj=i(Ff);T0=s(Mj,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Mj.forEach(t),y0=p(Io),al=a(Io,"P",{});var gT=i(al);v0=s(gT,"This model inherits from "),Yp=a(gT,"A",{href:!0});var Pj=i(Yp);w0=s(Pj,"PreTrainedModel"),Pj.forEach(t),$0=s(gT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gT.forEach(t),F0=p(Io),il=a(Io,"P",{});var _T=i(il);x0=s(_T,"This model is also a PyTorch "),ll=a(_T,"A",{href:!0,rel:!0});var qj=i(ll);B0=s(qj,"torch.nn.Module"),qj.forEach(t),E0=s(_T,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_T.forEach(t),z0=p(Io),Ve=a(Io,"DIV",{class:!0});var Ft=i(Ve);v(dl.$$.fragment,Ft),M0=p(Ft),bn=a(Ft,"P",{});var Vh=i(bn);P0=s(Vh,"The "),Zp=a(Vh,"A",{href:!0});var jj=i(Zp);q0=s(jj,"BertForSequenceClassification"),jj.forEach(t),j0=s(Vh," forward method, overrides the "),xf=a(Vh,"CODE",{});var Cj=i(xf);C0=s(Cj,"__call__"),Cj.forEach(t),N0=s(Vh," special method."),Vh.forEach(t),O0=p(Ft),v(Rs.$$.fragment,Ft),I0=p(Ft),v(Qs.$$.fragment,Ft),A0=p(Ft),v(Vs.$$.fragment,Ft),L0=p(Ft),v(Ks.$$.fragment,Ft),D0=p(Ft),v(Js.$$.fragment,Ft),Ft.forEach(t),Io.forEach(t),Xb=p(o),kn=a(o,"H2",{class:!0});var bT=i(kn);Gs=a(bT,"A",{id:!0,class:!0,href:!0});var Nj=i(Gs);Bf=a(Nj,"SPAN",{});var Oj=i(Bf);v(cl.$$.fragment,Oj),Oj.forEach(t),Nj.forEach(t),S0=p(bT),Ef=a(bT,"SPAN",{});var Ij=i(Ef);U0=s(Ij,"BertForMultipleChoice"),Ij.forEach(t),bT.forEach(t),Yb=p(o),ht=a(o,"DIV",{class:!0});var Ao=i(ht);v(pl.$$.fragment,Ao),W0=p(Ao),zf=a(Ao,"P",{});var Aj=i(zf);H0=s(Aj,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Aj.forEach(t),R0=p(Ao),hl=a(Ao,"P",{});var kT=i(hl);Q0=s(kT,"This model inherits from "),eh=a(kT,"A",{href:!0});var Lj=i(eh);V0=s(Lj,"PreTrainedModel"),Lj.forEach(t),K0=s(kT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kT.forEach(t),J0=p(Ao),ml=a(Ao,"P",{});var TT=i(ml);G0=s(TT,"This model is also a PyTorch "),fl=a(TT,"A",{href:!0,rel:!0});var Dj=i(fl);X0=s(Dj,"torch.nn.Module"),Dj.forEach(t),Y0=s(TT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),TT.forEach(t),Z0=p(Ao),Wt=a(Ao,"DIV",{class:!0});var va=i(Wt);v(ul.$$.fragment,va),e2=p(va),Tn=a(va,"P",{});var Kh=i(Tn);t2=s(Kh,"The "),th=a(Kh,"A",{href:!0});var Sj=i(th);o2=s(Sj,"BertForMultipleChoice"),Sj.forEach(t),n2=s(Kh," forward method, overrides the "),Mf=a(Kh,"CODE",{});var Uj=i(Mf);s2=s(Uj,"__call__"),Uj.forEach(t),r2=s(Kh," special method."),Kh.forEach(t),a2=p(va),v(Xs.$$.fragment,va),i2=p(va),v(Ys.$$.fragment,va),va.forEach(t),Ao.forEach(t),Zb=p(o),yn=a(o,"H2",{class:!0});var yT=i(yn);Zs=a(yT,"A",{id:!0,class:!0,href:!0});var Wj=i(Zs);Pf=a(Wj,"SPAN",{});var Hj=i(Pf);v(gl.$$.fragment,Hj),Hj.forEach(t),Wj.forEach(t),l2=p(yT),qf=a(yT,"SPAN",{});var Rj=i(qf);d2=s(Rj,"BertForTokenClassification"),Rj.forEach(t),yT.forEach(t),ek=p(o),mt=a(o,"DIV",{class:!0});var Lo=i(mt);v(_l.$$.fragment,Lo),c2=p(Lo),jf=a(Lo,"P",{});var Qj=i(jf);p2=s(Qj,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qj.forEach(t),h2=p(Lo),bl=a(Lo,"P",{});var vT=i(bl);m2=s(vT,"This model inherits from "),oh=a(vT,"A",{href:!0});var Vj=i(oh);f2=s(Vj,"PreTrainedModel"),Vj.forEach(t),u2=s(vT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vT.forEach(t),g2=p(Lo),kl=a(Lo,"P",{});var wT=i(kl);_2=s(wT,"This model is also a PyTorch "),Tl=a(wT,"A",{href:!0,rel:!0});var Kj=i(Tl);b2=s(Kj,"torch.nn.Module"),Kj.forEach(t),k2=s(wT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wT.forEach(t),T2=p(Lo),gt=a(Lo,"DIV",{class:!0});var Do=i(gt);v(yl.$$.fragment,Do),y2=p(Do),vn=a(Do,"P",{});var Jh=i(vn);v2=s(Jh,"The "),nh=a(Jh,"A",{href:!0});var Jj=i(nh);w2=s(Jj,"BertForTokenClassification"),Jj.forEach(t),$2=s(Jh," forward method, overrides the "),Cf=a(Jh,"CODE",{});var Gj=i(Cf);F2=s(Gj,"__call__"),Gj.forEach(t),x2=s(Jh," special method."),Jh.forEach(t),B2=p(Do),v(er.$$.fragment,Do),E2=p(Do),v(tr.$$.fragment,Do),z2=p(Do),v(or.$$.fragment,Do),Do.forEach(t),Lo.forEach(t),tk=p(o),wn=a(o,"H2",{class:!0});var $T=i(wn);nr=a($T,"A",{id:!0,class:!0,href:!0});var Xj=i(nr);Nf=a(Xj,"SPAN",{});var Yj=i(Nf);v(vl.$$.fragment,Yj),Yj.forEach(t),Xj.forEach(t),M2=p($T),Of=a($T,"SPAN",{});var Zj=i(Of);P2=s(Zj,"BertForQuestionAnswering"),Zj.forEach(t),$T.forEach(t),ok=p(o),ft=a(o,"DIV",{class:!0});var So=i(ft);v(wl.$$.fragment,So),q2=p(So),$n=a(So,"P",{});var Gh=i($n);j2=s(Gh,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),If=a(Gh,"CODE",{});var e9=i(If);C2=s(e9,"span start logits"),e9.forEach(t),N2=s(Gh," and "),Af=a(Gh,"CODE",{});var t9=i(Af);O2=s(t9,"span end logits"),t9.forEach(t),I2=s(Gh,")."),Gh.forEach(t),A2=p(So),$l=a(So,"P",{});var FT=i($l);L2=s(FT,"This model inherits from "),sh=a(FT,"A",{href:!0});var o9=i(sh);D2=s(o9,"PreTrainedModel"),o9.forEach(t),S2=s(FT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FT.forEach(t),U2=p(So),Fl=a(So,"P",{});var xT=i(Fl);W2=s(xT,"This model is also a PyTorch "),xl=a(xT,"A",{href:!0,rel:!0});var n9=i(xl);H2=s(n9,"torch.nn.Module"),n9.forEach(t),R2=s(xT,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xT.forEach(t),Q2=p(So),_t=a(So,"DIV",{class:!0});var Uo=i(_t);v(Bl.$$.fragment,Uo),V2=p(Uo),Fn=a(Uo,"P",{});var Xh=i(Fn);K2=s(Xh,"The "),rh=a(Xh,"A",{href:!0});var s9=i(rh);J2=s(s9,"BertForQuestionAnswering"),s9.forEach(t),G2=s(Xh," forward method, overrides the "),Lf=a(Xh,"CODE",{});var r9=i(Lf);X2=s(r9,"__call__"),r9.forEach(t),Y2=s(Xh," special method."),Xh.forEach(t),Z2=p(Uo),v(sr.$$.fragment,Uo),eF=p(Uo),v(rr.$$.fragment,Uo),tF=p(Uo),v(ar.$$.fragment,Uo),Uo.forEach(t),So.forEach(t),nk=p(o),xn=a(o,"H2",{class:!0});var BT=i(xn);ir=a(BT,"A",{id:!0,class:!0,href:!0});var a9=i(ir);Df=a(a9,"SPAN",{});var i9=i(Df);v(El.$$.fragment,i9),i9.forEach(t),a9.forEach(t),oF=p(BT),Sf=a(BT,"SPAN",{});var l9=i(Sf);nF=s(l9,"TFBertModel"),l9.forEach(t),BT.forEach(t),sk=p(o),Je=a(o,"DIV",{class:!0});var no=i(Je);v(zl.$$.fragment,no),sF=p(no),Uf=a(no,"P",{});var d9=i(Uf);rF=s(d9,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),d9.forEach(t),aF=p(no),Ml=a(no,"P",{});var ET=i(Ml);iF=s(ET,"This model inherits from "),ah=a(ET,"A",{href:!0});var c9=i(ah);lF=s(c9,"TFPreTrainedModel"),c9.forEach(t),dF=s(ET,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET.forEach(t),cF=p(no),Pl=a(no,"P",{});var zT=i(Pl);pF=s(zT,"This model is also a "),ql=a(zT,"A",{href:!0,rel:!0});var p9=i(ql);hF=s(p9,"tf.keras.Model"),p9.forEach(t),mF=s(zT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zT.forEach(t),fF=p(no),v(lr.$$.fragment,no),uF=p(no),Ht=a(no,"DIV",{class:!0});var wa=i(Ht);v(jl.$$.fragment,wa),gF=p(wa),Bn=a(wa,"P",{});var Yh=i(Bn);_F=s(Yh,"The "),ih=a(Yh,"A",{href:!0});var h9=i(ih);bF=s(h9,"TFBertModel"),h9.forEach(t),kF=s(Yh," forward method, overrides the "),Wf=a(Yh,"CODE",{});var m9=i(Wf);TF=s(m9,"__call__"),m9.forEach(t),yF=s(Yh," special method."),Yh.forEach(t),vF=p(wa),v(dr.$$.fragment,wa),wF=p(wa),v(cr.$$.fragment,wa),wa.forEach(t),no.forEach(t),rk=p(o),En=a(o,"H2",{class:!0});var MT=i(En);pr=a(MT,"A",{id:!0,class:!0,href:!0});var f9=i(pr);Hf=a(f9,"SPAN",{});var u9=i(Hf);v(Cl.$$.fragment,u9),u9.forEach(t),f9.forEach(t),$F=p(MT),Rf=a(MT,"SPAN",{});var g9=i(Rf);FF=s(g9,"TFBertForPreTraining"),g9.forEach(t),MT.forEach(t),ak=p(o),Ge=a(o,"DIV",{class:!0});var so=i(Ge);v(Nl.$$.fragment,so),xF=p(so),zn=a(so,"P",{});var Zh=i(zn);BF=s(Zh,`Bert Model with two heads on top as done during the pretraining:
a `),Qf=a(Zh,"CODE",{});var _9=i(Qf);EF=s(_9,"masked language modeling"),_9.forEach(t),zF=s(Zh," head and a "),Vf=a(Zh,"CODE",{});var b9=i(Vf);MF=s(b9,"next sentence prediction (classification)"),b9.forEach(t),PF=s(Zh," head."),Zh.forEach(t),qF=p(so),Ol=a(so,"P",{});var PT=i(Ol);jF=s(PT,"This model inherits from "),lh=a(PT,"A",{href:!0});var k9=i(lh);CF=s(k9,"TFPreTrainedModel"),k9.forEach(t),NF=s(PT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),PT.forEach(t),OF=p(so),Il=a(so,"P",{});var qT=i(Il);IF=s(qT,"This model is also a "),Al=a(qT,"A",{href:!0,rel:!0});var T9=i(Al);AF=s(T9,"tf.keras.Model"),T9.forEach(t),LF=s(qT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qT.forEach(t),DF=p(so),v(hr.$$.fragment,so),SF=p(so),Rt=a(so,"DIV",{class:!0});var $a=i(Rt);v(Ll.$$.fragment,$a),UF=p($a),Mn=a($a,"P",{});var em=i(Mn);WF=s(em,"The "),dh=a(em,"A",{href:!0});var y9=i(dh);HF=s(y9,"TFBertForPreTraining"),y9.forEach(t),RF=s(em," forward method, overrides the "),Kf=a(em,"CODE",{});var v9=i(Kf);QF=s(v9,"__call__"),v9.forEach(t),VF=s(em," special method."),em.forEach(t),KF=p($a),v(mr.$$.fragment,$a),JF=p($a),v(fr.$$.fragment,$a),$a.forEach(t),so.forEach(t),ik=p(o),Pn=a(o,"H2",{class:!0});var jT=i(Pn);ur=a(jT,"A",{id:!0,class:!0,href:!0});var w9=i(ur);Jf=a(w9,"SPAN",{});var $9=i(Jf);v(Dl.$$.fragment,$9),$9.forEach(t),w9.forEach(t),GF=p(jT),Gf=a(jT,"SPAN",{});var F9=i(Gf);XF=s(F9,"TFBertModelLMHeadModel"),F9.forEach(t),jT.forEach(t),lk=p(o),qn=a(o,"DIV",{class:!0});var CT=i(qn);v(Sl.$$.fragment,CT),YF=p(CT),bt=a(CT,"DIV",{class:!0});var Wo=i(bt);v(Ul.$$.fragment,Wo),ZF=p(Wo),Ie=a(Wo,"P",{});var st=i(Ie);ex=s(st,"encoder_hidden_states  ("),Xf=a(st,"CODE",{});var x9=i(Xf);tx=s(x9,"tf.Tensor"),x9.forEach(t),ox=s(st," of shape "),Yf=a(st,"CODE",{});var B9=i(Yf);nx=s(B9,"(batch_size, sequence_length, hidden_size)"),B9.forEach(t),sx=s(st,", "),Zf=a(st,"EM",{});var E9=i(Zf);rx=s(E9,"optional"),E9.forEach(t),ax=s(st,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),eu=a(st,"CODE",{});var z9=i(eu);ix=s(z9,"tf.Tensor"),z9.forEach(t),lx=s(st," of shape "),tu=a(st,"CODE",{});var M9=i(tu);dx=s(M9,"(batch_size, sequence_length)"),M9.forEach(t),cx=s(st,", "),ou=a(st,"EM",{});var P9=i(ou);px=s(P9,"optional"),P9.forEach(t),hx=s(st,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),nu=a(st,"CODE",{});var q9=i(nu);mx=s(q9,"[0, 1]"),q9.forEach(t),fx=s(st,":"),st.forEach(t),ux=p(Wo),Wl=a(Wo,"UL",{});var NT=i(Wl);Hl=a(NT,"LI",{});var OT=i(Hl);gx=s(OT,"1 for tokens that are "),su=a(OT,"STRONG",{});var j9=i(su);_x=s(j9,"not masked"),j9.forEach(t),bx=s(OT,","),OT.forEach(t),kx=p(NT),Rl=a(NT,"LI",{});var IT=i(Rl);Tx=s(IT,"0 for tokens that are "),ru=a(IT,"STRONG",{});var C9=i(ru);yx=s(C9,"masked"),C9.forEach(t),vx=s(IT,"."),IT.forEach(t),NT.forEach(t),wx=p(Wo),G=a(Wo,"P",{});var Z=i(G);$x=s(Z,"past_key_values ("),au=a(Z,"CODE",{});var N9=i(au);Fx=s(N9,"Tuple[Tuple[tf.Tensor]]"),N9.forEach(t),xx=s(Z," of length "),iu=a(Z,"CODE",{});var O9=i(iu);Bx=s(O9,"config.n_layers"),O9.forEach(t),Ex=s(Z,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),lu=a(Z,"CODE",{});var I9=i(lu);zx=s(I9,"past_key_values"),I9.forEach(t),Mx=s(Z," are used, the user can optionally input only the last "),du=a(Z,"CODE",{});var A9=i(du);Px=s(A9,"decoder_input_ids"),A9.forEach(t),qx=s(Z,` (those that
don\u2019t have their past key value states given to this model) of shape `),cu=a(Z,"CODE",{});var L9=i(cu);jx=s(L9,"(batch_size, 1)"),L9.forEach(t),Cx=s(Z,` instead of all
`),pu=a(Z,"CODE",{});var D9=i(pu);Nx=s(D9,"decoder_input_ids"),D9.forEach(t),Ox=s(Z," of shape "),hu=a(Z,"CODE",{});var S9=i(hu);Ix=s(S9,"(batch_size, sequence_length)"),S9.forEach(t),Ax=s(Z,`.
use_cache (`),mu=a(Z,"CODE",{});var U9=i(mu);Lx=s(U9,"bool"),U9.forEach(t),Dx=s(Z,", "),fu=a(Z,"EM",{});var W9=i(fu);Sx=s(W9,"optional"),W9.forEach(t),Ux=s(Z,", defaults to "),uu=a(Z,"CODE",{});var H9=i(uu);Wx=s(H9,"True"),H9.forEach(t),Hx=s(Z,`):
If set to `),gu=a(Z,"CODE",{});var R9=i(gu);Rx=s(R9,"True"),R9.forEach(t),Qx=s(Z,", "),_u=a(Z,"CODE",{});var Q9=i(_u);Vx=s(Q9,"past_key_values"),Q9.forEach(t),Kx=s(Z,` key value states are returned and can be used to speed up decoding (see
`),bu=a(Z,"CODE",{});var V9=i(bu);Jx=s(V9,"past_key_values"),V9.forEach(t),Gx=s(Z,"). Set to "),ku=a(Z,"CODE",{});var K9=i(ku);Xx=s(K9,"False"),K9.forEach(t),Yx=s(Z," during training, "),Tu=a(Z,"CODE",{});var J9=i(Tu);Zx=s(J9,"True"),J9.forEach(t),eB=s(Z,` during generation
labels (`),yu=a(Z,"CODE",{});var G9=i(yu);tB=s(G9,"tf.Tensor"),G9.forEach(t),oB=s(Z," or "),vu=a(Z,"CODE",{});var X9=i(vu);nB=s(X9,"np.ndarray"),X9.forEach(t),sB=s(Z," of shape "),wu=a(Z,"CODE",{});var Y9=i(wu);rB=s(Y9,"(batch_size, sequence_length)"),Y9.forEach(t),aB=s(Z,", "),$u=a(Z,"EM",{});var Z9=i($u);iB=s(Z9,"optional"),Z9.forEach(t),lB=s(Z,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Fu=a(Z,"CODE",{});var e3=i(Fu);dB=s(e3,"[0, ..., config.vocab_size - 1]"),e3.forEach(t),cB=s(Z,"."),Z.forEach(t),pB=p(Wo),v(gr.$$.fragment,Wo),Wo.forEach(t),CT.forEach(t),dk=p(o),jn=a(o,"H2",{class:!0});var AT=i(jn);_r=a(AT,"A",{id:!0,class:!0,href:!0});var t3=i(_r);xu=a(t3,"SPAN",{});var o3=i(xu);v(Ql.$$.fragment,o3),o3.forEach(t),t3.forEach(t),hB=p(AT),Bu=a(AT,"SPAN",{});var n3=i(Bu);mB=s(n3,"TFBertForMaskedLM"),n3.forEach(t),AT.forEach(t),ck=p(o),Xe=a(o,"DIV",{class:!0});var ro=i(Xe);v(Vl.$$.fragment,ro),fB=p(ro),Kl=a(ro,"P",{});var LT=i(Kl);uB=s(LT,"Bert Model with a "),Eu=a(LT,"CODE",{});var s3=i(Eu);gB=s(s3,"language modeling"),s3.forEach(t),_B=s(LT," head on top."),LT.forEach(t),bB=p(ro),Jl=a(ro,"P",{});var DT=i(Jl);kB=s(DT,"This model inherits from "),ch=a(DT,"A",{href:!0});var r3=i(ch);TB=s(r3,"TFPreTrainedModel"),r3.forEach(t),yB=s(DT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),DT.forEach(t),vB=p(ro),Gl=a(ro,"P",{});var ST=i(Gl);wB=s(ST,"This model is also a "),Xl=a(ST,"A",{href:!0,rel:!0});var a3=i(Xl);$B=s(a3,"tf.keras.Model"),a3.forEach(t),FB=s(ST,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST.forEach(t),xB=p(ro),v(br.$$.fragment,ro),BB=p(ro),kt=a(ro,"DIV",{class:!0});var Ho=i(kt);v(Yl.$$.fragment,Ho),EB=p(Ho),Cn=a(Ho,"P",{});var tm=i(Cn);zB=s(tm,"The "),ph=a(tm,"A",{href:!0});var i3=i(ph);MB=s(i3,"TFBertForMaskedLM"),i3.forEach(t),PB=s(tm," forward method, overrides the "),zu=a(tm,"CODE",{});var l3=i(zu);qB=s(l3,"__call__"),l3.forEach(t),jB=s(tm," special method."),tm.forEach(t),CB=p(Ho),v(kr.$$.fragment,Ho),NB=p(Ho),v(Tr.$$.fragment,Ho),OB=p(Ho),v(yr.$$.fragment,Ho),Ho.forEach(t),ro.forEach(t),pk=p(o),Nn=a(o,"H2",{class:!0});var UT=i(Nn);vr=a(UT,"A",{id:!0,class:!0,href:!0});var d3=i(vr);Mu=a(d3,"SPAN",{});var c3=i(Mu);v(Zl.$$.fragment,c3),c3.forEach(t),d3.forEach(t),IB=p(UT),Pu=a(UT,"SPAN",{});var p3=i(Pu);AB=s(p3,"TFBertForNextSentencePrediction"),p3.forEach(t),UT.forEach(t),hk=p(o),Ye=a(o,"DIV",{class:!0});var ao=i(Ye);v(ed.$$.fragment,ao),LB=p(ao),td=a(ao,"P",{});var WT=i(td);DB=s(WT,"Bert Model with a "),qu=a(WT,"CODE",{});var h3=i(qu);SB=s(h3,"next sentence prediction (classification)"),h3.forEach(t),UB=s(WT," head on top."),WT.forEach(t),WB=p(ao),od=a(ao,"P",{});var HT=i(od);HB=s(HT,"This model inherits from "),hh=a(HT,"A",{href:!0});var m3=i(hh);RB=s(m3,"TFPreTrainedModel"),m3.forEach(t),QB=s(HT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),HT.forEach(t),VB=p(ao),nd=a(ao,"P",{});var RT=i(nd);KB=s(RT,"This model is also a "),sd=a(RT,"A",{href:!0,rel:!0});var f3=i(sd);JB=s(f3,"tf.keras.Model"),f3.forEach(t),GB=s(RT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RT.forEach(t),XB=p(ao),v(wr.$$.fragment,ao),YB=p(ao),Qt=a(ao,"DIV",{class:!0});var Fa=i(Qt);v(rd.$$.fragment,Fa),ZB=p(Fa),On=a(Fa,"P",{});var om=i(On);eE=s(om,"The "),mh=a(om,"A",{href:!0});var u3=i(mh);tE=s(u3,"TFBertForNextSentencePrediction"),u3.forEach(t),oE=s(om," forward method, overrides the "),ju=a(om,"CODE",{});var g3=i(ju);nE=s(g3,"__call__"),g3.forEach(t),sE=s(om," special method."),om.forEach(t),rE=p(Fa),v($r.$$.fragment,Fa),aE=p(Fa),v(Fr.$$.fragment,Fa),Fa.forEach(t),ao.forEach(t),mk=p(o),In=a(o,"H2",{class:!0});var QT=i(In);xr=a(QT,"A",{id:!0,class:!0,href:!0});var _3=i(xr);Cu=a(_3,"SPAN",{});var b3=i(Cu);v(ad.$$.fragment,b3),b3.forEach(t),_3.forEach(t),iE=p(QT),Nu=a(QT,"SPAN",{});var k3=i(Nu);lE=s(k3,"TFBertForSequenceClassification"),k3.forEach(t),QT.forEach(t),fk=p(o),Ze=a(o,"DIV",{class:!0});var io=i(Ze);v(id.$$.fragment,io),dE=p(io),Ou=a(io,"P",{});var T3=i(Ou);cE=s(T3,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),T3.forEach(t),pE=p(io),ld=a(io,"P",{});var VT=i(ld);hE=s(VT,"This model inherits from "),fh=a(VT,"A",{href:!0});var y3=i(fh);mE=s(y3,"TFPreTrainedModel"),y3.forEach(t),fE=s(VT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VT.forEach(t),uE=p(io),dd=a(io,"P",{});var KT=i(dd);gE=s(KT,"This model is also a "),cd=a(KT,"A",{href:!0,rel:!0});var v3=i(cd);_E=s(v3,"tf.keras.Model"),v3.forEach(t),bE=s(KT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KT.forEach(t),kE=p(io),v(Br.$$.fragment,io),TE=p(io),Tt=a(io,"DIV",{class:!0});var Ro=i(Tt);v(pd.$$.fragment,Ro),yE=p(Ro),An=a(Ro,"P",{});var nm=i(An);vE=s(nm,"The "),uh=a(nm,"A",{href:!0});var w3=i(uh);wE=s(w3,"TFBertForSequenceClassification"),w3.forEach(t),$E=s(nm," forward method, overrides the "),Iu=a(nm,"CODE",{});var $3=i(Iu);FE=s($3,"__call__"),$3.forEach(t),xE=s(nm," special method."),nm.forEach(t),BE=p(Ro),v(Er.$$.fragment,Ro),EE=p(Ro),v(zr.$$.fragment,Ro),zE=p(Ro),v(Mr.$$.fragment,Ro),Ro.forEach(t),io.forEach(t),uk=p(o),Ln=a(o,"H2",{class:!0});var JT=i(Ln);Pr=a(JT,"A",{id:!0,class:!0,href:!0});var F3=i(Pr);Au=a(F3,"SPAN",{});var x3=i(Au);v(hd.$$.fragment,x3),x3.forEach(t),F3.forEach(t),ME=p(JT),Lu=a(JT,"SPAN",{});var B3=i(Lu);PE=s(B3,"TFBertForMultipleChoice"),B3.forEach(t),JT.forEach(t),gk=p(o),et=a(o,"DIV",{class:!0});var lo=i(et);v(md.$$.fragment,lo),qE=p(lo),Du=a(lo,"P",{});var E3=i(Du);jE=s(E3,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E3.forEach(t),CE=p(lo),fd=a(lo,"P",{});var GT=i(fd);NE=s(GT,"This model inherits from "),gh=a(GT,"A",{href:!0});var z3=i(gh);OE=s(z3,"TFPreTrainedModel"),z3.forEach(t),IE=s(GT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),GT.forEach(t),AE=p(lo),ud=a(lo,"P",{});var XT=i(ud);LE=s(XT,"This model is also a "),gd=a(XT,"A",{href:!0,rel:!0});var M3=i(gd);DE=s(M3,"tf.keras.Model"),M3.forEach(t),SE=s(XT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XT.forEach(t),UE=p(lo),v(qr.$$.fragment,lo),WE=p(lo),Vt=a(lo,"DIV",{class:!0});var xa=i(Vt);v(_d.$$.fragment,xa),HE=p(xa),Dn=a(xa,"P",{});var sm=i(Dn);RE=s(sm,"The "),_h=a(sm,"A",{href:!0});var P3=i(_h);QE=s(P3,"TFBertForMultipleChoice"),P3.forEach(t),VE=s(sm," forward method, overrides the "),Su=a(sm,"CODE",{});var q3=i(Su);KE=s(q3,"__call__"),q3.forEach(t),JE=s(sm," special method."),sm.forEach(t),GE=p(xa),v(jr.$$.fragment,xa),XE=p(xa),v(Cr.$$.fragment,xa),xa.forEach(t),lo.forEach(t),_k=p(o),Sn=a(o,"H2",{class:!0});var YT=i(Sn);Nr=a(YT,"A",{id:!0,class:!0,href:!0});var j3=i(Nr);Uu=a(j3,"SPAN",{});var C3=i(Uu);v(bd.$$.fragment,C3),C3.forEach(t),j3.forEach(t),YE=p(YT),Wu=a(YT,"SPAN",{});var N3=i(Wu);ZE=s(N3,"TFBertForTokenClassification"),N3.forEach(t),YT.forEach(t),bk=p(o),tt=a(o,"DIV",{class:!0});var co=i(tt);v(kd.$$.fragment,co),ez=p(co),Hu=a(co,"P",{});var O3=i(Hu);tz=s(O3,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O3.forEach(t),oz=p(co),Td=a(co,"P",{});var ZT=i(Td);nz=s(ZT,"This model inherits from "),bh=a(ZT,"A",{href:!0});var I3=i(bh);sz=s(I3,"TFPreTrainedModel"),I3.forEach(t),rz=s(ZT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ZT.forEach(t),az=p(co),yd=a(co,"P",{});var ey=i(yd);iz=s(ey,"This model is also a "),vd=a(ey,"A",{href:!0,rel:!0});var A3=i(vd);lz=s(A3,"tf.keras.Model"),A3.forEach(t),dz=s(ey,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ey.forEach(t),cz=p(co),v(Or.$$.fragment,co),pz=p(co),yt=a(co,"DIV",{class:!0});var Qo=i(yt);v(wd.$$.fragment,Qo),hz=p(Qo),Un=a(Qo,"P",{});var rm=i(Un);mz=s(rm,"The "),kh=a(rm,"A",{href:!0});var L3=i(kh);fz=s(L3,"TFBertForTokenClassification"),L3.forEach(t),uz=s(rm," forward method, overrides the "),Ru=a(rm,"CODE",{});var D3=i(Ru);gz=s(D3,"__call__"),D3.forEach(t),_z=s(rm," special method."),rm.forEach(t),bz=p(Qo),v(Ir.$$.fragment,Qo),kz=p(Qo),v(Ar.$$.fragment,Qo),Tz=p(Qo),v(Lr.$$.fragment,Qo),Qo.forEach(t),co.forEach(t),kk=p(o),Wn=a(o,"H2",{class:!0});var ty=i(Wn);Dr=a(ty,"A",{id:!0,class:!0,href:!0});var S3=i(Dr);Qu=a(S3,"SPAN",{});var U3=i(Qu);v($d.$$.fragment,U3),U3.forEach(t),S3.forEach(t),yz=p(ty),Vu=a(ty,"SPAN",{});var W3=i(Vu);vz=s(W3,"TFBertForQuestionAnswering"),W3.forEach(t),ty.forEach(t),Tk=p(o),ot=a(o,"DIV",{class:!0});var po=i(ot);v(Fd.$$.fragment,po),wz=p(po),Hn=a(po,"P",{});var am=i(Hn);$z=s(am,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ku=a(am,"CODE",{});var H3=i(Ku);Fz=s(H3,"span start logits"),H3.forEach(t),xz=s(am," and "),Ju=a(am,"CODE",{});var R3=i(Ju);Bz=s(R3,"span end logits"),R3.forEach(t),Ez=s(am,")."),am.forEach(t),zz=p(po),xd=a(po,"P",{});var oy=i(xd);Mz=s(oy,"This model inherits from "),Th=a(oy,"A",{href:!0});var Q3=i(Th);Pz=s(Q3,"TFPreTrainedModel"),Q3.forEach(t),qz=s(oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oy.forEach(t),jz=p(po),Bd=a(po,"P",{});var ny=i(Bd);Cz=s(ny,"This model is also a "),Ed=a(ny,"A",{href:!0,rel:!0});var V3=i(Ed);Nz=s(V3,"tf.keras.Model"),V3.forEach(t),Oz=s(ny,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ny.forEach(t),Iz=p(po),v(Sr.$$.fragment,po),Az=p(po),vt=a(po,"DIV",{class:!0});var Vo=i(vt);v(zd.$$.fragment,Vo),Lz=p(Vo),Rn=a(Vo,"P",{});var im=i(Rn);Dz=s(im,"The "),yh=a(im,"A",{href:!0});var K3=i(yh);Sz=s(K3,"TFBertForQuestionAnswering"),K3.forEach(t),Uz=s(im," forward method, overrides the "),Gu=a(im,"CODE",{});var J3=i(Gu);Wz=s(J3,"__call__"),J3.forEach(t),Hz=s(im," special method."),im.forEach(t),Rz=p(Vo),v(Ur.$$.fragment,Vo),Qz=p(Vo),v(Wr.$$.fragment,Vo),Vz=p(Vo),v(Hr.$$.fragment,Vo),Vo.forEach(t),po.forEach(t),yk=p(o),Qn=a(o,"H2",{class:!0});var sy=i(Qn);Rr=a(sy,"A",{id:!0,class:!0,href:!0});var G3=i(Rr);Xu=a(G3,"SPAN",{});var X3=i(Xu);v(Md.$$.fragment,X3),X3.forEach(t),G3.forEach(t),Kz=p(sy),Yu=a(sy,"SPAN",{});var Y3=i(Yu);Jz=s(Y3,"FlaxBertModel"),Y3.forEach(t),sy.forEach(t),vk=p(o),Ae=a(o,"DIV",{class:!0});var xt=i(Ae);v(Pd.$$.fragment,xt),Gz=p(xt),Zu=a(xt,"P",{});var Z3=i(Zu);Xz=s(Z3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Z3.forEach(t),Yz=p(xt),qd=a(xt,"P",{});var ry=i(qd);Zz=s(ry,"This model inherits from "),vh=a(ry,"A",{href:!0});var eC=i(vh);eM=s(eC,"FlaxPreTrainedModel"),eC.forEach(t),tM=s(ry,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ry.forEach(t),oM=p(xt),jd=a(xt,"P",{});var ay=i(jd);nM=s(ay,"This model is also a Flax Linen "),Cd=a(ay,"A",{href:!0,rel:!0});var tC=i(Cd);sM=s(tC,"flax.linen.Module"),tC.forEach(t),rM=s(ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ay.forEach(t),aM=p(xt),eg=a(xt,"P",{});var oC=i(eg);iM=s(oC,"Finally, this model supports inherent JAX features such as:"),oC.forEach(t),lM=p(xt),fo=a(xt,"UL",{});var Ba=i(fo);tg=a(Ba,"LI",{});var nC=i(tg);Nd=a(nC,"A",{href:!0,rel:!0});var sC=i(Nd);dM=s(sC,"Just-In-Time (JIT) compilation"),sC.forEach(t),nC.forEach(t),cM=p(Ba),og=a(Ba,"LI",{});var rC=i(og);Od=a(rC,"A",{href:!0,rel:!0});var aC=i(Od);pM=s(aC,"Automatic Differentiation"),aC.forEach(t),rC.forEach(t),hM=p(Ba),ng=a(Ba,"LI",{});var iC=i(ng);Id=a(iC,"A",{href:!0,rel:!0});var lC=i(Id);mM=s(lC,"Vectorization"),lC.forEach(t),iC.forEach(t),fM=p(Ba),sg=a(Ba,"LI",{});var dC=i(sg);Ad=a(dC,"A",{href:!0,rel:!0});var cC=i(Ad);uM=s(cC,"Parallelization"),cC.forEach(t),dC.forEach(t),Ba.forEach(t),gM=p(xt),Kt=a(xt,"DIV",{class:!0});var Ea=i(Kt);v(Ld.$$.fragment,Ea),_M=p(Ea),Vn=a(Ea,"P",{});var lm=i(Vn);bM=s(lm,"The "),rg=a(lm,"CODE",{});var pC=i(rg);kM=s(pC,"FlaxBertPreTrainedModel"),pC.forEach(t),TM=s(lm," forward method, overrides the "),ag=a(lm,"CODE",{});var hC=i(ag);yM=s(hC,"__call__"),hC.forEach(t),vM=s(lm," special method."),lm.forEach(t),wM=p(Ea),v(Qr.$$.fragment,Ea),$M=p(Ea),v(Vr.$$.fragment,Ea),Ea.forEach(t),xt.forEach(t),wk=p(o),Kn=a(o,"H2",{class:!0});var iy=i(Kn);Kr=a(iy,"A",{id:!0,class:!0,href:!0});var mC=i(Kr);ig=a(mC,"SPAN",{});var fC=i(ig);v(Dd.$$.fragment,fC),fC.forEach(t),mC.forEach(t),FM=p(iy),lg=a(iy,"SPAN",{});var uC=i(lg);xM=s(uC,"FlaxBertForPreTraining"),uC.forEach(t),iy.forEach(t),$k=p(o),Le=a(o,"DIV",{class:!0});var Bt=i(Le);v(Sd.$$.fragment,Bt),BM=p(Bt),Jn=a(Bt,"P",{});var dm=i(Jn);EM=s(dm,"Bert Model with two heads on top as done during the pretraining: a "),dg=a(dm,"CODE",{});var gC=i(dg);zM=s(gC,"masked language modeling"),gC.forEach(t),MM=s(dm," head and a "),cg=a(dm,"CODE",{});var _C=i(cg);PM=s(_C,"next sentence prediction (classification)"),_C.forEach(t),qM=s(dm," head."),dm.forEach(t),jM=p(Bt),Ud=a(Bt,"P",{});var ly=i(Ud);CM=s(ly,"This model inherits from "),wh=a(ly,"A",{href:!0});var bC=i(wh);NM=s(bC,"FlaxPreTrainedModel"),bC.forEach(t),OM=s(ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ly.forEach(t),IM=p(Bt),Wd=a(Bt,"P",{});var dy=i(Wd);AM=s(dy,"This model is also a Flax Linen "),Hd=a(dy,"A",{href:!0,rel:!0});var kC=i(Hd);LM=s(kC,"flax.linen.Module"),kC.forEach(t),DM=s(dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),dy.forEach(t),SM=p(Bt),pg=a(Bt,"P",{});var TC=i(pg);UM=s(TC,"Finally, this model supports inherent JAX features such as:"),TC.forEach(t),WM=p(Bt),uo=a(Bt,"UL",{});var za=i(uo);hg=a(za,"LI",{});var yC=i(hg);Rd=a(yC,"A",{href:!0,rel:!0});var vC=i(Rd);HM=s(vC,"Just-In-Time (JIT) compilation"),vC.forEach(t),yC.forEach(t),RM=p(za),mg=a(za,"LI",{});var wC=i(mg);Qd=a(wC,"A",{href:!0,rel:!0});var $C=i(Qd);QM=s($C,"Automatic Differentiation"),$C.forEach(t),wC.forEach(t),VM=p(za),fg=a(za,"LI",{});var FC=i(fg);Vd=a(FC,"A",{href:!0,rel:!0});var xC=i(Vd);KM=s(xC,"Vectorization"),xC.forEach(t),FC.forEach(t),JM=p(za),ug=a(za,"LI",{});var BC=i(ug);Kd=a(BC,"A",{href:!0,rel:!0});var EC=i(Kd);GM=s(EC,"Parallelization"),EC.forEach(t),BC.forEach(t),za.forEach(t),XM=p(Bt),Jt=a(Bt,"DIV",{class:!0});var Ma=i(Jt);v(Jd.$$.fragment,Ma),YM=p(Ma),Gn=a(Ma,"P",{});var cm=i(Gn);ZM=s(cm,"The "),gg=a(cm,"CODE",{});var zC=i(gg);e5=s(zC,"FlaxBertPreTrainedModel"),zC.forEach(t),t5=s(cm," forward method, overrides the "),_g=a(cm,"CODE",{});var MC=i(_g);o5=s(MC,"__call__"),MC.forEach(t),n5=s(cm," special method."),cm.forEach(t),s5=p(Ma),v(Jr.$$.fragment,Ma),r5=p(Ma),v(Gr.$$.fragment,Ma),Ma.forEach(t),Bt.forEach(t),Fk=p(o),Xn=a(o,"H2",{class:!0});var cy=i(Xn);Xr=a(cy,"A",{id:!0,class:!0,href:!0});var PC=i(Xr);bg=a(PC,"SPAN",{});var qC=i(bg);v(Gd.$$.fragment,qC),qC.forEach(t),PC.forEach(t),a5=p(cy),kg=a(cy,"SPAN",{});var jC=i(kg);i5=s(jC,"FlaxBertForCausalLM"),jC.forEach(t),cy.forEach(t),xk=p(o),De=a(o,"DIV",{class:!0});var Et=i(De);v(Xd.$$.fragment,Et),l5=p(Et),Tg=a(Et,"P",{});var CC=i(Tg);d5=s(CC,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),CC.forEach(t),c5=p(Et),Yd=a(Et,"P",{});var py=i(Yd);p5=s(py,"This model inherits from "),$h=a(py,"A",{href:!0});var NC=i($h);h5=s(NC,"FlaxPreTrainedModel"),NC.forEach(t),m5=s(py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),py.forEach(t),f5=p(Et),Zd=a(Et,"P",{});var hy=i(Zd);u5=s(hy,"This model is also a Flax Linen "),ec=a(hy,"A",{href:!0,rel:!0});var OC=i(ec);g5=s(OC,"flax.linen.Module"),OC.forEach(t),_5=s(hy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hy.forEach(t),b5=p(Et),yg=a(Et,"P",{});var IC=i(yg);k5=s(IC,"Finally, this model supports inherent JAX features such as:"),IC.forEach(t),T5=p(Et),go=a(Et,"UL",{});var Pa=i(go);vg=a(Pa,"LI",{});var AC=i(vg);tc=a(AC,"A",{href:!0,rel:!0});var LC=i(tc);y5=s(LC,"Just-In-Time (JIT) compilation"),LC.forEach(t),AC.forEach(t),v5=p(Pa),wg=a(Pa,"LI",{});var DC=i(wg);oc=a(DC,"A",{href:!0,rel:!0});var SC=i(oc);w5=s(SC,"Automatic Differentiation"),SC.forEach(t),DC.forEach(t),$5=p(Pa),$g=a(Pa,"LI",{});var UC=i($g);nc=a(UC,"A",{href:!0,rel:!0});var WC=i(nc);F5=s(WC,"Vectorization"),WC.forEach(t),UC.forEach(t),x5=p(Pa),Fg=a(Pa,"LI",{});var HC=i(Fg);sc=a(HC,"A",{href:!0,rel:!0});var RC=i(sc);B5=s(RC,"Parallelization"),RC.forEach(t),HC.forEach(t),Pa.forEach(t),E5=p(Et),Gt=a(Et,"DIV",{class:!0});var qa=i(Gt);v(rc.$$.fragment,qa),z5=p(qa),Yn=a(qa,"P",{});var pm=i(Yn);M5=s(pm,"The "),xg=a(pm,"CODE",{});var QC=i(xg);P5=s(QC,"FlaxBertPreTrainedModel"),QC.forEach(t),q5=s(pm," forward method, overrides the "),Bg=a(pm,"CODE",{});var VC=i(Bg);j5=s(VC,"__call__"),VC.forEach(t),C5=s(pm," special method."),pm.forEach(t),N5=p(qa),v(Yr.$$.fragment,qa),O5=p(qa),v(Zr.$$.fragment,qa),qa.forEach(t),Et.forEach(t),Bk=p(o),Zn=a(o,"H2",{class:!0});var my=i(Zn);ea=a(my,"A",{id:!0,class:!0,href:!0});var KC=i(ea);Eg=a(KC,"SPAN",{});var JC=i(Eg);v(ac.$$.fragment,JC),JC.forEach(t),KC.forEach(t),I5=p(my),zg=a(my,"SPAN",{});var GC=i(zg);A5=s(GC,"FlaxBertForMaskedLM"),GC.forEach(t),my.forEach(t),Ek=p(o),Se=a(o,"DIV",{class:!0});var zt=i(Se);v(ic.$$.fragment,zt),L5=p(zt),lc=a(zt,"P",{});var fy=i(lc);D5=s(fy,"Bert Model with a "),Mg=a(fy,"CODE",{});var XC=i(Mg);S5=s(XC,"language modeling"),XC.forEach(t),U5=s(fy," head on top."),fy.forEach(t),W5=p(zt),dc=a(zt,"P",{});var uy=i(dc);H5=s(uy,"This model inherits from "),Fh=a(uy,"A",{href:!0});var YC=i(Fh);R5=s(YC,"FlaxPreTrainedModel"),YC.forEach(t),Q5=s(uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uy.forEach(t),V5=p(zt),cc=a(zt,"P",{});var gy=i(cc);K5=s(gy,"This model is also a Flax Linen "),pc=a(gy,"A",{href:!0,rel:!0});var ZC=i(pc);J5=s(ZC,"flax.linen.Module"),ZC.forEach(t),G5=s(gy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gy.forEach(t),X5=p(zt),Pg=a(zt,"P",{});var e6=i(Pg);Y5=s(e6,"Finally, this model supports inherent JAX features such as:"),e6.forEach(t),Z5=p(zt),_o=a(zt,"UL",{});var ja=i(_o);qg=a(ja,"LI",{});var t6=i(qg);hc=a(t6,"A",{href:!0,rel:!0});var o6=i(hc);e4=s(o6,"Just-In-Time (JIT) compilation"),o6.forEach(t),t6.forEach(t),t4=p(ja),jg=a(ja,"LI",{});var n6=i(jg);mc=a(n6,"A",{href:!0,rel:!0});var s6=i(mc);o4=s(s6,"Automatic Differentiation"),s6.forEach(t),n6.forEach(t),n4=p(ja),Cg=a(ja,"LI",{});var r6=i(Cg);fc=a(r6,"A",{href:!0,rel:!0});var a6=i(fc);s4=s(a6,"Vectorization"),a6.forEach(t),r6.forEach(t),r4=p(ja),Ng=a(ja,"LI",{});var i6=i(Ng);uc=a(i6,"A",{href:!0,rel:!0});var l6=i(uc);a4=s(l6,"Parallelization"),l6.forEach(t),i6.forEach(t),ja.forEach(t),i4=p(zt),Xt=a(zt,"DIV",{class:!0});var Ca=i(Xt);v(gc.$$.fragment,Ca),l4=p(Ca),es=a(Ca,"P",{});var hm=i(es);d4=s(hm,"The "),Og=a(hm,"CODE",{});var d6=i(Og);c4=s(d6,"FlaxBertPreTrainedModel"),d6.forEach(t),p4=s(hm," forward method, overrides the "),Ig=a(hm,"CODE",{});var c6=i(Ig);h4=s(c6,"__call__"),c6.forEach(t),m4=s(hm," special method."),hm.forEach(t),f4=p(Ca),v(ta.$$.fragment,Ca),u4=p(Ca),v(oa.$$.fragment,Ca),Ca.forEach(t),zt.forEach(t),zk=p(o),ts=a(o,"H2",{class:!0});var _y=i(ts);na=a(_y,"A",{id:!0,class:!0,href:!0});var p6=i(na);Ag=a(p6,"SPAN",{});var h6=i(Ag);v(_c.$$.fragment,h6),h6.forEach(t),p6.forEach(t),g4=p(_y),Lg=a(_y,"SPAN",{});var m6=i(Lg);_4=s(m6,"FlaxBertForNextSentencePrediction"),m6.forEach(t),_y.forEach(t),Mk=p(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);v(bc.$$.fragment,Mt),b4=p(Mt),kc=a(Mt,"P",{});var by=i(kc);k4=s(by,"Bert Model with a "),Dg=a(by,"CODE",{});var f6=i(Dg);T4=s(f6,"next sentence prediction (classification)"),f6.forEach(t),y4=s(by," head on top."),by.forEach(t),v4=p(Mt),Tc=a(Mt,"P",{});var ky=i(Tc);w4=s(ky,"This model inherits from "),xh=a(ky,"A",{href:!0});var u6=i(xh);$4=s(u6,"FlaxPreTrainedModel"),u6.forEach(t),F4=s(ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ky.forEach(t),x4=p(Mt),yc=a(Mt,"P",{});var Ty=i(yc);B4=s(Ty,"This model is also a Flax Linen "),vc=a(Ty,"A",{href:!0,rel:!0});var g6=i(vc);E4=s(g6,"flax.linen.Module"),g6.forEach(t),z4=s(Ty,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ty.forEach(t),M4=p(Mt),Sg=a(Mt,"P",{});var _6=i(Sg);P4=s(_6,"Finally, this model supports inherent JAX features such as:"),_6.forEach(t),q4=p(Mt),bo=a(Mt,"UL",{});var Na=i(bo);Ug=a(Na,"LI",{});var b6=i(Ug);wc=a(b6,"A",{href:!0,rel:!0});var k6=i(wc);j4=s(k6,"Just-In-Time (JIT) compilation"),k6.forEach(t),b6.forEach(t),C4=p(Na),Wg=a(Na,"LI",{});var T6=i(Wg);$c=a(T6,"A",{href:!0,rel:!0});var y6=i($c);N4=s(y6,"Automatic Differentiation"),y6.forEach(t),T6.forEach(t),O4=p(Na),Hg=a(Na,"LI",{});var v6=i(Hg);Fc=a(v6,"A",{href:!0,rel:!0});var w6=i(Fc);I4=s(w6,"Vectorization"),w6.forEach(t),v6.forEach(t),A4=p(Na),Rg=a(Na,"LI",{});var $6=i(Rg);xc=a($6,"A",{href:!0,rel:!0});var F6=i(xc);L4=s(F6,"Parallelization"),F6.forEach(t),$6.forEach(t),Na.forEach(t),D4=p(Mt),Yt=a(Mt,"DIV",{class:!0});var Oa=i(Yt);v(Bc.$$.fragment,Oa),S4=p(Oa),os=a(Oa,"P",{});var mm=i(os);U4=s(mm,"The "),Qg=a(mm,"CODE",{});var x6=i(Qg);W4=s(x6,"FlaxBertPreTrainedModel"),x6.forEach(t),H4=s(mm," forward method, overrides the "),Vg=a(mm,"CODE",{});var B6=i(Vg);R4=s(B6,"__call__"),B6.forEach(t),Q4=s(mm," special method."),mm.forEach(t),V4=p(Oa),v(sa.$$.fragment,Oa),K4=p(Oa),v(ra.$$.fragment,Oa),Oa.forEach(t),Mt.forEach(t),Pk=p(o),ns=a(o,"H2",{class:!0});var yy=i(ns);aa=a(yy,"A",{id:!0,class:!0,href:!0});var E6=i(aa);Kg=a(E6,"SPAN",{});var z6=i(Kg);v(Ec.$$.fragment,z6),z6.forEach(t),E6.forEach(t),J4=p(yy),Jg=a(yy,"SPAN",{});var M6=i(Jg);G4=s(M6,"FlaxBertForSequenceClassification"),M6.forEach(t),yy.forEach(t),qk=p(o),We=a(o,"DIV",{class:!0});var Pt=i(We);v(zc.$$.fragment,Pt),X4=p(Pt),Gg=a(Pt,"P",{});var P6=i(Gg);Y4=s(P6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),P6.forEach(t),Z4=p(Pt),Mc=a(Pt,"P",{});var vy=i(Mc);eP=s(vy,"This model inherits from "),Bh=a(vy,"A",{href:!0});var q6=i(Bh);tP=s(q6,"FlaxPreTrainedModel"),q6.forEach(t),oP=s(vy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vy.forEach(t),nP=p(Pt),Pc=a(Pt,"P",{});var wy=i(Pc);sP=s(wy,"This model is also a Flax Linen "),qc=a(wy,"A",{href:!0,rel:!0});var j6=i(qc);rP=s(j6,"flax.linen.Module"),j6.forEach(t),aP=s(wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wy.forEach(t),iP=p(Pt),Xg=a(Pt,"P",{});var C6=i(Xg);lP=s(C6,"Finally, this model supports inherent JAX features such as:"),C6.forEach(t),dP=p(Pt),ko=a(Pt,"UL",{});var Ia=i(ko);Yg=a(Ia,"LI",{});var N6=i(Yg);jc=a(N6,"A",{href:!0,rel:!0});var O6=i(jc);cP=s(O6,"Just-In-Time (JIT) compilation"),O6.forEach(t),N6.forEach(t),pP=p(Ia),Zg=a(Ia,"LI",{});var I6=i(Zg);Cc=a(I6,"A",{href:!0,rel:!0});var A6=i(Cc);hP=s(A6,"Automatic Differentiation"),A6.forEach(t),I6.forEach(t),mP=p(Ia),e_=a(Ia,"LI",{});var L6=i(e_);Nc=a(L6,"A",{href:!0,rel:!0});var D6=i(Nc);fP=s(D6,"Vectorization"),D6.forEach(t),L6.forEach(t),uP=p(Ia),t_=a(Ia,"LI",{});var S6=i(t_);Oc=a(S6,"A",{href:!0,rel:!0});var U6=i(Oc);gP=s(U6,"Parallelization"),U6.forEach(t),S6.forEach(t),Ia.forEach(t),_P=p(Pt),Zt=a(Pt,"DIV",{class:!0});var Aa=i(Zt);v(Ic.$$.fragment,Aa),bP=p(Aa),ss=a(Aa,"P",{});var fm=i(ss);kP=s(fm,"The "),o_=a(fm,"CODE",{});var W6=i(o_);TP=s(W6,"FlaxBertPreTrainedModel"),W6.forEach(t),yP=s(fm," forward method, overrides the "),n_=a(fm,"CODE",{});var H6=i(n_);vP=s(H6,"__call__"),H6.forEach(t),wP=s(fm," special method."),fm.forEach(t),$P=p(Aa),v(ia.$$.fragment,Aa),FP=p(Aa),v(la.$$.fragment,Aa),Aa.forEach(t),Pt.forEach(t),jk=p(o),rs=a(o,"H2",{class:!0});var $y=i(rs);da=a($y,"A",{id:!0,class:!0,href:!0});var R6=i(da);s_=a(R6,"SPAN",{});var Q6=i(s_);v(Ac.$$.fragment,Q6),Q6.forEach(t),R6.forEach(t),xP=p($y),r_=a($y,"SPAN",{});var V6=i(r_);BP=s(V6,"FlaxBertForMultipleChoice"),V6.forEach(t),$y.forEach(t),Ck=p(o),He=a(o,"DIV",{class:!0});var qt=i(He);v(Lc.$$.fragment,qt),EP=p(qt),a_=a(qt,"P",{});var K6=i(a_);zP=s(K6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),K6.forEach(t),MP=p(qt),Dc=a(qt,"P",{});var Fy=i(Dc);PP=s(Fy,"This model inherits from "),Eh=a(Fy,"A",{href:!0});var J6=i(Eh);qP=s(J6,"FlaxPreTrainedModel"),J6.forEach(t),jP=s(Fy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fy.forEach(t),CP=p(qt),Sc=a(qt,"P",{});var xy=i(Sc);NP=s(xy,"This model is also a Flax Linen "),Uc=a(xy,"A",{href:!0,rel:!0});var G6=i(Uc);OP=s(G6,"flax.linen.Module"),G6.forEach(t),IP=s(xy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xy.forEach(t),AP=p(qt),i_=a(qt,"P",{});var X6=i(i_);LP=s(X6,"Finally, this model supports inherent JAX features such as:"),X6.forEach(t),DP=p(qt),To=a(qt,"UL",{});var La=i(To);l_=a(La,"LI",{});var Y6=i(l_);Wc=a(Y6,"A",{href:!0,rel:!0});var Z6=i(Wc);SP=s(Z6,"Just-In-Time (JIT) compilation"),Z6.forEach(t),Y6.forEach(t),UP=p(La),d_=a(La,"LI",{});var eN=i(d_);Hc=a(eN,"A",{href:!0,rel:!0});var tN=i(Hc);WP=s(tN,"Automatic Differentiation"),tN.forEach(t),eN.forEach(t),HP=p(La),c_=a(La,"LI",{});var oN=i(c_);Rc=a(oN,"A",{href:!0,rel:!0});var nN=i(Rc);RP=s(nN,"Vectorization"),nN.forEach(t),oN.forEach(t),QP=p(La),p_=a(La,"LI",{});var sN=i(p_);Qc=a(sN,"A",{href:!0,rel:!0});var rN=i(Qc);VP=s(rN,"Parallelization"),rN.forEach(t),sN.forEach(t),La.forEach(t),KP=p(qt),eo=a(qt,"DIV",{class:!0});var Da=i(eo);v(Vc.$$.fragment,Da),JP=p(Da),as=a(Da,"P",{});var um=i(as);GP=s(um,"The "),h_=a(um,"CODE",{});var aN=i(h_);XP=s(aN,"FlaxBertPreTrainedModel"),aN.forEach(t),YP=s(um," forward method, overrides the "),m_=a(um,"CODE",{});var iN=i(m_);ZP=s(iN,"__call__"),iN.forEach(t),eq=s(um," special method."),um.forEach(t),tq=p(Da),v(ca.$$.fragment,Da),oq=p(Da),v(pa.$$.fragment,Da),Da.forEach(t),qt.forEach(t),Nk=p(o),is=a(o,"H2",{class:!0});var By=i(is);ha=a(By,"A",{id:!0,class:!0,href:!0});var lN=i(ha);f_=a(lN,"SPAN",{});var dN=i(f_);v(Kc.$$.fragment,dN),dN.forEach(t),lN.forEach(t),nq=p(By),u_=a(By,"SPAN",{});var cN=i(u_);sq=s(cN,"FlaxBertForTokenClassification"),cN.forEach(t),By.forEach(t),Ok=p(o),Re=a(o,"DIV",{class:!0});var jt=i(Re);v(Jc.$$.fragment,jt),rq=p(jt),g_=a(jt,"P",{});var pN=i(g_);aq=s(pN,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pN.forEach(t),iq=p(jt),Gc=a(jt,"P",{});var Ey=i(Gc);lq=s(Ey,"This model inherits from "),zh=a(Ey,"A",{href:!0});var hN=i(zh);dq=s(hN,"FlaxPreTrainedModel"),hN.forEach(t),cq=s(Ey,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ey.forEach(t),pq=p(jt),Xc=a(jt,"P",{});var zy=i(Xc);hq=s(zy,"This model is also a Flax Linen "),Yc=a(zy,"A",{href:!0,rel:!0});var mN=i(Yc);mq=s(mN,"flax.linen.Module"),mN.forEach(t),fq=s(zy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zy.forEach(t),uq=p(jt),__=a(jt,"P",{});var fN=i(__);gq=s(fN,"Finally, this model supports inherent JAX features such as:"),fN.forEach(t),_q=p(jt),yo=a(jt,"UL",{});var Sa=i(yo);b_=a(Sa,"LI",{});var uN=i(b_);Zc=a(uN,"A",{href:!0,rel:!0});var gN=i(Zc);bq=s(gN,"Just-In-Time (JIT) compilation"),gN.forEach(t),uN.forEach(t),kq=p(Sa),k_=a(Sa,"LI",{});var _N=i(k_);ep=a(_N,"A",{href:!0,rel:!0});var bN=i(ep);Tq=s(bN,"Automatic Differentiation"),bN.forEach(t),_N.forEach(t),yq=p(Sa),T_=a(Sa,"LI",{});var kN=i(T_);tp=a(kN,"A",{href:!0,rel:!0});var TN=i(tp);vq=s(TN,"Vectorization"),TN.forEach(t),kN.forEach(t),wq=p(Sa),y_=a(Sa,"LI",{});var yN=i(y_);op=a(yN,"A",{href:!0,rel:!0});var vN=i(op);$q=s(vN,"Parallelization"),vN.forEach(t),yN.forEach(t),Sa.forEach(t),Fq=p(jt),to=a(jt,"DIV",{class:!0});var Ua=i(to);v(np.$$.fragment,Ua),xq=p(Ua),ls=a(Ua,"P",{});var gm=i(ls);Bq=s(gm,"The "),v_=a(gm,"CODE",{});var wN=i(v_);Eq=s(wN,"FlaxBertPreTrainedModel"),wN.forEach(t),zq=s(gm," forward method, overrides the "),w_=a(gm,"CODE",{});var $N=i(w_);Mq=s($N,"__call__"),$N.forEach(t),Pq=s(gm," special method."),gm.forEach(t),qq=p(Ua),v(ma.$$.fragment,Ua),jq=p(Ua),v(fa.$$.fragment,Ua),Ua.forEach(t),jt.forEach(t),Ik=p(o),ds=a(o,"H2",{class:!0});var My=i(ds);ua=a(My,"A",{id:!0,class:!0,href:!0});var FN=i(ua);$_=a(FN,"SPAN",{});var xN=i($_);v(sp.$$.fragment,xN),xN.forEach(t),FN.forEach(t),Cq=p(My),F_=a(My,"SPAN",{});var BN=i(F_);Nq=s(BN,"FlaxBertForQuestionAnswering"),BN.forEach(t),My.forEach(t),Ak=p(o),Qe=a(o,"DIV",{class:!0});var Ct=i(Qe);v(rp.$$.fragment,Ct),Oq=p(Ct),cs=a(Ct,"P",{});var _m=i(cs);Iq=s(_m,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),x_=a(_m,"CODE",{});var EN=i(x_);Aq=s(EN,"span start logits"),EN.forEach(t),Lq=s(_m," and "),B_=a(_m,"CODE",{});var zN=i(B_);Dq=s(zN,"span end logits"),zN.forEach(t),Sq=s(_m,")."),_m.forEach(t),Uq=p(Ct),ap=a(Ct,"P",{});var Py=i(ap);Wq=s(Py,"This model inherits from "),Mh=a(Py,"A",{href:!0});var MN=i(Mh);Hq=s(MN,"FlaxPreTrainedModel"),MN.forEach(t),Rq=s(Py,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Py.forEach(t),Qq=p(Ct),ip=a(Ct,"P",{});var qy=i(ip);Vq=s(qy,"This model is also a Flax Linen "),lp=a(qy,"A",{href:!0,rel:!0});var PN=i(lp);Kq=s(PN,"flax.linen.Module"),PN.forEach(t),Jq=s(qy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qy.forEach(t),Gq=p(Ct),E_=a(Ct,"P",{});var qN=i(E_);Xq=s(qN,"Finally, this model supports inherent JAX features such as:"),qN.forEach(t),Yq=p(Ct),vo=a(Ct,"UL",{});var Wa=i(vo);z_=a(Wa,"LI",{});var jN=i(z_);dp=a(jN,"A",{href:!0,rel:!0});var CN=i(dp);Zq=s(CN,"Just-In-Time (JIT) compilation"),CN.forEach(t),jN.forEach(t),e8=p(Wa),M_=a(Wa,"LI",{});var NN=i(M_);cp=a(NN,"A",{href:!0,rel:!0});var ON=i(cp);t8=s(ON,"Automatic Differentiation"),ON.forEach(t),NN.forEach(t),o8=p(Wa),P_=a(Wa,"LI",{});var IN=i(P_);pp=a(IN,"A",{href:!0,rel:!0});var AN=i(pp);n8=s(AN,"Vectorization"),AN.forEach(t),IN.forEach(t),s8=p(Wa),q_=a(Wa,"LI",{});var LN=i(q_);hp=a(LN,"A",{href:!0,rel:!0});var DN=i(hp);r8=s(DN,"Parallelization"),DN.forEach(t),LN.forEach(t),Wa.forEach(t),a8=p(Ct),oo=a(Ct,"DIV",{class:!0});var Ha=i(oo);v(mp.$$.fragment,Ha),i8=p(Ha),ps=a(Ha,"P",{});var bm=i(ps);l8=s(bm,"The "),j_=a(bm,"CODE",{});var SN=i(j_);d8=s(SN,"FlaxBertPreTrainedModel"),SN.forEach(t),c8=s(bm," forward method, overrides the "),C_=a(bm,"CODE",{});var UN=i(C_);p8=s(UN,"__call__"),UN.forEach(t),h8=s(bm," special method."),bm.forEach(t),m8=p(Ha),v(ga.$$.fragment,Ha),f8=p(Ha),v(_a.$$.fragment,Ha),Ha.forEach(t),Ct.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_O)),u(h,"id","bert"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#bert"),u(m,"class","relative group"),u(ne,"id","overview"),u(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ne,"href","#overview"),u(M,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1810.04805"),u(ae,"rel","nofollow"),u(Be,"href","https://huggingface.co/thomwolf"),u(Be,"rel","nofollow"),u(Ee,"href","https://github.com/google-research/bert"),u(Ee,"rel","nofollow"),u(xe,"id","transformers.BertConfig"),u(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xe,"href","#transformers.BertConfig"),u(Fe,"class","relative group"),u(Ep,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertModel"),u(zp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertModel"),u(Qa,"href","https://huggingface.co/bert-base-uncased"),u(Qa,"rel","nofollow"),u(Mp,"href","/docs/transformers/pr_18095/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pp,"href","/docs/transformers/pr_18095/en/main_classes/configuration#transformers.PretrainedConfig"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.BertTokenizer"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.BertTokenizer"),u(Jo,"class","relative group"),u(qp,"href","/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Np,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.BertTokenizerFast"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.BertTokenizerFast"),u(Xo,"class","relative group"),u(Op,"href","/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.TFBertTokenizer"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.TFBertTokenizer"),u(Zo,"class","relative group"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xs,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xs,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(on,"class","relative group"),u(Lp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForPreTraining"),u(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForPreTraining"),u(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForPreTraining"),u(Bs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Es,"id","transformers.BertModel"),u(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Es,"href","#transformers.BertModel"),u(rn,"class","relative group"),u(Up,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(Bi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Bi,"rel","nofollow"),u(zi,"href","https://arxiv.org/abs/1706.03762"),u(zi,"rel","nofollow"),u(Wp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertModel"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ps,"id","transformers.BertForPreTraining"),u(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ps,"href","#transformers.BertForPreTraining"),u(ln,"class","relative group"),u(Hp,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(Ni,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ni,"rel","nofollow"),u(Rp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForPreTraining"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.BertLMHeadModel"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.BertLMHeadModel"),u(pn,"class","relative group"),u(Qp,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(Ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ui,"rel","nofollow"),u(Vp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertLMHeadModel"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertForMaskedLM"),u(mn,"class","relative group"),u(Kp,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(Ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ji,"rel","nofollow"),u(Jp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForMaskedLM"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.BertForNextSentencePrediction"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.BertForNextSentencePrediction"),u(un,"class","relative group"),u(Gp,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(ol,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ol,"rel","nofollow"),u(Xp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.BertForSequenceClassification"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.BertForSequenceClassification"),u(_n,"class","relative group"),u(Yp,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(ll,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ll,"rel","nofollow"),u(Zp,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForSequenceClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gs,"id","transformers.BertForMultipleChoice"),u(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gs,"href","#transformers.BertForMultipleChoice"),u(kn,"class","relative group"),u(eh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(fl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fl,"rel","nofollow"),u(th,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForMultipleChoice"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zs,"id","transformers.BertForTokenClassification"),u(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zs,"href","#transformers.BertForTokenClassification"),u(yn,"class","relative group"),u(oh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(Tl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Tl,"rel","nofollow"),u(nh,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForTokenClassification"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"id","transformers.BertForQuestionAnswering"),u(nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nr,"href","#transformers.BertForQuestionAnswering"),u(wn,"class","relative group"),u(sh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),u(xl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(xl,"rel","nofollow"),u(rh,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.TFBertModel"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.TFBertModel"),u(xn,"class","relative group"),u(ah,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(ql,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ql,"rel","nofollow"),u(ih,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertModel"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pr,"id","transformers.TFBertForPreTraining"),u(pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pr,"href","#transformers.TFBertForPreTraining"),u(En,"class","relative group"),u(lh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(Al,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Al,"rel","nofollow"),u(dh,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ur,"id","transformers.TFBertLMHeadModel"),u(ur,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ur,"href","#transformers.TFBertLMHeadModel"),u(Pn,"class","relative group"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_r,"id","transformers.TFBertForMaskedLM"),u(_r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_r,"href","#transformers.TFBertForMaskedLM"),u(jn,"class","relative group"),u(ch,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(Xl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Xl,"rel","nofollow"),u(ph,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vr,"id","transformers.TFBertForNextSentencePrediction"),u(vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vr,"href","#transformers.TFBertForNextSentencePrediction"),u(Nn,"class","relative group"),u(hh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(sd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(sd,"rel","nofollow"),u(mh,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xr,"id","transformers.TFBertForSequenceClassification"),u(xr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xr,"href","#transformers.TFBertForSequenceClassification"),u(In,"class","relative group"),u(fh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(cd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(cd,"rel","nofollow"),u(uh,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.TFBertForMultipleChoice"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.TFBertForMultipleChoice"),u(Ln,"class","relative group"),u(gh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(gd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(gd,"rel","nofollow"),u(_h,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nr,"id","transformers.TFBertForTokenClassification"),u(Nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nr,"href","#transformers.TFBertForTokenClassification"),u(Sn,"class","relative group"),u(bh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(vd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(vd,"rel","nofollow"),u(kh,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dr,"id","transformers.TFBertForQuestionAnswering"),u(Dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dr,"href","#transformers.TFBertForQuestionAnswering"),u(Wn,"class","relative group"),u(Th,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ed,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ed,"rel","nofollow"),u(yh,"href","/docs/transformers/pr_18095/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rr,"id","transformers.FlaxBertModel"),u(Rr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rr,"href","#transformers.FlaxBertModel"),u(Qn,"class","relative group"),u(vh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cd,"rel","nofollow"),u(Nd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Nd,"rel","nofollow"),u(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Od,"rel","nofollow"),u(Id,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Id,"rel","nofollow"),u(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ad,"rel","nofollow"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kr,"id","transformers.FlaxBertForPreTraining"),u(Kr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kr,"href","#transformers.FlaxBertForPreTraining"),u(Kn,"class","relative group"),u(wh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Hd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Hd,"rel","nofollow"),u(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Rd,"rel","nofollow"),u(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Qd,"rel","nofollow"),u(Vd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Vd,"rel","nofollow"),u(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Kd,"rel","nofollow"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xr,"id","transformers.FlaxBertForCausalLM"),u(Xr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xr,"href","#transformers.FlaxBertForCausalLM"),u(Xn,"class","relative group"),u($h,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ec,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ec,"rel","nofollow"),u(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tc,"rel","nofollow"),u(oc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(oc,"rel","nofollow"),u(nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nc,"rel","nofollow"),u(sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sc,"rel","nofollow"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ea,"id","transformers.FlaxBertForMaskedLM"),u(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ea,"href","#transformers.FlaxBertForMaskedLM"),u(Zn,"class","relative group"),u(Fh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(pc,"rel","nofollow"),u(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hc,"rel","nofollow"),u(mc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(mc,"rel","nofollow"),u(fc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fc,"rel","nofollow"),u(uc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(uc,"rel","nofollow"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"id","transformers.FlaxBertForNextSentencePrediction"),u(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(na,"href","#transformers.FlaxBertForNextSentencePrediction"),u(ts,"class","relative group"),u(xh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(vc,"rel","nofollow"),u(wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(wc,"rel","nofollow"),u($c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($c,"rel","nofollow"),u(Fc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Fc,"rel","nofollow"),u(xc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(xc,"rel","nofollow"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"id","transformers.FlaxBertForSequenceClassification"),u(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(aa,"href","#transformers.FlaxBertForSequenceClassification"),u(ns,"class","relative group"),u(Bh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(qc,"rel","nofollow"),u(jc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(jc,"rel","nofollow"),u(Cc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Cc,"rel","nofollow"),u(Nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Nc,"rel","nofollow"),u(Oc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oc,"rel","nofollow"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(da,"id","transformers.FlaxBertForMultipleChoice"),u(da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(da,"href","#transformers.FlaxBertForMultipleChoice"),u(rs,"class","relative group"),u(Eh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Uc,"rel","nofollow"),u(Wc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wc,"rel","nofollow"),u(Hc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hc,"rel","nofollow"),u(Rc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Rc,"rel","nofollow"),u(Qc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Qc,"rel","nofollow"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ha,"id","transformers.FlaxBertForTokenClassification"),u(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ha,"href","#transformers.FlaxBertForTokenClassification"),u(is,"class","relative group"),u(zh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Yc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Yc,"rel","nofollow"),u(Zc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Zc,"rel","nofollow"),u(ep,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ep,"rel","nofollow"),u(tp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tp,"rel","nofollow"),u(op,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(op,"rel","nofollow"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ua,"id","transformers.FlaxBertForQuestionAnswering"),u(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ua,"href","#transformers.FlaxBertForQuestionAnswering"),u(ds,"class","relative group"),u(Mh,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(lp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(lp,"rel","nofollow"),u(dp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(dp,"rel","nofollow"),u(cp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(cp,"rel","nofollow"),u(pp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pp,"rel","nofollow"),u(hp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hp,"rel","nofollow"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,_,k),b(o,m,k),e(m,h),e(h,g),w(l,g,null),e(m,f),e(m,E),e(E,be),b(o,X,k),b(o,M,k),e(M,ne),e(ne,L),w(re,L,null),e(M,ke),e(M,D),e(D,Te),b(o,me,k),b(o,J,k),e(J,O),e(J,ae),e(ae,Y),e(J,P),b(o,j,k),b(o,ie,k),e(ie,H),b(o,fe,k),b(o,le,k),e(le,S),e(S,ye),b(o,ue,k),b(o,q,k),e(q,ce),e(ce,R),b(o,ge,k),b(o,de,k),e(de,Q),b(o,_e,k),b(o,se,k),e(se,N),e(N,ve),e(se,V),e(se,pe),e(pe,T),b(o,z,k),b(o,K,k),e(K,Me),e(K,Be),e(Be,I),e(K,Pe),e(K,Ee),e(Ee,qe),e(K,A),b(o,W,k),b(o,Fe,k),e(Fe,xe),e(xe,U),w(ze,U,null),e(Fe,je),e(Fe,he),e(he,Ce),b(o,Eb,k),b(o,Nt,k),w(Ra,Nt,null),e(Nt,jy),e(Nt,ho),e(ho,Cy),e(ho,Ep),e(Ep,Ny),e(ho,Oy),e(ho,zp),e(zp,Iy),e(ho,Ay),e(ho,Qa),e(Qa,Ly),e(ho,Dy),e(Nt,Sy),e(Nt,Ko),e(Ko,Uy),e(Ko,Mp),e(Mp,Wy),e(Ko,Hy),e(Ko,Pp),e(Pp,Ry),e(Ko,Qy),e(Nt,Vy),w(_s,Nt,null),b(o,zb,k),b(o,Jo,k),e(Jo,bs),e(bs,km),w(Va,km,null),e(Jo,Ky),e(Jo,Tm),e(Tm,Jy),b(o,Mb,k),b(o,Ne,k),w(Ka,Ne,null),e(Ne,Gy),e(Ne,ym),e(ym,Xy),e(Ne,Yy),e(Ne,Ja),e(Ja,Zy),e(Ja,qp),e(qp,ev),e(Ja,tv),e(Ne,ov),e(Ne,Bo),w(Ga,Bo,null),e(Bo,nv),e(Bo,vm),e(vm,sv),e(Bo,rv),e(Bo,Xa),e(Xa,jp),e(jp,av),e(jp,wm),e(wm,iv),e(Xa,lv),e(Xa,Cp),e(Cp,dv),e(Cp,$m),e($m,cv),e(Ne,pv),e(Ne,ks),w(Ya,ks,null),e(ks,hv),e(ks,Za),e(Za,mv),e(Za,Fm),e(Fm,fv),e(Za,uv),e(Ne,gv),e(Ne,It),w(ei,It,null),e(It,_v),e(It,xm),e(xm,bv),e(It,kv),w(Ts,It,null),e(It,Tv),e(It,Go),e(Go,yv),e(Go,Bm),e(Bm,vv),e(Go,wv),e(Go,Em),e(Em,$v),e(Go,Fv),e(Ne,xv),e(Ne,Np),w(ti,Np,null),b(o,Pb,k),b(o,Xo,k),e(Xo,ys),e(ys,zm),w(oi,zm,null),e(Xo,Bv),e(Xo,Mm),e(Mm,Ev),b(o,qb,k),b(o,rt,k),w(ni,rt,null),e(rt,zv),e(rt,si),e(si,Mv),e(si,Pm),e(Pm,Pv),e(si,qv),e(rt,jv),e(rt,ri),e(ri,Cv),e(ri,Op),e(Op,Nv),e(ri,Ov),e(rt,Iv),e(rt,Eo),w(ai,Eo,null),e(Eo,Av),e(Eo,qm),e(qm,Lv),e(Eo,Dv),e(Eo,ii),e(ii,Ip),e(Ip,Sv),e(Ip,jm),e(jm,Uv),e(ii,Wv),e(ii,Ap),e(Ap,Hv),e(Ap,Cm),e(Cm,Rv),e(rt,Qv),e(rt,At),w(li,At,null),e(At,Vv),e(At,Nm),e(Nm,Kv),e(At,Jv),w(vs,At,null),e(At,Gv),e(At,Yo),e(Yo,Xv),e(Yo,Om),e(Om,Yv),e(Yo,Zv),e(Yo,Im),e(Im,e1),e(Yo,t1),b(o,jb,k),b(o,Zo,k),e(Zo,ws),e(ws,Am),w(di,Am,null),e(Zo,o1),e(Zo,Lm),e(Lm,n1),b(o,Cb,k),b(o,at,k),w(ci,at,null),e(at,s1),e(at,en),e(en,r1),e(en,Dm),e(Dm,a1),e(en,i1),e(en,Sm),e(Sm,l1),e(en,d1),e(at,c1),e(at,pi),e(pi,p1),e(pi,Um),e(Um,h1),e(pi,m1),e(at,f1),e(at,zo),w(hi,zo,null),e(zo,u1),e(zo,mi),e(mi,g1),e(mi,Wm),e(Wm,_1),e(mi,b1),e(zo,k1),w($s,zo,null),e(at,T1),e(at,Mo),w(fi,Mo,null),e(Mo,y1),e(Mo,tn),e(tn,v1),e(tn,Hm),e(Hm,w1),e(tn,$1),e(tn,Rm),e(Rm,F1),e(tn,x1),e(Mo,B1),w(Fs,Mo,null),b(o,Nb,k),b(o,on,k),e(on,xs),e(xs,Qm),w(ui,Qm,null),e(on,E1),e(on,Vm),e(Vm,z1),b(o,Ob,k),b(o,nn,k),w(gi,nn,null),e(nn,M1),e(nn,_i),e(_i,P1),e(_i,Lp),e(Lp,q1),e(_i,j1),b(o,Ib,k),b(o,sn,k),w(bi,sn,null),e(sn,C1),e(sn,ki),e(ki,N1),e(ki,Dp),e(Dp,O1),e(ki,I1),b(o,Ab,k),b(o,mo,k),w(Ti,mo,null),e(mo,A1),e(mo,yi),e(yi,L1),e(yi,Sp),e(Sp,D1),e(yi,S1),e(mo,U1),e(mo,Bs),w(vi,Bs,null),e(Bs,W1),e(Bs,Km),e(Km,H1),b(o,Lb,k),b(o,rn,k),e(rn,Es),e(Es,Jm),w(wi,Jm,null),e(rn,R1),e(rn,Gm),e(Gm,Q1),b(o,Db,k),b(o,Oe,k),w($i,Oe,null),e(Oe,V1),e(Oe,Xm),e(Xm,K1),e(Oe,J1),e(Oe,Fi),e(Fi,G1),e(Fi,Up),e(Up,X1),e(Fi,Y1),e(Oe,Z1),e(Oe,xi),e(xi,ew),e(xi,Bi),e(Bi,tw),e(xi,ow),e(Oe,nw),e(Oe,Ei),e(Ei,sw),e(Ei,zi),e(zi,rw),e(Ei,aw),e(Oe,iw),e(Oe,Ke),e(Ke,lw),e(Ke,Ym),e(Ym,dw),e(Ke,cw),e(Ke,Zm),e(Zm,pw),e(Ke,hw),e(Ke,ef),e(ef,mw),e(Ke,fw),e(Ke,tf),e(tf,uw),e(Ke,gw),e(Ke,of),e(of,_w),e(Ke,bw),e(Ke,nf),e(nf,kw),e(Ke,Tw),e(Oe,yw),e(Oe,Lt),w(Mi,Lt,null),e(Lt,vw),e(Lt,an),e(an,ww),e(an,Wp),e(Wp,$w),e(an,Fw),e(an,sf),e(sf,xw),e(an,Bw),e(Lt,Ew),w(zs,Lt,null),e(Lt,zw),w(Ms,Lt,null),b(o,Sb,k),b(o,ln,k),e(ln,Ps),e(Ps,rf),w(Pi,rf,null),e(ln,Mw),e(ln,af),e(af,Pw),b(o,Ub,k),b(o,it,k),w(qi,it,null),e(it,qw),e(it,dn),e(dn,jw),e(dn,lf),e(lf,Cw),e(dn,Nw),e(dn,df),e(df,Ow),e(dn,Iw),e(it,Aw),e(it,ji),e(ji,Lw),e(ji,Hp),e(Hp,Dw),e(ji,Sw),e(it,Uw),e(it,Ci),e(Ci,Ww),e(Ci,Ni),e(Ni,Hw),e(Ci,Rw),e(it,Qw),e(it,Dt),w(Oi,Dt,null),e(Dt,Vw),e(Dt,cn),e(cn,Kw),e(cn,Rp),e(Rp,Jw),e(cn,Gw),e(cn,cf),e(cf,Xw),e(cn,Yw),e(Dt,Zw),w(qs,Dt,null),e(Dt,e$),w(js,Dt,null),b(o,Wb,k),b(o,pn,k),e(pn,Cs),e(Cs,pf),w(Ii,pf,null),e(pn,t$),e(pn,hf),e(hf,o$),b(o,Hb,k),b(o,lt,k),w(Ai,lt,null),e(lt,n$),e(lt,Li),e(Li,s$),e(Li,mf),e(mf,r$),e(Li,a$),e(lt,i$),e(lt,Di),e(Di,l$),e(Di,Qp),e(Qp,d$),e(Di,c$),e(lt,p$),e(lt,Si),e(Si,h$),e(Si,Ui),e(Ui,m$),e(Si,f$),e(lt,u$),e(lt,St),w(Wi,St,null),e(St,g$),e(St,hn),e(hn,_$),e(hn,Vp),e(Vp,b$),e(hn,k$),e(hn,ff),e(ff,T$),e(hn,y$),e(St,v$),w(Ns,St,null),e(St,w$),w(Os,St,null),b(o,Rb,k),b(o,mn,k),e(mn,Is),e(Is,uf),w(Hi,uf,null),e(mn,$$),e(mn,gf),e(gf,F$),b(o,Qb,k),b(o,dt,k),w(Ri,dt,null),e(dt,x$),e(dt,Qi),e(Qi,B$),e(Qi,_f),e(_f,E$),e(Qi,z$),e(dt,M$),e(dt,Vi),e(Vi,P$),e(Vi,Kp),e(Kp,q$),e(Vi,j$),e(dt,C$),e(dt,Ki),e(Ki,N$),e(Ki,Ji),e(Ji,O$),e(Ki,I$),e(dt,A$),e(dt,ut),w(Gi,ut,null),e(ut,L$),e(ut,fn),e(fn,D$),e(fn,Jp),e(Jp,S$),e(fn,U$),e(fn,bf),e(bf,W$),e(fn,H$),e(ut,R$),w(As,ut,null),e(ut,Q$),w(Ls,ut,null),e(ut,V$),w(Ds,ut,null),b(o,Vb,k),b(o,un,k),e(un,Ss),e(Ss,kf),w(Xi,kf,null),e(un,K$),e(un,Tf),e(Tf,J$),b(o,Kb,k),b(o,ct,k),w(Yi,ct,null),e(ct,G$),e(ct,Zi),e(Zi,X$),e(Zi,yf),e(yf,Y$),e(Zi,Z$),e(ct,e0),e(ct,el),e(el,t0),e(el,Gp),e(Gp,o0),e(el,n0),e(ct,s0),e(ct,tl),e(tl,r0),e(tl,ol),e(ol,a0),e(tl,i0),e(ct,l0),e(ct,Ut),w(nl,Ut,null),e(Ut,d0),e(Ut,gn),e(gn,c0),e(gn,Xp),e(Xp,p0),e(gn,h0),e(gn,vf),e(vf,m0),e(gn,f0),e(Ut,u0),w(Us,Ut,null),e(Ut,g0),w(Ws,Ut,null),b(o,Jb,k),b(o,_n,k),e(_n,Hs),e(Hs,wf),w(sl,wf,null),e(_n,_0),e(_n,$f),e($f,b0),b(o,Gb,k),b(o,pt,k),w(rl,pt,null),e(pt,k0),e(pt,Ff),e(Ff,T0),e(pt,y0),e(pt,al),e(al,v0),e(al,Yp),e(Yp,w0),e(al,$0),e(pt,F0),e(pt,il),e(il,x0),e(il,ll),e(ll,B0),e(il,E0),e(pt,z0),e(pt,Ve),w(dl,Ve,null),e(Ve,M0),e(Ve,bn),e(bn,P0),e(bn,Zp),e(Zp,q0),e(bn,j0),e(bn,xf),e(xf,C0),e(bn,N0),e(Ve,O0),w(Rs,Ve,null),e(Ve,I0),w(Qs,Ve,null),e(Ve,A0),w(Vs,Ve,null),e(Ve,L0),w(Ks,Ve,null),e(Ve,D0),w(Js,Ve,null),b(o,Xb,k),b(o,kn,k),e(kn,Gs),e(Gs,Bf),w(cl,Bf,null),e(kn,S0),e(kn,Ef),e(Ef,U0),b(o,Yb,k),b(o,ht,k),w(pl,ht,null),e(ht,W0),e(ht,zf),e(zf,H0),e(ht,R0),e(ht,hl),e(hl,Q0),e(hl,eh),e(eh,V0),e(hl,K0),e(ht,J0),e(ht,ml),e(ml,G0),e(ml,fl),e(fl,X0),e(ml,Y0),e(ht,Z0),e(ht,Wt),w(ul,Wt,null),e(Wt,e2),e(Wt,Tn),e(Tn,t2),e(Tn,th),e(th,o2),e(Tn,n2),e(Tn,Mf),e(Mf,s2),e(Tn,r2),e(Wt,a2),w(Xs,Wt,null),e(Wt,i2),w(Ys,Wt,null),b(o,Zb,k),b(o,yn,k),e(yn,Zs),e(Zs,Pf),w(gl,Pf,null),e(yn,l2),e(yn,qf),e(qf,d2),b(o,ek,k),b(o,mt,k),w(_l,mt,null),e(mt,c2),e(mt,jf),e(jf,p2),e(mt,h2),e(mt,bl),e(bl,m2),e(bl,oh),e(oh,f2),e(bl,u2),e(mt,g2),e(mt,kl),e(kl,_2),e(kl,Tl),e(Tl,b2),e(kl,k2),e(mt,T2),e(mt,gt),w(yl,gt,null),e(gt,y2),e(gt,vn),e(vn,v2),e(vn,nh),e(nh,w2),e(vn,$2),e(vn,Cf),e(Cf,F2),e(vn,x2),e(gt,B2),w(er,gt,null),e(gt,E2),w(tr,gt,null),e(gt,z2),w(or,gt,null),b(o,tk,k),b(o,wn,k),e(wn,nr),e(nr,Nf),w(vl,Nf,null),e(wn,M2),e(wn,Of),e(Of,P2),b(o,ok,k),b(o,ft,k),w(wl,ft,null),e(ft,q2),e(ft,$n),e($n,j2),e($n,If),e(If,C2),e($n,N2),e($n,Af),e(Af,O2),e($n,I2),e(ft,A2),e(ft,$l),e($l,L2),e($l,sh),e(sh,D2),e($l,S2),e(ft,U2),e(ft,Fl),e(Fl,W2),e(Fl,xl),e(xl,H2),e(Fl,R2),e(ft,Q2),e(ft,_t),w(Bl,_t,null),e(_t,V2),e(_t,Fn),e(Fn,K2),e(Fn,rh),e(rh,J2),e(Fn,G2),e(Fn,Lf),e(Lf,X2),e(Fn,Y2),e(_t,Z2),w(sr,_t,null),e(_t,eF),w(rr,_t,null),e(_t,tF),w(ar,_t,null),b(o,nk,k),b(o,xn,k),e(xn,ir),e(ir,Df),w(El,Df,null),e(xn,oF),e(xn,Sf),e(Sf,nF),b(o,sk,k),b(o,Je,k),w(zl,Je,null),e(Je,sF),e(Je,Uf),e(Uf,rF),e(Je,aF),e(Je,Ml),e(Ml,iF),e(Ml,ah),e(ah,lF),e(Ml,dF),e(Je,cF),e(Je,Pl),e(Pl,pF),e(Pl,ql),e(ql,hF),e(Pl,mF),e(Je,fF),w(lr,Je,null),e(Je,uF),e(Je,Ht),w(jl,Ht,null),e(Ht,gF),e(Ht,Bn),e(Bn,_F),e(Bn,ih),e(ih,bF),e(Bn,kF),e(Bn,Wf),e(Wf,TF),e(Bn,yF),e(Ht,vF),w(dr,Ht,null),e(Ht,wF),w(cr,Ht,null),b(o,rk,k),b(o,En,k),e(En,pr),e(pr,Hf),w(Cl,Hf,null),e(En,$F),e(En,Rf),e(Rf,FF),b(o,ak,k),b(o,Ge,k),w(Nl,Ge,null),e(Ge,xF),e(Ge,zn),e(zn,BF),e(zn,Qf),e(Qf,EF),e(zn,zF),e(zn,Vf),e(Vf,MF),e(zn,PF),e(Ge,qF),e(Ge,Ol),e(Ol,jF),e(Ol,lh),e(lh,CF),e(Ol,NF),e(Ge,OF),e(Ge,Il),e(Il,IF),e(Il,Al),e(Al,AF),e(Il,LF),e(Ge,DF),w(hr,Ge,null),e(Ge,SF),e(Ge,Rt),w(Ll,Rt,null),e(Rt,UF),e(Rt,Mn),e(Mn,WF),e(Mn,dh),e(dh,HF),e(Mn,RF),e(Mn,Kf),e(Kf,QF),e(Mn,VF),e(Rt,KF),w(mr,Rt,null),e(Rt,JF),w(fr,Rt,null),b(o,ik,k),b(o,Pn,k),e(Pn,ur),e(ur,Jf),w(Dl,Jf,null),e(Pn,GF),e(Pn,Gf),e(Gf,XF),b(o,lk,k),b(o,qn,k),w(Sl,qn,null),e(qn,YF),e(qn,bt),w(Ul,bt,null),e(bt,ZF),e(bt,Ie),e(Ie,ex),e(Ie,Xf),e(Xf,tx),e(Ie,ox),e(Ie,Yf),e(Yf,nx),e(Ie,sx),e(Ie,Zf),e(Zf,rx),e(Ie,ax),e(Ie,eu),e(eu,ix),e(Ie,lx),e(Ie,tu),e(tu,dx),e(Ie,cx),e(Ie,ou),e(ou,px),e(Ie,hx),e(Ie,nu),e(nu,mx),e(Ie,fx),e(bt,ux),e(bt,Wl),e(Wl,Hl),e(Hl,gx),e(Hl,su),e(su,_x),e(Hl,bx),e(Wl,kx),e(Wl,Rl),e(Rl,Tx),e(Rl,ru),e(ru,yx),e(Rl,vx),e(bt,wx),e(bt,G),e(G,$x),e(G,au),e(au,Fx),e(G,xx),e(G,iu),e(iu,Bx),e(G,Ex),e(G,lu),e(lu,zx),e(G,Mx),e(G,du),e(du,Px),e(G,qx),e(G,cu),e(cu,jx),e(G,Cx),e(G,pu),e(pu,Nx),e(G,Ox),e(G,hu),e(hu,Ix),e(G,Ax),e(G,mu),e(mu,Lx),e(G,Dx),e(G,fu),e(fu,Sx),e(G,Ux),e(G,uu),e(uu,Wx),e(G,Hx),e(G,gu),e(gu,Rx),e(G,Qx),e(G,_u),e(_u,Vx),e(G,Kx),e(G,bu),e(bu,Jx),e(G,Gx),e(G,ku),e(ku,Xx),e(G,Yx),e(G,Tu),e(Tu,Zx),e(G,eB),e(G,yu),e(yu,tB),e(G,oB),e(G,vu),e(vu,nB),e(G,sB),e(G,wu),e(wu,rB),e(G,aB),e(G,$u),e($u,iB),e(G,lB),e(G,Fu),e(Fu,dB),e(G,cB),e(bt,pB),w(gr,bt,null),b(o,dk,k),b(o,jn,k),e(jn,_r),e(_r,xu),w(Ql,xu,null),e(jn,hB),e(jn,Bu),e(Bu,mB),b(o,ck,k),b(o,Xe,k),w(Vl,Xe,null),e(Xe,fB),e(Xe,Kl),e(Kl,uB),e(Kl,Eu),e(Eu,gB),e(Kl,_B),e(Xe,bB),e(Xe,Jl),e(Jl,kB),e(Jl,ch),e(ch,TB),e(Jl,yB),e(Xe,vB),e(Xe,Gl),e(Gl,wB),e(Gl,Xl),e(Xl,$B),e(Gl,FB),e(Xe,xB),w(br,Xe,null),e(Xe,BB),e(Xe,kt),w(Yl,kt,null),e(kt,EB),e(kt,Cn),e(Cn,zB),e(Cn,ph),e(ph,MB),e(Cn,PB),e(Cn,zu),e(zu,qB),e(Cn,jB),e(kt,CB),w(kr,kt,null),e(kt,NB),w(Tr,kt,null),e(kt,OB),w(yr,kt,null),b(o,pk,k),b(o,Nn,k),e(Nn,vr),e(vr,Mu),w(Zl,Mu,null),e(Nn,IB),e(Nn,Pu),e(Pu,AB),b(o,hk,k),b(o,Ye,k),w(ed,Ye,null),e(Ye,LB),e(Ye,td),e(td,DB),e(td,qu),e(qu,SB),e(td,UB),e(Ye,WB),e(Ye,od),e(od,HB),e(od,hh),e(hh,RB),e(od,QB),e(Ye,VB),e(Ye,nd),e(nd,KB),e(nd,sd),e(sd,JB),e(nd,GB),e(Ye,XB),w(wr,Ye,null),e(Ye,YB),e(Ye,Qt),w(rd,Qt,null),e(Qt,ZB),e(Qt,On),e(On,eE),e(On,mh),e(mh,tE),e(On,oE),e(On,ju),e(ju,nE),e(On,sE),e(Qt,rE),w($r,Qt,null),e(Qt,aE),w(Fr,Qt,null),b(o,mk,k),b(o,In,k),e(In,xr),e(xr,Cu),w(ad,Cu,null),e(In,iE),e(In,Nu),e(Nu,lE),b(o,fk,k),b(o,Ze,k),w(id,Ze,null),e(Ze,dE),e(Ze,Ou),e(Ou,cE),e(Ze,pE),e(Ze,ld),e(ld,hE),e(ld,fh),e(fh,mE),e(ld,fE),e(Ze,uE),e(Ze,dd),e(dd,gE),e(dd,cd),e(cd,_E),e(dd,bE),e(Ze,kE),w(Br,Ze,null),e(Ze,TE),e(Ze,Tt),w(pd,Tt,null),e(Tt,yE),e(Tt,An),e(An,vE),e(An,uh),e(uh,wE),e(An,$E),e(An,Iu),e(Iu,FE),e(An,xE),e(Tt,BE),w(Er,Tt,null),e(Tt,EE),w(zr,Tt,null),e(Tt,zE),w(Mr,Tt,null),b(o,uk,k),b(o,Ln,k),e(Ln,Pr),e(Pr,Au),w(hd,Au,null),e(Ln,ME),e(Ln,Lu),e(Lu,PE),b(o,gk,k),b(o,et,k),w(md,et,null),e(et,qE),e(et,Du),e(Du,jE),e(et,CE),e(et,fd),e(fd,NE),e(fd,gh),e(gh,OE),e(fd,IE),e(et,AE),e(et,ud),e(ud,LE),e(ud,gd),e(gd,DE),e(ud,SE),e(et,UE),w(qr,et,null),e(et,WE),e(et,Vt),w(_d,Vt,null),e(Vt,HE),e(Vt,Dn),e(Dn,RE),e(Dn,_h),e(_h,QE),e(Dn,VE),e(Dn,Su),e(Su,KE),e(Dn,JE),e(Vt,GE),w(jr,Vt,null),e(Vt,XE),w(Cr,Vt,null),b(o,_k,k),b(o,Sn,k),e(Sn,Nr),e(Nr,Uu),w(bd,Uu,null),e(Sn,YE),e(Sn,Wu),e(Wu,ZE),b(o,bk,k),b(o,tt,k),w(kd,tt,null),e(tt,ez),e(tt,Hu),e(Hu,tz),e(tt,oz),e(tt,Td),e(Td,nz),e(Td,bh),e(bh,sz),e(Td,rz),e(tt,az),e(tt,yd),e(yd,iz),e(yd,vd),e(vd,lz),e(yd,dz),e(tt,cz),w(Or,tt,null),e(tt,pz),e(tt,yt),w(wd,yt,null),e(yt,hz),e(yt,Un),e(Un,mz),e(Un,kh),e(kh,fz),e(Un,uz),e(Un,Ru),e(Ru,gz),e(Un,_z),e(yt,bz),w(Ir,yt,null),e(yt,kz),w(Ar,yt,null),e(yt,Tz),w(Lr,yt,null),b(o,kk,k),b(o,Wn,k),e(Wn,Dr),e(Dr,Qu),w($d,Qu,null),e(Wn,yz),e(Wn,Vu),e(Vu,vz),b(o,Tk,k),b(o,ot,k),w(Fd,ot,null),e(ot,wz),e(ot,Hn),e(Hn,$z),e(Hn,Ku),e(Ku,Fz),e(Hn,xz),e(Hn,Ju),e(Ju,Bz),e(Hn,Ez),e(ot,zz),e(ot,xd),e(xd,Mz),e(xd,Th),e(Th,Pz),e(xd,qz),e(ot,jz),e(ot,Bd),e(Bd,Cz),e(Bd,Ed),e(Ed,Nz),e(Bd,Oz),e(ot,Iz),w(Sr,ot,null),e(ot,Az),e(ot,vt),w(zd,vt,null),e(vt,Lz),e(vt,Rn),e(Rn,Dz),e(Rn,yh),e(yh,Sz),e(Rn,Uz),e(Rn,Gu),e(Gu,Wz),e(Rn,Hz),e(vt,Rz),w(Ur,vt,null),e(vt,Qz),w(Wr,vt,null),e(vt,Vz),w(Hr,vt,null),b(o,yk,k),b(o,Qn,k),e(Qn,Rr),e(Rr,Xu),w(Md,Xu,null),e(Qn,Kz),e(Qn,Yu),e(Yu,Jz),b(o,vk,k),b(o,Ae,k),w(Pd,Ae,null),e(Ae,Gz),e(Ae,Zu),e(Zu,Xz),e(Ae,Yz),e(Ae,qd),e(qd,Zz),e(qd,vh),e(vh,eM),e(qd,tM),e(Ae,oM),e(Ae,jd),e(jd,nM),e(jd,Cd),e(Cd,sM),e(jd,rM),e(Ae,aM),e(Ae,eg),e(eg,iM),e(Ae,lM),e(Ae,fo),e(fo,tg),e(tg,Nd),e(Nd,dM),e(fo,cM),e(fo,og),e(og,Od),e(Od,pM),e(fo,hM),e(fo,ng),e(ng,Id),e(Id,mM),e(fo,fM),e(fo,sg),e(sg,Ad),e(Ad,uM),e(Ae,gM),e(Ae,Kt),w(Ld,Kt,null),e(Kt,_M),e(Kt,Vn),e(Vn,bM),e(Vn,rg),e(rg,kM),e(Vn,TM),e(Vn,ag),e(ag,yM),e(Vn,vM),e(Kt,wM),w(Qr,Kt,null),e(Kt,$M),w(Vr,Kt,null),b(o,wk,k),b(o,Kn,k),e(Kn,Kr),e(Kr,ig),w(Dd,ig,null),e(Kn,FM),e(Kn,lg),e(lg,xM),b(o,$k,k),b(o,Le,k),w(Sd,Le,null),e(Le,BM),e(Le,Jn),e(Jn,EM),e(Jn,dg),e(dg,zM),e(Jn,MM),e(Jn,cg),e(cg,PM),e(Jn,qM),e(Le,jM),e(Le,Ud),e(Ud,CM),e(Ud,wh),e(wh,NM),e(Ud,OM),e(Le,IM),e(Le,Wd),e(Wd,AM),e(Wd,Hd),e(Hd,LM),e(Wd,DM),e(Le,SM),e(Le,pg),e(pg,UM),e(Le,WM),e(Le,uo),e(uo,hg),e(hg,Rd),e(Rd,HM),e(uo,RM),e(uo,mg),e(mg,Qd),e(Qd,QM),e(uo,VM),e(uo,fg),e(fg,Vd),e(Vd,KM),e(uo,JM),e(uo,ug),e(ug,Kd),e(Kd,GM),e(Le,XM),e(Le,Jt),w(Jd,Jt,null),e(Jt,YM),e(Jt,Gn),e(Gn,ZM),e(Gn,gg),e(gg,e5),e(Gn,t5),e(Gn,_g),e(_g,o5),e(Gn,n5),e(Jt,s5),w(Jr,Jt,null),e(Jt,r5),w(Gr,Jt,null),b(o,Fk,k),b(o,Xn,k),e(Xn,Xr),e(Xr,bg),w(Gd,bg,null),e(Xn,a5),e(Xn,kg),e(kg,i5),b(o,xk,k),b(o,De,k),w(Xd,De,null),e(De,l5),e(De,Tg),e(Tg,d5),e(De,c5),e(De,Yd),e(Yd,p5),e(Yd,$h),e($h,h5),e(Yd,m5),e(De,f5),e(De,Zd),e(Zd,u5),e(Zd,ec),e(ec,g5),e(Zd,_5),e(De,b5),e(De,yg),e(yg,k5),e(De,T5),e(De,go),e(go,vg),e(vg,tc),e(tc,y5),e(go,v5),e(go,wg),e(wg,oc),e(oc,w5),e(go,$5),e(go,$g),e($g,nc),e(nc,F5),e(go,x5),e(go,Fg),e(Fg,sc),e(sc,B5),e(De,E5),e(De,Gt),w(rc,Gt,null),e(Gt,z5),e(Gt,Yn),e(Yn,M5),e(Yn,xg),e(xg,P5),e(Yn,q5),e(Yn,Bg),e(Bg,j5),e(Yn,C5),e(Gt,N5),w(Yr,Gt,null),e(Gt,O5),w(Zr,Gt,null),b(o,Bk,k),b(o,Zn,k),e(Zn,ea),e(ea,Eg),w(ac,Eg,null),e(Zn,I5),e(Zn,zg),e(zg,A5),b(o,Ek,k),b(o,Se,k),w(ic,Se,null),e(Se,L5),e(Se,lc),e(lc,D5),e(lc,Mg),e(Mg,S5),e(lc,U5),e(Se,W5),e(Se,dc),e(dc,H5),e(dc,Fh),e(Fh,R5),e(dc,Q5),e(Se,V5),e(Se,cc),e(cc,K5),e(cc,pc),e(pc,J5),e(cc,G5),e(Se,X5),e(Se,Pg),e(Pg,Y5),e(Se,Z5),e(Se,_o),e(_o,qg),e(qg,hc),e(hc,e4),e(_o,t4),e(_o,jg),e(jg,mc),e(mc,o4),e(_o,n4),e(_o,Cg),e(Cg,fc),e(fc,s4),e(_o,r4),e(_o,Ng),e(Ng,uc),e(uc,a4),e(Se,i4),e(Se,Xt),w(gc,Xt,null),e(Xt,l4),e(Xt,es),e(es,d4),e(es,Og),e(Og,c4),e(es,p4),e(es,Ig),e(Ig,h4),e(es,m4),e(Xt,f4),w(ta,Xt,null),e(Xt,u4),w(oa,Xt,null),b(o,zk,k),b(o,ts,k),e(ts,na),e(na,Ag),w(_c,Ag,null),e(ts,g4),e(ts,Lg),e(Lg,_4),b(o,Mk,k),b(o,Ue,k),w(bc,Ue,null),e(Ue,b4),e(Ue,kc),e(kc,k4),e(kc,Dg),e(Dg,T4),e(kc,y4),e(Ue,v4),e(Ue,Tc),e(Tc,w4),e(Tc,xh),e(xh,$4),e(Tc,F4),e(Ue,x4),e(Ue,yc),e(yc,B4),e(yc,vc),e(vc,E4),e(yc,z4),e(Ue,M4),e(Ue,Sg),e(Sg,P4),e(Ue,q4),e(Ue,bo),e(bo,Ug),e(Ug,wc),e(wc,j4),e(bo,C4),e(bo,Wg),e(Wg,$c),e($c,N4),e(bo,O4),e(bo,Hg),e(Hg,Fc),e(Fc,I4),e(bo,A4),e(bo,Rg),e(Rg,xc),e(xc,L4),e(Ue,D4),e(Ue,Yt),w(Bc,Yt,null),e(Yt,S4),e(Yt,os),e(os,U4),e(os,Qg),e(Qg,W4),e(os,H4),e(os,Vg),e(Vg,R4),e(os,Q4),e(Yt,V4),w(sa,Yt,null),e(Yt,K4),w(ra,Yt,null),b(o,Pk,k),b(o,ns,k),e(ns,aa),e(aa,Kg),w(Ec,Kg,null),e(ns,J4),e(ns,Jg),e(Jg,G4),b(o,qk,k),b(o,We,k),w(zc,We,null),e(We,X4),e(We,Gg),e(Gg,Y4),e(We,Z4),e(We,Mc),e(Mc,eP),e(Mc,Bh),e(Bh,tP),e(Mc,oP),e(We,nP),e(We,Pc),e(Pc,sP),e(Pc,qc),e(qc,rP),e(Pc,aP),e(We,iP),e(We,Xg),e(Xg,lP),e(We,dP),e(We,ko),e(ko,Yg),e(Yg,jc),e(jc,cP),e(ko,pP),e(ko,Zg),e(Zg,Cc),e(Cc,hP),e(ko,mP),e(ko,e_),e(e_,Nc),e(Nc,fP),e(ko,uP),e(ko,t_),e(t_,Oc),e(Oc,gP),e(We,_P),e(We,Zt),w(Ic,Zt,null),e(Zt,bP),e(Zt,ss),e(ss,kP),e(ss,o_),e(o_,TP),e(ss,yP),e(ss,n_),e(n_,vP),e(ss,wP),e(Zt,$P),w(ia,Zt,null),e(Zt,FP),w(la,Zt,null),b(o,jk,k),b(o,rs,k),e(rs,da),e(da,s_),w(Ac,s_,null),e(rs,xP),e(rs,r_),e(r_,BP),b(o,Ck,k),b(o,He,k),w(Lc,He,null),e(He,EP),e(He,a_),e(a_,zP),e(He,MP),e(He,Dc),e(Dc,PP),e(Dc,Eh),e(Eh,qP),e(Dc,jP),e(He,CP),e(He,Sc),e(Sc,NP),e(Sc,Uc),e(Uc,OP),e(Sc,IP),e(He,AP),e(He,i_),e(i_,LP),e(He,DP),e(He,To),e(To,l_),e(l_,Wc),e(Wc,SP),e(To,UP),e(To,d_),e(d_,Hc),e(Hc,WP),e(To,HP),e(To,c_),e(c_,Rc),e(Rc,RP),e(To,QP),e(To,p_),e(p_,Qc),e(Qc,VP),e(He,KP),e(He,eo),w(Vc,eo,null),e(eo,JP),e(eo,as),e(as,GP),e(as,h_),e(h_,XP),e(as,YP),e(as,m_),e(m_,ZP),e(as,eq),e(eo,tq),w(ca,eo,null),e(eo,oq),w(pa,eo,null),b(o,Nk,k),b(o,is,k),e(is,ha),e(ha,f_),w(Kc,f_,null),e(is,nq),e(is,u_),e(u_,sq),b(o,Ok,k),b(o,Re,k),w(Jc,Re,null),e(Re,rq),e(Re,g_),e(g_,aq),e(Re,iq),e(Re,Gc),e(Gc,lq),e(Gc,zh),e(zh,dq),e(Gc,cq),e(Re,pq),e(Re,Xc),e(Xc,hq),e(Xc,Yc),e(Yc,mq),e(Xc,fq),e(Re,uq),e(Re,__),e(__,gq),e(Re,_q),e(Re,yo),e(yo,b_),e(b_,Zc),e(Zc,bq),e(yo,kq),e(yo,k_),e(k_,ep),e(ep,Tq),e(yo,yq),e(yo,T_),e(T_,tp),e(tp,vq),e(yo,wq),e(yo,y_),e(y_,op),e(op,$q),e(Re,Fq),e(Re,to),w(np,to,null),e(to,xq),e(to,ls),e(ls,Bq),e(ls,v_),e(v_,Eq),e(ls,zq),e(ls,w_),e(w_,Mq),e(ls,Pq),e(to,qq),w(ma,to,null),e(to,jq),w(fa,to,null),b(o,Ik,k),b(o,ds,k),e(ds,ua),e(ua,$_),w(sp,$_,null),e(ds,Cq),e(ds,F_),e(F_,Nq),b(o,Ak,k),b(o,Qe,k),w(rp,Qe,null),e(Qe,Oq),e(Qe,cs),e(cs,Iq),e(cs,x_),e(x_,Aq),e(cs,Lq),e(cs,B_),e(B_,Dq),e(cs,Sq),e(Qe,Uq),e(Qe,ap),e(ap,Wq),e(ap,Mh),e(Mh,Hq),e(ap,Rq),e(Qe,Qq),e(Qe,ip),e(ip,Vq),e(ip,lp),e(lp,Kq),e(ip,Jq),e(Qe,Gq),e(Qe,E_),e(E_,Xq),e(Qe,Yq),e(Qe,vo),e(vo,z_),e(z_,dp),e(dp,Zq),e(vo,e8),e(vo,M_),e(M_,cp),e(cp,t8),e(vo,o8),e(vo,P_),e(P_,pp),e(pp,n8),e(vo,s8),e(vo,q_),e(q_,hp),e(hp,r8),e(Qe,a8),e(Qe,oo),w(mp,oo,null),e(oo,i8),e(oo,ps),e(ps,l8),e(ps,j_),e(j_,d8),e(ps,c8),e(ps,C_),e(C_,p8),e(ps,h8),e(oo,m8),w(ga,oo,null),e(oo,f8),w(_a,oo,null),Lk=!0},p(o,[k]){const fp={};k&2&&(fp.$$scope={dirty:k,ctx:o}),_s.$set(fp);const N_={};k&2&&(N_.$$scope={dirty:k,ctx:o}),Ts.$set(N_);const O_={};k&2&&(O_.$$scope={dirty:k,ctx:o}),vs.$set(O_);const I_={};k&2&&(I_.$$scope={dirty:k,ctx:o}),$s.$set(I_);const up={};k&2&&(up.$$scope={dirty:k,ctx:o}),Fs.$set(up);const A_={};k&2&&(A_.$$scope={dirty:k,ctx:o}),zs.$set(A_);const L_={};k&2&&(L_.$$scope={dirty:k,ctx:o}),Ms.$set(L_);const D_={};k&2&&(D_.$$scope={dirty:k,ctx:o}),qs.$set(D_);const gp={};k&2&&(gp.$$scope={dirty:k,ctx:o}),js.$set(gp);const S_={};k&2&&(S_.$$scope={dirty:k,ctx:o}),Ns.$set(S_);const U_={};k&2&&(U_.$$scope={dirty:k,ctx:o}),Os.$set(U_);const W_={};k&2&&(W_.$$scope={dirty:k,ctx:o}),As.$set(W_);const H_={};k&2&&(H_.$$scope={dirty:k,ctx:o}),Ls.$set(H_);const R_={};k&2&&(R_.$$scope={dirty:k,ctx:o}),Ds.$set(R_);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:o}),Us.$set(Q_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:o}),Ws.$set(V_);const _p={};k&2&&(_p.$$scope={dirty:k,ctx:o}),Rs.$set(_p);const K_={};k&2&&(K_.$$scope={dirty:k,ctx:o}),Qs.$set(K_);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:o}),Vs.$set(J_);const hs={};k&2&&(hs.$$scope={dirty:k,ctx:o}),Ks.$set(hs);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:o}),Js.$set(G_);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:o}),Xs.$set(X_);const bp={};k&2&&(bp.$$scope={dirty:k,ctx:o}),Ys.$set(bp);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:o}),er.$set(Y_);const Z_={};k&2&&(Z_.$$scope={dirty:k,ctx:o}),tr.$set(Z_);const eb={};k&2&&(eb.$$scope={dirty:k,ctx:o}),or.$set(eb);const wo={};k&2&&(wo.$$scope={dirty:k,ctx:o}),sr.$set(wo);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),rr.$set($o);const tb={};k&2&&(tb.$$scope={dirty:k,ctx:o}),ar.$set(tb);const ob={};k&2&&(ob.$$scope={dirty:k,ctx:o}),lr.$set(ob);const nb={};k&2&&(nb.$$scope={dirty:k,ctx:o}),dr.$set(nb);const ms={};k&2&&(ms.$$scope={dirty:k,ctx:o}),cr.$set(ms);const sb={};k&2&&(sb.$$scope={dirty:k,ctx:o}),hr.$set(sb);const rb={};k&2&&(rb.$$scope={dirty:k,ctx:o}),mr.$set(rb);const kp={};k&2&&(kp.$$scope={dirty:k,ctx:o}),fr.$set(kp);const ab={};k&2&&(ab.$$scope={dirty:k,ctx:o}),gr.$set(ab);const ib={};k&2&&(ib.$$scope={dirty:k,ctx:o}),br.$set(ib);const lb={};k&2&&(lb.$$scope={dirty:k,ctx:o}),kr.$set(lb);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:o}),Tr.$set(nt);const db={};k&2&&(db.$$scope={dirty:k,ctx:o}),yr.$set(db);const Tp={};k&2&&(Tp.$$scope={dirty:k,ctx:o}),wr.$set(Tp);const cb={};k&2&&(cb.$$scope={dirty:k,ctx:o}),$r.$set(cb);const fs={};k&2&&(fs.$$scope={dirty:k,ctx:o}),Fr.$set(fs);const pb={};k&2&&(pb.$$scope={dirty:k,ctx:o}),Br.$set(pb);const yp={};k&2&&(yp.$$scope={dirty:k,ctx:o}),Er.$set(yp);const Ph={};k&2&&(Ph.$$scope={dirty:k,ctx:o}),zr.$set(Ph);const hb={};k&2&&(hb.$$scope={dirty:k,ctx:o}),Mr.$set(hb);const qh={};k&2&&(qh.$$scope={dirty:k,ctx:o}),qr.$set(qh);const mb={};k&2&&(mb.$$scope={dirty:k,ctx:o}),jr.$set(mb);const vp={};k&2&&(vp.$$scope={dirty:k,ctx:o}),Cr.$set(vp);const wp={};k&2&&(wp.$$scope={dirty:k,ctx:o}),Or.$set(wp);const fb={};k&2&&(fb.$$scope={dirty:k,ctx:o}),Ir.$set(fb);const Fo={};k&2&&(Fo.$$scope={dirty:k,ctx:o}),Ar.$set(Fo);const ub={};k&2&&(ub.$$scope={dirty:k,ctx:o}),Lr.$set(ub);const us={};k&2&&(us.$$scope={dirty:k,ctx:o}),Sr.$set(us);const gb={};k&2&&(gb.$$scope={dirty:k,ctx:o}),Ur.$set(gb);const _b={};k&2&&(_b.$$scope={dirty:k,ctx:o}),Wr.$set(_b);const bb={};k&2&&(bb.$$scope={dirty:k,ctx:o}),Hr.$set(bb);const $p={};k&2&&($p.$$scope={dirty:k,ctx:o}),Qr.$set($p);const kb={};k&2&&(kb.$$scope={dirty:k,ctx:o}),Vr.$set(kb);const Tb={};k&2&&(Tb.$$scope={dirty:k,ctx:o}),Jr.$set(Tb);const yb={};k&2&&(yb.$$scope={dirty:k,ctx:o}),Gr.$set(yb);const Ot={};k&2&&(Ot.$$scope={dirty:k,ctx:o}),Yr.$set(Ot);const Fp={};k&2&&(Fp.$$scope={dirty:k,ctx:o}),Zr.$set(Fp);const vb={};k&2&&(vb.$$scope={dirty:k,ctx:o}),ta.$set(vb);const xp={};k&2&&(xp.$$scope={dirty:k,ctx:o}),oa.$set(xp);const wb={};k&2&&(wb.$$scope={dirty:k,ctx:o}),sa.$set(wb);const gs={};k&2&&(gs.$$scope={dirty:k,ctx:o}),ra.$set(gs);const $b={};k&2&&($b.$$scope={dirty:k,ctx:o}),ia.$set($b);const Bp={};k&2&&(Bp.$$scope={dirty:k,ctx:o}),la.$set(Bp);const jh={};k&2&&(jh.$$scope={dirty:k,ctx:o}),ca.$set(jh);const Fb={};k&2&&(Fb.$$scope={dirty:k,ctx:o}),pa.$set(Fb);const Ch={};k&2&&(Ch.$$scope={dirty:k,ctx:o}),ma.$set(Ch);const xb={};k&2&&(xb.$$scope={dirty:k,ctx:o}),fa.$set(xb);const xo={};k&2&&(xo.$$scope={dirty:k,ctx:o}),ga.$set(xo);const Bb={};k&2&&(Bb.$$scope={dirty:k,ctx:o}),_a.$set(Bb)},i(o){Lk||($(l.$$.fragment,o),$(re.$$.fragment,o),$(ze.$$.fragment,o),$(Ra.$$.fragment,o),$(_s.$$.fragment,o),$(Va.$$.fragment,o),$(Ka.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(ei.$$.fragment,o),$(Ts.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(ai.$$.fragment,o),$(li.$$.fragment,o),$(vs.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(hi.$$.fragment,o),$($s.$$.fragment,o),$(fi.$$.fragment,o),$(Fs.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(bi.$$.fragment,o),$(Ti.$$.fragment,o),$(vi.$$.fragment,o),$(wi.$$.fragment,o),$($i.$$.fragment,o),$(Mi.$$.fragment,o),$(zs.$$.fragment,o),$(Ms.$$.fragment,o),$(Pi.$$.fragment,o),$(qi.$$.fragment,o),$(Oi.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Ii.$$.fragment,o),$(Ai.$$.fragment,o),$(Wi.$$.fragment,o),$(Ns.$$.fragment,o),$(Os.$$.fragment,o),$(Hi.$$.fragment,o),$(Ri.$$.fragment,o),$(Gi.$$.fragment,o),$(As.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Xi.$$.fragment,o),$(Yi.$$.fragment,o),$(nl.$$.fragment,o),$(Us.$$.fragment,o),$(Ws.$$.fragment,o),$(sl.$$.fragment,o),$(rl.$$.fragment,o),$(dl.$$.fragment,o),$(Rs.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(ul.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(yl.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(vl.$$.fragment,o),$(wl.$$.fragment,o),$(Bl.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(El.$$.fragment,o),$(zl.$$.fragment,o),$(lr.$$.fragment,o),$(jl.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Cl.$$.fragment,o),$(Nl.$$.fragment,o),$(hr.$$.fragment,o),$(Ll.$$.fragment,o),$(mr.$$.fragment,o),$(fr.$$.fragment,o),$(Dl.$$.fragment,o),$(Sl.$$.fragment,o),$(Ul.$$.fragment,o),$(gr.$$.fragment,o),$(Ql.$$.fragment,o),$(Vl.$$.fragment,o),$(br.$$.fragment,o),$(Yl.$$.fragment,o),$(kr.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(Zl.$$.fragment,o),$(ed.$$.fragment,o),$(wr.$$.fragment,o),$(rd.$$.fragment,o),$($r.$$.fragment,o),$(Fr.$$.fragment,o),$(ad.$$.fragment,o),$(id.$$.fragment,o),$(Br.$$.fragment,o),$(pd.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(Mr.$$.fragment,o),$(hd.$$.fragment,o),$(md.$$.fragment,o),$(qr.$$.fragment,o),$(_d.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(bd.$$.fragment,o),$(kd.$$.fragment,o),$(Or.$$.fragment,o),$(wd.$$.fragment,o),$(Ir.$$.fragment,o),$(Ar.$$.fragment,o),$(Lr.$$.fragment,o),$($d.$$.fragment,o),$(Fd.$$.fragment,o),$(Sr.$$.fragment,o),$(zd.$$.fragment,o),$(Ur.$$.fragment,o),$(Wr.$$.fragment,o),$(Hr.$$.fragment,o),$(Md.$$.fragment,o),$(Pd.$$.fragment,o),$(Ld.$$.fragment,o),$(Qr.$$.fragment,o),$(Vr.$$.fragment,o),$(Dd.$$.fragment,o),$(Sd.$$.fragment,o),$(Jd.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(Gd.$$.fragment,o),$(Xd.$$.fragment,o),$(rc.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ac.$$.fragment,o),$(ic.$$.fragment,o),$(gc.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(_c.$$.fragment,o),$(bc.$$.fragment,o),$(Bc.$$.fragment,o),$(sa.$$.fragment,o),$(ra.$$.fragment,o),$(Ec.$$.fragment,o),$(zc.$$.fragment,o),$(Ic.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(Ac.$$.fragment,o),$(Lc.$$.fragment,o),$(Vc.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(Kc.$$.fragment,o),$(Jc.$$.fragment,o),$(np.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(sp.$$.fragment,o),$(rp.$$.fragment,o),$(mp.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),Lk=!0)},o(o){F(l.$$.fragment,o),F(re.$$.fragment,o),F(ze.$$.fragment,o),F(Ra.$$.fragment,o),F(_s.$$.fragment,o),F(Va.$$.fragment,o),F(Ka.$$.fragment,o),F(Ga.$$.fragment,o),F(Ya.$$.fragment,o),F(ei.$$.fragment,o),F(Ts.$$.fragment,o),F(ti.$$.fragment,o),F(oi.$$.fragment,o),F(ni.$$.fragment,o),F(ai.$$.fragment,o),F(li.$$.fragment,o),F(vs.$$.fragment,o),F(di.$$.fragment,o),F(ci.$$.fragment,o),F(hi.$$.fragment,o),F($s.$$.fragment,o),F(fi.$$.fragment,o),F(Fs.$$.fragment,o),F(ui.$$.fragment,o),F(gi.$$.fragment,o),F(bi.$$.fragment,o),F(Ti.$$.fragment,o),F(vi.$$.fragment,o),F(wi.$$.fragment,o),F($i.$$.fragment,o),F(Mi.$$.fragment,o),F(zs.$$.fragment,o),F(Ms.$$.fragment,o),F(Pi.$$.fragment,o),F(qi.$$.fragment,o),F(Oi.$$.fragment,o),F(qs.$$.fragment,o),F(js.$$.fragment,o),F(Ii.$$.fragment,o),F(Ai.$$.fragment,o),F(Wi.$$.fragment,o),F(Ns.$$.fragment,o),F(Os.$$.fragment,o),F(Hi.$$.fragment,o),F(Ri.$$.fragment,o),F(Gi.$$.fragment,o),F(As.$$.fragment,o),F(Ls.$$.fragment,o),F(Ds.$$.fragment,o),F(Xi.$$.fragment,o),F(Yi.$$.fragment,o),F(nl.$$.fragment,o),F(Us.$$.fragment,o),F(Ws.$$.fragment,o),F(sl.$$.fragment,o),F(rl.$$.fragment,o),F(dl.$$.fragment,o),F(Rs.$$.fragment,o),F(Qs.$$.fragment,o),F(Vs.$$.fragment,o),F(Ks.$$.fragment,o),F(Js.$$.fragment,o),F(cl.$$.fragment,o),F(pl.$$.fragment,o),F(ul.$$.fragment,o),F(Xs.$$.fragment,o),F(Ys.$$.fragment,o),F(gl.$$.fragment,o),F(_l.$$.fragment,o),F(yl.$$.fragment,o),F(er.$$.fragment,o),F(tr.$$.fragment,o),F(or.$$.fragment,o),F(vl.$$.fragment,o),F(wl.$$.fragment,o),F(Bl.$$.fragment,o),F(sr.$$.fragment,o),F(rr.$$.fragment,o),F(ar.$$.fragment,o),F(El.$$.fragment,o),F(zl.$$.fragment,o),F(lr.$$.fragment,o),F(jl.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(Cl.$$.fragment,o),F(Nl.$$.fragment,o),F(hr.$$.fragment,o),F(Ll.$$.fragment,o),F(mr.$$.fragment,o),F(fr.$$.fragment,o),F(Dl.$$.fragment,o),F(Sl.$$.fragment,o),F(Ul.$$.fragment,o),F(gr.$$.fragment,o),F(Ql.$$.fragment,o),F(Vl.$$.fragment,o),F(br.$$.fragment,o),F(Yl.$$.fragment,o),F(kr.$$.fragment,o),F(Tr.$$.fragment,o),F(yr.$$.fragment,o),F(Zl.$$.fragment,o),F(ed.$$.fragment,o),F(wr.$$.fragment,o),F(rd.$$.fragment,o),F($r.$$.fragment,o),F(Fr.$$.fragment,o),F(ad.$$.fragment,o),F(id.$$.fragment,o),F(Br.$$.fragment,o),F(pd.$$.fragment,o),F(Er.$$.fragment,o),F(zr.$$.fragment,o),F(Mr.$$.fragment,o),F(hd.$$.fragment,o),F(md.$$.fragment,o),F(qr.$$.fragment,o),F(_d.$$.fragment,o),F(jr.$$.fragment,o),F(Cr.$$.fragment,o),F(bd.$$.fragment,o),F(kd.$$.fragment,o),F(Or.$$.fragment,o),F(wd.$$.fragment,o),F(Ir.$$.fragment,o),F(Ar.$$.fragment,o),F(Lr.$$.fragment,o),F($d.$$.fragment,o),F(Fd.$$.fragment,o),F(Sr.$$.fragment,o),F(zd.$$.fragment,o),F(Ur.$$.fragment,o),F(Wr.$$.fragment,o),F(Hr.$$.fragment,o),F(Md.$$.fragment,o),F(Pd.$$.fragment,o),F(Ld.$$.fragment,o),F(Qr.$$.fragment,o),F(Vr.$$.fragment,o),F(Dd.$$.fragment,o),F(Sd.$$.fragment,o),F(Jd.$$.fragment,o),F(Jr.$$.fragment,o),F(Gr.$$.fragment,o),F(Gd.$$.fragment,o),F(Xd.$$.fragment,o),F(rc.$$.fragment,o),F(Yr.$$.fragment,o),F(Zr.$$.fragment,o),F(ac.$$.fragment,o),F(ic.$$.fragment,o),F(gc.$$.fragment,o),F(ta.$$.fragment,o),F(oa.$$.fragment,o),F(_c.$$.fragment,o),F(bc.$$.fragment,o),F(Bc.$$.fragment,o),F(sa.$$.fragment,o),F(ra.$$.fragment,o),F(Ec.$$.fragment,o),F(zc.$$.fragment,o),F(Ic.$$.fragment,o),F(ia.$$.fragment,o),F(la.$$.fragment,o),F(Ac.$$.fragment,o),F(Lc.$$.fragment,o),F(Vc.$$.fragment,o),F(ca.$$.fragment,o),F(pa.$$.fragment,o),F(Kc.$$.fragment,o),F(Jc.$$.fragment,o),F(np.$$.fragment,o),F(ma.$$.fragment,o),F(fa.$$.fragment,o),F(sp.$$.fragment,o),F(rp.$$.fragment,o),F(mp.$$.fragment,o),F(ga.$$.fragment,o),F(_a.$$.fragment,o),Lk=!1},d(o){t(d),o&&t(_),o&&t(m),x(l),o&&t(X),o&&t(M),x(re),o&&t(me),o&&t(J),o&&t(j),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ue),o&&t(q),o&&t(ge),o&&t(de),o&&t(_e),o&&t(se),o&&t(z),o&&t(K),o&&t(W),o&&t(Fe),x(ze),o&&t(Eb),o&&t(Nt),x(Ra),x(_s),o&&t(zb),o&&t(Jo),x(Va),o&&t(Mb),o&&t(Ne),x(Ka),x(Ga),x(Ya),x(ei),x(Ts),x(ti),o&&t(Pb),o&&t(Xo),x(oi),o&&t(qb),o&&t(rt),x(ni),x(ai),x(li),x(vs),o&&t(jb),o&&t(Zo),x(di),o&&t(Cb),o&&t(at),x(ci),x(hi),x($s),x(fi),x(Fs),o&&t(Nb),o&&t(on),x(ui),o&&t(Ob),o&&t(nn),x(gi),o&&t(Ib),o&&t(sn),x(bi),o&&t(Ab),o&&t(mo),x(Ti),x(vi),o&&t(Lb),o&&t(rn),x(wi),o&&t(Db),o&&t(Oe),x($i),x(Mi),x(zs),x(Ms),o&&t(Sb),o&&t(ln),x(Pi),o&&t(Ub),o&&t(it),x(qi),x(Oi),x(qs),x(js),o&&t(Wb),o&&t(pn),x(Ii),o&&t(Hb),o&&t(lt),x(Ai),x(Wi),x(Ns),x(Os),o&&t(Rb),o&&t(mn),x(Hi),o&&t(Qb),o&&t(dt),x(Ri),x(Gi),x(As),x(Ls),x(Ds),o&&t(Vb),o&&t(un),x(Xi),o&&t(Kb),o&&t(ct),x(Yi),x(nl),x(Us),x(Ws),o&&t(Jb),o&&t(_n),x(sl),o&&t(Gb),o&&t(pt),x(rl),x(dl),x(Rs),x(Qs),x(Vs),x(Ks),x(Js),o&&t(Xb),o&&t(kn),x(cl),o&&t(Yb),o&&t(ht),x(pl),x(ul),x(Xs),x(Ys),o&&t(Zb),o&&t(yn),x(gl),o&&t(ek),o&&t(mt),x(_l),x(yl),x(er),x(tr),x(or),o&&t(tk),o&&t(wn),x(vl),o&&t(ok),o&&t(ft),x(wl),x(Bl),x(sr),x(rr),x(ar),o&&t(nk),o&&t(xn),x(El),o&&t(sk),o&&t(Je),x(zl),x(lr),x(jl),x(dr),x(cr),o&&t(rk),o&&t(En),x(Cl),o&&t(ak),o&&t(Ge),x(Nl),x(hr),x(Ll),x(mr),x(fr),o&&t(ik),o&&t(Pn),x(Dl),o&&t(lk),o&&t(qn),x(Sl),x(Ul),x(gr),o&&t(dk),o&&t(jn),x(Ql),o&&t(ck),o&&t(Xe),x(Vl),x(br),x(Yl),x(kr),x(Tr),x(yr),o&&t(pk),o&&t(Nn),x(Zl),o&&t(hk),o&&t(Ye),x(ed),x(wr),x(rd),x($r),x(Fr),o&&t(mk),o&&t(In),x(ad),o&&t(fk),o&&t(Ze),x(id),x(Br),x(pd),x(Er),x(zr),x(Mr),o&&t(uk),o&&t(Ln),x(hd),o&&t(gk),o&&t(et),x(md),x(qr),x(_d),x(jr),x(Cr),o&&t(_k),o&&t(Sn),x(bd),o&&t(bk),o&&t(tt),x(kd),x(Or),x(wd),x(Ir),x(Ar),x(Lr),o&&t(kk),o&&t(Wn),x($d),o&&t(Tk),o&&t(ot),x(Fd),x(Sr),x(zd),x(Ur),x(Wr),x(Hr),o&&t(yk),o&&t(Qn),x(Md),o&&t(vk),o&&t(Ae),x(Pd),x(Ld),x(Qr),x(Vr),o&&t(wk),o&&t(Kn),x(Dd),o&&t($k),o&&t(Le),x(Sd),x(Jd),x(Jr),x(Gr),o&&t(Fk),o&&t(Xn),x(Gd),o&&t(xk),o&&t(De),x(Xd),x(rc),x(Yr),x(Zr),o&&t(Bk),o&&t(Zn),x(ac),o&&t(Ek),o&&t(Se),x(ic),x(gc),x(ta),x(oa),o&&t(zk),o&&t(ts),x(_c),o&&t(Mk),o&&t(Ue),x(bc),x(Bc),x(sa),x(ra),o&&t(Pk),o&&t(ns),x(Ec),o&&t(qk),o&&t(We),x(zc),x(Ic),x(ia),x(la),o&&t(jk),o&&t(rs),x(Ac),o&&t(Ck),o&&t(He),x(Lc),x(Vc),x(ca),x(pa),o&&t(Nk),o&&t(is),x(Kc),o&&t(Ok),o&&t(Re),x(Jc),x(np),x(ma),x(fa),o&&t(Ik),o&&t(ds),x(sp),o&&t(Ak),o&&t(Qe),x(rp),x(mp),x(ga),x(_a)}}}const _O={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function bO(B){return VN(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class FO extends WN{constructor(d){super();HN(this,d,bO,gO,RN,{})}}export{FO as default,_O as metadata};
