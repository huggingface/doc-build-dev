import{S as ST,i as NT,s as OT,e as n,k as p,w as B,t as a,M as DT,c as s,d as t,m as h,a as r,x as v,h as i,b as c,F as e,g as k,y as $,q as w,o as y,B as T,v as WT,L as E}from"../../chunks/vendor-6b77c823.js";import{T as G}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-1088f2fb.js";import{C as P}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as M}from"../../chunks/ExampleCodeBlock-5212b321.js";function UT(x){let d,_,m,g,b;return g=new P({props:{code:"",highlighted:""}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function QT(x){let d,_;return d=new P({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){B(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,g){$(d,m,g),_=!0},p:E,i(m){_||(w(d.$$.fragment,m),_=!0)},o(m){y(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function HT(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function VT(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function JT(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function RT(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function GT(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function KT(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForCausalLM, BigBirdConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function XT(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function YT(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMaskedLM
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
`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function ZT(x){let d,_;return d=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){B(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,g){$(d,m,g),_=!0},p:E,i(m){_||(w(d.$$.fragment,m),_=!0)},o(m){y(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function e2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function t2(x){let d,_,m,g,b;return g=new P({props:{code:`import torch
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
`}}),{c(){d=n("p"),_=a("Example of single-label classification:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example of single-label classification:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function o2(x){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){B(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,g){$(d,m,g),_=!0},p:E,i(m){_||(w(d.$$.fragment,m),_=!0)},o(m){y(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function n2(x){let d,_,m,g,b;return g=new P({props:{code:`import torch
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
`}}),{c(){d=n("p"),_=a("Example of multi-label classification:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example of multi-label classification:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function s2(x){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){B(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,g){$(d,m,g),_=!0},p:E,i(m){_||(w(d.$$.fragment,m),_=!0)},o(m){y(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function r2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function a2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function i2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function l2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
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
`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function d2(x){let d,_;return d=new P({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){B(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,g){$(d,m,g),_=!0},p:E,i(m){_||(w(d.$$.fragment,m),_=!0)},o(m){y(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function c2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function p2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForQuestionAnswering
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
`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function h2(x){let d,_;return d=new P({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){B(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,g){$(d,m,g),_=!0},p:E,i(m){_||(w(d.$$.fragment,m),_=!0)},o(m){y(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function m2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function f2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function g2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function u2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function _2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function b2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function k2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function B2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function v2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function $2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function w2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function y2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function T2(x){let d,_,m,g,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),g=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(f,"CODE",{});var F=r(m);g=i(F,"Module"),F.forEach(t),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,_),e(d,m),e(m,g),e(d,b)},d(l){l&&t(d)}}}function x2(x){let d,_,m,g,b;return g=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),B(g.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(t),m=h(l),v(g.$$.fragment,l)},m(l,f){k(l,d,f),e(d,_),k(l,m,f),$(g,l,f),b=!0},p:E,i(l){b||(w(g.$$.fragment,l),b=!0)},o(l){y(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(g,l)}}}function F2(x){let d,_,m,g,b,l,f,F,Ah,Dc,He,St,bi,yn,Lh,ki,Ih,Wc,Nt,Sh,Tn,Nh,Oh,Uc,fa,Dh,Qc,ga,Bi,Wh,Hc,ua,Uh,Vc,H,xn,Qh,Fn,Hh,Vh,Jh,de,Rh,vi,Gh,Kh,$i,Xh,Yh,wi,Zh,em,yi,tm,om,nm,Ti,sm,rm,xi,am,im,qn,lm,Fi,dm,cm,pm,_a,hm,qi,mm,Jc,Ie,fm,zn,gm,um,Mn,_m,bm,Rc,Ve,Ot,zi,En,km,Mi,Bm,Gc,j,Pn,vm,Je,$m,ba,wm,ym,jn,Tm,xm,Fm,Re,qm,ka,zm,Mm,Ba,Em,Pm,jm,Dt,Cm,Ei,Pi,ji,Ci,Am,Lm,Ai,Li,Cn,Wt,Ut,Ii,An,Im,Si,Sm,Nm,Ni,Om,Dm,Oi,Di,Ln,Qt,Ht,Wi,In,Wm,Ui,Um,Qm,Qi,Hm,Vm,Hi,Vi,Ji,Vt,Jt,Ri,Sn,Jm,Gi,Rm,Kc,Ge,Rt,Ki,Nn,Gm,Xi,Km,Xc,C,On,Xm,Dn,Ym,Wn,Zm,ef,tf,Un,of,va,nf,sf,rf,Se,Qn,af,Yi,lf,df,Hn,$a,cf,Zi,pf,hf,wa,mf,el,ff,gf,Gt,Vn,uf,Jn,_f,tl,bf,kf,Bf,Kt,Rn,vf,Ke,$f,ol,wf,yf,nl,Tf,xf,Ff,ya,Gn,Yc,Xe,Xt,sl,Kn,qf,rl,zf,Zc,V,Xn,Mf,Fe,Ef,al,Pf,jf,Yn,Cf,Af,Ta,Lf,If,Sf,Ne,Zn,Nf,il,Of,Df,es,xa,Wf,ll,Uf,Qf,Fa,Hf,dl,Vf,Jf,ge,ts,Rf,cl,Gf,Kf,Yt,Xf,pl,Yf,Zf,Zt,os,eg,ns,tg,hl,og,ng,ep,Ye,eo,ml,ss,sg,fl,rg,tp,Ze,rs,ag,as,ig,qa,lg,dg,op,et,to,gl,is,cg,ul,pg,np,J,ls,hg,ds,mg,cs,fg,gg,ug,ps,_g,hs,bg,kg,Bg,Q,vg,_l,$g,wg,bl,yg,Tg,kl,xg,Fg,Bl,qg,zg,vl,Mg,Eg,$l,Pg,jg,Cg,ue,ms,Ag,tt,Lg,za,Ig,Sg,wl,Ng,Og,Dg,oo,Wg,no,sp,ot,so,yl,fs,Ug,Tl,Qg,rp,nt,gs,Hg,_e,us,Vg,st,Jg,Ma,Rg,Gg,xl,Kg,Xg,Yg,ro,Zg,ao,ap,rt,io,Fl,_s,eu,ql,tu,ip,qe,bs,ou,at,nu,zl,su,ru,ks,au,iu,lu,be,Bs,du,it,cu,Ea,pu,hu,Ml,mu,fu,gu,lo,uu,co,lp,lt,po,El,vs,_u,Pl,bu,dp,ze,$s,ku,dt,Bu,jl,vu,$u,ws,wu,yu,Tu,K,ys,xu,ct,Fu,Pa,qu,zu,Cl,Mu,Eu,Pu,ho,ju,mo,Cu,fo,cp,pt,go,Al,Ts,Au,Ll,Lu,pp,ce,xs,Iu,Il,Su,Nu,Fs,Ou,qs,Du,Wu,Uu,U,zs,Qu,ht,Hu,ja,Vu,Ju,Sl,Ru,Gu,Ku,uo,Xu,_o,Yu,bo,Zu,ko,e_,Bo,hp,mt,vo,Nl,Ms,t_,Ol,o_,mp,pe,Es,n_,Dl,s_,r_,Ps,a_,js,i_,l_,d_,ke,Cs,c_,ft,p_,Ca,h_,m_,Wl,f_,g_,u_,$o,__,wo,fp,gt,yo,Ul,As,b_,Ql,k_,gp,he,Ls,B_,Hl,v_,$_,Is,w_,Ss,y_,T_,x_,X,Ns,F_,ut,q_,Aa,z_,M_,Vl,E_,P_,j_,To,C_,xo,A_,Fo,up,_t,qo,Jl,Os,L_,Rl,I_,_p,me,Ds,S_,bt,N_,Gl,O_,D_,Kl,W_,U_,Q_,Ws,H_,Us,V_,J_,R_,Y,Qs,G_,kt,K_,La,X_,Y_,Xl,Z_,eb,tb,zo,ob,Mo,nb,Eo,bp,Bt,Po,Yl,Hs,sb,Zl,rb,kp,A,Vs,ab,ed,ib,lb,Js,db,Ia,cb,pb,hb,Rs,mb,Gs,fb,gb,ub,td,_b,bb,Me,od,Ks,kb,Bb,nd,Xs,vb,$b,sd,Ys,wb,yb,rd,Zs,Tb,xb,Be,er,Fb,vt,qb,ad,zb,Mb,id,Eb,Pb,jb,jo,Cb,Co,Bp,$t,Ao,ld,tr,Ab,dd,Lb,vp,L,or,Ib,wt,Sb,cd,Nb,Ob,pd,Db,Wb,Ub,nr,Qb,Sa,Hb,Vb,Jb,sr,Rb,rr,Gb,Kb,Xb,hd,Yb,Zb,Ee,md,ar,ek,tk,fd,ir,ok,nk,gd,lr,sk,rk,ud,dr,ak,ik,ve,cr,lk,yt,dk,_d,ck,pk,bd,hk,mk,fk,Lo,gk,Io,$p,Tt,So,kd,pr,uk,Bd,_k,wp,I,hr,bk,mr,kk,vd,Bk,vk,$k,fr,wk,Na,yk,Tk,xk,gr,Fk,ur,qk,zk,Mk,$d,Ek,Pk,Pe,wd,_r,jk,Ck,yd,br,Ak,Lk,Td,kr,Ik,Sk,xd,Br,Nk,Ok,$e,vr,Dk,xt,Wk,Fd,Uk,Qk,qd,Hk,Vk,Jk,No,Rk,Oo,yp,Ft,Do,zd,$r,Gk,Md,Kk,Tp,S,wr,Xk,Ed,Yk,Zk,yr,e1,Oa,t1,o1,n1,Tr,s1,xr,r1,a1,i1,Pd,l1,d1,je,jd,Fr,c1,p1,Cd,qr,h1,m1,Ad,zr,f1,g1,Ld,Mr,u1,_1,we,Er,b1,qt,k1,Id,B1,v1,Sd,$1,w1,y1,Wo,T1,Uo,xp,zt,Qo,Nd,Pr,x1,Od,F1,Fp,N,jr,q1,Dd,z1,M1,Cr,E1,Da,P1,j1,C1,Ar,A1,Lr,L1,I1,S1,Wd,N1,O1,Ce,Ud,Ir,D1,W1,Qd,Sr,U1,Q1,Hd,Nr,H1,V1,Vd,Or,J1,R1,ye,Dr,G1,Mt,K1,Jd,X1,Y1,Rd,Z1,eB,tB,Ho,oB,Vo,qp,Et,Jo,Gd,Wr,nB,Kd,sB,zp,O,Ur,rB,Xd,aB,iB,Qr,lB,Wa,dB,cB,pB,Hr,hB,Vr,mB,fB,gB,Yd,uB,_B,Ae,Zd,Jr,bB,kB,ec,Rr,BB,vB,tc,Gr,$B,wB,oc,Kr,yB,TB,Te,Xr,xB,Pt,FB,nc,qB,zB,sc,MB,EB,PB,Ro,jB,Go,Mp,jt,Ko,rc,Yr,CB,ac,AB,Ep,D,Zr,LB,Ct,IB,ic,SB,NB,lc,OB,DB,WB,ea,UB,Ua,QB,HB,VB,ta,JB,oa,RB,GB,KB,dc,XB,YB,Le,cc,na,ZB,ev,pc,sa,tv,ov,hc,ra,nv,sv,mc,aa,rv,av,xe,ia,iv,At,lv,Qa,dv,cv,fc,pv,hv,mv,Xo,fv,Yo,Pp;return l=new z({}),yn=new z({}),En=new z({}),Pn=new q({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BigBird model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BigBirdConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/configuration_big_bird.py#L31"}}),Dt=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[UT]},$$scope:{ctx:x}}}),An=new z({}),In=new z({}),Sn=new z({}),Nn=new z({}),On=new q({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird.py#L47"}}),Qn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird.py#L201",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird.py#L226",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird.py#L253",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new q({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird.py#L184"}}),Kn=new z({}),Xn=new q({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L58"}}),Zn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L145",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L201",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yt=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[QT]},$$scope:{ctx:x}}}),os=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L170",returnDescription:`
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L1852"}}),is=new z({}),ls=new q({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L1924"}}),ms=new q({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L1980",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new G({props:{$$slots:{default:[HT]},$$scope:{ctx:x}}}),no=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[VT]},$$scope:{ctx:x}}}),fs=new z({}),gs=new q({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2263"}}),us=new q({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BigBirdForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. If specified, nsp loss will be
added to masked_lm loss. Input should be a sequence pair (see <code>input_ids</code> docstring) Indices should be in
<code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.BigBirdForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2279",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new G({props:{$$slots:{default:[JT]},$$scope:{ctx:x}}}),ao=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[RT]},$$scope:{ctx:x}}}),_s=new z({}),bs=new q({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2470"}}),Bs=new q({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2492",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lo=new G({props:{$$slots:{default:[GT]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[KT]},$$scope:{ctx:x}}}),vs=new z({}),$s=new q({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2367"}}),ys=new q({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2389",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new G({props:{$$slots:{default:[XT]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[YT]},$$scope:{ctx:x}}}),fo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[ZT]},$$scope:{ctx:x}}}),Ts=new z({}),xs=new q({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2647"}}),zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2658",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new G({props:{$$slots:{default:[e2]},$$scope:{ctx:x}}}),_o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[t2]},$$scope:{ctx:x}}}),bo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[o2]},$$scope:{ctx:x}}}),ko=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-3",$$slots:{default:[n2]},$$scope:{ctx:x}}}),Bo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-4",$$slots:{default:[s2]},$$scope:{ctx:x}}}),Ms=new z({}),Es=new q({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2743"}}),Cs=new q({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2754",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new G({props:{$$slots:{default:[r2]},$$scope:{ctx:x}}}),wo=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[a2]},$$scope:{ctx:x}}}),As=new z({}),Ls=new q({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2837"}}),Ns=new q({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2852",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new G({props:{$$slots:{default:[i2]},$$scope:{ctx:x}}}),xo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[l2]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[d2]},$$scope:{ctx:x}}}),Os=new z({}),Ds=new q({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2937"}}),Qs=new q({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_big_bird.py#L2951",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),zo=new G({props:{$$slots:{default:[c2]},$$scope:{ctx:x}}}),Mo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[p2]},$$scope:{ctx:x}}}),Eo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[h2]},$$scope:{ctx:x}}}),Hs=new z({}),Vs=new q({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1559"}}),er=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new G({props:{$$slots:{default:[m2]},$$scope:{ctx:x}}}),Co=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[f2]},$$scope:{ctx:x}}}),tr=new z({}),or=new q({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1634"}}),cr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),Lo=new G({props:{$$slots:{default:[g2]},$$scope:{ctx:x}}}),Io=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[u2]},$$scope:{ctx:x}}}),pr=new z({}),hr=new q({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1721"}}),vr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new G({props:{$$slots:{default:[_2]},$$scope:{ctx:x}}}),Oo=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[b2]},$$scope:{ctx:x}}}),$r=new z({}),wr=new q({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1810"}}),Er=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new G({props:{$$slots:{default:[k2]},$$scope:{ctx:x}}}),Uo=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[B2]},$$scope:{ctx:x}}}),Pr=new z({}),jr=new q({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1887"}}),Dr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new G({props:{$$slots:{default:[v2]},$$scope:{ctx:x}}}),Vo=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[$2]},$$scope:{ctx:x}}}),Wr=new z({}),Ur=new q({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1979"}}),Xr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new G({props:{$$slots:{default:[w2]},$$scope:{ctx:x}}}),Go=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[y2]},$$scope:{ctx:x}}}),Yr=new z({}),Zr=new q({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2078"}}),ia=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2081",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdConfig"
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
`}}),Xo=new G({props:{$$slots:{default:[T2]},$$scope:{ctx:x}}}),Yo=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[x2]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),m=n("h1"),g=n("a"),b=n("span"),B(l.$$.fragment),f=p(),F=n("span"),Ah=a("BigBird"),Dc=p(),He=n("h2"),St=n("a"),bi=n("span"),B(yn.$$.fragment),Lh=p(),ki=n("span"),Ih=a("Overview"),Wc=p(),Nt=n("p"),Sh=a("The BigBird model was proposed in "),Tn=n("a"),Nh=a("Big Bird: Transformers for Longer Sequences"),Oh=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Uc=p(),fa=n("p"),Dh=a("The abstract from the paper is the following:"),Qc=p(),ga=n("p"),Bi=n("em"),Wh=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Hc=p(),ua=n("p"),Uh=a("Tips:"),Vc=p(),H=n("ul"),xn=n("li"),Qh=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),Fn=n("a"),Hh=a("this blog post"),Vh=a("."),Jh=p(),de=n("li"),Rh=a("BigBird comes with 2 implementations: "),vi=n("strong"),Gh=a("original_full"),Kh=a(" & "),$i=n("strong"),Xh=a("block_sparse"),Yh=a(`. For the sequence length < 1024, using
`),wi=n("strong"),Zh=a("original_full"),em=a(" is advised as there is no benefit in using "),yi=n("strong"),tm=a("block_sparse"),om=a(" attention."),nm=p(),Ti=n("li"),sm=a("The code currently uses window size of 3 blocks and 2 global blocks."),rm=p(),xi=n("li"),am=a("Sequence length must be divisible by block size."),im=p(),qn=n("li"),lm=a("Current implementation supports only "),Fi=n("strong"),dm=a("ITC"),cm=a("."),pm=p(),_a=n("li"),hm=a("Current implementation doesn\u2019t support "),qi=n("strong"),mm=a("num_random_blocks = 0"),Jc=p(),Ie=n("p"),fm=a("This model was contributed by "),zn=n("a"),gm=a("vasudevgupta"),um=a(`. The original code can be found
`),Mn=n("a"),_m=a("here"),bm=a("."),Rc=p(),Ve=n("h2"),Ot=n("a"),zi=n("span"),B(En.$$.fragment),km=p(),Mi=n("span"),Bm=a("BigBirdConfig"),Gc=p(),j=n("div"),B(Pn.$$.fragment),vm=p(),Je=n("p"),$m=a("This is the configuration class to store the configuration of a "),ba=n("a"),wm=a("BigBirdModel"),ym=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),jn=n("a"),Tm=a("google/bigbird-roberta-base"),xm=a(" architecture."),Fm=p(),Re=n("p"),qm=a("Configuration objects inherit from "),ka=n("a"),zm=a("PretrainedConfig"),Mm=a(` and can be used to control the model outputs. Read the
documentation from `),Ba=n("a"),Em=a("PretrainedConfig"),Pm=a(" for more information."),jm=p(),B(Dt.$$.fragment),Cm=p(),Ei=n("blockquote"),Pi=n("blockquote"),ji=n("blockquote"),Ci=n("p"),Am=a("from transformers import BigBirdModel, BigBirdConfig"),Lm=p(),Ai=n("blockquote"),Li=n("blockquote"),Cn=n("blockquote"),Wt=n("h1"),Ut=n("a"),Ii=n("span"),B(An.$$.fragment),Im=p(),Si=n("span"),Sm=a("Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),Nm=p(),Ni=n("p"),Om=a("BigBirdConfig()"),Dm=p(),Oi=n("blockquote"),Di=n("blockquote"),Ln=n("blockquote"),Qt=n("h1"),Ht=n("a"),Wi=n("span"),B(In.$$.fragment),Wm=p(),Ui=n("span"),Um=a("Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),Qm=p(),Qi=n("p"),Hm=a("BigBirdModel(configuration)"),Vm=p(),Hi=n("blockquote"),Vi=n("blockquote"),Ji=n("blockquote"),Vt=n("h1"),Jt=n("a"),Ri=n("span"),B(Sn.$$.fragment),Jm=p(),Gi=n("span"),Rm=a("Accessing the model configuration >>> configuration = model.config"),Kc=p(),Ge=n("h2"),Rt=n("a"),Ki=n("span"),B(Nn.$$.fragment),Gm=p(),Xi=n("span"),Km=a("BigBirdTokenizer"),Xc=p(),C=n("div"),B(On.$$.fragment),Xm=p(),Dn=n("p"),Ym=a("Construct a BigBird tokenizer. Based on "),Wn=n("a"),Zm=a("SentencePiece"),ef=a("."),tf=p(),Un=n("p"),of=a("This tokenizer inherits from "),va=n("a"),nf=a("PreTrainedTokenizer"),sf=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),rf=p(),Se=n("div"),B(Qn.$$.fragment),af=p(),Yi=n("p"),lf=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),df=p(),Hn=n("ul"),$a=n("li"),cf=a("single sequence: "),Zi=n("code"),pf=a("[CLS] X [SEP]"),hf=p(),wa=n("li"),mf=a("pair of sequences: "),el=n("code"),ff=a("[CLS] A [SEP] B [SEP]"),gf=p(),Gt=n("div"),B(Vn.$$.fragment),uf=p(),Jn=n("p"),_f=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tl=n("code"),bf=a("prepare_for_model"),kf=a(" method."),Bf=p(),Kt=n("div"),B(Rn.$$.fragment),vf=p(),Ke=n("p"),$f=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),ol=n("code"),wf=a("token_ids_1"),yf=a(" is "),nl=n("code"),Tf=a("None"),xf=a(", this method only returns the first portion of the mask (0s)."),Ff=p(),ya=n("div"),B(Gn.$$.fragment),Yc=p(),Xe=n("h2"),Xt=n("a"),sl=n("span"),B(Kn.$$.fragment),qf=p(),rl=n("span"),zf=a("BigBirdTokenizerFast"),Zc=p(),V=n("div"),B(Xn.$$.fragment),Mf=p(),Fe=n("p"),Ef=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),al=n("em"),Pf=a("tokenizers"),jf=a(` library). Based on
`),Yn=n("a"),Cf=a("Unigram"),Af=a(`. This
tokenizer inherits from `),Ta=n("a"),Lf=a("PreTrainedTokenizerFast"),If=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Sf=p(),Ne=n("div"),B(Zn.$$.fragment),Nf=p(),il=n("p"),Of=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),Df=p(),es=n("ul"),xa=n("li"),Wf=a("single sequence: "),ll=n("code"),Uf=a("[CLS] X [SEP]"),Qf=p(),Fa=n("li"),Hf=a("pair of sequences: "),dl=n("code"),Vf=a("[CLS] A [SEP] B [SEP]"),Jf=p(),ge=n("div"),B(ts.$$.fragment),Rf=p(),cl=n("p"),Gf=a(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),Kf=p(),B(Yt.$$.fragment),Xf=p(),pl=n("p"),Yf=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Zf=p(),Zt=n("div"),B(os.$$.fragment),eg=p(),ns=n("p"),tg=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=n("code"),og=a("prepare_for_model"),ng=a(" method."),ep=p(),Ye=n("h2"),eo=n("a"),ml=n("span"),B(ss.$$.fragment),sg=p(),fl=n("span"),rg=a("BigBird specific outputs"),tp=p(),Ze=n("div"),B(rs.$$.fragment),ag=p(),as=n("p"),ig=a("Output type of "),qa=n("a"),lg=a("BigBirdForPreTraining"),dg=a("."),op=p(),et=n("h2"),to=n("a"),gl=n("span"),B(is.$$.fragment),cg=p(),ul=n("span"),pg=a("BigBirdModel"),np=p(),J=n("div"),B(ls.$$.fragment),hg=p(),ds=n("p"),mg=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cs=n("a"),fg=a("torch.nn.Module"),gg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ug=p(),ps=n("p"),_g=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hs=n("a"),bg=a(`Attention is
all you need`),kg=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Bg=p(),Q=n("p"),vg=a("To behave as an decoder the model needs to be initialized with the "),_l=n("code"),$g=a("is_decoder"),wg=a(` argument of the configuration set
to `),bl=n("code"),yg=a("True"),Tg=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),kl=n("code"),xg=a("is_decoder"),Fg=a(` argument and
`),Bl=n("code"),qg=a("add_cross_attention"),zg=a(" set to "),vl=n("code"),Mg=a("True"),Eg=a("; an "),$l=n("code"),Pg=a("encoder_hidden_states"),jg=a(" is then expected as an input to the forward pass."),Cg=p(),ue=n("div"),B(ms.$$.fragment),Ag=p(),tt=n("p"),Lg=a("The "),za=n("a"),Ig=a("BigBirdModel"),Sg=a(" forward method, overrides the "),wl=n("code"),Ng=a("__call__"),Og=a(" special method."),Dg=p(),B(oo.$$.fragment),Wg=p(),B(no.$$.fragment),sp=p(),ot=n("h2"),so=n("a"),yl=n("span"),B(fs.$$.fragment),Ug=p(),Tl=n("span"),Qg=a("BigBirdForPreTraining"),rp=p(),nt=n("div"),B(gs.$$.fragment),Hg=p(),_e=n("div"),B(us.$$.fragment),Vg=p(),st=n("p"),Jg=a("The "),Ma=n("a"),Rg=a("BigBirdForPreTraining"),Gg=a(" forward method, overrides the "),xl=n("code"),Kg=a("__call__"),Xg=a(" special method."),Yg=p(),B(ro.$$.fragment),Zg=p(),B(ao.$$.fragment),ap=p(),rt=n("h2"),io=n("a"),Fl=n("span"),B(_s.$$.fragment),eu=p(),ql=n("span"),tu=a("BigBirdForCausalLM"),ip=p(),qe=n("div"),B(bs.$$.fragment),ou=p(),at=n("p"),nu=a("BigBird Model with a "),zl=n("code"),su=a("language modeling"),ru=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),ks=n("a"),au=a("torch.nn.Module"),iu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lu=p(),be=n("div"),B(Bs.$$.fragment),du=p(),it=n("p"),cu=a("The "),Ea=n("a"),pu=a("BigBirdForCausalLM"),hu=a(" forward method, overrides the "),Ml=n("code"),mu=a("__call__"),fu=a(" special method."),gu=p(),B(lo.$$.fragment),uu=p(),B(co.$$.fragment),lp=p(),lt=n("h2"),po=n("a"),El=n("span"),B(vs.$$.fragment),_u=p(),Pl=n("span"),bu=a("BigBirdForMaskedLM"),dp=p(),ze=n("div"),B($s.$$.fragment),ku=p(),dt=n("p"),Bu=a("BigBird Model with a "),jl=n("code"),vu=a("language modeling"),$u=a(` head on top.
This model is a PyTorch `),ws=n("a"),wu=a("torch.nn.Module"),yu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tu=p(),K=n("div"),B(ys.$$.fragment),xu=p(),ct=n("p"),Fu=a("The "),Pa=n("a"),qu=a("BigBirdForMaskedLM"),zu=a(" forward method, overrides the "),Cl=n("code"),Mu=a("__call__"),Eu=a(" special method."),Pu=p(),B(ho.$$.fragment),ju=p(),B(mo.$$.fragment),Cu=p(),B(fo.$$.fragment),cp=p(),pt=n("h2"),go=n("a"),Al=n("span"),B(Ts.$$.fragment),Au=p(),Ll=n("span"),Lu=a("BigBirdForSequenceClassification"),pp=p(),ce=n("div"),B(xs.$$.fragment),Iu=p(),Il=n("p"),Su=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Nu=p(),Fs=n("p"),Ou=a("This model is a PyTorch "),qs=n("a"),Du=a("torch.nn.Module"),Wu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uu=p(),U=n("div"),B(zs.$$.fragment),Qu=p(),ht=n("p"),Hu=a("The "),ja=n("a"),Vu=a("BigBirdForSequenceClassification"),Ju=a(" forward method, overrides the "),Sl=n("code"),Ru=a("__call__"),Gu=a(" special method."),Ku=p(),B(uo.$$.fragment),Xu=p(),B(_o.$$.fragment),Yu=p(),B(bo.$$.fragment),Zu=p(),B(ko.$$.fragment),e_=p(),B(Bo.$$.fragment),hp=p(),mt=n("h2"),vo=n("a"),Nl=n("span"),B(Ms.$$.fragment),t_=p(),Ol=n("span"),o_=a("BigBirdForMultipleChoice"),mp=p(),pe=n("div"),B(Es.$$.fragment),n_=p(),Dl=n("p"),s_=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),r_=p(),Ps=n("p"),a_=a("This model is a PyTorch "),js=n("a"),i_=a("torch.nn.Module"),l_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),d_=p(),ke=n("div"),B(Cs.$$.fragment),c_=p(),ft=n("p"),p_=a("The "),Ca=n("a"),h_=a("BigBirdForMultipleChoice"),m_=a(" forward method, overrides the "),Wl=n("code"),f_=a("__call__"),g_=a(" special method."),u_=p(),B($o.$$.fragment),__=p(),B(wo.$$.fragment),fp=p(),gt=n("h2"),yo=n("a"),Ul=n("span"),B(As.$$.fragment),b_=p(),Ql=n("span"),k_=a("BigBirdForTokenClassification"),gp=p(),he=n("div"),B(Ls.$$.fragment),B_=p(),Hl=n("p"),v_=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$_=p(),Is=n("p"),w_=a("This model is a PyTorch "),Ss=n("a"),y_=a("torch.nn.Module"),T_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=p(),X=n("div"),B(Ns.$$.fragment),F_=p(),ut=n("p"),q_=a("The "),Aa=n("a"),z_=a("BigBirdForTokenClassification"),M_=a(" forward method, overrides the "),Vl=n("code"),E_=a("__call__"),P_=a(" special method."),j_=p(),B(To.$$.fragment),C_=p(),B(xo.$$.fragment),A_=p(),B(Fo.$$.fragment),up=p(),_t=n("h2"),qo=n("a"),Jl=n("span"),B(Os.$$.fragment),L_=p(),Rl=n("span"),I_=a("BigBirdForQuestionAnswering"),_p=p(),me=n("div"),B(Ds.$$.fragment),S_=p(),bt=n("p"),N_=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=n("code"),O_=a("span start logits"),D_=a(" and "),Kl=n("code"),W_=a("span end logits"),U_=a(")."),Q_=p(),Ws=n("p"),H_=a("This model is a PyTorch "),Us=n("a"),V_=a("torch.nn.Module"),J_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),R_=p(),Y=n("div"),B(Qs.$$.fragment),G_=p(),kt=n("p"),K_=a("The "),La=n("a"),X_=a("BigBirdForQuestionAnswering"),Y_=a(" forward method, overrides the "),Xl=n("code"),Z_=a("__call__"),eb=a(" special method."),tb=p(),B(zo.$$.fragment),ob=p(),B(Mo.$$.fragment),nb=p(),B(Eo.$$.fragment),bp=p(),Bt=n("h2"),Po=n("a"),Yl=n("span"),B(Hs.$$.fragment),sb=p(),Zl=n("span"),rb=a("FlaxBigBirdModel"),kp=p(),A=n("div"),B(Vs.$$.fragment),ab=p(),ed=n("p"),ib=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),lb=p(),Js=n("p"),db=a("This model inherits from "),Ia=n("a"),cb=a("FlaxPreTrainedModel"),pb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hb=p(),Rs=n("p"),mb=a("This model is also a Flax Linen "),Gs=n("a"),fb=a("flax.linen.Module"),gb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ub=p(),td=n("p"),_b=a("Finally, this model supports inherent JAX features such as:"),bb=p(),Me=n("ul"),od=n("li"),Ks=n("a"),kb=a("Just-In-Time (JIT) compilation"),Bb=p(),nd=n("li"),Xs=n("a"),vb=a("Automatic Differentiation"),$b=p(),sd=n("li"),Ys=n("a"),wb=a("Vectorization"),yb=p(),rd=n("li"),Zs=n("a"),Tb=a("Parallelization"),xb=p(),Be=n("div"),B(er.$$.fragment),Fb=p(),vt=n("p"),qb=a("The "),ad=n("code"),zb=a("FlaxBigBirdPreTrainedModel"),Mb=a(" forward method, overrides the "),id=n("code"),Eb=a("__call__"),Pb=a(" special method."),jb=p(),B(jo.$$.fragment),Cb=p(),B(Co.$$.fragment),Bp=p(),$t=n("h2"),Ao=n("a"),ld=n("span"),B(tr.$$.fragment),Ab=p(),dd=n("span"),Lb=a("FlaxBigBirdForPreTraining"),vp=p(),L=n("div"),B(or.$$.fragment),Ib=p(),wt=n("p"),Sb=a("BigBird Model with two heads on top as done during the pretraining: a "),cd=n("code"),Nb=a("masked language modeling"),Ob=a(" head and a "),pd=n("code"),Db=a("next sentence prediction (classification)"),Wb=a(" head."),Ub=p(),nr=n("p"),Qb=a("This model inherits from "),Sa=n("a"),Hb=a("FlaxPreTrainedModel"),Vb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jb=p(),sr=n("p"),Rb=a("This model is also a Flax Linen "),rr=n("a"),Gb=a("flax.linen.Module"),Kb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xb=p(),hd=n("p"),Yb=a("Finally, this model supports inherent JAX features such as:"),Zb=p(),Ee=n("ul"),md=n("li"),ar=n("a"),ek=a("Just-In-Time (JIT) compilation"),tk=p(),fd=n("li"),ir=n("a"),ok=a("Automatic Differentiation"),nk=p(),gd=n("li"),lr=n("a"),sk=a("Vectorization"),rk=p(),ud=n("li"),dr=n("a"),ak=a("Parallelization"),ik=p(),ve=n("div"),B(cr.$$.fragment),lk=p(),yt=n("p"),dk=a("The "),_d=n("code"),ck=a("FlaxBigBirdPreTrainedModel"),pk=a(" forward method, overrides the "),bd=n("code"),hk=a("__call__"),mk=a(" special method."),fk=p(),B(Lo.$$.fragment),gk=p(),B(Io.$$.fragment),$p=p(),Tt=n("h2"),So=n("a"),kd=n("span"),B(pr.$$.fragment),uk=p(),Bd=n("span"),_k=a("FlaxBigBirdForMaskedLM"),wp=p(),I=n("div"),B(hr.$$.fragment),bk=p(),mr=n("p"),kk=a("BigBird Model with a "),vd=n("code"),Bk=a("language modeling"),vk=a(" head on top."),$k=p(),fr=n("p"),wk=a("This model inherits from "),Na=n("a"),yk=a("FlaxPreTrainedModel"),Tk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xk=p(),gr=n("p"),Fk=a("This model is also a Flax Linen "),ur=n("a"),qk=a("flax.linen.Module"),zk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mk=p(),$d=n("p"),Ek=a("Finally, this model supports inherent JAX features such as:"),Pk=p(),Pe=n("ul"),wd=n("li"),_r=n("a"),jk=a("Just-In-Time (JIT) compilation"),Ck=p(),yd=n("li"),br=n("a"),Ak=a("Automatic Differentiation"),Lk=p(),Td=n("li"),kr=n("a"),Ik=a("Vectorization"),Sk=p(),xd=n("li"),Br=n("a"),Nk=a("Parallelization"),Ok=p(),$e=n("div"),B(vr.$$.fragment),Dk=p(),xt=n("p"),Wk=a("The "),Fd=n("code"),Uk=a("FlaxBigBirdPreTrainedModel"),Qk=a(" forward method, overrides the "),qd=n("code"),Hk=a("__call__"),Vk=a(" special method."),Jk=p(),B(No.$$.fragment),Rk=p(),B(Oo.$$.fragment),yp=p(),Ft=n("h2"),Do=n("a"),zd=n("span"),B($r.$$.fragment),Gk=p(),Md=n("span"),Kk=a("FlaxBigBirdForSequenceClassification"),Tp=p(),S=n("div"),B(wr.$$.fragment),Xk=p(),Ed=n("p"),Yk=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Zk=p(),yr=n("p"),e1=a("This model inherits from "),Oa=n("a"),t1=a("FlaxPreTrainedModel"),o1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n1=p(),Tr=n("p"),s1=a("This model is also a Flax Linen "),xr=n("a"),r1=a("flax.linen.Module"),a1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i1=p(),Pd=n("p"),l1=a("Finally, this model supports inherent JAX features such as:"),d1=p(),je=n("ul"),jd=n("li"),Fr=n("a"),c1=a("Just-In-Time (JIT) compilation"),p1=p(),Cd=n("li"),qr=n("a"),h1=a("Automatic Differentiation"),m1=p(),Ad=n("li"),zr=n("a"),f1=a("Vectorization"),g1=p(),Ld=n("li"),Mr=n("a"),u1=a("Parallelization"),_1=p(),we=n("div"),B(Er.$$.fragment),b1=p(),qt=n("p"),k1=a("The "),Id=n("code"),B1=a("FlaxBigBirdPreTrainedModel"),v1=a(" forward method, overrides the "),Sd=n("code"),$1=a("__call__"),w1=a(" special method."),y1=p(),B(Wo.$$.fragment),T1=p(),B(Uo.$$.fragment),xp=p(),zt=n("h2"),Qo=n("a"),Nd=n("span"),B(Pr.$$.fragment),x1=p(),Od=n("span"),F1=a("FlaxBigBirdForMultipleChoice"),Fp=p(),N=n("div"),B(jr.$$.fragment),q1=p(),Dd=n("p"),z1=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),M1=p(),Cr=n("p"),E1=a("This model inherits from "),Da=n("a"),P1=a("FlaxPreTrainedModel"),j1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),C1=p(),Ar=n("p"),A1=a("This model is also a Flax Linen "),Lr=n("a"),L1=a("flax.linen.Module"),I1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),S1=p(),Wd=n("p"),N1=a("Finally, this model supports inherent JAX features such as:"),O1=p(),Ce=n("ul"),Ud=n("li"),Ir=n("a"),D1=a("Just-In-Time (JIT) compilation"),W1=p(),Qd=n("li"),Sr=n("a"),U1=a("Automatic Differentiation"),Q1=p(),Hd=n("li"),Nr=n("a"),H1=a("Vectorization"),V1=p(),Vd=n("li"),Or=n("a"),J1=a("Parallelization"),R1=p(),ye=n("div"),B(Dr.$$.fragment),G1=p(),Mt=n("p"),K1=a("The "),Jd=n("code"),X1=a("FlaxBigBirdPreTrainedModel"),Y1=a(" forward method, overrides the "),Rd=n("code"),Z1=a("__call__"),eB=a(" special method."),tB=p(),B(Ho.$$.fragment),oB=p(),B(Vo.$$.fragment),qp=p(),Et=n("h2"),Jo=n("a"),Gd=n("span"),B(Wr.$$.fragment),nB=p(),Kd=n("span"),sB=a("FlaxBigBirdForTokenClassification"),zp=p(),O=n("div"),B(Ur.$$.fragment),rB=p(),Xd=n("p"),aB=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iB=p(),Qr=n("p"),lB=a("This model inherits from "),Wa=n("a"),dB=a("FlaxPreTrainedModel"),cB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pB=p(),Hr=n("p"),hB=a("This model is also a Flax Linen "),Vr=n("a"),mB=a("flax.linen.Module"),fB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gB=p(),Yd=n("p"),uB=a("Finally, this model supports inherent JAX features such as:"),_B=p(),Ae=n("ul"),Zd=n("li"),Jr=n("a"),bB=a("Just-In-Time (JIT) compilation"),kB=p(),ec=n("li"),Rr=n("a"),BB=a("Automatic Differentiation"),vB=p(),tc=n("li"),Gr=n("a"),$B=a("Vectorization"),wB=p(),oc=n("li"),Kr=n("a"),yB=a("Parallelization"),TB=p(),Te=n("div"),B(Xr.$$.fragment),xB=p(),Pt=n("p"),FB=a("The "),nc=n("code"),qB=a("FlaxBigBirdPreTrainedModel"),zB=a(" forward method, overrides the "),sc=n("code"),MB=a("__call__"),EB=a(" special method."),PB=p(),B(Ro.$$.fragment),jB=p(),B(Go.$$.fragment),Mp=p(),jt=n("h2"),Ko=n("a"),rc=n("span"),B(Yr.$$.fragment),CB=p(),ac=n("span"),AB=a("FlaxBigBirdForQuestionAnswering"),Ep=p(),D=n("div"),B(Zr.$$.fragment),LB=p(),Ct=n("p"),IB=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ic=n("code"),SB=a("span start logits"),NB=a(" and "),lc=n("code"),OB=a("span end logits"),DB=a(")."),WB=p(),ea=n("p"),UB=a("This model inherits from "),Ua=n("a"),QB=a("FlaxPreTrainedModel"),HB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),VB=p(),ta=n("p"),JB=a("This model is also a Flax Linen "),oa=n("a"),RB=a("flax.linen.Module"),GB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),KB=p(),dc=n("p"),XB=a("Finally, this model supports inherent JAX features such as:"),YB=p(),Le=n("ul"),cc=n("li"),na=n("a"),ZB=a("Just-In-Time (JIT) compilation"),ev=p(),pc=n("li"),sa=n("a"),tv=a("Automatic Differentiation"),ov=p(),hc=n("li"),ra=n("a"),nv=a("Vectorization"),sv=p(),mc=n("li"),aa=n("a"),rv=a("Parallelization"),av=p(),xe=n("div"),B(ia.$$.fragment),iv=p(),At=n("p"),lv=a("The "),Qa=n("a"),dv=a("FlaxBigBirdForQuestionAnswering"),cv=a(" forward method, overrides the "),fc=n("code"),pv=a("__call__"),hv=a(" special method."),mv=p(),B(Xo.$$.fragment),fv=p(),B(Yo.$$.fragment),this.h()},l(o){const u=DT('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(t),_=h(o),m=s(o,"H1",{class:!0});var la=r(m);g=s(la,"A",{id:!0,class:!0,href:!0});var gc=r(g);b=s(gc,"SPAN",{});var uc=r(b);v(l.$$.fragment,uc),uc.forEach(t),gc.forEach(t),f=h(la),F=s(la,"SPAN",{});var _c=r(F);Ah=i(_c,"BigBird"),_c.forEach(t),la.forEach(t),Dc=h(o),He=s(o,"H2",{class:!0});var da=r(He);St=s(da,"A",{id:!0,class:!0,href:!0});var bc=r(St);bi=s(bc,"SPAN",{});var kc=r(bi);v(yn.$$.fragment,kc),kc.forEach(t),bc.forEach(t),Lh=h(da),ki=s(da,"SPAN",{});var Bc=r(ki);Ih=i(Bc,"Overview"),Bc.forEach(t),da.forEach(t),Wc=h(o),Nt=s(o,"P",{});var ca=r(Nt);Sh=i(ca,"The BigBird model was proposed in "),Tn=s(ca,"A",{href:!0,rel:!0});var vc=r(Tn);Nh=i(vc,"Big Bird: Transformers for Longer Sequences"),vc.forEach(t),Oh=i(ca,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),ca.forEach(t),Uc=h(o),fa=s(o,"P",{});var $c=r(fa);Dh=i($c,"The abstract from the paper is the following:"),$c.forEach(t),Qc=h(o),ga=s(o,"P",{});var wc=r(ga);Bi=s(wc,"EM",{});var yc=r(Bi);Wh=i(yc,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),yc.forEach(t),wc.forEach(t),Hc=h(o),ua=s(o,"P",{});var Tc=r(ua);Uh=i(Tc,"Tips:"),Tc.forEach(t),Vc=h(o),H=s(o,"UL",{});var R=r(H);xn=s(R,"LI",{});var pa=r(xn);Qh=i(pa,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Fn=s(pa,"A",{href:!0,rel:!0});var xc=r(Fn);Hh=i(xc,"this blog post"),xc.forEach(t),Vh=i(pa,"."),pa.forEach(t),Jh=h(R),de=s(R,"LI",{});var fe=r(de);Rh=i(fe,"BigBird comes with 2 implementations: "),vi=s(fe,"STRONG",{});var Fc=r(vi);Gh=i(Fc,"original_full"),Fc.forEach(t),Kh=i(fe," & "),$i=s(fe,"STRONG",{});var qc=r($i);Xh=i(qc,"block_sparse"),qc.forEach(t),Yh=i(fe,`. For the sequence length < 1024, using
`),wi=s(fe,"STRONG",{});var zc=r(wi);Zh=i(zc,"original_full"),zc.forEach(t),em=i(fe," is advised as there is no benefit in using "),yi=s(fe,"STRONG",{});var Mc=r(yi);tm=i(Mc,"block_sparse"),Mc.forEach(t),om=i(fe," attention."),fe.forEach(t),nm=h(R),Ti=s(R,"LI",{});var Ec=r(Ti);sm=i(Ec,"The code currently uses window size of 3 blocks and 2 global blocks."),Ec.forEach(t),rm=h(R),xi=s(R,"LI",{});var Pc=r(xi);am=i(Pc,"Sequence length must be divisible by block size."),Pc.forEach(t),im=h(R),qn=s(R,"LI",{});var ha=r(qn);lm=i(ha,"Current implementation supports only "),Fi=s(ha,"STRONG",{});var jc=r(Fi);dm=i(jc,"ITC"),jc.forEach(t),cm=i(ha,"."),ha.forEach(t),pm=h(R),_a=s(R,"LI",{});var Ha=r(_a);hm=i(Ha,"Current implementation doesn\u2019t support "),qi=s(Ha,"STRONG",{});var Cc=r(qi);mm=i(Cc,"num_random_blocks = 0"),Cc.forEach(t),Ha.forEach(t),R.forEach(t),Jc=h(o),Ie=s(o,"P",{});var Lt=r(Ie);fm=i(Lt,"This model was contributed by "),zn=s(Lt,"A",{href:!0,rel:!0});var Ac=r(zn);gm=i(Ac,"vasudevgupta"),Ac.forEach(t),um=i(Lt,`. The original code can be found
`),Mn=s(Lt,"A",{href:!0,rel:!0});var Lc=r(Mn);_m=i(Lc,"here"),Lc.forEach(t),bm=i(Lt,"."),Lt.forEach(t),Rc=h(o),Ve=s(o,"H2",{class:!0});var ma=r(Ve);Ot=s(ma,"A",{id:!0,class:!0,href:!0});var Ic=r(Ot);zi=s(Ic,"SPAN",{});var Sc=r(zi);v(En.$$.fragment,Sc),Sc.forEach(t),Ic.forEach(t),km=h(ma),Mi=s(ma,"SPAN",{});var Nc=r(Mi);Bm=i(Nc,"BigBirdConfig"),Nc.forEach(t),ma.forEach(t),Gc=h(o),j=s(o,"DIV",{class:!0});var W=r(j);v(Pn.$$.fragment,W),vm=h(W),Je=s(W,"P",{});var It=r(Je);$m=i(It,"This is the configuration class to store the configuration of a "),ba=s(It,"A",{href:!0});var Oc=r(ba);wm=i(Oc,"BigBirdModel"),Oc.forEach(t),ym=i(It,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),jn=s(It,"A",{href:!0,rel:!0});var kv=r(jn);Tm=i(kv,"google/bigbird-roberta-base"),kv.forEach(t),xm=i(It," architecture."),It.forEach(t),Fm=h(W),Re=s(W,"P",{});var Va=r(Re);qm=i(Va,"Configuration objects inherit from "),ka=s(Va,"A",{href:!0});var Bv=r(ka);zm=i(Bv,"PretrainedConfig"),Bv.forEach(t),Mm=i(Va,` and can be used to control the model outputs. Read the
documentation from `),Ba=s(Va,"A",{href:!0});var vv=r(Ba);Em=i(vv,"PretrainedConfig"),vv.forEach(t),Pm=i(Va," for more information."),Va.forEach(t),jm=h(W),v(Dt.$$.fragment,W),Cm=h(W),Ei=s(W,"BLOCKQUOTE",{});var $v=r(Ei);Pi=s($v,"BLOCKQUOTE",{});var wv=r(Pi);ji=s(wv,"BLOCKQUOTE",{});var yv=r(ji);Ci=s(yv,"P",{});var Tv=r(Ci);Am=i(Tv,"from transformers import BigBirdModel, BigBirdConfig"),Tv.forEach(t),yv.forEach(t),wv.forEach(t),$v.forEach(t),Lm=h(W),Ai=s(W,"BLOCKQUOTE",{});var xv=r(Ai);Li=s(xv,"BLOCKQUOTE",{});var Fv=r(Li);Cn=s(Fv,"BLOCKQUOTE",{});var jp=r(Cn);Wt=s(jp,"H1",{class:!0});var Cp=r(Wt);Ut=s(Cp,"A",{id:!0,class:!0,href:!0});var qv=r(Ut);Ii=s(qv,"SPAN",{});var zv=r(Ii);v(An.$$.fragment,zv),zv.forEach(t),qv.forEach(t),Im=h(Cp),Si=s(Cp,"SPAN",{});var Mv=r(Si);Sm=i(Mv,"Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),Mv.forEach(t),Cp.forEach(t),Nm=h(jp),Ni=s(jp,"P",{});var Ev=r(Ni);Om=i(Ev,"BigBirdConfig()"),Ev.forEach(t),jp.forEach(t),Fv.forEach(t),xv.forEach(t),Dm=h(W),Oi=s(W,"BLOCKQUOTE",{});var Pv=r(Oi);Di=s(Pv,"BLOCKQUOTE",{});var jv=r(Di);Ln=s(jv,"BLOCKQUOTE",{});var Ap=r(Ln);Qt=s(Ap,"H1",{class:!0});var Lp=r(Qt);Ht=s(Lp,"A",{id:!0,class:!0,href:!0});var Cv=r(Ht);Wi=s(Cv,"SPAN",{});var Av=r(Wi);v(In.$$.fragment,Av),Av.forEach(t),Cv.forEach(t),Wm=h(Lp),Ui=s(Lp,"SPAN",{});var Lv=r(Ui);Um=i(Lv,"Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),Lv.forEach(t),Lp.forEach(t),Qm=h(Ap),Qi=s(Ap,"P",{});var Iv=r(Qi);Hm=i(Iv,"BigBirdModel(configuration)"),Iv.forEach(t),Ap.forEach(t),jv.forEach(t),Pv.forEach(t),Vm=h(W),Hi=s(W,"BLOCKQUOTE",{});var Sv=r(Hi);Vi=s(Sv,"BLOCKQUOTE",{});var Nv=r(Vi);Ji=s(Nv,"BLOCKQUOTE",{});var Ov=r(Ji);Vt=s(Ov,"H1",{class:!0});var Ip=r(Vt);Jt=s(Ip,"A",{id:!0,class:!0,href:!0});var Dv=r(Jt);Ri=s(Dv,"SPAN",{});var Wv=r(Ri);v(Sn.$$.fragment,Wv),Wv.forEach(t),Dv.forEach(t),Jm=h(Ip),Gi=s(Ip,"SPAN",{});var Uv=r(Gi);Rm=i(Uv,"Accessing the model configuration >>> configuration = model.config"),Uv.forEach(t),Ip.forEach(t),Ov.forEach(t),Nv.forEach(t),Sv.forEach(t),W.forEach(t),Kc=h(o),Ge=s(o,"H2",{class:!0});var Sp=r(Ge);Rt=s(Sp,"A",{id:!0,class:!0,href:!0});var Qv=r(Rt);Ki=s(Qv,"SPAN",{});var Hv=r(Ki);v(Nn.$$.fragment,Hv),Hv.forEach(t),Qv.forEach(t),Gm=h(Sp),Xi=s(Sp,"SPAN",{});var Vv=r(Xi);Km=i(Vv,"BigBirdTokenizer"),Vv.forEach(t),Sp.forEach(t),Xc=h(o),C=s(o,"DIV",{class:!0});var Z=r(C);v(On.$$.fragment,Z),Xm=h(Z),Dn=s(Z,"P",{});var Np=r(Dn);Ym=i(Np,"Construct a BigBird tokenizer. Based on "),Wn=s(Np,"A",{href:!0,rel:!0});var Jv=r(Wn);Zm=i(Jv,"SentencePiece"),Jv.forEach(t),ef=i(Np,"."),Np.forEach(t),tf=h(Z),Un=s(Z,"P",{});var Op=r(Un);of=i(Op,"This tokenizer inherits from "),va=s(Op,"A",{href:!0});var Rv=r(va);nf=i(Rv,"PreTrainedTokenizer"),Rv.forEach(t),sf=i(Op,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Op.forEach(t),rf=h(Z),Se=s(Z,"DIV",{class:!0});var Ja=r(Se);v(Qn.$$.fragment,Ja),af=h(Ja),Yi=s(Ja,"P",{});var Gv=r(Yi);lf=i(Gv,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),Gv.forEach(t),df=h(Ja),Hn=s(Ja,"UL",{});var Dp=r(Hn);$a=s(Dp,"LI",{});var gv=r($a);cf=i(gv,"single sequence: "),Zi=s(gv,"CODE",{});var Kv=r(Zi);pf=i(Kv,"[CLS] X [SEP]"),Kv.forEach(t),gv.forEach(t),hf=h(Dp),wa=s(Dp,"LI",{});var uv=r(wa);mf=i(uv,"pair of sequences: "),el=s(uv,"CODE",{});var Xv=r(el);ff=i(Xv,"[CLS] A [SEP] B [SEP]"),Xv.forEach(t),uv.forEach(t),Dp.forEach(t),Ja.forEach(t),gf=h(Z),Gt=s(Z,"DIV",{class:!0});var Wp=r(Gt);v(Vn.$$.fragment,Wp),uf=h(Wp),Jn=s(Wp,"P",{});var Up=r(Jn);_f=i(Up,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tl=s(Up,"CODE",{});var Yv=r(tl);bf=i(Yv,"prepare_for_model"),Yv.forEach(t),kf=i(Up," method."),Up.forEach(t),Wp.forEach(t),Bf=h(Z),Kt=s(Z,"DIV",{class:!0});var Qp=r(Kt);v(Rn.$$.fragment,Qp),vf=h(Qp),Ke=s(Qp,"P",{});var Ra=r(Ke);$f=i(Ra,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),ol=s(Ra,"CODE",{});var Zv=r(ol);wf=i(Zv,"token_ids_1"),Zv.forEach(t),yf=i(Ra," is "),nl=s(Ra,"CODE",{});var e$=r(nl);Tf=i(e$,"None"),e$.forEach(t),xf=i(Ra,", this method only returns the first portion of the mask (0s)."),Ra.forEach(t),Qp.forEach(t),Ff=h(Z),ya=s(Z,"DIV",{class:!0});var t$=r(ya);v(Gn.$$.fragment,t$),t$.forEach(t),Z.forEach(t),Yc=h(o),Xe=s(o,"H2",{class:!0});var Hp=r(Xe);Xt=s(Hp,"A",{id:!0,class:!0,href:!0});var o$=r(Xt);sl=s(o$,"SPAN",{});var n$=r(sl);v(Kn.$$.fragment,n$),n$.forEach(t),o$.forEach(t),qf=h(Hp),rl=s(Hp,"SPAN",{});var s$=r(rl);zf=i(s$,"BigBirdTokenizerFast"),s$.forEach(t),Hp.forEach(t),Zc=h(o),V=s(o,"DIV",{class:!0});var Oe=r(V);v(Xn.$$.fragment,Oe),Mf=h(Oe),Fe=s(Oe,"P",{});var Zo=r(Fe);Ef=i(Zo,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),al=s(Zo,"EM",{});var r$=r(al);Pf=i(r$,"tokenizers"),r$.forEach(t),jf=i(Zo,` library). Based on
`),Yn=s(Zo,"A",{href:!0,rel:!0});var a$=r(Yn);Cf=i(a$,"Unigram"),a$.forEach(t),Af=i(Zo,`. This
tokenizer inherits from `),Ta=s(Zo,"A",{href:!0});var i$=r(Ta);Lf=i(i$,"PreTrainedTokenizerFast"),i$.forEach(t),If=i(Zo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Zo.forEach(t),Sf=h(Oe),Ne=s(Oe,"DIV",{class:!0});var Ga=r(Ne);v(Zn.$$.fragment,Ga),Nf=h(Ga),il=s(Ga,"P",{});var l$=r(il);Of=i(l$,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),l$.forEach(t),Df=h(Ga),es=s(Ga,"UL",{});var Vp=r(es);xa=s(Vp,"LI",{});var _v=r(xa);Wf=i(_v,"single sequence: "),ll=s(_v,"CODE",{});var d$=r(ll);Uf=i(d$,"[CLS] X [SEP]"),d$.forEach(t),_v.forEach(t),Qf=h(Vp),Fa=s(Vp,"LI",{});var bv=r(Fa);Hf=i(bv,"pair of sequences: "),dl=s(bv,"CODE",{});var c$=r(dl);Vf=i(c$,"[CLS] A [SEP] B [SEP]"),c$.forEach(t),bv.forEach(t),Vp.forEach(t),Ga.forEach(t),Jf=h(Oe),ge=s(Oe,"DIV",{class:!0});var en=r(ge);v(ts.$$.fragment,en),Rf=h(en),cl=s(en,"P",{});var p$=r(cl);Gf=i(p$,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT
sequence pair mask has the following format:`),p$.forEach(t),Kf=h(en),v(Yt.$$.fragment,en),Xf=h(en),pl=s(en,"P",{});var h$=r(pl);Yf=i(h$,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),h$.forEach(t),en.forEach(t),Zf=h(Oe),Zt=s(Oe,"DIV",{class:!0});var Jp=r(Zt);v(os.$$.fragment,Jp),eg=h(Jp),ns=s(Jp,"P",{});var Rp=r(ns);tg=i(Rp,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=s(Rp,"CODE",{});var m$=r(hl);og=i(m$,"prepare_for_model"),m$.forEach(t),ng=i(Rp," method."),Rp.forEach(t),Jp.forEach(t),Oe.forEach(t),ep=h(o),Ye=s(o,"H2",{class:!0});var Gp=r(Ye);eo=s(Gp,"A",{id:!0,class:!0,href:!0});var f$=r(eo);ml=s(f$,"SPAN",{});var g$=r(ml);v(ss.$$.fragment,g$),g$.forEach(t),f$.forEach(t),sg=h(Gp),fl=s(Gp,"SPAN",{});var u$=r(fl);rg=i(u$,"BigBird specific outputs"),u$.forEach(t),Gp.forEach(t),tp=h(o),Ze=s(o,"DIV",{class:!0});var Kp=r(Ze);v(rs.$$.fragment,Kp),ag=h(Kp),as=s(Kp,"P",{});var Xp=r(as);ig=i(Xp,"Output type of "),qa=s(Xp,"A",{href:!0});var _$=r(qa);lg=i(_$,"BigBirdForPreTraining"),_$.forEach(t),dg=i(Xp,"."),Xp.forEach(t),Kp.forEach(t),op=h(o),et=s(o,"H2",{class:!0});var Yp=r(et);to=s(Yp,"A",{id:!0,class:!0,href:!0});var b$=r(to);gl=s(b$,"SPAN",{});var k$=r(gl);v(is.$$.fragment,k$),k$.forEach(t),b$.forEach(t),cg=h(Yp),ul=s(Yp,"SPAN",{});var B$=r(ul);pg=i(B$,"BigBirdModel"),B$.forEach(t),Yp.forEach(t),np=h(o),J=s(o,"DIV",{class:!0});var De=r(J);v(ls.$$.fragment,De),hg=h(De),ds=s(De,"P",{});var Zp=r(ds);mg=i(Zp,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cs=s(Zp,"A",{href:!0,rel:!0});var v$=r(cs);fg=i(v$,"torch.nn.Module"),v$.forEach(t),gg=i(Zp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zp.forEach(t),ug=h(De),ps=s(De,"P",{});var eh=r(ps);_g=i(eh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hs=s(eh,"A",{href:!0,rel:!0});var $$=r(hs);bg=i($$,`Attention is
all you need`),$$.forEach(t),kg=i(eh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),eh.forEach(t),Bg=h(De),Q=s(De,"P",{});var ee=r(Q);vg=i(ee,"To behave as an decoder the model needs to be initialized with the "),_l=s(ee,"CODE",{});var w$=r(_l);$g=i(w$,"is_decoder"),w$.forEach(t),wg=i(ee,` argument of the configuration set
to `),bl=s(ee,"CODE",{});var y$=r(bl);yg=i(y$,"True"),y$.forEach(t),Tg=i(ee,". To be used in a Seq2Seq model, the model needs to initialized with both "),kl=s(ee,"CODE",{});var T$=r(kl);xg=i(T$,"is_decoder"),T$.forEach(t),Fg=i(ee,` argument and
`),Bl=s(ee,"CODE",{});var x$=r(Bl);qg=i(x$,"add_cross_attention"),x$.forEach(t),zg=i(ee," set to "),vl=s(ee,"CODE",{});var F$=r(vl);Mg=i(F$,"True"),F$.forEach(t),Eg=i(ee,"; an "),$l=s(ee,"CODE",{});var q$=r($l);Pg=i(q$,"encoder_hidden_states"),q$.forEach(t),jg=i(ee," is then expected as an input to the forward pass."),ee.forEach(t),Cg=h(De),ue=s(De,"DIV",{class:!0});var tn=r(ue);v(ms.$$.fragment,tn),Ag=h(tn),tt=s(tn,"P",{});var Ka=r(tt);Lg=i(Ka,"The "),za=s(Ka,"A",{href:!0});var z$=r(za);Ig=i(z$,"BigBirdModel"),z$.forEach(t),Sg=i(Ka," forward method, overrides the "),wl=s(Ka,"CODE",{});var M$=r(wl);Ng=i(M$,"__call__"),M$.forEach(t),Og=i(Ka," special method."),Ka.forEach(t),Dg=h(tn),v(oo.$$.fragment,tn),Wg=h(tn),v(no.$$.fragment,tn),tn.forEach(t),De.forEach(t),sp=h(o),ot=s(o,"H2",{class:!0});var th=r(ot);so=s(th,"A",{id:!0,class:!0,href:!0});var E$=r(so);yl=s(E$,"SPAN",{});var P$=r(yl);v(fs.$$.fragment,P$),P$.forEach(t),E$.forEach(t),Ug=h(th),Tl=s(th,"SPAN",{});var j$=r(Tl);Qg=i(j$,"BigBirdForPreTraining"),j$.forEach(t),th.forEach(t),rp=h(o),nt=s(o,"DIV",{class:!0});var oh=r(nt);v(gs.$$.fragment,oh),Hg=h(oh),_e=s(oh,"DIV",{class:!0});var on=r(_e);v(us.$$.fragment,on),Vg=h(on),st=s(on,"P",{});var Xa=r(st);Jg=i(Xa,"The "),Ma=s(Xa,"A",{href:!0});var C$=r(Ma);Rg=i(C$,"BigBirdForPreTraining"),C$.forEach(t),Gg=i(Xa," forward method, overrides the "),xl=s(Xa,"CODE",{});var A$=r(xl);Kg=i(A$,"__call__"),A$.forEach(t),Xg=i(Xa," special method."),Xa.forEach(t),Yg=h(on),v(ro.$$.fragment,on),Zg=h(on),v(ao.$$.fragment,on),on.forEach(t),oh.forEach(t),ap=h(o),rt=s(o,"H2",{class:!0});var nh=r(rt);io=s(nh,"A",{id:!0,class:!0,href:!0});var L$=r(io);Fl=s(L$,"SPAN",{});var I$=r(Fl);v(_s.$$.fragment,I$),I$.forEach(t),L$.forEach(t),eu=h(nh),ql=s(nh,"SPAN",{});var S$=r(ql);tu=i(S$,"BigBirdForCausalLM"),S$.forEach(t),nh.forEach(t),ip=h(o),qe=s(o,"DIV",{class:!0});var Ya=r(qe);v(bs.$$.fragment,Ya),ou=h(Ya),at=s(Ya,"P",{});var Za=r(at);nu=i(Za,"BigBird Model with a "),zl=s(Za,"CODE",{});var N$=r(zl);su=i(N$,"language modeling"),N$.forEach(t),ru=i(Za,` head on top for CLM fine-tuning.
This model is a PyTorch `),ks=s(Za,"A",{href:!0,rel:!0});var O$=r(ks);au=i(O$,"torch.nn.Module"),O$.forEach(t),iu=i(Za,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Za.forEach(t),lu=h(Ya),be=s(Ya,"DIV",{class:!0});var nn=r(be);v(Bs.$$.fragment,nn),du=h(nn),it=s(nn,"P",{});var ei=r(it);cu=i(ei,"The "),Ea=s(ei,"A",{href:!0});var D$=r(Ea);pu=i(D$,"BigBirdForCausalLM"),D$.forEach(t),hu=i(ei," forward method, overrides the "),Ml=s(ei,"CODE",{});var W$=r(Ml);mu=i(W$,"__call__"),W$.forEach(t),fu=i(ei," special method."),ei.forEach(t),gu=h(nn),v(lo.$$.fragment,nn),uu=h(nn),v(co.$$.fragment,nn),nn.forEach(t),Ya.forEach(t),lp=h(o),lt=s(o,"H2",{class:!0});var sh=r(lt);po=s(sh,"A",{id:!0,class:!0,href:!0});var U$=r(po);El=s(U$,"SPAN",{});var Q$=r(El);v(vs.$$.fragment,Q$),Q$.forEach(t),U$.forEach(t),_u=h(sh),Pl=s(sh,"SPAN",{});var H$=r(Pl);bu=i(H$,"BigBirdForMaskedLM"),H$.forEach(t),sh.forEach(t),dp=h(o),ze=s(o,"DIV",{class:!0});var ti=r(ze);v($s.$$.fragment,ti),ku=h(ti),dt=s(ti,"P",{});var oi=r(dt);Bu=i(oi,"BigBird Model with a "),jl=s(oi,"CODE",{});var V$=r(jl);vu=i(V$,"language modeling"),V$.forEach(t),$u=i(oi,` head on top.
This model is a PyTorch `),ws=s(oi,"A",{href:!0,rel:!0});var J$=r(ws);wu=i(J$,"torch.nn.Module"),J$.forEach(t),yu=i(oi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oi.forEach(t),Tu=h(ti),K=s(ti,"DIV",{class:!0});var We=r(K);v(ys.$$.fragment,We),xu=h(We),ct=s(We,"P",{});var ni=r(ct);Fu=i(ni,"The "),Pa=s(ni,"A",{href:!0});var R$=r(Pa);qu=i(R$,"BigBirdForMaskedLM"),R$.forEach(t),zu=i(ni," forward method, overrides the "),Cl=s(ni,"CODE",{});var G$=r(Cl);Mu=i(G$,"__call__"),G$.forEach(t),Eu=i(ni," special method."),ni.forEach(t),Pu=h(We),v(ho.$$.fragment,We),ju=h(We),v(mo.$$.fragment,We),Cu=h(We),v(fo.$$.fragment,We),We.forEach(t),ti.forEach(t),cp=h(o),pt=s(o,"H2",{class:!0});var rh=r(pt);go=s(rh,"A",{id:!0,class:!0,href:!0});var K$=r(go);Al=s(K$,"SPAN",{});var X$=r(Al);v(Ts.$$.fragment,X$),X$.forEach(t),K$.forEach(t),Au=h(rh),Ll=s(rh,"SPAN",{});var Y$=r(Ll);Lu=i(Y$,"BigBirdForSequenceClassification"),Y$.forEach(t),rh.forEach(t),pp=h(o),ce=s(o,"DIV",{class:!0});var sn=r(ce);v(xs.$$.fragment,sn),Iu=h(sn),Il=s(sn,"P",{});var Z$=r(Il);Su=i(Z$,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Z$.forEach(t),Nu=h(sn),Fs=s(sn,"P",{});var ah=r(Fs);Ou=i(ah,"This model is a PyTorch "),qs=s(ah,"A",{href:!0,rel:!0});var ew=r(qs);Du=i(ew,"torch.nn.Module"),ew.forEach(t),Wu=i(ah,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ah.forEach(t),Uu=h(sn),U=s(sn,"DIV",{class:!0});var te=r(U);v(zs.$$.fragment,te),Qu=h(te),ht=s(te,"P",{});var si=r(ht);Hu=i(si,"The "),ja=s(si,"A",{href:!0});var tw=r(ja);Vu=i(tw,"BigBirdForSequenceClassification"),tw.forEach(t),Ju=i(si," forward method, overrides the "),Sl=s(si,"CODE",{});var ow=r(Sl);Ru=i(ow,"__call__"),ow.forEach(t),Gu=i(si," special method."),si.forEach(t),Ku=h(te),v(uo.$$.fragment,te),Xu=h(te),v(_o.$$.fragment,te),Yu=h(te),v(bo.$$.fragment,te),Zu=h(te),v(ko.$$.fragment,te),e_=h(te),v(Bo.$$.fragment,te),te.forEach(t),sn.forEach(t),hp=h(o),mt=s(o,"H2",{class:!0});var ih=r(mt);vo=s(ih,"A",{id:!0,class:!0,href:!0});var nw=r(vo);Nl=s(nw,"SPAN",{});var sw=r(Nl);v(Ms.$$.fragment,sw),sw.forEach(t),nw.forEach(t),t_=h(ih),Ol=s(ih,"SPAN",{});var rw=r(Ol);o_=i(rw,"BigBirdForMultipleChoice"),rw.forEach(t),ih.forEach(t),mp=h(o),pe=s(o,"DIV",{class:!0});var rn=r(pe);v(Es.$$.fragment,rn),n_=h(rn),Dl=s(rn,"P",{});var aw=r(Dl);s_=i(aw,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),aw.forEach(t),r_=h(rn),Ps=s(rn,"P",{});var lh=r(Ps);a_=i(lh,"This model is a PyTorch "),js=s(lh,"A",{href:!0,rel:!0});var iw=r(js);i_=i(iw,"torch.nn.Module"),iw.forEach(t),l_=i(lh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lh.forEach(t),d_=h(rn),ke=s(rn,"DIV",{class:!0});var an=r(ke);v(Cs.$$.fragment,an),c_=h(an),ft=s(an,"P",{});var ri=r(ft);p_=i(ri,"The "),Ca=s(ri,"A",{href:!0});var lw=r(Ca);h_=i(lw,"BigBirdForMultipleChoice"),lw.forEach(t),m_=i(ri," forward method, overrides the "),Wl=s(ri,"CODE",{});var dw=r(Wl);f_=i(dw,"__call__"),dw.forEach(t),g_=i(ri," special method."),ri.forEach(t),u_=h(an),v($o.$$.fragment,an),__=h(an),v(wo.$$.fragment,an),an.forEach(t),rn.forEach(t),fp=h(o),gt=s(o,"H2",{class:!0});var dh=r(gt);yo=s(dh,"A",{id:!0,class:!0,href:!0});var cw=r(yo);Ul=s(cw,"SPAN",{});var pw=r(Ul);v(As.$$.fragment,pw),pw.forEach(t),cw.forEach(t),b_=h(dh),Ql=s(dh,"SPAN",{});var hw=r(Ql);k_=i(hw,"BigBirdForTokenClassification"),hw.forEach(t),dh.forEach(t),gp=h(o),he=s(o,"DIV",{class:!0});var ln=r(he);v(Ls.$$.fragment,ln),B_=h(ln),Hl=s(ln,"P",{});var mw=r(Hl);v_=i(mw,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),mw.forEach(t),$_=h(ln),Is=s(ln,"P",{});var ch=r(Is);w_=i(ch,"This model is a PyTorch "),Ss=s(ch,"A",{href:!0,rel:!0});var fw=r(Ss);y_=i(fw,"torch.nn.Module"),fw.forEach(t),T_=i(ch,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ch.forEach(t),x_=h(ln),X=s(ln,"DIV",{class:!0});var Ue=r(X);v(Ns.$$.fragment,Ue),F_=h(Ue),ut=s(Ue,"P",{});var ai=r(ut);q_=i(ai,"The "),Aa=s(ai,"A",{href:!0});var gw=r(Aa);z_=i(gw,"BigBirdForTokenClassification"),gw.forEach(t),M_=i(ai," forward method, overrides the "),Vl=s(ai,"CODE",{});var uw=r(Vl);E_=i(uw,"__call__"),uw.forEach(t),P_=i(ai," special method."),ai.forEach(t),j_=h(Ue),v(To.$$.fragment,Ue),C_=h(Ue),v(xo.$$.fragment,Ue),A_=h(Ue),v(Fo.$$.fragment,Ue),Ue.forEach(t),ln.forEach(t),up=h(o),_t=s(o,"H2",{class:!0});var ph=r(_t);qo=s(ph,"A",{id:!0,class:!0,href:!0});var _w=r(qo);Jl=s(_w,"SPAN",{});var bw=r(Jl);v(Os.$$.fragment,bw),bw.forEach(t),_w.forEach(t),L_=h(ph),Rl=s(ph,"SPAN",{});var kw=r(Rl);I_=i(kw,"BigBirdForQuestionAnswering"),kw.forEach(t),ph.forEach(t),_p=h(o),me=s(o,"DIV",{class:!0});var dn=r(me);v(Ds.$$.fragment,dn),S_=h(dn),bt=s(dn,"P",{});var ii=r(bt);N_=i(ii,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=s(ii,"CODE",{});var Bw=r(Gl);O_=i(Bw,"span start logits"),Bw.forEach(t),D_=i(ii," and "),Kl=s(ii,"CODE",{});var vw=r(Kl);W_=i(vw,"span end logits"),vw.forEach(t),U_=i(ii,")."),ii.forEach(t),Q_=h(dn),Ws=s(dn,"P",{});var hh=r(Ws);H_=i(hh,"This model is a PyTorch "),Us=s(hh,"A",{href:!0,rel:!0});var $w=r(Us);V_=i($w,"torch.nn.Module"),$w.forEach(t),J_=i(hh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hh.forEach(t),R_=h(dn),Y=s(dn,"DIV",{class:!0});var Qe=r(Y);v(Qs.$$.fragment,Qe),G_=h(Qe),kt=s(Qe,"P",{});var li=r(kt);K_=i(li,"The "),La=s(li,"A",{href:!0});var ww=r(La);X_=i(ww,"BigBirdForQuestionAnswering"),ww.forEach(t),Y_=i(li," forward method, overrides the "),Xl=s(li,"CODE",{});var yw=r(Xl);Z_=i(yw,"__call__"),yw.forEach(t),eb=i(li," special method."),li.forEach(t),tb=h(Qe),v(zo.$$.fragment,Qe),ob=h(Qe),v(Mo.$$.fragment,Qe),nb=h(Qe),v(Eo.$$.fragment,Qe),Qe.forEach(t),dn.forEach(t),bp=h(o),Bt=s(o,"H2",{class:!0});var mh=r(Bt);Po=s(mh,"A",{id:!0,class:!0,href:!0});var Tw=r(Po);Yl=s(Tw,"SPAN",{});var xw=r(Yl);v(Hs.$$.fragment,xw),xw.forEach(t),Tw.forEach(t),sb=h(mh),Zl=s(mh,"SPAN",{});var Fw=r(Zl);rb=i(Fw,"FlaxBigBirdModel"),Fw.forEach(t),mh.forEach(t),kp=h(o),A=s(o,"DIV",{class:!0});var oe=r(A);v(Vs.$$.fragment,oe),ab=h(oe),ed=s(oe,"P",{});var qw=r(ed);ib=i(qw,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),qw.forEach(t),lb=h(oe),Js=s(oe,"P",{});var fh=r(Js);db=i(fh,"This model inherits from "),Ia=s(fh,"A",{href:!0});var zw=r(Ia);cb=i(zw,"FlaxPreTrainedModel"),zw.forEach(t),pb=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fh.forEach(t),hb=h(oe),Rs=s(oe,"P",{});var gh=r(Rs);mb=i(gh,"This model is also a Flax Linen "),Gs=s(gh,"A",{href:!0,rel:!0});var Mw=r(Gs);fb=i(Mw,"flax.linen.Module"),Mw.forEach(t),gb=i(gh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gh.forEach(t),ub=h(oe),td=s(oe,"P",{});var Ew=r(td);_b=i(Ew,"Finally, this model supports inherent JAX features such as:"),Ew.forEach(t),bb=h(oe),Me=s(oe,"UL",{});var cn=r(Me);od=s(cn,"LI",{});var Pw=r(od);Ks=s(Pw,"A",{href:!0,rel:!0});var jw=r(Ks);kb=i(jw,"Just-In-Time (JIT) compilation"),jw.forEach(t),Pw.forEach(t),Bb=h(cn),nd=s(cn,"LI",{});var Cw=r(nd);Xs=s(Cw,"A",{href:!0,rel:!0});var Aw=r(Xs);vb=i(Aw,"Automatic Differentiation"),Aw.forEach(t),Cw.forEach(t),$b=h(cn),sd=s(cn,"LI",{});var Lw=r(sd);Ys=s(Lw,"A",{href:!0,rel:!0});var Iw=r(Ys);wb=i(Iw,"Vectorization"),Iw.forEach(t),Lw.forEach(t),yb=h(cn),rd=s(cn,"LI",{});var Sw=r(rd);Zs=s(Sw,"A",{href:!0,rel:!0});var Nw=r(Zs);Tb=i(Nw,"Parallelization"),Nw.forEach(t),Sw.forEach(t),cn.forEach(t),xb=h(oe),Be=s(oe,"DIV",{class:!0});var pn=r(Be);v(er.$$.fragment,pn),Fb=h(pn),vt=s(pn,"P",{});var di=r(vt);qb=i(di,"The "),ad=s(di,"CODE",{});var Ow=r(ad);zb=i(Ow,"FlaxBigBirdPreTrainedModel"),Ow.forEach(t),Mb=i(di," forward method, overrides the "),id=s(di,"CODE",{});var Dw=r(id);Eb=i(Dw,"__call__"),Dw.forEach(t),Pb=i(di," special method."),di.forEach(t),jb=h(pn),v(jo.$$.fragment,pn),Cb=h(pn),v(Co.$$.fragment,pn),pn.forEach(t),oe.forEach(t),Bp=h(o),$t=s(o,"H2",{class:!0});var uh=r($t);Ao=s(uh,"A",{id:!0,class:!0,href:!0});var Ww=r(Ao);ld=s(Ww,"SPAN",{});var Uw=r(ld);v(tr.$$.fragment,Uw),Uw.forEach(t),Ww.forEach(t),Ab=h(uh),dd=s(uh,"SPAN",{});var Qw=r(dd);Lb=i(Qw,"FlaxBigBirdForPreTraining"),Qw.forEach(t),uh.forEach(t),vp=h(o),L=s(o,"DIV",{class:!0});var ne=r(L);v(or.$$.fragment,ne),Ib=h(ne),wt=s(ne,"P",{});var ci=r(wt);Sb=i(ci,"BigBird Model with two heads on top as done during the pretraining: a "),cd=s(ci,"CODE",{});var Hw=r(cd);Nb=i(Hw,"masked language modeling"),Hw.forEach(t),Ob=i(ci," head and a "),pd=s(ci,"CODE",{});var Vw=r(pd);Db=i(Vw,"next sentence prediction (classification)"),Vw.forEach(t),Wb=i(ci," head."),ci.forEach(t),Ub=h(ne),nr=s(ne,"P",{});var _h=r(nr);Qb=i(_h,"This model inherits from "),Sa=s(_h,"A",{href:!0});var Jw=r(Sa);Hb=i(Jw,"FlaxPreTrainedModel"),Jw.forEach(t),Vb=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_h.forEach(t),Jb=h(ne),sr=s(ne,"P",{});var bh=r(sr);Rb=i(bh,"This model is also a Flax Linen "),rr=s(bh,"A",{href:!0,rel:!0});var Rw=r(rr);Gb=i(Rw,"flax.linen.Module"),Rw.forEach(t),Kb=i(bh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bh.forEach(t),Xb=h(ne),hd=s(ne,"P",{});var Gw=r(hd);Yb=i(Gw,"Finally, this model supports inherent JAX features such as:"),Gw.forEach(t),Zb=h(ne),Ee=s(ne,"UL",{});var hn=r(Ee);md=s(hn,"LI",{});var Kw=r(md);ar=s(Kw,"A",{href:!0,rel:!0});var Xw=r(ar);ek=i(Xw,"Just-In-Time (JIT) compilation"),Xw.forEach(t),Kw.forEach(t),tk=h(hn),fd=s(hn,"LI",{});var Yw=r(fd);ir=s(Yw,"A",{href:!0,rel:!0});var Zw=r(ir);ok=i(Zw,"Automatic Differentiation"),Zw.forEach(t),Yw.forEach(t),nk=h(hn),gd=s(hn,"LI",{});var ey=r(gd);lr=s(ey,"A",{href:!0,rel:!0});var ty=r(lr);sk=i(ty,"Vectorization"),ty.forEach(t),ey.forEach(t),rk=h(hn),ud=s(hn,"LI",{});var oy=r(ud);dr=s(oy,"A",{href:!0,rel:!0});var ny=r(dr);ak=i(ny,"Parallelization"),ny.forEach(t),oy.forEach(t),hn.forEach(t),ik=h(ne),ve=s(ne,"DIV",{class:!0});var mn=r(ve);v(cr.$$.fragment,mn),lk=h(mn),yt=s(mn,"P",{});var pi=r(yt);dk=i(pi,"The "),_d=s(pi,"CODE",{});var sy=r(_d);ck=i(sy,"FlaxBigBirdPreTrainedModel"),sy.forEach(t),pk=i(pi," forward method, overrides the "),bd=s(pi,"CODE",{});var ry=r(bd);hk=i(ry,"__call__"),ry.forEach(t),mk=i(pi," special method."),pi.forEach(t),fk=h(mn),v(Lo.$$.fragment,mn),gk=h(mn),v(Io.$$.fragment,mn),mn.forEach(t),ne.forEach(t),$p=h(o),Tt=s(o,"H2",{class:!0});var kh=r(Tt);So=s(kh,"A",{id:!0,class:!0,href:!0});var ay=r(So);kd=s(ay,"SPAN",{});var iy=r(kd);v(pr.$$.fragment,iy),iy.forEach(t),ay.forEach(t),uk=h(kh),Bd=s(kh,"SPAN",{});var ly=r(Bd);_k=i(ly,"FlaxBigBirdForMaskedLM"),ly.forEach(t),kh.forEach(t),wp=h(o),I=s(o,"DIV",{class:!0});var se=r(I);v(hr.$$.fragment,se),bk=h(se),mr=s(se,"P",{});var Bh=r(mr);kk=i(Bh,"BigBird Model with a "),vd=s(Bh,"CODE",{});var dy=r(vd);Bk=i(dy,"language modeling"),dy.forEach(t),vk=i(Bh," head on top."),Bh.forEach(t),$k=h(se),fr=s(se,"P",{});var vh=r(fr);wk=i(vh,"This model inherits from "),Na=s(vh,"A",{href:!0});var cy=r(Na);yk=i(cy,"FlaxPreTrainedModel"),cy.forEach(t),Tk=i(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vh.forEach(t),xk=h(se),gr=s(se,"P",{});var $h=r(gr);Fk=i($h,"This model is also a Flax Linen "),ur=s($h,"A",{href:!0,rel:!0});var py=r(ur);qk=i(py,"flax.linen.Module"),py.forEach(t),zk=i($h,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$h.forEach(t),Mk=h(se),$d=s(se,"P",{});var hy=r($d);Ek=i(hy,"Finally, this model supports inherent JAX features such as:"),hy.forEach(t),Pk=h(se),Pe=s(se,"UL",{});var fn=r(Pe);wd=s(fn,"LI",{});var my=r(wd);_r=s(my,"A",{href:!0,rel:!0});var fy=r(_r);jk=i(fy,"Just-In-Time (JIT) compilation"),fy.forEach(t),my.forEach(t),Ck=h(fn),yd=s(fn,"LI",{});var gy=r(yd);br=s(gy,"A",{href:!0,rel:!0});var uy=r(br);Ak=i(uy,"Automatic Differentiation"),uy.forEach(t),gy.forEach(t),Lk=h(fn),Td=s(fn,"LI",{});var _y=r(Td);kr=s(_y,"A",{href:!0,rel:!0});var by=r(kr);Ik=i(by,"Vectorization"),by.forEach(t),_y.forEach(t),Sk=h(fn),xd=s(fn,"LI",{});var ky=r(xd);Br=s(ky,"A",{href:!0,rel:!0});var By=r(Br);Nk=i(By,"Parallelization"),By.forEach(t),ky.forEach(t),fn.forEach(t),Ok=h(se),$e=s(se,"DIV",{class:!0});var gn=r($e);v(vr.$$.fragment,gn),Dk=h(gn),xt=s(gn,"P",{});var hi=r(xt);Wk=i(hi,"The "),Fd=s(hi,"CODE",{});var vy=r(Fd);Uk=i(vy,"FlaxBigBirdPreTrainedModel"),vy.forEach(t),Qk=i(hi," forward method, overrides the "),qd=s(hi,"CODE",{});var $y=r(qd);Hk=i($y,"__call__"),$y.forEach(t),Vk=i(hi," special method."),hi.forEach(t),Jk=h(gn),v(No.$$.fragment,gn),Rk=h(gn),v(Oo.$$.fragment,gn),gn.forEach(t),se.forEach(t),yp=h(o),Ft=s(o,"H2",{class:!0});var wh=r(Ft);Do=s(wh,"A",{id:!0,class:!0,href:!0});var wy=r(Do);zd=s(wy,"SPAN",{});var yy=r(zd);v($r.$$.fragment,yy),yy.forEach(t),wy.forEach(t),Gk=h(wh),Md=s(wh,"SPAN",{});var Ty=r(Md);Kk=i(Ty,"FlaxBigBirdForSequenceClassification"),Ty.forEach(t),wh.forEach(t),Tp=h(o),S=s(o,"DIV",{class:!0});var re=r(S);v(wr.$$.fragment,re),Xk=h(re),Ed=s(re,"P",{});var xy=r(Ed);Yk=i(xy,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xy.forEach(t),Zk=h(re),yr=s(re,"P",{});var yh=r(yr);e1=i(yh,"This model inherits from "),Oa=s(yh,"A",{href:!0});var Fy=r(Oa);t1=i(Fy,"FlaxPreTrainedModel"),Fy.forEach(t),o1=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yh.forEach(t),n1=h(re),Tr=s(re,"P",{});var Th=r(Tr);s1=i(Th,"This model is also a Flax Linen "),xr=s(Th,"A",{href:!0,rel:!0});var qy=r(xr);r1=i(qy,"flax.linen.Module"),qy.forEach(t),a1=i(Th,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Th.forEach(t),i1=h(re),Pd=s(re,"P",{});var zy=r(Pd);l1=i(zy,"Finally, this model supports inherent JAX features such as:"),zy.forEach(t),d1=h(re),je=s(re,"UL",{});var un=r(je);jd=s(un,"LI",{});var My=r(jd);Fr=s(My,"A",{href:!0,rel:!0});var Ey=r(Fr);c1=i(Ey,"Just-In-Time (JIT) compilation"),Ey.forEach(t),My.forEach(t),p1=h(un),Cd=s(un,"LI",{});var Py=r(Cd);qr=s(Py,"A",{href:!0,rel:!0});var jy=r(qr);h1=i(jy,"Automatic Differentiation"),jy.forEach(t),Py.forEach(t),m1=h(un),Ad=s(un,"LI",{});var Cy=r(Ad);zr=s(Cy,"A",{href:!0,rel:!0});var Ay=r(zr);f1=i(Ay,"Vectorization"),Ay.forEach(t),Cy.forEach(t),g1=h(un),Ld=s(un,"LI",{});var Ly=r(Ld);Mr=s(Ly,"A",{href:!0,rel:!0});var Iy=r(Mr);u1=i(Iy,"Parallelization"),Iy.forEach(t),Ly.forEach(t),un.forEach(t),_1=h(re),we=s(re,"DIV",{class:!0});var _n=r(we);v(Er.$$.fragment,_n),b1=h(_n),qt=s(_n,"P",{});var mi=r(qt);k1=i(mi,"The "),Id=s(mi,"CODE",{});var Sy=r(Id);B1=i(Sy,"FlaxBigBirdPreTrainedModel"),Sy.forEach(t),v1=i(mi," forward method, overrides the "),Sd=s(mi,"CODE",{});var Ny=r(Sd);$1=i(Ny,"__call__"),Ny.forEach(t),w1=i(mi," special method."),mi.forEach(t),y1=h(_n),v(Wo.$$.fragment,_n),T1=h(_n),v(Uo.$$.fragment,_n),_n.forEach(t),re.forEach(t),xp=h(o),zt=s(o,"H2",{class:!0});var xh=r(zt);Qo=s(xh,"A",{id:!0,class:!0,href:!0});var Oy=r(Qo);Nd=s(Oy,"SPAN",{});var Dy=r(Nd);v(Pr.$$.fragment,Dy),Dy.forEach(t),Oy.forEach(t),x1=h(xh),Od=s(xh,"SPAN",{});var Wy=r(Od);F1=i(Wy,"FlaxBigBirdForMultipleChoice"),Wy.forEach(t),xh.forEach(t),Fp=h(o),N=s(o,"DIV",{class:!0});var ae=r(N);v(jr.$$.fragment,ae),q1=h(ae),Dd=s(ae,"P",{});var Uy=r(Dd);z1=i(Uy,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Uy.forEach(t),M1=h(ae),Cr=s(ae,"P",{});var Fh=r(Cr);E1=i(Fh,"This model inherits from "),Da=s(Fh,"A",{href:!0});var Qy=r(Da);P1=i(Qy,"FlaxPreTrainedModel"),Qy.forEach(t),j1=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fh.forEach(t),C1=h(ae),Ar=s(ae,"P",{});var qh=r(Ar);A1=i(qh,"This model is also a Flax Linen "),Lr=s(qh,"A",{href:!0,rel:!0});var Hy=r(Lr);L1=i(Hy,"flax.linen.Module"),Hy.forEach(t),I1=i(qh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qh.forEach(t),S1=h(ae),Wd=s(ae,"P",{});var Vy=r(Wd);N1=i(Vy,"Finally, this model supports inherent JAX features such as:"),Vy.forEach(t),O1=h(ae),Ce=s(ae,"UL",{});var bn=r(Ce);Ud=s(bn,"LI",{});var Jy=r(Ud);Ir=s(Jy,"A",{href:!0,rel:!0});var Ry=r(Ir);D1=i(Ry,"Just-In-Time (JIT) compilation"),Ry.forEach(t),Jy.forEach(t),W1=h(bn),Qd=s(bn,"LI",{});var Gy=r(Qd);Sr=s(Gy,"A",{href:!0,rel:!0});var Ky=r(Sr);U1=i(Ky,"Automatic Differentiation"),Ky.forEach(t),Gy.forEach(t),Q1=h(bn),Hd=s(bn,"LI",{});var Xy=r(Hd);Nr=s(Xy,"A",{href:!0,rel:!0});var Yy=r(Nr);H1=i(Yy,"Vectorization"),Yy.forEach(t),Xy.forEach(t),V1=h(bn),Vd=s(bn,"LI",{});var Zy=r(Vd);Or=s(Zy,"A",{href:!0,rel:!0});var eT=r(Or);J1=i(eT,"Parallelization"),eT.forEach(t),Zy.forEach(t),bn.forEach(t),R1=h(ae),ye=s(ae,"DIV",{class:!0});var kn=r(ye);v(Dr.$$.fragment,kn),G1=h(kn),Mt=s(kn,"P",{});var fi=r(Mt);K1=i(fi,"The "),Jd=s(fi,"CODE",{});var tT=r(Jd);X1=i(tT,"FlaxBigBirdPreTrainedModel"),tT.forEach(t),Y1=i(fi," forward method, overrides the "),Rd=s(fi,"CODE",{});var oT=r(Rd);Z1=i(oT,"__call__"),oT.forEach(t),eB=i(fi," special method."),fi.forEach(t),tB=h(kn),v(Ho.$$.fragment,kn),oB=h(kn),v(Vo.$$.fragment,kn),kn.forEach(t),ae.forEach(t),qp=h(o),Et=s(o,"H2",{class:!0});var zh=r(Et);Jo=s(zh,"A",{id:!0,class:!0,href:!0});var nT=r(Jo);Gd=s(nT,"SPAN",{});var sT=r(Gd);v(Wr.$$.fragment,sT),sT.forEach(t),nT.forEach(t),nB=h(zh),Kd=s(zh,"SPAN",{});var rT=r(Kd);sB=i(rT,"FlaxBigBirdForTokenClassification"),rT.forEach(t),zh.forEach(t),zp=h(o),O=s(o,"DIV",{class:!0});var ie=r(O);v(Ur.$$.fragment,ie),rB=h(ie),Xd=s(ie,"P",{});var aT=r(Xd);aB=i(aT,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),aT.forEach(t),iB=h(ie),Qr=s(ie,"P",{});var Mh=r(Qr);lB=i(Mh,"This model inherits from "),Wa=s(Mh,"A",{href:!0});var iT=r(Wa);dB=i(iT,"FlaxPreTrainedModel"),iT.forEach(t),cB=i(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mh.forEach(t),pB=h(ie),Hr=s(ie,"P",{});var Eh=r(Hr);hB=i(Eh,"This model is also a Flax Linen "),Vr=s(Eh,"A",{href:!0,rel:!0});var lT=r(Vr);mB=i(lT,"flax.linen.Module"),lT.forEach(t),fB=i(Eh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Eh.forEach(t),gB=h(ie),Yd=s(ie,"P",{});var dT=r(Yd);uB=i(dT,"Finally, this model supports inherent JAX features such as:"),dT.forEach(t),_B=h(ie),Ae=s(ie,"UL",{});var Bn=r(Ae);Zd=s(Bn,"LI",{});var cT=r(Zd);Jr=s(cT,"A",{href:!0,rel:!0});var pT=r(Jr);bB=i(pT,"Just-In-Time (JIT) compilation"),pT.forEach(t),cT.forEach(t),kB=h(Bn),ec=s(Bn,"LI",{});var hT=r(ec);Rr=s(hT,"A",{href:!0,rel:!0});var mT=r(Rr);BB=i(mT,"Automatic Differentiation"),mT.forEach(t),hT.forEach(t),vB=h(Bn),tc=s(Bn,"LI",{});var fT=r(tc);Gr=s(fT,"A",{href:!0,rel:!0});var gT=r(Gr);$B=i(gT,"Vectorization"),gT.forEach(t),fT.forEach(t),wB=h(Bn),oc=s(Bn,"LI",{});var uT=r(oc);Kr=s(uT,"A",{href:!0,rel:!0});var _T=r(Kr);yB=i(_T,"Parallelization"),_T.forEach(t),uT.forEach(t),Bn.forEach(t),TB=h(ie),Te=s(ie,"DIV",{class:!0});var vn=r(Te);v(Xr.$$.fragment,vn),xB=h(vn),Pt=s(vn,"P",{});var gi=r(Pt);FB=i(gi,"The "),nc=s(gi,"CODE",{});var bT=r(nc);qB=i(bT,"FlaxBigBirdPreTrainedModel"),bT.forEach(t),zB=i(gi," forward method, overrides the "),sc=s(gi,"CODE",{});var kT=r(sc);MB=i(kT,"__call__"),kT.forEach(t),EB=i(gi," special method."),gi.forEach(t),PB=h(vn),v(Ro.$$.fragment,vn),jB=h(vn),v(Go.$$.fragment,vn),vn.forEach(t),ie.forEach(t),Mp=h(o),jt=s(o,"H2",{class:!0});var Ph=r(jt);Ko=s(Ph,"A",{id:!0,class:!0,href:!0});var BT=r(Ko);rc=s(BT,"SPAN",{});var vT=r(rc);v(Yr.$$.fragment,vT),vT.forEach(t),BT.forEach(t),CB=h(Ph),ac=s(Ph,"SPAN",{});var $T=r(ac);AB=i($T,"FlaxBigBirdForQuestionAnswering"),$T.forEach(t),Ph.forEach(t),Ep=h(o),D=s(o,"DIV",{class:!0});var le=r(D);v(Zr.$$.fragment,le),LB=h(le),Ct=s(le,"P",{});var ui=r(Ct);IB=i(ui,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ic=s(ui,"CODE",{});var wT=r(ic);SB=i(wT,"span start logits"),wT.forEach(t),NB=i(ui," and "),lc=s(ui,"CODE",{});var yT=r(lc);OB=i(yT,"span end logits"),yT.forEach(t),DB=i(ui,")."),ui.forEach(t),WB=h(le),ea=s(le,"P",{});var jh=r(ea);UB=i(jh,"This model inherits from "),Ua=s(jh,"A",{href:!0});var TT=r(Ua);QB=i(TT,"FlaxPreTrainedModel"),TT.forEach(t),HB=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jh.forEach(t),VB=h(le),ta=s(le,"P",{});var Ch=r(ta);JB=i(Ch,"This model is also a Flax Linen "),oa=s(Ch,"A",{href:!0,rel:!0});var xT=r(oa);RB=i(xT,"flax.linen.Module"),xT.forEach(t),GB=i(Ch,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ch.forEach(t),KB=h(le),dc=s(le,"P",{});var FT=r(dc);XB=i(FT,"Finally, this model supports inherent JAX features such as:"),FT.forEach(t),YB=h(le),Le=s(le,"UL",{});var $n=r(Le);cc=s($n,"LI",{});var qT=r(cc);na=s(qT,"A",{href:!0,rel:!0});var zT=r(na);ZB=i(zT,"Just-In-Time (JIT) compilation"),zT.forEach(t),qT.forEach(t),ev=h($n),pc=s($n,"LI",{});var MT=r(pc);sa=s(MT,"A",{href:!0,rel:!0});var ET=r(sa);tv=i(ET,"Automatic Differentiation"),ET.forEach(t),MT.forEach(t),ov=h($n),hc=s($n,"LI",{});var PT=r(hc);ra=s(PT,"A",{href:!0,rel:!0});var jT=r(ra);nv=i(jT,"Vectorization"),jT.forEach(t),PT.forEach(t),sv=h($n),mc=s($n,"LI",{});var CT=r(mc);aa=s(CT,"A",{href:!0,rel:!0});var AT=r(aa);rv=i(AT,"Parallelization"),AT.forEach(t),CT.forEach(t),$n.forEach(t),av=h(le),xe=s(le,"DIV",{class:!0});var wn=r(xe);v(ia.$$.fragment,wn),iv=h(wn),At=s(wn,"P",{});var _i=r(At);lv=i(_i,"The "),Qa=s(_i,"A",{href:!0});var LT=r(Qa);dv=i(LT,"FlaxBigBirdForQuestionAnswering"),LT.forEach(t),cv=i(_i," forward method, overrides the "),fc=s(_i,"CODE",{});var IT=r(fc);pv=i(IT,"__call__"),IT.forEach(t),hv=i(_i," special method."),_i.forEach(t),mv=h(wn),v(Xo.$$.fragment,wn),fv=h(wn),v(Yo.$$.fragment,wn),wn.forEach(t),le.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(q2)),c(g,"id","bigbird"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#bigbird"),c(m,"class","relative group"),c(St,"id","overview"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#overview"),c(He,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2007.14062"),c(Tn,"rel","nofollow"),c(Fn,"href","https://huggingface.co/blog/big-bird"),c(Fn,"rel","nofollow"),c(zn,"href","https://huggingface.co/vasudevgupta"),c(zn,"rel","nofollow"),c(Mn,"href","https://github.com/google-research/bigbird"),c(Mn,"rel","nofollow"),c(Ot,"id","transformers.BigBirdConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BigBirdConfig"),c(Ve,"class","relative group"),c(ba,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdModel"),c(jn,"href","https://huggingface.co/google/bigbird-roberta-base"),c(jn,"rel","nofollow"),c(ka,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ba,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ut,"id","initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Wt,"class","relative group"),c(Ht,"id","initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Qt,"class","relative group"),c(Jt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Vt,"class","relative group"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Rt,"id","transformers.BigBirdTokenizer"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.BigBirdTokenizer"),c(Ge,"class","relative group"),c(Wn,"href","https://github.com/google/sentencepiece"),c(Wn,"rel","nofollow"),c(va,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ya,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.BigBirdTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.BigBirdTokenizerFast"),c(Xe,"class","relative group"),c(Yn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(Yn,"rel","nofollow"),c(Ta,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(Ye,"class","relative group"),c(qa,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.BigBirdModel"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.BigBirdModel"),c(et,"class","relative group"),c(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cs,"rel","nofollow"),c(hs,"href","https://arxiv.org/abs/1706.03762"),c(hs,"rel","nofollow"),c(za,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdModel"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(so,"id","transformers.BigBirdForPreTraining"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.BigBirdForPreTraining"),c(ot,"class","relative group"),c(Ma,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdForCausalLM"),c(rt,"class","relative group"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(Ea,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForMaskedLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForMaskedLM"),c(lt,"class","relative group"),c(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ws,"rel","nofollow"),c(Pa,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.BigBirdForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.BigBirdForSequenceClassification"),c(pt,"class","relative group"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(ja,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.BigBirdForMultipleChoice"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.BigBirdForMultipleChoice"),c(mt,"class","relative group"),c(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(js,"rel","nofollow"),c(Ca,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"id","transformers.BigBirdForTokenClassification"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.BigBirdForTokenClassification"),c(gt,"class","relative group"),c(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ss,"rel","nofollow"),c(Aa,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"id","transformers.BigBirdForQuestionAnswering"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BigBirdForQuestionAnswering"),c(_t,"class","relative group"),c(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Us,"rel","nofollow"),c(La,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.FlaxBigBirdModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.FlaxBigBirdModel"),c(Bt,"class","relative group"),c(Ia,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Gs,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ks,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xs,"rel","nofollow"),c(Ys,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ys,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdForPreTraining"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdForPreTraining"),c($t,"class","relative group"),c(Sa,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ir,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(lr,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(dr,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(So,"id","transformers.FlaxBigBirdForMaskedLM"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Tt,"class","relative group"),c(Na,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ur,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ur,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(_r,"rel","nofollow"),c(br,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(br,"rel","nofollow"),c(kr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(kr,"rel","nofollow"),c(Br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Br,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Ft,"class","relative group"),c(Oa,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Mr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qo,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(zt,"class","relative group"),c(Da,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Lr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Lr,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ir,"rel","nofollow"),c(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Sr,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Nr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Or,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jo,"id","transformers.FlaxBigBirdForTokenClassification"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Et,"class","relative group"),c(Wa,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Vr,"rel","nofollow"),c(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jr,"rel","nofollow"),c(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Rr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Gr,"rel","nofollow"),c(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Kr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ko,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(jt,"class","relative group"),c(Ua,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(sa,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ra,"rel","nofollow"),c(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(aa,"rel","nofollow"),c(Qa,"href","/docs/transformers/pr_16919/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),k(o,_,u),k(o,m,u),e(m,g),e(g,b),$(l,b,null),e(m,f),e(m,F),e(F,Ah),k(o,Dc,u),k(o,He,u),e(He,St),e(St,bi),$(yn,bi,null),e(He,Lh),e(He,ki),e(ki,Ih),k(o,Wc,u),k(o,Nt,u),e(Nt,Sh),e(Nt,Tn),e(Tn,Nh),e(Nt,Oh),k(o,Uc,u),k(o,fa,u),e(fa,Dh),k(o,Qc,u),k(o,ga,u),e(ga,Bi),e(Bi,Wh),k(o,Hc,u),k(o,ua,u),e(ua,Uh),k(o,Vc,u),k(o,H,u),e(H,xn),e(xn,Qh),e(xn,Fn),e(Fn,Hh),e(xn,Vh),e(H,Jh),e(H,de),e(de,Rh),e(de,vi),e(vi,Gh),e(de,Kh),e(de,$i),e($i,Xh),e(de,Yh),e(de,wi),e(wi,Zh),e(de,em),e(de,yi),e(yi,tm),e(de,om),e(H,nm),e(H,Ti),e(Ti,sm),e(H,rm),e(H,xi),e(xi,am),e(H,im),e(H,qn),e(qn,lm),e(qn,Fi),e(Fi,dm),e(qn,cm),e(H,pm),e(H,_a),e(_a,hm),e(_a,qi),e(qi,mm),k(o,Jc,u),k(o,Ie,u),e(Ie,fm),e(Ie,zn),e(zn,gm),e(Ie,um),e(Ie,Mn),e(Mn,_m),e(Ie,bm),k(o,Rc,u),k(o,Ve,u),e(Ve,Ot),e(Ot,zi),$(En,zi,null),e(Ve,km),e(Ve,Mi),e(Mi,Bm),k(o,Gc,u),k(o,j,u),$(Pn,j,null),e(j,vm),e(j,Je),e(Je,$m),e(Je,ba),e(ba,wm),e(Je,ym),e(Je,jn),e(jn,Tm),e(Je,xm),e(j,Fm),e(j,Re),e(Re,qm),e(Re,ka),e(ka,zm),e(Re,Mm),e(Re,Ba),e(Ba,Em),e(Re,Pm),e(j,jm),$(Dt,j,null),e(j,Cm),e(j,Ei),e(Ei,Pi),e(Pi,ji),e(ji,Ci),e(Ci,Am),e(j,Lm),e(j,Ai),e(Ai,Li),e(Li,Cn),e(Cn,Wt),e(Wt,Ut),e(Ut,Ii),$(An,Ii,null),e(Wt,Im),e(Wt,Si),e(Si,Sm),e(Cn,Nm),e(Cn,Ni),e(Ni,Om),e(j,Dm),e(j,Oi),e(Oi,Di),e(Di,Ln),e(Ln,Qt),e(Qt,Ht),e(Ht,Wi),$(In,Wi,null),e(Qt,Wm),e(Qt,Ui),e(Ui,Um),e(Ln,Qm),e(Ln,Qi),e(Qi,Hm),e(j,Vm),e(j,Hi),e(Hi,Vi),e(Vi,Ji),e(Ji,Vt),e(Vt,Jt),e(Jt,Ri),$(Sn,Ri,null),e(Vt,Jm),e(Vt,Gi),e(Gi,Rm),k(o,Kc,u),k(o,Ge,u),e(Ge,Rt),e(Rt,Ki),$(Nn,Ki,null),e(Ge,Gm),e(Ge,Xi),e(Xi,Km),k(o,Xc,u),k(o,C,u),$(On,C,null),e(C,Xm),e(C,Dn),e(Dn,Ym),e(Dn,Wn),e(Wn,Zm),e(Dn,ef),e(C,tf),e(C,Un),e(Un,of),e(Un,va),e(va,nf),e(Un,sf),e(C,rf),e(C,Se),$(Qn,Se,null),e(Se,af),e(Se,Yi),e(Yi,lf),e(Se,df),e(Se,Hn),e(Hn,$a),e($a,cf),e($a,Zi),e(Zi,pf),e(Hn,hf),e(Hn,wa),e(wa,mf),e(wa,el),e(el,ff),e(C,gf),e(C,Gt),$(Vn,Gt,null),e(Gt,uf),e(Gt,Jn),e(Jn,_f),e(Jn,tl),e(tl,bf),e(Jn,kf),e(C,Bf),e(C,Kt),$(Rn,Kt,null),e(Kt,vf),e(Kt,Ke),e(Ke,$f),e(Ke,ol),e(ol,wf),e(Ke,yf),e(Ke,nl),e(nl,Tf),e(Ke,xf),e(C,Ff),e(C,ya),$(Gn,ya,null),k(o,Yc,u),k(o,Xe,u),e(Xe,Xt),e(Xt,sl),$(Kn,sl,null),e(Xe,qf),e(Xe,rl),e(rl,zf),k(o,Zc,u),k(o,V,u),$(Xn,V,null),e(V,Mf),e(V,Fe),e(Fe,Ef),e(Fe,al),e(al,Pf),e(Fe,jf),e(Fe,Yn),e(Yn,Cf),e(Fe,Af),e(Fe,Ta),e(Ta,Lf),e(Fe,If),e(V,Sf),e(V,Ne),$(Zn,Ne,null),e(Ne,Nf),e(Ne,il),e(il,Of),e(Ne,Df),e(Ne,es),e(es,xa),e(xa,Wf),e(xa,ll),e(ll,Uf),e(es,Qf),e(es,Fa),e(Fa,Hf),e(Fa,dl),e(dl,Vf),e(V,Jf),e(V,ge),$(ts,ge,null),e(ge,Rf),e(ge,cl),e(cl,Gf),e(ge,Kf),$(Yt,ge,null),e(ge,Xf),e(ge,pl),e(pl,Yf),e(V,Zf),e(V,Zt),$(os,Zt,null),e(Zt,eg),e(Zt,ns),e(ns,tg),e(ns,hl),e(hl,og),e(ns,ng),k(o,ep,u),k(o,Ye,u),e(Ye,eo),e(eo,ml),$(ss,ml,null),e(Ye,sg),e(Ye,fl),e(fl,rg),k(o,tp,u),k(o,Ze,u),$(rs,Ze,null),e(Ze,ag),e(Ze,as),e(as,ig),e(as,qa),e(qa,lg),e(as,dg),k(o,op,u),k(o,et,u),e(et,to),e(to,gl),$(is,gl,null),e(et,cg),e(et,ul),e(ul,pg),k(o,np,u),k(o,J,u),$(ls,J,null),e(J,hg),e(J,ds),e(ds,mg),e(ds,cs),e(cs,fg),e(ds,gg),e(J,ug),e(J,ps),e(ps,_g),e(ps,hs),e(hs,bg),e(ps,kg),e(J,Bg),e(J,Q),e(Q,vg),e(Q,_l),e(_l,$g),e(Q,wg),e(Q,bl),e(bl,yg),e(Q,Tg),e(Q,kl),e(kl,xg),e(Q,Fg),e(Q,Bl),e(Bl,qg),e(Q,zg),e(Q,vl),e(vl,Mg),e(Q,Eg),e(Q,$l),e($l,Pg),e(Q,jg),e(J,Cg),e(J,ue),$(ms,ue,null),e(ue,Ag),e(ue,tt),e(tt,Lg),e(tt,za),e(za,Ig),e(tt,Sg),e(tt,wl),e(wl,Ng),e(tt,Og),e(ue,Dg),$(oo,ue,null),e(ue,Wg),$(no,ue,null),k(o,sp,u),k(o,ot,u),e(ot,so),e(so,yl),$(fs,yl,null),e(ot,Ug),e(ot,Tl),e(Tl,Qg),k(o,rp,u),k(o,nt,u),$(gs,nt,null),e(nt,Hg),e(nt,_e),$(us,_e,null),e(_e,Vg),e(_e,st),e(st,Jg),e(st,Ma),e(Ma,Rg),e(st,Gg),e(st,xl),e(xl,Kg),e(st,Xg),e(_e,Yg),$(ro,_e,null),e(_e,Zg),$(ao,_e,null),k(o,ap,u),k(o,rt,u),e(rt,io),e(io,Fl),$(_s,Fl,null),e(rt,eu),e(rt,ql),e(ql,tu),k(o,ip,u),k(o,qe,u),$(bs,qe,null),e(qe,ou),e(qe,at),e(at,nu),e(at,zl),e(zl,su),e(at,ru),e(at,ks),e(ks,au),e(at,iu),e(qe,lu),e(qe,be),$(Bs,be,null),e(be,du),e(be,it),e(it,cu),e(it,Ea),e(Ea,pu),e(it,hu),e(it,Ml),e(Ml,mu),e(it,fu),e(be,gu),$(lo,be,null),e(be,uu),$(co,be,null),k(o,lp,u),k(o,lt,u),e(lt,po),e(po,El),$(vs,El,null),e(lt,_u),e(lt,Pl),e(Pl,bu),k(o,dp,u),k(o,ze,u),$($s,ze,null),e(ze,ku),e(ze,dt),e(dt,Bu),e(dt,jl),e(jl,vu),e(dt,$u),e(dt,ws),e(ws,wu),e(dt,yu),e(ze,Tu),e(ze,K),$(ys,K,null),e(K,xu),e(K,ct),e(ct,Fu),e(ct,Pa),e(Pa,qu),e(ct,zu),e(ct,Cl),e(Cl,Mu),e(ct,Eu),e(K,Pu),$(ho,K,null),e(K,ju),$(mo,K,null),e(K,Cu),$(fo,K,null),k(o,cp,u),k(o,pt,u),e(pt,go),e(go,Al),$(Ts,Al,null),e(pt,Au),e(pt,Ll),e(Ll,Lu),k(o,pp,u),k(o,ce,u),$(xs,ce,null),e(ce,Iu),e(ce,Il),e(Il,Su),e(ce,Nu),e(ce,Fs),e(Fs,Ou),e(Fs,qs),e(qs,Du),e(Fs,Wu),e(ce,Uu),e(ce,U),$(zs,U,null),e(U,Qu),e(U,ht),e(ht,Hu),e(ht,ja),e(ja,Vu),e(ht,Ju),e(ht,Sl),e(Sl,Ru),e(ht,Gu),e(U,Ku),$(uo,U,null),e(U,Xu),$(_o,U,null),e(U,Yu),$(bo,U,null),e(U,Zu),$(ko,U,null),e(U,e_),$(Bo,U,null),k(o,hp,u),k(o,mt,u),e(mt,vo),e(vo,Nl),$(Ms,Nl,null),e(mt,t_),e(mt,Ol),e(Ol,o_),k(o,mp,u),k(o,pe,u),$(Es,pe,null),e(pe,n_),e(pe,Dl),e(Dl,s_),e(pe,r_),e(pe,Ps),e(Ps,a_),e(Ps,js),e(js,i_),e(Ps,l_),e(pe,d_),e(pe,ke),$(Cs,ke,null),e(ke,c_),e(ke,ft),e(ft,p_),e(ft,Ca),e(Ca,h_),e(ft,m_),e(ft,Wl),e(Wl,f_),e(ft,g_),e(ke,u_),$($o,ke,null),e(ke,__),$(wo,ke,null),k(o,fp,u),k(o,gt,u),e(gt,yo),e(yo,Ul),$(As,Ul,null),e(gt,b_),e(gt,Ql),e(Ql,k_),k(o,gp,u),k(o,he,u),$(Ls,he,null),e(he,B_),e(he,Hl),e(Hl,v_),e(he,$_),e(he,Is),e(Is,w_),e(Is,Ss),e(Ss,y_),e(Is,T_),e(he,x_),e(he,X),$(Ns,X,null),e(X,F_),e(X,ut),e(ut,q_),e(ut,Aa),e(Aa,z_),e(ut,M_),e(ut,Vl),e(Vl,E_),e(ut,P_),e(X,j_),$(To,X,null),e(X,C_),$(xo,X,null),e(X,A_),$(Fo,X,null),k(o,up,u),k(o,_t,u),e(_t,qo),e(qo,Jl),$(Os,Jl,null),e(_t,L_),e(_t,Rl),e(Rl,I_),k(o,_p,u),k(o,me,u),$(Ds,me,null),e(me,S_),e(me,bt),e(bt,N_),e(bt,Gl),e(Gl,O_),e(bt,D_),e(bt,Kl),e(Kl,W_),e(bt,U_),e(me,Q_),e(me,Ws),e(Ws,H_),e(Ws,Us),e(Us,V_),e(Ws,J_),e(me,R_),e(me,Y),$(Qs,Y,null),e(Y,G_),e(Y,kt),e(kt,K_),e(kt,La),e(La,X_),e(kt,Y_),e(kt,Xl),e(Xl,Z_),e(kt,eb),e(Y,tb),$(zo,Y,null),e(Y,ob),$(Mo,Y,null),e(Y,nb),$(Eo,Y,null),k(o,bp,u),k(o,Bt,u),e(Bt,Po),e(Po,Yl),$(Hs,Yl,null),e(Bt,sb),e(Bt,Zl),e(Zl,rb),k(o,kp,u),k(o,A,u),$(Vs,A,null),e(A,ab),e(A,ed),e(ed,ib),e(A,lb),e(A,Js),e(Js,db),e(Js,Ia),e(Ia,cb),e(Js,pb),e(A,hb),e(A,Rs),e(Rs,mb),e(Rs,Gs),e(Gs,fb),e(Rs,gb),e(A,ub),e(A,td),e(td,_b),e(A,bb),e(A,Me),e(Me,od),e(od,Ks),e(Ks,kb),e(Me,Bb),e(Me,nd),e(nd,Xs),e(Xs,vb),e(Me,$b),e(Me,sd),e(sd,Ys),e(Ys,wb),e(Me,yb),e(Me,rd),e(rd,Zs),e(Zs,Tb),e(A,xb),e(A,Be),$(er,Be,null),e(Be,Fb),e(Be,vt),e(vt,qb),e(vt,ad),e(ad,zb),e(vt,Mb),e(vt,id),e(id,Eb),e(vt,Pb),e(Be,jb),$(jo,Be,null),e(Be,Cb),$(Co,Be,null),k(o,Bp,u),k(o,$t,u),e($t,Ao),e(Ao,ld),$(tr,ld,null),e($t,Ab),e($t,dd),e(dd,Lb),k(o,vp,u),k(o,L,u),$(or,L,null),e(L,Ib),e(L,wt),e(wt,Sb),e(wt,cd),e(cd,Nb),e(wt,Ob),e(wt,pd),e(pd,Db),e(wt,Wb),e(L,Ub),e(L,nr),e(nr,Qb),e(nr,Sa),e(Sa,Hb),e(nr,Vb),e(L,Jb),e(L,sr),e(sr,Rb),e(sr,rr),e(rr,Gb),e(sr,Kb),e(L,Xb),e(L,hd),e(hd,Yb),e(L,Zb),e(L,Ee),e(Ee,md),e(md,ar),e(ar,ek),e(Ee,tk),e(Ee,fd),e(fd,ir),e(ir,ok),e(Ee,nk),e(Ee,gd),e(gd,lr),e(lr,sk),e(Ee,rk),e(Ee,ud),e(ud,dr),e(dr,ak),e(L,ik),e(L,ve),$(cr,ve,null),e(ve,lk),e(ve,yt),e(yt,dk),e(yt,_d),e(_d,ck),e(yt,pk),e(yt,bd),e(bd,hk),e(yt,mk),e(ve,fk),$(Lo,ve,null),e(ve,gk),$(Io,ve,null),k(o,$p,u),k(o,Tt,u),e(Tt,So),e(So,kd),$(pr,kd,null),e(Tt,uk),e(Tt,Bd),e(Bd,_k),k(o,wp,u),k(o,I,u),$(hr,I,null),e(I,bk),e(I,mr),e(mr,kk),e(mr,vd),e(vd,Bk),e(mr,vk),e(I,$k),e(I,fr),e(fr,wk),e(fr,Na),e(Na,yk),e(fr,Tk),e(I,xk),e(I,gr),e(gr,Fk),e(gr,ur),e(ur,qk),e(gr,zk),e(I,Mk),e(I,$d),e($d,Ek),e(I,Pk),e(I,Pe),e(Pe,wd),e(wd,_r),e(_r,jk),e(Pe,Ck),e(Pe,yd),e(yd,br),e(br,Ak),e(Pe,Lk),e(Pe,Td),e(Td,kr),e(kr,Ik),e(Pe,Sk),e(Pe,xd),e(xd,Br),e(Br,Nk),e(I,Ok),e(I,$e),$(vr,$e,null),e($e,Dk),e($e,xt),e(xt,Wk),e(xt,Fd),e(Fd,Uk),e(xt,Qk),e(xt,qd),e(qd,Hk),e(xt,Vk),e($e,Jk),$(No,$e,null),e($e,Rk),$(Oo,$e,null),k(o,yp,u),k(o,Ft,u),e(Ft,Do),e(Do,zd),$($r,zd,null),e(Ft,Gk),e(Ft,Md),e(Md,Kk),k(o,Tp,u),k(o,S,u),$(wr,S,null),e(S,Xk),e(S,Ed),e(Ed,Yk),e(S,Zk),e(S,yr),e(yr,e1),e(yr,Oa),e(Oa,t1),e(yr,o1),e(S,n1),e(S,Tr),e(Tr,s1),e(Tr,xr),e(xr,r1),e(Tr,a1),e(S,i1),e(S,Pd),e(Pd,l1),e(S,d1),e(S,je),e(je,jd),e(jd,Fr),e(Fr,c1),e(je,p1),e(je,Cd),e(Cd,qr),e(qr,h1),e(je,m1),e(je,Ad),e(Ad,zr),e(zr,f1),e(je,g1),e(je,Ld),e(Ld,Mr),e(Mr,u1),e(S,_1),e(S,we),$(Er,we,null),e(we,b1),e(we,qt),e(qt,k1),e(qt,Id),e(Id,B1),e(qt,v1),e(qt,Sd),e(Sd,$1),e(qt,w1),e(we,y1),$(Wo,we,null),e(we,T1),$(Uo,we,null),k(o,xp,u),k(o,zt,u),e(zt,Qo),e(Qo,Nd),$(Pr,Nd,null),e(zt,x1),e(zt,Od),e(Od,F1),k(o,Fp,u),k(o,N,u),$(jr,N,null),e(N,q1),e(N,Dd),e(Dd,z1),e(N,M1),e(N,Cr),e(Cr,E1),e(Cr,Da),e(Da,P1),e(Cr,j1),e(N,C1),e(N,Ar),e(Ar,A1),e(Ar,Lr),e(Lr,L1),e(Ar,I1),e(N,S1),e(N,Wd),e(Wd,N1),e(N,O1),e(N,Ce),e(Ce,Ud),e(Ud,Ir),e(Ir,D1),e(Ce,W1),e(Ce,Qd),e(Qd,Sr),e(Sr,U1),e(Ce,Q1),e(Ce,Hd),e(Hd,Nr),e(Nr,H1),e(Ce,V1),e(Ce,Vd),e(Vd,Or),e(Or,J1),e(N,R1),e(N,ye),$(Dr,ye,null),e(ye,G1),e(ye,Mt),e(Mt,K1),e(Mt,Jd),e(Jd,X1),e(Mt,Y1),e(Mt,Rd),e(Rd,Z1),e(Mt,eB),e(ye,tB),$(Ho,ye,null),e(ye,oB),$(Vo,ye,null),k(o,qp,u),k(o,Et,u),e(Et,Jo),e(Jo,Gd),$(Wr,Gd,null),e(Et,nB),e(Et,Kd),e(Kd,sB),k(o,zp,u),k(o,O,u),$(Ur,O,null),e(O,rB),e(O,Xd),e(Xd,aB),e(O,iB),e(O,Qr),e(Qr,lB),e(Qr,Wa),e(Wa,dB),e(Qr,cB),e(O,pB),e(O,Hr),e(Hr,hB),e(Hr,Vr),e(Vr,mB),e(Hr,fB),e(O,gB),e(O,Yd),e(Yd,uB),e(O,_B),e(O,Ae),e(Ae,Zd),e(Zd,Jr),e(Jr,bB),e(Ae,kB),e(Ae,ec),e(ec,Rr),e(Rr,BB),e(Ae,vB),e(Ae,tc),e(tc,Gr),e(Gr,$B),e(Ae,wB),e(Ae,oc),e(oc,Kr),e(Kr,yB),e(O,TB),e(O,Te),$(Xr,Te,null),e(Te,xB),e(Te,Pt),e(Pt,FB),e(Pt,nc),e(nc,qB),e(Pt,zB),e(Pt,sc),e(sc,MB),e(Pt,EB),e(Te,PB),$(Ro,Te,null),e(Te,jB),$(Go,Te,null),k(o,Mp,u),k(o,jt,u),e(jt,Ko),e(Ko,rc),$(Yr,rc,null),e(jt,CB),e(jt,ac),e(ac,AB),k(o,Ep,u),k(o,D,u),$(Zr,D,null),e(D,LB),e(D,Ct),e(Ct,IB),e(Ct,ic),e(ic,SB),e(Ct,NB),e(Ct,lc),e(lc,OB),e(Ct,DB),e(D,WB),e(D,ea),e(ea,UB),e(ea,Ua),e(Ua,QB),e(ea,HB),e(D,VB),e(D,ta),e(ta,JB),e(ta,oa),e(oa,RB),e(ta,GB),e(D,KB),e(D,dc),e(dc,XB),e(D,YB),e(D,Le),e(Le,cc),e(cc,na),e(na,ZB),e(Le,ev),e(Le,pc),e(pc,sa),e(sa,tv),e(Le,ov),e(Le,hc),e(hc,ra),e(ra,nv),e(Le,sv),e(Le,mc),e(mc,aa),e(aa,rv),e(D,av),e(D,xe),$(ia,xe,null),e(xe,iv),e(xe,At),e(At,lv),e(At,Qa),e(Qa,dv),e(At,cv),e(At,fc),e(fc,pv),e(At,hv),e(xe,mv),$(Xo,xe,null),e(xe,fv),$(Yo,xe,null),Pp=!0},p(o,[u]){const la={};u&2&&(la.$$scope={dirty:u,ctx:o}),Dt.$set(la);const gc={};u&2&&(gc.$$scope={dirty:u,ctx:o}),Yt.$set(gc);const uc={};u&2&&(uc.$$scope={dirty:u,ctx:o}),oo.$set(uc);const _c={};u&2&&(_c.$$scope={dirty:u,ctx:o}),no.$set(_c);const da={};u&2&&(da.$$scope={dirty:u,ctx:o}),ro.$set(da);const bc={};u&2&&(bc.$$scope={dirty:u,ctx:o}),ao.$set(bc);const kc={};u&2&&(kc.$$scope={dirty:u,ctx:o}),lo.$set(kc);const Bc={};u&2&&(Bc.$$scope={dirty:u,ctx:o}),co.$set(Bc);const ca={};u&2&&(ca.$$scope={dirty:u,ctx:o}),ho.$set(ca);const vc={};u&2&&(vc.$$scope={dirty:u,ctx:o}),mo.$set(vc);const $c={};u&2&&($c.$$scope={dirty:u,ctx:o}),fo.$set($c);const wc={};u&2&&(wc.$$scope={dirty:u,ctx:o}),uo.$set(wc);const yc={};u&2&&(yc.$$scope={dirty:u,ctx:o}),_o.$set(yc);const Tc={};u&2&&(Tc.$$scope={dirty:u,ctx:o}),bo.$set(Tc);const R={};u&2&&(R.$$scope={dirty:u,ctx:o}),ko.$set(R);const pa={};u&2&&(pa.$$scope={dirty:u,ctx:o}),Bo.$set(pa);const xc={};u&2&&(xc.$$scope={dirty:u,ctx:o}),$o.$set(xc);const fe={};u&2&&(fe.$$scope={dirty:u,ctx:o}),wo.$set(fe);const Fc={};u&2&&(Fc.$$scope={dirty:u,ctx:o}),To.$set(Fc);const qc={};u&2&&(qc.$$scope={dirty:u,ctx:o}),xo.$set(qc);const zc={};u&2&&(zc.$$scope={dirty:u,ctx:o}),Fo.$set(zc);const Mc={};u&2&&(Mc.$$scope={dirty:u,ctx:o}),zo.$set(Mc);const Ec={};u&2&&(Ec.$$scope={dirty:u,ctx:o}),Mo.$set(Ec);const Pc={};u&2&&(Pc.$$scope={dirty:u,ctx:o}),Eo.$set(Pc);const ha={};u&2&&(ha.$$scope={dirty:u,ctx:o}),jo.$set(ha);const jc={};u&2&&(jc.$$scope={dirty:u,ctx:o}),Co.$set(jc);const Ha={};u&2&&(Ha.$$scope={dirty:u,ctx:o}),Lo.$set(Ha);const Cc={};u&2&&(Cc.$$scope={dirty:u,ctx:o}),Io.$set(Cc);const Lt={};u&2&&(Lt.$$scope={dirty:u,ctx:o}),No.$set(Lt);const Ac={};u&2&&(Ac.$$scope={dirty:u,ctx:o}),Oo.$set(Ac);const Lc={};u&2&&(Lc.$$scope={dirty:u,ctx:o}),Wo.$set(Lc);const ma={};u&2&&(ma.$$scope={dirty:u,ctx:o}),Uo.$set(ma);const Ic={};u&2&&(Ic.$$scope={dirty:u,ctx:o}),Ho.$set(Ic);const Sc={};u&2&&(Sc.$$scope={dirty:u,ctx:o}),Vo.$set(Sc);const Nc={};u&2&&(Nc.$$scope={dirty:u,ctx:o}),Ro.$set(Nc);const W={};u&2&&(W.$$scope={dirty:u,ctx:o}),Go.$set(W);const It={};u&2&&(It.$$scope={dirty:u,ctx:o}),Xo.$set(It);const Oc={};u&2&&(Oc.$$scope={dirty:u,ctx:o}),Yo.$set(Oc)},i(o){Pp||(w(l.$$.fragment,o),w(yn.$$.fragment,o),w(En.$$.fragment,o),w(Pn.$$.fragment,o),w(Dt.$$.fragment,o),w(An.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Nn.$$.fragment,o),w(On.$$.fragment,o),w(Qn.$$.fragment,o),w(Vn.$$.fragment,o),w(Rn.$$.fragment,o),w(Gn.$$.fragment,o),w(Kn.$$.fragment,o),w(Xn.$$.fragment,o),w(Zn.$$.fragment,o),w(ts.$$.fragment,o),w(Yt.$$.fragment,o),w(os.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(ls.$$.fragment,o),w(ms.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(fs.$$.fragment,o),w(gs.$$.fragment,o),w(us.$$.fragment,o),w(ro.$$.fragment,o),w(ao.$$.fragment,o),w(_s.$$.fragment,o),w(bs.$$.fragment,o),w(Bs.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(vs.$$.fragment,o),w($s.$$.fragment,o),w(ys.$$.fragment,o),w(ho.$$.fragment,o),w(mo.$$.fragment,o),w(fo.$$.fragment,o),w(Ts.$$.fragment,o),w(xs.$$.fragment,o),w(zs.$$.fragment,o),w(uo.$$.fragment,o),w(_o.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(Bo.$$.fragment,o),w(Ms.$$.fragment,o),w(Es.$$.fragment,o),w(Cs.$$.fragment,o),w($o.$$.fragment,o),w(wo.$$.fragment,o),w(As.$$.fragment,o),w(Ls.$$.fragment,o),w(Ns.$$.fragment,o),w(To.$$.fragment,o),w(xo.$$.fragment,o),w(Fo.$$.fragment,o),w(Os.$$.fragment,o),w(Ds.$$.fragment,o),w(Qs.$$.fragment,o),w(zo.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(Hs.$$.fragment,o),w(Vs.$$.fragment,o),w(er.$$.fragment,o),w(jo.$$.fragment,o),w(Co.$$.fragment,o),w(tr.$$.fragment,o),w(or.$$.fragment,o),w(cr.$$.fragment,o),w(Lo.$$.fragment,o),w(Io.$$.fragment,o),w(pr.$$.fragment,o),w(hr.$$.fragment,o),w(vr.$$.fragment,o),w(No.$$.fragment,o),w(Oo.$$.fragment,o),w($r.$$.fragment,o),w(wr.$$.fragment,o),w(Er.$$.fragment,o),w(Wo.$$.fragment,o),w(Uo.$$.fragment,o),w(Pr.$$.fragment,o),w(jr.$$.fragment,o),w(Dr.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Wr.$$.fragment,o),w(Ur.$$.fragment,o),w(Xr.$$.fragment,o),w(Ro.$$.fragment,o),w(Go.$$.fragment,o),w(Yr.$$.fragment,o),w(Zr.$$.fragment,o),w(ia.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),Pp=!0)},o(o){y(l.$$.fragment,o),y(yn.$$.fragment,o),y(En.$$.fragment,o),y(Pn.$$.fragment,o),y(Dt.$$.fragment,o),y(An.$$.fragment,o),y(In.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(On.$$.fragment,o),y(Qn.$$.fragment,o),y(Vn.$$.fragment,o),y(Rn.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Xn.$$.fragment,o),y(Zn.$$.fragment,o),y(ts.$$.fragment,o),y(Yt.$$.fragment,o),y(os.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ms.$$.fragment,o),y(oo.$$.fragment,o),y(no.$$.fragment,o),y(fs.$$.fragment,o),y(gs.$$.fragment,o),y(us.$$.fragment,o),y(ro.$$.fragment,o),y(ao.$$.fragment,o),y(_s.$$.fragment,o),y(bs.$$.fragment,o),y(Bs.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(vs.$$.fragment,o),y($s.$$.fragment,o),y(ys.$$.fragment,o),y(ho.$$.fragment,o),y(mo.$$.fragment,o),y(fo.$$.fragment,o),y(Ts.$$.fragment,o),y(xs.$$.fragment,o),y(zs.$$.fragment,o),y(uo.$$.fragment,o),y(_o.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y(Bo.$$.fragment,o),y(Ms.$$.fragment,o),y(Es.$$.fragment,o),y(Cs.$$.fragment,o),y($o.$$.fragment,o),y(wo.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Ns.$$.fragment,o),y(To.$$.fragment,o),y(xo.$$.fragment,o),y(Fo.$$.fragment,o),y(Os.$$.fragment,o),y(Ds.$$.fragment,o),y(Qs.$$.fragment,o),y(zo.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(Hs.$$.fragment,o),y(Vs.$$.fragment,o),y(er.$$.fragment,o),y(jo.$$.fragment,o),y(Co.$$.fragment,o),y(tr.$$.fragment,o),y(or.$$.fragment,o),y(cr.$$.fragment,o),y(Lo.$$.fragment,o),y(Io.$$.fragment,o),y(pr.$$.fragment,o),y(hr.$$.fragment,o),y(vr.$$.fragment,o),y(No.$$.fragment,o),y(Oo.$$.fragment,o),y($r.$$.fragment,o),y(wr.$$.fragment,o),y(Er.$$.fragment,o),y(Wo.$$.fragment,o),y(Uo.$$.fragment,o),y(Pr.$$.fragment,o),y(jr.$$.fragment,o),y(Dr.$$.fragment,o),y(Ho.$$.fragment,o),y(Vo.$$.fragment,o),y(Wr.$$.fragment,o),y(Ur.$$.fragment,o),y(Xr.$$.fragment,o),y(Ro.$$.fragment,o),y(Go.$$.fragment,o),y(Yr.$$.fragment,o),y(Zr.$$.fragment,o),y(ia.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),Pp=!1},d(o){t(d),o&&t(_),o&&t(m),T(l),o&&t(Dc),o&&t(He),T(yn),o&&t(Wc),o&&t(Nt),o&&t(Uc),o&&t(fa),o&&t(Qc),o&&t(ga),o&&t(Hc),o&&t(ua),o&&t(Vc),o&&t(H),o&&t(Jc),o&&t(Ie),o&&t(Rc),o&&t(Ve),T(En),o&&t(Gc),o&&t(j),T(Pn),T(Dt),T(An),T(In),T(Sn),o&&t(Kc),o&&t(Ge),T(Nn),o&&t(Xc),o&&t(C),T(On),T(Qn),T(Vn),T(Rn),T(Gn),o&&t(Yc),o&&t(Xe),T(Kn),o&&t(Zc),o&&t(V),T(Xn),T(Zn),T(ts),T(Yt),T(os),o&&t(ep),o&&t(Ye),T(ss),o&&t(tp),o&&t(Ze),T(rs),o&&t(op),o&&t(et),T(is),o&&t(np),o&&t(J),T(ls),T(ms),T(oo),T(no),o&&t(sp),o&&t(ot),T(fs),o&&t(rp),o&&t(nt),T(gs),T(us),T(ro),T(ao),o&&t(ap),o&&t(rt),T(_s),o&&t(ip),o&&t(qe),T(bs),T(Bs),T(lo),T(co),o&&t(lp),o&&t(lt),T(vs),o&&t(dp),o&&t(ze),T($s),T(ys),T(ho),T(mo),T(fo),o&&t(cp),o&&t(pt),T(Ts),o&&t(pp),o&&t(ce),T(xs),T(zs),T(uo),T(_o),T(bo),T(ko),T(Bo),o&&t(hp),o&&t(mt),T(Ms),o&&t(mp),o&&t(pe),T(Es),T(Cs),T($o),T(wo),o&&t(fp),o&&t(gt),T(As),o&&t(gp),o&&t(he),T(Ls),T(Ns),T(To),T(xo),T(Fo),o&&t(up),o&&t(_t),T(Os),o&&t(_p),o&&t(me),T(Ds),T(Qs),T(zo),T(Mo),T(Eo),o&&t(bp),o&&t(Bt),T(Hs),o&&t(kp),o&&t(A),T(Vs),T(er),T(jo),T(Co),o&&t(Bp),o&&t($t),T(tr),o&&t(vp),o&&t(L),T(or),T(cr),T(Lo),T(Io),o&&t($p),o&&t(Tt),T(pr),o&&t(wp),o&&t(I),T(hr),T(vr),T(No),T(Oo),o&&t(yp),o&&t(Ft),T($r),o&&t(Tp),o&&t(S),T(wr),T(Er),T(Wo),T(Uo),o&&t(xp),o&&t(zt),T(Pr),o&&t(Fp),o&&t(N),T(jr),T(Dr),T(Ho),T(Vo),o&&t(qp),o&&t(Et),T(Wr),o&&t(zp),o&&t(O),T(Ur),T(Xr),T(Ro),T(Go),o&&t(Mp),o&&t(jt),T(Yr),o&&t(Ep),o&&t(D),T(Zr),T(ia),T(Xo),T(Yo)}}}const q2={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function z2(x){return WT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class L2 extends ST{constructor(d){super();NT(this,d,z2,F2,OT,{})}}export{L2 as default,q2 as metadata};
