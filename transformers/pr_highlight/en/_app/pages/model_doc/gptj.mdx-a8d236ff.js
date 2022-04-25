import{S as rc,i as ic,s as lc,e as s,k as m,w as v,t as i,M as dc,c as a,d as o,m as f,a as r,x as $,h as l,b as p,F as e,g as T,y as k,q as w,o as P,B as y,v as cc,L as te}from"../../chunks/vendor-6b77c823.js";import{T as Lo}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-1088f2fb.js";import{C as A}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as re}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ee}from"../../chunks/ExampleCodeBlock-5212b321.js";function pc(x){let d,_,c,h,b;return h=new A({props:{code:`from transformers import GPTJModel, GPTJConfig

# Initializing a GPT-J 6B configuration
configuration = GPTJConfig()

# Initializing a model from the configuration
model = GPTJModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJModel, GPTJConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT-J 6B configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTJConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),_=i("Example:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function hc(x){let d,_,c,h,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),h=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var j=r(c);h=l(j,"Module"),j.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){T(n,d,u),e(d,_),e(d,c),e(c,h),e(d,b)},d(n){n&&o(d)}}}function uc(x){let d,_,c,h,b;return h=new A({props:{code:`from transformers import GPT2Tokenizer, GPTJModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJModel.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=i("Example:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function mc(x){let d,_,c,h,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),h=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var j=r(c);h=l(j,"Module"),j.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){T(n,d,u),e(d,_),e(d,c),e(c,h),e(d,b)},d(n){n&&o(d)}}}function fc(x){let d,_,c,h,b;return h=new A({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),_=i("Example:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function gc(x){let d,_,c,h,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),h=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var j=r(c);h=l(j,"Module"),j.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){T(n,d,u),e(d,_),e(d,c),e(c,h),e(d,b)},d(n){n&&o(d)}}}function _c(x){let d,_,c,h,b;return h=new A({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),_=i("Example of single-label classification:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example of single-label classification:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function Tc(x){let d,_;return d=new A({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,h){k(d,c,h),_=!0},p:te,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){P(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function bc(x){let d,_,c,h,b;return h=new A({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),_=i("Example of multi-label classification:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example of multi-label classification:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function vc(x){let d,_;return d=new A({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,h){k(d,c,h),_=!0},p:te,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){P(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function $c(x){let d,_,c,h,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),h=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var j=r(c);h=l(j,"Module"),j.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){T(n,d,u),e(d,_),e(d,c),e(c,h),e(d,b)},d(n){n&&o(d)}}}function kc(x){let d,_,c,h,b;return h=new A({props:{code:`from transformers import GPT2Tokenizer, GPTJForQuestionAnswering
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForQuestionAnswering.from_pretrained("EleutherAI/gpt-j-6B")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=s("p"),_=i("Example:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function wc(x){let d,_;return d=new A({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,h){k(d,c,h),_=!0},p:te,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){P(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Pc(x){let d,_,c,h,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),h=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var j=r(c);h=l(j,"Module"),j.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){T(n,d,u),e(d,_),e(d,c),e(c,h),e(d,b)},d(n){n&&o(d)}}}function yc(x){let d,_,c,h,b;return h=new A({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJModel

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJModel.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJModel.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=i("Example:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function xc(x){let d,_,c,h,b;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),h=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var j=r(c);h=l(j,"Module"),j.forEach(o),b=l(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(n,u){T(n,d,u),e(d,_),e(d,c),e(c,h),e(d,b)},d(n){n&&o(d)}}}function jc(x){let d,_,c,h,b;return h=new A({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJForCausalLM

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJForCausalLM.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),_=i("Example:"),c=m(),v(h.$$.fragment)},l(n){d=a(n,"P",{});var u=r(d);_=l(u,"Example:"),u.forEach(o),c=f(n),$(h.$$.fragment,n)},m(n,u){T(n,d,u),e(d,_),T(n,c,u),k(h,n,u),b=!0},p:te,i(n){b||(w(h.$$.fragment,n),b=!0)},o(n){P(h.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),y(h,n)}}}function Gc(x){let d,_,c,h,b,n,u,j,Ds,Kn,ie,Pe,So,lt,Os,No,Bs,Xn,oe,Ws,dt,Us,Qs,ct,Hs,Rs,Yn,ye,Vs,pt,Ks,Xs,Zn,uo,Ys,es,mo,I,Zs,ht,ea,ta,Do,oa,na,Oo,sa,aa,ut,ra,ia,ts,mt,os,xe,Bo,fo,la,ft,da,ca,Wo,V,pa,gt,ha,ua,Uo,ma,fa,Qo,ga,_a,ns,le,je,Ho,_t,Ta,Ro,ba,ss,Ge,va,go,$a,ka,as,Tt,rs,_o,wa,is,bt,ls,de,Je,Vo,vt,Pa,Ko,ya,ds,K,$t,xa,L,ja,To,Ga,Ja,kt,Fa,Ma,bo,Ea,za,vo,qa,Ca,Aa,Fe,cs,ce,Me,Xo,wt,Ia,Yo,La,ps,X,Pt,Sa,yt,Na,xt,Da,Oa,Ba,W,jt,Wa,pe,Ua,$o,Qa,Ha,Zo,Ra,Va,Ka,Ee,Xa,ze,hs,he,qe,en,Gt,Ya,tn,Za,us,S,Jt,er,on,tr,or,Ft,nr,Mt,sr,ar,rr,U,Et,ir,ue,lr,ko,dr,cr,nn,pr,hr,ur,Ce,mr,Ae,ms,me,Ie,sn,zt,fr,an,gr,fs,M,qt,_r,rn,Tr,br,wo,Po,vr,$r,kr,N,wr,ln,Pr,yr,dn,xr,jr,cn,Gr,Jr,pn,Fr,Mr,Er,Ct,zr,At,qr,Cr,Ar,F,It,Ir,fe,Lr,yo,Sr,Nr,hn,Dr,Or,Br,Le,Wr,Se,Ur,Ne,Qr,De,Hr,Oe,gs,ge,Be,un,Lt,Rr,mn,Vr,_s,D,St,Kr,_e,Xr,fn,Yr,Zr,gn,ei,ti,oi,Nt,ni,Dt,si,ai,ri,E,Ot,ii,Te,li,xo,di,ci,_n,pi,hi,ui,We,mi,Ue,fi,Qe,Ts,be,He,Tn,Bt,gi,bn,_i,bs,G,Wt,Ti,vn,bi,vi,Ut,$i,jo,ki,wi,Pi,Qt,yi,Ht,xi,ji,Gi,$n,Ji,Fi,Y,kn,Rt,Mi,Ei,wn,Vt,zi,qi,Pn,Kt,Ci,Ai,yn,Xt,Ii,Li,Q,Yt,Si,ve,Ni,xn,Di,Oi,jn,Bi,Wi,Ui,Re,Qi,Ve,vs,$e,Ke,Gn,Zt,Hi,Jn,Ri,$s,J,eo,Vi,Fn,Ki,Xi,to,Yi,Go,Zi,el,tl,oo,ol,no,nl,sl,al,Mn,rl,il,Z,En,so,ll,dl,zn,ao,cl,pl,qn,ro,hl,ul,Cn,io,ml,fl,H,lo,gl,ke,_l,An,Tl,bl,In,vl,$l,kl,Xe,wl,Ye,ks;return n=new re({}),lt=new re({}),mt=new A({props:{code:`from transformers import GPTJForCausalLM
import torch

model = GPTJForCausalLM.from_pretrained(
    "EleutherAI/gpt-j-6B", revision="float16", torch_dtype=torch.float16, low_cpu_mem_usage=True
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, revision=<span class="hljs-string">&quot;float16&quot;</span>, torch_dtype=torch.float16, low_cpu_mem_usage=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`}}),_t=new re({}),Tt=new A({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),bt=new A({props:{code:`from transformers import GPTJForCausalLM, AutoTokenizer
import torch

model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B", torch_dtype=torch.float16)
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, torch_dtype=torch.float16)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),vt=new re({}),$t=new B({props:{name:"class transformers.GPTJConfig",anchor:"transformers.GPTJConfig",parameters:[{name:"vocab_size",val:" = 50400"},{name:"n_positions",val:" = 2048"},{name:"n_embd",val:" = 4096"},{name:"n_layer",val:" = 28"},{name:"n_head",val:" = 16"},{name:"rotary_dim",val:" = 64"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attn_pdrop",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTJConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50400) &#x2014;
Vocabulary size of the GPT-J model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTJConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPTJConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPTJConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 28) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPTJConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPTJConfig.rotary_dim",description:`<strong>rotary_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of dimensions in the embedding that Rotary Position Embedding is applied to.`,name:"rotary_dim"},{anchor:"transformers.GPTJConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPTJConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPTJConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPTJConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPTJConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPTJConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTJConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTJConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size).`,name:"scale_attn_weights"},{anchor:"transformers.GPTJConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/configuration_gptj.py#L33"}}),Fe=new ee({props:{anchor:"transformers.GPTJConfig.example",$$slots:{default:[pc]},$$scope:{ctx:x}}}),wt=new re({}),Pt=new B({props:{name:"class transformers.GPTJModel",anchor:"transformers.GPTJModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L449"}}),jt=new B({props:{name:"forward",anchor:"transformers.GPTJModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L505",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new Lo({props:{$$slots:{default:[hc]},$$scope:{ctx:x}}}),ze=new ee({props:{anchor:"transformers.GPTJModel.forward.example",$$slots:{default:[uc]},$$scope:{ctx:x}}}),Gt=new re({}),Jt=new B({props:{name:"class transformers.GPTJForCausalLM",anchor:"transformers.GPTJForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L689"}}),Et=new B({props:{name:"forward",anchor:"transformers.GPTJForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L758",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Lo({props:{$$slots:{default:[mc]},$$scope:{ctx:x}}}),Ae=new ee({props:{anchor:"transformers.GPTJForCausalLM.forward.example",$$slots:{default:[fc]},$$scope:{ctx:x}}}),zt=new re({}),qt=new B({props:{name:"class transformers.GPTJForSequenceClassification",anchor:"transformers.GPTJForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L864"}}),It=new B({props:{name:"forward",anchor:"transformers.GPTJForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L880",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new Lo({props:{$$slots:{default:[gc]},$$scope:{ctx:x}}}),Se=new ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example",$$slots:{default:[_c]},$$scope:{ctx:x}}}),Ne=new ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-2",$$slots:{default:[Tc]},$$scope:{ctx:x}}}),De=new ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-3",$$slots:{default:[bc]},$$scope:{ctx:x}}}),Oe=new ee({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-4",$$slots:{default:[vc]},$$scope:{ctx:x}}}),Lt=new re({}),St=new B({props:{name:"class transformers.GPTJForQuestionAnswering",anchor:"transformers.GPTJForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L990"}}),Ot=new B({props:{name:"forward",anchor:"transformers.GPTJForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_gptj.py#L1006",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),We=new Lo({props:{$$slots:{default:[$c]},$$scope:{ctx:x}}}),Ue=new ee({props:{anchor:"transformers.GPTJForQuestionAnswering.forward.example",$$slots:{default:[kc]},$$scope:{ctx:x}}}),Qe=new ee({props:{anchor:"transformers.GPTJForQuestionAnswering.forward.example-2",$$slots:{default:[wc]},$$scope:{ctx:x}}}),Bt=new re({}),Wt=new B({props:{name:"class transformers.FlaxGPTJModel",anchor:"transformers.FlaxGPTJModel",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_flax_gptj.py#L607"}}),Yt=new B({props:{name:"__call__",anchor:"transformers.FlaxGPTJModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_flax_gptj.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),Re=new Lo({props:{$$slots:{default:[Pc]},$$scope:{ctx:x}}}),Ve=new ee({props:{anchor:"transformers.FlaxGPTJModel.__call__.example",$$slots:{default:[yc]},$$scope:{ctx:x}}}),Zt=new re({}),eo=new B({props:{name:"class transformers.FlaxGPTJForCausalLM",anchor:"transformers.FlaxGPTJForCausalLM",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_flax_gptj.py#L674"}}),lo=new B({props:{name:"__call__",anchor:"transformers.FlaxGPTJForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gptj/modeling_flax_gptj.py#L425",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),Xe=new Lo({props:{$$slots:{default:[xc]},$$scope:{ctx:x}}}),Ye=new ee({props:{anchor:"transformers.FlaxGPTJForCausalLM.__call__.example",$$slots:{default:[jc]},$$scope:{ctx:x}}}),{c(){d=s("meta"),_=m(),c=s("h1"),h=s("a"),b=s("span"),v(n.$$.fragment),u=m(),j=s("span"),Ds=i("GPT-J"),Kn=m(),ie=s("h2"),Pe=s("a"),So=s("span"),v(lt.$$.fragment),Os=m(),No=s("span"),Bs=i("Overview"),Xn=m(),oe=s("p"),Ws=i("The GPT-J model was released in the "),dt=s("a"),Us=i("kingoflolz/mesh-transformer-jax"),Qs=i(` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),ct=s("a"),Hs=i("the Pile"),Rs=i(" dataset."),Yn=m(),ye=s("p"),Vs=i("This model was contributed by "),pt=s("a"),Ks=i("Stella Biderman"),Xs=i("."),Zn=m(),uo=s("p"),Ys=i("Tips:"),es=m(),mo=s("ul"),I=s("li"),Zs=i("To load "),ht=s("a"),ea=i("GPT-J"),ta=i(` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),Do=s("code"),oa=i("torch_dtype"),na=i(` argument can be
used to initialize the model in half-precision. And the `),Oo=s("code"),sa=i("low_cpu_mem_usage"),aa=i(` argument can be used to keep the RAM
usage to 1x. There is also a `),ut=s("a"),ra=i("fp16 branch"),ia=i(` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),ts=m(),v(mt.$$.fragment),os=m(),xe=s("ul"),Bo=s("li"),fo=s("p"),la=i(`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ft=s("a"),da=i("here"),ca=m(),Wo=s("li"),V=s("p"),pa=i(`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),gt=s("a"),ha=i("GPT-J"),ua=i(` contains 143 extra tokens
`),Uo=s("code"),ma=i("<|extratoken_1|>... <|extratoken_143|>"),fa=i(", so the "),Qo=s("code"),ga=i("vocab_size"),_a=i(" of tokenizer also becomes 50400."),ns=m(),le=s("h3"),je=s("a"),Ho=s("span"),v(_t.$$.fragment),Ta=m(),Ro=s("span"),ba=i("Generation"),ss=m(),Ge=s("p"),va=i("The "),go=s("a"),$a=i("generate()"),ka=i(` method can be used to generate text using GPT-J
model.`),as=m(),v(Tt.$$.fragment),rs=m(),_o=s("p"),wa=i("\u2026or in float16 precision:"),is=m(),v(bt.$$.fragment),ls=m(),de=s("h2"),Je=s("a"),Vo=s("span"),v(vt.$$.fragment),Pa=m(),Ko=s("span"),ya=i("GPTJConfig"),ds=m(),K=s("div"),v($t.$$.fragment),xa=m(),L=s("p"),ja=i("This is the configuration class to store the configuration of a "),To=s("a"),Ga=i("GPTJModel"),Ja=i(`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),kt=s("a"),Fa=i("gpt-j-6B"),Ma=i(` architecture. Configuration objects inherit from
`),bo=s("a"),Ea=i("PretrainedConfig"),za=i(" and can be used to control the model outputs. Read the documentation from "),vo=s("a"),qa=i("PretrainedConfig"),Ca=i(`
for more information.`),Aa=m(),v(Fe.$$.fragment),cs=m(),ce=s("h2"),Me=s("a"),Xo=s("span"),v(wt.$$.fragment),Ia=m(),Yo=s("span"),La=i("GPTJModel"),ps=m(),X=s("div"),v(Pt.$$.fragment),Sa=m(),yt=s("p"),Na=i(`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xt=s("a"),Da=i("torch.nn.Module"),Oa=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ba=m(),W=s("div"),v(jt.$$.fragment),Wa=m(),pe=s("p"),Ua=i("The "),$o=s("a"),Qa=i("GPTJModel"),Ha=i(" forward method, overrides the "),Zo=s("code"),Ra=i("__call__"),Va=i(" special method."),Ka=m(),v(Ee.$$.fragment),Xa=m(),v(ze.$$.fragment),hs=m(),he=s("h2"),qe=s("a"),en=s("span"),v(Gt.$$.fragment),Ya=m(),tn=s("span"),Za=i("GPTJForCausalLM"),us=m(),S=s("div"),v(Jt.$$.fragment),er=m(),on=s("p"),tr=i("The GPT-J Model transformer with a language modeling head on top."),or=m(),Ft=s("p"),nr=i("This model is a PyTorch "),Mt=s("a"),sr=i("torch.nn.Module"),ar=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rr=m(),U=s("div"),v(Et.$$.fragment),ir=m(),ue=s("p"),lr=i("The "),ko=s("a"),dr=i("GPTJForCausalLM"),cr=i(" forward method, overrides the "),nn=s("code"),pr=i("__call__"),hr=i(" special method."),ur=m(),v(Ce.$$.fragment),mr=m(),v(Ae.$$.fragment),ms=m(),me=s("h2"),Ie=s("a"),sn=s("span"),v(zt.$$.fragment),fr=m(),an=s("span"),gr=i("GPTJForSequenceClassification"),fs=m(),M=s("div"),v(qt.$$.fragment),_r=m(),rn=s("p"),Tr=i("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),br=m(),wo=s("p"),Po=s("a"),vr=i("GPTJForSequenceClassification"),$r=i(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),kr=m(),N=s("p"),wr=i(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ln=s("code"),Pr=i("pad_token_id"),yr=i(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),dn=s("code"),xr=i("pad_token_id"),jr=i(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),cn=s("code"),Gr=i("inputs_embeds"),Jr=i(" are passed instead of "),pn=s("code"),Fr=i("input_ids"),Mr=i(`, it does the same (take the last value in
each row of the batch).`),Er=m(),Ct=s("p"),zr=i("This model is a PyTorch "),At=s("a"),qr=i("torch.nn.Module"),Cr=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ar=m(),F=s("div"),v(It.$$.fragment),Ir=m(),fe=s("p"),Lr=i("The "),yo=s("a"),Sr=i("GPTJForSequenceClassification"),Nr=i(" forward method, overrides the "),hn=s("code"),Dr=i("__call__"),Or=i(" special method."),Br=m(),v(Le.$$.fragment),Wr=m(),v(Se.$$.fragment),Ur=m(),v(Ne.$$.fragment),Qr=m(),v(De.$$.fragment),Hr=m(),v(Oe.$$.fragment),gs=m(),ge=s("h2"),Be=s("a"),un=s("span"),v(Lt.$$.fragment),Rr=m(),mn=s("span"),Vr=i("GPTJForQuestionAnswering"),_s=m(),D=s("div"),v(St.$$.fragment),Kr=m(),_e=s("p"),Xr=i(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),fn=s("code"),Yr=i("span start logits"),Zr=i(" and "),gn=s("code"),ei=i("span end logits"),ti=i(")."),oi=m(),Nt=s("p"),ni=i("This model is a PyTorch "),Dt=s("a"),si=i("torch.nn.Module"),ai=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ri=m(),E=s("div"),v(Ot.$$.fragment),ii=m(),Te=s("p"),li=i("The "),xo=s("a"),di=i("GPTJForQuestionAnswering"),ci=i(" forward method, overrides the "),_n=s("code"),pi=i("__call__"),hi=i(" special method."),ui=m(),v(We.$$.fragment),mi=m(),v(Ue.$$.fragment),fi=m(),v(Qe.$$.fragment),Ts=m(),be=s("h2"),He=s("a"),Tn=s("span"),v(Bt.$$.fragment),gi=m(),bn=s("span"),_i=i("FlaxGPTJModel"),bs=m(),G=s("div"),v(Wt.$$.fragment),Ti=m(),vn=s("p"),bi=i("The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),vi=m(),Ut=s("p"),$i=i("This model inherits from "),jo=s("a"),ki=i("FlaxPreTrainedModel"),wi=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pi=m(),Qt=s("p"),yi=i(`This model is also a Flax Linen
`),Ht=s("a"),xi=i("flax.nn.Module"),ji=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gi=m(),$n=s("p"),Ji=i("Finally, this model supports inherent JAX features such as:"),Fi=m(),Y=s("ul"),kn=s("li"),Rt=s("a"),Mi=i("Just-In-Time (JIT) compilation"),Ei=m(),wn=s("li"),Vt=s("a"),zi=i("Automatic Differentiation"),qi=m(),Pn=s("li"),Kt=s("a"),Ci=i("Vectorization"),Ai=m(),yn=s("li"),Xt=s("a"),Ii=i("Parallelization"),Li=m(),Q=s("div"),v(Yt.$$.fragment),Si=m(),ve=s("p"),Ni=i("The "),xn=s("code"),Di=i("FlaxGPTJPreTrainedModel"),Oi=i(" forward method, overrides the "),jn=s("code"),Bi=i("__call__"),Wi=i(" special method."),Ui=m(),v(Re.$$.fragment),Qi=m(),v(Ve.$$.fragment),vs=m(),$e=s("h2"),Ke=s("a"),Gn=s("span"),v(Zt.$$.fragment),Hi=m(),Jn=s("span"),Ri=i("FlaxGPTJForCausalLM"),$s=m(),J=s("div"),v(eo.$$.fragment),Vi=m(),Fn=s("p"),Ki=i("The GPTJ Model transformer with a language modeling head on top."),Xi=m(),to=s("p"),Yi=i("This model inherits from "),Go=s("a"),Zi=i("FlaxPreTrainedModel"),el=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tl=m(),oo=s("p"),ol=i(`This model is also a Flax Linen
`),no=s("a"),nl=i("flax.nn.Module"),sl=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),al=m(),Mn=s("p"),rl=i("Finally, this model supports inherent JAX features such as:"),il=m(),Z=s("ul"),En=s("li"),so=s("a"),ll=i("Just-In-Time (JIT) compilation"),dl=m(),zn=s("li"),ao=s("a"),cl=i("Automatic Differentiation"),pl=m(),qn=s("li"),ro=s("a"),hl=i("Vectorization"),ul=m(),Cn=s("li"),io=s("a"),ml=i("Parallelization"),fl=m(),H=s("div"),v(lo.$$.fragment),gl=m(),ke=s("p"),_l=i("The "),An=s("code"),Tl=i("FlaxGPTJPreTrainedModel"),bl=i(" forward method, overrides the "),In=s("code"),vl=i("__call__"),$l=i(" special method."),kl=m(),v(Xe.$$.fragment),wl=m(),v(Ye.$$.fragment),this.h()},l(t){const g=dc('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(o),_=f(t),c=a(t,"H1",{class:!0});var co=r(c);h=a(co,"A",{id:!0,class:!0,href:!0});var Ln=r(h);b=a(Ln,"SPAN",{});var Sn=r(b);$(n.$$.fragment,Sn),Sn.forEach(o),Ln.forEach(o),u=f(co),j=a(co,"SPAN",{});var Nn=r(j);Ds=l(Nn,"GPT-J"),Nn.forEach(o),co.forEach(o),Kn=f(t),ie=a(t,"H2",{class:!0});var po=r(ie);Pe=a(po,"A",{id:!0,class:!0,href:!0});var Dn=r(Pe);So=a(Dn,"SPAN",{});var On=r(So);$(lt.$$.fragment,On),On.forEach(o),Dn.forEach(o),Os=f(po),No=a(po,"SPAN",{});var Bn=r(No);Bs=l(Bn,"Overview"),Bn.forEach(o),po.forEach(o),Xn=f(t),oe=a(t,"P",{});var we=r(oe);Ws=l(we,"The GPT-J model was released in the "),dt=a(we,"A",{href:!0,rel:!0});var Wn=r(dt);Us=l(Wn,"kingoflolz/mesh-transformer-jax"),Wn.forEach(o),Qs=l(we,` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),ct=a(we,"A",{href:!0,rel:!0});var Un=r(ct);Hs=l(Un,"the Pile"),Un.forEach(o),Rs=l(we," dataset."),we.forEach(o),Yn=f(t),ye=a(t,"P",{});var ho=r(ye);Vs=l(ho,"This model was contributed by "),pt=a(ho,"A",{href:!0,rel:!0});var Qn=r(pt);Ks=l(Qn,"Stella Biderman"),Qn.forEach(o),Xs=l(ho,"."),ho.forEach(o),Zn=f(t),uo=a(t,"P",{});var Hn=r(uo);Ys=l(Hn,"Tips:"),Hn.forEach(o),es=f(t),mo=a(t,"UL",{});var Rn=r(mo);I=a(Rn,"LI",{});var O=r(I);Zs=l(O,"To load "),ht=a(O,"A",{href:!0,rel:!0});var Vn=r(ht);ea=l(Vn,"GPT-J"),Vn.forEach(o),ta=l(O,` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),Do=a(O,"CODE",{});var xl=r(Do);oa=l(xl,"torch_dtype"),xl.forEach(o),na=l(O,` argument can be
used to initialize the model in half-precision. And the `),Oo=a(O,"CODE",{});var jl=r(Oo);sa=l(jl,"low_cpu_mem_usage"),jl.forEach(o),aa=l(O,` argument can be used to keep the RAM
usage to 1x. There is also a `),ut=a(O,"A",{href:!0,rel:!0});var Gl=r(ut);ra=l(Gl,"fp16 branch"),Gl.forEach(o),ia=l(O,` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),O.forEach(o),Rn.forEach(o),ts=f(t),$(mt.$$.fragment,t),os=f(t),xe=a(t,"UL",{});var ws=r(xe);Bo=a(ws,"LI",{});var Jl=r(Bo);fo=a(Jl,"P",{});var Pl=r(fo);la=l(Pl,`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ft=a(Pl,"A",{href:!0,rel:!0});var Fl=r(ft);da=l(Fl,"here"),Fl.forEach(o),Pl.forEach(o),Jl.forEach(o),ca=f(ws),Wo=a(ws,"LI",{});var Ml=r(Wo);V=a(Ml,"P",{});var Ze=r(V);pa=l(Ze,`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),gt=a(Ze,"A",{href:!0,rel:!0});var El=r(gt);ha=l(El,"GPT-J"),El.forEach(o),ua=l(Ze,` contains 143 extra tokens
`),Uo=a(Ze,"CODE",{});var zl=r(Uo);ma=l(zl,"<|extratoken_1|>... <|extratoken_143|>"),zl.forEach(o),fa=l(Ze,", so the "),Qo=a(Ze,"CODE",{});var ql=r(Qo);ga=l(ql,"vocab_size"),ql.forEach(o),_a=l(Ze," of tokenizer also becomes 50400."),Ze.forEach(o),Ml.forEach(o),ws.forEach(o),ns=f(t),le=a(t,"H3",{class:!0});var Ps=r(le);je=a(Ps,"A",{id:!0,class:!0,href:!0});var Cl=r(je);Ho=a(Cl,"SPAN",{});var Al=r(Ho);$(_t.$$.fragment,Al),Al.forEach(o),Cl.forEach(o),Ta=f(Ps),Ro=a(Ps,"SPAN",{});var Il=r(Ro);ba=l(Il,"Generation"),Il.forEach(o),Ps.forEach(o),ss=f(t),Ge=a(t,"P",{});var ys=r(Ge);va=l(ys,"The "),go=a(ys,"A",{href:!0});var Ll=r(go);$a=l(Ll,"generate()"),Ll.forEach(o),ka=l(ys,` method can be used to generate text using GPT-J
model.`),ys.forEach(o),as=f(t),$(Tt.$$.fragment,t),rs=f(t),_o=a(t,"P",{});var Sl=r(_o);wa=l(Sl,"\u2026or in float16 precision:"),Sl.forEach(o),is=f(t),$(bt.$$.fragment,t),ls=f(t),de=a(t,"H2",{class:!0});var xs=r(de);Je=a(xs,"A",{id:!0,class:!0,href:!0});var Nl=r(Je);Vo=a(Nl,"SPAN",{});var Dl=r(Vo);$(vt.$$.fragment,Dl),Dl.forEach(o),Nl.forEach(o),Pa=f(xs),Ko=a(xs,"SPAN",{});var Ol=r(Ko);ya=l(Ol,"GPTJConfig"),Ol.forEach(o),xs.forEach(o),ds=f(t),K=a(t,"DIV",{class:!0});var Jo=r(K);$($t.$$.fragment,Jo),xa=f(Jo),L=a(Jo,"P",{});var ne=r(L);ja=l(ne,"This is the configuration class to store the configuration of a "),To=a(ne,"A",{href:!0});var Bl=r(To);Ga=l(Bl,"GPTJModel"),Bl.forEach(o),Ja=l(ne,`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),kt=a(ne,"A",{href:!0,rel:!0});var Wl=r(kt);Fa=l(Wl,"gpt-j-6B"),Wl.forEach(o),Ma=l(ne,` architecture. Configuration objects inherit from
`),bo=a(ne,"A",{href:!0});var Ul=r(bo);Ea=l(Ul,"PretrainedConfig"),Ul.forEach(o),za=l(ne," and can be used to control the model outputs. Read the documentation from "),vo=a(ne,"A",{href:!0});var Ql=r(vo);qa=l(Ql,"PretrainedConfig"),Ql.forEach(o),Ca=l(ne,`
for more information.`),ne.forEach(o),Aa=f(Jo),$(Fe.$$.fragment,Jo),Jo.forEach(o),cs=f(t),ce=a(t,"H2",{class:!0});var js=r(ce);Me=a(js,"A",{id:!0,class:!0,href:!0});var Hl=r(Me);Xo=a(Hl,"SPAN",{});var Rl=r(Xo);$(wt.$$.fragment,Rl),Rl.forEach(o),Hl.forEach(o),Ia=f(js),Yo=a(js,"SPAN",{});var Vl=r(Yo);La=l(Vl,"GPTJModel"),Vl.forEach(o),js.forEach(o),ps=f(t),X=a(t,"DIV",{class:!0});var Fo=r(X);$(Pt.$$.fragment,Fo),Sa=f(Fo),yt=a(Fo,"P",{});var Gs=r(yt);Na=l(Gs,`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),xt=a(Gs,"A",{href:!0,rel:!0});var Kl=r(xt);Da=l(Kl,"torch.nn.Module"),Kl.forEach(o),Oa=l(Gs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gs.forEach(o),Ba=f(Fo),W=a(Fo,"DIV",{class:!0});var et=r(W);$(jt.$$.fragment,et),Wa=f(et),pe=a(et,"P",{});var Mo=r(pe);Ua=l(Mo,"The "),$o=a(Mo,"A",{href:!0});var Xl=r($o);Qa=l(Xl,"GPTJModel"),Xl.forEach(o),Ha=l(Mo," forward method, overrides the "),Zo=a(Mo,"CODE",{});var Yl=r(Zo);Ra=l(Yl,"__call__"),Yl.forEach(o),Va=l(Mo," special method."),Mo.forEach(o),Ka=f(et),$(Ee.$$.fragment,et),Xa=f(et),$(ze.$$.fragment,et),et.forEach(o),Fo.forEach(o),hs=f(t),he=a(t,"H2",{class:!0});var Js=r(he);qe=a(Js,"A",{id:!0,class:!0,href:!0});var Zl=r(qe);en=a(Zl,"SPAN",{});var ed=r(en);$(Gt.$$.fragment,ed),ed.forEach(o),Zl.forEach(o),Ya=f(Js),tn=a(Js,"SPAN",{});var td=r(tn);Za=l(td,"GPTJForCausalLM"),td.forEach(o),Js.forEach(o),us=f(t),S=a(t,"DIV",{class:!0});var tt=r(S);$(Jt.$$.fragment,tt),er=f(tt),on=a(tt,"P",{});var od=r(on);tr=l(od,"The GPT-J Model transformer with a language modeling head on top."),od.forEach(o),or=f(tt),Ft=a(tt,"P",{});var Fs=r(Ft);nr=l(Fs,"This model is a PyTorch "),Mt=a(Fs,"A",{href:!0,rel:!0});var nd=r(Mt);sr=l(nd,"torch.nn.Module"),nd.forEach(o),ar=l(Fs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fs.forEach(o),rr=f(tt),U=a(tt,"DIV",{class:!0});var ot=r(U);$(Et.$$.fragment,ot),ir=f(ot),ue=a(ot,"P",{});var Eo=r(ue);lr=l(Eo,"The "),ko=a(Eo,"A",{href:!0});var sd=r(ko);dr=l(sd,"GPTJForCausalLM"),sd.forEach(o),cr=l(Eo," forward method, overrides the "),nn=a(Eo,"CODE",{});var ad=r(nn);pr=l(ad,"__call__"),ad.forEach(o),hr=l(Eo," special method."),Eo.forEach(o),ur=f(ot),$(Ce.$$.fragment,ot),mr=f(ot),$(Ae.$$.fragment,ot),ot.forEach(o),tt.forEach(o),ms=f(t),me=a(t,"H2",{class:!0});var Ms=r(me);Ie=a(Ms,"A",{id:!0,class:!0,href:!0});var rd=r(Ie);sn=a(rd,"SPAN",{});var id=r(sn);$(zt.$$.fragment,id),id.forEach(o),rd.forEach(o),fr=f(Ms),an=a(Ms,"SPAN",{});var ld=r(an);gr=l(ld,"GPTJForSequenceClassification"),ld.forEach(o),Ms.forEach(o),fs=f(t),M=a(t,"DIV",{class:!0});var R=r(M);$(qt.$$.fragment,R),_r=f(R),rn=a(R,"P",{});var dd=r(rn);Tr=l(dd,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),dd.forEach(o),br=f(R),wo=a(R,"P",{});var yl=r(wo);Po=a(yl,"A",{href:!0});var cd=r(Po);vr=l(cd,"GPTJForSequenceClassification"),cd.forEach(o),$r=l(yl,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),yl.forEach(o),kr=f(R),N=a(R,"P",{});var se=r(N);wr=l(se,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ln=a(se,"CODE",{});var pd=r(ln);Pr=l(pd,"pad_token_id"),pd.forEach(o),yr=l(se,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),dn=a(se,"CODE",{});var hd=r(dn);xr=l(hd,"pad_token_id"),hd.forEach(o),jr=l(se,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),cn=a(se,"CODE",{});var ud=r(cn);Gr=l(ud,"inputs_embeds"),ud.forEach(o),Jr=l(se," are passed instead of "),pn=a(se,"CODE",{});var md=r(pn);Fr=l(md,"input_ids"),md.forEach(o),Mr=l(se,`, it does the same (take the last value in
each row of the batch).`),se.forEach(o),Er=f(R),Ct=a(R,"P",{});var Es=r(Ct);zr=l(Es,"This model is a PyTorch "),At=a(Es,"A",{href:!0,rel:!0});var fd=r(At);qr=l(fd,"torch.nn.Module"),fd.forEach(o),Cr=l(Es,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Es.forEach(o),Ar=f(R),F=a(R,"DIV",{class:!0});var z=r(F);$(It.$$.fragment,z),Ir=f(z),fe=a(z,"P",{});var zo=r(fe);Lr=l(zo,"The "),yo=a(zo,"A",{href:!0});var gd=r(yo);Sr=l(gd,"GPTJForSequenceClassification"),gd.forEach(o),Nr=l(zo," forward method, overrides the "),hn=a(zo,"CODE",{});var _d=r(hn);Dr=l(_d,"__call__"),_d.forEach(o),Or=l(zo," special method."),zo.forEach(o),Br=f(z),$(Le.$$.fragment,z),Wr=f(z),$(Se.$$.fragment,z),Ur=f(z),$(Ne.$$.fragment,z),Qr=f(z),$(De.$$.fragment,z),Hr=f(z),$(Oe.$$.fragment,z),z.forEach(o),R.forEach(o),gs=f(t),ge=a(t,"H2",{class:!0});var zs=r(ge);Be=a(zs,"A",{id:!0,class:!0,href:!0});var Td=r(Be);un=a(Td,"SPAN",{});var bd=r(un);$(Lt.$$.fragment,bd),bd.forEach(o),Td.forEach(o),Rr=f(zs),mn=a(zs,"SPAN",{});var vd=r(mn);Vr=l(vd,"GPTJForQuestionAnswering"),vd.forEach(o),zs.forEach(o),_s=f(t),D=a(t,"DIV",{class:!0});var nt=r(D);$(St.$$.fragment,nt),Kr=f(nt),_e=a(nt,"P",{});var qo=r(_e);Xr=l(qo,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),fn=a(qo,"CODE",{});var $d=r(fn);Yr=l($d,"span start logits"),$d.forEach(o),Zr=l(qo," and "),gn=a(qo,"CODE",{});var kd=r(gn);ei=l(kd,"span end logits"),kd.forEach(o),ti=l(qo,")."),qo.forEach(o),oi=f(nt),Nt=a(nt,"P",{});var qs=r(Nt);ni=l(qs,"This model is a PyTorch "),Dt=a(qs,"A",{href:!0,rel:!0});var wd=r(Dt);si=l(wd,"torch.nn.Module"),wd.forEach(o),ai=l(qs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qs.forEach(o),ri=f(nt),E=a(nt,"DIV",{class:!0});var ae=r(E);$(Ot.$$.fragment,ae),ii=f(ae),Te=a(ae,"P",{});var Co=r(Te);li=l(Co,"The "),xo=a(Co,"A",{href:!0});var Pd=r(xo);di=l(Pd,"GPTJForQuestionAnswering"),Pd.forEach(o),ci=l(Co," forward method, overrides the "),_n=a(Co,"CODE",{});var yd=r(_n);pi=l(yd,"__call__"),yd.forEach(o),hi=l(Co," special method."),Co.forEach(o),ui=f(ae),$(We.$$.fragment,ae),mi=f(ae),$(Ue.$$.fragment,ae),fi=f(ae),$(Qe.$$.fragment,ae),ae.forEach(o),nt.forEach(o),Ts=f(t),be=a(t,"H2",{class:!0});var Cs=r(be);He=a(Cs,"A",{id:!0,class:!0,href:!0});var xd=r(He);Tn=a(xd,"SPAN",{});var jd=r(Tn);$(Bt.$$.fragment,jd),jd.forEach(o),xd.forEach(o),gi=f(Cs),bn=a(Cs,"SPAN",{});var Gd=r(bn);_i=l(Gd,"FlaxGPTJModel"),Gd.forEach(o),Cs.forEach(o),bs=f(t),G=a(t,"DIV",{class:!0});var q=r(G);$(Wt.$$.fragment,q),Ti=f(q),vn=a(q,"P",{});var Jd=r(vn);bi=l(Jd,"The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),Jd.forEach(o),vi=f(q),Ut=a(q,"P",{});var As=r(Ut);$i=l(As,"This model inherits from "),jo=a(As,"A",{href:!0});var Fd=r(jo);ki=l(Fd,"FlaxPreTrainedModel"),Fd.forEach(o),wi=l(As,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),As.forEach(o),Pi=f(q),Qt=a(q,"P",{});var Is=r(Qt);yi=l(Is,`This model is also a Flax Linen
`),Ht=a(Is,"A",{href:!0,rel:!0});var Md=r(Ht);xi=l(Md,"flax.nn.Module"),Md.forEach(o),ji=l(Is,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Is.forEach(o),Gi=f(q),$n=a(q,"P",{});var Ed=r($n);Ji=l(Ed,"Finally, this model supports inherent JAX features such as:"),Ed.forEach(o),Fi=f(q),Y=a(q,"UL",{});var st=r(Y);kn=a(st,"LI",{});var zd=r(kn);Rt=a(zd,"A",{href:!0,rel:!0});var qd=r(Rt);Mi=l(qd,"Just-In-Time (JIT) compilation"),qd.forEach(o),zd.forEach(o),Ei=f(st),wn=a(st,"LI",{});var Cd=r(wn);Vt=a(Cd,"A",{href:!0,rel:!0});var Ad=r(Vt);zi=l(Ad,"Automatic Differentiation"),Ad.forEach(o),Cd.forEach(o),qi=f(st),Pn=a(st,"LI",{});var Id=r(Pn);Kt=a(Id,"A",{href:!0,rel:!0});var Ld=r(Kt);Ci=l(Ld,"Vectorization"),Ld.forEach(o),Id.forEach(o),Ai=f(st),yn=a(st,"LI",{});var Sd=r(yn);Xt=a(Sd,"A",{href:!0,rel:!0});var Nd=r(Xt);Ii=l(Nd,"Parallelization"),Nd.forEach(o),Sd.forEach(o),st.forEach(o),Li=f(q),Q=a(q,"DIV",{class:!0});var at=r(Q);$(Yt.$$.fragment,at),Si=f(at),ve=a(at,"P",{});var Ao=r(ve);Ni=l(Ao,"The "),xn=a(Ao,"CODE",{});var Dd=r(xn);Di=l(Dd,"FlaxGPTJPreTrainedModel"),Dd.forEach(o),Oi=l(Ao," forward method, overrides the "),jn=a(Ao,"CODE",{});var Od=r(jn);Bi=l(Od,"__call__"),Od.forEach(o),Wi=l(Ao," special method."),Ao.forEach(o),Ui=f(at),$(Re.$$.fragment,at),Qi=f(at),$(Ve.$$.fragment,at),at.forEach(o),q.forEach(o),vs=f(t),$e=a(t,"H2",{class:!0});var Ls=r($e);Ke=a(Ls,"A",{id:!0,class:!0,href:!0});var Bd=r(Ke);Gn=a(Bd,"SPAN",{});var Wd=r(Gn);$(Zt.$$.fragment,Wd),Wd.forEach(o),Bd.forEach(o),Hi=f(Ls),Jn=a(Ls,"SPAN",{});var Ud=r(Jn);Ri=l(Ud,"FlaxGPTJForCausalLM"),Ud.forEach(o),Ls.forEach(o),$s=f(t),J=a(t,"DIV",{class:!0});var C=r(J);$(eo.$$.fragment,C),Vi=f(C),Fn=a(C,"P",{});var Qd=r(Fn);Ki=l(Qd,"The GPTJ Model transformer with a language modeling head on top."),Qd.forEach(o),Xi=f(C),to=a(C,"P",{});var Ss=r(to);Yi=l(Ss,"This model inherits from "),Go=a(Ss,"A",{href:!0});var Hd=r(Go);Zi=l(Hd,"FlaxPreTrainedModel"),Hd.forEach(o),el=l(Ss,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ss.forEach(o),tl=f(C),oo=a(C,"P",{});var Ns=r(oo);ol=l(Ns,`This model is also a Flax Linen
`),no=a(Ns,"A",{href:!0,rel:!0});var Rd=r(no);nl=l(Rd,"flax.nn.Module"),Rd.forEach(o),sl=l(Ns,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ns.forEach(o),al=f(C),Mn=a(C,"P",{});var Vd=r(Mn);rl=l(Vd,"Finally, this model supports inherent JAX features such as:"),Vd.forEach(o),il=f(C),Z=a(C,"UL",{});var rt=r(Z);En=a(rt,"LI",{});var Kd=r(En);so=a(Kd,"A",{href:!0,rel:!0});var Xd=r(so);ll=l(Xd,"Just-In-Time (JIT) compilation"),Xd.forEach(o),Kd.forEach(o),dl=f(rt),zn=a(rt,"LI",{});var Yd=r(zn);ao=a(Yd,"A",{href:!0,rel:!0});var Zd=r(ao);cl=l(Zd,"Automatic Differentiation"),Zd.forEach(o),Yd.forEach(o),pl=f(rt),qn=a(rt,"LI",{});var ec=r(qn);ro=a(ec,"A",{href:!0,rel:!0});var tc=r(ro);hl=l(tc,"Vectorization"),tc.forEach(o),ec.forEach(o),ul=f(rt),Cn=a(rt,"LI",{});var oc=r(Cn);io=a(oc,"A",{href:!0,rel:!0});var nc=r(io);ml=l(nc,"Parallelization"),nc.forEach(o),oc.forEach(o),rt.forEach(o),fl=f(C),H=a(C,"DIV",{class:!0});var it=r(H);$(lo.$$.fragment,it),gl=f(it),ke=a(it,"P",{});var Io=r(ke);_l=l(Io,"The "),An=a(Io,"CODE",{});var sc=r(An);Tl=l(sc,"FlaxGPTJPreTrainedModel"),sc.forEach(o),bl=l(Io," forward method, overrides the "),In=a(Io,"CODE",{});var ac=r(In);vl=l(ac,"__call__"),ac.forEach(o),$l=l(Io," special method."),Io.forEach(o),kl=f(it),$(Xe.$$.fragment,it),wl=f(it),$(Ye.$$.fragment,it),it.forEach(o),C.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(Jc)),p(h,"id","gptj"),p(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(h,"href","#gptj"),p(c,"class","relative group"),p(Pe,"id","overview"),p(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pe,"href","#overview"),p(ie,"class","relative group"),p(dt,"href","https://github.com/kingoflolz/mesh-transformer-jax"),p(dt,"rel","nofollow"),p(ct,"href","https://pile.eleuther.ai/"),p(ct,"rel","nofollow"),p(pt,"href","https://huggingface.co/stellaathena"),p(pt,"rel","nofollow"),p(ht,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),p(ht,"rel","nofollow"),p(ut,"href","https://huggingface.co/EleutherAI/gpt-j-6B/tree/float16"),p(ut,"rel","nofollow"),p(ft,"href","https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md"),p(ft,"rel","nofollow"),p(gt,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),p(gt,"rel","nofollow"),p(je,"id","generation"),p(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(je,"href","#generation"),p(le,"class","relative group"),p(go,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),p(Je,"id","transformers.GPTJConfig"),p(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Je,"href","#transformers.GPTJConfig"),p(de,"class","relative group"),p(To,"href","/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJModel"),p(kt,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),p(kt,"rel","nofollow"),p(bo,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),p(vo,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),p(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Me,"id","transformers.GPTJModel"),p(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Me,"href","#transformers.GPTJModel"),p(ce,"class","relative group"),p(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(xt,"rel","nofollow"),p($o,"href","/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJModel"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(qe,"id","transformers.GPTJForCausalLM"),p(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qe,"href","#transformers.GPTJForCausalLM"),p(he,"class","relative group"),p(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Mt,"rel","nofollow"),p(ko,"href","/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJForCausalLM"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ie,"id","transformers.GPTJForSequenceClassification"),p(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ie,"href","#transformers.GPTJForSequenceClassification"),p(me,"class","relative group"),p(Po,"href","/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),p(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(At,"rel","nofollow"),p(yo,"href","/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Be,"id","transformers.GPTJForQuestionAnswering"),p(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Be,"href","#transformers.GPTJForQuestionAnswering"),p(ge,"class","relative group"),p(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Dt,"rel","nofollow"),p(xo,"href","/docs/transformers/pr_highlight/en/model_doc/gptj#transformers.GPTJForQuestionAnswering"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(He,"id","transformers.FlaxGPTJModel"),p(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(He,"href","#transformers.FlaxGPTJModel"),p(be,"class","relative group"),p(jo,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(Ht,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(Ht,"rel","nofollow"),p(Rt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(Rt,"rel","nofollow"),p(Vt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(Vt,"rel","nofollow"),p(Kt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(Kt,"rel","nofollow"),p(Xt,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(Xt,"rel","nofollow"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ke,"id","transformers.FlaxGPTJForCausalLM"),p(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ke,"href","#transformers.FlaxGPTJForCausalLM"),p($e,"class","relative group"),p(Go,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(no,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(no,"rel","nofollow"),p(so,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(so,"rel","nofollow"),p(ao,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(ao,"rel","nofollow"),p(ro,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(ro,"rel","nofollow"),p(io,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(io,"rel","nofollow"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),T(t,_,g),T(t,c,g),e(c,h),e(h,b),k(n,b,null),e(c,u),e(c,j),e(j,Ds),T(t,Kn,g),T(t,ie,g),e(ie,Pe),e(Pe,So),k(lt,So,null),e(ie,Os),e(ie,No),e(No,Bs),T(t,Xn,g),T(t,oe,g),e(oe,Ws),e(oe,dt),e(dt,Us),e(oe,Qs),e(oe,ct),e(ct,Hs),e(oe,Rs),T(t,Yn,g),T(t,ye,g),e(ye,Vs),e(ye,pt),e(pt,Ks),e(ye,Xs),T(t,Zn,g),T(t,uo,g),e(uo,Ys),T(t,es,g),T(t,mo,g),e(mo,I),e(I,Zs),e(I,ht),e(ht,ea),e(I,ta),e(I,Do),e(Do,oa),e(I,na),e(I,Oo),e(Oo,sa),e(I,aa),e(I,ut),e(ut,ra),e(I,ia),T(t,ts,g),k(mt,t,g),T(t,os,g),T(t,xe,g),e(xe,Bo),e(Bo,fo),e(fo,la),e(fo,ft),e(ft,da),e(xe,ca),e(xe,Wo),e(Wo,V),e(V,pa),e(V,gt),e(gt,ha),e(V,ua),e(V,Uo),e(Uo,ma),e(V,fa),e(V,Qo),e(Qo,ga),e(V,_a),T(t,ns,g),T(t,le,g),e(le,je),e(je,Ho),k(_t,Ho,null),e(le,Ta),e(le,Ro),e(Ro,ba),T(t,ss,g),T(t,Ge,g),e(Ge,va),e(Ge,go),e(go,$a),e(Ge,ka),T(t,as,g),k(Tt,t,g),T(t,rs,g),T(t,_o,g),e(_o,wa),T(t,is,g),k(bt,t,g),T(t,ls,g),T(t,de,g),e(de,Je),e(Je,Vo),k(vt,Vo,null),e(de,Pa),e(de,Ko),e(Ko,ya),T(t,ds,g),T(t,K,g),k($t,K,null),e(K,xa),e(K,L),e(L,ja),e(L,To),e(To,Ga),e(L,Ja),e(L,kt),e(kt,Fa),e(L,Ma),e(L,bo),e(bo,Ea),e(L,za),e(L,vo),e(vo,qa),e(L,Ca),e(K,Aa),k(Fe,K,null),T(t,cs,g),T(t,ce,g),e(ce,Me),e(Me,Xo),k(wt,Xo,null),e(ce,Ia),e(ce,Yo),e(Yo,La),T(t,ps,g),T(t,X,g),k(Pt,X,null),e(X,Sa),e(X,yt),e(yt,Na),e(yt,xt),e(xt,Da),e(yt,Oa),e(X,Ba),e(X,W),k(jt,W,null),e(W,Wa),e(W,pe),e(pe,Ua),e(pe,$o),e($o,Qa),e(pe,Ha),e(pe,Zo),e(Zo,Ra),e(pe,Va),e(W,Ka),k(Ee,W,null),e(W,Xa),k(ze,W,null),T(t,hs,g),T(t,he,g),e(he,qe),e(qe,en),k(Gt,en,null),e(he,Ya),e(he,tn),e(tn,Za),T(t,us,g),T(t,S,g),k(Jt,S,null),e(S,er),e(S,on),e(on,tr),e(S,or),e(S,Ft),e(Ft,nr),e(Ft,Mt),e(Mt,sr),e(Ft,ar),e(S,rr),e(S,U),k(Et,U,null),e(U,ir),e(U,ue),e(ue,lr),e(ue,ko),e(ko,dr),e(ue,cr),e(ue,nn),e(nn,pr),e(ue,hr),e(U,ur),k(Ce,U,null),e(U,mr),k(Ae,U,null),T(t,ms,g),T(t,me,g),e(me,Ie),e(Ie,sn),k(zt,sn,null),e(me,fr),e(me,an),e(an,gr),T(t,fs,g),T(t,M,g),k(qt,M,null),e(M,_r),e(M,rn),e(rn,Tr),e(M,br),e(M,wo),e(wo,Po),e(Po,vr),e(wo,$r),e(M,kr),e(M,N),e(N,wr),e(N,ln),e(ln,Pr),e(N,yr),e(N,dn),e(dn,xr),e(N,jr),e(N,cn),e(cn,Gr),e(N,Jr),e(N,pn),e(pn,Fr),e(N,Mr),e(M,Er),e(M,Ct),e(Ct,zr),e(Ct,At),e(At,qr),e(Ct,Cr),e(M,Ar),e(M,F),k(It,F,null),e(F,Ir),e(F,fe),e(fe,Lr),e(fe,yo),e(yo,Sr),e(fe,Nr),e(fe,hn),e(hn,Dr),e(fe,Or),e(F,Br),k(Le,F,null),e(F,Wr),k(Se,F,null),e(F,Ur),k(Ne,F,null),e(F,Qr),k(De,F,null),e(F,Hr),k(Oe,F,null),T(t,gs,g),T(t,ge,g),e(ge,Be),e(Be,un),k(Lt,un,null),e(ge,Rr),e(ge,mn),e(mn,Vr),T(t,_s,g),T(t,D,g),k(St,D,null),e(D,Kr),e(D,_e),e(_e,Xr),e(_e,fn),e(fn,Yr),e(_e,Zr),e(_e,gn),e(gn,ei),e(_e,ti),e(D,oi),e(D,Nt),e(Nt,ni),e(Nt,Dt),e(Dt,si),e(Nt,ai),e(D,ri),e(D,E),k(Ot,E,null),e(E,ii),e(E,Te),e(Te,li),e(Te,xo),e(xo,di),e(Te,ci),e(Te,_n),e(_n,pi),e(Te,hi),e(E,ui),k(We,E,null),e(E,mi),k(Ue,E,null),e(E,fi),k(Qe,E,null),T(t,Ts,g),T(t,be,g),e(be,He),e(He,Tn),k(Bt,Tn,null),e(be,gi),e(be,bn),e(bn,_i),T(t,bs,g),T(t,G,g),k(Wt,G,null),e(G,Ti),e(G,vn),e(vn,bi),e(G,vi),e(G,Ut),e(Ut,$i),e(Ut,jo),e(jo,ki),e(Ut,wi),e(G,Pi),e(G,Qt),e(Qt,yi),e(Qt,Ht),e(Ht,xi),e(Qt,ji),e(G,Gi),e(G,$n),e($n,Ji),e(G,Fi),e(G,Y),e(Y,kn),e(kn,Rt),e(Rt,Mi),e(Y,Ei),e(Y,wn),e(wn,Vt),e(Vt,zi),e(Y,qi),e(Y,Pn),e(Pn,Kt),e(Kt,Ci),e(Y,Ai),e(Y,yn),e(yn,Xt),e(Xt,Ii),e(G,Li),e(G,Q),k(Yt,Q,null),e(Q,Si),e(Q,ve),e(ve,Ni),e(ve,xn),e(xn,Di),e(ve,Oi),e(ve,jn),e(jn,Bi),e(ve,Wi),e(Q,Ui),k(Re,Q,null),e(Q,Qi),k(Ve,Q,null),T(t,vs,g),T(t,$e,g),e($e,Ke),e(Ke,Gn),k(Zt,Gn,null),e($e,Hi),e($e,Jn),e(Jn,Ri),T(t,$s,g),T(t,J,g),k(eo,J,null),e(J,Vi),e(J,Fn),e(Fn,Ki),e(J,Xi),e(J,to),e(to,Yi),e(to,Go),e(Go,Zi),e(to,el),e(J,tl),e(J,oo),e(oo,ol),e(oo,no),e(no,nl),e(oo,sl),e(J,al),e(J,Mn),e(Mn,rl),e(J,il),e(J,Z),e(Z,En),e(En,so),e(so,ll),e(Z,dl),e(Z,zn),e(zn,ao),e(ao,cl),e(Z,pl),e(Z,qn),e(qn,ro),e(ro,hl),e(Z,ul),e(Z,Cn),e(Cn,io),e(io,ml),e(J,fl),e(J,H),k(lo,H,null),e(H,gl),e(H,ke),e(ke,_l),e(ke,An),e(An,Tl),e(ke,bl),e(ke,In),e(In,vl),e(ke,$l),e(H,kl),k(Xe,H,null),e(H,wl),k(Ye,H,null),ks=!0},p(t,[g]){const co={};g&2&&(co.$$scope={dirty:g,ctx:t}),Fe.$set(co);const Ln={};g&2&&(Ln.$$scope={dirty:g,ctx:t}),Ee.$set(Ln);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:t}),ze.$set(Sn);const Nn={};g&2&&(Nn.$$scope={dirty:g,ctx:t}),Ce.$set(Nn);const po={};g&2&&(po.$$scope={dirty:g,ctx:t}),Ae.$set(po);const Dn={};g&2&&(Dn.$$scope={dirty:g,ctx:t}),Le.$set(Dn);const On={};g&2&&(On.$$scope={dirty:g,ctx:t}),Se.$set(On);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:t}),Ne.$set(Bn);const we={};g&2&&(we.$$scope={dirty:g,ctx:t}),De.$set(we);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:t}),Oe.$set(Wn);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:t}),We.$set(Un);const ho={};g&2&&(ho.$$scope={dirty:g,ctx:t}),Ue.$set(ho);const Qn={};g&2&&(Qn.$$scope={dirty:g,ctx:t}),Qe.$set(Qn);const Hn={};g&2&&(Hn.$$scope={dirty:g,ctx:t}),Re.$set(Hn);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:t}),Ve.$set(Rn);const O={};g&2&&(O.$$scope={dirty:g,ctx:t}),Xe.$set(O);const Vn={};g&2&&(Vn.$$scope={dirty:g,ctx:t}),Ye.$set(Vn)},i(t){ks||(w(n.$$.fragment,t),w(lt.$$.fragment,t),w(mt.$$.fragment,t),w(_t.$$.fragment,t),w(Tt.$$.fragment,t),w(bt.$$.fragment,t),w(vt.$$.fragment,t),w($t.$$.fragment,t),w(Fe.$$.fragment,t),w(wt.$$.fragment,t),w(Pt.$$.fragment,t),w(jt.$$.fragment,t),w(Ee.$$.fragment,t),w(ze.$$.fragment,t),w(Gt.$$.fragment,t),w(Jt.$$.fragment,t),w(Et.$$.fragment,t),w(Ce.$$.fragment,t),w(Ae.$$.fragment,t),w(zt.$$.fragment,t),w(qt.$$.fragment,t),w(It.$$.fragment,t),w(Le.$$.fragment,t),w(Se.$$.fragment,t),w(Ne.$$.fragment,t),w(De.$$.fragment,t),w(Oe.$$.fragment,t),w(Lt.$$.fragment,t),w(St.$$.fragment,t),w(Ot.$$.fragment,t),w(We.$$.fragment,t),w(Ue.$$.fragment,t),w(Qe.$$.fragment,t),w(Bt.$$.fragment,t),w(Wt.$$.fragment,t),w(Yt.$$.fragment,t),w(Re.$$.fragment,t),w(Ve.$$.fragment,t),w(Zt.$$.fragment,t),w(eo.$$.fragment,t),w(lo.$$.fragment,t),w(Xe.$$.fragment,t),w(Ye.$$.fragment,t),ks=!0)},o(t){P(n.$$.fragment,t),P(lt.$$.fragment,t),P(mt.$$.fragment,t),P(_t.$$.fragment,t),P(Tt.$$.fragment,t),P(bt.$$.fragment,t),P(vt.$$.fragment,t),P($t.$$.fragment,t),P(Fe.$$.fragment,t),P(wt.$$.fragment,t),P(Pt.$$.fragment,t),P(jt.$$.fragment,t),P(Ee.$$.fragment,t),P(ze.$$.fragment,t),P(Gt.$$.fragment,t),P(Jt.$$.fragment,t),P(Et.$$.fragment,t),P(Ce.$$.fragment,t),P(Ae.$$.fragment,t),P(zt.$$.fragment,t),P(qt.$$.fragment,t),P(It.$$.fragment,t),P(Le.$$.fragment,t),P(Se.$$.fragment,t),P(Ne.$$.fragment,t),P(De.$$.fragment,t),P(Oe.$$.fragment,t),P(Lt.$$.fragment,t),P(St.$$.fragment,t),P(Ot.$$.fragment,t),P(We.$$.fragment,t),P(Ue.$$.fragment,t),P(Qe.$$.fragment,t),P(Bt.$$.fragment,t),P(Wt.$$.fragment,t),P(Yt.$$.fragment,t),P(Re.$$.fragment,t),P(Ve.$$.fragment,t),P(Zt.$$.fragment,t),P(eo.$$.fragment,t),P(lo.$$.fragment,t),P(Xe.$$.fragment,t),P(Ye.$$.fragment,t),ks=!1},d(t){o(d),t&&o(_),t&&o(c),y(n),t&&o(Kn),t&&o(ie),y(lt),t&&o(Xn),t&&o(oe),t&&o(Yn),t&&o(ye),t&&o(Zn),t&&o(uo),t&&o(es),t&&o(mo),t&&o(ts),y(mt,t),t&&o(os),t&&o(xe),t&&o(ns),t&&o(le),y(_t),t&&o(ss),t&&o(Ge),t&&o(as),y(Tt,t),t&&o(rs),t&&o(_o),t&&o(is),y(bt,t),t&&o(ls),t&&o(de),y(vt),t&&o(ds),t&&o(K),y($t),y(Fe),t&&o(cs),t&&o(ce),y(wt),t&&o(ps),t&&o(X),y(Pt),y(jt),y(Ee),y(ze),t&&o(hs),t&&o(he),y(Gt),t&&o(us),t&&o(S),y(Jt),y(Et),y(Ce),y(Ae),t&&o(ms),t&&o(me),y(zt),t&&o(fs),t&&o(M),y(qt),y(It),y(Le),y(Se),y(Ne),y(De),y(Oe),t&&o(gs),t&&o(ge),y(Lt),t&&o(_s),t&&o(D),y(St),y(Ot),y(We),y(Ue),y(Qe),t&&o(Ts),t&&o(be),y(Bt),t&&o(bs),t&&o(G),y(Wt),y(Yt),y(Re),y(Ve),t&&o(vs),t&&o($e),y(Zt),t&&o($s),t&&o(J),y(eo),y(lo),y(Xe),y(Ye)}}}const Jc={local:"gptj",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTJConfig",title:"GPTJConfig"},{local:"transformers.GPTJModel",title:"GPTJModel"},{local:"transformers.GPTJForCausalLM",title:"GPTJForCausalLM"},{local:"transformers.GPTJForSequenceClassification",title:"GPTJForSequenceClassification"},{local:"transformers.GPTJForQuestionAnswering",title:"GPTJForQuestionAnswering"},{local:"transformers.FlaxGPTJModel",title:"FlaxGPTJModel"},{local:"transformers.FlaxGPTJForCausalLM",title:"FlaxGPTJForCausalLM"}],title:"GPT-J"};function Fc(x){return cc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ic extends rc{constructor(d){super();ic(this,d,Fc,Gc,lc,{})}}export{Ic as default,Jc as metadata};
