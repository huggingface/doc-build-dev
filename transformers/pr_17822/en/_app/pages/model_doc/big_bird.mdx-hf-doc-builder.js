import{S as hx,i as mx,s as gx,e as n,k as p,w as B,t as a,M as ux,c as s,d as t,m as h,a as r,x as v,h as i,b as c,G as e,g as k,y,q as $,o as T,B as w,v as fx,L as E}from"../../chunks/vendor-hf-doc-builder.js";import{T as G}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as j}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as M}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function _x(x){let d,_,g,u,b;return u=new j({props:{code:"",highlighted:""}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function bx(x){let d,_,g,u,b;return u=new j({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),_=a("sequence pair mask has the following format:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"sequence pair mask has the following format:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function kx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Bx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function vx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function yx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function $x(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Tx(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForCausalLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function wx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function xx(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForMaskedLM
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")
squad_ds = load_dataset("squad_v2", split="train")
# select random long article
LONG_ARTICLE_TARGET = squad_ds[81514]["context"]
# select random sentence
LONG_ARTICLE_TARGET[332:398]

# add mask_token
LONG_ARTICLE_TO_MASK = LONG_ARTICLE_TARGET.replace("maximum", "[MASK]")
inputs = tokenizer(LONG_ARTICLE_TO_MASK, return_tensors="pt")
# long article input
list(inputs["input_ids"].shape)

with torch.no_grad():
    logits = model(**inputs).logits
# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]
predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random long article</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TARGET = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random sentence</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TARGET[<span class="hljs-number">332</span>:<span class="hljs-number">398</span>]
<span class="hljs-string">&#x27;the highest values are very close to the theoretical maximum value&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE_TO_MASK = LONG_ARTICLE_TARGET.replace(<span class="hljs-string">&quot;maximum&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(LONG_ARTICLE_TO_MASK, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long article input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">919</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;maximum&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Fx(x){let d,_;return d=new j({props:{code:`labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(LONG_ARTICLE_TARGET, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.08</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function qx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function zx(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForSequenceClassification
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("l-yohai/bigbird-roberta-base-mnli")
model = BigBirdForSequenceClassification.from_pretrained("l-yohai/bigbird-roberta-base-mnli")
squad_ds = load_dataset("squad_v2", split="train")
LONG_ARTICLE = squad_ds[81514]["context"]
inputs = tokenizer(LONG_ARTICLE, return_tensors="pt")
# long input article
list(inputs["input_ids"].shape)

with torch.no_grad():
    logits = model(**inputs).logits
predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(LONG_ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long input article</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">919</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Mx(x){let d,_;return d=new j({props:{code:`num_labels = len(model.config.id2label)
model = BigBirdForSequenceClassification.from_pretrained(
    "l-yohai/bigbird-roberta-base-mnli", num_labels=num_labels
)
labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;l-yohai/bigbird-roberta-base-mnli&quot;</span>, num_labels=num_labels
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.13</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function Ex(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function jx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Px(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Cx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
import torch

tokenizer = BigBirdTokenizer.from_pretrained("vumichien/token-classification-bigbird-roberta-base-random")
model = BigBirdForTokenClassification.from_pretrained("vumichien/token-classification-bigbird-roberta-base-random")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/token-classification-bigbird-roberta-base-random&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/token-classification-bigbird-roberta-base-random&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Lx(x){let d,_;return d=new j({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function Ax(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Ox(x){let d,_,g,u,b;return u=new j({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForQuestionAnswering
from datasets import load_dataset

tokenizer = BigBirdTokenizer.from_pretrained("abhinavkulkarni/bigbird-roberta-base-finetuned-squad")
model = BigBirdForQuestionAnswering.from_pretrained("abhinavkulkarni/bigbird-roberta-base-finetuned-squad")
squad_ds = load_dataset("squad_v2", split="train")
# select random article and question
LONG_ARTICLE = squad_ds[81514]["context"]
QUESTION = squad_ds[81514]["question"]
QUESTION

inputs = tokenizer(QUESTION, LONG_ARTICLE, return_tensors="pt")
# long article and question input
list(inputs["input_ids"].shape)

with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()
predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;abhinavkulkarni/bigbird-roberta-base-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;abhinavkulkarni/bigbird-roberta-base-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad_ds = load_dataset(<span class="hljs-string">&quot;squad_v2&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># select random article and question</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>LONG_ARTICLE = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;context&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>QUESTION = squad_ds[<span class="hljs-number">81514</span>][<span class="hljs-string">&quot;question&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>QUESTION
<span class="hljs-string">&#x27;During daytime how high can the temperatures reach?&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(QUESTION, LONG_ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># long article and question input</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">929</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;80 \xB0C (176 \xB0F) or more&#x27;</span>`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Ix(x){let d,_;return d=new j({props:{code:`target_start_index, target_end_index = torch.tensor([130]), torch.tensor([132])
outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">130</span>]), torch.tensor([<span class="hljs-number">132</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.63</span>`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,u){y(d,g,u),_=!0},p:E,i(g){_||($(d.$$.fragment,g),_=!0)},o(g){T(d.$$.fragment,g),_=!1},d(g){w(d,g)}}}function Nx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Sx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Dx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Wx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Ux(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Qx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForCausalLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Rx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Gx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Hx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Vx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Jx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Kx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Xx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function Yx(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function Zx(x){let d,_,g,u,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),u=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);u=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,u),e(d,b)},d(l){l&&t(d)}}}function eF(x){let d,_,g,u,b;return u=new j({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForQuestionAnswering.from_pretrained("google/bigbird-roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(u.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),y(u,l,m),b=!0},p:E,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),w(u,l)}}}function tF(x){let d,_,g,u,b,l,m,F,_m,bp,Je,Qt,Ni,Pn,bm,Si,km,kp,Rt,Bm,Cn,vm,ym,Bp,Pa,$m,vp,Ca,Di,Tm,yp,La,wm,$p,R,Ln,xm,An,Fm,qm,zm,ce,Mm,Wi,Em,jm,Ui,Pm,Cm,Qi,Lm,Am,Ri,Om,Im,Nm,Gi,Sm,Dm,Hi,Wm,Um,On,Qm,Vi,Rm,Gm,Hm,Aa,Vm,Ji,Jm,Tp,Se,Km,In,Xm,Ym,Nn,Zm,eg,wp,Ke,Gt,Ki,Sn,tg,Xi,og,xp,P,Dn,ng,Xe,sg,Oa,rg,ag,Wn,ig,lg,dg,Ye,cg,Ia,pg,hg,Na,mg,gg,ug,Ht,fg,Yi,Zi,el,tl,_g,bg,ol,nl,Un,Vt,Jt,sl,Qn,kg,rl,Bg,vg,al,yg,$g,il,ll,Rn,Kt,Xt,dl,Gn,Tg,cl,wg,xg,pl,Fg,qg,hl,ml,gl,Yt,Zt,ul,Hn,zg,fl,Mg,Fp,Ze,eo,_l,Vn,Eg,bl,jg,qp,C,Jn,Pg,Kn,Cg,Xn,Lg,Ag,Og,Yn,Ig,Sa,Ng,Sg,Dg,De,Zn,Wg,kl,Ug,Qg,es,Da,Rg,Bl,Gg,Hg,Wa,Vg,vl,Jg,Kg,to,ts,Xg,os,Yg,yl,Zg,eu,tu,oo,ns,ou,et,nu,$l,su,ru,Tl,au,iu,lu,Ua,ss,zp,tt,no,wl,rs,du,xl,cu,Mp,H,as,pu,ze,hu,Fl,mu,gu,is,uu,fu,Qa,_u,bu,ku,We,ls,Bu,ql,vu,yu,ds,Ra,$u,zl,Tu,wu,Ga,xu,Ml,Fu,qu,fe,cs,zu,El,Mu,Eu,so,ju,jl,Pu,Cu,ro,ps,Lu,hs,Au,Pl,Ou,Iu,Ep,ot,ao,Cl,ms,Nu,Ll,Su,jp,nt,gs,Du,us,Wu,Ha,Uu,Qu,Pp,st,io,Al,fs,Ru,Ol,Gu,Cp,V,_s,Hu,bs,Vu,ks,Ju,Ku,Xu,Bs,Yu,vs,Zu,ef,tf,Q,of,Il,nf,sf,Nl,rf,af,Sl,lf,df,Dl,cf,pf,Wl,hf,mf,Ul,gf,uf,ff,_e,ys,_f,rt,bf,Va,kf,Bf,Ql,vf,yf,$f,lo,Tf,co,Lp,at,po,Rl,$s,wf,Gl,xf,Ap,it,Ts,Ff,be,ws,qf,lt,zf,Ja,Mf,Ef,Hl,jf,Pf,Cf,ho,Lf,mo,Op,dt,go,Vl,xs,Af,Jl,Of,Ip,Me,Fs,If,ct,Nf,Kl,Sf,Df,qs,Wf,Uf,Qf,ke,zs,Rf,pt,Gf,Ka,Hf,Vf,Xl,Jf,Kf,Xf,uo,Yf,fo,Np,ht,_o,Yl,Ms,Zf,Zl,e_,Sp,Ee,Es,t_,mt,o_,ed,n_,s_,js,r_,a_,i_,K,Ps,l_,gt,d_,Xa,c_,p_,td,h_,m_,g_,bo,u_,ko,f_,Bo,Dp,ut,vo,od,Cs,__,nd,b_,Wp,pe,Ls,k_,sd,B_,v_,As,y_,Os,$_,T_,w_,X,Is,x_,ft,F_,Ya,q_,z_,rd,M_,E_,j_,yo,P_,$o,C_,To,Up,_t,wo,ad,Ns,L_,id,A_,Qp,he,Ss,O_,ld,I_,N_,Ds,S_,Ws,D_,W_,U_,Be,Us,Q_,bt,R_,Za,G_,H_,dd,V_,J_,K_,xo,X_,Fo,Rp,kt,qo,cd,Qs,Y_,pd,Z_,Gp,me,Rs,eb,hd,tb,ob,Gs,nb,Hs,sb,rb,ab,Y,Vs,ib,Bt,lb,ei,db,cb,md,pb,hb,mb,zo,gb,Mo,ub,Eo,Hp,vt,jo,gd,Js,fb,ud,_b,Vp,ge,Ks,bb,yt,kb,fd,Bb,vb,_d,yb,$b,Tb,Xs,wb,Ys,xb,Fb,qb,Z,Zs,zb,$t,Mb,ti,Eb,jb,bd,Pb,Cb,Lb,Po,Ab,Co,Ob,Lo,Jp,Tt,Ao,kd,er,Ib,Bd,Nb,Kp,L,tr,Sb,vd,Db,Wb,or,Ub,oi,Qb,Rb,Gb,nr,Hb,sr,Vb,Jb,Kb,yd,Xb,Yb,je,$d,rr,Zb,ek,Td,ar,tk,ok,wd,ir,nk,sk,xd,lr,rk,ak,ve,dr,ik,wt,lk,Fd,dk,ck,qd,pk,hk,mk,Oo,gk,Io,Xp,xt,No,zd,cr,uk,Md,fk,Yp,A,pr,_k,Ft,bk,Ed,kk,Bk,jd,vk,yk,$k,hr,Tk,ni,wk,xk,Fk,mr,qk,gr,zk,Mk,Ek,Pd,jk,Pk,Pe,Cd,ur,Ck,Lk,Ld,fr,Ak,Ok,Ad,_r,Ik,Nk,Od,br,Sk,Dk,ye,kr,Wk,qt,Uk,Id,Qk,Rk,Nd,Gk,Hk,Vk,So,Jk,Do,Zp,zt,Wo,Sd,Br,Kk,Dd,Xk,eh,O,vr,Yk,Wd,Zk,eB,yr,tB,si,oB,nB,sB,$r,rB,Tr,aB,iB,lB,Ud,dB,cB,Ce,Qd,wr,pB,hB,Rd,xr,mB,gB,Gd,Fr,uB,fB,Hd,qr,_B,bB,$e,zr,kB,Mt,BB,Vd,vB,yB,Jd,$B,TB,wB,Uo,xB,Qo,th,Et,Ro,Kd,Mr,FB,Xd,qB,oh,I,Er,zB,jr,MB,Yd,EB,jB,PB,Pr,CB,ri,LB,AB,OB,Cr,IB,Lr,NB,SB,DB,Zd,WB,UB,Le,ec,Ar,QB,RB,tc,Or,GB,HB,oc,Ir,VB,JB,nc,Nr,KB,XB,Te,Sr,YB,jt,ZB,sc,ev,tv,rc,ov,nv,sv,Go,rv,Ho,nh,Pt,Vo,ac,Dr,av,ic,iv,sh,N,Wr,lv,lc,dv,cv,Ur,pv,ai,hv,mv,gv,Qr,uv,Rr,fv,_v,bv,dc,kv,Bv,Ae,cc,Gr,vv,yv,pc,Hr,$v,Tv,hc,Vr,wv,xv,mc,Jr,Fv,qv,we,Kr,zv,Ct,Mv,gc,Ev,jv,uc,Pv,Cv,Lv,Jo,Av,Ko,rh,Lt,Xo,fc,Xr,Ov,_c,Iv,ah,S,Yr,Nv,bc,Sv,Dv,Zr,Wv,ii,Uv,Qv,Rv,ea,Gv,ta,Hv,Vv,Jv,kc,Kv,Xv,Oe,Bc,oa,Yv,Zv,vc,na,e1,t1,yc,sa,o1,n1,$c,ra,s1,r1,xe,aa,a1,At,i1,Tc,l1,d1,wc,c1,p1,h1,Yo,m1,Zo,ih,Ot,en,xc,ia,g1,Fc,u1,lh,D,la,f1,qc,_1,b1,da,k1,li,B1,v1,y1,ca,$1,pa,T1,w1,x1,zc,F1,q1,Ie,Mc,ha,z1,M1,Ec,ma,E1,j1,jc,ga,P1,C1,Pc,ua,L1,A1,Fe,fa,O1,It,I1,Cc,N1,S1,Lc,D1,W1,U1,tn,Q1,on,dh,Nt,nn,Ac,_a,R1,Oc,G1,ch,W,ba,H1,St,V1,Ic,J1,K1,Nc,X1,Y1,Z1,ka,e2,di,t2,o2,n2,Ba,s2,va,r2,a2,i2,Sc,l2,d2,Ne,Dc,ya,c2,p2,Wc,$a,h2,m2,Uc,Ta,g2,u2,Qc,wa,f2,_2,qe,xa,b2,Dt,k2,ci,B2,v2,Rc,y2,$2,T2,sn,w2,rn,ph;return l=new z({}),Pn=new z({}),Sn=new z({}),Dn=new q({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BigBird model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BigBirdConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BigBirdConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BigBirdConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BigBirdConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BigBirdConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BigBirdConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BigBirdConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 1024 or 2048 or 4096).`,name:"max_position_embeddings"},{anchor:"transformers.BigBirdConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BigBirdConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BigBirdConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BigBirdConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BigBirdConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;block_sparse&quot;</code>) &#x2014;
Whether to use block sparse attention (with n complexity) as introduced in paper or original attention
layer (with n^2 complexity). Possible values are <code>&quot;original_full&quot;</code> and <code>&quot;block_sparse&quot;</code>.`,name:"attention_type"},{anchor:"transformers.BigBirdConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bias in query, key, value.`,name:"use_bias"},{anchor:"transformers.BigBirdConfig.rescale_embeddings",description:`<strong>rescale_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"rescale_embeddings"},{anchor:"transformers.BigBirdConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of each block. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"block_size"},{anchor:"transformers.BigBirdConfig.num_random_blocks",description:`<strong>num_random_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Each query is going to attend these many number of random blocks. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"num_random_blocks"},{anchor:"transformers.BigBirdConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/configuration_big_bird.py#L34"}}),Ht=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[_x]},$$scope:{ctx:x}}}),Qn=new z({}),Gn=new z({}),Hn=new z({}),Vn=new z({}),Jn=new q({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BigBirdTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird.py#L51"}}),Zn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird.py#L205",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird.py#L230",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird.py#L257",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new q({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird.py#L188"}}),rs=new z({}),as=new q({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L68"}}),ls=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L155",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L211",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),so=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[bx]},$$scope:{ctx:x}}}),ps=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L180",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new z({}),gs=new q({props:{name:"class transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L1856"}}),fs=new z({}),_s=new q({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L1928"}}),ys=new q({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L1985",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lo=new G({props:{$$slots:{default:[kx]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[Bx]},$$scope:{ctx:x}}}),$s=new z({}),Ts=new q({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2268"}}),ws=new q({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BigBirdForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. If specified, nsp loss will be
added to masked_lm loss. Input should be a sequence pair (see <code>input_ids</code> docstring) Indices should be in
<code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.BigBirdForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2284",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new G({props:{$$slots:{default:[vx]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[yx]},$$scope:{ctx:x}}}),xs=new z({}),Fs=new q({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2514"}}),zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BigBirdForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2536",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new G({props:{$$slots:{default:[$x]},$$scope:{ctx:x}}}),fo=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[Tx]},$$scope:{ctx:x}}}),Ms=new z({}),Es=new q({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2372"}}),Ps=new q({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2394",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new G({props:{$$slots:{default:[wx]},$$scope:{ctx:x}}}),ko=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[xx]},$$scope:{ctx:x}}}),Bo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[Fx]},$$scope:{ctx:x}}}),Cs=new z({}),Ls=new q({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2678"}}),Is=new q({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2689",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new G({props:{$$slots:{default:[qx]},$$scope:{ctx:x}}}),$o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[zx]},$$scope:{ctx:x}}}),To=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[Mx]},$$scope:{ctx:x}}}),Ns=new z({}),Ss=new q({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2806"}}),Us=new q({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2817",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new G({props:{$$slots:{default:[Ex]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[jx]},$$scope:{ctx:x}}}),Qs=new z({}),Rs=new q({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2900"}}),Vs=new q({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L2915",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new G({props:{$$slots:{default:[Px]},$$scope:{ctx:x}}}),Mo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[Cx]},$$scope:{ctx:x}}}),Eo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[Lx]},$$scope:{ctx:x}}}),Js=new z({}),Ks=new q({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L3005"}}),Zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_big_bird.py#L3019",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 1)</code>) \u2014 pooler output from BigBigModel</p>
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
<p><code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new G({props:{$$slots:{default:[Ax]},$$scope:{ctx:x}}}),Co=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[Ox]},$$scope:{ctx:x}}}),Lo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[Ix]},$$scope:{ctx:x}}}),er=new z({}),tr=new q({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1802"}}),dr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new G({props:{$$slots:{default:[Nx]},$$scope:{ctx:x}}}),Io=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[Sx]},$$scope:{ctx:x}}}),cr=new z({}),pr=new q({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1877"}}),kr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new G({props:{$$slots:{default:[Dx]},$$scope:{ctx:x}}}),Do=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[Wx]},$$scope:{ctx:x}}}),Br=new z({}),vr=new q({props:{name:"class transformers.FlaxBigBirdForCausalLM",anchor:"transformers.FlaxBigBirdForCausalLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2481"}}),zr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new G({props:{$$slots:{default:[Ux]},$$scope:{ctx:x}}}),Qo=new M({props:{anchor:"transformers.FlaxBigBirdForCausalLM.__call__.example",$$slots:{default:[Qx]},$$scope:{ctx:x}}}),Mr=new z({}),Er=new q({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1964"}}),Sr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new G({props:{$$slots:{default:[Rx]},$$scope:{ctx:x}}}),Ho=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[Gx]},$$scope:{ctx:x}}}),Dr=new z({}),Wr=new q({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2053"}}),Kr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new G({props:{$$slots:{default:[Hx]},$$scope:{ctx:x}}}),Ko=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[Vx]},$$scope:{ctx:x}}}),Xr=new z({}),Yr=new q({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2130"}}),aa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new G({props:{$$slots:{default:[Jx]},$$scope:{ctx:x}}}),Zo=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[Kx]},$$scope:{ctx:x}}}),ia=new z({}),la=new q({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2223"}}),fa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17822/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new G({props:{$$slots:{default:[Xx]},$$scope:{ctx:x}}}),on=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[Yx]},$$scope:{ctx:x}}}),_a=new z({}),ba=new q({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2322"}}),xa=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17822/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17822/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17822/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2325",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>pooled_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 pooled_output returned by FlaxBigBirdModel.</p>
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
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new G({props:{$$slots:{default:[Zx]},$$scope:{ctx:x}}}),rn=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[eF]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),g=n("h1"),u=n("a"),b=n("span"),B(l.$$.fragment),m=p(),F=n("span"),_m=a("BigBird"),bp=p(),Je=n("h2"),Qt=n("a"),Ni=n("span"),B(Pn.$$.fragment),bm=p(),Si=n("span"),km=a("Overview"),kp=p(),Rt=n("p"),Bm=a("The BigBird model was proposed in "),Cn=n("a"),vm=a("Big Bird: Transformers for Longer Sequences"),ym=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Bp=p(),Pa=n("p"),$m=a("The abstract from the paper is the following:"),vp=p(),Ca=n("p"),Di=n("em"),Tm=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),yp=p(),La=n("p"),wm=a("Tips:"),$p=p(),R=n("ul"),Ln=n("li"),xm=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),An=n("a"),Fm=a("this blog post"),qm=a("."),zm=p(),ce=n("li"),Mm=a("BigBird comes with 2 implementations: "),Wi=n("strong"),Em=a("original_full"),jm=a(" & "),Ui=n("strong"),Pm=a("block_sparse"),Cm=a(`. For the sequence length < 1024, using
`),Qi=n("strong"),Lm=a("original_full"),Am=a(" is advised as there is no benefit in using "),Ri=n("strong"),Om=a("block_sparse"),Im=a(" attention."),Nm=p(),Gi=n("li"),Sm=a("The code currently uses window size of 3 blocks and 2 global blocks."),Dm=p(),Hi=n("li"),Wm=a("Sequence length must be divisible by block size."),Um=p(),On=n("li"),Qm=a("Current implementation supports only "),Vi=n("strong"),Rm=a("ITC"),Gm=a("."),Hm=p(),Aa=n("li"),Vm=a("Current implementation doesn\u2019t support "),Ji=n("strong"),Jm=a("num_random_blocks = 0"),Tp=p(),Se=n("p"),Km=a("This model was contributed by "),In=n("a"),Xm=a("vasudevgupta"),Ym=a(`. The original code can be found
`),Nn=n("a"),Zm=a("here"),eg=a("."),wp=p(),Ke=n("h2"),Gt=n("a"),Ki=n("span"),B(Sn.$$.fragment),tg=p(),Xi=n("span"),og=a("BigBirdConfig"),xp=p(),P=n("div"),B(Dn.$$.fragment),ng=p(),Xe=n("p"),sg=a("This is the configuration class to store the configuration of a "),Oa=n("a"),rg=a("BigBirdModel"),ag=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Wn=n("a"),ig=a("google/bigbird-roberta-base"),lg=a(" architecture."),dg=p(),Ye=n("p"),cg=a("Configuration objects inherit from "),Ia=n("a"),pg=a("PretrainedConfig"),hg=a(` and can be used to control the model outputs. Read the
documentation from `),Na=n("a"),mg=a("PretrainedConfig"),gg=a(" for more information."),ug=p(),B(Ht.$$.fragment),fg=p(),Yi=n("blockquote"),Zi=n("blockquote"),el=n("blockquote"),tl=n("p"),_g=a("from transformers import BigBirdModel, BigBirdConfig"),bg=p(),ol=n("blockquote"),nl=n("blockquote"),Un=n("blockquote"),Vt=n("h1"),Jt=n("a"),sl=n("span"),B(Qn.$$.fragment),kg=p(),rl=n("span"),Bg=a("Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),vg=p(),al=n("p"),yg=a("BigBirdConfig()"),$g=p(),il=n("blockquote"),ll=n("blockquote"),Rn=n("blockquote"),Kt=n("h1"),Xt=n("a"),dl=n("span"),B(Gn.$$.fragment),Tg=p(),cl=n("span"),wg=a("Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),xg=p(),pl=n("p"),Fg=a("BigBirdModel(configuration)"),qg=p(),hl=n("blockquote"),ml=n("blockquote"),gl=n("blockquote"),Yt=n("h1"),Zt=n("a"),ul=n("span"),B(Hn.$$.fragment),zg=p(),fl=n("span"),Mg=a("Accessing the model configuration >>> configuration = model.config"),Fp=p(),Ze=n("h2"),eo=n("a"),_l=n("span"),B(Vn.$$.fragment),Eg=p(),bl=n("span"),jg=a("BigBirdTokenizer"),qp=p(),C=n("div"),B(Jn.$$.fragment),Pg=p(),Kn=n("p"),Cg=a("Construct a BigBird tokenizer. Based on "),Xn=n("a"),Lg=a("SentencePiece"),Ag=a("."),Og=p(),Yn=n("p"),Ig=a("This tokenizer inherits from "),Sa=n("a"),Ng=a("PreTrainedTokenizer"),Sg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dg=p(),De=n("div"),B(Zn.$$.fragment),Wg=p(),kl=n("p"),Ug=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Qg=p(),es=n("ul"),Da=n("li"),Rg=a("single sequence: "),Bl=n("code"),Gg=a("[CLS] X [SEP]"),Hg=p(),Wa=n("li"),Vg=a("pair of sequences: "),vl=n("code"),Jg=a("[CLS] A [SEP] B [SEP]"),Kg=p(),to=n("div"),B(ts.$$.fragment),Xg=p(),os=n("p"),Yg=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yl=n("code"),Zg=a("prepare_for_model"),eu=a(" method."),tu=p(),oo=n("div"),B(ns.$$.fragment),ou=p(),et=n("p"),nu=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),$l=n("code"),su=a("token_ids_1"),ru=a(" is "),Tl=n("code"),au=a("None"),iu=a(", this method only returns the first portion of the mask (0s)."),lu=p(),Ua=n("div"),B(ss.$$.fragment),zp=p(),tt=n("h2"),no=n("a"),wl=n("span"),B(rs.$$.fragment),du=p(),xl=n("span"),cu=a("BigBirdTokenizerFast"),Mp=p(),H=n("div"),B(as.$$.fragment),pu=p(),ze=n("p"),hu=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Fl=n("em"),mu=a("tokenizers"),gu=a(` library). Based on
`),is=n("a"),uu=a("Unigram"),fu=a(`. This
tokenizer inherits from `),Qa=n("a"),_u=a("PreTrainedTokenizerFast"),bu=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),ku=p(),We=n("div"),B(ls.$$.fragment),Bu=p(),ql=n("p"),vu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),yu=p(),ds=n("ul"),Ra=n("li"),$u=a("single sequence: "),zl=n("code"),Tu=a("[CLS] X [SEP]"),wu=p(),Ga=n("li"),xu=a("pair of sequences: "),Ml=n("code"),Fu=a("[CLS] A [SEP] B [SEP]"),qu=p(),fe=n("div"),B(cs.$$.fragment),zu=p(),El=n("p"),Mu=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),Eu=p(),B(so.$$.fragment),ju=p(),jl=n("p"),Pu=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Cu=p(),ro=n("div"),B(ps.$$.fragment),Lu=p(),hs=n("p"),Au=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pl=n("code"),Ou=a("prepare_for_model"),Iu=a(" method."),Ep=p(),ot=n("h2"),ao=n("a"),Cl=n("span"),B(ms.$$.fragment),Nu=p(),Ll=n("span"),Su=a("BigBird specific outputs"),jp=p(),nt=n("div"),B(gs.$$.fragment),Du=p(),us=n("p"),Wu=a("Output type of "),Ha=n("a"),Uu=a("BigBirdForPreTraining"),Qu=a("."),Pp=p(),st=n("h2"),io=n("a"),Al=n("span"),B(fs.$$.fragment),Ru=p(),Ol=n("span"),Gu=a("BigBirdModel"),Cp=p(),V=n("div"),B(_s.$$.fragment),Hu=p(),bs=n("p"),Vu=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ks=n("a"),Ju=a("torch.nn.Module"),Ku=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xu=p(),Bs=n("p"),Yu=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),vs=n("a"),Zu=a(`Attention is
all you need`),ef=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),tf=p(),Q=n("p"),of=a("To behave as an decoder the model needs to be initialized with the "),Il=n("code"),nf=a("is_decoder"),sf=a(` argument of the configuration set
to `),Nl=n("code"),rf=a("True"),af=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),Sl=n("code"),lf=a("is_decoder"),df=a(` argument and
`),Dl=n("code"),cf=a("add_cross_attention"),pf=a(" set to "),Wl=n("code"),hf=a("True"),mf=a("; an "),Ul=n("code"),gf=a("encoder_hidden_states"),uf=a(" is then expected as an input to the forward pass."),ff=p(),_e=n("div"),B(ys.$$.fragment),_f=p(),rt=n("p"),bf=a("The "),Va=n("a"),kf=a("BigBirdModel"),Bf=a(" forward method, overrides the "),Ql=n("code"),vf=a("__call__"),yf=a(" special method."),$f=p(),B(lo.$$.fragment),Tf=p(),B(co.$$.fragment),Lp=p(),at=n("h2"),po=n("a"),Rl=n("span"),B($s.$$.fragment),wf=p(),Gl=n("span"),xf=a("BigBirdForPreTraining"),Ap=p(),it=n("div"),B(Ts.$$.fragment),Ff=p(),be=n("div"),B(ws.$$.fragment),qf=p(),lt=n("p"),zf=a("The "),Ja=n("a"),Mf=a("BigBirdForPreTraining"),Ef=a(" forward method, overrides the "),Hl=n("code"),jf=a("__call__"),Pf=a(" special method."),Cf=p(),B(ho.$$.fragment),Lf=p(),B(mo.$$.fragment),Op=p(),dt=n("h2"),go=n("a"),Vl=n("span"),B(xs.$$.fragment),Af=p(),Jl=n("span"),Of=a("BigBirdForCausalLM"),Ip=p(),Me=n("div"),B(Fs.$$.fragment),If=p(),ct=n("p"),Nf=a("BigBird Model with a "),Kl=n("code"),Sf=a("language modeling"),Df=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),qs=n("a"),Wf=a("torch.nn.Module"),Uf=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qf=p(),ke=n("div"),B(zs.$$.fragment),Rf=p(),pt=n("p"),Gf=a("The "),Ka=n("a"),Hf=a("BigBirdForCausalLM"),Vf=a(" forward method, overrides the "),Xl=n("code"),Jf=a("__call__"),Kf=a(" special method."),Xf=p(),B(uo.$$.fragment),Yf=p(),B(fo.$$.fragment),Np=p(),ht=n("h2"),_o=n("a"),Yl=n("span"),B(Ms.$$.fragment),Zf=p(),Zl=n("span"),e_=a("BigBirdForMaskedLM"),Sp=p(),Ee=n("div"),B(Es.$$.fragment),t_=p(),mt=n("p"),o_=a("BigBird Model with a "),ed=n("code"),n_=a("language modeling"),s_=a(` head on top.
This model is a PyTorch `),js=n("a"),r_=a("torch.nn.Module"),a_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),i_=p(),K=n("div"),B(Ps.$$.fragment),l_=p(),gt=n("p"),d_=a("The "),Xa=n("a"),c_=a("BigBirdForMaskedLM"),p_=a(" forward method, overrides the "),td=n("code"),h_=a("__call__"),m_=a(" special method."),g_=p(),B(bo.$$.fragment),u_=p(),B(ko.$$.fragment),f_=p(),B(Bo.$$.fragment),Dp=p(),ut=n("h2"),vo=n("a"),od=n("span"),B(Cs.$$.fragment),__=p(),nd=n("span"),b_=a("BigBirdForSequenceClassification"),Wp=p(),pe=n("div"),B(Ls.$$.fragment),k_=p(),sd=n("p"),B_=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),v_=p(),As=n("p"),y_=a("This model is a PyTorch "),Os=n("a"),$_=a("torch.nn.Module"),T_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),w_=p(),X=n("div"),B(Is.$$.fragment),x_=p(),ft=n("p"),F_=a("The "),Ya=n("a"),q_=a("BigBirdForSequenceClassification"),z_=a(" forward method, overrides the "),rd=n("code"),M_=a("__call__"),E_=a(" special method."),j_=p(),B(yo.$$.fragment),P_=p(),B($o.$$.fragment),C_=p(),B(To.$$.fragment),Up=p(),_t=n("h2"),wo=n("a"),ad=n("span"),B(Ns.$$.fragment),L_=p(),id=n("span"),A_=a("BigBirdForMultipleChoice"),Qp=p(),he=n("div"),B(Ss.$$.fragment),O_=p(),ld=n("p"),I_=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),N_=p(),Ds=n("p"),S_=a("This model is a PyTorch "),Ws=n("a"),D_=a("torch.nn.Module"),W_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),U_=p(),Be=n("div"),B(Us.$$.fragment),Q_=p(),bt=n("p"),R_=a("The "),Za=n("a"),G_=a("BigBirdForMultipleChoice"),H_=a(" forward method, overrides the "),dd=n("code"),V_=a("__call__"),J_=a(" special method."),K_=p(),B(xo.$$.fragment),X_=p(),B(Fo.$$.fragment),Rp=p(),kt=n("h2"),qo=n("a"),cd=n("span"),B(Qs.$$.fragment),Y_=p(),pd=n("span"),Z_=a("BigBirdForTokenClassification"),Gp=p(),me=n("div"),B(Rs.$$.fragment),eb=p(),hd=n("p"),tb=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ob=p(),Gs=n("p"),nb=a("This model is a PyTorch "),Hs=n("a"),sb=a("torch.nn.Module"),rb=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ab=p(),Y=n("div"),B(Vs.$$.fragment),ib=p(),Bt=n("p"),lb=a("The "),ei=n("a"),db=a("BigBirdForTokenClassification"),cb=a(" forward method, overrides the "),md=n("code"),pb=a("__call__"),hb=a(" special method."),mb=p(),B(zo.$$.fragment),gb=p(),B(Mo.$$.fragment),ub=p(),B(Eo.$$.fragment),Hp=p(),vt=n("h2"),jo=n("a"),gd=n("span"),B(Js.$$.fragment),fb=p(),ud=n("span"),_b=a("BigBirdForQuestionAnswering"),Vp=p(),ge=n("div"),B(Ks.$$.fragment),bb=p(),yt=n("p"),kb=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),fd=n("code"),Bb=a("span start logits"),vb=a(" and "),_d=n("code"),yb=a("span end logits"),$b=a(")."),Tb=p(),Xs=n("p"),wb=a("This model is a PyTorch "),Ys=n("a"),xb=a("torch.nn.Module"),Fb=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qb=p(),Z=n("div"),B(Zs.$$.fragment),zb=p(),$t=n("p"),Mb=a("The "),ti=n("a"),Eb=a("BigBirdForQuestionAnswering"),jb=a(" forward method, overrides the "),bd=n("code"),Pb=a("__call__"),Cb=a(" special method."),Lb=p(),B(Po.$$.fragment),Ab=p(),B(Co.$$.fragment),Ob=p(),B(Lo.$$.fragment),Jp=p(),Tt=n("h2"),Ao=n("a"),kd=n("span"),B(er.$$.fragment),Ib=p(),Bd=n("span"),Nb=a("FlaxBigBirdModel"),Kp=p(),L=n("div"),B(tr.$$.fragment),Sb=p(),vd=n("p"),Db=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),Wb=p(),or=n("p"),Ub=a("This model inherits from "),oi=n("a"),Qb=a("FlaxPreTrainedModel"),Rb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gb=p(),nr=n("p"),Hb=a("This model is also a Flax Linen "),sr=n("a"),Vb=a("flax.linen.Module"),Jb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kb=p(),yd=n("p"),Xb=a("Finally, this model supports inherent JAX features such as:"),Yb=p(),je=n("ul"),$d=n("li"),rr=n("a"),Zb=a("Just-In-Time (JIT) compilation"),ek=p(),Td=n("li"),ar=n("a"),tk=a("Automatic Differentiation"),ok=p(),wd=n("li"),ir=n("a"),nk=a("Vectorization"),sk=p(),xd=n("li"),lr=n("a"),rk=a("Parallelization"),ak=p(),ve=n("div"),B(dr.$$.fragment),ik=p(),wt=n("p"),lk=a("The "),Fd=n("code"),dk=a("FlaxBigBirdPreTrainedModel"),ck=a(" forward method, overrides the "),qd=n("code"),pk=a("__call__"),hk=a(" special method."),mk=p(),B(Oo.$$.fragment),gk=p(),B(Io.$$.fragment),Xp=p(),xt=n("h2"),No=n("a"),zd=n("span"),B(cr.$$.fragment),uk=p(),Md=n("span"),fk=a("FlaxBigBirdForPreTraining"),Yp=p(),A=n("div"),B(pr.$$.fragment),_k=p(),Ft=n("p"),bk=a("BigBird Model with two heads on top as done during the pretraining: a "),Ed=n("code"),kk=a("masked language modeling"),Bk=a(" head and a "),jd=n("code"),vk=a("next sentence prediction (classification)"),yk=a(" head."),$k=p(),hr=n("p"),Tk=a("This model inherits from "),ni=n("a"),wk=a("FlaxPreTrainedModel"),xk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fk=p(),mr=n("p"),qk=a("This model is also a Flax Linen "),gr=n("a"),zk=a("flax.linen.Module"),Mk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ek=p(),Pd=n("p"),jk=a("Finally, this model supports inherent JAX features such as:"),Pk=p(),Pe=n("ul"),Cd=n("li"),ur=n("a"),Ck=a("Just-In-Time (JIT) compilation"),Lk=p(),Ld=n("li"),fr=n("a"),Ak=a("Automatic Differentiation"),Ok=p(),Ad=n("li"),_r=n("a"),Ik=a("Vectorization"),Nk=p(),Od=n("li"),br=n("a"),Sk=a("Parallelization"),Dk=p(),ye=n("div"),B(kr.$$.fragment),Wk=p(),qt=n("p"),Uk=a("The "),Id=n("code"),Qk=a("FlaxBigBirdPreTrainedModel"),Rk=a(" forward method, overrides the "),Nd=n("code"),Gk=a("__call__"),Hk=a(" special method."),Vk=p(),B(So.$$.fragment),Jk=p(),B(Do.$$.fragment),Zp=p(),zt=n("h2"),Wo=n("a"),Sd=n("span"),B(Br.$$.fragment),Kk=p(),Dd=n("span"),Xk=a("FlaxBigBirdForCausalLM"),eh=p(),O=n("div"),B(vr.$$.fragment),Yk=p(),Wd=n("p"),Zk=a(`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),eB=p(),yr=n("p"),tB=a("This model inherits from "),si=n("a"),oB=a("FlaxPreTrainedModel"),nB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sB=p(),$r=n("p"),rB=a("This model is also a Flax Linen "),Tr=n("a"),aB=a("flax.linen.Module"),iB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lB=p(),Ud=n("p"),dB=a("Finally, this model supports inherent JAX features such as:"),cB=p(),Ce=n("ul"),Qd=n("li"),wr=n("a"),pB=a("Just-In-Time (JIT) compilation"),hB=p(),Rd=n("li"),xr=n("a"),mB=a("Automatic Differentiation"),gB=p(),Gd=n("li"),Fr=n("a"),uB=a("Vectorization"),fB=p(),Hd=n("li"),qr=n("a"),_B=a("Parallelization"),bB=p(),$e=n("div"),B(zr.$$.fragment),kB=p(),Mt=n("p"),BB=a("The "),Vd=n("code"),vB=a("FlaxBigBirdPreTrainedModel"),yB=a(" forward method, overrides the "),Jd=n("code"),$B=a("__call__"),TB=a(" special method."),wB=p(),B(Uo.$$.fragment),xB=p(),B(Qo.$$.fragment),th=p(),Et=n("h2"),Ro=n("a"),Kd=n("span"),B(Mr.$$.fragment),FB=p(),Xd=n("span"),qB=a("FlaxBigBirdForMaskedLM"),oh=p(),I=n("div"),B(Er.$$.fragment),zB=p(),jr=n("p"),MB=a("BigBird Model with a "),Yd=n("code"),EB=a("language modeling"),jB=a(" head on top."),PB=p(),Pr=n("p"),CB=a("This model inherits from "),ri=n("a"),LB=a("FlaxPreTrainedModel"),AB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),OB=p(),Cr=n("p"),IB=a("This model is also a Flax Linen "),Lr=n("a"),NB=a("flax.linen.Module"),SB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),DB=p(),Zd=n("p"),WB=a("Finally, this model supports inherent JAX features such as:"),UB=p(),Le=n("ul"),ec=n("li"),Ar=n("a"),QB=a("Just-In-Time (JIT) compilation"),RB=p(),tc=n("li"),Or=n("a"),GB=a("Automatic Differentiation"),HB=p(),oc=n("li"),Ir=n("a"),VB=a("Vectorization"),JB=p(),nc=n("li"),Nr=n("a"),KB=a("Parallelization"),XB=p(),Te=n("div"),B(Sr.$$.fragment),YB=p(),jt=n("p"),ZB=a("The "),sc=n("code"),ev=a("FlaxBigBirdPreTrainedModel"),tv=a(" forward method, overrides the "),rc=n("code"),ov=a("__call__"),nv=a(" special method."),sv=p(),B(Go.$$.fragment),rv=p(),B(Ho.$$.fragment),nh=p(),Pt=n("h2"),Vo=n("a"),ac=n("span"),B(Dr.$$.fragment),av=p(),ic=n("span"),iv=a("FlaxBigBirdForSequenceClassification"),sh=p(),N=n("div"),B(Wr.$$.fragment),lv=p(),lc=n("p"),dv=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cv=p(),Ur=n("p"),pv=a("This model inherits from "),ai=n("a"),hv=a("FlaxPreTrainedModel"),mv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gv=p(),Qr=n("p"),uv=a("This model is also a Flax Linen "),Rr=n("a"),fv=a("flax.linen.Module"),_v=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bv=p(),dc=n("p"),kv=a("Finally, this model supports inherent JAX features such as:"),Bv=p(),Ae=n("ul"),cc=n("li"),Gr=n("a"),vv=a("Just-In-Time (JIT) compilation"),yv=p(),pc=n("li"),Hr=n("a"),$v=a("Automatic Differentiation"),Tv=p(),hc=n("li"),Vr=n("a"),wv=a("Vectorization"),xv=p(),mc=n("li"),Jr=n("a"),Fv=a("Parallelization"),qv=p(),we=n("div"),B(Kr.$$.fragment),zv=p(),Ct=n("p"),Mv=a("The "),gc=n("code"),Ev=a("FlaxBigBirdPreTrainedModel"),jv=a(" forward method, overrides the "),uc=n("code"),Pv=a("__call__"),Cv=a(" special method."),Lv=p(),B(Jo.$$.fragment),Av=p(),B(Ko.$$.fragment),rh=p(),Lt=n("h2"),Xo=n("a"),fc=n("span"),B(Xr.$$.fragment),Ov=p(),_c=n("span"),Iv=a("FlaxBigBirdForMultipleChoice"),ah=p(),S=n("div"),B(Yr.$$.fragment),Nv=p(),bc=n("p"),Sv=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Dv=p(),Zr=n("p"),Wv=a("This model inherits from "),ii=n("a"),Uv=a("FlaxPreTrainedModel"),Qv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rv=p(),ea=n("p"),Gv=a("This model is also a Flax Linen "),ta=n("a"),Hv=a("flax.linen.Module"),Vv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jv=p(),kc=n("p"),Kv=a("Finally, this model supports inherent JAX features such as:"),Xv=p(),Oe=n("ul"),Bc=n("li"),oa=n("a"),Yv=a("Just-In-Time (JIT) compilation"),Zv=p(),vc=n("li"),na=n("a"),e1=a("Automatic Differentiation"),t1=p(),yc=n("li"),sa=n("a"),o1=a("Vectorization"),n1=p(),$c=n("li"),ra=n("a"),s1=a("Parallelization"),r1=p(),xe=n("div"),B(aa.$$.fragment),a1=p(),At=n("p"),i1=a("The "),Tc=n("code"),l1=a("FlaxBigBirdPreTrainedModel"),d1=a(" forward method, overrides the "),wc=n("code"),c1=a("__call__"),p1=a(" special method."),h1=p(),B(Yo.$$.fragment),m1=p(),B(Zo.$$.fragment),ih=p(),Ot=n("h2"),en=n("a"),xc=n("span"),B(ia.$$.fragment),g1=p(),Fc=n("span"),u1=a("FlaxBigBirdForTokenClassification"),lh=p(),D=n("div"),B(la.$$.fragment),f1=p(),qc=n("p"),_1=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),b1=p(),da=n("p"),k1=a("This model inherits from "),li=n("a"),B1=a("FlaxPreTrainedModel"),v1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),y1=p(),ca=n("p"),$1=a("This model is also a Flax Linen "),pa=n("a"),T1=a("flax.linen.Module"),w1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),x1=p(),zc=n("p"),F1=a("Finally, this model supports inherent JAX features such as:"),q1=p(),Ie=n("ul"),Mc=n("li"),ha=n("a"),z1=a("Just-In-Time (JIT) compilation"),M1=p(),Ec=n("li"),ma=n("a"),E1=a("Automatic Differentiation"),j1=p(),jc=n("li"),ga=n("a"),P1=a("Vectorization"),C1=p(),Pc=n("li"),ua=n("a"),L1=a("Parallelization"),A1=p(),Fe=n("div"),B(fa.$$.fragment),O1=p(),It=n("p"),I1=a("The "),Cc=n("code"),N1=a("FlaxBigBirdPreTrainedModel"),S1=a(" forward method, overrides the "),Lc=n("code"),D1=a("__call__"),W1=a(" special method."),U1=p(),B(tn.$$.fragment),Q1=p(),B(on.$$.fragment),dh=p(),Nt=n("h2"),nn=n("a"),Ac=n("span"),B(_a.$$.fragment),R1=p(),Oc=n("span"),G1=a("FlaxBigBirdForQuestionAnswering"),ch=p(),W=n("div"),B(ba.$$.fragment),H1=p(),St=n("p"),V1=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ic=n("code"),J1=a("span start logits"),K1=a(" and "),Nc=n("code"),X1=a("span end logits"),Y1=a(")."),Z1=p(),ka=n("p"),e2=a("This model inherits from "),di=n("a"),t2=a("FlaxPreTrainedModel"),o2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n2=p(),Ba=n("p"),s2=a("This model is also a Flax Linen "),va=n("a"),r2=a("flax.linen.Module"),a2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i2=p(),Sc=n("p"),l2=a("Finally, this model supports inherent JAX features such as:"),d2=p(),Ne=n("ul"),Dc=n("li"),ya=n("a"),c2=a("Just-In-Time (JIT) compilation"),p2=p(),Wc=n("li"),$a=n("a"),h2=a("Automatic Differentiation"),m2=p(),Uc=n("li"),Ta=n("a"),g2=a("Vectorization"),u2=p(),Qc=n("li"),wa=n("a"),f2=a("Parallelization"),_2=p(),qe=n("div"),B(xa.$$.fragment),b2=p(),Dt=n("p"),k2=a("The "),ci=n("a"),B2=a("FlaxBigBirdForQuestionAnswering"),v2=a(" forward method, overrides the "),Rc=n("code"),y2=a("__call__"),$2=a(" special method."),T2=p(),B(sn.$$.fragment),w2=p(),B(rn.$$.fragment),this.h()},l(o){const f=ux('[data-svelte="svelte-1phssyn"]',document.head);d=s(f,"META",{name:!0,content:!0}),f.forEach(t),_=h(o),g=s(o,"H1",{class:!0});var Fa=r(g);u=s(Fa,"A",{id:!0,class:!0,href:!0});var Gc=r(u);b=s(Gc,"SPAN",{});var Hc=r(b);v(l.$$.fragment,Hc),Hc.forEach(t),Gc.forEach(t),m=h(Fa),F=s(Fa,"SPAN",{});var Vc=r(F);_m=i(Vc,"BigBird"),Vc.forEach(t),Fa.forEach(t),bp=h(o),Je=s(o,"H2",{class:!0});var qa=r(Je);Qt=s(qa,"A",{id:!0,class:!0,href:!0});var Jc=r(Qt);Ni=s(Jc,"SPAN",{});var Kc=r(Ni);v(Pn.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),bm=h(qa),Si=s(qa,"SPAN",{});var Xc=r(Si);km=i(Xc,"Overview"),Xc.forEach(t),qa.forEach(t),kp=h(o),Rt=s(o,"P",{});var za=r(Rt);Bm=i(za,"The BigBird model was proposed in "),Cn=s(za,"A",{href:!0,rel:!0});var Yc=r(Cn);vm=i(Yc,"Big Bird: Transformers for Longer Sequences"),Yc.forEach(t),ym=i(za,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),za.forEach(t),Bp=h(o),Pa=s(o,"P",{});var Zc=r(Pa);$m=i(Zc,"The abstract from the paper is the following:"),Zc.forEach(t),vp=h(o),Ca=s(o,"P",{});var ep=r(Ca);Di=s(ep,"EM",{});var tp=r(Di);Tm=i(tp,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),tp.forEach(t),ep.forEach(t),yp=h(o),La=s(o,"P",{});var op=r(La);wm=i(op,"Tips:"),op.forEach(t),$p=h(o),R=s(o,"UL",{});var J=r(R);Ln=s(J,"LI",{});var Ma=r(Ln);xm=i(Ma,"For an in-detail explanation on how BigBird\u2019s attention works, see "),An=s(Ma,"A",{href:!0,rel:!0});var np=r(An);Fm=i(np,"this blog post"),np.forEach(t),qm=i(Ma,"."),Ma.forEach(t),zm=h(J),ce=s(J,"LI",{});var ue=r(ce);Mm=i(ue,"BigBird comes with 2 implementations: "),Wi=s(ue,"STRONG",{});var sp=r(Wi);Em=i(sp,"original_full"),sp.forEach(t),jm=i(ue," & "),Ui=s(ue,"STRONG",{});var rp=r(Ui);Pm=i(rp,"block_sparse"),rp.forEach(t),Cm=i(ue,`. For the sequence length < 1024, using
`),Qi=s(ue,"STRONG",{});var ap=r(Qi);Lm=i(ap,"original_full"),ap.forEach(t),Am=i(ue," is advised as there is no benefit in using "),Ri=s(ue,"STRONG",{});var ip=r(Ri);Om=i(ip,"block_sparse"),ip.forEach(t),Im=i(ue," attention."),ue.forEach(t),Nm=h(J),Gi=s(J,"LI",{});var lp=r(Gi);Sm=i(lp,"The code currently uses window size of 3 blocks and 2 global blocks."),lp.forEach(t),Dm=h(J),Hi=s(J,"LI",{});var dp=r(Hi);Wm=i(dp,"Sequence length must be divisible by block size."),dp.forEach(t),Um=h(J),On=s(J,"LI",{});var Ea=r(On);Qm=i(Ea,"Current implementation supports only "),Vi=s(Ea,"STRONG",{});var cp=r(Vi);Rm=i(cp,"ITC"),cp.forEach(t),Gm=i(Ea,"."),Ea.forEach(t),Hm=h(J),Aa=s(J,"LI",{});var pi=r(Aa);Vm=i(pi,"Current implementation doesn\u2019t support "),Ji=s(pi,"STRONG",{});var pp=r(Ji);Jm=i(pp,"num_random_blocks = 0"),pp.forEach(t),pi.forEach(t),J.forEach(t),Tp=h(o),Se=s(o,"P",{});var Wt=r(Se);Km=i(Wt,"This model was contributed by "),In=s(Wt,"A",{href:!0,rel:!0});var hp=r(In);Xm=i(hp,"vasudevgupta"),hp.forEach(t),Ym=i(Wt,`. The original code can be found
`),Nn=s(Wt,"A",{href:!0,rel:!0});var mp=r(Nn);Zm=i(mp,"here"),mp.forEach(t),eg=i(Wt,"."),Wt.forEach(t),wp=h(o),Ke=s(o,"H2",{class:!0});var ja=r(Ke);Gt=s(ja,"A",{id:!0,class:!0,href:!0});var gp=r(Gt);Ki=s(gp,"SPAN",{});var up=r(Ki);v(Sn.$$.fragment,up),up.forEach(t),gp.forEach(t),tg=h(ja),Xi=s(ja,"SPAN",{});var fp=r(Xi);og=i(fp,"BigBirdConfig"),fp.forEach(t),ja.forEach(t),xp=h(o),P=s(o,"DIV",{class:!0});var U=r(P);v(Dn.$$.fragment,U),ng=h(U),Xe=s(U,"P",{});var Ut=r(Xe);sg=i(Ut,"This is the configuration class to store the configuration of a "),Oa=s(Ut,"A",{href:!0});var _p=r(Oa);rg=i(_p,"BigBirdModel"),_p.forEach(t),ag=i(Ut,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Wn=s(Ut,"A",{href:!0,rel:!0});var M2=r(Wn);ig=i(M2,"google/bigbird-roberta-base"),M2.forEach(t),lg=i(Ut," architecture."),Ut.forEach(t),dg=h(U),Ye=s(U,"P",{});var hi=r(Ye);cg=i(hi,"Configuration objects inherit from "),Ia=s(hi,"A",{href:!0});var E2=r(Ia);pg=i(E2,"PretrainedConfig"),E2.forEach(t),hg=i(hi,` and can be used to control the model outputs. Read the
documentation from `),Na=s(hi,"A",{href:!0});var j2=r(Na);mg=i(j2,"PretrainedConfig"),j2.forEach(t),gg=i(hi," for more information."),hi.forEach(t),ug=h(U),v(Ht.$$.fragment,U),fg=h(U),Yi=s(U,"BLOCKQUOTE",{});var P2=r(Yi);Zi=s(P2,"BLOCKQUOTE",{});var C2=r(Zi);el=s(C2,"BLOCKQUOTE",{});var L2=r(el);tl=s(L2,"P",{});var A2=r(tl);_g=i(A2,"from transformers import BigBirdModel, BigBirdConfig"),A2.forEach(t),L2.forEach(t),C2.forEach(t),P2.forEach(t),bg=h(U),ol=s(U,"BLOCKQUOTE",{});var O2=r(ol);nl=s(O2,"BLOCKQUOTE",{});var I2=r(nl);Un=s(I2,"BLOCKQUOTE",{});var hh=r(Un);Vt=s(hh,"H1",{class:!0});var mh=r(Vt);Jt=s(mh,"A",{id:!0,class:!0,href:!0});var N2=r(Jt);sl=s(N2,"SPAN",{});var S2=r(sl);v(Qn.$$.fragment,S2),S2.forEach(t),N2.forEach(t),kg=h(mh),rl=s(mh,"SPAN",{});var D2=r(rl);Bg=i(D2,"Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),D2.forEach(t),mh.forEach(t),vg=h(hh),al=s(hh,"P",{});var W2=r(al);yg=i(W2,"BigBirdConfig()"),W2.forEach(t),hh.forEach(t),I2.forEach(t),O2.forEach(t),$g=h(U),il=s(U,"BLOCKQUOTE",{});var U2=r(il);ll=s(U2,"BLOCKQUOTE",{});var Q2=r(ll);Rn=s(Q2,"BLOCKQUOTE",{});var gh=r(Rn);Kt=s(gh,"H1",{class:!0});var uh=r(Kt);Xt=s(uh,"A",{id:!0,class:!0,href:!0});var R2=r(Xt);dl=s(R2,"SPAN",{});var G2=r(dl);v(Gn.$$.fragment,G2),G2.forEach(t),R2.forEach(t),Tg=h(uh),cl=s(uh,"SPAN",{});var H2=r(cl);wg=i(H2,"Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),H2.forEach(t),uh.forEach(t),xg=h(gh),pl=s(gh,"P",{});var V2=r(pl);Fg=i(V2,"BigBirdModel(configuration)"),V2.forEach(t),gh.forEach(t),Q2.forEach(t),U2.forEach(t),qg=h(U),hl=s(U,"BLOCKQUOTE",{});var J2=r(hl);ml=s(J2,"BLOCKQUOTE",{});var K2=r(ml);gl=s(K2,"BLOCKQUOTE",{});var X2=r(gl);Yt=s(X2,"H1",{class:!0});var fh=r(Yt);Zt=s(fh,"A",{id:!0,class:!0,href:!0});var Y2=r(Zt);ul=s(Y2,"SPAN",{});var Z2=r(ul);v(Hn.$$.fragment,Z2),Z2.forEach(t),Y2.forEach(t),zg=h(fh),fl=s(fh,"SPAN",{});var ey=r(fl);Mg=i(ey,"Accessing the model configuration >>> configuration = model.config"),ey.forEach(t),fh.forEach(t),X2.forEach(t),K2.forEach(t),J2.forEach(t),U.forEach(t),Fp=h(o),Ze=s(o,"H2",{class:!0});var _h=r(Ze);eo=s(_h,"A",{id:!0,class:!0,href:!0});var ty=r(eo);_l=s(ty,"SPAN",{});var oy=r(_l);v(Vn.$$.fragment,oy),oy.forEach(t),ty.forEach(t),Eg=h(_h),bl=s(_h,"SPAN",{});var ny=r(bl);jg=i(ny,"BigBirdTokenizer"),ny.forEach(t),_h.forEach(t),qp=h(o),C=s(o,"DIV",{class:!0});var ee=r(C);v(Jn.$$.fragment,ee),Pg=h(ee),Kn=s(ee,"P",{});var bh=r(Kn);Cg=i(bh,"Construct a BigBird tokenizer. Based on "),Xn=s(bh,"A",{href:!0,rel:!0});var sy=r(Xn);Lg=i(sy,"SentencePiece"),sy.forEach(t),Ag=i(bh,"."),bh.forEach(t),Og=h(ee),Yn=s(ee,"P",{});var kh=r(Yn);Ig=i(kh,"This tokenizer inherits from "),Sa=s(kh,"A",{href:!0});var ry=r(Sa);Ng=i(ry,"PreTrainedTokenizer"),ry.forEach(t),Sg=i(kh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kh.forEach(t),Dg=h(ee),De=s(ee,"DIV",{class:!0});var mi=r(De);v(Zn.$$.fragment,mi),Wg=h(mi),kl=s(mi,"P",{});var ay=r(kl);Ug=i(ay,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),ay.forEach(t),Qg=h(mi),es=s(mi,"UL",{});var Bh=r(es);Da=s(Bh,"LI",{});var x2=r(Da);Rg=i(x2,"single sequence: "),Bl=s(x2,"CODE",{});var iy=r(Bl);Gg=i(iy,"[CLS] X [SEP]"),iy.forEach(t),x2.forEach(t),Hg=h(Bh),Wa=s(Bh,"LI",{});var F2=r(Wa);Vg=i(F2,"pair of sequences: "),vl=s(F2,"CODE",{});var ly=r(vl);Jg=i(ly,"[CLS] A [SEP] B [SEP]"),ly.forEach(t),F2.forEach(t),Bh.forEach(t),mi.forEach(t),Kg=h(ee),to=s(ee,"DIV",{class:!0});var vh=r(to);v(ts.$$.fragment,vh),Xg=h(vh),os=s(vh,"P",{});var yh=r(os);Yg=i(yh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yl=s(yh,"CODE",{});var dy=r(yl);Zg=i(dy,"prepare_for_model"),dy.forEach(t),eu=i(yh," method."),yh.forEach(t),vh.forEach(t),tu=h(ee),oo=s(ee,"DIV",{class:!0});var $h=r(oo);v(ns.$$.fragment,$h),ou=h($h),et=s($h,"P",{});var gi=r(et);nu=i(gi,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),$l=s(gi,"CODE",{});var cy=r($l);su=i(cy,"token_ids_1"),cy.forEach(t),ru=i(gi," is "),Tl=s(gi,"CODE",{});var py=r(Tl);au=i(py,"None"),py.forEach(t),iu=i(gi,", this method only returns the first portion of the mask (0s)."),gi.forEach(t),$h.forEach(t),lu=h(ee),Ua=s(ee,"DIV",{class:!0});var hy=r(Ua);v(ss.$$.fragment,hy),hy.forEach(t),ee.forEach(t),zp=h(o),tt=s(o,"H2",{class:!0});var Th=r(tt);no=s(Th,"A",{id:!0,class:!0,href:!0});var my=r(no);wl=s(my,"SPAN",{});var gy=r(wl);v(rs.$$.fragment,gy),gy.forEach(t),my.forEach(t),du=h(Th),xl=s(Th,"SPAN",{});var uy=r(xl);cu=i(uy,"BigBirdTokenizerFast"),uy.forEach(t),Th.forEach(t),Mp=h(o),H=s(o,"DIV",{class:!0});var Ue=r(H);v(as.$$.fragment,Ue),pu=h(Ue),ze=s(Ue,"P",{});var an=r(ze);hu=i(an,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),Fl=s(an,"EM",{});var fy=r(Fl);mu=i(fy,"tokenizers"),fy.forEach(t),gu=i(an,` library). Based on
`),is=s(an,"A",{href:!0,rel:!0});var _y=r(is);uu=i(_y,"Unigram"),_y.forEach(t),fu=i(an,`. This
tokenizer inherits from `),Qa=s(an,"A",{href:!0});var by=r(Qa);_u=i(by,"PreTrainedTokenizerFast"),by.forEach(t),bu=i(an,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),an.forEach(t),ku=h(Ue),We=s(Ue,"DIV",{class:!0});var ui=r(We);v(ls.$$.fragment,ui),Bu=h(ui),ql=s(ui,"P",{});var ky=r(ql);vu=i(ky,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),ky.forEach(t),yu=h(ui),ds=s(ui,"UL",{});var wh=r(ds);Ra=s(wh,"LI",{});var q2=r(Ra);$u=i(q2,"single sequence: "),zl=s(q2,"CODE",{});var By=r(zl);Tu=i(By,"[CLS] X [SEP]"),By.forEach(t),q2.forEach(t),wu=h(wh),Ga=s(wh,"LI",{});var z2=r(Ga);xu=i(z2,"pair of sequences: "),Ml=s(z2,"CODE",{});var vy=r(Ml);Fu=i(vy,"[CLS] A [SEP] B [SEP]"),vy.forEach(t),z2.forEach(t),wh.forEach(t),ui.forEach(t),qu=h(Ue),fe=s(Ue,"DIV",{class:!0});var ln=r(fe);v(cs.$$.fragment,ln),zu=h(ln),El=s(ln,"P",{});var yy=r(El);Mu=i(yy,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),yy.forEach(t),Eu=h(ln),v(so.$$.fragment,ln),ju=h(ln),jl=s(ln,"P",{});var $y=r(jl);Pu=i($y,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),$y.forEach(t),ln.forEach(t),Cu=h(Ue),ro=s(Ue,"DIV",{class:!0});var xh=r(ro);v(ps.$$.fragment,xh),Lu=h(xh),hs=s(xh,"P",{});var Fh=r(hs);Au=i(Fh,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pl=s(Fh,"CODE",{});var Ty=r(Pl);Ou=i(Ty,"prepare_for_model"),Ty.forEach(t),Iu=i(Fh," method."),Fh.forEach(t),xh.forEach(t),Ue.forEach(t),Ep=h(o),ot=s(o,"H2",{class:!0});var qh=r(ot);ao=s(qh,"A",{id:!0,class:!0,href:!0});var wy=r(ao);Cl=s(wy,"SPAN",{});var xy=r(Cl);v(ms.$$.fragment,xy),xy.forEach(t),wy.forEach(t),Nu=h(qh),Ll=s(qh,"SPAN",{});var Fy=r(Ll);Su=i(Fy,"BigBird specific outputs"),Fy.forEach(t),qh.forEach(t),jp=h(o),nt=s(o,"DIV",{class:!0});var zh=r(nt);v(gs.$$.fragment,zh),Du=h(zh),us=s(zh,"P",{});var Mh=r(us);Wu=i(Mh,"Output type of "),Ha=s(Mh,"A",{href:!0});var qy=r(Ha);Uu=i(qy,"BigBirdForPreTraining"),qy.forEach(t),Qu=i(Mh,"."),Mh.forEach(t),zh.forEach(t),Pp=h(o),st=s(o,"H2",{class:!0});var Eh=r(st);io=s(Eh,"A",{id:!0,class:!0,href:!0});var zy=r(io);Al=s(zy,"SPAN",{});var My=r(Al);v(fs.$$.fragment,My),My.forEach(t),zy.forEach(t),Ru=h(Eh),Ol=s(Eh,"SPAN",{});var Ey=r(Ol);Gu=i(Ey,"BigBirdModel"),Ey.forEach(t),Eh.forEach(t),Cp=h(o),V=s(o,"DIV",{class:!0});var Qe=r(V);v(_s.$$.fragment,Qe),Hu=h(Qe),bs=s(Qe,"P",{});var jh=r(bs);Vu=i(jh,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ks=s(jh,"A",{href:!0,rel:!0});var jy=r(ks);Ju=i(jy,"torch.nn.Module"),jy.forEach(t),Ku=i(jh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jh.forEach(t),Xu=h(Qe),Bs=s(Qe,"P",{});var Ph=r(Bs);Yu=i(Ph,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),vs=s(Ph,"A",{href:!0,rel:!0});var Py=r(vs);Zu=i(Py,`Attention is
all you need`),Py.forEach(t),ef=i(Ph,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ph.forEach(t),tf=h(Qe),Q=s(Qe,"P",{});var te=r(Q);of=i(te,"To behave as an decoder the model needs to be initialized with the "),Il=s(te,"CODE",{});var Cy=r(Il);nf=i(Cy,"is_decoder"),Cy.forEach(t),sf=i(te,` argument of the configuration set
to `),Nl=s(te,"CODE",{});var Ly=r(Nl);rf=i(Ly,"True"),Ly.forEach(t),af=i(te,". To be used in a Seq2Seq model, the model needs to initialized with both "),Sl=s(te,"CODE",{});var Ay=r(Sl);lf=i(Ay,"is_decoder"),Ay.forEach(t),df=i(te,` argument and
`),Dl=s(te,"CODE",{});var Oy=r(Dl);cf=i(Oy,"add_cross_attention"),Oy.forEach(t),pf=i(te," set to "),Wl=s(te,"CODE",{});var Iy=r(Wl);hf=i(Iy,"True"),Iy.forEach(t),mf=i(te,"; an "),Ul=s(te,"CODE",{});var Ny=r(Ul);gf=i(Ny,"encoder_hidden_states"),Ny.forEach(t),uf=i(te," is then expected as an input to the forward pass."),te.forEach(t),ff=h(Qe),_e=s(Qe,"DIV",{class:!0});var dn=r(_e);v(ys.$$.fragment,dn),_f=h(dn),rt=s(dn,"P",{});var fi=r(rt);bf=i(fi,"The "),Va=s(fi,"A",{href:!0});var Sy=r(Va);kf=i(Sy,"BigBirdModel"),Sy.forEach(t),Bf=i(fi," forward method, overrides the "),Ql=s(fi,"CODE",{});var Dy=r(Ql);vf=i(Dy,"__call__"),Dy.forEach(t),yf=i(fi," special method."),fi.forEach(t),$f=h(dn),v(lo.$$.fragment,dn),Tf=h(dn),v(co.$$.fragment,dn),dn.forEach(t),Qe.forEach(t),Lp=h(o),at=s(o,"H2",{class:!0});var Ch=r(at);po=s(Ch,"A",{id:!0,class:!0,href:!0});var Wy=r(po);Rl=s(Wy,"SPAN",{});var Uy=r(Rl);v($s.$$.fragment,Uy),Uy.forEach(t),Wy.forEach(t),wf=h(Ch),Gl=s(Ch,"SPAN",{});var Qy=r(Gl);xf=i(Qy,"BigBirdForPreTraining"),Qy.forEach(t),Ch.forEach(t),Ap=h(o),it=s(o,"DIV",{class:!0});var Lh=r(it);v(Ts.$$.fragment,Lh),Ff=h(Lh),be=s(Lh,"DIV",{class:!0});var cn=r(be);v(ws.$$.fragment,cn),qf=h(cn),lt=s(cn,"P",{});var _i=r(lt);zf=i(_i,"The "),Ja=s(_i,"A",{href:!0});var Ry=r(Ja);Mf=i(Ry,"BigBirdForPreTraining"),Ry.forEach(t),Ef=i(_i," forward method, overrides the "),Hl=s(_i,"CODE",{});var Gy=r(Hl);jf=i(Gy,"__call__"),Gy.forEach(t),Pf=i(_i," special method."),_i.forEach(t),Cf=h(cn),v(ho.$$.fragment,cn),Lf=h(cn),v(mo.$$.fragment,cn),cn.forEach(t),Lh.forEach(t),Op=h(o),dt=s(o,"H2",{class:!0});var Ah=r(dt);go=s(Ah,"A",{id:!0,class:!0,href:!0});var Hy=r(go);Vl=s(Hy,"SPAN",{});var Vy=r(Vl);v(xs.$$.fragment,Vy),Vy.forEach(t),Hy.forEach(t),Af=h(Ah),Jl=s(Ah,"SPAN",{});var Jy=r(Jl);Of=i(Jy,"BigBirdForCausalLM"),Jy.forEach(t),Ah.forEach(t),Ip=h(o),Me=s(o,"DIV",{class:!0});var bi=r(Me);v(Fs.$$.fragment,bi),If=h(bi),ct=s(bi,"P",{});var ki=r(ct);Nf=i(ki,"BigBird Model with a "),Kl=s(ki,"CODE",{});var Ky=r(Kl);Sf=i(Ky,"language modeling"),Ky.forEach(t),Df=i(ki,` head on top for CLM fine-tuning.
This model is a PyTorch `),qs=s(ki,"A",{href:!0,rel:!0});var Xy=r(qs);Wf=i(Xy,"torch.nn.Module"),Xy.forEach(t),Uf=i(ki,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ki.forEach(t),Qf=h(bi),ke=s(bi,"DIV",{class:!0});var pn=r(ke);v(zs.$$.fragment,pn),Rf=h(pn),pt=s(pn,"P",{});var Bi=r(pt);Gf=i(Bi,"The "),Ka=s(Bi,"A",{href:!0});var Yy=r(Ka);Hf=i(Yy,"BigBirdForCausalLM"),Yy.forEach(t),Vf=i(Bi," forward method, overrides the "),Xl=s(Bi,"CODE",{});var Zy=r(Xl);Jf=i(Zy,"__call__"),Zy.forEach(t),Kf=i(Bi," special method."),Bi.forEach(t),Xf=h(pn),v(uo.$$.fragment,pn),Yf=h(pn),v(fo.$$.fragment,pn),pn.forEach(t),bi.forEach(t),Np=h(o),ht=s(o,"H2",{class:!0});var Oh=r(ht);_o=s(Oh,"A",{id:!0,class:!0,href:!0});var e$=r(_o);Yl=s(e$,"SPAN",{});var t$=r(Yl);v(Ms.$$.fragment,t$),t$.forEach(t),e$.forEach(t),Zf=h(Oh),Zl=s(Oh,"SPAN",{});var o$=r(Zl);e_=i(o$,"BigBirdForMaskedLM"),o$.forEach(t),Oh.forEach(t),Sp=h(o),Ee=s(o,"DIV",{class:!0});var vi=r(Ee);v(Es.$$.fragment,vi),t_=h(vi),mt=s(vi,"P",{});var yi=r(mt);o_=i(yi,"BigBird Model with a "),ed=s(yi,"CODE",{});var n$=r(ed);n_=i(n$,"language modeling"),n$.forEach(t),s_=i(yi,` head on top.
This model is a PyTorch `),js=s(yi,"A",{href:!0,rel:!0});var s$=r(js);r_=i(s$,"torch.nn.Module"),s$.forEach(t),a_=i(yi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yi.forEach(t),i_=h(vi),K=s(vi,"DIV",{class:!0});var Re=r(K);v(Ps.$$.fragment,Re),l_=h(Re),gt=s(Re,"P",{});var $i=r(gt);d_=i($i,"The "),Xa=s($i,"A",{href:!0});var r$=r(Xa);c_=i(r$,"BigBirdForMaskedLM"),r$.forEach(t),p_=i($i," forward method, overrides the "),td=s($i,"CODE",{});var a$=r(td);h_=i(a$,"__call__"),a$.forEach(t),m_=i($i," special method."),$i.forEach(t),g_=h(Re),v(bo.$$.fragment,Re),u_=h(Re),v(ko.$$.fragment,Re),f_=h(Re),v(Bo.$$.fragment,Re),Re.forEach(t),vi.forEach(t),Dp=h(o),ut=s(o,"H2",{class:!0});var Ih=r(ut);vo=s(Ih,"A",{id:!0,class:!0,href:!0});var i$=r(vo);od=s(i$,"SPAN",{});var l$=r(od);v(Cs.$$.fragment,l$),l$.forEach(t),i$.forEach(t),__=h(Ih),nd=s(Ih,"SPAN",{});var d$=r(nd);b_=i(d$,"BigBirdForSequenceClassification"),d$.forEach(t),Ih.forEach(t),Wp=h(o),pe=s(o,"DIV",{class:!0});var hn=r(pe);v(Ls.$$.fragment,hn),k_=h(hn),sd=s(hn,"P",{});var c$=r(sd);B_=i(c$,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),c$.forEach(t),v_=h(hn),As=s(hn,"P",{});var Nh=r(As);y_=i(Nh,"This model is a PyTorch "),Os=s(Nh,"A",{href:!0,rel:!0});var p$=r(Os);$_=i(p$,"torch.nn.Module"),p$.forEach(t),T_=i(Nh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nh.forEach(t),w_=h(hn),X=s(hn,"DIV",{class:!0});var Ge=r(X);v(Is.$$.fragment,Ge),x_=h(Ge),ft=s(Ge,"P",{});var Ti=r(ft);F_=i(Ti,"The "),Ya=s(Ti,"A",{href:!0});var h$=r(Ya);q_=i(h$,"BigBirdForSequenceClassification"),h$.forEach(t),z_=i(Ti," forward method, overrides the "),rd=s(Ti,"CODE",{});var m$=r(rd);M_=i(m$,"__call__"),m$.forEach(t),E_=i(Ti," special method."),Ti.forEach(t),j_=h(Ge),v(yo.$$.fragment,Ge),P_=h(Ge),v($o.$$.fragment,Ge),C_=h(Ge),v(To.$$.fragment,Ge),Ge.forEach(t),hn.forEach(t),Up=h(o),_t=s(o,"H2",{class:!0});var Sh=r(_t);wo=s(Sh,"A",{id:!0,class:!0,href:!0});var g$=r(wo);ad=s(g$,"SPAN",{});var u$=r(ad);v(Ns.$$.fragment,u$),u$.forEach(t),g$.forEach(t),L_=h(Sh),id=s(Sh,"SPAN",{});var f$=r(id);A_=i(f$,"BigBirdForMultipleChoice"),f$.forEach(t),Sh.forEach(t),Qp=h(o),he=s(o,"DIV",{class:!0});var mn=r(he);v(Ss.$$.fragment,mn),O_=h(mn),ld=s(mn,"P",{});var _$=r(ld);I_=i(_$,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_$.forEach(t),N_=h(mn),Ds=s(mn,"P",{});var Dh=r(Ds);S_=i(Dh,"This model is a PyTorch "),Ws=s(Dh,"A",{href:!0,rel:!0});var b$=r(Ws);D_=i(b$,"torch.nn.Module"),b$.forEach(t),W_=i(Dh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dh.forEach(t),U_=h(mn),Be=s(mn,"DIV",{class:!0});var gn=r(Be);v(Us.$$.fragment,gn),Q_=h(gn),bt=s(gn,"P",{});var wi=r(bt);R_=i(wi,"The "),Za=s(wi,"A",{href:!0});var k$=r(Za);G_=i(k$,"BigBirdForMultipleChoice"),k$.forEach(t),H_=i(wi," forward method, overrides the "),dd=s(wi,"CODE",{});var B$=r(dd);V_=i(B$,"__call__"),B$.forEach(t),J_=i(wi," special method."),wi.forEach(t),K_=h(gn),v(xo.$$.fragment,gn),X_=h(gn),v(Fo.$$.fragment,gn),gn.forEach(t),mn.forEach(t),Rp=h(o),kt=s(o,"H2",{class:!0});var Wh=r(kt);qo=s(Wh,"A",{id:!0,class:!0,href:!0});var v$=r(qo);cd=s(v$,"SPAN",{});var y$=r(cd);v(Qs.$$.fragment,y$),y$.forEach(t),v$.forEach(t),Y_=h(Wh),pd=s(Wh,"SPAN",{});var $$=r(pd);Z_=i($$,"BigBirdForTokenClassification"),$$.forEach(t),Wh.forEach(t),Gp=h(o),me=s(o,"DIV",{class:!0});var un=r(me);v(Rs.$$.fragment,un),eb=h(un),hd=s(un,"P",{});var T$=r(hd);tb=i(T$,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),T$.forEach(t),ob=h(un),Gs=s(un,"P",{});var Uh=r(Gs);nb=i(Uh,"This model is a PyTorch "),Hs=s(Uh,"A",{href:!0,rel:!0});var w$=r(Hs);sb=i(w$,"torch.nn.Module"),w$.forEach(t),rb=i(Uh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),ab=h(un),Y=s(un,"DIV",{class:!0});var He=r(Y);v(Vs.$$.fragment,He),ib=h(He),Bt=s(He,"P",{});var xi=r(Bt);lb=i(xi,"The "),ei=s(xi,"A",{href:!0});var x$=r(ei);db=i(x$,"BigBirdForTokenClassification"),x$.forEach(t),cb=i(xi," forward method, overrides the "),md=s(xi,"CODE",{});var F$=r(md);pb=i(F$,"__call__"),F$.forEach(t),hb=i(xi," special method."),xi.forEach(t),mb=h(He),v(zo.$$.fragment,He),gb=h(He),v(Mo.$$.fragment,He),ub=h(He),v(Eo.$$.fragment,He),He.forEach(t),un.forEach(t),Hp=h(o),vt=s(o,"H2",{class:!0});var Qh=r(vt);jo=s(Qh,"A",{id:!0,class:!0,href:!0});var q$=r(jo);gd=s(q$,"SPAN",{});var z$=r(gd);v(Js.$$.fragment,z$),z$.forEach(t),q$.forEach(t),fb=h(Qh),ud=s(Qh,"SPAN",{});var M$=r(ud);_b=i(M$,"BigBirdForQuestionAnswering"),M$.forEach(t),Qh.forEach(t),Vp=h(o),ge=s(o,"DIV",{class:!0});var fn=r(ge);v(Ks.$$.fragment,fn),bb=h(fn),yt=s(fn,"P",{});var Fi=r(yt);kb=i(Fi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),fd=s(Fi,"CODE",{});var E$=r(fd);Bb=i(E$,"span start logits"),E$.forEach(t),vb=i(Fi," and "),_d=s(Fi,"CODE",{});var j$=r(_d);yb=i(j$,"span end logits"),j$.forEach(t),$b=i(Fi,")."),Fi.forEach(t),Tb=h(fn),Xs=s(fn,"P",{});var Rh=r(Xs);wb=i(Rh,"This model is a PyTorch "),Ys=s(Rh,"A",{href:!0,rel:!0});var P$=r(Ys);xb=i(P$,"torch.nn.Module"),P$.forEach(t),Fb=i(Rh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),qb=h(fn),Z=s(fn,"DIV",{class:!0});var Ve=r(Z);v(Zs.$$.fragment,Ve),zb=h(Ve),$t=s(Ve,"P",{});var qi=r($t);Mb=i(qi,"The "),ti=s(qi,"A",{href:!0});var C$=r(ti);Eb=i(C$,"BigBirdForQuestionAnswering"),C$.forEach(t),jb=i(qi," forward method, overrides the "),bd=s(qi,"CODE",{});var L$=r(bd);Pb=i(L$,"__call__"),L$.forEach(t),Cb=i(qi," special method."),qi.forEach(t),Lb=h(Ve),v(Po.$$.fragment,Ve),Ab=h(Ve),v(Co.$$.fragment,Ve),Ob=h(Ve),v(Lo.$$.fragment,Ve),Ve.forEach(t),fn.forEach(t),Jp=h(o),Tt=s(o,"H2",{class:!0});var Gh=r(Tt);Ao=s(Gh,"A",{id:!0,class:!0,href:!0});var A$=r(Ao);kd=s(A$,"SPAN",{});var O$=r(kd);v(er.$$.fragment,O$),O$.forEach(t),A$.forEach(t),Ib=h(Gh),Bd=s(Gh,"SPAN",{});var I$=r(Bd);Nb=i(I$,"FlaxBigBirdModel"),I$.forEach(t),Gh.forEach(t),Kp=h(o),L=s(o,"DIV",{class:!0});var oe=r(L);v(tr.$$.fragment,oe),Sb=h(oe),vd=s(oe,"P",{});var N$=r(vd);Db=i(N$,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),N$.forEach(t),Wb=h(oe),or=s(oe,"P",{});var Hh=r(or);Ub=i(Hh,"This model inherits from "),oi=s(Hh,"A",{href:!0});var S$=r(oi);Qb=i(S$,"FlaxPreTrainedModel"),S$.forEach(t),Rb=i(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hh.forEach(t),Gb=h(oe),nr=s(oe,"P",{});var Vh=r(nr);Hb=i(Vh,"This model is also a Flax Linen "),sr=s(Vh,"A",{href:!0,rel:!0});var D$=r(sr);Vb=i(D$,"flax.linen.Module"),D$.forEach(t),Jb=i(Vh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vh.forEach(t),Kb=h(oe),yd=s(oe,"P",{});var W$=r(yd);Xb=i(W$,"Finally, this model supports inherent JAX features such as:"),W$.forEach(t),Yb=h(oe),je=s(oe,"UL",{});var _n=r(je);$d=s(_n,"LI",{});var U$=r($d);rr=s(U$,"A",{href:!0,rel:!0});var Q$=r(rr);Zb=i(Q$,"Just-In-Time (JIT) compilation"),Q$.forEach(t),U$.forEach(t),ek=h(_n),Td=s(_n,"LI",{});var R$=r(Td);ar=s(R$,"A",{href:!0,rel:!0});var G$=r(ar);tk=i(G$,"Automatic Differentiation"),G$.forEach(t),R$.forEach(t),ok=h(_n),wd=s(_n,"LI",{});var H$=r(wd);ir=s(H$,"A",{href:!0,rel:!0});var V$=r(ir);nk=i(V$,"Vectorization"),V$.forEach(t),H$.forEach(t),sk=h(_n),xd=s(_n,"LI",{});var J$=r(xd);lr=s(J$,"A",{href:!0,rel:!0});var K$=r(lr);rk=i(K$,"Parallelization"),K$.forEach(t),J$.forEach(t),_n.forEach(t),ak=h(oe),ve=s(oe,"DIV",{class:!0});var bn=r(ve);v(dr.$$.fragment,bn),ik=h(bn),wt=s(bn,"P",{});var zi=r(wt);lk=i(zi,"The "),Fd=s(zi,"CODE",{});var X$=r(Fd);dk=i(X$,"FlaxBigBirdPreTrainedModel"),X$.forEach(t),ck=i(zi," forward method, overrides the "),qd=s(zi,"CODE",{});var Y$=r(qd);pk=i(Y$,"__call__"),Y$.forEach(t),hk=i(zi," special method."),zi.forEach(t),mk=h(bn),v(Oo.$$.fragment,bn),gk=h(bn),v(Io.$$.fragment,bn),bn.forEach(t),oe.forEach(t),Xp=h(o),xt=s(o,"H2",{class:!0});var Jh=r(xt);No=s(Jh,"A",{id:!0,class:!0,href:!0});var Z$=r(No);zd=s(Z$,"SPAN",{});var eT=r(zd);v(cr.$$.fragment,eT),eT.forEach(t),Z$.forEach(t),uk=h(Jh),Md=s(Jh,"SPAN",{});var tT=r(Md);fk=i(tT,"FlaxBigBirdForPreTraining"),tT.forEach(t),Jh.forEach(t),Yp=h(o),A=s(o,"DIV",{class:!0});var ne=r(A);v(pr.$$.fragment,ne),_k=h(ne),Ft=s(ne,"P",{});var Mi=r(Ft);bk=i(Mi,"BigBird Model with two heads on top as done during the pretraining: a "),Ed=s(Mi,"CODE",{});var oT=r(Ed);kk=i(oT,"masked language modeling"),oT.forEach(t),Bk=i(Mi," head and a "),jd=s(Mi,"CODE",{});var nT=r(jd);vk=i(nT,"next sentence prediction (classification)"),nT.forEach(t),yk=i(Mi," head."),Mi.forEach(t),$k=h(ne),hr=s(ne,"P",{});var Kh=r(hr);Tk=i(Kh,"This model inherits from "),ni=s(Kh,"A",{href:!0});var sT=r(ni);wk=i(sT,"FlaxPreTrainedModel"),sT.forEach(t),xk=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kh.forEach(t),Fk=h(ne),mr=s(ne,"P",{});var Xh=r(mr);qk=i(Xh,"This model is also a Flax Linen "),gr=s(Xh,"A",{href:!0,rel:!0});var rT=r(gr);zk=i(rT,"flax.linen.Module"),rT.forEach(t),Mk=i(Xh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xh.forEach(t),Ek=h(ne),Pd=s(ne,"P",{});var aT=r(Pd);jk=i(aT,"Finally, this model supports inherent JAX features such as:"),aT.forEach(t),Pk=h(ne),Pe=s(ne,"UL",{});var kn=r(Pe);Cd=s(kn,"LI",{});var iT=r(Cd);ur=s(iT,"A",{href:!0,rel:!0});var lT=r(ur);Ck=i(lT,"Just-In-Time (JIT) compilation"),lT.forEach(t),iT.forEach(t),Lk=h(kn),Ld=s(kn,"LI",{});var dT=r(Ld);fr=s(dT,"A",{href:!0,rel:!0});var cT=r(fr);Ak=i(cT,"Automatic Differentiation"),cT.forEach(t),dT.forEach(t),Ok=h(kn),Ad=s(kn,"LI",{});var pT=r(Ad);_r=s(pT,"A",{href:!0,rel:!0});var hT=r(_r);Ik=i(hT,"Vectorization"),hT.forEach(t),pT.forEach(t),Nk=h(kn),Od=s(kn,"LI",{});var mT=r(Od);br=s(mT,"A",{href:!0,rel:!0});var gT=r(br);Sk=i(gT,"Parallelization"),gT.forEach(t),mT.forEach(t),kn.forEach(t),Dk=h(ne),ye=s(ne,"DIV",{class:!0});var Bn=r(ye);v(kr.$$.fragment,Bn),Wk=h(Bn),qt=s(Bn,"P",{});var Ei=r(qt);Uk=i(Ei,"The "),Id=s(Ei,"CODE",{});var uT=r(Id);Qk=i(uT,"FlaxBigBirdPreTrainedModel"),uT.forEach(t),Rk=i(Ei," forward method, overrides the "),Nd=s(Ei,"CODE",{});var fT=r(Nd);Gk=i(fT,"__call__"),fT.forEach(t),Hk=i(Ei," special method."),Ei.forEach(t),Vk=h(Bn),v(So.$$.fragment,Bn),Jk=h(Bn),v(Do.$$.fragment,Bn),Bn.forEach(t),ne.forEach(t),Zp=h(o),zt=s(o,"H2",{class:!0});var Yh=r(zt);Wo=s(Yh,"A",{id:!0,class:!0,href:!0});var _T=r(Wo);Sd=s(_T,"SPAN",{});var bT=r(Sd);v(Br.$$.fragment,bT),bT.forEach(t),_T.forEach(t),Kk=h(Yh),Dd=s(Yh,"SPAN",{});var kT=r(Dd);Xk=i(kT,"FlaxBigBirdForCausalLM"),kT.forEach(t),Yh.forEach(t),eh=h(o),O=s(o,"DIV",{class:!0});var se=r(O);v(vr.$$.fragment,se),Yk=h(se),Wd=s(se,"P",{});var BT=r(Wd);Zk=i(BT,`BigBird Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),BT.forEach(t),eB=h(se),yr=s(se,"P",{});var Zh=r(yr);tB=i(Zh,"This model inherits from "),si=s(Zh,"A",{href:!0});var vT=r(si);oB=i(vT,"FlaxPreTrainedModel"),vT.forEach(t),nB=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zh.forEach(t),sB=h(se),$r=s(se,"P",{});var em=r($r);rB=i(em,"This model is also a Flax Linen "),Tr=s(em,"A",{href:!0,rel:!0});var yT=r(Tr);aB=i(yT,"flax.linen.Module"),yT.forEach(t),iB=i(em,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),em.forEach(t),lB=h(se),Ud=s(se,"P",{});var $T=r(Ud);dB=i($T,"Finally, this model supports inherent JAX features such as:"),$T.forEach(t),cB=h(se),Ce=s(se,"UL",{});var vn=r(Ce);Qd=s(vn,"LI",{});var TT=r(Qd);wr=s(TT,"A",{href:!0,rel:!0});var wT=r(wr);pB=i(wT,"Just-In-Time (JIT) compilation"),wT.forEach(t),TT.forEach(t),hB=h(vn),Rd=s(vn,"LI",{});var xT=r(Rd);xr=s(xT,"A",{href:!0,rel:!0});var FT=r(xr);mB=i(FT,"Automatic Differentiation"),FT.forEach(t),xT.forEach(t),gB=h(vn),Gd=s(vn,"LI",{});var qT=r(Gd);Fr=s(qT,"A",{href:!0,rel:!0});var zT=r(Fr);uB=i(zT,"Vectorization"),zT.forEach(t),qT.forEach(t),fB=h(vn),Hd=s(vn,"LI",{});var MT=r(Hd);qr=s(MT,"A",{href:!0,rel:!0});var ET=r(qr);_B=i(ET,"Parallelization"),ET.forEach(t),MT.forEach(t),vn.forEach(t),bB=h(se),$e=s(se,"DIV",{class:!0});var yn=r($e);v(zr.$$.fragment,yn),kB=h(yn),Mt=s(yn,"P",{});var ji=r(Mt);BB=i(ji,"The "),Vd=s(ji,"CODE",{});var jT=r(Vd);vB=i(jT,"FlaxBigBirdPreTrainedModel"),jT.forEach(t),yB=i(ji," forward method, overrides the "),Jd=s(ji,"CODE",{});var PT=r(Jd);$B=i(PT,"__call__"),PT.forEach(t),TB=i(ji," special method."),ji.forEach(t),wB=h(yn),v(Uo.$$.fragment,yn),xB=h(yn),v(Qo.$$.fragment,yn),yn.forEach(t),se.forEach(t),th=h(o),Et=s(o,"H2",{class:!0});var tm=r(Et);Ro=s(tm,"A",{id:!0,class:!0,href:!0});var CT=r(Ro);Kd=s(CT,"SPAN",{});var LT=r(Kd);v(Mr.$$.fragment,LT),LT.forEach(t),CT.forEach(t),FB=h(tm),Xd=s(tm,"SPAN",{});var AT=r(Xd);qB=i(AT,"FlaxBigBirdForMaskedLM"),AT.forEach(t),tm.forEach(t),oh=h(o),I=s(o,"DIV",{class:!0});var re=r(I);v(Er.$$.fragment,re),zB=h(re),jr=s(re,"P",{});var om=r(jr);MB=i(om,"BigBird Model with a "),Yd=s(om,"CODE",{});var OT=r(Yd);EB=i(OT,"language modeling"),OT.forEach(t),jB=i(om," head on top."),om.forEach(t),PB=h(re),Pr=s(re,"P",{});var nm=r(Pr);CB=i(nm,"This model inherits from "),ri=s(nm,"A",{href:!0});var IT=r(ri);LB=i(IT,"FlaxPreTrainedModel"),IT.forEach(t),AB=i(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nm.forEach(t),OB=h(re),Cr=s(re,"P",{});var sm=r(Cr);IB=i(sm,"This model is also a Flax Linen "),Lr=s(sm,"A",{href:!0,rel:!0});var NT=r(Lr);NB=i(NT,"flax.linen.Module"),NT.forEach(t),SB=i(sm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sm.forEach(t),DB=h(re),Zd=s(re,"P",{});var ST=r(Zd);WB=i(ST,"Finally, this model supports inherent JAX features such as:"),ST.forEach(t),UB=h(re),Le=s(re,"UL",{});var $n=r(Le);ec=s($n,"LI",{});var DT=r(ec);Ar=s(DT,"A",{href:!0,rel:!0});var WT=r(Ar);QB=i(WT,"Just-In-Time (JIT) compilation"),WT.forEach(t),DT.forEach(t),RB=h($n),tc=s($n,"LI",{});var UT=r(tc);Or=s(UT,"A",{href:!0,rel:!0});var QT=r(Or);GB=i(QT,"Automatic Differentiation"),QT.forEach(t),UT.forEach(t),HB=h($n),oc=s($n,"LI",{});var RT=r(oc);Ir=s(RT,"A",{href:!0,rel:!0});var GT=r(Ir);VB=i(GT,"Vectorization"),GT.forEach(t),RT.forEach(t),JB=h($n),nc=s($n,"LI",{});var HT=r(nc);Nr=s(HT,"A",{href:!0,rel:!0});var VT=r(Nr);KB=i(VT,"Parallelization"),VT.forEach(t),HT.forEach(t),$n.forEach(t),XB=h(re),Te=s(re,"DIV",{class:!0});var Tn=r(Te);v(Sr.$$.fragment,Tn),YB=h(Tn),jt=s(Tn,"P",{});var Pi=r(jt);ZB=i(Pi,"The "),sc=s(Pi,"CODE",{});var JT=r(sc);ev=i(JT,"FlaxBigBirdPreTrainedModel"),JT.forEach(t),tv=i(Pi," forward method, overrides the "),rc=s(Pi,"CODE",{});var KT=r(rc);ov=i(KT,"__call__"),KT.forEach(t),nv=i(Pi," special method."),Pi.forEach(t),sv=h(Tn),v(Go.$$.fragment,Tn),rv=h(Tn),v(Ho.$$.fragment,Tn),Tn.forEach(t),re.forEach(t),nh=h(o),Pt=s(o,"H2",{class:!0});var rm=r(Pt);Vo=s(rm,"A",{id:!0,class:!0,href:!0});var XT=r(Vo);ac=s(XT,"SPAN",{});var YT=r(ac);v(Dr.$$.fragment,YT),YT.forEach(t),XT.forEach(t),av=h(rm),ic=s(rm,"SPAN",{});var ZT=r(ic);iv=i(ZT,"FlaxBigBirdForSequenceClassification"),ZT.forEach(t),rm.forEach(t),sh=h(o),N=s(o,"DIV",{class:!0});var ae=r(N);v(Wr.$$.fragment,ae),lv=h(ae),lc=s(ae,"P",{});var ew=r(lc);dv=i(ew,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ew.forEach(t),cv=h(ae),Ur=s(ae,"P",{});var am=r(Ur);pv=i(am,"This model inherits from "),ai=s(am,"A",{href:!0});var tw=r(ai);hv=i(tw,"FlaxPreTrainedModel"),tw.forEach(t),mv=i(am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),am.forEach(t),gv=h(ae),Qr=s(ae,"P",{});var im=r(Qr);uv=i(im,"This model is also a Flax Linen "),Rr=s(im,"A",{href:!0,rel:!0});var ow=r(Rr);fv=i(ow,"flax.linen.Module"),ow.forEach(t),_v=i(im,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),im.forEach(t),bv=h(ae),dc=s(ae,"P",{});var nw=r(dc);kv=i(nw,"Finally, this model supports inherent JAX features such as:"),nw.forEach(t),Bv=h(ae),Ae=s(ae,"UL",{});var wn=r(Ae);cc=s(wn,"LI",{});var sw=r(cc);Gr=s(sw,"A",{href:!0,rel:!0});var rw=r(Gr);vv=i(rw,"Just-In-Time (JIT) compilation"),rw.forEach(t),sw.forEach(t),yv=h(wn),pc=s(wn,"LI",{});var aw=r(pc);Hr=s(aw,"A",{href:!0,rel:!0});var iw=r(Hr);$v=i(iw,"Automatic Differentiation"),iw.forEach(t),aw.forEach(t),Tv=h(wn),hc=s(wn,"LI",{});var lw=r(hc);Vr=s(lw,"A",{href:!0,rel:!0});var dw=r(Vr);wv=i(dw,"Vectorization"),dw.forEach(t),lw.forEach(t),xv=h(wn),mc=s(wn,"LI",{});var cw=r(mc);Jr=s(cw,"A",{href:!0,rel:!0});var pw=r(Jr);Fv=i(pw,"Parallelization"),pw.forEach(t),cw.forEach(t),wn.forEach(t),qv=h(ae),we=s(ae,"DIV",{class:!0});var xn=r(we);v(Kr.$$.fragment,xn),zv=h(xn),Ct=s(xn,"P",{});var Ci=r(Ct);Mv=i(Ci,"The "),gc=s(Ci,"CODE",{});var hw=r(gc);Ev=i(hw,"FlaxBigBirdPreTrainedModel"),hw.forEach(t),jv=i(Ci," forward method, overrides the "),uc=s(Ci,"CODE",{});var mw=r(uc);Pv=i(mw,"__call__"),mw.forEach(t),Cv=i(Ci," special method."),Ci.forEach(t),Lv=h(xn),v(Jo.$$.fragment,xn),Av=h(xn),v(Ko.$$.fragment,xn),xn.forEach(t),ae.forEach(t),rh=h(o),Lt=s(o,"H2",{class:!0});var lm=r(Lt);Xo=s(lm,"A",{id:!0,class:!0,href:!0});var gw=r(Xo);fc=s(gw,"SPAN",{});var uw=r(fc);v(Xr.$$.fragment,uw),uw.forEach(t),gw.forEach(t),Ov=h(lm),_c=s(lm,"SPAN",{});var fw=r(_c);Iv=i(fw,"FlaxBigBirdForMultipleChoice"),fw.forEach(t),lm.forEach(t),ah=h(o),S=s(o,"DIV",{class:!0});var ie=r(S);v(Yr.$$.fragment,ie),Nv=h(ie),bc=s(ie,"P",{});var _w=r(bc);Sv=i(_w,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_w.forEach(t),Dv=h(ie),Zr=s(ie,"P",{});var dm=r(Zr);Wv=i(dm,"This model inherits from "),ii=s(dm,"A",{href:!0});var bw=r(ii);Uv=i(bw,"FlaxPreTrainedModel"),bw.forEach(t),Qv=i(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dm.forEach(t),Rv=h(ie),ea=s(ie,"P",{});var cm=r(ea);Gv=i(cm,"This model is also a Flax Linen "),ta=s(cm,"A",{href:!0,rel:!0});var kw=r(ta);Hv=i(kw,"flax.linen.Module"),kw.forEach(t),Vv=i(cm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cm.forEach(t),Jv=h(ie),kc=s(ie,"P",{});var Bw=r(kc);Kv=i(Bw,"Finally, this model supports inherent JAX features such as:"),Bw.forEach(t),Xv=h(ie),Oe=s(ie,"UL",{});var Fn=r(Oe);Bc=s(Fn,"LI",{});var vw=r(Bc);oa=s(vw,"A",{href:!0,rel:!0});var yw=r(oa);Yv=i(yw,"Just-In-Time (JIT) compilation"),yw.forEach(t),vw.forEach(t),Zv=h(Fn),vc=s(Fn,"LI",{});var $w=r(vc);na=s($w,"A",{href:!0,rel:!0});var Tw=r(na);e1=i(Tw,"Automatic Differentiation"),Tw.forEach(t),$w.forEach(t),t1=h(Fn),yc=s(Fn,"LI",{});var ww=r(yc);sa=s(ww,"A",{href:!0,rel:!0});var xw=r(sa);o1=i(xw,"Vectorization"),xw.forEach(t),ww.forEach(t),n1=h(Fn),$c=s(Fn,"LI",{});var Fw=r($c);ra=s(Fw,"A",{href:!0,rel:!0});var qw=r(ra);s1=i(qw,"Parallelization"),qw.forEach(t),Fw.forEach(t),Fn.forEach(t),r1=h(ie),xe=s(ie,"DIV",{class:!0});var qn=r(xe);v(aa.$$.fragment,qn),a1=h(qn),At=s(qn,"P",{});var Li=r(At);i1=i(Li,"The "),Tc=s(Li,"CODE",{});var zw=r(Tc);l1=i(zw,"FlaxBigBirdPreTrainedModel"),zw.forEach(t),d1=i(Li," forward method, overrides the "),wc=s(Li,"CODE",{});var Mw=r(wc);c1=i(Mw,"__call__"),Mw.forEach(t),p1=i(Li," special method."),Li.forEach(t),h1=h(qn),v(Yo.$$.fragment,qn),m1=h(qn),v(Zo.$$.fragment,qn),qn.forEach(t),ie.forEach(t),ih=h(o),Ot=s(o,"H2",{class:!0});var pm=r(Ot);en=s(pm,"A",{id:!0,class:!0,href:!0});var Ew=r(en);xc=s(Ew,"SPAN",{});var jw=r(xc);v(ia.$$.fragment,jw),jw.forEach(t),Ew.forEach(t),g1=h(pm),Fc=s(pm,"SPAN",{});var Pw=r(Fc);u1=i(Pw,"FlaxBigBirdForTokenClassification"),Pw.forEach(t),pm.forEach(t),lh=h(o),D=s(o,"DIV",{class:!0});var le=r(D);v(la.$$.fragment,le),f1=h(le),qc=s(le,"P",{});var Cw=r(qc);_1=i(Cw,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Cw.forEach(t),b1=h(le),da=s(le,"P",{});var hm=r(da);k1=i(hm,"This model inherits from "),li=s(hm,"A",{href:!0});var Lw=r(li);B1=i(Lw,"FlaxPreTrainedModel"),Lw.forEach(t),v1=i(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hm.forEach(t),y1=h(le),ca=s(le,"P",{});var mm=r(ca);$1=i(mm,"This model is also a Flax Linen "),pa=s(mm,"A",{href:!0,rel:!0});var Aw=r(pa);T1=i(Aw,"flax.linen.Module"),Aw.forEach(t),w1=i(mm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mm.forEach(t),x1=h(le),zc=s(le,"P",{});var Ow=r(zc);F1=i(Ow,"Finally, this model supports inherent JAX features such as:"),Ow.forEach(t),q1=h(le),Ie=s(le,"UL",{});var zn=r(Ie);Mc=s(zn,"LI",{});var Iw=r(Mc);ha=s(Iw,"A",{href:!0,rel:!0});var Nw=r(ha);z1=i(Nw,"Just-In-Time (JIT) compilation"),Nw.forEach(t),Iw.forEach(t),M1=h(zn),Ec=s(zn,"LI",{});var Sw=r(Ec);ma=s(Sw,"A",{href:!0,rel:!0});var Dw=r(ma);E1=i(Dw,"Automatic Differentiation"),Dw.forEach(t),Sw.forEach(t),j1=h(zn),jc=s(zn,"LI",{});var Ww=r(jc);ga=s(Ww,"A",{href:!0,rel:!0});var Uw=r(ga);P1=i(Uw,"Vectorization"),Uw.forEach(t),Ww.forEach(t),C1=h(zn),Pc=s(zn,"LI",{});var Qw=r(Pc);ua=s(Qw,"A",{href:!0,rel:!0});var Rw=r(ua);L1=i(Rw,"Parallelization"),Rw.forEach(t),Qw.forEach(t),zn.forEach(t),A1=h(le),Fe=s(le,"DIV",{class:!0});var Mn=r(Fe);v(fa.$$.fragment,Mn),O1=h(Mn),It=s(Mn,"P",{});var Ai=r(It);I1=i(Ai,"The "),Cc=s(Ai,"CODE",{});var Gw=r(Cc);N1=i(Gw,"FlaxBigBirdPreTrainedModel"),Gw.forEach(t),S1=i(Ai," forward method, overrides the "),Lc=s(Ai,"CODE",{});var Hw=r(Lc);D1=i(Hw,"__call__"),Hw.forEach(t),W1=i(Ai," special method."),Ai.forEach(t),U1=h(Mn),v(tn.$$.fragment,Mn),Q1=h(Mn),v(on.$$.fragment,Mn),Mn.forEach(t),le.forEach(t),dh=h(o),Nt=s(o,"H2",{class:!0});var gm=r(Nt);nn=s(gm,"A",{id:!0,class:!0,href:!0});var Vw=r(nn);Ac=s(Vw,"SPAN",{});var Jw=r(Ac);v(_a.$$.fragment,Jw),Jw.forEach(t),Vw.forEach(t),R1=h(gm),Oc=s(gm,"SPAN",{});var Kw=r(Oc);G1=i(Kw,"FlaxBigBirdForQuestionAnswering"),Kw.forEach(t),gm.forEach(t),ch=h(o),W=s(o,"DIV",{class:!0});var de=r(W);v(ba.$$.fragment,de),H1=h(de),St=s(de,"P",{});var Oi=r(St);V1=i(Oi,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ic=s(Oi,"CODE",{});var Xw=r(Ic);J1=i(Xw,"span start logits"),Xw.forEach(t),K1=i(Oi," and "),Nc=s(Oi,"CODE",{});var Yw=r(Nc);X1=i(Yw,"span end logits"),Yw.forEach(t),Y1=i(Oi,")."),Oi.forEach(t),Z1=h(de),ka=s(de,"P",{});var um=r(ka);e2=i(um,"This model inherits from "),di=s(um,"A",{href:!0});var Zw=r(di);t2=i(Zw,"FlaxPreTrainedModel"),Zw.forEach(t),o2=i(um,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),um.forEach(t),n2=h(de),Ba=s(de,"P",{});var fm=r(Ba);s2=i(fm,"This model is also a Flax Linen "),va=s(fm,"A",{href:!0,rel:!0});var ex=r(va);r2=i(ex,"flax.linen.Module"),ex.forEach(t),a2=i(fm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fm.forEach(t),i2=h(de),Sc=s(de,"P",{});var tx=r(Sc);l2=i(tx,"Finally, this model supports inherent JAX features such as:"),tx.forEach(t),d2=h(de),Ne=s(de,"UL",{});var En=r(Ne);Dc=s(En,"LI",{});var ox=r(Dc);ya=s(ox,"A",{href:!0,rel:!0});var nx=r(ya);c2=i(nx,"Just-In-Time (JIT) compilation"),nx.forEach(t),ox.forEach(t),p2=h(En),Wc=s(En,"LI",{});var sx=r(Wc);$a=s(sx,"A",{href:!0,rel:!0});var rx=r($a);h2=i(rx,"Automatic Differentiation"),rx.forEach(t),sx.forEach(t),m2=h(En),Uc=s(En,"LI",{});var ax=r(Uc);Ta=s(ax,"A",{href:!0,rel:!0});var ix=r(Ta);g2=i(ix,"Vectorization"),ix.forEach(t),ax.forEach(t),u2=h(En),Qc=s(En,"LI",{});var lx=r(Qc);wa=s(lx,"A",{href:!0,rel:!0});var dx=r(wa);f2=i(dx,"Parallelization"),dx.forEach(t),lx.forEach(t),En.forEach(t),_2=h(de),qe=s(de,"DIV",{class:!0});var jn=r(qe);v(xa.$$.fragment,jn),b2=h(jn),Dt=s(jn,"P",{});var Ii=r(Dt);k2=i(Ii,"The "),ci=s(Ii,"A",{href:!0});var cx=r(ci);B2=i(cx,"FlaxBigBirdForQuestionAnswering"),cx.forEach(t),v2=i(Ii," forward method, overrides the "),Rc=s(Ii,"CODE",{});var px=r(Rc);y2=i(px,"__call__"),px.forEach(t),$2=i(Ii," special method."),Ii.forEach(t),T2=h(jn),v(sn.$$.fragment,jn),w2=h(jn),v(rn.$$.fragment,jn),jn.forEach(t),de.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(oF)),c(u,"id","bigbird"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#bigbird"),c(g,"class","relative group"),c(Qt,"id","overview"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#overview"),c(Je,"class","relative group"),c(Cn,"href","https://arxiv.org/abs/2007.14062"),c(Cn,"rel","nofollow"),c(An,"href","https://huggingface.co/blog/big-bird"),c(An,"rel","nofollow"),c(In,"href","https://huggingface.co/vasudevgupta"),c(In,"rel","nofollow"),c(Nn,"href","https://github.com/google-research/bigbird"),c(Nn,"rel","nofollow"),c(Gt,"id","transformers.BigBirdConfig"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BigBirdConfig"),c(Ke,"class","relative group"),c(Oa,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdModel"),c(Wn,"href","https://huggingface.co/google/bigbird-roberta-base"),c(Wn,"rel","nofollow"),c(Ia,"href","/docs/transformers/pr_17822/en/main_classes/configuration#transformers.PretrainedConfig"),c(Na,"href","/docs/transformers/pr_17822/en/main_classes/configuration#transformers.PretrainedConfig"),c(Jt,"id","initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Vt,"class","relative group"),c(Xt,"id","initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Kt,"class","relative group"),c(Zt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Yt,"class","relative group"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.BigBirdTokenizer"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.BigBirdTokenizer"),c(Ze,"class","relative group"),c(Xn,"href","https://github.com/google/sentencepiece"),c(Xn,"rel","nofollow"),c(Sa,"href","/docs/transformers/pr_17822/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ua,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.BigBirdTokenizerFast"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.BigBirdTokenizerFast"),c(tt,"class","relative group"),c(is,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(is,"rel","nofollow"),c(Qa,"href","/docs/transformers/pr_17822/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(ot,"class","relative group"),c(Ha,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdModel"),c(st,"class","relative group"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(vs,"href","https://arxiv.org/abs/1706.03762"),c(vs,"rel","nofollow"),c(Va,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdModel"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForPreTraining"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForPreTraining"),c(at,"class","relative group"),c(Ja,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.BigBirdForCausalLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.BigBirdForCausalLM"),c(dt,"class","relative group"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(Ka,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_o,"id","transformers.BigBirdForMaskedLM"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.BigBirdForMaskedLM"),c(ht,"class","relative group"),c(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(js,"rel","nofollow"),c(Xa,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.BigBirdForSequenceClassification"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.BigBirdForSequenceClassification"),c(ut,"class","relative group"),c(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Os,"rel","nofollow"),c(Ya,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"id","transformers.BigBirdForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.BigBirdForMultipleChoice"),c(_t,"class","relative group"),c(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ws,"rel","nofollow"),c(Za,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"id","transformers.BigBirdForTokenClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BigBirdForTokenClassification"),c(kt,"class","relative group"),c(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Hs,"rel","nofollow"),c(ei,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jo,"id","transformers.BigBirdForQuestionAnswering"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.BigBirdForQuestionAnswering"),c(vt,"class","relative group"),c(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ys,"rel","nofollow"),c(ti,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdModel"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdModel"),c(Tt,"class","relative group"),c(oi,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(sr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ir,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(lr,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(No,"id","transformers.FlaxBigBirdForPreTraining"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.FlaxBigBirdForPreTraining"),c(xt,"class","relative group"),c(ni,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(gr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ur,"rel","nofollow"),c(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fr,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_r,"rel","nofollow"),c(br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(br,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"id","transformers.FlaxBigBirdForCausalLM"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.FlaxBigBirdForCausalLM"),c(zt,"class","relative group"),c(si,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Tr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Tr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(qr,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ro,"id","transformers.FlaxBigBirdForMaskedLM"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Et,"class","relative group"),c(ri,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Lr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Lr,"rel","nofollow"),c(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ar,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Or,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Nr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Pt,"class","relative group"),c(ai,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Rr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Gr,"rel","nofollow"),c(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Hr,"rel","nofollow"),c(Vr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Vr,"rel","nofollow"),c(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Jr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xo,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(Lt,"class","relative group"),c(ii,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(sa,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ra,"rel","nofollow"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(en,"id","transformers.FlaxBigBirdForTokenClassification"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Ot,"class","relative group"),c(li,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(pa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ha,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ga,"rel","nofollow"),c(ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ua,"rel","nofollow"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nn,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(Nt,"class","relative group"),c(di,"href","/docs/transformers/pr_17822/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(va,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(va,"rel","nofollow"),c(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ya,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c($a,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ta,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(wa,"rel","nofollow"),c(ci,"href","/docs/transformers/pr_17822/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,d),k(o,_,f),k(o,g,f),e(g,u),e(u,b),y(l,b,null),e(g,m),e(g,F),e(F,_m),k(o,bp,f),k(o,Je,f),e(Je,Qt),e(Qt,Ni),y(Pn,Ni,null),e(Je,bm),e(Je,Si),e(Si,km),k(o,kp,f),k(o,Rt,f),e(Rt,Bm),e(Rt,Cn),e(Cn,vm),e(Rt,ym),k(o,Bp,f),k(o,Pa,f),e(Pa,$m),k(o,vp,f),k(o,Ca,f),e(Ca,Di),e(Di,Tm),k(o,yp,f),k(o,La,f),e(La,wm),k(o,$p,f),k(o,R,f),e(R,Ln),e(Ln,xm),e(Ln,An),e(An,Fm),e(Ln,qm),e(R,zm),e(R,ce),e(ce,Mm),e(ce,Wi),e(Wi,Em),e(ce,jm),e(ce,Ui),e(Ui,Pm),e(ce,Cm),e(ce,Qi),e(Qi,Lm),e(ce,Am),e(ce,Ri),e(Ri,Om),e(ce,Im),e(R,Nm),e(R,Gi),e(Gi,Sm),e(R,Dm),e(R,Hi),e(Hi,Wm),e(R,Um),e(R,On),e(On,Qm),e(On,Vi),e(Vi,Rm),e(On,Gm),e(R,Hm),e(R,Aa),e(Aa,Vm),e(Aa,Ji),e(Ji,Jm),k(o,Tp,f),k(o,Se,f),e(Se,Km),e(Se,In),e(In,Xm),e(Se,Ym),e(Se,Nn),e(Nn,Zm),e(Se,eg),k(o,wp,f),k(o,Ke,f),e(Ke,Gt),e(Gt,Ki),y(Sn,Ki,null),e(Ke,tg),e(Ke,Xi),e(Xi,og),k(o,xp,f),k(o,P,f),y(Dn,P,null),e(P,ng),e(P,Xe),e(Xe,sg),e(Xe,Oa),e(Oa,rg),e(Xe,ag),e(Xe,Wn),e(Wn,ig),e(Xe,lg),e(P,dg),e(P,Ye),e(Ye,cg),e(Ye,Ia),e(Ia,pg),e(Ye,hg),e(Ye,Na),e(Na,mg),e(Ye,gg),e(P,ug),y(Ht,P,null),e(P,fg),e(P,Yi),e(Yi,Zi),e(Zi,el),e(el,tl),e(tl,_g),e(P,bg),e(P,ol),e(ol,nl),e(nl,Un),e(Un,Vt),e(Vt,Jt),e(Jt,sl),y(Qn,sl,null),e(Vt,kg),e(Vt,rl),e(rl,Bg),e(Un,vg),e(Un,al),e(al,yg),e(P,$g),e(P,il),e(il,ll),e(ll,Rn),e(Rn,Kt),e(Kt,Xt),e(Xt,dl),y(Gn,dl,null),e(Kt,Tg),e(Kt,cl),e(cl,wg),e(Rn,xg),e(Rn,pl),e(pl,Fg),e(P,qg),e(P,hl),e(hl,ml),e(ml,gl),e(gl,Yt),e(Yt,Zt),e(Zt,ul),y(Hn,ul,null),e(Yt,zg),e(Yt,fl),e(fl,Mg),k(o,Fp,f),k(o,Ze,f),e(Ze,eo),e(eo,_l),y(Vn,_l,null),e(Ze,Eg),e(Ze,bl),e(bl,jg),k(o,qp,f),k(o,C,f),y(Jn,C,null),e(C,Pg),e(C,Kn),e(Kn,Cg),e(Kn,Xn),e(Xn,Lg),e(Kn,Ag),e(C,Og),e(C,Yn),e(Yn,Ig),e(Yn,Sa),e(Sa,Ng),e(Yn,Sg),e(C,Dg),e(C,De),y(Zn,De,null),e(De,Wg),e(De,kl),e(kl,Ug),e(De,Qg),e(De,es),e(es,Da),e(Da,Rg),e(Da,Bl),e(Bl,Gg),e(es,Hg),e(es,Wa),e(Wa,Vg),e(Wa,vl),e(vl,Jg),e(C,Kg),e(C,to),y(ts,to,null),e(to,Xg),e(to,os),e(os,Yg),e(os,yl),e(yl,Zg),e(os,eu),e(C,tu),e(C,oo),y(ns,oo,null),e(oo,ou),e(oo,et),e(et,nu),e(et,$l),e($l,su),e(et,ru),e(et,Tl),e(Tl,au),e(et,iu),e(C,lu),e(C,Ua),y(ss,Ua,null),k(o,zp,f),k(o,tt,f),e(tt,no),e(no,wl),y(rs,wl,null),e(tt,du),e(tt,xl),e(xl,cu),k(o,Mp,f),k(o,H,f),y(as,H,null),e(H,pu),e(H,ze),e(ze,hu),e(ze,Fl),e(Fl,mu),e(ze,gu),e(ze,is),e(is,uu),e(ze,fu),e(ze,Qa),e(Qa,_u),e(ze,bu),e(H,ku),e(H,We),y(ls,We,null),e(We,Bu),e(We,ql),e(ql,vu),e(We,yu),e(We,ds),e(ds,Ra),e(Ra,$u),e(Ra,zl),e(zl,Tu),e(ds,wu),e(ds,Ga),e(Ga,xu),e(Ga,Ml),e(Ml,Fu),e(H,qu),e(H,fe),y(cs,fe,null),e(fe,zu),e(fe,El),e(El,Mu),e(fe,Eu),y(so,fe,null),e(fe,ju),e(fe,jl),e(jl,Pu),e(H,Cu),e(H,ro),y(ps,ro,null),e(ro,Lu),e(ro,hs),e(hs,Au),e(hs,Pl),e(Pl,Ou),e(hs,Iu),k(o,Ep,f),k(o,ot,f),e(ot,ao),e(ao,Cl),y(ms,Cl,null),e(ot,Nu),e(ot,Ll),e(Ll,Su),k(o,jp,f),k(o,nt,f),y(gs,nt,null),e(nt,Du),e(nt,us),e(us,Wu),e(us,Ha),e(Ha,Uu),e(us,Qu),k(o,Pp,f),k(o,st,f),e(st,io),e(io,Al),y(fs,Al,null),e(st,Ru),e(st,Ol),e(Ol,Gu),k(o,Cp,f),k(o,V,f),y(_s,V,null),e(V,Hu),e(V,bs),e(bs,Vu),e(bs,ks),e(ks,Ju),e(bs,Ku),e(V,Xu),e(V,Bs),e(Bs,Yu),e(Bs,vs),e(vs,Zu),e(Bs,ef),e(V,tf),e(V,Q),e(Q,of),e(Q,Il),e(Il,nf),e(Q,sf),e(Q,Nl),e(Nl,rf),e(Q,af),e(Q,Sl),e(Sl,lf),e(Q,df),e(Q,Dl),e(Dl,cf),e(Q,pf),e(Q,Wl),e(Wl,hf),e(Q,mf),e(Q,Ul),e(Ul,gf),e(Q,uf),e(V,ff),e(V,_e),y(ys,_e,null),e(_e,_f),e(_e,rt),e(rt,bf),e(rt,Va),e(Va,kf),e(rt,Bf),e(rt,Ql),e(Ql,vf),e(rt,yf),e(_e,$f),y(lo,_e,null),e(_e,Tf),y(co,_e,null),k(o,Lp,f),k(o,at,f),e(at,po),e(po,Rl),y($s,Rl,null),e(at,wf),e(at,Gl),e(Gl,xf),k(o,Ap,f),k(o,it,f),y(Ts,it,null),e(it,Ff),e(it,be),y(ws,be,null),e(be,qf),e(be,lt),e(lt,zf),e(lt,Ja),e(Ja,Mf),e(lt,Ef),e(lt,Hl),e(Hl,jf),e(lt,Pf),e(be,Cf),y(ho,be,null),e(be,Lf),y(mo,be,null),k(o,Op,f),k(o,dt,f),e(dt,go),e(go,Vl),y(xs,Vl,null),e(dt,Af),e(dt,Jl),e(Jl,Of),k(o,Ip,f),k(o,Me,f),y(Fs,Me,null),e(Me,If),e(Me,ct),e(ct,Nf),e(ct,Kl),e(Kl,Sf),e(ct,Df),e(ct,qs),e(qs,Wf),e(ct,Uf),e(Me,Qf),e(Me,ke),y(zs,ke,null),e(ke,Rf),e(ke,pt),e(pt,Gf),e(pt,Ka),e(Ka,Hf),e(pt,Vf),e(pt,Xl),e(Xl,Jf),e(pt,Kf),e(ke,Xf),y(uo,ke,null),e(ke,Yf),y(fo,ke,null),k(o,Np,f),k(o,ht,f),e(ht,_o),e(_o,Yl),y(Ms,Yl,null),e(ht,Zf),e(ht,Zl),e(Zl,e_),k(o,Sp,f),k(o,Ee,f),y(Es,Ee,null),e(Ee,t_),e(Ee,mt),e(mt,o_),e(mt,ed),e(ed,n_),e(mt,s_),e(mt,js),e(js,r_),e(mt,a_),e(Ee,i_),e(Ee,K),y(Ps,K,null),e(K,l_),e(K,gt),e(gt,d_),e(gt,Xa),e(Xa,c_),e(gt,p_),e(gt,td),e(td,h_),e(gt,m_),e(K,g_),y(bo,K,null),e(K,u_),y(ko,K,null),e(K,f_),y(Bo,K,null),k(o,Dp,f),k(o,ut,f),e(ut,vo),e(vo,od),y(Cs,od,null),e(ut,__),e(ut,nd),e(nd,b_),k(o,Wp,f),k(o,pe,f),y(Ls,pe,null),e(pe,k_),e(pe,sd),e(sd,B_),e(pe,v_),e(pe,As),e(As,y_),e(As,Os),e(Os,$_),e(As,T_),e(pe,w_),e(pe,X),y(Is,X,null),e(X,x_),e(X,ft),e(ft,F_),e(ft,Ya),e(Ya,q_),e(ft,z_),e(ft,rd),e(rd,M_),e(ft,E_),e(X,j_),y(yo,X,null),e(X,P_),y($o,X,null),e(X,C_),y(To,X,null),k(o,Up,f),k(o,_t,f),e(_t,wo),e(wo,ad),y(Ns,ad,null),e(_t,L_),e(_t,id),e(id,A_),k(o,Qp,f),k(o,he,f),y(Ss,he,null),e(he,O_),e(he,ld),e(ld,I_),e(he,N_),e(he,Ds),e(Ds,S_),e(Ds,Ws),e(Ws,D_),e(Ds,W_),e(he,U_),e(he,Be),y(Us,Be,null),e(Be,Q_),e(Be,bt),e(bt,R_),e(bt,Za),e(Za,G_),e(bt,H_),e(bt,dd),e(dd,V_),e(bt,J_),e(Be,K_),y(xo,Be,null),e(Be,X_),y(Fo,Be,null),k(o,Rp,f),k(o,kt,f),e(kt,qo),e(qo,cd),y(Qs,cd,null),e(kt,Y_),e(kt,pd),e(pd,Z_),k(o,Gp,f),k(o,me,f),y(Rs,me,null),e(me,eb),e(me,hd),e(hd,tb),e(me,ob),e(me,Gs),e(Gs,nb),e(Gs,Hs),e(Hs,sb),e(Gs,rb),e(me,ab),e(me,Y),y(Vs,Y,null),e(Y,ib),e(Y,Bt),e(Bt,lb),e(Bt,ei),e(ei,db),e(Bt,cb),e(Bt,md),e(md,pb),e(Bt,hb),e(Y,mb),y(zo,Y,null),e(Y,gb),y(Mo,Y,null),e(Y,ub),y(Eo,Y,null),k(o,Hp,f),k(o,vt,f),e(vt,jo),e(jo,gd),y(Js,gd,null),e(vt,fb),e(vt,ud),e(ud,_b),k(o,Vp,f),k(o,ge,f),y(Ks,ge,null),e(ge,bb),e(ge,yt),e(yt,kb),e(yt,fd),e(fd,Bb),e(yt,vb),e(yt,_d),e(_d,yb),e(yt,$b),e(ge,Tb),e(ge,Xs),e(Xs,wb),e(Xs,Ys),e(Ys,xb),e(Xs,Fb),e(ge,qb),e(ge,Z),y(Zs,Z,null),e(Z,zb),e(Z,$t),e($t,Mb),e($t,ti),e(ti,Eb),e($t,jb),e($t,bd),e(bd,Pb),e($t,Cb),e(Z,Lb),y(Po,Z,null),e(Z,Ab),y(Co,Z,null),e(Z,Ob),y(Lo,Z,null),k(o,Jp,f),k(o,Tt,f),e(Tt,Ao),e(Ao,kd),y(er,kd,null),e(Tt,Ib),e(Tt,Bd),e(Bd,Nb),k(o,Kp,f),k(o,L,f),y(tr,L,null),e(L,Sb),e(L,vd),e(vd,Db),e(L,Wb),e(L,or),e(or,Ub),e(or,oi),e(oi,Qb),e(or,Rb),e(L,Gb),e(L,nr),e(nr,Hb),e(nr,sr),e(sr,Vb),e(nr,Jb),e(L,Kb),e(L,yd),e(yd,Xb),e(L,Yb),e(L,je),e(je,$d),e($d,rr),e(rr,Zb),e(je,ek),e(je,Td),e(Td,ar),e(ar,tk),e(je,ok),e(je,wd),e(wd,ir),e(ir,nk),e(je,sk),e(je,xd),e(xd,lr),e(lr,rk),e(L,ak),e(L,ve),y(dr,ve,null),e(ve,ik),e(ve,wt),e(wt,lk),e(wt,Fd),e(Fd,dk),e(wt,ck),e(wt,qd),e(qd,pk),e(wt,hk),e(ve,mk),y(Oo,ve,null),e(ve,gk),y(Io,ve,null),k(o,Xp,f),k(o,xt,f),e(xt,No),e(No,zd),y(cr,zd,null),e(xt,uk),e(xt,Md),e(Md,fk),k(o,Yp,f),k(o,A,f),y(pr,A,null),e(A,_k),e(A,Ft),e(Ft,bk),e(Ft,Ed),e(Ed,kk),e(Ft,Bk),e(Ft,jd),e(jd,vk),e(Ft,yk),e(A,$k),e(A,hr),e(hr,Tk),e(hr,ni),e(ni,wk),e(hr,xk),e(A,Fk),e(A,mr),e(mr,qk),e(mr,gr),e(gr,zk),e(mr,Mk),e(A,Ek),e(A,Pd),e(Pd,jk),e(A,Pk),e(A,Pe),e(Pe,Cd),e(Cd,ur),e(ur,Ck),e(Pe,Lk),e(Pe,Ld),e(Ld,fr),e(fr,Ak),e(Pe,Ok),e(Pe,Ad),e(Ad,_r),e(_r,Ik),e(Pe,Nk),e(Pe,Od),e(Od,br),e(br,Sk),e(A,Dk),e(A,ye),y(kr,ye,null),e(ye,Wk),e(ye,qt),e(qt,Uk),e(qt,Id),e(Id,Qk),e(qt,Rk),e(qt,Nd),e(Nd,Gk),e(qt,Hk),e(ye,Vk),y(So,ye,null),e(ye,Jk),y(Do,ye,null),k(o,Zp,f),k(o,zt,f),e(zt,Wo),e(Wo,Sd),y(Br,Sd,null),e(zt,Kk),e(zt,Dd),e(Dd,Xk),k(o,eh,f),k(o,O,f),y(vr,O,null),e(O,Yk),e(O,Wd),e(Wd,Zk),e(O,eB),e(O,yr),e(yr,tB),e(yr,si),e(si,oB),e(yr,nB),e(O,sB),e(O,$r),e($r,rB),e($r,Tr),e(Tr,aB),e($r,iB),e(O,lB),e(O,Ud),e(Ud,dB),e(O,cB),e(O,Ce),e(Ce,Qd),e(Qd,wr),e(wr,pB),e(Ce,hB),e(Ce,Rd),e(Rd,xr),e(xr,mB),e(Ce,gB),e(Ce,Gd),e(Gd,Fr),e(Fr,uB),e(Ce,fB),e(Ce,Hd),e(Hd,qr),e(qr,_B),e(O,bB),e(O,$e),y(zr,$e,null),e($e,kB),e($e,Mt),e(Mt,BB),e(Mt,Vd),e(Vd,vB),e(Mt,yB),e(Mt,Jd),e(Jd,$B),e(Mt,TB),e($e,wB),y(Uo,$e,null),e($e,xB),y(Qo,$e,null),k(o,th,f),k(o,Et,f),e(Et,Ro),e(Ro,Kd),y(Mr,Kd,null),e(Et,FB),e(Et,Xd),e(Xd,qB),k(o,oh,f),k(o,I,f),y(Er,I,null),e(I,zB),e(I,jr),e(jr,MB),e(jr,Yd),e(Yd,EB),e(jr,jB),e(I,PB),e(I,Pr),e(Pr,CB),e(Pr,ri),e(ri,LB),e(Pr,AB),e(I,OB),e(I,Cr),e(Cr,IB),e(Cr,Lr),e(Lr,NB),e(Cr,SB),e(I,DB),e(I,Zd),e(Zd,WB),e(I,UB),e(I,Le),e(Le,ec),e(ec,Ar),e(Ar,QB),e(Le,RB),e(Le,tc),e(tc,Or),e(Or,GB),e(Le,HB),e(Le,oc),e(oc,Ir),e(Ir,VB),e(Le,JB),e(Le,nc),e(nc,Nr),e(Nr,KB),e(I,XB),e(I,Te),y(Sr,Te,null),e(Te,YB),e(Te,jt),e(jt,ZB),e(jt,sc),e(sc,ev),e(jt,tv),e(jt,rc),e(rc,ov),e(jt,nv),e(Te,sv),y(Go,Te,null),e(Te,rv),y(Ho,Te,null),k(o,nh,f),k(o,Pt,f),e(Pt,Vo),e(Vo,ac),y(Dr,ac,null),e(Pt,av),e(Pt,ic),e(ic,iv),k(o,sh,f),k(o,N,f),y(Wr,N,null),e(N,lv),e(N,lc),e(lc,dv),e(N,cv),e(N,Ur),e(Ur,pv),e(Ur,ai),e(ai,hv),e(Ur,mv),e(N,gv),e(N,Qr),e(Qr,uv),e(Qr,Rr),e(Rr,fv),e(Qr,_v),e(N,bv),e(N,dc),e(dc,kv),e(N,Bv),e(N,Ae),e(Ae,cc),e(cc,Gr),e(Gr,vv),e(Ae,yv),e(Ae,pc),e(pc,Hr),e(Hr,$v),e(Ae,Tv),e(Ae,hc),e(hc,Vr),e(Vr,wv),e(Ae,xv),e(Ae,mc),e(mc,Jr),e(Jr,Fv),e(N,qv),e(N,we),y(Kr,we,null),e(we,zv),e(we,Ct),e(Ct,Mv),e(Ct,gc),e(gc,Ev),e(Ct,jv),e(Ct,uc),e(uc,Pv),e(Ct,Cv),e(we,Lv),y(Jo,we,null),e(we,Av),y(Ko,we,null),k(o,rh,f),k(o,Lt,f),e(Lt,Xo),e(Xo,fc),y(Xr,fc,null),e(Lt,Ov),e(Lt,_c),e(_c,Iv),k(o,ah,f),k(o,S,f),y(Yr,S,null),e(S,Nv),e(S,bc),e(bc,Sv),e(S,Dv),e(S,Zr),e(Zr,Wv),e(Zr,ii),e(ii,Uv),e(Zr,Qv),e(S,Rv),e(S,ea),e(ea,Gv),e(ea,ta),e(ta,Hv),e(ea,Vv),e(S,Jv),e(S,kc),e(kc,Kv),e(S,Xv),e(S,Oe),e(Oe,Bc),e(Bc,oa),e(oa,Yv),e(Oe,Zv),e(Oe,vc),e(vc,na),e(na,e1),e(Oe,t1),e(Oe,yc),e(yc,sa),e(sa,o1),e(Oe,n1),e(Oe,$c),e($c,ra),e(ra,s1),e(S,r1),e(S,xe),y(aa,xe,null),e(xe,a1),e(xe,At),e(At,i1),e(At,Tc),e(Tc,l1),e(At,d1),e(At,wc),e(wc,c1),e(At,p1),e(xe,h1),y(Yo,xe,null),e(xe,m1),y(Zo,xe,null),k(o,ih,f),k(o,Ot,f),e(Ot,en),e(en,xc),y(ia,xc,null),e(Ot,g1),e(Ot,Fc),e(Fc,u1),k(o,lh,f),k(o,D,f),y(la,D,null),e(D,f1),e(D,qc),e(qc,_1),e(D,b1),e(D,da),e(da,k1),e(da,li),e(li,B1),e(da,v1),e(D,y1),e(D,ca),e(ca,$1),e(ca,pa),e(pa,T1),e(ca,w1),e(D,x1),e(D,zc),e(zc,F1),e(D,q1),e(D,Ie),e(Ie,Mc),e(Mc,ha),e(ha,z1),e(Ie,M1),e(Ie,Ec),e(Ec,ma),e(ma,E1),e(Ie,j1),e(Ie,jc),e(jc,ga),e(ga,P1),e(Ie,C1),e(Ie,Pc),e(Pc,ua),e(ua,L1),e(D,A1),e(D,Fe),y(fa,Fe,null),e(Fe,O1),e(Fe,It),e(It,I1),e(It,Cc),e(Cc,N1),e(It,S1),e(It,Lc),e(Lc,D1),e(It,W1),e(Fe,U1),y(tn,Fe,null),e(Fe,Q1),y(on,Fe,null),k(o,dh,f),k(o,Nt,f),e(Nt,nn),e(nn,Ac),y(_a,Ac,null),e(Nt,R1),e(Nt,Oc),e(Oc,G1),k(o,ch,f),k(o,W,f),y(ba,W,null),e(W,H1),e(W,St),e(St,V1),e(St,Ic),e(Ic,J1),e(St,K1),e(St,Nc),e(Nc,X1),e(St,Y1),e(W,Z1),e(W,ka),e(ka,e2),e(ka,di),e(di,t2),e(ka,o2),e(W,n2),e(W,Ba),e(Ba,s2),e(Ba,va),e(va,r2),e(Ba,a2),e(W,i2),e(W,Sc),e(Sc,l2),e(W,d2),e(W,Ne),e(Ne,Dc),e(Dc,ya),e(ya,c2),e(Ne,p2),e(Ne,Wc),e(Wc,$a),e($a,h2),e(Ne,m2),e(Ne,Uc),e(Uc,Ta),e(Ta,g2),e(Ne,u2),e(Ne,Qc),e(Qc,wa),e(wa,f2),e(W,_2),e(W,qe),y(xa,qe,null),e(qe,b2),e(qe,Dt),e(Dt,k2),e(Dt,ci),e(ci,B2),e(Dt,v2),e(Dt,Rc),e(Rc,y2),e(Dt,$2),e(qe,T2),y(sn,qe,null),e(qe,w2),y(rn,qe,null),ph=!0},p(o,[f]){const Fa={};f&2&&(Fa.$$scope={dirty:f,ctx:o}),Ht.$set(Fa);const Gc={};f&2&&(Gc.$$scope={dirty:f,ctx:o}),so.$set(Gc);const Hc={};f&2&&(Hc.$$scope={dirty:f,ctx:o}),lo.$set(Hc);const Vc={};f&2&&(Vc.$$scope={dirty:f,ctx:o}),co.$set(Vc);const qa={};f&2&&(qa.$$scope={dirty:f,ctx:o}),ho.$set(qa);const Jc={};f&2&&(Jc.$$scope={dirty:f,ctx:o}),mo.$set(Jc);const Kc={};f&2&&(Kc.$$scope={dirty:f,ctx:o}),uo.$set(Kc);const Xc={};f&2&&(Xc.$$scope={dirty:f,ctx:o}),fo.$set(Xc);const za={};f&2&&(za.$$scope={dirty:f,ctx:o}),bo.$set(za);const Yc={};f&2&&(Yc.$$scope={dirty:f,ctx:o}),ko.$set(Yc);const Zc={};f&2&&(Zc.$$scope={dirty:f,ctx:o}),Bo.$set(Zc);const ep={};f&2&&(ep.$$scope={dirty:f,ctx:o}),yo.$set(ep);const tp={};f&2&&(tp.$$scope={dirty:f,ctx:o}),$o.$set(tp);const op={};f&2&&(op.$$scope={dirty:f,ctx:o}),To.$set(op);const J={};f&2&&(J.$$scope={dirty:f,ctx:o}),xo.$set(J);const Ma={};f&2&&(Ma.$$scope={dirty:f,ctx:o}),Fo.$set(Ma);const np={};f&2&&(np.$$scope={dirty:f,ctx:o}),zo.$set(np);const ue={};f&2&&(ue.$$scope={dirty:f,ctx:o}),Mo.$set(ue);const sp={};f&2&&(sp.$$scope={dirty:f,ctx:o}),Eo.$set(sp);const rp={};f&2&&(rp.$$scope={dirty:f,ctx:o}),Po.$set(rp);const ap={};f&2&&(ap.$$scope={dirty:f,ctx:o}),Co.$set(ap);const ip={};f&2&&(ip.$$scope={dirty:f,ctx:o}),Lo.$set(ip);const lp={};f&2&&(lp.$$scope={dirty:f,ctx:o}),Oo.$set(lp);const dp={};f&2&&(dp.$$scope={dirty:f,ctx:o}),Io.$set(dp);const Ea={};f&2&&(Ea.$$scope={dirty:f,ctx:o}),So.$set(Ea);const cp={};f&2&&(cp.$$scope={dirty:f,ctx:o}),Do.$set(cp);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:o}),Uo.$set(pi);const pp={};f&2&&(pp.$$scope={dirty:f,ctx:o}),Qo.$set(pp);const Wt={};f&2&&(Wt.$$scope={dirty:f,ctx:o}),Go.$set(Wt);const hp={};f&2&&(hp.$$scope={dirty:f,ctx:o}),Ho.$set(hp);const mp={};f&2&&(mp.$$scope={dirty:f,ctx:o}),Jo.$set(mp);const ja={};f&2&&(ja.$$scope={dirty:f,ctx:o}),Ko.$set(ja);const gp={};f&2&&(gp.$$scope={dirty:f,ctx:o}),Yo.$set(gp);const up={};f&2&&(up.$$scope={dirty:f,ctx:o}),Zo.$set(up);const fp={};f&2&&(fp.$$scope={dirty:f,ctx:o}),tn.$set(fp);const U={};f&2&&(U.$$scope={dirty:f,ctx:o}),on.$set(U);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:o}),sn.$set(Ut);const _p={};f&2&&(_p.$$scope={dirty:f,ctx:o}),rn.$set(_p)},i(o){ph||($(l.$$.fragment,o),$(Pn.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(Ht.$$.fragment,o),$(Qn.$$.fragment,o),$(Gn.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ts.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(ls.$$.fragment,o),$(cs.$$.fragment,o),$(so.$$.fragment,o),$(ps.$$.fragment,o),$(ms.$$.fragment,o),$(gs.$$.fragment,o),$(fs.$$.fragment,o),$(_s.$$.fragment,o),$(ys.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$($s.$$.fragment,o),$(Ts.$$.fragment,o),$(ws.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(zs.$$.fragment,o),$(uo.$$.fragment,o),$(fo.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Ps.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(Bo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ls.$$.fragment,o),$(Is.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(To.$$.fragment,o),$(Ns.$$.fragment,o),$(Ss.$$.fragment,o),$(Us.$$.fragment,o),$(xo.$$.fragment,o),$(Fo.$$.fragment,o),$(Qs.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(zo.$$.fragment,o),$(Mo.$$.fragment,o),$(Eo.$$.fragment,o),$(Js.$$.fragment,o),$(Ks.$$.fragment,o),$(Zs.$$.fragment,o),$(Po.$$.fragment,o),$(Co.$$.fragment,o),$(Lo.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(dr.$$.fragment,o),$(Oo.$$.fragment,o),$(Io.$$.fragment,o),$(cr.$$.fragment,o),$(pr.$$.fragment,o),$(kr.$$.fragment,o),$(So.$$.fragment,o),$(Do.$$.fragment,o),$(Br.$$.fragment,o),$(vr.$$.fragment,o),$(zr.$$.fragment,o),$(Uo.$$.fragment,o),$(Qo.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(Sr.$$.fragment,o),$(Go.$$.fragment,o),$(Ho.$$.fragment,o),$(Dr.$$.fragment,o),$(Wr.$$.fragment,o),$(Kr.$$.fragment,o),$(Jo.$$.fragment,o),$(Ko.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(aa.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(fa.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(_a.$$.fragment,o),$(ba.$$.fragment,o),$(xa.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),ph=!0)},o(o){T(l.$$.fragment,o),T(Pn.$$.fragment,o),T(Sn.$$.fragment,o),T(Dn.$$.fragment,o),T(Ht.$$.fragment,o),T(Qn.$$.fragment,o),T(Gn.$$.fragment,o),T(Hn.$$.fragment,o),T(Vn.$$.fragment,o),T(Jn.$$.fragment,o),T(Zn.$$.fragment,o),T(ts.$$.fragment,o),T(ns.$$.fragment,o),T(ss.$$.fragment,o),T(rs.$$.fragment,o),T(as.$$.fragment,o),T(ls.$$.fragment,o),T(cs.$$.fragment,o),T(so.$$.fragment,o),T(ps.$$.fragment,o),T(ms.$$.fragment,o),T(gs.$$.fragment,o),T(fs.$$.fragment,o),T(_s.$$.fragment,o),T(ys.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T($s.$$.fragment,o),T(Ts.$$.fragment,o),T(ws.$$.fragment,o),T(ho.$$.fragment,o),T(mo.$$.fragment,o),T(xs.$$.fragment,o),T(Fs.$$.fragment,o),T(zs.$$.fragment,o),T(uo.$$.fragment,o),T(fo.$$.fragment,o),T(Ms.$$.fragment,o),T(Es.$$.fragment,o),T(Ps.$$.fragment,o),T(bo.$$.fragment,o),T(ko.$$.fragment,o),T(Bo.$$.fragment,o),T(Cs.$$.fragment,o),T(Ls.$$.fragment,o),T(Is.$$.fragment,o),T(yo.$$.fragment,o),T($o.$$.fragment,o),T(To.$$.fragment,o),T(Ns.$$.fragment,o),T(Ss.$$.fragment,o),T(Us.$$.fragment,o),T(xo.$$.fragment,o),T(Fo.$$.fragment,o),T(Qs.$$.fragment,o),T(Rs.$$.fragment,o),T(Vs.$$.fragment,o),T(zo.$$.fragment,o),T(Mo.$$.fragment,o),T(Eo.$$.fragment,o),T(Js.$$.fragment,o),T(Ks.$$.fragment,o),T(Zs.$$.fragment,o),T(Po.$$.fragment,o),T(Co.$$.fragment,o),T(Lo.$$.fragment,o),T(er.$$.fragment,o),T(tr.$$.fragment,o),T(dr.$$.fragment,o),T(Oo.$$.fragment,o),T(Io.$$.fragment,o),T(cr.$$.fragment,o),T(pr.$$.fragment,o),T(kr.$$.fragment,o),T(So.$$.fragment,o),T(Do.$$.fragment,o),T(Br.$$.fragment,o),T(vr.$$.fragment,o),T(zr.$$.fragment,o),T(Uo.$$.fragment,o),T(Qo.$$.fragment,o),T(Mr.$$.fragment,o),T(Er.$$.fragment,o),T(Sr.$$.fragment,o),T(Go.$$.fragment,o),T(Ho.$$.fragment,o),T(Dr.$$.fragment,o),T(Wr.$$.fragment,o),T(Kr.$$.fragment,o),T(Jo.$$.fragment,o),T(Ko.$$.fragment,o),T(Xr.$$.fragment,o),T(Yr.$$.fragment,o),T(aa.$$.fragment,o),T(Yo.$$.fragment,o),T(Zo.$$.fragment,o),T(ia.$$.fragment,o),T(la.$$.fragment,o),T(fa.$$.fragment,o),T(tn.$$.fragment,o),T(on.$$.fragment,o),T(_a.$$.fragment,o),T(ba.$$.fragment,o),T(xa.$$.fragment,o),T(sn.$$.fragment,o),T(rn.$$.fragment,o),ph=!1},d(o){t(d),o&&t(_),o&&t(g),w(l),o&&t(bp),o&&t(Je),w(Pn),o&&t(kp),o&&t(Rt),o&&t(Bp),o&&t(Pa),o&&t(vp),o&&t(Ca),o&&t(yp),o&&t(La),o&&t($p),o&&t(R),o&&t(Tp),o&&t(Se),o&&t(wp),o&&t(Ke),w(Sn),o&&t(xp),o&&t(P),w(Dn),w(Ht),w(Qn),w(Gn),w(Hn),o&&t(Fp),o&&t(Ze),w(Vn),o&&t(qp),o&&t(C),w(Jn),w(Zn),w(ts),w(ns),w(ss),o&&t(zp),o&&t(tt),w(rs),o&&t(Mp),o&&t(H),w(as),w(ls),w(cs),w(so),w(ps),o&&t(Ep),o&&t(ot),w(ms),o&&t(jp),o&&t(nt),w(gs),o&&t(Pp),o&&t(st),w(fs),o&&t(Cp),o&&t(V),w(_s),w(ys),w(lo),w(co),o&&t(Lp),o&&t(at),w($s),o&&t(Ap),o&&t(it),w(Ts),w(ws),w(ho),w(mo),o&&t(Op),o&&t(dt),w(xs),o&&t(Ip),o&&t(Me),w(Fs),w(zs),w(uo),w(fo),o&&t(Np),o&&t(ht),w(Ms),o&&t(Sp),o&&t(Ee),w(Es),w(Ps),w(bo),w(ko),w(Bo),o&&t(Dp),o&&t(ut),w(Cs),o&&t(Wp),o&&t(pe),w(Ls),w(Is),w(yo),w($o),w(To),o&&t(Up),o&&t(_t),w(Ns),o&&t(Qp),o&&t(he),w(Ss),w(Us),w(xo),w(Fo),o&&t(Rp),o&&t(kt),w(Qs),o&&t(Gp),o&&t(me),w(Rs),w(Vs),w(zo),w(Mo),w(Eo),o&&t(Hp),o&&t(vt),w(Js),o&&t(Vp),o&&t(ge),w(Ks),w(Zs),w(Po),w(Co),w(Lo),o&&t(Jp),o&&t(Tt),w(er),o&&t(Kp),o&&t(L),w(tr),w(dr),w(Oo),w(Io),o&&t(Xp),o&&t(xt),w(cr),o&&t(Yp),o&&t(A),w(pr),w(kr),w(So),w(Do),o&&t(Zp),o&&t(zt),w(Br),o&&t(eh),o&&t(O),w(vr),w(zr),w(Uo),w(Qo),o&&t(th),o&&t(Et),w(Mr),o&&t(oh),o&&t(I),w(Er),w(Sr),w(Go),w(Ho),o&&t(nh),o&&t(Pt),w(Dr),o&&t(sh),o&&t(N),w(Wr),w(Kr),w(Jo),w(Ko),o&&t(rh),o&&t(Lt),w(Xr),o&&t(ah),o&&t(S),w(Yr),w(aa),w(Yo),w(Zo),o&&t(ih),o&&t(Ot),w(ia),o&&t(lh),o&&t(D),w(la),w(fa),w(tn),w(on),o&&t(dh),o&&t(Nt),w(_a),o&&t(ch),o&&t(W),w(ba),w(xa),w(sn),w(rn)}}}const oF={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForCausalLM",title:"FlaxBigBirdForCausalLM"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function nF(x){return fx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cF extends hx{constructor(d){super();mx(this,d,nF,tF,gx,{})}}export{cF as default,oF as metadata};
