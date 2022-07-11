import{S as wf,i as $f,s as Pf,e as a,k as p,w as k,t as n,M as Of,c as r,d as t,m as c,a as i,x as y,h as s,b as g,G as e,g as u,y as w,q as $,o as P,B as O,v as If,L as Je}from"../../chunks/vendor-hf-doc-builder.js";import{T as it}from"../../chunks/Tip-hf-doc-builder.js";import{D as ae}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ke}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Af(M){let d,v,m,h,b;return h=new Ue({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=n("Examples:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Examples:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Gf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Mf(M){let d,v,m,h,b;return h=new Ue({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Ef(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function zf(M){let d,v,m,h,b;return h=new Ue({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=n("Example:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Ff(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function qf(M){let d,v,m,h,b;return h=new Ue({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=a("p"),v=n("Examples:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Examples:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Cf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function xf(M){let d,v,m,h,b;return h=new Ue({props:{code:`import torch
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
`}}),{c(){d=a("p"),v=n("Example of single-label classification:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example of single-label classification:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function jf(M){let d,v;return d=new Ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),v=!0},p:Je,i(m){v||($(d.$$.fragment,m),v=!0)},o(m){P(d.$$.fragment,m),v=!1},d(m){O(d,m)}}}function Df(M){let d,v,m,h,b;return h=new Ue({props:{code:`import torch
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
`}}),{c(){d=a("p"),v=n("Example of multi-label classification:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example of multi-label classification:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Hf(M){let d,v;return d=new Ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained(
    "openai-gpt", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),v=!0},p:Je,i(m){v||($(d.$$.fragment,m),v=!0)},o(m){P(d.$$.fragment,m),v=!1},d(m){O(d,m)}}}function Sf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,pe,ne,S,ue,ce,z,ge,N,Q,re,U,_e,te,x,ie,B,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=p(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=p(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=p(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),ce=p(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),U=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=p(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var I=i(d);v=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),m=c(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=c(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=c(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=c(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=c(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);pe=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),ce=c(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Ie=i(N);Q=s(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),re=s(K," or "),U=r(K,"CODE",{});var ye=i(U);_e=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),K.forEach(t),te=c(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ke,"CODE",{});var Ae=i(B);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,I){u(T,d,I),e(d,v),u(T,m,I),u(T,h,I),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,I),u(T,G,I),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,I),u(T,C,I),e(C,Z),u(T,ee,I),u(T,E,I),e(E,F),e(F,oe),e(F,W),e(W,pe),e(F,ne),e(F,S),e(S,ue),e(E,ce),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,U),e(U,_e),e(E,te),e(E,x),e(x,ie),e(x,B),e(B,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Lf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Nf(M){let d,v,m,h,b;return h=new Ue({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Wf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,pe,ne,S,ue,ce,z,ge,N,Q,re,U,_e,te,x,ie,B,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=p(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=p(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=p(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),ce=p(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),U=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=p(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var I=i(d);v=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),m=c(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=c(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=c(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=c(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=c(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);pe=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),ce=c(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Ie=i(N);Q=s(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),re=s(K," or "),U=r(K,"CODE",{});var ye=i(U);_e=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),K.forEach(t),te=c(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ke,"CODE",{});var Ae=i(B);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,I){u(T,d,I),e(d,v),u(T,m,I),u(T,h,I),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,I),u(T,G,I),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,I),u(T,C,I),e(C,Z),u(T,ee,I),u(T,E,I),e(E,F),e(F,oe),e(F,W),e(W,pe),e(F,ne),e(F,S),e(S,ue),e(E,ce),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,U),e(U,_e),e(E,te),e(E,x),e(x,ie),e(x,B),e(B,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Uf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Bf(M){let d,v,m,h,b;return h=new Ue({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=n("Example:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Rf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,pe,ne,S,ue,ce,z,ge,N,Q,re,U,_e,te,x,ie,B,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=p(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=p(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=p(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),ce=p(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),U=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=p(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var I=i(d);v=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),m=c(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=c(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=c(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=c(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=c(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);pe=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),ce=c(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Ie=i(N);Q=s(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),re=s(K," or "),U=r(K,"CODE",{});var ye=i(U);_e=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),K.forEach(t),te=c(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ke,"CODE",{});var Ae=i(B);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,I){u(T,d,I),e(d,v),u(T,m,I),u(T,h,I),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,I),u(T,G,I),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,I),u(T,C,I),e(C,Z),u(T,ee,I),u(T,E,I),e(E,F),e(F,oe),e(F,W),e(W,pe),e(F,ne),e(F,S),e(S,ue),e(E,ce),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,U),e(U,_e),e(E,te),e(E,x),e(x,ie),e(x,B),e(B,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Vf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Kf(M){let d,v,m,h,b;return h=new Ue({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>)[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=a("p"),v=n("Examples:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Examples:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Jf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,pe,ne,S,ue,ce,z,ge,N,Q,re,U,_e,te,x,ie,B,Te;return{c(){d=a("p"),v=n("TF 2.0 models accepts two formats as inputs:"),m=p(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),G=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),fe=n("model(inputs)"),de=n("."),L=p(),C=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=p(),E=a("ul"),F=a("li"),oe=n("a single Tensor with "),W=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),S=a("code"),ue=n("model(inputs_ids)"),ce=p(),z=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),U=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=p(),x=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){d=r(T,"P",{});var I=i(d);v=s(I,"TF 2.0 models accepts two formats as inputs:"),I.forEach(t),m=c(T),h=r(T,"UL",{});var R=i(h);b=r(R,"LI",{});var Me=i(b);l=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),f=c(R),A=r(R,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),R.forEach(t),J=c(T),G=r(T,"P",{});var q=i(G);X=s(q,"This second option is useful when using "),D=r(q,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(q,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(q,"CODE",{});var ze=i(H);fe=s(ze,"model(inputs)"),ze.forEach(t),de=s(q,"."),q.forEach(t),L=c(T),C=r(T,"P",{});var be=i(C);Z=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),ee=c(T),E=r(T,"UL",{});var j=i(E);F=r(j,"LI",{});var V=i(F);oe=s(V,"a single Tensor with "),W=r(V,"CODE",{});var ve=i(W);pe=s(ve,"input_ids"),ve.forEach(t),ne=s(V," only and nothing else: "),S=r(V,"CODE",{});var Fe=i(S);ue=s(Fe,"model(inputs_ids)"),Fe.forEach(t),V.forEach(t),ce=c(j),z=r(j,"LI",{});var K=i(z);ge=s(K,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(K,"CODE",{});var Ie=i(N);Q=s(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),re=s(K," or "),U=r(K,"CODE",{});var ye=i(U);_e=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),K.forEach(t),te=c(j),x=r(j,"LI",{});var ke=i(x);ie=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ke,"CODE",{});var Ae=i(B);Te=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),j.forEach(t)},m(T,I){u(T,d,I),e(d,v),u(T,m,I),u(T,h,I),e(h,b),e(b,l),e(h,f),e(h,A),e(A,he),u(T,J,I),u(T,G,I),e(G,X),e(G,D),e(D,Y),e(G,me),e(G,H),e(H,fe),e(G,de),u(T,L,I),u(T,C,I),e(C,Z),u(T,ee,I),u(T,E,I),e(E,F),e(F,oe),e(F,W),e(W,pe),e(F,ne),e(F,S),e(S,ue),e(E,ce),e(E,z),e(z,ge),e(z,N),e(N,Q),e(z,re),e(z,U),e(U,_e),e(E,te),e(E,x),e(x,ie),e(x,B),e(B,Te)},d(T){T&&t(d),T&&t(m),T&&t(h),T&&t(J),T&&t(G),T&&t(L),T&&t(C),T&&t(ee),T&&t(E)}}}function Xf(M){let d,v,m,h,b;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(f,"CODE",{});var A=i(m);h=s(A,"Module"),A.forEach(t),b=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){u(l,d,f),e(d,v),e(d,m),e(m,h),e(d,b)},d(l){l&&t(d)}}}function Qf(M){let d,v,m,h,b;return h=new Ue({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
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
`}}),{c(){d=a("p"),v=n("Example:"),m=p(),k(h.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);v=s(f,"Example:"),f.forEach(t),m=c(l),y(h.$$.fragment,l)},m(l,f){u(l,d,f),e(d,v),u(l,m,f),w(h,l,f),b=!0},p:Je,i(l){b||($(h.$$.fragment,l),b=!0)},o(l){P(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),O(h,l)}}}function Yf(M){let d,v;return d=new Ue({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),v=!0},p:Je,i(m){v||($(d.$$.fragment,m),v=!0)},o(m){P(d.$$.fragment,m),v=!1},d(m){O(d,m)}}}function Zf(M){let d,v,m,h,b,l,f,A,he,J,G,X,D,Y,me,H,fe,de,L,C,Z,ee,E,F,oe,W,pe,ne,S,ue,ce,z,ge,N,Q,re,U,_e,te,x,ie,B,Te,T,I,R,Me,Ee,q,se,ze,be,j,V,ve,Fe,K,Ie,ye,ke,Ae,Xe,Ti,js,bi,vi,Ds,ki,yi,Hs,wi,$i,dr,jo,pr,Se,Pi,Ss,Oi,Ii,Ls,Ai,Gi,es,Mi,Ei,Ns,zi,Fi,cr,bt,Wt,Ws,Do,qi,Us,Ci,hr,Be,Ho,xi,lt,ji,ts,Di,Hi,os,Si,Li,So,Ni,Wi,Ui,vt,Bi,ns,Ri,Vi,ss,Ki,Ji,Xi,Ut,mr,kt,Bt,Bs,Lo,Qi,Rs,Yi,fr,qe,No,Zi,Vs,el,tl,Wo,Ks,ol,nl,dt,sl,Js,al,rl,Xs,il,ll,Qs,dl,pl,cl,Uo,hl,as,ml,fl,ul,rs,Bo,ur,yt,Rt,Ys,Ro,gl,Zs,_l,gr,Re,Vo,Tl,Ko,bl,ea,vl,kl,yl,Jo,ta,wl,$l,oa,Pl,Ol,Xo,Il,is,Al,Gl,_r,wt,Vt,na,Qo,Ml,sa,El,Tr,$t,Yo,zl,aa,Fl,br,Pt,Zo,ql,ra,Cl,vr,Ot,Kt,ia,en,xl,la,jl,kr,Ce,tn,Dl,da,Hl,Sl,on,Ll,ls,Nl,Wl,Ul,nn,Bl,sn,Rl,Vl,Kl,Qe,an,Jl,It,Xl,ds,Ql,Yl,pa,Zl,ed,td,Jt,od,Xt,yr,At,Qt,ca,rn,nd,ha,sd,wr,xe,ln,ad,ma,rd,id,dn,ld,ps,dd,pd,cd,pn,hd,cn,md,fd,ud,Ye,hn,gd,Gt,_d,cs,Td,bd,fa,vd,kd,yd,Yt,wd,Zt,$r,Mt,eo,ua,mn,$d,ga,Pd,Pr,je,fn,Od,_a,Id,Ad,un,Gd,hs,Md,Ed,zd,gn,Fd,_n,qd,Cd,xd,Ze,Tn,jd,Et,Dd,ms,Hd,Sd,Ta,Ld,Nd,Wd,to,Ud,oo,Or,zt,no,ba,bn,Bd,va,Rd,Ir,De,vn,Vd,He,Kd,fs,Jd,Xd,ka,Qd,Yd,ya,Zd,ep,wa,tp,op,$a,np,sp,ap,kn,rp,us,ip,lp,dp,yn,pp,wn,cp,hp,mp,we,$n,fp,Ft,up,gs,gp,_p,Pa,Tp,bp,vp,so,kp,ao,yp,ro,wp,io,$p,lo,Ar,qt,po,Oa,Pn,Pp,Ia,Op,Gr,$e,On,Ip,Aa,Ap,Gp,In,Mp,_s,Ep,zp,Fp,An,qp,Gn,Cp,xp,jp,co,Dp,et,Mn,Hp,Ct,Sp,Ts,Lp,Np,Ga,Wp,Up,Bp,ho,Rp,mo,Mr,xt,fo,Ma,En,Vp,Ea,Kp,Er,Pe,zn,Jp,za,Xp,Qp,Fn,Yp,bs,Zp,ec,tc,qn,oc,Cn,nc,sc,ac,uo,rc,tt,xn,ic,jt,lc,vs,dc,pc,Fa,cc,hc,mc,go,fc,_o,zr,Dt,To,qa,jn,uc,Ca,gc,Fr,Oe,Dn,_c,xa,Tc,bc,Hn,vc,ks,kc,yc,wc,Sn,$c,Ln,Pc,Oc,Ic,bo,Ac,ot,Nn,Gc,Ht,Mc,ys,Ec,zc,ja,Fc,qc,Cc,vo,xc,ko,qr,St,yo,Da,Wn,jc,Ha,Dc,Cr,le,Un,Hc,Sa,Sc,Lc,ws,$s,Nc,Wc,Uc,Ve,Bc,La,Rc,Vc,Na,Kc,Jc,Wa,Xc,Qc,Ua,Yc,Zc,eh,Bn,th,Ps,oh,nh,sh,Rn,ah,Vn,rh,ih,lh,wo,dh,Le,Kn,ph,Lt,ch,Os,hh,mh,Ba,fh,uh,gh,$o,_h,Po,Th,Oo,xr;return l=new We({}),Y=new We({}),jo=new Ue({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),Do=new We({}),Ho=new ae({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/configuration_openai.py#L27"}}),Ut=new Ke({props:{anchor:"transformers.OpenAIGPTConfig.example",$$slots:{default:[Af]},$$scope:{ctx:M}}}),Lo=new We({}),No=new ae({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/tokenization_openai.py#L73"}}),Bo=new ae({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/tokenization_openai.py#L206"}}),Ro=new We({}),Vo=new ae({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/tokenization_openai_fast.py#L40"}}),Qo=new We({}),Yo=new ae({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L298"}}),Zo=new ae({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L374"}}),en=new We({}),tn=new ae({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L402"}}),an=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L428",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new it({props:{$$slots:{default:[Gf]},$$scope:{ctx:M}}}),Xt=new Ke({props:{anchor:"transformers.OpenAIGPTModel.forward.example",$$slots:{default:[Mf]},$$scope:{ctx:M}}}),rn=new We({}),ln=new ae({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L533"}}),hn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L548",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yt=new it({props:{$$slots:{default:[Ef]},$$scope:{ctx:M}}}),Zt=new Ke({props:{anchor:"transformers.OpenAIGPTLMHeadModel.forward.example",$$slots:{default:[zf]},$$scope:{ctx:M}}}),mn=new We({}),fn=new ae({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L620"}}),Tn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L638",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new it({props:{$$slots:{default:[Ff]},$$scope:{ctx:M}}}),oo=new Ke({props:{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.example",$$slots:{default:[qf]},$$scope:{ctx:M}}}),bn=new We({}),vn=new ae({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L746"}}),$n=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_openai.py#L756",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),so=new it({props:{$$slots:{default:[Cf]},$$scope:{ctx:M}}}),ao=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example",$$slots:{default:[xf]},$$scope:{ctx:M}}}),ro=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-2",$$slots:{default:[jf]},$$scope:{ctx:M}}}),io=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-3",$$slots:{default:[Df]},$$scope:{ctx:M}}}),lo=new Ke({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-4",$$slots:{default:[Hf]},$$scope:{ctx:M}}}),Pn=new We({}),On=new ae({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L499"}}),co=new it({props:{$$slots:{default:[Sf]},$$scope:{ctx:M}}}),Mn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L504",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ho=new it({props:{$$slots:{default:[Lf]},$$scope:{ctx:M}}}),mo=new Ke({props:{anchor:"transformers.TFOpenAIGPTModel.call.example",$$slots:{default:[Nf]},$$scope:{ctx:M}}}),En=new We({}),zn=new ae({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L555"}}),uo=new it({props:{$$slots:{default:[Wf]},$$scope:{ctx:M}}}),xn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L568",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new it({props:{$$slots:{default:[Uf]},$$scope:{ctx:M}}}),_o=new Ke({props:{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.example",$$slots:{default:[Bf]},$$scope:{ctx:M}}}),jn=new We({}),Dn=new ae({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L646"}}),bo=new it({props:{$$slots:{default:[Rf]},$$scope:{ctx:M}}}),Nn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new it({props:{$$slots:{default:[Vf]},$$scope:{ctx:M}}}),ko=new Ke({props:{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.example",$$slots:{default:[Kf]},$$scope:{ctx:M}}}),Wn=new We({}),Un=new ae({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L781"}}),wo=new it({props:{$$slots:{default:[Jf]},$$scope:{ctx:M}}}),Kn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_18095/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18095/src/transformers/models/openai/modeling_tf_openai.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
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
  href="/docs/transformers/pr_18095/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new it({props:{$$slots:{default:[Xf]},$$scope:{ctx:M}}}),Po=new Ke({props:{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.example",$$slots:{default:[Qf]},$$scope:{ctx:M}}}),Oo=new Ke({props:{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.example-2",$$slots:{default:[Yf]},$$scope:{ctx:M}}}),{c(){d=a("meta"),v=p(),m=a("h1"),h=a("a"),b=a("span"),k(l.$$.fragment),f=p(),A=a("span"),he=n("OpenAI GPT"),J=p(),G=a("h2"),X=a("a"),D=a("span"),k(Y.$$.fragment),me=p(),H=a("span"),fe=n("Overview"),de=p(),L=a("p"),C=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),E=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),F=p(),oe=a("p"),W=n("The abstract from the paper is the following:"),pe=p(),ne=a("p"),S=a("em"),ue=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),ce=p(),z=a("p"),ge=n("Tips:"),N=p(),Q=a("ul"),re=a("li"),U=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),_e=p(),te=a("li"),x=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=a("em"),B=n("run_generation.py"),Te=n(" example script."),T=p(),I=a("p"),R=a("a"),Me=n("Write With Transformer"),Ee=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),q=p(),se=a("p"),ze=n("This model was contributed by "),be=a("a"),j=n("thomwolf"),V=n(". The original code can be found "),ve=a("a"),Fe=n("here"),K=n("."),Ie=p(),ye=a("p"),ke=n("Note:"),Ae=p(),Xe=a("p"),Ti=n("If you want to reproduce the original tokenization process of the "),js=a("em"),bi=n("OpenAI GPT"),vi=n(" paper, you will need to install "),Ds=a("code"),ki=n("ftfy"),yi=n(`
and `),Hs=a("code"),wi=n("SpaCy"),$i=n(":"),dr=p(),k(jo.$$.fragment),pr=p(),Se=a("p"),Pi=n("If you don\u2019t install "),Ss=a("code"),Oi=n("ftfy"),Ii=n(" and "),Ls=a("code"),Ai=n("SpaCy"),Gi=n(", the "),es=a("a"),Mi=n("OpenAIGPTTokenizer"),Ei=n(` will default to tokenize
using BERT\u2019s `),Ns=a("code"),zi=n("BasicTokenizer"),Fi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),cr=p(),bt=a("h2"),Wt=a("a"),Ws=a("span"),k(Do.$$.fragment),qi=p(),Us=a("span"),Ci=n("OpenAIGPTConfig"),hr=p(),Be=a("div"),k(Ho.$$.fragment),xi=p(),lt=a("p"),ji=n("This is the configuration class to store the configuration of a "),ts=a("a"),Di=n("OpenAIGPTModel"),Hi=n(" or a "),os=a("a"),Si=n("TFOpenAIGPTModel"),Li=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the GPT
`),So=a("a"),Ni=n("openai-gpt"),Wi=n(" architecture from OpenAI."),Ui=p(),vt=a("p"),Bi=n("Configuration objects inherit from "),ns=a("a"),Ri=n("PretrainedConfig"),Vi=n(` and can be used to control the model outputs. Read the
documentation from `),ss=a("a"),Ki=n("PretrainedConfig"),Ji=n(" for more information."),Xi=p(),k(Ut.$$.fragment),mr=p(),kt=a("h2"),Bt=a("a"),Bs=a("span"),k(Lo.$$.fragment),Qi=p(),Rs=a("span"),Yi=n("OpenAIGPTTokenizer"),fr=p(),qe=a("div"),k(No.$$.fragment),Zi=p(),Vs=a("p"),el=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),tl=p(),Wo=a("ul"),Ks=a("li"),ol=n("lowercases all inputs,"),nl=p(),dt=a("li"),sl=n("uses "),Js=a("code"),al=n("SpaCy"),rl=n(" tokenizer and "),Xs=a("code"),il=n("ftfy"),ll=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Qs=a("code"),dl=n("BasicTokenizer"),pl=n(" if not."),cl=p(),Uo=a("p"),hl=n("This tokenizer inherits from "),as=a("a"),ml=n("PreTrainedTokenizer"),fl=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ul=p(),rs=a("div"),k(Bo.$$.fragment),ur=p(),yt=a("h2"),Rt=a("a"),Ys=a("span"),k(Ro.$$.fragment),gl=p(),Zs=a("span"),_l=n("OpenAIGPTTokenizerFast"),gr=p(),Re=a("div"),k(Vo.$$.fragment),Tl=p(),Ko=a("p"),bl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),ea=a("em"),vl=n("tokenizers"),kl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),yl=p(),Jo=a("ul"),ta=a("li"),wl=n("lower case all inputs"),$l=p(),oa=a("li"),Pl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Ol=p(),Xo=a("p"),Il=n("This tokenizer inherits from "),is=a("a"),Al=n("PreTrainedTokenizerFast"),Gl=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),_r=p(),wt=a("h2"),Vt=a("a"),na=a("span"),k(Qo.$$.fragment),Ml=p(),sa=a("span"),El=n("OpenAI specific outputs"),Tr=p(),$t=a("div"),k(Yo.$$.fragment),zl=p(),aa=a("p"),Fl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),br=p(),Pt=a("div"),k(Zo.$$.fragment),ql=p(),ra=a("p"),Cl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),vr=p(),Ot=a("h2"),Kt=a("a"),ia=a("span"),k(en.$$.fragment),xl=p(),la=a("span"),jl=n("OpenAIGPTModel"),kr=p(),Ce=a("div"),k(tn.$$.fragment),Dl=p(),da=a("p"),Hl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Sl=p(),on=a("p"),Ll=n("This model inherits from "),ls=a("a"),Nl=n("PreTrainedModel"),Wl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul=p(),nn=a("p"),Bl=n("This model is also a PyTorch "),sn=a("a"),Rl=n("torch.nn.Module"),Vl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kl=p(),Qe=a("div"),k(an.$$.fragment),Jl=p(),It=a("p"),Xl=n("The "),ds=a("a"),Ql=n("OpenAIGPTModel"),Yl=n(" forward method, overrides the "),pa=a("code"),Zl=n("__call__"),ed=n(" special method."),td=p(),k(Jt.$$.fragment),od=p(),k(Xt.$$.fragment),yr=p(),At=a("h2"),Qt=a("a"),ca=a("span"),k(rn.$$.fragment),nd=p(),ha=a("span"),sd=n("OpenAIGPTLMHeadModel"),wr=p(),xe=a("div"),k(ln.$$.fragment),ad=p(),ma=a("p"),rd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),id=p(),dn=a("p"),ld=n("This model inherits from "),ps=a("a"),dd=n("PreTrainedModel"),pd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd=p(),pn=a("p"),hd=n("This model is also a PyTorch "),cn=a("a"),md=n("torch.nn.Module"),fd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ud=p(),Ye=a("div"),k(hn.$$.fragment),gd=p(),Gt=a("p"),_d=n("The "),cs=a("a"),Td=n("OpenAIGPTLMHeadModel"),bd=n(" forward method, overrides the "),fa=a("code"),vd=n("__call__"),kd=n(" special method."),yd=p(),k(Yt.$$.fragment),wd=p(),k(Zt.$$.fragment),$r=p(),Mt=a("h2"),eo=a("a"),ua=a("span"),k(mn.$$.fragment),$d=p(),ga=a("span"),Pd=n("OpenAIGPTDoubleHeadsModel"),Pr=p(),je=a("div"),k(fn.$$.fragment),Od=p(),_a=a("p"),Id=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Ad=p(),un=a("p"),Gd=n("This model inherits from "),hs=a("a"),Md=n("PreTrainedModel"),Ed=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd=p(),gn=a("p"),Fd=n("This model is also a PyTorch "),_n=a("a"),qd=n("torch.nn.Module"),Cd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=p(),Ze=a("div"),k(Tn.$$.fragment),jd=p(),Et=a("p"),Dd=n("The "),ms=a("a"),Hd=n("OpenAIGPTDoubleHeadsModel"),Sd=n(" forward method, overrides the "),Ta=a("code"),Ld=n("__call__"),Nd=n(" special method."),Wd=p(),k(to.$$.fragment),Ud=p(),k(oo.$$.fragment),Or=p(),zt=a("h2"),no=a("a"),ba=a("span"),k(bn.$$.fragment),Bd=p(),va=a("span"),Rd=n("OpenAIGPTForSequenceClassification"),Ir=p(),De=a("div"),k(vn.$$.fragment),Vd=p(),He=a("p"),Kd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),fs=a("a"),Jd=n("OpenAIGPTForSequenceClassification"),Xd=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ka=a("code"),Qd=n("pad_token_id"),Yd=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ya=a("code"),Zd=n("pad_token_id"),ep=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),wa=a("code"),tp=n("inputs_embeds"),op=n(" are passed instead of "),$a=a("code"),np=n("input_ids"),sp=n(`, it does the same (take
the last value in each row of the batch).`),ap=p(),kn=a("p"),rp=n("This model inherits from "),us=a("a"),ip=n("PreTrainedModel"),lp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dp=p(),yn=a("p"),pp=n("This model is also a PyTorch "),wn=a("a"),cp=n("torch.nn.Module"),hp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp=p(),we=a("div"),k($n.$$.fragment),fp=p(),Ft=a("p"),up=n("The "),gs=a("a"),gp=n("OpenAIGPTForSequenceClassification"),_p=n(" forward method, overrides the "),Pa=a("code"),Tp=n("__call__"),bp=n(" special method."),vp=p(),k(so.$$.fragment),kp=p(),k(ao.$$.fragment),yp=p(),k(ro.$$.fragment),wp=p(),k(io.$$.fragment),$p=p(),k(lo.$$.fragment),Ar=p(),qt=a("h2"),po=a("a"),Oa=a("span"),k(Pn.$$.fragment),Pp=p(),Ia=a("span"),Op=n("TFOpenAIGPTModel"),Gr=p(),$e=a("div"),k(On.$$.fragment),Ip=p(),Aa=a("p"),Ap=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Gp=p(),In=a("p"),Mp=n("This model inherits from "),_s=a("a"),Ep=n("TFPreTrainedModel"),zp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp=p(),An=a("p"),qp=n("This model is also a "),Gn=a("a"),Cp=n("tf.keras.Model"),xp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jp=p(),k(co.$$.fragment),Dp=p(),et=a("div"),k(Mn.$$.fragment),Hp=p(),Ct=a("p"),Sp=n("The "),Ts=a("a"),Lp=n("TFOpenAIGPTModel"),Np=n(" forward method, overrides the "),Ga=a("code"),Wp=n("__call__"),Up=n(" special method."),Bp=p(),k(ho.$$.fragment),Rp=p(),k(mo.$$.fragment),Mr=p(),xt=a("h2"),fo=a("a"),Ma=a("span"),k(En.$$.fragment),Vp=p(),Ea=a("span"),Kp=n("TFOpenAIGPTLMHeadModel"),Er=p(),Pe=a("div"),k(zn.$$.fragment),Jp=p(),za=a("p"),Xp=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Qp=p(),Fn=a("p"),Yp=n("This model inherits from "),bs=a("a"),Zp=n("TFPreTrainedModel"),ec=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tc=p(),qn=a("p"),oc=n("This model is also a "),Cn=a("a"),nc=n("tf.keras.Model"),sc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ac=p(),k(uo.$$.fragment),rc=p(),tt=a("div"),k(xn.$$.fragment),ic=p(),jt=a("p"),lc=n("The "),vs=a("a"),dc=n("TFOpenAIGPTLMHeadModel"),pc=n(" forward method, overrides the "),Fa=a("code"),cc=n("__call__"),hc=n(" special method."),mc=p(),k(go.$$.fragment),fc=p(),k(_o.$$.fragment),zr=p(),Dt=a("h2"),To=a("a"),qa=a("span"),k(jn.$$.fragment),uc=p(),Ca=a("span"),gc=n("TFOpenAIGPTDoubleHeadsModel"),Fr=p(),Oe=a("div"),k(Dn.$$.fragment),_c=p(),xa=a("p"),Tc=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),bc=p(),Hn=a("p"),vc=n("This model inherits from "),ks=a("a"),kc=n("TFPreTrainedModel"),yc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc=p(),Sn=a("p"),$c=n("This model is also a "),Ln=a("a"),Pc=n("tf.keras.Model"),Oc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ic=p(),k(bo.$$.fragment),Ac=p(),ot=a("div"),k(Nn.$$.fragment),Gc=p(),Ht=a("p"),Mc=n("The "),ys=a("a"),Ec=n("TFOpenAIGPTDoubleHeadsModel"),zc=n(" forward method, overrides the "),ja=a("code"),Fc=n("__call__"),qc=n(" special method."),Cc=p(),k(vo.$$.fragment),xc=p(),k(ko.$$.fragment),qr=p(),St=a("h2"),yo=a("a"),Da=a("span"),k(Wn.$$.fragment),jc=p(),Ha=a("span"),Dc=n("TFOpenAIGPTForSequenceClassification"),Cr=p(),le=a("div"),k(Un.$$.fragment),Hc=p(),Sa=a("p"),Sc=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Lc=p(),ws=a("p"),$s=a("a"),Nc=n("TFOpenAIGPTForSequenceClassification"),Wc=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Uc=p(),Ve=a("p"),Bc=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),La=a("code"),Rc=n("pad_token_id"),Vc=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Na=a("code"),Kc=n("pad_token_id"),Jc=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=a("code"),Xc=n("inputs_embeds"),Qc=n(" are passed instead of "),Ua=a("code"),Yc=n("input_ids"),Zc=n(`, it does the same (take the last value in
each row of the batch).`),eh=p(),Bn=a("p"),th=n("This model inherits from "),Ps=a("a"),oh=n("TFPreTrainedModel"),nh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh=p(),Rn=a("p"),ah=n("This model is also a "),Vn=a("a"),rh=n("tf.keras.Model"),ih=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh=p(),k(wo.$$.fragment),dh=p(),Le=a("div"),k(Kn.$$.fragment),ph=p(),Lt=a("p"),ch=n("The "),Os=a("a"),hh=n("TFOpenAIGPTForSequenceClassification"),mh=n(" forward method, overrides the "),Ba=a("code"),fh=n("__call__"),uh=n(" special method."),gh=p(),k($o.$$.fragment),_h=p(),k(Po.$$.fragment),Th=p(),k(Oo.$$.fragment),this.h()},l(o){const _=Of('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=c(o),m=r(o,"H1",{class:!0});var Jn=i(m);h=r(Jn,"A",{id:!0,class:!0,href:!0});var Ra=i(h);b=r(Ra,"SPAN",{});var Va=i(b);y(l.$$.fragment,Va),Va.forEach(t),Ra.forEach(t),f=c(Jn),A=r(Jn,"SPAN",{});var Ka=i(A);he=s(Ka,"OpenAI GPT"),Ka.forEach(t),Jn.forEach(t),J=c(o),G=r(o,"H2",{class:!0});var Xn=i(G);X=r(Xn,"A",{id:!0,class:!0,href:!0});var Ja=i(X);D=r(Ja,"SPAN",{});var Xa=i(D);y(Y.$$.fragment,Xa),Xa.forEach(t),Ja.forEach(t),me=c(Xn),H=r(Xn,"SPAN",{});var Qa=i(H);fe=s(Qa,"Overview"),Qa.forEach(t),Xn.forEach(t),de=c(o),L=r(o,"P",{});var Qn=i(L);C=s(Qn,"OpenAI GPT model was proposed in "),Z=r(Qn,"A",{href:!0,rel:!0});var Ya=i(Z);ee=s(Ya,"Improving Language Understanding by Generative Pre-Training"),Ya.forEach(t),E=s(Qn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Qn.forEach(t),F=c(o),oe=r(o,"P",{});var Za=i(oe);W=s(Za,"The abstract from the paper is the following:"),Za.forEach(t),pe=c(o),ne=r(o,"P",{});var er=i(ne);S=r(er,"EM",{});var tr=i(S);ue=s(tr,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),tr.forEach(t),er.forEach(t),ce=c(o),z=r(o,"P",{});var or=i(z);ge=s(or,"Tips:"),or.forEach(t),N=c(o),Q=r(o,"UL",{});var Yn=i(Q);re=r(Yn,"LI",{});var nr=i(re);U=s(nr,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),nr.forEach(t),_e=c(Yn),te=r(Yn,"LI",{});var Zn=i(te);x=s(Zn,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=r(Zn,"EM",{});var sr=i(ie);B=s(sr,"run_generation.py"),sr.forEach(t),Te=s(Zn," example script."),Zn.forEach(t),Yn.forEach(t),T=c(o),I=r(o,"P",{});var Is=i(I);R=r(Is,"A",{href:!0,rel:!0});var ar=i(R);Me=s(ar,"Write With Transformer"),ar.forEach(t),Ee=s(Is,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),Is.forEach(t),q=c(o),se=r(o,"P",{});var Nt=i(se);ze=s(Nt,"This model was contributed by "),be=r(Nt,"A",{href:!0,rel:!0});var rr=i(be);j=s(rr,"thomwolf"),rr.forEach(t),V=s(Nt,". The original code can be found "),ve=r(Nt,"A",{href:!0,rel:!0});var ir=i(ve);Fe=s(ir,"here"),ir.forEach(t),K=s(Nt,"."),Nt.forEach(t),Ie=c(o),ye=r(o,"P",{});var lr=i(ye);ke=s(lr,"Note:"),lr.forEach(t),Ae=c(o),Xe=r(o,"P",{});var pt=i(Xe);Ti=s(pt,"If you want to reproduce the original tokenization process of the "),js=r(pt,"EM",{});var vh=i(js);bi=s(vh,"OpenAI GPT"),vh.forEach(t),vi=s(pt," paper, you will need to install "),Ds=r(pt,"CODE",{});var kh=i(Ds);ki=s(kh,"ftfy"),kh.forEach(t),yi=s(pt,`
and `),Hs=r(pt,"CODE",{});var yh=i(Hs);wi=s(yh,"SpaCy"),yh.forEach(t),$i=s(pt,":"),pt.forEach(t),dr=c(o),y(jo.$$.fragment,o),pr=c(o),Se=r(o,"P",{});var ct=i(Se);Pi=s(ct,"If you don\u2019t install "),Ss=r(ct,"CODE",{});var wh=i(Ss);Oi=s(wh,"ftfy"),wh.forEach(t),Ii=s(ct," and "),Ls=r(ct,"CODE",{});var $h=i(Ls);Ai=s($h,"SpaCy"),$h.forEach(t),Gi=s(ct,", the "),es=r(ct,"A",{href:!0});var Ph=i(es);Mi=s(Ph,"OpenAIGPTTokenizer"),Ph.forEach(t),Ei=s(ct,` will default to tokenize
using BERT\u2019s `),Ns=r(ct,"CODE",{});var Oh=i(Ns);zi=s(Oh,"BasicTokenizer"),Oh.forEach(t),Fi=s(ct," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),ct.forEach(t),cr=c(o),bt=r(o,"H2",{class:!0});var jr=i(bt);Wt=r(jr,"A",{id:!0,class:!0,href:!0});var Ih=i(Wt);Ws=r(Ih,"SPAN",{});var Ah=i(Ws);y(Do.$$.fragment,Ah),Ah.forEach(t),Ih.forEach(t),qi=c(jr),Us=r(jr,"SPAN",{});var Gh=i(Us);Ci=s(Gh,"OpenAIGPTConfig"),Gh.forEach(t),jr.forEach(t),hr=c(o),Be=r(o,"DIV",{class:!0});var Io=i(Be);y(Ho.$$.fragment,Io),xi=c(Io),lt=r(Io,"P",{});var Ao=i(lt);ji=s(Ao,"This is the configuration class to store the configuration of a "),ts=r(Ao,"A",{href:!0});var Mh=i(ts);Di=s(Mh,"OpenAIGPTModel"),Mh.forEach(t),Hi=s(Ao," or a "),os=r(Ao,"A",{href:!0});var Eh=i(os);Si=s(Eh,"TFOpenAIGPTModel"),Eh.forEach(t),Li=s(Ao,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the GPT
`),So=r(Ao,"A",{href:!0,rel:!0});var zh=i(So);Ni=s(zh,"openai-gpt"),zh.forEach(t),Wi=s(Ao," architecture from OpenAI."),Ao.forEach(t),Ui=c(Io),vt=r(Io,"P",{});var As=i(vt);Bi=s(As,"Configuration objects inherit from "),ns=r(As,"A",{href:!0});var Fh=i(ns);Ri=s(Fh,"PretrainedConfig"),Fh.forEach(t),Vi=s(As,` and can be used to control the model outputs. Read the
documentation from `),ss=r(As,"A",{href:!0});var qh=i(ss);Ki=s(qh,"PretrainedConfig"),qh.forEach(t),Ji=s(As," for more information."),As.forEach(t),Xi=c(Io),y(Ut.$$.fragment,Io),Io.forEach(t),mr=c(o),kt=r(o,"H2",{class:!0});var Dr=i(kt);Bt=r(Dr,"A",{id:!0,class:!0,href:!0});var Ch=i(Bt);Bs=r(Ch,"SPAN",{});var xh=i(Bs);y(Lo.$$.fragment,xh),xh.forEach(t),Ch.forEach(t),Qi=c(Dr),Rs=r(Dr,"SPAN",{});var jh=i(Rs);Yi=s(jh,"OpenAIGPTTokenizer"),jh.forEach(t),Dr.forEach(t),fr=c(o),qe=r(o,"DIV",{class:!0});var ht=i(qe);y(No.$$.fragment,ht),Zi=c(ht),Vs=r(ht,"P",{});var Dh=i(Vs);el=s(Dh,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),Dh.forEach(t),tl=c(ht),Wo=r(ht,"UL",{});var Hr=i(Wo);Ks=r(Hr,"LI",{});var Hh=i(Ks);ol=s(Hh,"lowercases all inputs,"),Hh.forEach(t),nl=c(Hr),dt=r(Hr,"LI",{});var Go=i(dt);sl=s(Go,"uses "),Js=r(Go,"CODE",{});var Sh=i(Js);al=s(Sh,"SpaCy"),Sh.forEach(t),rl=s(Go," tokenizer and "),Xs=r(Go,"CODE",{});var Lh=i(Xs);il=s(Lh,"ftfy"),Lh.forEach(t),ll=s(Go,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Qs=r(Go,"CODE",{});var Nh=i(Qs);dl=s(Nh,"BasicTokenizer"),Nh.forEach(t),pl=s(Go," if not."),Go.forEach(t),Hr.forEach(t),cl=c(ht),Uo=r(ht,"P",{});var Sr=i(Uo);hl=s(Sr,"This tokenizer inherits from "),as=r(Sr,"A",{href:!0});var Wh=i(as);ml=s(Wh,"PreTrainedTokenizer"),Wh.forEach(t),fl=s(Sr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sr.forEach(t),ul=c(ht),rs=r(ht,"DIV",{class:!0});var Uh=i(rs);y(Bo.$$.fragment,Uh),Uh.forEach(t),ht.forEach(t),ur=c(o),yt=r(o,"H2",{class:!0});var Lr=i(yt);Rt=r(Lr,"A",{id:!0,class:!0,href:!0});var Bh=i(Rt);Ys=r(Bh,"SPAN",{});var Rh=i(Ys);y(Ro.$$.fragment,Rh),Rh.forEach(t),Bh.forEach(t),gl=c(Lr),Zs=r(Lr,"SPAN",{});var Vh=i(Zs);_l=s(Vh,"OpenAIGPTTokenizerFast"),Vh.forEach(t),Lr.forEach(t),gr=c(o),Re=r(o,"DIV",{class:!0});var Mo=i(Re);y(Vo.$$.fragment,Mo),Tl=c(Mo),Ko=r(Mo,"P",{});var Nr=i(Ko);bl=s(Nr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),ea=r(Nr,"EM",{});var Kh=i(ea);vl=s(Kh,"tokenizers"),Kh.forEach(t),kl=s(Nr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Nr.forEach(t),yl=c(Mo),Jo=r(Mo,"UL",{});var Wr=i(Jo);ta=r(Wr,"LI",{});var Jh=i(ta);wl=s(Jh,"lower case all inputs"),Jh.forEach(t),$l=c(Wr),oa=r(Wr,"LI",{});var Xh=i(oa);Pl=s(Xh,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Xh.forEach(t),Wr.forEach(t),Ol=c(Mo),Xo=r(Mo,"P",{});var Ur=i(Xo);Il=s(Ur,"This tokenizer inherits from "),is=r(Ur,"A",{href:!0});var Qh=i(is);Al=s(Qh,"PreTrainedTokenizerFast"),Qh.forEach(t),Gl=s(Ur,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ur.forEach(t),Mo.forEach(t),_r=c(o),wt=r(o,"H2",{class:!0});var Br=i(wt);Vt=r(Br,"A",{id:!0,class:!0,href:!0});var Yh=i(Vt);na=r(Yh,"SPAN",{});var Zh=i(na);y(Qo.$$.fragment,Zh),Zh.forEach(t),Yh.forEach(t),Ml=c(Br),sa=r(Br,"SPAN",{});var em=i(sa);El=s(em,"OpenAI specific outputs"),em.forEach(t),Br.forEach(t),Tr=c(o),$t=r(o,"DIV",{class:!0});var Rr=i($t);y(Yo.$$.fragment,Rr),zl=c(Rr),aa=r(Rr,"P",{});var tm=i(aa);Fl=s(tm,"Base class for outputs of models predicting if two sentences are consecutive or not."),tm.forEach(t),Rr.forEach(t),br=c(o),Pt=r(o,"DIV",{class:!0});var Vr=i(Pt);y(Zo.$$.fragment,Vr),ql=c(Vr),ra=r(Vr,"P",{});var om=i(ra);Cl=s(om,"Base class for outputs of models predicting if two sentences are consecutive or not."),om.forEach(t),Vr.forEach(t),vr=c(o),Ot=r(o,"H2",{class:!0});var Kr=i(Ot);Kt=r(Kr,"A",{id:!0,class:!0,href:!0});var nm=i(Kt);ia=r(nm,"SPAN",{});var sm=i(ia);y(en.$$.fragment,sm),sm.forEach(t),nm.forEach(t),xl=c(Kr),la=r(Kr,"SPAN",{});var am=i(la);jl=s(am,"OpenAIGPTModel"),am.forEach(t),Kr.forEach(t),kr=c(o),Ce=r(o,"DIV",{class:!0});var mt=i(Ce);y(tn.$$.fragment,mt),Dl=c(mt),da=r(mt,"P",{});var rm=i(da);Hl=s(rm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),rm.forEach(t),Sl=c(mt),on=r(mt,"P",{});var Jr=i(on);Ll=s(Jr,"This model inherits from "),ls=r(Jr,"A",{href:!0});var im=i(ls);Nl=s(im,"PreTrainedModel"),im.forEach(t),Wl=s(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr.forEach(t),Ul=c(mt),nn=r(mt,"P",{});var Xr=i(nn);Bl=s(Xr,"This model is also a PyTorch "),sn=r(Xr,"A",{href:!0,rel:!0});var lm=i(sn);Rl=s(lm,"torch.nn.Module"),lm.forEach(t),Vl=s(Xr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xr.forEach(t),Kl=c(mt),Qe=r(mt,"DIV",{class:!0});var Eo=i(Qe);y(an.$$.fragment,Eo),Jl=c(Eo),It=r(Eo,"P",{});var Gs=i(It);Xl=s(Gs,"The "),ds=r(Gs,"A",{href:!0});var dm=i(ds);Ql=s(dm,"OpenAIGPTModel"),dm.forEach(t),Yl=s(Gs," forward method, overrides the "),pa=r(Gs,"CODE",{});var pm=i(pa);Zl=s(pm,"__call__"),pm.forEach(t),ed=s(Gs," special method."),Gs.forEach(t),td=c(Eo),y(Jt.$$.fragment,Eo),od=c(Eo),y(Xt.$$.fragment,Eo),Eo.forEach(t),mt.forEach(t),yr=c(o),At=r(o,"H2",{class:!0});var Qr=i(At);Qt=r(Qr,"A",{id:!0,class:!0,href:!0});var cm=i(Qt);ca=r(cm,"SPAN",{});var hm=i(ca);y(rn.$$.fragment,hm),hm.forEach(t),cm.forEach(t),nd=c(Qr),ha=r(Qr,"SPAN",{});var mm=i(ha);sd=s(mm,"OpenAIGPTLMHeadModel"),mm.forEach(t),Qr.forEach(t),wr=c(o),xe=r(o,"DIV",{class:!0});var ft=i(xe);y(ln.$$.fragment,ft),ad=c(ft),ma=r(ft,"P",{});var fm=i(ma);rd=s(fm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),fm.forEach(t),id=c(ft),dn=r(ft,"P",{});var Yr=i(dn);ld=s(Yr,"This model inherits from "),ps=r(Yr,"A",{href:!0});var um=i(ps);dd=s(um,"PreTrainedModel"),um.forEach(t),pd=s(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(t),cd=c(ft),pn=r(ft,"P",{});var Zr=i(pn);hd=s(Zr,"This model is also a PyTorch "),cn=r(Zr,"A",{href:!0,rel:!0});var gm=i(cn);md=s(gm,"torch.nn.Module"),gm.forEach(t),fd=s(Zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zr.forEach(t),ud=c(ft),Ye=r(ft,"DIV",{class:!0});var zo=i(Ye);y(hn.$$.fragment,zo),gd=c(zo),Gt=r(zo,"P",{});var Ms=i(Gt);_d=s(Ms,"The "),cs=r(Ms,"A",{href:!0});var _m=i(cs);Td=s(_m,"OpenAIGPTLMHeadModel"),_m.forEach(t),bd=s(Ms," forward method, overrides the "),fa=r(Ms,"CODE",{});var Tm=i(fa);vd=s(Tm,"__call__"),Tm.forEach(t),kd=s(Ms," special method."),Ms.forEach(t),yd=c(zo),y(Yt.$$.fragment,zo),wd=c(zo),y(Zt.$$.fragment,zo),zo.forEach(t),ft.forEach(t),$r=c(o),Mt=r(o,"H2",{class:!0});var ei=i(Mt);eo=r(ei,"A",{id:!0,class:!0,href:!0});var bm=i(eo);ua=r(bm,"SPAN",{});var vm=i(ua);y(mn.$$.fragment,vm),vm.forEach(t),bm.forEach(t),$d=c(ei),ga=r(ei,"SPAN",{});var km=i(ga);Pd=s(km,"OpenAIGPTDoubleHeadsModel"),km.forEach(t),ei.forEach(t),Pr=c(o),je=r(o,"DIV",{class:!0});var ut=i(je);y(fn.$$.fragment,ut),Od=c(ut),_a=r(ut,"P",{});var ym=i(_a);Id=s(ym,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),ym.forEach(t),Ad=c(ut),un=r(ut,"P",{});var ti=i(un);Gd=s(ti,"This model inherits from "),hs=r(ti,"A",{href:!0});var wm=i(hs);Md=s(wm,"PreTrainedModel"),wm.forEach(t),Ed=s(ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ti.forEach(t),zd=c(ut),gn=r(ut,"P",{});var oi=i(gn);Fd=s(oi,"This model is also a PyTorch "),_n=r(oi,"A",{href:!0,rel:!0});var $m=i(_n);qd=s($m,"torch.nn.Module"),$m.forEach(t),Cd=s(oi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oi.forEach(t),xd=c(ut),Ze=r(ut,"DIV",{class:!0});var Fo=i(Ze);y(Tn.$$.fragment,Fo),jd=c(Fo),Et=r(Fo,"P",{});var Es=i(Et);Dd=s(Es,"The "),ms=r(Es,"A",{href:!0});var Pm=i(ms);Hd=s(Pm,"OpenAIGPTDoubleHeadsModel"),Pm.forEach(t),Sd=s(Es," forward method, overrides the "),Ta=r(Es,"CODE",{});var Om=i(Ta);Ld=s(Om,"__call__"),Om.forEach(t),Nd=s(Es," special method."),Es.forEach(t),Wd=c(Fo),y(to.$$.fragment,Fo),Ud=c(Fo),y(oo.$$.fragment,Fo),Fo.forEach(t),ut.forEach(t),Or=c(o),zt=r(o,"H2",{class:!0});var ni=i(zt);no=r(ni,"A",{id:!0,class:!0,href:!0});var Im=i(no);ba=r(Im,"SPAN",{});var Am=i(ba);y(bn.$$.fragment,Am),Am.forEach(t),Im.forEach(t),Bd=c(ni),va=r(ni,"SPAN",{});var Gm=i(va);Rd=s(Gm,"OpenAIGPTForSequenceClassification"),Gm.forEach(t),ni.forEach(t),Ir=c(o),De=r(o,"DIV",{class:!0});var gt=i(De);y(vn.$$.fragment,gt),Vd=c(gt),He=r(gt,"P",{});var nt=i(He);Kd=s(nt,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),fs=r(nt,"A",{href:!0});var Mm=i(fs);Jd=s(Mm,"OpenAIGPTForSequenceClassification"),Mm.forEach(t),Xd=s(nt,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),ka=r(nt,"CODE",{});var Em=i(ka);Qd=s(Em,"pad_token_id"),Em.forEach(t),Yd=s(nt,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ya=r(nt,"CODE",{});var zm=i(ya);Zd=s(zm,"pad_token_id"),zm.forEach(t),ep=s(nt,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),wa=r(nt,"CODE",{});var Fm=i(wa);tp=s(Fm,"inputs_embeds"),Fm.forEach(t),op=s(nt," are passed instead of "),$a=r(nt,"CODE",{});var qm=i($a);np=s(qm,"input_ids"),qm.forEach(t),sp=s(nt,`, it does the same (take
the last value in each row of the batch).`),nt.forEach(t),ap=c(gt),kn=r(gt,"P",{});var si=i(kn);rp=s(si,"This model inherits from "),us=r(si,"A",{href:!0});var Cm=i(us);ip=s(Cm,"PreTrainedModel"),Cm.forEach(t),lp=s(si,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si.forEach(t),dp=c(gt),yn=r(gt,"P",{});var ai=i(yn);pp=s(ai,"This model is also a PyTorch "),wn=r(ai,"A",{href:!0,rel:!0});var xm=i(wn);cp=s(xm,"torch.nn.Module"),xm.forEach(t),hp=s(ai,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ai.forEach(t),mp=c(gt),we=r(gt,"DIV",{class:!0});var Ne=i(we);y($n.$$.fragment,Ne),fp=c(Ne),Ft=r(Ne,"P",{});var zs=i(Ft);up=s(zs,"The "),gs=r(zs,"A",{href:!0});var jm=i(gs);gp=s(jm,"OpenAIGPTForSequenceClassification"),jm.forEach(t),_p=s(zs," forward method, overrides the "),Pa=r(zs,"CODE",{});var Dm=i(Pa);Tp=s(Dm,"__call__"),Dm.forEach(t),bp=s(zs," special method."),zs.forEach(t),vp=c(Ne),y(so.$$.fragment,Ne),kp=c(Ne),y(ao.$$.fragment,Ne),yp=c(Ne),y(ro.$$.fragment,Ne),wp=c(Ne),y(io.$$.fragment,Ne),$p=c(Ne),y(lo.$$.fragment,Ne),Ne.forEach(t),gt.forEach(t),Ar=c(o),qt=r(o,"H2",{class:!0});var ri=i(qt);po=r(ri,"A",{id:!0,class:!0,href:!0});var Hm=i(po);Oa=r(Hm,"SPAN",{});var Sm=i(Oa);y(Pn.$$.fragment,Sm),Sm.forEach(t),Hm.forEach(t),Pp=c(ri),Ia=r(ri,"SPAN",{});var Lm=i(Ia);Op=s(Lm,"TFOpenAIGPTModel"),Lm.forEach(t),ri.forEach(t),Gr=c(o),$e=r(o,"DIV",{class:!0});var st=i($e);y(On.$$.fragment,st),Ip=c(st),Aa=r(st,"P",{});var Nm=i(Aa);Ap=s(Nm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Nm.forEach(t),Gp=c(st),In=r(st,"P",{});var ii=i(In);Mp=s(ii,"This model inherits from "),_s=r(ii,"A",{href:!0});var Wm=i(_s);Ep=s(Wm,"TFPreTrainedModel"),Wm.forEach(t),zp=s(ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii.forEach(t),Fp=c(st),An=r(st,"P",{});var li=i(An);qp=s(li,"This model is also a "),Gn=r(li,"A",{href:!0,rel:!0});var Um=i(Gn);Cp=s(Um,"tf.keras.Model"),Um.forEach(t),xp=s(li,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li.forEach(t),jp=c(st),y(co.$$.fragment,st),Dp=c(st),et=r(st,"DIV",{class:!0});var qo=i(et);y(Mn.$$.fragment,qo),Hp=c(qo),Ct=r(qo,"P",{});var Fs=i(Ct);Sp=s(Fs,"The "),Ts=r(Fs,"A",{href:!0});var Bm=i(Ts);Lp=s(Bm,"TFOpenAIGPTModel"),Bm.forEach(t),Np=s(Fs," forward method, overrides the "),Ga=r(Fs,"CODE",{});var Rm=i(Ga);Wp=s(Rm,"__call__"),Rm.forEach(t),Up=s(Fs," special method."),Fs.forEach(t),Bp=c(qo),y(ho.$$.fragment,qo),Rp=c(qo),y(mo.$$.fragment,qo),qo.forEach(t),st.forEach(t),Mr=c(o),xt=r(o,"H2",{class:!0});var di=i(xt);fo=r(di,"A",{id:!0,class:!0,href:!0});var Vm=i(fo);Ma=r(Vm,"SPAN",{});var Km=i(Ma);y(En.$$.fragment,Km),Km.forEach(t),Vm.forEach(t),Vp=c(di),Ea=r(di,"SPAN",{});var Jm=i(Ea);Kp=s(Jm,"TFOpenAIGPTLMHeadModel"),Jm.forEach(t),di.forEach(t),Er=c(o),Pe=r(o,"DIV",{class:!0});var at=i(Pe);y(zn.$$.fragment,at),Jp=c(at),za=r(at,"P",{});var Xm=i(za);Xp=s(Xm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Xm.forEach(t),Qp=c(at),Fn=r(at,"P",{});var pi=i(Fn);Yp=s(pi,"This model inherits from "),bs=r(pi,"A",{href:!0});var Qm=i(bs);Zp=s(Qm,"TFPreTrainedModel"),Qm.forEach(t),ec=s(pi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi.forEach(t),tc=c(at),qn=r(at,"P",{});var ci=i(qn);oc=s(ci,"This model is also a "),Cn=r(ci,"A",{href:!0,rel:!0});var Ym=i(Cn);nc=s(Ym,"tf.keras.Model"),Ym.forEach(t),sc=s(ci,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ci.forEach(t),ac=c(at),y(uo.$$.fragment,at),rc=c(at),tt=r(at,"DIV",{class:!0});var Co=i(tt);y(xn.$$.fragment,Co),ic=c(Co),jt=r(Co,"P",{});var qs=i(jt);lc=s(qs,"The "),vs=r(qs,"A",{href:!0});var Zm=i(vs);dc=s(Zm,"TFOpenAIGPTLMHeadModel"),Zm.forEach(t),pc=s(qs," forward method, overrides the "),Fa=r(qs,"CODE",{});var ef=i(Fa);cc=s(ef,"__call__"),ef.forEach(t),hc=s(qs," special method."),qs.forEach(t),mc=c(Co),y(go.$$.fragment,Co),fc=c(Co),y(_o.$$.fragment,Co),Co.forEach(t),at.forEach(t),zr=c(o),Dt=r(o,"H2",{class:!0});var hi=i(Dt);To=r(hi,"A",{id:!0,class:!0,href:!0});var tf=i(To);qa=r(tf,"SPAN",{});var of=i(qa);y(jn.$$.fragment,of),of.forEach(t),tf.forEach(t),uc=c(hi),Ca=r(hi,"SPAN",{});var nf=i(Ca);gc=s(nf,"TFOpenAIGPTDoubleHeadsModel"),nf.forEach(t),hi.forEach(t),Fr=c(o),Oe=r(o,"DIV",{class:!0});var rt=i(Oe);y(Dn.$$.fragment,rt),_c=c(rt),xa=r(rt,"P",{});var sf=i(xa);Tc=s(sf,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),sf.forEach(t),bc=c(rt),Hn=r(rt,"P",{});var mi=i(Hn);vc=s(mi,"This model inherits from "),ks=r(mi,"A",{href:!0});var af=i(ks);kc=s(af,"TFPreTrainedModel"),af.forEach(t),yc=s(mi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mi.forEach(t),wc=c(rt),Sn=r(rt,"P",{});var fi=i(Sn);$c=s(fi,"This model is also a "),Ln=r(fi,"A",{href:!0,rel:!0});var rf=i(Ln);Pc=s(rf,"tf.keras.Model"),rf.forEach(t),Oc=s(fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi.forEach(t),Ic=c(rt),y(bo.$$.fragment,rt),Ac=c(rt),ot=r(rt,"DIV",{class:!0});var xo=i(ot);y(Nn.$$.fragment,xo),Gc=c(xo),Ht=r(xo,"P",{});var Cs=i(Ht);Mc=s(Cs,"The "),ys=r(Cs,"A",{href:!0});var lf=i(ys);Ec=s(lf,"TFOpenAIGPTDoubleHeadsModel"),lf.forEach(t),zc=s(Cs," forward method, overrides the "),ja=r(Cs,"CODE",{});var df=i(ja);Fc=s(df,"__call__"),df.forEach(t),qc=s(Cs," special method."),Cs.forEach(t),Cc=c(xo),y(vo.$$.fragment,xo),xc=c(xo),y(ko.$$.fragment,xo),xo.forEach(t),rt.forEach(t),qr=c(o),St=r(o,"H2",{class:!0});var ui=i(St);yo=r(ui,"A",{id:!0,class:!0,href:!0});var pf=i(yo);Da=r(pf,"SPAN",{});var cf=i(Da);y(Wn.$$.fragment,cf),cf.forEach(t),pf.forEach(t),jc=c(ui),Ha=r(ui,"SPAN",{});var hf=i(Ha);Dc=s(hf,"TFOpenAIGPTForSequenceClassification"),hf.forEach(t),ui.forEach(t),Cr=c(o),le=r(o,"DIV",{class:!0});var Ge=i(le);y(Un.$$.fragment,Ge),Hc=c(Ge),Sa=r(Ge,"P",{});var mf=i(Sa);Sc=s(mf,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),mf.forEach(t),Lc=c(Ge),ws=r(Ge,"P",{});var bh=i(ws);$s=r(bh,"A",{href:!0});var ff=i($s);Nc=s(ff,"TFOpenAIGPTForSequenceClassification"),ff.forEach(t),Wc=s(bh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),bh.forEach(t),Uc=c(Ge),Ve=r(Ge,"P",{});var _t=i(Ve);Bc=s(_t,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),La=r(_t,"CODE",{});var uf=i(La);Rc=s(uf,"pad_token_id"),uf.forEach(t),Vc=s(_t,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Na=r(_t,"CODE",{});var gf=i(Na);Kc=s(gf,"pad_token_id"),gf.forEach(t),Jc=s(_t,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=r(_t,"CODE",{});var _f=i(Wa);Xc=s(_f,"inputs_embeds"),_f.forEach(t),Qc=s(_t," are passed instead of "),Ua=r(_t,"CODE",{});var Tf=i(Ua);Yc=s(Tf,"input_ids"),Tf.forEach(t),Zc=s(_t,`, it does the same (take the last value in
each row of the batch).`),_t.forEach(t),eh=c(Ge),Bn=r(Ge,"P",{});var gi=i(Bn);th=s(gi,"This model inherits from "),Ps=r(gi,"A",{href:!0});var bf=i(Ps);oh=s(bf,"TFPreTrainedModel"),bf.forEach(t),nh=s(gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gi.forEach(t),sh=c(Ge),Rn=r(Ge,"P",{});var _i=i(Rn);ah=s(_i,"This model is also a "),Vn=r(_i,"A",{href:!0,rel:!0});var vf=i(Vn);rh=s(vf,"tf.keras.Model"),vf.forEach(t),ih=s(_i,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_i.forEach(t),lh=c(Ge),y(wo.$$.fragment,Ge),dh=c(Ge),Le=r(Ge,"DIV",{class:!0});var Tt=i(Le);y(Kn.$$.fragment,Tt),ph=c(Tt),Lt=r(Tt,"P",{});var xs=i(Lt);ch=s(xs,"The "),Os=r(xs,"A",{href:!0});var kf=i(Os);hh=s(kf,"TFOpenAIGPTForSequenceClassification"),kf.forEach(t),mh=s(xs," forward method, overrides the "),Ba=r(xs,"CODE",{});var yf=i(Ba);fh=s(yf,"__call__"),yf.forEach(t),uh=s(xs," special method."),xs.forEach(t),gh=c(Tt),y($o.$$.fragment,Tt),_h=c(Tt),y(Po.$$.fragment,Tt),Th=c(Tt),y(Oo.$$.fragment,Tt),Tt.forEach(t),Ge.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(eu)),g(h,"id","openai-gpt"),g(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(h,"href","#openai-gpt"),g(m,"class","relative group"),g(X,"id","overview"),g(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(X,"href","#overview"),g(G,"class","relative group"),g(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),g(Z,"rel","nofollow"),g(R,"href","https://transformer.huggingface.co/doc/gpt"),g(R,"rel","nofollow"),g(be,"href","https://huggingface.co/thomwolf"),g(be,"rel","nofollow"),g(ve,"href","https://github.com/openai/finetune-transformer-lm"),g(ve,"rel","nofollow"),g(es,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),g(Wt,"id","transformers.OpenAIGPTConfig"),g(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wt,"href","#transformers.OpenAIGPTConfig"),g(bt,"class","relative group"),g(ts,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),g(os,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),g(So,"href","https://huggingface.co/openai-gpt"),g(So,"rel","nofollow"),g(ns,"href","/docs/transformers/pr_18095/en/main_classes/configuration#transformers.PretrainedConfig"),g(ss,"href","/docs/transformers/pr_18095/en/main_classes/configuration#transformers.PretrainedConfig"),g(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Bt,"id","transformers.OpenAIGPTTokenizer"),g(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Bt,"href","#transformers.OpenAIGPTTokenizer"),g(kt,"class","relative group"),g(as,"href","/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(rs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Rt,"id","transformers.OpenAIGPTTokenizerFast"),g(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Rt,"href","#transformers.OpenAIGPTTokenizerFast"),g(yt,"class","relative group"),g(is,"href","/docs/transformers/pr_18095/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),g(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Vt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),g(wt,"class","relative group"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Kt,"id","transformers.OpenAIGPTModel"),g(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Kt,"href","#transformers.OpenAIGPTModel"),g(Ot,"class","relative group"),g(ls,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),g(sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(sn,"rel","nofollow"),g(ds,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),g(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qt,"id","transformers.OpenAIGPTLMHeadModel"),g(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qt,"href","#transformers.OpenAIGPTLMHeadModel"),g(At,"class","relative group"),g(ps,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),g(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(cn,"rel","nofollow"),g(cs,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),g(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),g(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),g(Mt,"class","relative group"),g(hs,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),g(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(_n,"rel","nofollow"),g(ms,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(no,"id","transformers.OpenAIGPTForSequenceClassification"),g(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(no,"href","#transformers.OpenAIGPTForSequenceClassification"),g(zt,"class","relative group"),g(fs,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),g(us,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.PreTrainedModel"),g(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(wn,"rel","nofollow"),g(gs,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),g(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(po,"id","transformers.TFOpenAIGPTModel"),g(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(po,"href","#transformers.TFOpenAIGPTModel"),g(qt,"class","relative group"),g(_s,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),g(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Gn,"rel","nofollow"),g(Ts,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fo,"id","transformers.TFOpenAIGPTLMHeadModel"),g(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(fo,"href","#transformers.TFOpenAIGPTLMHeadModel"),g(xt,"class","relative group"),g(bs,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),g(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Cn,"rel","nofollow"),g(vs,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(To,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),g(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(To,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),g(Dt,"class","relative group"),g(ks,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ln,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ln,"rel","nofollow"),g(ys,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yo,"id","transformers.TFOpenAIGPTForSequenceClassification"),g(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(yo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),g(St,"class","relative group"),g($s,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),g(Ps,"href","/docs/transformers/pr_18095/en/main_classes/model#transformers.TFPreTrainedModel"),g(Vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Vn,"rel","nofollow"),g(Os,"href","/docs/transformers/pr_18095/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),g(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),u(o,v,_),u(o,m,_),e(m,h),e(h,b),w(l,b,null),e(m,f),e(m,A),e(A,he),u(o,J,_),u(o,G,_),e(G,X),e(X,D),w(Y,D,null),e(G,me),e(G,H),e(H,fe),u(o,de,_),u(o,L,_),e(L,C),e(L,Z),e(Z,ee),e(L,E),u(o,F,_),u(o,oe,_),e(oe,W),u(o,pe,_),u(o,ne,_),e(ne,S),e(S,ue),u(o,ce,_),u(o,z,_),e(z,ge),u(o,N,_),u(o,Q,_),e(Q,re),e(re,U),e(Q,_e),e(Q,te),e(te,x),e(te,ie),e(ie,B),e(te,Te),u(o,T,_),u(o,I,_),e(I,R),e(R,Me),e(I,Ee),u(o,q,_),u(o,se,_),e(se,ze),e(se,be),e(be,j),e(se,V),e(se,ve),e(ve,Fe),e(se,K),u(o,Ie,_),u(o,ye,_),e(ye,ke),u(o,Ae,_),u(o,Xe,_),e(Xe,Ti),e(Xe,js),e(js,bi),e(Xe,vi),e(Xe,Ds),e(Ds,ki),e(Xe,yi),e(Xe,Hs),e(Hs,wi),e(Xe,$i),u(o,dr,_),w(jo,o,_),u(o,pr,_),u(o,Se,_),e(Se,Pi),e(Se,Ss),e(Ss,Oi),e(Se,Ii),e(Se,Ls),e(Ls,Ai),e(Se,Gi),e(Se,es),e(es,Mi),e(Se,Ei),e(Se,Ns),e(Ns,zi),e(Se,Fi),u(o,cr,_),u(o,bt,_),e(bt,Wt),e(Wt,Ws),w(Do,Ws,null),e(bt,qi),e(bt,Us),e(Us,Ci),u(o,hr,_),u(o,Be,_),w(Ho,Be,null),e(Be,xi),e(Be,lt),e(lt,ji),e(lt,ts),e(ts,Di),e(lt,Hi),e(lt,os),e(os,Si),e(lt,Li),e(lt,So),e(So,Ni),e(lt,Wi),e(Be,Ui),e(Be,vt),e(vt,Bi),e(vt,ns),e(ns,Ri),e(vt,Vi),e(vt,ss),e(ss,Ki),e(vt,Ji),e(Be,Xi),w(Ut,Be,null),u(o,mr,_),u(o,kt,_),e(kt,Bt),e(Bt,Bs),w(Lo,Bs,null),e(kt,Qi),e(kt,Rs),e(Rs,Yi),u(o,fr,_),u(o,qe,_),w(No,qe,null),e(qe,Zi),e(qe,Vs),e(Vs,el),e(qe,tl),e(qe,Wo),e(Wo,Ks),e(Ks,ol),e(Wo,nl),e(Wo,dt),e(dt,sl),e(dt,Js),e(Js,al),e(dt,rl),e(dt,Xs),e(Xs,il),e(dt,ll),e(dt,Qs),e(Qs,dl),e(dt,pl),e(qe,cl),e(qe,Uo),e(Uo,hl),e(Uo,as),e(as,ml),e(Uo,fl),e(qe,ul),e(qe,rs),w(Bo,rs,null),u(o,ur,_),u(o,yt,_),e(yt,Rt),e(Rt,Ys),w(Ro,Ys,null),e(yt,gl),e(yt,Zs),e(Zs,_l),u(o,gr,_),u(o,Re,_),w(Vo,Re,null),e(Re,Tl),e(Re,Ko),e(Ko,bl),e(Ko,ea),e(ea,vl),e(Ko,kl),e(Re,yl),e(Re,Jo),e(Jo,ta),e(ta,wl),e(Jo,$l),e(Jo,oa),e(oa,Pl),e(Re,Ol),e(Re,Xo),e(Xo,Il),e(Xo,is),e(is,Al),e(Xo,Gl),u(o,_r,_),u(o,wt,_),e(wt,Vt),e(Vt,na),w(Qo,na,null),e(wt,Ml),e(wt,sa),e(sa,El),u(o,Tr,_),u(o,$t,_),w(Yo,$t,null),e($t,zl),e($t,aa),e(aa,Fl),u(o,br,_),u(o,Pt,_),w(Zo,Pt,null),e(Pt,ql),e(Pt,ra),e(ra,Cl),u(o,vr,_),u(o,Ot,_),e(Ot,Kt),e(Kt,ia),w(en,ia,null),e(Ot,xl),e(Ot,la),e(la,jl),u(o,kr,_),u(o,Ce,_),w(tn,Ce,null),e(Ce,Dl),e(Ce,da),e(da,Hl),e(Ce,Sl),e(Ce,on),e(on,Ll),e(on,ls),e(ls,Nl),e(on,Wl),e(Ce,Ul),e(Ce,nn),e(nn,Bl),e(nn,sn),e(sn,Rl),e(nn,Vl),e(Ce,Kl),e(Ce,Qe),w(an,Qe,null),e(Qe,Jl),e(Qe,It),e(It,Xl),e(It,ds),e(ds,Ql),e(It,Yl),e(It,pa),e(pa,Zl),e(It,ed),e(Qe,td),w(Jt,Qe,null),e(Qe,od),w(Xt,Qe,null),u(o,yr,_),u(o,At,_),e(At,Qt),e(Qt,ca),w(rn,ca,null),e(At,nd),e(At,ha),e(ha,sd),u(o,wr,_),u(o,xe,_),w(ln,xe,null),e(xe,ad),e(xe,ma),e(ma,rd),e(xe,id),e(xe,dn),e(dn,ld),e(dn,ps),e(ps,dd),e(dn,pd),e(xe,cd),e(xe,pn),e(pn,hd),e(pn,cn),e(cn,md),e(pn,fd),e(xe,ud),e(xe,Ye),w(hn,Ye,null),e(Ye,gd),e(Ye,Gt),e(Gt,_d),e(Gt,cs),e(cs,Td),e(Gt,bd),e(Gt,fa),e(fa,vd),e(Gt,kd),e(Ye,yd),w(Yt,Ye,null),e(Ye,wd),w(Zt,Ye,null),u(o,$r,_),u(o,Mt,_),e(Mt,eo),e(eo,ua),w(mn,ua,null),e(Mt,$d),e(Mt,ga),e(ga,Pd),u(o,Pr,_),u(o,je,_),w(fn,je,null),e(je,Od),e(je,_a),e(_a,Id),e(je,Ad),e(je,un),e(un,Gd),e(un,hs),e(hs,Md),e(un,Ed),e(je,zd),e(je,gn),e(gn,Fd),e(gn,_n),e(_n,qd),e(gn,Cd),e(je,xd),e(je,Ze),w(Tn,Ze,null),e(Ze,jd),e(Ze,Et),e(Et,Dd),e(Et,ms),e(ms,Hd),e(Et,Sd),e(Et,Ta),e(Ta,Ld),e(Et,Nd),e(Ze,Wd),w(to,Ze,null),e(Ze,Ud),w(oo,Ze,null),u(o,Or,_),u(o,zt,_),e(zt,no),e(no,ba),w(bn,ba,null),e(zt,Bd),e(zt,va),e(va,Rd),u(o,Ir,_),u(o,De,_),w(vn,De,null),e(De,Vd),e(De,He),e(He,Kd),e(He,fs),e(fs,Jd),e(He,Xd),e(He,ka),e(ka,Qd),e(He,Yd),e(He,ya),e(ya,Zd),e(He,ep),e(He,wa),e(wa,tp),e(He,op),e(He,$a),e($a,np),e(He,sp),e(De,ap),e(De,kn),e(kn,rp),e(kn,us),e(us,ip),e(kn,lp),e(De,dp),e(De,yn),e(yn,pp),e(yn,wn),e(wn,cp),e(yn,hp),e(De,mp),e(De,we),w($n,we,null),e(we,fp),e(we,Ft),e(Ft,up),e(Ft,gs),e(gs,gp),e(Ft,_p),e(Ft,Pa),e(Pa,Tp),e(Ft,bp),e(we,vp),w(so,we,null),e(we,kp),w(ao,we,null),e(we,yp),w(ro,we,null),e(we,wp),w(io,we,null),e(we,$p),w(lo,we,null),u(o,Ar,_),u(o,qt,_),e(qt,po),e(po,Oa),w(Pn,Oa,null),e(qt,Pp),e(qt,Ia),e(Ia,Op),u(o,Gr,_),u(o,$e,_),w(On,$e,null),e($e,Ip),e($e,Aa),e(Aa,Ap),e($e,Gp),e($e,In),e(In,Mp),e(In,_s),e(_s,Ep),e(In,zp),e($e,Fp),e($e,An),e(An,qp),e(An,Gn),e(Gn,Cp),e(An,xp),e($e,jp),w(co,$e,null),e($e,Dp),e($e,et),w(Mn,et,null),e(et,Hp),e(et,Ct),e(Ct,Sp),e(Ct,Ts),e(Ts,Lp),e(Ct,Np),e(Ct,Ga),e(Ga,Wp),e(Ct,Up),e(et,Bp),w(ho,et,null),e(et,Rp),w(mo,et,null),u(o,Mr,_),u(o,xt,_),e(xt,fo),e(fo,Ma),w(En,Ma,null),e(xt,Vp),e(xt,Ea),e(Ea,Kp),u(o,Er,_),u(o,Pe,_),w(zn,Pe,null),e(Pe,Jp),e(Pe,za),e(za,Xp),e(Pe,Qp),e(Pe,Fn),e(Fn,Yp),e(Fn,bs),e(bs,Zp),e(Fn,ec),e(Pe,tc),e(Pe,qn),e(qn,oc),e(qn,Cn),e(Cn,nc),e(qn,sc),e(Pe,ac),w(uo,Pe,null),e(Pe,rc),e(Pe,tt),w(xn,tt,null),e(tt,ic),e(tt,jt),e(jt,lc),e(jt,vs),e(vs,dc),e(jt,pc),e(jt,Fa),e(Fa,cc),e(jt,hc),e(tt,mc),w(go,tt,null),e(tt,fc),w(_o,tt,null),u(o,zr,_),u(o,Dt,_),e(Dt,To),e(To,qa),w(jn,qa,null),e(Dt,uc),e(Dt,Ca),e(Ca,gc),u(o,Fr,_),u(o,Oe,_),w(Dn,Oe,null),e(Oe,_c),e(Oe,xa),e(xa,Tc),e(Oe,bc),e(Oe,Hn),e(Hn,vc),e(Hn,ks),e(ks,kc),e(Hn,yc),e(Oe,wc),e(Oe,Sn),e(Sn,$c),e(Sn,Ln),e(Ln,Pc),e(Sn,Oc),e(Oe,Ic),w(bo,Oe,null),e(Oe,Ac),e(Oe,ot),w(Nn,ot,null),e(ot,Gc),e(ot,Ht),e(Ht,Mc),e(Ht,ys),e(ys,Ec),e(Ht,zc),e(Ht,ja),e(ja,Fc),e(Ht,qc),e(ot,Cc),w(vo,ot,null),e(ot,xc),w(ko,ot,null),u(o,qr,_),u(o,St,_),e(St,yo),e(yo,Da),w(Wn,Da,null),e(St,jc),e(St,Ha),e(Ha,Dc),u(o,Cr,_),u(o,le,_),w(Un,le,null),e(le,Hc),e(le,Sa),e(Sa,Sc),e(le,Lc),e(le,ws),e(ws,$s),e($s,Nc),e(ws,Wc),e(le,Uc),e(le,Ve),e(Ve,Bc),e(Ve,La),e(La,Rc),e(Ve,Vc),e(Ve,Na),e(Na,Kc),e(Ve,Jc),e(Ve,Wa),e(Wa,Xc),e(Ve,Qc),e(Ve,Ua),e(Ua,Yc),e(Ve,Zc),e(le,eh),e(le,Bn),e(Bn,th),e(Bn,Ps),e(Ps,oh),e(Bn,nh),e(le,sh),e(le,Rn),e(Rn,ah),e(Rn,Vn),e(Vn,rh),e(Rn,ih),e(le,lh),w(wo,le,null),e(le,dh),e(le,Le),w(Kn,Le,null),e(Le,ph),e(Le,Lt),e(Lt,ch),e(Lt,Os),e(Os,hh),e(Lt,mh),e(Lt,Ba),e(Ba,fh),e(Lt,uh),e(Le,gh),w($o,Le,null),e(Le,_h),w(Po,Le,null),e(Le,Th),w(Oo,Le,null),xr=!0},p(o,[_]){const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),Ut.$set(Jn);const Ra={};_&2&&(Ra.$$scope={dirty:_,ctx:o}),Jt.$set(Ra);const Va={};_&2&&(Va.$$scope={dirty:_,ctx:o}),Xt.$set(Va);const Ka={};_&2&&(Ka.$$scope={dirty:_,ctx:o}),Yt.$set(Ka);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:o}),Zt.$set(Xn);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:o}),to.$set(Ja);const Xa={};_&2&&(Xa.$$scope={dirty:_,ctx:o}),oo.$set(Xa);const Qa={};_&2&&(Qa.$$scope={dirty:_,ctx:o}),so.$set(Qa);const Qn={};_&2&&(Qn.$$scope={dirty:_,ctx:o}),ao.$set(Qn);const Ya={};_&2&&(Ya.$$scope={dirty:_,ctx:o}),ro.$set(Ya);const Za={};_&2&&(Za.$$scope={dirty:_,ctx:o}),io.$set(Za);const er={};_&2&&(er.$$scope={dirty:_,ctx:o}),lo.$set(er);const tr={};_&2&&(tr.$$scope={dirty:_,ctx:o}),co.$set(tr);const or={};_&2&&(or.$$scope={dirty:_,ctx:o}),ho.$set(or);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:o}),mo.$set(Yn);const nr={};_&2&&(nr.$$scope={dirty:_,ctx:o}),uo.$set(nr);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:o}),go.$set(Zn);const sr={};_&2&&(sr.$$scope={dirty:_,ctx:o}),_o.$set(sr);const Is={};_&2&&(Is.$$scope={dirty:_,ctx:o}),bo.$set(Is);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:o}),vo.$set(ar);const Nt={};_&2&&(Nt.$$scope={dirty:_,ctx:o}),ko.$set(Nt);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:o}),wo.$set(rr);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:o}),$o.$set(ir);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:o}),Po.$set(lr);const pt={};_&2&&(pt.$$scope={dirty:_,ctx:o}),Oo.$set(pt)},i(o){xr||($(l.$$.fragment,o),$(Y.$$.fragment,o),$(jo.$$.fragment,o),$(Do.$$.fragment,o),$(Ho.$$.fragment,o),$(Ut.$$.fragment,o),$(Lo.$$.fragment,o),$(No.$$.fragment,o),$(Bo.$$.fragment,o),$(Ro.$$.fragment,o),$(Vo.$$.fragment,o),$(Qo.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(an.$$.fragment,o),$(Jt.$$.fragment,o),$(Xt.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(hn.$$.fragment,o),$(Yt.$$.fragment,o),$(Zt.$$.fragment,o),$(mn.$$.fragment,o),$(fn.$$.fragment,o),$(Tn.$$.fragment,o),$(to.$$.fragment,o),$(oo.$$.fragment,o),$(bn.$$.fragment,o),$(vn.$$.fragment,o),$($n.$$.fragment,o),$(so.$$.fragment,o),$(ao.$$.fragment,o),$(ro.$$.fragment,o),$(io.$$.fragment,o),$(lo.$$.fragment,o),$(Pn.$$.fragment,o),$(On.$$.fragment,o),$(co.$$.fragment,o),$(Mn.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(En.$$.fragment,o),$(zn.$$.fragment,o),$(uo.$$.fragment,o),$(xn.$$.fragment,o),$(go.$$.fragment,o),$(_o.$$.fragment,o),$(jn.$$.fragment,o),$(Dn.$$.fragment,o),$(bo.$$.fragment,o),$(Nn.$$.fragment,o),$(vo.$$.fragment,o),$(ko.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(wo.$$.fragment,o),$(Kn.$$.fragment,o),$($o.$$.fragment,o),$(Po.$$.fragment,o),$(Oo.$$.fragment,o),xr=!0)},o(o){P(l.$$.fragment,o),P(Y.$$.fragment,o),P(jo.$$.fragment,o),P(Do.$$.fragment,o),P(Ho.$$.fragment,o),P(Ut.$$.fragment,o),P(Lo.$$.fragment,o),P(No.$$.fragment,o),P(Bo.$$.fragment,o),P(Ro.$$.fragment,o),P(Vo.$$.fragment,o),P(Qo.$$.fragment,o),P(Yo.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(an.$$.fragment,o),P(Jt.$$.fragment,o),P(Xt.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(hn.$$.fragment,o),P(Yt.$$.fragment,o),P(Zt.$$.fragment,o),P(mn.$$.fragment,o),P(fn.$$.fragment,o),P(Tn.$$.fragment,o),P(to.$$.fragment,o),P(oo.$$.fragment,o),P(bn.$$.fragment,o),P(vn.$$.fragment,o),P($n.$$.fragment,o),P(so.$$.fragment,o),P(ao.$$.fragment,o),P(ro.$$.fragment,o),P(io.$$.fragment,o),P(lo.$$.fragment,o),P(Pn.$$.fragment,o),P(On.$$.fragment,o),P(co.$$.fragment,o),P(Mn.$$.fragment,o),P(ho.$$.fragment,o),P(mo.$$.fragment,o),P(En.$$.fragment,o),P(zn.$$.fragment,o),P(uo.$$.fragment,o),P(xn.$$.fragment,o),P(go.$$.fragment,o),P(_o.$$.fragment,o),P(jn.$$.fragment,o),P(Dn.$$.fragment,o),P(bo.$$.fragment,o),P(Nn.$$.fragment,o),P(vo.$$.fragment,o),P(ko.$$.fragment,o),P(Wn.$$.fragment,o),P(Un.$$.fragment,o),P(wo.$$.fragment,o),P(Kn.$$.fragment,o),P($o.$$.fragment,o),P(Po.$$.fragment,o),P(Oo.$$.fragment,o),xr=!1},d(o){t(d),o&&t(v),o&&t(m),O(l),o&&t(J),o&&t(G),O(Y),o&&t(de),o&&t(L),o&&t(F),o&&t(oe),o&&t(pe),o&&t(ne),o&&t(ce),o&&t(z),o&&t(N),o&&t(Q),o&&t(T),o&&t(I),o&&t(q),o&&t(se),o&&t(Ie),o&&t(ye),o&&t(Ae),o&&t(Xe),o&&t(dr),O(jo,o),o&&t(pr),o&&t(Se),o&&t(cr),o&&t(bt),O(Do),o&&t(hr),o&&t(Be),O(Ho),O(Ut),o&&t(mr),o&&t(kt),O(Lo),o&&t(fr),o&&t(qe),O(No),O(Bo),o&&t(ur),o&&t(yt),O(Ro),o&&t(gr),o&&t(Re),O(Vo),o&&t(_r),o&&t(wt),O(Qo),o&&t(Tr),o&&t($t),O(Yo),o&&t(br),o&&t(Pt),O(Zo),o&&t(vr),o&&t(Ot),O(en),o&&t(kr),o&&t(Ce),O(tn),O(an),O(Jt),O(Xt),o&&t(yr),o&&t(At),O(rn),o&&t(wr),o&&t(xe),O(ln),O(hn),O(Yt),O(Zt),o&&t($r),o&&t(Mt),O(mn),o&&t(Pr),o&&t(je),O(fn),O(Tn),O(to),O(oo),o&&t(Or),o&&t(zt),O(bn),o&&t(Ir),o&&t(De),O(vn),O($n),O(so),O(ao),O(ro),O(io),O(lo),o&&t(Ar),o&&t(qt),O(Pn),o&&t(Gr),o&&t($e),O(On),O(co),O(Mn),O(ho),O(mo),o&&t(Mr),o&&t(xt),O(En),o&&t(Er),o&&t(Pe),O(zn),O(uo),O(xn),O(go),O(_o),o&&t(zr),o&&t(Dt),O(jn),o&&t(Fr),o&&t(Oe),O(Dn),O(bo),O(Nn),O(vo),O(ko),o&&t(qr),o&&t(St),O(Wn),o&&t(Cr),o&&t(le),O(Un),O(wo),O(Kn),O($o),O(Po),O(Oo)}}}const eu={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function tu(M){return If(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lu extends wf{constructor(d){super();$f(this,d,tu,Zf,Pf,{})}}export{lu as default,eu as metadata};
