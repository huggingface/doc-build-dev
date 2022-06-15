import{S as tw,i as ow,s as nw,e as a,k as c,w as v,t as n,M as sw,c as r,d as t,m as p,a as i,x as y,h as s,b as g,G as e,g as f,y as w,q as $,o as N,B as L,v as aw,L as Te}from"../../chunks/vendor-hf-doc-builder.js";import{T as ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as be}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function rw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetConfig, XLNetModel

# Initializing a XLNet configuration
configuration = XLNetConfig()

# Initializing a model from the configuration
model = XLNetModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetConfig, XLNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLNet configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),b=n("Examples:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Examples:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function iw(x){let d,b,m,h,T;return h=new ve({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),b=n("sequence pair mask has the following format:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"sequence pair mask has the following format:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function lw(x){let d,b,m,h,T;return h=new ve({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),b=n("sequence pair mask has the following format:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"sequence pair mask has the following format:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function dw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function cw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, XLNetModel
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetModel.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetModel.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function pw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function mw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, XLNetLMHeadModel
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-large-cased")
model = XLNetLMHeadModel.from_pretrained("xlnet-large-cased")

# We show how to setup inputs to predict a next token using a bi-directional context.
input_ids = torch.tensor(
    tokenizer.encode("Hello, my dog is very <mask>", add_special_tokens=False)
).unsqueeze(
    0
)  # We will predict the masked token
perm_mask = torch.zeros((1, input_ids.shape[1], input_ids.shape[1]), dtype=torch.float)
perm_mask[:, :, -1] = 1.0  # Previous tokens don't see last token
target_mapping = torch.zeros(
    (1, 1, input_ids.shape[1]), dtype=torch.float
)  # Shape [1, 1, seq_length] => let's predict one token
target_mapping[
    0, 0, -1
] = 1.0  # Our first (and only) prediction will be the last token of the sequence (the masked token)

outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping)
next_token_logits = outputs[
    0
]  # Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]

# The same way can the XLNetLMHeadModel be used to be trained by standard auto-regressive language modeling.
input_ids = torch.tensor(
    tokenizer.encode("Hello, my dog is very <mask>", add_special_tokens=False)
).unsqueeze(
    0
)  # We will predict the masked token
labels = torch.tensor(tokenizer.encode("cute", add_special_tokens=False)).unsqueeze(0)
assert labels.shape[0] == 1, "only one word will be predicted"
perm_mask = torch.zeros((1, input_ids.shape[1], input_ids.shape[1]), dtype=torch.float)
perm_mask[
    :, :, -1
] = 1.0  # Previous tokens don't see last token as is done in standard auto-regressive lm training
target_mapping = torch.zeros(
    (1, 1, input_ids.shape[1]), dtype=torch.float
)  # Shape [1, 1, seq_length] => let's predict one token
target_mapping[
    0, 0, -1
] = 1.0  # Our first (and only) prediction will be the last token of the sequence (the masked token)

outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping, labels=labels)
loss = outputs.loss
next_token_logits = (
    outputs.logits
)  # Logits have shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We show how to setup inputs to predict a next token using a bi-directional context.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(
<span class="hljs-meta">... </span>    tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)
<span class="hljs-meta">... </span>).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># We will predict the masked token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = torch.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[:, :, -<span class="hljs-number">1</span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = torch.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping)
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The same way can the XLNetLMHeadModel be used to be trained by standard auto-regressive language modeling.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(
<span class="hljs-meta">... </span>    tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)
<span class="hljs-meta">... </span>).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># We will predict the masked token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;cute&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> labels.shape[<span class="hljs-number">0</span>] == <span class="hljs-number">1</span>, <span class="hljs-string">&quot;only one word will be predicted&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = torch.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[
<span class="hljs-meta">... </span>    :, :, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token as is done in standard auto-regressive lm training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = torch.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = (
<span class="hljs-meta">... </span>    outputs.logits
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Logits have shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`}}),{c(){d=a("p"),b=n("Examples:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Examples:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function hw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function uw(x){let d,b,m,h,T;return h=new ve({props:{code:`import torch
from transformers import XLNetTokenizer, XLNetForSequenceClassification

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForSequenceClassification.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),b=n("Example of single-label classification:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example of single-label classification:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function fw(x){let d,b;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLNetForSequenceClassification.from_pretrained("xlnet-base-cased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),b=!0},p:Te,i(m){b||($(d.$$.fragment,m),b=!0)},o(m){N(d.$$.fragment,m),b=!1},d(m){L(d,m)}}}function gw(x){let d,b,m,h,T;return h=new ve({props:{code:`import torch
from transformers import XLNetTokenizer, XLNetForSequenceClassification

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForSequenceClassification.from_pretrained("xlnet-base-cased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),b=n("Example of multi-label classification:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example of multi-label classification:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function _w(x){let d,b;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLNetForSequenceClassification.from_pretrained(
    "xlnet-base-cased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),b=!0},p:Te,i(m){b||($(d.$$.fragment,m),b=!0)},o(m){N(d.$$.fragment,m),b=!1},d(m){L(d,m)}}}function kw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function bw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, XLNetForMultipleChoice
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForMultipleChoice.from_pretrained("xlnet-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Tw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function vw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, XLNetForTokenClassification
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForTokenClassification.from_pretrained("xlnet-base-cased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

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
`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function yw(x){let d,b;return d=new ve({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),b=!0},p:Te,i(m){b||($(d.$$.fragment,m),b=!0)},o(m){N(d.$$.fragment,m),b=!1},d(m){L(d,m)}}}function ww(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function $w(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, XLNetForQuestionAnsweringSimple
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForQuestionAnsweringSimple.from_pretrained("xlnet-base-cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Nw(x){let d,b;return d=new ve({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),b=!0},p:Te,i(m){b||($(d.$$.fragment,m),b=!0)},o(m){N(d.$$.fragment,m),b=!1},d(m){L(d,m)}}}function Lw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function xw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, XLNetForQuestionAnswering
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForQuestionAnswering.from_pretrained("xlnet-base-cased")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])
outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Fw(x){let d,b,m,h,T,l,u,X,pe,Y,q,Z,D,ee,me,I,he,le,R,O,te,G,M,C,ne,W,de,se,H,ue,ce,z,fe,Q,K,oe,U,ae,ge,A,_e,S,ke;return{c(){d=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),T=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),X=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),q=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),he=n("model(inputs)"),le=n("."),R=c(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),ce=c(),z=a("li"),fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),K=n("model([input_ids, attention_mask])"),oe=n(" or "),U=a("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),ge=c(),A=a("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=r(k,"P",{});var F=i(d);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(k),h=r(k,"UL",{});var J=i(h);T=r(J,"LI",{});var $e=i(T);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),u=p(J),X=r(J,"LI",{});var re=i(X);pe=s(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),J.forEach(t),Y=p(k),q=r(k,"P",{});var P=i(q);Z=s(P,"This second option is useful when using "),D=r(P,"CODE",{});var ye=i(D);ee=s(ye,"tf.keras.Model.fit"),ye.forEach(t),me=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var Ne=i(I);he=s(Ne,"model(inputs)"),Ne.forEach(t),le=s(P,"."),P.forEach(t),R=p(k),O=r(k,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=p(k),M=r(k,"UL",{});var j=i(M);C=r(j,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),W=r(V,"CODE",{});var xe=i(W);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),H=r(V,"CODE",{});var we=i(H);ue=s(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),ce=p(j),z=r(j,"LI",{});var B=i(z);fe=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Fe=i(Q);K=s(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),oe=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);ae=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ge=p(j),A=r(j,"LI",{});var ie=i(A);_e=s(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ie,"CODE",{});var qe=i(S);ke=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ie.forEach(t),j.forEach(t)},m(k,F){f(k,d,F),e(d,b),f(k,m,F),f(k,h,F),e(h,T),e(T,l),e(h,u),e(h,X),e(X,pe),f(k,Y,F),f(k,q,F),e(q,Z),e(q,D),e(D,ee),e(q,me),e(q,I),e(I,he),e(q,le),f(k,R,F),f(k,O,F),e(O,te),f(k,G,F),f(k,M,F),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ue),e(M,ce),e(M,z),e(z,fe),e(z,Q),e(Q,K),e(z,oe),e(z,U),e(U,ae),e(M,ge),e(M,A),e(A,_e),e(A,S),e(S,ke)},d(k){k&&t(d),k&&t(m),k&&t(h),k&&t(Y),k&&t(q),k&&t(R),k&&t(O),k&&t(G),k&&t(M)}}}function Xw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function qw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, TFXLNetModel
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetModel.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetModel.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Mw(x){let d,b,m,h,T,l,u,X,pe,Y,q,Z,D,ee,me,I,he,le,R,O,te,G,M,C,ne,W,de,se,H,ue,ce,z,fe,Q,K,oe,U,ae,ge,A,_e,S,ke;return{c(){d=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),T=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),X=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),q=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),he=n("model(inputs)"),le=n("."),R=c(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),ce=c(),z=a("li"),fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),K=n("model([input_ids, attention_mask])"),oe=n(" or "),U=a("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),ge=c(),A=a("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=r(k,"P",{});var F=i(d);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(k),h=r(k,"UL",{});var J=i(h);T=r(J,"LI",{});var $e=i(T);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),u=p(J),X=r(J,"LI",{});var re=i(X);pe=s(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),J.forEach(t),Y=p(k),q=r(k,"P",{});var P=i(q);Z=s(P,"This second option is useful when using "),D=r(P,"CODE",{});var ye=i(D);ee=s(ye,"tf.keras.Model.fit"),ye.forEach(t),me=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var Ne=i(I);he=s(Ne,"model(inputs)"),Ne.forEach(t),le=s(P,"."),P.forEach(t),R=p(k),O=r(k,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=p(k),M=r(k,"UL",{});var j=i(M);C=r(j,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),W=r(V,"CODE",{});var xe=i(W);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),H=r(V,"CODE",{});var we=i(H);ue=s(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),ce=p(j),z=r(j,"LI",{});var B=i(z);fe=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Fe=i(Q);K=s(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),oe=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);ae=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ge=p(j),A=r(j,"LI",{});var ie=i(A);_e=s(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ie,"CODE",{});var qe=i(S);ke=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ie.forEach(t),j.forEach(t)},m(k,F){f(k,d,F),e(d,b),f(k,m,F),f(k,h,F),e(h,T),e(T,l),e(h,u),e(h,X),e(X,pe),f(k,Y,F),f(k,q,F),e(q,Z),e(q,D),e(D,ee),e(q,me),e(q,I),e(I,he),e(q,le),f(k,R,F),f(k,O,F),e(O,te),f(k,G,F),f(k,M,F),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ue),e(M,ce),e(M,z),e(z,fe),e(z,Q),e(Q,K),e(z,oe),e(z,U),e(U,ae),e(M,ge),e(M,A),e(A,_e),e(A,S),e(S,ke)},d(k){k&&t(d),k&&t(m),k&&t(h),k&&t(Y),k&&t(q),k&&t(R),k&&t(O),k&&t(G),k&&t(M)}}}function zw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function Cw(x){let d,b,m,h,T;return h=new ve({props:{code:`import tensorflow as tf
import numpy as np
from transformers import XLNetTokenizer, TFXLNetLMHeadModel

tokenizer = XLNetTokenizer.from_pretrained("xlnet-large-cased")
model = TFXLNetLMHeadModel.from_pretrained("xlnet-large-cased")

# We show how to setup inputs to predict a next token using a bi-directional context.
input_ids = tf.constant(tokenizer.encode("Hello, my dog is very <mask>", add_special_tokens=True))[
    None, :
]  # We will predict the masked token

perm_mask = np.zeros((1, input_ids.shape[1], input_ids.shape[1]))
perm_mask[:, :, -1] = 1.0  # Previous tokens don't see last token

target_mapping = np.zeros(
    (1, 1, input_ids.shape[1])
)  # Shape [1, 1, seq_length] => let's predict one token
target_mapping[
    0, 0, -1
] = 1.0  # Our first (and only) prediction will be the last token of the sequence (the masked token)

outputs = model(
    input_ids,
    perm_mask=tf.constant(perm_mask, dtype=tf.float32),
    target_mapping=tf.constant(target_mapping, dtype=tf.float32),
)

next_token_logits = outputs[
    0
]  # Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We show how to setup inputs to predict a next token using a bi-directional context.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># We will predict the masked token</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = np.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[:, :, -<span class="hljs-number">1</span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = np.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>])
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    perm_mask=tf.constant(perm_mask, dtype=tf.float32),
<span class="hljs-meta">... </span>    target_mapping=tf.constant(target_mapping, dtype=tf.float32),
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`}}),{c(){d=a("p"),b=n("Examples:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Examples:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Ew(x){let d,b,m,h,T,l,u,X,pe,Y,q,Z,D,ee,me,I,he,le,R,O,te,G,M,C,ne,W,de,se,H,ue,ce,z,fe,Q,K,oe,U,ae,ge,A,_e,S,ke;return{c(){d=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),T=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),X=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),q=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),he=n("model(inputs)"),le=n("."),R=c(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),ce=c(),z=a("li"),fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),K=n("model([input_ids, attention_mask])"),oe=n(" or "),U=a("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),ge=c(),A=a("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=r(k,"P",{});var F=i(d);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(k),h=r(k,"UL",{});var J=i(h);T=r(J,"LI",{});var $e=i(T);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),u=p(J),X=r(J,"LI",{});var re=i(X);pe=s(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),J.forEach(t),Y=p(k),q=r(k,"P",{});var P=i(q);Z=s(P,"This second option is useful when using "),D=r(P,"CODE",{});var ye=i(D);ee=s(ye,"tf.keras.Model.fit"),ye.forEach(t),me=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var Ne=i(I);he=s(Ne,"model(inputs)"),Ne.forEach(t),le=s(P,"."),P.forEach(t),R=p(k),O=r(k,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=p(k),M=r(k,"UL",{});var j=i(M);C=r(j,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),W=r(V,"CODE",{});var xe=i(W);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),H=r(V,"CODE",{});var we=i(H);ue=s(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),ce=p(j),z=r(j,"LI",{});var B=i(z);fe=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Fe=i(Q);K=s(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),oe=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);ae=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ge=p(j),A=r(j,"LI",{});var ie=i(A);_e=s(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ie,"CODE",{});var qe=i(S);ke=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ie.forEach(t),j.forEach(t)},m(k,F){f(k,d,F),e(d,b),f(k,m,F),f(k,h,F),e(h,T),e(T,l),e(h,u),e(h,X),e(X,pe),f(k,Y,F),f(k,q,F),e(q,Z),e(q,D),e(D,ee),e(q,me),e(q,I),e(I,he),e(q,le),f(k,R,F),f(k,O,F),e(O,te),f(k,G,F),f(k,M,F),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ue),e(M,ce),e(M,z),e(z,fe),e(z,Q),e(Q,K),e(z,oe),e(z,U),e(U,ae),e(M,ge),e(M,A),e(A,_e),e(A,S),e(S,ke)},d(k){k&&t(d),k&&t(m),k&&t(h),k&&t(Y),k&&t(q),k&&t(R),k&&t(O),k&&t(G),k&&t(M)}}}function jw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function Ow(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, TFXLNetForSequenceClassification
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForSequenceClassification.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Aw(x){let d,b;return d=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFXLNetForSequenceClassification.from_pretrained("xlnet-base-cased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),b=!0},p:Te,i(m){b||($(d.$$.fragment,m),b=!0)},o(m){N(d.$$.fragment,m),b=!1},d(m){L(d,m)}}}function Pw(x){let d,b,m,h,T,l,u,X,pe,Y,q,Z,D,ee,me,I,he,le,R,O,te,G,M,C,ne,W,de,se,H,ue,ce,z,fe,Q,K,oe,U,ae,ge,A,_e,S,ke;return{c(){d=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),T=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),X=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),q=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),he=n("model(inputs)"),le=n("."),R=c(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),ce=c(),z=a("li"),fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),K=n("model([input_ids, attention_mask])"),oe=n(" or "),U=a("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),ge=c(),A=a("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=r(k,"P",{});var F=i(d);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(k),h=r(k,"UL",{});var J=i(h);T=r(J,"LI",{});var $e=i(T);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),u=p(J),X=r(J,"LI",{});var re=i(X);pe=s(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),J.forEach(t),Y=p(k),q=r(k,"P",{});var P=i(q);Z=s(P,"This second option is useful when using "),D=r(P,"CODE",{});var ye=i(D);ee=s(ye,"tf.keras.Model.fit"),ye.forEach(t),me=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var Ne=i(I);he=s(Ne,"model(inputs)"),Ne.forEach(t),le=s(P,"."),P.forEach(t),R=p(k),O=r(k,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=p(k),M=r(k,"UL",{});var j=i(M);C=r(j,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),W=r(V,"CODE",{});var xe=i(W);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),H=r(V,"CODE",{});var we=i(H);ue=s(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),ce=p(j),z=r(j,"LI",{});var B=i(z);fe=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Fe=i(Q);K=s(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),oe=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);ae=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ge=p(j),A=r(j,"LI",{});var ie=i(A);_e=s(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ie,"CODE",{});var qe=i(S);ke=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ie.forEach(t),j.forEach(t)},m(k,F){f(k,d,F),e(d,b),f(k,m,F),f(k,h,F),e(h,T),e(T,l),e(h,u),e(h,X),e(X,pe),f(k,Y,F),f(k,q,F),e(q,Z),e(q,D),e(D,ee),e(q,me),e(q,I),e(I,he),e(q,le),f(k,R,F),f(k,O,F),e(O,te),f(k,G,F),f(k,M,F),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ue),e(M,ce),e(M,z),e(z,fe),e(z,Q),e(Q,K),e(z,oe),e(z,U),e(U,ae),e(M,ge),e(M,A),e(A,_e),e(A,S),e(S,ke)},d(k){k&&t(d),k&&t(m),k&&t(h),k&&t(Y),k&&t(q),k&&t(R),k&&t(O),k&&t(G),k&&t(M)}}}function Sw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function Dw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, TFXLNetForMultipleChoice
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForMultipleChoice.from_pretrained("xlnet-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Iw(x){let d,b,m,h,T,l,u,X,pe,Y,q,Z,D,ee,me,I,he,le,R,O,te,G,M,C,ne,W,de,se,H,ue,ce,z,fe,Q,K,oe,U,ae,ge,A,_e,S,ke;return{c(){d=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),T=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),X=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),q=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),he=n("model(inputs)"),le=n("."),R=c(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),ce=c(),z=a("li"),fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),K=n("model([input_ids, attention_mask])"),oe=n(" or "),U=a("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),ge=c(),A=a("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=r(k,"P",{});var F=i(d);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(k),h=r(k,"UL",{});var J=i(h);T=r(J,"LI",{});var $e=i(T);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),u=p(J),X=r(J,"LI",{});var re=i(X);pe=s(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),J.forEach(t),Y=p(k),q=r(k,"P",{});var P=i(q);Z=s(P,"This second option is useful when using "),D=r(P,"CODE",{});var ye=i(D);ee=s(ye,"tf.keras.Model.fit"),ye.forEach(t),me=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var Ne=i(I);he=s(Ne,"model(inputs)"),Ne.forEach(t),le=s(P,"."),P.forEach(t),R=p(k),O=r(k,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=p(k),M=r(k,"UL",{});var j=i(M);C=r(j,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),W=r(V,"CODE",{});var xe=i(W);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),H=r(V,"CODE",{});var we=i(H);ue=s(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),ce=p(j),z=r(j,"LI",{});var B=i(z);fe=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Fe=i(Q);K=s(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),oe=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);ae=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ge=p(j),A=r(j,"LI",{});var ie=i(A);_e=s(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ie,"CODE",{});var qe=i(S);ke=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ie.forEach(t),j.forEach(t)},m(k,F){f(k,d,F),e(d,b),f(k,m,F),f(k,h,F),e(h,T),e(T,l),e(h,u),e(h,X),e(X,pe),f(k,Y,F),f(k,q,F),e(q,Z),e(q,D),e(D,ee),e(q,me),e(q,I),e(I,he),e(q,le),f(k,R,F),f(k,O,F),e(O,te),f(k,G,F),f(k,M,F),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ue),e(M,ce),e(M,z),e(z,fe),e(z,Q),e(Q,K),e(z,oe),e(z,U),e(U,ae),e(M,ge),e(M,A),e(A,_e),e(A,S),e(S,ke)},d(k){k&&t(d),k&&t(m),k&&t(h),k&&t(Y),k&&t(q),k&&t(R),k&&t(O),k&&t(G),k&&t(M)}}}function Hw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function Qw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, TFXLNetForTokenClassification
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForTokenClassification.from_pretrained("xlnet-base-cased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

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
`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Ww(x){let d,b;return d=new ve({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),b=!0},p:Te,i(m){b||($(d.$$.fragment,m),b=!0)},o(m){N(d.$$.fragment,m),b=!1},d(m){L(d,m)}}}function Uw(x){let d,b,m,h,T,l,u,X,pe,Y,q,Z,D,ee,me,I,he,le,R,O,te,G,M,C,ne,W,de,se,H,ue,ce,z,fe,Q,K,oe,U,ae,ge,A,_e,S,ke;return{c(){d=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=a("ul"),T=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),X=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),q=a("p"),Z=n("This second option is useful when using "),D=a("code"),ee=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),he=n("model(inputs)"),le=n("."),R=c(),O=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),M=a("ul"),C=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ue=n("model(inputs_ids)"),ce=c(),z=a("li"),fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),K=n("model([input_ids, attention_mask])"),oe=n(" or "),U=a("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),ge=c(),A=a("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ke=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){d=r(k,"P",{});var F=i(d);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(k),h=r(k,"UL",{});var J=i(h);T=r(J,"LI",{});var $e=i(T);l=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),u=p(J),X=r(J,"LI",{});var re=i(X);pe=s(re,"having all inputs as a list, tuple or dict in the first positional arguments."),re.forEach(t),J.forEach(t),Y=p(k),q=r(k,"P",{});var P=i(q);Z=s(P,"This second option is useful when using "),D=r(P,"CODE",{});var ye=i(D);ee=s(ye,"tf.keras.Model.fit"),ye.forEach(t),me=s(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(P,"CODE",{});var Ne=i(I);he=s(Ne,"model(inputs)"),Ne.forEach(t),le=s(P,"."),P.forEach(t),R=p(k),O=r(k,"P",{});var Le=i(O);te=s(Le,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le.forEach(t),G=p(k),M=r(k,"UL",{});var j=i(M);C=r(j,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),W=r(V,"CODE",{});var xe=i(W);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),H=r(V,"CODE",{});var we=i(H);ue=s(we,"model(inputs_ids)"),we.forEach(t),V.forEach(t),ce=p(j),z=r(j,"LI",{});var B=i(z);fe=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var Fe=i(Q);K=s(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),oe=s(B," or "),U=r(B,"CODE",{});var Xe=i(U);ae=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),B.forEach(t),ge=p(j),A=r(j,"LI",{});var ie=i(A);_e=s(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ie,"CODE",{});var qe=i(S);ke=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ie.forEach(t),j.forEach(t)},m(k,F){f(k,d,F),e(d,b),f(k,m,F),f(k,h,F),e(h,T),e(T,l),e(h,u),e(h,X),e(X,pe),f(k,Y,F),f(k,q,F),e(q,Z),e(q,D),e(D,ee),e(q,me),e(q,I),e(I,he),e(q,le),f(k,R,F),f(k,O,F),e(O,te),f(k,G,F),f(k,M,F),e(M,C),e(C,ne),e(C,W),e(W,de),e(C,se),e(C,H),e(H,ue),e(M,ce),e(M,z),e(z,fe),e(z,Q),e(Q,K),e(z,oe),e(z,U),e(U,ae),e(M,ge),e(M,A),e(A,_e),e(A,S),e(S,ke)},d(k){k&&t(d),k&&t(m),k&&t(h),k&&t(Y),k&&t(q),k&&t(R),k&&t(O),k&&t(G),k&&t(M)}}}function Vw(x){let d,b,m,h,T;return{c(){d=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var X=i(m);h=s(X,"Module"),X.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){f(l,d,u),e(d,b),e(d,m),e(m,h),e(d,T)},d(l){l&&t(d)}}}function Bw(x){let d,b,m,h,T;return h=new ve({props:{code:`from transformers import XLNetTokenizer, TFXLNetForQuestionAnsweringSimple
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForQuestionAnsweringSimple.from_pretrained("xlnet-base-cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),b=n("Example:"),m=c(),v(h.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);b=s(u,"Example:"),u.forEach(t),m=p(l),y(h.$$.fragment,l)},m(l,u){f(l,d,u),e(d,b),f(l,m,u),w(h,l,u),T=!0},p:Te,i(l){T||($(h.$$.fragment,l),T=!0)},o(l){N(h.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(m),L(h,l)}}}function Rw(x){let d,b;return d=new ve({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(m){y(d.$$.fragment,m)},m(m,h){w(d,m,h),b=!0},p:Te,i(m){b||($(d.$$.fragment,m),b=!0)},o(m){N(d.$$.fragment,m),b=!1},d(m){L(d,m)}}}function Kw(x){let d,b,m,h,T,l,u,X,pe,Y,q,Z,D,ee,me,I,he,le,R,O,te,G,M,C,ne,W,de,se,H,ue,ce,z,fe,Q,K,oe,U,ae,ge,A,_e,S,ke,k,F,J,$e,re,P,ye,Ne,Le,j,V,xe,we,B,Fe,Xe,ie,qe,Wd,wt,sm,ts,am,rm,os,im,lm,Ud,St,Po,Qi,ns,dm,Wi,cm,Vd,ot,ss,pm,kt,mm,Fr,hm,um,Xr,fm,gm,as,_m,km,bm,Dt,Tm,qr,vm,ym,Mr,wm,$m,Nm,So,Bd,It,Do,Ui,rs,Lm,Vi,xm,Rd,Me,is,Fm,ls,Xm,ds,qm,Mm,zm,cs,Cm,zr,Em,jm,Om,$t,ps,Am,Bi,Pm,Sm,ms,Cr,Dm,Ri,Im,Hm,Er,Qm,Ki,Wm,Um,Io,hs,Vm,us,Bm,Yi,Rm,Km,Ym,nt,fs,Gm,Gi,Jm,Zm,Ho,eh,Ht,th,Ji,oh,nh,Zi,sh,ah,rh,jr,gs,Kd,Qt,Qo,el,_s,ih,tl,lh,Yd,Ie,ks,dh,Wt,ch,ol,ph,mh,bs,hh,uh,fh,Ts,gh,Or,_h,kh,bh,Nt,vs,Th,nl,vh,yh,ys,Ar,wh,sl,$h,Nh,Pr,Lh,al,xh,Fh,st,ws,Xh,rl,qh,Mh,Wo,zh,Ut,Ch,il,Eh,jh,ll,Oh,Ah,Gd,Vt,Uo,dl,$s,Ph,cl,Sh,Jd,Bt,Ns,Dh,Ls,Ih,Sr,Hh,Qh,Zd,Rt,xs,Wh,Fs,Uh,Dr,Vh,Bh,ec,Kt,Xs,Rh,qs,Kh,Ir,Yh,Gh,tc,Yt,Ms,Jh,zs,Zh,Hr,eu,tu,oc,Gt,Cs,ou,Es,nu,pl,su,au,nc,Jt,js,ru,Os,iu,Qr,lu,du,sc,Zt,As,cu,Ps,pu,Wr,mu,hu,ac,eo,Ss,uu,Ds,fu,Ur,gu,_u,rc,to,Is,ku,Hs,bu,Vr,Tu,vu,ic,oo,Qs,yu,Ws,wu,Br,$u,Nu,lc,no,Us,Lu,Vs,xu,Rr,Fu,Xu,dc,so,Bs,qu,Rs,Mu,ml,zu,Cu,cc,ao,Ks,Eu,Ys,ju,Kr,Ou,Au,pc,ro,Vo,hl,Gs,Pu,ul,Su,mc,He,Js,Du,fl,Iu,Hu,Zs,Qu,Yr,Wu,Uu,Vu,ea,Bu,ta,Ru,Ku,Yu,at,oa,Gu,io,Ju,Gr,Zu,ef,gl,tf,of,nf,Bo,sf,Ro,hc,lo,Ko,_l,na,af,kl,rf,uc,Qe,sa,lf,bl,df,cf,aa,pf,Jr,mf,hf,uf,ra,ff,ia,gf,_f,kf,rt,la,bf,co,Tf,Zr,vf,yf,Tl,wf,$f,Nf,Yo,Lf,Go,fc,po,Jo,vl,da,xf,yl,Ff,gc,We,ca,Xf,wl,qf,Mf,pa,zf,ei,Cf,Ef,jf,ma,Of,ha,Af,Pf,Sf,Ee,ua,Df,mo,If,ti,Hf,Qf,$l,Wf,Uf,Vf,Zo,Bf,en,Rf,tn,Kf,on,Yf,nn,_c,ho,sn,Nl,fa,Gf,Ll,Jf,kc,Ue,ga,Zf,xl,eg,tg,_a,og,oi,ng,sg,ag,ka,rg,ba,ig,lg,dg,it,Ta,cg,uo,pg,ni,mg,hg,Fl,ug,fg,gg,an,_g,rn,bc,fo,ln,Xl,va,kg,ql,bg,Tc,Ve,ya,Tg,Ml,vg,yg,wa,wg,si,$g,Ng,Lg,$a,xg,Na,Fg,Xg,qg,Ke,La,Mg,go,zg,ai,Cg,Eg,zl,jg,Og,Ag,dn,Pg,cn,Sg,pn,vc,_o,mn,Cl,xa,Dg,El,Ig,yc,Be,Fa,Hg,ko,Qg,jl,Wg,Ug,Ol,Vg,Bg,Rg,Xa,Kg,ri,Yg,Gg,Jg,qa,Zg,Ma,e_,t_,o_,Ye,za,n_,bo,s_,ii,a_,r_,Al,i_,l_,d_,hn,c_,un,p_,fn,wc,To,gn,Pl,Ca,m_,Sl,h_,$c,Re,Ea,u_,vo,f_,Dl,g_,__,Il,k_,b_,T_,ja,v_,li,y_,w_,$_,Oa,N_,Aa,L_,x_,F_,lt,Pa,X_,yo,q_,di,M_,z_,Hl,C_,E_,j_,_n,O_,kn,Nc,wo,bn,Ql,Sa,A_,Wl,P_,Lc,je,Da,S_,Ul,D_,I_,Ia,H_,ci,Q_,W_,U_,Ha,V_,Qa,B_,R_,K_,Tn,Y_,dt,Wa,G_,$o,J_,pi,Z_,ek,Vl,tk,ok,nk,vn,sk,yn,xc,No,wn,Bl,Ua,ak,Rl,rk,Fc,Oe,Va,ik,Kl,lk,dk,Ba,ck,mi,pk,mk,hk,Ra,uk,Ka,fk,gk,_k,$n,kk,ct,Ya,bk,Lo,Tk,hi,vk,yk,Yl,wk,$k,Nk,Nn,Lk,Ln,Xc,xo,xn,Gl,Ga,xk,Jl,Fk,qc,Ae,Ja,Xk,Zl,qk,Mk,Za,zk,ui,Ck,Ek,jk,er,Ok,tr,Ak,Pk,Sk,Fn,Dk,Ge,or,Ik,Fo,Hk,fi,Qk,Wk,ed,Uk,Vk,Bk,Xn,Rk,qn,Kk,Mn,Mc,Xo,zn,td,nr,Yk,od,Gk,zc,Pe,sr,Jk,nd,Zk,eb,ar,tb,gi,ob,nb,sb,rr,ab,ir,rb,ib,lb,Cn,db,pt,lr,cb,qo,pb,_i,mb,hb,sd,ub,fb,gb,En,_b,jn,Cc,Mo,On,ad,dr,kb,rd,bb,Ec,Se,cr,Tb,id,vb,yb,pr,wb,ki,$b,Nb,Lb,mr,xb,hr,Fb,Xb,qb,An,Mb,Je,ur,zb,zo,Cb,bi,Eb,jb,ld,Ob,Ab,Pb,Pn,Sb,Sn,Db,Dn,jc,Co,In,dd,fr,Ib,cd,Hb,Oc,De,gr,Qb,Eo,Wb,pd,Ub,Vb,md,Bb,Rb,Kb,_r,Yb,Ti,Gb,Jb,Zb,kr,eT,br,tT,oT,nT,Hn,sT,Ze,Tr,aT,jo,rT,vi,iT,lT,hd,dT,cT,pT,Qn,mT,Wn,hT,Un,Ac;return l=new Ce({}),ee=new Ce({}),ns=new Ce({}),ss=new E({props:{name:"class transformers.XLNetConfig",anchor:"transformers.XLNetConfig",parameters:[{name:"vocab_size",val:" = 32000"},{name:"d_model",val:" = 1024"},{name:"n_layer",val:" = 24"},{name:"n_head",val:" = 16"},{name:"d_inner",val:" = 4096"},{name:"ff_activation",val:" = 'gelu'"},{name:"untie_r",val:" = True"},{name:"attn_type",val:" = 'bi'"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"dropout",val:" = 0.1"},{name:"mem_len",val:" = 512"},{name:"reuse_len",val:" = None"},{name:"use_mems_eval",val:" = True"},{name:"use_mems_train",val:" = False"},{name:"bi_data",val:" = False"},{name:"clamp_len",val:" = -1"},{name:"same_length",val:" = False"},{name:"summary_type",val:" = 'last'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'tanh'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"pad_token_id",val:" = 5"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32000) &#x2014;
Vocabulary size of the XLNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetModel">XLNetModel</a> or <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetModel">TFXLNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLNetConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.XLNetConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.XLNetConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.XLNetConfig.d_inner",description:`<strong>d_inner</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"d_inner"},{anchor:"transformers.XLNetConfig.ff_activation",description:`<strong>ff_activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and
<code>&quot;gelu_new&quot;</code> are supported.`,name:"ff_activation"},{anchor:"transformers.XLNetConfig.untie_r",description:`<strong>untie_r</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to untie relative position biases`,name:"untie_r"},{anchor:"transformers.XLNetConfig.attn_type",description:`<strong>attn_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bi&quot;</code>) &#x2014;
The attention type used by the model. Set <code>&quot;bi&quot;</code> for XLNet, <code>&quot;uni&quot;</code> for Transformer-XL.`,name:"attn_type"},{anchor:"transformers.XLNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLNetConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLNetConfig.mem_len",description:`<strong>mem_len</strong> (<code>int</code> or <code>None</code>, <em>optional</em>) &#x2014;
The number of tokens to cache. The key/value pairs that have already been pre-computed in a previous
forward pass won&#x2019;t be re-computed. See the
<a href="https://huggingface.co/transformers/quickstart.html#using-the-past" rel="nofollow">quickstart</a> for more information.`,name:"mem_len"},{anchor:"transformers.XLNetConfig.reuse_len",description:`<strong>reuse_len</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of tokens in the current batch to be cached and reused in the future.`,name:"reuse_len"},{anchor:"transformers.XLNetConfig.bi_data",description:`<strong>bi_data</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use bidirectional input pipeline. Usually set to <code>True</code> during pretraining and <code>False</code>
during finetuning.`,name:"bi_data"},{anchor:"transformers.XLNetConfig.clamp_len",description:`<strong>clamp_len</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
Clamp all relative distances larger than clamp_len. Setting this attribute to -1 means no clamping.`,name:"clamp_len"},{anchor:"transformers.XLNetConfig.same_length",description:`<strong>same_length</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the same attention length for each token.`,name:"same_length"},{anchor:"transformers.XLNetConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;last&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.XLNetConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.XLNetConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.XLNetConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>boo</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.XLNetConfig.summary_last_dropout",description:`<strong>summary_last_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_last_dropout"},{anchor:"transformers.XLNetConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.XLNetConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.XLNetConfig.use_mems_eval",description:`<strong>use_mems_eval</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should make use of the recurrent memory mechanism in evaluation mode.`,name:"use_mems_eval"},{anchor:"transformers.XLNetConfig.use_mems_train",description:`<strong>use_mems_train</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should make use of the recurrent memory mechanism in train mode.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For pretraining, it is recommended to set <code>use_mems_train</code> to <code>True</code>. For fine-tuning, it is recommended to
set <code>use_mems_train</code> to <code>False</code> as discussed
<a href="https://github.com/zihangdai/xlnet/issues/41#issuecomment-505102587" rel="nofollow">here</a>. If <code>use_mems_train</code> is set to
<code>True</code>, one has to make sure that the train batches are correctly pre-processed, <em>e.g.</em> <code>batch_1 = [[This line is], [This is the]]</code> and <code>batch_2 = [[ the first line], [ second line]]</code> and that all batches are of
equal size.</p>

					</div>`,name:"use_mems_train"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/configuration_xlnet.py#L32"}}),So=new be({props:{anchor:"transformers.XLNetConfig.example",$$slots:{default:[rw]},$$scope:{ctx:x}}}),rs=new Ce({}),is=new E({props:{name:"class transformers.XLNetTokenizer",anchor:"transformers.XLNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.XLNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.XLNetTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.XLNetTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.XLNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLNetTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet.py#L53"}}),ps=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet.py#L253",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.XLNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet.py#L278",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet.py#L306",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ho=new be({props:{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[iw]},$$scope:{ctx:x}}}),gs=new E({props:{name:"save_vocabulary",anchor:"transformers.XLNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet.py#L336"}}),_s=new Ce({}),ks=new E({props:{name:"class transformers.XLNetTokenizerFast",anchor:"transformers.XLNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.XLNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.XLNetTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.XLNetTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.XLNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLNetTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLNetTokenizerFast.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L63"}}),vs=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L174",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ws=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wo=new be({props:{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[lw]},$$scope:{ctx:x}}}),$s=new Ce({}),Ns=new E({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"last_hidden_state"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L580"}}),xs=new E({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss (for next-token prediction).`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L614"}}),Xs=new E({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L651"}}),Ms=new E({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L719"}}),Cs=new E({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L685"}}),js=new E({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L755"}}),As=new E({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"end_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"cls_logits",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.start_top_log_probs",description:`<strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_log_probs"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.start_top_index",description:`<strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_index"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.end_top_log_probs",description:`<strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).`,name:"end_top_log_probs"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.end_top_index",description:`<strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).`,name:"end_top_index"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.cls_logits",description:`<strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the <code>is_impossible</code> label of the answers.`,name:"cls_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L792"}}),Ss=new E({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"last_hidden_state"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L800"}}),Is=new E({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss (for next-token prediction).`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L834"}}),Qs=new E({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L871"}}),Us=new E({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L939"}}),Bs=new E({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L905"}}),Ks=new E({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L975"}}),Gs=new Ce({}),Js=new E({props:{name:"class transformers.XLNetModel",anchor:"transformers.XLNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L932"}}),oa=new E({props:{name:"forward",anchor:"transformers.XLNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetModel.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetModel.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetModel.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1061",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) \u2014 Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bo=new ze({props:{$$slots:{default:[dw]},$$scope:{ctx:x}}}),Ro=new be({props:{anchor:"transformers.XLNetModel.forward.example",$$slots:{default:[cw]},$$scope:{ctx:x}}}),na=new Ce({}),sa=new E({props:{name:"class transformers.XLNetLMHeadModel",anchor:"transformers.XLNetLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1298"}}),la=new E({props:{name:"forward",anchor:"transformers.XLNetLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetLMHeadModel.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetLMHeadModel.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_predict)</code>, <em>optional</em>) &#x2014;
Labels for masked language modeling. <code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If
<code>target_mapping</code> is <code>None</code>, then <code>num_predict</code> corresponds to <code>sequence_length</code>.</p>
<p>The labels should correspond to the masked input words that should be predicted and depends on
<code>target_mapping</code>. Note in order to perform standard auto-regressive language modeling a <em><mask></mask></em> token has
to be added to the <code>input_ids</code> (see the <code>prepare_inputs_for_generation</code> function and examples below)</p>
<p>Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are ignored, the loss
is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1358",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new ze({props:{$$slots:{default:[pw]},$$scope:{ctx:x}}}),Go=new be({props:{anchor:"transformers.XLNetLMHeadModel.forward.example",$$slots:{default:[mw]},$$scope:{ctx:x}}}),da=new Ce({}),ca=new E({props:{name:"class transformers.XLNetForSequenceClassification",anchor:"transformers.XLNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1502"}}),ua=new E({props:{name:"forward",anchor:"transformers.XLNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForSequenceClassification.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForSequenceClassification.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1515",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new ze({props:{$$slots:{default:[hw]},$$scope:{ctx:x}}}),en=new be({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example",$$slots:{default:[uw]},$$scope:{ctx:x}}}),tn=new be({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-2",$$slots:{default:[fw]},$$scope:{ctx:x}}}),on=new be({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-3",$$slots:{default:[gw]},$$scope:{ctx:x}}}),nn=new be({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-4",$$slots:{default:[_w]},$$scope:{ctx:x}}}),fa=new Ce({}),ga=new E({props:{name:"class transformers.XLNetForMultipleChoice",anchor:"transformers.XLNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1700"}}),Ta=new E({props:{name:"forward",anchor:"transformers.XLNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForMultipleChoice.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForMultipleChoice.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, num_choices, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1711",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new ze({props:{$$slots:{default:[kw]},$$scope:{ctx:x}}}),rn=new be({props:{anchor:"transformers.XLNetForMultipleChoice.forward.example",$$slots:{default:[bw]},$$scope:{ctx:x}}}),va=new Ce({}),ya=new E({props:{name:"class transformers.XLNetForTokenClassification",anchor:"transformers.XLNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1612"}}),La=new E({props:{name:"forward",anchor:"transformers.XLNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForTokenClassification.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForTokenClassification.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1623",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new ze({props:{$$slots:{default:[Tw]},$$scope:{ctx:x}}}),cn=new be({props:{anchor:"transformers.XLNetForTokenClassification.forward.example",$$slots:{default:[vw]},$$scope:{ctx:x}}}),pn=new be({props:{anchor:"transformers.XLNetForTokenClassification.forward.example-2",$$slots:{default:[yw]},$$scope:{ctx:x}}}),xa=new Ce({}),Fa=new E({props:{name:"class transformers.XLNetForQuestionAnsweringSimple",anchor:"transformers.XLNetForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1804"}}),za=new E({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new ze({props:{$$slots:{default:[ww]},$$scope:{ctx:x}}}),un=new be({props:{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.example",$$slots:{default:[$w]},$$scope:{ctx:x}}}),fn=new be({props:{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[Nw]},$$scope:{ctx:x}}}),Ca=new Ce({}),Ea=new E({props:{name:"class transformers.XLNetForQuestionAnswering",anchor:"transformers.XLNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1915"}}),Pa=new E({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForQuestionAnswering.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForQuestionAnswering.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.XLNetForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.XLNetForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Optional mask of tokens which can&#x2019;t be in answers (e.g. [CLS], [PAD], &#x2026;). 1.0 means token should be
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_xlnet.py#L1929",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
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
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new ze({props:{$$slots:{default:[Lw]},$$scope:{ctx:x}}}),kn=new be({props:{anchor:"transformers.XLNetForQuestionAnswering.forward.example",$$slots:{default:[xw]},$$scope:{ctx:x}}}),Sa=new Ce({}),Da=new E({props:{name:"class transformers.TFXLNetModel",anchor:"transformers.TFXLNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1125"}}),Tn=new ze({props:{$$slots:{default:[Fw]},$$scope:{ctx:x}}}),Wa=new E({props:{name:"call",anchor:"transformers.TFXLNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"mems",val:" = None"},{name:"perm_mask",val:" = None"},{name:"target_mapping",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"input_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_mems",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetModel.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetModel.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetModel.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetModel.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1130",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) \u2014 Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vn=new ze({props:{$$slots:{default:[Xw]},$$scope:{ctx:x}}}),yn=new be({props:{anchor:"transformers.TFXLNetModel.call.example",$$slots:{default:[qw]},$$scope:{ctx:x}}}),Ua=new Ce({}),Va=new E({props:{name:"class transformers.TFXLNetLMHeadModel",anchor:"transformers.TFXLNetLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1190"}}),$n=new ze({props:{$$slots:{default:[Mw]},$$scope:{ctx:x}}}),Ya=new E({props:{name:"call",anchor:"transformers.TFXLNetLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetLMHeadModel.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetLMHeadModel.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1243",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nn=new ze({props:{$$slots:{default:[zw]},$$scope:{ctx:x}}}),Ln=new be({props:{anchor:"transformers.TFXLNetLMHeadModel.call.example",$$slots:{default:[Cw]},$$scope:{ctx:x}}}),Ga=new Ce({}),Ja=new E({props:{name:"class transformers.TFXLNetForSequenceClassification",anchor:"transformers.TFXLNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1356"}}),Fn=new ze({props:{$$slots:{default:[Ew]},$$scope:{ctx:x}}}),or=new E({props:{name:"call",anchor:"transformers.TFXLNetForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForSequenceClassification.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForSequenceClassification.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1369",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xn=new ze({props:{$$slots:{default:[jw]},$$scope:{ctx:x}}}),qn=new be({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example",$$slots:{default:[Ow]},$$scope:{ctx:x}}}),Mn=new be({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example-2",$$slots:{default:[Aw]},$$scope:{ctx:x}}}),nr=new Ce({}),sr=new E({props:{name:"class transformers.TFXLNetForMultipleChoice",anchor:"transformers.TFXLNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1453"}}),Cn=new ze({props:{$$slots:{default:[Pw]},$$scope:{ctx:x}}}),lr=new E({props:{name:"call",anchor:"transformers.TFXLNetForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForMultipleChoice.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForMultipleChoice.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, num_choices, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1475",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),En=new ze({props:{$$slots:{default:[Sw]},$$scope:{ctx:x}}}),jn=new be({props:{anchor:"transformers.TFXLNetForMultipleChoice.call.example",$$slots:{default:[Dw]},$$scope:{ctx:x}}}),dr=new Ce({}),cr=new E({props:{name:"class transformers.TFXLNetForTokenClassification",anchor:"transformers.TFXLNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1586"}}),An=new ze({props:{$$slots:{default:[Iw]},$$scope:{ctx:x}}}),ur=new E({props:{name:"call",anchor:"transformers.TFXLNetForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForTokenClassification.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForTokenClassification.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1596",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new ze({props:{$$slots:{default:[Hw]},$$scope:{ctx:x}}}),Sn=new be({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example",$$slots:{default:[Qw]},$$scope:{ctx:x}}}),Dn=new be({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example-2",$$slots:{default:[Ww]},$$scope:{ctx:x}}}),fr=new Ce({}),gr=new E({props:{name:"class transformers.TFXLNetForQuestionAnsweringSimple",anchor:"transformers.TFXLNetForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1674"}}),Hn=new ze({props:{$$slots:{default:[Uw]},$$scope:{ctx:x}}}),Tr=new E({props:{name:"call",anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/pr_17623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17623/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17623/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17623/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1682",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new ze({props:{$$slots:{default:[Vw]},$$scope:{ctx:x}}}),Wn=new be({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example",$$slots:{default:[Bw]},$$scope:{ctx:x}}}),Un=new be({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Rw]},$$scope:{ctx:x}}}),{c(){d=a("meta"),b=c(),m=a("h1"),h=a("a"),T=a("span"),v(l.$$.fragment),u=c(),X=a("span"),pe=n("XLNet"),Y=c(),q=a("h2"),Z=a("a"),D=a("span"),v(ee.$$.fragment),me=c(),I=a("span"),he=n("Overview"),le=c(),R=a("p"),O=n("The XLNet model was proposed in "),te=a("a"),G=n("XLNet: Generalized Autoregressive Pretraining for Language Understanding"),M=n(` by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov,
Quoc V. Le. XLnet is an extension of the Transformer-XL model pre-trained using an autoregressive method to learn
bidirectional contexts by maximizing the expected likelihood over all permutations of the input sequence factorization
order.`),C=c(),ne=a("p"),W=n("The abstract from the paper is the following:"),de=c(),se=a("p"),H=a("em"),ue=n(`With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves
better performance than pretraining approaches based on autoregressive language modeling. However, relying on
corrupting the input with masks, BERT neglects dependency between the masked positions and suffers from a
pretrain-finetune discrepancy. In light of these pros and cons, we propose XLNet, a generalized autoregressive
pretraining method that (1) enables learning bidirectional contexts by maximizing the expected likelihood over all
permutations of the factorization order and (2) overcomes the limitations of BERT thanks to its autoregressive
formulation. Furthermore, XLNet integrates ideas from Transformer-XL, the state-of-the-art autoregressive model, into
pretraining. Empirically, under comparable experiment settings, XLNet outperforms BERT on 20 tasks, often by a large
margin, including question answering, natural language inference, sentiment analysis, and document ranking.`),ce=c(),z=a("p"),fe=n("Tips:"),Q=c(),K=a("ul"),oe=a("li"),U=n("The specific attention pattern can be controlled at training and test time using the "),ae=a("code"),ge=n("perm_mask"),A=n(" input."),_e=c(),S=a("li"),ke=n(`Due to the difficulty of training a fully auto-regressive model over various factorization order, XLNet is pretrained
using only a sub-set of the output tokens as target which are selected with the `),k=a("code"),F=n("target_mapping"),J=n(" input."),$e=c(),re=a("li"),P=n("To use XLNet for sequential decoding (i.e. not in fully bi-directional setting), use the "),ye=a("code"),Ne=n("perm_mask"),Le=n(` and
`),j=a("code"),V=n("target_mapping"),xe=n(` inputs to control the attention span and outputs (see examples in
`),we=a("em"),B=n("examples/pytorch/text-generation/run_generation.py"),Fe=n(")"),Xe=c(),ie=a("li"),qe=n("XLNet is one of the few models that has no sequence length limit."),Wd=c(),wt=a("p"),sm=n("This model was contributed by "),ts=a("a"),am=n("thomwolf"),rm=n(". The original code can be found "),os=a("a"),im=n("here"),lm=n("."),Ud=c(),St=a("h2"),Po=a("a"),Qi=a("span"),v(ns.$$.fragment),dm=c(),Wi=a("span"),cm=n("XLNetConfig"),Vd=c(),ot=a("div"),v(ss.$$.fragment),pm=c(),kt=a("p"),mm=n("This is the configuration class to store the configuration of a "),Fr=a("a"),hm=n("XLNetModel"),um=n(" or a "),Xr=a("a"),fm=n("TFXLNetModel"),gm=n(`. It is used to
instantiate a XLNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),as=a("a"),_m=n("xlnet-large-cased"),km=n(" architecture."),bm=c(),Dt=a("p"),Tm=n("Configuration objects inherit from "),qr=a("a"),vm=n("PretrainedConfig"),ym=n(` and can be used to control the model outputs. Read the
documentation from `),Mr=a("a"),wm=n("PretrainedConfig"),$m=n(" for more information."),Nm=c(),v(So.$$.fragment),Bd=c(),It=a("h2"),Do=a("a"),Ui=a("span"),v(rs.$$.fragment),Lm=c(),Vi=a("span"),xm=n("XLNetTokenizer"),Rd=c(),Me=a("div"),v(is.$$.fragment),Fm=c(),ls=a("p"),Xm=n("Construct an XLNet tokenizer. Based on "),ds=a("a"),qm=n("SentencePiece"),Mm=n("."),zm=c(),cs=a("p"),Cm=n("This tokenizer inherits from "),zr=a("a"),Em=n("PreTrainedTokenizer"),jm=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Om=c(),$t=a("div"),v(ps.$$.fragment),Am=c(),Bi=a("p"),Pm=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),Sm=c(),ms=a("ul"),Cr=a("li"),Dm=n("single sequence: "),Ri=a("code"),Im=n("X <sep> <cls>"),Hm=c(),Er=a("li"),Qm=n("pair of sequences: "),Ki=a("code"),Wm=n("A <sep> B <sep> <cls>"),Um=c(),Io=a("div"),v(hs.$$.fragment),Vm=c(),us=a("p"),Bm=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Yi=a("code"),Rm=n("prepare_for_model"),Km=n(" method."),Ym=c(),nt=a("div"),v(fs.$$.fragment),Gm=c(),Gi=a("p"),Jm=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),Zm=c(),v(Ho.$$.fragment),eh=c(),Ht=a("p"),th=n("If "),Ji=a("code"),oh=n("token_ids_1"),nh=n(" is "),Zi=a("code"),sh=n("None"),ah=n(", this method only returns the first portion of the mask (0s)."),rh=c(),jr=a("div"),v(gs.$$.fragment),Kd=c(),Qt=a("h2"),Qo=a("a"),el=a("span"),v(_s.$$.fragment),ih=c(),tl=a("span"),lh=n("XLNetTokenizerFast"),Yd=c(),Ie=a("div"),v(ks.$$.fragment),dh=c(),Wt=a("p"),ch=n("Construct a \u201Cfast\u201D XLNet tokenizer (backed by HuggingFace\u2019s "),ol=a("em"),ph=n("tokenizers"),mh=n(` library). Based on
`),bs=a("a"),hh=n("Unigram"),uh=n("."),fh=c(),Ts=a("p"),gh=n("This tokenizer inherits from "),Or=a("a"),_h=n("PreTrainedTokenizerFast"),kh=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),bh=c(),Nt=a("div"),v(vs.$$.fragment),Th=c(),nl=a("p"),vh=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),yh=c(),ys=a("ul"),Ar=a("li"),wh=n("single sequence: "),sl=a("code"),$h=n("X <sep> <cls>"),Nh=c(),Pr=a("li"),Lh=n("pair of sequences: "),al=a("code"),xh=n("A <sep> B <sep> <cls>"),Fh=c(),st=a("div"),v(ws.$$.fragment),Xh=c(),rl=a("p"),qh=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),Mh=c(),v(Wo.$$.fragment),zh=c(),Ut=a("p"),Ch=n("If "),il=a("code"),Eh=n("token_ids_1"),jh=n(" is "),ll=a("code"),Oh=n("None"),Ah=n(", this method only returns the first portion of the mask (0s)."),Gd=c(),Vt=a("h2"),Uo=a("a"),dl=a("span"),v($s.$$.fragment),Ph=c(),cl=a("span"),Sh=n("XLNet specific outputs"),Jd=c(),Bt=a("div"),v(Ns.$$.fragment),Dh=c(),Ls=a("p"),Ih=n("Output type of "),Sr=a("a"),Hh=n("XLNetModel"),Qh=n("."),Zd=c(),Rt=a("div"),v(xs.$$.fragment),Wh=c(),Fs=a("p"),Uh=n("Output type of "),Dr=a("a"),Vh=n("XLNetLMHeadModel"),Bh=n("."),ec=c(),Kt=a("div"),v(Xs.$$.fragment),Rh=c(),qs=a("p"),Kh=n("Output type of "),Ir=a("a"),Yh=n("XLNetForSequenceClassification"),Gh=n("."),tc=c(),Yt=a("div"),v(Ms.$$.fragment),Jh=c(),zs=a("p"),Zh=n("Output type of "),Hr=a("a"),eu=n("XLNetForMultipleChoice"),tu=n("."),oc=c(),Gt=a("div"),v(Cs.$$.fragment),ou=c(),Es=a("p"),nu=n("Output type of "),pl=a("code"),su=n("XLNetForTokenClassificationOutput"),au=n("."),nc=c(),Jt=a("div"),v(js.$$.fragment),ru=c(),Os=a("p"),iu=n("Output type of "),Qr=a("a"),lu=n("XLNetForQuestionAnsweringSimple"),du=n("."),sc=c(),Zt=a("div"),v(As.$$.fragment),cu=c(),Ps=a("p"),pu=n("Output type of "),Wr=a("a"),mu=n("XLNetForQuestionAnswering"),hu=n("."),ac=c(),eo=a("div"),v(Ss.$$.fragment),uu=c(),Ds=a("p"),fu=n("Output type of "),Ur=a("a"),gu=n("TFXLNetModel"),_u=n("."),rc=c(),to=a("div"),v(Is.$$.fragment),ku=c(),Hs=a("p"),bu=n("Output type of "),Vr=a("a"),Tu=n("TFXLNetLMHeadModel"),vu=n("."),ic=c(),oo=a("div"),v(Qs.$$.fragment),yu=c(),Ws=a("p"),wu=n("Output type of "),Br=a("a"),$u=n("TFXLNetForSequenceClassification"),Nu=n("."),lc=c(),no=a("div"),v(Us.$$.fragment),Lu=c(),Vs=a("p"),xu=n("Output type of "),Rr=a("a"),Fu=n("TFXLNetForMultipleChoice"),Xu=n("."),dc=c(),so=a("div"),v(Bs.$$.fragment),qu=c(),Rs=a("p"),Mu=n("Output type of "),ml=a("code"),zu=n("TFXLNetForTokenClassificationOutput"),Cu=n("."),cc=c(),ao=a("div"),v(Ks.$$.fragment),Eu=c(),Ys=a("p"),ju=n("Output type of "),Kr=a("a"),Ou=n("TFXLNetForQuestionAnsweringSimple"),Au=n("."),pc=c(),ro=a("h2"),Vo=a("a"),hl=a("span"),v(Gs.$$.fragment),Pu=c(),ul=a("span"),Su=n("XLNetModel"),mc=c(),He=a("div"),v(Js.$$.fragment),Du=c(),fl=a("p"),Iu=n("The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),Hu=c(),Zs=a("p"),Qu=n("This model inherits from "),Yr=a("a"),Wu=n("PreTrainedModel"),Uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu=c(),ea=a("p"),Bu=n("This model is also a PyTorch "),ta=a("a"),Ru=n("torch.nn.Module"),Ku=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yu=c(),at=a("div"),v(oa.$$.fragment),Gu=c(),io=a("p"),Ju=n("The "),Gr=a("a"),Zu=n("XLNetModel"),ef=n(" forward method, overrides the "),gl=a("code"),tf=n("__call__"),of=n(" special method."),nf=c(),v(Bo.$$.fragment),sf=c(),v(Ro.$$.fragment),hc=c(),lo=a("h2"),Ko=a("a"),_l=a("span"),v(na.$$.fragment),af=c(),kl=a("span"),rf=n("XLNetLMHeadModel"),uc=c(),Qe=a("div"),v(sa.$$.fragment),lf=c(),bl=a("p"),df=n("XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),cf=c(),aa=a("p"),pf=n("This model inherits from "),Jr=a("a"),mf=n("PreTrainedModel"),hf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uf=c(),ra=a("p"),ff=n("This model is also a PyTorch "),ia=a("a"),gf=n("torch.nn.Module"),_f=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kf=c(),rt=a("div"),v(la.$$.fragment),bf=c(),co=a("p"),Tf=n("The "),Zr=a("a"),vf=n("XLNetLMHeadModel"),yf=n(" forward method, overrides the "),Tl=a("code"),wf=n("__call__"),$f=n(" special method."),Nf=c(),v(Yo.$$.fragment),Lf=c(),v(Go.$$.fragment),fc=c(),po=a("h2"),Jo=a("a"),vl=a("span"),v(da.$$.fragment),xf=c(),yl=a("span"),Ff=n("XLNetForSequenceClassification"),gc=c(),We=a("div"),v(ca.$$.fragment),Xf=c(),wl=a("p"),qf=n(`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Mf=c(),pa=a("p"),zf=n("This model inherits from "),ei=a("a"),Cf=n("PreTrainedModel"),Ef=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf=c(),ma=a("p"),Of=n("This model is also a PyTorch "),ha=a("a"),Af=n("torch.nn.Module"),Pf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sf=c(),Ee=a("div"),v(ua.$$.fragment),Df=c(),mo=a("p"),If=n("The "),ti=a("a"),Hf=n("XLNetForSequenceClassification"),Qf=n(" forward method, overrides the "),$l=a("code"),Wf=n("__call__"),Uf=n(" special method."),Vf=c(),v(Zo.$$.fragment),Bf=c(),v(en.$$.fragment),Rf=c(),v(tn.$$.fragment),Kf=c(),v(on.$$.fragment),Yf=c(),v(nn.$$.fragment),_c=c(),ho=a("h2"),sn=a("a"),Nl=a("span"),v(fa.$$.fragment),Gf=c(),Ll=a("span"),Jf=n("XLNetForMultipleChoice"),kc=c(),Ue=a("div"),v(ga.$$.fragment),Zf=c(),xl=a("p"),eg=n(`XLNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RACE/SWAG tasks.`),tg=c(),_a=a("p"),og=n("This model inherits from "),oi=a("a"),ng=n("PreTrainedModel"),sg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag=c(),ka=a("p"),rg=n("This model is also a PyTorch "),ba=a("a"),ig=n("torch.nn.Module"),lg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dg=c(),it=a("div"),v(Ta.$$.fragment),cg=c(),uo=a("p"),pg=n("The "),ni=a("a"),mg=n("XLNetForMultipleChoice"),hg=n(" forward method, overrides the "),Fl=a("code"),ug=n("__call__"),fg=n(" special method."),gg=c(),v(an.$$.fragment),_g=c(),v(rn.$$.fragment),bc=c(),fo=a("h2"),ln=a("a"),Xl=a("span"),v(va.$$.fragment),kg=c(),ql=a("span"),bg=n("XLNetForTokenClassification"),Tc=c(),Ve=a("div"),v(ya.$$.fragment),Tg=c(),Ml=a("p"),vg=n(`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yg=c(),wa=a("p"),wg=n("This model inherits from "),si=a("a"),$g=n("PreTrainedModel"),Ng=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=c(),$a=a("p"),xg=n("This model is also a PyTorch "),Na=a("a"),Fg=n("torch.nn.Module"),Xg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qg=c(),Ke=a("div"),v(La.$$.fragment),Mg=c(),go=a("p"),zg=n("The "),ai=a("a"),Cg=n("XLNetForTokenClassification"),Eg=n(" forward method, overrides the "),zl=a("code"),jg=n("__call__"),Og=n(" special method."),Ag=c(),v(dn.$$.fragment),Pg=c(),v(cn.$$.fragment),Sg=c(),v(pn.$$.fragment),vc=c(),_o=a("h2"),mn=a("a"),Cl=a("span"),v(xa.$$.fragment),Dg=c(),El=a("span"),Ig=n("XLNetForQuestionAnsweringSimple"),yc=c(),Be=a("div"),v(Fa.$$.fragment),Hg=c(),ko=a("p"),Qg=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),jl=a("code"),Wg=n("span start logits"),Ug=n(" and "),Ol=a("code"),Vg=n("span end logits"),Bg=n(")."),Rg=c(),Xa=a("p"),Kg=n("This model inherits from "),ri=a("a"),Yg=n("PreTrainedModel"),Gg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jg=c(),qa=a("p"),Zg=n("This model is also a PyTorch "),Ma=a("a"),e_=n("torch.nn.Module"),t_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),o_=c(),Ye=a("div"),v(za.$$.fragment),n_=c(),bo=a("p"),s_=n("The "),ii=a("a"),a_=n("XLNetForQuestionAnsweringSimple"),r_=n(" forward method, overrides the "),Al=a("code"),i_=n("__call__"),l_=n(" special method."),d_=c(),v(hn.$$.fragment),c_=c(),v(un.$$.fragment),p_=c(),v(fn.$$.fragment),wc=c(),To=a("h2"),gn=a("a"),Pl=a("span"),v(Ca.$$.fragment),m_=c(),Sl=a("span"),h_=n("XLNetForQuestionAnswering"),$c=c(),Re=a("div"),v(Ea.$$.fragment),u_=c(),vo=a("p"),f_=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dl=a("code"),g_=n("span start logits"),__=n(" and "),Il=a("code"),k_=n("span end logits"),b_=n(")."),T_=c(),ja=a("p"),v_=n("This model inherits from "),li=a("a"),y_=n("PreTrainedModel"),w_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$_=c(),Oa=a("p"),N_=n("This model is also a PyTorch "),Aa=a("a"),L_=n("torch.nn.Module"),x_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),F_=c(),lt=a("div"),v(Pa.$$.fragment),X_=c(),yo=a("p"),q_=n("The "),di=a("a"),M_=n("XLNetForQuestionAnswering"),z_=n(" forward method, overrides the "),Hl=a("code"),C_=n("__call__"),E_=n(" special method."),j_=c(),v(_n.$$.fragment),O_=c(),v(kn.$$.fragment),Nc=c(),wo=a("h2"),bn=a("a"),Ql=a("span"),v(Sa.$$.fragment),A_=c(),Wl=a("span"),P_=n("TFXLNetModel"),Lc=c(),je=a("div"),v(Da.$$.fragment),S_=c(),Ul=a("p"),D_=n("The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),I_=c(),Ia=a("p"),H_=n("This model inherits from "),ci=a("a"),Q_=n("TFPreTrainedModel"),W_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_=c(),Ha=a("p"),V_=n("This model is also a "),Qa=a("a"),B_=n("tf.keras.Model"),R_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K_=c(),v(Tn.$$.fragment),Y_=c(),dt=a("div"),v(Wa.$$.fragment),G_=c(),$o=a("p"),J_=n("The "),pi=a("a"),Z_=n("TFXLNetModel"),ek=n(" forward method, overrides the "),Vl=a("code"),tk=n("__call__"),ok=n(" special method."),nk=c(),v(vn.$$.fragment),sk=c(),v(yn.$$.fragment),xc=c(),No=a("h2"),wn=a("a"),Bl=a("span"),v(Ua.$$.fragment),ak=c(),Rl=a("span"),rk=n("TFXLNetLMHeadModel"),Fc=c(),Oe=a("div"),v(Va.$$.fragment),ik=c(),Kl=a("p"),lk=n("XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),dk=c(),Ba=a("p"),ck=n("This model inherits from "),mi=a("a"),pk=n("TFPreTrainedModel"),mk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=c(),Ra=a("p"),uk=n("This model is also a "),Ka=a("a"),fk=n("tf.keras.Model"),gk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_k=c(),v($n.$$.fragment),kk=c(),ct=a("div"),v(Ya.$$.fragment),bk=c(),Lo=a("p"),Tk=n("The "),hi=a("a"),vk=n("TFXLNetLMHeadModel"),yk=n(" forward method, overrides the "),Yl=a("code"),wk=n("__call__"),$k=n(" special method."),Nk=c(),v(Nn.$$.fragment),Lk=c(),v(Ln.$$.fragment),Xc=c(),xo=a("h2"),xn=a("a"),Gl=a("span"),v(Ga.$$.fragment),xk=c(),Jl=a("span"),Fk=n("TFXLNetForSequenceClassification"),qc=c(),Ae=a("div"),v(Ja.$$.fragment),Xk=c(),Zl=a("p"),qk=n(`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Mk=c(),Za=a("p"),zk=n("This model inherits from "),ui=a("a"),Ck=n("TFPreTrainedModel"),Ek=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk=c(),er=a("p"),Ok=n("This model is also a "),tr=a("a"),Ak=n("tf.keras.Model"),Pk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sk=c(),v(Fn.$$.fragment),Dk=c(),Ge=a("div"),v(or.$$.fragment),Ik=c(),Fo=a("p"),Hk=n("The "),fi=a("a"),Qk=n("TFXLNetForSequenceClassification"),Wk=n(" forward method, overrides the "),ed=a("code"),Uk=n("__call__"),Vk=n(" special method."),Bk=c(),v(Xn.$$.fragment),Rk=c(),v(qn.$$.fragment),Kk=c(),v(Mn.$$.fragment),Mc=c(),Xo=a("h2"),zn=a("a"),td=a("span"),v(nr.$$.fragment),Yk=c(),od=a("span"),Gk=n("TFLNetForMultipleChoice"),zc=c(),Pe=a("div"),v(sr.$$.fragment),Jk=c(),nd=a("p"),Zk=n(`XLNET Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),eb=c(),ar=a("p"),tb=n("This model inherits from "),gi=a("a"),ob=n("TFPreTrainedModel"),nb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb=c(),rr=a("p"),ab=n("This model is also a "),ir=a("a"),rb=n("tf.keras.Model"),ib=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lb=c(),v(Cn.$$.fragment),db=c(),pt=a("div"),v(lr.$$.fragment),cb=c(),qo=a("p"),pb=n("The "),_i=a("a"),mb=n("TFXLNetForMultipleChoice"),hb=n(" forward method, overrides the "),sd=a("code"),ub=n("__call__"),fb=n(" special method."),gb=c(),v(En.$$.fragment),_b=c(),v(jn.$$.fragment),Cc=c(),Mo=a("h2"),On=a("a"),ad=a("span"),v(dr.$$.fragment),kb=c(),rd=a("span"),bb=n("TFXLNetForTokenClassification"),Ec=c(),Se=a("div"),v(cr.$$.fragment),Tb=c(),id=a("p"),vb=n(`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yb=c(),pr=a("p"),wb=n("This model inherits from "),ki=a("a"),$b=n("TFPreTrainedModel"),Nb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lb=c(),mr=a("p"),xb=n("This model is also a "),hr=a("a"),Fb=n("tf.keras.Model"),Xb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qb=c(),v(An.$$.fragment),Mb=c(),Je=a("div"),v(ur.$$.fragment),zb=c(),zo=a("p"),Cb=n("The "),bi=a("a"),Eb=n("TFXLNetForTokenClassification"),jb=n(" forward method, overrides the "),ld=a("code"),Ob=n("__call__"),Ab=n(" special method."),Pb=c(),v(Pn.$$.fragment),Sb=c(),v(Sn.$$.fragment),Db=c(),v(Dn.$$.fragment),jc=c(),Co=a("h2"),In=a("a"),dd=a("span"),v(fr.$$.fragment),Ib=c(),cd=a("span"),Hb=n("TFXLNetForQuestionAnsweringSimple"),Oc=c(),De=a("div"),v(gr.$$.fragment),Qb=c(),Eo=a("p"),Wb=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pd=a("code"),Ub=n("span start logits"),Vb=n(" and "),md=a("code"),Bb=n("span end logits"),Rb=n(")."),Kb=c(),_r=a("p"),Yb=n("This model inherits from "),Ti=a("a"),Gb=n("TFPreTrainedModel"),Jb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb=c(),kr=a("p"),eT=n("This model is also a "),br=a("a"),tT=n("tf.keras.Model"),oT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nT=c(),v(Hn.$$.fragment),sT=c(),Ze=a("div"),v(Tr.$$.fragment),aT=c(),jo=a("p"),rT=n("The "),vi=a("a"),iT=n("TFXLNetForQuestionAnsweringSimple"),lT=n(" forward method, overrides the "),hd=a("code"),dT=n("__call__"),cT=n(" special method."),pT=c(),v(Qn.$$.fragment),mT=c(),v(Wn.$$.fragment),hT=c(),v(Un.$$.fragment),this.h()},l(o){const _=sw('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),b=p(o),m=r(o,"H1",{class:!0});var vr=i(m);h=r(vr,"A",{id:!0,class:!0,href:!0});var ud=i(h);T=r(ud,"SPAN",{});var fd=i(T);y(l.$$.fragment,fd),fd.forEach(t),ud.forEach(t),u=p(vr),X=r(vr,"SPAN",{});var gd=i(X);pe=s(gd,"XLNet"),gd.forEach(t),vr.forEach(t),Y=p(o),q=r(o,"H2",{class:!0});var yr=i(q);Z=r(yr,"A",{id:!0,class:!0,href:!0});var _d=i(Z);D=r(_d,"SPAN",{});var kd=i(D);y(ee.$$.fragment,kd),kd.forEach(t),_d.forEach(t),me=p(yr),I=r(yr,"SPAN",{});var bd=i(I);he=s(bd,"Overview"),bd.forEach(t),yr.forEach(t),le=p(o),R=r(o,"P",{});var wr=i(R);O=s(wr,"The XLNet model was proposed in "),te=r(wr,"A",{href:!0,rel:!0});var Td=i(te);G=s(Td,"XLNet: Generalized Autoregressive Pretraining for Language Understanding"),Td.forEach(t),M=s(wr,` by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov,
Quoc V. Le. XLnet is an extension of the Transformer-XL model pre-trained using an autoregressive method to learn
bidirectional contexts by maximizing the expected likelihood over all permutations of the input sequence factorization
order.`),wr.forEach(t),C=p(o),ne=r(o,"P",{});var vd=i(ne);W=s(vd,"The abstract from the paper is the following:"),vd.forEach(t),de=p(o),se=r(o,"P",{});var yd=i(se);H=r(yd,"EM",{});var wd=i(H);ue=s(wd,`With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves
better performance than pretraining approaches based on autoregressive language modeling. However, relying on
corrupting the input with masks, BERT neglects dependency between the masked positions and suffers from a
pretrain-finetune discrepancy. In light of these pros and cons, we propose XLNet, a generalized autoregressive
pretraining method that (1) enables learning bidirectional contexts by maximizing the expected likelihood over all
permutations of the factorization order and (2) overcomes the limitations of BERT thanks to its autoregressive
formulation. Furthermore, XLNet integrates ideas from Transformer-XL, the state-of-the-art autoregressive model, into
pretraining. Empirically, under comparable experiment settings, XLNet outperforms BERT on 20 tasks, often by a large
margin, including question answering, natural language inference, sentiment analysis, and document ranking.`),wd.forEach(t),yd.forEach(t),ce=p(o),z=r(o,"P",{});var $d=i(z);fe=s($d,"Tips:"),$d.forEach(t),Q=p(o),K=r(o,"UL",{});var bt=i(K);oe=r(bt,"LI",{});var $r=i(oe);U=s($r,"The specific attention pattern can be controlled at training and test time using the "),ae=r($r,"CODE",{});var Nd=i(ae);ge=s(Nd,"perm_mask"),Nd.forEach(t),A=s($r," input."),$r.forEach(t),_e=p(bt),S=r(bt,"LI",{});var Nr=i(S);ke=s(Nr,`Due to the difficulty of training a fully auto-regressive model over various factorization order, XLNet is pretrained
using only a sub-set of the output tokens as target which are selected with the `),k=r(Nr,"CODE",{});var Ld=i(k);F=s(Ld,"target_mapping"),Ld.forEach(t),J=s(Nr," input."),Nr.forEach(t),$e=p(bt),re=r(bt,"LI",{});var Tt=i(re);P=s(Tt,"To use XLNet for sequential decoding (i.e. not in fully bi-directional setting), use the "),ye=r(Tt,"CODE",{});var xd=i(ye);Ne=s(xd,"perm_mask"),xd.forEach(t),Le=s(Tt,` and
`),j=r(Tt,"CODE",{});var Fd=i(j);V=s(Fd,"target_mapping"),Fd.forEach(t),xe=s(Tt,` inputs to control the attention span and outputs (see examples in
`),we=r(Tt,"EM",{});var Xd=i(we);B=s(Xd,"examples/pytorch/text-generation/run_generation.py"),Xd.forEach(t),Fe=s(Tt,")"),Tt.forEach(t),Xe=p(bt),ie=r(bt,"LI",{});var qd=i(ie);qe=s(qd,"XLNet is one of the few models that has no sequence length limit."),qd.forEach(t),bt.forEach(t),Wd=p(o),wt=r(o,"P",{});var Oo=i(wt);sm=s(Oo,"This model was contributed by "),ts=r(Oo,"A",{href:!0,rel:!0});var Md=i(ts);am=s(Md,"thomwolf"),Md.forEach(t),rm=s(Oo,". The original code can be found "),os=r(Oo,"A",{href:!0,rel:!0});var zd=i(os);im=s(zd,"here"),zd.forEach(t),lm=s(Oo,"."),Oo.forEach(t),Ud=p(o),St=r(o,"H2",{class:!0});var Lr=i(St);Po=r(Lr,"A",{id:!0,class:!0,href:!0});var Cd=i(Po);Qi=r(Cd,"SPAN",{});var Ed=i(Qi);y(ns.$$.fragment,Ed),Ed.forEach(t),Cd.forEach(t),dm=p(Lr),Wi=r(Lr,"SPAN",{});var jd=i(Wi);cm=s(jd,"XLNetConfig"),jd.forEach(t),Lr.forEach(t),Vd=p(o),ot=r(o,"DIV",{class:!0});var vt=i(ot);y(ss.$$.fragment,vt),pm=p(vt),kt=r(vt,"P",{});var yt=i(kt);mm=s(yt,"This is the configuration class to store the configuration of a "),Fr=r(yt,"A",{href:!0});var Od=i(Fr);hm=s(Od,"XLNetModel"),Od.forEach(t),um=s(yt," or a "),Xr=r(yt,"A",{href:!0});var Ad=i(Xr);fm=s(Ad,"TFXLNetModel"),Ad.forEach(t),gm=s(yt,`. It is used to
instantiate a XLNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),as=r(yt,"A",{href:!0,rel:!0});var Pd=i(as);_m=s(Pd,"xlnet-large-cased"),Pd.forEach(t),km=s(yt," architecture."),yt.forEach(t),bm=p(vt),Dt=r(vt,"P",{});var Ao=i(Dt);Tm=s(Ao,"Configuration objects inherit from "),qr=r(Ao,"A",{href:!0});var Sd=i(qr);vm=s(Sd,"PretrainedConfig"),Sd.forEach(t),ym=s(Ao,` and can be used to control the model outputs. Read the
documentation from `),Mr=r(Ao,"A",{href:!0});var Dd=i(Mr);wm=s(Dd,"PretrainedConfig"),Dd.forEach(t),$m=s(Ao," for more information."),Ao.forEach(t),Nm=p(vt),y(So.$$.fragment,vt),vt.forEach(t),Bd=p(o),It=r(o,"H2",{class:!0});var xr=i(It);Do=r(xr,"A",{id:!0,class:!0,href:!0});var Id=i(Do);Ui=r(Id,"SPAN",{});var Hd=i(Ui);y(rs.$$.fragment,Hd),Hd.forEach(t),Id.forEach(t),Lm=p(xr),Vi=r(xr,"SPAN",{});var Qd=i(Vi);xm=s(Qd,"XLNetTokenizer"),Qd.forEach(t),xr.forEach(t),Rd=p(o),Me=r(o,"DIV",{class:!0});var et=i(Me);y(is.$$.fragment,et),Fm=p(et),ls=r(et,"P",{});var Pc=i(ls);Xm=s(Pc,"Construct an XLNet tokenizer. Based on "),ds=r(Pc,"A",{href:!0,rel:!0});var kT=i(ds);qm=s(kT,"SentencePiece"),kT.forEach(t),Mm=s(Pc,"."),Pc.forEach(t),zm=p(et),cs=r(et,"P",{});var Sc=i(cs);Cm=s(Sc,"This tokenizer inherits from "),zr=r(Sc,"A",{href:!0});var bT=i(zr);Em=s(bT,"PreTrainedTokenizer"),bT.forEach(t),jm=s(Sc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sc.forEach(t),Om=p(et),$t=r(et,"DIV",{class:!0});var yi=i($t);y(ps.$$.fragment,yi),Am=p(yi),Bi=r(yi,"P",{});var TT=i(Bi);Pm=s(TT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),TT.forEach(t),Sm=p(yi),ms=r(yi,"UL",{});var Dc=i(ms);Cr=r(Dc,"LI",{});var uT=i(Cr);Dm=s(uT,"single sequence: "),Ri=r(uT,"CODE",{});var vT=i(Ri);Im=s(vT,"X <sep> <cls>"),vT.forEach(t),uT.forEach(t),Hm=p(Dc),Er=r(Dc,"LI",{});var fT=i(Er);Qm=s(fT,"pair of sequences: "),Ki=r(fT,"CODE",{});var yT=i(Ki);Wm=s(yT,"A <sep> B <sep> <cls>"),yT.forEach(t),fT.forEach(t),Dc.forEach(t),yi.forEach(t),Um=p(et),Io=r(et,"DIV",{class:!0});var Ic=i(Io);y(hs.$$.fragment,Ic),Vm=p(Ic),us=r(Ic,"P",{});var Hc=i(us);Bm=s(Hc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Yi=r(Hc,"CODE",{});var wT=i(Yi);Rm=s(wT,"prepare_for_model"),wT.forEach(t),Km=s(Hc," method."),Hc.forEach(t),Ic.forEach(t),Ym=p(et),nt=r(et,"DIV",{class:!0});var Vn=i(nt);y(fs.$$.fragment,Vn),Gm=p(Vn),Gi=r(Vn,"P",{});var $T=i(Gi);Jm=s($T,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),$T.forEach(t),Zm=p(Vn),y(Ho.$$.fragment,Vn),eh=p(Vn),Ht=r(Vn,"P",{});var wi=i(Ht);th=s(wi,"If "),Ji=r(wi,"CODE",{});var NT=i(Ji);oh=s(NT,"token_ids_1"),NT.forEach(t),nh=s(wi," is "),Zi=r(wi,"CODE",{});var LT=i(Zi);sh=s(LT,"None"),LT.forEach(t),ah=s(wi,", this method only returns the first portion of the mask (0s)."),wi.forEach(t),Vn.forEach(t),rh=p(et),jr=r(et,"DIV",{class:!0});var xT=i(jr);y(gs.$$.fragment,xT),xT.forEach(t),et.forEach(t),Kd=p(o),Qt=r(o,"H2",{class:!0});var Qc=i(Qt);Qo=r(Qc,"A",{id:!0,class:!0,href:!0});var FT=i(Qo);el=r(FT,"SPAN",{});var XT=i(el);y(_s.$$.fragment,XT),XT.forEach(t),FT.forEach(t),ih=p(Qc),tl=r(Qc,"SPAN",{});var qT=i(tl);lh=s(qT,"XLNetTokenizerFast"),qT.forEach(t),Qc.forEach(t),Yd=p(o),Ie=r(o,"DIV",{class:!0});var Lt=i(Ie);y(ks.$$.fragment,Lt),dh=p(Lt),Wt=r(Lt,"P",{});var $i=i(Wt);ch=s($i,"Construct a \u201Cfast\u201D XLNet tokenizer (backed by HuggingFace\u2019s "),ol=r($i,"EM",{});var MT=i(ol);ph=s(MT,"tokenizers"),MT.forEach(t),mh=s($i,` library). Based on
`),bs=r($i,"A",{href:!0,rel:!0});var zT=i(bs);hh=s(zT,"Unigram"),zT.forEach(t),uh=s($i,"."),$i.forEach(t),fh=p(Lt),Ts=r(Lt,"P",{});var Wc=i(Ts);gh=s(Wc,"This tokenizer inherits from "),Or=r(Wc,"A",{href:!0});var CT=i(Or);_h=s(CT,"PreTrainedTokenizerFast"),CT.forEach(t),kh=s(Wc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Wc.forEach(t),bh=p(Lt),Nt=r(Lt,"DIV",{class:!0});var Ni=i(Nt);y(vs.$$.fragment,Ni),Th=p(Ni),nl=r(Ni,"P",{});var ET=i(nl);vh=s(ET,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),ET.forEach(t),yh=p(Ni),ys=r(Ni,"UL",{});var Uc=i(ys);Ar=r(Uc,"LI",{});var gT=i(Ar);wh=s(gT,"single sequence: "),sl=r(gT,"CODE",{});var jT=i(sl);$h=s(jT,"X <sep> <cls>"),jT.forEach(t),gT.forEach(t),Nh=p(Uc),Pr=r(Uc,"LI",{});var _T=i(Pr);Lh=s(_T,"pair of sequences: "),al=r(_T,"CODE",{});var OT=i(al);xh=s(OT,"A <sep> B <sep> <cls>"),OT.forEach(t),_T.forEach(t),Uc.forEach(t),Ni.forEach(t),Fh=p(Lt),st=r(Lt,"DIV",{class:!0});var Bn=i(st);y(ws.$$.fragment,Bn),Xh=p(Bn),rl=r(Bn,"P",{});var AT=i(rl);qh=s(AT,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),AT.forEach(t),Mh=p(Bn),y(Wo.$$.fragment,Bn),zh=p(Bn),Ut=r(Bn,"P",{});var Li=i(Ut);Ch=s(Li,"If "),il=r(Li,"CODE",{});var PT=i(il);Eh=s(PT,"token_ids_1"),PT.forEach(t),jh=s(Li," is "),ll=r(Li,"CODE",{});var ST=i(ll);Oh=s(ST,"None"),ST.forEach(t),Ah=s(Li,", this method only returns the first portion of the mask (0s)."),Li.forEach(t),Bn.forEach(t),Lt.forEach(t),Gd=p(o),Vt=r(o,"H2",{class:!0});var Vc=i(Vt);Uo=r(Vc,"A",{id:!0,class:!0,href:!0});var DT=i(Uo);dl=r(DT,"SPAN",{});var IT=i(dl);y($s.$$.fragment,IT),IT.forEach(t),DT.forEach(t),Ph=p(Vc),cl=r(Vc,"SPAN",{});var HT=i(cl);Sh=s(HT,"XLNet specific outputs"),HT.forEach(t),Vc.forEach(t),Jd=p(o),Bt=r(o,"DIV",{class:!0});var Bc=i(Bt);y(Ns.$$.fragment,Bc),Dh=p(Bc),Ls=r(Bc,"P",{});var Rc=i(Ls);Ih=s(Rc,"Output type of "),Sr=r(Rc,"A",{href:!0});var QT=i(Sr);Hh=s(QT,"XLNetModel"),QT.forEach(t),Qh=s(Rc,"."),Rc.forEach(t),Bc.forEach(t),Zd=p(o),Rt=r(o,"DIV",{class:!0});var Kc=i(Rt);y(xs.$$.fragment,Kc),Wh=p(Kc),Fs=r(Kc,"P",{});var Yc=i(Fs);Uh=s(Yc,"Output type of "),Dr=r(Yc,"A",{href:!0});var WT=i(Dr);Vh=s(WT,"XLNetLMHeadModel"),WT.forEach(t),Bh=s(Yc,"."),Yc.forEach(t),Kc.forEach(t),ec=p(o),Kt=r(o,"DIV",{class:!0});var Gc=i(Kt);y(Xs.$$.fragment,Gc),Rh=p(Gc),qs=r(Gc,"P",{});var Jc=i(qs);Kh=s(Jc,"Output type of "),Ir=r(Jc,"A",{href:!0});var UT=i(Ir);Yh=s(UT,"XLNetForSequenceClassification"),UT.forEach(t),Gh=s(Jc,"."),Jc.forEach(t),Gc.forEach(t),tc=p(o),Yt=r(o,"DIV",{class:!0});var Zc=i(Yt);y(Ms.$$.fragment,Zc),Jh=p(Zc),zs=r(Zc,"P",{});var ep=i(zs);Zh=s(ep,"Output type of "),Hr=r(ep,"A",{href:!0});var VT=i(Hr);eu=s(VT,"XLNetForMultipleChoice"),VT.forEach(t),tu=s(ep,"."),ep.forEach(t),Zc.forEach(t),oc=p(o),Gt=r(o,"DIV",{class:!0});var tp=i(Gt);y(Cs.$$.fragment,tp),ou=p(tp),Es=r(tp,"P",{});var op=i(Es);nu=s(op,"Output type of "),pl=r(op,"CODE",{});var BT=i(pl);su=s(BT,"XLNetForTokenClassificationOutput"),BT.forEach(t),au=s(op,"."),op.forEach(t),tp.forEach(t),nc=p(o),Jt=r(o,"DIV",{class:!0});var np=i(Jt);y(js.$$.fragment,np),ru=p(np),Os=r(np,"P",{});var sp=i(Os);iu=s(sp,"Output type of "),Qr=r(sp,"A",{href:!0});var RT=i(Qr);lu=s(RT,"XLNetForQuestionAnsweringSimple"),RT.forEach(t),du=s(sp,"."),sp.forEach(t),np.forEach(t),sc=p(o),Zt=r(o,"DIV",{class:!0});var ap=i(Zt);y(As.$$.fragment,ap),cu=p(ap),Ps=r(ap,"P",{});var rp=i(Ps);pu=s(rp,"Output type of "),Wr=r(rp,"A",{href:!0});var KT=i(Wr);mu=s(KT,"XLNetForQuestionAnswering"),KT.forEach(t),hu=s(rp,"."),rp.forEach(t),ap.forEach(t),ac=p(o),eo=r(o,"DIV",{class:!0});var ip=i(eo);y(Ss.$$.fragment,ip),uu=p(ip),Ds=r(ip,"P",{});var lp=i(Ds);fu=s(lp,"Output type of "),Ur=r(lp,"A",{href:!0});var YT=i(Ur);gu=s(YT,"TFXLNetModel"),YT.forEach(t),_u=s(lp,"."),lp.forEach(t),ip.forEach(t),rc=p(o),to=r(o,"DIV",{class:!0});var dp=i(to);y(Is.$$.fragment,dp),ku=p(dp),Hs=r(dp,"P",{});var cp=i(Hs);bu=s(cp,"Output type of "),Vr=r(cp,"A",{href:!0});var GT=i(Vr);Tu=s(GT,"TFXLNetLMHeadModel"),GT.forEach(t),vu=s(cp,"."),cp.forEach(t),dp.forEach(t),ic=p(o),oo=r(o,"DIV",{class:!0});var pp=i(oo);y(Qs.$$.fragment,pp),yu=p(pp),Ws=r(pp,"P",{});var mp=i(Ws);wu=s(mp,"Output type of "),Br=r(mp,"A",{href:!0});var JT=i(Br);$u=s(JT,"TFXLNetForSequenceClassification"),JT.forEach(t),Nu=s(mp,"."),mp.forEach(t),pp.forEach(t),lc=p(o),no=r(o,"DIV",{class:!0});var hp=i(no);y(Us.$$.fragment,hp),Lu=p(hp),Vs=r(hp,"P",{});var up=i(Vs);xu=s(up,"Output type of "),Rr=r(up,"A",{href:!0});var ZT=i(Rr);Fu=s(ZT,"TFXLNetForMultipleChoice"),ZT.forEach(t),Xu=s(up,"."),up.forEach(t),hp.forEach(t),dc=p(o),so=r(o,"DIV",{class:!0});var fp=i(so);y(Bs.$$.fragment,fp),qu=p(fp),Rs=r(fp,"P",{});var gp=i(Rs);Mu=s(gp,"Output type of "),ml=r(gp,"CODE",{});var ev=i(ml);zu=s(ev,"TFXLNetForTokenClassificationOutput"),ev.forEach(t),Cu=s(gp,"."),gp.forEach(t),fp.forEach(t),cc=p(o),ao=r(o,"DIV",{class:!0});var _p=i(ao);y(Ks.$$.fragment,_p),Eu=p(_p),Ys=r(_p,"P",{});var kp=i(Ys);ju=s(kp,"Output type of "),Kr=r(kp,"A",{href:!0});var tv=i(Kr);Ou=s(tv,"TFXLNetForQuestionAnsweringSimple"),tv.forEach(t),Au=s(kp,"."),kp.forEach(t),_p.forEach(t),pc=p(o),ro=r(o,"H2",{class:!0});var bp=i(ro);Vo=r(bp,"A",{id:!0,class:!0,href:!0});var ov=i(Vo);hl=r(ov,"SPAN",{});var nv=i(hl);y(Gs.$$.fragment,nv),nv.forEach(t),ov.forEach(t),Pu=p(bp),ul=r(bp,"SPAN",{});var sv=i(ul);Su=s(sv,"XLNetModel"),sv.forEach(t),bp.forEach(t),mc=p(o),He=r(o,"DIV",{class:!0});var xt=i(He);y(Js.$$.fragment,xt),Du=p(xt),fl=r(xt,"P",{});var av=i(fl);Iu=s(av,"The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),av.forEach(t),Hu=p(xt),Zs=r(xt,"P",{});var Tp=i(Zs);Qu=s(Tp,"This model inherits from "),Yr=r(Tp,"A",{href:!0});var rv=i(Yr);Wu=s(rv,"PreTrainedModel"),rv.forEach(t),Uu=s(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),Vu=p(xt),ea=r(xt,"P",{});var vp=i(ea);Bu=s(vp,"This model is also a PyTorch "),ta=r(vp,"A",{href:!0,rel:!0});var iv=i(ta);Ru=s(iv,"torch.nn.Module"),iv.forEach(t),Ku=s(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(t),Yu=p(xt),at=r(xt,"DIV",{class:!0});var Rn=i(at);y(oa.$$.fragment,Rn),Gu=p(Rn),io=r(Rn,"P",{});var xi=i(io);Ju=s(xi,"The "),Gr=r(xi,"A",{href:!0});var lv=i(Gr);Zu=s(lv,"XLNetModel"),lv.forEach(t),ef=s(xi," forward method, overrides the "),gl=r(xi,"CODE",{});var dv=i(gl);tf=s(dv,"__call__"),dv.forEach(t),of=s(xi," special method."),xi.forEach(t),nf=p(Rn),y(Bo.$$.fragment,Rn),sf=p(Rn),y(Ro.$$.fragment,Rn),Rn.forEach(t),xt.forEach(t),hc=p(o),lo=r(o,"H2",{class:!0});var yp=i(lo);Ko=r(yp,"A",{id:!0,class:!0,href:!0});var cv=i(Ko);_l=r(cv,"SPAN",{});var pv=i(_l);y(na.$$.fragment,pv),pv.forEach(t),cv.forEach(t),af=p(yp),kl=r(yp,"SPAN",{});var mv=i(kl);rf=s(mv,"XLNetLMHeadModel"),mv.forEach(t),yp.forEach(t),uc=p(o),Qe=r(o,"DIV",{class:!0});var Ft=i(Qe);y(sa.$$.fragment,Ft),lf=p(Ft),bl=r(Ft,"P",{});var hv=i(bl);df=s(hv,"XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),hv.forEach(t),cf=p(Ft),aa=r(Ft,"P",{});var wp=i(aa);pf=s(wp,"This model inherits from "),Jr=r(wp,"A",{href:!0});var uv=i(Jr);mf=s(uv,"PreTrainedModel"),uv.forEach(t),hf=s(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),uf=p(Ft),ra=r(Ft,"P",{});var $p=i(ra);ff=s($p,"This model is also a PyTorch "),ia=r($p,"A",{href:!0,rel:!0});var fv=i(ia);gf=s(fv,"torch.nn.Module"),fv.forEach(t),_f=s($p,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$p.forEach(t),kf=p(Ft),rt=r(Ft,"DIV",{class:!0});var Kn=i(rt);y(la.$$.fragment,Kn),bf=p(Kn),co=r(Kn,"P",{});var Fi=i(co);Tf=s(Fi,"The "),Zr=r(Fi,"A",{href:!0});var gv=i(Zr);vf=s(gv,"XLNetLMHeadModel"),gv.forEach(t),yf=s(Fi," forward method, overrides the "),Tl=r(Fi,"CODE",{});var _v=i(Tl);wf=s(_v,"__call__"),_v.forEach(t),$f=s(Fi," special method."),Fi.forEach(t),Nf=p(Kn),y(Yo.$$.fragment,Kn),Lf=p(Kn),y(Go.$$.fragment,Kn),Kn.forEach(t),Ft.forEach(t),fc=p(o),po=r(o,"H2",{class:!0});var Np=i(po);Jo=r(Np,"A",{id:!0,class:!0,href:!0});var kv=i(Jo);vl=r(kv,"SPAN",{});var bv=i(vl);y(da.$$.fragment,bv),bv.forEach(t),kv.forEach(t),xf=p(Np),yl=r(Np,"SPAN",{});var Tv=i(yl);Ff=s(Tv,"XLNetForSequenceClassification"),Tv.forEach(t),Np.forEach(t),gc=p(o),We=r(o,"DIV",{class:!0});var Xt=i(We);y(ca.$$.fragment,Xt),Xf=p(Xt),wl=r(Xt,"P",{});var vv=i(wl);qf=s(vv,`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),vv.forEach(t),Mf=p(Xt),pa=r(Xt,"P",{});var Lp=i(pa);zf=s(Lp,"This model inherits from "),ei=r(Lp,"A",{href:!0});var yv=i(ei);Cf=s(yv,"PreTrainedModel"),yv.forEach(t),Ef=s(Lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp.forEach(t),jf=p(Xt),ma=r(Xt,"P",{});var xp=i(ma);Of=s(xp,"This model is also a PyTorch "),ha=r(xp,"A",{href:!0,rel:!0});var wv=i(ha);Af=s(wv,"torch.nn.Module"),wv.forEach(t),Pf=s(xp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xp.forEach(t),Sf=p(Xt),Ee=r(Xt,"DIV",{class:!0});var tt=i(Ee);y(ua.$$.fragment,tt),Df=p(tt),mo=r(tt,"P",{});var Xi=i(mo);If=s(Xi,"The "),ti=r(Xi,"A",{href:!0});var $v=i(ti);Hf=s($v,"XLNetForSequenceClassification"),$v.forEach(t),Qf=s(Xi," forward method, overrides the "),$l=r(Xi,"CODE",{});var Nv=i($l);Wf=s(Nv,"__call__"),Nv.forEach(t),Uf=s(Xi," special method."),Xi.forEach(t),Vf=p(tt),y(Zo.$$.fragment,tt),Bf=p(tt),y(en.$$.fragment,tt),Rf=p(tt),y(tn.$$.fragment,tt),Kf=p(tt),y(on.$$.fragment,tt),Yf=p(tt),y(nn.$$.fragment,tt),tt.forEach(t),Xt.forEach(t),_c=p(o),ho=r(o,"H2",{class:!0});var Fp=i(ho);sn=r(Fp,"A",{id:!0,class:!0,href:!0});var Lv=i(sn);Nl=r(Lv,"SPAN",{});var xv=i(Nl);y(fa.$$.fragment,xv),xv.forEach(t),Lv.forEach(t),Gf=p(Fp),Ll=r(Fp,"SPAN",{});var Fv=i(Ll);Jf=s(Fv,"XLNetForMultipleChoice"),Fv.forEach(t),Fp.forEach(t),kc=p(o),Ue=r(o,"DIV",{class:!0});var qt=i(Ue);y(ga.$$.fragment,qt),Zf=p(qt),xl=r(qt,"P",{});var Xv=i(xl);eg=s(Xv,`XLNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RACE/SWAG tasks.`),Xv.forEach(t),tg=p(qt),_a=r(qt,"P",{});var Xp=i(_a);og=s(Xp,"This model inherits from "),oi=r(Xp,"A",{href:!0});var qv=i(oi);ng=s(qv,"PreTrainedModel"),qv.forEach(t),sg=s(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(t),ag=p(qt),ka=r(qt,"P",{});var qp=i(ka);rg=s(qp,"This model is also a PyTorch "),ba=r(qp,"A",{href:!0,rel:!0});var Mv=i(ba);ig=s(Mv,"torch.nn.Module"),Mv.forEach(t),lg=s(qp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qp.forEach(t),dg=p(qt),it=r(qt,"DIV",{class:!0});var Yn=i(it);y(Ta.$$.fragment,Yn),cg=p(Yn),uo=r(Yn,"P",{});var qi=i(uo);pg=s(qi,"The "),ni=r(qi,"A",{href:!0});var zv=i(ni);mg=s(zv,"XLNetForMultipleChoice"),zv.forEach(t),hg=s(qi," forward method, overrides the "),Fl=r(qi,"CODE",{});var Cv=i(Fl);ug=s(Cv,"__call__"),Cv.forEach(t),fg=s(qi," special method."),qi.forEach(t),gg=p(Yn),y(an.$$.fragment,Yn),_g=p(Yn),y(rn.$$.fragment,Yn),Yn.forEach(t),qt.forEach(t),bc=p(o),fo=r(o,"H2",{class:!0});var Mp=i(fo);ln=r(Mp,"A",{id:!0,class:!0,href:!0});var Ev=i(ln);Xl=r(Ev,"SPAN",{});var jv=i(Xl);y(va.$$.fragment,jv),jv.forEach(t),Ev.forEach(t),kg=p(Mp),ql=r(Mp,"SPAN",{});var Ov=i(ql);bg=s(Ov,"XLNetForTokenClassification"),Ov.forEach(t),Mp.forEach(t),Tc=p(o),Ve=r(o,"DIV",{class:!0});var Mt=i(Ve);y(ya.$$.fragment,Mt),Tg=p(Mt),Ml=r(Mt,"P",{});var Av=i(Ml);vg=s(Av,`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Av.forEach(t),yg=p(Mt),wa=r(Mt,"P",{});var zp=i(wa);wg=s(zp,"This model inherits from "),si=r(zp,"A",{href:!0});var Pv=i(si);$g=s(Pv,"PreTrainedModel"),Pv.forEach(t),Ng=s(zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp.forEach(t),Lg=p(Mt),$a=r(Mt,"P",{});var Cp=i($a);xg=s(Cp,"This model is also a PyTorch "),Na=r(Cp,"A",{href:!0,rel:!0});var Sv=i(Na);Fg=s(Sv,"torch.nn.Module"),Sv.forEach(t),Xg=s(Cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp.forEach(t),qg=p(Mt),Ke=r(Mt,"DIV",{class:!0});var zt=i(Ke);y(La.$$.fragment,zt),Mg=p(zt),go=r(zt,"P",{});var Mi=i(go);zg=s(Mi,"The "),ai=r(Mi,"A",{href:!0});var Dv=i(ai);Cg=s(Dv,"XLNetForTokenClassification"),Dv.forEach(t),Eg=s(Mi," forward method, overrides the "),zl=r(Mi,"CODE",{});var Iv=i(zl);jg=s(Iv,"__call__"),Iv.forEach(t),Og=s(Mi," special method."),Mi.forEach(t),Ag=p(zt),y(dn.$$.fragment,zt),Pg=p(zt),y(cn.$$.fragment,zt),Sg=p(zt),y(pn.$$.fragment,zt),zt.forEach(t),Mt.forEach(t),vc=p(o),_o=r(o,"H2",{class:!0});var Ep=i(_o);mn=r(Ep,"A",{id:!0,class:!0,href:!0});var Hv=i(mn);Cl=r(Hv,"SPAN",{});var Qv=i(Cl);y(xa.$$.fragment,Qv),Qv.forEach(t),Hv.forEach(t),Dg=p(Ep),El=r(Ep,"SPAN",{});var Wv=i(El);Ig=s(Wv,"XLNetForQuestionAnsweringSimple"),Wv.forEach(t),Ep.forEach(t),yc=p(o),Be=r(o,"DIV",{class:!0});var Ct=i(Be);y(Fa.$$.fragment,Ct),Hg=p(Ct),ko=r(Ct,"P",{});var zi=i(ko);Qg=s(zi,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),jl=r(zi,"CODE",{});var Uv=i(jl);Wg=s(Uv,"span start logits"),Uv.forEach(t),Ug=s(zi," and "),Ol=r(zi,"CODE",{});var Vv=i(Ol);Vg=s(Vv,"span end logits"),Vv.forEach(t),Bg=s(zi,")."),zi.forEach(t),Rg=p(Ct),Xa=r(Ct,"P",{});var jp=i(Xa);Kg=s(jp,"This model inherits from "),ri=r(jp,"A",{href:!0});var Bv=i(ri);Yg=s(Bv,"PreTrainedModel"),Bv.forEach(t),Gg=s(jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jp.forEach(t),Jg=p(Ct),qa=r(Ct,"P",{});var Op=i(qa);Zg=s(Op,"This model is also a PyTorch "),Ma=r(Op,"A",{href:!0,rel:!0});var Rv=i(Ma);e_=s(Rv,"torch.nn.Module"),Rv.forEach(t),t_=s(Op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Op.forEach(t),o_=p(Ct),Ye=r(Ct,"DIV",{class:!0});var Et=i(Ye);y(za.$$.fragment,Et),n_=p(Et),bo=r(Et,"P",{});var Ci=i(bo);s_=s(Ci,"The "),ii=r(Ci,"A",{href:!0});var Kv=i(ii);a_=s(Kv,"XLNetForQuestionAnsweringSimple"),Kv.forEach(t),r_=s(Ci," forward method, overrides the "),Al=r(Ci,"CODE",{});var Yv=i(Al);i_=s(Yv,"__call__"),Yv.forEach(t),l_=s(Ci," special method."),Ci.forEach(t),d_=p(Et),y(hn.$$.fragment,Et),c_=p(Et),y(un.$$.fragment,Et),p_=p(Et),y(fn.$$.fragment,Et),Et.forEach(t),Ct.forEach(t),wc=p(o),To=r(o,"H2",{class:!0});var Ap=i(To);gn=r(Ap,"A",{id:!0,class:!0,href:!0});var Gv=i(gn);Pl=r(Gv,"SPAN",{});var Jv=i(Pl);y(Ca.$$.fragment,Jv),Jv.forEach(t),Gv.forEach(t),m_=p(Ap),Sl=r(Ap,"SPAN",{});var Zv=i(Sl);h_=s(Zv,"XLNetForQuestionAnswering"),Zv.forEach(t),Ap.forEach(t),$c=p(o),Re=r(o,"DIV",{class:!0});var jt=i(Re);y(Ea.$$.fragment,jt),u_=p(jt),vo=r(jt,"P",{});var Ei=i(vo);f_=s(Ei,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Dl=r(Ei,"CODE",{});var ey=i(Dl);g_=s(ey,"span start logits"),ey.forEach(t),__=s(Ei," and "),Il=r(Ei,"CODE",{});var ty=i(Il);k_=s(ty,"span end logits"),ty.forEach(t),b_=s(Ei,")."),Ei.forEach(t),T_=p(jt),ja=r(jt,"P",{});var Pp=i(ja);v_=s(Pp,"This model inherits from "),li=r(Pp,"A",{href:!0});var oy=i(li);y_=s(oy,"PreTrainedModel"),oy.forEach(t),w_=s(Pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp.forEach(t),$_=p(jt),Oa=r(jt,"P",{});var Sp=i(Oa);N_=s(Sp,"This model is also a PyTorch "),Aa=r(Sp,"A",{href:!0,rel:!0});var ny=i(Aa);L_=s(ny,"torch.nn.Module"),ny.forEach(t),x_=s(Sp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sp.forEach(t),F_=p(jt),lt=r(jt,"DIV",{class:!0});var Gn=i(lt);y(Pa.$$.fragment,Gn),X_=p(Gn),yo=r(Gn,"P",{});var ji=i(yo);q_=s(ji,"The "),di=r(ji,"A",{href:!0});var sy=i(di);M_=s(sy,"XLNetForQuestionAnswering"),sy.forEach(t),z_=s(ji," forward method, overrides the "),Hl=r(ji,"CODE",{});var ay=i(Hl);C_=s(ay,"__call__"),ay.forEach(t),E_=s(ji," special method."),ji.forEach(t),j_=p(Gn),y(_n.$$.fragment,Gn),O_=p(Gn),y(kn.$$.fragment,Gn),Gn.forEach(t),jt.forEach(t),Nc=p(o),wo=r(o,"H2",{class:!0});var Dp=i(wo);bn=r(Dp,"A",{id:!0,class:!0,href:!0});var ry=i(bn);Ql=r(ry,"SPAN",{});var iy=i(Ql);y(Sa.$$.fragment,iy),iy.forEach(t),ry.forEach(t),A_=p(Dp),Wl=r(Dp,"SPAN",{});var ly=i(Wl);P_=s(ly,"TFXLNetModel"),ly.forEach(t),Dp.forEach(t),Lc=p(o),je=r(o,"DIV",{class:!0});var mt=i(je);y(Da.$$.fragment,mt),S_=p(mt),Ul=r(mt,"P",{});var dy=i(Ul);D_=s(dy,"The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),dy.forEach(t),I_=p(mt),Ia=r(mt,"P",{});var Ip=i(Ia);H_=s(Ip,"This model inherits from "),ci=r(Ip,"A",{href:!0});var cy=i(ci);Q_=s(cy,"TFPreTrainedModel"),cy.forEach(t),W_=s(Ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ip.forEach(t),U_=p(mt),Ha=r(mt,"P",{});var Hp=i(Ha);V_=s(Hp,"This model is also a "),Qa=r(Hp,"A",{href:!0,rel:!0});var py=i(Qa);B_=s(py,"tf.keras.Model"),py.forEach(t),R_=s(Hp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hp.forEach(t),K_=p(mt),y(Tn.$$.fragment,mt),Y_=p(mt),dt=r(mt,"DIV",{class:!0});var Jn=i(dt);y(Wa.$$.fragment,Jn),G_=p(Jn),$o=r(Jn,"P",{});var Oi=i($o);J_=s(Oi,"The "),pi=r(Oi,"A",{href:!0});var my=i(pi);Z_=s(my,"TFXLNetModel"),my.forEach(t),ek=s(Oi," forward method, overrides the "),Vl=r(Oi,"CODE",{});var hy=i(Vl);tk=s(hy,"__call__"),hy.forEach(t),ok=s(Oi," special method."),Oi.forEach(t),nk=p(Jn),y(vn.$$.fragment,Jn),sk=p(Jn),y(yn.$$.fragment,Jn),Jn.forEach(t),mt.forEach(t),xc=p(o),No=r(o,"H2",{class:!0});var Qp=i(No);wn=r(Qp,"A",{id:!0,class:!0,href:!0});var uy=i(wn);Bl=r(uy,"SPAN",{});var fy=i(Bl);y(Ua.$$.fragment,fy),fy.forEach(t),uy.forEach(t),ak=p(Qp),Rl=r(Qp,"SPAN",{});var gy=i(Rl);rk=s(gy,"TFXLNetLMHeadModel"),gy.forEach(t),Qp.forEach(t),Fc=p(o),Oe=r(o,"DIV",{class:!0});var ht=i(Oe);y(Va.$$.fragment,ht),ik=p(ht),Kl=r(ht,"P",{});var _y=i(Kl);lk=s(_y,"XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),_y.forEach(t),dk=p(ht),Ba=r(ht,"P",{});var Wp=i(Ba);ck=s(Wp,"This model inherits from "),mi=r(Wp,"A",{href:!0});var ky=i(mi);pk=s(ky,"TFPreTrainedModel"),ky.forEach(t),mk=s(Wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp.forEach(t),hk=p(ht),Ra=r(ht,"P",{});var Up=i(Ra);uk=s(Up,"This model is also a "),Ka=r(Up,"A",{href:!0,rel:!0});var by=i(Ka);fk=s(by,"tf.keras.Model"),by.forEach(t),gk=s(Up,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Up.forEach(t),_k=p(ht),y($n.$$.fragment,ht),kk=p(ht),ct=r(ht,"DIV",{class:!0});var Zn=i(ct);y(Ya.$$.fragment,Zn),bk=p(Zn),Lo=r(Zn,"P",{});var Ai=i(Lo);Tk=s(Ai,"The "),hi=r(Ai,"A",{href:!0});var Ty=i(hi);vk=s(Ty,"TFXLNetLMHeadModel"),Ty.forEach(t),yk=s(Ai," forward method, overrides the "),Yl=r(Ai,"CODE",{});var vy=i(Yl);wk=s(vy,"__call__"),vy.forEach(t),$k=s(Ai," special method."),Ai.forEach(t),Nk=p(Zn),y(Nn.$$.fragment,Zn),Lk=p(Zn),y(Ln.$$.fragment,Zn),Zn.forEach(t),ht.forEach(t),Xc=p(o),xo=r(o,"H2",{class:!0});var Vp=i(xo);xn=r(Vp,"A",{id:!0,class:!0,href:!0});var yy=i(xn);Gl=r(yy,"SPAN",{});var wy=i(Gl);y(Ga.$$.fragment,wy),wy.forEach(t),yy.forEach(t),xk=p(Vp),Jl=r(Vp,"SPAN",{});var $y=i(Jl);Fk=s($y,"TFXLNetForSequenceClassification"),$y.forEach(t),Vp.forEach(t),qc=p(o),Ae=r(o,"DIV",{class:!0});var ut=i(Ae);y(Ja.$$.fragment,ut),Xk=p(ut),Zl=r(ut,"P",{});var Ny=i(Zl);qk=s(Ny,`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Ny.forEach(t),Mk=p(ut),Za=r(ut,"P",{});var Bp=i(Za);zk=s(Bp,"This model inherits from "),ui=r(Bp,"A",{href:!0});var Ly=i(ui);Ck=s(Ly,"TFPreTrainedModel"),Ly.forEach(t),Ek=s(Bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp.forEach(t),jk=p(ut),er=r(ut,"P",{});var Rp=i(er);Ok=s(Rp,"This model is also a "),tr=r(Rp,"A",{href:!0,rel:!0});var xy=i(tr);Ak=s(xy,"tf.keras.Model"),xy.forEach(t),Pk=s(Rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rp.forEach(t),Sk=p(ut),y(Fn.$$.fragment,ut),Dk=p(ut),Ge=r(ut,"DIV",{class:!0});var Ot=i(Ge);y(or.$$.fragment,Ot),Ik=p(Ot),Fo=r(Ot,"P",{});var Pi=i(Fo);Hk=s(Pi,"The "),fi=r(Pi,"A",{href:!0});var Fy=i(fi);Qk=s(Fy,"TFXLNetForSequenceClassification"),Fy.forEach(t),Wk=s(Pi," forward method, overrides the "),ed=r(Pi,"CODE",{});var Xy=i(ed);Uk=s(Xy,"__call__"),Xy.forEach(t),Vk=s(Pi," special method."),Pi.forEach(t),Bk=p(Ot),y(Xn.$$.fragment,Ot),Rk=p(Ot),y(qn.$$.fragment,Ot),Kk=p(Ot),y(Mn.$$.fragment,Ot),Ot.forEach(t),ut.forEach(t),Mc=p(o),Xo=r(o,"H2",{class:!0});var Kp=i(Xo);zn=r(Kp,"A",{id:!0,class:!0,href:!0});var qy=i(zn);td=r(qy,"SPAN",{});var My=i(td);y(nr.$$.fragment,My),My.forEach(t),qy.forEach(t),Yk=p(Kp),od=r(Kp,"SPAN",{});var zy=i(od);Gk=s(zy,"TFLNetForMultipleChoice"),zy.forEach(t),Kp.forEach(t),zc=p(o),Pe=r(o,"DIV",{class:!0});var ft=i(Pe);y(sr.$$.fragment,ft),Jk=p(ft),nd=r(ft,"P",{});var Cy=i(nd);Zk=s(Cy,`XLNET Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Cy.forEach(t),eb=p(ft),ar=r(ft,"P",{});var Yp=i(ar);tb=s(Yp,"This model inherits from "),gi=r(Yp,"A",{href:!0});var Ey=i(gi);ob=s(Ey,"TFPreTrainedModel"),Ey.forEach(t),nb=s(Yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yp.forEach(t),sb=p(ft),rr=r(ft,"P",{});var Gp=i(rr);ab=s(Gp,"This model is also a "),ir=r(Gp,"A",{href:!0,rel:!0});var jy=i(ir);rb=s(jy,"tf.keras.Model"),jy.forEach(t),ib=s(Gp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gp.forEach(t),lb=p(ft),y(Cn.$$.fragment,ft),db=p(ft),pt=r(ft,"DIV",{class:!0});var es=i(pt);y(lr.$$.fragment,es),cb=p(es),qo=r(es,"P",{});var Si=i(qo);pb=s(Si,"The "),_i=r(Si,"A",{href:!0});var Oy=i(_i);mb=s(Oy,"TFXLNetForMultipleChoice"),Oy.forEach(t),hb=s(Si," forward method, overrides the "),sd=r(Si,"CODE",{});var Ay=i(sd);ub=s(Ay,"__call__"),Ay.forEach(t),fb=s(Si," special method."),Si.forEach(t),gb=p(es),y(En.$$.fragment,es),_b=p(es),y(jn.$$.fragment,es),es.forEach(t),ft.forEach(t),Cc=p(o),Mo=r(o,"H2",{class:!0});var Jp=i(Mo);On=r(Jp,"A",{id:!0,class:!0,href:!0});var Py=i(On);ad=r(Py,"SPAN",{});var Sy=i(ad);y(dr.$$.fragment,Sy),Sy.forEach(t),Py.forEach(t),kb=p(Jp),rd=r(Jp,"SPAN",{});var Dy=i(rd);bb=s(Dy,"TFXLNetForTokenClassification"),Dy.forEach(t),Jp.forEach(t),Ec=p(o),Se=r(o,"DIV",{class:!0});var gt=i(Se);y(cr.$$.fragment,gt),Tb=p(gt),id=r(gt,"P",{});var Iy=i(id);vb=s(Iy,`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Iy.forEach(t),yb=p(gt),pr=r(gt,"P",{});var Zp=i(pr);wb=s(Zp,"This model inherits from "),ki=r(Zp,"A",{href:!0});var Hy=i(ki);$b=s(Hy,"TFPreTrainedModel"),Hy.forEach(t),Nb=s(Zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zp.forEach(t),Lb=p(gt),mr=r(gt,"P",{});var em=i(mr);xb=s(em,"This model is also a "),hr=r(em,"A",{href:!0,rel:!0});var Qy=i(hr);Fb=s(Qy,"tf.keras.Model"),Qy.forEach(t),Xb=s(em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),em.forEach(t),qb=p(gt),y(An.$$.fragment,gt),Mb=p(gt),Je=r(gt,"DIV",{class:!0});var At=i(Je);y(ur.$$.fragment,At),zb=p(At),zo=r(At,"P",{});var Di=i(zo);Cb=s(Di,"The "),bi=r(Di,"A",{href:!0});var Wy=i(bi);Eb=s(Wy,"TFXLNetForTokenClassification"),Wy.forEach(t),jb=s(Di," forward method, overrides the "),ld=r(Di,"CODE",{});var Uy=i(ld);Ob=s(Uy,"__call__"),Uy.forEach(t),Ab=s(Di," special method."),Di.forEach(t),Pb=p(At),y(Pn.$$.fragment,At),Sb=p(At),y(Sn.$$.fragment,At),Db=p(At),y(Dn.$$.fragment,At),At.forEach(t),gt.forEach(t),jc=p(o),Co=r(o,"H2",{class:!0});var tm=i(Co);In=r(tm,"A",{id:!0,class:!0,href:!0});var Vy=i(In);dd=r(Vy,"SPAN",{});var By=i(dd);y(fr.$$.fragment,By),By.forEach(t),Vy.forEach(t),Ib=p(tm),cd=r(tm,"SPAN",{});var Ry=i(cd);Hb=s(Ry,"TFXLNetForQuestionAnsweringSimple"),Ry.forEach(t),tm.forEach(t),Oc=p(o),De=r(o,"DIV",{class:!0});var _t=i(De);y(gr.$$.fragment,_t),Qb=p(_t),Eo=r(_t,"P",{});var Ii=i(Eo);Wb=s(Ii,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pd=r(Ii,"CODE",{});var Ky=i(pd);Ub=s(Ky,"span start logits"),Ky.forEach(t),Vb=s(Ii," and "),md=r(Ii,"CODE",{});var Yy=i(md);Bb=s(Yy,"span end logits"),Yy.forEach(t),Rb=s(Ii,")."),Ii.forEach(t),Kb=p(_t),_r=r(_t,"P",{});var om=i(_r);Yb=s(om,"This model inherits from "),Ti=r(om,"A",{href:!0});var Gy=i(Ti);Gb=s(Gy,"TFPreTrainedModel"),Gy.forEach(t),Jb=s(om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om.forEach(t),Zb=p(_t),kr=r(_t,"P",{});var nm=i(kr);eT=s(nm,"This model is also a "),br=r(nm,"A",{href:!0,rel:!0});var Jy=i(br);tT=s(Jy,"tf.keras.Model"),Jy.forEach(t),oT=s(nm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nm.forEach(t),nT=p(_t),y(Hn.$$.fragment,_t),sT=p(_t),Ze=r(_t,"DIV",{class:!0});var Pt=i(Ze);y(Tr.$$.fragment,Pt),aT=p(Pt),jo=r(Pt,"P",{});var Hi=i(jo);rT=s(Hi,"The "),vi=r(Hi,"A",{href:!0});var Zy=i(vi);iT=s(Zy,"TFXLNetForQuestionAnsweringSimple"),Zy.forEach(t),lT=s(Hi," forward method, overrides the "),hd=r(Hi,"CODE",{});var ew=i(hd);dT=s(ew,"__call__"),ew.forEach(t),cT=s(Hi," special method."),Hi.forEach(t),pT=p(Pt),y(Qn.$$.fragment,Pt),mT=p(Pt),y(Wn.$$.fragment,Pt),hT=p(Pt),y(Un.$$.fragment,Pt),Pt.forEach(t),_t.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(Yw)),g(h,"id","xlnet"),g(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(h,"href","#xlnet"),g(m,"class","relative group"),g(Z,"id","overview"),g(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Z,"href","#overview"),g(q,"class","relative group"),g(te,"href","https://arxiv.org/abs/1906.08237"),g(te,"rel","nofollow"),g(ts,"href","https://huggingface.co/thomwolf"),g(ts,"rel","nofollow"),g(os,"href","https://github.com/zihangdai/xlnet/"),g(os,"rel","nofollow"),g(Po,"id","transformers.XLNetConfig"),g(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Po,"href","#transformers.XLNetConfig"),g(St,"class","relative group"),g(Fr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetModel"),g(Xr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetModel"),g(as,"href","https://huggingface.co/xlnet-large-cased"),g(as,"rel","nofollow"),g(qr,"href","/docs/transformers/pr_17623/en/main_classes/configuration#transformers.PretrainedConfig"),g(Mr,"href","/docs/transformers/pr_17623/en/main_classes/configuration#transformers.PretrainedConfig"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Do,"id","transformers.XLNetTokenizer"),g(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Do,"href","#transformers.XLNetTokenizer"),g(It,"class","relative group"),g(ds,"href","https://github.com/google/sentencepiece"),g(ds,"rel","nofollow"),g(zr,"href","/docs/transformers/pr_17623/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(jr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qo,"id","transformers.XLNetTokenizerFast"),g(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qo,"href","#transformers.XLNetTokenizerFast"),g(Qt,"class","relative group"),g(bs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),g(bs,"rel","nofollow"),g(Or,"href","/docs/transformers/pr_17623/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Uo,"id","transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"),g(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Uo,"href","#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"),g(Vt,"class","relative group"),g(Sr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetModel"),g(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Dr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetLMHeadModel"),g(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ir,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForSequenceClassification"),g(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Hr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForMultipleChoice"),g(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple"),g(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering"),g(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ur,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetModel"),g(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel"),g(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Br,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification"),g(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Rr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice"),g(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Kr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple"),g(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vo,"id","transformers.XLNetModel"),g(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Vo,"href","#transformers.XLNetModel"),g(ro,"class","relative group"),g(Yr,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel"),g(ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ta,"rel","nofollow"),g(Gr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetModel"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ko,"id","transformers.XLNetLMHeadModel"),g(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ko,"href","#transformers.XLNetLMHeadModel"),g(lo,"class","relative group"),g(Jr,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel"),g(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ia,"rel","nofollow"),g(Zr,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetLMHeadModel"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Jo,"id","transformers.XLNetForSequenceClassification"),g(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Jo,"href","#transformers.XLNetForSequenceClassification"),g(po,"class","relative group"),g(ei,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel"),g(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ha,"rel","nofollow"),g(ti,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForSequenceClassification"),g(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(sn,"id","transformers.XLNetForMultipleChoice"),g(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(sn,"href","#transformers.XLNetForMultipleChoice"),g(ho,"class","relative group"),g(oi,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel"),g(ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ba,"rel","nofollow"),g(ni,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForMultipleChoice"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.XLNetForTokenClassification"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.XLNetForTokenClassification"),g(fo,"class","relative group"),g(si,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel"),g(Na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Na,"rel","nofollow"),g(ai,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForTokenClassification"),g(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mn,"id","transformers.XLNetForQuestionAnsweringSimple"),g(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(mn,"href","#transformers.XLNetForQuestionAnsweringSimple"),g(_o,"class","relative group"),g(ri,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel"),g(Ma,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ma,"rel","nofollow"),g(ii,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple"),g(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gn,"id","transformers.XLNetForQuestionAnswering"),g(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(gn,"href","#transformers.XLNetForQuestionAnswering"),g(To,"class","relative group"),g(li,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.PreTrainedModel"),g(Aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Aa,"rel","nofollow"),g(di,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bn,"id","transformers.TFXLNetModel"),g(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(bn,"href","#transformers.TFXLNetModel"),g(wo,"class","relative group"),g(ci,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.TFPreTrainedModel"),g(Qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Qa,"rel","nofollow"),g(pi,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetModel"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wn,"id","transformers.TFXLNetLMHeadModel"),g(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(wn,"href","#transformers.TFXLNetLMHeadModel"),g(No,"class","relative group"),g(mi,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ka,"rel","nofollow"),g(hi,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xn,"id","transformers.TFXLNetForSequenceClassification"),g(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(xn,"href","#transformers.TFXLNetForSequenceClassification"),g(xo,"class","relative group"),g(ui,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.TFPreTrainedModel"),g(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(tr,"rel","nofollow"),g(fi,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification"),g(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(zn,"id","transformers.TFXLNetForMultipleChoice"),g(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(zn,"href","#transformers.TFXLNetForMultipleChoice"),g(Xo,"class","relative group"),g(gi,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.TFPreTrainedModel"),g(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ir,"rel","nofollow"),g(_i,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(On,"id","transformers.TFXLNetForTokenClassification"),g(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(On,"href","#transformers.TFXLNetForTokenClassification"),g(Mo,"class","relative group"),g(ki,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.TFPreTrainedModel"),g(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(hr,"rel","nofollow"),g(bi,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetForTokenClassification"),g(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(In,"id","transformers.TFXLNetForQuestionAnsweringSimple"),g(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(In,"href","#transformers.TFXLNetForQuestionAnsweringSimple"),g(Co,"class","relative group"),g(Ti,"href","/docs/transformers/pr_17623/en/main_classes/model#transformers.TFPreTrainedModel"),g(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(br,"rel","nofollow"),g(vi,"href","/docs/transformers/pr_17623/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),f(o,b,_),f(o,m,_),e(m,h),e(h,T),w(l,T,null),e(m,u),e(m,X),e(X,pe),f(o,Y,_),f(o,q,_),e(q,Z),e(Z,D),w(ee,D,null),e(q,me),e(q,I),e(I,he),f(o,le,_),f(o,R,_),e(R,O),e(R,te),e(te,G),e(R,M),f(o,C,_),f(o,ne,_),e(ne,W),f(o,de,_),f(o,se,_),e(se,H),e(H,ue),f(o,ce,_),f(o,z,_),e(z,fe),f(o,Q,_),f(o,K,_),e(K,oe),e(oe,U),e(oe,ae),e(ae,ge),e(oe,A),e(K,_e),e(K,S),e(S,ke),e(S,k),e(k,F),e(S,J),e(K,$e),e(K,re),e(re,P),e(re,ye),e(ye,Ne),e(re,Le),e(re,j),e(j,V),e(re,xe),e(re,we),e(we,B),e(re,Fe),e(K,Xe),e(K,ie),e(ie,qe),f(o,Wd,_),f(o,wt,_),e(wt,sm),e(wt,ts),e(ts,am),e(wt,rm),e(wt,os),e(os,im),e(wt,lm),f(o,Ud,_),f(o,St,_),e(St,Po),e(Po,Qi),w(ns,Qi,null),e(St,dm),e(St,Wi),e(Wi,cm),f(o,Vd,_),f(o,ot,_),w(ss,ot,null),e(ot,pm),e(ot,kt),e(kt,mm),e(kt,Fr),e(Fr,hm),e(kt,um),e(kt,Xr),e(Xr,fm),e(kt,gm),e(kt,as),e(as,_m),e(kt,km),e(ot,bm),e(ot,Dt),e(Dt,Tm),e(Dt,qr),e(qr,vm),e(Dt,ym),e(Dt,Mr),e(Mr,wm),e(Dt,$m),e(ot,Nm),w(So,ot,null),f(o,Bd,_),f(o,It,_),e(It,Do),e(Do,Ui),w(rs,Ui,null),e(It,Lm),e(It,Vi),e(Vi,xm),f(o,Rd,_),f(o,Me,_),w(is,Me,null),e(Me,Fm),e(Me,ls),e(ls,Xm),e(ls,ds),e(ds,qm),e(ls,Mm),e(Me,zm),e(Me,cs),e(cs,Cm),e(cs,zr),e(zr,Em),e(cs,jm),e(Me,Om),e(Me,$t),w(ps,$t,null),e($t,Am),e($t,Bi),e(Bi,Pm),e($t,Sm),e($t,ms),e(ms,Cr),e(Cr,Dm),e(Cr,Ri),e(Ri,Im),e(ms,Hm),e(ms,Er),e(Er,Qm),e(Er,Ki),e(Ki,Wm),e(Me,Um),e(Me,Io),w(hs,Io,null),e(Io,Vm),e(Io,us),e(us,Bm),e(us,Yi),e(Yi,Rm),e(us,Km),e(Me,Ym),e(Me,nt),w(fs,nt,null),e(nt,Gm),e(nt,Gi),e(Gi,Jm),e(nt,Zm),w(Ho,nt,null),e(nt,eh),e(nt,Ht),e(Ht,th),e(Ht,Ji),e(Ji,oh),e(Ht,nh),e(Ht,Zi),e(Zi,sh),e(Ht,ah),e(Me,rh),e(Me,jr),w(gs,jr,null),f(o,Kd,_),f(o,Qt,_),e(Qt,Qo),e(Qo,el),w(_s,el,null),e(Qt,ih),e(Qt,tl),e(tl,lh),f(o,Yd,_),f(o,Ie,_),w(ks,Ie,null),e(Ie,dh),e(Ie,Wt),e(Wt,ch),e(Wt,ol),e(ol,ph),e(Wt,mh),e(Wt,bs),e(bs,hh),e(Wt,uh),e(Ie,fh),e(Ie,Ts),e(Ts,gh),e(Ts,Or),e(Or,_h),e(Ts,kh),e(Ie,bh),e(Ie,Nt),w(vs,Nt,null),e(Nt,Th),e(Nt,nl),e(nl,vh),e(Nt,yh),e(Nt,ys),e(ys,Ar),e(Ar,wh),e(Ar,sl),e(sl,$h),e(ys,Nh),e(ys,Pr),e(Pr,Lh),e(Pr,al),e(al,xh),e(Ie,Fh),e(Ie,st),w(ws,st,null),e(st,Xh),e(st,rl),e(rl,qh),e(st,Mh),w(Wo,st,null),e(st,zh),e(st,Ut),e(Ut,Ch),e(Ut,il),e(il,Eh),e(Ut,jh),e(Ut,ll),e(ll,Oh),e(Ut,Ah),f(o,Gd,_),f(o,Vt,_),e(Vt,Uo),e(Uo,dl),w($s,dl,null),e(Vt,Ph),e(Vt,cl),e(cl,Sh),f(o,Jd,_),f(o,Bt,_),w(Ns,Bt,null),e(Bt,Dh),e(Bt,Ls),e(Ls,Ih),e(Ls,Sr),e(Sr,Hh),e(Ls,Qh),f(o,Zd,_),f(o,Rt,_),w(xs,Rt,null),e(Rt,Wh),e(Rt,Fs),e(Fs,Uh),e(Fs,Dr),e(Dr,Vh),e(Fs,Bh),f(o,ec,_),f(o,Kt,_),w(Xs,Kt,null),e(Kt,Rh),e(Kt,qs),e(qs,Kh),e(qs,Ir),e(Ir,Yh),e(qs,Gh),f(o,tc,_),f(o,Yt,_),w(Ms,Yt,null),e(Yt,Jh),e(Yt,zs),e(zs,Zh),e(zs,Hr),e(Hr,eu),e(zs,tu),f(o,oc,_),f(o,Gt,_),w(Cs,Gt,null),e(Gt,ou),e(Gt,Es),e(Es,nu),e(Es,pl),e(pl,su),e(Es,au),f(o,nc,_),f(o,Jt,_),w(js,Jt,null),e(Jt,ru),e(Jt,Os),e(Os,iu),e(Os,Qr),e(Qr,lu),e(Os,du),f(o,sc,_),f(o,Zt,_),w(As,Zt,null),e(Zt,cu),e(Zt,Ps),e(Ps,pu),e(Ps,Wr),e(Wr,mu),e(Ps,hu),f(o,ac,_),f(o,eo,_),w(Ss,eo,null),e(eo,uu),e(eo,Ds),e(Ds,fu),e(Ds,Ur),e(Ur,gu),e(Ds,_u),f(o,rc,_),f(o,to,_),w(Is,to,null),e(to,ku),e(to,Hs),e(Hs,bu),e(Hs,Vr),e(Vr,Tu),e(Hs,vu),f(o,ic,_),f(o,oo,_),w(Qs,oo,null),e(oo,yu),e(oo,Ws),e(Ws,wu),e(Ws,Br),e(Br,$u),e(Ws,Nu),f(o,lc,_),f(o,no,_),w(Us,no,null),e(no,Lu),e(no,Vs),e(Vs,xu),e(Vs,Rr),e(Rr,Fu),e(Vs,Xu),f(o,dc,_),f(o,so,_),w(Bs,so,null),e(so,qu),e(so,Rs),e(Rs,Mu),e(Rs,ml),e(ml,zu),e(Rs,Cu),f(o,cc,_),f(o,ao,_),w(Ks,ao,null),e(ao,Eu),e(ao,Ys),e(Ys,ju),e(Ys,Kr),e(Kr,Ou),e(Ys,Au),f(o,pc,_),f(o,ro,_),e(ro,Vo),e(Vo,hl),w(Gs,hl,null),e(ro,Pu),e(ro,ul),e(ul,Su),f(o,mc,_),f(o,He,_),w(Js,He,null),e(He,Du),e(He,fl),e(fl,Iu),e(He,Hu),e(He,Zs),e(Zs,Qu),e(Zs,Yr),e(Yr,Wu),e(Zs,Uu),e(He,Vu),e(He,ea),e(ea,Bu),e(ea,ta),e(ta,Ru),e(ea,Ku),e(He,Yu),e(He,at),w(oa,at,null),e(at,Gu),e(at,io),e(io,Ju),e(io,Gr),e(Gr,Zu),e(io,ef),e(io,gl),e(gl,tf),e(io,of),e(at,nf),w(Bo,at,null),e(at,sf),w(Ro,at,null),f(o,hc,_),f(o,lo,_),e(lo,Ko),e(Ko,_l),w(na,_l,null),e(lo,af),e(lo,kl),e(kl,rf),f(o,uc,_),f(o,Qe,_),w(sa,Qe,null),e(Qe,lf),e(Qe,bl),e(bl,df),e(Qe,cf),e(Qe,aa),e(aa,pf),e(aa,Jr),e(Jr,mf),e(aa,hf),e(Qe,uf),e(Qe,ra),e(ra,ff),e(ra,ia),e(ia,gf),e(ra,_f),e(Qe,kf),e(Qe,rt),w(la,rt,null),e(rt,bf),e(rt,co),e(co,Tf),e(co,Zr),e(Zr,vf),e(co,yf),e(co,Tl),e(Tl,wf),e(co,$f),e(rt,Nf),w(Yo,rt,null),e(rt,Lf),w(Go,rt,null),f(o,fc,_),f(o,po,_),e(po,Jo),e(Jo,vl),w(da,vl,null),e(po,xf),e(po,yl),e(yl,Ff),f(o,gc,_),f(o,We,_),w(ca,We,null),e(We,Xf),e(We,wl),e(wl,qf),e(We,Mf),e(We,pa),e(pa,zf),e(pa,ei),e(ei,Cf),e(pa,Ef),e(We,jf),e(We,ma),e(ma,Of),e(ma,ha),e(ha,Af),e(ma,Pf),e(We,Sf),e(We,Ee),w(ua,Ee,null),e(Ee,Df),e(Ee,mo),e(mo,If),e(mo,ti),e(ti,Hf),e(mo,Qf),e(mo,$l),e($l,Wf),e(mo,Uf),e(Ee,Vf),w(Zo,Ee,null),e(Ee,Bf),w(en,Ee,null),e(Ee,Rf),w(tn,Ee,null),e(Ee,Kf),w(on,Ee,null),e(Ee,Yf),w(nn,Ee,null),f(o,_c,_),f(o,ho,_),e(ho,sn),e(sn,Nl),w(fa,Nl,null),e(ho,Gf),e(ho,Ll),e(Ll,Jf),f(o,kc,_),f(o,Ue,_),w(ga,Ue,null),e(Ue,Zf),e(Ue,xl),e(xl,eg),e(Ue,tg),e(Ue,_a),e(_a,og),e(_a,oi),e(oi,ng),e(_a,sg),e(Ue,ag),e(Ue,ka),e(ka,rg),e(ka,ba),e(ba,ig),e(ka,lg),e(Ue,dg),e(Ue,it),w(Ta,it,null),e(it,cg),e(it,uo),e(uo,pg),e(uo,ni),e(ni,mg),e(uo,hg),e(uo,Fl),e(Fl,ug),e(uo,fg),e(it,gg),w(an,it,null),e(it,_g),w(rn,it,null),f(o,bc,_),f(o,fo,_),e(fo,ln),e(ln,Xl),w(va,Xl,null),e(fo,kg),e(fo,ql),e(ql,bg),f(o,Tc,_),f(o,Ve,_),w(ya,Ve,null),e(Ve,Tg),e(Ve,Ml),e(Ml,vg),e(Ve,yg),e(Ve,wa),e(wa,wg),e(wa,si),e(si,$g),e(wa,Ng),e(Ve,Lg),e(Ve,$a),e($a,xg),e($a,Na),e(Na,Fg),e($a,Xg),e(Ve,qg),e(Ve,Ke),w(La,Ke,null),e(Ke,Mg),e(Ke,go),e(go,zg),e(go,ai),e(ai,Cg),e(go,Eg),e(go,zl),e(zl,jg),e(go,Og),e(Ke,Ag),w(dn,Ke,null),e(Ke,Pg),w(cn,Ke,null),e(Ke,Sg),w(pn,Ke,null),f(o,vc,_),f(o,_o,_),e(_o,mn),e(mn,Cl),w(xa,Cl,null),e(_o,Dg),e(_o,El),e(El,Ig),f(o,yc,_),f(o,Be,_),w(Fa,Be,null),e(Be,Hg),e(Be,ko),e(ko,Qg),e(ko,jl),e(jl,Wg),e(ko,Ug),e(ko,Ol),e(Ol,Vg),e(ko,Bg),e(Be,Rg),e(Be,Xa),e(Xa,Kg),e(Xa,ri),e(ri,Yg),e(Xa,Gg),e(Be,Jg),e(Be,qa),e(qa,Zg),e(qa,Ma),e(Ma,e_),e(qa,t_),e(Be,o_),e(Be,Ye),w(za,Ye,null),e(Ye,n_),e(Ye,bo),e(bo,s_),e(bo,ii),e(ii,a_),e(bo,r_),e(bo,Al),e(Al,i_),e(bo,l_),e(Ye,d_),w(hn,Ye,null),e(Ye,c_),w(un,Ye,null),e(Ye,p_),w(fn,Ye,null),f(o,wc,_),f(o,To,_),e(To,gn),e(gn,Pl),w(Ca,Pl,null),e(To,m_),e(To,Sl),e(Sl,h_),f(o,$c,_),f(o,Re,_),w(Ea,Re,null),e(Re,u_),e(Re,vo),e(vo,f_),e(vo,Dl),e(Dl,g_),e(vo,__),e(vo,Il),e(Il,k_),e(vo,b_),e(Re,T_),e(Re,ja),e(ja,v_),e(ja,li),e(li,y_),e(ja,w_),e(Re,$_),e(Re,Oa),e(Oa,N_),e(Oa,Aa),e(Aa,L_),e(Oa,x_),e(Re,F_),e(Re,lt),w(Pa,lt,null),e(lt,X_),e(lt,yo),e(yo,q_),e(yo,di),e(di,M_),e(yo,z_),e(yo,Hl),e(Hl,C_),e(yo,E_),e(lt,j_),w(_n,lt,null),e(lt,O_),w(kn,lt,null),f(o,Nc,_),f(o,wo,_),e(wo,bn),e(bn,Ql),w(Sa,Ql,null),e(wo,A_),e(wo,Wl),e(Wl,P_),f(o,Lc,_),f(o,je,_),w(Da,je,null),e(je,S_),e(je,Ul),e(Ul,D_),e(je,I_),e(je,Ia),e(Ia,H_),e(Ia,ci),e(ci,Q_),e(Ia,W_),e(je,U_),e(je,Ha),e(Ha,V_),e(Ha,Qa),e(Qa,B_),e(Ha,R_),e(je,K_),w(Tn,je,null),e(je,Y_),e(je,dt),w(Wa,dt,null),e(dt,G_),e(dt,$o),e($o,J_),e($o,pi),e(pi,Z_),e($o,ek),e($o,Vl),e(Vl,tk),e($o,ok),e(dt,nk),w(vn,dt,null),e(dt,sk),w(yn,dt,null),f(o,xc,_),f(o,No,_),e(No,wn),e(wn,Bl),w(Ua,Bl,null),e(No,ak),e(No,Rl),e(Rl,rk),f(o,Fc,_),f(o,Oe,_),w(Va,Oe,null),e(Oe,ik),e(Oe,Kl),e(Kl,lk),e(Oe,dk),e(Oe,Ba),e(Ba,ck),e(Ba,mi),e(mi,pk),e(Ba,mk),e(Oe,hk),e(Oe,Ra),e(Ra,uk),e(Ra,Ka),e(Ka,fk),e(Ra,gk),e(Oe,_k),w($n,Oe,null),e(Oe,kk),e(Oe,ct),w(Ya,ct,null),e(ct,bk),e(ct,Lo),e(Lo,Tk),e(Lo,hi),e(hi,vk),e(Lo,yk),e(Lo,Yl),e(Yl,wk),e(Lo,$k),e(ct,Nk),w(Nn,ct,null),e(ct,Lk),w(Ln,ct,null),f(o,Xc,_),f(o,xo,_),e(xo,xn),e(xn,Gl),w(Ga,Gl,null),e(xo,xk),e(xo,Jl),e(Jl,Fk),f(o,qc,_),f(o,Ae,_),w(Ja,Ae,null),e(Ae,Xk),e(Ae,Zl),e(Zl,qk),e(Ae,Mk),e(Ae,Za),e(Za,zk),e(Za,ui),e(ui,Ck),e(Za,Ek),e(Ae,jk),e(Ae,er),e(er,Ok),e(er,tr),e(tr,Ak),e(er,Pk),e(Ae,Sk),w(Fn,Ae,null),e(Ae,Dk),e(Ae,Ge),w(or,Ge,null),e(Ge,Ik),e(Ge,Fo),e(Fo,Hk),e(Fo,fi),e(fi,Qk),e(Fo,Wk),e(Fo,ed),e(ed,Uk),e(Fo,Vk),e(Ge,Bk),w(Xn,Ge,null),e(Ge,Rk),w(qn,Ge,null),e(Ge,Kk),w(Mn,Ge,null),f(o,Mc,_),f(o,Xo,_),e(Xo,zn),e(zn,td),w(nr,td,null),e(Xo,Yk),e(Xo,od),e(od,Gk),f(o,zc,_),f(o,Pe,_),w(sr,Pe,null),e(Pe,Jk),e(Pe,nd),e(nd,Zk),e(Pe,eb),e(Pe,ar),e(ar,tb),e(ar,gi),e(gi,ob),e(ar,nb),e(Pe,sb),e(Pe,rr),e(rr,ab),e(rr,ir),e(ir,rb),e(rr,ib),e(Pe,lb),w(Cn,Pe,null),e(Pe,db),e(Pe,pt),w(lr,pt,null),e(pt,cb),e(pt,qo),e(qo,pb),e(qo,_i),e(_i,mb),e(qo,hb),e(qo,sd),e(sd,ub),e(qo,fb),e(pt,gb),w(En,pt,null),e(pt,_b),w(jn,pt,null),f(o,Cc,_),f(o,Mo,_),e(Mo,On),e(On,ad),w(dr,ad,null),e(Mo,kb),e(Mo,rd),e(rd,bb),f(o,Ec,_),f(o,Se,_),w(cr,Se,null),e(Se,Tb),e(Se,id),e(id,vb),e(Se,yb),e(Se,pr),e(pr,wb),e(pr,ki),e(ki,$b),e(pr,Nb),e(Se,Lb),e(Se,mr),e(mr,xb),e(mr,hr),e(hr,Fb),e(mr,Xb),e(Se,qb),w(An,Se,null),e(Se,Mb),e(Se,Je),w(ur,Je,null),e(Je,zb),e(Je,zo),e(zo,Cb),e(zo,bi),e(bi,Eb),e(zo,jb),e(zo,ld),e(ld,Ob),e(zo,Ab),e(Je,Pb),w(Pn,Je,null),e(Je,Sb),w(Sn,Je,null),e(Je,Db),w(Dn,Je,null),f(o,jc,_),f(o,Co,_),e(Co,In),e(In,dd),w(fr,dd,null),e(Co,Ib),e(Co,cd),e(cd,Hb),f(o,Oc,_),f(o,De,_),w(gr,De,null),e(De,Qb),e(De,Eo),e(Eo,Wb),e(Eo,pd),e(pd,Ub),e(Eo,Vb),e(Eo,md),e(md,Bb),e(Eo,Rb),e(De,Kb),e(De,_r),e(_r,Yb),e(_r,Ti),e(Ti,Gb),e(_r,Jb),e(De,Zb),e(De,kr),e(kr,eT),e(kr,br),e(br,tT),e(kr,oT),e(De,nT),w(Hn,De,null),e(De,sT),e(De,Ze),w(Tr,Ze,null),e(Ze,aT),e(Ze,jo),e(jo,rT),e(jo,vi),e(vi,iT),e(jo,lT),e(jo,hd),e(hd,dT),e(jo,cT),e(Ze,pT),w(Qn,Ze,null),e(Ze,mT),w(Wn,Ze,null),e(Ze,hT),w(Un,Ze,null),Ac=!0},p(o,[_]){const vr={};_&2&&(vr.$$scope={dirty:_,ctx:o}),So.$set(vr);const ud={};_&2&&(ud.$$scope={dirty:_,ctx:o}),Ho.$set(ud);const fd={};_&2&&(fd.$$scope={dirty:_,ctx:o}),Wo.$set(fd);const gd={};_&2&&(gd.$$scope={dirty:_,ctx:o}),Bo.$set(gd);const yr={};_&2&&(yr.$$scope={dirty:_,ctx:o}),Ro.$set(yr);const _d={};_&2&&(_d.$$scope={dirty:_,ctx:o}),Yo.$set(_d);const kd={};_&2&&(kd.$$scope={dirty:_,ctx:o}),Go.$set(kd);const bd={};_&2&&(bd.$$scope={dirty:_,ctx:o}),Zo.$set(bd);const wr={};_&2&&(wr.$$scope={dirty:_,ctx:o}),en.$set(wr);const Td={};_&2&&(Td.$$scope={dirty:_,ctx:o}),tn.$set(Td);const vd={};_&2&&(vd.$$scope={dirty:_,ctx:o}),on.$set(vd);const yd={};_&2&&(yd.$$scope={dirty:_,ctx:o}),nn.$set(yd);const wd={};_&2&&(wd.$$scope={dirty:_,ctx:o}),an.$set(wd);const $d={};_&2&&($d.$$scope={dirty:_,ctx:o}),rn.$set($d);const bt={};_&2&&(bt.$$scope={dirty:_,ctx:o}),dn.$set(bt);const $r={};_&2&&($r.$$scope={dirty:_,ctx:o}),cn.$set($r);const Nd={};_&2&&(Nd.$$scope={dirty:_,ctx:o}),pn.$set(Nd);const Nr={};_&2&&(Nr.$$scope={dirty:_,ctx:o}),hn.$set(Nr);const Ld={};_&2&&(Ld.$$scope={dirty:_,ctx:o}),un.$set(Ld);const Tt={};_&2&&(Tt.$$scope={dirty:_,ctx:o}),fn.$set(Tt);const xd={};_&2&&(xd.$$scope={dirty:_,ctx:o}),_n.$set(xd);const Fd={};_&2&&(Fd.$$scope={dirty:_,ctx:o}),kn.$set(Fd);const Xd={};_&2&&(Xd.$$scope={dirty:_,ctx:o}),Tn.$set(Xd);const qd={};_&2&&(qd.$$scope={dirty:_,ctx:o}),vn.$set(qd);const Oo={};_&2&&(Oo.$$scope={dirty:_,ctx:o}),yn.$set(Oo);const Md={};_&2&&(Md.$$scope={dirty:_,ctx:o}),$n.$set(Md);const zd={};_&2&&(zd.$$scope={dirty:_,ctx:o}),Nn.$set(zd);const Lr={};_&2&&(Lr.$$scope={dirty:_,ctx:o}),Ln.$set(Lr);const Cd={};_&2&&(Cd.$$scope={dirty:_,ctx:o}),Fn.$set(Cd);const Ed={};_&2&&(Ed.$$scope={dirty:_,ctx:o}),Xn.$set(Ed);const jd={};_&2&&(jd.$$scope={dirty:_,ctx:o}),qn.$set(jd);const vt={};_&2&&(vt.$$scope={dirty:_,ctx:o}),Mn.$set(vt);const yt={};_&2&&(yt.$$scope={dirty:_,ctx:o}),Cn.$set(yt);const Od={};_&2&&(Od.$$scope={dirty:_,ctx:o}),En.$set(Od);const Ad={};_&2&&(Ad.$$scope={dirty:_,ctx:o}),jn.$set(Ad);const Pd={};_&2&&(Pd.$$scope={dirty:_,ctx:o}),An.$set(Pd);const Ao={};_&2&&(Ao.$$scope={dirty:_,ctx:o}),Pn.$set(Ao);const Sd={};_&2&&(Sd.$$scope={dirty:_,ctx:o}),Sn.$set(Sd);const Dd={};_&2&&(Dd.$$scope={dirty:_,ctx:o}),Dn.$set(Dd);const xr={};_&2&&(xr.$$scope={dirty:_,ctx:o}),Hn.$set(xr);const Id={};_&2&&(Id.$$scope={dirty:_,ctx:o}),Qn.$set(Id);const Hd={};_&2&&(Hd.$$scope={dirty:_,ctx:o}),Wn.$set(Hd);const Qd={};_&2&&(Qd.$$scope={dirty:_,ctx:o}),Un.$set(Qd)},i(o){Ac||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(So.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(Ho.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$(Wo.$$.fragment,o),$($s.$$.fragment,o),$(Ns.$$.fragment,o),$(xs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ms.$$.fragment,o),$(Cs.$$.fragment,o),$(js.$$.fragment,o),$(As.$$.fragment,o),$(Ss.$$.fragment,o),$(Is.$$.fragment,o),$(Qs.$$.fragment,o),$(Us.$$.fragment,o),$(Bs.$$.fragment,o),$(Ks.$$.fragment,o),$(Gs.$$.fragment,o),$(Js.$$.fragment,o),$(oa.$$.fragment,o),$(Bo.$$.fragment,o),$(Ro.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(la.$$.fragment,o),$(Yo.$$.fragment,o),$(Go.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(ua.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),$(Ta.$$.fragment,o),$(an.$$.fragment,o),$(rn.$$.fragment,o),$(va.$$.fragment,o),$(ya.$$.fragment,o),$(La.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(xa.$$.fragment,o),$(Fa.$$.fragment,o),$(za.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(Ca.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(_n.$$.fragment,o),$(kn.$$.fragment,o),$(Sa.$$.fragment,o),$(Da.$$.fragment,o),$(Tn.$$.fragment,o),$(Wa.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$(Ua.$$.fragment,o),$(Va.$$.fragment,o),$($n.$$.fragment,o),$(Ya.$$.fragment,o),$(Nn.$$.fragment,o),$(Ln.$$.fragment,o),$(Ga.$$.fragment,o),$(Ja.$$.fragment,o),$(Fn.$$.fragment,o),$(or.$$.fragment,o),$(Xn.$$.fragment,o),$(qn.$$.fragment,o),$(Mn.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(Cn.$$.fragment,o),$(lr.$$.fragment,o),$(En.$$.fragment,o),$(jn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(An.$$.fragment,o),$(ur.$$.fragment,o),$(Pn.$$.fragment,o),$(Sn.$$.fragment,o),$(Dn.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(Hn.$$.fragment,o),$(Tr.$$.fragment,o),$(Qn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),Ac=!0)},o(o){N(l.$$.fragment,o),N(ee.$$.fragment,o),N(ns.$$.fragment,o),N(ss.$$.fragment,o),N(So.$$.fragment,o),N(rs.$$.fragment,o),N(is.$$.fragment,o),N(ps.$$.fragment,o),N(hs.$$.fragment,o),N(fs.$$.fragment,o),N(Ho.$$.fragment,o),N(gs.$$.fragment,o),N(_s.$$.fragment,o),N(ks.$$.fragment,o),N(vs.$$.fragment,o),N(ws.$$.fragment,o),N(Wo.$$.fragment,o),N($s.$$.fragment,o),N(Ns.$$.fragment,o),N(xs.$$.fragment,o),N(Xs.$$.fragment,o),N(Ms.$$.fragment,o),N(Cs.$$.fragment,o),N(js.$$.fragment,o),N(As.$$.fragment,o),N(Ss.$$.fragment,o),N(Is.$$.fragment,o),N(Qs.$$.fragment,o),N(Us.$$.fragment,o),N(Bs.$$.fragment,o),N(Ks.$$.fragment,o),N(Gs.$$.fragment,o),N(Js.$$.fragment,o),N(oa.$$.fragment,o),N(Bo.$$.fragment,o),N(Ro.$$.fragment,o),N(na.$$.fragment,o),N(sa.$$.fragment,o),N(la.$$.fragment,o),N(Yo.$$.fragment,o),N(Go.$$.fragment,o),N(da.$$.fragment,o),N(ca.$$.fragment,o),N(ua.$$.fragment,o),N(Zo.$$.fragment,o),N(en.$$.fragment,o),N(tn.$$.fragment,o),N(on.$$.fragment,o),N(nn.$$.fragment,o),N(fa.$$.fragment,o),N(ga.$$.fragment,o),N(Ta.$$.fragment,o),N(an.$$.fragment,o),N(rn.$$.fragment,o),N(va.$$.fragment,o),N(ya.$$.fragment,o),N(La.$$.fragment,o),N(dn.$$.fragment,o),N(cn.$$.fragment,o),N(pn.$$.fragment,o),N(xa.$$.fragment,o),N(Fa.$$.fragment,o),N(za.$$.fragment,o),N(hn.$$.fragment,o),N(un.$$.fragment,o),N(fn.$$.fragment,o),N(Ca.$$.fragment,o),N(Ea.$$.fragment,o),N(Pa.$$.fragment,o),N(_n.$$.fragment,o),N(kn.$$.fragment,o),N(Sa.$$.fragment,o),N(Da.$$.fragment,o),N(Tn.$$.fragment,o),N(Wa.$$.fragment,o),N(vn.$$.fragment,o),N(yn.$$.fragment,o),N(Ua.$$.fragment,o),N(Va.$$.fragment,o),N($n.$$.fragment,o),N(Ya.$$.fragment,o),N(Nn.$$.fragment,o),N(Ln.$$.fragment,o),N(Ga.$$.fragment,o),N(Ja.$$.fragment,o),N(Fn.$$.fragment,o),N(or.$$.fragment,o),N(Xn.$$.fragment,o),N(qn.$$.fragment,o),N(Mn.$$.fragment,o),N(nr.$$.fragment,o),N(sr.$$.fragment,o),N(Cn.$$.fragment,o),N(lr.$$.fragment,o),N(En.$$.fragment,o),N(jn.$$.fragment,o),N(dr.$$.fragment,o),N(cr.$$.fragment,o),N(An.$$.fragment,o),N(ur.$$.fragment,o),N(Pn.$$.fragment,o),N(Sn.$$.fragment,o),N(Dn.$$.fragment,o),N(fr.$$.fragment,o),N(gr.$$.fragment,o),N(Hn.$$.fragment,o),N(Tr.$$.fragment,o),N(Qn.$$.fragment,o),N(Wn.$$.fragment,o),N(Un.$$.fragment,o),Ac=!1},d(o){t(d),o&&t(b),o&&t(m),L(l),o&&t(Y),o&&t(q),L(ee),o&&t(le),o&&t(R),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(z),o&&t(Q),o&&t(K),o&&t(Wd),o&&t(wt),o&&t(Ud),o&&t(St),L(ns),o&&t(Vd),o&&t(ot),L(ss),L(So),o&&t(Bd),o&&t(It),L(rs),o&&t(Rd),o&&t(Me),L(is),L(ps),L(hs),L(fs),L(Ho),L(gs),o&&t(Kd),o&&t(Qt),L(_s),o&&t(Yd),o&&t(Ie),L(ks),L(vs),L(ws),L(Wo),o&&t(Gd),o&&t(Vt),L($s),o&&t(Jd),o&&t(Bt),L(Ns),o&&t(Zd),o&&t(Rt),L(xs),o&&t(ec),o&&t(Kt),L(Xs),o&&t(tc),o&&t(Yt),L(Ms),o&&t(oc),o&&t(Gt),L(Cs),o&&t(nc),o&&t(Jt),L(js),o&&t(sc),o&&t(Zt),L(As),o&&t(ac),o&&t(eo),L(Ss),o&&t(rc),o&&t(to),L(Is),o&&t(ic),o&&t(oo),L(Qs),o&&t(lc),o&&t(no),L(Us),o&&t(dc),o&&t(so),L(Bs),o&&t(cc),o&&t(ao),L(Ks),o&&t(pc),o&&t(ro),L(Gs),o&&t(mc),o&&t(He),L(Js),L(oa),L(Bo),L(Ro),o&&t(hc),o&&t(lo),L(na),o&&t(uc),o&&t(Qe),L(sa),L(la),L(Yo),L(Go),o&&t(fc),o&&t(po),L(da),o&&t(gc),o&&t(We),L(ca),L(ua),L(Zo),L(en),L(tn),L(on),L(nn),o&&t(_c),o&&t(ho),L(fa),o&&t(kc),o&&t(Ue),L(ga),L(Ta),L(an),L(rn),o&&t(bc),o&&t(fo),L(va),o&&t(Tc),o&&t(Ve),L(ya),L(La),L(dn),L(cn),L(pn),o&&t(vc),o&&t(_o),L(xa),o&&t(yc),o&&t(Be),L(Fa),L(za),L(hn),L(un),L(fn),o&&t(wc),o&&t(To),L(Ca),o&&t($c),o&&t(Re),L(Ea),L(Pa),L(_n),L(kn),o&&t(Nc),o&&t(wo),L(Sa),o&&t(Lc),o&&t(je),L(Da),L(Tn),L(Wa),L(vn),L(yn),o&&t(xc),o&&t(No),L(Ua),o&&t(Fc),o&&t(Oe),L(Va),L($n),L(Ya),L(Nn),L(Ln),o&&t(Xc),o&&t(xo),L(Ga),o&&t(qc),o&&t(Ae),L(Ja),L(Fn),L(or),L(Xn),L(qn),L(Mn),o&&t(Mc),o&&t(Xo),L(nr),o&&t(zc),o&&t(Pe),L(sr),L(Cn),L(lr),L(En),L(jn),o&&t(Cc),o&&t(Mo),L(dr),o&&t(Ec),o&&t(Se),L(cr),L(An),L(ur),L(Pn),L(Sn),L(Dn),o&&t(jc),o&&t(Co),L(fr),o&&t(Oc),o&&t(De),L(gr),L(Hn),L(Tr),L(Qn),L(Wn),L(Un)}}}const Yw={local:"xlnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLNetConfig",title:"XLNetConfig"},{local:"transformers.XLNetTokenizer",title:"XLNetTokenizer"},{local:"transformers.XLNetTokenizerFast",title:"XLNetTokenizerFast"},{local:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",title:"XLNet specific outputs"},{local:"transformers.XLNetModel",title:"XLNetModel"},{local:"transformers.XLNetLMHeadModel",title:"XLNetLMHeadModel"},{local:"transformers.XLNetForSequenceClassification",title:"XLNetForSequenceClassification"},{local:"transformers.XLNetForMultipleChoice",title:"XLNetForMultipleChoice"},{local:"transformers.XLNetForTokenClassification",title:"XLNetForTokenClassification"},{local:"transformers.XLNetForQuestionAnsweringSimple",title:"XLNetForQuestionAnsweringSimple"},{local:"transformers.XLNetForQuestionAnswering",title:"XLNetForQuestionAnswering"},{local:"transformers.TFXLNetModel",title:"TFXLNetModel"},{local:"transformers.TFXLNetLMHeadModel",title:"TFXLNetLMHeadModel"},{local:"transformers.TFXLNetForSequenceClassification",title:"TFXLNetForSequenceClassification"},{local:"transformers.TFXLNetForMultipleChoice",title:"TFLNetForMultipleChoice"},{local:"transformers.TFXLNetForTokenClassification",title:"TFXLNetForTokenClassification"},{local:"transformers.TFXLNetForQuestionAnsweringSimple",title:"TFXLNetForQuestionAnsweringSimple"}],title:"XLNet"};function Gw(x){return aw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class s1 extends tw{constructor(d){super();ow(this,d,Gw,Kw,nw,{})}}export{s1 as default,Yw as metadata};
