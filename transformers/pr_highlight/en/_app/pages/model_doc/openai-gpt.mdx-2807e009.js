import{S as $f,i as Pf,s as yf,e as a,k as c,w as k,t as n,M as If,c as r,d as t,m as p,a as i,x as w,h as s,b as g,F as e,g as u,y as $,q as P,o as y,B as I,v as Of,L as Je}from"../../chunks/vendor-6b77c823.js";import{T as it}from"../../chunks/Tip-39098574.js";import{D as ae}from"../../chunks/Docstring-1088f2fb.js";import{C as Be}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as We}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ke}from"../../chunks/ExampleCodeBlock-5212b321.js";function Af(M){let d,v,m,h,b;return h=new Be({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

# Initializing a GPT configuration
configuration = OpenAIGPTConfig()

# Initializing a model from the configuration
model = OpenAIGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTConfig, OpenAIGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OpenAIGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=n("Examples:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Examples:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Gf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Mf(M){let d,v,m,h,b;return h=new Be({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Ef(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function zf(M){let d,v,m,h,b;return h=new Be({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Ff(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function qf(M){let d,v,m,h,b;return h=new Be({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")
tokenizer.add_special_tokens(
    {"cls_token": "[CLS]"}
)  # Add a [CLS] to the vocabulary (we should train it also!)
model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
input_ids = torch.tensor([tokenizer.encode(s) for s in choices]).unsqueeze(0)  # Batch size 1, 2 choices
mc_token_ids = torch.tensor([input_ids.size(-1) - 1, input_ids.size(-1) - 1]).unsqueeze(0)  # Batch size 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens(
<span class="hljs-meta">... </span>    {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=a("p"),v=n("Examples:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Examples:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Cf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function xf(M){let d,v,m,h,b;return h=new Be({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),v=n("Example of single-label classification:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example of single-label classification:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function jf(M){let d,v;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,h){$(d,m,h),v=!0},p:Je,i(m){v||(P(d.$$.fragment,m),v=!0)},o(m){y(d.$$.fragment,m),v=!1},d(m){I(d,m)}}}function Df(M){let d,v,m,h,b;return h=new Be({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),v=n("Example of multi-label classification:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example of multi-label classification:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Hf(M){let d,v;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,h){$(d,m,h),v=!0},p:Je,i(m){v||(P(d.$$.fragment,m),v=!0)},o(m){y(d.$$.fragment,m),v=!1},d(m){I(d,m)}}}function Sf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,ce,ne,S,ue,pe,z,ge,N,Q,re,B,_e,te,x,ie,U,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=c(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=c(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),pe=c(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var O=i(d);v=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),m=p(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=p(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=p(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=p(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=p(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Oe=i(N);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=p(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ae=i(U);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,O){u(T,d,O),e(d,v),u(T,m,O),u(T,h,O),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,O),u(T,G,O),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,O),u(T,C,O),e(C,Z),u(T,ee,O),u(T,E,O),e(E,F),e(F,oe),e(F,W),e(W,ce),e(F,ne),e(F,S),e(S,ue),e(E,pe),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,B),e(B,_e),e(E,te),e(E,x),e(x,ie),e(x,U),e(U,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Lf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Nf(M){let d,v,m,h,b;return h=new Be({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Wf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,ce,ne,S,ue,pe,z,ge,N,Q,re,B,_e,te,x,ie,U,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=c(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=c(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),pe=c(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var O=i(d);v=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),m=p(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=p(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=p(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=p(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=p(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Oe=i(N);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=p(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ae=i(U);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,O){u(T,d,O),e(d,v),u(T,m,O),u(T,h,O),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,O),u(T,G,O),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,O),u(T,C,O),e(C,Z),u(T,ee,O),u(T,E,O),e(E,F),e(F,oe),e(F,W),e(W,ce),e(F,ne),e(F,S),e(S,ue),e(E,pe),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,B),e(B,_e),e(E,te),e(E,x),e(x,ie),e(x,U),e(U,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Bf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Uf(M){let d,v,m,h,b;return h=new Be({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Rf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,ce,ne,S,ue,pe,z,ge,N,Q,re,B,_e,te,x,ie,U,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=c(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=c(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),pe=c(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var O=i(d);v=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),m=p(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=p(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=p(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=p(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=p(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Oe=i(N);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=p(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ae=i(U);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,O){u(T,d,O),e(d,v),u(T,m,O),u(T,h,O),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,O),u(T,G,O),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,O),u(T,C,O),e(C,Z),u(T,ee,O),u(T,E,O),e(E,F),e(F,oe),e(F,W),e(W,ce),e(F,ne),e(F,S),e(S,ue),e(E,pe),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,B),e(B,_e),e(E,te),e(E,x),e(x,ie),e(x,U),e(U,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Vf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Kf(M){let d,v,m,h,b;return h=new Be({props:{code:`import tensorflow as tf
from transformers import OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")

# Add a [CLS] to the vocabulary (we should train it also!)
tokenizer.add_special_tokens({"cls_token": "[CLS]"})
model.resize_token_embeddings(len(tokenizer))  # Update the model embeddings with the new vocabulary size
print(tokenizer.cls_token_id, len(tokenizer))  # The newly token the last token of the vocabulary

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoding = tokenizer(choices, return_tensors="tf")
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
inputs["mc_token_ids"] = tf.constant(
    [inputs["input_ids"].shape[-1] - 1, inputs["input_ids"].shape[-1] - 1]
)[
    None, :
]  # Batch size 1
outputs = model(inputs)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.cls_token_id, <span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># The newly token the last token of the vocabulary</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(choices, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;mc_token_ids&quot;</span>] = tf.constant(
<span class="hljs-meta">... </span>    [inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>)[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=a("p"),v=n("Examples:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Examples:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Jf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,ce,ne,S,ue,pe,z,ge,N,Q,re,B,_e,te,x,ie,U,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=c(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=c(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),pe=c(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var O=i(d);v=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),m=p(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=p(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=p(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=p(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=p(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);ce=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),pe=p(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Oe=i(N);Q=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),re=s(K," or "),B=r(K,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),K.forEach(t),te=p(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(ke,"CODE",{});var Ae=i(U);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,O){u(T,d,O),e(d,v),u(T,m,O),u(T,h,O),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,O),u(T,G,O),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,O),u(T,C,O),e(C,Z),u(T,ee,O),u(T,E,O),e(E,F),e(F,oe),e(F,W),e(W,ce),e(F,ne),e(F,S),e(S,ue),e(E,pe),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,B),e(B,_e),e(E,te),e(E,x),e(x,ie),e(x,U),e(U,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Xf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Qf(M){let d,v,m,h,b;return h=new Be({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=p(l),w(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),$(h,l,f),b=!0},p:Je,i(l){b||(P(h.$$.fragment,l),b=!0)},o(l){y(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),I(h,l)}}}function Yf(M){let d,v;return d=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,h){$(d,m,h),v=!0},p:Je,i(m){v||(P(d.$$.fragment,m),v=!0)},o(m){y(d.$$.fragment,m),v=!1},d(m){I(d,m)}}}function Zf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,ce,ne,S,ue,pe,z,ge,N,Q,re,B,_e,te,x,ie,U,Te,T,O,R,Me,Ee,q,se,ze,be,j,V,ve,Fe,K,Oe,we,ke,Ae,Xe,Ti,js,bi,vi,Ds,ki,wi,Hs,$i,Pi,dr,jo,cr,Se,yi,Ss,Ii,Oi,Ls,Ai,Gi,es,Mi,Ei,Ns,zi,Fi,pr,bt,Wt,Ws,Do,qi,Bs,Ci,hr,Ue,Ho,xi,lt,ji,ts,Di,Hi,os,Si,Li,So,Ni,Wi,Bi,vt,Ui,ns,Ri,Vi,ss,Ki,Ji,Xi,Bt,mr,kt,Ut,Us,Lo,Qi,Rs,Yi,fr,qe,No,Zi,Vs,el,tl,Wo,Ks,ol,nl,dt,sl,Js,al,rl,Xs,il,ll,Qs,dl,cl,pl,Bo,hl,as,ml,fl,ul,rs,Uo,ur,wt,Rt,Ys,Ro,gl,Zs,_l,gr,Re,Vo,Tl,Ko,bl,ea,vl,kl,wl,Jo,ta,$l,Pl,oa,yl,Il,Xo,Ol,is,Al,Gl,_r,$t,Vt,na,Qo,Ml,sa,El,Tr,Pt,Yo,zl,aa,Fl,br,yt,Zo,ql,ra,Cl,vr,It,Kt,ia,en,xl,la,jl,kr,Ce,tn,Dl,da,Hl,Sl,on,Ll,ls,Nl,Wl,Bl,nn,Ul,sn,Rl,Vl,Kl,Qe,an,Jl,Ot,Xl,ds,Ql,Yl,ca,Zl,ed,td,Jt,od,Xt,wr,At,Qt,pa,rn,nd,ha,sd,$r,xe,ln,ad,ma,rd,id,dn,ld,cs,dd,cd,pd,cn,hd,pn,md,fd,ud,Ye,hn,gd,Gt,_d,ps,Td,bd,fa,vd,kd,wd,Yt,$d,Zt,Pr,Mt,eo,ua,mn,Pd,ga,yd,yr,je,fn,Id,_a,Od,Ad,un,Gd,hs,Md,Ed,zd,gn,Fd,_n,qd,Cd,xd,Ze,Tn,jd,Et,Dd,ms,Hd,Sd,Ta,Ld,Nd,Wd,to,Bd,oo,Ir,zt,no,ba,bn,Ud,va,Rd,Or,De,vn,Vd,He,Kd,fs,Jd,Xd,ka,Qd,Yd,wa,Zd,ec,$a,tc,oc,Pa,nc,sc,ac,kn,rc,us,ic,lc,dc,wn,cc,$n,pc,hc,mc,$e,Pn,fc,Ft,uc,gs,gc,_c,ya,Tc,bc,vc,so,kc,ao,wc,ro,$c,io,Pc,lo,Ar,qt,co,Ia,yn,yc,Oa,Ic,Gr,Pe,In,Oc,Aa,Ac,Gc,On,Mc,_s,Ec,zc,Fc,An,qc,Gn,Cc,xc,jc,po,Dc,et,Mn,Hc,Ct,Sc,Ts,Lc,Nc,Ga,Wc,Bc,Uc,ho,Rc,mo,Mr,xt,fo,Ma,En,Vc,Ea,Kc,Er,ye,zn,Jc,za,Xc,Qc,Fn,Yc,bs,Zc,ep,tp,qn,op,Cn,np,sp,ap,uo,rp,tt,xn,ip,jt,lp,vs,dp,cp,Fa,pp,hp,mp,go,fp,_o,zr,Dt,To,qa,jn,up,Ca,gp,Fr,Ie,Dn,_p,xa,Tp,bp,Hn,vp,ks,kp,wp,$p,Sn,Pp,Ln,yp,Ip,Op,bo,Ap,ot,Nn,Gp,Ht,Mp,ws,Ep,zp,ja,Fp,qp,Cp,vo,xp,ko,qr,St,wo,Da,Wn,jp,Ha,Dp,Cr,le,Bn,Hp,Sa,Sp,Lp,$s,Ps,Np,Wp,Bp,Ve,Up,La,Rp,Vp,Na,Kp,Jp,Wa,Xp,Qp,Ba,Yp,Zp,eh,Un,th,ys,oh,nh,sh,Rn,ah,Vn,rh,ih,lh,$o,dh,Le,Kn,ch,Lt,ph,Is,hh,mh,Ua,fh,uh,gh,Po,_h,yo,Th,Io,xr;return l=new We({}),Y=new We({}),jo=new Be({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),Do=new We({}),Ho=new ae({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.OpenAIGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.OpenAIGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.OpenAIGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.OpenAIGPTConfig.afn",description:`<strong>afn</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"afn"},{anchor:"transformers.OpenAIGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.OpenAIGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.OpenAIGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.OpenAIGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.OpenAIGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.OpenAIGPTConfig.predict_special_tokens",description:`<strong>predict_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not special tokens should be predicted when the model has a language modeling head.`,name:"predict_special_tokens"},{anchor:"transformers.OpenAIGPTConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/configuration_openai.py#L27"}}),Bt=new Ke({props:{anchor:"transformers.OpenAIGPTConfig.example",$$slots:{default:[Af]},$$scope:{ctx:M}}}),Lo=new We({}),No=new ae({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/tokenization_openai.py#L73"}}),Uo=new ae({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/tokenization_openai.py#L206"}}),Ro=new We({}),Vo=new ae({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/tokenization_openai_fast.py#L40"}}),Qo=new We({}),Yo=new ae({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L301"}}),Zo=new ae({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L373"}}),en=new We({}),tn=new ae({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L405"}}),an=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L431",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new it({props:{$$slots:{default:[Gf]},$$scope:{ctx:M}}}),Xt=new Ke({props:{anchor:"transformers.OpenAIGPTModel.forward.example",$$slots:{default:[Mf]},$$scope:{ctx:M}}}),rn=new We({}),ln=new ae({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L536"}}),hn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L551",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yt=new it({props:{$$slots:{default:[Ef]},$$scope:{ctx:M}}}),Zt=new Ke({props:{anchor:"transformers.OpenAIGPTLMHeadModel.forward.example",$$slots:{default:[zf]},$$scope:{ctx:M}}}),mn=new We({}),fn=new ae({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L623"}}),Tn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L641",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new it({props:{$$slots:{default:[Ff]},$$scope:{ctx:M}}}),oo=new Ke({props:{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.example",$$slots:{default:[qf]},$$scope:{ctx:M}}}),bn=new We({}),vn=new ae({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L749"}}),Pn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_openai.py#L759",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),so=new it({props:{$$slots:{default:[Cf]},$$scope:{ctx:M}}}),ao=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example",$$slots:{default:[xf]},$$scope:{ctx:M}}}),ro=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-2",$$slots:{default:[jf]},$$scope:{ctx:M}}}),io=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-3",$$slots:{default:[Df]},$$scope:{ctx:M}}}),lo=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-4",$$slots:{default:[Hf]},$$scope:{ctx:M}}}),yn=new We({}),In=new ae({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L498"}}),po=new it({props:{$$slots:{default:[Sf]},$$scope:{ctx:M}}}),Mn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L503",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ho=new it({props:{$$slots:{default:[Lf]},$$scope:{ctx:M}}}),mo=new Ke({props:{anchor:"transformers.TFOpenAIGPTModel.call.example",$$slots:{default:[Nf]},$$scope:{ctx:M}}}),En=new We({}),zn=new ae({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L555"}}),uo=new it({props:{$$slots:{default:[Wf]},$$scope:{ctx:M}}}),xn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L566",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new it({props:{$$slots:{default:[Bf]},$$scope:{ctx:M}}}),_o=new Ke({props:{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.example",$$slots:{default:[Uf]},$$scope:{ctx:M}}}),jn=new We({}),Dn=new ae({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L645"}}),bo=new it({props:{$$slots:{default:[Rf]},$$scope:{ctx:M}}}),Nn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L654",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new it({props:{$$slots:{default:[Vf]},$$scope:{ctx:M}}}),ko=new Ke({props:{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.example",$$slots:{default:[Kf]},$$scope:{ctx:M}}}),Wn=new We({}),Bn=new ae({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L781"}}),$o=new it({props:{$$slots:{default:[Jf]},$$scope:{ctx:M}}}),Kn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/openai/modeling_tf_openai.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Po=new it({props:{$$slots:{default:[Xf]},$$scope:{ctx:M}}}),yo=new Ke({props:{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.example",$$slots:{default:[Qf]},$$scope:{ctx:M}}}),Io=new Ke({props:{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.example-2",$$slots:{default:[Yf]},$$scope:{ctx:M}}}),{c(){d=a("meta"),v=c(),m=a("h1"),h=a("a"),b=a("span"),k(l.$$.fragment),f=c(),A=a("span"),he=n("OpenAI GPT"),J=c(),G=a("h2"),X=a("a"),D=a("span"),k(Y.$$.fragment),me=c(),H=a("span"),fe=n("Overview"),de=c(),L=a("p"),C=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),E=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),F=c(),oe=a("p"),W=n("The abstract from the paper is the following:"),ce=c(),ne=a("p"),S=a("em"),ue=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),pe=c(),z=a("p"),ge=n("Tips:"),N=c(),Q=a("ul"),re=a("li"),B=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),_e=c(),te=a("li"),x=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=a("em"),U=n("run_generation.py"),Te=n(" example script."),T=c(),O=a("p"),R=a("a"),Me=n("Write With Transformer"),Ee=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),q=c(),se=a("p"),ze=n("This model was contributed by "),be=a("a"),j=n("thomwolf"),V=n(". The original code can be found "),ve=a("a"),Fe=n("here"),K=n("."),Oe=c(),we=a("p"),ke=n("Note:"),Ae=c(),Xe=a("p"),Ti=n("If you want to reproduce the original tokenization process of the "),js=a("em"),bi=n("OpenAI GPT"),vi=n(" paper, you will need to install "),Ds=a("code"),ki=n("ftfy"),wi=n(`
and `),Hs=a("code"),$i=n("SpaCy"),Pi=n(":"),dr=c(),k(jo.$$.fragment),cr=c(),Se=a("p"),yi=n("If you don\u2019t install "),Ss=a("code"),Ii=n("ftfy"),Oi=n(" and "),Ls=a("code"),Ai=n("SpaCy"),Gi=n(", the "),es=a("a"),Mi=n("OpenAIGPTTokenizer"),Ei=n(` will default to tokenize
using BERT\u2019s `),Ns=a("code"),zi=n("BasicTokenizer"),Fi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),pr=c(),bt=a("h2"),Wt=a("a"),Ws=a("span"),k(Do.$$.fragment),qi=c(),Bs=a("span"),Ci=n("OpenAIGPTConfig"),hr=c(),Ue=a("div"),k(Ho.$$.fragment),xi=c(),lt=a("p"),ji=n("This is the configuration class to store the configuration of a "),ts=a("a"),Di=n("OpenAIGPTModel"),Hi=n(" or a "),os=a("a"),Si=n("TFOpenAIGPTModel"),Li=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),So=a("a"),Ni=n("GPT"),Wi=n(" architecture from OpenAI."),Bi=c(),vt=a("p"),Ui=n("Configuration objects inherit from "),ns=a("a"),Ri=n("PretrainedConfig"),Vi=n(` and can be used to control the model outputs. Read the
documentation from `),ss=a("a"),Ki=n("PretrainedConfig"),Ji=n(" for more information."),Xi=c(),k(Bt.$$.fragment),mr=c(),kt=a("h2"),Ut=a("a"),Us=a("span"),k(Lo.$$.fragment),Qi=c(),Rs=a("span"),Yi=n("OpenAIGPTTokenizer"),fr=c(),qe=a("div"),k(No.$$.fragment),Zi=c(),Vs=a("p"),el=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),tl=c(),Wo=a("ul"),Ks=a("li"),ol=n("lowercases all inputs,"),nl=c(),dt=a("li"),sl=n("uses "),Js=a("code"),al=n("SpaCy"),rl=n(" tokenizer and "),Xs=a("code"),il=n("ftfy"),ll=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Qs=a("code"),dl=n("BasicTokenizer"),cl=n(" if not."),pl=c(),Bo=a("p"),hl=n("This tokenizer inherits from "),as=a("a"),ml=n("PreTrainedTokenizer"),fl=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ul=c(),rs=a("div"),k(Uo.$$.fragment),ur=c(),wt=a("h2"),Rt=a("a"),Ys=a("span"),k(Ro.$$.fragment),gl=c(),Zs=a("span"),_l=n("OpenAIGPTTokenizerFast"),gr=c(),Re=a("div"),k(Vo.$$.fragment),Tl=c(),Ko=a("p"),bl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),ea=a("em"),vl=n("tokenizers"),kl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),wl=c(),Jo=a("ul"),ta=a("li"),$l=n("lower case all inputs"),Pl=c(),oa=a("li"),yl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Il=c(),Xo=a("p"),Ol=n("This tokenizer inherits from "),is=a("a"),Al=n("PreTrainedTokenizerFast"),Gl=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),_r=c(),$t=a("h2"),Vt=a("a"),na=a("span"),k(Qo.$$.fragment),Ml=c(),sa=a("span"),El=n("OpenAI specific outputs"),Tr=c(),Pt=a("div"),k(Yo.$$.fragment),zl=c(),aa=a("p"),Fl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),br=c(),yt=a("div"),k(Zo.$$.fragment),ql=c(),ra=a("p"),Cl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),vr=c(),It=a("h2"),Kt=a("a"),ia=a("span"),k(en.$$.fragment),xl=c(),la=a("span"),jl=n("OpenAIGPTModel"),kr=c(),Ce=a("div"),k(tn.$$.fragment),Dl=c(),da=a("p"),Hl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Sl=c(),on=a("p"),Ll=n("This model inherits from "),ls=a("a"),Nl=n("PreTrainedModel"),Wl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=c(),nn=a("p"),Ul=n("This model is also a PyTorch "),sn=a("a"),Rl=n("torch.nn.Module"),Vl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kl=c(),Qe=a("div"),k(an.$$.fragment),Jl=c(),Ot=a("p"),Xl=n("The "),ds=a("a"),Ql=n("OpenAIGPTModel"),Yl=n(" forward method, overrides the "),ca=a("code"),Zl=n("__call__"),ed=n(" special method."),td=c(),k(Jt.$$.fragment),od=c(),k(Xt.$$.fragment),wr=c(),At=a("h2"),Qt=a("a"),pa=a("span"),k(rn.$$.fragment),nd=c(),ha=a("span"),sd=n("OpenAIGPTLMHeadModel"),$r=c(),xe=a("div"),k(ln.$$.fragment),ad=c(),ma=a("p"),rd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),id=c(),dn=a("p"),ld=n("This model inherits from "),cs=a("a"),dd=n("PreTrainedModel"),cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=c(),cn=a("p"),hd=n("This model is also a PyTorch "),pn=a("a"),md=n("torch.nn.Module"),fd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ud=c(),Ye=a("div"),k(hn.$$.fragment),gd=c(),Gt=a("p"),_d=n("The "),ps=a("a"),Td=n("OpenAIGPTLMHeadModel"),bd=n(" forward method, overrides the "),fa=a("code"),vd=n("__call__"),kd=n(" special method."),wd=c(),k(Yt.$$.fragment),$d=c(),k(Zt.$$.fragment),Pr=c(),Mt=a("h2"),eo=a("a"),ua=a("span"),k(mn.$$.fragment),Pd=c(),ga=a("span"),yd=n("OpenAIGPTDoubleHeadsModel"),yr=c(),je=a("div"),k(fn.$$.fragment),Id=c(),_a=a("p"),Od=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Ad=c(),un=a("p"),Gd=n("This model inherits from "),hs=a("a"),Md=n("PreTrainedModel"),Ed=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd=c(),gn=a("p"),Fd=n("This model is also a PyTorch "),_n=a("a"),qd=n("torch.nn.Module"),Cd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=c(),Ze=a("div"),k(Tn.$$.fragment),jd=c(),Et=a("p"),Dd=n("The "),ms=a("a"),Hd=n("OpenAIGPTDoubleHeadsModel"),Sd=n(" forward method, overrides the "),Ta=a("code"),Ld=n("__call__"),Nd=n(" special method."),Wd=c(),k(to.$$.fragment),Bd=c(),k(oo.$$.fragment),Ir=c(),zt=a("h2"),no=a("a"),ba=a("span"),k(bn.$$.fragment),Ud=c(),va=a("span"),Rd=n("OpenAIGPTForSequenceClassification"),Or=c(),De=a("div"),k(vn.$$.fragment),Vd=c(),He=a("p"),Kd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),fs=a("a"),Jd=n("OpenAIGPTForSequenceClassification"),Xd=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ka=a("code"),Qd=n("pad_token_id"),Yd=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),wa=a("code"),Zd=n("pad_token_id"),ec=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),$a=a("code"),tc=n("inputs_embeds"),oc=n(" are passed instead of "),Pa=a("code"),nc=n("input_ids"),sc=n(`, it does the same (take
the last value in each row of the batch).`),ac=c(),kn=a("p"),rc=n("This model inherits from "),us=a("a"),ic=n("PreTrainedModel"),lc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc=c(),wn=a("p"),cc=n("This model is also a PyTorch "),$n=a("a"),pc=n("torch.nn.Module"),hc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mc=c(),$e=a("div"),k(Pn.$$.fragment),fc=c(),Ft=a("p"),uc=n("The "),gs=a("a"),gc=n("OpenAIGPTForSequenceClassification"),_c=n(" forward method, overrides the "),ya=a("code"),Tc=n("__call__"),bc=n(" special method."),vc=c(),k(so.$$.fragment),kc=c(),k(ao.$$.fragment),wc=c(),k(ro.$$.fragment),$c=c(),k(io.$$.fragment),Pc=c(),k(lo.$$.fragment),Ar=c(),qt=a("h2"),co=a("a"),Ia=a("span"),k(yn.$$.fragment),yc=c(),Oa=a("span"),Ic=n("TFOpenAIGPTModel"),Gr=c(),Pe=a("div"),k(In.$$.fragment),Oc=c(),Aa=a("p"),Ac=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Gc=c(),On=a("p"),Mc=n("This model inherits from "),_s=a("a"),Ec=n("TFPreTrainedModel"),zc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fc=c(),An=a("p"),qc=n("This model is also a "),Gn=a("a"),Cc=n("tf.keras.Model"),xc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc=c(),k(po.$$.fragment),Dc=c(),et=a("div"),k(Mn.$$.fragment),Hc=c(),Ct=a("p"),Sc=n("The "),Ts=a("a"),Lc=n("TFOpenAIGPTModel"),Nc=n(" forward method, overrides the "),Ga=a("code"),Wc=n("__call__"),Bc=n(" special method."),Uc=c(),k(ho.$$.fragment),Rc=c(),k(mo.$$.fragment),Mr=c(),xt=a("h2"),fo=a("a"),Ma=a("span"),k(En.$$.fragment),Vc=c(),Ea=a("span"),Kc=n("TFOpenAIGPTLMHeadModel"),Er=c(),ye=a("div"),k(zn.$$.fragment),Jc=c(),za=a("p"),Xc=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Qc=c(),Fn=a("p"),Yc=n("This model inherits from "),bs=a("a"),Zc=n("TFPreTrainedModel"),ep=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp=c(),qn=a("p"),op=n("This model is also a "),Cn=a("a"),np=n("tf.keras.Model"),sp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ap=c(),k(uo.$$.fragment),rp=c(),tt=a("div"),k(xn.$$.fragment),ip=c(),jt=a("p"),lp=n("The "),vs=a("a"),dp=n("TFOpenAIGPTLMHeadModel"),cp=n(" forward method, overrides the "),Fa=a("code"),pp=n("__call__"),hp=n(" special method."),mp=c(),k(go.$$.fragment),fp=c(),k(_o.$$.fragment),zr=c(),Dt=a("h2"),To=a("a"),qa=a("span"),k(jn.$$.fragment),up=c(),Ca=a("span"),gp=n("TFOpenAIGPTDoubleHeadsModel"),Fr=c(),Ie=a("div"),k(Dn.$$.fragment),_p=c(),xa=a("p"),Tp=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),bp=c(),Hn=a("p"),vp=n("This model inherits from "),ks=a("a"),kp=n("TFPreTrainedModel"),wp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p=c(),Sn=a("p"),Pp=n("This model is also a "),Ln=a("a"),yp=n("tf.keras.Model"),Ip=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Op=c(),k(bo.$$.fragment),Ap=c(),ot=a("div"),k(Nn.$$.fragment),Gp=c(),Ht=a("p"),Mp=n("The "),ws=a("a"),Ep=n("TFOpenAIGPTDoubleHeadsModel"),zp=n(" forward method, overrides the "),ja=a("code"),Fp=n("__call__"),qp=n(" special method."),Cp=c(),k(vo.$$.fragment),xp=c(),k(ko.$$.fragment),qr=c(),St=a("h2"),wo=a("a"),Da=a("span"),k(Wn.$$.fragment),jp=c(),Ha=a("span"),Dp=n("TFOpenAIGPTForSequenceClassification"),Cr=c(),le=a("div"),k(Bn.$$.fragment),Hp=c(),Sa=a("p"),Sp=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Lp=c(),$s=a("p"),Ps=a("a"),Np=n("TFOpenAIGPTForSequenceClassification"),Wp=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Bp=c(),Ve=a("p"),Up=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),La=a("code"),Rp=n("pad_token_id"),Vp=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Na=a("code"),Kp=n("pad_token_id"),Jp=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=a("code"),Xp=n("inputs_embeds"),Qp=n(" are passed instead of "),Ba=a("code"),Yp=n("input_ids"),Zp=n(`, it does the same (take the last value in
each row of the batch).`),eh=c(),Un=a("p"),th=n("This model inherits from "),ys=a("a"),oh=n("TFPreTrainedModel"),nh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh=c(),Rn=a("p"),ah=n("This model is also a "),Vn=a("a"),rh=n("tf.keras.Model"),ih=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh=c(),k($o.$$.fragment),dh=c(),Le=a("div"),k(Kn.$$.fragment),ch=c(),Lt=a("p"),ph=n("The "),Is=a("a"),hh=n("TFOpenAIGPTForSequenceClassification"),mh=n(" forward method, overrides the "),Ua=a("code"),fh=n("__call__"),uh=n(" special method."),gh=c(),k(Po.$$.fragment),_h=c(),k(yo.$$.fragment),Th=c(),k(Io.$$.fragment),this.h()},l(o){const _=If('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=p(o),m=r(o,"H1",{class:!0});var Jn=i(m);h=r(Jn,"A",{id:!0,class:!0,href:!0});var Ra=i(h);b=r(Ra,"SPAN",{});var Va=i(b);w(l.$$.fragment,Va),Va.forEach(t),Ra.forEach(t),f=p(Jn),A=r(Jn,"SPAN",{});var Ka=i(A);he=s(Ka,"OpenAI GPT"),Ka.forEach(t),Jn.forEach(t),J=p(o),G=r(o,"H2",{class:!0});var Xn=i(G);X=r(Xn,"A",{id:!0,class:!0,href:!0});var Ja=i(X);D=r(Ja,"SPAN",{});var Xa=i(D);w(Y.$$.fragment,Xa),Xa.forEach(t),Ja.forEach(t),me=p(Xn),H=r(Xn,"SPAN",{});var Qa=i(H);fe=s(Qa,"Overview"),Qa.forEach(t),Xn.forEach(t),de=p(o),L=r(o,"P",{});var Qn=i(L);C=s(Qn,"OpenAI GPT model was proposed in "),Z=r(Qn,"A",{href:!0,rel:!0});var Ya=i(Z);ee=s(Ya,"Improving Language Understanding by Generative Pre-Training"),Ya.forEach(t),E=s(Qn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Qn.forEach(t),F=p(o),oe=r(o,"P",{});var Za=i(oe);W=s(Za,"The abstract from the paper is the following:"),Za.forEach(t),ce=p(o),ne=r(o,"P",{});var er=i(ne);S=r(er,"EM",{});var tr=i(S);ue=s(tr,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),tr.forEach(t),er.forEach(t),pe=p(o),z=r(o,"P",{});var or=i(z);ge=s(or,"Tips:"),or.forEach(t),N=p(o),Q=r(o,"UL",{});var Yn=i(Q);re=r(Yn,"LI",{});var nr=i(re);B=s(nr,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),nr.forEach(t),_e=p(Yn),te=r(Yn,"LI",{});var Zn=i(te);x=s(Zn,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=r(Zn,"EM",{});var sr=i(ie);U=s(sr,"run_generation.py"),sr.forEach(t),Te=s(Zn," example script."),Zn.forEach(t),Yn.forEach(t),T=p(o),O=r(o,"P",{});var Os=i(O);R=r(Os,"A",{href:!0,rel:!0});var ar=i(R);Me=s(ar,"Write With Transformer"),ar.forEach(t),Ee=s(Os,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),Os.forEach(t),q=p(o),se=r(o,"P",{});var Nt=i(se);ze=s(Nt,"This model was contributed by "),be=r(Nt,"A",{href:!0,rel:!0});var rr=i(be);j=s(rr,"thomwolf"),rr.forEach(t),V=s(Nt,". The original code can be found "),ve=r(Nt,"A",{href:!0,rel:!0});var ir=i(ve);Fe=s(ir,"here"),ir.forEach(t),K=s(Nt,"."),Nt.forEach(t),Oe=p(o),we=r(o,"P",{});var lr=i(we);ke=s(lr,"Note:"),lr.forEach(t),Ae=p(o),Xe=r(o,"P",{});var ct=i(Xe);Ti=s(ct,"If you want to reproduce the original tokenization process of the "),js=r(ct,"EM",{});var vh=i(js);bi=s(vh,"OpenAI GPT"),vh.forEach(t),vi=s(ct," paper, you will need to install "),Ds=r(ct,"CODE",{});var kh=i(Ds);ki=s(kh,"ftfy"),kh.forEach(t),wi=s(ct,`
and `),Hs=r(ct,"CODE",{});var wh=i(Hs);$i=s(wh,"SpaCy"),wh.forEach(t),Pi=s(ct,":"),ct.forEach(t),dr=p(o),w(jo.$$.fragment,o),cr=p(o),Se=r(o,"P",{});var pt=i(Se);yi=s(pt,"If you don\u2019t install "),Ss=r(pt,"CODE",{});var $h=i(Ss);Ii=s($h,"ftfy"),$h.forEach(t),Oi=s(pt," and "),Ls=r(pt,"CODE",{});var Ph=i(Ls);Ai=s(Ph,"SpaCy"),Ph.forEach(t),Gi=s(pt,", the "),es=r(pt,"A",{href:!0});var yh=i(es);Mi=s(yh,"OpenAIGPTTokenizer"),yh.forEach(t),Ei=s(pt,` will default to tokenize
using BERT\u2019s `),Ns=r(pt,"CODE",{});var Ih=i(Ns);zi=s(Ih,"BasicTokenizer"),Ih.forEach(t),Fi=s(pt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),pt.forEach(t),pr=p(o),bt=r(o,"H2",{class:!0});var jr=i(bt);Wt=r(jr,"A",{id:!0,class:!0,href:!0});var Oh=i(Wt);Ws=r(Oh,"SPAN",{});var Ah=i(Ws);w(Do.$$.fragment,Ah),Ah.forEach(t),Oh.forEach(t),qi=p(jr),Bs=r(jr,"SPAN",{});var Gh=i(Bs);Ci=s(Gh,"OpenAIGPTConfig"),Gh.forEach(t),jr.forEach(t),hr=p(o),Ue=r(o,"DIV",{class:!0});var Oo=i(Ue);w(Ho.$$.fragment,Oo),xi=p(Oo),lt=r(Oo,"P",{});var Ao=i(lt);ji=s(Ao,"This is the configuration class to store the configuration of a "),ts=r(Ao,"A",{href:!0});var Mh=i(ts);Di=s(Mh,"OpenAIGPTModel"),Mh.forEach(t),Hi=s(Ao," or a "),os=r(Ao,"A",{href:!0});var Eh=i(os);Si=s(Eh,"TFOpenAIGPTModel"),Eh.forEach(t),Li=s(Ao,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),So=r(Ao,"A",{href:!0,rel:!0});var zh=i(So);Ni=s(zh,"GPT"),zh.forEach(t),Wi=s(Ao," architecture from OpenAI."),Ao.forEach(t),Bi=p(Oo),vt=r(Oo,"P",{});var As=i(vt);Ui=s(As,"Configuration objects inherit from "),ns=r(As,"A",{href:!0});var Fh=i(ns);Ri=s(Fh,"PretrainedConfig"),Fh.forEach(t),Vi=s(As,` and can be used to control the model outputs. Read the
documentation from `),ss=r(As,"A",{href:!0});var qh=i(ss);Ki=s(qh,"PretrainedConfig"),qh.forEach(t),Ji=s(As," for more information."),As.forEach(t),Xi=p(Oo),w(Bt.$$.fragment,Oo),Oo.forEach(t),mr=p(o),kt=r(o,"H2",{class:!0});var Dr=i(kt);Ut=r(Dr,"A",{id:!0,class:!0,href:!0});var Ch=i(Ut);Us=r(Ch,"SPAN",{});var xh=i(Us);w(Lo.$$.fragment,xh),xh.forEach(t),Ch.forEach(t),Qi=p(Dr),Rs=r(Dr,"SPAN",{});var jh=i(Rs);Yi=s(jh,"OpenAIGPTTokenizer"),jh.forEach(t),Dr.forEach(t),fr=p(o),qe=r(o,"DIV",{class:!0});var ht=i(qe);w(No.$$.fragment,ht),Zi=p(ht),Vs=r(ht,"P",{});var Dh=i(Vs);el=s(Dh,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),Dh.forEach(t),tl=p(ht),Wo=r(ht,"UL",{});var Hr=i(Wo);Ks=r(Hr,"LI",{});var Hh=i(Ks);ol=s(Hh,"lowercases all inputs,"),Hh.forEach(t),nl=p(Hr),dt=r(Hr,"LI",{});var Go=i(dt);sl=s(Go,"uses "),Js=r(Go,"CODE",{});var Sh=i(Js);al=s(Sh,"SpaCy"),Sh.forEach(t),rl=s(Go," tokenizer and "),Xs=r(Go,"CODE",{});var Lh=i(Xs);il=s(Lh,"ftfy"),Lh.forEach(t),ll=s(Go,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Qs=r(Go,"CODE",{});var Nh=i(Qs);dl=s(Nh,"BasicTokenizer"),Nh.forEach(t),cl=s(Go," if not."),Go.forEach(t),Hr.forEach(t),pl=p(ht),Bo=r(ht,"P",{});var Sr=i(Bo);hl=s(Sr,"This tokenizer inherits from "),as=r(Sr,"A",{href:!0});var Wh=i(as);ml=s(Wh,"PreTrainedTokenizer"),Wh.forEach(t),fl=s(Sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sr.forEach(t),ul=p(ht),rs=r(ht,"DIV",{class:!0});var Bh=i(rs);w(Uo.$$.fragment,Bh),Bh.forEach(t),ht.forEach(t),ur=p(o),wt=r(o,"H2",{class:!0});var Lr=i(wt);Rt=r(Lr,"A",{id:!0,class:!0,href:!0});var Uh=i(Rt);Ys=r(Uh,"SPAN",{});var Rh=i(Ys);w(Ro.$$.fragment,Rh),Rh.forEach(t),Uh.forEach(t),gl=p(Lr),Zs=r(Lr,"SPAN",{});var Vh=i(Zs);_l=s(Vh,"OpenAIGPTTokenizerFast"),Vh.forEach(t),Lr.forEach(t),gr=p(o),Re=r(o,"DIV",{class:!0});var Mo=i(Re);w(Vo.$$.fragment,Mo),Tl=p(Mo),Ko=r(Mo,"P",{});var Nr=i(Ko);bl=s(Nr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),ea=r(Nr,"EM",{});var Kh=i(ea);vl=s(Kh,"tokenizers"),Kh.forEach(t),kl=s(Nr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Nr.forEach(t),wl=p(Mo),Jo=r(Mo,"UL",{});var Wr=i(Jo);ta=r(Wr,"LI",{});var Jh=i(ta);$l=s(Jh,"lower case all inputs"),Jh.forEach(t),Pl=p(Wr),oa=r(Wr,"LI",{});var Xh=i(oa);yl=s(Xh,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Xh.forEach(t),Wr.forEach(t),Il=p(Mo),Xo=r(Mo,"P",{});var Br=i(Xo);Ol=s(Br,"This tokenizer inherits from "),is=r(Br,"A",{href:!0});var Qh=i(is);Al=s(Qh,"PreTrainedTokenizerFast"),Qh.forEach(t),Gl=s(Br,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Br.forEach(t),Mo.forEach(t),_r=p(o),$t=r(o,"H2",{class:!0});var Ur=i($t);Vt=r(Ur,"A",{id:!0,class:!0,href:!0});var Yh=i(Vt);na=r(Yh,"SPAN",{});var Zh=i(na);w(Qo.$$.fragment,Zh),Zh.forEach(t),Yh.forEach(t),Ml=p(Ur),sa=r(Ur,"SPAN",{});var em=i(sa);El=s(em,"OpenAI specific outputs"),em.forEach(t),Ur.forEach(t),Tr=p(o),Pt=r(o,"DIV",{class:!0});var Rr=i(Pt);w(Yo.$$.fragment,Rr),zl=p(Rr),aa=r(Rr,"P",{});var tm=i(aa);Fl=s(tm,"Base class for outputs of models predicting if two sentences are consecutive or not."),tm.forEach(t),Rr.forEach(t),br=p(o),yt=r(o,"DIV",{class:!0});var Vr=i(yt);w(Zo.$$.fragment,Vr),ql=p(Vr),ra=r(Vr,"P",{});var om=i(ra);Cl=s(om,"Base class for outputs of models predicting if two sentences are consecutive or not."),om.forEach(t),Vr.forEach(t),vr=p(o),It=r(o,"H2",{class:!0});var Kr=i(It);Kt=r(Kr,"A",{id:!0,class:!0,href:!0});var nm=i(Kt);ia=r(nm,"SPAN",{});var sm=i(ia);w(en.$$.fragment,sm),sm.forEach(t),nm.forEach(t),xl=p(Kr),la=r(Kr,"SPAN",{});var am=i(la);jl=s(am,"OpenAIGPTModel"),am.forEach(t),Kr.forEach(t),kr=p(o),Ce=r(o,"DIV",{class:!0});var mt=i(Ce);w(tn.$$.fragment,mt),Dl=p(mt),da=r(mt,"P",{});var rm=i(da);Hl=s(rm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),rm.forEach(t),Sl=p(mt),on=r(mt,"P",{});var Jr=i(on);Ll=s(Jr,"This model inherits from "),ls=r(Jr,"A",{href:!0});var im=i(ls);Nl=s(im,"PreTrainedModel"),im.forEach(t),Wl=s(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr.forEach(t),Bl=p(mt),nn=r(mt,"P",{});var Xr=i(nn);Ul=s(Xr,"This model is also a PyTorch "),sn=r(Xr,"A",{href:!0,rel:!0});var lm=i(sn);Rl=s(lm,"torch.nn.Module"),lm.forEach(t),Vl=s(Xr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xr.forEach(t),Kl=p(mt),Qe=r(mt,"DIV",{class:!0});var Eo=i(Qe);w(an.$$.fragment,Eo),Jl=p(Eo),Ot=r(Eo,"P",{});var Gs=i(Ot);Xl=s(Gs,"The "),ds=r(Gs,"A",{href:!0});var dm=i(ds);Ql=s(dm,"OpenAIGPTModel"),dm.forEach(t),Yl=s(Gs," forward method, overrides the "),ca=r(Gs,"CODE",{});var cm=i(ca);Zl=s(cm,"__call__"),cm.forEach(t),ed=s(Gs," special method."),Gs.forEach(t),td=p(Eo),w(Jt.$$.fragment,Eo),od=p(Eo),w(Xt.$$.fragment,Eo),Eo.forEach(t),mt.forEach(t),wr=p(o),At=r(o,"H2",{class:!0});var Qr=i(At);Qt=r(Qr,"A",{id:!0,class:!0,href:!0});var pm=i(Qt);pa=r(pm,"SPAN",{});var hm=i(pa);w(rn.$$.fragment,hm),hm.forEach(t),pm.forEach(t),nd=p(Qr),ha=r(Qr,"SPAN",{});var mm=i(ha);sd=s(mm,"OpenAIGPTLMHeadModel"),mm.forEach(t),Qr.forEach(t),$r=p(o),xe=r(o,"DIV",{class:!0});var ft=i(xe);w(ln.$$.fragment,ft),ad=p(ft),ma=r(ft,"P",{});var fm=i(ma);rd=s(fm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),fm.forEach(t),id=p(ft),dn=r(ft,"P",{});var Yr=i(dn);ld=s(Yr,"This model inherits from "),cs=r(Yr,"A",{href:!0});var um=i(cs);dd=s(um,"PreTrainedModel"),um.forEach(t),cd=s(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(t),pd=p(ft),cn=r(ft,"P",{});var Zr=i(cn);hd=s(Zr,"This model is also a PyTorch "),pn=r(Zr,"A",{href:!0,rel:!0});var gm=i(pn);md=s(gm,"torch.nn.Module"),gm.forEach(t),fd=s(Zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zr.forEach(t),ud=p(ft),Ye=r(ft,"DIV",{class:!0});var zo=i(Ye);w(hn.$$.fragment,zo),gd=p(zo),Gt=r(zo,"P",{});var Ms=i(Gt);_d=s(Ms,"The "),ps=r(Ms,"A",{href:!0});var _m=i(ps);Td=s(_m,"OpenAIGPTLMHeadModel"),_m.forEach(t),bd=s(Ms," forward method, overrides the "),fa=r(Ms,"CODE",{});var Tm=i(fa);vd=s(Tm,"__call__"),Tm.forEach(t),kd=s(Ms," special method."),Ms.forEach(t),wd=p(zo),w(Yt.$$.fragment,zo),$d=p(zo),w(Zt.$$.fragment,zo),zo.forEach(t),ft.forEach(t),Pr=p(o),Mt=r(o,"H2",{class:!0});var ei=i(Mt);eo=r(ei,"A",{id:!0,class:!0,href:!0});var bm=i(eo);ua=r(bm,"SPAN",{});var vm=i(ua);w(mn.$$.fragment,vm),vm.forEach(t),bm.forEach(t),Pd=p(ei),ga=r(ei,"SPAN",{});var km=i(ga);yd=s(km,"OpenAIGPTDoubleHeadsModel"),km.forEach(t),ei.forEach(t),yr=p(o),je=r(o,"DIV",{class:!0});var ut=i(je);w(fn.$$.fragment,ut),Id=p(ut),_a=r(ut,"P",{});var wm=i(_a);Od=s(wm,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),wm.forEach(t),Ad=p(ut),un=r(ut,"P",{});var ti=i(un);Gd=s(ti,"This model inherits from "),hs=r(ti,"A",{href:!0});var $m=i(hs);Md=s($m,"PreTrainedModel"),$m.forEach(t),Ed=s(ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ti.forEach(t),zd=p(ut),gn=r(ut,"P",{});var oi=i(gn);Fd=s(oi,"This model is also a PyTorch "),_n=r(oi,"A",{href:!0,rel:!0});var Pm=i(_n);qd=s(Pm,"torch.nn.Module"),Pm.forEach(t),Cd=s(oi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oi.forEach(t),xd=p(ut),Ze=r(ut,"DIV",{class:!0});var Fo=i(Ze);w(Tn.$$.fragment,Fo),jd=p(Fo),Et=r(Fo,"P",{});var Es=i(Et);Dd=s(Es,"The "),ms=r(Es,"A",{href:!0});var ym=i(ms);Hd=s(ym,"OpenAIGPTDoubleHeadsModel"),ym.forEach(t),Sd=s(Es," forward method, overrides the "),Ta=r(Es,"CODE",{});var Im=i(Ta);Ld=s(Im,"__call__"),Im.forEach(t),Nd=s(Es," special method."),Es.forEach(t),Wd=p(Fo),w(to.$$.fragment,Fo),Bd=p(Fo),w(oo.$$.fragment,Fo),Fo.forEach(t),ut.forEach(t),Ir=p(o),zt=r(o,"H2",{class:!0});var ni=i(zt);no=r(ni,"A",{id:!0,class:!0,href:!0});var Om=i(no);ba=r(Om,"SPAN",{});var Am=i(ba);w(bn.$$.fragment,Am),Am.forEach(t),Om.forEach(t),Ud=p(ni),va=r(ni,"SPAN",{});var Gm=i(va);Rd=s(Gm,"OpenAIGPTForSequenceClassification"),Gm.forEach(t),ni.forEach(t),Or=p(o),De=r(o,"DIV",{class:!0});var gt=i(De);w(vn.$$.fragment,gt),Vd=p(gt),He=r(gt,"P",{});var nt=i(He);Kd=s(nt,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),fs=r(nt,"A",{href:!0});var Mm=i(fs);Jd=s(Mm,"OpenAIGPTForSequenceClassification"),Mm.forEach(t),Xd=s(nt,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ka=r(nt,"CODE",{});var Em=i(ka);Qd=s(Em,"pad_token_id"),Em.forEach(t),Yd=s(nt,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),wa=r(nt,"CODE",{});var zm=i(wa);Zd=s(zm,"pad_token_id"),zm.forEach(t),ec=s(nt,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),$a=r(nt,"CODE",{});var Fm=i($a);tc=s(Fm,"inputs_embeds"),Fm.forEach(t),oc=s(nt," are passed instead of "),Pa=r(nt,"CODE",{});var qm=i(Pa);nc=s(qm,"input_ids"),qm.forEach(t),sc=s(nt,`, it does the same (take
the last value in each row of the batch).`),nt.forEach(t),ac=p(gt),kn=r(gt,"P",{});var si=i(kn);rc=s(si,"This model inherits from "),us=r(si,"A",{href:!0});var Cm=i(us);ic=s(Cm,"PreTrainedModel"),Cm.forEach(t),lc=s(si,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si.forEach(t),dc=p(gt),wn=r(gt,"P",{});var ai=i(wn);cc=s(ai,"This model is also a PyTorch "),$n=r(ai,"A",{href:!0,rel:!0});var xm=i($n);pc=s(xm,"torch.nn.Module"),xm.forEach(t),hc=s(ai,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ai.forEach(t),mc=p(gt),$e=r(gt,"DIV",{class:!0});var Ne=i($e);w(Pn.$$.fragment,Ne),fc=p(Ne),Ft=r(Ne,"P",{});var zs=i(Ft);uc=s(zs,"The "),gs=r(zs,"A",{href:!0});var jm=i(gs);gc=s(jm,"OpenAIGPTForSequenceClassification"),jm.forEach(t),_c=s(zs," forward method, overrides the "),ya=r(zs,"CODE",{});var Dm=i(ya);Tc=s(Dm,"__call__"),Dm.forEach(t),bc=s(zs," special method."),zs.forEach(t),vc=p(Ne),w(so.$$.fragment,Ne),kc=p(Ne),w(ao.$$.fragment,Ne),wc=p(Ne),w(ro.$$.fragment,Ne),$c=p(Ne),w(io.$$.fragment,Ne),Pc=p(Ne),w(lo.$$.fragment,Ne),Ne.forEach(t),gt.forEach(t),Ar=p(o),qt=r(o,"H2",{class:!0});var ri=i(qt);co=r(ri,"A",{id:!0,class:!0,href:!0});var Hm=i(co);Ia=r(Hm,"SPAN",{});var Sm=i(Ia);w(yn.$$.fragment,Sm),Sm.forEach(t),Hm.forEach(t),yc=p(ri),Oa=r(ri,"SPAN",{});var Lm=i(Oa);Ic=s(Lm,"TFOpenAIGPTModel"),Lm.forEach(t),ri.forEach(t),Gr=p(o),Pe=r(o,"DIV",{class:!0});var st=i(Pe);w(In.$$.fragment,st),Oc=p(st),Aa=r(st,"P",{});var Nm=i(Aa);Ac=s(Nm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Nm.forEach(t),Gc=p(st),On=r(st,"P",{});var ii=i(On);Mc=s(ii,"This model inherits from "),_s=r(ii,"A",{href:!0});var Wm=i(_s);Ec=s(Wm,"TFPreTrainedModel"),Wm.forEach(t),zc=s(ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii.forEach(t),Fc=p(st),An=r(st,"P",{});var li=i(An);qc=s(li,"This model is also a "),Gn=r(li,"A",{href:!0,rel:!0});var Bm=i(Gn);Cc=s(Bm,"tf.keras.Model"),Bm.forEach(t),xc=s(li,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li.forEach(t),jc=p(st),w(po.$$.fragment,st),Dc=p(st),et=r(st,"DIV",{class:!0});var qo=i(et);w(Mn.$$.fragment,qo),Hc=p(qo),Ct=r(qo,"P",{});var Fs=i(Ct);Sc=s(Fs,"The "),Ts=r(Fs,"A",{href:!0});var Um=i(Ts);Lc=s(Um,"TFOpenAIGPTModel"),Um.forEach(t),Nc=s(Fs," forward method, overrides the "),Ga=r(Fs,"CODE",{});var Rm=i(Ga);Wc=s(Rm,"__call__"),Rm.forEach(t),Bc=s(Fs," special method."),Fs.forEach(t),Uc=p(qo),w(ho.$$.fragment,qo),Rc=p(qo),w(mo.$$.fragment,qo),qo.forEach(t),st.forEach(t),Mr=p(o),xt=r(o,"H2",{class:!0});var di=i(xt);fo=r(di,"A",{id:!0,class:!0,href:!0});var Vm=i(fo);Ma=r(Vm,"SPAN",{});var Km=i(Ma);w(En.$$.fragment,Km),Km.forEach(t),Vm.forEach(t),Vc=p(di),Ea=r(di,"SPAN",{});var Jm=i(Ea);Kc=s(Jm,"TFOpenAIGPTLMHeadModel"),Jm.forEach(t),di.forEach(t),Er=p(o),ye=r(o,"DIV",{class:!0});var at=i(ye);w(zn.$$.fragment,at),Jc=p(at),za=r(at,"P",{});var Xm=i(za);Xc=s(Xm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Xm.forEach(t),Qc=p(at),Fn=r(at,"P",{});var ci=i(Fn);Yc=s(ci,"This model inherits from "),bs=r(ci,"A",{href:!0});var Qm=i(bs);Zc=s(Qm,"TFPreTrainedModel"),Qm.forEach(t),ep=s(ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ci.forEach(t),tp=p(at),qn=r(at,"P",{});var pi=i(qn);op=s(pi,"This model is also a "),Cn=r(pi,"A",{href:!0,rel:!0});var Ym=i(Cn);np=s(Ym,"tf.keras.Model"),Ym.forEach(t),sp=s(pi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pi.forEach(t),ap=p(at),w(uo.$$.fragment,at),rp=p(at),tt=r(at,"DIV",{class:!0});var Co=i(tt);w(xn.$$.fragment,Co),ip=p(Co),jt=r(Co,"P",{});var qs=i(jt);lp=s(qs,"The "),vs=r(qs,"A",{href:!0});var Zm=i(vs);dp=s(Zm,"TFOpenAIGPTLMHeadModel"),Zm.forEach(t),cp=s(qs," forward method, overrides the "),Fa=r(qs,"CODE",{});var ef=i(Fa);pp=s(ef,"__call__"),ef.forEach(t),hp=s(qs," special method."),qs.forEach(t),mp=p(Co),w(go.$$.fragment,Co),fp=p(Co),w(_o.$$.fragment,Co),Co.forEach(t),at.forEach(t),zr=p(o),Dt=r(o,"H2",{class:!0});var hi=i(Dt);To=r(hi,"A",{id:!0,class:!0,href:!0});var tf=i(To);qa=r(tf,"SPAN",{});var of=i(qa);w(jn.$$.fragment,of),of.forEach(t),tf.forEach(t),up=p(hi),Ca=r(hi,"SPAN",{});var nf=i(Ca);gp=s(nf,"TFOpenAIGPTDoubleHeadsModel"),nf.forEach(t),hi.forEach(t),Fr=p(o),Ie=r(o,"DIV",{class:!0});var rt=i(Ie);w(Dn.$$.fragment,rt),_p=p(rt),xa=r(rt,"P",{});var sf=i(xa);Tp=s(sf,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),sf.forEach(t),bp=p(rt),Hn=r(rt,"P",{});var mi=i(Hn);vp=s(mi,"This model inherits from "),ks=r(mi,"A",{href:!0});var af=i(ks);kp=s(af,"TFPreTrainedModel"),af.forEach(t),wp=s(mi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mi.forEach(t),$p=p(rt),Sn=r(rt,"P",{});var fi=i(Sn);Pp=s(fi,"This model is also a "),Ln=r(fi,"A",{href:!0,rel:!0});var rf=i(Ln);yp=s(rf,"tf.keras.Model"),rf.forEach(t),Ip=s(fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi.forEach(t),Op=p(rt),w(bo.$$.fragment,rt),Ap=p(rt),ot=r(rt,"DIV",{class:!0});var xo=i(ot);w(Nn.$$.fragment,xo),Gp=p(xo),Ht=r(xo,"P",{});var Cs=i(Ht);Mp=s(Cs,"The "),ws=r(Cs,"A",{href:!0});var lf=i(ws);Ep=s(lf,"TFOpenAIGPTDoubleHeadsModel"),lf.forEach(t),zp=s(Cs," forward method, overrides the "),ja=r(Cs,"CODE",{});var df=i(ja);Fp=s(df,"__call__"),df.forEach(t),qp=s(Cs," special method."),Cs.forEach(t),Cp=p(xo),w(vo.$$.fragment,xo),xp=p(xo),w(ko.$$.fragment,xo),xo.forEach(t),rt.forEach(t),qr=p(o),St=r(o,"H2",{class:!0});var ui=i(St);wo=r(ui,"A",{id:!0,class:!0,href:!0});var cf=i(wo);Da=r(cf,"SPAN",{});var pf=i(Da);w(Wn.$$.fragment,pf),pf.forEach(t),cf.forEach(t),jp=p(ui),Ha=r(ui,"SPAN",{});var hf=i(Ha);Dp=s(hf,"TFOpenAIGPTForSequenceClassification"),hf.forEach(t),ui.forEach(t),Cr=p(o),le=r(o,"DIV",{class:!0});var Ge=i(le);w(Bn.$$.fragment,Ge),Hp=p(Ge),Sa=r(Ge,"P",{});var mf=i(Sa);Sp=s(mf,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),mf.forEach(t),Lp=p(Ge),$s=r(Ge,"P",{});var bh=i($s);Ps=r(bh,"A",{href:!0});var ff=i(Ps);Np=s(ff,"TFOpenAIGPTForSequenceClassification"),ff.forEach(t),Wp=s(bh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),bh.forEach(t),Bp=p(Ge),Ve=r(Ge,"P",{});var _t=i(Ve);Up=s(_t,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),La=r(_t,"CODE",{});var uf=i(La);Rp=s(uf,"pad_token_id"),uf.forEach(t),Vp=s(_t,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Na=r(_t,"CODE",{});var gf=i(Na);Kp=s(gf,"pad_token_id"),gf.forEach(t),Jp=s(_t,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=r(_t,"CODE",{});var _f=i(Wa);Xp=s(_f,"inputs_embeds"),_f.forEach(t),Qp=s(_t," are passed instead of "),Ba=r(_t,"CODE",{});var Tf=i(Ba);Yp=s(Tf,"input_ids"),Tf.forEach(t),Zp=s(_t,`, it does the same (take the last value in
each row of the batch).`),_t.forEach(t),eh=p(Ge),Un=r(Ge,"P",{});var gi=i(Un);th=s(gi,"This model inherits from "),ys=r(gi,"A",{href:!0});var bf=i(ys);oh=s(bf,"TFPreTrainedModel"),bf.forEach(t),nh=s(gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gi.forEach(t),sh=p(Ge),Rn=r(Ge,"P",{});var _i=i(Rn);ah=s(_i,"This model is also a "),Vn=r(_i,"A",{href:!0,rel:!0});var vf=i(Vn);rh=s(vf,"tf.keras.Model"),vf.forEach(t),ih=s(_i,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_i.forEach(t),lh=p(Ge),w($o.$$.fragment,Ge),dh=p(Ge),Le=r(Ge,"DIV",{class:!0});var Tt=i(Le);w(Kn.$$.fragment,Tt),ch=p(Tt),Lt=r(Tt,"P",{});var xs=i(Lt);ph=s(xs,"The "),Is=r(xs,"A",{href:!0});var kf=i(Is);hh=s(kf,"TFOpenAIGPTForSequenceClassification"),kf.forEach(t),mh=s(xs," forward method, overrides the "),Ua=r(xs,"CODE",{});var wf=i(Ua);fh=s(wf,"__call__"),wf.forEach(t),uh=s(xs," special method."),xs.forEach(t),gh=p(Tt),w(Po.$$.fragment,Tt),_h=p(Tt),w(yo.$$.fragment,Tt),Th=p(Tt),w(Io.$$.fragment,Tt),Tt.forEach(t),Ge.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(eu)),g(h,"id","openai-gpt"),g(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(h,"href","#openai-gpt"),g(m,"class","relative group"),g(X,"id","overview"),g(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(X,"href","#overview"),g(G,"class","relative group"),g(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),g(Z,"rel","nofollow"),g(R,"href","https://transformer.huggingface.co/doc/gpt"),g(R,"rel","nofollow"),g(be,"href","https://huggingface.co/thomwolf"),g(be,"rel","nofollow"),g(ve,"href","https://github.com/openai/finetune-transformer-lm"),g(ve,"rel","nofollow"),g(es,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),g(Wt,"id","transformers.OpenAIGPTConfig"),g(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wt,"href","#transformers.OpenAIGPTConfig"),g(bt,"class","relative group"),g(ts,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),g(os,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),g(So,"href","https://huggingface.co/openai-gpt"),g(So,"rel","nofollow"),g(ns,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),g(ss,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),g(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ut,"id","transformers.OpenAIGPTTokenizer"),g(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ut,"href","#transformers.OpenAIGPTTokenizer"),g(kt,"class","relative group"),g(as,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Rt,"id","transformers.OpenAIGPTTokenizerFast"),g(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Rt,"href","#transformers.OpenAIGPTTokenizerFast"),g(wt,"class","relative group"),g(is,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),g(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Vt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),g($t,"class","relative group"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Kt,"id","transformers.OpenAIGPTModel"),g(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Kt,"href","#transformers.OpenAIGPTModel"),g(It,"class","relative group"),g(ls,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g(sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(sn,"rel","nofollow"),g(ds,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),g(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qt,"id","transformers.OpenAIGPTLMHeadModel"),g(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qt,"href","#transformers.OpenAIGPTLMHeadModel"),g(At,"class","relative group"),g(cs,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(pn,"rel","nofollow"),g(ps,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),g(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),g(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),g(Mt,"class","relative group"),g(hs,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(_n,"rel","nofollow"),g(ms,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(no,"id","transformers.OpenAIGPTForSequenceClassification"),g(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(no,"href","#transformers.OpenAIGPTForSequenceClassification"),g(zt,"class","relative group"),g(fs,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),g(us,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g($n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g($n,"rel","nofollow"),g(gs,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),g($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(co,"id","transformers.TFOpenAIGPTModel"),g(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(co,"href","#transformers.TFOpenAIGPTModel"),g(qt,"class","relative group"),g(_s,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Gn,"rel","nofollow"),g(Ts,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fo,"id","transformers.TFOpenAIGPTLMHeadModel"),g(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(fo,"href","#transformers.TFOpenAIGPTLMHeadModel"),g(xt,"class","relative group"),g(bs,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Cn,"rel","nofollow"),g(vs,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(To,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),g(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(To,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),g(Dt,"class","relative group"),g(ks,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ln,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ln,"rel","nofollow"),g(ws,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wo,"id","transformers.TFOpenAIGPTForSequenceClassification"),g(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(wo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),g(St,"class","relative group"),g(Ps,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),g(ys,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(Vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Vn,"rel","nofollow"),g(Is,"href","/docs/transformers/pr_highlight/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),g(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),u(o,v,_),u(o,m,_),e(m,h),e(h,b),$(l,b,null),e(m,f),e(m,A),e(A,he),u(o,J,_),u(o,G,_),e(G,X),e(X,D),$(Y,D,null),e(G,me),e(G,H),e(H,fe),u(o,de,_),u(o,L,_),e(L,C),e(L,Z),e(Z,ee),e(L,E),u(o,F,_),u(o,oe,_),e(oe,W),u(o,ce,_),u(o,ne,_),e(ne,S),e(S,ue),u(o,pe,_),u(o,z,_),e(z,ge),u(o,N,_),u(o,Q,_),e(Q,re),e(re,B),e(Q,_e),e(Q,te),e(te,x),e(te,ie),e(ie,U),e(te,Te),u(o,T,_),u(o,O,_),e(O,R),e(R,Me),e(O,Ee),u(o,q,_),u(o,se,_),e(se,ze),e(se,be),e(be,j),e(se,V),e(se,ve),e(ve,Fe),e(se,K),u(o,Oe,_),u(o,we,_),e(we,ke),u(o,Ae,_),u(o,Xe,_),e(Xe,Ti),e(Xe,js),e(js,bi),e(Xe,vi),e(Xe,Ds),e(Ds,ki),e(Xe,wi),e(Xe,Hs),e(Hs,$i),e(Xe,Pi),u(o,dr,_),$(jo,o,_),u(o,cr,_),u(o,Se,_),e(Se,yi),e(Se,Ss),e(Ss,Ii),e(Se,Oi),e(Se,Ls),e(Ls,Ai),e(Se,Gi),e(Se,es),e(es,Mi),e(Se,Ei),e(Se,Ns),e(Ns,zi),e(Se,Fi),u(o,pr,_),u(o,bt,_),e(bt,Wt),e(Wt,Ws),$(Do,Ws,null),e(bt,qi),e(bt,Bs),e(Bs,Ci),u(o,hr,_),u(o,Ue,_),$(Ho,Ue,null),e(Ue,xi),e(Ue,lt),e(lt,ji),e(lt,ts),e(ts,Di),e(lt,Hi),e(lt,os),e(os,Si),e(lt,Li),e(lt,So),e(So,Ni),e(lt,Wi),e(Ue,Bi),e(Ue,vt),e(vt,Ui),e(vt,ns),e(ns,Ri),e(vt,Vi),e(vt,ss),e(ss,Ki),e(vt,Ji),e(Ue,Xi),$(Bt,Ue,null),u(o,mr,_),u(o,kt,_),e(kt,Ut),e(Ut,Us),$(Lo,Us,null),e(kt,Qi),e(kt,Rs),e(Rs,Yi),u(o,fr,_),u(o,qe,_),$(No,qe,null),e(qe,Zi),e(qe,Vs),e(Vs,el),e(qe,tl),e(qe,Wo),e(Wo,Ks),e(Ks,ol),e(Wo,nl),e(Wo,dt),e(dt,sl),e(dt,Js),e(Js,al),e(dt,rl),e(dt,Xs),e(Xs,il),e(dt,ll),e(dt,Qs),e(Qs,dl),e(dt,cl),e(qe,pl),e(qe,Bo),e(Bo,hl),e(Bo,as),e(as,ml),e(Bo,fl),e(qe,ul),e(qe,rs),$(Uo,rs,null),u(o,ur,_),u(o,wt,_),e(wt,Rt),e(Rt,Ys),$(Ro,Ys,null),e(wt,gl),e(wt,Zs),e(Zs,_l),u(o,gr,_),u(o,Re,_),$(Vo,Re,null),e(Re,Tl),e(Re,Ko),e(Ko,bl),e(Ko,ea),e(ea,vl),e(Ko,kl),e(Re,wl),e(Re,Jo),e(Jo,ta),e(ta,$l),e(Jo,Pl),e(Jo,oa),e(oa,yl),e(Re,Il),e(Re,Xo),e(Xo,Ol),e(Xo,is),e(is,Al),e(Xo,Gl),u(o,_r,_),u(o,$t,_),e($t,Vt),e(Vt,na),$(Qo,na,null),e($t,Ml),e($t,sa),e(sa,El),u(o,Tr,_),u(o,Pt,_),$(Yo,Pt,null),e(Pt,zl),e(Pt,aa),e(aa,Fl),u(o,br,_),u(o,yt,_),$(Zo,yt,null),e(yt,ql),e(yt,ra),e(ra,Cl),u(o,vr,_),u(o,It,_),e(It,Kt),e(Kt,ia),$(en,ia,null),e(It,xl),e(It,la),e(la,jl),u(o,kr,_),u(o,Ce,_),$(tn,Ce,null),e(Ce,Dl),e(Ce,da),e(da,Hl),e(Ce,Sl),e(Ce,on),e(on,Ll),e(on,ls),e(ls,Nl),e(on,Wl),e(Ce,Bl),e(Ce,nn),e(nn,Ul),e(nn,sn),e(sn,Rl),e(nn,Vl),e(Ce,Kl),e(Ce,Qe),$(an,Qe,null),e(Qe,Jl),e(Qe,Ot),e(Ot,Xl),e(Ot,ds),e(ds,Ql),e(Ot,Yl),e(Ot,ca),e(ca,Zl),e(Ot,ed),e(Qe,td),$(Jt,Qe,null),e(Qe,od),$(Xt,Qe,null),u(o,wr,_),u(o,At,_),e(At,Qt),e(Qt,pa),$(rn,pa,null),e(At,nd),e(At,ha),e(ha,sd),u(o,$r,_),u(o,xe,_),$(ln,xe,null),e(xe,ad),e(xe,ma),e(ma,rd),e(xe,id),e(xe,dn),e(dn,ld),e(dn,cs),e(cs,dd),e(dn,cd),e(xe,pd),e(xe,cn),e(cn,hd),e(cn,pn),e(pn,md),e(cn,fd),e(xe,ud),e(xe,Ye),$(hn,Ye,null),e(Ye,gd),e(Ye,Gt),e(Gt,_d),e(Gt,ps),e(ps,Td),e(Gt,bd),e(Gt,fa),e(fa,vd),e(Gt,kd),e(Ye,wd),$(Yt,Ye,null),e(Ye,$d),$(Zt,Ye,null),u(o,Pr,_),u(o,Mt,_),e(Mt,eo),e(eo,ua),$(mn,ua,null),e(Mt,Pd),e(Mt,ga),e(ga,yd),u(o,yr,_),u(o,je,_),$(fn,je,null),e(je,Id),e(je,_a),e(_a,Od),e(je,Ad),e(je,un),e(un,Gd),e(un,hs),e(hs,Md),e(un,Ed),e(je,zd),e(je,gn),e(gn,Fd),e(gn,_n),e(_n,qd),e(gn,Cd),e(je,xd),e(je,Ze),$(Tn,Ze,null),e(Ze,jd),e(Ze,Et),e(Et,Dd),e(Et,ms),e(ms,Hd),e(Et,Sd),e(Et,Ta),e(Ta,Ld),e(Et,Nd),e(Ze,Wd),$(to,Ze,null),e(Ze,Bd),$(oo,Ze,null),u(o,Ir,_),u(o,zt,_),e(zt,no),e(no,ba),$(bn,ba,null),e(zt,Ud),e(zt,va),e(va,Rd),u(o,Or,_),u(o,De,_),$(vn,De,null),e(De,Vd),e(De,He),e(He,Kd),e(He,fs),e(fs,Jd),e(He,Xd),e(He,ka),e(ka,Qd),e(He,Yd),e(He,wa),e(wa,Zd),e(He,ec),e(He,$a),e($a,tc),e(He,oc),e(He,Pa),e(Pa,nc),e(He,sc),e(De,ac),e(De,kn),e(kn,rc),e(kn,us),e(us,ic),e(kn,lc),e(De,dc),e(De,wn),e(wn,cc),e(wn,$n),e($n,pc),e(wn,hc),e(De,mc),e(De,$e),$(Pn,$e,null),e($e,fc),e($e,Ft),e(Ft,uc),e(Ft,gs),e(gs,gc),e(Ft,_c),e(Ft,ya),e(ya,Tc),e(Ft,bc),e($e,vc),$(so,$e,null),e($e,kc),$(ao,$e,null),e($e,wc),$(ro,$e,null),e($e,$c),$(io,$e,null),e($e,Pc),$(lo,$e,null),u(o,Ar,_),u(o,qt,_),e(qt,co),e(co,Ia),$(yn,Ia,null),e(qt,yc),e(qt,Oa),e(Oa,Ic),u(o,Gr,_),u(o,Pe,_),$(In,Pe,null),e(Pe,Oc),e(Pe,Aa),e(Aa,Ac),e(Pe,Gc),e(Pe,On),e(On,Mc),e(On,_s),e(_s,Ec),e(On,zc),e(Pe,Fc),e(Pe,An),e(An,qc),e(An,Gn),e(Gn,Cc),e(An,xc),e(Pe,jc),$(po,Pe,null),e(Pe,Dc),e(Pe,et),$(Mn,et,null),e(et,Hc),e(et,Ct),e(Ct,Sc),e(Ct,Ts),e(Ts,Lc),e(Ct,Nc),e(Ct,Ga),e(Ga,Wc),e(Ct,Bc),e(et,Uc),$(ho,et,null),e(et,Rc),$(mo,et,null),u(o,Mr,_),u(o,xt,_),e(xt,fo),e(fo,Ma),$(En,Ma,null),e(xt,Vc),e(xt,Ea),e(Ea,Kc),u(o,Er,_),u(o,ye,_),$(zn,ye,null),e(ye,Jc),e(ye,za),e(za,Xc),e(ye,Qc),e(ye,Fn),e(Fn,Yc),e(Fn,bs),e(bs,Zc),e(Fn,ep),e(ye,tp),e(ye,qn),e(qn,op),e(qn,Cn),e(Cn,np),e(qn,sp),e(ye,ap),$(uo,ye,null),e(ye,rp),e(ye,tt),$(xn,tt,null),e(tt,ip),e(tt,jt),e(jt,lp),e(jt,vs),e(vs,dp),e(jt,cp),e(jt,Fa),e(Fa,pp),e(jt,hp),e(tt,mp),$(go,tt,null),e(tt,fp),$(_o,tt,null),u(o,zr,_),u(o,Dt,_),e(Dt,To),e(To,qa),$(jn,qa,null),e(Dt,up),e(Dt,Ca),e(Ca,gp),u(o,Fr,_),u(o,Ie,_),$(Dn,Ie,null),e(Ie,_p),e(Ie,xa),e(xa,Tp),e(Ie,bp),e(Ie,Hn),e(Hn,vp),e(Hn,ks),e(ks,kp),e(Hn,wp),e(Ie,$p),e(Ie,Sn),e(Sn,Pp),e(Sn,Ln),e(Ln,yp),e(Sn,Ip),e(Ie,Op),$(bo,Ie,null),e(Ie,Ap),e(Ie,ot),$(Nn,ot,null),e(ot,Gp),e(ot,Ht),e(Ht,Mp),e(Ht,ws),e(ws,Ep),e(Ht,zp),e(Ht,ja),e(ja,Fp),e(Ht,qp),e(ot,Cp),$(vo,ot,null),e(ot,xp),$(ko,ot,null),u(o,qr,_),u(o,St,_),e(St,wo),e(wo,Da),$(Wn,Da,null),e(St,jp),e(St,Ha),e(Ha,Dp),u(o,Cr,_),u(o,le,_),$(Bn,le,null),e(le,Hp),e(le,Sa),e(Sa,Sp),e(le,Lp),e(le,$s),e($s,Ps),e(Ps,Np),e($s,Wp),e(le,Bp),e(le,Ve),e(Ve,Up),e(Ve,La),e(La,Rp),e(Ve,Vp),e(Ve,Na),e(Na,Kp),e(Ve,Jp),e(Ve,Wa),e(Wa,Xp),e(Ve,Qp),e(Ve,Ba),e(Ba,Yp),e(Ve,Zp),e(le,eh),e(le,Un),e(Un,th),e(Un,ys),e(ys,oh),e(Un,nh),e(le,sh),e(le,Rn),e(Rn,ah),e(Rn,Vn),e(Vn,rh),e(Rn,ih),e(le,lh),$($o,le,null),e(le,dh),e(le,Le),$(Kn,Le,null),e(Le,ch),e(Le,Lt),e(Lt,ph),e(Lt,Is),e(Is,hh),e(Lt,mh),e(Lt,Ua),e(Ua,fh),e(Lt,uh),e(Le,gh),$(Po,Le,null),e(Le,_h),$(yo,Le,null),e(Le,Th),$(Io,Le,null),xr=!0},p(o,[_]){const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),Bt.$set(Jn);const Ra={};_&2&&(Ra.$$scope={dirty:_,ctx:o}),Jt.$set(Ra);const Va={};_&2&&(Va.$$scope={dirty:_,ctx:o}),Xt.$set(Va);const Ka={};_&2&&(Ka.$$scope={dirty:_,ctx:o}),Yt.$set(Ka);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:o}),Zt.$set(Xn);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:o}),to.$set(Ja);const Xa={};_&2&&(Xa.$$scope={dirty:_,ctx:o}),oo.$set(Xa);const Qa={};_&2&&(Qa.$$scope={dirty:_,ctx:o}),so.$set(Qa);const Qn={};_&2&&(Qn.$$scope={dirty:_,ctx:o}),ao.$set(Qn);const Ya={};_&2&&(Ya.$$scope={dirty:_,ctx:o}),ro.$set(Ya);const Za={};_&2&&(Za.$$scope={dirty:_,ctx:o}),io.$set(Za);const er={};_&2&&(er.$$scope={dirty:_,ctx:o}),lo.$set(er);const tr={};_&2&&(tr.$$scope={dirty:_,ctx:o}),po.$set(tr);const or={};_&2&&(or.$$scope={dirty:_,ctx:o}),ho.$set(or);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:o}),mo.$set(Yn);const nr={};_&2&&(nr.$$scope={dirty:_,ctx:o}),uo.$set(nr);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:o}),go.$set(Zn);const sr={};_&2&&(sr.$$scope={dirty:_,ctx:o}),_o.$set(sr);const Os={};_&2&&(Os.$$scope={dirty:_,ctx:o}),bo.$set(Os);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:o}),vo.$set(ar);const Nt={};_&2&&(Nt.$$scope={dirty:_,ctx:o}),ko.$set(Nt);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:o}),$o.$set(rr);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:o}),Po.$set(ir);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:o}),yo.$set(lr);const ct={};_&2&&(ct.$$scope={dirty:_,ctx:o}),Io.$set(ct)},i(o){xr||(P(l.$$.fragment,o),P(Y.$$.fragment,o),P(jo.$$.fragment,o),P(Do.$$.fragment,o),P(Ho.$$.fragment,o),P(Bt.$$.fragment,o),P(Lo.$$.fragment,o),P(No.$$.fragment,o),P(Uo.$$.fragment,o),P(Ro.$$.fragment,o),P(Vo.$$.fragment,o),P(Qo.$$.fragment,o),P(Yo.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(an.$$.fragment,o),P(Jt.$$.fragment,o),P(Xt.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(hn.$$.fragment,o),P(Yt.$$.fragment,o),P(Zt.$$.fragment,o),P(mn.$$.fragment,o),P(fn.$$.fragment,o),P(Tn.$$.fragment,o),P(to.$$.fragment,o),P(oo.$$.fragment,o),P(bn.$$.fragment,o),P(vn.$$.fragment,o),P(Pn.$$.fragment,o),P(so.$$.fragment,o),P(ao.$$.fragment,o),P(ro.$$.fragment,o),P(io.$$.fragment,o),P(lo.$$.fragment,o),P(yn.$$.fragment,o),P(In.$$.fragment,o),P(po.$$.fragment,o),P(Mn.$$.fragment,o),P(ho.$$.fragment,o),P(mo.$$.fragment,o),P(En.$$.fragment,o),P(zn.$$.fragment,o),P(uo.$$.fragment,o),P(xn.$$.fragment,o),P(go.$$.fragment,o),P(_o.$$.fragment,o),P(jn.$$.fragment,o),P(Dn.$$.fragment,o),P(bo.$$.fragment,o),P(Nn.$$.fragment,o),P(vo.$$.fragment,o),P(ko.$$.fragment,o),P(Wn.$$.fragment,o),P(Bn.$$.fragment,o),P($o.$$.fragment,o),P(Kn.$$.fragment,o),P(Po.$$.fragment,o),P(yo.$$.fragment,o),P(Io.$$.fragment,o),xr=!0)},o(o){y(l.$$.fragment,o),y(Y.$$.fragment,o),y(jo.$$.fragment,o),y(Do.$$.fragment,o),y(Ho.$$.fragment,o),y(Bt.$$.fragment,o),y(Lo.$$.fragment,o),y(No.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Vo.$$.fragment,o),y(Qo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(an.$$.fragment,o),y(Jt.$$.fragment,o),y(Xt.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(hn.$$.fragment,o),y(Yt.$$.fragment,o),y(Zt.$$.fragment,o),y(mn.$$.fragment,o),y(fn.$$.fragment,o),y(Tn.$$.fragment,o),y(to.$$.fragment,o),y(oo.$$.fragment,o),y(bn.$$.fragment,o),y(vn.$$.fragment,o),y(Pn.$$.fragment,o),y(so.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(io.$$.fragment,o),y(lo.$$.fragment,o),y(yn.$$.fragment,o),y(In.$$.fragment,o),y(po.$$.fragment,o),y(Mn.$$.fragment,o),y(ho.$$.fragment,o),y(mo.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(uo.$$.fragment,o),y(xn.$$.fragment,o),y(go.$$.fragment,o),y(_o.$$.fragment,o),y(jn.$$.fragment,o),y(Dn.$$.fragment,o),y(bo.$$.fragment,o),y(Nn.$$.fragment,o),y(vo.$$.fragment,o),y(ko.$$.fragment,o),y(Wn.$$.fragment,o),y(Bn.$$.fragment,o),y($o.$$.fragment,o),y(Kn.$$.fragment,o),y(Po.$$.fragment,o),y(yo.$$.fragment,o),y(Io.$$.fragment,o),xr=!1},d(o){t(d),o&&t(v),o&&t(m),I(l),o&&t(J),o&&t(G),I(Y),o&&t(de),o&&t(L),o&&t(F),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(pe),o&&t(z),o&&t(N),o&&t(Q),o&&t(T),o&&t(O),o&&t(q),o&&t(se),o&&t(Oe),o&&t(we),o&&t(Ae),o&&t(Xe),o&&t(dr),I(jo,o),o&&t(cr),o&&t(Se),o&&t(pr),o&&t(bt),I(Do),o&&t(hr),o&&t(Ue),I(Ho),I(Bt),o&&t(mr),o&&t(kt),I(Lo),o&&t(fr),o&&t(qe),I(No),I(Uo),o&&t(ur),o&&t(wt),I(Ro),o&&t(gr),o&&t(Re),I(Vo),o&&t(_r),o&&t($t),I(Qo),o&&t(Tr),o&&t(Pt),I(Yo),o&&t(br),o&&t(yt),I(Zo),o&&t(vr),o&&t(It),I(en),o&&t(kr),o&&t(Ce),I(tn),I(an),I(Jt),I(Xt),o&&t(wr),o&&t(At),I(rn),o&&t($r),o&&t(xe),I(ln),I(hn),I(Yt),I(Zt),o&&t(Pr),o&&t(Mt),I(mn),o&&t(yr),o&&t(je),I(fn),I(Tn),I(to),I(oo),o&&t(Ir),o&&t(zt),I(bn),o&&t(Or),o&&t(De),I(vn),I(Pn),I(so),I(ao),I(ro),I(io),I(lo),o&&t(Ar),o&&t(qt),I(yn),o&&t(Gr),o&&t(Pe),I(In),I(po),I(Mn),I(ho),I(mo),o&&t(Mr),o&&t(xt),I(En),o&&t(Er),o&&t(ye),I(zn),I(uo),I(xn),I(go),I(_o),o&&t(zr),o&&t(Dt),I(jn),o&&t(Fr),o&&t(Ie),I(Dn),I(bo),I(Nn),I(vo),I(ko),o&&t(qr),o&&t(St),I(Wn),o&&t(Cr),o&&t(le),I(Bn),I($o),I(Kn),I(Po),I(yo),I(Io)}}}const eu={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function tu(M){return Of(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lu extends $f{constructor(d){super();Pf(this,d,tu,Zf,yf,{})}}export{lu as default,eu as metadata};
