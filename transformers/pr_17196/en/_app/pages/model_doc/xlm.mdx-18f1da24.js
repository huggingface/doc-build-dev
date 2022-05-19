import{S as Xk,i as Ek,s as qk,e as a,k as m,w as T,t as n,M as zk,c as r,d as t,m as h,a as i,x as w,h as s,b as k,F as e,g as _,y as M,q as y,o as $,B as L,v as Ck,L as ve}from"../../chunks/vendor-6b77c823.js";import{T as Ce}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-1088f2fb.js";import{C as Te}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Pe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ke}from"../../chunks/ExampleCodeBlock-5212b321.js";function jk(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMConfig, XLMModel

# Initializing a XLM configuration
configuration = XLMConfig()

# Initializing a model from the configuration
model = XLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMConfig, XLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),f=n("Examples:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Examples:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Pk(x){let d,f,c,p,b;return p=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),f=n("pair mask has the following format:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"pair mask has the following format:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Ak(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Ok(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, XLMModel
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Sk(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Nk(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMWithLMHeadModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("The capital of France is <special1>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <special1>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;special1&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;special1&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Ik(x){let d,f;return d=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Dk(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Wk(x){let d,f,c,p,b;return p=new Te({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),f=n("Example of single-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example of single-label classification:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Hk(x){let d,f;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Qk(x){let d,f,c,p,b;return p=new Te({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),f=n("Example of multi-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example of multi-label classification:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Uk(x){let d,f;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained(
    "xlm-mlm-en-2048", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Bk(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Rk(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Vk(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Yk(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Gk(x){let d,f;return d=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function Kk(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Jk(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function Zk(x){let d,f;return d=new Te({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function e1(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function t1(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnswering.from_pretrained("xlm-mlm-en-2048")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function o1(x){let d,f,c,p,b,l,u,X,de,Y,E,Z,I,ee,ce,D,pe,re,R,P,te,K,q,C,G,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,be;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=m(),q=a("ul"),C=a("li"),G=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);b=r(V,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=h(V),X=r(V,"LI",{});var ye=i(X);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),V.forEach(t),Y=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),I=r(j,"CODE",{});var $e=i(I);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(j,"CODE",{});var we=i(D);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),P=r(g,"P",{});var Le=i(P);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),K=h(g),q=r(g,"UL",{});var O=i(q);C=r(O,"LI",{});var N=i(C);G=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(O),z=r(O,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(O),A=r(O,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);be=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,b),e(b,l),e(p,u),e(p,X),e(X,de),_(g,Y,F),_(g,E,F),e(E,Z),e(E,I),e(I,ee),e(E,ce),e(E,D),e(D,pe),e(E,re),_(g,R,F),_(g,P,F),e(P,te),_(g,K,F),_(g,q,F),e(q,C),e(C,G),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,be)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(Y),g&&t(E),g&&t(R),g&&t(P),g&&t(K),g&&t(q)}}}function n1(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function s1(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, TFXLMModel
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function a1(x){let d,f,c,p,b,l,u,X,de,Y,E,Z,I,ee,ce,D,pe,re,R,P,te,K,q,C,G,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,be;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=m(),q=a("ul"),C=a("li"),G=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);b=r(V,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=h(V),X=r(V,"LI",{});var ye=i(X);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),V.forEach(t),Y=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),I=r(j,"CODE",{});var $e=i(I);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(j,"CODE",{});var we=i(D);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),P=r(g,"P",{});var Le=i(P);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),K=h(g),q=r(g,"UL",{});var O=i(q);C=r(O,"LI",{});var N=i(C);G=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(O),z=r(O,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(O),A=r(O,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);be=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,b),e(b,l),e(p,u),e(p,X),e(X,de),_(g,Y,F),_(g,E,F),e(E,Z),e(E,I),e(I,ee),e(E,ce),e(E,D),e(D,pe),e(E,re),_(g,R,F),_(g,P,F),e(P,te),_(g,K,F),_(g,q,F),e(q,C),e(C,G),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,be)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(Y),g&&t(E),g&&t(R),g&&t(P),g&&t(K),g&&t(q)}}}function r1(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function i1(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, TFXLMWithLMHeadModel
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMWithLMHeadModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function l1(x){let d,f,c,p,b,l,u,X,de,Y,E,Z,I,ee,ce,D,pe,re,R,P,te,K,q,C,G,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,be;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=m(),q=a("ul"),C=a("li"),G=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);b=r(V,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=h(V),X=r(V,"LI",{});var ye=i(X);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),V.forEach(t),Y=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),I=r(j,"CODE",{});var $e=i(I);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(j,"CODE",{});var we=i(D);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),P=r(g,"P",{});var Le=i(P);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),K=h(g),q=r(g,"UL",{});var O=i(q);C=r(O,"LI",{});var N=i(C);G=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(O),z=r(O,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(O),A=r(O,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);be=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,b),e(b,l),e(p,u),e(p,X),e(X,de),_(g,Y,F),_(g,E,F),e(E,Z),e(E,I),e(I,ee),e(E,ce),e(E,D),e(D,pe),e(E,re),_(g,R,F),_(g,P,F),e(P,te),_(g,K,F),_(g,q,F),e(q,C),e(C,G),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,be)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(Y),g&&t(E),g&&t(R),g&&t(P),g&&t(K),g&&t(q)}}}function d1(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function c1(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function p1(x){let d,f;return d=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function m1(x){let d,f,c,p,b,l,u,X,de,Y,E,Z,I,ee,ce,D,pe,re,R,P,te,K,q,C,G,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,be;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=m(),q=a("ul"),C=a("li"),G=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);b=r(V,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=h(V),X=r(V,"LI",{});var ye=i(X);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),V.forEach(t),Y=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),I=r(j,"CODE",{});var $e=i(I);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(j,"CODE",{});var we=i(D);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),P=r(g,"P",{});var Le=i(P);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),K=h(g),q=r(g,"UL",{});var O=i(q);C=r(O,"LI",{});var N=i(C);G=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(O),z=r(O,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(O),A=r(O,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);be=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,b),e(b,l),e(p,u),e(p,X),e(X,de),_(g,Y,F),_(g,E,F),e(E,Z),e(E,I),e(I,ee),e(E,ce),e(E,D),e(D,pe),e(E,re),_(g,R,F),_(g,P,F),e(P,te),_(g,K,F),_(g,q,F),e(q,C),e(C,G),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,be)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(Y),g&&t(E),g&&t(R),g&&t(P),g&&t(K),g&&t(q)}}}function h1(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function u1(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function f1(x){let d,f,c,p,b,l,u,X,de,Y,E,Z,I,ee,ce,D,pe,re,R,P,te,K,q,C,G,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,be;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=m(),q=a("ul"),C=a("li"),G=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);b=r(V,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=h(V),X=r(V,"LI",{});var ye=i(X);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),V.forEach(t),Y=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),I=r(j,"CODE",{});var $e=i(I);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(j,"CODE",{});var we=i(D);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),P=r(g,"P",{});var Le=i(P);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),K=h(g),q=r(g,"UL",{});var O=i(q);C=r(O,"LI",{});var N=i(C);G=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(O),z=r(O,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(O),A=r(O,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);be=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,b),e(b,l),e(p,u),e(p,X),e(X,de),_(g,Y,F),_(g,E,F),e(E,Z),e(E,I),e(I,ee),e(E,ce),e(E,D),e(D,pe),e(E,re),_(g,R,F),_(g,P,F),e(P,te),_(g,K,F),_(g,q,F),e(q,C),e(C,G),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,be)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(Y),g&&t(E),g&&t(R),g&&t(P),g&&t(K),g&&t(q)}}}function g1(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function _1(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function b1(x){let d,f;return d=new Te({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function k1(x){let d,f,c,p,b,l,u,X,de,Y,E,Z,I,ee,ce,D,pe,re,R,P,te,K,q,C,G,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,be;return{c(){d=a("p"),f=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=m(),X=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=m(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),pe=n("model(inputs)"),re=n("."),R=m(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=m(),q=a("ul"),C=a("li"),G=n("a single Tensor with "),W=a("code"),me=n("input_ids"),he=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),fe=m(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),ne=n("model([input_ids, attention_mask])"),_e=n(" or "),U=a("code"),se=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),A=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var F=i(d);f=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(g),p=r(g,"UL",{});var V=i(p);b=r(V,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),u=h(V),X=r(V,"LI",{});var ye=i(X);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),V.forEach(t),Y=h(g),E=r(g,"P",{});var j=i(E);Z=s(j,"This second option is useful when using "),I=r(j,"CODE",{});var $e=i(I);ee=s($e,"tf.keras.Model.fit"),$e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(j,"CODE",{});var we=i(D);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),R=h(g),P=r(g,"P",{});var Le=i(P);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),K=h(g),q=r(g,"UL",{});var O=i(q);C=r(O,"LI",{});var N=i(C);G=s(N,"a single Tensor with "),W=r(N,"CODE",{});var xe=i(W);me=s(xe,"input_ids"),xe.forEach(t),he=s(N," only and nothing else: "),H=r(N,"CODE",{});var Fe=i(H);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),N.forEach(t),fe=h(O),z=r(O,"LI",{});var B=i(z);ge=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var le=i(Q);ne=s(le,"model([input_ids, attention_mask])"),le.forEach(t),_e=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);se=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ae=h(O),A=r(O,"LI",{});var oe=i(A);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(oe,"CODE",{});var Ee=i(S);be=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(g,F){_(g,d,F),e(d,f),_(g,c,F),_(g,p,F),e(p,b),e(b,l),e(p,u),e(p,X),e(X,de),_(g,Y,F),_(g,E,F),e(E,Z),e(E,I),e(I,ee),e(E,ce),e(E,D),e(D,pe),e(E,re),_(g,R,F),_(g,P,F),e(P,te),_(g,K,F),_(g,q,F),e(q,C),e(C,G),e(C,W),e(W,me),e(C,he),e(C,H),e(H,ue),e(q,fe),e(q,z),e(z,ge),e(z,Q),e(Q,ne),e(z,_e),e(z,U),e(U,se),e(q,ae),e(q,A),e(A,ie),e(A,S),e(S,be)},d(g){g&&t(d),g&&t(c),g&&t(p),g&&t(Y),g&&t(E),g&&t(R),g&&t(P),g&&t(K),g&&t(q)}}}function v1(x){let d,f,c,p,b;return{c(){d=a("p"),f=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var X=i(c);p=s(X,"Module"),X.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,d,u),e(d,f),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function T1(x){let d,f,c,p,b;return p=new Te({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),f=n("Example:"),c=m(),T(p.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);f=s(u,"Example:"),u.forEach(t),c=h(l),w(p.$$.fragment,l)},m(l,u){_(l,d,u),e(d,f),_(l,c,u),M(p,l,u),b=!0},p:ve,i(l){b||(y(p.$$.fragment,l),b=!0)},o(l){$(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),L(p,l)}}}function w1(x){let d,f;return d=new Te({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,p){M(d,c,p),f=!0},p:ve,i(c){f||(y(d.$$.fragment,c),f=!0)},o(c){$(d.$$.fragment,c),f=!1},d(c){L(d,c)}}}function M1(x){let d,f,c,p,b,l,u,X,de,Y,E,Z,I,ee,ce,D,pe,re,R,P,te,K,q,C,G,W,me,he,H,ue,fe,z,ge,Q,ne,_e,U,se,ae,A,ie,S,be,g,F,V,Me,ye,j,$e,we,Le,O,N,xe,Fe,B,le,Xe,oe,Ee,oc,On,nc,sc,Xl,At,wo,Xr,Sn,ac,Er,rc,El,nt,Nn,ic,bt,lc,qa,dc,cc,za,pc,mc,In,hc,uc,fc,Ot,gc,Ca,_c,bc,ja,kc,vc,Tc,Mo,ql,St,yo,qr,Dn,wc,zr,Mc,zl,qe,Wn,yc,Cr,$c,Lc,We,jr,xc,Fc,Pr,Xc,Ec,Ar,qc,zc,kt,Cc,Or,jc,Pc,Sr,Ac,Oc,Nr,Sc,Nc,Ic,Hn,Dc,Ir,Wc,Hc,Qc,Qn,Uc,Dr,Bc,Rc,Vc,Un,Yc,Pa,Gc,Kc,Jc,wt,Bn,Zc,Wr,ep,tp,Rn,Aa,op,Hr,np,sp,Oa,ap,Qr,rp,ip,$o,Vn,lp,Yn,dp,Ur,cp,pp,mp,st,Gn,hp,Br,up,fp,Lo,gp,Nt,_p,Rr,bp,kp,Vr,vp,Tp,wp,Sa,Kn,Cl,It,xo,Yr,Jn,Mp,Gr,yp,jl,Dt,Zn,$p,es,Lp,Kr,xp,Fp,Pl,Wt,Fo,Jr,ts,Xp,Zr,Ep,Al,He,os,qp,ei,zp,Cp,ns,jp,Na,Pp,Ap,Op,ss,Sp,as,Np,Ip,Dp,at,rs,Wp,Ht,Hp,Ia,Qp,Up,ti,Bp,Rp,Vp,Xo,Yp,Eo,Ol,Qt,qo,oi,is,Gp,ni,Kp,Sl,Qe,ls,Jp,si,Zp,em,ds,tm,Da,om,nm,sm,cs,am,ps,rm,im,lm,Ge,ms,dm,Ut,cm,Wa,pm,mm,ai,hm,um,fm,zo,gm,Co,_m,jo,Nl,Bt,Po,ri,hs,bm,ii,km,Il,Ue,us,vm,li,Tm,wm,fs,Mm,Ha,ym,$m,Lm,gs,xm,_s,Fm,Xm,Em,je,bs,qm,Rt,zm,Qa,Cm,jm,di,Pm,Am,Om,Ao,Sm,Oo,Nm,So,Im,No,Dm,Io,Dl,Vt,Do,ci,ks,Wm,pi,Hm,Wl,Be,vs,Qm,mi,Um,Bm,Ts,Rm,Ua,Vm,Ym,Gm,ws,Km,Ms,Jm,Zm,eh,rt,ys,th,Yt,oh,Ba,nh,sh,hi,ah,rh,ih,Wo,lh,Ho,Hl,Gt,Qo,ui,$s,dh,fi,ch,Ql,Re,Ls,ph,gi,mh,hh,xs,uh,Ra,fh,gh,_h,Fs,bh,Xs,kh,vh,Th,Ke,Es,wh,Kt,Mh,Va,yh,$h,_i,Lh,xh,Fh,Uo,Xh,Bo,Eh,Ro,Ul,Jt,Vo,bi,qs,qh,ki,zh,Bl,Ve,zs,Ch,Zt,jh,vi,Ph,Ah,Ti,Oh,Sh,Nh,Cs,Ih,Ya,Dh,Wh,Hh,js,Qh,Ps,Uh,Bh,Rh,Je,As,Vh,eo,Yh,Ga,Gh,Kh,wi,Jh,Zh,eu,Yo,tu,Go,ou,Ko,Rl,to,Jo,Mi,Os,nu,yi,su,Vl,Ye,Ss,au,oo,ru,$i,iu,lu,Li,du,cu,pu,Ns,mu,Ka,hu,uu,fu,Is,gu,Ds,_u,bu,ku,it,Ws,vu,no,Tu,Ja,wu,Mu,xi,yu,$u,Lu,Zo,xu,en,Yl,so,tn,Fi,Hs,Fu,Xi,Xu,Gl,Ae,Qs,Eu,Ei,qu,zu,Us,Cu,Za,ju,Pu,Au,Bs,Ou,Rs,Su,Nu,Iu,on,Du,lt,Vs,Wu,ao,Hu,er,Qu,Uu,qi,Bu,Ru,Vu,nn,Yu,sn,Kl,ro,an,zi,Ys,Gu,Ci,Ku,Jl,Oe,Gs,Ju,ji,Zu,ef,Ks,tf,tr,of,nf,sf,Js,af,Zs,rf,lf,df,rn,cf,dt,ea,pf,io,mf,or,hf,uf,Pi,ff,gf,_f,ln,bf,dn,Zl,lo,cn,Ai,ta,kf,Oi,vf,ed,Se,oa,Tf,Si,wf,Mf,na,yf,nr,$f,Lf,xf,sa,Ff,aa,Xf,Ef,qf,pn,zf,Ze,ra,Cf,co,jf,sr,Pf,Af,Ni,Of,Sf,Nf,mn,If,hn,Df,un,td,po,fn,Ii,ia,Wf,Di,Hf,od,Ne,la,Qf,Wi,Uf,Bf,da,Rf,ar,Vf,Yf,Gf,ca,Kf,pa,Jf,Zf,eg,gn,tg,ct,ma,og,mo,ng,rr,sg,ag,Hi,rg,ig,lg,_n,dg,bn,nd,ho,kn,Qi,ha,cg,Ui,pg,sd,Ie,ua,mg,Bi,hg,ug,fa,fg,ir,gg,_g,bg,ga,kg,_a,vg,Tg,wg,vn,Mg,et,ba,yg,uo,$g,lr,Lg,xg,Ri,Fg,Xg,Eg,Tn,qg,wn,zg,Mn,ad,fo,yn,Vi,ka,Cg,Yi,jg,rd,De,va,Pg,go,Ag,Gi,Og,Sg,Ki,Ng,Ig,Dg,Ta,Wg,dr,Hg,Qg,Ug,wa,Bg,Ma,Rg,Vg,Yg,$n,Gg,tt,ya,Kg,_o,Jg,cr,Zg,e_,Ji,t_,o_,n_,Ln,s_,xn,a_,Fn,id;return l=new Pe({}),ee=new Pe({}),Sn=new Pe({}),Nn=new J({props:{name:"class transformers.XLMConfig",anchor:"transformers.XLMConfig",parameters:[{name:"vocab_size",val:" = 30145"},{name:"emb_dim",val:" = 2048"},{name:"n_layers",val:" = 12"},{name:"n_heads",val:" = 16"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"gelu_activation",val:" = True"},{name:"sinusoidal_embeddings",val:" = False"},{name:"causal",val:" = False"},{name:"asm",val:" = False"},{name:"n_langs",val:" = 1"},{name:"use_lang_emb",val:" = True"},{name:"max_position_embeddings",val:" = 512"},{name:"embed_init_std",val:" = 0.02209708691207961"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"init_std",val:" = 0.02"},{name:"bos_index",val:" = 0"},{name:"eos_index",val:" = 1"},{name:"pad_index",val:" = 2"},{name:"unk_index",val:" = 3"},{name:"mask_index",val:" = 5"},{name:"is_encoder",val:" = True"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"mask_token_id",val:" = 0"},{name:"lang_id",val:" = 0"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMModel">XLMModel</a> or <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMModel">TFXLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"emb_dim"},{anchor:"transformers.XLMConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.XLMConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.XLMConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLMConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention mechanism`,name:"attention_dropout"},{anchor:"transformers.XLMConfig.gelu_activation",description:`<strong>gelu_activation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use <em>gelu</em> for the activations instead of <em>relu</em>.`,name:"gelu_activation"},{anchor:"transformers.XLMConfig.sinusoidal_embeddings",description:`<strong>sinusoidal_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sinusoidal positional embeddings instead of absolute positional embeddings.`,name:"sinusoidal_embeddings"},{anchor:"transformers.XLMConfig.causal",description:`<strong>causal</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should behave in a causal manner. Causal models use a triangular attention mask in
order to only attend to the left-side context instead if a bidirectional context.`,name:"causal"},{anchor:"transformers.XLMConfig.asm",description:`<strong>asm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use an adaptive log softmax projection layer instead of a linear layer for the prediction
layer.`,name:"asm"},{anchor:"transformers.XLMConfig.n_langs",description:`<strong>n_langs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of languages the model handles. Set to 1 for monolingual models.`,name:"n_langs"},{anchor:"transformers.XLMConfig.use_lang_emb",description:`<strong>use_lang_emb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use language embeddings. Some models use additional language embeddings, see <a href="http://huggingface.co/transformers/multilingual.html#xlm-language-embeddings" rel="nofollow">the multilingual
models page</a> for information
on how to use them.`,name:"use_lang_emb"},{anchor:"transformers.XLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMConfig.embed_init_std",description:`<strong>embed_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 2048^-0.5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing the embedding matrices.`,name:"embed_init_std"},{anchor:"transformers.XLMConfig.init_std",description:`<strong>init_std</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices except the
embedding matrices.`,name:"init_std"},{anchor:"transformers.XLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMConfig.bos_index",description:`<strong>bos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The index of the beginning of sentence token in the vocabulary.`,name:"bos_index"},{anchor:"transformers.XLMConfig.eos_index",description:`<strong>eos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The index of the end of sentence token in the vocabulary.`,name:"eos_index"},{anchor:"transformers.XLMConfig.pad_index",description:`<strong>pad_index</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The index of the padding token in the vocabulary.`,name:"pad_index"},{anchor:"transformers.XLMConfig.unk_index",description:`<strong>unk_index</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The index of the unknown token in the vocabulary.`,name:"unk_index"},{anchor:"transformers.XLMConfig.mask_index",description:`<strong>mask_index</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
The index of the masking token in the vocabulary.`,name:"mask_index"},{anchor:"transformers.XLMConfig.is_encoder(bool,",description:`<strong>is_encoder(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the initialized model should be a transformer encoder or decoder as seen in Vaswani et al.`,name:"is_encoder(bool,"},{anchor:"transformers.XLMConfig.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201C;first&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.XLMConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.XLMConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.XLMConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.XLMConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.XLMConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.XLMConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.XLMConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Model agnostic parameter to identify masked tokens when generating text in an MLM context.`,name:"mask_token_id"},{anchor:"transformers.XLMConfig.lang_id",description:`<strong>lang_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/configuration_xlm.py#L37"}}),Mo=new ke({props:{anchor:"transformers.XLMConfig.example",$$slots:{default:[jk]},$$scope:{ctx:x}}}),Dn=new Pe({}),Wn=new J({props:{name:"class transformers.XLMTokenizer",anchor:"transformers.XLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '</s>'"},{name:"mask_token",val:" = '<special1>'"},{name:"additional_special_tokens",val:" = ['<special0>', '<special1>', '<special2>', '<special3>', '<special4>', '<special5>', '<special6>', '<special7>', '<special8>', '<special9>']"},{name:"lang2id",val:" = None"},{name:"id2lang",val:" = None"},{name:"do_lowercase_and_remove_accent",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Merges file.`,name:"merges_file"},{anchor:"transformers.XLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;special1&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;special0&gt;&quot;,&quot;&lt;special1&gt;&quot;,&quot;&lt;special2&gt;&quot;,&quot;&lt;special3&gt;&quot;,&quot;&lt;special4&gt;&quot;,&quot;&lt;special5&gt;&quot;,&quot;&lt;special6&gt;&quot;,&quot;&lt;special7&gt;&quot;,&quot;&lt;special8&gt;&quot;,&quot;&lt;special9&gt;&quot;]</code>) &#x2014;
List of additional special tokens.`,name:"additional_special_tokens"},{anchor:"transformers.XLMTokenizer.lang2id",description:`<strong>lang2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) &#x2014;
Dictionary mapping languages string identifiers to their IDs.`,name:"lang2id"},{anchor:"transformers.XLMTokenizer.id2lang",description:`<strong>id2lang</strong> (<code>Dict[int, str]</code>, <em>optional</em>) &#x2014;
Dictionary mapping language IDs to their string identifiers.`,name:"id2lang"},{anchor:"transformers.XLMTokenizer.do_lowercase_and_remove_accent",description:`<strong>do_lowercase_and_remove_accent</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase and remove accents when tokenizing.`,name:"do_lowercase_and_remove_accent"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/tokenization_xlm.py#L528"}}),Bn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/tokenization_xlm.py#L872",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/tokenization_xlm.py#L899",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/tokenization_xlm.py#L927",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Lo=new ke({props:{anchor:"transformers.XLMTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Pk]},$$scope:{ctx:x}}}),Kn=new J({props:{name:"save_vocabulary",anchor:"transformers.XLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/tokenization_xlm.py#L956"}}),Jn=new Pe({}),Zn=new J({props:{name:"class transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"end_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"cls_logits",val:": typing.Optional[torch.FloatTensor] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.`,name:"loss"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.start_top_log_probs",description:`<strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_log_probs"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.start_top_index",description:`<strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_index"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.end_top_log_probs",description:`<strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).`,name:"end_top_log_probs"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.end_top_index",description:`<strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).`,name:"end_top_index"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.cls_logits",description:`<strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the <code>is_impossible</code> label of the answers.`,name:"cls_logits"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L264"}}),ts=new Pe({}),os=new J({props:{name:"class transformers.XLMModel",anchor:"transformers.XLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L395"}}),rs=new J({props:{name:"forward",anchor:"transformers.XLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L482",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new Ce({props:{$$slots:{default:[Ak]},$$scope:{ctx:x}}}),Eo=new ke({props:{anchor:"transformers.XLMModel.forward.example",$$slots:{default:[Ok]},$$scope:{ctx:x}}}),is=new Pe({}),ls=new J({props:{name:"class transformers.XLMWithLMHeadModel",anchor:"transformers.XLMWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L675"}}),ms=new J({props:{name:"forward",anchor:"transformers.XLMWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMWithLMHeadModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMWithLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMWithLMHeadModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMWithLMHeadModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMWithLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMWithLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMWithLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMWithLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMWithLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new Ce({props:{$$slots:{default:[Sk]},$$scope:{ctx:x}}}),Co=new ke({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example",$$slots:{default:[Nk]},$$scope:{ctx:x}}}),jo=new ke({props:{anchor:"transformers.XLMWithLMHeadModel.forward.example-2",$$slots:{default:[Ik]},$$scope:{ctx:x}}}),hs=new Pe({}),us=new J({props:{name:"class transformers.XLMForSequenceClassification",anchor:"transformers.XLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L771"}}),bs=new J({props:{name:"forward",anchor:"transformers.XLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForSequenceClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForSequenceClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForSequenceClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new Ce({props:{$$slots:{default:[Dk]},$$scope:{ctx:x}}}),Oo=new ke({props:{anchor:"transformers.XLMForSequenceClassification.forward.example",$$slots:{default:[Wk]},$$scope:{ctx:x}}}),So=new ke({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-2",$$slots:{default:[Hk]},$$scope:{ctx:x}}}),No=new ke({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-3",$$slots:{default:[Qk]},$$scope:{ctx:x}}}),Io=new ke({props:{anchor:"transformers.XLMForSequenceClassification.forward.example-4",$$slots:{default:[Uk]},$$scope:{ctx:x}}}),ks=new Pe({}),vs=new J({props:{name:"class transformers.XLMForMultipleChoice",anchor:"transformers.XLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L1185"}}),ys=new J({props:{name:"forward",anchor:"transformers.XLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForMultipleChoice.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForMultipleChoice.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForMultipleChoice.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new Ce({props:{$$slots:{default:[Bk]},$$scope:{ctx:x}}}),Ho=new ke({props:{anchor:"transformers.XLMForMultipleChoice.forward.example",$$slots:{default:[Rk]},$$scope:{ctx:x}}}),$s=new Pe({}),Ls=new J({props:{name:"class transformers.XLMForTokenClassification",anchor:"transformers.XLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L1100"}}),Es=new J({props:{name:"forward",anchor:"transformers.XLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForTokenClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForTokenClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForTokenClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new Ce({props:{$$slots:{default:[Vk]},$$scope:{ctx:x}}}),Bo=new ke({props:{anchor:"transformers.XLMForTokenClassification.forward.example",$$slots:{default:[Yk]},$$scope:{ctx:x}}}),Ro=new ke({props:{anchor:"transformers.XLMForTokenClassification.forward.example-2",$$slots:{default:[Gk]},$$scope:{ctx:x}}}),qs=new Pe({}),zs=new J({props:{name:"class transformers.XLMForQuestionAnsweringSimple",anchor:"transformers.XLMForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L874"}}),As=new J({props:{name:"forward",anchor:"transformers.XLMForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Ce({props:{$$slots:{default:[Kk]},$$scope:{ctx:x}}}),Go=new ke({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example",$$slots:{default:[Jk]},$$scope:{ctx:x}}}),Ko=new ke({props:{anchor:"transformers.XLMForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[Zk]},$$scope:{ctx:x}}}),Os=new Pe({}),Ss=new J({props:{name:"class transformers.XLMForQuestionAnswering",anchor:"transformers.XLMForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L979"}}),Ws=new J({props:{name:"forward",anchor:"transformers.XLMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMForQuestionAnswering.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.XLMForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMForQuestionAnswering.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.XLMForQuestionAnswering.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.XLMForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.XLMForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.XLMForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.XLMForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Optional mask of tokens which can&#x2019;t be in answers (e.g. [CLS], [PAD], &#x2026;). 1.0 means token should be
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_xlm.py#L989",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.</p>
</li>
<li>
<p><strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).</p>
</li>
<li>
<p><strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).</p>
</li>
<li>
<p><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the <code>is_impossible</code> label of the answers.</p>
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
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new Ce({props:{$$slots:{default:[e1]},$$scope:{ctx:x}}}),en=new ke({props:{anchor:"transformers.XLMForQuestionAnswering.forward.example",$$slots:{default:[t1]},$$scope:{ctx:x}}}),Hs=new Pe({}),Qs=new J({props:{name:"class transformers.TFXLMModel",anchor:"transformers.TFXLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L682"}}),on=new Ce({props:{$$slots:{default:[o1]},$$scope:{ctx:x}}}),Vs=new J({props:{name:"call",anchor:"transformers.TFXLMModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L687",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nn=new Ce({props:{$$slots:{default:[n1]},$$scope:{ctx:x}}}),sn=new ke({props:{anchor:"transformers.TFXLMModel.call.example",$$slots:{default:[s1]},$$scope:{ctx:x}}}),Ys=new Pe({}),Gs=new J({props:{name:"class transformers.TFXLMWithLMHeadModel",anchor:"transformers.TFXLMWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L795"}}),rn=new Ce({props:{$$slots:{default:[a1]},$$scope:{ctx:x}}}),ea=new J({props:{name:"call",anchor:"transformers.TFXLMWithLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMWithLMHeadModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMWithLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMWithLMHeadModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMWithLMHeadModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMWithLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMWithLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMWithLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMWithLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMWithLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L822",returnDescription:`
<p>A <code>transformers.models.xlm.modeling_tf_xlm.TFXLMWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
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
<p><code>transformers.models.xlm.modeling_tf_xlm.TFXLMWithLMHeadModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new Ce({props:{$$slots:{default:[r1]},$$scope:{ctx:x}}}),dn=new ke({props:{anchor:"transformers.TFXLMWithLMHeadModel.call.example",$$slots:{default:[i1]},$$scope:{ctx:x}}}),ta=new Pe({}),oa=new J({props:{name:"class transformers.TFXLMForSequenceClassification",anchor:"transformers.TFXLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L886"}}),pn=new Ce({props:{$$slots:{default:[l1]},$$scope:{ctx:x}}}),ra=new J({props:{name:"call",anchor:"transformers.TFXLMForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForSequenceClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForSequenceClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForSequenceClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L894",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Ce({props:{$$slots:{default:[d1]},$$scope:{ctx:x}}}),hn=new ke({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example",$$slots:{default:[c1]},$$scope:{ctx:x}}}),un=new ke({props:{anchor:"transformers.TFXLMForSequenceClassification.call.example-2",$$slots:{default:[p1]},$$scope:{ctx:x}}}),ia=new Pe({}),la=new J({props:{name:"class transformers.TFXLMForMultipleChoice",anchor:"transformers.TFXLMForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L972"}}),gn=new Ce({props:{$$slots:{default:[m1]},$$scope:{ctx:x}}}),ma=new J({props:{name:"call",anchor:"transformers.TFXLMForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForMultipleChoice.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForMultipleChoice.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForMultipleChoice.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L1001",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_n=new Ce({props:{$$slots:{default:[h1]},$$scope:{ctx:x}}}),bn=new ke({props:{anchor:"transformers.TFXLMForMultipleChoice.call.example",$$slots:{default:[u1]},$$scope:{ctx:x}}}),ha=new Pe({}),ua=new J({props:{name:"class transformers.TFXLMForTokenClassification",anchor:"transformers.TFXLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L1114"}}),vn=new Ce({props:{$$slots:{default:[f1]},$$scope:{ctx:x}}}),ba=new J({props:{name:"call",anchor:"transformers.TFXLMForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForTokenClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForTokenClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForTokenClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L1125",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ce({props:{$$slots:{default:[g1]},$$scope:{ctx:x}}}),wn=new ke({props:{anchor:"transformers.TFXLMForTokenClassification.call.example",$$slots:{default:[_1]},$$scope:{ctx:x}}}),Mn=new ke({props:{anchor:"transformers.TFXLMForTokenClassification.call.example-2",$$slots:{default:[b1]},$$scope:{ctx:x}}}),ka=new Pe({}),va=new J({props:{name:"class transformers.TFXLMForQuestionAnsweringSimple",anchor:"transformers.TFXLMForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig">XLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L1202"}}),$n=new Ce({props:{$$slots:{default:[k1]},$$scope:{ctx:x}}}),ya=new J({props:{name:"call",anchor:"transformers.TFXLMForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"langs",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"lengths",val:" = None"},{name:"cache",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm/modeling_tf_xlm.py#L1210",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new Ce({props:{$$slots:{default:[v1]},$$scope:{ctx:x}}}),xn=new ke({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example",$$slots:{default:[T1]},$$scope:{ctx:x}}}),Fn=new ke({props:{anchor:"transformers.TFXLMForQuestionAnsweringSimple.call.example-2",$$slots:{default:[w1]},$$scope:{ctx:x}}}),{c(){d=a("meta"),f=m(),c=a("h1"),p=a("a"),b=a("span"),T(l.$$.fragment),u=m(),X=a("span"),de=n("XLM"),Y=m(),E=a("h2"),Z=a("a"),I=a("span"),T(ee.$$.fragment),ce=m(),D=a("span"),pe=n("Overview"),re=m(),R=a("p"),P=n("The XLM model was proposed in "),te=a("a"),K=n("Cross-lingual Language Model Pretraining"),q=n(` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),C=m(),G=a("ul"),W=a("li"),me=n("a causal language modeling (CLM) objective (next token prediction),"),he=m(),H=a("li"),ue=n("a masked language modeling (MLM) objective (BERT-like), or"),fe=m(),z=a("li"),ge=n("a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),Q=m(),ne=a("p"),_e=n("The abstract from the paper is the following:"),U=m(),se=a("p"),ae=a("em"),A=n(`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),ie=m(),S=a("p"),be=n("Tips:"),g=m(),F=a("ul"),V=a("li"),Me=n(`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),ye=m(),j=a("li"),$e=n("XLM has multilingual checkpoints which leverage a specific "),we=a("code"),Le=n("lang"),O=n(" parameter. Check out the "),N=a("a"),xe=n("multi-lingual"),Fe=n(" page for more information."),B=m(),le=a("p"),Xe=n("This model was contributed by "),oe=a("a"),Ee=n("thomwolf"),oc=n(". The original code can be found "),On=a("a"),nc=n("here"),sc=n("."),Xl=m(),At=a("h2"),wo=a("a"),Xr=a("span"),T(Sn.$$.fragment),ac=m(),Er=a("span"),rc=n("XLMConfig"),El=m(),nt=a("div"),T(Nn.$$.fragment),ic=m(),bt=a("p"),lc=n("This is the configuration class to store the configuration of a "),qa=a("a"),dc=n("XLMModel"),cc=n(" or a "),za=a("a"),pc=n("TFXLMModel"),mc=n(`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),In=a("a"),hc=n("xlm-mlm-en-2048"),uc=n(" architecture."),fc=m(),Ot=a("p"),gc=n("Configuration objects inherit from "),Ca=a("a"),_c=n("PretrainedConfig"),bc=n(` and can be used to control the model outputs. Read the
documentation from `),ja=a("a"),kc=n("PretrainedConfig"),vc=n(" for more information."),Tc=m(),T(Mo.$$.fragment),ql=m(),St=a("h2"),yo=a("a"),qr=a("span"),T(Dn.$$.fragment),wc=m(),zr=a("span"),Mc=n("XLMTokenizer"),zl=m(),qe=a("div"),T(Wn.$$.fragment),yc=m(),Cr=a("p"),$c=n("Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Lc=m(),We=a("ul"),jr=a("li"),xc=n("Moses preprocessing and tokenization for most supported languages."),Fc=m(),Pr=a("li"),Xc=n("Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),Ec=m(),Ar=a("li"),qc=n("Optionally lowercases and normalizes all inputs text."),zc=m(),kt=a("li"),Cc=n("The arguments "),Or=a("code"),jc=n("special_tokens"),Pc=n(" and the function "),Sr=a("code"),Ac=n("set_special_tokens"),Oc=n(`, can be used to add additional symbols (like
\u201D`),Nr=a("strong"),Sc=n("classify"),Nc=n("\u201D) to a vocabulary."),Ic=m(),Hn=a("li"),Dc=n("The "),Ir=a("code"),Wc=n("lang2id"),Hc=n(` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),Qc=m(),Qn=a("li"),Uc=n("The "),Dr=a("code"),Bc=n("id2lang"),Rc=n(" attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),Vc=m(),Un=a("p"),Yc=n("This tokenizer inherits from "),Pa=a("a"),Gc=n("PreTrainedTokenizer"),Kc=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Jc=m(),wt=a("div"),T(Bn.$$.fragment),Zc=m(),Wr=a("p"),ep=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),tp=m(),Rn=a("ul"),Aa=a("li"),op=n("single sequence: "),Hr=a("code"),np=n("<s> X </s>"),sp=m(),Oa=a("li"),ap=n("pair of sequences: "),Qr=a("code"),rp=n("<s> A </s> B </s>"),ip=m(),$o=a("div"),T(Vn.$$.fragment),lp=m(),Yn=a("p"),dp=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ur=a("code"),cp=n("prepare_for_model"),pp=n(" method."),mp=m(),st=a("div"),T(Gn.$$.fragment),hp=m(),Br=a("p"),up=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),fp=m(),T(Lo.$$.fragment),gp=m(),Nt=a("p"),_p=n("If "),Rr=a("code"),bp=n("token_ids_1"),kp=n(" is "),Vr=a("code"),vp=n("None"),Tp=n(", this method only returns the first portion of the mask (0s)."),wp=m(),Sa=a("div"),T(Kn.$$.fragment),Cl=m(),It=a("h2"),xo=a("a"),Yr=a("span"),T(Jn.$$.fragment),Mp=m(),Gr=a("span"),yp=n("XLM specific outputs"),jl=m(),Dt=a("div"),T(Zn.$$.fragment),$p=m(),es=a("p"),Lp=n("Base class for outputs of question answering models using a "),Kr=a("code"),xp=n("SquadHead"),Fp=n("."),Pl=m(),Wt=a("h2"),Fo=a("a"),Jr=a("span"),T(ts.$$.fragment),Xp=m(),Zr=a("span"),Ep=n("XLMModel"),Al=m(),He=a("div"),T(os.$$.fragment),qp=m(),ei=a("p"),zp=n("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Cp=m(),ns=a("p"),jp=n("This model inherits from "),Na=a("a"),Pp=n("PreTrainedModel"),Ap=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op=m(),ss=a("p"),Sp=n("This model is also a PyTorch "),as=a("a"),Np=n("torch.nn.Module"),Ip=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dp=m(),at=a("div"),T(rs.$$.fragment),Wp=m(),Ht=a("p"),Hp=n("The "),Ia=a("a"),Qp=n("XLMModel"),Up=n(" forward method, overrides the "),ti=a("code"),Bp=n("__call__"),Rp=n(" special method."),Vp=m(),T(Xo.$$.fragment),Yp=m(),T(Eo.$$.fragment),Ol=m(),Qt=a("h2"),qo=a("a"),oi=a("span"),T(is.$$.fragment),Gp=m(),ni=a("span"),Kp=n("XLMWithLMHeadModel"),Sl=m(),Qe=a("div"),T(ls.$$.fragment),Jp=m(),si=a("p"),Zp=n(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),em=m(),ds=a("p"),tm=n("This model inherits from "),Da=a("a"),om=n("PreTrainedModel"),nm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=m(),cs=a("p"),am=n("This model is also a PyTorch "),ps=a("a"),rm=n("torch.nn.Module"),im=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lm=m(),Ge=a("div"),T(ms.$$.fragment),dm=m(),Ut=a("p"),cm=n("The "),Wa=a("a"),pm=n("XLMWithLMHeadModel"),mm=n(" forward method, overrides the "),ai=a("code"),hm=n("__call__"),um=n(" special method."),fm=m(),T(zo.$$.fragment),gm=m(),T(Co.$$.fragment),_m=m(),T(jo.$$.fragment),Nl=m(),Bt=a("h2"),Po=a("a"),ri=a("span"),T(hs.$$.fragment),bm=m(),ii=a("span"),km=n("XLMForSequenceClassification"),Il=m(),Ue=a("div"),T(us.$$.fragment),vm=m(),li=a("p"),Tm=n(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),wm=m(),fs=a("p"),Mm=n("This model inherits from "),Ha=a("a"),ym=n("PreTrainedModel"),$m=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lm=m(),gs=a("p"),xm=n("This model is also a PyTorch "),_s=a("a"),Fm=n("torch.nn.Module"),Xm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Em=m(),je=a("div"),T(bs.$$.fragment),qm=m(),Rt=a("p"),zm=n("The "),Qa=a("a"),Cm=n("XLMForSequenceClassification"),jm=n(" forward method, overrides the "),di=a("code"),Pm=n("__call__"),Am=n(" special method."),Om=m(),T(Ao.$$.fragment),Sm=m(),T(Oo.$$.fragment),Nm=m(),T(So.$$.fragment),Im=m(),T(No.$$.fragment),Dm=m(),T(Io.$$.fragment),Dl=m(),Vt=a("h2"),Do=a("a"),ci=a("span"),T(ks.$$.fragment),Wm=m(),pi=a("span"),Hm=n("XLMForMultipleChoice"),Wl=m(),Be=a("div"),T(vs.$$.fragment),Qm=m(),mi=a("p"),Um=n(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bm=m(),Ts=a("p"),Rm=n("This model inherits from "),Ua=a("a"),Vm=n("PreTrainedModel"),Ym=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gm=m(),ws=a("p"),Km=n("This model is also a PyTorch "),Ms=a("a"),Jm=n("torch.nn.Module"),Zm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh=m(),rt=a("div"),T(ys.$$.fragment),th=m(),Yt=a("p"),oh=n("The "),Ba=a("a"),nh=n("XLMForMultipleChoice"),sh=n(" forward method, overrides the "),hi=a("code"),ah=n("__call__"),rh=n(" special method."),ih=m(),T(Wo.$$.fragment),lh=m(),T(Ho.$$.fragment),Hl=m(),Gt=a("h2"),Qo=a("a"),ui=a("span"),T($s.$$.fragment),dh=m(),fi=a("span"),ch=n("XLMForTokenClassification"),Ql=m(),Re=a("div"),T(Ls.$$.fragment),ph=m(),gi=a("p"),mh=n(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hh=m(),xs=a("p"),uh=n("This model inherits from "),Ra=a("a"),fh=n("PreTrainedModel"),gh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=m(),Fs=a("p"),bh=n("This model is also a PyTorch "),Xs=a("a"),kh=n("torch.nn.Module"),vh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Th=m(),Ke=a("div"),T(Es.$$.fragment),wh=m(),Kt=a("p"),Mh=n("The "),Va=a("a"),yh=n("XLMForTokenClassification"),$h=n(" forward method, overrides the "),_i=a("code"),Lh=n("__call__"),xh=n(" special method."),Fh=m(),T(Uo.$$.fragment),Xh=m(),T(Bo.$$.fragment),Eh=m(),T(Ro.$$.fragment),Ul=m(),Jt=a("h2"),Vo=a("a"),bi=a("span"),T(qs.$$.fragment),qh=m(),ki=a("span"),zh=n("XLMForQuestionAnsweringSimple"),Bl=m(),Ve=a("div"),T(zs.$$.fragment),Ch=m(),Zt=a("p"),jh=n(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vi=a("code"),Ph=n("span start logits"),Ah=n(" and "),Ti=a("code"),Oh=n("span end logits"),Sh=n(")."),Nh=m(),Cs=a("p"),Ih=n("This model inherits from "),Ya=a("a"),Dh=n("PreTrainedModel"),Wh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=m(),js=a("p"),Qh=n("This model is also a PyTorch "),Ps=a("a"),Uh=n("torch.nn.Module"),Bh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rh=m(),Je=a("div"),T(As.$$.fragment),Vh=m(),eo=a("p"),Yh=n("The "),Ga=a("a"),Gh=n("XLMForQuestionAnsweringSimple"),Kh=n(" forward method, overrides the "),wi=a("code"),Jh=n("__call__"),Zh=n(" special method."),eu=m(),T(Yo.$$.fragment),tu=m(),T(Go.$$.fragment),ou=m(),T(Ko.$$.fragment),Rl=m(),to=a("h2"),Jo=a("a"),Mi=a("span"),T(Os.$$.fragment),nu=m(),yi=a("span"),su=n("XLMForQuestionAnswering"),Vl=m(),Ye=a("div"),T(Ss.$$.fragment),au=m(),oo=a("p"),ru=n(`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),$i=a("code"),iu=n("span start logits"),lu=n(" and "),Li=a("code"),du=n("span end logits"),cu=n(")."),pu=m(),Ns=a("p"),mu=n("This model inherits from "),Ka=a("a"),hu=n("PreTrainedModel"),uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=m(),Is=a("p"),gu=n("This model is also a PyTorch "),Ds=a("a"),_u=n("torch.nn.Module"),bu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ku=m(),it=a("div"),T(Ws.$$.fragment),vu=m(),no=a("p"),Tu=n("The "),Ja=a("a"),wu=n("XLMForQuestionAnswering"),Mu=n(" forward method, overrides the "),xi=a("code"),yu=n("__call__"),$u=n(" special method."),Lu=m(),T(Zo.$$.fragment),xu=m(),T(en.$$.fragment),Yl=m(),so=a("h2"),tn=a("a"),Fi=a("span"),T(Hs.$$.fragment),Fu=m(),Xi=a("span"),Xu=n("TFXLMModel"),Gl=m(),Ae=a("div"),T(Qs.$$.fragment),Eu=m(),Ei=a("p"),qu=n("The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),zu=m(),Us=a("p"),Cu=n("This model inherits from "),Za=a("a"),ju=n("TFPreTrainedModel"),Pu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au=m(),Bs=a("p"),Ou=n("This model is also a "),Rs=a("a"),Su=n("tf.keras.Model"),Nu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu=m(),T(on.$$.fragment),Du=m(),lt=a("div"),T(Vs.$$.fragment),Wu=m(),ao=a("p"),Hu=n("The "),er=a("a"),Qu=n("TFXLMModel"),Uu=n(" forward method, overrides the "),qi=a("code"),Bu=n("__call__"),Ru=n(" special method."),Vu=m(),T(nn.$$.fragment),Yu=m(),T(sn.$$.fragment),Kl=m(),ro=a("h2"),an=a("a"),zi=a("span"),T(Ys.$$.fragment),Gu=m(),Ci=a("span"),Ku=n("TFXLMWithLMHeadModel"),Jl=m(),Oe=a("div"),T(Gs.$$.fragment),Ju=m(),ji=a("p"),Zu=n(`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ef=m(),Ks=a("p"),tf=n("This model inherits from "),tr=a("a"),of=n("TFPreTrainedModel"),nf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf=m(),Js=a("p"),af=n("This model is also a "),Zs=a("a"),rf=n("tf.keras.Model"),lf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),df=m(),T(rn.$$.fragment),cf=m(),dt=a("div"),T(ea.$$.fragment),pf=m(),io=a("p"),mf=n("The "),or=a("a"),hf=n("TFXLMWithLMHeadModel"),uf=n(" forward method, overrides the "),Pi=a("code"),ff=n("__call__"),gf=n(" special method."),_f=m(),T(ln.$$.fragment),bf=m(),T(dn.$$.fragment),Zl=m(),lo=a("h2"),cn=a("a"),Ai=a("span"),T(ta.$$.fragment),kf=m(),Oi=a("span"),vf=n("TFXLMForSequenceClassification"),ed=m(),Se=a("div"),T(oa.$$.fragment),Tf=m(),Si=a("p"),wf=n(`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Mf=m(),na=a("p"),yf=n("This model inherits from "),nr=a("a"),$f=n("TFPreTrainedModel"),Lf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=m(),sa=a("p"),Ff=n("This model is also a "),aa=a("a"),Xf=n("tf.keras.Model"),Ef=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=m(),T(pn.$$.fragment),zf=m(),Ze=a("div"),T(ra.$$.fragment),Cf=m(),co=a("p"),jf=n("The "),sr=a("a"),Pf=n("TFXLMForSequenceClassification"),Af=n(" forward method, overrides the "),Ni=a("code"),Of=n("__call__"),Sf=n(" special method."),Nf=m(),T(mn.$$.fragment),If=m(),T(hn.$$.fragment),Df=m(),T(un.$$.fragment),td=m(),po=a("h2"),fn=a("a"),Ii=a("span"),T(ia.$$.fragment),Wf=m(),Di=a("span"),Hf=n("TFXLMForMultipleChoice"),od=m(),Ne=a("div"),T(la.$$.fragment),Qf=m(),Wi=a("p"),Uf=n(`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bf=m(),da=a("p"),Rf=n("This model inherits from "),ar=a("a"),Vf=n("TFPreTrainedModel"),Yf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gf=m(),ca=a("p"),Kf=n("This model is also a "),pa=a("a"),Jf=n("tf.keras.Model"),Zf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eg=m(),T(gn.$$.fragment),tg=m(),ct=a("div"),T(ma.$$.fragment),og=m(),mo=a("p"),ng=n("The "),rr=a("a"),sg=n("TFXLMForMultipleChoice"),ag=n(" forward method, overrides the "),Hi=a("code"),rg=n("__call__"),ig=n(" special method."),lg=m(),T(_n.$$.fragment),dg=m(),T(bn.$$.fragment),nd=m(),ho=a("h2"),kn=a("a"),Qi=a("span"),T(ha.$$.fragment),cg=m(),Ui=a("span"),pg=n("TFXLMForTokenClassification"),sd=m(),Ie=a("div"),T(ua.$$.fragment),mg=m(),Bi=a("p"),hg=n(`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ug=m(),fa=a("p"),fg=n("This model inherits from "),ir=a("a"),gg=n("TFPreTrainedModel"),_g=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bg=m(),ga=a("p"),kg=n("This model is also a "),_a=a("a"),vg=n("tf.keras.Model"),Tg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wg=m(),T(vn.$$.fragment),Mg=m(),et=a("div"),T(ba.$$.fragment),yg=m(),uo=a("p"),$g=n("The "),lr=a("a"),Lg=n("TFXLMForTokenClassification"),xg=n(" forward method, overrides the "),Ri=a("code"),Fg=n("__call__"),Xg=n(" special method."),Eg=m(),T(Tn.$$.fragment),qg=m(),T(wn.$$.fragment),zg=m(),T(Mn.$$.fragment),ad=m(),fo=a("h2"),yn=a("a"),Vi=a("span"),T(ka.$$.fragment),Cg=m(),Yi=a("span"),jg=n("TFXLMForQuestionAnsweringSimple"),rd=m(),De=a("div"),T(va.$$.fragment),Pg=m(),go=a("p"),Ag=n(`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Gi=a("code"),Og=n("span start logits"),Sg=n(" and "),Ki=a("code"),Ng=n("span end logits"),Ig=n(")."),Dg=m(),Ta=a("p"),Wg=n("This model inherits from "),dr=a("a"),Hg=n("TFPreTrainedModel"),Qg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=m(),wa=a("p"),Bg=n("This model is also a "),Ma=a("a"),Rg=n("tf.keras.Model"),Vg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yg=m(),T($n.$$.fragment),Gg=m(),tt=a("div"),T(ya.$$.fragment),Kg=m(),_o=a("p"),Jg=n("The "),cr=a("a"),Zg=n("TFXLMForQuestionAnsweringSimple"),e_=n(" forward method, overrides the "),Ji=a("code"),t_=n("__call__"),o_=n(" special method."),n_=m(),T(Ln.$$.fragment),s_=m(),T(xn.$$.fragment),a_=m(),T(Fn.$$.fragment),this.h()},l(o){const v=zk('[data-svelte="svelte-1phssyn"]',document.head);d=r(v,"META",{name:!0,content:!0}),v.forEach(t),f=h(o),c=r(o,"H1",{class:!0});var $a=i(c);p=r($a,"A",{id:!0,class:!0,href:!0});var Zi=i(p);b=r(Zi,"SPAN",{});var el=i(b);w(l.$$.fragment,el),el.forEach(t),Zi.forEach(t),u=h($a),X=r($a,"SPAN",{});var tl=i(X);de=s(tl,"XLM"),tl.forEach(t),$a.forEach(t),Y=h(o),E=r(o,"H2",{class:!0});var La=i(E);Z=r(La,"A",{id:!0,class:!0,href:!0});var ol=i(Z);I=r(ol,"SPAN",{});var nl=i(I);w(ee.$$.fragment,nl),nl.forEach(t),ol.forEach(t),ce=h(La),D=r(La,"SPAN",{});var sl=i(D);pe=s(sl,"Overview"),sl.forEach(t),La.forEach(t),re=h(o),R=r(o,"P",{});var xa=i(R);P=s(xa,"The XLM model was proposed in "),te=r(xa,"A",{href:!0,rel:!0});var al=i(te);K=s(al,"Cross-lingual Language Model Pretraining"),al.forEach(t),q=s(xa,` by
Guillaume Lample, Alexis Conneau. It\u2019s a transformer pretrained using one of the following objectives:`),xa.forEach(t),C=h(o),G=r(o,"UL",{});var bo=i(G);W=r(bo,"LI",{});var rl=i(W);me=s(rl,"a causal language modeling (CLM) objective (next token prediction),"),rl.forEach(t),he=h(bo),H=r(bo,"LI",{});var il=i(H);ue=s(il,"a masked language modeling (MLM) objective (BERT-like), or"),il.forEach(t),fe=h(bo),z=r(bo,"LI",{});var ll=i(z);ge=s(ll,"a Translation Language Modeling (TLM) object (extension of BERT\u2019s MLM to multiple language inputs)"),ll.forEach(t),bo.forEach(t),Q=h(o),ne=r(o,"P",{});var dl=i(ne);_e=s(dl,"The abstract from the paper is the following:"),dl.forEach(t),U=h(o),se=r(o,"P",{});var cl=i(se);ae=r(cl,"EM",{});var pl=i(ae);A=s(pl,`Recent studies have demonstrated the efficiency of generative pretraining for English natural language understanding.
In this work, we extend this approach to multiple languages and show the effectiveness of cross-lingual pretraining. We
propose two methods to learn cross-lingual language models (XLMs): one unsupervised that only relies on monolingual
data, and one supervised that leverages parallel data with a new cross-lingual language model objective. We obtain
state-of-the-art results on cross-lingual classification, unsupervised and supervised machine translation. On XNLI, our
approach pushes the state of the art by an absolute gain of 4.9% accuracy. On unsupervised machine translation, we
obtain 34.3 BLEU on WMT\u201916 German-English, improving the previous state of the art by more than 9 BLEU. On supervised
machine translation, we obtain a new state of the art of 38.5 BLEU on WMT\u201916 Romanian-English, outperforming the
previous best approach by more than 4 BLEU. Our code and pretrained models will be made publicly available.`),pl.forEach(t),cl.forEach(t),ie=h(o),S=r(o,"P",{});var ml=i(S);be=s(ml,"Tips:"),ml.forEach(t),g=h(o),F=r(o,"UL",{});var Fa=i(F);V=r(Fa,"LI",{});var hl=i(V);Me=s(hl,`XLM has many different checkpoints, which were trained using different objectives: CLM, MLM or TLM. Make sure to
select the correct objective for your task (e.g. MLM checkpoints are not suitable for generation).`),hl.forEach(t),ye=h(Fa),j=r(Fa,"LI",{});var ko=i(j);$e=s(ko,"XLM has multilingual checkpoints which leverage a specific "),we=r(ko,"CODE",{});var ul=i(we);Le=s(ul,"lang"),ul.forEach(t),O=s(ko," parameter. Check out the "),N=r(ko,"A",{href:!0});var fl=i(N);xe=s(fl,"multi-lingual"),fl.forEach(t),Fe=s(ko," page for more information."),ko.forEach(t),Fa.forEach(t),B=h(o),le=r(o,"P",{});var vo=i(le);Xe=s(vo,"This model was contributed by "),oe=r(vo,"A",{href:!0,rel:!0});var gl=i(oe);Ee=s(gl,"thomwolf"),gl.forEach(t),oc=s(vo,". The original code can be found "),On=r(vo,"A",{href:!0,rel:!0});var _l=i(On);nc=s(_l,"here"),_l.forEach(t),sc=s(vo,"."),vo.forEach(t),Xl=h(o),At=r(o,"H2",{class:!0});var Xa=i(At);wo=r(Xa,"A",{id:!0,class:!0,href:!0});var bl=i(wo);Xr=r(bl,"SPAN",{});var kl=i(Xr);w(Sn.$$.fragment,kl),kl.forEach(t),bl.forEach(t),ac=h(Xa),Er=r(Xa,"SPAN",{});var vl=i(Er);rc=s(vl,"XLMConfig"),vl.forEach(t),Xa.forEach(t),El=h(o),nt=r(o,"DIV",{class:!0});var vt=i(nt);w(Nn.$$.fragment,vt),ic=h(vt),bt=r(vt,"P",{});var Tt=i(bt);lc=s(Tt,"This is the configuration class to store the configuration of a "),qa=r(Tt,"A",{href:!0});var Tl=i(qa);dc=s(Tl,"XLMModel"),Tl.forEach(t),cc=s(Tt," or a "),za=r(Tt,"A",{href:!0});var wl=i(za);pc=s(wl,"TFXLMModel"),wl.forEach(t),mc=s(Tt,`. It is used to
instantiate a XLM model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),In=r(Tt,"A",{href:!0,rel:!0});var Ml=i(In);hc=s(Ml,"xlm-mlm-en-2048"),Ml.forEach(t),uc=s(Tt," architecture."),Tt.forEach(t),fc=h(vt),Ot=r(vt,"P",{});var To=i(Ot);gc=s(To,"Configuration objects inherit from "),Ca=r(To,"A",{href:!0});var yl=i(Ca);_c=s(yl,"PretrainedConfig"),yl.forEach(t),bc=s(To,` and can be used to control the model outputs. Read the
documentation from `),ja=r(To,"A",{href:!0});var $l=i(ja);kc=s($l,"PretrainedConfig"),$l.forEach(t),vc=s(To," for more information."),To.forEach(t),Tc=h(vt),w(Mo.$$.fragment,vt),vt.forEach(t),ql=h(o),St=r(o,"H2",{class:!0});var Ea=i(St);yo=r(Ea,"A",{id:!0,class:!0,href:!0});var Ll=i(yo);qr=r(Ll,"SPAN",{});var xl=i(qr);w(Dn.$$.fragment,xl),xl.forEach(t),Ll.forEach(t),wc=h(Ea),zr=r(Ea,"SPAN",{});var Fl=i(zr);Mc=s(Fl,"XLMTokenizer"),Fl.forEach(t),Ea.forEach(t),zl=h(o),qe=r(o,"DIV",{class:!0});var ze=i(qe);w(Wn.$$.fragment,ze),yc=h(ze),Cr=r(ze,"P",{});var l_=i(Cr);$c=s(l_,"Construct an XLM tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),l_.forEach(t),Lc=h(ze),We=r(ze,"UL",{});var pt=i(We);jr=r(pt,"LI",{});var d_=i(jr);xc=s(d_,"Moses preprocessing and tokenization for most supported languages."),d_.forEach(t),Fc=h(pt),Pr=r(pt,"LI",{});var c_=i(Pr);Xc=s(c_,"Language specific tokenization for Chinese (Jieba), Japanese (KyTea) and Thai (PyThaiNLP)."),c_.forEach(t),Ec=h(pt),Ar=r(pt,"LI",{});var p_=i(Ar);qc=s(p_,"Optionally lowercases and normalizes all inputs text."),p_.forEach(t),zc=h(pt),kt=r(pt,"LI",{});var Xn=i(kt);Cc=s(Xn,"The arguments "),Or=r(Xn,"CODE",{});var m_=i(Or);jc=s(m_,"special_tokens"),m_.forEach(t),Pc=s(Xn," and the function "),Sr=r(Xn,"CODE",{});var h_=i(Sr);Ac=s(h_,"set_special_tokens"),h_.forEach(t),Oc=s(Xn,`, can be used to add additional symbols (like
\u201D`),Nr=r(Xn,"STRONG",{});var u_=i(Nr);Sc=s(u_,"classify"),u_.forEach(t),Nc=s(Xn,"\u201D) to a vocabulary."),Xn.forEach(t),Ic=h(pt),Hn=r(pt,"LI",{});var ld=i(Hn);Dc=s(ld,"The "),Ir=r(ld,"CODE",{});var f_=i(Ir);Wc=s(f_,"lang2id"),f_.forEach(t),Hc=s(ld,` attribute maps the languages supported by the model with their IDs if provided (automatically set
for pretrained vocabularies).`),ld.forEach(t),Qc=h(pt),Qn=r(pt,"LI",{});var dd=i(Qn);Uc=s(dd,"The "),Dr=r(dd,"CODE",{});var g_=i(Dr);Bc=s(g_,"id2lang"),g_.forEach(t),Rc=s(dd," attributes does reverse mapping if provided (automatically set for pretrained vocabularies)."),dd.forEach(t),pt.forEach(t),Vc=h(ze),Un=r(ze,"P",{});var cd=i(Un);Yc=s(cd,"This tokenizer inherits from "),Pa=r(cd,"A",{href:!0});var __=i(Pa);Gc=s(__,"PreTrainedTokenizer"),__.forEach(t),Kc=s(cd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),cd.forEach(t),Jc=h(ze),wt=r(ze,"DIV",{class:!0});var pr=i(wt);w(Bn.$$.fragment,pr),Zc=h(pr),Wr=r(pr,"P",{});var b_=i(Wr);ep=s(b_,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),b_.forEach(t),tp=h(pr),Rn=r(pr,"UL",{});var pd=i(Rn);Aa=r(pd,"LI",{});var r_=i(Aa);op=s(r_,"single sequence: "),Hr=r(r_,"CODE",{});var k_=i(Hr);np=s(k_,"<s> X </s>"),k_.forEach(t),r_.forEach(t),sp=h(pd),Oa=r(pd,"LI",{});var i_=i(Oa);ap=s(i_,"pair of sequences: "),Qr=r(i_,"CODE",{});var v_=i(Qr);rp=s(v_,"<s> A </s> B </s>"),v_.forEach(t),i_.forEach(t),pd.forEach(t),pr.forEach(t),ip=h(ze),$o=r(ze,"DIV",{class:!0});var md=i($o);w(Vn.$$.fragment,md),lp=h(md),Yn=r(md,"P",{});var hd=i(Yn);dp=s(hd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ur=r(hd,"CODE",{});var T_=i(Ur);cp=s(T_,"prepare_for_model"),T_.forEach(t),pp=s(hd," method."),hd.forEach(t),md.forEach(t),mp=h(ze),st=r(ze,"DIV",{class:!0});var En=i(st);w(Gn.$$.fragment,En),hp=h(En),Br=r(En,"P",{});var w_=i(Br);up=s(w_,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),w_.forEach(t),fp=h(En),w(Lo.$$.fragment,En),gp=h(En),Nt=r(En,"P",{});var mr=i(Nt);_p=s(mr,"If "),Rr=r(mr,"CODE",{});var M_=i(Rr);bp=s(M_,"token_ids_1"),M_.forEach(t),kp=s(mr," is "),Vr=r(mr,"CODE",{});var y_=i(Vr);vp=s(y_,"None"),y_.forEach(t),Tp=s(mr,", this method only returns the first portion of the mask (0s)."),mr.forEach(t),En.forEach(t),wp=h(ze),Sa=r(ze,"DIV",{class:!0});var $_=i(Sa);w(Kn.$$.fragment,$_),$_.forEach(t),ze.forEach(t),Cl=h(o),It=r(o,"H2",{class:!0});var ud=i(It);xo=r(ud,"A",{id:!0,class:!0,href:!0});var L_=i(xo);Yr=r(L_,"SPAN",{});var x_=i(Yr);w(Jn.$$.fragment,x_),x_.forEach(t),L_.forEach(t),Mp=h(ud),Gr=r(ud,"SPAN",{});var F_=i(Gr);yp=s(F_,"XLM specific outputs"),F_.forEach(t),ud.forEach(t),jl=h(o),Dt=r(o,"DIV",{class:!0});var fd=i(Dt);w(Zn.$$.fragment,fd),$p=h(fd),es=r(fd,"P",{});var gd=i(es);Lp=s(gd,"Base class for outputs of question answering models using a "),Kr=r(gd,"CODE",{});var X_=i(Kr);xp=s(X_,"SquadHead"),X_.forEach(t),Fp=s(gd,"."),gd.forEach(t),fd.forEach(t),Pl=h(o),Wt=r(o,"H2",{class:!0});var _d=i(Wt);Fo=r(_d,"A",{id:!0,class:!0,href:!0});var E_=i(Fo);Jr=r(E_,"SPAN",{});var q_=i(Jr);w(ts.$$.fragment,q_),q_.forEach(t),E_.forEach(t),Xp=h(_d),Zr=r(_d,"SPAN",{});var z_=i(Zr);Ep=s(z_,"XLMModel"),z_.forEach(t),_d.forEach(t),Al=h(o),He=r(o,"DIV",{class:!0});var Mt=i(He);w(os.$$.fragment,Mt),qp=h(Mt),ei=r(Mt,"P",{});var C_=i(ei);zp=s(C_,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),C_.forEach(t),Cp=h(Mt),ns=r(Mt,"P",{});var bd=i(ns);jp=s(bd,"This model inherits from "),Na=r(bd,"A",{href:!0});var j_=i(Na);Pp=s(j_,"PreTrainedModel"),j_.forEach(t),Ap=s(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd.forEach(t),Op=h(Mt),ss=r(Mt,"P",{});var kd=i(ss);Sp=s(kd,"This model is also a PyTorch "),as=r(kd,"A",{href:!0,rel:!0});var P_=i(as);Np=s(P_,"torch.nn.Module"),P_.forEach(t),Ip=s(kd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd.forEach(t),Dp=h(Mt),at=r(Mt,"DIV",{class:!0});var qn=i(at);w(rs.$$.fragment,qn),Wp=h(qn),Ht=r(qn,"P",{});var hr=i(Ht);Hp=s(hr,"The "),Ia=r(hr,"A",{href:!0});var A_=i(Ia);Qp=s(A_,"XLMModel"),A_.forEach(t),Up=s(hr," forward method, overrides the "),ti=r(hr,"CODE",{});var O_=i(ti);Bp=s(O_,"__call__"),O_.forEach(t),Rp=s(hr," special method."),hr.forEach(t),Vp=h(qn),w(Xo.$$.fragment,qn),Yp=h(qn),w(Eo.$$.fragment,qn),qn.forEach(t),Mt.forEach(t),Ol=h(o),Qt=r(o,"H2",{class:!0});var vd=i(Qt);qo=r(vd,"A",{id:!0,class:!0,href:!0});var S_=i(qo);oi=r(S_,"SPAN",{});var N_=i(oi);w(is.$$.fragment,N_),N_.forEach(t),S_.forEach(t),Gp=h(vd),ni=r(vd,"SPAN",{});var I_=i(ni);Kp=s(I_,"XLMWithLMHeadModel"),I_.forEach(t),vd.forEach(t),Sl=h(o),Qe=r(o,"DIV",{class:!0});var yt=i(Qe);w(ls.$$.fragment,yt),Jp=h(yt),si=r(yt,"P",{});var D_=i(si);Zp=s(D_,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),D_.forEach(t),em=h(yt),ds=r(yt,"P",{});var Td=i(ds);tm=s(Td,"This model inherits from "),Da=r(Td,"A",{href:!0});var W_=i(Da);om=s(W_,"PreTrainedModel"),W_.forEach(t),nm=s(Td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td.forEach(t),sm=h(yt),cs=r(yt,"P",{});var wd=i(cs);am=s(wd,"This model is also a PyTorch "),ps=r(wd,"A",{href:!0,rel:!0});var H_=i(ps);rm=s(H_,"torch.nn.Module"),H_.forEach(t),im=s(wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wd.forEach(t),lm=h(yt),Ge=r(yt,"DIV",{class:!0});var $t=i(Ge);w(ms.$$.fragment,$t),dm=h($t),Ut=r($t,"P",{});var ur=i(Ut);cm=s(ur,"The "),Wa=r(ur,"A",{href:!0});var Q_=i(Wa);pm=s(Q_,"XLMWithLMHeadModel"),Q_.forEach(t),mm=s(ur," forward method, overrides the "),ai=r(ur,"CODE",{});var U_=i(ai);hm=s(U_,"__call__"),U_.forEach(t),um=s(ur," special method."),ur.forEach(t),fm=h($t),w(zo.$$.fragment,$t),gm=h($t),w(Co.$$.fragment,$t),_m=h($t),w(jo.$$.fragment,$t),$t.forEach(t),yt.forEach(t),Nl=h(o),Bt=r(o,"H2",{class:!0});var Md=i(Bt);Po=r(Md,"A",{id:!0,class:!0,href:!0});var B_=i(Po);ri=r(B_,"SPAN",{});var R_=i(ri);w(hs.$$.fragment,R_),R_.forEach(t),B_.forEach(t),bm=h(Md),ii=r(Md,"SPAN",{});var V_=i(ii);km=s(V_,"XLMForSequenceClassification"),V_.forEach(t),Md.forEach(t),Il=h(o),Ue=r(o,"DIV",{class:!0});var Lt=i(Ue);w(us.$$.fragment,Lt),vm=h(Lt),li=r(Lt,"P",{});var Y_=i(li);Tm=s(Y_,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Y_.forEach(t),wm=h(Lt),fs=r(Lt,"P",{});var yd=i(fs);Mm=s(yd,"This model inherits from "),Ha=r(yd,"A",{href:!0});var G_=i(Ha);ym=s(G_,"PreTrainedModel"),G_.forEach(t),$m=s(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd.forEach(t),Lm=h(Lt),gs=r(Lt,"P",{});var $d=i(gs);xm=s($d,"This model is also a PyTorch "),_s=r($d,"A",{href:!0,rel:!0});var K_=i(_s);Fm=s(K_,"torch.nn.Module"),K_.forEach(t),Xm=s($d,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$d.forEach(t),Em=h(Lt),je=r(Lt,"DIV",{class:!0});var ot=i(je);w(bs.$$.fragment,ot),qm=h(ot),Rt=r(ot,"P",{});var fr=i(Rt);zm=s(fr,"The "),Qa=r(fr,"A",{href:!0});var J_=i(Qa);Cm=s(J_,"XLMForSequenceClassification"),J_.forEach(t),jm=s(fr," forward method, overrides the "),di=r(fr,"CODE",{});var Z_=i(di);Pm=s(Z_,"__call__"),Z_.forEach(t),Am=s(fr," special method."),fr.forEach(t),Om=h(ot),w(Ao.$$.fragment,ot),Sm=h(ot),w(Oo.$$.fragment,ot),Nm=h(ot),w(So.$$.fragment,ot),Im=h(ot),w(No.$$.fragment,ot),Dm=h(ot),w(Io.$$.fragment,ot),ot.forEach(t),Lt.forEach(t),Dl=h(o),Vt=r(o,"H2",{class:!0});var Ld=i(Vt);Do=r(Ld,"A",{id:!0,class:!0,href:!0});var eb=i(Do);ci=r(eb,"SPAN",{});var tb=i(ci);w(ks.$$.fragment,tb),tb.forEach(t),eb.forEach(t),Wm=h(Ld),pi=r(Ld,"SPAN",{});var ob=i(pi);Hm=s(ob,"XLMForMultipleChoice"),ob.forEach(t),Ld.forEach(t),Wl=h(o),Be=r(o,"DIV",{class:!0});var xt=i(Be);w(vs.$$.fragment,xt),Qm=h(xt),mi=r(xt,"P",{});var nb=i(mi);Um=s(nb,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),nb.forEach(t),Bm=h(xt),Ts=r(xt,"P",{});var xd=i(Ts);Rm=s(xd,"This model inherits from "),Ua=r(xd,"A",{href:!0});var sb=i(Ua);Vm=s(sb,"PreTrainedModel"),sb.forEach(t),Ym=s(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Gm=h(xt),ws=r(xt,"P",{});var Fd=i(ws);Km=s(Fd,"This model is also a PyTorch "),Ms=r(Fd,"A",{href:!0,rel:!0});var ab=i(Ms);Jm=s(ab,"torch.nn.Module"),ab.forEach(t),Zm=s(Fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fd.forEach(t),eh=h(xt),rt=r(xt,"DIV",{class:!0});var zn=i(rt);w(ys.$$.fragment,zn),th=h(zn),Yt=r(zn,"P",{});var gr=i(Yt);oh=s(gr,"The "),Ba=r(gr,"A",{href:!0});var rb=i(Ba);nh=s(rb,"XLMForMultipleChoice"),rb.forEach(t),sh=s(gr," forward method, overrides the "),hi=r(gr,"CODE",{});var ib=i(hi);ah=s(ib,"__call__"),ib.forEach(t),rh=s(gr," special method."),gr.forEach(t),ih=h(zn),w(Wo.$$.fragment,zn),lh=h(zn),w(Ho.$$.fragment,zn),zn.forEach(t),xt.forEach(t),Hl=h(o),Gt=r(o,"H2",{class:!0});var Xd=i(Gt);Qo=r(Xd,"A",{id:!0,class:!0,href:!0});var lb=i(Qo);ui=r(lb,"SPAN",{});var db=i(ui);w($s.$$.fragment,db),db.forEach(t),lb.forEach(t),dh=h(Xd),fi=r(Xd,"SPAN",{});var cb=i(fi);ch=s(cb,"XLMForTokenClassification"),cb.forEach(t),Xd.forEach(t),Ql=h(o),Re=r(o,"DIV",{class:!0});var Ft=i(Re);w(Ls.$$.fragment,Ft),ph=h(Ft),gi=r(Ft,"P",{});var pb=i(gi);mh=s(pb,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pb.forEach(t),hh=h(Ft),xs=r(Ft,"P",{});var Ed=i(xs);uh=s(Ed,"This model inherits from "),Ra=r(Ed,"A",{href:!0});var mb=i(Ra);fh=s(mb,"PreTrainedModel"),mb.forEach(t),gh=s(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),_h=h(Ft),Fs=r(Ft,"P",{});var qd=i(Fs);bh=s(qd,"This model is also a PyTorch "),Xs=r(qd,"A",{href:!0,rel:!0});var hb=i(Xs);kh=s(hb,"torch.nn.Module"),hb.forEach(t),vh=s(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Th=h(Ft),Ke=r(Ft,"DIV",{class:!0});var Xt=i(Ke);w(Es.$$.fragment,Xt),wh=h(Xt),Kt=r(Xt,"P",{});var _r=i(Kt);Mh=s(_r,"The "),Va=r(_r,"A",{href:!0});var ub=i(Va);yh=s(ub,"XLMForTokenClassification"),ub.forEach(t),$h=s(_r," forward method, overrides the "),_i=r(_r,"CODE",{});var fb=i(_i);Lh=s(fb,"__call__"),fb.forEach(t),xh=s(_r," special method."),_r.forEach(t),Fh=h(Xt),w(Uo.$$.fragment,Xt),Xh=h(Xt),w(Bo.$$.fragment,Xt),Eh=h(Xt),w(Ro.$$.fragment,Xt),Xt.forEach(t),Ft.forEach(t),Ul=h(o),Jt=r(o,"H2",{class:!0});var zd=i(Jt);Vo=r(zd,"A",{id:!0,class:!0,href:!0});var gb=i(Vo);bi=r(gb,"SPAN",{});var _b=i(bi);w(qs.$$.fragment,_b),_b.forEach(t),gb.forEach(t),qh=h(zd),ki=r(zd,"SPAN",{});var bb=i(ki);zh=s(bb,"XLMForQuestionAnsweringSimple"),bb.forEach(t),zd.forEach(t),Bl=h(o),Ve=r(o,"DIV",{class:!0});var Et=i(Ve);w(zs.$$.fragment,Et),Ch=h(Et),Zt=r(Et,"P",{});var br=i(Zt);jh=s(br,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vi=r(br,"CODE",{});var kb=i(vi);Ph=s(kb,"span start logits"),kb.forEach(t),Ah=s(br," and "),Ti=r(br,"CODE",{});var vb=i(Ti);Oh=s(vb,"span end logits"),vb.forEach(t),Sh=s(br,")."),br.forEach(t),Nh=h(Et),Cs=r(Et,"P",{});var Cd=i(Cs);Ih=s(Cd,"This model inherits from "),Ya=r(Cd,"A",{href:!0});var Tb=i(Ya);Dh=s(Tb,"PreTrainedModel"),Tb.forEach(t),Wh=s(Cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd.forEach(t),Hh=h(Et),js=r(Et,"P",{});var jd=i(js);Qh=s(jd,"This model is also a PyTorch "),Ps=r(jd,"A",{href:!0,rel:!0});var wb=i(Ps);Uh=s(wb,"torch.nn.Module"),wb.forEach(t),Bh=s(jd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd.forEach(t),Rh=h(Et),Je=r(Et,"DIV",{class:!0});var qt=i(Je);w(As.$$.fragment,qt),Vh=h(qt),eo=r(qt,"P",{});var kr=i(eo);Yh=s(kr,"The "),Ga=r(kr,"A",{href:!0});var Mb=i(Ga);Gh=s(Mb,"XLMForQuestionAnsweringSimple"),Mb.forEach(t),Kh=s(kr," forward method, overrides the "),wi=r(kr,"CODE",{});var yb=i(wi);Jh=s(yb,"__call__"),yb.forEach(t),Zh=s(kr," special method."),kr.forEach(t),eu=h(qt),w(Yo.$$.fragment,qt),tu=h(qt),w(Go.$$.fragment,qt),ou=h(qt),w(Ko.$$.fragment,qt),qt.forEach(t),Et.forEach(t),Rl=h(o),to=r(o,"H2",{class:!0});var Pd=i(to);Jo=r(Pd,"A",{id:!0,class:!0,href:!0});var $b=i(Jo);Mi=r($b,"SPAN",{});var Lb=i(Mi);w(Os.$$.fragment,Lb),Lb.forEach(t),$b.forEach(t),nu=h(Pd),yi=r(Pd,"SPAN",{});var xb=i(yi);su=s(xb,"XLMForQuestionAnswering"),xb.forEach(t),Pd.forEach(t),Vl=h(o),Ye=r(o,"DIV",{class:!0});var zt=i(Ye);w(Ss.$$.fragment,zt),au=h(zt),oo=r(zt,"P",{});var vr=i(oo);ru=s(vr,`XLM Model with a beam-search span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),$i=r(vr,"CODE",{});var Fb=i($i);iu=s(Fb,"span start logits"),Fb.forEach(t),lu=s(vr," and "),Li=r(vr,"CODE",{});var Xb=i(Li);du=s(Xb,"span end logits"),Xb.forEach(t),cu=s(vr,")."),vr.forEach(t),pu=h(zt),Ns=r(zt,"P",{});var Ad=i(Ns);mu=s(Ad,"This model inherits from "),Ka=r(Ad,"A",{href:!0});var Eb=i(Ka);hu=s(Eb,"PreTrainedModel"),Eb.forEach(t),uu=s(Ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ad.forEach(t),fu=h(zt),Is=r(zt,"P",{});var Od=i(Is);gu=s(Od,"This model is also a PyTorch "),Ds=r(Od,"A",{href:!0,rel:!0});var qb=i(Ds);_u=s(qb,"torch.nn.Module"),qb.forEach(t),bu=s(Od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Od.forEach(t),ku=h(zt),it=r(zt,"DIV",{class:!0});var Cn=i(it);w(Ws.$$.fragment,Cn),vu=h(Cn),no=r(Cn,"P",{});var Tr=i(no);Tu=s(Tr,"The "),Ja=r(Tr,"A",{href:!0});var zb=i(Ja);wu=s(zb,"XLMForQuestionAnswering"),zb.forEach(t),Mu=s(Tr," forward method, overrides the "),xi=r(Tr,"CODE",{});var Cb=i(xi);yu=s(Cb,"__call__"),Cb.forEach(t),$u=s(Tr," special method."),Tr.forEach(t),Lu=h(Cn),w(Zo.$$.fragment,Cn),xu=h(Cn),w(en.$$.fragment,Cn),Cn.forEach(t),zt.forEach(t),Yl=h(o),so=r(o,"H2",{class:!0});var Sd=i(so);tn=r(Sd,"A",{id:!0,class:!0,href:!0});var jb=i(tn);Fi=r(jb,"SPAN",{});var Pb=i(Fi);w(Hs.$$.fragment,Pb),Pb.forEach(t),jb.forEach(t),Fu=h(Sd),Xi=r(Sd,"SPAN",{});var Ab=i(Xi);Xu=s(Ab,"TFXLMModel"),Ab.forEach(t),Sd.forEach(t),Gl=h(o),Ae=r(o,"DIV",{class:!0});var mt=i(Ae);w(Qs.$$.fragment,mt),Eu=h(mt),Ei=r(mt,"P",{});var Ob=i(Ei);qu=s(Ob,"The bare XLM Model transformer outputting raw hidden-states without any specific head on top."),Ob.forEach(t),zu=h(mt),Us=r(mt,"P",{});var Nd=i(Us);Cu=s(Nd,"This model inherits from "),Za=r(Nd,"A",{href:!0});var Sb=i(Za);ju=s(Sb,"TFPreTrainedModel"),Sb.forEach(t),Pu=s(Nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd.forEach(t),Au=h(mt),Bs=r(mt,"P",{});var Id=i(Bs);Ou=s(Id,"This model is also a "),Rs=r(Id,"A",{href:!0,rel:!0});var Nb=i(Rs);Su=s(Nb,"tf.keras.Model"),Nb.forEach(t),Nu=s(Id,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Id.forEach(t),Iu=h(mt),w(on.$$.fragment,mt),Du=h(mt),lt=r(mt,"DIV",{class:!0});var jn=i(lt);w(Vs.$$.fragment,jn),Wu=h(jn),ao=r(jn,"P",{});var wr=i(ao);Hu=s(wr,"The "),er=r(wr,"A",{href:!0});var Ib=i(er);Qu=s(Ib,"TFXLMModel"),Ib.forEach(t),Uu=s(wr," forward method, overrides the "),qi=r(wr,"CODE",{});var Db=i(qi);Bu=s(Db,"__call__"),Db.forEach(t),Ru=s(wr," special method."),wr.forEach(t),Vu=h(jn),w(nn.$$.fragment,jn),Yu=h(jn),w(sn.$$.fragment,jn),jn.forEach(t),mt.forEach(t),Kl=h(o),ro=r(o,"H2",{class:!0});var Dd=i(ro);an=r(Dd,"A",{id:!0,class:!0,href:!0});var Wb=i(an);zi=r(Wb,"SPAN",{});var Hb=i(zi);w(Ys.$$.fragment,Hb),Hb.forEach(t),Wb.forEach(t),Gu=h(Dd),Ci=r(Dd,"SPAN",{});var Qb=i(Ci);Ku=s(Qb,"TFXLMWithLMHeadModel"),Qb.forEach(t),Dd.forEach(t),Jl=h(o),Oe=r(o,"DIV",{class:!0});var ht=i(Oe);w(Gs.$$.fragment,ht),Ju=h(ht),ji=r(ht,"P",{});var Ub=i(ji);Zu=s(Ub,`The XLM Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ub.forEach(t),ef=h(ht),Ks=r(ht,"P",{});var Wd=i(Ks);tf=s(Wd,"This model inherits from "),tr=r(Wd,"A",{href:!0});var Bb=i(tr);of=s(Bb,"TFPreTrainedModel"),Bb.forEach(t),nf=s(Wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wd.forEach(t),sf=h(ht),Js=r(ht,"P",{});var Hd=i(Js);af=s(Hd,"This model is also a "),Zs=r(Hd,"A",{href:!0,rel:!0});var Rb=i(Zs);rf=s(Rb,"tf.keras.Model"),Rb.forEach(t),lf=s(Hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hd.forEach(t),df=h(ht),w(rn.$$.fragment,ht),cf=h(ht),dt=r(ht,"DIV",{class:!0});var Pn=i(dt);w(ea.$$.fragment,Pn),pf=h(Pn),io=r(Pn,"P",{});var Mr=i(io);mf=s(Mr,"The "),or=r(Mr,"A",{href:!0});var Vb=i(or);hf=s(Vb,"TFXLMWithLMHeadModel"),Vb.forEach(t),uf=s(Mr," forward method, overrides the "),Pi=r(Mr,"CODE",{});var Yb=i(Pi);ff=s(Yb,"__call__"),Yb.forEach(t),gf=s(Mr," special method."),Mr.forEach(t),_f=h(Pn),w(ln.$$.fragment,Pn),bf=h(Pn),w(dn.$$.fragment,Pn),Pn.forEach(t),ht.forEach(t),Zl=h(o),lo=r(o,"H2",{class:!0});var Qd=i(lo);cn=r(Qd,"A",{id:!0,class:!0,href:!0});var Gb=i(cn);Ai=r(Gb,"SPAN",{});var Kb=i(Ai);w(ta.$$.fragment,Kb),Kb.forEach(t),Gb.forEach(t),kf=h(Qd),Oi=r(Qd,"SPAN",{});var Jb=i(Oi);vf=s(Jb,"TFXLMForSequenceClassification"),Jb.forEach(t),Qd.forEach(t),ed=h(o),Se=r(o,"DIV",{class:!0});var ut=i(Se);w(oa.$$.fragment,ut),Tf=h(ut),Si=r(ut,"P",{});var Zb=i(Si);wf=s(Zb,`XLM Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Zb.forEach(t),Mf=h(ut),na=r(ut,"P",{});var Ud=i(na);yf=s(Ud,"This model inherits from "),nr=r(Ud,"A",{href:!0});var ek=i(nr);$f=s(ek,"TFPreTrainedModel"),ek.forEach(t),Lf=s(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),xf=h(ut),sa=r(ut,"P",{});var Bd=i(sa);Ff=s(Bd,"This model is also a "),aa=r(Bd,"A",{href:!0,rel:!0});var tk=i(aa);Xf=s(tk,"tf.keras.Model"),tk.forEach(t),Ef=s(Bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bd.forEach(t),qf=h(ut),w(pn.$$.fragment,ut),zf=h(ut),Ze=r(ut,"DIV",{class:!0});var Ct=i(Ze);w(ra.$$.fragment,Ct),Cf=h(Ct),co=r(Ct,"P",{});var yr=i(co);jf=s(yr,"The "),sr=r(yr,"A",{href:!0});var ok=i(sr);Pf=s(ok,"TFXLMForSequenceClassification"),ok.forEach(t),Af=s(yr," forward method, overrides the "),Ni=r(yr,"CODE",{});var nk=i(Ni);Of=s(nk,"__call__"),nk.forEach(t),Sf=s(yr," special method."),yr.forEach(t),Nf=h(Ct),w(mn.$$.fragment,Ct),If=h(Ct),w(hn.$$.fragment,Ct),Df=h(Ct),w(un.$$.fragment,Ct),Ct.forEach(t),ut.forEach(t),td=h(o),po=r(o,"H2",{class:!0});var Rd=i(po);fn=r(Rd,"A",{id:!0,class:!0,href:!0});var sk=i(fn);Ii=r(sk,"SPAN",{});var ak=i(Ii);w(ia.$$.fragment,ak),ak.forEach(t),sk.forEach(t),Wf=h(Rd),Di=r(Rd,"SPAN",{});var rk=i(Di);Hf=s(rk,"TFXLMForMultipleChoice"),rk.forEach(t),Rd.forEach(t),od=h(o),Ne=r(o,"DIV",{class:!0});var ft=i(Ne);w(la.$$.fragment,ft),Qf=h(ft),Wi=r(ft,"P",{});var ik=i(Wi);Uf=s(ik,`XLM Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ik.forEach(t),Bf=h(ft),da=r(ft,"P",{});var Vd=i(da);Rf=s(Vd,"This model inherits from "),ar=r(Vd,"A",{href:!0});var lk=i(ar);Vf=s(lk,"TFPreTrainedModel"),lk.forEach(t),Yf=s(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),Gf=h(ft),ca=r(ft,"P",{});var Yd=i(ca);Kf=s(Yd,"This model is also a "),pa=r(Yd,"A",{href:!0,rel:!0});var dk=i(pa);Jf=s(dk,"tf.keras.Model"),dk.forEach(t),Zf=s(Yd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yd.forEach(t),eg=h(ft),w(gn.$$.fragment,ft),tg=h(ft),ct=r(ft,"DIV",{class:!0});var An=i(ct);w(ma.$$.fragment,An),og=h(An),mo=r(An,"P",{});var $r=i(mo);ng=s($r,"The "),rr=r($r,"A",{href:!0});var ck=i(rr);sg=s(ck,"TFXLMForMultipleChoice"),ck.forEach(t),ag=s($r," forward method, overrides the "),Hi=r($r,"CODE",{});var pk=i(Hi);rg=s(pk,"__call__"),pk.forEach(t),ig=s($r," special method."),$r.forEach(t),lg=h(An),w(_n.$$.fragment,An),dg=h(An),w(bn.$$.fragment,An),An.forEach(t),ft.forEach(t),nd=h(o),ho=r(o,"H2",{class:!0});var Gd=i(ho);kn=r(Gd,"A",{id:!0,class:!0,href:!0});var mk=i(kn);Qi=r(mk,"SPAN",{});var hk=i(Qi);w(ha.$$.fragment,hk),hk.forEach(t),mk.forEach(t),cg=h(Gd),Ui=r(Gd,"SPAN",{});var uk=i(Ui);pg=s(uk,"TFXLMForTokenClassification"),uk.forEach(t),Gd.forEach(t),sd=h(o),Ie=r(o,"DIV",{class:!0});var gt=i(Ie);w(ua.$$.fragment,gt),mg=h(gt),Bi=r(gt,"P",{});var fk=i(Bi);hg=s(fk,`XLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fk.forEach(t),ug=h(gt),fa=r(gt,"P",{});var Kd=i(fa);fg=s(Kd,"This model inherits from "),ir=r(Kd,"A",{href:!0});var gk=i(ir);gg=s(gk,"TFPreTrainedModel"),gk.forEach(t),_g=s(Kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd.forEach(t),bg=h(gt),ga=r(gt,"P",{});var Jd=i(ga);kg=s(Jd,"This model is also a "),_a=r(Jd,"A",{href:!0,rel:!0});var _k=i(_a);vg=s(_k,"tf.keras.Model"),_k.forEach(t),Tg=s(Jd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jd.forEach(t),wg=h(gt),w(vn.$$.fragment,gt),Mg=h(gt),et=r(gt,"DIV",{class:!0});var jt=i(et);w(ba.$$.fragment,jt),yg=h(jt),uo=r(jt,"P",{});var Lr=i(uo);$g=s(Lr,"The "),lr=r(Lr,"A",{href:!0});var bk=i(lr);Lg=s(bk,"TFXLMForTokenClassification"),bk.forEach(t),xg=s(Lr," forward method, overrides the "),Ri=r(Lr,"CODE",{});var kk=i(Ri);Fg=s(kk,"__call__"),kk.forEach(t),Xg=s(Lr," special method."),Lr.forEach(t),Eg=h(jt),w(Tn.$$.fragment,jt),qg=h(jt),w(wn.$$.fragment,jt),zg=h(jt),w(Mn.$$.fragment,jt),jt.forEach(t),gt.forEach(t),ad=h(o),fo=r(o,"H2",{class:!0});var Zd=i(fo);yn=r(Zd,"A",{id:!0,class:!0,href:!0});var vk=i(yn);Vi=r(vk,"SPAN",{});var Tk=i(Vi);w(ka.$$.fragment,Tk),Tk.forEach(t),vk.forEach(t),Cg=h(Zd),Yi=r(Zd,"SPAN",{});var wk=i(Yi);jg=s(wk,"TFXLMForQuestionAnsweringSimple"),wk.forEach(t),Zd.forEach(t),rd=h(o),De=r(o,"DIV",{class:!0});var _t=i(De);w(va.$$.fragment,_t),Pg=h(_t),go=r(_t,"P",{});var xr=i(go);Ag=s(xr,`XLM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Gi=r(xr,"CODE",{});var Mk=i(Gi);Og=s(Mk,"span start logits"),Mk.forEach(t),Sg=s(xr," and "),Ki=r(xr,"CODE",{});var yk=i(Ki);Ng=s(yk,"span end logits"),yk.forEach(t),Ig=s(xr,")."),xr.forEach(t),Dg=h(_t),Ta=r(_t,"P",{});var ec=i(Ta);Wg=s(ec,"This model inherits from "),dr=r(ec,"A",{href:!0});var $k=i(dr);Hg=s($k,"TFPreTrainedModel"),$k.forEach(t),Qg=s(ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ec.forEach(t),Ug=h(_t),wa=r(_t,"P",{});var tc=i(wa);Bg=s(tc,"This model is also a "),Ma=r(tc,"A",{href:!0,rel:!0});var Lk=i(Ma);Rg=s(Lk,"tf.keras.Model"),Lk.forEach(t),Vg=s(tc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tc.forEach(t),Yg=h(_t),w($n.$$.fragment,_t),Gg=h(_t),tt=r(_t,"DIV",{class:!0});var Pt=i(tt);w(ya.$$.fragment,Pt),Kg=h(Pt),_o=r(Pt,"P",{});var Fr=i(_o);Jg=s(Fr,"The "),cr=r(Fr,"A",{href:!0});var xk=i(cr);Zg=s(xk,"TFXLMForQuestionAnsweringSimple"),xk.forEach(t),e_=s(Fr," forward method, overrides the "),Ji=r(Fr,"CODE",{});var Fk=i(Ji);t_=s(Fk,"__call__"),Fk.forEach(t),o_=s(Fr," special method."),Fr.forEach(t),n_=h(Pt),w(Ln.$$.fragment,Pt),s_=h(Pt),w(xn.$$.fragment,Pt),a_=h(Pt),w(Fn.$$.fragment,Pt),Pt.forEach(t),_t.forEach(t),this.h()},h(){k(d,"name","hf:doc:metadata"),k(d,"content",JSON.stringify(y1)),k(p,"id","xlm"),k(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(p,"href","#xlm"),k(c,"class","relative group"),k(Z,"id","overview"),k(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Z,"href","#overview"),k(E,"class","relative group"),k(te,"href","https://arxiv.org/abs/1901.07291"),k(te,"rel","nofollow"),k(N,"href","../multilingual"),k(oe,"href","https://huggingface.co/thomwolf"),k(oe,"rel","nofollow"),k(On,"href","https://github.com/facebookresearch/XLM/"),k(On,"rel","nofollow"),k(wo,"id","transformers.XLMConfig"),k(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(wo,"href","#transformers.XLMConfig"),k(At,"class","relative group"),k(qa,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMModel"),k(za,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMModel"),k(In,"href","https://huggingface.co/xlm-mlm-en-2048"),k(In,"rel","nofollow"),k(Ca,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),k(ja,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(yo,"id","transformers.XLMTokenizer"),k(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(yo,"href","#transformers.XLMTokenizer"),k(St,"class","relative group"),k(Pa,"href","/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),k(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Sa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(xo,"id","transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),k(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(xo,"href","#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"),k(It,"class","relative group"),k(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fo,"id","transformers.XLMModel"),k(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Fo,"href","#transformers.XLMModel"),k(Wt,"class","relative group"),k(Na,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),k(as,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(as,"rel","nofollow"),k(Ia,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMModel"),k(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qo,"id","transformers.XLMWithLMHeadModel"),k(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(qo,"href","#transformers.XLMWithLMHeadModel"),k(Qt,"class","relative group"),k(Da,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),k(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(ps,"rel","nofollow"),k(Wa,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),k(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Po,"id","transformers.XLMForSequenceClassification"),k(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Po,"href","#transformers.XLMForSequenceClassification"),k(Bt,"class","relative group"),k(Ha,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),k(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(_s,"rel","nofollow"),k(Qa,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMForSequenceClassification"),k(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Do,"id","transformers.XLMForMultipleChoice"),k(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Do,"href","#transformers.XLMForMultipleChoice"),k(Vt,"class","relative group"),k(Ua,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),k(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ms,"rel","nofollow"),k(Ba,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMForMultipleChoice"),k(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Qo,"id","transformers.XLMForTokenClassification"),k(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Qo,"href","#transformers.XLMForTokenClassification"),k(Gt,"class","relative group"),k(Ra,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),k(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Xs,"rel","nofollow"),k(Va,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMForTokenClassification"),k(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Vo,"id","transformers.XLMForQuestionAnsweringSimple"),k(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Vo,"href","#transformers.XLMForQuestionAnsweringSimple"),k(Jt,"class","relative group"),k(Ya,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),k(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ps,"rel","nofollow"),k(Ga,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jo,"id","transformers.XLMForQuestionAnswering"),k(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jo,"href","#transformers.XLMForQuestionAnswering"),k(to,"class","relative group"),k(Ka,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),k(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ds,"rel","nofollow"),k(Ja,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),k(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tn,"id","transformers.TFXLMModel"),k(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(tn,"href","#transformers.TFXLMModel"),k(so,"class","relative group"),k(Za,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),k(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Rs,"rel","nofollow"),k(er,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMModel"),k(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(an,"id","transformers.TFXLMWithLMHeadModel"),k(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(an,"href","#transformers.TFXLMWithLMHeadModel"),k(ro,"class","relative group"),k(tr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),k(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Zs,"rel","nofollow"),k(or,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMWithLMHeadModel"),k(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(cn,"id","transformers.TFXLMForSequenceClassification"),k(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(cn,"href","#transformers.TFXLMForSequenceClassification"),k(lo,"class","relative group"),k(nr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),k(aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(aa,"rel","nofollow"),k(sr,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(fn,"id","transformers.TFXLMForMultipleChoice"),k(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(fn,"href","#transformers.TFXLMForMultipleChoice"),k(po,"class","relative group"),k(ar,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),k(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(pa,"rel","nofollow"),k(rr,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),k(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(kn,"id","transformers.TFXLMForTokenClassification"),k(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(kn,"href","#transformers.TFXLMForTokenClassification"),k(ho,"class","relative group"),k(ir,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),k(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(_a,"rel","nofollow"),k(lr,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(yn,"id","transformers.TFXLMForQuestionAnsweringSimple"),k(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(yn,"href","#transformers.TFXLMForQuestionAnsweringSimple"),k(fo,"class","relative group"),k(dr,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),k(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Ma,"rel","nofollow"),k(cr,"href","/docs/transformers/pr_17196/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,d),_(o,f,v),_(o,c,v),e(c,p),e(p,b),M(l,b,null),e(c,u),e(c,X),e(X,de),_(o,Y,v),_(o,E,v),e(E,Z),e(Z,I),M(ee,I,null),e(E,ce),e(E,D),e(D,pe),_(o,re,v),_(o,R,v),e(R,P),e(R,te),e(te,K),e(R,q),_(o,C,v),_(o,G,v),e(G,W),e(W,me),e(G,he),e(G,H),e(H,ue),e(G,fe),e(G,z),e(z,ge),_(o,Q,v),_(o,ne,v),e(ne,_e),_(o,U,v),_(o,se,v),e(se,ae),e(ae,A),_(o,ie,v),_(o,S,v),e(S,be),_(o,g,v),_(o,F,v),e(F,V),e(V,Me),e(F,ye),e(F,j),e(j,$e),e(j,we),e(we,Le),e(j,O),e(j,N),e(N,xe),e(j,Fe),_(o,B,v),_(o,le,v),e(le,Xe),e(le,oe),e(oe,Ee),e(le,oc),e(le,On),e(On,nc),e(le,sc),_(o,Xl,v),_(o,At,v),e(At,wo),e(wo,Xr),M(Sn,Xr,null),e(At,ac),e(At,Er),e(Er,rc),_(o,El,v),_(o,nt,v),M(Nn,nt,null),e(nt,ic),e(nt,bt),e(bt,lc),e(bt,qa),e(qa,dc),e(bt,cc),e(bt,za),e(za,pc),e(bt,mc),e(bt,In),e(In,hc),e(bt,uc),e(nt,fc),e(nt,Ot),e(Ot,gc),e(Ot,Ca),e(Ca,_c),e(Ot,bc),e(Ot,ja),e(ja,kc),e(Ot,vc),e(nt,Tc),M(Mo,nt,null),_(o,ql,v),_(o,St,v),e(St,yo),e(yo,qr),M(Dn,qr,null),e(St,wc),e(St,zr),e(zr,Mc),_(o,zl,v),_(o,qe,v),M(Wn,qe,null),e(qe,yc),e(qe,Cr),e(Cr,$c),e(qe,Lc),e(qe,We),e(We,jr),e(jr,xc),e(We,Fc),e(We,Pr),e(Pr,Xc),e(We,Ec),e(We,Ar),e(Ar,qc),e(We,zc),e(We,kt),e(kt,Cc),e(kt,Or),e(Or,jc),e(kt,Pc),e(kt,Sr),e(Sr,Ac),e(kt,Oc),e(kt,Nr),e(Nr,Sc),e(kt,Nc),e(We,Ic),e(We,Hn),e(Hn,Dc),e(Hn,Ir),e(Ir,Wc),e(Hn,Hc),e(We,Qc),e(We,Qn),e(Qn,Uc),e(Qn,Dr),e(Dr,Bc),e(Qn,Rc),e(qe,Vc),e(qe,Un),e(Un,Yc),e(Un,Pa),e(Pa,Gc),e(Un,Kc),e(qe,Jc),e(qe,wt),M(Bn,wt,null),e(wt,Zc),e(wt,Wr),e(Wr,ep),e(wt,tp),e(wt,Rn),e(Rn,Aa),e(Aa,op),e(Aa,Hr),e(Hr,np),e(Rn,sp),e(Rn,Oa),e(Oa,ap),e(Oa,Qr),e(Qr,rp),e(qe,ip),e(qe,$o),M(Vn,$o,null),e($o,lp),e($o,Yn),e(Yn,dp),e(Yn,Ur),e(Ur,cp),e(Yn,pp),e(qe,mp),e(qe,st),M(Gn,st,null),e(st,hp),e(st,Br),e(Br,up),e(st,fp),M(Lo,st,null),e(st,gp),e(st,Nt),e(Nt,_p),e(Nt,Rr),e(Rr,bp),e(Nt,kp),e(Nt,Vr),e(Vr,vp),e(Nt,Tp),e(qe,wp),e(qe,Sa),M(Kn,Sa,null),_(o,Cl,v),_(o,It,v),e(It,xo),e(xo,Yr),M(Jn,Yr,null),e(It,Mp),e(It,Gr),e(Gr,yp),_(o,jl,v),_(o,Dt,v),M(Zn,Dt,null),e(Dt,$p),e(Dt,es),e(es,Lp),e(es,Kr),e(Kr,xp),e(es,Fp),_(o,Pl,v),_(o,Wt,v),e(Wt,Fo),e(Fo,Jr),M(ts,Jr,null),e(Wt,Xp),e(Wt,Zr),e(Zr,Ep),_(o,Al,v),_(o,He,v),M(os,He,null),e(He,qp),e(He,ei),e(ei,zp),e(He,Cp),e(He,ns),e(ns,jp),e(ns,Na),e(Na,Pp),e(ns,Ap),e(He,Op),e(He,ss),e(ss,Sp),e(ss,as),e(as,Np),e(ss,Ip),e(He,Dp),e(He,at),M(rs,at,null),e(at,Wp),e(at,Ht),e(Ht,Hp),e(Ht,Ia),e(Ia,Qp),e(Ht,Up),e(Ht,ti),e(ti,Bp),e(Ht,Rp),e(at,Vp),M(Xo,at,null),e(at,Yp),M(Eo,at,null),_(o,Ol,v),_(o,Qt,v),e(Qt,qo),e(qo,oi),M(is,oi,null),e(Qt,Gp),e(Qt,ni),e(ni,Kp),_(o,Sl,v),_(o,Qe,v),M(ls,Qe,null),e(Qe,Jp),e(Qe,si),e(si,Zp),e(Qe,em),e(Qe,ds),e(ds,tm),e(ds,Da),e(Da,om),e(ds,nm),e(Qe,sm),e(Qe,cs),e(cs,am),e(cs,ps),e(ps,rm),e(cs,im),e(Qe,lm),e(Qe,Ge),M(ms,Ge,null),e(Ge,dm),e(Ge,Ut),e(Ut,cm),e(Ut,Wa),e(Wa,pm),e(Ut,mm),e(Ut,ai),e(ai,hm),e(Ut,um),e(Ge,fm),M(zo,Ge,null),e(Ge,gm),M(Co,Ge,null),e(Ge,_m),M(jo,Ge,null),_(o,Nl,v),_(o,Bt,v),e(Bt,Po),e(Po,ri),M(hs,ri,null),e(Bt,bm),e(Bt,ii),e(ii,km),_(o,Il,v),_(o,Ue,v),M(us,Ue,null),e(Ue,vm),e(Ue,li),e(li,Tm),e(Ue,wm),e(Ue,fs),e(fs,Mm),e(fs,Ha),e(Ha,ym),e(fs,$m),e(Ue,Lm),e(Ue,gs),e(gs,xm),e(gs,_s),e(_s,Fm),e(gs,Xm),e(Ue,Em),e(Ue,je),M(bs,je,null),e(je,qm),e(je,Rt),e(Rt,zm),e(Rt,Qa),e(Qa,Cm),e(Rt,jm),e(Rt,di),e(di,Pm),e(Rt,Am),e(je,Om),M(Ao,je,null),e(je,Sm),M(Oo,je,null),e(je,Nm),M(So,je,null),e(je,Im),M(No,je,null),e(je,Dm),M(Io,je,null),_(o,Dl,v),_(o,Vt,v),e(Vt,Do),e(Do,ci),M(ks,ci,null),e(Vt,Wm),e(Vt,pi),e(pi,Hm),_(o,Wl,v),_(o,Be,v),M(vs,Be,null),e(Be,Qm),e(Be,mi),e(mi,Um),e(Be,Bm),e(Be,Ts),e(Ts,Rm),e(Ts,Ua),e(Ua,Vm),e(Ts,Ym),e(Be,Gm),e(Be,ws),e(ws,Km),e(ws,Ms),e(Ms,Jm),e(ws,Zm),e(Be,eh),e(Be,rt),M(ys,rt,null),e(rt,th),e(rt,Yt),e(Yt,oh),e(Yt,Ba),e(Ba,nh),e(Yt,sh),e(Yt,hi),e(hi,ah),e(Yt,rh),e(rt,ih),M(Wo,rt,null),e(rt,lh),M(Ho,rt,null),_(o,Hl,v),_(o,Gt,v),e(Gt,Qo),e(Qo,ui),M($s,ui,null),e(Gt,dh),e(Gt,fi),e(fi,ch),_(o,Ql,v),_(o,Re,v),M(Ls,Re,null),e(Re,ph),e(Re,gi),e(gi,mh),e(Re,hh),e(Re,xs),e(xs,uh),e(xs,Ra),e(Ra,fh),e(xs,gh),e(Re,_h),e(Re,Fs),e(Fs,bh),e(Fs,Xs),e(Xs,kh),e(Fs,vh),e(Re,Th),e(Re,Ke),M(Es,Ke,null),e(Ke,wh),e(Ke,Kt),e(Kt,Mh),e(Kt,Va),e(Va,yh),e(Kt,$h),e(Kt,_i),e(_i,Lh),e(Kt,xh),e(Ke,Fh),M(Uo,Ke,null),e(Ke,Xh),M(Bo,Ke,null),e(Ke,Eh),M(Ro,Ke,null),_(o,Ul,v),_(o,Jt,v),e(Jt,Vo),e(Vo,bi),M(qs,bi,null),e(Jt,qh),e(Jt,ki),e(ki,zh),_(o,Bl,v),_(o,Ve,v),M(zs,Ve,null),e(Ve,Ch),e(Ve,Zt),e(Zt,jh),e(Zt,vi),e(vi,Ph),e(Zt,Ah),e(Zt,Ti),e(Ti,Oh),e(Zt,Sh),e(Ve,Nh),e(Ve,Cs),e(Cs,Ih),e(Cs,Ya),e(Ya,Dh),e(Cs,Wh),e(Ve,Hh),e(Ve,js),e(js,Qh),e(js,Ps),e(Ps,Uh),e(js,Bh),e(Ve,Rh),e(Ve,Je),M(As,Je,null),e(Je,Vh),e(Je,eo),e(eo,Yh),e(eo,Ga),e(Ga,Gh),e(eo,Kh),e(eo,wi),e(wi,Jh),e(eo,Zh),e(Je,eu),M(Yo,Je,null),e(Je,tu),M(Go,Je,null),e(Je,ou),M(Ko,Je,null),_(o,Rl,v),_(o,to,v),e(to,Jo),e(Jo,Mi),M(Os,Mi,null),e(to,nu),e(to,yi),e(yi,su),_(o,Vl,v),_(o,Ye,v),M(Ss,Ye,null),e(Ye,au),e(Ye,oo),e(oo,ru),e(oo,$i),e($i,iu),e(oo,lu),e(oo,Li),e(Li,du),e(oo,cu),e(Ye,pu),e(Ye,Ns),e(Ns,mu),e(Ns,Ka),e(Ka,hu),e(Ns,uu),e(Ye,fu),e(Ye,Is),e(Is,gu),e(Is,Ds),e(Ds,_u),e(Is,bu),e(Ye,ku),e(Ye,it),M(Ws,it,null),e(it,vu),e(it,no),e(no,Tu),e(no,Ja),e(Ja,wu),e(no,Mu),e(no,xi),e(xi,yu),e(no,$u),e(it,Lu),M(Zo,it,null),e(it,xu),M(en,it,null),_(o,Yl,v),_(o,so,v),e(so,tn),e(tn,Fi),M(Hs,Fi,null),e(so,Fu),e(so,Xi),e(Xi,Xu),_(o,Gl,v),_(o,Ae,v),M(Qs,Ae,null),e(Ae,Eu),e(Ae,Ei),e(Ei,qu),e(Ae,zu),e(Ae,Us),e(Us,Cu),e(Us,Za),e(Za,ju),e(Us,Pu),e(Ae,Au),e(Ae,Bs),e(Bs,Ou),e(Bs,Rs),e(Rs,Su),e(Bs,Nu),e(Ae,Iu),M(on,Ae,null),e(Ae,Du),e(Ae,lt),M(Vs,lt,null),e(lt,Wu),e(lt,ao),e(ao,Hu),e(ao,er),e(er,Qu),e(ao,Uu),e(ao,qi),e(qi,Bu),e(ao,Ru),e(lt,Vu),M(nn,lt,null),e(lt,Yu),M(sn,lt,null),_(o,Kl,v),_(o,ro,v),e(ro,an),e(an,zi),M(Ys,zi,null),e(ro,Gu),e(ro,Ci),e(Ci,Ku),_(o,Jl,v),_(o,Oe,v),M(Gs,Oe,null),e(Oe,Ju),e(Oe,ji),e(ji,Zu),e(Oe,ef),e(Oe,Ks),e(Ks,tf),e(Ks,tr),e(tr,of),e(Ks,nf),e(Oe,sf),e(Oe,Js),e(Js,af),e(Js,Zs),e(Zs,rf),e(Js,lf),e(Oe,df),M(rn,Oe,null),e(Oe,cf),e(Oe,dt),M(ea,dt,null),e(dt,pf),e(dt,io),e(io,mf),e(io,or),e(or,hf),e(io,uf),e(io,Pi),e(Pi,ff),e(io,gf),e(dt,_f),M(ln,dt,null),e(dt,bf),M(dn,dt,null),_(o,Zl,v),_(o,lo,v),e(lo,cn),e(cn,Ai),M(ta,Ai,null),e(lo,kf),e(lo,Oi),e(Oi,vf),_(o,ed,v),_(o,Se,v),M(oa,Se,null),e(Se,Tf),e(Se,Si),e(Si,wf),e(Se,Mf),e(Se,na),e(na,yf),e(na,nr),e(nr,$f),e(na,Lf),e(Se,xf),e(Se,sa),e(sa,Ff),e(sa,aa),e(aa,Xf),e(sa,Ef),e(Se,qf),M(pn,Se,null),e(Se,zf),e(Se,Ze),M(ra,Ze,null),e(Ze,Cf),e(Ze,co),e(co,jf),e(co,sr),e(sr,Pf),e(co,Af),e(co,Ni),e(Ni,Of),e(co,Sf),e(Ze,Nf),M(mn,Ze,null),e(Ze,If),M(hn,Ze,null),e(Ze,Df),M(un,Ze,null),_(o,td,v),_(o,po,v),e(po,fn),e(fn,Ii),M(ia,Ii,null),e(po,Wf),e(po,Di),e(Di,Hf),_(o,od,v),_(o,Ne,v),M(la,Ne,null),e(Ne,Qf),e(Ne,Wi),e(Wi,Uf),e(Ne,Bf),e(Ne,da),e(da,Rf),e(da,ar),e(ar,Vf),e(da,Yf),e(Ne,Gf),e(Ne,ca),e(ca,Kf),e(ca,pa),e(pa,Jf),e(ca,Zf),e(Ne,eg),M(gn,Ne,null),e(Ne,tg),e(Ne,ct),M(ma,ct,null),e(ct,og),e(ct,mo),e(mo,ng),e(mo,rr),e(rr,sg),e(mo,ag),e(mo,Hi),e(Hi,rg),e(mo,ig),e(ct,lg),M(_n,ct,null),e(ct,dg),M(bn,ct,null),_(o,nd,v),_(o,ho,v),e(ho,kn),e(kn,Qi),M(ha,Qi,null),e(ho,cg),e(ho,Ui),e(Ui,pg),_(o,sd,v),_(o,Ie,v),M(ua,Ie,null),e(Ie,mg),e(Ie,Bi),e(Bi,hg),e(Ie,ug),e(Ie,fa),e(fa,fg),e(fa,ir),e(ir,gg),e(fa,_g),e(Ie,bg),e(Ie,ga),e(ga,kg),e(ga,_a),e(_a,vg),e(ga,Tg),e(Ie,wg),M(vn,Ie,null),e(Ie,Mg),e(Ie,et),M(ba,et,null),e(et,yg),e(et,uo),e(uo,$g),e(uo,lr),e(lr,Lg),e(uo,xg),e(uo,Ri),e(Ri,Fg),e(uo,Xg),e(et,Eg),M(Tn,et,null),e(et,qg),M(wn,et,null),e(et,zg),M(Mn,et,null),_(o,ad,v),_(o,fo,v),e(fo,yn),e(yn,Vi),M(ka,Vi,null),e(fo,Cg),e(fo,Yi),e(Yi,jg),_(o,rd,v),_(o,De,v),M(va,De,null),e(De,Pg),e(De,go),e(go,Ag),e(go,Gi),e(Gi,Og),e(go,Sg),e(go,Ki),e(Ki,Ng),e(go,Ig),e(De,Dg),e(De,Ta),e(Ta,Wg),e(Ta,dr),e(dr,Hg),e(Ta,Qg),e(De,Ug),e(De,wa),e(wa,Bg),e(wa,Ma),e(Ma,Rg),e(wa,Vg),e(De,Yg),M($n,De,null),e(De,Gg),e(De,tt),M(ya,tt,null),e(tt,Kg),e(tt,_o),e(_o,Jg),e(_o,cr),e(cr,Zg),e(_o,e_),e(_o,Ji),e(Ji,t_),e(_o,o_),e(tt,n_),M(Ln,tt,null),e(tt,s_),M(xn,tt,null),e(tt,a_),M(Fn,tt,null),id=!0},p(o,[v]){const $a={};v&2&&($a.$$scope={dirty:v,ctx:o}),Mo.$set($a);const Zi={};v&2&&(Zi.$$scope={dirty:v,ctx:o}),Lo.$set(Zi);const el={};v&2&&(el.$$scope={dirty:v,ctx:o}),Xo.$set(el);const tl={};v&2&&(tl.$$scope={dirty:v,ctx:o}),Eo.$set(tl);const La={};v&2&&(La.$$scope={dirty:v,ctx:o}),zo.$set(La);const ol={};v&2&&(ol.$$scope={dirty:v,ctx:o}),Co.$set(ol);const nl={};v&2&&(nl.$$scope={dirty:v,ctx:o}),jo.$set(nl);const sl={};v&2&&(sl.$$scope={dirty:v,ctx:o}),Ao.$set(sl);const xa={};v&2&&(xa.$$scope={dirty:v,ctx:o}),Oo.$set(xa);const al={};v&2&&(al.$$scope={dirty:v,ctx:o}),So.$set(al);const bo={};v&2&&(bo.$$scope={dirty:v,ctx:o}),No.$set(bo);const rl={};v&2&&(rl.$$scope={dirty:v,ctx:o}),Io.$set(rl);const il={};v&2&&(il.$$scope={dirty:v,ctx:o}),Wo.$set(il);const ll={};v&2&&(ll.$$scope={dirty:v,ctx:o}),Ho.$set(ll);const dl={};v&2&&(dl.$$scope={dirty:v,ctx:o}),Uo.$set(dl);const cl={};v&2&&(cl.$$scope={dirty:v,ctx:o}),Bo.$set(cl);const pl={};v&2&&(pl.$$scope={dirty:v,ctx:o}),Ro.$set(pl);const ml={};v&2&&(ml.$$scope={dirty:v,ctx:o}),Yo.$set(ml);const Fa={};v&2&&(Fa.$$scope={dirty:v,ctx:o}),Go.$set(Fa);const hl={};v&2&&(hl.$$scope={dirty:v,ctx:o}),Ko.$set(hl);const ko={};v&2&&(ko.$$scope={dirty:v,ctx:o}),Zo.$set(ko);const ul={};v&2&&(ul.$$scope={dirty:v,ctx:o}),en.$set(ul);const fl={};v&2&&(fl.$$scope={dirty:v,ctx:o}),on.$set(fl);const vo={};v&2&&(vo.$$scope={dirty:v,ctx:o}),nn.$set(vo);const gl={};v&2&&(gl.$$scope={dirty:v,ctx:o}),sn.$set(gl);const _l={};v&2&&(_l.$$scope={dirty:v,ctx:o}),rn.$set(_l);const Xa={};v&2&&(Xa.$$scope={dirty:v,ctx:o}),ln.$set(Xa);const bl={};v&2&&(bl.$$scope={dirty:v,ctx:o}),dn.$set(bl);const kl={};v&2&&(kl.$$scope={dirty:v,ctx:o}),pn.$set(kl);const vl={};v&2&&(vl.$$scope={dirty:v,ctx:o}),mn.$set(vl);const vt={};v&2&&(vt.$$scope={dirty:v,ctx:o}),hn.$set(vt);const Tt={};v&2&&(Tt.$$scope={dirty:v,ctx:o}),un.$set(Tt);const Tl={};v&2&&(Tl.$$scope={dirty:v,ctx:o}),gn.$set(Tl);const wl={};v&2&&(wl.$$scope={dirty:v,ctx:o}),_n.$set(wl);const Ml={};v&2&&(Ml.$$scope={dirty:v,ctx:o}),bn.$set(Ml);const To={};v&2&&(To.$$scope={dirty:v,ctx:o}),vn.$set(To);const yl={};v&2&&(yl.$$scope={dirty:v,ctx:o}),Tn.$set(yl);const $l={};v&2&&($l.$$scope={dirty:v,ctx:o}),wn.$set($l);const Ea={};v&2&&(Ea.$$scope={dirty:v,ctx:o}),Mn.$set(Ea);const Ll={};v&2&&(Ll.$$scope={dirty:v,ctx:o}),$n.$set(Ll);const xl={};v&2&&(xl.$$scope={dirty:v,ctx:o}),Ln.$set(xl);const Fl={};v&2&&(Fl.$$scope={dirty:v,ctx:o}),xn.$set(Fl);const ze={};v&2&&(ze.$$scope={dirty:v,ctx:o}),Fn.$set(ze)},i(o){id||(y(l.$$.fragment,o),y(ee.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(Mo.$$.fragment,o),y(Dn.$$.fragment,o),y(Wn.$$.fragment,o),y(Bn.$$.fragment,o),y(Vn.$$.fragment,o),y(Gn.$$.fragment,o),y(Lo.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(Zn.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(rs.$$.fragment,o),y(Xo.$$.fragment,o),y(Eo.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ms.$$.fragment,o),y(zo.$$.fragment,o),y(Co.$$.fragment,o),y(jo.$$.fragment,o),y(hs.$$.fragment,o),y(us.$$.fragment,o),y(bs.$$.fragment,o),y(Ao.$$.fragment,o),y(Oo.$$.fragment,o),y(So.$$.fragment,o),y(No.$$.fragment,o),y(Io.$$.fragment,o),y(ks.$$.fragment,o),y(vs.$$.fragment,o),y(ys.$$.fragment,o),y(Wo.$$.fragment,o),y(Ho.$$.fragment,o),y($s.$$.fragment,o),y(Ls.$$.fragment,o),y(Es.$$.fragment,o),y(Uo.$$.fragment,o),y(Bo.$$.fragment,o),y(Ro.$$.fragment,o),y(qs.$$.fragment,o),y(zs.$$.fragment,o),y(As.$$.fragment,o),y(Yo.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(Os.$$.fragment,o),y(Ss.$$.fragment,o),y(Ws.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(Hs.$$.fragment,o),y(Qs.$$.fragment,o),y(on.$$.fragment,o),y(Vs.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(Ys.$$.fragment,o),y(Gs.$$.fragment,o),y(rn.$$.fragment,o),y(ea.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(ta.$$.fragment,o),y(oa.$$.fragment,o),y(pn.$$.fragment,o),y(ra.$$.fragment,o),y(mn.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(gn.$$.fragment,o),y(ma.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(ha.$$.fragment,o),y(ua.$$.fragment,o),y(vn.$$.fragment,o),y(ba.$$.fragment,o),y(Tn.$$.fragment,o),y(wn.$$.fragment,o),y(Mn.$$.fragment,o),y(ka.$$.fragment,o),y(va.$$.fragment,o),y($n.$$.fragment,o),y(ya.$$.fragment,o),y(Ln.$$.fragment,o),y(xn.$$.fragment,o),y(Fn.$$.fragment,o),id=!0)},o(o){$(l.$$.fragment,o),$(ee.$$.fragment,o),$(Sn.$$.fragment,o),$(Nn.$$.fragment,o),$(Mo.$$.fragment,o),$(Dn.$$.fragment,o),$(Wn.$$.fragment,o),$(Bn.$$.fragment,o),$(Vn.$$.fragment,o),$(Gn.$$.fragment,o),$(Lo.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Zn.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(rs.$$.fragment,o),$(Xo.$$.fragment,o),$(Eo.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ms.$$.fragment,o),$(zo.$$.fragment,o),$(Co.$$.fragment,o),$(jo.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(bs.$$.fragment,o),$(Ao.$$.fragment,o),$(Oo.$$.fragment,o),$(So.$$.fragment,o),$(No.$$.fragment,o),$(Io.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$(Wo.$$.fragment,o),$(Ho.$$.fragment,o),$($s.$$.fragment,o),$(Ls.$$.fragment,o),$(Es.$$.fragment,o),$(Uo.$$.fragment,o),$(Bo.$$.fragment,o),$(Ro.$$.fragment,o),$(qs.$$.fragment,o),$(zs.$$.fragment,o),$(As.$$.fragment,o),$(Yo.$$.fragment,o),$(Go.$$.fragment,o),$(Ko.$$.fragment,o),$(Os.$$.fragment,o),$(Ss.$$.fragment,o),$(Ws.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(Hs.$$.fragment,o),$(Qs.$$.fragment,o),$(on.$$.fragment,o),$(Vs.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(Ys.$$.fragment,o),$(Gs.$$.fragment,o),$(rn.$$.fragment,o),$(ea.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(pn.$$.fragment,o),$(ra.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(gn.$$.fragment,o),$(ma.$$.fragment,o),$(_n.$$.fragment,o),$(bn.$$.fragment,o),$(ha.$$.fragment,o),$(ua.$$.fragment,o),$(vn.$$.fragment,o),$(ba.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$(Mn.$$.fragment,o),$(ka.$$.fragment,o),$(va.$$.fragment,o),$($n.$$.fragment,o),$(ya.$$.fragment,o),$(Ln.$$.fragment,o),$(xn.$$.fragment,o),$(Fn.$$.fragment,o),id=!1},d(o){t(d),o&&t(f),o&&t(c),L(l),o&&t(Y),o&&t(E),L(ee),o&&t(re),o&&t(R),o&&t(C),o&&t(G),o&&t(Q),o&&t(ne),o&&t(U),o&&t(se),o&&t(ie),o&&t(S),o&&t(g),o&&t(F),o&&t(B),o&&t(le),o&&t(Xl),o&&t(At),L(Sn),o&&t(El),o&&t(nt),L(Nn),L(Mo),o&&t(ql),o&&t(St),L(Dn),o&&t(zl),o&&t(qe),L(Wn),L(Bn),L(Vn),L(Gn),L(Lo),L(Kn),o&&t(Cl),o&&t(It),L(Jn),o&&t(jl),o&&t(Dt),L(Zn),o&&t(Pl),o&&t(Wt),L(ts),o&&t(Al),o&&t(He),L(os),L(rs),L(Xo),L(Eo),o&&t(Ol),o&&t(Qt),L(is),o&&t(Sl),o&&t(Qe),L(ls),L(ms),L(zo),L(Co),L(jo),o&&t(Nl),o&&t(Bt),L(hs),o&&t(Il),o&&t(Ue),L(us),L(bs),L(Ao),L(Oo),L(So),L(No),L(Io),o&&t(Dl),o&&t(Vt),L(ks),o&&t(Wl),o&&t(Be),L(vs),L(ys),L(Wo),L(Ho),o&&t(Hl),o&&t(Gt),L($s),o&&t(Ql),o&&t(Re),L(Ls),L(Es),L(Uo),L(Bo),L(Ro),o&&t(Ul),o&&t(Jt),L(qs),o&&t(Bl),o&&t(Ve),L(zs),L(As),L(Yo),L(Go),L(Ko),o&&t(Rl),o&&t(to),L(Os),o&&t(Vl),o&&t(Ye),L(Ss),L(Ws),L(Zo),L(en),o&&t(Yl),o&&t(so),L(Hs),o&&t(Gl),o&&t(Ae),L(Qs),L(on),L(Vs),L(nn),L(sn),o&&t(Kl),o&&t(ro),L(Ys),o&&t(Jl),o&&t(Oe),L(Gs),L(rn),L(ea),L(ln),L(dn),o&&t(Zl),o&&t(lo),L(ta),o&&t(ed),o&&t(Se),L(oa),L(pn),L(ra),L(mn),L(hn),L(un),o&&t(td),o&&t(po),L(ia),o&&t(od),o&&t(Ne),L(la),L(gn),L(ma),L(_n),L(bn),o&&t(nd),o&&t(ho),L(ha),o&&t(sd),o&&t(Ie),L(ua),L(vn),L(ba),L(Tn),L(wn),L(Mn),o&&t(ad),o&&t(fo),L(ka),o&&t(rd),o&&t(De),L(va),L($n),L(ya),L(Ln),L(xn),L(Fn)}}}const y1={local:"xlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMConfig",title:"XLMConfig"},{local:"transformers.XLMTokenizer",title:"XLMTokenizer"},{local:"transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput",title:"XLM specific outputs"},{local:"transformers.XLMModel",title:"XLMModel"},{local:"transformers.XLMWithLMHeadModel",title:"XLMWithLMHeadModel"},{local:"transformers.XLMForSequenceClassification",title:"XLMForSequenceClassification"},{local:"transformers.XLMForMultipleChoice",title:"XLMForMultipleChoice"},{local:"transformers.XLMForTokenClassification",title:"XLMForTokenClassification"},{local:"transformers.XLMForQuestionAnsweringSimple",title:"XLMForQuestionAnsweringSimple"},{local:"transformers.XLMForQuestionAnswering",title:"XLMForQuestionAnswering"},{local:"transformers.TFXLMModel",title:"TFXLMModel"},{local:"transformers.TFXLMWithLMHeadModel",title:"TFXLMWithLMHeadModel"},{local:"transformers.TFXLMForSequenceClassification",title:"TFXLMForSequenceClassification"},{local:"transformers.TFXLMForMultipleChoice",title:"TFXLMForMultipleChoice"},{local:"transformers.TFXLMForTokenClassification",title:"TFXLMForTokenClassification"},{local:"transformers.TFXLMForQuestionAnsweringSimple",title:"TFXLMForQuestionAnsweringSimple"}],title:"XLM"};function $1(x){return Ck(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class z1 extends Xk{constructor(d){super();Ek(this,d,$1,M1,qk,{})}}export{z1 as default,y1 as metadata};
