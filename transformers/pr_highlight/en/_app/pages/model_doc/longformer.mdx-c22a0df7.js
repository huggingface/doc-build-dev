import{S as iT,i as lT,s as dT,e as r,k as c,w as v,t as n,Y as Oo,M as cT,c as a,d as t,m as h,a as i,x as T,h as s,Z as jo,b as _,F as e,g as f,y,q as $,o as L,B as x,v as hT,L as je}from"../../chunks/vendor-6b77c823.js";import{T as Ae}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-1088f2fb.js";import{C as qe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ce}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Oe}from"../../chunks/ExampleCodeBlock-5212b321.js";function mT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function pT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function fT(M){let d,k,m,p,b;return p=new qe({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">&gt;&gt;&gt; </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){d=r("p"),k=n("Examples:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Examples:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function gT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function uT(M){let d,k,m,p,b;return p=new qe({props:{code:`import torch
from transformers import LongformerForMaskedLM, LongformerTokenizer

model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = None  # default is local attention everywhere, which is a good choice for MaskedLM
# check \`LongformerModel.forward\` for more details how to set *attention_mask*
outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
loss = outputs.loss
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerForMaskedLM, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = <span class="hljs-literal">None</span>  <span class="hljs-comment"># default is local attention everywhere, which is a good choice for MaskedLM</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># check \`LongformerModel.forward\` for more details how to set *attention_mask*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),k=n("Examples:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Examples:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function _T(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function wT(M){let d,k,m,p,b;return p=new qe({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),k=n("Example of single-label classification:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example of single-label classification:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function kT(M){let d,k;return d=new qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,p){y(d,m,p),k=!0},p:je,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){L(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function bT(M){let d,k,m,p,b;return p=new qe({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),k=n("Example of multi-label classification:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example of multi-label classification:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function vT(M){let d,k;return d=new qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,p){y(d,m,p),k=!0},p:je,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){L(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function TT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function yT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function $T(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function LT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

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
`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function xT(M){let d,k;return d=new qe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,p){y(d,m,p),k=!0},p:je,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){L(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function FT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function MT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){d=r("p"),k=n("Examples:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Examples:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function ET(M){let d,k,m,p,b,l,u,E,me,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,O,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),O=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=h(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(Y),E=a(Y,"LI",{});var he=i(E);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=h(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(t),le=s(A,"."),A.forEach(t),G=h(w),P=a(w,"P",{});var xe=i(P);te=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),X=h(w),q=a(w,"UL",{});var j=i(q);O=a(j,"LI",{});var V=i(O);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=h(j),C=a(j,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=h(j),N=a(j,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),j.forEach(t)},m(w,F){f(w,d,F),e(d,k),f(w,m,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,O),e(O,ne),e(O,B),e(B,de),e(O,se),e(O,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(d),w&&t(m),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function zT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function qT(M){let d,k,m,p,b,l,u,E,me,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,O,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),O=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=h(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(Y),E=a(Y,"LI",{});var he=i(E);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=h(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(t),le=s(A,"."),A.forEach(t),G=h(w),P=a(w,"P",{});var xe=i(P);te=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),X=h(w),q=a(w,"UL",{});var j=i(q);O=a(j,"LI",{});var V=i(O);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=h(j),C=a(j,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=h(j),N=a(j,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),j.forEach(t)},m(w,F){f(w,d,F),e(d,k),f(w,m,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,O),e(O,ne),e(O,B),e(B,de),e(O,se),e(O,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(d),w&&t(m),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function CT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function OT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function jT(M){let d,k;return d=new qe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,p){y(d,m,p),k=!0},p:je,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){L(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function PT(M){let d,k,m,p,b,l,u,E,me,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,O,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),O=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=h(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(Y),E=a(Y,"LI",{});var he=i(E);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=h(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(t),le=s(A,"."),A.forEach(t),G=h(w),P=a(w,"P",{});var xe=i(P);te=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),X=h(w),q=a(w,"UL",{});var j=i(q);O=a(j,"LI",{});var V=i(O);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=h(j),C=a(j,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=h(j),N=a(j,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),j.forEach(t)},m(w,F){f(w,d,F),e(d,k),f(w,m,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,O),e(O,ne),e(O,B),e(B,de),e(O,se),e(O,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(d),w&&t(m),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function NT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function AT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function IT(M){let d,k;return d=new qe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,p){y(d,m,p),k=!0},p:je,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){L(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function ST(M){let d,k,m,p,b,l,u,E,me,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,O,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),O=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=h(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(Y),E=a(Y,"LI",{});var he=i(E);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=h(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(t),le=s(A,"."),A.forEach(t),G=h(w),P=a(w,"P",{});var xe=i(P);te=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),X=h(w),q=a(w,"UL",{});var j=i(q);O=a(j,"LI",{});var V=i(O);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=h(j),C=a(j,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=h(j),N=a(j,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),j.forEach(t)},m(w,F){f(w,d,F),e(d,k),f(w,m,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,O),e(O,ne),e(O,B),e(B,de),e(O,se),e(O,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(d),w&&t(m),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function DT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function WT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function QT(M){let d,k;return d=new qe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,p){y(d,m,p),k=!0},p:je,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){L(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function UT(M){let d,k,m,p,b,l,u,E,me,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,O,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),O=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=h(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(Y),E=a(Y,"LI",{});var he=i(E);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=h(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(t),le=s(A,"."),A.forEach(t),G=h(w),P=a(w,"P",{});var xe=i(P);te=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),X=h(w),q=a(w,"UL",{});var j=i(q);O=a(j,"LI",{});var V=i(O);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=h(j),C=a(j,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=h(j),N=a(j,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),j.forEach(t)},m(w,F){f(w,d,F),e(d,k),f(w,m,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,O),e(O,ne),e(O,B),e(B,de),e(O,se),e(O,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(d),w&&t(m),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function BT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function HT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

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
`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function RT(M){let d,k;return d=new qe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,p){y(d,m,p),k=!0},p:je,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){L(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function VT(M){let d,k,m,p,b,l,u,E,me,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,O,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),O=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=h(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=h(Y),E=a(Y,"LI",{});var he=i(E);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=h(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(t),le=s(A,"."),A.forEach(t),G=h(w),P=a(w,"P",{});var xe=i(P);te=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),X=h(w),q=a(w,"UL",{});var j=i(q);O=a(j,"LI",{});var V=i(O);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=h(j),C=a(j,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=h(j),N=a(j,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),j.forEach(t)},m(w,F){f(w,d,F),e(d,k),f(w,m,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,O),e(O,ne),e(O,B),e(B,de),e(O,se),e(O,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(d),w&&t(m),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function GT(M){let d,k,m,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,k),e(d,m),e(m,p),e(d,b)},d(l){l&&t(d)}}}function KT(M){let d,k,m,p,b;return p=new qe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=n("Example:"),m=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(t),m=h(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,m,u),y(p,l,u),b=!0},p:je,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(p,l)}}}function JT(M){let d,k,m,p,b,l,u,E,me,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,O,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we,w,F,Y,Te,he,A,be,Le,xe,j,V,Fe,ye,I,ke,ve,oe,Me,ei,Sh,hd,$e,Dh,md,Yv='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',pd,fd,Zv='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',gd,ud,eT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',_d,ti,Wh,Qh,oi,Uh,Bh,ni,Hh,Rh,wd,tT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',kd,si,Vh,Gh,bd,_t,Kh,vd,oT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,ri,Jh,Xh,yd,wt,Yh,ai,Zh,em,ii,tm,om,$d,Po,li,nm,sm,di,rm,Ld,No,am,Gr,im,lm,xd,Je,dm,Fd,nT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',Md,Ed,sT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',zd,qd,rT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Cd,Od,aT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',jd,Pd,Ao,cm,Vn,hm,mm,Nd,Ct,Io,ci,Gn,pm,hi,fm,Ad,Ot,Kr,gm,um,Jr,_m,wm,Id,Kn,Sd,jt,So,mi,Jn,km,pi,bm,Dd,Be,Xn,vm,Pt,Tm,Xr,ym,$m,Yr,Lm,xm,Fm,Nt,Mm,Zr,Em,zm,Yn,qm,Cm,Om,At,jm,ea,Pm,Nm,ta,Am,Im,Sm,Do,Wd,It,Wo,fi,Zn,Dm,gi,Wm,Qd,ft,es,Qm,ui,Um,Bm,Qo,oa,Hm,Rm,na,Vm,Gm,Ud,St,Uo,_i,ts,Km,wi,Jm,Bd,gt,os,Xm,ns,Ym,ki,Zm,ep,tp,Bo,sa,op,np,ra,sp,rp,Hd,Dt,Ho,bi,ss,ap,vi,ip,Rd,Wt,rs,lp,Ti,dp,Vd,Qt,as,cp,yi,hp,Gd,Ut,is,mp,$i,pp,Kd,Bt,ls,fp,Li,gp,Jd,Ht,ds,up,xi,_p,Xd,Rt,cs,wp,Fi,kp,Yd,Vt,hs,bp,Mi,vp,Zd,Gt,ms,Tp,Ei,yp,ec,Kt,ps,$p,zi,Lp,tc,Jt,fs,xp,qi,Fp,oc,Xt,gs,Mp,Ci,Ep,nc,Yt,us,zp,Oi,qp,sc,Zt,_s,Cp,ji,Op,rc,eo,ws,jp,Pi,Pp,ac,to,Ro,Ni,ks,Np,Ai,Ap,ic,Pe,bs,Ip,Ii,Sp,Dp,vs,Wp,aa,Qp,Up,Bp,Ts,Hp,ys,Rp,Vp,Gp,oo,Kp,ia,Jp,Xp,$s,Yp,Zp,ef,Ls,tf,Si,of,nf,sf,st,xs,rf,no,af,la,lf,df,Di,cf,hf,mf,Vo,pf,Go,lc,so,Ko,Wi,Fs,ff,Qi,gf,dc,He,Ms,uf,Es,_f,Ui,wf,kf,bf,zs,vf,da,Tf,yf,$f,qs,Lf,Cs,xf,Ff,Mf,rt,Os,Ef,ro,zf,ca,qf,Cf,Bi,Of,jf,Pf,Jo,Nf,Xo,cc,ao,Yo,Hi,js,Af,Ri,If,hc,Re,Ps,Sf,Vi,Df,Wf,Ns,Qf,ha,Uf,Bf,Hf,As,Rf,Is,Vf,Gf,Kf,Ne,Ss,Jf,io,Xf,ma,Yf,Zf,Gi,eg,tg,og,Zo,ng,en,sg,tn,rg,on,ag,nn,mc,lo,sn,Ki,Ds,ig,Ji,lg,pc,Ve,Ws,dg,Xi,cg,hg,Qs,mg,pa,pg,fg,gg,Us,ug,Bs,_g,wg,kg,at,Hs,bg,co,vg,fa,Tg,yg,Yi,$g,Lg,xg,rn,Fg,an,fc,ho,ln,Zi,Rs,Mg,el,Eg,gc,Ge,Vs,zg,tl,qg,Cg,Gs,Og,ga,jg,Pg,Ng,Ks,Ag,Js,Ig,Sg,Dg,Xe,Xs,Wg,mo,Qg,ua,Ug,Bg,ol,Hg,Rg,Vg,dn,Gg,cn,Kg,hn,uc,po,mn,nl,Ys,Jg,sl,Xg,_c,Ke,Zs,Yg,fo,Zg,rl,eu,tu,al,ou,nu,su,er,ru,_a,au,iu,lu,tr,du,or,cu,hu,mu,it,nr,pu,go,fu,wa,gu,uu,il,_u,wu,ku,pn,bu,fn,wc,uo,gn,ll,sr,vu,dl,Tu,kc,Ee,rr,yu,cl,$u,Lu,ar,xu,ka,Fu,Mu,Eu,ir,zu,lr,qu,Cu,Ou,un,ju,_o,Pu,ba,Nu,Au,dr,Iu,Su,Du,cr,Wu,hl,Qu,Uu,Bu,kt,hr,Hu,wo,Ru,va,Vu,Gu,ml,Ku,Ju,Xu,_n,bc,ko,wn,pl,mr,Yu,fl,Zu,vc,Ie,pr,e_,fr,t_,gl,o_,n_,s_,gr,r_,Ta,a_,i_,l_,ur,d_,_r,c_,h_,m_,kn,p_,Ye,wr,f_,bo,g_,ya,u_,__,ul,w_,k_,b_,bn,v_,vn,T_,Tn,Tc,vo,yn,_l,kr,y_,wl,$_,yc,Se,br,L_,To,x_,kl,F_,M_,bl,E_,z_,q_,vr,C_,$a,O_,j_,P_,Tr,N_,yr,A_,I_,S_,$n,D_,Ze,$r,W_,yo,Q_,La,U_,B_,vl,H_,R_,V_,Ln,G_,xn,K_,Fn,$c,$o,Mn,Tl,Lr,J_,yl,X_,Lc,De,xr,Y_,$l,Z_,ew,Fr,tw,xa,ow,nw,sw,Mr,rw,Er,aw,iw,lw,En,dw,et,zr,cw,Lo,hw,Fa,mw,pw,Ll,fw,gw,uw,zn,_w,qn,ww,Cn,xc,xo,On,xl,qr,kw,Fl,bw,Fc,We,Cr,vw,Ml,Tw,yw,Or,$w,Ma,Lw,xw,Fw,jr,Mw,Pr,Ew,zw,qw,jn,Cw,tt,Nr,Ow,Fo,jw,Ea,Pw,Nw,El,Aw,Iw,Sw,Pn,Dw,Nn,Ww,An,Mc,Mo,In,zl,Ar,Qw,ql,Uw,Ec,Qe,Ir,Bw,Cl,Hw,Rw,Sr,Vw,za,Gw,Kw,Jw,Dr,Xw,Wr,Yw,Zw,ek,Sn,tk,lt,Qr,ok,Eo,nk,qa,sk,rk,Ol,ak,ik,lk,Dn,dk,Wn,zc;return l=new Ce({}),ee=new Ce({}),oe=new Ce({}),Gn=new Ce({}),Kn=new qe({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),Jn=new Ce({}),Xn=new Q({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/configuration_longformer.py#L33"}}),Do=new Oe({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[mT]},$$scope:{ctx:M}}}),Zn=new Ce({}),es=new Q({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/tokenization_longformer.py#L51"}}),ts=new Ce({}),os=new Q({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/tokenization_longformer_fast.py#L59"}}),ss=new Ce({}),rs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L61"}}),as=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L104"}}),is=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L152"}}),ls=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L198"}}),ds=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L247"}}),cs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L293"}}),hs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L341"}}),ms=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),ps=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),fs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),gs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),us=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),_s=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),ws=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),ks=new Ce({}),bs=new Q({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1497"}}),xs=new Q({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1608",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Ae({props:{$$slots:{default:[pT]},$$scope:{ctx:M}}}),Go=new Oe({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[fT]},$$scope:{ctx:M}}}),Fs=new Ce({}),Ms=new Q({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1732"}}),Os=new Q({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1751",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new Ae({props:{$$slots:{default:[gT]},$$scope:{ctx:M}}}),Xo=new Oe({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[uT]},$$scope:{ctx:M}}}),js=new Ce({}),Ps=new Q({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1837"}}),Ss=new Q({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1852",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new Ae({props:{$$slots:{default:[_T]},$$scope:{ctx:M}}}),en=new Oe({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[wT]},$$scope:{ctx:M}}}),tn=new Oe({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[kT]},$$scope:{ctx:M}}}),on=new Oe({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[bT]},$$scope:{ctx:M}}}),nn=new Oe({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[vT]},$$scope:{ctx:M}}}),Ds=new Ce({}),Ws=new Q({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L2188"}}),Hs=new Q({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L2199",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new Ae({props:{$$slots:{default:[TT]},$$scope:{ctx:M}}}),an=new Oe({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[yT]},$$scope:{ctx:M}}}),Rs=new Ce({}),Vs=new Q({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L2103"}}),Xs=new Q({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L2118",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new Ae({props:{$$slots:{default:[$T]},$$scope:{ctx:M}}}),cn=new Oe({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[LT]},$$scope:{ctx:M}}}),hn=new Oe({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[xT]},$$scope:{ctx:M}}}),Ys=new Ce({}),Zs=new Q({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1964"}}),nr=new Q({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_longformer.py#L1978",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new Ae({props:{$$slots:{default:[FT]},$$scope:{ctx:M}}}),fn=new Oe({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[MT]},$$scope:{ctx:M}}}),sr=new Ce({}),rr=new Q({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L1989"}}),un=new Ae({props:{$$slots:{default:[ET]},$$scope:{ctx:M}}}),hr=new Q({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2011"}}),_n=new Ae({props:{$$slots:{default:[zT]},$$scope:{ctx:M}}}),mr=new Ce({}),pr=new Q({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2063"}}),kn=new Ae({props:{$$slots:{default:[qT]},$$scope:{ctx:M}}}),wr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2080",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new Ae({props:{$$slots:{default:[CT]},$$scope:{ctx:M}}}),vn=new Oe({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[OT]},$$scope:{ctx:M}}}),Tn=new Oe({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[jT]},$$scope:{ctx:M}}}),kr=new Ce({}),br=new Q({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2159"}}),$n=new Ae({props:{$$slots:{default:[PT]},$$scope:{ctx:M}}}),$r=new Q({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2174",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new Ae({props:{$$slots:{default:[NT]},$$scope:{ctx:M}}}),xn=new Oe({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[AT]},$$scope:{ctx:M}}}),Fn=new Oe({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[IT]},$$scope:{ctx:M}}}),Lr=new Ce({}),xr=new Q({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2309"}}),En=new Ae({props:{$$slots:{default:[ST]},$$scope:{ctx:M}}}),zr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2321",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zn=new Ae({props:{$$slots:{default:[DT]},$$scope:{ctx:M}}}),qn=new Oe({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[WT]},$$scope:{ctx:M}}}),Cn=new Oe({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[QT]},$$scope:{ctx:M}}}),qr=new Ce({}),Cr=new Q({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2546"}}),jn=new Ae({props:{$$slots:{default:[UT]},$$scope:{ctx:M}}}),Nr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2561",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Ae({props:{$$slots:{default:[BT]},$$scope:{ctx:M}}}),Nn=new Oe({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[HT]},$$scope:{ctx:M}}}),An=new Oe({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[RT]},$$scope:{ctx:M}}}),Ar=new Ce({}),Ir=new Q({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2409"}}),Sn=new Ae({props:{$$slots:{default:[VT]},$$scope:{ctx:M}}}),Qr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/longformer/modeling_tf_longformer.py#L2429",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dn=new Ae({props:{$$slots:{default:[GT]},$$scope:{ctx:M}}}),Wn=new Oe({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[KT]},$$scope:{ctx:M}}}),{c(){d=r("meta"),k=c(),m=r("h1"),p=r("a"),b=r("span"),v(l.$$.fragment),u=c(),E=r("span"),me=n("Longformer"),J=c(),z=r("h2"),Z=r("a"),S=r("span"),v(ee.$$.fragment),pe=c(),D=r("span"),fe=n("Overview"),le=c(),G=r("p"),P=n("The Longformer model was presented in "),te=r("a"),X=n("Longformer: The Long-Document Transformer"),q=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),O=c(),ne=r("p"),B=n("The abstract from the paper is the following:"),de=c(),se=r("p"),W=r("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=c(),C=r("p"),ue=n("Tips:"),U=c(),re=r("ul"),K=r("li"),H=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=r("code"),_e=n("token_type_ids"),N=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r("code"),R=n("tokenizer.sep_token"),we=n(` (or
`),w=r("code"),F=n("</s>"),Y=n(")."),Te=c(),he=r("p"),A=n("This model was contributed by "),be=r("a"),Le=n("beltagy"),xe=n(". The Authors\u2019 code can be found "),j=r("a"),V=n("here"),Fe=n("."),ye=c(),I=r("h2"),ke=r("a"),ve=r("span"),v(oe.$$.fragment),Me=c(),ei=r("span"),Sh=n("Longformer Self Attention"),hd=c(),$e=r("p"),Dh=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),md=new Oo,pd=n(` previous tokens and
`),fd=new Oo,gd=n(" succeding tokens with "),ud=new Oo,_d=n(` being the window length as defined in
`),ti=r("code"),Wh=n("config.attention_window"),Qh=n(". Note that "),oi=r("code"),Uh=n("config.attention_window"),Bh=n(" can be of type "),ni=r("code"),Hh=n("List"),Rh=n(` to define a
different `),wd=new Oo,kd=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),si=r("code"),Vh=n("BertSelfAttention"),Gh=n("."),bd=c(),_t=r("p"),Kh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),vd=new Oo,Td=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ri=r("em"),Jh=n("symmetric"),Xh=n("."),yd=c(),wt=r("p"),Yh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ai=r("code"),Zh=n("global_attention_mask"),em=n(` at run-time appropriately. All Longformer models employ the following logic for
`),ii=r("code"),tm=n("global_attention_mask"),om=n(":"),$d=c(),Po=r("ul"),li=r("li"),nm=n("0: the token attends \u201Clocally\u201D,"),sm=c(),di=r("li"),rm=n("1: the token attends \u201Cglobally\u201D."),Ld=c(),No=r("p"),am=n("For more information please also refer to "),Gr=r("a"),im=n("forward()"),lm=n(" method."),xd=c(),Je=r("p"),dm=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Fd=new Oo,Md=n(` to
`),Ed=new Oo,zd=n(", with "),qd=new Oo,Cd=n(" being the sequence length and "),Od=new Oo,jd=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Pd=c(),Ao=r("p"),cm=n("For more information, please refer to the official "),Vn=r("a"),hm=n("paper"),mm=n("."),Nd=c(),Ct=r("h2"),Io=r("a"),ci=r("span"),v(Gn.$$.fragment),pm=c(),hi=r("span"),fm=n("Training"),Ad=c(),Ot=r("p"),Kr=r("a"),gm=n("LongformerForMaskedLM"),um=n(" is trained the exact same way "),Jr=r("a"),_m=n("RobertaForMaskedLM"),wm=n(` is
trained and should be used as follows:`),Id=c(),v(Kn.$$.fragment),Sd=c(),jt=r("h2"),So=r("a"),mi=r("span"),v(Jn.$$.fragment),km=c(),pi=r("span"),bm=n("LongformerConfig"),Dd=c(),Be=r("div"),v(Xn.$$.fragment),vm=c(),Pt=r("p"),Tm=n("This is the configuration class to store the configuration of a "),Xr=r("a"),ym=n("LongformerModel"),$m=n(" or a "),Yr=r("a"),Lm=n("TFLongformerModel"),xm=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Fm=c(),Nt=r("p"),Mm=n("This is the configuration class to store the configuration of a "),Zr=r("a"),Em=n("LongformerModel"),zm=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Yn=r("a"),qm=n("roberta-base"),Cm=n(" architecture with a sequence length 4,096."),Om=c(),At=r("p"),jm=n("The "),ea=r("a"),Pm=n("LongformerConfig"),Nm=n(" class directly inherits "),ta=r("a"),Am=n("RobertaConfig"),Im=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Sm=c(),v(Do.$$.fragment),Wd=c(),It=r("h2"),Wo=r("a"),fi=r("span"),v(Zn.$$.fragment),Dm=c(),gi=r("span"),Wm=n("LongformerTokenizer"),Qd=c(),ft=r("div"),v(es.$$.fragment),Qm=c(),ui=r("p"),Um=n("Construct a Longformer tokenizer."),Bm=c(),Qo=r("p"),oa=r("a"),Hm=n("LongformerTokenizer"),Rm=n(" is identical to "),na=r("a"),Vm=n("RobertaTokenizer"),Gm=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Ud=c(),St=r("h2"),Uo=r("a"),_i=r("span"),v(ts.$$.fragment),Km=c(),wi=r("span"),Jm=n("LongformerTokenizerFast"),Bd=c(),gt=r("div"),v(os.$$.fragment),Xm=c(),ns=r("p"),Ym=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),ki=r("em"),Zm=n("tokenizers"),ep=n(" library)."),tp=c(),Bo=r("p"),sa=r("a"),op=n("LongformerTokenizerFast"),np=n(" is identical to "),ra=r("a"),sp=n("RobertaTokenizerFast"),rp=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Hd=c(),Dt=r("h2"),Ho=r("a"),bi=r("span"),v(ss.$$.fragment),ap=c(),vi=r("span"),ip=n("Longformer specific outputs"),Rd=c(),Wt=r("div"),v(rs.$$.fragment),lp=c(),Ti=r("p"),dp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Vd=c(),Qt=r("div"),v(as.$$.fragment),cp=c(),yi=r("p"),hp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Gd=c(),Ut=r("div"),v(is.$$.fragment),mp=c(),$i=r("p"),pp=n("Base class for masked language models outputs."),Kd=c(),Bt=r("div"),v(ls.$$.fragment),fp=c(),Li=r("p"),gp=n("Base class for outputs of question answering Longformer models."),Jd=c(),Ht=r("div"),v(ds.$$.fragment),up=c(),xi=r("p"),_p=n("Base class for outputs of sentence classification models."),Xd=c(),Rt=r("div"),v(cs.$$.fragment),wp=c(),Fi=r("p"),kp=n("Base class for outputs of multiple choice Longformer models."),Yd=c(),Vt=r("div"),v(hs.$$.fragment),bp=c(),Mi=r("p"),vp=n("Base class for outputs of token classification models."),Zd=c(),Gt=r("div"),v(ms.$$.fragment),Tp=c(),Ei=r("p"),yp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),ec=c(),Kt=r("div"),v(ps.$$.fragment),$p=c(),zi=r("p"),Lp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),tc=c(),Jt=r("div"),v(fs.$$.fragment),xp=c(),qi=r("p"),Fp=n("Base class for masked language models outputs."),oc=c(),Xt=r("div"),v(gs.$$.fragment),Mp=c(),Ci=r("p"),Ep=n("Base class for outputs of question answering Longformer models."),nc=c(),Yt=r("div"),v(us.$$.fragment),zp=c(),Oi=r("p"),qp=n("Base class for outputs of sentence classification models."),sc=c(),Zt=r("div"),v(_s.$$.fragment),Cp=c(),ji=r("p"),Op=n("Base class for outputs of multiple choice models."),rc=c(),eo=r("div"),v(ws.$$.fragment),jp=c(),Pi=r("p"),Pp=n("Base class for outputs of token classification models."),ac=c(),to=r("h2"),Ro=r("a"),Ni=r("span"),v(ks.$$.fragment),Np=c(),Ai=r("span"),Ap=n("LongformerModel"),ic=c(),Pe=r("div"),v(bs.$$.fragment),Ip=c(),Ii=r("p"),Sp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Dp=c(),vs=r("p"),Wp=n("This model inherits from "),aa=r("a"),Qp=n("PreTrainedModel"),Up=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp=c(),Ts=r("p"),Hp=n("This model is also a PyTorch "),ys=r("a"),Rp=n("torch.nn.Module"),Vp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gp=c(),oo=r("p"),Kp=n("This class copied code from "),ia=r("a"),Jp=n("RobertaModel"),Xp=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),$s=r("a"),Yp=n(`Longformer:
the Long-Document Transformer`),Zp=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),ef=c(),Ls=r("p"),tf=n("The self-attention module "),Si=r("code"),of=n("LongformerSelfAttention"),nf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),sf=c(),st=r("div"),v(xs.$$.fragment),rf=c(),no=r("p"),af=n("The "),la=r("a"),lf=n("LongformerModel"),df=n(" forward method, overrides the "),Di=r("code"),cf=n("__call__"),hf=n(" special method."),mf=c(),v(Vo.$$.fragment),pf=c(),v(Go.$$.fragment),lc=c(),so=r("h2"),Ko=r("a"),Wi=r("span"),v(Fs.$$.fragment),ff=c(),Qi=r("span"),gf=n("LongformerForMaskedLM"),dc=c(),He=r("div"),v(Ms.$$.fragment),uf=c(),Es=r("p"),_f=n("Longformer Model with a "),Ui=r("code"),wf=n("language modeling"),kf=n(" head on top."),bf=c(),zs=r("p"),vf=n("This model inherits from "),da=r("a"),Tf=n("PreTrainedModel"),yf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f=c(),qs=r("p"),Lf=n("This model is also a PyTorch "),Cs=r("a"),xf=n("torch.nn.Module"),Ff=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mf=c(),rt=r("div"),v(Os.$$.fragment),Ef=c(),ro=r("p"),zf=n("The "),ca=r("a"),qf=n("LongformerForMaskedLM"),Cf=n(" forward method, overrides the "),Bi=r("code"),Of=n("__call__"),jf=n(" special method."),Pf=c(),v(Jo.$$.fragment),Nf=c(),v(Xo.$$.fragment),cc=c(),ao=r("h2"),Yo=r("a"),Hi=r("span"),v(js.$$.fragment),Af=c(),Ri=r("span"),If=n("LongformerForSequenceClassification"),hc=c(),Re=r("div"),v(Ps.$$.fragment),Sf=c(),Vi=r("p"),Df=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wf=c(),Ns=r("p"),Qf=n("This model inherits from "),ha=r("a"),Uf=n("PreTrainedModel"),Bf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf=c(),As=r("p"),Rf=n("This model is also a PyTorch "),Is=r("a"),Vf=n("torch.nn.Module"),Gf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kf=c(),Ne=r("div"),v(Ss.$$.fragment),Jf=c(),io=r("p"),Xf=n("The "),ma=r("a"),Yf=n("LongformerForSequenceClassification"),Zf=n(" forward method, overrides the "),Gi=r("code"),eg=n("__call__"),tg=n(" special method."),og=c(),v(Zo.$$.fragment),ng=c(),v(en.$$.fragment),sg=c(),v(tn.$$.fragment),rg=c(),v(on.$$.fragment),ag=c(),v(nn.$$.fragment),mc=c(),lo=r("h2"),sn=r("a"),Ki=r("span"),v(Ds.$$.fragment),ig=c(),Ji=r("span"),lg=n("LongformerForMultipleChoice"),pc=c(),Ve=r("div"),v(Ws.$$.fragment),dg=c(),Xi=r("p"),cg=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),hg=c(),Qs=r("p"),mg=n("This model inherits from "),pa=r("a"),pg=n("PreTrainedModel"),fg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gg=c(),Us=r("p"),ug=n("This model is also a PyTorch "),Bs=r("a"),_g=n("torch.nn.Module"),wg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kg=c(),at=r("div"),v(Hs.$$.fragment),bg=c(),co=r("p"),vg=n("The "),fa=r("a"),Tg=n("LongformerForMultipleChoice"),yg=n(" forward method, overrides the "),Yi=r("code"),$g=n("__call__"),Lg=n(" special method."),xg=c(),v(rn.$$.fragment),Fg=c(),v(an.$$.fragment),fc=c(),ho=r("h2"),ln=r("a"),Zi=r("span"),v(Rs.$$.fragment),Mg=c(),el=r("span"),Eg=n("LongformerForTokenClassification"),gc=c(),Ge=r("div"),v(Vs.$$.fragment),zg=c(),tl=r("p"),qg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Cg=c(),Gs=r("p"),Og=n("This model inherits from "),ga=r("a"),jg=n("PreTrainedModel"),Pg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=c(),Ks=r("p"),Ag=n("This model is also a PyTorch "),Js=r("a"),Ig=n("torch.nn.Module"),Sg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=c(),Xe=r("div"),v(Xs.$$.fragment),Wg=c(),mo=r("p"),Qg=n("The "),ua=r("a"),Ug=n("LongformerForTokenClassification"),Bg=n(" forward method, overrides the "),ol=r("code"),Hg=n("__call__"),Rg=n(" special method."),Vg=c(),v(dn.$$.fragment),Gg=c(),v(cn.$$.fragment),Kg=c(),v(hn.$$.fragment),uc=c(),po=r("h2"),mn=r("a"),nl=r("span"),v(Ys.$$.fragment),Jg=c(),sl=r("span"),Xg=n("LongformerForQuestionAnswering"),_c=c(),Ke=r("div"),v(Zs.$$.fragment),Yg=c(),fo=r("p"),Zg=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),rl=r("code"),eu=n("span start logits"),tu=n(" and "),al=r("code"),ou=n("span end logits"),nu=n(")."),su=c(),er=r("p"),ru=n("This model inherits from "),_a=r("a"),au=n("PreTrainedModel"),iu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu=c(),tr=r("p"),du=n("This model is also a PyTorch "),or=r("a"),cu=n("torch.nn.Module"),hu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mu=c(),it=r("div"),v(nr.$$.fragment),pu=c(),go=r("p"),fu=n("The "),wa=r("a"),gu=n("LongformerForQuestionAnswering"),uu=n(" forward method, overrides the "),il=r("code"),_u=n("__call__"),wu=n(" special method."),ku=c(),v(pn.$$.fragment),bu=c(),v(fn.$$.fragment),wc=c(),uo=r("h2"),gn=r("a"),ll=r("span"),v(sr.$$.fragment),vu=c(),dl=r("span"),Tu=n("TFLongformerModel"),kc=c(),Ee=r("div"),v(rr.$$.fragment),yu=c(),cl=r("p"),$u=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Lu=c(),ar=r("p"),xu=n("This model inherits from "),ka=r("a"),Fu=n("TFPreTrainedModel"),Mu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu=c(),ir=r("p"),zu=n("This model is also a "),lr=r("a"),qu=n("tf.keras.Model"),Cu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ou=c(),v(un.$$.fragment),ju=c(),_o=r("p"),Pu=n("This class copies code from "),ba=r("a"),Nu=n("TFRobertaModel"),Au=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),dr=r("a"),Iu=n("Longformer: the Long-Document Transformer"),Su=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Du=c(),cr=r("p"),Wu=n("The self-attention module "),hl=r("code"),Qu=n("TFLongformerSelfAttention"),Uu=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Bu=c(),kt=r("div"),v(hr.$$.fragment),Hu=c(),wo=r("p"),Ru=n("The "),va=r("a"),Vu=n("TFLongformerModel"),Gu=n(" forward method, overrides the "),ml=r("code"),Ku=n("__call__"),Ju=n(" special method."),Xu=c(),v(_n.$$.fragment),bc=c(),ko=r("h2"),wn=r("a"),pl=r("span"),v(mr.$$.fragment),Yu=c(),fl=r("span"),Zu=n("TFLongformerForMaskedLM"),vc=c(),Ie=r("div"),v(pr.$$.fragment),e_=c(),fr=r("p"),t_=n("Longformer Model with a "),gl=r("code"),o_=n("language modeling"),n_=n(" head on top."),s_=c(),gr=r("p"),r_=n("This model inherits from "),Ta=r("a"),a_=n("TFPreTrainedModel"),i_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l_=c(),ur=r("p"),d_=n("This model is also a "),_r=r("a"),c_=n("tf.keras.Model"),h_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),m_=c(),v(kn.$$.fragment),p_=c(),Ye=r("div"),v(wr.$$.fragment),f_=c(),bo=r("p"),g_=n("The "),ya=r("a"),u_=n("TFLongformerForMaskedLM"),__=n(" forward method, overrides the "),ul=r("code"),w_=n("__call__"),k_=n(" special method."),b_=c(),v(bn.$$.fragment),v_=c(),v(vn.$$.fragment),T_=c(),v(Tn.$$.fragment),Tc=c(),vo=r("h2"),yn=r("a"),_l=r("span"),v(kr.$$.fragment),y_=c(),wl=r("span"),$_=n("TFLongformerForQuestionAnswering"),yc=c(),Se=r("div"),v(br.$$.fragment),L_=c(),To=r("p"),x_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),kl=r("code"),F_=n("span start logits"),M_=n(" and "),bl=r("code"),E_=n("span end logits"),z_=n(")."),q_=c(),vr=r("p"),C_=n("This model inherits from "),$a=r("a"),O_=n("TFPreTrainedModel"),j_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),P_=c(),Tr=r("p"),N_=n("This model is also a "),yr=r("a"),A_=n("tf.keras.Model"),I_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),S_=c(),v($n.$$.fragment),D_=c(),Ze=r("div"),v($r.$$.fragment),W_=c(),yo=r("p"),Q_=n("The "),La=r("a"),U_=n("TFLongformerForQuestionAnswering"),B_=n(" forward method, overrides the "),vl=r("code"),H_=n("__call__"),R_=n(" special method."),V_=c(),v(Ln.$$.fragment),G_=c(),v(xn.$$.fragment),K_=c(),v(Fn.$$.fragment),$c=c(),$o=r("h2"),Mn=r("a"),Tl=r("span"),v(Lr.$$.fragment),J_=c(),yl=r("span"),X_=n("TFLongformerForSequenceClassification"),Lc=c(),De=r("div"),v(xr.$$.fragment),Y_=c(),$l=r("p"),Z_=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ew=c(),Fr=r("p"),tw=n("This model inherits from "),xa=r("a"),ow=n("TFPreTrainedModel"),nw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sw=c(),Mr=r("p"),rw=n("This model is also a "),Er=r("a"),aw=n("tf.keras.Model"),iw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lw=c(),v(En.$$.fragment),dw=c(),et=r("div"),v(zr.$$.fragment),cw=c(),Lo=r("p"),hw=n("The "),Fa=r("a"),mw=n("TFLongformerForSequenceClassification"),pw=n(" forward method, overrides the "),Ll=r("code"),fw=n("__call__"),gw=n(" special method."),uw=c(),v(zn.$$.fragment),_w=c(),v(qn.$$.fragment),ww=c(),v(Cn.$$.fragment),xc=c(),xo=r("h2"),On=r("a"),xl=r("span"),v(qr.$$.fragment),kw=c(),Fl=r("span"),bw=n("TFLongformerForTokenClassification"),Fc=c(),We=r("div"),v(Cr.$$.fragment),vw=c(),Ml=r("p"),Tw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),yw=c(),Or=r("p"),$w=n("This model inherits from "),Ma=r("a"),Lw=n("TFPreTrainedModel"),xw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fw=c(),jr=r("p"),Mw=n("This model is also a "),Pr=r("a"),Ew=n("tf.keras.Model"),zw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qw=c(),v(jn.$$.fragment),Cw=c(),tt=r("div"),v(Nr.$$.fragment),Ow=c(),Fo=r("p"),jw=n("The "),Ea=r("a"),Pw=n("TFLongformerForTokenClassification"),Nw=n(" forward method, overrides the "),El=r("code"),Aw=n("__call__"),Iw=n(" special method."),Sw=c(),v(Pn.$$.fragment),Dw=c(),v(Nn.$$.fragment),Ww=c(),v(An.$$.fragment),Mc=c(),Mo=r("h2"),In=r("a"),zl=r("span"),v(Ar.$$.fragment),Qw=c(),ql=r("span"),Uw=n("TFLongformerForMultipleChoice"),Ec=c(),Qe=r("div"),v(Ir.$$.fragment),Bw=c(),Cl=r("p"),Hw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Rw=c(),Sr=r("p"),Vw=n("This model inherits from "),za=r("a"),Gw=n("TFPreTrainedModel"),Kw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jw=c(),Dr=r("p"),Xw=n("This model is also a "),Wr=r("a"),Yw=n("tf.keras.Model"),Zw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ek=c(),v(Sn.$$.fragment),tk=c(),lt=r("div"),v(Qr.$$.fragment),ok=c(),Eo=r("p"),nk=n("The "),qa=r("a"),sk=n("TFLongformerForMultipleChoice"),rk=n(" forward method, overrides the "),Ol=r("code"),ak=n("__call__"),ik=n(" special method."),lk=c(),v(Dn.$$.fragment),dk=c(),v(Wn.$$.fragment),this.h()},l(o){const g=cT('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(t),k=h(o),m=a(o,"H1",{class:!0});var Ur=i(m);p=a(Ur,"A",{id:!0,class:!0,href:!0});var jl=i(p);b=a(jl,"SPAN",{});var Pl=i(b);T(l.$$.fragment,Pl),Pl.forEach(t),jl.forEach(t),u=h(Ur),E=a(Ur,"SPAN",{});var Nl=i(E);me=s(Nl,"Longformer"),Nl.forEach(t),Ur.forEach(t),J=h(o),z=a(o,"H2",{class:!0});var Br=i(z);Z=a(Br,"A",{id:!0,class:!0,href:!0});var Al=i(Z);S=a(Al,"SPAN",{});var Il=i(S);T(ee.$$.fragment,Il),Il.forEach(t),Al.forEach(t),pe=h(Br),D=a(Br,"SPAN",{});var Sl=i(D);fe=s(Sl,"Overview"),Sl.forEach(t),Br.forEach(t),le=h(o),G=a(o,"P",{});var Hr=i(G);P=s(Hr,"The Longformer model was presented in "),te=a(Hr,"A",{href:!0,rel:!0});var Dl=i(te);X=s(Dl,"Longformer: The Long-Document Transformer"),Dl.forEach(t),q=s(Hr," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Hr.forEach(t),O=h(o),ne=a(o,"P",{});var Wl=i(ne);B=s(Wl,"The abstract from the paper is the following:"),Wl.forEach(t),de=h(o),se=a(o,"P",{});var Ql=i(se);W=a(Ql,"EM",{});var Ul=i(W);ge=s(Ul,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Ul.forEach(t),Ql.forEach(t),ce=h(o),C=a(o,"P",{});var Bl=i(C);ue=s(Bl,"Tips:"),Bl.forEach(t),U=h(o),re=a(o,"UL",{});var Hl=i(re);K=a(Hl,"LI",{});var ut=i(K);H=s(ut,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=a(ut,"CODE",{});var Rl=i(ae);_e=s(Rl,"token_type_ids"),Rl.forEach(t),N=s(ut,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a(ut,"CODE",{});var Vl=i(ie);R=s(Vl,"tokenizer.sep_token"),Vl.forEach(t),we=s(ut,` (or
`),w=a(ut,"CODE",{});var Gl=i(w);F=s(Gl,"</s>"),Gl.forEach(t),Y=s(ut,")."),ut.forEach(t),Hl.forEach(t),Te=h(o),he=a(o,"P",{});var zo=i(he);A=s(zo,"This model was contributed by "),be=a(zo,"A",{href:!0,rel:!0});var Kl=i(be);Le=s(Kl,"beltagy"),Kl.forEach(t),xe=s(zo,". The Authors\u2019 code can be found "),j=a(zo,"A",{href:!0,rel:!0});var Jl=i(j);V=s(Jl,"here"),Jl.forEach(t),Fe=s(zo,"."),zo.forEach(t),ye=h(o),I=a(o,"H2",{class:!0});var Rr=i(I);ke=a(Rr,"A",{id:!0,class:!0,href:!0});var Xl=i(ke);ve=a(Xl,"SPAN",{});var Yl=i(ve);T(oe.$$.fragment,Yl),Yl.forEach(t),Xl.forEach(t),Me=h(Rr),ei=a(Rr,"SPAN",{});var Zl=i(ei);Sh=s(Zl,"Longformer Self Attention"),Zl.forEach(t),Rr.forEach(t),hd=h(o),$e=a(o,"P",{});var ze=i($e);Dh=s(ze,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),md=jo(ze),pd=s(ze,` previous tokens and
`),fd=jo(ze),gd=s(ze," succeding tokens with "),ud=jo(ze),_d=s(ze,` being the window length as defined in
`),ti=a(ze,"CODE",{});var ed=i(ti);Wh=s(ed,"config.attention_window"),ed.forEach(t),Qh=s(ze,". Note that "),oi=a(ze,"CODE",{});var td=i(oi);Uh=s(td,"config.attention_window"),td.forEach(t),Bh=s(ze," can be of type "),ni=a(ze,"CODE",{});var od=i(ni);Hh=s(od,"List"),od.forEach(t),Rh=s(ze,` to define a
different `),wd=jo(ze),kd=s(ze,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),si=a(ze,"CODE",{});var nd=i(si);Vh=s(nd,"BertSelfAttention"),nd.forEach(t),Gh=s(ze,"."),ze.forEach(t),bd=h(o),_t=a(o,"P",{});var qo=i(_t);Kh=s(qo,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),vd=jo(qo),Td=s(qo,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ri=a(qo,"EM",{});var sd=i(ri);Jh=s(sd,"symmetric"),sd.forEach(t),Xh=s(qo,"."),qo.forEach(t),yd=h(o),wt=a(o,"P",{});var Co=i(wt);Yh=s(Co,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ai=a(Co,"CODE",{});var rd=i(ai);Zh=s(rd,"global_attention_mask"),rd.forEach(t),em=s(Co,` at run-time appropriately. All Longformer models employ the following logic for
`),ii=a(Co,"CODE",{});var ad=i(ii);tm=s(ad,"global_attention_mask"),ad.forEach(t),om=s(Co,":"),Co.forEach(t),$d=h(o),Po=a(o,"UL",{});var Vr=i(Po);li=a(Vr,"LI",{});var id=i(li);nm=s(id,"0: the token attends \u201Clocally\u201D,"),id.forEach(t),sm=h(Vr),di=a(Vr,"LI",{});var ck=i(di);rm=s(ck,"1: the token attends \u201Cglobally\u201D."),ck.forEach(t),Vr.forEach(t),Ld=h(o),No=a(o,"P",{});var qc=i(No);am=s(qc,"For more information please also refer to "),Gr=a(qc,"A",{href:!0});var hk=i(Gr);im=s(hk,"forward()"),hk.forEach(t),lm=s(qc," method."),qc.forEach(t),xd=h(o),Je=a(o,"P",{});var bt=i(Je);dm=s(bt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Fd=jo(bt),Md=s(bt,` to
`),Ed=jo(bt),zd=s(bt,", with "),qd=jo(bt),Cd=s(bt," being the sequence length and "),Od=jo(bt),jd=s(bt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),bt.forEach(t),Pd=h(o),Ao=a(o,"P",{});var Cc=i(Ao);cm=s(Cc,"For more information, please refer to the official "),Vn=a(Cc,"A",{href:!0,rel:!0});var mk=i(Vn);hm=s(mk,"paper"),mk.forEach(t),mm=s(Cc,"."),Cc.forEach(t),Nd=h(o),Ct=a(o,"H2",{class:!0});var Oc=i(Ct);Io=a(Oc,"A",{id:!0,class:!0,href:!0});var pk=i(Io);ci=a(pk,"SPAN",{});var fk=i(ci);T(Gn.$$.fragment,fk),fk.forEach(t),pk.forEach(t),pm=h(Oc),hi=a(Oc,"SPAN",{});var gk=i(hi);fm=s(gk,"Training"),gk.forEach(t),Oc.forEach(t),Ad=h(o),Ot=a(o,"P",{});var ld=i(Ot);Kr=a(ld,"A",{href:!0});var uk=i(Kr);gm=s(uk,"LongformerForMaskedLM"),uk.forEach(t),um=s(ld," is trained the exact same way "),Jr=a(ld,"A",{href:!0});var _k=i(Jr);_m=s(_k,"RobertaForMaskedLM"),_k.forEach(t),wm=s(ld,` is
trained and should be used as follows:`),ld.forEach(t),Id=h(o),T(Kn.$$.fragment,o),Sd=h(o),jt=a(o,"H2",{class:!0});var jc=i(jt);So=a(jc,"A",{id:!0,class:!0,href:!0});var wk=i(So);mi=a(wk,"SPAN",{});var kk=i(mi);T(Jn.$$.fragment,kk),kk.forEach(t),wk.forEach(t),km=h(jc),pi=a(jc,"SPAN",{});var bk=i(pi);bm=s(bk,"LongformerConfig"),bk.forEach(t),jc.forEach(t),Dd=h(o),Be=a(o,"DIV",{class:!0});var vt=i(Be);T(Xn.$$.fragment,vt),vm=h(vt),Pt=a(vt,"P",{});var Ca=i(Pt);Tm=s(Ca,"This is the configuration class to store the configuration of a "),Xr=a(Ca,"A",{href:!0});var vk=i(Xr);ym=s(vk,"LongformerModel"),vk.forEach(t),$m=s(Ca," or a "),Yr=a(Ca,"A",{href:!0});var Tk=i(Yr);Lm=s(Tk,"TFLongformerModel"),Tk.forEach(t),xm=s(Ca,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Ca.forEach(t),Fm=h(vt),Nt=a(vt,"P",{});var Oa=i(Nt);Mm=s(Oa,"This is the configuration class to store the configuration of a "),Zr=a(Oa,"A",{href:!0});var yk=i(Zr);Em=s(yk,"LongformerModel"),yk.forEach(t),zm=s(Oa,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Yn=a(Oa,"A",{href:!0,rel:!0});var $k=i(Yn);qm=s($k,"roberta-base"),$k.forEach(t),Cm=s(Oa," architecture with a sequence length 4,096."),Oa.forEach(t),Om=h(vt),At=a(vt,"P",{});var ja=i(At);jm=s(ja,"The "),ea=a(ja,"A",{href:!0});var Lk=i(ea);Pm=s(Lk,"LongformerConfig"),Lk.forEach(t),Nm=s(ja," class directly inherits "),ta=a(ja,"A",{href:!0});var xk=i(ta);Am=s(xk,"RobertaConfig"),xk.forEach(t),Im=s(ja,`. It reuses the same defaults. Please check the
parent class for more information.`),ja.forEach(t),Sm=h(vt),T(Do.$$.fragment,vt),vt.forEach(t),Wd=h(o),It=a(o,"H2",{class:!0});var Pc=i(It);Wo=a(Pc,"A",{id:!0,class:!0,href:!0});var Fk=i(Wo);fi=a(Fk,"SPAN",{});var Mk=i(fi);T(Zn.$$.fragment,Mk),Mk.forEach(t),Fk.forEach(t),Dm=h(Pc),gi=a(Pc,"SPAN",{});var Ek=i(gi);Wm=s(Ek,"LongformerTokenizer"),Ek.forEach(t),Pc.forEach(t),Qd=h(o),ft=a(o,"DIV",{class:!0});var Pa=i(ft);T(es.$$.fragment,Pa),Qm=h(Pa),ui=a(Pa,"P",{});var zk=i(ui);Um=s(zk,"Construct a Longformer tokenizer."),zk.forEach(t),Bm=h(Pa),Qo=a(Pa,"P",{});var dd=i(Qo);oa=a(dd,"A",{href:!0});var qk=i(oa);Hm=s(qk,"LongformerTokenizer"),qk.forEach(t),Rm=s(dd," is identical to "),na=a(dd,"A",{href:!0});var Ck=i(na);Vm=s(Ck,"RobertaTokenizer"),Ck.forEach(t),Gm=s(dd,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),dd.forEach(t),Pa.forEach(t),Ud=h(o),St=a(o,"H2",{class:!0});var Nc=i(St);Uo=a(Nc,"A",{id:!0,class:!0,href:!0});var Ok=i(Uo);_i=a(Ok,"SPAN",{});var jk=i(_i);T(ts.$$.fragment,jk),jk.forEach(t),Ok.forEach(t),Km=h(Nc),wi=a(Nc,"SPAN",{});var Pk=i(wi);Jm=s(Pk,"LongformerTokenizerFast"),Pk.forEach(t),Nc.forEach(t),Bd=h(o),gt=a(o,"DIV",{class:!0});var Na=i(gt);T(os.$$.fragment,Na),Xm=h(Na),ns=a(Na,"P",{});var Ac=i(ns);Ym=s(Ac,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),ki=a(Ac,"EM",{});var Nk=i(ki);Zm=s(Nk,"tokenizers"),Nk.forEach(t),ep=s(Ac," library)."),Ac.forEach(t),tp=h(Na),Bo=a(Na,"P",{});var cd=i(Bo);sa=a(cd,"A",{href:!0});var Ak=i(sa);op=s(Ak,"LongformerTokenizerFast"),Ak.forEach(t),np=s(cd," is identical to "),ra=a(cd,"A",{href:!0});var Ik=i(ra);sp=s(Ik,"RobertaTokenizerFast"),Ik.forEach(t),rp=s(cd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),cd.forEach(t),Na.forEach(t),Hd=h(o),Dt=a(o,"H2",{class:!0});var Ic=i(Dt);Ho=a(Ic,"A",{id:!0,class:!0,href:!0});var Sk=i(Ho);bi=a(Sk,"SPAN",{});var Dk=i(bi);T(ss.$$.fragment,Dk),Dk.forEach(t),Sk.forEach(t),ap=h(Ic),vi=a(Ic,"SPAN",{});var Wk=i(vi);ip=s(Wk,"Longformer specific outputs"),Wk.forEach(t),Ic.forEach(t),Rd=h(o),Wt=a(o,"DIV",{class:!0});var Sc=i(Wt);T(rs.$$.fragment,Sc),lp=h(Sc),Ti=a(Sc,"P",{});var Qk=i(Ti);dp=s(Qk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Qk.forEach(t),Sc.forEach(t),Vd=h(o),Qt=a(o,"DIV",{class:!0});var Dc=i(Qt);T(as.$$.fragment,Dc),cp=h(Dc),yi=a(Dc,"P",{});var Uk=i(yi);hp=s(Uk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Uk.forEach(t),Dc.forEach(t),Gd=h(o),Ut=a(o,"DIV",{class:!0});var Wc=i(Ut);T(is.$$.fragment,Wc),mp=h(Wc),$i=a(Wc,"P",{});var Bk=i($i);pp=s(Bk,"Base class for masked language models outputs."),Bk.forEach(t),Wc.forEach(t),Kd=h(o),Bt=a(o,"DIV",{class:!0});var Qc=i(Bt);T(ls.$$.fragment,Qc),fp=h(Qc),Li=a(Qc,"P",{});var Hk=i(Li);gp=s(Hk,"Base class for outputs of question answering Longformer models."),Hk.forEach(t),Qc.forEach(t),Jd=h(o),Ht=a(o,"DIV",{class:!0});var Uc=i(Ht);T(ds.$$.fragment,Uc),up=h(Uc),xi=a(Uc,"P",{});var Rk=i(xi);_p=s(Rk,"Base class for outputs of sentence classification models."),Rk.forEach(t),Uc.forEach(t),Xd=h(o),Rt=a(o,"DIV",{class:!0});var Bc=i(Rt);T(cs.$$.fragment,Bc),wp=h(Bc),Fi=a(Bc,"P",{});var Vk=i(Fi);kp=s(Vk,"Base class for outputs of multiple choice Longformer models."),Vk.forEach(t),Bc.forEach(t),Yd=h(o),Vt=a(o,"DIV",{class:!0});var Hc=i(Vt);T(hs.$$.fragment,Hc),bp=h(Hc),Mi=a(Hc,"P",{});var Gk=i(Mi);vp=s(Gk,"Base class for outputs of token classification models."),Gk.forEach(t),Hc.forEach(t),Zd=h(o),Gt=a(o,"DIV",{class:!0});var Rc=i(Gt);T(ms.$$.fragment,Rc),Tp=h(Rc),Ei=a(Rc,"P",{});var Kk=i(Ei);yp=s(Kk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Kk.forEach(t),Rc.forEach(t),ec=h(o),Kt=a(o,"DIV",{class:!0});var Vc=i(Kt);T(ps.$$.fragment,Vc),$p=h(Vc),zi=a(Vc,"P",{});var Jk=i(zi);Lp=s(Jk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Jk.forEach(t),Vc.forEach(t),tc=h(o),Jt=a(o,"DIV",{class:!0});var Gc=i(Jt);T(fs.$$.fragment,Gc),xp=h(Gc),qi=a(Gc,"P",{});var Xk=i(qi);Fp=s(Xk,"Base class for masked language models outputs."),Xk.forEach(t),Gc.forEach(t),oc=h(o),Xt=a(o,"DIV",{class:!0});var Kc=i(Xt);T(gs.$$.fragment,Kc),Mp=h(Kc),Ci=a(Kc,"P",{});var Yk=i(Ci);Ep=s(Yk,"Base class for outputs of question answering Longformer models."),Yk.forEach(t),Kc.forEach(t),nc=h(o),Yt=a(o,"DIV",{class:!0});var Jc=i(Yt);T(us.$$.fragment,Jc),zp=h(Jc),Oi=a(Jc,"P",{});var Zk=i(Oi);qp=s(Zk,"Base class for outputs of sentence classification models."),Zk.forEach(t),Jc.forEach(t),sc=h(o),Zt=a(o,"DIV",{class:!0});var Xc=i(Zt);T(_s.$$.fragment,Xc),Cp=h(Xc),ji=a(Xc,"P",{});var eb=i(ji);Op=s(eb,"Base class for outputs of multiple choice models."),eb.forEach(t),Xc.forEach(t),rc=h(o),eo=a(o,"DIV",{class:!0});var Yc=i(eo);T(ws.$$.fragment,Yc),jp=h(Yc),Pi=a(Yc,"P",{});var tb=i(Pi);Pp=s(tb,"Base class for outputs of token classification models."),tb.forEach(t),Yc.forEach(t),ac=h(o),to=a(o,"H2",{class:!0});var Zc=i(to);Ro=a(Zc,"A",{id:!0,class:!0,href:!0});var ob=i(Ro);Ni=a(ob,"SPAN",{});var nb=i(Ni);T(ks.$$.fragment,nb),nb.forEach(t),ob.forEach(t),Np=h(Zc),Ai=a(Zc,"SPAN",{});var sb=i(Ai);Ap=s(sb,"LongformerModel"),sb.forEach(t),Zc.forEach(t),ic=h(o),Pe=a(o,"DIV",{class:!0});var ot=i(Pe);T(bs.$$.fragment,ot),Ip=h(ot),Ii=a(ot,"P",{});var rb=i(Ii);Sp=s(rb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),rb.forEach(t),Dp=h(ot),vs=a(ot,"P",{});var eh=i(vs);Wp=s(eh,"This model inherits from "),aa=a(eh,"A",{href:!0});var ab=i(aa);Qp=s(ab,"PreTrainedModel"),ab.forEach(t),Up=s(eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh.forEach(t),Bp=h(ot),Ts=a(ot,"P",{});var th=i(Ts);Hp=s(th,"This model is also a PyTorch "),ys=a(th,"A",{href:!0,rel:!0});var ib=i(ys);Rp=s(ib,"torch.nn.Module"),ib.forEach(t),Vp=s(th,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),th.forEach(t),Gp=h(ot),oo=a(ot,"P",{});var Aa=i(oo);Kp=s(Aa,"This class copied code from "),ia=a(Aa,"A",{href:!0});var lb=i(ia);Jp=s(lb,"RobertaModel"),lb.forEach(t),Xp=s(Aa,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),$s=a(Aa,"A",{href:!0,rel:!0});var db=i($s);Yp=s(db,`Longformer:
the Long-Document Transformer`),db.forEach(t),Zp=s(Aa,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Aa.forEach(t),ef=h(ot),Ls=a(ot,"P",{});var oh=i(Ls);tf=s(oh,"The self-attention module "),Si=a(oh,"CODE",{});var cb=i(Si);of=s(cb,"LongformerSelfAttention"),cb.forEach(t),nf=s(oh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),oh.forEach(t),sf=h(ot),st=a(ot,"DIV",{class:!0});var Qn=i(st);T(xs.$$.fragment,Qn),rf=h(Qn),no=a(Qn,"P",{});var Ia=i(no);af=s(Ia,"The "),la=a(Ia,"A",{href:!0});var hb=i(la);lf=s(hb,"LongformerModel"),hb.forEach(t),df=s(Ia," forward method, overrides the "),Di=a(Ia,"CODE",{});var mb=i(Di);cf=s(mb,"__call__"),mb.forEach(t),hf=s(Ia," special method."),Ia.forEach(t),mf=h(Qn),T(Vo.$$.fragment,Qn),pf=h(Qn),T(Go.$$.fragment,Qn),Qn.forEach(t),ot.forEach(t),lc=h(o),so=a(o,"H2",{class:!0});var nh=i(so);Ko=a(nh,"A",{id:!0,class:!0,href:!0});var pb=i(Ko);Wi=a(pb,"SPAN",{});var fb=i(Wi);T(Fs.$$.fragment,fb),fb.forEach(t),pb.forEach(t),ff=h(nh),Qi=a(nh,"SPAN",{});var gb=i(Qi);gf=s(gb,"LongformerForMaskedLM"),gb.forEach(t),nh.forEach(t),dc=h(o),He=a(o,"DIV",{class:!0});var Tt=i(He);T(Ms.$$.fragment,Tt),uf=h(Tt),Es=a(Tt,"P",{});var sh=i(Es);_f=s(sh,"Longformer Model with a "),Ui=a(sh,"CODE",{});var ub=i(Ui);wf=s(ub,"language modeling"),ub.forEach(t),kf=s(sh," head on top."),sh.forEach(t),bf=h(Tt),zs=a(Tt,"P",{});var rh=i(zs);vf=s(rh,"This model inherits from "),da=a(rh,"A",{href:!0});var _b=i(da);Tf=s(_b,"PreTrainedModel"),_b.forEach(t),yf=s(rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh.forEach(t),$f=h(Tt),qs=a(Tt,"P",{});var ah=i(qs);Lf=s(ah,"This model is also a PyTorch "),Cs=a(ah,"A",{href:!0,rel:!0});var wb=i(Cs);xf=s(wb,"torch.nn.Module"),wb.forEach(t),Ff=s(ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah.forEach(t),Mf=h(Tt),rt=a(Tt,"DIV",{class:!0});var Un=i(rt);T(Os.$$.fragment,Un),Ef=h(Un),ro=a(Un,"P",{});var Sa=i(ro);zf=s(Sa,"The "),ca=a(Sa,"A",{href:!0});var kb=i(ca);qf=s(kb,"LongformerForMaskedLM"),kb.forEach(t),Cf=s(Sa," forward method, overrides the "),Bi=a(Sa,"CODE",{});var bb=i(Bi);Of=s(bb,"__call__"),bb.forEach(t),jf=s(Sa," special method."),Sa.forEach(t),Pf=h(Un),T(Jo.$$.fragment,Un),Nf=h(Un),T(Xo.$$.fragment,Un),Un.forEach(t),Tt.forEach(t),cc=h(o),ao=a(o,"H2",{class:!0});var ih=i(ao);Yo=a(ih,"A",{id:!0,class:!0,href:!0});var vb=i(Yo);Hi=a(vb,"SPAN",{});var Tb=i(Hi);T(js.$$.fragment,Tb),Tb.forEach(t),vb.forEach(t),Af=h(ih),Ri=a(ih,"SPAN",{});var yb=i(Ri);If=s(yb,"LongformerForSequenceClassification"),yb.forEach(t),ih.forEach(t),hc=h(o),Re=a(o,"DIV",{class:!0});var yt=i(Re);T(Ps.$$.fragment,yt),Sf=h(yt),Vi=a(yt,"P",{});var $b=i(Vi);Df=s($b,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$b.forEach(t),Wf=h(yt),Ns=a(yt,"P",{});var lh=i(Ns);Qf=s(lh,"This model inherits from "),ha=a(lh,"A",{href:!0});var Lb=i(ha);Uf=s(Lb,"PreTrainedModel"),Lb.forEach(t),Bf=s(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(t),Hf=h(yt),As=a(yt,"P",{});var dh=i(As);Rf=s(dh,"This model is also a PyTorch "),Is=a(dh,"A",{href:!0,rel:!0});var xb=i(Is);Vf=s(xb,"torch.nn.Module"),xb.forEach(t),Gf=s(dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dh.forEach(t),Kf=h(yt),Ne=a(yt,"DIV",{class:!0});var nt=i(Ne);T(Ss.$$.fragment,nt),Jf=h(nt),io=a(nt,"P",{});var Da=i(io);Xf=s(Da,"The "),ma=a(Da,"A",{href:!0});var Fb=i(ma);Yf=s(Fb,"LongformerForSequenceClassification"),Fb.forEach(t),Zf=s(Da," forward method, overrides the "),Gi=a(Da,"CODE",{});var Mb=i(Gi);eg=s(Mb,"__call__"),Mb.forEach(t),tg=s(Da," special method."),Da.forEach(t),og=h(nt),T(Zo.$$.fragment,nt),ng=h(nt),T(en.$$.fragment,nt),sg=h(nt),T(tn.$$.fragment,nt),rg=h(nt),T(on.$$.fragment,nt),ag=h(nt),T(nn.$$.fragment,nt),nt.forEach(t),yt.forEach(t),mc=h(o),lo=a(o,"H2",{class:!0});var ch=i(lo);sn=a(ch,"A",{id:!0,class:!0,href:!0});var Eb=i(sn);Ki=a(Eb,"SPAN",{});var zb=i(Ki);T(Ds.$$.fragment,zb),zb.forEach(t),Eb.forEach(t),ig=h(ch),Ji=a(ch,"SPAN",{});var qb=i(Ji);lg=s(qb,"LongformerForMultipleChoice"),qb.forEach(t),ch.forEach(t),pc=h(o),Ve=a(o,"DIV",{class:!0});var $t=i(Ve);T(Ws.$$.fragment,$t),dg=h($t),Xi=a($t,"P",{});var Cb=i(Xi);cg=s(Cb,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Cb.forEach(t),hg=h($t),Qs=a($t,"P",{});var hh=i(Qs);mg=s(hh,"This model inherits from "),pa=a(hh,"A",{href:!0});var Ob=i(pa);pg=s(Ob,"PreTrainedModel"),Ob.forEach(t),fg=s(hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh.forEach(t),gg=h($t),Us=a($t,"P",{});var mh=i(Us);ug=s(mh,"This model is also a PyTorch "),Bs=a(mh,"A",{href:!0,rel:!0});var jb=i(Bs);_g=s(jb,"torch.nn.Module"),jb.forEach(t),wg=s(mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mh.forEach(t),kg=h($t),at=a($t,"DIV",{class:!0});var Bn=i(at);T(Hs.$$.fragment,Bn),bg=h(Bn),co=a(Bn,"P",{});var Wa=i(co);vg=s(Wa,"The "),fa=a(Wa,"A",{href:!0});var Pb=i(fa);Tg=s(Pb,"LongformerForMultipleChoice"),Pb.forEach(t),yg=s(Wa," forward method, overrides the "),Yi=a(Wa,"CODE",{});var Nb=i(Yi);$g=s(Nb,"__call__"),Nb.forEach(t),Lg=s(Wa," special method."),Wa.forEach(t),xg=h(Bn),T(rn.$$.fragment,Bn),Fg=h(Bn),T(an.$$.fragment,Bn),Bn.forEach(t),$t.forEach(t),fc=h(o),ho=a(o,"H2",{class:!0});var ph=i(ho);ln=a(ph,"A",{id:!0,class:!0,href:!0});var Ab=i(ln);Zi=a(Ab,"SPAN",{});var Ib=i(Zi);T(Rs.$$.fragment,Ib),Ib.forEach(t),Ab.forEach(t),Mg=h(ph),el=a(ph,"SPAN",{});var Sb=i(el);Eg=s(Sb,"LongformerForTokenClassification"),Sb.forEach(t),ph.forEach(t),gc=h(o),Ge=a(o,"DIV",{class:!0});var Lt=i(Ge);T(Vs.$$.fragment,Lt),zg=h(Lt),tl=a(Lt,"P",{});var Db=i(tl);qg=s(Db,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Db.forEach(t),Cg=h(Lt),Gs=a(Lt,"P",{});var fh=i(Gs);Og=s(fh,"This model inherits from "),ga=a(fh,"A",{href:!0});var Wb=i(ga);jg=s(Wb,"PreTrainedModel"),Wb.forEach(t),Pg=s(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),Ng=h(Lt),Ks=a(Lt,"P",{});var gh=i(Ks);Ag=s(gh,"This model is also a PyTorch "),Js=a(gh,"A",{href:!0,rel:!0});var Qb=i(Js);Ig=s(Qb,"torch.nn.Module"),Qb.forEach(t),Sg=s(gh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gh.forEach(t),Dg=h(Lt),Xe=a(Lt,"DIV",{class:!0});var xt=i(Xe);T(Xs.$$.fragment,xt),Wg=h(xt),mo=a(xt,"P",{});var Qa=i(mo);Qg=s(Qa,"The "),ua=a(Qa,"A",{href:!0});var Ub=i(ua);Ug=s(Ub,"LongformerForTokenClassification"),Ub.forEach(t),Bg=s(Qa," forward method, overrides the "),ol=a(Qa,"CODE",{});var Bb=i(ol);Hg=s(Bb,"__call__"),Bb.forEach(t),Rg=s(Qa," special method."),Qa.forEach(t),Vg=h(xt),T(dn.$$.fragment,xt),Gg=h(xt),T(cn.$$.fragment,xt),Kg=h(xt),T(hn.$$.fragment,xt),xt.forEach(t),Lt.forEach(t),uc=h(o),po=a(o,"H2",{class:!0});var uh=i(po);mn=a(uh,"A",{id:!0,class:!0,href:!0});var Hb=i(mn);nl=a(Hb,"SPAN",{});var Rb=i(nl);T(Ys.$$.fragment,Rb),Rb.forEach(t),Hb.forEach(t),Jg=h(uh),sl=a(uh,"SPAN",{});var Vb=i(sl);Xg=s(Vb,"LongformerForQuestionAnswering"),Vb.forEach(t),uh.forEach(t),_c=h(o),Ke=a(o,"DIV",{class:!0});var Ft=i(Ke);T(Zs.$$.fragment,Ft),Yg=h(Ft),fo=a(Ft,"P",{});var Ua=i(fo);Zg=s(Ua,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),rl=a(Ua,"CODE",{});var Gb=i(rl);eu=s(Gb,"span start logits"),Gb.forEach(t),tu=s(Ua," and "),al=a(Ua,"CODE",{});var Kb=i(al);ou=s(Kb,"span end logits"),Kb.forEach(t),nu=s(Ua,")."),Ua.forEach(t),su=h(Ft),er=a(Ft,"P",{});var _h=i(er);ru=s(_h,"This model inherits from "),_a=a(_h,"A",{href:!0});var Jb=i(_a);au=s(Jb,"PreTrainedModel"),Jb.forEach(t),iu=s(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),lu=h(Ft),tr=a(Ft,"P",{});var wh=i(tr);du=s(wh,"This model is also a PyTorch "),or=a(wh,"A",{href:!0,rel:!0});var Xb=i(or);cu=s(Xb,"torch.nn.Module"),Xb.forEach(t),hu=s(wh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh.forEach(t),mu=h(Ft),it=a(Ft,"DIV",{class:!0});var Hn=i(it);T(nr.$$.fragment,Hn),pu=h(Hn),go=a(Hn,"P",{});var Ba=i(go);fu=s(Ba,"The "),wa=a(Ba,"A",{href:!0});var Yb=i(wa);gu=s(Yb,"LongformerForQuestionAnswering"),Yb.forEach(t),uu=s(Ba," forward method, overrides the "),il=a(Ba,"CODE",{});var Zb=i(il);_u=s(Zb,"__call__"),Zb.forEach(t),wu=s(Ba," special method."),Ba.forEach(t),ku=h(Hn),T(pn.$$.fragment,Hn),bu=h(Hn),T(fn.$$.fragment,Hn),Hn.forEach(t),Ft.forEach(t),wc=h(o),uo=a(o,"H2",{class:!0});var kh=i(uo);gn=a(kh,"A",{id:!0,class:!0,href:!0});var ev=i(gn);ll=a(ev,"SPAN",{});var tv=i(ll);T(sr.$$.fragment,tv),tv.forEach(t),ev.forEach(t),vu=h(kh),dl=a(kh,"SPAN",{});var ov=i(dl);Tu=s(ov,"TFLongformerModel"),ov.forEach(t),kh.forEach(t),kc=h(o),Ee=a(o,"DIV",{class:!0});var Ue=i(Ee);T(rr.$$.fragment,Ue),yu=h(Ue),cl=a(Ue,"P",{});var nv=i(cl);$u=s(nv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),nv.forEach(t),Lu=h(Ue),ar=a(Ue,"P",{});var bh=i(ar);xu=s(bh,"This model inherits from "),ka=a(bh,"A",{href:!0});var sv=i(ka);Fu=s(sv,"TFPreTrainedModel"),sv.forEach(t),Mu=s(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),Eu=h(Ue),ir=a(Ue,"P",{});var vh=i(ir);zu=s(vh,"This model is also a "),lr=a(vh,"A",{href:!0,rel:!0});var rv=i(lr);qu=s(rv,"tf.keras.Model"),rv.forEach(t),Cu=s(vh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vh.forEach(t),Ou=h(Ue),T(un.$$.fragment,Ue),ju=h(Ue),_o=a(Ue,"P",{});var Ha=i(_o);Pu=s(Ha,"This class copies code from "),ba=a(Ha,"A",{href:!0});var av=i(ba);Nu=s(av,"TFRobertaModel"),av.forEach(t),Au=s(Ha,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),dr=a(Ha,"A",{href:!0,rel:!0});var iv=i(dr);Iu=s(iv,"Longformer: the Long-Document Transformer"),iv.forEach(t),Su=s(Ha,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ha.forEach(t),Du=h(Ue),cr=a(Ue,"P",{});var Th=i(cr);Wu=s(Th,"The self-attention module "),hl=a(Th,"CODE",{});var lv=i(hl);Qu=s(lv,"TFLongformerSelfAttention"),lv.forEach(t),Uu=s(Th,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Th.forEach(t),Bu=h(Ue),kt=a(Ue,"DIV",{class:!0});var Ra=i(kt);T(hr.$$.fragment,Ra),Hu=h(Ra),wo=a(Ra,"P",{});var Va=i(wo);Ru=s(Va,"The "),va=a(Va,"A",{href:!0});var dv=i(va);Vu=s(dv,"TFLongformerModel"),dv.forEach(t),Gu=s(Va," forward method, overrides the "),ml=a(Va,"CODE",{});var cv=i(ml);Ku=s(cv,"__call__"),cv.forEach(t),Ju=s(Va," special method."),Va.forEach(t),Xu=h(Ra),T(_n.$$.fragment,Ra),Ra.forEach(t),Ue.forEach(t),bc=h(o),ko=a(o,"H2",{class:!0});var yh=i(ko);wn=a(yh,"A",{id:!0,class:!0,href:!0});var hv=i(wn);pl=a(hv,"SPAN",{});var mv=i(pl);T(mr.$$.fragment,mv),mv.forEach(t),hv.forEach(t),Yu=h(yh),fl=a(yh,"SPAN",{});var pv=i(fl);Zu=s(pv,"TFLongformerForMaskedLM"),pv.forEach(t),yh.forEach(t),vc=h(o),Ie=a(o,"DIV",{class:!0});var dt=i(Ie);T(pr.$$.fragment,dt),e_=h(dt),fr=a(dt,"P",{});var $h=i(fr);t_=s($h,"Longformer Model with a "),gl=a($h,"CODE",{});var fv=i(gl);o_=s(fv,"language modeling"),fv.forEach(t),n_=s($h," head on top."),$h.forEach(t),s_=h(dt),gr=a(dt,"P",{});var Lh=i(gr);r_=s(Lh,"This model inherits from "),Ta=a(Lh,"A",{href:!0});var gv=i(Ta);a_=s(gv,"TFPreTrainedModel"),gv.forEach(t),i_=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),l_=h(dt),ur=a(dt,"P",{});var xh=i(ur);d_=s(xh,"This model is also a "),_r=a(xh,"A",{href:!0,rel:!0});var uv=i(_r);c_=s(uv,"tf.keras.Model"),uv.forEach(t),h_=s(xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xh.forEach(t),m_=h(dt),T(kn.$$.fragment,dt),p_=h(dt),Ye=a(dt,"DIV",{class:!0});var Mt=i(Ye);T(wr.$$.fragment,Mt),f_=h(Mt),bo=a(Mt,"P",{});var Ga=i(bo);g_=s(Ga,"The "),ya=a(Ga,"A",{href:!0});var _v=i(ya);u_=s(_v,"TFLongformerForMaskedLM"),_v.forEach(t),__=s(Ga," forward method, overrides the "),ul=a(Ga,"CODE",{});var wv=i(ul);w_=s(wv,"__call__"),wv.forEach(t),k_=s(Ga," special method."),Ga.forEach(t),b_=h(Mt),T(bn.$$.fragment,Mt),v_=h(Mt),T(vn.$$.fragment,Mt),T_=h(Mt),T(Tn.$$.fragment,Mt),Mt.forEach(t),dt.forEach(t),Tc=h(o),vo=a(o,"H2",{class:!0});var Fh=i(vo);yn=a(Fh,"A",{id:!0,class:!0,href:!0});var kv=i(yn);_l=a(kv,"SPAN",{});var bv=i(_l);T(kr.$$.fragment,bv),bv.forEach(t),kv.forEach(t),y_=h(Fh),wl=a(Fh,"SPAN",{});var vv=i(wl);$_=s(vv,"TFLongformerForQuestionAnswering"),vv.forEach(t),Fh.forEach(t),yc=h(o),Se=a(o,"DIV",{class:!0});var ct=i(Se);T(br.$$.fragment,ct),L_=h(ct),To=a(ct,"P",{});var Ka=i(To);x_=s(Ka,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),kl=a(Ka,"CODE",{});var Tv=i(kl);F_=s(Tv,"span start logits"),Tv.forEach(t),M_=s(Ka," and "),bl=a(Ka,"CODE",{});var yv=i(bl);E_=s(yv,"span end logits"),yv.forEach(t),z_=s(Ka,")."),Ka.forEach(t),q_=h(ct),vr=a(ct,"P",{});var Mh=i(vr);C_=s(Mh,"This model inherits from "),$a=a(Mh,"A",{href:!0});var $v=i($a);O_=s($v,"TFPreTrainedModel"),$v.forEach(t),j_=s(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mh.forEach(t),P_=h(ct),Tr=a(ct,"P",{});var Eh=i(Tr);N_=s(Eh,"This model is also a "),yr=a(Eh,"A",{href:!0,rel:!0});var Lv=i(yr);A_=s(Lv,"tf.keras.Model"),Lv.forEach(t),I_=s(Eh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eh.forEach(t),S_=h(ct),T($n.$$.fragment,ct),D_=h(ct),Ze=a(ct,"DIV",{class:!0});var Et=i(Ze);T($r.$$.fragment,Et),W_=h(Et),yo=a(Et,"P",{});var Ja=i(yo);Q_=s(Ja,"The "),La=a(Ja,"A",{href:!0});var xv=i(La);U_=s(xv,"TFLongformerForQuestionAnswering"),xv.forEach(t),B_=s(Ja," forward method, overrides the "),vl=a(Ja,"CODE",{});var Fv=i(vl);H_=s(Fv,"__call__"),Fv.forEach(t),R_=s(Ja," special method."),Ja.forEach(t),V_=h(Et),T(Ln.$$.fragment,Et),G_=h(Et),T(xn.$$.fragment,Et),K_=h(Et),T(Fn.$$.fragment,Et),Et.forEach(t),ct.forEach(t),$c=h(o),$o=a(o,"H2",{class:!0});var zh=i($o);Mn=a(zh,"A",{id:!0,class:!0,href:!0});var Mv=i(Mn);Tl=a(Mv,"SPAN",{});var Ev=i(Tl);T(Lr.$$.fragment,Ev),Ev.forEach(t),Mv.forEach(t),J_=h(zh),yl=a(zh,"SPAN",{});var zv=i(yl);X_=s(zv,"TFLongformerForSequenceClassification"),zv.forEach(t),zh.forEach(t),Lc=h(o),De=a(o,"DIV",{class:!0});var ht=i(De);T(xr.$$.fragment,ht),Y_=h(ht),$l=a(ht,"P",{});var qv=i($l);Z_=s(qv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),qv.forEach(t),ew=h(ht),Fr=a(ht,"P",{});var qh=i(Fr);tw=s(qh,"This model inherits from "),xa=a(qh,"A",{href:!0});var Cv=i(xa);ow=s(Cv,"TFPreTrainedModel"),Cv.forEach(t),nw=s(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),sw=h(ht),Mr=a(ht,"P",{});var Ch=i(Mr);rw=s(Ch,"This model is also a "),Er=a(Ch,"A",{href:!0,rel:!0});var Ov=i(Er);aw=s(Ov,"tf.keras.Model"),Ov.forEach(t),iw=s(Ch,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ch.forEach(t),lw=h(ht),T(En.$$.fragment,ht),dw=h(ht),et=a(ht,"DIV",{class:!0});var zt=i(et);T(zr.$$.fragment,zt),cw=h(zt),Lo=a(zt,"P",{});var Xa=i(Lo);hw=s(Xa,"The "),Fa=a(Xa,"A",{href:!0});var jv=i(Fa);mw=s(jv,"TFLongformerForSequenceClassification"),jv.forEach(t),pw=s(Xa," forward method, overrides the "),Ll=a(Xa,"CODE",{});var Pv=i(Ll);fw=s(Pv,"__call__"),Pv.forEach(t),gw=s(Xa," special method."),Xa.forEach(t),uw=h(zt),T(zn.$$.fragment,zt),_w=h(zt),T(qn.$$.fragment,zt),ww=h(zt),T(Cn.$$.fragment,zt),zt.forEach(t),ht.forEach(t),xc=h(o),xo=a(o,"H2",{class:!0});var Oh=i(xo);On=a(Oh,"A",{id:!0,class:!0,href:!0});var Nv=i(On);xl=a(Nv,"SPAN",{});var Av=i(xl);T(qr.$$.fragment,Av),Av.forEach(t),Nv.forEach(t),kw=h(Oh),Fl=a(Oh,"SPAN",{});var Iv=i(Fl);bw=s(Iv,"TFLongformerForTokenClassification"),Iv.forEach(t),Oh.forEach(t),Fc=h(o),We=a(o,"DIV",{class:!0});var mt=i(We);T(Cr.$$.fragment,mt),vw=h(mt),Ml=a(mt,"P",{});var Sv=i(Ml);Tw=s(Sv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Sv.forEach(t),yw=h(mt),Or=a(mt,"P",{});var jh=i(Or);$w=s(jh,"This model inherits from "),Ma=a(jh,"A",{href:!0});var Dv=i(Ma);Lw=s(Dv,"TFPreTrainedModel"),Dv.forEach(t),xw=s(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),Fw=h(mt),jr=a(mt,"P",{});var Ph=i(jr);Mw=s(Ph,"This model is also a "),Pr=a(Ph,"A",{href:!0,rel:!0});var Wv=i(Pr);Ew=s(Wv,"tf.keras.Model"),Wv.forEach(t),zw=s(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(t),qw=h(mt),T(jn.$$.fragment,mt),Cw=h(mt),tt=a(mt,"DIV",{class:!0});var qt=i(tt);T(Nr.$$.fragment,qt),Ow=h(qt),Fo=a(qt,"P",{});var Ya=i(Fo);jw=s(Ya,"The "),Ea=a(Ya,"A",{href:!0});var Qv=i(Ea);Pw=s(Qv,"TFLongformerForTokenClassification"),Qv.forEach(t),Nw=s(Ya," forward method, overrides the "),El=a(Ya,"CODE",{});var Uv=i(El);Aw=s(Uv,"__call__"),Uv.forEach(t),Iw=s(Ya," special method."),Ya.forEach(t),Sw=h(qt),T(Pn.$$.fragment,qt),Dw=h(qt),T(Nn.$$.fragment,qt),Ww=h(qt),T(An.$$.fragment,qt),qt.forEach(t),mt.forEach(t),Mc=h(o),Mo=a(o,"H2",{class:!0});var Nh=i(Mo);In=a(Nh,"A",{id:!0,class:!0,href:!0});var Bv=i(In);zl=a(Bv,"SPAN",{});var Hv=i(zl);T(Ar.$$.fragment,Hv),Hv.forEach(t),Bv.forEach(t),Qw=h(Nh),ql=a(Nh,"SPAN",{});var Rv=i(ql);Uw=s(Rv,"TFLongformerForMultipleChoice"),Rv.forEach(t),Nh.forEach(t),Ec=h(o),Qe=a(o,"DIV",{class:!0});var pt=i(Qe);T(Ir.$$.fragment,pt),Bw=h(pt),Cl=a(pt,"P",{});var Vv=i(Cl);Hw=s(Vv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Vv.forEach(t),Rw=h(pt),Sr=a(pt,"P",{});var Ah=i(Sr);Vw=s(Ah,"This model inherits from "),za=a(Ah,"A",{href:!0});var Gv=i(za);Gw=s(Gv,"TFPreTrainedModel"),Gv.forEach(t),Kw=s(Ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah.forEach(t),Jw=h(pt),Dr=a(pt,"P",{});var Ih=i(Dr);Xw=s(Ih,"This model is also a "),Wr=a(Ih,"A",{href:!0,rel:!0});var Kv=i(Wr);Yw=s(Kv,"tf.keras.Model"),Kv.forEach(t),Zw=s(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),ek=h(pt),T(Sn.$$.fragment,pt),tk=h(pt),lt=a(pt,"DIV",{class:!0});var Rn=i(lt);T(Qr.$$.fragment,Rn),ok=h(Rn),Eo=a(Rn,"P",{});var Za=i(Eo);nk=s(Za,"The "),qa=a(Za,"A",{href:!0});var Jv=i(qa);sk=s(Jv,"TFLongformerForMultipleChoice"),Jv.forEach(t),rk=s(Za," forward method, overrides the "),Ol=a(Za,"CODE",{});var Xv=i(Ol);ak=s(Xv,"__call__"),Xv.forEach(t),ik=s(Za," special method."),Za.forEach(t),lk=h(Rn),T(Dn.$$.fragment,Rn),dk=h(Rn),T(Wn.$$.fragment,Rn),Rn.forEach(t),pt.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(XT)),_(p,"id","longformer"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#longformer"),_(m,"class","relative group"),_(Z,"id","overview"),_(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Z,"href","#overview"),_(z,"class","relative group"),_(te,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(te,"rel","nofollow"),_(be,"href","https://huggingface.co/beltagy"),_(be,"rel","nofollow"),_(j,"href","https://github.com/allenai/longformer"),_(j,"rel","nofollow"),_(ke,"id","longformer-self-attention"),_(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ke,"href","#longformer-self-attention"),_(I,"class","relative group"),md.a=pd,fd.a=gd,ud.a=_d,wd.a=kd,vd.a=Td,_(Gr,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerModel.forward"),Fd.a=Md,Ed.a=zd,qd.a=Cd,Od.a=jd,_(Vn,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(Vn,"rel","nofollow"),_(Io,"id","training"),_(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Io,"href","#training"),_(Ct,"class","relative group"),_(Kr,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Jr,"href","/docs/transformers/pr_highlight/en/model_doc/roberta#transformers.RobertaForMaskedLM"),_(So,"id","transformers.LongformerConfig"),_(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(So,"href","#transformers.LongformerConfig"),_(jt,"class","relative group"),_(Xr,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerModel"),_(Yr,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.TFLongformerModel"),_(Zr,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerModel"),_(Yn,"href","https://huggingface.co/roberta-base"),_(Yn,"rel","nofollow"),_(ea,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerConfig"),_(ta,"href","/docs/transformers/pr_highlight/en/model_doc/roberta#transformers.RobertaConfig"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wo,"id","transformers.LongformerTokenizer"),_(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wo,"href","#transformers.LongformerTokenizer"),_(It,"class","relative group"),_(oa,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizer"),_(na,"href","/docs/transformers/pr_highlight/en/model_doc/roberta#transformers.RobertaTokenizer"),_(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"id","transformers.LongformerTokenizerFast"),_(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Uo,"href","#transformers.LongformerTokenizerFast"),_(St,"class","relative group"),_(sa,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerTokenizerFast"),_(ra,"href","/docs/transformers/pr_highlight/en/model_doc/roberta#transformers.RobertaTokenizerFast"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ho,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ho,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Dt,"class","relative group"),_(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ro,"id","transformers.LongformerModel"),_(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ro,"href","#transformers.LongformerModel"),_(to,"class","relative group"),_(aa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ys,"rel","nofollow"),_(ia,"href","/docs/transformers/pr_highlight/en/model_doc/roberta#transformers.RobertaModel"),_($s,"href","https://arxiv.org/abs/2004.05150"),_($s,"rel","nofollow"),_(la,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerModel"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ko,"id","transformers.LongformerForMaskedLM"),_(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ko,"href","#transformers.LongformerForMaskedLM"),_(so,"class","relative group"),_(da,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Cs,"rel","nofollow"),_(ca,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yo,"id","transformers.LongformerForSequenceClassification"),_(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Yo,"href","#transformers.LongformerForSequenceClassification"),_(ao,"class","relative group"),_(ha,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Is,"rel","nofollow"),_(ma,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(sn,"id","transformers.LongformerForMultipleChoice"),_(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(sn,"href","#transformers.LongformerForMultipleChoice"),_(lo,"class","relative group"),_(pa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Bs,"rel","nofollow"),_(fa,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ln,"id","transformers.LongformerForTokenClassification"),_(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ln,"href","#transformers.LongformerForTokenClassification"),_(ho,"class","relative group"),_(ga,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Js,"rel","nofollow"),_(ua,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerForTokenClassification"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(mn,"id","transformers.LongformerForQuestionAnswering"),_(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(mn,"href","#transformers.LongformerForQuestionAnswering"),_(po,"class","relative group"),_(_a,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(or,"rel","nofollow"),_(wa,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),_(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(gn,"id","transformers.TFLongformerModel"),_(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(gn,"href","#transformers.TFLongformerModel"),_(uo,"class","relative group"),_(ka,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(lr,"rel","nofollow"),_(ba,"href","/docs/transformers/pr_highlight/en/model_doc/roberta#transformers.TFRobertaModel"),_(dr,"href","https://arxiv.org/abs/2004.05150"),_(dr,"rel","nofollow"),_(va,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.TFLongformerModel"),_(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(wn,"id","transformers.TFLongformerForMaskedLM"),_(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(wn,"href","#transformers.TFLongformerForMaskedLM"),_(ko,"class","relative group"),_(Ta,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(_r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(_r,"rel","nofollow"),_(ya,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(yn,"id","transformers.TFLongformerForQuestionAnswering"),_(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(yn,"href","#transformers.TFLongformerForQuestionAnswering"),_(vo,"class","relative group"),_($a,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(yr,"rel","nofollow"),_(La,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),_(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Mn,"id","transformers.TFLongformerForSequenceClassification"),_(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Mn,"href","#transformers.TFLongformerForSequenceClassification"),_($o,"class","relative group"),_(xa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Er,"rel","nofollow"),_(Fa,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(On,"id","transformers.TFLongformerForTokenClassification"),_(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(On,"href","#transformers.TFLongformerForTokenClassification"),_(xo,"class","relative group"),_(Ma,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Pr,"rel","nofollow"),_(Ea,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(In,"id","transformers.TFLongformerForMultipleChoice"),_(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(In,"href","#transformers.TFLongformerForMultipleChoice"),_(Mo,"class","relative group"),_(za,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Wr,"rel","nofollow"),_(qa,"href","/docs/transformers/pr_highlight/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),f(o,k,g),f(o,m,g),e(m,p),e(p,b),y(l,b,null),e(m,u),e(m,E),e(E,me),f(o,J,g),f(o,z,g),e(z,Z),e(Z,S),y(ee,S,null),e(z,pe),e(z,D),e(D,fe),f(o,le,g),f(o,G,g),e(G,P),e(G,te),e(te,X),e(G,q),f(o,O,g),f(o,ne,g),e(ne,B),f(o,de,g),f(o,se,g),e(se,W),e(W,ge),f(o,ce,g),f(o,C,g),e(C,ue),f(o,U,g),f(o,re,g),e(re,K),e(K,H),e(K,ae),e(ae,_e),e(K,N),e(K,ie),e(ie,R),e(K,we),e(K,w),e(w,F),e(K,Y),f(o,Te,g),f(o,he,g),e(he,A),e(he,be),e(be,Le),e(he,xe),e(he,j),e(j,V),e(he,Fe),f(o,ye,g),f(o,I,g),e(I,ke),e(ke,ve),y(oe,ve,null),e(I,Me),e(I,ei),e(ei,Sh),f(o,hd,g),f(o,$e,g),e($e,Dh),md.m(Yv,$e),e($e,pd),fd.m(Zv,$e),e($e,gd),ud.m(eT,$e),e($e,_d),e($e,ti),e(ti,Wh),e($e,Qh),e($e,oi),e(oi,Uh),e($e,Bh),e($e,ni),e(ni,Hh),e($e,Rh),wd.m(tT,$e),e($e,kd),e($e,si),e(si,Vh),e($e,Gh),f(o,bd,g),f(o,_t,g),e(_t,Kh),vd.m(oT,_t),e(_t,Td),e(_t,ri),e(ri,Jh),e(_t,Xh),f(o,yd,g),f(o,wt,g),e(wt,Yh),e(wt,ai),e(ai,Zh),e(wt,em),e(wt,ii),e(ii,tm),e(wt,om),f(o,$d,g),f(o,Po,g),e(Po,li),e(li,nm),e(Po,sm),e(Po,di),e(di,rm),f(o,Ld,g),f(o,No,g),e(No,am),e(No,Gr),e(Gr,im),e(No,lm),f(o,xd,g),f(o,Je,g),e(Je,dm),Fd.m(nT,Je),e(Je,Md),Ed.m(sT,Je),e(Je,zd),qd.m(rT,Je),e(Je,Cd),Od.m(aT,Je),e(Je,jd),f(o,Pd,g),f(o,Ao,g),e(Ao,cm),e(Ao,Vn),e(Vn,hm),e(Ao,mm),f(o,Nd,g),f(o,Ct,g),e(Ct,Io),e(Io,ci),y(Gn,ci,null),e(Ct,pm),e(Ct,hi),e(hi,fm),f(o,Ad,g),f(o,Ot,g),e(Ot,Kr),e(Kr,gm),e(Ot,um),e(Ot,Jr),e(Jr,_m),e(Ot,wm),f(o,Id,g),y(Kn,o,g),f(o,Sd,g),f(o,jt,g),e(jt,So),e(So,mi),y(Jn,mi,null),e(jt,km),e(jt,pi),e(pi,bm),f(o,Dd,g),f(o,Be,g),y(Xn,Be,null),e(Be,vm),e(Be,Pt),e(Pt,Tm),e(Pt,Xr),e(Xr,ym),e(Pt,$m),e(Pt,Yr),e(Yr,Lm),e(Pt,xm),e(Be,Fm),e(Be,Nt),e(Nt,Mm),e(Nt,Zr),e(Zr,Em),e(Nt,zm),e(Nt,Yn),e(Yn,qm),e(Nt,Cm),e(Be,Om),e(Be,At),e(At,jm),e(At,ea),e(ea,Pm),e(At,Nm),e(At,ta),e(ta,Am),e(At,Im),e(Be,Sm),y(Do,Be,null),f(o,Wd,g),f(o,It,g),e(It,Wo),e(Wo,fi),y(Zn,fi,null),e(It,Dm),e(It,gi),e(gi,Wm),f(o,Qd,g),f(o,ft,g),y(es,ft,null),e(ft,Qm),e(ft,ui),e(ui,Um),e(ft,Bm),e(ft,Qo),e(Qo,oa),e(oa,Hm),e(Qo,Rm),e(Qo,na),e(na,Vm),e(Qo,Gm),f(o,Ud,g),f(o,St,g),e(St,Uo),e(Uo,_i),y(ts,_i,null),e(St,Km),e(St,wi),e(wi,Jm),f(o,Bd,g),f(o,gt,g),y(os,gt,null),e(gt,Xm),e(gt,ns),e(ns,Ym),e(ns,ki),e(ki,Zm),e(ns,ep),e(gt,tp),e(gt,Bo),e(Bo,sa),e(sa,op),e(Bo,np),e(Bo,ra),e(ra,sp),e(Bo,rp),f(o,Hd,g),f(o,Dt,g),e(Dt,Ho),e(Ho,bi),y(ss,bi,null),e(Dt,ap),e(Dt,vi),e(vi,ip),f(o,Rd,g),f(o,Wt,g),y(rs,Wt,null),e(Wt,lp),e(Wt,Ti),e(Ti,dp),f(o,Vd,g),f(o,Qt,g),y(as,Qt,null),e(Qt,cp),e(Qt,yi),e(yi,hp),f(o,Gd,g),f(o,Ut,g),y(is,Ut,null),e(Ut,mp),e(Ut,$i),e($i,pp),f(o,Kd,g),f(o,Bt,g),y(ls,Bt,null),e(Bt,fp),e(Bt,Li),e(Li,gp),f(o,Jd,g),f(o,Ht,g),y(ds,Ht,null),e(Ht,up),e(Ht,xi),e(xi,_p),f(o,Xd,g),f(o,Rt,g),y(cs,Rt,null),e(Rt,wp),e(Rt,Fi),e(Fi,kp),f(o,Yd,g),f(o,Vt,g),y(hs,Vt,null),e(Vt,bp),e(Vt,Mi),e(Mi,vp),f(o,Zd,g),f(o,Gt,g),y(ms,Gt,null),e(Gt,Tp),e(Gt,Ei),e(Ei,yp),f(o,ec,g),f(o,Kt,g),y(ps,Kt,null),e(Kt,$p),e(Kt,zi),e(zi,Lp),f(o,tc,g),f(o,Jt,g),y(fs,Jt,null),e(Jt,xp),e(Jt,qi),e(qi,Fp),f(o,oc,g),f(o,Xt,g),y(gs,Xt,null),e(Xt,Mp),e(Xt,Ci),e(Ci,Ep),f(o,nc,g),f(o,Yt,g),y(us,Yt,null),e(Yt,zp),e(Yt,Oi),e(Oi,qp),f(o,sc,g),f(o,Zt,g),y(_s,Zt,null),e(Zt,Cp),e(Zt,ji),e(ji,Op),f(o,rc,g),f(o,eo,g),y(ws,eo,null),e(eo,jp),e(eo,Pi),e(Pi,Pp),f(o,ac,g),f(o,to,g),e(to,Ro),e(Ro,Ni),y(ks,Ni,null),e(to,Np),e(to,Ai),e(Ai,Ap),f(o,ic,g),f(o,Pe,g),y(bs,Pe,null),e(Pe,Ip),e(Pe,Ii),e(Ii,Sp),e(Pe,Dp),e(Pe,vs),e(vs,Wp),e(vs,aa),e(aa,Qp),e(vs,Up),e(Pe,Bp),e(Pe,Ts),e(Ts,Hp),e(Ts,ys),e(ys,Rp),e(Ts,Vp),e(Pe,Gp),e(Pe,oo),e(oo,Kp),e(oo,ia),e(ia,Jp),e(oo,Xp),e(oo,$s),e($s,Yp),e(oo,Zp),e(Pe,ef),e(Pe,Ls),e(Ls,tf),e(Ls,Si),e(Si,of),e(Ls,nf),e(Pe,sf),e(Pe,st),y(xs,st,null),e(st,rf),e(st,no),e(no,af),e(no,la),e(la,lf),e(no,df),e(no,Di),e(Di,cf),e(no,hf),e(st,mf),y(Vo,st,null),e(st,pf),y(Go,st,null),f(o,lc,g),f(o,so,g),e(so,Ko),e(Ko,Wi),y(Fs,Wi,null),e(so,ff),e(so,Qi),e(Qi,gf),f(o,dc,g),f(o,He,g),y(Ms,He,null),e(He,uf),e(He,Es),e(Es,_f),e(Es,Ui),e(Ui,wf),e(Es,kf),e(He,bf),e(He,zs),e(zs,vf),e(zs,da),e(da,Tf),e(zs,yf),e(He,$f),e(He,qs),e(qs,Lf),e(qs,Cs),e(Cs,xf),e(qs,Ff),e(He,Mf),e(He,rt),y(Os,rt,null),e(rt,Ef),e(rt,ro),e(ro,zf),e(ro,ca),e(ca,qf),e(ro,Cf),e(ro,Bi),e(Bi,Of),e(ro,jf),e(rt,Pf),y(Jo,rt,null),e(rt,Nf),y(Xo,rt,null),f(o,cc,g),f(o,ao,g),e(ao,Yo),e(Yo,Hi),y(js,Hi,null),e(ao,Af),e(ao,Ri),e(Ri,If),f(o,hc,g),f(o,Re,g),y(Ps,Re,null),e(Re,Sf),e(Re,Vi),e(Vi,Df),e(Re,Wf),e(Re,Ns),e(Ns,Qf),e(Ns,ha),e(ha,Uf),e(Ns,Bf),e(Re,Hf),e(Re,As),e(As,Rf),e(As,Is),e(Is,Vf),e(As,Gf),e(Re,Kf),e(Re,Ne),y(Ss,Ne,null),e(Ne,Jf),e(Ne,io),e(io,Xf),e(io,ma),e(ma,Yf),e(io,Zf),e(io,Gi),e(Gi,eg),e(io,tg),e(Ne,og),y(Zo,Ne,null),e(Ne,ng),y(en,Ne,null),e(Ne,sg),y(tn,Ne,null),e(Ne,rg),y(on,Ne,null),e(Ne,ag),y(nn,Ne,null),f(o,mc,g),f(o,lo,g),e(lo,sn),e(sn,Ki),y(Ds,Ki,null),e(lo,ig),e(lo,Ji),e(Ji,lg),f(o,pc,g),f(o,Ve,g),y(Ws,Ve,null),e(Ve,dg),e(Ve,Xi),e(Xi,cg),e(Ve,hg),e(Ve,Qs),e(Qs,mg),e(Qs,pa),e(pa,pg),e(Qs,fg),e(Ve,gg),e(Ve,Us),e(Us,ug),e(Us,Bs),e(Bs,_g),e(Us,wg),e(Ve,kg),e(Ve,at),y(Hs,at,null),e(at,bg),e(at,co),e(co,vg),e(co,fa),e(fa,Tg),e(co,yg),e(co,Yi),e(Yi,$g),e(co,Lg),e(at,xg),y(rn,at,null),e(at,Fg),y(an,at,null),f(o,fc,g),f(o,ho,g),e(ho,ln),e(ln,Zi),y(Rs,Zi,null),e(ho,Mg),e(ho,el),e(el,Eg),f(o,gc,g),f(o,Ge,g),y(Vs,Ge,null),e(Ge,zg),e(Ge,tl),e(tl,qg),e(Ge,Cg),e(Ge,Gs),e(Gs,Og),e(Gs,ga),e(ga,jg),e(Gs,Pg),e(Ge,Ng),e(Ge,Ks),e(Ks,Ag),e(Ks,Js),e(Js,Ig),e(Ks,Sg),e(Ge,Dg),e(Ge,Xe),y(Xs,Xe,null),e(Xe,Wg),e(Xe,mo),e(mo,Qg),e(mo,ua),e(ua,Ug),e(mo,Bg),e(mo,ol),e(ol,Hg),e(mo,Rg),e(Xe,Vg),y(dn,Xe,null),e(Xe,Gg),y(cn,Xe,null),e(Xe,Kg),y(hn,Xe,null),f(o,uc,g),f(o,po,g),e(po,mn),e(mn,nl),y(Ys,nl,null),e(po,Jg),e(po,sl),e(sl,Xg),f(o,_c,g),f(o,Ke,g),y(Zs,Ke,null),e(Ke,Yg),e(Ke,fo),e(fo,Zg),e(fo,rl),e(rl,eu),e(fo,tu),e(fo,al),e(al,ou),e(fo,nu),e(Ke,su),e(Ke,er),e(er,ru),e(er,_a),e(_a,au),e(er,iu),e(Ke,lu),e(Ke,tr),e(tr,du),e(tr,or),e(or,cu),e(tr,hu),e(Ke,mu),e(Ke,it),y(nr,it,null),e(it,pu),e(it,go),e(go,fu),e(go,wa),e(wa,gu),e(go,uu),e(go,il),e(il,_u),e(go,wu),e(it,ku),y(pn,it,null),e(it,bu),y(fn,it,null),f(o,wc,g),f(o,uo,g),e(uo,gn),e(gn,ll),y(sr,ll,null),e(uo,vu),e(uo,dl),e(dl,Tu),f(o,kc,g),f(o,Ee,g),y(rr,Ee,null),e(Ee,yu),e(Ee,cl),e(cl,$u),e(Ee,Lu),e(Ee,ar),e(ar,xu),e(ar,ka),e(ka,Fu),e(ar,Mu),e(Ee,Eu),e(Ee,ir),e(ir,zu),e(ir,lr),e(lr,qu),e(ir,Cu),e(Ee,Ou),y(un,Ee,null),e(Ee,ju),e(Ee,_o),e(_o,Pu),e(_o,ba),e(ba,Nu),e(_o,Au),e(_o,dr),e(dr,Iu),e(_o,Su),e(Ee,Du),e(Ee,cr),e(cr,Wu),e(cr,hl),e(hl,Qu),e(cr,Uu),e(Ee,Bu),e(Ee,kt),y(hr,kt,null),e(kt,Hu),e(kt,wo),e(wo,Ru),e(wo,va),e(va,Vu),e(wo,Gu),e(wo,ml),e(ml,Ku),e(wo,Ju),e(kt,Xu),y(_n,kt,null),f(o,bc,g),f(o,ko,g),e(ko,wn),e(wn,pl),y(mr,pl,null),e(ko,Yu),e(ko,fl),e(fl,Zu),f(o,vc,g),f(o,Ie,g),y(pr,Ie,null),e(Ie,e_),e(Ie,fr),e(fr,t_),e(fr,gl),e(gl,o_),e(fr,n_),e(Ie,s_),e(Ie,gr),e(gr,r_),e(gr,Ta),e(Ta,a_),e(gr,i_),e(Ie,l_),e(Ie,ur),e(ur,d_),e(ur,_r),e(_r,c_),e(ur,h_),e(Ie,m_),y(kn,Ie,null),e(Ie,p_),e(Ie,Ye),y(wr,Ye,null),e(Ye,f_),e(Ye,bo),e(bo,g_),e(bo,ya),e(ya,u_),e(bo,__),e(bo,ul),e(ul,w_),e(bo,k_),e(Ye,b_),y(bn,Ye,null),e(Ye,v_),y(vn,Ye,null),e(Ye,T_),y(Tn,Ye,null),f(o,Tc,g),f(o,vo,g),e(vo,yn),e(yn,_l),y(kr,_l,null),e(vo,y_),e(vo,wl),e(wl,$_),f(o,yc,g),f(o,Se,g),y(br,Se,null),e(Se,L_),e(Se,To),e(To,x_),e(To,kl),e(kl,F_),e(To,M_),e(To,bl),e(bl,E_),e(To,z_),e(Se,q_),e(Se,vr),e(vr,C_),e(vr,$a),e($a,O_),e(vr,j_),e(Se,P_),e(Se,Tr),e(Tr,N_),e(Tr,yr),e(yr,A_),e(Tr,I_),e(Se,S_),y($n,Se,null),e(Se,D_),e(Se,Ze),y($r,Ze,null),e(Ze,W_),e(Ze,yo),e(yo,Q_),e(yo,La),e(La,U_),e(yo,B_),e(yo,vl),e(vl,H_),e(yo,R_),e(Ze,V_),y(Ln,Ze,null),e(Ze,G_),y(xn,Ze,null),e(Ze,K_),y(Fn,Ze,null),f(o,$c,g),f(o,$o,g),e($o,Mn),e(Mn,Tl),y(Lr,Tl,null),e($o,J_),e($o,yl),e(yl,X_),f(o,Lc,g),f(o,De,g),y(xr,De,null),e(De,Y_),e(De,$l),e($l,Z_),e(De,ew),e(De,Fr),e(Fr,tw),e(Fr,xa),e(xa,ow),e(Fr,nw),e(De,sw),e(De,Mr),e(Mr,rw),e(Mr,Er),e(Er,aw),e(Mr,iw),e(De,lw),y(En,De,null),e(De,dw),e(De,et),y(zr,et,null),e(et,cw),e(et,Lo),e(Lo,hw),e(Lo,Fa),e(Fa,mw),e(Lo,pw),e(Lo,Ll),e(Ll,fw),e(Lo,gw),e(et,uw),y(zn,et,null),e(et,_w),y(qn,et,null),e(et,ww),y(Cn,et,null),f(o,xc,g),f(o,xo,g),e(xo,On),e(On,xl),y(qr,xl,null),e(xo,kw),e(xo,Fl),e(Fl,bw),f(o,Fc,g),f(o,We,g),y(Cr,We,null),e(We,vw),e(We,Ml),e(Ml,Tw),e(We,yw),e(We,Or),e(Or,$w),e(Or,Ma),e(Ma,Lw),e(Or,xw),e(We,Fw),e(We,jr),e(jr,Mw),e(jr,Pr),e(Pr,Ew),e(jr,zw),e(We,qw),y(jn,We,null),e(We,Cw),e(We,tt),y(Nr,tt,null),e(tt,Ow),e(tt,Fo),e(Fo,jw),e(Fo,Ea),e(Ea,Pw),e(Fo,Nw),e(Fo,El),e(El,Aw),e(Fo,Iw),e(tt,Sw),y(Pn,tt,null),e(tt,Dw),y(Nn,tt,null),e(tt,Ww),y(An,tt,null),f(o,Mc,g),f(o,Mo,g),e(Mo,In),e(In,zl),y(Ar,zl,null),e(Mo,Qw),e(Mo,ql),e(ql,Uw),f(o,Ec,g),f(o,Qe,g),y(Ir,Qe,null),e(Qe,Bw),e(Qe,Cl),e(Cl,Hw),e(Qe,Rw),e(Qe,Sr),e(Sr,Vw),e(Sr,za),e(za,Gw),e(Sr,Kw),e(Qe,Jw),e(Qe,Dr),e(Dr,Xw),e(Dr,Wr),e(Wr,Yw),e(Dr,Zw),e(Qe,ek),y(Sn,Qe,null),e(Qe,tk),e(Qe,lt),y(Qr,lt,null),e(lt,ok),e(lt,Eo),e(Eo,nk),e(Eo,qa),e(qa,sk),e(Eo,rk),e(Eo,Ol),e(Ol,ak),e(Eo,ik),e(lt,lk),y(Dn,lt,null),e(lt,dk),y(Wn,lt,null),zc=!0},p(o,[g]){const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:o}),Do.$set(Ur);const jl={};g&2&&(jl.$$scope={dirty:g,ctx:o}),Vo.$set(jl);const Pl={};g&2&&(Pl.$$scope={dirty:g,ctx:o}),Go.$set(Pl);const Nl={};g&2&&(Nl.$$scope={dirty:g,ctx:o}),Jo.$set(Nl);const Br={};g&2&&(Br.$$scope={dirty:g,ctx:o}),Xo.$set(Br);const Al={};g&2&&(Al.$$scope={dirty:g,ctx:o}),Zo.$set(Al);const Il={};g&2&&(Il.$$scope={dirty:g,ctx:o}),en.$set(Il);const Sl={};g&2&&(Sl.$$scope={dirty:g,ctx:o}),tn.$set(Sl);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:o}),on.$set(Hr);const Dl={};g&2&&(Dl.$$scope={dirty:g,ctx:o}),nn.$set(Dl);const Wl={};g&2&&(Wl.$$scope={dirty:g,ctx:o}),rn.$set(Wl);const Ql={};g&2&&(Ql.$$scope={dirty:g,ctx:o}),an.$set(Ql);const Ul={};g&2&&(Ul.$$scope={dirty:g,ctx:o}),dn.$set(Ul);const Bl={};g&2&&(Bl.$$scope={dirty:g,ctx:o}),cn.$set(Bl);const Hl={};g&2&&(Hl.$$scope={dirty:g,ctx:o}),hn.$set(Hl);const ut={};g&2&&(ut.$$scope={dirty:g,ctx:o}),pn.$set(ut);const Rl={};g&2&&(Rl.$$scope={dirty:g,ctx:o}),fn.$set(Rl);const Vl={};g&2&&(Vl.$$scope={dirty:g,ctx:o}),un.$set(Vl);const Gl={};g&2&&(Gl.$$scope={dirty:g,ctx:o}),_n.$set(Gl);const zo={};g&2&&(zo.$$scope={dirty:g,ctx:o}),kn.$set(zo);const Kl={};g&2&&(Kl.$$scope={dirty:g,ctx:o}),bn.$set(Kl);const Jl={};g&2&&(Jl.$$scope={dirty:g,ctx:o}),vn.$set(Jl);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:o}),Tn.$set(Rr);const Xl={};g&2&&(Xl.$$scope={dirty:g,ctx:o}),$n.$set(Xl);const Yl={};g&2&&(Yl.$$scope={dirty:g,ctx:o}),Ln.$set(Yl);const Zl={};g&2&&(Zl.$$scope={dirty:g,ctx:o}),xn.$set(Zl);const ze={};g&2&&(ze.$$scope={dirty:g,ctx:o}),Fn.$set(ze);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:o}),En.$set(ed);const td={};g&2&&(td.$$scope={dirty:g,ctx:o}),zn.$set(td);const od={};g&2&&(od.$$scope={dirty:g,ctx:o}),qn.$set(od);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:o}),Cn.$set(nd);const qo={};g&2&&(qo.$$scope={dirty:g,ctx:o}),jn.$set(qo);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:o}),Pn.$set(sd);const Co={};g&2&&(Co.$$scope={dirty:g,ctx:o}),Nn.$set(Co);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:o}),An.$set(rd);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:o}),Sn.$set(ad);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),Dn.$set(Vr);const id={};g&2&&(id.$$scope={dirty:g,ctx:o}),Wn.$set(id)},i(o){zc||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(oe.$$.fragment,o),$(Gn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Do.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(ps.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(ws.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(xs.$$.fragment,o),$(Vo.$$.fragment,o),$(Go.$$.fragment,o),$(Fs.$$.fragment,o),$(Ms.$$.fragment,o),$(Os.$$.fragment,o),$(Jo.$$.fragment,o),$(Xo.$$.fragment,o),$(js.$$.fragment,o),$(Ps.$$.fragment,o),$(Ss.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(Ds.$$.fragment,o),$(Ws.$$.fragment,o),$(Hs.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(Xs.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(hn.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(nr.$$.fragment,o),$(pn.$$.fragment,o),$(fn.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),$(un.$$.fragment,o),$(hr.$$.fragment,o),$(_n.$$.fragment,o),$(mr.$$.fragment,o),$(pr.$$.fragment,o),$(kn.$$.fragment,o),$(wr.$$.fragment,o),$(bn.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(kr.$$.fragment,o),$(br.$$.fragment,o),$($n.$$.fragment,o),$($r.$$.fragment,o),$(Ln.$$.fragment,o),$(xn.$$.fragment,o),$(Fn.$$.fragment,o),$(Lr.$$.fragment,o),$(xr.$$.fragment,o),$(En.$$.fragment,o),$(zr.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(qr.$$.fragment,o),$(Cr.$$.fragment,o),$(jn.$$.fragment,o),$(Nr.$$.fragment,o),$(Pn.$$.fragment,o),$(Nn.$$.fragment,o),$(An.$$.fragment,o),$(Ar.$$.fragment,o),$(Ir.$$.fragment,o),$(Sn.$$.fragment,o),$(Qr.$$.fragment,o),$(Dn.$$.fragment,o),$(Wn.$$.fragment,o),zc=!0)},o(o){L(l.$$.fragment,o),L(ee.$$.fragment,o),L(oe.$$.fragment,o),L(Gn.$$.fragment,o),L(Kn.$$.fragment,o),L(Jn.$$.fragment,o),L(Xn.$$.fragment,o),L(Do.$$.fragment,o),L(Zn.$$.fragment,o),L(es.$$.fragment,o),L(ts.$$.fragment,o),L(os.$$.fragment,o),L(ss.$$.fragment,o),L(rs.$$.fragment,o),L(as.$$.fragment,o),L(is.$$.fragment,o),L(ls.$$.fragment,o),L(ds.$$.fragment,o),L(cs.$$.fragment,o),L(hs.$$.fragment,o),L(ms.$$.fragment,o),L(ps.$$.fragment,o),L(fs.$$.fragment,o),L(gs.$$.fragment,o),L(us.$$.fragment,o),L(_s.$$.fragment,o),L(ws.$$.fragment,o),L(ks.$$.fragment,o),L(bs.$$.fragment,o),L(xs.$$.fragment,o),L(Vo.$$.fragment,o),L(Go.$$.fragment,o),L(Fs.$$.fragment,o),L(Ms.$$.fragment,o),L(Os.$$.fragment,o),L(Jo.$$.fragment,o),L(Xo.$$.fragment,o),L(js.$$.fragment,o),L(Ps.$$.fragment,o),L(Ss.$$.fragment,o),L(Zo.$$.fragment,o),L(en.$$.fragment,o),L(tn.$$.fragment,o),L(on.$$.fragment,o),L(nn.$$.fragment,o),L(Ds.$$.fragment,o),L(Ws.$$.fragment,o),L(Hs.$$.fragment,o),L(rn.$$.fragment,o),L(an.$$.fragment,o),L(Rs.$$.fragment,o),L(Vs.$$.fragment,o),L(Xs.$$.fragment,o),L(dn.$$.fragment,o),L(cn.$$.fragment,o),L(hn.$$.fragment,o),L(Ys.$$.fragment,o),L(Zs.$$.fragment,o),L(nr.$$.fragment,o),L(pn.$$.fragment,o),L(fn.$$.fragment,o),L(sr.$$.fragment,o),L(rr.$$.fragment,o),L(un.$$.fragment,o),L(hr.$$.fragment,o),L(_n.$$.fragment,o),L(mr.$$.fragment,o),L(pr.$$.fragment,o),L(kn.$$.fragment,o),L(wr.$$.fragment,o),L(bn.$$.fragment,o),L(vn.$$.fragment,o),L(Tn.$$.fragment,o),L(kr.$$.fragment,o),L(br.$$.fragment,o),L($n.$$.fragment,o),L($r.$$.fragment,o),L(Ln.$$.fragment,o),L(xn.$$.fragment,o),L(Fn.$$.fragment,o),L(Lr.$$.fragment,o),L(xr.$$.fragment,o),L(En.$$.fragment,o),L(zr.$$.fragment,o),L(zn.$$.fragment,o),L(qn.$$.fragment,o),L(Cn.$$.fragment,o),L(qr.$$.fragment,o),L(Cr.$$.fragment,o),L(jn.$$.fragment,o),L(Nr.$$.fragment,o),L(Pn.$$.fragment,o),L(Nn.$$.fragment,o),L(An.$$.fragment,o),L(Ar.$$.fragment,o),L(Ir.$$.fragment,o),L(Sn.$$.fragment,o),L(Qr.$$.fragment,o),L(Dn.$$.fragment,o),L(Wn.$$.fragment,o),zc=!1},d(o){t(d),o&&t(k),o&&t(m),x(l),o&&t(J),o&&t(z),x(ee),o&&t(le),o&&t(G),o&&t(O),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(C),o&&t(U),o&&t(re),o&&t(Te),o&&t(he),o&&t(ye),o&&t(I),x(oe),o&&t(hd),o&&t($e),o&&t(bd),o&&t(_t),o&&t(yd),o&&t(wt),o&&t($d),o&&t(Po),o&&t(Ld),o&&t(No),o&&t(xd),o&&t(Je),o&&t(Pd),o&&t(Ao),o&&t(Nd),o&&t(Ct),x(Gn),o&&t(Ad),o&&t(Ot),o&&t(Id),x(Kn,o),o&&t(Sd),o&&t(jt),x(Jn),o&&t(Dd),o&&t(Be),x(Xn),x(Do),o&&t(Wd),o&&t(It),x(Zn),o&&t(Qd),o&&t(ft),x(es),o&&t(Ud),o&&t(St),x(ts),o&&t(Bd),o&&t(gt),x(os),o&&t(Hd),o&&t(Dt),x(ss),o&&t(Rd),o&&t(Wt),x(rs),o&&t(Vd),o&&t(Qt),x(as),o&&t(Gd),o&&t(Ut),x(is),o&&t(Kd),o&&t(Bt),x(ls),o&&t(Jd),o&&t(Ht),x(ds),o&&t(Xd),o&&t(Rt),x(cs),o&&t(Yd),o&&t(Vt),x(hs),o&&t(Zd),o&&t(Gt),x(ms),o&&t(ec),o&&t(Kt),x(ps),o&&t(tc),o&&t(Jt),x(fs),o&&t(oc),o&&t(Xt),x(gs),o&&t(nc),o&&t(Yt),x(us),o&&t(sc),o&&t(Zt),x(_s),o&&t(rc),o&&t(eo),x(ws),o&&t(ac),o&&t(to),x(ks),o&&t(ic),o&&t(Pe),x(bs),x(xs),x(Vo),x(Go),o&&t(lc),o&&t(so),x(Fs),o&&t(dc),o&&t(He),x(Ms),x(Os),x(Jo),x(Xo),o&&t(cc),o&&t(ao),x(js),o&&t(hc),o&&t(Re),x(Ps),x(Ss),x(Zo),x(en),x(tn),x(on),x(nn),o&&t(mc),o&&t(lo),x(Ds),o&&t(pc),o&&t(Ve),x(Ws),x(Hs),x(rn),x(an),o&&t(fc),o&&t(ho),x(Rs),o&&t(gc),o&&t(Ge),x(Vs),x(Xs),x(dn),x(cn),x(hn),o&&t(uc),o&&t(po),x(Ys),o&&t(_c),o&&t(Ke),x(Zs),x(nr),x(pn),x(fn),o&&t(wc),o&&t(uo),x(sr),o&&t(kc),o&&t(Ee),x(rr),x(un),x(hr),x(_n),o&&t(bc),o&&t(ko),x(mr),o&&t(vc),o&&t(Ie),x(pr),x(kn),x(wr),x(bn),x(vn),x(Tn),o&&t(Tc),o&&t(vo),x(kr),o&&t(yc),o&&t(Se),x(br),x($n),x($r),x(Ln),x(xn),x(Fn),o&&t($c),o&&t($o),x(Lr),o&&t(Lc),o&&t(De),x(xr),x(En),x(zr),x(zn),x(qn),x(Cn),o&&t(xc),o&&t(xo),x(qr),o&&t(Fc),o&&t(We),x(Cr),x(jn),x(Nr),x(Pn),x(Nn),x(An),o&&t(Mc),o&&t(Mo),x(Ar),o&&t(Ec),o&&t(Qe),x(Ir),x(Sn),x(Qr),x(Dn),x(Wn)}}}const XT={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function YT(M){return hT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ry extends iT{constructor(d){super();lT(this,d,YT,JT,dT,{})}}export{ry as default,XT as metadata};
