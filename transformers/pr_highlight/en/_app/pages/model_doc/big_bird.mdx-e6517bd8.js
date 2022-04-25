import{S as ST,i as NT,s as OT,e as n,k as p,w as B,t as a,M as DT,c as s,d as t,m as h,a as r,x as v,h as i,b as c,F as e,g as k,y as $,q as w,o as y,B as T,v as WT,L as E}from"../../chunks/vendor-6b77c823.js";import{T as G}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-1088f2fb.js";import{C as P}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as M}from"../../chunks/ExampleCodeBlock-5212b321.js";function UT(x){let d,_,g,f,b;return f=new P({props:{code:"",highlighted:""}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function QT(x){let d,_;return d=new P({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){$(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){y(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function HT(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function VT(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function JT(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function RT(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function GT(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function KT(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForCausalLM, BigBirdConfig
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
config = BigBirdConfig.from_pretrained("google/bigbird-roberta-base")
config.is_decoder = True
model = BigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForCausalLM, BigBirdConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BigBirdConfig.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function XT(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function YT(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMaskedLM
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function ZT(x){let d,_;return d=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){$(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){y(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function e2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function t2(x){let d,_,g,f,b;return f=new P({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),_=a("Example of single-label classification:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example of single-label classification:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function o2(x){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){$(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){y(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function n2(x){let d,_,g,f,b;return f=new P({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),_=a("Example of multi-label classification:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example of multi-label classification:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function s2(x){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){$(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){y(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function r2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function a2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function i2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function l2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

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
`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function d2(x){let d,_;return d=new P({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){$(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){y(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function c2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function p2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForQuestionAnswering
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-base-trivia-itc")
model = BigBirdForQuestionAnswering.from_pretrained("google/bigbird-base-trivia-itc")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-base-trivia-itc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/bigbird-base-trivia-itc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function h2(x){let d,_;return d=new P({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){B(d.$$.fragment)},l(g){v(d.$$.fragment,g)},m(g,f){$(d,g,f),_=!0},p:E,i(g){_||(w(d.$$.fragment,g),_=!0)},o(g){y(d.$$.fragment,g),_=!1},d(g){T(d,g)}}}function g2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function m2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function f2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function u2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function _2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function b2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function k2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function B2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function v2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function $2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function w2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function y2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function T2(x){let d,_,g,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var F=r(g);f=i(F,"Module"),F.forEach(t),b=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,g),e(g,f),e(d,b)},d(l){l&&t(d)}}}function x2(x){let d,_,g,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),g=p(),B(f.$$.fragment)},l(l){d=s(l,"P",{});var m=r(d);_=i(m,"Example:"),m.forEach(t),g=h(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,g,m),$(f,l,m),b=!0},p:E,i(l){b||(w(f.$$.fragment,l),b=!0)},o(l){y(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(g),T(f,l)}}}function F2(x){let d,_,g,f,b,l,m,F,Ah,Dc,He,St,bi,yn,Lh,ki,Ih,Wc,Nt,Sh,Tn,Nh,Oh,Uc,ma,Dh,Qc,fa,Bi,Wh,Hc,ua,Uh,Vc,H,xn,Qh,Fn,Hh,Vh,Jh,de,Rh,vi,Gh,Kh,$i,Xh,Yh,wi,Zh,eg,yi,tg,og,ng,Ti,sg,rg,xi,ag,ig,qn,lg,Fi,dg,cg,pg,_a,hg,qi,gg,Jc,Ie,mg,zn,fg,ug,Mn,_g,bg,Rc,Ve,Ot,zi,En,kg,Mi,Bg,Gc,j,Pn,vg,Je,$g,ba,wg,yg,jn,Tg,xg,Fg,Re,qg,ka,zg,Mg,Ba,Eg,Pg,jg,Dt,Cg,Ei,Pi,ji,Ci,Ag,Lg,Ai,Li,Cn,Wt,Ut,Ii,An,Ig,Si,Sg,Ng,Ni,Og,Dg,Oi,Di,Ln,Qt,Ht,Wi,In,Wg,Ui,Ug,Qg,Qi,Hg,Vg,Hi,Vi,Ji,Vt,Jt,Ri,Sn,Jg,Gi,Rg,Kc,Ge,Rt,Ki,Nn,Gg,Xi,Kg,Xc,C,On,Xg,Dn,Yg,Wn,Zg,em,tm,Un,om,va,nm,sm,rm,Se,Qn,am,Yi,im,lm,Hn,$a,dm,Zi,cm,pm,wa,hm,el,gm,mm,Gt,Vn,fm,Jn,um,tl,_m,bm,km,Kt,Rn,Bm,Ke,vm,ol,$m,wm,nl,ym,Tm,xm,ya,Gn,Yc,Xe,Xt,sl,Kn,Fm,rl,qm,Zc,V,Xn,zm,Fe,Mm,al,Em,Pm,Yn,jm,Cm,Ta,Am,Lm,Im,Ne,Zn,Sm,il,Nm,Om,es,xa,Dm,ll,Wm,Um,Fa,Qm,dl,Hm,Vm,fe,ts,Jm,cl,Rm,Gm,Yt,Km,pl,Xm,Ym,Zt,os,Zm,ns,ef,hl,tf,of,ep,Ye,eo,gl,ss,nf,ml,sf,tp,Ze,rs,rf,as,af,qa,lf,df,op,et,to,fl,is,cf,ul,pf,np,J,ls,hf,ds,gf,cs,mf,ff,uf,ps,_f,hs,bf,kf,Bf,Q,vf,_l,$f,wf,bl,yf,Tf,kl,xf,Ff,Bl,qf,zf,vl,Mf,Ef,$l,Pf,jf,Cf,ue,gs,Af,tt,Lf,za,If,Sf,wl,Nf,Of,Df,oo,Wf,no,sp,ot,so,yl,ms,Uf,Tl,Qf,rp,nt,fs,Hf,_e,us,Vf,st,Jf,Ma,Rf,Gf,xl,Kf,Xf,Yf,ro,Zf,ao,ap,rt,io,Fl,_s,eu,ql,tu,ip,qe,bs,ou,at,nu,zl,su,ru,ks,au,iu,lu,be,Bs,du,it,cu,Ea,pu,hu,Ml,gu,mu,fu,lo,uu,co,lp,lt,po,El,vs,_u,Pl,bu,dp,ze,$s,ku,dt,Bu,jl,vu,$u,ws,wu,yu,Tu,K,ys,xu,ct,Fu,Pa,qu,zu,Cl,Mu,Eu,Pu,ho,ju,go,Cu,mo,cp,pt,fo,Al,Ts,Au,Ll,Lu,pp,ce,xs,Iu,Il,Su,Nu,Fs,Ou,qs,Du,Wu,Uu,U,zs,Qu,ht,Hu,ja,Vu,Ju,Sl,Ru,Gu,Ku,uo,Xu,_o,Yu,bo,Zu,ko,e_,Bo,hp,gt,vo,Nl,Ms,t_,Ol,o_,gp,pe,Es,n_,Dl,s_,r_,Ps,a_,js,i_,l_,d_,ke,Cs,c_,mt,p_,Ca,h_,g_,Wl,m_,f_,u_,$o,__,wo,mp,ft,yo,Ul,As,b_,Ql,k_,fp,he,Ls,B_,Hl,v_,$_,Is,w_,Ss,y_,T_,x_,X,Ns,F_,ut,q_,Aa,z_,M_,Vl,E_,P_,j_,To,C_,xo,A_,Fo,up,_t,qo,Jl,Os,L_,Rl,I_,_p,ge,Ds,S_,bt,N_,Gl,O_,D_,Kl,W_,U_,Q_,Ws,H_,Us,V_,J_,R_,Y,Qs,G_,kt,K_,La,X_,Y_,Xl,Z_,eb,tb,zo,ob,Mo,nb,Eo,bp,Bt,Po,Yl,Hs,sb,Zl,rb,kp,A,Vs,ab,ed,ib,lb,Js,db,Ia,cb,pb,hb,Rs,gb,Gs,mb,fb,ub,td,_b,bb,Me,od,Ks,kb,Bb,nd,Xs,vb,$b,sd,Ys,wb,yb,rd,Zs,Tb,xb,Be,er,Fb,vt,qb,ad,zb,Mb,id,Eb,Pb,jb,jo,Cb,Co,Bp,$t,Ao,ld,tr,Ab,dd,Lb,vp,L,or,Ib,wt,Sb,cd,Nb,Ob,pd,Db,Wb,Ub,nr,Qb,Sa,Hb,Vb,Jb,sr,Rb,rr,Gb,Kb,Xb,hd,Yb,Zb,Ee,gd,ar,ek,tk,md,ir,ok,nk,fd,lr,sk,rk,ud,dr,ak,ik,ve,cr,lk,yt,dk,_d,ck,pk,bd,hk,gk,mk,Lo,fk,Io,$p,Tt,So,kd,pr,uk,Bd,_k,wp,I,hr,bk,gr,kk,vd,Bk,vk,$k,mr,wk,Na,yk,Tk,xk,fr,Fk,ur,qk,zk,Mk,$d,Ek,Pk,Pe,wd,_r,jk,Ck,yd,br,Ak,Lk,Td,kr,Ik,Sk,xd,Br,Nk,Ok,$e,vr,Dk,xt,Wk,Fd,Uk,Qk,qd,Hk,Vk,Jk,No,Rk,Oo,yp,Ft,Do,zd,$r,Gk,Md,Kk,Tp,S,wr,Xk,Ed,Yk,Zk,yr,eB,Oa,tB,oB,nB,Tr,sB,xr,rB,aB,iB,Pd,lB,dB,je,jd,Fr,cB,pB,Cd,qr,hB,gB,Ad,zr,mB,fB,Ld,Mr,uB,_B,we,Er,bB,qt,kB,Id,BB,vB,Sd,$B,wB,yB,Wo,TB,Uo,xp,zt,Qo,Nd,Pr,xB,Od,FB,Fp,N,jr,qB,Dd,zB,MB,Cr,EB,Da,PB,jB,CB,Ar,AB,Lr,LB,IB,SB,Wd,NB,OB,Ce,Ud,Ir,DB,WB,Qd,Sr,UB,QB,Hd,Nr,HB,VB,Vd,Or,JB,RB,ye,Dr,GB,Mt,KB,Jd,XB,YB,Rd,ZB,ev,tv,Ho,ov,Vo,qp,Et,Jo,Gd,Wr,nv,Kd,sv,zp,O,Ur,rv,Xd,av,iv,Qr,lv,Wa,dv,cv,pv,Hr,hv,Vr,gv,mv,fv,Yd,uv,_v,Ae,Zd,Jr,bv,kv,ec,Rr,Bv,vv,tc,Gr,$v,wv,oc,Kr,yv,Tv,Te,Xr,xv,Pt,Fv,nc,qv,zv,sc,Mv,Ev,Pv,Ro,jv,Go,Mp,jt,Ko,rc,Yr,Cv,ac,Av,Ep,D,Zr,Lv,Ct,Iv,ic,Sv,Nv,lc,Ov,Dv,Wv,ea,Uv,Ua,Qv,Hv,Vv,ta,Jv,oa,Rv,Gv,Kv,dc,Xv,Yv,Le,cc,na,Zv,e$,pc,sa,t$,o$,hc,ra,n$,s$,gc,aa,r$,a$,xe,ia,i$,At,l$,Qa,d$,c$,mc,p$,h$,g$,Xo,m$,Yo,Pp;return l=new z({}),yn=new z({}),En=new z({}),Pn=new q({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BigBird model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BigBirdConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/configuration_big_bird.py#L31"}}),Dt=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[UT]},$$scope:{ctx:x}}}),An=new z({}),In=new z({}),Sn=new z({}),Nn=new z({}),On=new q({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird.py#L47"}}),Qn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird.py#L201",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird.py#L226",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird.py#L253",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new q({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird.py#L184"}}),Kn=new z({}),Xn=new q({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L58"}}),Zn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L145",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L201",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yt=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[QT]},$$scope:{ctx:x}}}),os=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L170",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new z({}),rs=new q({props:{name:"class transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L1852"}}),is=new z({}),ls=new q({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L1924"}}),gs=new q({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L1980",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),oo=new G({props:{$$slots:{default:[HT]},$$scope:{ctx:x}}}),no=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[VT]},$$scope:{ctx:x}}}),ms=new z({}),fs=new q({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2263"}}),us=new q({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BigBirdForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. If specified, nsp loss will be
added to masked_lm loss. Input should be a sequence pair (see <code>input_ids</code> docstring) Indices should be in
<code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.BigBirdForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2279",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new G({props:{$$slots:{default:[JT]},$$scope:{ctx:x}}}),ao=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[RT]},$$scope:{ctx:x}}}),_s=new z({}),bs=new q({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2470"}}),Bs=new q({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2492",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),lo=new G({props:{$$slots:{default:[GT]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[KT]},$$scope:{ctx:x}}}),vs=new z({}),$s=new q({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2367"}}),ys=new q({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2389",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),ho=new G({props:{$$slots:{default:[XT]},$$scope:{ctx:x}}}),go=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[YT]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[ZT]},$$scope:{ctx:x}}}),Ts=new z({}),xs=new q({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2647"}}),zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2658",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),uo=new G({props:{$$slots:{default:[e2]},$$scope:{ctx:x}}}),_o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[t2]},$$scope:{ctx:x}}}),bo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[o2]},$$scope:{ctx:x}}}),ko=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-3",$$slots:{default:[n2]},$$scope:{ctx:x}}}),Bo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-4",$$slots:{default:[s2]},$$scope:{ctx:x}}}),Ms=new z({}),Es=new q({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2743"}}),Cs=new q({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2754",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),$o=new G({props:{$$slots:{default:[r2]},$$scope:{ctx:x}}}),wo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[a2]},$$scope:{ctx:x}}}),As=new z({}),Ls=new q({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2837"}}),Ns=new q({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2852",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),To=new G({props:{$$slots:{default:[i2]},$$scope:{ctx:x}}}),xo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[l2]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[d2]},$$scope:{ctx:x}}}),Os=new z({}),Ds=new q({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2937"}}),Qs=new q({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_big_bird.py#L2951",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),zo=new G({props:{$$slots:{default:[c2]},$$scope:{ctx:x}}}),Mo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[p2]},$$scope:{ctx:x}}}),Eo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[h2]},$$scope:{ctx:x}}}),Hs=new z({}),Vs=new q({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1559"}}),er=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new G({props:{$$slots:{default:[g2]},$$scope:{ctx:x}}}),Co=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[m2]},$$scope:{ctx:x}}}),tr=new z({}),or=new q({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1634"}}),cr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),Lo=new G({props:{$$slots:{default:[f2]},$$scope:{ctx:x}}}),Io=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[u2]},$$scope:{ctx:x}}}),pr=new z({}),hr=new q({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1721"}}),vr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new G({props:{$$slots:{default:[_2]},$$scope:{ctx:x}}}),Oo=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[b2]},$$scope:{ctx:x}}}),$r=new z({}),wr=new q({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1810"}}),Er=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new G({props:{$$slots:{default:[k2]},$$scope:{ctx:x}}}),Uo=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[B2]},$$scope:{ctx:x}}}),Pr=new z({}),jr=new q({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1887"}}),Dr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new G({props:{$$slots:{default:[v2]},$$scope:{ctx:x}}}),Vo=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[$2]},$$scope:{ctx:x}}}),Wr=new z({}),Ur=new q({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1979"}}),Xr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new G({props:{$$slots:{default:[w2]},$$scope:{ctx:x}}}),Go=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[y2]},$$scope:{ctx:x}}}),Yr=new z({}),Zr=new q({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2078"}}),ia=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2081",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),Xo=new G({props:{$$slots:{default:[T2]},$$scope:{ctx:x}}}),Yo=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[x2]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),g=n("h1"),f=n("a"),b=n("span"),B(l.$$.fragment),m=p(),F=n("span"),Ah=a("BigBird"),Dc=p(),He=n("h2"),St=n("a"),bi=n("span"),B(yn.$$.fragment),Lh=p(),ki=n("span"),Ih=a("Overview"),Wc=p(),Nt=n("p"),Sh=a("The BigBird model was proposed in "),Tn=n("a"),Nh=a("Big Bird: Transformers for Longer Sequences"),Oh=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Uc=p(),ma=n("p"),Dh=a("The abstract from the paper is the following:"),Qc=p(),fa=n("p"),Bi=n("em"),Wh=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Hc=p(),ua=n("p"),Uh=a("Tips:"),Vc=p(),H=n("ul"),xn=n("li"),Qh=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),Fn=n("a"),Hh=a("this blog post"),Vh=a("."),Jh=p(),de=n("li"),Rh=a("BigBird comes with 2 implementations: "),vi=n("strong"),Gh=a("original_full"),Kh=a(" & "),$i=n("strong"),Xh=a("block_sparse"),Yh=a(`. For the sequence length < 1024, using
`),wi=n("strong"),Zh=a("original_full"),eg=a(" is advised as there is no benefit in using "),yi=n("strong"),tg=a("block_sparse"),og=a(" attention."),ng=p(),Ti=n("li"),sg=a("The code currently uses window size of 3 blocks and 2 global blocks."),rg=p(),xi=n("li"),ag=a("Sequence length must be divisible by block size."),ig=p(),qn=n("li"),lg=a("Current implementation supports only "),Fi=n("strong"),dg=a("ITC"),cg=a("."),pg=p(),_a=n("li"),hg=a("Current implementation doesn\u2019t support "),qi=n("strong"),gg=a("num_random_blocks = 0"),Jc=p(),Ie=n("p"),mg=a("This model was contributed by "),zn=n("a"),fg=a("vasudevgupta"),ug=a(`. The original code can be found
`),Mn=n("a"),_g=a("here"),bg=a("."),Rc=p(),Ve=n("h2"),Ot=n("a"),zi=n("span"),B(En.$$.fragment),kg=p(),Mi=n("span"),Bg=a("BigBirdConfig"),Gc=p(),j=n("div"),B(Pn.$$.fragment),vg=p(),Je=n("p"),$g=a("This is the configuration class to store the configuration of a "),ba=n("a"),wg=a("BigBirdModel"),yg=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),jn=n("a"),Tg=a("google/bigbird-roberta-base"),xg=a(" architecture."),Fg=p(),Re=n("p"),qg=a("Configuration objects inherit from "),ka=n("a"),zg=a("PretrainedConfig"),Mg=a(` and can be used to control the model outputs. Read the
documentation from `),Ba=n("a"),Eg=a("PretrainedConfig"),Pg=a(" for more information."),jg=p(),B(Dt.$$.fragment),Cg=p(),Ei=n("blockquote"),Pi=n("blockquote"),ji=n("blockquote"),Ci=n("p"),Ag=a("from transformers import BigBirdModel, BigBirdConfig"),Lg=p(),Ai=n("blockquote"),Li=n("blockquote"),Cn=n("blockquote"),Wt=n("h1"),Ut=n("a"),Ii=n("span"),B(An.$$.fragment),Ig=p(),Si=n("span"),Sg=a("Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),Ng=p(),Ni=n("p"),Og=a("BigBirdConfig()"),Dg=p(),Oi=n("blockquote"),Di=n("blockquote"),Ln=n("blockquote"),Qt=n("h1"),Ht=n("a"),Wi=n("span"),B(In.$$.fragment),Wg=p(),Ui=n("span"),Ug=a("Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),Qg=p(),Qi=n("p"),Hg=a("BigBirdModel(configuration)"),Vg=p(),Hi=n("blockquote"),Vi=n("blockquote"),Ji=n("blockquote"),Vt=n("h1"),Jt=n("a"),Ri=n("span"),B(Sn.$$.fragment),Jg=p(),Gi=n("span"),Rg=a("Accessing the model configuration >>> configuration = model.config"),Kc=p(),Ge=n("h2"),Rt=n("a"),Ki=n("span"),B(Nn.$$.fragment),Gg=p(),Xi=n("span"),Kg=a("BigBirdTokenizer"),Xc=p(),C=n("div"),B(On.$$.fragment),Xg=p(),Dn=n("p"),Yg=a("Construct a BigBird tokenizer. Based on "),Wn=n("a"),Zg=a("SentencePiece"),em=a("."),tm=p(),Un=n("p"),om=a("This tokenizer inherits from "),va=n("a"),nm=a("PreTrainedTokenizer"),sm=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),rm=p(),Se=n("div"),B(Qn.$$.fragment),am=p(),Yi=n("p"),im=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),lm=p(),Hn=n("ul"),$a=n("li"),dm=a("single sequence: "),Zi=n("code"),cm=a("[CLS] X [SEP]"),pm=p(),wa=n("li"),hm=a("pair of sequences: "),el=n("code"),gm=a("[CLS] A [SEP] B [SEP]"),mm=p(),Gt=n("div"),B(Vn.$$.fragment),fm=p(),Jn=n("p"),um=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tl=n("code"),_m=a("prepare_for_model"),bm=a(" method."),km=p(),Kt=n("div"),B(Rn.$$.fragment),Bm=p(),Ke=n("p"),vm=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),ol=n("code"),$m=a("token_ids_1"),wm=a(" is "),nl=n("code"),ym=a("None"),Tm=a(", this method only returns the first portion of the mask (0s)."),xm=p(),ya=n("div"),B(Gn.$$.fragment),Yc=p(),Xe=n("h2"),Xt=n("a"),sl=n("span"),B(Kn.$$.fragment),Fm=p(),rl=n("span"),qm=a("BigBirdTokenizerFast"),Zc=p(),V=n("div"),B(Xn.$$.fragment),zm=p(),Fe=n("p"),Mm=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),al=n("em"),Em=a("tokenizers"),Pm=a(` library). Based on
`),Yn=n("a"),jm=a("Unigram"),Cm=a(`. This
tokenizer inherits from `),Ta=n("a"),Am=a("PreTrainedTokenizerFast"),Lm=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Im=p(),Ne=n("div"),B(Zn.$$.fragment),Sm=p(),il=n("p"),Nm=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),Om=p(),es=n("ul"),xa=n("li"),Dm=a("single sequence: "),ll=n("code"),Wm=a("[CLS] X [SEP]"),Um=p(),Fa=n("li"),Qm=a("pair of sequences: "),dl=n("code"),Hm=a("[CLS] A [SEP] B [SEP]"),Vm=p(),fe=n("div"),B(ts.$$.fragment),Jm=p(),cl=n("p"),Rm=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),Gm=p(),B(Yt.$$.fragment),Km=p(),pl=n("p"),Xm=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Ym=p(),Zt=n("div"),B(os.$$.fragment),Zm=p(),ns=n("p"),ef=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=n("code"),tf=a("prepare_for_model"),of=a(" method."),ep=p(),Ye=n("h2"),eo=n("a"),gl=n("span"),B(ss.$$.fragment),nf=p(),ml=n("span"),sf=a("BigBird specific outputs"),tp=p(),Ze=n("div"),B(rs.$$.fragment),rf=p(),as=n("p"),af=a("Output type of "),qa=n("a"),lf=a("BigBirdForPreTraining"),df=a("."),op=p(),et=n("h2"),to=n("a"),fl=n("span"),B(is.$$.fragment),cf=p(),ul=n("span"),pf=a("BigBirdModel"),np=p(),J=n("div"),B(ls.$$.fragment),hf=p(),ds=n("p"),gf=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cs=n("a"),mf=a("torch.nn.Module"),ff=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uf=p(),ps=n("p"),_f=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hs=n("a"),bf=a(`Attention is
all you need`),kf=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Bf=p(),Q=n("p"),vf=a("To behave as an decoder the model needs to be initialized with the "),_l=n("code"),$f=a("is_decoder"),wf=a(` argument of the configuration set
to `),bl=n("code"),yf=a("True"),Tf=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),kl=n("code"),xf=a("is_decoder"),Ff=a(` argument and
`),Bl=n("code"),qf=a("add_cross_attention"),zf=a(" set to "),vl=n("code"),Mf=a("True"),Ef=a("; an "),$l=n("code"),Pf=a("encoder_hidden_states"),jf=a(" is then expected as an input to the forward pass."),Cf=p(),ue=n("div"),B(gs.$$.fragment),Af=p(),tt=n("p"),Lf=a("The "),za=n("a"),If=a("BigBirdModel"),Sf=a(" forward method, overrides the "),wl=n("code"),Nf=a("__call__"),Of=a(" special method."),Df=p(),B(oo.$$.fragment),Wf=p(),B(no.$$.fragment),sp=p(),ot=n("h2"),so=n("a"),yl=n("span"),B(ms.$$.fragment),Uf=p(),Tl=n("span"),Qf=a("BigBirdForPreTraining"),rp=p(),nt=n("div"),B(fs.$$.fragment),Hf=p(),_e=n("div"),B(us.$$.fragment),Vf=p(),st=n("p"),Jf=a("The "),Ma=n("a"),Rf=a("BigBirdForPreTraining"),Gf=a(" forward method, overrides the "),xl=n("code"),Kf=a("__call__"),Xf=a(" special method."),Yf=p(),B(ro.$$.fragment),Zf=p(),B(ao.$$.fragment),ap=p(),rt=n("h2"),io=n("a"),Fl=n("span"),B(_s.$$.fragment),eu=p(),ql=n("span"),tu=a("BigBirdForCausalLM"),ip=p(),qe=n("div"),B(bs.$$.fragment),ou=p(),at=n("p"),nu=a("BigBird Model with a "),zl=n("code"),su=a("language modeling"),ru=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),ks=n("a"),au=a("torch.nn.Module"),iu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lu=p(),be=n("div"),B(Bs.$$.fragment),du=p(),it=n("p"),cu=a("The "),Ea=n("a"),pu=a("BigBirdForCausalLM"),hu=a(" forward method, overrides the "),Ml=n("code"),gu=a("__call__"),mu=a(" special method."),fu=p(),B(lo.$$.fragment),uu=p(),B(co.$$.fragment),lp=p(),lt=n("h2"),po=n("a"),El=n("span"),B(vs.$$.fragment),_u=p(),Pl=n("span"),bu=a("BigBirdForMaskedLM"),dp=p(),ze=n("div"),B($s.$$.fragment),ku=p(),dt=n("p"),Bu=a("BigBird Model with a "),jl=n("code"),vu=a("language modeling"),$u=a(` head on top.
This model is a PyTorch `),ws=n("a"),wu=a("torch.nn.Module"),yu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tu=p(),K=n("div"),B(ys.$$.fragment),xu=p(),ct=n("p"),Fu=a("The "),Pa=n("a"),qu=a("BigBirdForMaskedLM"),zu=a(" forward method, overrides the "),Cl=n("code"),Mu=a("__call__"),Eu=a(" special method."),Pu=p(),B(ho.$$.fragment),ju=p(),B(go.$$.fragment),Cu=p(),B(mo.$$.fragment),cp=p(),pt=n("h2"),fo=n("a"),Al=n("span"),B(Ts.$$.fragment),Au=p(),Ll=n("span"),Lu=a("BigBirdForSequenceClassification"),pp=p(),ce=n("div"),B(xs.$$.fragment),Iu=p(),Il=n("p"),Su=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Nu=p(),Fs=n("p"),Ou=a("This model is a PyTorch "),qs=n("a"),Du=a("torch.nn.Module"),Wu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uu=p(),U=n("div"),B(zs.$$.fragment),Qu=p(),ht=n("p"),Hu=a("The "),ja=n("a"),Vu=a("BigBirdForSequenceClassification"),Ju=a(" forward method, overrides the "),Sl=n("code"),Ru=a("__call__"),Gu=a(" special method."),Ku=p(),B(uo.$$.fragment),Xu=p(),B(_o.$$.fragment),Yu=p(),B(bo.$$.fragment),Zu=p(),B(ko.$$.fragment),e_=p(),B(Bo.$$.fragment),hp=p(),gt=n("h2"),vo=n("a"),Nl=n("span"),B(Ms.$$.fragment),t_=p(),Ol=n("span"),o_=a("BigBirdForMultipleChoice"),gp=p(),pe=n("div"),B(Es.$$.fragment),n_=p(),Dl=n("p"),s_=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),r_=p(),Ps=n("p"),a_=a("This model is a PyTorch "),js=n("a"),i_=a("torch.nn.Module"),l_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),d_=p(),ke=n("div"),B(Cs.$$.fragment),c_=p(),mt=n("p"),p_=a("The "),Ca=n("a"),h_=a("BigBirdForMultipleChoice"),g_=a(" forward method, overrides the "),Wl=n("code"),m_=a("__call__"),f_=a(" special method."),u_=p(),B($o.$$.fragment),__=p(),B(wo.$$.fragment),mp=p(),ft=n("h2"),yo=n("a"),Ul=n("span"),B(As.$$.fragment),b_=p(),Ql=n("span"),k_=a("BigBirdForTokenClassification"),fp=p(),he=n("div"),B(Ls.$$.fragment),B_=p(),Hl=n("p"),v_=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$_=p(),Is=n("p"),w_=a("This model is a PyTorch "),Ss=n("a"),y_=a("torch.nn.Module"),T_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=p(),X=n("div"),B(Ns.$$.fragment),F_=p(),ut=n("p"),q_=a("The "),Aa=n("a"),z_=a("BigBirdForTokenClassification"),M_=a(" forward method, overrides the "),Vl=n("code"),E_=a("__call__"),P_=a(" special method."),j_=p(),B(To.$$.fragment),C_=p(),B(xo.$$.fragment),A_=p(),B(Fo.$$.fragment),up=p(),_t=n("h2"),qo=n("a"),Jl=n("span"),B(Os.$$.fragment),L_=p(),Rl=n("span"),I_=a("BigBirdForQuestionAnswering"),_p=p(),ge=n("div"),B(Ds.$$.fragment),S_=p(),bt=n("p"),N_=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=n("code"),O_=a("span start logits"),D_=a(" and "),Kl=n("code"),W_=a("span end logits"),U_=a(")."),Q_=p(),Ws=n("p"),H_=a("This model is a PyTorch "),Us=n("a"),V_=a("torch.nn.Module"),J_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),R_=p(),Y=n("div"),B(Qs.$$.fragment),G_=p(),kt=n("p"),K_=a("The "),La=n("a"),X_=a("BigBirdForQuestionAnswering"),Y_=a(" forward method, overrides the "),Xl=n("code"),Z_=a("__call__"),eb=a(" special method."),tb=p(),B(zo.$$.fragment),ob=p(),B(Mo.$$.fragment),nb=p(),B(Eo.$$.fragment),bp=p(),Bt=n("h2"),Po=n("a"),Yl=n("span"),B(Hs.$$.fragment),sb=p(),Zl=n("span"),rb=a("FlaxBigBirdModel"),kp=p(),A=n("div"),B(Vs.$$.fragment),ab=p(),ed=n("p"),ib=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),lb=p(),Js=n("p"),db=a("This model inherits from "),Ia=n("a"),cb=a("FlaxPreTrainedModel"),pb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hb=p(),Rs=n("p"),gb=a("This model is also a Flax Linen "),Gs=n("a"),mb=a("flax.linen.Module"),fb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ub=p(),td=n("p"),_b=a("Finally, this model supports inherent JAX features such as:"),bb=p(),Me=n("ul"),od=n("li"),Ks=n("a"),kb=a("Just-In-Time (JIT) compilation"),Bb=p(),nd=n("li"),Xs=n("a"),vb=a("Automatic Differentiation"),$b=p(),sd=n("li"),Ys=n("a"),wb=a("Vectorization"),yb=p(),rd=n("li"),Zs=n("a"),Tb=a("Parallelization"),xb=p(),Be=n("div"),B(er.$$.fragment),Fb=p(),vt=n("p"),qb=a("The "),ad=n("code"),zb=a("FlaxBigBirdPreTrainedModel"),Mb=a(" forward method, overrides the "),id=n("code"),Eb=a("__call__"),Pb=a(" special method."),jb=p(),B(jo.$$.fragment),Cb=p(),B(Co.$$.fragment),Bp=p(),$t=n("h2"),Ao=n("a"),ld=n("span"),B(tr.$$.fragment),Ab=p(),dd=n("span"),Lb=a("FlaxBigBirdForPreTraining"),vp=p(),L=n("div"),B(or.$$.fragment),Ib=p(),wt=n("p"),Sb=a("BigBird Model with two heads on top as done during the pretraining: a "),cd=n("code"),Nb=a("masked language modeling"),Ob=a(" head and a "),pd=n("code"),Db=a("next sentence prediction (classification)"),Wb=a(" head."),Ub=p(),nr=n("p"),Qb=a("This model inherits from "),Sa=n("a"),Hb=a("FlaxPreTrainedModel"),Vb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jb=p(),sr=n("p"),Rb=a("This model is also a Flax Linen "),rr=n("a"),Gb=a("flax.linen.Module"),Kb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xb=p(),hd=n("p"),Yb=a("Finally, this model supports inherent JAX features such as:"),Zb=p(),Ee=n("ul"),gd=n("li"),ar=n("a"),ek=a("Just-In-Time (JIT) compilation"),tk=p(),md=n("li"),ir=n("a"),ok=a("Automatic Differentiation"),nk=p(),fd=n("li"),lr=n("a"),sk=a("Vectorization"),rk=p(),ud=n("li"),dr=n("a"),ak=a("Parallelization"),ik=p(),ve=n("div"),B(cr.$$.fragment),lk=p(),yt=n("p"),dk=a("The "),_d=n("code"),ck=a("FlaxBigBirdPreTrainedModel"),pk=a(" forward method, overrides the "),bd=n("code"),hk=a("__call__"),gk=a(" special method."),mk=p(),B(Lo.$$.fragment),fk=p(),B(Io.$$.fragment),$p=p(),Tt=n("h2"),So=n("a"),kd=n("span"),B(pr.$$.fragment),uk=p(),Bd=n("span"),_k=a("FlaxBigBirdForMaskedLM"),wp=p(),I=n("div"),B(hr.$$.fragment),bk=p(),gr=n("p"),kk=a("BigBird Model with a "),vd=n("code"),Bk=a("language modeling"),vk=a(" head on top."),$k=p(),mr=n("p"),wk=a("This model inherits from "),Na=n("a"),yk=a("FlaxPreTrainedModel"),Tk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xk=p(),fr=n("p"),Fk=a("This model is also a Flax Linen "),ur=n("a"),qk=a("flax.linen.Module"),zk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mk=p(),$d=n("p"),Ek=a("Finally, this model supports inherent JAX features such as:"),Pk=p(),Pe=n("ul"),wd=n("li"),_r=n("a"),jk=a("Just-In-Time (JIT) compilation"),Ck=p(),yd=n("li"),br=n("a"),Ak=a("Automatic Differentiation"),Lk=p(),Td=n("li"),kr=n("a"),Ik=a("Vectorization"),Sk=p(),xd=n("li"),Br=n("a"),Nk=a("Parallelization"),Ok=p(),$e=n("div"),B(vr.$$.fragment),Dk=p(),xt=n("p"),Wk=a("The "),Fd=n("code"),Uk=a("FlaxBigBirdPreTrainedModel"),Qk=a(" forward method, overrides the "),qd=n("code"),Hk=a("__call__"),Vk=a(" special method."),Jk=p(),B(No.$$.fragment),Rk=p(),B(Oo.$$.fragment),yp=p(),Ft=n("h2"),Do=n("a"),zd=n("span"),B($r.$$.fragment),Gk=p(),Md=n("span"),Kk=a("FlaxBigBirdForSequenceClassification"),Tp=p(),S=n("div"),B(wr.$$.fragment),Xk=p(),Ed=n("p"),Yk=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Zk=p(),yr=n("p"),eB=a("This model inherits from "),Oa=n("a"),tB=a("FlaxPreTrainedModel"),oB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nB=p(),Tr=n("p"),sB=a("This model is also a Flax Linen "),xr=n("a"),rB=a("flax.linen.Module"),aB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iB=p(),Pd=n("p"),lB=a("Finally, this model supports inherent JAX features such as:"),dB=p(),je=n("ul"),jd=n("li"),Fr=n("a"),cB=a("Just-In-Time (JIT) compilation"),pB=p(),Cd=n("li"),qr=n("a"),hB=a("Automatic Differentiation"),gB=p(),Ad=n("li"),zr=n("a"),mB=a("Vectorization"),fB=p(),Ld=n("li"),Mr=n("a"),uB=a("Parallelization"),_B=p(),we=n("div"),B(Er.$$.fragment),bB=p(),qt=n("p"),kB=a("The "),Id=n("code"),BB=a("FlaxBigBirdPreTrainedModel"),vB=a(" forward method, overrides the "),Sd=n("code"),$B=a("__call__"),wB=a(" special method."),yB=p(),B(Wo.$$.fragment),TB=p(),B(Uo.$$.fragment),xp=p(),zt=n("h2"),Qo=n("a"),Nd=n("span"),B(Pr.$$.fragment),xB=p(),Od=n("span"),FB=a("FlaxBigBirdForMultipleChoice"),Fp=p(),N=n("div"),B(jr.$$.fragment),qB=p(),Dd=n("p"),zB=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),MB=p(),Cr=n("p"),EB=a("This model inherits from "),Da=n("a"),PB=a("FlaxPreTrainedModel"),jB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CB=p(),Ar=n("p"),AB=a("This model is also a Flax Linen "),Lr=n("a"),LB=a("flax.linen.Module"),IB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),SB=p(),Wd=n("p"),NB=a("Finally, this model supports inherent JAX features such as:"),OB=p(),Ce=n("ul"),Ud=n("li"),Ir=n("a"),DB=a("Just-In-Time (JIT) compilation"),WB=p(),Qd=n("li"),Sr=n("a"),UB=a("Automatic Differentiation"),QB=p(),Hd=n("li"),Nr=n("a"),HB=a("Vectorization"),VB=p(),Vd=n("li"),Or=n("a"),JB=a("Parallelization"),RB=p(),ye=n("div"),B(Dr.$$.fragment),GB=p(),Mt=n("p"),KB=a("The "),Jd=n("code"),XB=a("FlaxBigBirdPreTrainedModel"),YB=a(" forward method, overrides the "),Rd=n("code"),ZB=a("__call__"),ev=a(" special method."),tv=p(),B(Ho.$$.fragment),ov=p(),B(Vo.$$.fragment),qp=p(),Et=n("h2"),Jo=n("a"),Gd=n("span"),B(Wr.$$.fragment),nv=p(),Kd=n("span"),sv=a("FlaxBigBirdForTokenClassification"),zp=p(),O=n("div"),B(Ur.$$.fragment),rv=p(),Xd=n("p"),av=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iv=p(),Qr=n("p"),lv=a("This model inherits from "),Wa=n("a"),dv=a("FlaxPreTrainedModel"),cv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pv=p(),Hr=n("p"),hv=a("This model is also a Flax Linen "),Vr=n("a"),gv=a("flax.linen.Module"),mv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fv=p(),Yd=n("p"),uv=a("Finally, this model supports inherent JAX features such as:"),_v=p(),Ae=n("ul"),Zd=n("li"),Jr=n("a"),bv=a("Just-In-Time (JIT) compilation"),kv=p(),ec=n("li"),Rr=n("a"),Bv=a("Automatic Differentiation"),vv=p(),tc=n("li"),Gr=n("a"),$v=a("Vectorization"),wv=p(),oc=n("li"),Kr=n("a"),yv=a("Parallelization"),Tv=p(),Te=n("div"),B(Xr.$$.fragment),xv=p(),Pt=n("p"),Fv=a("The "),nc=n("code"),qv=a("FlaxBigBirdPreTrainedModel"),zv=a(" forward method, overrides the "),sc=n("code"),Mv=a("__call__"),Ev=a(" special method."),Pv=p(),B(Ro.$$.fragment),jv=p(),B(Go.$$.fragment),Mp=p(),jt=n("h2"),Ko=n("a"),rc=n("span"),B(Yr.$$.fragment),Cv=p(),ac=n("span"),Av=a("FlaxBigBirdForQuestionAnswering"),Ep=p(),D=n("div"),B(Zr.$$.fragment),Lv=p(),Ct=n("p"),Iv=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ic=n("code"),Sv=a("span start logits"),Nv=a(" and "),lc=n("code"),Ov=a("span end logits"),Dv=a(")."),Wv=p(),ea=n("p"),Uv=a("This model inherits from "),Ua=n("a"),Qv=a("FlaxPreTrainedModel"),Hv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vv=p(),ta=n("p"),Jv=a("This model is also a Flax Linen "),oa=n("a"),Rv=a("flax.linen.Module"),Gv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kv=p(),dc=n("p"),Xv=a("Finally, this model supports inherent JAX features such as:"),Yv=p(),Le=n("ul"),cc=n("li"),na=n("a"),Zv=a("Just-In-Time (JIT) compilation"),e$=p(),pc=n("li"),sa=n("a"),t$=a("Automatic Differentiation"),o$=p(),hc=n("li"),ra=n("a"),n$=a("Vectorization"),s$=p(),gc=n("li"),aa=n("a"),r$=a("Parallelization"),a$=p(),xe=n("div"),B(ia.$$.fragment),i$=p(),At=n("p"),l$=a("The "),Qa=n("a"),d$=a("FlaxBigBirdForQuestionAnswering"),c$=a(" forward method, overrides the "),mc=n("code"),p$=a("__call__"),h$=a(" special method."),g$=p(),B(Xo.$$.fragment),m$=p(),B(Yo.$$.fragment),this.h()},l(o){const u=DT('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(t),_=h(o),g=s(o,"H1",{class:!0});var la=r(g);f=s(la,"A",{id:!0,class:!0,href:!0});var fc=r(f);b=s(fc,"SPAN",{});var uc=r(b);v(l.$$.fragment,uc),uc.forEach(t),fc.forEach(t),m=h(la),F=s(la,"SPAN",{});var _c=r(F);Ah=i(_c,"BigBird"),_c.forEach(t),la.forEach(t),Dc=h(o),He=s(o,"H2",{class:!0});var da=r(He);St=s(da,"A",{id:!0,class:!0,href:!0});var bc=r(St);bi=s(bc,"SPAN",{});var kc=r(bi);v(yn.$$.fragment,kc),kc.forEach(t),bc.forEach(t),Lh=h(da),ki=s(da,"SPAN",{});var Bc=r(ki);Ih=i(Bc,"Overview"),Bc.forEach(t),da.forEach(t),Wc=h(o),Nt=s(o,"P",{});var ca=r(Nt);Sh=i(ca,"The BigBird model was proposed in "),Tn=s(ca,"A",{href:!0,rel:!0});var vc=r(Tn);Nh=i(vc,"Big Bird: Transformers for Longer Sequences"),vc.forEach(t),Oh=i(ca,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),ca.forEach(t),Uc=h(o),ma=s(o,"P",{});var $c=r(ma);Dh=i($c,"The abstract from the paper is the following:"),$c.forEach(t),Qc=h(o),fa=s(o,"P",{});var wc=r(fa);Bi=s(wc,"EM",{});var yc=r(Bi);Wh=i(yc,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),yc.forEach(t),wc.forEach(t),Hc=h(o),ua=s(o,"P",{});var Tc=r(ua);Uh=i(Tc,"Tips:"),Tc.forEach(t),Vc=h(o),H=s(o,"UL",{});var R=r(H);xn=s(R,"LI",{});var pa=r(xn);Qh=i(pa,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Fn=s(pa,"A",{href:!0,rel:!0});var xc=r(Fn);Hh=i(xc,"this blog post"),xc.forEach(t),Vh=i(pa,"."),pa.forEach(t),Jh=h(R),de=s(R,"LI",{});var me=r(de);Rh=i(me,"BigBird comes with 2 implementations: "),vi=s(me,"STRONG",{});var Fc=r(vi);Gh=i(Fc,"original_full"),Fc.forEach(t),Kh=i(me," & "),$i=s(me,"STRONG",{});var qc=r($i);Xh=i(qc,"block_sparse"),qc.forEach(t),Yh=i(me,`. For the sequence length < 1024, using
`),wi=s(me,"STRONG",{});var zc=r(wi);Zh=i(zc,"original_full"),zc.forEach(t),eg=i(me," is advised as there is no benefit in using "),yi=s(me,"STRONG",{});var Mc=r(yi);tg=i(Mc,"block_sparse"),Mc.forEach(t),og=i(me," attention."),me.forEach(t),ng=h(R),Ti=s(R,"LI",{});var Ec=r(Ti);sg=i(Ec,"The code currently uses window size of 3 blocks and 2 global blocks."),Ec.forEach(t),rg=h(R),xi=s(R,"LI",{});var Pc=r(xi);ag=i(Pc,"Sequence length must be divisible by block size."),Pc.forEach(t),ig=h(R),qn=s(R,"LI",{});var ha=r(qn);lg=i(ha,"Current implementation supports only "),Fi=s(ha,"STRONG",{});var jc=r(Fi);dg=i(jc,"ITC"),jc.forEach(t),cg=i(ha,"."),ha.forEach(t),pg=h(R),_a=s(R,"LI",{});var Ha=r(_a);hg=i(Ha,"Current implementation doesn\u2019t support "),qi=s(Ha,"STRONG",{});var Cc=r(qi);gg=i(Cc,"num_random_blocks = 0"),Cc.forEach(t),Ha.forEach(t),R.forEach(t),Jc=h(o),Ie=s(o,"P",{});var Lt=r(Ie);mg=i(Lt,"This model was contributed by "),zn=s(Lt,"A",{href:!0,rel:!0});var Ac=r(zn);fg=i(Ac,"vasudevgupta"),Ac.forEach(t),ug=i(Lt,`. The original code can be found
`),Mn=s(Lt,"A",{href:!0,rel:!0});var Lc=r(Mn);_g=i(Lc,"here"),Lc.forEach(t),bg=i(Lt,"."),Lt.forEach(t),Rc=h(o),Ve=s(o,"H2",{class:!0});var ga=r(Ve);Ot=s(ga,"A",{id:!0,class:!0,href:!0});var Ic=r(Ot);zi=s(Ic,"SPAN",{});var Sc=r(zi);v(En.$$.fragment,Sc),Sc.forEach(t),Ic.forEach(t),kg=h(ga),Mi=s(ga,"SPAN",{});var Nc=r(Mi);Bg=i(Nc,"BigBirdConfig"),Nc.forEach(t),ga.forEach(t),Gc=h(o),j=s(o,"DIV",{class:!0});var W=r(j);v(Pn.$$.fragment,W),vg=h(W),Je=s(W,"P",{});var It=r(Je);$g=i(It,"This is the configuration class to store the configuration of a "),ba=s(It,"A",{href:!0});var Oc=r(ba);wg=i(Oc,"BigBirdModel"),Oc.forEach(t),yg=i(It,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),jn=s(It,"A",{href:!0,rel:!0});var k$=r(jn);Tg=i(k$,"google/bigbird-roberta-base"),k$.forEach(t),xg=i(It," architecture."),It.forEach(t),Fg=h(W),Re=s(W,"P",{});var Va=r(Re);qg=i(Va,"Configuration objects inherit from "),ka=s(Va,"A",{href:!0});var B$=r(ka);zg=i(B$,"PretrainedConfig"),B$.forEach(t),Mg=i(Va,` and can be used to control the model outputs. Read the
documentation from `),Ba=s(Va,"A",{href:!0});var v$=r(Ba);Eg=i(v$,"PretrainedConfig"),v$.forEach(t),Pg=i(Va," for more information."),Va.forEach(t),jg=h(W),v(Dt.$$.fragment,W),Cg=h(W),Ei=s(W,"BLOCKQUOTE",{});var $$=r(Ei);Pi=s($$,"BLOCKQUOTE",{});var w$=r(Pi);ji=s(w$,"BLOCKQUOTE",{});var y$=r(ji);Ci=s(y$,"P",{});var T$=r(Ci);Ag=i(T$,"from transformers import BigBirdModel, BigBirdConfig"),T$.forEach(t),y$.forEach(t),w$.forEach(t),$$.forEach(t),Lg=h(W),Ai=s(W,"BLOCKQUOTE",{});var x$=r(Ai);Li=s(x$,"BLOCKQUOTE",{});var F$=r(Li);Cn=s(F$,"BLOCKQUOTE",{});var jp=r(Cn);Wt=s(jp,"H1",{class:!0});var Cp=r(Wt);Ut=s(Cp,"A",{id:!0,class:!0,href:!0});var q$=r(Ut);Ii=s(q$,"SPAN",{});var z$=r(Ii);v(An.$$.fragment,z$),z$.forEach(t),q$.forEach(t),Ig=h(Cp),Si=s(Cp,"SPAN",{});var M$=r(Si);Sg=i(M$,"Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),M$.forEach(t),Cp.forEach(t),Ng=h(jp),Ni=s(jp,"P",{});var E$=r(Ni);Og=i(E$,"BigBirdConfig()"),E$.forEach(t),jp.forEach(t),F$.forEach(t),x$.forEach(t),Dg=h(W),Oi=s(W,"BLOCKQUOTE",{});var P$=r(Oi);Di=s(P$,"BLOCKQUOTE",{});var j$=r(Di);Ln=s(j$,"BLOCKQUOTE",{});var Ap=r(Ln);Qt=s(Ap,"H1",{class:!0});var Lp=r(Qt);Ht=s(Lp,"A",{id:!0,class:!0,href:!0});var C$=r(Ht);Wi=s(C$,"SPAN",{});var A$=r(Wi);v(In.$$.fragment,A$),A$.forEach(t),C$.forEach(t),Wg=h(Lp),Ui=s(Lp,"SPAN",{});var L$=r(Ui);Ug=i(L$,"Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),L$.forEach(t),Lp.forEach(t),Qg=h(Ap),Qi=s(Ap,"P",{});var I$=r(Qi);Hg=i(I$,"BigBirdModel(configuration)"),I$.forEach(t),Ap.forEach(t),j$.forEach(t),P$.forEach(t),Vg=h(W),Hi=s(W,"BLOCKQUOTE",{});var S$=r(Hi);Vi=s(S$,"BLOCKQUOTE",{});var N$=r(Vi);Ji=s(N$,"BLOCKQUOTE",{});var O$=r(Ji);Vt=s(O$,"H1",{class:!0});var Ip=r(Vt);Jt=s(Ip,"A",{id:!0,class:!0,href:!0});var D$=r(Jt);Ri=s(D$,"SPAN",{});var W$=r(Ri);v(Sn.$$.fragment,W$),W$.forEach(t),D$.forEach(t),Jg=h(Ip),Gi=s(Ip,"SPAN",{});var U$=r(Gi);Rg=i(U$,"Accessing the model configuration >>> configuration = model.config"),U$.forEach(t),Ip.forEach(t),O$.forEach(t),N$.forEach(t),S$.forEach(t),W.forEach(t),Kc=h(o),Ge=s(o,"H2",{class:!0});var Sp=r(Ge);Rt=s(Sp,"A",{id:!0,class:!0,href:!0});var Q$=r(Rt);Ki=s(Q$,"SPAN",{});var H$=r(Ki);v(Nn.$$.fragment,H$),H$.forEach(t),Q$.forEach(t),Gg=h(Sp),Xi=s(Sp,"SPAN",{});var V$=r(Xi);Kg=i(V$,"BigBirdTokenizer"),V$.forEach(t),Sp.forEach(t),Xc=h(o),C=s(o,"DIV",{class:!0});var Z=r(C);v(On.$$.fragment,Z),Xg=h(Z),Dn=s(Z,"P",{});var Np=r(Dn);Yg=i(Np,"Construct a BigBird tokenizer. Based on "),Wn=s(Np,"A",{href:!0,rel:!0});var J$=r(Wn);Zg=i(J$,"SentencePiece"),J$.forEach(t),em=i(Np,"."),Np.forEach(t),tm=h(Z),Un=s(Z,"P",{});var Op=r(Un);om=i(Op,"This tokenizer inherits from "),va=s(Op,"A",{href:!0});var R$=r(va);nm=i(R$,"PreTrainedTokenizer"),R$.forEach(t),sm=i(Op,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Op.forEach(t),rm=h(Z),Se=s(Z,"DIV",{class:!0});var Ja=r(Se);v(Qn.$$.fragment,Ja),am=h(Ja),Yi=s(Ja,"P",{});var G$=r(Yi);im=i(G$,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),G$.forEach(t),lm=h(Ja),Hn=s(Ja,"UL",{});var Dp=r(Hn);$a=s(Dp,"LI",{});var f$=r($a);dm=i(f$,"single sequence: "),Zi=s(f$,"CODE",{});var K$=r(Zi);cm=i(K$,"[CLS] X [SEP]"),K$.forEach(t),f$.forEach(t),pm=h(Dp),wa=s(Dp,"LI",{});var u$=r(wa);hm=i(u$,"pair of sequences: "),el=s(u$,"CODE",{});var X$=r(el);gm=i(X$,"[CLS] A [SEP] B [SEP]"),X$.forEach(t),u$.forEach(t),Dp.forEach(t),Ja.forEach(t),mm=h(Z),Gt=s(Z,"DIV",{class:!0});var Wp=r(Gt);v(Vn.$$.fragment,Wp),fm=h(Wp),Jn=s(Wp,"P",{});var Up=r(Jn);um=i(Up,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tl=s(Up,"CODE",{});var Y$=r(tl);_m=i(Y$,"prepare_for_model"),Y$.forEach(t),bm=i(Up," method."),Up.forEach(t),Wp.forEach(t),km=h(Z),Kt=s(Z,"DIV",{class:!0});var Qp=r(Kt);v(Rn.$$.fragment,Qp),Bm=h(Qp),Ke=s(Qp,"P",{});var Ra=r(Ke);vm=i(Ra,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),ol=s(Ra,"CODE",{});var Z$=r(ol);$m=i(Z$,"token_ids_1"),Z$.forEach(t),wm=i(Ra," is "),nl=s(Ra,"CODE",{});var ew=r(nl);ym=i(ew,"None"),ew.forEach(t),Tm=i(Ra,", this method only returns the first portion of the mask (0s)."),Ra.forEach(t),Qp.forEach(t),xm=h(Z),ya=s(Z,"DIV",{class:!0});var tw=r(ya);v(Gn.$$.fragment,tw),tw.forEach(t),Z.forEach(t),Yc=h(o),Xe=s(o,"H2",{class:!0});var Hp=r(Xe);Xt=s(Hp,"A",{id:!0,class:!0,href:!0});var ow=r(Xt);sl=s(ow,"SPAN",{});var nw=r(sl);v(Kn.$$.fragment,nw),nw.forEach(t),ow.forEach(t),Fm=h(Hp),rl=s(Hp,"SPAN",{});var sw=r(rl);qm=i(sw,"BigBirdTokenizerFast"),sw.forEach(t),Hp.forEach(t),Zc=h(o),V=s(o,"DIV",{class:!0});var Oe=r(V);v(Xn.$$.fragment,Oe),zm=h(Oe),Fe=s(Oe,"P",{});var Zo=r(Fe);Mm=i(Zo,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),al=s(Zo,"EM",{});var rw=r(al);Em=i(rw,"tokenizers"),rw.forEach(t),Pm=i(Zo,` library). Based on
`),Yn=s(Zo,"A",{href:!0,rel:!0});var aw=r(Yn);jm=i(aw,"Unigram"),aw.forEach(t),Cm=i(Zo,`. This
tokenizer inherits from `),Ta=s(Zo,"A",{href:!0});var iw=r(Ta);Am=i(iw,"PreTrainedTokenizerFast"),iw.forEach(t),Lm=i(Zo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Zo.forEach(t),Im=h(Oe),Ne=s(Oe,"DIV",{class:!0});var Ga=r(Ne);v(Zn.$$.fragment,Ga),Sm=h(Ga),il=s(Ga,"P",{});var lw=r(il);Nm=i(lw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),lw.forEach(t),Om=h(Ga),es=s(Ga,"UL",{});var Vp=r(es);xa=s(Vp,"LI",{});var _$=r(xa);Dm=i(_$,"single sequence: "),ll=s(_$,"CODE",{});var dw=r(ll);Wm=i(dw,"[CLS] X [SEP]"),dw.forEach(t),_$.forEach(t),Um=h(Vp),Fa=s(Vp,"LI",{});var b$=r(Fa);Qm=i(b$,"pair of sequences: "),dl=s(b$,"CODE",{});var cw=r(dl);Hm=i(cw,"[CLS] A [SEP] B [SEP]"),cw.forEach(t),b$.forEach(t),Vp.forEach(t),Ga.forEach(t),Vm=h(Oe),fe=s(Oe,"DIV",{class:!0});var en=r(fe);v(ts.$$.fragment,en),Jm=h(en),cl=s(en,"P",{});var pw=r(cl);Rm=i(pw,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),pw.forEach(t),Gm=h(en),v(Yt.$$.fragment,en),Km=h(en),pl=s(en,"P",{});var hw=r(pl);Xm=i(hw,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),hw.forEach(t),en.forEach(t),Ym=h(Oe),Zt=s(Oe,"DIV",{class:!0});var Jp=r(Zt);v(os.$$.fragment,Jp),Zm=h(Jp),ns=s(Jp,"P",{});var Rp=r(ns);ef=i(Rp,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=s(Rp,"CODE",{});var gw=r(hl);tf=i(gw,"prepare_for_model"),gw.forEach(t),of=i(Rp," method."),Rp.forEach(t),Jp.forEach(t),Oe.forEach(t),ep=h(o),Ye=s(o,"H2",{class:!0});var Gp=r(Ye);eo=s(Gp,"A",{id:!0,class:!0,href:!0});var mw=r(eo);gl=s(mw,"SPAN",{});var fw=r(gl);v(ss.$$.fragment,fw),fw.forEach(t),mw.forEach(t),nf=h(Gp),ml=s(Gp,"SPAN",{});var uw=r(ml);sf=i(uw,"BigBird specific outputs"),uw.forEach(t),Gp.forEach(t),tp=h(o),Ze=s(o,"DIV",{class:!0});var Kp=r(Ze);v(rs.$$.fragment,Kp),rf=h(Kp),as=s(Kp,"P",{});var Xp=r(as);af=i(Xp,"Output type of "),qa=s(Xp,"A",{href:!0});var _w=r(qa);lf=i(_w,"BigBirdForPreTraining"),_w.forEach(t),df=i(Xp,"."),Xp.forEach(t),Kp.forEach(t),op=h(o),et=s(o,"H2",{class:!0});var Yp=r(et);to=s(Yp,"A",{id:!0,class:!0,href:!0});var bw=r(to);fl=s(bw,"SPAN",{});var kw=r(fl);v(is.$$.fragment,kw),kw.forEach(t),bw.forEach(t),cf=h(Yp),ul=s(Yp,"SPAN",{});var Bw=r(ul);pf=i(Bw,"BigBirdModel"),Bw.forEach(t),Yp.forEach(t),np=h(o),J=s(o,"DIV",{class:!0});var De=r(J);v(ls.$$.fragment,De),hf=h(De),ds=s(De,"P",{});var Zp=r(ds);gf=i(Zp,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cs=s(Zp,"A",{href:!0,rel:!0});var vw=r(cs);mf=i(vw,"torch.nn.Module"),vw.forEach(t),ff=i(Zp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zp.forEach(t),uf=h(De),ps=s(De,"P",{});var eh=r(ps);_f=i(eh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hs=s(eh,"A",{href:!0,rel:!0});var $w=r(hs);bf=i($w,`Attention is
all you need`),$w.forEach(t),kf=i(eh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),eh.forEach(t),Bf=h(De),Q=s(De,"P",{});var ee=r(Q);vf=i(ee,"To behave as an decoder the model needs to be initialized with the "),_l=s(ee,"CODE",{});var ww=r(_l);$f=i(ww,"is_decoder"),ww.forEach(t),wf=i(ee,` argument of the configuration set
to `),bl=s(ee,"CODE",{});var yw=r(bl);yf=i(yw,"True"),yw.forEach(t),Tf=i(ee,". To be used in a Seq2Seq model, the model needs to initialized with both "),kl=s(ee,"CODE",{});var Tw=r(kl);xf=i(Tw,"is_decoder"),Tw.forEach(t),Ff=i(ee,` argument and
`),Bl=s(ee,"CODE",{});var xw=r(Bl);qf=i(xw,"add_cross_attention"),xw.forEach(t),zf=i(ee," set to "),vl=s(ee,"CODE",{});var Fw=r(vl);Mf=i(Fw,"True"),Fw.forEach(t),Ef=i(ee,"; an "),$l=s(ee,"CODE",{});var qw=r($l);Pf=i(qw,"encoder_hidden_states"),qw.forEach(t),jf=i(ee," is then expected as an input to the forward pass."),ee.forEach(t),Cf=h(De),ue=s(De,"DIV",{class:!0});var tn=r(ue);v(gs.$$.fragment,tn),Af=h(tn),tt=s(tn,"P",{});var Ka=r(tt);Lf=i(Ka,"The "),za=s(Ka,"A",{href:!0});var zw=r(za);If=i(zw,"BigBirdModel"),zw.forEach(t),Sf=i(Ka," forward method, overrides the "),wl=s(Ka,"CODE",{});var Mw=r(wl);Nf=i(Mw,"__call__"),Mw.forEach(t),Of=i(Ka," special method."),Ka.forEach(t),Df=h(tn),v(oo.$$.fragment,tn),Wf=h(tn),v(no.$$.fragment,tn),tn.forEach(t),De.forEach(t),sp=h(o),ot=s(o,"H2",{class:!0});var th=r(ot);so=s(th,"A",{id:!0,class:!0,href:!0});var Ew=r(so);yl=s(Ew,"SPAN",{});var Pw=r(yl);v(ms.$$.fragment,Pw),Pw.forEach(t),Ew.forEach(t),Uf=h(th),Tl=s(th,"SPAN",{});var jw=r(Tl);Qf=i(jw,"BigBirdForPreTraining"),jw.forEach(t),th.forEach(t),rp=h(o),nt=s(o,"DIV",{class:!0});var oh=r(nt);v(fs.$$.fragment,oh),Hf=h(oh),_e=s(oh,"DIV",{class:!0});var on=r(_e);v(us.$$.fragment,on),Vf=h(on),st=s(on,"P",{});var Xa=r(st);Jf=i(Xa,"The "),Ma=s(Xa,"A",{href:!0});var Cw=r(Ma);Rf=i(Cw,"BigBirdForPreTraining"),Cw.forEach(t),Gf=i(Xa," forward method, overrides the "),xl=s(Xa,"CODE",{});var Aw=r(xl);Kf=i(Aw,"__call__"),Aw.forEach(t),Xf=i(Xa," special method."),Xa.forEach(t),Yf=h(on),v(ro.$$.fragment,on),Zf=h(on),v(ao.$$.fragment,on),on.forEach(t),oh.forEach(t),ap=h(o),rt=s(o,"H2",{class:!0});var nh=r(rt);io=s(nh,"A",{id:!0,class:!0,href:!0});var Lw=r(io);Fl=s(Lw,"SPAN",{});var Iw=r(Fl);v(_s.$$.fragment,Iw),Iw.forEach(t),Lw.forEach(t),eu=h(nh),ql=s(nh,"SPAN",{});var Sw=r(ql);tu=i(Sw,"BigBirdForCausalLM"),Sw.forEach(t),nh.forEach(t),ip=h(o),qe=s(o,"DIV",{class:!0});var Ya=r(qe);v(bs.$$.fragment,Ya),ou=h(Ya),at=s(Ya,"P",{});var Za=r(at);nu=i(Za,"BigBird Model with a "),zl=s(Za,"CODE",{});var Nw=r(zl);su=i(Nw,"language modeling"),Nw.forEach(t),ru=i(Za,` head on top for CLM fine-tuning.
This model is a PyTorch `),ks=s(Za,"A",{href:!0,rel:!0});var Ow=r(ks);au=i(Ow,"torch.nn.Module"),Ow.forEach(t),iu=i(Za,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Za.forEach(t),lu=h(Ya),be=s(Ya,"DIV",{class:!0});var nn=r(be);v(Bs.$$.fragment,nn),du=h(nn),it=s(nn,"P",{});var ei=r(it);cu=i(ei,"The "),Ea=s(ei,"A",{href:!0});var Dw=r(Ea);pu=i(Dw,"BigBirdForCausalLM"),Dw.forEach(t),hu=i(ei," forward method, overrides the "),Ml=s(ei,"CODE",{});var Ww=r(Ml);gu=i(Ww,"__call__"),Ww.forEach(t),mu=i(ei," special method."),ei.forEach(t),fu=h(nn),v(lo.$$.fragment,nn),uu=h(nn),v(co.$$.fragment,nn),nn.forEach(t),Ya.forEach(t),lp=h(o),lt=s(o,"H2",{class:!0});var sh=r(lt);po=s(sh,"A",{id:!0,class:!0,href:!0});var Uw=r(po);El=s(Uw,"SPAN",{});var Qw=r(El);v(vs.$$.fragment,Qw),Qw.forEach(t),Uw.forEach(t),_u=h(sh),Pl=s(sh,"SPAN",{});var Hw=r(Pl);bu=i(Hw,"BigBirdForMaskedLM"),Hw.forEach(t),sh.forEach(t),dp=h(o),ze=s(o,"DIV",{class:!0});var ti=r(ze);v($s.$$.fragment,ti),ku=h(ti),dt=s(ti,"P",{});var oi=r(dt);Bu=i(oi,"BigBird Model with a "),jl=s(oi,"CODE",{});var Vw=r(jl);vu=i(Vw,"language modeling"),Vw.forEach(t),$u=i(oi,` head on top.
This model is a PyTorch `),ws=s(oi,"A",{href:!0,rel:!0});var Jw=r(ws);wu=i(Jw,"torch.nn.Module"),Jw.forEach(t),yu=i(oi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oi.forEach(t),Tu=h(ti),K=s(ti,"DIV",{class:!0});var We=r(K);v(ys.$$.fragment,We),xu=h(We),ct=s(We,"P",{});var ni=r(ct);Fu=i(ni,"The "),Pa=s(ni,"A",{href:!0});var Rw=r(Pa);qu=i(Rw,"BigBirdForMaskedLM"),Rw.forEach(t),zu=i(ni," forward method, overrides the "),Cl=s(ni,"CODE",{});var Gw=r(Cl);Mu=i(Gw,"__call__"),Gw.forEach(t),Eu=i(ni," special method."),ni.forEach(t),Pu=h(We),v(ho.$$.fragment,We),ju=h(We),v(go.$$.fragment,We),Cu=h(We),v(mo.$$.fragment,We),We.forEach(t),ti.forEach(t),cp=h(o),pt=s(o,"H2",{class:!0});var rh=r(pt);fo=s(rh,"A",{id:!0,class:!0,href:!0});var Kw=r(fo);Al=s(Kw,"SPAN",{});var Xw=r(Al);v(Ts.$$.fragment,Xw),Xw.forEach(t),Kw.forEach(t),Au=h(rh),Ll=s(rh,"SPAN",{});var Yw=r(Ll);Lu=i(Yw,"BigBirdForSequenceClassification"),Yw.forEach(t),rh.forEach(t),pp=h(o),ce=s(o,"DIV",{class:!0});var sn=r(ce);v(xs.$$.fragment,sn),Iu=h(sn),Il=s(sn,"P",{});var Zw=r(Il);Su=i(Zw,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Zw.forEach(t),Nu=h(sn),Fs=s(sn,"P",{});var ah=r(Fs);Ou=i(ah,"This model is a PyTorch "),qs=s(ah,"A",{href:!0,rel:!0});var e1=r(qs);Du=i(e1,"torch.nn.Module"),e1.forEach(t),Wu=i(ah,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ah.forEach(t),Uu=h(sn),U=s(sn,"DIV",{class:!0});var te=r(U);v(zs.$$.fragment,te),Qu=h(te),ht=s(te,"P",{});var si=r(ht);Hu=i(si,"The "),ja=s(si,"A",{href:!0});var t1=r(ja);Vu=i(t1,"BigBirdForSequenceClassification"),t1.forEach(t),Ju=i(si," forward method, overrides the "),Sl=s(si,"CODE",{});var o1=r(Sl);Ru=i(o1,"__call__"),o1.forEach(t),Gu=i(si," special method."),si.forEach(t),Ku=h(te),v(uo.$$.fragment,te),Xu=h(te),v(_o.$$.fragment,te),Yu=h(te),v(bo.$$.fragment,te),Zu=h(te),v(ko.$$.fragment,te),e_=h(te),v(Bo.$$.fragment,te),te.forEach(t),sn.forEach(t),hp=h(o),gt=s(o,"H2",{class:!0});var ih=r(gt);vo=s(ih,"A",{id:!0,class:!0,href:!0});var n1=r(vo);Nl=s(n1,"SPAN",{});var s1=r(Nl);v(Ms.$$.fragment,s1),s1.forEach(t),n1.forEach(t),t_=h(ih),Ol=s(ih,"SPAN",{});var r1=r(Ol);o_=i(r1,"BigBirdForMultipleChoice"),r1.forEach(t),ih.forEach(t),gp=h(o),pe=s(o,"DIV",{class:!0});var rn=r(pe);v(Es.$$.fragment,rn),n_=h(rn),Dl=s(rn,"P",{});var a1=r(Dl);s_=i(a1,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),a1.forEach(t),r_=h(rn),Ps=s(rn,"P",{});var lh=r(Ps);a_=i(lh,"This model is a PyTorch "),js=s(lh,"A",{href:!0,rel:!0});var i1=r(js);i_=i(i1,"torch.nn.Module"),i1.forEach(t),l_=i(lh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lh.forEach(t),d_=h(rn),ke=s(rn,"DIV",{class:!0});var an=r(ke);v(Cs.$$.fragment,an),c_=h(an),mt=s(an,"P",{});var ri=r(mt);p_=i(ri,"The "),Ca=s(ri,"A",{href:!0});var l1=r(Ca);h_=i(l1,"BigBirdForMultipleChoice"),l1.forEach(t),g_=i(ri," forward method, overrides the "),Wl=s(ri,"CODE",{});var d1=r(Wl);m_=i(d1,"__call__"),d1.forEach(t),f_=i(ri," special method."),ri.forEach(t),u_=h(an),v($o.$$.fragment,an),__=h(an),v(wo.$$.fragment,an),an.forEach(t),rn.forEach(t),mp=h(o),ft=s(o,"H2",{class:!0});var dh=r(ft);yo=s(dh,"A",{id:!0,class:!0,href:!0});var c1=r(yo);Ul=s(c1,"SPAN",{});var p1=r(Ul);v(As.$$.fragment,p1),p1.forEach(t),c1.forEach(t),b_=h(dh),Ql=s(dh,"SPAN",{});var h1=r(Ql);k_=i(h1,"BigBirdForTokenClassification"),h1.forEach(t),dh.forEach(t),fp=h(o),he=s(o,"DIV",{class:!0});var ln=r(he);v(Ls.$$.fragment,ln),B_=h(ln),Hl=s(ln,"P",{});var g1=r(Hl);v_=i(g1,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),g1.forEach(t),$_=h(ln),Is=s(ln,"P",{});var ch=r(Is);w_=i(ch,"This model is a PyTorch "),Ss=s(ch,"A",{href:!0,rel:!0});var m1=r(Ss);y_=i(m1,"torch.nn.Module"),m1.forEach(t),T_=i(ch,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ch.forEach(t),x_=h(ln),X=s(ln,"DIV",{class:!0});var Ue=r(X);v(Ns.$$.fragment,Ue),F_=h(Ue),ut=s(Ue,"P",{});var ai=r(ut);q_=i(ai,"The "),Aa=s(ai,"A",{href:!0});var f1=r(Aa);z_=i(f1,"BigBirdForTokenClassification"),f1.forEach(t),M_=i(ai," forward method, overrides the "),Vl=s(ai,"CODE",{});var u1=r(Vl);E_=i(u1,"__call__"),u1.forEach(t),P_=i(ai," special method."),ai.forEach(t),j_=h(Ue),v(To.$$.fragment,Ue),C_=h(Ue),v(xo.$$.fragment,Ue),A_=h(Ue),v(Fo.$$.fragment,Ue),Ue.forEach(t),ln.forEach(t),up=h(o),_t=s(o,"H2",{class:!0});var ph=r(_t);qo=s(ph,"A",{id:!0,class:!0,href:!0});var _1=r(qo);Jl=s(_1,"SPAN",{});var b1=r(Jl);v(Os.$$.fragment,b1),b1.forEach(t),_1.forEach(t),L_=h(ph),Rl=s(ph,"SPAN",{});var k1=r(Rl);I_=i(k1,"BigBirdForQuestionAnswering"),k1.forEach(t),ph.forEach(t),_p=h(o),ge=s(o,"DIV",{class:!0});var dn=r(ge);v(Ds.$$.fragment,dn),S_=h(dn),bt=s(dn,"P",{});var ii=r(bt);N_=i(ii,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=s(ii,"CODE",{});var B1=r(Gl);O_=i(B1,"span start logits"),B1.forEach(t),D_=i(ii," and "),Kl=s(ii,"CODE",{});var v1=r(Kl);W_=i(v1,"span end logits"),v1.forEach(t),U_=i(ii,")."),ii.forEach(t),Q_=h(dn),Ws=s(dn,"P",{});var hh=r(Ws);H_=i(hh,"This model is a PyTorch "),Us=s(hh,"A",{href:!0,rel:!0});var $1=r(Us);V_=i($1,"torch.nn.Module"),$1.forEach(t),J_=i(hh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hh.forEach(t),R_=h(dn),Y=s(dn,"DIV",{class:!0});var Qe=r(Y);v(Qs.$$.fragment,Qe),G_=h(Qe),kt=s(Qe,"P",{});var li=r(kt);K_=i(li,"The "),La=s(li,"A",{href:!0});var w1=r(La);X_=i(w1,"BigBirdForQuestionAnswering"),w1.forEach(t),Y_=i(li," forward method, overrides the "),Xl=s(li,"CODE",{});var y1=r(Xl);Z_=i(y1,"__call__"),y1.forEach(t),eb=i(li," special method."),li.forEach(t),tb=h(Qe),v(zo.$$.fragment,Qe),ob=h(Qe),v(Mo.$$.fragment,Qe),nb=h(Qe),v(Eo.$$.fragment,Qe),Qe.forEach(t),dn.forEach(t),bp=h(o),Bt=s(o,"H2",{class:!0});var gh=r(Bt);Po=s(gh,"A",{id:!0,class:!0,href:!0});var T1=r(Po);Yl=s(T1,"SPAN",{});var x1=r(Yl);v(Hs.$$.fragment,x1),x1.forEach(t),T1.forEach(t),sb=h(gh),Zl=s(gh,"SPAN",{});var F1=r(Zl);rb=i(F1,"FlaxBigBirdModel"),F1.forEach(t),gh.forEach(t),kp=h(o),A=s(o,"DIV",{class:!0});var oe=r(A);v(Vs.$$.fragment,oe),ab=h(oe),ed=s(oe,"P",{});var q1=r(ed);ib=i(q1,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),q1.forEach(t),lb=h(oe),Js=s(oe,"P",{});var mh=r(Js);db=i(mh,"This model inherits from "),Ia=s(mh,"A",{href:!0});var z1=r(Ia);cb=i(z1,"FlaxPreTrainedModel"),z1.forEach(t),pb=i(mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mh.forEach(t),hb=h(oe),Rs=s(oe,"P",{});var fh=r(Rs);gb=i(fh,"This model is also a Flax Linen "),Gs=s(fh,"A",{href:!0,rel:!0});var M1=r(Gs);mb=i(M1,"flax.linen.Module"),M1.forEach(t),fb=i(fh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fh.forEach(t),ub=h(oe),td=s(oe,"P",{});var E1=r(td);_b=i(E1,"Finally, this model supports inherent JAX features such as:"),E1.forEach(t),bb=h(oe),Me=s(oe,"UL",{});var cn=r(Me);od=s(cn,"LI",{});var P1=r(od);Ks=s(P1,"A",{href:!0,rel:!0});var j1=r(Ks);kb=i(j1,"Just-In-Time (JIT) compilation"),j1.forEach(t),P1.forEach(t),Bb=h(cn),nd=s(cn,"LI",{});var C1=r(nd);Xs=s(C1,"A",{href:!0,rel:!0});var A1=r(Xs);vb=i(A1,"Automatic Differentiation"),A1.forEach(t),C1.forEach(t),$b=h(cn),sd=s(cn,"LI",{});var L1=r(sd);Ys=s(L1,"A",{href:!0,rel:!0});var I1=r(Ys);wb=i(I1,"Vectorization"),I1.forEach(t),L1.forEach(t),yb=h(cn),rd=s(cn,"LI",{});var S1=r(rd);Zs=s(S1,"A",{href:!0,rel:!0});var N1=r(Zs);Tb=i(N1,"Parallelization"),N1.forEach(t),S1.forEach(t),cn.forEach(t),xb=h(oe),Be=s(oe,"DIV",{class:!0});var pn=r(Be);v(er.$$.fragment,pn),Fb=h(pn),vt=s(pn,"P",{});var di=r(vt);qb=i(di,"The "),ad=s(di,"CODE",{});var O1=r(ad);zb=i(O1,"FlaxBigBirdPreTrainedModel"),O1.forEach(t),Mb=i(di," forward method, overrides the "),id=s(di,"CODE",{});var D1=r(id);Eb=i(D1,"__call__"),D1.forEach(t),Pb=i(di," special method."),di.forEach(t),jb=h(pn),v(jo.$$.fragment,pn),Cb=h(pn),v(Co.$$.fragment,pn),pn.forEach(t),oe.forEach(t),Bp=h(o),$t=s(o,"H2",{class:!0});var uh=r($t);Ao=s(uh,"A",{id:!0,class:!0,href:!0});var W1=r(Ao);ld=s(W1,"SPAN",{});var U1=r(ld);v(tr.$$.fragment,U1),U1.forEach(t),W1.forEach(t),Ab=h(uh),dd=s(uh,"SPAN",{});var Q1=r(dd);Lb=i(Q1,"FlaxBigBirdForPreTraining"),Q1.forEach(t),uh.forEach(t),vp=h(o),L=s(o,"DIV",{class:!0});var ne=r(L);v(or.$$.fragment,ne),Ib=h(ne),wt=s(ne,"P",{});var ci=r(wt);Sb=i(ci,"BigBird Model with two heads on top as done during the pretraining: a "),cd=s(ci,"CODE",{});var H1=r(cd);Nb=i(H1,"masked language modeling"),H1.forEach(t),Ob=i(ci," head and a "),pd=s(ci,"CODE",{});var V1=r(pd);Db=i(V1,"next sentence prediction (classification)"),V1.forEach(t),Wb=i(ci," head."),ci.forEach(t),Ub=h(ne),nr=s(ne,"P",{});var _h=r(nr);Qb=i(_h,"This model inherits from "),Sa=s(_h,"A",{href:!0});var J1=r(Sa);Hb=i(J1,"FlaxPreTrainedModel"),J1.forEach(t),Vb=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_h.forEach(t),Jb=h(ne),sr=s(ne,"P",{});var bh=r(sr);Rb=i(bh,"This model is also a Flax Linen "),rr=s(bh,"A",{href:!0,rel:!0});var R1=r(rr);Gb=i(R1,"flax.linen.Module"),R1.forEach(t),Kb=i(bh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bh.forEach(t),Xb=h(ne),hd=s(ne,"P",{});var G1=r(hd);Yb=i(G1,"Finally, this model supports inherent JAX features such as:"),G1.forEach(t),Zb=h(ne),Ee=s(ne,"UL",{});var hn=r(Ee);gd=s(hn,"LI",{});var K1=r(gd);ar=s(K1,"A",{href:!0,rel:!0});var X1=r(ar);ek=i(X1,"Just-In-Time (JIT) compilation"),X1.forEach(t),K1.forEach(t),tk=h(hn),md=s(hn,"LI",{});var Y1=r(md);ir=s(Y1,"A",{href:!0,rel:!0});var Z1=r(ir);ok=i(Z1,"Automatic Differentiation"),Z1.forEach(t),Y1.forEach(t),nk=h(hn),fd=s(hn,"LI",{});var ey=r(fd);lr=s(ey,"A",{href:!0,rel:!0});var ty=r(lr);sk=i(ty,"Vectorization"),ty.forEach(t),ey.forEach(t),rk=h(hn),ud=s(hn,"LI",{});var oy=r(ud);dr=s(oy,"A",{href:!0,rel:!0});var ny=r(dr);ak=i(ny,"Parallelization"),ny.forEach(t),oy.forEach(t),hn.forEach(t),ik=h(ne),ve=s(ne,"DIV",{class:!0});var gn=r(ve);v(cr.$$.fragment,gn),lk=h(gn),yt=s(gn,"P",{});var pi=r(yt);dk=i(pi,"The "),_d=s(pi,"CODE",{});var sy=r(_d);ck=i(sy,"FlaxBigBirdPreTrainedModel"),sy.forEach(t),pk=i(pi," forward method, overrides the "),bd=s(pi,"CODE",{});var ry=r(bd);hk=i(ry,"__call__"),ry.forEach(t),gk=i(pi," special method."),pi.forEach(t),mk=h(gn),v(Lo.$$.fragment,gn),fk=h(gn),v(Io.$$.fragment,gn),gn.forEach(t),ne.forEach(t),$p=h(o),Tt=s(o,"H2",{class:!0});var kh=r(Tt);So=s(kh,"A",{id:!0,class:!0,href:!0});var ay=r(So);kd=s(ay,"SPAN",{});var iy=r(kd);v(pr.$$.fragment,iy),iy.forEach(t),ay.forEach(t),uk=h(kh),Bd=s(kh,"SPAN",{});var ly=r(Bd);_k=i(ly,"FlaxBigBirdForMaskedLM"),ly.forEach(t),kh.forEach(t),wp=h(o),I=s(o,"DIV",{class:!0});var se=r(I);v(hr.$$.fragment,se),bk=h(se),gr=s(se,"P",{});var Bh=r(gr);kk=i(Bh,"BigBird Model with a "),vd=s(Bh,"CODE",{});var dy=r(vd);Bk=i(dy,"language modeling"),dy.forEach(t),vk=i(Bh," head on top."),Bh.forEach(t),$k=h(se),mr=s(se,"P",{});var vh=r(mr);wk=i(vh,"This model inherits from "),Na=s(vh,"A",{href:!0});var cy=r(Na);yk=i(cy,"FlaxPreTrainedModel"),cy.forEach(t),Tk=i(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vh.forEach(t),xk=h(se),fr=s(se,"P",{});var $h=r(fr);Fk=i($h,"This model is also a Flax Linen "),ur=s($h,"A",{href:!0,rel:!0});var py=r(ur);qk=i(py,"flax.linen.Module"),py.forEach(t),zk=i($h,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$h.forEach(t),Mk=h(se),$d=s(se,"P",{});var hy=r($d);Ek=i(hy,"Finally, this model supports inherent JAX features such as:"),hy.forEach(t),Pk=h(se),Pe=s(se,"UL",{});var mn=r(Pe);wd=s(mn,"LI",{});var gy=r(wd);_r=s(gy,"A",{href:!0,rel:!0});var my=r(_r);jk=i(my,"Just-In-Time (JIT) compilation"),my.forEach(t),gy.forEach(t),Ck=h(mn),yd=s(mn,"LI",{});var fy=r(yd);br=s(fy,"A",{href:!0,rel:!0});var uy=r(br);Ak=i(uy,"Automatic Differentiation"),uy.forEach(t),fy.forEach(t),Lk=h(mn),Td=s(mn,"LI",{});var _y=r(Td);kr=s(_y,"A",{href:!0,rel:!0});var by=r(kr);Ik=i(by,"Vectorization"),by.forEach(t),_y.forEach(t),Sk=h(mn),xd=s(mn,"LI",{});var ky=r(xd);Br=s(ky,"A",{href:!0,rel:!0});var By=r(Br);Nk=i(By,"Parallelization"),By.forEach(t),ky.forEach(t),mn.forEach(t),Ok=h(se),$e=s(se,"DIV",{class:!0});var fn=r($e);v(vr.$$.fragment,fn),Dk=h(fn),xt=s(fn,"P",{});var hi=r(xt);Wk=i(hi,"The "),Fd=s(hi,"CODE",{});var vy=r(Fd);Uk=i(vy,"FlaxBigBirdPreTrainedModel"),vy.forEach(t),Qk=i(hi," forward method, overrides the "),qd=s(hi,"CODE",{});var $y=r(qd);Hk=i($y,"__call__"),$y.forEach(t),Vk=i(hi," special method."),hi.forEach(t),Jk=h(fn),v(No.$$.fragment,fn),Rk=h(fn),v(Oo.$$.fragment,fn),fn.forEach(t),se.forEach(t),yp=h(o),Ft=s(o,"H2",{class:!0});var wh=r(Ft);Do=s(wh,"A",{id:!0,class:!0,href:!0});var wy=r(Do);zd=s(wy,"SPAN",{});var yy=r(zd);v($r.$$.fragment,yy),yy.forEach(t),wy.forEach(t),Gk=h(wh),Md=s(wh,"SPAN",{});var Ty=r(Md);Kk=i(Ty,"FlaxBigBirdForSequenceClassification"),Ty.forEach(t),wh.forEach(t),Tp=h(o),S=s(o,"DIV",{class:!0});var re=r(S);v(wr.$$.fragment,re),Xk=h(re),Ed=s(re,"P",{});var xy=r(Ed);Yk=i(xy,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xy.forEach(t),Zk=h(re),yr=s(re,"P",{});var yh=r(yr);eB=i(yh,"This model inherits from "),Oa=s(yh,"A",{href:!0});var Fy=r(Oa);tB=i(Fy,"FlaxPreTrainedModel"),Fy.forEach(t),oB=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yh.forEach(t),nB=h(re),Tr=s(re,"P",{});var Th=r(Tr);sB=i(Th,"This model is also a Flax Linen "),xr=s(Th,"A",{href:!0,rel:!0});var qy=r(xr);rB=i(qy,"flax.linen.Module"),qy.forEach(t),aB=i(Th,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Th.forEach(t),iB=h(re),Pd=s(re,"P",{});var zy=r(Pd);lB=i(zy,"Finally, this model supports inherent JAX features such as:"),zy.forEach(t),dB=h(re),je=s(re,"UL",{});var un=r(je);jd=s(un,"LI",{});var My=r(jd);Fr=s(My,"A",{href:!0,rel:!0});var Ey=r(Fr);cB=i(Ey,"Just-In-Time (JIT) compilation"),Ey.forEach(t),My.forEach(t),pB=h(un),Cd=s(un,"LI",{});var Py=r(Cd);qr=s(Py,"A",{href:!0,rel:!0});var jy=r(qr);hB=i(jy,"Automatic Differentiation"),jy.forEach(t),Py.forEach(t),gB=h(un),Ad=s(un,"LI",{});var Cy=r(Ad);zr=s(Cy,"A",{href:!0,rel:!0});var Ay=r(zr);mB=i(Ay,"Vectorization"),Ay.forEach(t),Cy.forEach(t),fB=h(un),Ld=s(un,"LI",{});var Ly=r(Ld);Mr=s(Ly,"A",{href:!0,rel:!0});var Iy=r(Mr);uB=i(Iy,"Parallelization"),Iy.forEach(t),Ly.forEach(t),un.forEach(t),_B=h(re),we=s(re,"DIV",{class:!0});var _n=r(we);v(Er.$$.fragment,_n),bB=h(_n),qt=s(_n,"P",{});var gi=r(qt);kB=i(gi,"The "),Id=s(gi,"CODE",{});var Sy=r(Id);BB=i(Sy,"FlaxBigBirdPreTrainedModel"),Sy.forEach(t),vB=i(gi," forward method, overrides the "),Sd=s(gi,"CODE",{});var Ny=r(Sd);$B=i(Ny,"__call__"),Ny.forEach(t),wB=i(gi," special method."),gi.forEach(t),yB=h(_n),v(Wo.$$.fragment,_n),TB=h(_n),v(Uo.$$.fragment,_n),_n.forEach(t),re.forEach(t),xp=h(o),zt=s(o,"H2",{class:!0});var xh=r(zt);Qo=s(xh,"A",{id:!0,class:!0,href:!0});var Oy=r(Qo);Nd=s(Oy,"SPAN",{});var Dy=r(Nd);v(Pr.$$.fragment,Dy),Dy.forEach(t),Oy.forEach(t),xB=h(xh),Od=s(xh,"SPAN",{});var Wy=r(Od);FB=i(Wy,"FlaxBigBirdForMultipleChoice"),Wy.forEach(t),xh.forEach(t),Fp=h(o),N=s(o,"DIV",{class:!0});var ae=r(N);v(jr.$$.fragment,ae),qB=h(ae),Dd=s(ae,"P",{});var Uy=r(Dd);zB=i(Uy,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Uy.forEach(t),MB=h(ae),Cr=s(ae,"P",{});var Fh=r(Cr);EB=i(Fh,"This model inherits from "),Da=s(Fh,"A",{href:!0});var Qy=r(Da);PB=i(Qy,"FlaxPreTrainedModel"),Qy.forEach(t),jB=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fh.forEach(t),CB=h(ae),Ar=s(ae,"P",{});var qh=r(Ar);AB=i(qh,"This model is also a Flax Linen "),Lr=s(qh,"A",{href:!0,rel:!0});var Hy=r(Lr);LB=i(Hy,"flax.linen.Module"),Hy.forEach(t),IB=i(qh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qh.forEach(t),SB=h(ae),Wd=s(ae,"P",{});var Vy=r(Wd);NB=i(Vy,"Finally, this model supports inherent JAX features such as:"),Vy.forEach(t),OB=h(ae),Ce=s(ae,"UL",{});var bn=r(Ce);Ud=s(bn,"LI",{});var Jy=r(Ud);Ir=s(Jy,"A",{href:!0,rel:!0});var Ry=r(Ir);DB=i(Ry,"Just-In-Time (JIT) compilation"),Ry.forEach(t),Jy.forEach(t),WB=h(bn),Qd=s(bn,"LI",{});var Gy=r(Qd);Sr=s(Gy,"A",{href:!0,rel:!0});var Ky=r(Sr);UB=i(Ky,"Automatic Differentiation"),Ky.forEach(t),Gy.forEach(t),QB=h(bn),Hd=s(bn,"LI",{});var Xy=r(Hd);Nr=s(Xy,"A",{href:!0,rel:!0});var Yy=r(Nr);HB=i(Yy,"Vectorization"),Yy.forEach(t),Xy.forEach(t),VB=h(bn),Vd=s(bn,"LI",{});var Zy=r(Vd);Or=s(Zy,"A",{href:!0,rel:!0});var eT=r(Or);JB=i(eT,"Parallelization"),eT.forEach(t),Zy.forEach(t),bn.forEach(t),RB=h(ae),ye=s(ae,"DIV",{class:!0});var kn=r(ye);v(Dr.$$.fragment,kn),GB=h(kn),Mt=s(kn,"P",{});var mi=r(Mt);KB=i(mi,"The "),Jd=s(mi,"CODE",{});var tT=r(Jd);XB=i(tT,"FlaxBigBirdPreTrainedModel"),tT.forEach(t),YB=i(mi," forward method, overrides the "),Rd=s(mi,"CODE",{});var oT=r(Rd);ZB=i(oT,"__call__"),oT.forEach(t),ev=i(mi," special method."),mi.forEach(t),tv=h(kn),v(Ho.$$.fragment,kn),ov=h(kn),v(Vo.$$.fragment,kn),kn.forEach(t),ae.forEach(t),qp=h(o),Et=s(o,"H2",{class:!0});var zh=r(Et);Jo=s(zh,"A",{id:!0,class:!0,href:!0});var nT=r(Jo);Gd=s(nT,"SPAN",{});var sT=r(Gd);v(Wr.$$.fragment,sT),sT.forEach(t),nT.forEach(t),nv=h(zh),Kd=s(zh,"SPAN",{});var rT=r(Kd);sv=i(rT,"FlaxBigBirdForTokenClassification"),rT.forEach(t),zh.forEach(t),zp=h(o),O=s(o,"DIV",{class:!0});var ie=r(O);v(Ur.$$.fragment,ie),rv=h(ie),Xd=s(ie,"P",{});var aT=r(Xd);av=i(aT,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),aT.forEach(t),iv=h(ie),Qr=s(ie,"P",{});var Mh=r(Qr);lv=i(Mh,"This model inherits from "),Wa=s(Mh,"A",{href:!0});var iT=r(Wa);dv=i(iT,"FlaxPreTrainedModel"),iT.forEach(t),cv=i(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mh.forEach(t),pv=h(ie),Hr=s(ie,"P",{});var Eh=r(Hr);hv=i(Eh,"This model is also a Flax Linen "),Vr=s(Eh,"A",{href:!0,rel:!0});var lT=r(Vr);gv=i(lT,"flax.linen.Module"),lT.forEach(t),mv=i(Eh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Eh.forEach(t),fv=h(ie),Yd=s(ie,"P",{});var dT=r(Yd);uv=i(dT,"Finally, this model supports inherent JAX features such as:"),dT.forEach(t),_v=h(ie),Ae=s(ie,"UL",{});var Bn=r(Ae);Zd=s(Bn,"LI",{});var cT=r(Zd);Jr=s(cT,"A",{href:!0,rel:!0});var pT=r(Jr);bv=i(pT,"Just-In-Time (JIT) compilation"),pT.forEach(t),cT.forEach(t),kv=h(Bn),ec=s(Bn,"LI",{});var hT=r(ec);Rr=s(hT,"A",{href:!0,rel:!0});var gT=r(Rr);Bv=i(gT,"Automatic Differentiation"),gT.forEach(t),hT.forEach(t),vv=h(Bn),tc=s(Bn,"LI",{});var mT=r(tc);Gr=s(mT,"A",{href:!0,rel:!0});var fT=r(Gr);$v=i(fT,"Vectorization"),fT.forEach(t),mT.forEach(t),wv=h(Bn),oc=s(Bn,"LI",{});var uT=r(oc);Kr=s(uT,"A",{href:!0,rel:!0});var _T=r(Kr);yv=i(_T,"Parallelization"),_T.forEach(t),uT.forEach(t),Bn.forEach(t),Tv=h(ie),Te=s(ie,"DIV",{class:!0});var vn=r(Te);v(Xr.$$.fragment,vn),xv=h(vn),Pt=s(vn,"P",{});var fi=r(Pt);Fv=i(fi,"The "),nc=s(fi,"CODE",{});var bT=r(nc);qv=i(bT,"FlaxBigBirdPreTrainedModel"),bT.forEach(t),zv=i(fi," forward method, overrides the "),sc=s(fi,"CODE",{});var kT=r(sc);Mv=i(kT,"__call__"),kT.forEach(t),Ev=i(fi," special method."),fi.forEach(t),Pv=h(vn),v(Ro.$$.fragment,vn),jv=h(vn),v(Go.$$.fragment,vn),vn.forEach(t),ie.forEach(t),Mp=h(o),jt=s(o,"H2",{class:!0});var Ph=r(jt);Ko=s(Ph,"A",{id:!0,class:!0,href:!0});var BT=r(Ko);rc=s(BT,"SPAN",{});var vT=r(rc);v(Yr.$$.fragment,vT),vT.forEach(t),BT.forEach(t),Cv=h(Ph),ac=s(Ph,"SPAN",{});var $T=r(ac);Av=i($T,"FlaxBigBirdForQuestionAnswering"),$T.forEach(t),Ph.forEach(t),Ep=h(o),D=s(o,"DIV",{class:!0});var le=r(D);v(Zr.$$.fragment,le),Lv=h(le),Ct=s(le,"P",{});var ui=r(Ct);Iv=i(ui,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ic=s(ui,"CODE",{});var wT=r(ic);Sv=i(wT,"span start logits"),wT.forEach(t),Nv=i(ui," and "),lc=s(ui,"CODE",{});var yT=r(lc);Ov=i(yT,"span end logits"),yT.forEach(t),Dv=i(ui,")."),ui.forEach(t),Wv=h(le),ea=s(le,"P",{});var jh=r(ea);Uv=i(jh,"This model inherits from "),Ua=s(jh,"A",{href:!0});var TT=r(Ua);Qv=i(TT,"FlaxPreTrainedModel"),TT.forEach(t),Hv=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jh.forEach(t),Vv=h(le),ta=s(le,"P",{});var Ch=r(ta);Jv=i(Ch,"This model is also a Flax Linen "),oa=s(Ch,"A",{href:!0,rel:!0});var xT=r(oa);Rv=i(xT,"flax.linen.Module"),xT.forEach(t),Gv=i(Ch,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ch.forEach(t),Kv=h(le),dc=s(le,"P",{});var FT=r(dc);Xv=i(FT,"Finally, this model supports inherent JAX features such as:"),FT.forEach(t),Yv=h(le),Le=s(le,"UL",{});var $n=r(Le);cc=s($n,"LI",{});var qT=r(cc);na=s(qT,"A",{href:!0,rel:!0});var zT=r(na);Zv=i(zT,"Just-In-Time (JIT) compilation"),zT.forEach(t),qT.forEach(t),e$=h($n),pc=s($n,"LI",{});var MT=r(pc);sa=s(MT,"A",{href:!0,rel:!0});var ET=r(sa);t$=i(ET,"Automatic Differentiation"),ET.forEach(t),MT.forEach(t),o$=h($n),hc=s($n,"LI",{});var PT=r(hc);ra=s(PT,"A",{href:!0,rel:!0});var jT=r(ra);n$=i(jT,"Vectorization"),jT.forEach(t),PT.forEach(t),s$=h($n),gc=s($n,"LI",{});var CT=r(gc);aa=s(CT,"A",{href:!0,rel:!0});var AT=r(aa);r$=i(AT,"Parallelization"),AT.forEach(t),CT.forEach(t),$n.forEach(t),a$=h(le),xe=s(le,"DIV",{class:!0});var wn=r(xe);v(ia.$$.fragment,wn),i$=h(wn),At=s(wn,"P",{});var _i=r(At);l$=i(_i,"The "),Qa=s(_i,"A",{href:!0});var LT=r(Qa);d$=i(LT,"FlaxBigBirdForQuestionAnswering"),LT.forEach(t),c$=i(_i," forward method, overrides the "),mc=s(_i,"CODE",{});var IT=r(mc);p$=i(IT,"__call__"),IT.forEach(t),h$=i(_i," special method."),_i.forEach(t),g$=h(wn),v(Xo.$$.fragment,wn),m$=h(wn),v(Yo.$$.fragment,wn),wn.forEach(t),le.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(q2)),c(f,"id","bigbird"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#bigbird"),c(g,"class","relative group"),c(St,"id","overview"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#overview"),c(He,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2007.14062"),c(Tn,"rel","nofollow"),c(Fn,"href","https://huggingface.co/blog/big-bird"),c(Fn,"rel","nofollow"),c(zn,"href","https://huggingface.co/vasudevgupta"),c(zn,"rel","nofollow"),c(Mn,"href","https://github.com/google-research/bigbird"),c(Mn,"rel","nofollow"),c(Ot,"id","transformers.BigBirdConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BigBirdConfig"),c(Ve,"class","relative group"),c(ba,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdModel"),c(jn,"href","https://huggingface.co/google/bigbird-roberta-base"),c(jn,"rel","nofollow"),c(ka,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ba,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ut,"id","initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Wt,"class","relative group"),c(Ht,"id","initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Qt,"class","relative group"),c(Jt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Vt,"class","relative group"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Rt,"id","transformers.BigBirdTokenizer"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.BigBirdTokenizer"),c(Ge,"class","relative group"),c(Wn,"href","https://github.com/google/sentencepiece"),c(Wn,"rel","nofollow"),c(va,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ya,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.BigBirdTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.BigBirdTokenizerFast"),c(Xe,"class","relative group"),c(Yn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(Yn,"rel","nofollow"),c(Ta,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(Ye,"class","relative group"),c(qa,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.BigBirdModel"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.BigBirdModel"),c(et,"class","relative group"),c(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cs,"rel","nofollow"),c(hs,"href","https://arxiv.org/abs/1706.03762"),c(hs,"rel","nofollow"),c(za,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdModel"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(so,"id","transformers.BigBirdForPreTraining"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.BigBirdForPreTraining"),c(ot,"class","relative group"),c(Ma,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdForCausalLM"),c(rt,"class","relative group"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(Ea,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForMaskedLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForMaskedLM"),c(lt,"class","relative group"),c(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ws,"rel","nofollow"),c(Pa,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fo,"id","transformers.BigBirdForSequenceClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.BigBirdForSequenceClassification"),c(pt,"class","relative group"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(ja,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.BigBirdForMultipleChoice"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.BigBirdForMultipleChoice"),c(gt,"class","relative group"),c(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(js,"rel","nofollow"),c(Ca,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"id","transformers.BigBirdForTokenClassification"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.BigBirdForTokenClassification"),c(ft,"class","relative group"),c(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ss,"rel","nofollow"),c(Aa,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"id","transformers.BigBirdForQuestionAnswering"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BigBirdForQuestionAnswering"),c(_t,"class","relative group"),c(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Us,"rel","nofollow"),c(La,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.FlaxBigBirdModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.FlaxBigBirdModel"),c(Bt,"class","relative group"),c(Ia,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Gs,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ks,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xs,"rel","nofollow"),c(Ys,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ys,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdForPreTraining"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdForPreTraining"),c($t,"class","relative group"),c(Sa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ir,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(lr,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(dr,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(So,"id","transformers.FlaxBigBirdForMaskedLM"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Tt,"class","relative group"),c(Na,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ur,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ur,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(_r,"rel","nofollow"),c(br,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(br,"rel","nofollow"),c(kr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(kr,"rel","nofollow"),c(Br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Br,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Ft,"class","relative group"),c(Oa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Mr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qo,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(zt,"class","relative group"),c(Da,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Lr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Lr,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ir,"rel","nofollow"),c(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Sr,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Nr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Or,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jo,"id","transformers.FlaxBigBirdForTokenClassification"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Et,"class","relative group"),c(Wa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Vr,"rel","nofollow"),c(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jr,"rel","nofollow"),c(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Rr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Gr,"rel","nofollow"),c(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Kr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ko,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(jt,"class","relative group"),c(Ua,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(sa,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ra,"rel","nofollow"),c(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(aa,"rel","nofollow"),c(Qa,"href","/docs/transformers/pr_highlight/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),k(o,_,u),k(o,g,u),e(g,f),e(f,b),$(l,b,null),e(g,m),e(g,F),e(F,Ah),k(o,Dc,u),k(o,He,u),e(He,St),e(St,bi),$(yn,bi,null),e(He,Lh),e(He,ki),e(ki,Ih),k(o,Wc,u),k(o,Nt,u),e(Nt,Sh),e(Nt,Tn),e(Tn,Nh),e(Nt,Oh),k(o,Uc,u),k(o,ma,u),e(ma,Dh),k(o,Qc,u),k(o,fa,u),e(fa,Bi),e(Bi,Wh),k(o,Hc,u),k(o,ua,u),e(ua,Uh),k(o,Vc,u),k(o,H,u),e(H,xn),e(xn,Qh),e(xn,Fn),e(Fn,Hh),e(xn,Vh),e(H,Jh),e(H,de),e(de,Rh),e(de,vi),e(vi,Gh),e(de,Kh),e(de,$i),e($i,Xh),e(de,Yh),e(de,wi),e(wi,Zh),e(de,eg),e(de,yi),e(yi,tg),e(de,og),e(H,ng),e(H,Ti),e(Ti,sg),e(H,rg),e(H,xi),e(xi,ag),e(H,ig),e(H,qn),e(qn,lg),e(qn,Fi),e(Fi,dg),e(qn,cg),e(H,pg),e(H,_a),e(_a,hg),e(_a,qi),e(qi,gg),k(o,Jc,u),k(o,Ie,u),e(Ie,mg),e(Ie,zn),e(zn,fg),e(Ie,ug),e(Ie,Mn),e(Mn,_g),e(Ie,bg),k(o,Rc,u),k(o,Ve,u),e(Ve,Ot),e(Ot,zi),$(En,zi,null),e(Ve,kg),e(Ve,Mi),e(Mi,Bg),k(o,Gc,u),k(o,j,u),$(Pn,j,null),e(j,vg),e(j,Je),e(Je,$g),e(Je,ba),e(ba,wg),e(Je,yg),e(Je,jn),e(jn,Tg),e(Je,xg),e(j,Fg),e(j,Re),e(Re,qg),e(Re,ka),e(ka,zg),e(Re,Mg),e(Re,Ba),e(Ba,Eg),e(Re,Pg),e(j,jg),$(Dt,j,null),e(j,Cg),e(j,Ei),e(Ei,Pi),e(Pi,ji),e(ji,Ci),e(Ci,Ag),e(j,Lg),e(j,Ai),e(Ai,Li),e(Li,Cn),e(Cn,Wt),e(Wt,Ut),e(Ut,Ii),$(An,Ii,null),e(Wt,Ig),e(Wt,Si),e(Si,Sg),e(Cn,Ng),e(Cn,Ni),e(Ni,Og),e(j,Dg),e(j,Oi),e(Oi,Di),e(Di,Ln),e(Ln,Qt),e(Qt,Ht),e(Ht,Wi),$(In,Wi,null),e(Qt,Wg),e(Qt,Ui),e(Ui,Ug),e(Ln,Qg),e(Ln,Qi),e(Qi,Hg),e(j,Vg),e(j,Hi),e(Hi,Vi),e(Vi,Ji),e(Ji,Vt),e(Vt,Jt),e(Jt,Ri),$(Sn,Ri,null),e(Vt,Jg),e(Vt,Gi),e(Gi,Rg),k(o,Kc,u),k(o,Ge,u),e(Ge,Rt),e(Rt,Ki),$(Nn,Ki,null),e(Ge,Gg),e(Ge,Xi),e(Xi,Kg),k(o,Xc,u),k(o,C,u),$(On,C,null),e(C,Xg),e(C,Dn),e(Dn,Yg),e(Dn,Wn),e(Wn,Zg),e(Dn,em),e(C,tm),e(C,Un),e(Un,om),e(Un,va),e(va,nm),e(Un,sm),e(C,rm),e(C,Se),$(Qn,Se,null),e(Se,am),e(Se,Yi),e(Yi,im),e(Se,lm),e(Se,Hn),e(Hn,$a),e($a,dm),e($a,Zi),e(Zi,cm),e(Hn,pm),e(Hn,wa),e(wa,hm),e(wa,el),e(el,gm),e(C,mm),e(C,Gt),$(Vn,Gt,null),e(Gt,fm),e(Gt,Jn),e(Jn,um),e(Jn,tl),e(tl,_m),e(Jn,bm),e(C,km),e(C,Kt),$(Rn,Kt,null),e(Kt,Bm),e(Kt,Ke),e(Ke,vm),e(Ke,ol),e(ol,$m),e(Ke,wm),e(Ke,nl),e(nl,ym),e(Ke,Tm),e(C,xm),e(C,ya),$(Gn,ya,null),k(o,Yc,u),k(o,Xe,u),e(Xe,Xt),e(Xt,sl),$(Kn,sl,null),e(Xe,Fm),e(Xe,rl),e(rl,qm),k(o,Zc,u),k(o,V,u),$(Xn,V,null),e(V,zm),e(V,Fe),e(Fe,Mm),e(Fe,al),e(al,Em),e(Fe,Pm),e(Fe,Yn),e(Yn,jm),e(Fe,Cm),e(Fe,Ta),e(Ta,Am),e(Fe,Lm),e(V,Im),e(V,Ne),$(Zn,Ne,null),e(Ne,Sm),e(Ne,il),e(il,Nm),e(Ne,Om),e(Ne,es),e(es,xa),e(xa,Dm),e(xa,ll),e(ll,Wm),e(es,Um),e(es,Fa),e(Fa,Qm),e(Fa,dl),e(dl,Hm),e(V,Vm),e(V,fe),$(ts,fe,null),e(fe,Jm),e(fe,cl),e(cl,Rm),e(fe,Gm),$(Yt,fe,null),e(fe,Km),e(fe,pl),e(pl,Xm),e(V,Ym),e(V,Zt),$(os,Zt,null),e(Zt,Zm),e(Zt,ns),e(ns,ef),e(ns,hl),e(hl,tf),e(ns,of),k(o,ep,u),k(o,Ye,u),e(Ye,eo),e(eo,gl),$(ss,gl,null),e(Ye,nf),e(Ye,ml),e(ml,sf),k(o,tp,u),k(o,Ze,u),$(rs,Ze,null),e(Ze,rf),e(Ze,as),e(as,af),e(as,qa),e(qa,lf),e(as,df),k(o,op,u),k(o,et,u),e(et,to),e(to,fl),$(is,fl,null),e(et,cf),e(et,ul),e(ul,pf),k(o,np,u),k(o,J,u),$(ls,J,null),e(J,hf),e(J,ds),e(ds,gf),e(ds,cs),e(cs,mf),e(ds,ff),e(J,uf),e(J,ps),e(ps,_f),e(ps,hs),e(hs,bf),e(ps,kf),e(J,Bf),e(J,Q),e(Q,vf),e(Q,_l),e(_l,$f),e(Q,wf),e(Q,bl),e(bl,yf),e(Q,Tf),e(Q,kl),e(kl,xf),e(Q,Ff),e(Q,Bl),e(Bl,qf),e(Q,zf),e(Q,vl),e(vl,Mf),e(Q,Ef),e(Q,$l),e($l,Pf),e(Q,jf),e(J,Cf),e(J,ue),$(gs,ue,null),e(ue,Af),e(ue,tt),e(tt,Lf),e(tt,za),e(za,If),e(tt,Sf),e(tt,wl),e(wl,Nf),e(tt,Of),e(ue,Df),$(oo,ue,null),e(ue,Wf),$(no,ue,null),k(o,sp,u),k(o,ot,u),e(ot,so),e(so,yl),$(ms,yl,null),e(ot,Uf),e(ot,Tl),e(Tl,Qf),k(o,rp,u),k(o,nt,u),$(fs,nt,null),e(nt,Hf),e(nt,_e),$(us,_e,null),e(_e,Vf),e(_e,st),e(st,Jf),e(st,Ma),e(Ma,Rf),e(st,Gf),e(st,xl),e(xl,Kf),e(st,Xf),e(_e,Yf),$(ro,_e,null),e(_e,Zf),$(ao,_e,null),k(o,ap,u),k(o,rt,u),e(rt,io),e(io,Fl),$(_s,Fl,null),e(rt,eu),e(rt,ql),e(ql,tu),k(o,ip,u),k(o,qe,u),$(bs,qe,null),e(qe,ou),e(qe,at),e(at,nu),e(at,zl),e(zl,su),e(at,ru),e(at,ks),e(ks,au),e(at,iu),e(qe,lu),e(qe,be),$(Bs,be,null),e(be,du),e(be,it),e(it,cu),e(it,Ea),e(Ea,pu),e(it,hu),e(it,Ml),e(Ml,gu),e(it,mu),e(be,fu),$(lo,be,null),e(be,uu),$(co,be,null),k(o,lp,u),k(o,lt,u),e(lt,po),e(po,El),$(vs,El,null),e(lt,_u),e(lt,Pl),e(Pl,bu),k(o,dp,u),k(o,ze,u),$($s,ze,null),e(ze,ku),e(ze,dt),e(dt,Bu),e(dt,jl),e(jl,vu),e(dt,$u),e(dt,ws),e(ws,wu),e(dt,yu),e(ze,Tu),e(ze,K),$(ys,K,null),e(K,xu),e(K,ct),e(ct,Fu),e(ct,Pa),e(Pa,qu),e(ct,zu),e(ct,Cl),e(Cl,Mu),e(ct,Eu),e(K,Pu),$(ho,K,null),e(K,ju),$(go,K,null),e(K,Cu),$(mo,K,null),k(o,cp,u),k(o,pt,u),e(pt,fo),e(fo,Al),$(Ts,Al,null),e(pt,Au),e(pt,Ll),e(Ll,Lu),k(o,pp,u),k(o,ce,u),$(xs,ce,null),e(ce,Iu),e(ce,Il),e(Il,Su),e(ce,Nu),e(ce,Fs),e(Fs,Ou),e(Fs,qs),e(qs,Du),e(Fs,Wu),e(ce,Uu),e(ce,U),$(zs,U,null),e(U,Qu),e(U,ht),e(ht,Hu),e(ht,ja),e(ja,Vu),e(ht,Ju),e(ht,Sl),e(Sl,Ru),e(ht,Gu),e(U,Ku),$(uo,U,null),e(U,Xu),$(_o,U,null),e(U,Yu),$(bo,U,null),e(U,Zu),$(ko,U,null),e(U,e_),$(Bo,U,null),k(o,hp,u),k(o,gt,u),e(gt,vo),e(vo,Nl),$(Ms,Nl,null),e(gt,t_),e(gt,Ol),e(Ol,o_),k(o,gp,u),k(o,pe,u),$(Es,pe,null),e(pe,n_),e(pe,Dl),e(Dl,s_),e(pe,r_),e(pe,Ps),e(Ps,a_),e(Ps,js),e(js,i_),e(Ps,l_),e(pe,d_),e(pe,ke),$(Cs,ke,null),e(ke,c_),e(ke,mt),e(mt,p_),e(mt,Ca),e(Ca,h_),e(mt,g_),e(mt,Wl),e(Wl,m_),e(mt,f_),e(ke,u_),$($o,ke,null),e(ke,__),$(wo,ke,null),k(o,mp,u),k(o,ft,u),e(ft,yo),e(yo,Ul),$(As,Ul,null),e(ft,b_),e(ft,Ql),e(Ql,k_),k(o,fp,u),k(o,he,u),$(Ls,he,null),e(he,B_),e(he,Hl),e(Hl,v_),e(he,$_),e(he,Is),e(Is,w_),e(Is,Ss),e(Ss,y_),e(Is,T_),e(he,x_),e(he,X),$(Ns,X,null),e(X,F_),e(X,ut),e(ut,q_),e(ut,Aa),e(Aa,z_),e(ut,M_),e(ut,Vl),e(Vl,E_),e(ut,P_),e(X,j_),$(To,X,null),e(X,C_),$(xo,X,null),e(X,A_),$(Fo,X,null),k(o,up,u),k(o,_t,u),e(_t,qo),e(qo,Jl),$(Os,Jl,null),e(_t,L_),e(_t,Rl),e(Rl,I_),k(o,_p,u),k(o,ge,u),$(Ds,ge,null),e(ge,S_),e(ge,bt),e(bt,N_),e(bt,Gl),e(Gl,O_),e(bt,D_),e(bt,Kl),e(Kl,W_),e(bt,U_),e(ge,Q_),e(ge,Ws),e(Ws,H_),e(Ws,Us),e(Us,V_),e(Ws,J_),e(ge,R_),e(ge,Y),$(Qs,Y,null),e(Y,G_),e(Y,kt),e(kt,K_),e(kt,La),e(La,X_),e(kt,Y_),e(kt,Xl),e(Xl,Z_),e(kt,eb),e(Y,tb),$(zo,Y,null),e(Y,ob),$(Mo,Y,null),e(Y,nb),$(Eo,Y,null),k(o,bp,u),k(o,Bt,u),e(Bt,Po),e(Po,Yl),$(Hs,Yl,null),e(Bt,sb),e(Bt,Zl),e(Zl,rb),k(o,kp,u),k(o,A,u),$(Vs,A,null),e(A,ab),e(A,ed),e(ed,ib),e(A,lb),e(A,Js),e(Js,db),e(Js,Ia),e(Ia,cb),e(Js,pb),e(A,hb),e(A,Rs),e(Rs,gb),e(Rs,Gs),e(Gs,mb),e(Rs,fb),e(A,ub),e(A,td),e(td,_b),e(A,bb),e(A,Me),e(Me,od),e(od,Ks),e(Ks,kb),e(Me,Bb),e(Me,nd),e(nd,Xs),e(Xs,vb),e(Me,$b),e(Me,sd),e(sd,Ys),e(Ys,wb),e(Me,yb),e(Me,rd),e(rd,Zs),e(Zs,Tb),e(A,xb),e(A,Be),$(er,Be,null),e(Be,Fb),e(Be,vt),e(vt,qb),e(vt,ad),e(ad,zb),e(vt,Mb),e(vt,id),e(id,Eb),e(vt,Pb),e(Be,jb),$(jo,Be,null),e(Be,Cb),$(Co,Be,null),k(o,Bp,u),k(o,$t,u),e($t,Ao),e(Ao,ld),$(tr,ld,null),e($t,Ab),e($t,dd),e(dd,Lb),k(o,vp,u),k(o,L,u),$(or,L,null),e(L,Ib),e(L,wt),e(wt,Sb),e(wt,cd),e(cd,Nb),e(wt,Ob),e(wt,pd),e(pd,Db),e(wt,Wb),e(L,Ub),e(L,nr),e(nr,Qb),e(nr,Sa),e(Sa,Hb),e(nr,Vb),e(L,Jb),e(L,sr),e(sr,Rb),e(sr,rr),e(rr,Gb),e(sr,Kb),e(L,Xb),e(L,hd),e(hd,Yb),e(L,Zb),e(L,Ee),e(Ee,gd),e(gd,ar),e(ar,ek),e(Ee,tk),e(Ee,md),e(md,ir),e(ir,ok),e(Ee,nk),e(Ee,fd),e(fd,lr),e(lr,sk),e(Ee,rk),e(Ee,ud),e(ud,dr),e(dr,ak),e(L,ik),e(L,ve),$(cr,ve,null),e(ve,lk),e(ve,yt),e(yt,dk),e(yt,_d),e(_d,ck),e(yt,pk),e(yt,bd),e(bd,hk),e(yt,gk),e(ve,mk),$(Lo,ve,null),e(ve,fk),$(Io,ve,null),k(o,$p,u),k(o,Tt,u),e(Tt,So),e(So,kd),$(pr,kd,null),e(Tt,uk),e(Tt,Bd),e(Bd,_k),k(o,wp,u),k(o,I,u),$(hr,I,null),e(I,bk),e(I,gr),e(gr,kk),e(gr,vd),e(vd,Bk),e(gr,vk),e(I,$k),e(I,mr),e(mr,wk),e(mr,Na),e(Na,yk),e(mr,Tk),e(I,xk),e(I,fr),e(fr,Fk),e(fr,ur),e(ur,qk),e(fr,zk),e(I,Mk),e(I,$d),e($d,Ek),e(I,Pk),e(I,Pe),e(Pe,wd),e(wd,_r),e(_r,jk),e(Pe,Ck),e(Pe,yd),e(yd,br),e(br,Ak),e(Pe,Lk),e(Pe,Td),e(Td,kr),e(kr,Ik),e(Pe,Sk),e(Pe,xd),e(xd,Br),e(Br,Nk),e(I,Ok),e(I,$e),$(vr,$e,null),e($e,Dk),e($e,xt),e(xt,Wk),e(xt,Fd),e(Fd,Uk),e(xt,Qk),e(xt,qd),e(qd,Hk),e(xt,Vk),e($e,Jk),$(No,$e,null),e($e,Rk),$(Oo,$e,null),k(o,yp,u),k(o,Ft,u),e(Ft,Do),e(Do,zd),$($r,zd,null),e(Ft,Gk),e(Ft,Md),e(Md,Kk),k(o,Tp,u),k(o,S,u),$(wr,S,null),e(S,Xk),e(S,Ed),e(Ed,Yk),e(S,Zk),e(S,yr),e(yr,eB),e(yr,Oa),e(Oa,tB),e(yr,oB),e(S,nB),e(S,Tr),e(Tr,sB),e(Tr,xr),e(xr,rB),e(Tr,aB),e(S,iB),e(S,Pd),e(Pd,lB),e(S,dB),e(S,je),e(je,jd),e(jd,Fr),e(Fr,cB),e(je,pB),e(je,Cd),e(Cd,qr),e(qr,hB),e(je,gB),e(je,Ad),e(Ad,zr),e(zr,mB),e(je,fB),e(je,Ld),e(Ld,Mr),e(Mr,uB),e(S,_B),e(S,we),$(Er,we,null),e(we,bB),e(we,qt),e(qt,kB),e(qt,Id),e(Id,BB),e(qt,vB),e(qt,Sd),e(Sd,$B),e(qt,wB),e(we,yB),$(Wo,we,null),e(we,TB),$(Uo,we,null),k(o,xp,u),k(o,zt,u),e(zt,Qo),e(Qo,Nd),$(Pr,Nd,null),e(zt,xB),e(zt,Od),e(Od,FB),k(o,Fp,u),k(o,N,u),$(jr,N,null),e(N,qB),e(N,Dd),e(Dd,zB),e(N,MB),e(N,Cr),e(Cr,EB),e(Cr,Da),e(Da,PB),e(Cr,jB),e(N,CB),e(N,Ar),e(Ar,AB),e(Ar,Lr),e(Lr,LB),e(Ar,IB),e(N,SB),e(N,Wd),e(Wd,NB),e(N,OB),e(N,Ce),e(Ce,Ud),e(Ud,Ir),e(Ir,DB),e(Ce,WB),e(Ce,Qd),e(Qd,Sr),e(Sr,UB),e(Ce,QB),e(Ce,Hd),e(Hd,Nr),e(Nr,HB),e(Ce,VB),e(Ce,Vd),e(Vd,Or),e(Or,JB),e(N,RB),e(N,ye),$(Dr,ye,null),e(ye,GB),e(ye,Mt),e(Mt,KB),e(Mt,Jd),e(Jd,XB),e(Mt,YB),e(Mt,Rd),e(Rd,ZB),e(Mt,ev),e(ye,tv),$(Ho,ye,null),e(ye,ov),$(Vo,ye,null),k(o,qp,u),k(o,Et,u),e(Et,Jo),e(Jo,Gd),$(Wr,Gd,null),e(Et,nv),e(Et,Kd),e(Kd,sv),k(o,zp,u),k(o,O,u),$(Ur,O,null),e(O,rv),e(O,Xd),e(Xd,av),e(O,iv),e(O,Qr),e(Qr,lv),e(Qr,Wa),e(Wa,dv),e(Qr,cv),e(O,pv),e(O,Hr),e(Hr,hv),e(Hr,Vr),e(Vr,gv),e(Hr,mv),e(O,fv),e(O,Yd),e(Yd,uv),e(O,_v),e(O,Ae),e(Ae,Zd),e(Zd,Jr),e(Jr,bv),e(Ae,kv),e(Ae,ec),e(ec,Rr),e(Rr,Bv),e(Ae,vv),e(Ae,tc),e(tc,Gr),e(Gr,$v),e(Ae,wv),e(Ae,oc),e(oc,Kr),e(Kr,yv),e(O,Tv),e(O,Te),$(Xr,Te,null),e(Te,xv),e(Te,Pt),e(Pt,Fv),e(Pt,nc),e(nc,qv),e(Pt,zv),e(Pt,sc),e(sc,Mv),e(Pt,Ev),e(Te,Pv),$(Ro,Te,null),e(Te,jv),$(Go,Te,null),k(o,Mp,u),k(o,jt,u),e(jt,Ko),e(Ko,rc),$(Yr,rc,null),e(jt,Cv),e(jt,ac),e(ac,Av),k(o,Ep,u),k(o,D,u),$(Zr,D,null),e(D,Lv),e(D,Ct),e(Ct,Iv),e(Ct,ic),e(ic,Sv),e(Ct,Nv),e(Ct,lc),e(lc,Ov),e(Ct,Dv),e(D,Wv),e(D,ea),e(ea,Uv),e(ea,Ua),e(Ua,Qv),e(ea,Hv),e(D,Vv),e(D,ta),e(ta,Jv),e(ta,oa),e(oa,Rv),e(ta,Gv),e(D,Kv),e(D,dc),e(dc,Xv),e(D,Yv),e(D,Le),e(Le,cc),e(cc,na),e(na,Zv),e(Le,e$),e(Le,pc),e(pc,sa),e(sa,t$),e(Le,o$),e(Le,hc),e(hc,ra),e(ra,n$),e(Le,s$),e(Le,gc),e(gc,aa),e(aa,r$),e(D,a$),e(D,xe),$(ia,xe,null),e(xe,i$),e(xe,At),e(At,l$),e(At,Qa),e(Qa,d$),e(At,c$),e(At,mc),e(mc,p$),e(At,h$),e(xe,g$),$(Xo,xe,null),e(xe,m$),$(Yo,xe,null),Pp=!0},p(o,[u]){const la={};u&2&&(la.$$scope={dirty:u,ctx:o}),Dt.$set(la);const fc={};u&2&&(fc.$$scope={dirty:u,ctx:o}),Yt.$set(fc);const uc={};u&2&&(uc.$$scope={dirty:u,ctx:o}),oo.$set(uc);const _c={};u&2&&(_c.$$scope={dirty:u,ctx:o}),no.$set(_c);const da={};u&2&&(da.$$scope={dirty:u,ctx:o}),ro.$set(da);const bc={};u&2&&(bc.$$scope={dirty:u,ctx:o}),ao.$set(bc);const kc={};u&2&&(kc.$$scope={dirty:u,ctx:o}),lo.$set(kc);const Bc={};u&2&&(Bc.$$scope={dirty:u,ctx:o}),co.$set(Bc);const ca={};u&2&&(ca.$$scope={dirty:u,ctx:o}),ho.$set(ca);const vc={};u&2&&(vc.$$scope={dirty:u,ctx:o}),go.$set(vc);const $c={};u&2&&($c.$$scope={dirty:u,ctx:o}),mo.$set($c);const wc={};u&2&&(wc.$$scope={dirty:u,ctx:o}),uo.$set(wc);const yc={};u&2&&(yc.$$scope={dirty:u,ctx:o}),_o.$set(yc);const Tc={};u&2&&(Tc.$$scope={dirty:u,ctx:o}),bo.$set(Tc);const R={};u&2&&(R.$$scope={dirty:u,ctx:o}),ko.$set(R);const pa={};u&2&&(pa.$$scope={dirty:u,ctx:o}),Bo.$set(pa);const xc={};u&2&&(xc.$$scope={dirty:u,ctx:o}),$o.$set(xc);const me={};u&2&&(me.$$scope={dirty:u,ctx:o}),wo.$set(me);const Fc={};u&2&&(Fc.$$scope={dirty:u,ctx:o}),To.$set(Fc);const qc={};u&2&&(qc.$$scope={dirty:u,ctx:o}),xo.$set(qc);const zc={};u&2&&(zc.$$scope={dirty:u,ctx:o}),Fo.$set(zc);const Mc={};u&2&&(Mc.$$scope={dirty:u,ctx:o}),zo.$set(Mc);const Ec={};u&2&&(Ec.$$scope={dirty:u,ctx:o}),Mo.$set(Ec);const Pc={};u&2&&(Pc.$$scope={dirty:u,ctx:o}),Eo.$set(Pc);const ha={};u&2&&(ha.$$scope={dirty:u,ctx:o}),jo.$set(ha);const jc={};u&2&&(jc.$$scope={dirty:u,ctx:o}),Co.$set(jc);const Ha={};u&2&&(Ha.$$scope={dirty:u,ctx:o}),Lo.$set(Ha);const Cc={};u&2&&(Cc.$$scope={dirty:u,ctx:o}),Io.$set(Cc);const Lt={};u&2&&(Lt.$$scope={dirty:u,ctx:o}),No.$set(Lt);const Ac={};u&2&&(Ac.$$scope={dirty:u,ctx:o}),Oo.$set(Ac);const Lc={};u&2&&(Lc.$$scope={dirty:u,ctx:o}),Wo.$set(Lc);const ga={};u&2&&(ga.$$scope={dirty:u,ctx:o}),Uo.$set(ga);const Ic={};u&2&&(Ic.$$scope={dirty:u,ctx:o}),Ho.$set(Ic);const Sc={};u&2&&(Sc.$$scope={dirty:u,ctx:o}),Vo.$set(Sc);const Nc={};u&2&&(Nc.$$scope={dirty:u,ctx:o}),Ro.$set(Nc);const W={};u&2&&(W.$$scope={dirty:u,ctx:o}),Go.$set(W);const It={};u&2&&(It.$$scope={dirty:u,ctx:o}),Xo.$set(It);const Oc={};u&2&&(Oc.$$scope={dirty:u,ctx:o}),Yo.$set(Oc)},i(o){Pp||(w(l.$$.fragment,o),w(yn.$$.fragment,o),w(En.$$.fragment,o),w(Pn.$$.fragment,o),w(Dt.$$.fragment,o),w(An.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Nn.$$.fragment,o),w(On.$$.fragment,o),w(Qn.$$.fragment,o),w(Vn.$$.fragment,o),w(Rn.$$.fragment,o),w(Gn.$$.fragment,o),w(Kn.$$.fragment,o),w(Xn.$$.fragment,o),w(Zn.$$.fragment,o),w(ts.$$.fragment,o),w(Yt.$$.fragment,o),w(os.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(ls.$$.fragment,o),w(gs.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(ms.$$.fragment,o),w(fs.$$.fragment,o),w(us.$$.fragment,o),w(ro.$$.fragment,o),w(ao.$$.fragment,o),w(_s.$$.fragment,o),w(bs.$$.fragment,o),w(Bs.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(vs.$$.fragment,o),w($s.$$.fragment,o),w(ys.$$.fragment,o),w(ho.$$.fragment,o),w(go.$$.fragment,o),w(mo.$$.fragment,o),w(Ts.$$.fragment,o),w(xs.$$.fragment,o),w(zs.$$.fragment,o),w(uo.$$.fragment,o),w(_o.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(Bo.$$.fragment,o),w(Ms.$$.fragment,o),w(Es.$$.fragment,o),w(Cs.$$.fragment,o),w($o.$$.fragment,o),w(wo.$$.fragment,o),w(As.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(To.$$.fragment,o),w(xo.$$.fragment,o),w(Fo.$$.fragment,o),w(Os.$$.fragment,o),w(Ds.$$.fragment,o),w(Qs.$$.fragment,o),w(zo.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(Hs.$$.fragment,o),w(Vs.$$.fragment,o),w(er.$$.fragment,o),w(jo.$$.fragment,o),w(Co.$$.fragment,o),w(tr.$$.fragment,o),w(or.$$.fragment,o),w(cr.$$.fragment,o),w(Lo.$$.fragment,o),w(Io.$$.fragment,o),w(pr.$$.fragment,o),w(hr.$$.fragment,o),w(vr.$$.fragment,o),w(No.$$.fragment,o),w(Oo.$$.fragment,o),w($r.$$.fragment,o),w(wr.$$.fragment,o),w(Er.$$.fragment,o),w(Wo.$$.fragment,o),w(Uo.$$.fragment,o),w(Pr.$$.fragment,o),w(jr.$$.fragment,o),w(Dr.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Wr.$$.fragment,o),w(Ur.$$.fragment,o),w(Xr.$$.fragment,o),w(Ro.$$.fragment,o),w(Go.$$.fragment,o),w(Yr.$$.fragment,o),w(Zr.$$.fragment,o),w(ia.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),Pp=!0)},o(o){y(l.$$.fragment,o),y(yn.$$.fragment,o),y(En.$$.fragment,o),y(Pn.$$.fragment,o),y(Dt.$$.fragment,o),y(An.$$.fragment,o),y(In.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(On.$$.fragment,o),y(Qn.$$.fragment,o),y(Vn.$$.fragment,o),y(Rn.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Xn.$$.fragment,o),y(Zn.$$.fragment,o),y(ts.$$.fragment,o),y(Yt.$$.fragment,o),y(os.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(gs.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(ms.$$.fragment,o),y(fs.$$.fragment,o),y(us.$$.fragment,o),y(ro.$$.fragment,o),y(ao.$$.fragment,o),y(_s.$$.fragment,o),y(bs.$$.fragment,o),y(Bs.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(vs.$$.fragment,o),y($s.$$.fragment,o),y(ys.$$.fragment,o),y(ho.$$.fragment,o),y(go.$$.fragment,o),y(mo.$$.fragment,o),y(Ts.$$.fragment,o),y(xs.$$.fragment,o),y(zs.$$.fragment,o),y(uo.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y(Bo.$$.fragment,o),y(Ms.$$.fragment,o),y(Es.$$.fragment,o),y(Cs.$$.fragment,o),y($o.$$.fragment,o),y(wo.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Ns.$$.fragment,o),y(To.$$.fragment,o),y(xo.$$.fragment,o),y(Fo.$$.fragment,o),y(Os.$$.fragment,o),y(Ds.$$.fragment,o),y(Qs.$$.fragment,o),y(zo.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(Hs.$$.fragment,o),y(Vs.$$.fragment,o),y(er.$$.fragment,o),y(jo.$$.fragment,o),y(Co.$$.fragment,o),y(tr.$$.fragment,o),y(or.$$.fragment,o),y(cr.$$.fragment,o),y(Lo.$$.fragment,o),y(Io.$$.fragment,o),y(pr.$$.fragment,o),y(hr.$$.fragment,o),y(vr.$$.fragment,o),y(No.$$.fragment,o),y(Oo.$$.fragment,o),y($r.$$.fragment,o),y(wr.$$.fragment,o),y(Er.$$.fragment,o),y(Wo.$$.fragment,o),y(Uo.$$.fragment,o),y(Pr.$$.fragment,o),y(jr.$$.fragment,o),y(Dr.$$.fragment,o),y(Ho.$$.fragment,o),y(Vo.$$.fragment,o),y(Wr.$$.fragment,o),y(Ur.$$.fragment,o),y(Xr.$$.fragment,o),y(Ro.$$.fragment,o),y(Go.$$.fragment,o),y(Yr.$$.fragment,o),y(Zr.$$.fragment,o),y(ia.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),Pp=!1},d(o){t(d),o&&t(_),o&&t(g),T(l),o&&t(Dc),o&&t(He),T(yn),o&&t(Wc),o&&t(Nt),o&&t(Uc),o&&t(ma),o&&t(Qc),o&&t(fa),o&&t(Hc),o&&t(ua),o&&t(Vc),o&&t(H),o&&t(Jc),o&&t(Ie),o&&t(Rc),o&&t(Ve),T(En),o&&t(Gc),o&&t(j),T(Pn),T(Dt),T(An),T(In),T(Sn),o&&t(Kc),o&&t(Ge),T(Nn),o&&t(Xc),o&&t(C),T(On),T(Qn),T(Vn),T(Rn),T(Gn),o&&t(Yc),o&&t(Xe),T(Kn),o&&t(Zc),o&&t(V),T(Xn),T(Zn),T(ts),T(Yt),T(os),o&&t(ep),o&&t(Ye),T(ss),o&&t(tp),o&&t(Ze),T(rs),o&&t(op),o&&t(et),T(is),o&&t(np),o&&t(J),T(ls),T(gs),T(oo),T(no),o&&t(sp),o&&t(ot),T(ms),o&&t(rp),o&&t(nt),T(fs),T(us),T(ro),T(ao),o&&t(ap),o&&t(rt),T(_s),o&&t(ip),o&&t(qe),T(bs),T(Bs),T(lo),T(co),o&&t(lp),o&&t(lt),T(vs),o&&t(dp),o&&t(ze),T($s),T(ys),T(ho),T(go),T(mo),o&&t(cp),o&&t(pt),T(Ts),o&&t(pp),o&&t(ce),T(xs),T(zs),T(uo),T(_o),T(bo),T(ko),T(Bo),o&&t(hp),o&&t(gt),T(Ms),o&&t(gp),o&&t(pe),T(Es),T(Cs),T($o),T(wo),o&&t(mp),o&&t(ft),T(As),o&&t(fp),o&&t(he),T(Ls),T(Ns),T(To),T(xo),T(Fo),o&&t(up),o&&t(_t),T(Os),o&&t(_p),o&&t(ge),T(Ds),T(Qs),T(zo),T(Mo),T(Eo),o&&t(bp),o&&t(Bt),T(Hs),o&&t(kp),o&&t(A),T(Vs),T(er),T(jo),T(Co),o&&t(Bp),o&&t($t),T(tr),o&&t(vp),o&&t(L),T(or),T(cr),T(Lo),T(Io),o&&t($p),o&&t(Tt),T(pr),o&&t(wp),o&&t(I),T(hr),T(vr),T(No),T(Oo),o&&t(yp),o&&t(Ft),T($r),o&&t(Tp),o&&t(S),T(wr),T(Er),T(Wo),T(Uo),o&&t(xp),o&&t(zt),T(Pr),o&&t(Fp),o&&t(N),T(jr),T(Dr),T(Ho),T(Vo),o&&t(qp),o&&t(Et),T(Wr),o&&t(zp),o&&t(O),T(Ur),T(Xr),T(Ro),T(Go),o&&t(Mp),o&&t(jt),T(Yr),o&&t(Ep),o&&t(D),T(Zr),T(ia),T(Xo),T(Yo)}}}const q2={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function z2(x){return WT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class L2 extends ST{constructor(d){super();NT(this,d,z2,F2,OT,{})}}export{L2 as default,q2 as metadata};
