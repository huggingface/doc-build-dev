import{S as Gc,i as Yc,s as Xc,e as o,k as p,w,t as i,M as Kc,c as s,d as t,m as h,a,x as $,h as l,b as m,F as e,g as k,y as C,q as v,o as y,B as T,v as Zc,L as J}from"../../chunks/vendor-6b77c823.js";import{T as Yo}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-1088f2fb.js";import{C as S}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Y}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as V}from"../../chunks/ExampleCodeBlock-5212b321.js";function ed(q){let c,_,d,u,b;return u=new S({props:{code:`from transformers import CanineModel, CanineConfig

# Initializing a CANINE google/canine-s style configuration
configuration = CanineConfig()

# Initializing a model from the google/canine-s style configuration
model = CanineModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineModel, CanineConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CANINE google/canine-s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CanineConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the google/canine-s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=o("p"),_=i("Example:"),d=p(),w(u.$$.fragment)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Example:"),g.forEach(t),d=h(r),$(u.$$.fragment,r)},m(r,g){k(r,c,g),e(c,_),k(r,d,g),C(u,r,g),b=!0},p:J,i(r){b||(v(u.$$.fragment,r),b=!0)},o(r){y(u.$$.fragment,r),b=!1},d(r){r&&t(c),r&&t(d),T(u,r)}}}function nd(q){let c,_;return c=new S({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){w(c.$$.fragment)},l(d){$(c.$$.fragment,d)},m(d,u){C(c,d,u),_=!0},p:J,i(d){_||(v(c.$$.fragment,d),_=!0)},o(d){y(c.$$.fragment,d),_=!1},d(d){T(c,d)}}}function td(q){let c,_,d,u,b;return{c(){c=o("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),u=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var z=a(d);u=l(z,"Module"),z.forEach(t),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(r,g){k(r,c,g),e(c,_),e(c,d),e(d,u),e(c,b)},d(r){r&&t(c)}}}function od(q){let c,_,d,u,b;return u=new S({props:{code:`from transformers import CanineTokenizer, CanineModel
import torch

tokenizer = CanineTokenizer.from_pretrained("google/canine-s")
model = CanineModel.from_pretrained("google/canine-s")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineTokenizer, CanineModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CanineTokenizer.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineModel.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=o("p"),_=i("Example:"),d=p(),w(u.$$.fragment)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Example:"),g.forEach(t),d=h(r),$(u.$$.fragment,r)},m(r,g){k(r,c,g),e(c,_),k(r,d,g),C(u,r,g),b=!0},p:J,i(r){b||(v(u.$$.fragment,r),b=!0)},o(r){y(u.$$.fragment,r),b=!1},d(r){r&&t(c),r&&t(d),T(u,r)}}}function sd(q){let c,_,d,u,b;return{c(){c=o("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),u=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var z=a(d);u=l(z,"Module"),z.forEach(t),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(r,g){k(r,c,g),e(c,_),e(c,d),e(d,u),e(c,b)},d(r){r&&t(c)}}}function ad(q){let c,_,d,u,b;return u=new S({props:{code:`import torch
from transformers import CanineTokenizer, CanineForSequenceClassification

tokenizer = CanineTokenizer.from_pretrained("google/canine-s")
model = CanineForSequenceClassification.from_pretrained("google/canine-s")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineTokenizer, CanineForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CanineTokenizer.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){c=o("p"),_=i("Example of single-label classification:"),d=p(),w(u.$$.fragment)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Example of single-label classification:"),g.forEach(t),d=h(r),$(u.$$.fragment,r)},m(r,g){k(r,c,g),e(c,_),k(r,d,g),C(u,r,g),b=!0},p:J,i(r){b||(v(u.$$.fragment,r),b=!0)},o(r){y(u.$$.fragment,r),b=!1},d(r){r&&t(c),r&&t(d),T(u,r)}}}function rd(q){let c,_;return c=new S({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CanineForSequenceClassification.from_pretrained("google/canine-s", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(c.$$.fragment)},l(d){$(c.$$.fragment,d)},m(d,u){C(c,d,u),_=!0},p:J,i(d){_||(v(c.$$.fragment,d),_=!0)},o(d){y(c.$$.fragment,d),_=!1},d(d){T(c,d)}}}function id(q){let c,_,d,u,b;return u=new S({props:{code:`import torch
from transformers import CanineTokenizer, CanineForSequenceClassification

tokenizer = CanineTokenizer.from_pretrained("google/canine-s")
model = CanineForSequenceClassification.from_pretrained("google/canine-s", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineTokenizer, CanineForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CanineTokenizer.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){c=o("p"),_=i("Example of multi-label classification:"),d=p(),w(u.$$.fragment)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Example of multi-label classification:"),g.forEach(t),d=h(r),$(u.$$.fragment,r)},m(r,g){k(r,c,g),e(c,_),k(r,d,g),C(u,r,g),b=!0},p:J,i(r){b||(v(u.$$.fragment,r),b=!0)},o(r){y(u.$$.fragment,r),b=!1},d(r){r&&t(c),r&&t(d),T(u,r)}}}function ld(q){let c,_;return c=new S({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CanineForSequenceClassification.from_pretrained("google/canine-s", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(c.$$.fragment)},l(d){$(c.$$.fragment,d)},m(d,u){C(c,d,u),_=!0},p:J,i(d){_||(v(c.$$.fragment,d),_=!0)},o(d){y(c.$$.fragment,d),_=!1},d(d){T(c,d)}}}function cd(q){let c,_,d,u,b;return{c(){c=o("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),u=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var z=a(d);u=l(z,"Module"),z.forEach(t),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(r,g){k(r,c,g),e(c,_),e(c,d),e(d,u),e(c,b)},d(r){r&&t(c)}}}function dd(q){let c,_,d,u,b;return u=new S({props:{code:`from transformers import CanineTokenizer, CanineForMultipleChoice
import torch

tokenizer = CanineTokenizer.from_pretrained("google/canine-s")
model = CanineForMultipleChoice.from_pretrained("google/canine-s")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineTokenizer, CanineForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CanineTokenizer.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=o("p"),_=i("Example:"),d=p(),w(u.$$.fragment)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Example:"),g.forEach(t),d=h(r),$(u.$$.fragment,r)},m(r,g){k(r,c,g),e(c,_),k(r,d,g),C(u,r,g),b=!0},p:J,i(r){b||(v(u.$$.fragment,r),b=!0)},o(r){y(u.$$.fragment,r),b=!1},d(r){r&&t(c),r&&t(d),T(u,r)}}}function pd(q){let c,_,d,u,b;return{c(){c=o("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),u=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var z=a(d);u=l(z,"Module"),z.forEach(t),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(r,g){k(r,c,g),e(c,_),e(c,d),e(d,u),e(c,b)},d(r){r&&t(c)}}}function hd(q){let c,_,d,u,b;return u=new S({props:{code:`from transformers import CanineTokenizer, CanineForTokenClassification
import torch

tokenizer = CanineTokenizer.from_pretrained("google/canine-s")
model = CanineForTokenClassification.from_pretrained("google/canine-s")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineTokenizer, CanineForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CanineTokenizer.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)

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
`}}),{c(){c=o("p"),_=i("Example:"),d=p(),w(u.$$.fragment)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Example:"),g.forEach(t),d=h(r),$(u.$$.fragment,r)},m(r,g){k(r,c,g),e(c,_),k(r,d,g),C(u,r,g),b=!0},p:J,i(r){b||(v(u.$$.fragment,r),b=!0)},o(r){y(u.$$.fragment,r),b=!1},d(r){r&&t(c),r&&t(d),T(u,r)}}}function md(q){let c,_;return c=new S({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(c.$$.fragment)},l(d){$(c.$$.fragment,d)},m(d,u){C(c,d,u),_=!0},p:J,i(d){_||(v(c.$$.fragment,d),_=!0)},o(d){y(c.$$.fragment,d),_=!1},d(d){T(c,d)}}}function fd(q){let c,_,d,u,b;return{c(){c=o("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),u=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=s(g,"CODE",{});var z=a(d);u=l(z,"Module"),z.forEach(t),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(r,g){k(r,c,g),e(c,_),e(c,d),e(d,u),e(c,b)},d(r){r&&t(c)}}}function ud(q){let c,_,d,u,b;return u=new S({props:{code:`from transformers import CanineTokenizer, CanineForQuestionAnswering
import torch

tokenizer = CanineTokenizer.from_pretrained("google/canine-s")
model = CanineForQuestionAnswering.from_pretrained("google/canine-s")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineTokenizer, CanineForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CanineTokenizer.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/canine-s&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){c=o("p"),_=i("Example:"),d=p(),w(u.$$.fragment)},l(r){c=s(r,"P",{});var g=a(c);_=l(g,"Example:"),g.forEach(t),d=h(r),$(u.$$.fragment,r)},m(r,g){k(r,c,g),e(c,_),k(r,d,g),C(u,r,g),b=!0},p:J,i(r){b||(v(u.$$.fragment,r),b=!0)},o(r){y(u.$$.fragment,r),b=!1},d(r){r&&t(c),r&&t(d),T(u,r)}}}function gd(q){let c,_;return c=new S({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(c.$$.fragment)},l(d){$(c.$$.fragment,d)},m(d,u){C(c,d,u),_=!0},p:J,i(d){_||(v(c.$$.fragment,d),_=!0)},o(d){y(c.$$.fragment,d),_=!1},d(d){T(c,d)}}}function _d(q){let c,_,d,u,b,r,g,z,Rs,Xo,te,Ce,Lt,rn,Vs,Ot,Js,Ko,ve,Gs,ln,Ys,Xs,Zo,st,Ks,es,at,Wt,Zs,ns,rt,ea,ts,j,Qt,Ht,na,ta,Bt,cn,oa,it,sa,aa,ra,Ut,Rt,ia,la,Vt,Jt,ca,da,Gt,lt,dn,pa,ha,ma,Yt,ct,pn,fa,ua,os,X,ga,hn,_a,ka,mn,ba,wa,ss,oe,ye,Xt,fn,$a,Kt,Ca,as,dt,va,rs,un,is,pt,ya,ls,gn,cs,se,Te,Zt,_n,Ta,eo,qa,ds,ae,kn,za,D,Ea,ht,xa,ja,mt,Fa,Ma,no,Pa,Na,to,Aa,Ia,ps,re,qe,oo,bn,Sa,so,Da,hs,L,wn,La,ie,Oa,ft,Wa,Qa,$n,Ha,Ba,Ua,le,Ra,ut,Va,Ja,gt,Ga,Ya,Xa,ze,ms,ce,Ee,ao,Cn,Ka,ro,Za,fs,E,vn,er,io,nr,tr,xe,_t,or,sr,kt,ar,rr,ir,yn,lr,bt,cr,dr,pr,K,Tn,hr,lo,mr,fr,qn,wt,ur,co,gr,_r,$t,kr,po,br,wr,je,zn,$r,En,Cr,ho,vr,yr,Tr,B,xn,qr,mo,zr,Er,Fe,xr,de,jr,fo,Fr,Mr,uo,Pr,Nr,us,pe,Me,go,jn,Ar,_o,Ir,gs,G,Fn,Sr,Mn,Dr,Pn,Lr,Or,Wr,U,Nn,Qr,he,Hr,Ct,Br,Ur,ko,Rr,Vr,Jr,Pe,Gr,Ne,_s,me,Ae,bo,An,Yr,wo,Xr,ks,O,In,Kr,$o,Zr,ei,Sn,ni,Dn,ti,oi,si,x,Ln,ai,fe,ri,vt,ii,li,Co,ci,di,pi,Ie,hi,Se,mi,De,fi,Le,ui,Oe,bs,ue,We,vo,On,gi,yo,_i,ws,W,Wn,ki,To,bi,wi,Qn,$i,Hn,Ci,vi,yi,R,Bn,Ti,ge,qi,yt,zi,Ei,qo,xi,ji,Fi,Qe,Mi,He,$s,_e,Be,zo,Un,Pi,Eo,Ni,Cs,Q,Rn,Ai,xo,Ii,Si,Vn,Di,Jn,Li,Oi,Wi,P,Gn,Qi,ke,Hi,Tt,Bi,Ui,jo,Ri,Vi,Ji,Ue,Gi,Re,Yi,Ve,vs,be,Je,Fo,Yn,Xi,Mo,Ki,ys,H,Xn,Zi,we,el,Po,nl,tl,No,ol,sl,al,Kn,rl,Zn,il,ll,cl,N,et,dl,$e,pl,qt,hl,ml,Ao,fl,ul,gl,Ge,_l,Ye,kl,Xe,Ts;return r=new Y({}),rn=new Y({}),fn=new Y({}),un=new S({props:{code:`from transformers import CanineModel
import torch

model = CanineModel.from_pretrained("google/canine-c")  # model pre-trained with autoregressive character loss

text = "hello world"
# use Python's built-in ord() function to turn each character into its unicode code point id
input_ids = torch.tensor([[ord(char) for char in text]])

outputs = model(input_ids)  # forward pass
pooled_output = outputs.pooler_output
sequence_output = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineModel.from_pretrained(<span class="hljs-string">&quot;google/canine-c&quot;</span>)  <span class="hljs-comment"># model pre-trained with autoregressive character loss</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use Python&#x27;s built-in ord() function to turn each character into its unicode code point id</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([[<span class="hljs-built_in">ord</span>(char) <span class="hljs-keyword">for</span> char <span class="hljs-keyword">in</span> text]])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)  <span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state`}}),gn=new S({props:{code:`from transformers import CanineTokenizer, CanineModel

model = CanineModel.from_pretrained("google/canine-c")
tokenizer = CanineTokenizer.from_pretrained("google/canine-c")

inputs = ["Life is like a box of chocolates.", "You never know what you gonna get."]
encoding = tokenizer(inputs, padding="longest", truncation=True, return_tensors="pt")

outputs = model(**encoding)  # forward pass
pooled_output = outputs.pooler_output
sequence_output = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CanineTokenizer, CanineModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CanineModel.from_pretrained(<span class="hljs-string">&quot;google/canine-c&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CanineTokenizer.from_pretrained(<span class="hljs-string">&quot;google/canine-c&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = [<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>, <span class="hljs-string">&quot;You never know what you gonna get.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(inputs, padding=<span class="hljs-string">&quot;longest&quot;</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)  <span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state`}}),_n=new Y({}),kn=new F({props:{name:"class transformers.models.canine.modeling_canine.CanineModelOutputWithPooling",anchor:"transformers.models.canine.modeling_canine.CanineModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.canine.modeling_canine.CanineModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model (i.e. the output of the final
shallow Transformer encoder).`,name:"last_hidden_state"},{anchor:"transformers.models.canine.modeling_canine.CanineModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Hidden-state of the first token of the sequence (classification token) at the last layer of the deep
Transformer encoder, further processed by a Linear layer and a Tanh activation function. The Linear layer
weights are trained from the next sentence prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.canine.modeling_canine.CanineModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the input to each encoder + one for the output of each layer of each
encoder) of shape <code>(batch_size, sequence_length, hidden_size)</code> and <code>(batch_size, sequence_length // config.downsampling_rate, hidden_size)</code>. Hidden-states of the model at the output of each layer plus the
initial input to each Transformer encoder. The hidden states of the shallow encoders have length
<code>sequence_length</code>, but the hidden states of the deep encoder have length <code>sequence_length</code> //
<code>config.downsampling_rate</code>.`,name:"hidden_states"},{anchor:"transformers.models.canine.modeling_canine.CanineModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of the 3 Transformer encoders of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code> and <code>(batch_size, num_heads, sequence_length // config.downsampling_rate, sequence_length // config.downsampling_rate)</code>. Attentions weights after the
attention softmax, used to compute the weighted average in the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L65"}}),bn=new Y({}),wn=new F({props:{name:"class transformers.CanineConfig",anchor:"transformers.CanineConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 16384"},{name:"type_vocab_size",val:" = 16"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 57344"},{name:"eos_token_id",val:" = 57345"},{name:"downsampling_rate",val:" = 4"},{name:"upsampling_kernel_size",val:" = 4"},{name:"num_hash_functions",val:" = 8"},{name:"num_hash_buckets",val:" = 16384"},{name:"local_transformer_stride",val:" = 128"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CanineConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CanineConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the deep Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CanineConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoders.`,name:"num_attention_heads"},{anchor:"transformers.CanineConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoders.`,name:"intermediate_size"},{anchor:"transformers.CanineConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.CanineConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoders, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.CanineConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.CanineConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that this model might ever be used with.`,name:"max_position_embeddings"},{anchor:"transformers.CanineConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineModel">CanineModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.CanineConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CanineConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.CanineConfig.downsampling_rate",description:`<strong>downsampling_rate</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The rate at which to downsample the original character sequence length before applying the deep Transformer
encoder.`,name:"downsampling_rate"},{anchor:"transformers.CanineConfig.upsampling_kernel_size",description:`<strong>upsampling_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The kernel size (i.e. the number of characters in each window) of the convolutional projection layer when
projecting back from <code>hidden_size</code>*2 to <code>hidden_size</code>.`,name:"upsampling_kernel_size"},{anchor:"transformers.CanineConfig.num_hash_functions",description:`<strong>num_hash_functions</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
The number of hash functions to use. Each hash function has its own embedding matrix.`,name:"num_hash_functions"},{anchor:"transformers.CanineConfig.num_hash_buckets",description:`<strong>num_hash_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The number of hash buckets to use.`,name:"num_hash_buckets"},{anchor:"transformers.CanineConfig.local_transformer_stride",description:`<strong>local_transformer_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The stride of the local attention of the first shallow Transformer encoder. Defaults to 128 for good
TPU/XLA memory alignment.`,name:"local_transformer_stride"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/configuration_canine.py#L29"}}),ze=new V({props:{anchor:"transformers.CanineConfig.example",$$slots:{default:[ed]},$$scope:{ctx:q}}}),Cn=new Y({}),vn=new F({props:{name:"class transformers.CanineTokenizer",anchor:"transformers.CanineTokenizer",parameters:[{name:"bos_token",val:" = '\\ue000'"},{name:"eos_token",val:" = '\\ue001'"},{name:"sep_token",val:" = '\\ue001'"},{name:"cls_token",val:" = '\\ue000'"},{name:"pad_token",val:" = '\\x00'"},{name:"mask_token",val:" = '\\ue003'"},{name:"add_prefix_space",val:" = False"},{name:"model_max_length",val:" = 2048"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CanineTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sentence length the model accepts.`,name:"model_max_length"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/tokenization_canine.py#L63"}}),Tn=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CanineTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CanineTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CanineTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/tokenization_canine.py#L155",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zn=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.CanineTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CanineTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CanineTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CanineTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/tokenization_canine.py#L182",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CanineTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CanineTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CanineTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/tokenization_canine.py#L210",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fe=new V({props:{anchor:"transformers.CanineTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[nd]},$$scope:{ctx:q}}}),jn=new Y({}),Fn=new F({props:{name:"class transformers.CanineModel",anchor:"transformers.CanineModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.CanineModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig">CanineConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L986"}}),Nn=new F({props:{name:"forward",anchor:"transformers.CanineModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.CanineModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineTokenizer">CanineTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CanineModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CanineModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CanineModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CanineModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CanineModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CanineModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CanineModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CanineModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1094",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.models.canine.modeling_canine.CanineModelOutputWithPooling"
>transformers.models.canine.modeling_canine.CanineModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig"
>CanineConfig</a>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model (i.e. the output of the final
shallow Transformer encoder).</li>
<li><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Hidden-state of the first token of the sequence (classification token) at the last layer of the deep
Transformer encoder, further processed by a Linear layer and a Tanh activation function. The Linear layer
weights are trained from the next sentence prediction (classification) objective during pretraining.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the input to each encoder + one for the output of each layer of each
encoder) of shape <code>(batch_size, sequence_length, hidden_size)</code> and <code>(batch_size, sequence_length // config.downsampling_rate, hidden_size)</code>. Hidden-states of the model at the output of each layer plus the
initial input to each Transformer encoder. The hidden states of the shallow encoders have length
<code>sequence_length</code>, but the hidden states of the deep encoder have length <code>sequence_length</code> //
<code>config.downsampling_rate</code>.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of the 3 Transformer encoders of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code> and <code>(batch_size, num_heads, sequence_length // config.downsampling_rate, sequence_length // config.downsampling_rate)</code>. Attentions weights after the
attention softmax, used to compute the weighted average in the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.models.canine.modeling_canine.CanineModelOutputWithPooling"
>transformers.models.canine.modeling_canine.CanineModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new Yo({props:{$$slots:{default:[td]},$$scope:{ctx:q}}}),Ne=new V({props:{anchor:"transformers.CanineModel.forward.example",$$slots:{default:[od]},$$scope:{ctx:q}}}),An=new Y({}),In=new F({props:{name:"class transformers.CanineForSequenceClassification",anchor:"transformers.CanineForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CanineForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig">CanineConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1264"}}),Ln=new F({props:{name:"forward",anchor:"transformers.CanineForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.CanineForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineTokenizer">CanineTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CanineForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CanineForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CanineForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CanineForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CanineForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CanineForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CanineForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CanineForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CanineForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1276",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig"
>CanineConfig</a>) and inputs.</p>
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
`}}),Ie=new Yo({props:{$$slots:{default:[sd]},$$scope:{ctx:q}}}),Se=new V({props:{anchor:"transformers.CanineForSequenceClassification.forward.example",$$slots:{default:[ad]},$$scope:{ctx:q}}}),De=new V({props:{anchor:"transformers.CanineForSequenceClassification.forward.example-2",$$slots:{default:[rd]},$$scope:{ctx:q}}}),Le=new V({props:{anchor:"transformers.CanineForSequenceClassification.forward.example-3",$$slots:{default:[id]},$$scope:{ctx:q}}}),Oe=new V({props:{anchor:"transformers.CanineForSequenceClassification.forward.example-4",$$slots:{default:[ld]},$$scope:{ctx:q}}}),On=new Y({}),Wn=new F({props:{name:"class transformers.CanineForMultipleChoice",anchor:"transformers.CanineForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CanineForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig">CanineConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1362"}}),Bn=new F({props:{name:"forward",anchor:"transformers.CanineForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.CanineForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineTokenizer">CanineTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CanineForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CanineForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CanineForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CanineForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CanineForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CanineForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CanineForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CanineForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CanineForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1373",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig"
>CanineConfig</a>) and inputs.</p>
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
`}}),Qe=new Yo({props:{$$slots:{default:[cd]},$$scope:{ctx:q}}}),He=new V({props:{anchor:"transformers.CanineForMultipleChoice.forward.example",$$slots:{default:[dd]},$$scope:{ctx:q}}}),Un=new Y({}),Rn=new F({props:{name:"class transformers.CanineForTokenClassification",anchor:"transformers.CanineForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CanineForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig">CanineConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1454"}}),Gn=new F({props:{name:"forward",anchor:"transformers.CanineForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.CanineForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineTokenizer">CanineTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CanineForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CanineForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CanineForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CanineForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CanineForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CanineForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CanineForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CanineForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CanineForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1466",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig"
>CanineConfig</a>) and inputs.</p>
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
`}}),Ue=new Yo({props:{$$slots:{default:[pd]},$$scope:{ctx:q}}}),Re=new V({props:{anchor:"transformers.CanineForTokenClassification.forward.example",$$slots:{default:[hd]},$$scope:{ctx:q}}}),Ve=new V({props:{anchor:"transformers.CanineForTokenClassification.forward.example-2",$$slots:{default:[md]},$$scope:{ctx:q}}}),Yn=new Y({}),Xn=new F({props:{name:"class transformers.CanineForQuestionAnswering",anchor:"transformers.CanineForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CanineForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig">CanineConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1533"}}),et=new F({props:{name:"forward",anchor:"transformers.CanineForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.CanineForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineTokenizer">CanineTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CanineForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CanineForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CanineForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CanineForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CanineForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CanineForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CanineForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CanineForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CanineForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.CanineForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/canine/modeling_canine.py#L1544",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineConfig"
>CanineConfig</a>) and inputs.</p>
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
`}}),Ge=new Yo({props:{$$slots:{default:[fd]},$$scope:{ctx:q}}}),Ye=new V({props:{anchor:"transformers.CanineForQuestionAnswering.forward.example",$$slots:{default:[ud]},$$scope:{ctx:q}}}),Xe=new V({props:{anchor:"transformers.CanineForQuestionAnswering.forward.example-2",$$slots:{default:[gd]},$$scope:{ctx:q}}}),{c(){c=o("meta"),_=p(),d=o("h1"),u=o("a"),b=o("span"),w(r.$$.fragment),g=p(),z=o("span"),Rs=i("CANINE"),Xo=p(),te=o("h2"),Ce=o("a"),Lt=o("span"),w(rn.$$.fragment),Vs=p(),Ot=o("span"),Js=i("Overview"),Ko=p(),ve=o("p"),Gs=i("The CANINE model was proposed in "),ln=o("a"),Ys=i(`CANINE: Pre-training an Efficient Tokenization-Free Encoder for Language
Representation`),Xs=i(` by Jonathan H. Clark, Dan Garrette, Iulia Turc, John Wieting. It\u2019s
among the first papers that trains a Transformer without using an explicit tokenization step (such as Byte Pair
Encoding (BPE), WordPiece or SentencePiece). Instead, the model is trained directly at a Unicode character-level.
Training at a character-level inevitably comes with a longer sequence length, which CANINE solves with an efficient
downsampling strategy, before applying a deep Transformer encoder.`),Zo=p(),st=o("p"),Ks=i("The abstract from the paper is the following:"),es=p(),at=o("p"),Wt=o("em"),Zs=i(`Pipelined NLP systems have largely been superseded by end-to-end neural modeling, yet nearly all commonly-used models
still require an explicit tokenization step. While recent tokenization approaches based on data-derived subword
lexicons are less brittle than manually engineered tokenizers, these techniques are not equally suited to all
languages, and the use of any fixed vocabulary may limit a model\u2019s ability to adapt. In this paper, we present CANINE,
a neural encoder that operates directly on character sequences, without explicit tokenization or vocabulary, and a
pre-training strategy that operates either directly on characters or optionally uses subwords as a soft inductive bias.
To use its finer-grained input effectively and efficiently, CANINE combines downsampling, which reduces the input
sequence length, with a deep transformer stack, which encodes context. CANINE outperforms a comparable mBERT model by
2.8 F1 on TyDi QA, a challenging multilingual benchmark, despite having 28% fewer model parameters.`),ns=p(),rt=o("p"),ea=i("Tips:"),ts=p(),j=o("ul"),Qt=o("li"),Ht=o("p"),na=i(`CANINE uses no less than 3 Transformer encoders internally: 2 \u201Cshallow\u201D encoders (which only consist of a single
layer) and 1 \u201Cdeep\u201D encoder (which is a regular BERT encoder). First, a \u201Cshallow\u201D encoder is used to contextualize
the character embeddings, using local attention. Next, after downsampling, a \u201Cdeep\u201D encoder is applied. Finally,
after upsampling, a \u201Cshallow\u201D encoder is used to create the final character embeddings. Details regarding up- and
downsampling can be found in the paper.`),ta=p(),Bt=o("li"),cn=o("p"),oa=i("CANINE uses a max sequence length of 2048 characters by default. One can use "),it=o("a"),sa=i("CanineTokenizer"),aa=i(`
to prepare text for the model.`),ra=p(),Ut=o("li"),Rt=o("p"),ia=i(`Classification can be done by placing a linear layer on top of the final hidden state of the special [CLS] token
(which has a predefined Unicode code point). For token classification tasks however, the downsampled sequence of
tokens needs to be upsampled again to match the length of the original character sequence (which is 2048). The
details for this can be found in the paper.`),la=p(),Vt=o("li"),Jt=o("p"),ca=i("Models:"),da=p(),Gt=o("li"),lt=o("p"),dn=o("a"),pa=i("google/canine-c"),ha=i(`: Pre-trained with autoregressive character loss,
12-layer, 768-hidden, 12-heads, 121M parameters (size ~500 MB).`),ma=p(),Yt=o("li"),ct=o("p"),pn=o("a"),fa=i("google/canine-s"),ua=i(`: Pre-trained with subword loss, 12-layer,
768-hidden, 12-heads, 121M parameters (size ~500 MB).`),os=p(),X=o("p"),ga=i("This model was contributed by "),hn=o("a"),_a=i("nielsr"),ka=i(". The original code can be found "),mn=o("a"),ba=i("here"),wa=i("."),ss=p(),oe=o("h3"),ye=o("a"),Xt=o("span"),w(fn.$$.fragment),$a=p(),Kt=o("span"),Ca=i("Example"),as=p(),dt=o("p"),va=i("CANINE works on raw characters, so it can be used without a tokenizer:"),rs=p(),w(un.$$.fragment),is=p(),pt=o("p"),ya=i(`For batched inference and training, it is however recommended to make use of the tokenizer (to pad/truncate all
sequences to the same length):`),ls=p(),w(gn.$$.fragment),cs=p(),se=o("h2"),Te=o("a"),Zt=o("span"),w(_n.$$.fragment),Ta=p(),eo=o("span"),qa=i("CANINE specific outputs"),ds=p(),ae=o("div"),w(kn.$$.fragment),za=p(),D=o("p"),Ea=i("Output type of "),ht=o("a"),xa=i("CanineModel"),ja=i(". Based on "),mt=o("a"),Fa=i("BaseModelOutputWithPooling"),Ma=i(`, but with slightly
different `),no=o("code"),Pa=i("hidden_states"),Na=i(" and "),to=o("code"),Aa=i("attentions"),Ia=i(`, as these also include the hidden states and attentions of the shallow
Transformer encoders.`),ps=p(),re=o("h2"),qe=o("a"),oo=o("span"),w(bn.$$.fragment),Sa=p(),so=o("span"),Da=i("CanineConfig"),hs=p(),L=o("div"),w(wn.$$.fragment),La=p(),ie=o("p"),Oa=i("This is the configuration class to store the configuration of a "),ft=o("a"),Wa=i("CanineModel"),Qa=i(`. It is used to instantiate an
CANINE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the CANINE
`),$n=o("a"),Ha=i("google/canine-s"),Ba=i(" architecture."),Ua=p(),le=o("p"),Ra=i("Configuration objects inherit from "),ut=o("a"),Va=i("PretrainedConfig"),Ja=i(` and can be used to control the model outputs. Read the
documentation from `),gt=o("a"),Ga=i("PretrainedConfig"),Ya=i(" for more information."),Xa=p(),w(ze.$$.fragment),ms=p(),ce=o("h2"),Ee=o("a"),ao=o("span"),w(Cn.$$.fragment),Ka=p(),ro=o("span"),Za=i("CanineTokenizer"),fs=p(),E=o("div"),w(vn.$$.fragment),er=p(),io=o("p"),nr=i(`Construct a CANINE tokenizer (i.e. a character splitter). It turns text into a sequence of characters, and then
converts each character into its Unicode code point.`),tr=p(),xe=o("p"),_t=o("a"),or=i("CanineTokenizer"),sr=i(" inherits from "),kt=o("a"),ar=i("PreTrainedTokenizer"),rr=i("."),ir=p(),yn=o("p"),lr=i("Refer to superclass "),bt=o("a"),cr=i("PreTrainedTokenizer"),dr=i(" for usage examples and documentation concerning parameters."),pr=p(),K=o("div"),w(Tn.$$.fragment),hr=p(),lo=o("p"),mr=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CANINE sequence has the following format:`),fr=p(),qn=o("ul"),wt=o("li"),ur=i("single sequence: "),co=o("code"),gr=i("[CLS] X [SEP]"),_r=p(),$t=o("li"),kr=i("pair of sequences: "),po=o("code"),br=i("[CLS] A [SEP] B [SEP]"),wr=p(),je=o("div"),w(zn.$$.fragment),$r=p(),En=o("p"),Cr=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ho=o("code"),vr=i("prepare_for_model"),yr=i(" method."),Tr=p(),B=o("div"),w(xn.$$.fragment),qr=p(),mo=o("p"),zr=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A CANINE
sequence pair mask has the following format:`),Er=p(),w(Fe.$$.fragment),xr=p(),de=o("p"),jr=i("If "),fo=o("code"),Fr=i("token_ids_1"),Mr=i(" is "),uo=o("code"),Pr=i("None"),Nr=i(", this method only returns the first portion of the mask (0s)."),us=p(),pe=o("h2"),Me=o("a"),go=o("span"),w(jn.$$.fragment),Ar=p(),_o=o("span"),Ir=i("CanineModel"),gs=p(),G=o("div"),w(Fn.$$.fragment),Sr=p(),Mn=o("p"),Dr=i(`The bare CANINE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Pn=o("a"),Lr=i("torch.nn.Module"),Or=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wr=p(),U=o("div"),w(Nn.$$.fragment),Qr=p(),he=o("p"),Hr=i("The "),Ct=o("a"),Br=i("CanineModel"),Ur=i(" forward method, overrides the "),ko=o("code"),Rr=i("__call__"),Vr=i(" special method."),Jr=p(),w(Pe.$$.fragment),Gr=p(),w(Ne.$$.fragment),_s=p(),me=o("h2"),Ae=o("a"),bo=o("span"),w(An.$$.fragment),Yr=p(),wo=o("span"),Xr=i("CanineForSequenceClassification"),ks=p(),O=o("div"),w(In.$$.fragment),Kr=p(),$o=o("p"),Zr=i(`CANINE Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ei=p(),Sn=o("p"),ni=i("This model is a PyTorch "),Dn=o("a"),ti=i("torch.nn.Module"),oi=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),si=p(),x=o("div"),w(Ln.$$.fragment),ai=p(),fe=o("p"),ri=i("The "),vt=o("a"),ii=i("CanineForSequenceClassification"),li=i(" forward method, overrides the "),Co=o("code"),ci=i("__call__"),di=i(" special method."),pi=p(),w(Ie.$$.fragment),hi=p(),w(Se.$$.fragment),mi=p(),w(De.$$.fragment),fi=p(),w(Le.$$.fragment),ui=p(),w(Oe.$$.fragment),bs=p(),ue=o("h2"),We=o("a"),vo=o("span"),w(On.$$.fragment),gi=p(),yo=o("span"),_i=i("CanineForMultipleChoice"),ws=p(),W=o("div"),w(Wn.$$.fragment),ki=p(),To=o("p"),bi=i(`CANINE Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),wi=p(),Qn=o("p"),$i=i("This model is a PyTorch "),Hn=o("a"),Ci=i("torch.nn.Module"),vi=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yi=p(),R=o("div"),w(Bn.$$.fragment),Ti=p(),ge=o("p"),qi=i("The "),yt=o("a"),zi=i("CanineForMultipleChoice"),Ei=i(" forward method, overrides the "),qo=o("code"),xi=i("__call__"),ji=i(" special method."),Fi=p(),w(Qe.$$.fragment),Mi=p(),w(He.$$.fragment),$s=p(),_e=o("h2"),Be=o("a"),zo=o("span"),w(Un.$$.fragment),Pi=p(),Eo=o("span"),Ni=i("CanineForTokenClassification"),Cs=p(),Q=o("div"),w(Rn.$$.fragment),Ai=p(),xo=o("p"),Ii=i(`CANINE Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Si=p(),Vn=o("p"),Di=i("This model is a PyTorch "),Jn=o("a"),Li=i("torch.nn.Module"),Oi=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi=p(),P=o("div"),w(Gn.$$.fragment),Qi=p(),ke=o("p"),Hi=i("The "),Tt=o("a"),Bi=i("CanineForTokenClassification"),Ui=i(" forward method, overrides the "),jo=o("code"),Ri=i("__call__"),Vi=i(" special method."),Ji=p(),w(Ue.$$.fragment),Gi=p(),w(Re.$$.fragment),Yi=p(),w(Ve.$$.fragment),vs=p(),be=o("h2"),Je=o("a"),Fo=o("span"),w(Yn.$$.fragment),Xi=p(),Mo=o("span"),Ki=i("CanineForQuestionAnswering"),ys=p(),H=o("div"),w(Xn.$$.fragment),Zi=p(),we=o("p"),el=i(`CANINE Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Po=o("code"),nl=i("span start logits"),tl=i(" and "),No=o("code"),ol=i("span end logits"),sl=i(")."),al=p(),Kn=o("p"),rl=i("This model is a PyTorch "),Zn=o("a"),il=i("torch.nn.Module"),ll=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cl=p(),N=o("div"),w(et.$$.fragment),dl=p(),$e=o("p"),pl=i("The "),qt=o("a"),hl=i("CanineForQuestionAnswering"),ml=i(" forward method, overrides the "),Ao=o("code"),fl=i("__call__"),ul=i(" special method."),gl=p(),w(Ge.$$.fragment),_l=p(),w(Ye.$$.fragment),kl=p(),w(Xe.$$.fragment),this.h()},l(n){const f=Kc('[data-svelte="svelte-1phssyn"]',document.head);c=s(f,"META",{name:!0,content:!0}),f.forEach(t),_=h(n),d=s(n,"H1",{class:!0});var nt=a(d);u=s(nt,"A",{id:!0,class:!0,href:!0});var Io=a(u);b=s(Io,"SPAN",{});var So=a(b);$(r.$$.fragment,So),So.forEach(t),Io.forEach(t),g=h(nt),z=s(nt,"SPAN",{});var Do=a(z);Rs=l(Do,"CANINE"),Do.forEach(t),nt.forEach(t),Xo=h(n),te=s(n,"H2",{class:!0});var tt=a(te);Ce=s(tt,"A",{id:!0,class:!0,href:!0});var Lo=a(Ce);Lt=s(Lo,"SPAN",{});var Oo=a(Lt);$(rn.$$.fragment,Oo),Oo.forEach(t),Lo.forEach(t),Vs=h(tt),Ot=s(tt,"SPAN",{});var Wo=a(Ot);Js=l(Wo,"Overview"),Wo.forEach(t),tt.forEach(t),Ko=h(n),ve=s(n,"P",{});var ot=a(ve);Gs=l(ot,"The CANINE model was proposed in "),ln=s(ot,"A",{href:!0,rel:!0});var Qo=a(ln);Ys=l(Qo,`CANINE: Pre-training an Efficient Tokenization-Free Encoder for Language
Representation`),Qo.forEach(t),Xs=l(ot,` by Jonathan H. Clark, Dan Garrette, Iulia Turc, John Wieting. It\u2019s
among the first papers that trains a Transformer without using an explicit tokenization step (such as Byte Pair
Encoding (BPE), WordPiece or SentencePiece). Instead, the model is trained directly at a Unicode character-level.
Training at a character-level inevitably comes with a longer sequence length, which CANINE solves with an efficient
downsampling strategy, before applying a deep Transformer encoder.`),ot.forEach(t),Zo=h(n),st=s(n,"P",{});var Ho=a(st);Ks=l(Ho,"The abstract from the paper is the following:"),Ho.forEach(t),es=h(n),at=s(n,"P",{});var Bo=a(at);Wt=s(Bo,"EM",{});var Uo=a(Wt);Zs=l(Uo,`Pipelined NLP systems have largely been superseded by end-to-end neural modeling, yet nearly all commonly-used models
still require an explicit tokenization step. While recent tokenization approaches based on data-derived subword
lexicons are less brittle than manually engineered tokenizers, these techniques are not equally suited to all
languages, and the use of any fixed vocabulary may limit a model\u2019s ability to adapt. In this paper, we present CANINE,
a neural encoder that operates directly on character sequences, without explicit tokenization or vocabulary, and a
pre-training strategy that operates either directly on characters or optionally uses subwords as a soft inductive bias.
To use its finer-grained input effectively and efficiently, CANINE combines downsampling, which reduces the input
sequence length, with a deep transformer stack, which encodes context. CANINE outperforms a comparable mBERT model by
2.8 F1 on TyDi QA, a challenging multilingual benchmark, despite having 28% fewer model parameters.`),Uo.forEach(t),Bo.forEach(t),ns=h(n),rt=s(n,"P",{});var Ro=a(rt);ea=l(Ro,"Tips:"),Ro.forEach(t),ts=h(n),j=s(n,"UL",{});var M=a(j);Qt=s(M,"LI",{});var Vo=a(Qt);Ht=s(Vo,"P",{});var Jo=a(Ht);na=l(Jo,`CANINE uses no less than 3 Transformer encoders internally: 2 \u201Cshallow\u201D encoders (which only consist of a single
layer) and 1 \u201Cdeep\u201D encoder (which is a regular BERT encoder). First, a \u201Cshallow\u201D encoder is used to contextualize
the character embeddings, using local attention. Next, after downsampling, a \u201Cdeep\u201D encoder is applied. Finally,
after upsampling, a \u201Cshallow\u201D encoder is used to create the final character embeddings. Details regarding up- and
downsampling can be found in the paper.`),Jo.forEach(t),Vo.forEach(t),ta=h(M),Bt=s(M,"LI",{});var vl=a(Bt);cn=s(vl,"P",{});var qs=a(cn);oa=l(qs,"CANINE uses a max sequence length of 2048 characters by default. One can use "),it=s(qs,"A",{href:!0});var yl=a(it);sa=l(yl,"CanineTokenizer"),yl.forEach(t),aa=l(qs,`
to prepare text for the model.`),qs.forEach(t),vl.forEach(t),ra=h(M),Ut=s(M,"LI",{});var Tl=a(Ut);Rt=s(Tl,"P",{});var ql=a(Rt);ia=l(ql,`Classification can be done by placing a linear layer on top of the final hidden state of the special [CLS] token
(which has a predefined Unicode code point). For token classification tasks however, the downsampled sequence of
tokens needs to be upsampled again to match the length of the original character sequence (which is 2048). The
details for this can be found in the paper.`),ql.forEach(t),Tl.forEach(t),la=h(M),Vt=s(M,"LI",{});var zl=a(Vt);Jt=s(zl,"P",{});var El=a(Jt);ca=l(El,"Models:"),El.forEach(t),zl.forEach(t),da=h(M),Gt=s(M,"LI",{});var xl=a(Gt);lt=s(xl,"P",{});var bl=a(lt);dn=s(bl,"A",{href:!0,rel:!0});var jl=a(dn);pa=l(jl,"google/canine-c"),jl.forEach(t),ha=l(bl,`: Pre-trained with autoregressive character loss,
12-layer, 768-hidden, 12-heads, 121M parameters (size ~500 MB).`),bl.forEach(t),xl.forEach(t),ma=h(M),Yt=s(M,"LI",{});var Fl=a(Yt);ct=s(Fl,"P",{});var wl=a(ct);pn=s(wl,"A",{href:!0,rel:!0});var Ml=a(pn);fa=l(Ml,"google/canine-s"),Ml.forEach(t),ua=l(wl,`: Pre-trained with subword loss, 12-layer,
768-hidden, 12-heads, 121M parameters (size ~500 MB).`),wl.forEach(t),Fl.forEach(t),M.forEach(t),os=h(n),X=s(n,"P",{});var zt=a(X);ga=l(zt,"This model was contributed by "),hn=s(zt,"A",{href:!0,rel:!0});var Pl=a(hn);_a=l(Pl,"nielsr"),Pl.forEach(t),ka=l(zt,". The original code can be found "),mn=s(zt,"A",{href:!0,rel:!0});var Nl=a(mn);ba=l(Nl,"here"),Nl.forEach(t),wa=l(zt,"."),zt.forEach(t),ss=h(n),oe=s(n,"H3",{class:!0});var zs=a(oe);ye=s(zs,"A",{id:!0,class:!0,href:!0});var Al=a(ye);Xt=s(Al,"SPAN",{});var Il=a(Xt);$(fn.$$.fragment,Il),Il.forEach(t),Al.forEach(t),$a=h(zs),Kt=s(zs,"SPAN",{});var Sl=a(Kt);Ca=l(Sl,"Example"),Sl.forEach(t),zs.forEach(t),as=h(n),dt=s(n,"P",{});var Dl=a(dt);va=l(Dl,"CANINE works on raw characters, so it can be used without a tokenizer:"),Dl.forEach(t),rs=h(n),$(un.$$.fragment,n),is=h(n),pt=s(n,"P",{});var Ll=a(pt);ya=l(Ll,`For batched inference and training, it is however recommended to make use of the tokenizer (to pad/truncate all
sequences to the same length):`),Ll.forEach(t),ls=h(n),$(gn.$$.fragment,n),cs=h(n),se=s(n,"H2",{class:!0});var Es=a(se);Te=s(Es,"A",{id:!0,class:!0,href:!0});var Ol=a(Te);Zt=s(Ol,"SPAN",{});var Wl=a(Zt);$(_n.$$.fragment,Wl),Wl.forEach(t),Ol.forEach(t),Ta=h(Es),eo=s(Es,"SPAN",{});var Ql=a(eo);qa=l(Ql,"CANINE specific outputs"),Ql.forEach(t),Es.forEach(t),ds=h(n),ae=s(n,"DIV",{class:!0});var xs=a(ae);$(kn.$$.fragment,xs),za=h(xs),D=s(xs,"P",{});var Z=a(D);Ea=l(Z,"Output type of "),ht=s(Z,"A",{href:!0});var Hl=a(ht);xa=l(Hl,"CanineModel"),Hl.forEach(t),ja=l(Z,". Based on "),mt=s(Z,"A",{href:!0});var Bl=a(mt);Fa=l(Bl,"BaseModelOutputWithPooling"),Bl.forEach(t),Ma=l(Z,`, but with slightly
different `),no=s(Z,"CODE",{});var Ul=a(no);Pa=l(Ul,"hidden_states"),Ul.forEach(t),Na=l(Z," and "),to=s(Z,"CODE",{});var Rl=a(to);Aa=l(Rl,"attentions"),Rl.forEach(t),Ia=l(Z,`, as these also include the hidden states and attentions of the shallow
Transformer encoders.`),Z.forEach(t),xs.forEach(t),ps=h(n),re=s(n,"H2",{class:!0});var js=a(re);qe=s(js,"A",{id:!0,class:!0,href:!0});var Vl=a(qe);oo=s(Vl,"SPAN",{});var Jl=a(oo);$(bn.$$.fragment,Jl),Jl.forEach(t),Vl.forEach(t),Sa=h(js),so=s(js,"SPAN",{});var Gl=a(so);Da=l(Gl,"CanineConfig"),Gl.forEach(t),js.forEach(t),hs=h(n),L=s(n,"DIV",{class:!0});var Ke=a(L);$(wn.$$.fragment,Ke),La=h(Ke),ie=s(Ke,"P",{});var Et=a(ie);Oa=l(Et,"This is the configuration class to store the configuration of a "),ft=s(Et,"A",{href:!0});var Yl=a(ft);Wa=l(Yl,"CanineModel"),Yl.forEach(t),Qa=l(Et,`. It is used to instantiate an
CANINE model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the CANINE
`),$n=s(Et,"A",{href:!0,rel:!0});var Xl=a($n);Ha=l(Xl,"google/canine-s"),Xl.forEach(t),Ba=l(Et," architecture."),Et.forEach(t),Ua=h(Ke),le=s(Ke,"P",{});var xt=a(le);Ra=l(xt,"Configuration objects inherit from "),ut=s(xt,"A",{href:!0});var Kl=a(ut);Va=l(Kl,"PretrainedConfig"),Kl.forEach(t),Ja=l(xt,` and can be used to control the model outputs. Read the
documentation from `),gt=s(xt,"A",{href:!0});var Zl=a(gt);Ga=l(Zl,"PretrainedConfig"),Zl.forEach(t),Ya=l(xt," for more information."),xt.forEach(t),Xa=h(Ke),$(ze.$$.fragment,Ke),Ke.forEach(t),ms=h(n),ce=s(n,"H2",{class:!0});var Fs=a(ce);Ee=s(Fs,"A",{id:!0,class:!0,href:!0});var ec=a(Ee);ao=s(ec,"SPAN",{});var nc=a(ao);$(Cn.$$.fragment,nc),nc.forEach(t),ec.forEach(t),Ka=h(Fs),ro=s(Fs,"SPAN",{});var tc=a(ro);Za=l(tc,"CanineTokenizer"),tc.forEach(t),Fs.forEach(t),fs=h(n),E=s(n,"DIV",{class:!0});var A=a(E);$(vn.$$.fragment,A),er=h(A),io=s(A,"P",{});var oc=a(io);nr=l(oc,`Construct a CANINE tokenizer (i.e. a character splitter). It turns text into a sequence of characters, and then
converts each character into its Unicode code point.`),oc.forEach(t),tr=h(A),xe=s(A,"P",{});var Go=a(xe);_t=s(Go,"A",{href:!0});var sc=a(_t);or=l(sc,"CanineTokenizer"),sc.forEach(t),sr=l(Go," inherits from "),kt=s(Go,"A",{href:!0});var ac=a(kt);ar=l(ac,"PreTrainedTokenizer"),ac.forEach(t),rr=l(Go,"."),Go.forEach(t),ir=h(A),yn=s(A,"P",{});var Ms=a(yn);lr=l(Ms,"Refer to superclass "),bt=s(Ms,"A",{href:!0});var rc=a(bt);cr=l(rc,"PreTrainedTokenizer"),rc.forEach(t),dr=l(Ms," for usage examples and documentation concerning parameters."),Ms.forEach(t),pr=h(A),K=s(A,"DIV",{class:!0});var jt=a(K);$(Tn.$$.fragment,jt),hr=h(jt),lo=s(jt,"P",{});var ic=a(lo);mr=l(ic,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CANINE sequence has the following format:`),ic.forEach(t),fr=h(jt),qn=s(jt,"UL",{});var Ps=a(qn);wt=s(Ps,"LI",{});var $l=a(wt);ur=l($l,"single sequence: "),co=s($l,"CODE",{});var lc=a(co);gr=l(lc,"[CLS] X [SEP]"),lc.forEach(t),$l.forEach(t),_r=h(Ps),$t=s(Ps,"LI",{});var Cl=a($t);kr=l(Cl,"pair of sequences: "),po=s(Cl,"CODE",{});var cc=a(po);br=l(cc,"[CLS] A [SEP] B [SEP]"),cc.forEach(t),Cl.forEach(t),Ps.forEach(t),jt.forEach(t),wr=h(A),je=s(A,"DIV",{class:!0});var Ns=a(je);$(zn.$$.fragment,Ns),$r=h(Ns),En=s(Ns,"P",{});var As=a(En);Cr=l(As,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ho=s(As,"CODE",{});var dc=a(ho);vr=l(dc,"prepare_for_model"),dc.forEach(t),yr=l(As," method."),As.forEach(t),Ns.forEach(t),Tr=h(A),B=s(A,"DIV",{class:!0});var Ze=a(B);$(xn.$$.fragment,Ze),qr=h(Ze),mo=s(Ze,"P",{});var pc=a(mo);zr=l(pc,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A CANINE
sequence pair mask has the following format:`),pc.forEach(t),Er=h(Ze),$(Fe.$$.fragment,Ze),xr=h(Ze),de=s(Ze,"P",{});var Ft=a(de);jr=l(Ft,"If "),fo=s(Ft,"CODE",{});var hc=a(fo);Fr=l(hc,"token_ids_1"),hc.forEach(t),Mr=l(Ft," is "),uo=s(Ft,"CODE",{});var mc=a(uo);Pr=l(mc,"None"),mc.forEach(t),Nr=l(Ft,", this method only returns the first portion of the mask (0s)."),Ft.forEach(t),Ze.forEach(t),A.forEach(t),us=h(n),pe=s(n,"H2",{class:!0});var Is=a(pe);Me=s(Is,"A",{id:!0,class:!0,href:!0});var fc=a(Me);go=s(fc,"SPAN",{});var uc=a(go);$(jn.$$.fragment,uc),uc.forEach(t),fc.forEach(t),Ar=h(Is),_o=s(Is,"SPAN",{});var gc=a(_o);Ir=l(gc,"CanineModel"),gc.forEach(t),Is.forEach(t),gs=h(n),G=s(n,"DIV",{class:!0});var Mt=a(G);$(Fn.$$.fragment,Mt),Sr=h(Mt),Mn=s(Mt,"P",{});var Ss=a(Mn);Dr=l(Ss,`The bare CANINE Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Pn=s(Ss,"A",{href:!0,rel:!0});var _c=a(Pn);Lr=l(_c,"torch.nn.Module"),_c.forEach(t),Or=l(Ss,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ss.forEach(t),Wr=h(Mt),U=s(Mt,"DIV",{class:!0});var en=a(U);$(Nn.$$.fragment,en),Qr=h(en),he=s(en,"P",{});var Pt=a(he);Hr=l(Pt,"The "),Ct=s(Pt,"A",{href:!0});var kc=a(Ct);Br=l(kc,"CanineModel"),kc.forEach(t),Ur=l(Pt," forward method, overrides the "),ko=s(Pt,"CODE",{});var bc=a(ko);Rr=l(bc,"__call__"),bc.forEach(t),Vr=l(Pt," special method."),Pt.forEach(t),Jr=h(en),$(Pe.$$.fragment,en),Gr=h(en),$(Ne.$$.fragment,en),en.forEach(t),Mt.forEach(t),_s=h(n),me=s(n,"H2",{class:!0});var Ds=a(me);Ae=s(Ds,"A",{id:!0,class:!0,href:!0});var wc=a(Ae);bo=s(wc,"SPAN",{});var $c=a(bo);$(An.$$.fragment,$c),$c.forEach(t),wc.forEach(t),Yr=h(Ds),wo=s(Ds,"SPAN",{});var Cc=a(wo);Xr=l(Cc,"CanineForSequenceClassification"),Cc.forEach(t),Ds.forEach(t),ks=h(n),O=s(n,"DIV",{class:!0});var nn=a(O);$(In.$$.fragment,nn),Kr=h(nn),$o=s(nn,"P",{});var vc=a($o);Zr=l(vc,`CANINE Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),vc.forEach(t),ei=h(nn),Sn=s(nn,"P",{});var Ls=a(Sn);ni=l(Ls,"This model is a PyTorch "),Dn=s(Ls,"A",{href:!0,rel:!0});var yc=a(Dn);ti=l(yc,"torch.nn.Module"),yc.forEach(t),oi=l(Ls,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ls.forEach(t),si=h(nn),x=s(nn,"DIV",{class:!0});var I=a(x);$(Ln.$$.fragment,I),ai=h(I),fe=s(I,"P",{});var Nt=a(fe);ri=l(Nt,"The "),vt=s(Nt,"A",{href:!0});var Tc=a(vt);ii=l(Tc,"CanineForSequenceClassification"),Tc.forEach(t),li=l(Nt," forward method, overrides the "),Co=s(Nt,"CODE",{});var qc=a(Co);ci=l(qc,"__call__"),qc.forEach(t),di=l(Nt," special method."),Nt.forEach(t),pi=h(I),$(Ie.$$.fragment,I),hi=h(I),$(Se.$$.fragment,I),mi=h(I),$(De.$$.fragment,I),fi=h(I),$(Le.$$.fragment,I),ui=h(I),$(Oe.$$.fragment,I),I.forEach(t),nn.forEach(t),bs=h(n),ue=s(n,"H2",{class:!0});var Os=a(ue);We=s(Os,"A",{id:!0,class:!0,href:!0});var zc=a(We);vo=s(zc,"SPAN",{});var Ec=a(vo);$(On.$$.fragment,Ec),Ec.forEach(t),zc.forEach(t),gi=h(Os),yo=s(Os,"SPAN",{});var xc=a(yo);_i=l(xc,"CanineForMultipleChoice"),xc.forEach(t),Os.forEach(t),ws=h(n),W=s(n,"DIV",{class:!0});var tn=a(W);$(Wn.$$.fragment,tn),ki=h(tn),To=s(tn,"P",{});var jc=a(To);bi=l(jc,`CANINE Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jc.forEach(t),wi=h(tn),Qn=s(tn,"P",{});var Ws=a(Qn);$i=l(Ws,"This model is a PyTorch "),Hn=s(Ws,"A",{href:!0,rel:!0});var Fc=a(Hn);Ci=l(Fc,"torch.nn.Module"),Fc.forEach(t),vi=l(Ws,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ws.forEach(t),yi=h(tn),R=s(tn,"DIV",{class:!0});var on=a(R);$(Bn.$$.fragment,on),Ti=h(on),ge=s(on,"P",{});var At=a(ge);qi=l(At,"The "),yt=s(At,"A",{href:!0});var Mc=a(yt);zi=l(Mc,"CanineForMultipleChoice"),Mc.forEach(t),Ei=l(At," forward method, overrides the "),qo=s(At,"CODE",{});var Pc=a(qo);xi=l(Pc,"__call__"),Pc.forEach(t),ji=l(At," special method."),At.forEach(t),Fi=h(on),$(Qe.$$.fragment,on),Mi=h(on),$(He.$$.fragment,on),on.forEach(t),tn.forEach(t),$s=h(n),_e=s(n,"H2",{class:!0});var Qs=a(_e);Be=s(Qs,"A",{id:!0,class:!0,href:!0});var Nc=a(Be);zo=s(Nc,"SPAN",{});var Ac=a(zo);$(Un.$$.fragment,Ac),Ac.forEach(t),Nc.forEach(t),Pi=h(Qs),Eo=s(Qs,"SPAN",{});var Ic=a(Eo);Ni=l(Ic,"CanineForTokenClassification"),Ic.forEach(t),Qs.forEach(t),Cs=h(n),Q=s(n,"DIV",{class:!0});var sn=a(Q);$(Rn.$$.fragment,sn),Ai=h(sn),xo=s(sn,"P",{});var Sc=a(xo);Ii=l(Sc,`CANINE Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sc.forEach(t),Si=h(sn),Vn=s(sn,"P",{});var Hs=a(Vn);Di=l(Hs,"This model is a PyTorch "),Jn=s(Hs,"A",{href:!0,rel:!0});var Dc=a(Jn);Li=l(Dc,"torch.nn.Module"),Dc.forEach(t),Oi=l(Hs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hs.forEach(t),Wi=h(sn),P=s(sn,"DIV",{class:!0});var ee=a(P);$(Gn.$$.fragment,ee),Qi=h(ee),ke=s(ee,"P",{});var It=a(ke);Hi=l(It,"The "),Tt=s(It,"A",{href:!0});var Lc=a(Tt);Bi=l(Lc,"CanineForTokenClassification"),Lc.forEach(t),Ui=l(It," forward method, overrides the "),jo=s(It,"CODE",{});var Oc=a(jo);Ri=l(Oc,"__call__"),Oc.forEach(t),Vi=l(It," special method."),It.forEach(t),Ji=h(ee),$(Ue.$$.fragment,ee),Gi=h(ee),$(Re.$$.fragment,ee),Yi=h(ee),$(Ve.$$.fragment,ee),ee.forEach(t),sn.forEach(t),vs=h(n),be=s(n,"H2",{class:!0});var Bs=a(be);Je=s(Bs,"A",{id:!0,class:!0,href:!0});var Wc=a(Je);Fo=s(Wc,"SPAN",{});var Qc=a(Fo);$(Yn.$$.fragment,Qc),Qc.forEach(t),Wc.forEach(t),Xi=h(Bs),Mo=s(Bs,"SPAN",{});var Hc=a(Mo);Ki=l(Hc,"CanineForQuestionAnswering"),Hc.forEach(t),Bs.forEach(t),ys=h(n),H=s(n,"DIV",{class:!0});var an=a(H);$(Xn.$$.fragment,an),Zi=h(an),we=s(an,"P",{});var St=a(we);el=l(St,`CANINE Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Po=s(St,"CODE",{});var Bc=a(Po);nl=l(Bc,"span start logits"),Bc.forEach(t),tl=l(St," and "),No=s(St,"CODE",{});var Uc=a(No);ol=l(Uc,"span end logits"),Uc.forEach(t),sl=l(St,")."),St.forEach(t),al=h(an),Kn=s(an,"P",{});var Us=a(Kn);rl=l(Us,"This model is a PyTorch "),Zn=s(Us,"A",{href:!0,rel:!0});var Rc=a(Zn);il=l(Rc,"torch.nn.Module"),Rc.forEach(t),ll=l(Us,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Us.forEach(t),cl=h(an),N=s(an,"DIV",{class:!0});var ne=a(N);$(et.$$.fragment,ne),dl=h(ne),$e=s(ne,"P",{});var Dt=a($e);pl=l(Dt,"The "),qt=s(Dt,"A",{href:!0});var Vc=a(qt);hl=l(Vc,"CanineForQuestionAnswering"),Vc.forEach(t),ml=l(Dt," forward method, overrides the "),Ao=s(Dt,"CODE",{});var Jc=a(Ao);fl=l(Jc,"__call__"),Jc.forEach(t),ul=l(Dt," special method."),Dt.forEach(t),gl=h(ne),$(Ge.$$.fragment,ne),_l=h(ne),$(Ye.$$.fragment,ne),kl=h(ne),$(Xe.$$.fragment,ne),ne.forEach(t),an.forEach(t),this.h()},h(){m(c,"name","hf:doc:metadata"),m(c,"content",JSON.stringify(kd)),m(u,"id","canine"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#canine"),m(d,"class","relative group"),m(Ce,"id","overview"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#overview"),m(te,"class","relative group"),m(ln,"href","https://arxiv.org/abs/2103.06874"),m(ln,"rel","nofollow"),m(it,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineTokenizer"),m(dn,"href","https://huggingface.co/google/canine-c"),m(dn,"rel","nofollow"),m(pn,"href","https://huggingface.co/google/canine-s"),m(pn,"rel","nofollow"),m(hn,"href","https://huggingface.co/nielsr"),m(hn,"rel","nofollow"),m(mn,"href","https://github.com/google-research/language/tree/master/language/canine"),m(mn,"rel","nofollow"),m(ye,"id","example"),m(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ye,"href","#example"),m(oe,"class","relative group"),m(Te,"id","transformers.models.canine.modeling_canine.CanineModelOutputWithPooling"),m(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Te,"href","#transformers.models.canine.modeling_canine.CanineModelOutputWithPooling"),m(se,"class","relative group"),m(ht,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineModel"),m(mt,"href","/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"),m(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.CanineConfig"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.CanineConfig"),m(re,"class","relative group"),m(ft,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineModel"),m($n,"href","https://huggingface.co/google/canine-s"),m($n,"rel","nofollow"),m(ut,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),m(gt,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ee,"id","transformers.CanineTokenizer"),m(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ee,"href","#transformers.CanineTokenizer"),m(ce,"class","relative group"),m(_t,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineTokenizer"),m(kt,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(bt,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Me,"id","transformers.CanineModel"),m(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Me,"href","#transformers.CanineModel"),m(pe,"class","relative group"),m(Pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Pn,"rel","nofollow"),m(Ct,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineModel"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ae,"id","transformers.CanineForSequenceClassification"),m(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ae,"href","#transformers.CanineForSequenceClassification"),m(me,"class","relative group"),m(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Dn,"rel","nofollow"),m(vt,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineForSequenceClassification"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.CanineForMultipleChoice"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.CanineForMultipleChoice"),m(ue,"class","relative group"),m(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Hn,"rel","nofollow"),m(yt,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineForMultipleChoice"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Be,"id","transformers.CanineForTokenClassification"),m(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Be,"href","#transformers.CanineForTokenClassification"),m(_e,"class","relative group"),m(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jn,"rel","nofollow"),m(Tt,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineForTokenClassification"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Je,"id","transformers.CanineForQuestionAnswering"),m(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Je,"href","#transformers.CanineForQuestionAnswering"),m(be,"class","relative group"),m(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Zn,"rel","nofollow"),m(qt,"href","/docs/transformers/pr_highlight/en/model_doc/canine#transformers.CanineForQuestionAnswering"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){e(document.head,c),k(n,_,f),k(n,d,f),e(d,u),e(u,b),C(r,b,null),e(d,g),e(d,z),e(z,Rs),k(n,Xo,f),k(n,te,f),e(te,Ce),e(Ce,Lt),C(rn,Lt,null),e(te,Vs),e(te,Ot),e(Ot,Js),k(n,Ko,f),k(n,ve,f),e(ve,Gs),e(ve,ln),e(ln,Ys),e(ve,Xs),k(n,Zo,f),k(n,st,f),e(st,Ks),k(n,es,f),k(n,at,f),e(at,Wt),e(Wt,Zs),k(n,ns,f),k(n,rt,f),e(rt,ea),k(n,ts,f),k(n,j,f),e(j,Qt),e(Qt,Ht),e(Ht,na),e(j,ta),e(j,Bt),e(Bt,cn),e(cn,oa),e(cn,it),e(it,sa),e(cn,aa),e(j,ra),e(j,Ut),e(Ut,Rt),e(Rt,ia),e(j,la),e(j,Vt),e(Vt,Jt),e(Jt,ca),e(j,da),e(j,Gt),e(Gt,lt),e(lt,dn),e(dn,pa),e(lt,ha),e(j,ma),e(j,Yt),e(Yt,ct),e(ct,pn),e(pn,fa),e(ct,ua),k(n,os,f),k(n,X,f),e(X,ga),e(X,hn),e(hn,_a),e(X,ka),e(X,mn),e(mn,ba),e(X,wa),k(n,ss,f),k(n,oe,f),e(oe,ye),e(ye,Xt),C(fn,Xt,null),e(oe,$a),e(oe,Kt),e(Kt,Ca),k(n,as,f),k(n,dt,f),e(dt,va),k(n,rs,f),C(un,n,f),k(n,is,f),k(n,pt,f),e(pt,ya),k(n,ls,f),C(gn,n,f),k(n,cs,f),k(n,se,f),e(se,Te),e(Te,Zt),C(_n,Zt,null),e(se,Ta),e(se,eo),e(eo,qa),k(n,ds,f),k(n,ae,f),C(kn,ae,null),e(ae,za),e(ae,D),e(D,Ea),e(D,ht),e(ht,xa),e(D,ja),e(D,mt),e(mt,Fa),e(D,Ma),e(D,no),e(no,Pa),e(D,Na),e(D,to),e(to,Aa),e(D,Ia),k(n,ps,f),k(n,re,f),e(re,qe),e(qe,oo),C(bn,oo,null),e(re,Sa),e(re,so),e(so,Da),k(n,hs,f),k(n,L,f),C(wn,L,null),e(L,La),e(L,ie),e(ie,Oa),e(ie,ft),e(ft,Wa),e(ie,Qa),e(ie,$n),e($n,Ha),e(ie,Ba),e(L,Ua),e(L,le),e(le,Ra),e(le,ut),e(ut,Va),e(le,Ja),e(le,gt),e(gt,Ga),e(le,Ya),e(L,Xa),C(ze,L,null),k(n,ms,f),k(n,ce,f),e(ce,Ee),e(Ee,ao),C(Cn,ao,null),e(ce,Ka),e(ce,ro),e(ro,Za),k(n,fs,f),k(n,E,f),C(vn,E,null),e(E,er),e(E,io),e(io,nr),e(E,tr),e(E,xe),e(xe,_t),e(_t,or),e(xe,sr),e(xe,kt),e(kt,ar),e(xe,rr),e(E,ir),e(E,yn),e(yn,lr),e(yn,bt),e(bt,cr),e(yn,dr),e(E,pr),e(E,K),C(Tn,K,null),e(K,hr),e(K,lo),e(lo,mr),e(K,fr),e(K,qn),e(qn,wt),e(wt,ur),e(wt,co),e(co,gr),e(qn,_r),e(qn,$t),e($t,kr),e($t,po),e(po,br),e(E,wr),e(E,je),C(zn,je,null),e(je,$r),e(je,En),e(En,Cr),e(En,ho),e(ho,vr),e(En,yr),e(E,Tr),e(E,B),C(xn,B,null),e(B,qr),e(B,mo),e(mo,zr),e(B,Er),C(Fe,B,null),e(B,xr),e(B,de),e(de,jr),e(de,fo),e(fo,Fr),e(de,Mr),e(de,uo),e(uo,Pr),e(de,Nr),k(n,us,f),k(n,pe,f),e(pe,Me),e(Me,go),C(jn,go,null),e(pe,Ar),e(pe,_o),e(_o,Ir),k(n,gs,f),k(n,G,f),C(Fn,G,null),e(G,Sr),e(G,Mn),e(Mn,Dr),e(Mn,Pn),e(Pn,Lr),e(Mn,Or),e(G,Wr),e(G,U),C(Nn,U,null),e(U,Qr),e(U,he),e(he,Hr),e(he,Ct),e(Ct,Br),e(he,Ur),e(he,ko),e(ko,Rr),e(he,Vr),e(U,Jr),C(Pe,U,null),e(U,Gr),C(Ne,U,null),k(n,_s,f),k(n,me,f),e(me,Ae),e(Ae,bo),C(An,bo,null),e(me,Yr),e(me,wo),e(wo,Xr),k(n,ks,f),k(n,O,f),C(In,O,null),e(O,Kr),e(O,$o),e($o,Zr),e(O,ei),e(O,Sn),e(Sn,ni),e(Sn,Dn),e(Dn,ti),e(Sn,oi),e(O,si),e(O,x),C(Ln,x,null),e(x,ai),e(x,fe),e(fe,ri),e(fe,vt),e(vt,ii),e(fe,li),e(fe,Co),e(Co,ci),e(fe,di),e(x,pi),C(Ie,x,null),e(x,hi),C(Se,x,null),e(x,mi),C(De,x,null),e(x,fi),C(Le,x,null),e(x,ui),C(Oe,x,null),k(n,bs,f),k(n,ue,f),e(ue,We),e(We,vo),C(On,vo,null),e(ue,gi),e(ue,yo),e(yo,_i),k(n,ws,f),k(n,W,f),C(Wn,W,null),e(W,ki),e(W,To),e(To,bi),e(W,wi),e(W,Qn),e(Qn,$i),e(Qn,Hn),e(Hn,Ci),e(Qn,vi),e(W,yi),e(W,R),C(Bn,R,null),e(R,Ti),e(R,ge),e(ge,qi),e(ge,yt),e(yt,zi),e(ge,Ei),e(ge,qo),e(qo,xi),e(ge,ji),e(R,Fi),C(Qe,R,null),e(R,Mi),C(He,R,null),k(n,$s,f),k(n,_e,f),e(_e,Be),e(Be,zo),C(Un,zo,null),e(_e,Pi),e(_e,Eo),e(Eo,Ni),k(n,Cs,f),k(n,Q,f),C(Rn,Q,null),e(Q,Ai),e(Q,xo),e(xo,Ii),e(Q,Si),e(Q,Vn),e(Vn,Di),e(Vn,Jn),e(Jn,Li),e(Vn,Oi),e(Q,Wi),e(Q,P),C(Gn,P,null),e(P,Qi),e(P,ke),e(ke,Hi),e(ke,Tt),e(Tt,Bi),e(ke,Ui),e(ke,jo),e(jo,Ri),e(ke,Vi),e(P,Ji),C(Ue,P,null),e(P,Gi),C(Re,P,null),e(P,Yi),C(Ve,P,null),k(n,vs,f),k(n,be,f),e(be,Je),e(Je,Fo),C(Yn,Fo,null),e(be,Xi),e(be,Mo),e(Mo,Ki),k(n,ys,f),k(n,H,f),C(Xn,H,null),e(H,Zi),e(H,we),e(we,el),e(we,Po),e(Po,nl),e(we,tl),e(we,No),e(No,ol),e(we,sl),e(H,al),e(H,Kn),e(Kn,rl),e(Kn,Zn),e(Zn,il),e(Kn,ll),e(H,cl),e(H,N),C(et,N,null),e(N,dl),e(N,$e),e($e,pl),e($e,qt),e(qt,hl),e($e,ml),e($e,Ao),e(Ao,fl),e($e,ul),e(N,gl),C(Ge,N,null),e(N,_l),C(Ye,N,null),e(N,kl),C(Xe,N,null),Ts=!0},p(n,[f]){const nt={};f&2&&(nt.$$scope={dirty:f,ctx:n}),ze.$set(nt);const Io={};f&2&&(Io.$$scope={dirty:f,ctx:n}),Fe.$set(Io);const So={};f&2&&(So.$$scope={dirty:f,ctx:n}),Pe.$set(So);const Do={};f&2&&(Do.$$scope={dirty:f,ctx:n}),Ne.$set(Do);const tt={};f&2&&(tt.$$scope={dirty:f,ctx:n}),Ie.$set(tt);const Lo={};f&2&&(Lo.$$scope={dirty:f,ctx:n}),Se.$set(Lo);const Oo={};f&2&&(Oo.$$scope={dirty:f,ctx:n}),De.$set(Oo);const Wo={};f&2&&(Wo.$$scope={dirty:f,ctx:n}),Le.$set(Wo);const ot={};f&2&&(ot.$$scope={dirty:f,ctx:n}),Oe.$set(ot);const Qo={};f&2&&(Qo.$$scope={dirty:f,ctx:n}),Qe.$set(Qo);const Ho={};f&2&&(Ho.$$scope={dirty:f,ctx:n}),He.$set(Ho);const Bo={};f&2&&(Bo.$$scope={dirty:f,ctx:n}),Ue.$set(Bo);const Uo={};f&2&&(Uo.$$scope={dirty:f,ctx:n}),Re.$set(Uo);const Ro={};f&2&&(Ro.$$scope={dirty:f,ctx:n}),Ve.$set(Ro);const M={};f&2&&(M.$$scope={dirty:f,ctx:n}),Ge.$set(M);const Vo={};f&2&&(Vo.$$scope={dirty:f,ctx:n}),Ye.$set(Vo);const Jo={};f&2&&(Jo.$$scope={dirty:f,ctx:n}),Xe.$set(Jo)},i(n){Ts||(v(r.$$.fragment,n),v(rn.$$.fragment,n),v(fn.$$.fragment,n),v(un.$$.fragment,n),v(gn.$$.fragment,n),v(_n.$$.fragment,n),v(kn.$$.fragment,n),v(bn.$$.fragment,n),v(wn.$$.fragment,n),v(ze.$$.fragment,n),v(Cn.$$.fragment,n),v(vn.$$.fragment,n),v(Tn.$$.fragment,n),v(zn.$$.fragment,n),v(xn.$$.fragment,n),v(Fe.$$.fragment,n),v(jn.$$.fragment,n),v(Fn.$$.fragment,n),v(Nn.$$.fragment,n),v(Pe.$$.fragment,n),v(Ne.$$.fragment,n),v(An.$$.fragment,n),v(In.$$.fragment,n),v(Ln.$$.fragment,n),v(Ie.$$.fragment,n),v(Se.$$.fragment,n),v(De.$$.fragment,n),v(Le.$$.fragment,n),v(Oe.$$.fragment,n),v(On.$$.fragment,n),v(Wn.$$.fragment,n),v(Bn.$$.fragment,n),v(Qe.$$.fragment,n),v(He.$$.fragment,n),v(Un.$$.fragment,n),v(Rn.$$.fragment,n),v(Gn.$$.fragment,n),v(Ue.$$.fragment,n),v(Re.$$.fragment,n),v(Ve.$$.fragment,n),v(Yn.$$.fragment,n),v(Xn.$$.fragment,n),v(et.$$.fragment,n),v(Ge.$$.fragment,n),v(Ye.$$.fragment,n),v(Xe.$$.fragment,n),Ts=!0)},o(n){y(r.$$.fragment,n),y(rn.$$.fragment,n),y(fn.$$.fragment,n),y(un.$$.fragment,n),y(gn.$$.fragment,n),y(_n.$$.fragment,n),y(kn.$$.fragment,n),y(bn.$$.fragment,n),y(wn.$$.fragment,n),y(ze.$$.fragment,n),y(Cn.$$.fragment,n),y(vn.$$.fragment,n),y(Tn.$$.fragment,n),y(zn.$$.fragment,n),y(xn.$$.fragment,n),y(Fe.$$.fragment,n),y(jn.$$.fragment,n),y(Fn.$$.fragment,n),y(Nn.$$.fragment,n),y(Pe.$$.fragment,n),y(Ne.$$.fragment,n),y(An.$$.fragment,n),y(In.$$.fragment,n),y(Ln.$$.fragment,n),y(Ie.$$.fragment,n),y(Se.$$.fragment,n),y(De.$$.fragment,n),y(Le.$$.fragment,n),y(Oe.$$.fragment,n),y(On.$$.fragment,n),y(Wn.$$.fragment,n),y(Bn.$$.fragment,n),y(Qe.$$.fragment,n),y(He.$$.fragment,n),y(Un.$$.fragment,n),y(Rn.$$.fragment,n),y(Gn.$$.fragment,n),y(Ue.$$.fragment,n),y(Re.$$.fragment,n),y(Ve.$$.fragment,n),y(Yn.$$.fragment,n),y(Xn.$$.fragment,n),y(et.$$.fragment,n),y(Ge.$$.fragment,n),y(Ye.$$.fragment,n),y(Xe.$$.fragment,n),Ts=!1},d(n){t(c),n&&t(_),n&&t(d),T(r),n&&t(Xo),n&&t(te),T(rn),n&&t(Ko),n&&t(ve),n&&t(Zo),n&&t(st),n&&t(es),n&&t(at),n&&t(ns),n&&t(rt),n&&t(ts),n&&t(j),n&&t(os),n&&t(X),n&&t(ss),n&&t(oe),T(fn),n&&t(as),n&&t(dt),n&&t(rs),T(un,n),n&&t(is),n&&t(pt),n&&t(ls),T(gn,n),n&&t(cs),n&&t(se),T(_n),n&&t(ds),n&&t(ae),T(kn),n&&t(ps),n&&t(re),T(bn),n&&t(hs),n&&t(L),T(wn),T(ze),n&&t(ms),n&&t(ce),T(Cn),n&&t(fs),n&&t(E),T(vn),T(Tn),T(zn),T(xn),T(Fe),n&&t(us),n&&t(pe),T(jn),n&&t(gs),n&&t(G),T(Fn),T(Nn),T(Pe),T(Ne),n&&t(_s),n&&t(me),T(An),n&&t(ks),n&&t(O),T(In),T(Ln),T(Ie),T(Se),T(De),T(Le),T(Oe),n&&t(bs),n&&t(ue),T(On),n&&t(ws),n&&t(W),T(Wn),T(Bn),T(Qe),T(He),n&&t($s),n&&t(_e),T(Un),n&&t(Cs),n&&t(Q),T(Rn),T(Gn),T(Ue),T(Re),T(Ve),n&&t(vs),n&&t(be),T(Yn),n&&t(ys),n&&t(H),T(Xn),T(et),T(Ge),T(Ye),T(Xe)}}}const kd={local:"canine",sections:[{local:"overview",sections:[{local:"example",title:"Example"}],title:"Overview"},{local:"transformers.models.canine.modeling_canine.CanineModelOutputWithPooling",title:"CANINE specific outputs"},{local:"transformers.CanineConfig",title:"CanineConfig"},{local:"transformers.CanineTokenizer",title:"CanineTokenizer"},{local:"transformers.CanineModel",title:"CanineModel"},{local:"transformers.CanineForSequenceClassification",title:"CanineForSequenceClassification"},{local:"transformers.CanineForMultipleChoice",title:"CanineForMultipleChoice"},{local:"transformers.CanineForTokenClassification",title:"CanineForTokenClassification"},{local:"transformers.CanineForQuestionAnswering",title:"CanineForQuestionAnswering"}],title:"CANINE"};function bd(q){return Zc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qd extends Gc{constructor(c){super();Yc(this,c,bd,_d,Xc,{})}}export{qd as default,kd as metadata};
