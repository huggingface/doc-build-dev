import{S as Sy,i as Iy,s as Wy,e as r,k as h,w as v,t as n,M as Uy,c as a,d as t,m,a as i,x as y,h as s,b as k,F as e,g as _,y as w,q as $,o as F,B as R,v as Hy,L as $e}from"../../chunks/vendor-6b77c823.js";import{T as je}from"../../chunks/Tip-39098574.js";import{D as Y}from"../../chunks/Docstring-1088f2fb.js";import{C as Fe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as xe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as we}from"../../chunks/ExampleCodeBlock-5212b321.js";function Qy(E){let l,g,c,p,T;return p=new Fe({props:{code:"",highlighted:""}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function Ky(E){let l,g;return l=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function Vy(E){let l,g;return l=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function Jy(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Gy(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertModel
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertModel.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertModel.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function Xy(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Yy(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForCausalLM, RemBertConfig
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
config = RemBertConfig.from_pretrained("google/rembert")
config.is_decoder = True
model = RemBertForCausalLM.from_pretrained("google/rembert", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForCausalLM, RemBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RemBertConfig.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function Zy(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function ew(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMaskedLM
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForMaskedLM.from_pretrained("rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function tw(E){let l,g;return l=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function ow(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function nw(E){let l,g,c,p,T;return p=new Fe({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForSequenceClassification.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=r("p"),g=n("Example of single-label classification:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example of single-label classification:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function sw(E){let l,g;return l=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained("rembert", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function rw(E){let l,g,c,p,T;return p=new Fe({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForSequenceClassification.from_pretrained("rembert", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=r("p"),g=n("Example of multi-label classification:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example of multi-label classification:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function aw(E){let l,g;return l=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained("rembert", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function iw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function lw(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForMultipleChoice
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForMultipleChoice.from_pretrained("rembert")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function dw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function cw(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForTokenClassification
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForTokenClassification.from_pretrained("rembert")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

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
`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function pw(E){let l,g;return l=new Fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function hw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function mw(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, RemBertForQuestionAnswering
import torch

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = RemBertForQuestionAnswering.from_pretrained("rembert")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function uw(E){let l,g;return l=new Fe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function fw(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){l=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=h(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),he=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),me=h(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){l=a(f,"P",{});var B=i(l);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var P=i(p);T=a(P,"LI",{});var ve=i(T);d=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=m(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=m(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=m(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var Te=i(H);he=s(Te,"input_ids"),Te.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),me=m(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ze=i(W);le=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),A.forEach(t),oe=m(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,l,B),e(l,g),_(f,c,B),_(f,p,B),e(p,T),e(T,d),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,he),e(x,ie),e(x,I),e(I,_e),e(q,me),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(l),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function gw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function _w(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertModel
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertModel.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertModel.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function kw(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){l=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=h(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),he=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),me=h(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){l=a(f,"P",{});var B=i(l);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var P=i(p);T=a(P,"LI",{});var ve=i(T);d=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=m(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=m(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=m(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var Te=i(H);he=s(Te,"input_ids"),Te.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),me=m(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ze=i(W);le=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),A.forEach(t),oe=m(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,l,B),e(l,g),_(f,c,B),_(f,p,B),e(p,T),e(T,d),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,he),e(x,ie),e(x,I),e(I,_e),e(q,me),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(l),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function bw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Tw(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMaskedLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForMaskedLM.from_pretrained("rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function vw(E){let l,g;return l=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function yw(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){l=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=h(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),he=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),me=h(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){l=a(f,"P",{});var B=i(l);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var P=i(p);T=a(P,"LI",{});var ve=i(T);d=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=m(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=m(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=m(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var Te=i(H);he=s(Te,"input_ids"),Te.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),me=m(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ze=i(W);le=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),A.forEach(t),oe=m(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,l,B),e(l,g),_(f,c,B),_(f,p,B),e(p,T),e(T,d),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,he),e(x,ie),e(x,I),e(I,_e),e(q,me),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(l),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function ww(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForCausalLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForCausalLM.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function $w(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){l=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=h(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),he=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),me=h(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){l=a(f,"P",{});var B=i(l);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var P=i(p);T=a(P,"LI",{});var ve=i(T);d=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=m(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=m(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=m(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var Te=i(H);he=s(Te,"input_ids"),Te.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),me=m(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ze=i(W);le=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),A.forEach(t),oe=m(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,l,B),e(l,g),_(f,c,B),_(f,p,B),e(p,T),e(T,d),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,he),e(x,ie),e(x,I),e(I,_e),e(q,me),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(l),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Fw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Rw(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForSequenceClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForSequenceClassification.from_pretrained("rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function Ew(E){let l,g;return l=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFRemBertForSequenceClassification.from_pretrained("rembert", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function Bw(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){l=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=h(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),he=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),me=h(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){l=a(f,"P",{});var B=i(l);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var P=i(p);T=a(P,"LI",{});var ve=i(T);d=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=m(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=m(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=m(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var Te=i(H);he=s(Te,"input_ids"),Te.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),me=m(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ze=i(W);le=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),A.forEach(t),oe=m(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,l,B),e(l,g),_(f,c,B),_(f,p,B),e(p,T),e(T,d),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,he),e(x,ie),e(x,I),e(I,_e),e(q,me),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(l),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Mw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function zw(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMultipleChoice
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForMultipleChoice.from_pretrained("rembert")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function qw(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){l=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=h(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),he=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),me=h(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){l=a(f,"P",{});var B=i(l);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var P=i(p);T=a(P,"LI",{});var ve=i(T);d=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=m(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=m(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=m(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var Te=i(H);he=s(Te,"input_ids"),Te.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),me=m(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ze=i(W);le=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),A.forEach(t),oe=m(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,l,B),e(l,g),_(f,c,B),_(f,p,B),e(p,T),e(T,d),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,he),e(x,ie),e(x,I),e(I,_e),e(q,me),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(l),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Cw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function xw(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForTokenClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForTokenClassification.from_pretrained("rembert")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

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
`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function jw(E){let l,g;return l=new Fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function Lw(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce;return{c(){l=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),T=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),M=r("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=h(),z=r("p"),te=n("This second option is useful when using "),N=r("code"),ne=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),ge=n("model(inputs)"),pe=n("."),J=h(),O=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=h(),q=r("ul"),x=r("li"),ae=n("a single Tensor with "),H=r("code"),he=n("input_ids"),ie=n(" only and nothing else: "),I=r("code"),_e=n("model(inputs_ids)"),me=h(),C=r("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),le=n("model([input_ids, attention_mask])"),be=n(" or "),U=r("code"),ee=n("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=r("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){l=a(f,"P",{});var B=i(l);g=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var P=i(p);T=a(P,"LI",{});var ve=i(T);d=s(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),u=m(P),M=a(P,"LI",{});var Re=i(M);ue=s(Re,"having all inputs as a list, tuple or dict in the first positional arguments."),Re.forEach(t),P.forEach(t),X=m(f),z=a(f,"P",{});var j=i(z);te=s(j,"This second option is useful when using "),N=a(j,"CODE",{});var Ee=i(N);ne=s(Ee,"tf.keras.Model.fit"),Ee.forEach(t),fe=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(j,"CODE",{});var ye=i(S);ge=s(ye,"model(inputs)"),ye.forEach(t),pe=s(j,"."),j.forEach(t),J=m(f),O=a(f,"P",{});var Be=i(O);se=s(Be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Be.forEach(t),Z=m(f),q=a(f,"UL",{});var D=i(q);x=a(D,"LI",{});var K=i(x);ae=s(K,"a single Tensor with "),H=a(K,"CODE",{});var Te=i(H);he=s(Te,"input_ids"),Te.forEach(t),ie=s(K," only and nothing else: "),I=a(K,"CODE",{});var Me=i(I);_e=s(Me,"model(inputs_ids)"),Me.forEach(t),K.forEach(t),me=m(D),C=a(D,"LI",{});var A=i(C);ke=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ze=i(W);le=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),be=s(A," or "),U=a(A,"CODE",{});var qe=i(U);ee=s(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(t),A.forEach(t),oe=m(D),L=a(D,"LI",{});var de=i(L);re=s(de,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(de,"CODE",{});var Ce=i(Q);ce=s(Ce,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ce.forEach(t),de.forEach(t),D.forEach(t)},m(f,B){_(f,l,B),e(l,g),_(f,c,B),_(f,p,B),e(p,T),e(T,d),e(p,u),e(p,M),e(M,ue),_(f,X,B),_(f,z,B),e(z,te),e(z,N),e(N,ne),e(z,fe),e(z,S),e(S,ge),e(z,pe),_(f,J,B),_(f,O,B),e(O,se),_(f,Z,B),_(f,q,B),e(q,x),e(x,ae),e(x,H),e(H,he),e(x,ie),e(x,I),e(I,_e),e(q,me),e(q,C),e(C,ke),e(C,W),e(W,le),e(C,be),e(C,U),e(U,ee),e(q,oe),e(q,L),e(L,re),e(L,Q),e(Q,ce)},d(f){f&&t(l),f&&t(c),f&&t(p),f&&t(X),f&&t(z),f&&t(J),f&&t(O),f&&t(Z),f&&t(q)}}}function Pw(E){let l,g,c,p,T;return{c(){l=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){_(d,l,u),e(l,g),e(l,c),e(c,p),e(l,T)},d(d){d&&t(l)}}}function Ow(E){let l,g,c,p,T;return p=new Fe({props:{code:`from transformers import RemBertTokenizer, TFRemBertForQuestionAnswering
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("rembert")
model = TFRemBertForQuestionAnswering.from_pretrained("rembert")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=r("p"),g=n("Example:"),c=h(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);g=s(u,"Example:"),u.forEach(t),c=m(d),y(p.$$.fragment,d)},m(d,u){_(d,l,u),e(l,g),_(d,c,u),w(p,d,u),T=!0},p:$e,i(d){T||($(p.$$.fragment,d),T=!0)},o(d){F(p.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(c),R(p,d)}}}function Dw(E){let l,g;return l=new Fe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(l.$$.fragment)},l(c){y(l.$$.fragment,c)},m(c,p){w(l,c,p),g=!0},p:$e,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){F(l.$$.fragment,c),g=!1},d(c){R(l,c)}}}function Aw(E){let l,g,c,p,T,d,u,M,ue,X,z,te,N,ne,fe,S,ge,pe,J,O,se,Z,q,x,ae,H,he,ie,I,_e,me,C,ke,W,le,be,U,ee,oe,L,re,Q,ce,f,B,P,ve,Re,j,Ee,ye,Be,D,K,Te,Me,A,ze,qe,de,Ce,vp,yp,yo,wp,Ga,Xa,Ya,Za,$p,Fp,ei,ti,oi,wo,$o,ni,Gn,Rp,si,Ep,Bp,ri,ai,ii,Fo,Ro,li,Xn,Mp,di,zp,Vd,Nt,Eo,ci,Yn,qp,pi,Cp,Jd,Le,Zn,xp,es,jp,ts,Lp,Pp,Op,os,Dp,ea,Ap,Np,Sp,Mt,ns,Ip,hi,Wp,Up,ss,ta,Hp,mi,Qp,Kp,oa,Vp,ui,Jp,Gp,Bo,rs,Xp,as,Yp,fi,Zp,eh,th,pt,is,oh,gi,nh,sh,Mo,rh,St,ah,_i,ih,lh,ki,dh,ch,ph,na,ls,Gd,It,zo,bi,ds,hh,Ti,mh,Xd,De,cs,uh,Rt,fh,vi,gh,_h,ps,kh,bh,sa,Th,vh,yh,zt,hs,wh,yi,$h,Fh,ms,ra,Rh,wi,Eh,Bh,aa,Mh,$i,zh,qh,qo,us,Ch,fs,xh,Fi,jh,Lh,Ph,ht,gs,Oh,Ri,Dh,Ah,Co,Nh,Ei,Sh,Ih,ia,_s,Yd,Wt,xo,Bi,ks,Wh,Mi,Uh,Zd,Je,bs,Hh,Ts,Qh,vs,Kh,Vh,Jh,ys,Gh,ws,Xh,Yh,Zh,Ae,em,zi,tm,om,qi,nm,sm,Ci,rm,am,xi,im,lm,ji,dm,cm,Li,pm,hm,mm,mt,$s,um,Ut,fm,la,gm,_m,Pi,km,bm,Tm,jo,vm,Lo,ec,Ht,Po,Oi,Fs,ym,Di,wm,tc,Et,Rs,$m,Qt,Fm,Ai,Rm,Em,Es,Bm,Mm,zm,ut,Bs,qm,Kt,Cm,da,xm,jm,Ni,Lm,Pm,Om,Oo,Dm,Do,oc,Vt,Ao,Si,Ms,Am,Ii,Nm,nc,Bt,zs,Sm,Jt,Im,Wi,Wm,Um,qs,Hm,Qm,Km,Ge,Cs,Vm,Gt,Jm,ca,Gm,Xm,Ui,Ym,Zm,eu,No,tu,So,ou,Io,sc,Xt,Wo,Hi,xs,nu,Qi,su,rc,it,js,ru,Ki,au,iu,Ls,lu,Ps,du,cu,pu,Oe,Os,hu,Yt,mu,pa,uu,fu,Vi,gu,_u,ku,Uo,bu,Ho,Tu,Qo,vu,Ko,yu,Vo,ac,Zt,Jo,Ji,Ds,wu,Gi,$u,ic,lt,As,Fu,Xi,Ru,Eu,Ns,Bu,Ss,Mu,zu,qu,ft,Is,Cu,eo,xu,ha,ju,Lu,Yi,Pu,Ou,Du,Go,Au,Xo,lc,to,Yo,Zi,Ws,Nu,el,Su,dc,dt,Us,Iu,tl,Wu,Uu,Hs,Hu,Qs,Qu,Ku,Vu,Xe,Ks,Ju,oo,Gu,ma,Xu,Yu,ol,Zu,ef,tf,Zo,of,en,nf,tn,cc,no,on,nl,Vs,sf,sl,rf,pc,ct,Js,af,so,lf,rl,df,cf,al,pf,hf,mf,Gs,uf,Xs,ff,gf,_f,Ye,Ys,kf,ro,bf,ua,Tf,vf,il,yf,wf,$f,nn,Ff,sn,Rf,rn,hc,ao,an,ll,Zs,Ef,dl,Bf,mc,Ne,er,Mf,cl,zf,qf,tr,Cf,fa,xf,jf,Lf,or,Pf,nr,Of,Df,Af,ln,Nf,gt,sr,Sf,io,If,ga,Wf,Uf,pl,Hf,Qf,Kf,dn,Vf,cn,uc,lo,pn,hl,rr,Jf,ml,Gf,fc,Se,ar,Xf,ir,Yf,ul,Zf,eg,tg,lr,og,_a,ng,sg,rg,dr,ag,cr,ig,lg,dg,hn,cg,Ze,pr,pg,co,hg,ka,mg,ug,fl,fg,gg,_g,mn,kg,un,bg,fn,gc,po,gn,gl,hr,Tg,_l,vg,_c,Ie,mr,yg,ur,wg,kl,$g,Fg,Rg,fr,Eg,ba,Bg,Mg,zg,gr,qg,_r,Cg,xg,jg,_n,Lg,et,kr,Pg,Pe,Og,bl,Dg,Ag,Tl,Ng,Sg,vl,Ig,Wg,yl,Ug,Hg,wl,Qg,Kg,$l,Vg,Jg,Fl,Gg,Xg,Yg,br,Tr,Zg,Rl,e_,t_,o_,vr,n_,El,s_,r_,a_,V,i_,Bl,l_,d_,Ml,c_,p_,zl,h_,m_,ql,u_,f_,Cl,g_,__,xl,k_,b_,jl,T_,v_,Ll,y_,w_,Pl,$_,F_,Ol,R_,E_,Dl,B_,M_,Al,z_,q_,Nl,C_,x_,Sl,j_,L_,Il,P_,O_,Wl,D_,A_,Ul,N_,S_,Hl,I_,W_,Ql,U_,H_,Kl,Q_,K_,V_,kn,kc,ho,bn,Vl,yr,J_,Jl,G_,bc,We,wr,X_,Gl,Y_,Z_,$r,ek,Ta,tk,ok,nk,Fr,sk,Rr,rk,ak,ik,Tn,lk,tt,Er,dk,mo,ck,va,pk,hk,Xl,mk,uk,fk,vn,gk,yn,_k,wn,Tc,uo,$n,Yl,Br,kk,Zl,bk,vc,Ue,Mr,Tk,ed,vk,yk,zr,wk,ya,$k,Fk,Rk,qr,Ek,Cr,Bk,Mk,zk,Fn,qk,_t,xr,Ck,fo,xk,wa,jk,Lk,td,Pk,Ok,Dk,Rn,Ak,En,yc,go,Bn,od,jr,Nk,nd,Sk,wc,He,Lr,Ik,sd,Wk,Uk,Pr,Hk,$a,Qk,Kk,Vk,Or,Jk,Dr,Gk,Xk,Yk,Mn,Zk,ot,Ar,eb,_o,tb,Fa,ob,nb,rd,sb,rb,ab,zn,ib,qn,lb,Cn,$c,ko,xn,ad,Nr,db,id,cb,Fc,Qe,Sr,pb,bo,hb,ld,mb,ub,dd,fb,gb,_b,Ir,kb,Ra,bb,Tb,vb,Wr,yb,Ur,wb,$b,Fb,jn,Rb,nt,Hr,Eb,To,Bb,Ea,Mb,zb,cd,qb,Cb,xb,Ln,jb,Pn,Lb,On,Rc;return d=new xe({}),ne=new xe({}),re=new xe({}),ve=new Y({props:{name:"class transformers.RemBertConfig",anchor:"transformers.RemBertConfig",parameters:[{name:"vocab_size",val:" = 250300"},{name:"hidden_size",val:" = 1152"},{name:"num_hidden_layers",val:" = 32"},{name:"num_attention_heads",val:" = 18"},{name:"input_embedding_size",val:" = 256"},{name:"output_embedding_size",val:" = 1664"},{name:"intermediate_size",val:" = 4608"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 312"},{name:"eos_token_id",val:" = 313"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250300) &#x2014;
Vocabulary size of the RemBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>. Vocabulary size of the model.
Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.RemBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1152) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RemBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RemBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 18) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RemBertConfig.input_embedding_size",description:`<strong>input_embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the input embeddings.`,name:"input_embedding_size"},{anchor:"transformers.RemBertConfig.output_embedding_size",description:`<strong>output_embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1664) &#x2014;
Dimensionality of the output embeddings.`,name:"output_embedding_size"},{anchor:"transformers.RemBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4608) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RemBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RemBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RemBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RemBertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the classifier layer when fine-tuning.`,name:"classifier_dropout_prob"},{anchor:"transformers.RemBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RemBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RemBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RemBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RemBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/configuration_rembert.py#L29"}}),yo=new we({props:{anchor:"transformers.RemBertConfig.example",$$slots:{default:[Qy]},$$scope:{ctx:E}}}),Gn=new xe({}),Xn=new xe({}),Yn=new xe({}),Zn=new Y({props:{name:"class transformers.RemBertTokenizer",anchor:"transformers.RemBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.RemBertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RemBertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.RemBertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RemBertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RemBertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RemBertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RemBertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RemBertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert.py#L43"}}),ns=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert.py#L172",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rs=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert.py#L197",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert.py#L228",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Mo=new we({props:{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Ky]},$$scope:{ctx:E}}}),ls=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert.py#L258"}}),ds=new xe({}),cs=new Y({props:{name:"class transformers.RemBertTokenizerFast",anchor:"transformers.RemBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.RemBertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RemBertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.RemBertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.RemBertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RemBertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.RemBertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RemBertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RemBertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RemBertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RemBertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert_fast.py#L51"}}),hs=new Y({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert_fast.py#L143",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),us=new Y({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert_fast.py#L168",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gs=new Y({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Co=new we({props:{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[Vy]},$$scope:{ctx:E}}}),_s=new Y({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizerFast.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/tokenization_rembert_fast.py#L229"}}),ks=new xe({}),bs=new Y({props:{name:"class transformers.RemBertModel",anchor:"transformers.RemBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L750"}}),$s=new Y({props:{name:"forward",anchor:"transformers.RemBertModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RemBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RemBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RemBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L789",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new je({props:{$$slots:{default:[Jy]},$$scope:{ctx:E}}}),Lo=new we({props:{anchor:"transformers.RemBertModel.forward.example",$$slots:{default:[Gy]},$$scope:{ctx:E}}}),Fs=new xe({}),Rs=new Y({props:{name:"class transformers.RemBertForCausalLM",anchor:"transformers.RemBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1023"}}),Bs=new Y({props:{name:"forward",anchor:"transformers.RemBertForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RemBertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RemBertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RemBertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RemBertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1045",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),Oo=new je({props:{$$slots:{default:[Xy]},$$scope:{ctx:E}}}),Do=new we({props:{anchor:"transformers.RemBertForCausalLM.forward.example",$$slots:{default:[Yy]},$$scope:{ctx:E}}}),Ms=new xe({}),zs=new Y({props:{name:"class transformers.RemBertForMaskedLM",anchor:"transformers.RemBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L920"}}),Cs=new Y({props:{name:"forward",anchor:"transformers.RemBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L942",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),No=new je({props:{$$slots:{default:[Zy]},$$scope:{ctx:E}}}),So=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example",$$slots:{default:[ew]},$$scope:{ctx:E}}}),Io=new we({props:{anchor:"transformers.RemBertForMaskedLM.forward.example-2",$$slots:{default:[tw]},$$scope:{ctx:E}}}),xs=new xe({}),js=new Y({props:{name:"class transformers.RemBertForSequenceClassification",anchor:"transformers.RemBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1176"}}),Os=new Y({props:{name:"forward",anchor:"transformers.RemBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),Uo=new je({props:{$$slots:{default:[ow]},$$scope:{ctx:E}}}),Ho=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example",$$slots:{default:[nw]},$$scope:{ctx:E}}}),Qo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-2",$$slots:{default:[sw]},$$scope:{ctx:E}}}),Ko=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-3",$$slots:{default:[rw]},$$scope:{ctx:E}}}),Vo=new we({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-4",$$slots:{default:[aw]},$$scope:{ctx:E}}}),Ds=new xe({}),As=new Y({props:{name:"class transformers.RemBertForMultipleChoice",anchor:"transformers.RemBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1273"}}),Is=new Y({props:{name:"forward",anchor:"transformers.RemBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),Go=new je({props:{$$slots:{default:[iw]},$$scope:{ctx:E}}}),Xo=new we({props:{anchor:"transformers.RemBertForMultipleChoice.forward.example",$$slots:{default:[lw]},$$scope:{ctx:E}}}),Ws=new xe({}),Us=new Y({props:{name:"class transformers.RemBertForTokenClassification",anchor:"transformers.RemBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1365"}}),Ks=new Y({props:{name:"forward",anchor:"transformers.RemBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),Zo=new je({props:{$$slots:{default:[dw]},$$scope:{ctx:E}}}),en=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example",$$slots:{default:[cw]},$$scope:{ctx:E}}}),tn=new we({props:{anchor:"transformers.RemBertForTokenClassification.forward.example-2",$$slots:{default:[pw]},$$scope:{ctx:E}}}),Vs=new xe({}),Js=new Y({props:{name:"class transformers.RemBertForQuestionAnswering",anchor:"transformers.RemBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1444"}}),Ys=new Y({props:{name:"forward",anchor:"transformers.RemBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RemBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_rembert.py#L1456",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),nn=new je({props:{$$slots:{default:[hw]},$$scope:{ctx:E}}}),sn=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example",$$slots:{default:[mw]},$$scope:{ctx:E}}}),rn=new we({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example-2",$$slots:{default:[uw]},$$scope:{ctx:E}}}),Zs=new xe({}),er=new Y({props:{name:"class transformers.TFRemBertModel",anchor:"transformers.TFRemBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L932"}}),ln=new je({props:{$$slots:{default:[fw]},$$scope:{ctx:E}}}),sr=new Y({props:{name:"call",anchor:"transformers.TFRemBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRemBertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRemBertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRemBertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L938",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dn=new je({props:{$$slots:{default:[gw]},$$scope:{ctx:E}}}),cn=new we({props:{anchor:"transformers.TFRemBertModel.call.example",$$slots:{default:[_w]},$$scope:{ctx:E}}}),rr=new xe({}),ar=new Y({props:{name:"class transformers.TFRemBertForMaskedLM",anchor:"transformers.TFRemBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1026"}}),hn=new je({props:{$$slots:{default:[kw]},$$scope:{ctx:E}}}),pr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1042",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new je({props:{$$slots:{default:[bw]},$$scope:{ctx:E}}}),un=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example",$$slots:{default:[Tw]},$$scope:{ctx:E}}}),fn=new we({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example-2",$$slots:{default:[vw]},$$scope:{ctx:E}}}),hr=new xe({}),mr=new Y({props:{name:"class transformers.TFRemBertForCausalLM",anchor:"transformers.TFRemBertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1108"}}),_n=new je({props:{$$slots:{default:[yw]},$$scope:{ctx:E}}}),kr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1134",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new we({props:{anchor:"transformers.TFRemBertForCausalLM.call.example",$$slots:{default:[ww]},$$scope:{ctx:E}}}),yr=new xe({}),wr=new Y({props:{name:"class transformers.TFRemBertForSequenceClassification",anchor:"transformers.TFRemBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1251"}}),Tn=new je({props:{$$slots:{default:[$w]},$$scope:{ctx:E}}}),Er=new Y({props:{name:"call",anchor:"transformers.TFRemBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1265",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
`}}),vn=new je({props:{$$slots:{default:[Fw]},$$scope:{ctx:E}}}),yn=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example",$$slots:{default:[Rw]},$$scope:{ctx:E}}}),wn=new we({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example-2",$$slots:{default:[Ew]},$$scope:{ctx:E}}}),Br=new xe({}),Mr=new Y({props:{name:"class transformers.TFRemBertForMultipleChoice",anchor:"transformers.TFRemBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1336"}}),Fn=new je({props:{$$slots:{default:[Bw]},$$scope:{ctx:E}}}),xr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1356",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rn=new je({props:{$$slots:{default:[Mw]},$$scope:{ctx:E}}}),En=new we({props:{anchor:"transformers.TFRemBertForMultipleChoice.call.example",$$slots:{default:[zw]},$$scope:{ctx:E}}}),jr=new xe({}),Lr=new Y({props:{name:"class transformers.TFRemBertForTokenClassification",anchor:"transformers.TFRemBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1464"}}),Mn=new je({props:{$$slots:{default:[qw]},$$scope:{ctx:E}}}),Ar=new Y({props:{name:"call",anchor:"transformers.TFRemBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1476",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zn=new je({props:{$$slots:{default:[Cw]},$$scope:{ctx:E}}}),qn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example",$$slots:{default:[xw]},$$scope:{ctx:E}}}),Cn=new we({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example-2",$$slots:{default:[jw]},$$scope:{ctx:E}}}),Nr=new xe({}),Sr=new Y({props:{name:"class transformers.TFRemBertForQuestionAnswering",anchor:"transformers.TFRemBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1545"}}),jn=new je({props:{$$slots:{default:[Lw]},$$scope:{ctx:E}}}),Hr=new Y({props:{name:"call",anchor:"transformers.TFRemBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/rembert/modeling_tf_rembert.py#L1556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new je({props:{$$slots:{default:[Pw]},$$scope:{ctx:E}}}),Pn=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example",$$slots:{default:[Ow]},$$scope:{ctx:E}}}),On=new we({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example-2",$$slots:{default:[Dw]},$$scope:{ctx:E}}}),{c(){l=r("meta"),g=h(),c=r("h1"),p=r("a"),T=r("span"),v(d.$$.fragment),u=h(),M=r("span"),ue=n("RemBERT"),X=h(),z=r("h2"),te=r("a"),N=r("span"),v(ne.$$.fragment),fe=h(),S=r("span"),ge=n("Overview"),pe=h(),J=r("p"),O=n("The RemBERT model was proposed in "),se=r("a"),Z=n("Rethinking Embedding Coupling in Pre-trained Language Models"),q=n(" by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),x=h(),ae=r("p"),H=n("The abstract from the paper is the following:"),he=h(),ie=r("p"),I=r("em"),_e=n(`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),me=h(),C=r("p"),ke=n("Tips:"),W=h(),le=r("p"),be=n(`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),U=h(),ee=r("h2"),oe=r("a"),L=r("span"),v(re.$$.fragment),Q=h(),ce=r("span"),f=n("RemBertConfig"),B=h(),P=r("div"),v(ve.$$.fragment),Re=h(),j=r("p"),Ee=n("This is the configuration class to store the configuration of a "),ye=r("a"),Be=n("RemBertModel"),D=n(`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the remert-large architecture.`),K=h(),Te=r("p"),Me=n("Configuration objects inherit from "),A=r("a"),ze=n("PretrainedConfig"),qe=n(` and can be used to control the model outputs. Read the
documentation from `),de=r("a"),Ce=n("PretrainedConfig"),vp=n(" for more information."),yp=h(),v(yo.$$.fragment),wp=h(),Ga=r("blockquote"),Xa=r("blockquote"),Ya=r("blockquote"),Za=r("p"),$p=n(`from transformers import RemBertModel, RemBertConfig >>> # Initializing a RemBERT rembert style
configuration >>> configuration = RemBertConfig()`),Fp=h(),ei=r("blockquote"),ti=r("blockquote"),oi=r("blockquote"),wo=r("h1"),$o=r("a"),ni=r("span"),v(Gn.$$.fragment),Rp=h(),si=r("span"),Ep=n("Initializing a model from the rembert style configuration >>> model = RemBertModel(configuration)"),Bp=h(),ri=r("blockquote"),ai=r("blockquote"),ii=r("blockquote"),Fo=r("h1"),Ro=r("a"),li=r("span"),v(Xn.$$.fragment),Mp=h(),di=r("span"),zp=n("Accessing the model configuration >>> configuration = model.config"),Vd=h(),Nt=r("h2"),Eo=r("a"),ci=r("span"),v(Yn.$$.fragment),qp=h(),pi=r("span"),Cp=n("RemBertTokenizer"),Jd=h(),Le=r("div"),v(Zn.$$.fragment),xp=h(),es=r("p"),jp=n("Construct a RemBERT tokenizer. Based on "),ts=r("a"),Lp=n("SentencePiece"),Pp=n("."),Op=h(),os=r("p"),Dp=n("This tokenizer inherits from "),ea=r("a"),Ap=n("PreTrainedTokenizer"),Np=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sp=h(),Mt=r("div"),v(ns.$$.fragment),Ip=h(),hi=r("p"),Wp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),Up=h(),ss=r("ul"),ta=r("li"),Hp=n("single sequence: "),mi=r("code"),Qp=n("[CLS] X [SEP]"),Kp=h(),oa=r("li"),Vp=n("pair of sequences: "),ui=r("code"),Jp=n("[CLS] A [SEP] B [SEP]"),Gp=h(),Bo=r("div"),v(rs.$$.fragment),Xp=h(),as=r("p"),Yp=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fi=r("code"),Zp=n("prepare_for_model"),eh=n(" method."),th=h(),pt=r("div"),v(is.$$.fragment),oh=h(),gi=r("p"),nh=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT
sequence pair mask has the following format:`),sh=h(),v(Mo.$$.fragment),rh=h(),St=r("p"),ah=n("If "),_i=r("code"),ih=n("token_ids_1"),lh=n(" is "),ki=r("code"),dh=n("None"),ch=n(", this method only returns the first portion of the mask (0s)."),ph=h(),na=r("div"),v(ls.$$.fragment),Gd=h(),It=r("h2"),zo=r("a"),bi=r("span"),v(ds.$$.fragment),hh=h(),Ti=r("span"),mh=n("RemBertTokenizerFast"),Xd=h(),De=r("div"),v(cs.$$.fragment),uh=h(),Rt=r("p"),fh=n("Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),vi=r("em"),gh=n("tokenizers"),_h=n(` library). Based on
`),ps=r("a"),kh=n("Unigram"),bh=n(`. This
tokenizer inherits from `),sa=r("a"),Th=n("PreTrainedTokenizerFast"),vh=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),yh=h(),zt=r("div"),v(hs.$$.fragment),wh=h(),yi=r("p"),$h=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),Fh=h(),ms=r("ul"),ra=r("li"),Rh=n("single sequence: "),wi=r("code"),Eh=n("[CLS] X [SEP]"),Bh=h(),aa=r("li"),Mh=n("pair of sequences: "),$i=r("code"),zh=n("[CLS] A [SEP] B [SEP]"),qh=h(),qo=r("div"),v(us.$$.fragment),Ch=h(),fs=r("p"),xh=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fi=r("code"),jh=n("prepare_for_model"),Lh=n(" method."),Ph=h(),ht=r("div"),v(gs.$$.fragment),Oh=h(),Ri=r("p"),Dh=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT
sequence pair mask has the following format:`),Ah=h(),v(Co.$$.fragment),Nh=h(),Ei=r("p"),Sh=n("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Ih=h(),ia=r("div"),v(_s.$$.fragment),Yd=h(),Wt=r("h2"),xo=r("a"),Bi=r("span"),v(ks.$$.fragment),Wh=h(),Mi=r("span"),Uh=n("RemBertModel"),Zd=h(),Je=r("div"),v(bs.$$.fragment),Hh=h(),Ts=r("p"),Qh=n(`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),vs=r("a"),Kh=n("torch.nn.Module"),Vh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jh=h(),ys=r("p"),Gh=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ws=r("a"),Xh=n(`Attention is
all you need`),Yh=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Zh=h(),Ae=r("p"),em=n("To behave as an decoder the model needs to be initialized with the "),zi=r("code"),tm=n("is_decoder"),om=n(` argument of the configuration set
to `),qi=r("code"),nm=n("True"),sm=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ci=r("code"),rm=n("is_decoder"),am=n(` argument and
`),xi=r("code"),im=n("add_cross_attention"),lm=n(" set to "),ji=r("code"),dm=n("True"),cm=n("; an "),Li=r("code"),pm=n("encoder_hidden_states"),hm=n(" is then expected as an input to the forward pass."),mm=h(),mt=r("div"),v($s.$$.fragment),um=h(),Ut=r("p"),fm=n("The "),la=r("a"),gm=n("RemBertModel"),_m=n(" forward method, overrides the "),Pi=r("code"),km=n("__call__"),bm=n(" special method."),Tm=h(),v(jo.$$.fragment),vm=h(),v(Lo.$$.fragment),ec=h(),Ht=r("h2"),Po=r("a"),Oi=r("span"),v(Fs.$$.fragment),ym=h(),Di=r("span"),wm=n("RemBertForCausalLM"),tc=h(),Et=r("div"),v(Rs.$$.fragment),$m=h(),Qt=r("p"),Fm=n("RemBERT Model with a "),Ai=r("code"),Rm=n("language modeling"),Em=n(` head on top for CLM fine-tuning.
This model is a PyTorch `),Es=r("a"),Bm=n("torch.nn.Module"),Mm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zm=h(),ut=r("div"),v(Bs.$$.fragment),qm=h(),Kt=r("p"),Cm=n("The "),da=r("a"),xm=n("RemBertForCausalLM"),jm=n(" forward method, overrides the "),Ni=r("code"),Lm=n("__call__"),Pm=n(" special method."),Om=h(),v(Oo.$$.fragment),Dm=h(),v(Do.$$.fragment),oc=h(),Vt=r("h2"),Ao=r("a"),Si=r("span"),v(Ms.$$.fragment),Am=h(),Ii=r("span"),Nm=n("RemBertForMaskedLM"),nc=h(),Bt=r("div"),v(zs.$$.fragment),Sm=h(),Jt=r("p"),Im=n("RemBERT Model with a "),Wi=r("code"),Wm=n("language modeling"),Um=n(` head on top.
This model is a PyTorch `),qs=r("a"),Hm=n("torch.nn.Module"),Qm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Km=h(),Ge=r("div"),v(Cs.$$.fragment),Vm=h(),Gt=r("p"),Jm=n("The "),ca=r("a"),Gm=n("RemBertForMaskedLM"),Xm=n(" forward method, overrides the "),Ui=r("code"),Ym=n("__call__"),Zm=n(" special method."),eu=h(),v(No.$$.fragment),tu=h(),v(So.$$.fragment),ou=h(),v(Io.$$.fragment),sc=h(),Xt=r("h2"),Wo=r("a"),Hi=r("span"),v(xs.$$.fragment),nu=h(),Qi=r("span"),su=n("RemBertForSequenceClassification"),rc=h(),it=r("div"),v(js.$$.fragment),ru=h(),Ki=r("p"),au=n(`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),iu=h(),Ls=r("p"),lu=n("This model is a PyTorch "),Ps=r("a"),du=n("torch.nn.Module"),cu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pu=h(),Oe=r("div"),v(Os.$$.fragment),hu=h(),Yt=r("p"),mu=n("The "),pa=r("a"),uu=n("RemBertForSequenceClassification"),fu=n(" forward method, overrides the "),Vi=r("code"),gu=n("__call__"),_u=n(" special method."),ku=h(),v(Uo.$$.fragment),bu=h(),v(Ho.$$.fragment),Tu=h(),v(Qo.$$.fragment),vu=h(),v(Ko.$$.fragment),yu=h(),v(Vo.$$.fragment),ac=h(),Zt=r("h2"),Jo=r("a"),Ji=r("span"),v(Ds.$$.fragment),wu=h(),Gi=r("span"),$u=n("RemBertForMultipleChoice"),ic=h(),lt=r("div"),v(As.$$.fragment),Fu=h(),Xi=r("p"),Ru=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eu=h(),Ns=r("p"),Bu=n("This model is a PyTorch "),Ss=r("a"),Mu=n("torch.nn.Module"),zu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qu=h(),ft=r("div"),v(Is.$$.fragment),Cu=h(),eo=r("p"),xu=n("The "),ha=r("a"),ju=n("RemBertForMultipleChoice"),Lu=n(" forward method, overrides the "),Yi=r("code"),Pu=n("__call__"),Ou=n(" special method."),Du=h(),v(Go.$$.fragment),Au=h(),v(Xo.$$.fragment),lc=h(),to=r("h2"),Yo=r("a"),Zi=r("span"),v(Ws.$$.fragment),Nu=h(),el=r("span"),Su=n("RemBertForTokenClassification"),dc=h(),dt=r("div"),v(Us.$$.fragment),Iu=h(),tl=r("p"),Wu=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Uu=h(),Hs=r("p"),Hu=n("This model is a PyTorch "),Qs=r("a"),Qu=n("torch.nn.Module"),Ku=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vu=h(),Xe=r("div"),v(Ks.$$.fragment),Ju=h(),oo=r("p"),Gu=n("The "),ma=r("a"),Xu=n("RemBertForTokenClassification"),Yu=n(" forward method, overrides the "),ol=r("code"),Zu=n("__call__"),ef=n(" special method."),tf=h(),v(Zo.$$.fragment),of=h(),v(en.$$.fragment),nf=h(),v(tn.$$.fragment),cc=h(),no=r("h2"),on=r("a"),nl=r("span"),v(Vs.$$.fragment),sf=h(),sl=r("span"),rf=n("RemBertForQuestionAnswering"),pc=h(),ct=r("div"),v(Js.$$.fragment),af=h(),so=r("p"),lf=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rl=r("code"),df=n("span start logits"),cf=n(" and "),al=r("code"),pf=n("span end logits"),hf=n(")."),mf=h(),Gs=r("p"),uf=n("This model is a PyTorch "),Xs=r("a"),ff=n("torch.nn.Module"),gf=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_f=h(),Ye=r("div"),v(Ys.$$.fragment),kf=h(),ro=r("p"),bf=n("The "),ua=r("a"),Tf=n("RemBertForQuestionAnswering"),vf=n(" forward method, overrides the "),il=r("code"),yf=n("__call__"),wf=n(" special method."),$f=h(),v(nn.$$.fragment),Ff=h(),v(sn.$$.fragment),Rf=h(),v(rn.$$.fragment),hc=h(),ao=r("h2"),an=r("a"),ll=r("span"),v(Zs.$$.fragment),Ef=h(),dl=r("span"),Bf=n("TFRemBertModel"),mc=h(),Ne=r("div"),v(er.$$.fragment),Mf=h(),cl=r("p"),zf=n("The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),qf=h(),tr=r("p"),Cf=n("This model inherits from "),fa=r("a"),xf=n("TFPreTrainedModel"),jf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf=h(),or=r("p"),Pf=n("This model is also a "),nr=r("a"),Of=n("tf.keras.Model"),Df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Af=h(),v(ln.$$.fragment),Nf=h(),gt=r("div"),v(sr.$$.fragment),Sf=h(),io=r("p"),If=n("The "),ga=r("a"),Wf=n("TFRemBertModel"),Uf=n(" forward method, overrides the "),pl=r("code"),Hf=n("__call__"),Qf=n(" special method."),Kf=h(),v(dn.$$.fragment),Vf=h(),v(cn.$$.fragment),uc=h(),lo=r("h2"),pn=r("a"),hl=r("span"),v(rr.$$.fragment),Jf=h(),ml=r("span"),Gf=n("TFRemBertForMaskedLM"),fc=h(),Se=r("div"),v(ar.$$.fragment),Xf=h(),ir=r("p"),Yf=n("RemBERT Model with a "),ul=r("code"),Zf=n("language modeling"),eg=n(" head on top."),tg=h(),lr=r("p"),og=n("This model inherits from "),_a=r("a"),ng=n("TFPreTrainedModel"),sg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rg=h(),dr=r("p"),ag=n("This model is also a "),cr=r("a"),ig=n("tf.keras.Model"),lg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dg=h(),v(hn.$$.fragment),cg=h(),Ze=r("div"),v(pr.$$.fragment),pg=h(),co=r("p"),hg=n("The "),ka=r("a"),mg=n("TFRemBertForMaskedLM"),ug=n(" forward method, overrides the "),fl=r("code"),fg=n("__call__"),gg=n(" special method."),_g=h(),v(mn.$$.fragment),kg=h(),v(un.$$.fragment),bg=h(),v(fn.$$.fragment),gc=h(),po=r("h2"),gn=r("a"),gl=r("span"),v(hr.$$.fragment),Tg=h(),_l=r("span"),vg=n("TFRemBertForCausalLM"),_c=h(),Ie=r("div"),v(mr.$$.fragment),yg=h(),ur=r("p"),wg=n("RemBERT Model with a "),kl=r("code"),$g=n("language modeling"),Fg=n(" head on top for CLM fine-tuning."),Rg=h(),fr=r("p"),Eg=n("This model inherits from "),ba=r("a"),Bg=n("TFPreTrainedModel"),Mg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zg=h(),gr=r("p"),qg=n("This model is also a "),_r=r("a"),Cg=n("tf.keras.Model"),xg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jg=h(),v(_n.$$.fragment),Lg=h(),et=r("div"),v(kr.$$.fragment),Pg=h(),Pe=r("p"),Og=n("encoder_hidden_states  ("),bl=r("code"),Dg=n("tf.Tensor"),Ag=n(" of shape "),Tl=r("code"),Ng=n("(batch_size, sequence_length, hidden_size)"),Sg=n(", "),vl=r("em"),Ig=n("optional"),Wg=n(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),yl=r("code"),Ug=n("tf.Tensor"),Hg=n(" of shape "),wl=r("code"),Qg=n("(batch_size, sequence_length)"),Kg=n(", "),$l=r("em"),Vg=n("optional"),Jg=n(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Fl=r("code"),Gg=n("[0, 1]"),Xg=n(":"),Yg=h(),br=r("ul"),Tr=r("li"),Zg=n("1 for tokens that are "),Rl=r("strong"),e_=n("not masked"),t_=n(","),o_=h(),vr=r("li"),n_=n("0 for tokens that are "),El=r("strong"),s_=n("masked"),r_=n("."),a_=h(),V=r("p"),i_=n("past_key_values ("),Bl=r("code"),l_=n("Tuple[Tuple[tf.Tensor]]"),d_=n(" of length "),Ml=r("code"),c_=n("config.n_layers"),p_=n(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),zl=r("code"),h_=n("past_key_values"),m_=n(" are used, the user can optionally input only the last "),ql=r("code"),u_=n("decoder_input_ids"),f_=n(` (those that
don\u2019t have their past key value states given to this model) of shape `),Cl=r("code"),g_=n("(batch_size, 1)"),__=n(` instead of all
`),xl=r("code"),k_=n("decoder_input_ids"),b_=n(" of shape "),jl=r("code"),T_=n("(batch_size, sequence_length)"),v_=n(`.
use_cache (`),Ll=r("code"),y_=n("bool"),w_=n(", "),Pl=r("em"),$_=n("optional"),F_=n(", defaults to "),Ol=r("code"),R_=n("True"),E_=n(`):
If set to `),Dl=r("code"),B_=n("True"),M_=n(", "),Al=r("code"),z_=n("past_key_values"),q_=n(` key value states are returned and can be used to speed up decoding (see
`),Nl=r("code"),C_=n("past_key_values"),x_=n("). Set to "),Sl=r("code"),j_=n("False"),L_=n(" during training, "),Il=r("code"),P_=n("True"),O_=n(` during generation
labels (`),Wl=r("code"),D_=n("tf.Tensor"),A_=n(" or "),Ul=r("code"),N_=n("np.ndarray"),S_=n(" of shape "),Hl=r("code"),I_=n("(batch_size, sequence_length)"),W_=n(", "),Ql=r("em"),U_=n("optional"),H_=n(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Kl=r("code"),Q_=n("[0, ..., config.vocab_size - 1]"),K_=n("."),V_=h(),v(kn.$$.fragment),kc=h(),ho=r("h2"),bn=r("a"),Vl=r("span"),v(yr.$$.fragment),J_=h(),Jl=r("span"),G_=n("TFRemBertForSequenceClassification"),bc=h(),We=r("div"),v(wr.$$.fragment),X_=h(),Gl=r("p"),Y_=n("RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Z_=h(),$r=r("p"),ek=n("This model inherits from "),Ta=r("a"),tk=n("TFPreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=h(),Fr=r("p"),sk=n("This model is also a "),Rr=r("a"),rk=n("tf.keras.Model"),ak=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ik=h(),v(Tn.$$.fragment),lk=h(),tt=r("div"),v(Er.$$.fragment),dk=h(),mo=r("p"),ck=n("The "),va=r("a"),pk=n("TFRemBertForSequenceClassification"),hk=n(" forward method, overrides the "),Xl=r("code"),mk=n("__call__"),uk=n(" special method."),fk=h(),v(vn.$$.fragment),gk=h(),v(yn.$$.fragment),_k=h(),v(wn.$$.fragment),Tc=h(),uo=r("h2"),$n=r("a"),Yl=r("span"),v(Br.$$.fragment),kk=h(),Zl=r("span"),bk=n("TFRemBertForMultipleChoice"),vc=h(),Ue=r("div"),v(Mr.$$.fragment),Tk=h(),ed=r("p"),vk=n(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yk=h(),zr=r("p"),wk=n("This model inherits from "),ya=r("a"),$k=n("TFPreTrainedModel"),Fk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rk=h(),qr=r("p"),Ek=n("This model is also a "),Cr=r("a"),Bk=n("tf.keras.Model"),Mk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zk=h(),v(Fn.$$.fragment),qk=h(),_t=r("div"),v(xr.$$.fragment),Ck=h(),fo=r("p"),xk=n("The "),wa=r("a"),jk=n("TFRemBertForMultipleChoice"),Lk=n(" forward method, overrides the "),td=r("code"),Pk=n("__call__"),Ok=n(" special method."),Dk=h(),v(Rn.$$.fragment),Ak=h(),v(En.$$.fragment),yc=h(),go=r("h2"),Bn=r("a"),od=r("span"),v(jr.$$.fragment),Nk=h(),nd=r("span"),Sk=n("TFRemBertForTokenClassification"),wc=h(),He=r("div"),v(Lr.$$.fragment),Ik=h(),sd=r("p"),Wk=n(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Uk=h(),Pr=r("p"),Hk=n("This model inherits from "),$a=r("a"),Qk=n("TFPreTrainedModel"),Kk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vk=h(),Or=r("p"),Jk=n("This model is also a "),Dr=r("a"),Gk=n("tf.keras.Model"),Xk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yk=h(),v(Mn.$$.fragment),Zk=h(),ot=r("div"),v(Ar.$$.fragment),eb=h(),_o=r("p"),tb=n("The "),Fa=r("a"),ob=n("TFRemBertForTokenClassification"),nb=n(" forward method, overrides the "),rd=r("code"),sb=n("__call__"),rb=n(" special method."),ab=h(),v(zn.$$.fragment),ib=h(),v(qn.$$.fragment),lb=h(),v(Cn.$$.fragment),$c=h(),ko=r("h2"),xn=r("a"),ad=r("span"),v(Nr.$$.fragment),db=h(),id=r("span"),cb=n("TFRemBertForQuestionAnswering"),Fc=h(),Qe=r("div"),v(Sr.$$.fragment),pb=h(),bo=r("p"),hb=n(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ld=r("code"),mb=n("span start logits"),ub=n(" and "),dd=r("code"),fb=n("span end logits"),gb=n(")."),_b=h(),Ir=r("p"),kb=n("This model inherits from "),Ra=r("a"),bb=n("TFPreTrainedModel"),Tb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vb=h(),Wr=r("p"),yb=n("This model is also a "),Ur=r("a"),wb=n("tf.keras.Model"),$b=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fb=h(),v(jn.$$.fragment),Rb=h(),nt=r("div"),v(Hr.$$.fragment),Eb=h(),To=r("p"),Bb=n("The "),Ea=r("a"),Mb=n("TFRemBertForQuestionAnswering"),zb=n(" forward method, overrides the "),cd=r("code"),qb=n("__call__"),Cb=n(" special method."),xb=h(),v(Ln.$$.fragment),jb=h(),v(Pn.$$.fragment),Lb=h(),v(On.$$.fragment),this.h()},l(o){const b=Uy('[data-svelte="svelte-1phssyn"]',document.head);l=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=a(o,"H1",{class:!0});var Qr=i(c);p=a(Qr,"A",{id:!0,class:!0,href:!0});var pd=i(p);T=a(pd,"SPAN",{});var hd=i(T);y(d.$$.fragment,hd),hd.forEach(t),pd.forEach(t),u=m(Qr),M=a(Qr,"SPAN",{});var md=i(M);ue=s(md,"RemBERT"),md.forEach(t),Qr.forEach(t),X=m(o),z=a(o,"H2",{class:!0});var Kr=i(z);te=a(Kr,"A",{id:!0,class:!0,href:!0});var ud=i(te);N=a(ud,"SPAN",{});var fd=i(N);y(ne.$$.fragment,fd),fd.forEach(t),ud.forEach(t),fe=m(Kr),S=a(Kr,"SPAN",{});var gd=i(S);ge=s(gd,"Overview"),gd.forEach(t),Kr.forEach(t),pe=m(o),J=a(o,"P",{});var Vr=i(J);O=s(Vr,"The RemBERT model was proposed in "),se=a(Vr,"A",{href:!0,rel:!0});var _d=i(se);Z=s(_d,"Rethinking Embedding Coupling in Pre-trained Language Models"),_d.forEach(t),q=s(Vr," by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),Vr.forEach(t),x=m(o),ae=a(o,"P",{});var kd=i(ae);H=s(kd,"The abstract from the paper is the following:"),kd.forEach(t),he=m(o),ie=a(o,"P",{});var bd=i(ie);I=a(bd,"EM",{});var Td=i(I);_e=s(Td,`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),Td.forEach(t),bd.forEach(t),me=m(o),C=a(o,"P",{});var vd=i(C);ke=s(vd,"Tips:"),vd.forEach(t),W=m(o),le=a(o,"P",{});var yd=i(le);be=s(yd,`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),yd.forEach(t),U=m(o),ee=a(o,"H2",{class:!0});var Jr=i(ee);oe=a(Jr,"A",{id:!0,class:!0,href:!0});var wd=i(oe);L=a(wd,"SPAN",{});var $d=i(L);y(re.$$.fragment,$d),$d.forEach(t),wd.forEach(t),Q=m(Jr),ce=a(Jr,"SPAN",{});var Fd=i(ce);f=s(Fd,"RemBertConfig"),Fd.forEach(t),Jr.forEach(t),B=m(o),P=a(o,"DIV",{class:!0});var Ke=i(P);y(ve.$$.fragment,Ke),Re=m(Ke),j=a(Ke,"P",{});var Gr=i(j);Ee=s(Gr,"This is the configuration class to store the configuration of a "),ye=a(Gr,"A",{href:!0});var Rd=i(ye);Be=s(Rd,"RemBertModel"),Rd.forEach(t),D=s(Gr,`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the remert-large architecture.`),Gr.forEach(t),K=m(Ke),Te=a(Ke,"P",{});var vo=i(Te);Me=s(vo,"Configuration objects inherit from "),A=a(vo,"A",{href:!0});var Ed=i(A);ze=s(Ed,"PretrainedConfig"),Ed.forEach(t),qe=s(vo,` and can be used to control the model outputs. Read the
documentation from `),de=a(vo,"A",{href:!0});var Bd=i(de);Ce=s(Bd,"PretrainedConfig"),Bd.forEach(t),vp=s(vo," for more information."),vo.forEach(t),yp=m(Ke),y(yo.$$.fragment,Ke),wp=m(Ke),Ga=a(Ke,"BLOCKQUOTE",{});var Md=i(Ga);Xa=a(Md,"BLOCKQUOTE",{});var zd=i(Xa);Ya=a(zd,"BLOCKQUOTE",{});var qd=i(Ya);Za=a(qd,"P",{});var Cd=i(Za);$p=s(Cd,`from transformers import RemBertModel, RemBertConfig >>> # Initializing a RemBERT rembert style
configuration >>> configuration = RemBertConfig()`),Cd.forEach(t),qd.forEach(t),zd.forEach(t),Md.forEach(t),Fp=m(Ke),ei=a(Ke,"BLOCKQUOTE",{});var xd=i(ei);ti=a(xd,"BLOCKQUOTE",{});var jd=i(ti);oi=a(jd,"BLOCKQUOTE",{});var Ld=i(oi);wo=a(Ld,"H1",{class:!0});var Xr=i(wo);$o=a(Xr,"A",{id:!0,class:!0,href:!0});var Pd=i($o);ni=a(Pd,"SPAN",{});var Od=i(ni);y(Gn.$$.fragment,Od),Od.forEach(t),Pd.forEach(t),Rp=m(Xr),si=a(Xr,"SPAN",{});var Dd=i(si);Ep=s(Dd,"Initializing a model from the rembert style configuration >>> model = RemBertModel(configuration)"),Dd.forEach(t),Xr.forEach(t),Ld.forEach(t),jd.forEach(t),xd.forEach(t),Bp=m(Ke),ri=a(Ke,"BLOCKQUOTE",{});var Ad=i(ri);ai=a(Ad,"BLOCKQUOTE",{});var Nd=i(ai);ii=a(Nd,"BLOCKQUOTE",{});var Sd=i(ii);Fo=a(Sd,"H1",{class:!0});var Yr=i(Fo);Ro=a(Yr,"A",{id:!0,class:!0,href:!0});var Id=i(Ro);li=a(Id,"SPAN",{});var Wd=i(li);y(Xn.$$.fragment,Wd),Wd.forEach(t),Id.forEach(t),Mp=m(Yr),di=a(Yr,"SPAN",{});var Ud=i(di);zp=s(Ud,"Accessing the model configuration >>> configuration = model.config"),Ud.forEach(t),Yr.forEach(t),Sd.forEach(t),Nd.forEach(t),Ad.forEach(t),Ke.forEach(t),Vd=m(o),Nt=a(o,"H2",{class:!0});var Zr=i(Nt);Eo=a(Zr,"A",{id:!0,class:!0,href:!0});var Hd=i(Eo);ci=a(Hd,"SPAN",{});var Qd=i(ci);y(Yn.$$.fragment,Qd),Qd.forEach(t),Hd.forEach(t),qp=m(Zr),pi=a(Zr,"SPAN",{});var Kd=i(pi);Cp=s(Kd,"RemBertTokenizer"),Kd.forEach(t),Zr.forEach(t),Jd=m(o),Le=a(o,"DIV",{class:!0});var st=i(Le);y(Zn.$$.fragment,st),xp=m(st),es=a(st,"P",{});var Ec=i(es);jp=s(Ec,"Construct a RemBERT tokenizer. Based on "),ts=a(Ec,"A",{href:!0,rel:!0});var Nb=i(ts);Lp=s(Nb,"SentencePiece"),Nb.forEach(t),Pp=s(Ec,"."),Ec.forEach(t),Op=m(st),os=a(st,"P",{});var Bc=i(os);Dp=s(Bc,"This tokenizer inherits from "),ea=a(Bc,"A",{href:!0});var Sb=i(ea);Ap=s(Sb,"PreTrainedTokenizer"),Sb.forEach(t),Np=s(Bc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bc.forEach(t),Sp=m(st),Mt=a(st,"DIV",{class:!0});var Ba=i(Mt);y(ns.$$.fragment,Ba),Ip=m(Ba),hi=a(Ba,"P",{});var Ib=i(hi);Wp=s(Ib,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),Ib.forEach(t),Up=m(Ba),ss=a(Ba,"UL",{});var Mc=i(ss);ta=a(Mc,"LI",{});var Pb=i(ta);Hp=s(Pb,"single sequence: "),mi=a(Pb,"CODE",{});var Wb=i(mi);Qp=s(Wb,"[CLS] X [SEP]"),Wb.forEach(t),Pb.forEach(t),Kp=m(Mc),oa=a(Mc,"LI",{});var Ob=i(oa);Vp=s(Ob,"pair of sequences: "),ui=a(Ob,"CODE",{});var Ub=i(ui);Jp=s(Ub,"[CLS] A [SEP] B [SEP]"),Ub.forEach(t),Ob.forEach(t),Mc.forEach(t),Ba.forEach(t),Gp=m(st),Bo=a(st,"DIV",{class:!0});var zc=i(Bo);y(rs.$$.fragment,zc),Xp=m(zc),as=a(zc,"P",{});var qc=i(as);Yp=s(qc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fi=a(qc,"CODE",{});var Hb=i(fi);Zp=s(Hb,"prepare_for_model"),Hb.forEach(t),eh=s(qc," method."),qc.forEach(t),zc.forEach(t),th=m(st),pt=a(st,"DIV",{class:!0});var Dn=i(pt);y(is.$$.fragment,Dn),oh=m(Dn),gi=a(Dn,"P",{});var Qb=i(gi);nh=s(Qb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT
sequence pair mask has the following format:`),Qb.forEach(t),sh=m(Dn),y(Mo.$$.fragment,Dn),rh=m(Dn),St=a(Dn,"P",{});var Ma=i(St);ah=s(Ma,"If "),_i=a(Ma,"CODE",{});var Kb=i(_i);ih=s(Kb,"token_ids_1"),Kb.forEach(t),lh=s(Ma," is "),ki=a(Ma,"CODE",{});var Vb=i(ki);dh=s(Vb,"None"),Vb.forEach(t),ch=s(Ma,", this method only returns the first portion of the mask (0s)."),Ma.forEach(t),Dn.forEach(t),ph=m(st),na=a(st,"DIV",{class:!0});var Jb=i(na);y(ls.$$.fragment,Jb),Jb.forEach(t),st.forEach(t),Gd=m(o),It=a(o,"H2",{class:!0});var Cc=i(It);zo=a(Cc,"A",{id:!0,class:!0,href:!0});var Gb=i(zo);bi=a(Gb,"SPAN",{});var Xb=i(bi);y(ds.$$.fragment,Xb),Xb.forEach(t),Gb.forEach(t),hh=m(Cc),Ti=a(Cc,"SPAN",{});var Yb=i(Ti);mh=s(Yb,"RemBertTokenizerFast"),Yb.forEach(t),Cc.forEach(t),Xd=m(o),De=a(o,"DIV",{class:!0});var kt=i(De);y(cs.$$.fragment,kt),uh=m(kt),Rt=a(kt,"P",{});var An=i(Rt);fh=s(An,"Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),vi=a(An,"EM",{});var Zb=i(vi);gh=s(Zb,"tokenizers"),Zb.forEach(t),_h=s(An,` library). Based on
`),ps=a(An,"A",{href:!0,rel:!0});var eT=i(ps);kh=s(eT,"Unigram"),eT.forEach(t),bh=s(An,`. This
tokenizer inherits from `),sa=a(An,"A",{href:!0});var tT=i(sa);Th=s(tT,"PreTrainedTokenizerFast"),tT.forEach(t),vh=s(An,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),An.forEach(t),yh=m(kt),zt=a(kt,"DIV",{class:!0});var za=i(zt);y(hs.$$.fragment,za),wh=m(za),yi=a(za,"P",{});var oT=i(yi);$h=s(oT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),oT.forEach(t),Fh=m(za),ms=a(za,"UL",{});var xc=i(ms);ra=a(xc,"LI",{});var Db=i(ra);Rh=s(Db,"single sequence: "),wi=a(Db,"CODE",{});var nT=i(wi);Eh=s(nT,"[CLS] X [SEP]"),nT.forEach(t),Db.forEach(t),Bh=m(xc),aa=a(xc,"LI",{});var Ab=i(aa);Mh=s(Ab,"pair of sequences: "),$i=a(Ab,"CODE",{});var sT=i($i);zh=s(sT,"[CLS] A [SEP] B [SEP]"),sT.forEach(t),Ab.forEach(t),xc.forEach(t),za.forEach(t),qh=m(kt),qo=a(kt,"DIV",{class:!0});var jc=i(qo);y(us.$$.fragment,jc),Ch=m(jc),fs=a(jc,"P",{});var Lc=i(fs);xh=s(Lc,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fi=a(Lc,"CODE",{});var rT=i(Fi);jh=s(rT,"prepare_for_model"),rT.forEach(t),Lh=s(Lc," method."),Lc.forEach(t),jc.forEach(t),Ph=m(kt),ht=a(kt,"DIV",{class:!0});var Nn=i(ht);y(gs.$$.fragment,Nn),Oh=m(Nn),Ri=a(Nn,"P",{});var aT=i(Ri);Dh=s(aT,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT
sequence pair mask has the following format:`),aT.forEach(t),Ah=m(Nn),y(Co.$$.fragment,Nn),Nh=m(Nn),Ei=a(Nn,"P",{});var iT=i(Ei);Sh=s(iT,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),iT.forEach(t),Nn.forEach(t),Ih=m(kt),ia=a(kt,"DIV",{class:!0});var lT=i(ia);y(_s.$$.fragment,lT),lT.forEach(t),kt.forEach(t),Yd=m(o),Wt=a(o,"H2",{class:!0});var Pc=i(Wt);xo=a(Pc,"A",{id:!0,class:!0,href:!0});var dT=i(xo);Bi=a(dT,"SPAN",{});var cT=i(Bi);y(ks.$$.fragment,cT),cT.forEach(t),dT.forEach(t),Wh=m(Pc),Mi=a(Pc,"SPAN",{});var pT=i(Mi);Uh=s(pT,"RemBertModel"),pT.forEach(t),Pc.forEach(t),Zd=m(o),Je=a(o,"DIV",{class:!0});var qt=i(Je);y(bs.$$.fragment,qt),Hh=m(qt),Ts=a(qt,"P",{});var Oc=i(Ts);Qh=s(Oc,`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),vs=a(Oc,"A",{href:!0,rel:!0});var hT=i(vs);Kh=s(hT,"torch.nn.Module"),hT.forEach(t),Vh=s(Oc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oc.forEach(t),Jh=m(qt),ys=a(qt,"P",{});var Dc=i(ys);Gh=s(Dc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ws=a(Dc,"A",{href:!0,rel:!0});var mT=i(ws);Xh=s(mT,`Attention is
all you need`),mT.forEach(t),Yh=s(Dc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Dc.forEach(t),Zh=m(qt),Ae=a(qt,"P",{});var rt=i(Ae);em=s(rt,"To behave as an decoder the model needs to be initialized with the "),zi=a(rt,"CODE",{});var uT=i(zi);tm=s(uT,"is_decoder"),uT.forEach(t),om=s(rt,` argument of the configuration set
to `),qi=a(rt,"CODE",{});var fT=i(qi);nm=s(fT,"True"),fT.forEach(t),sm=s(rt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ci=a(rt,"CODE",{});var gT=i(Ci);rm=s(gT,"is_decoder"),gT.forEach(t),am=s(rt,` argument and
`),xi=a(rt,"CODE",{});var _T=i(xi);im=s(_T,"add_cross_attention"),_T.forEach(t),lm=s(rt," set to "),ji=a(rt,"CODE",{});var kT=i(ji);dm=s(kT,"True"),kT.forEach(t),cm=s(rt,"; an "),Li=a(rt,"CODE",{});var bT=i(Li);pm=s(bT,"encoder_hidden_states"),bT.forEach(t),hm=s(rt," is then expected as an input to the forward pass."),rt.forEach(t),mm=m(qt),mt=a(qt,"DIV",{class:!0});var Sn=i(mt);y($s.$$.fragment,Sn),um=m(Sn),Ut=a(Sn,"P",{});var qa=i(Ut);fm=s(qa,"The "),la=a(qa,"A",{href:!0});var TT=i(la);gm=s(TT,"RemBertModel"),TT.forEach(t),_m=s(qa," forward method, overrides the "),Pi=a(qa,"CODE",{});var vT=i(Pi);km=s(vT,"__call__"),vT.forEach(t),bm=s(qa," special method."),qa.forEach(t),Tm=m(Sn),y(jo.$$.fragment,Sn),vm=m(Sn),y(Lo.$$.fragment,Sn),Sn.forEach(t),qt.forEach(t),ec=m(o),Ht=a(o,"H2",{class:!0});var Ac=i(Ht);Po=a(Ac,"A",{id:!0,class:!0,href:!0});var yT=i(Po);Oi=a(yT,"SPAN",{});var wT=i(Oi);y(Fs.$$.fragment,wT),wT.forEach(t),yT.forEach(t),ym=m(Ac),Di=a(Ac,"SPAN",{});var $T=i(Di);wm=s($T,"RemBertForCausalLM"),$T.forEach(t),Ac.forEach(t),tc=m(o),Et=a(o,"DIV",{class:!0});var Ca=i(Et);y(Rs.$$.fragment,Ca),$m=m(Ca),Qt=a(Ca,"P",{});var xa=i(Qt);Fm=s(xa,"RemBERT Model with a "),Ai=a(xa,"CODE",{});var FT=i(Ai);Rm=s(FT,"language modeling"),FT.forEach(t),Em=s(xa,` head on top for CLM fine-tuning.
This model is a PyTorch `),Es=a(xa,"A",{href:!0,rel:!0});var RT=i(Es);Bm=s(RT,"torch.nn.Module"),RT.forEach(t),Mm=s(xa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xa.forEach(t),zm=m(Ca),ut=a(Ca,"DIV",{class:!0});var In=i(ut);y(Bs.$$.fragment,In),qm=m(In),Kt=a(In,"P",{});var ja=i(Kt);Cm=s(ja,"The "),da=a(ja,"A",{href:!0});var ET=i(da);xm=s(ET,"RemBertForCausalLM"),ET.forEach(t),jm=s(ja," forward method, overrides the "),Ni=a(ja,"CODE",{});var BT=i(Ni);Lm=s(BT,"__call__"),BT.forEach(t),Pm=s(ja," special method."),ja.forEach(t),Om=m(In),y(Oo.$$.fragment,In),Dm=m(In),y(Do.$$.fragment,In),In.forEach(t),Ca.forEach(t),oc=m(o),Vt=a(o,"H2",{class:!0});var Nc=i(Vt);Ao=a(Nc,"A",{id:!0,class:!0,href:!0});var MT=i(Ao);Si=a(MT,"SPAN",{});var zT=i(Si);y(Ms.$$.fragment,zT),zT.forEach(t),MT.forEach(t),Am=m(Nc),Ii=a(Nc,"SPAN",{});var qT=i(Ii);Nm=s(qT,"RemBertForMaskedLM"),qT.forEach(t),Nc.forEach(t),nc=m(o),Bt=a(o,"DIV",{class:!0});var La=i(Bt);y(zs.$$.fragment,La),Sm=m(La),Jt=a(La,"P",{});var Pa=i(Jt);Im=s(Pa,"RemBERT Model with a "),Wi=a(Pa,"CODE",{});var CT=i(Wi);Wm=s(CT,"language modeling"),CT.forEach(t),Um=s(Pa,` head on top.
This model is a PyTorch `),qs=a(Pa,"A",{href:!0,rel:!0});var xT=i(qs);Hm=s(xT,"torch.nn.Module"),xT.forEach(t),Qm=s(Pa,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pa.forEach(t),Km=m(La),Ge=a(La,"DIV",{class:!0});var Ct=i(Ge);y(Cs.$$.fragment,Ct),Vm=m(Ct),Gt=a(Ct,"P",{});var Oa=i(Gt);Jm=s(Oa,"The "),ca=a(Oa,"A",{href:!0});var jT=i(ca);Gm=s(jT,"RemBertForMaskedLM"),jT.forEach(t),Xm=s(Oa," forward method, overrides the "),Ui=a(Oa,"CODE",{});var LT=i(Ui);Ym=s(LT,"__call__"),LT.forEach(t),Zm=s(Oa," special method."),Oa.forEach(t),eu=m(Ct),y(No.$$.fragment,Ct),tu=m(Ct),y(So.$$.fragment,Ct),ou=m(Ct),y(Io.$$.fragment,Ct),Ct.forEach(t),La.forEach(t),sc=m(o),Xt=a(o,"H2",{class:!0});var Sc=i(Xt);Wo=a(Sc,"A",{id:!0,class:!0,href:!0});var PT=i(Wo);Hi=a(PT,"SPAN",{});var OT=i(Hi);y(xs.$$.fragment,OT),OT.forEach(t),PT.forEach(t),nu=m(Sc),Qi=a(Sc,"SPAN",{});var DT=i(Qi);su=s(DT,"RemBertForSequenceClassification"),DT.forEach(t),Sc.forEach(t),rc=m(o),it=a(o,"DIV",{class:!0});var Wn=i(it);y(js.$$.fragment,Wn),ru=m(Wn),Ki=a(Wn,"P",{});var AT=i(Ki);au=s(AT,`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),AT.forEach(t),iu=m(Wn),Ls=a(Wn,"P",{});var Ic=i(Ls);lu=s(Ic,"This model is a PyTorch "),Ps=a(Ic,"A",{href:!0,rel:!0});var NT=i(Ps);du=s(NT,"torch.nn.Module"),NT.forEach(t),cu=s(Ic,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ic.forEach(t),pu=m(Wn),Oe=a(Wn,"DIV",{class:!0});var at=i(Oe);y(Os.$$.fragment,at),hu=m(at),Yt=a(at,"P",{});var Da=i(Yt);mu=s(Da,"The "),pa=a(Da,"A",{href:!0});var ST=i(pa);uu=s(ST,"RemBertForSequenceClassification"),ST.forEach(t),fu=s(Da," forward method, overrides the "),Vi=a(Da,"CODE",{});var IT=i(Vi);gu=s(IT,"__call__"),IT.forEach(t),_u=s(Da," special method."),Da.forEach(t),ku=m(at),y(Uo.$$.fragment,at),bu=m(at),y(Ho.$$.fragment,at),Tu=m(at),y(Qo.$$.fragment,at),vu=m(at),y(Ko.$$.fragment,at),yu=m(at),y(Vo.$$.fragment,at),at.forEach(t),Wn.forEach(t),ac=m(o),Zt=a(o,"H2",{class:!0});var Wc=i(Zt);Jo=a(Wc,"A",{id:!0,class:!0,href:!0});var WT=i(Jo);Ji=a(WT,"SPAN",{});var UT=i(Ji);y(Ds.$$.fragment,UT),UT.forEach(t),WT.forEach(t),wu=m(Wc),Gi=a(Wc,"SPAN",{});var HT=i(Gi);$u=s(HT,"RemBertForMultipleChoice"),HT.forEach(t),Wc.forEach(t),ic=m(o),lt=a(o,"DIV",{class:!0});var Un=i(lt);y(As.$$.fragment,Un),Fu=m(Un),Xi=a(Un,"P",{});var QT=i(Xi);Ru=s(QT,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),QT.forEach(t),Eu=m(Un),Ns=a(Un,"P",{});var Uc=i(Ns);Bu=s(Uc,"This model is a PyTorch "),Ss=a(Uc,"A",{href:!0,rel:!0});var KT=i(Ss);Mu=s(KT,"torch.nn.Module"),KT.forEach(t),zu=s(Uc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uc.forEach(t),qu=m(Un),ft=a(Un,"DIV",{class:!0});var Hn=i(ft);y(Is.$$.fragment,Hn),Cu=m(Hn),eo=a(Hn,"P",{});var Aa=i(eo);xu=s(Aa,"The "),ha=a(Aa,"A",{href:!0});var VT=i(ha);ju=s(VT,"RemBertForMultipleChoice"),VT.forEach(t),Lu=s(Aa," forward method, overrides the "),Yi=a(Aa,"CODE",{});var JT=i(Yi);Pu=s(JT,"__call__"),JT.forEach(t),Ou=s(Aa," special method."),Aa.forEach(t),Du=m(Hn),y(Go.$$.fragment,Hn),Au=m(Hn),y(Xo.$$.fragment,Hn),Hn.forEach(t),Un.forEach(t),lc=m(o),to=a(o,"H2",{class:!0});var Hc=i(to);Yo=a(Hc,"A",{id:!0,class:!0,href:!0});var GT=i(Yo);Zi=a(GT,"SPAN",{});var XT=i(Zi);y(Ws.$$.fragment,XT),XT.forEach(t),GT.forEach(t),Nu=m(Hc),el=a(Hc,"SPAN",{});var YT=i(el);Su=s(YT,"RemBertForTokenClassification"),YT.forEach(t),Hc.forEach(t),dc=m(o),dt=a(o,"DIV",{class:!0});var Qn=i(dt);y(Us.$$.fragment,Qn),Iu=m(Qn),tl=a(Qn,"P",{});var ZT=i(tl);Wu=s(ZT,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ZT.forEach(t),Uu=m(Qn),Hs=a(Qn,"P",{});var Qc=i(Hs);Hu=s(Qc,"This model is a PyTorch "),Qs=a(Qc,"A",{href:!0,rel:!0});var ev=i(Qs);Qu=s(ev,"torch.nn.Module"),ev.forEach(t),Ku=s(Qc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qc.forEach(t),Vu=m(Qn),Xe=a(Qn,"DIV",{class:!0});var xt=i(Xe);y(Ks.$$.fragment,xt),Ju=m(xt),oo=a(xt,"P",{});var Na=i(oo);Gu=s(Na,"The "),ma=a(Na,"A",{href:!0});var tv=i(ma);Xu=s(tv,"RemBertForTokenClassification"),tv.forEach(t),Yu=s(Na," forward method, overrides the "),ol=a(Na,"CODE",{});var ov=i(ol);Zu=s(ov,"__call__"),ov.forEach(t),ef=s(Na," special method."),Na.forEach(t),tf=m(xt),y(Zo.$$.fragment,xt),of=m(xt),y(en.$$.fragment,xt),nf=m(xt),y(tn.$$.fragment,xt),xt.forEach(t),Qn.forEach(t),cc=m(o),no=a(o,"H2",{class:!0});var Kc=i(no);on=a(Kc,"A",{id:!0,class:!0,href:!0});var nv=i(on);nl=a(nv,"SPAN",{});var sv=i(nl);y(Vs.$$.fragment,sv),sv.forEach(t),nv.forEach(t),sf=m(Kc),sl=a(Kc,"SPAN",{});var rv=i(sl);rf=s(rv,"RemBertForQuestionAnswering"),rv.forEach(t),Kc.forEach(t),pc=m(o),ct=a(o,"DIV",{class:!0});var Kn=i(ct);y(Js.$$.fragment,Kn),af=m(Kn),so=a(Kn,"P",{});var Sa=i(so);lf=s(Sa,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rl=a(Sa,"CODE",{});var av=i(rl);df=s(av,"span start logits"),av.forEach(t),cf=s(Sa," and "),al=a(Sa,"CODE",{});var iv=i(al);pf=s(iv,"span end logits"),iv.forEach(t),hf=s(Sa,")."),Sa.forEach(t),mf=m(Kn),Gs=a(Kn,"P",{});var Vc=i(Gs);uf=s(Vc,"This model is a PyTorch "),Xs=a(Vc,"A",{href:!0,rel:!0});var lv=i(Xs);ff=s(lv,"torch.nn.Module"),lv.forEach(t),gf=s(Vc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vc.forEach(t),_f=m(Kn),Ye=a(Kn,"DIV",{class:!0});var jt=i(Ye);y(Ys.$$.fragment,jt),kf=m(jt),ro=a(jt,"P",{});var Ia=i(ro);bf=s(Ia,"The "),ua=a(Ia,"A",{href:!0});var dv=i(ua);Tf=s(dv,"RemBertForQuestionAnswering"),dv.forEach(t),vf=s(Ia," forward method, overrides the "),il=a(Ia,"CODE",{});var cv=i(il);yf=s(cv,"__call__"),cv.forEach(t),wf=s(Ia," special method."),Ia.forEach(t),$f=m(jt),y(nn.$$.fragment,jt),Ff=m(jt),y(sn.$$.fragment,jt),Rf=m(jt),y(rn.$$.fragment,jt),jt.forEach(t),Kn.forEach(t),hc=m(o),ao=a(o,"H2",{class:!0});var Jc=i(ao);an=a(Jc,"A",{id:!0,class:!0,href:!0});var pv=i(an);ll=a(pv,"SPAN",{});var hv=i(ll);y(Zs.$$.fragment,hv),hv.forEach(t),pv.forEach(t),Ef=m(Jc),dl=a(Jc,"SPAN",{});var mv=i(dl);Bf=s(mv,"TFRemBertModel"),mv.forEach(t),Jc.forEach(t),mc=m(o),Ne=a(o,"DIV",{class:!0});var bt=i(Ne);y(er.$$.fragment,bt),Mf=m(bt),cl=a(bt,"P",{});var uv=i(cl);zf=s(uv,"The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),uv.forEach(t),qf=m(bt),tr=a(bt,"P",{});var Gc=i(tr);Cf=s(Gc,"This model inherits from "),fa=a(Gc,"A",{href:!0});var fv=i(fa);xf=s(fv,"TFPreTrainedModel"),fv.forEach(t),jf=s(Gc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc.forEach(t),Lf=m(bt),or=a(bt,"P",{});var Xc=i(or);Pf=s(Xc,"This model is also a "),nr=a(Xc,"A",{href:!0,rel:!0});var gv=i(nr);Of=s(gv,"tf.keras.Model"),gv.forEach(t),Df=s(Xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xc.forEach(t),Af=m(bt),y(ln.$$.fragment,bt),Nf=m(bt),gt=a(bt,"DIV",{class:!0});var Vn=i(gt);y(sr.$$.fragment,Vn),Sf=m(Vn),io=a(Vn,"P",{});var Wa=i(io);If=s(Wa,"The "),ga=a(Wa,"A",{href:!0});var _v=i(ga);Wf=s(_v,"TFRemBertModel"),_v.forEach(t),Uf=s(Wa," forward method, overrides the "),pl=a(Wa,"CODE",{});var kv=i(pl);Hf=s(kv,"__call__"),kv.forEach(t),Qf=s(Wa," special method."),Wa.forEach(t),Kf=m(Vn),y(dn.$$.fragment,Vn),Vf=m(Vn),y(cn.$$.fragment,Vn),Vn.forEach(t),bt.forEach(t),uc=m(o),lo=a(o,"H2",{class:!0});var Yc=i(lo);pn=a(Yc,"A",{id:!0,class:!0,href:!0});var bv=i(pn);hl=a(bv,"SPAN",{});var Tv=i(hl);y(rr.$$.fragment,Tv),Tv.forEach(t),bv.forEach(t),Jf=m(Yc),ml=a(Yc,"SPAN",{});var vv=i(ml);Gf=s(vv,"TFRemBertForMaskedLM"),vv.forEach(t),Yc.forEach(t),fc=m(o),Se=a(o,"DIV",{class:!0});var Tt=i(Se);y(ar.$$.fragment,Tt),Xf=m(Tt),ir=a(Tt,"P",{});var Zc=i(ir);Yf=s(Zc,"RemBERT Model with a "),ul=a(Zc,"CODE",{});var yv=i(ul);Zf=s(yv,"language modeling"),yv.forEach(t),eg=s(Zc," head on top."),Zc.forEach(t),tg=m(Tt),lr=a(Tt,"P",{});var ep=i(lr);og=s(ep,"This model inherits from "),_a=a(ep,"A",{href:!0});var wv=i(_a);ng=s(wv,"TFPreTrainedModel"),wv.forEach(t),sg=s(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),rg=m(Tt),dr=a(Tt,"P",{});var tp=i(dr);ag=s(tp,"This model is also a "),cr=a(tp,"A",{href:!0,rel:!0});var $v=i(cr);ig=s($v,"tf.keras.Model"),$v.forEach(t),lg=s(tp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tp.forEach(t),dg=m(Tt),y(hn.$$.fragment,Tt),cg=m(Tt),Ze=a(Tt,"DIV",{class:!0});var Lt=i(Ze);y(pr.$$.fragment,Lt),pg=m(Lt),co=a(Lt,"P",{});var Ua=i(co);hg=s(Ua,"The "),ka=a(Ua,"A",{href:!0});var Fv=i(ka);mg=s(Fv,"TFRemBertForMaskedLM"),Fv.forEach(t),ug=s(Ua," forward method, overrides the "),fl=a(Ua,"CODE",{});var Rv=i(fl);fg=s(Rv,"__call__"),Rv.forEach(t),gg=s(Ua," special method."),Ua.forEach(t),_g=m(Lt),y(mn.$$.fragment,Lt),kg=m(Lt),y(un.$$.fragment,Lt),bg=m(Lt),y(fn.$$.fragment,Lt),Lt.forEach(t),Tt.forEach(t),gc=m(o),po=a(o,"H2",{class:!0});var op=i(po);gn=a(op,"A",{id:!0,class:!0,href:!0});var Ev=i(gn);gl=a(Ev,"SPAN",{});var Bv=i(gl);y(hr.$$.fragment,Bv),Bv.forEach(t),Ev.forEach(t),Tg=m(op),_l=a(op,"SPAN",{});var Mv=i(_l);vg=s(Mv,"TFRemBertForCausalLM"),Mv.forEach(t),op.forEach(t),_c=m(o),Ie=a(o,"DIV",{class:!0});var vt=i(Ie);y(mr.$$.fragment,vt),yg=m(vt),ur=a(vt,"P",{});var np=i(ur);wg=s(np,"RemBERT Model with a "),kl=a(np,"CODE",{});var zv=i(kl);$g=s(zv,"language modeling"),zv.forEach(t),Fg=s(np," head on top for CLM fine-tuning."),np.forEach(t),Rg=m(vt),fr=a(vt,"P",{});var sp=i(fr);Eg=s(sp,"This model inherits from "),ba=a(sp,"A",{href:!0});var qv=i(ba);Bg=s(qv,"TFPreTrainedModel"),qv.forEach(t),Mg=s(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(t),zg=m(vt),gr=a(vt,"P",{});var rp=i(gr);qg=s(rp,"This model is also a "),_r=a(rp,"A",{href:!0,rel:!0});var Cv=i(_r);Cg=s(Cv,"tf.keras.Model"),Cv.forEach(t),xg=s(rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rp.forEach(t),jg=m(vt),y(_n.$$.fragment,vt),Lg=m(vt),et=a(vt,"DIV",{class:!0});var Pt=i(et);y(kr.$$.fragment,Pt),Pg=m(Pt),Pe=a(Pt,"P",{});var Ve=i(Pe);Og=s(Ve,"encoder_hidden_states  ("),bl=a(Ve,"CODE",{});var xv=i(bl);Dg=s(xv,"tf.Tensor"),xv.forEach(t),Ag=s(Ve," of shape "),Tl=a(Ve,"CODE",{});var jv=i(Tl);Ng=s(jv,"(batch_size, sequence_length, hidden_size)"),jv.forEach(t),Sg=s(Ve,", "),vl=a(Ve,"EM",{});var Lv=i(vl);Ig=s(Lv,"optional"),Lv.forEach(t),Wg=s(Ve,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),yl=a(Ve,"CODE",{});var Pv=i(yl);Ug=s(Pv,"tf.Tensor"),Pv.forEach(t),Hg=s(Ve," of shape "),wl=a(Ve,"CODE",{});var Ov=i(wl);Qg=s(Ov,"(batch_size, sequence_length)"),Ov.forEach(t),Kg=s(Ve,", "),$l=a(Ve,"EM",{});var Dv=i($l);Vg=s(Dv,"optional"),Dv.forEach(t),Jg=s(Ve,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),Fl=a(Ve,"CODE",{});var Av=i(Fl);Gg=s(Av,"[0, 1]"),Av.forEach(t),Xg=s(Ve,":"),Ve.forEach(t),Yg=m(Pt),br=a(Pt,"UL",{});var ap=i(br);Tr=a(ap,"LI",{});var ip=i(Tr);Zg=s(ip,"1 for tokens that are "),Rl=a(ip,"STRONG",{});var Nv=i(Rl);e_=s(Nv,"not masked"),Nv.forEach(t),t_=s(ip,","),ip.forEach(t),o_=m(ap),vr=a(ap,"LI",{});var lp=i(vr);n_=s(lp,"0 for tokens that are "),El=a(lp,"STRONG",{});var Sv=i(El);s_=s(Sv,"masked"),Sv.forEach(t),r_=s(lp,"."),lp.forEach(t),ap.forEach(t),a_=m(Pt),V=a(Pt,"P",{});var G=i(V);i_=s(G,"past_key_values ("),Bl=a(G,"CODE",{});var Iv=i(Bl);l_=s(Iv,"Tuple[Tuple[tf.Tensor]]"),Iv.forEach(t),d_=s(G," of length "),Ml=a(G,"CODE",{});var Wv=i(Ml);c_=s(Wv,"config.n_layers"),Wv.forEach(t),p_=s(G,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),zl=a(G,"CODE",{});var Uv=i(zl);h_=s(Uv,"past_key_values"),Uv.forEach(t),m_=s(G," are used, the user can optionally input only the last "),ql=a(G,"CODE",{});var Hv=i(ql);u_=s(Hv,"decoder_input_ids"),Hv.forEach(t),f_=s(G,` (those that
don\u2019t have their past key value states given to this model) of shape `),Cl=a(G,"CODE",{});var Qv=i(Cl);g_=s(Qv,"(batch_size, 1)"),Qv.forEach(t),__=s(G,` instead of all
`),xl=a(G,"CODE",{});var Kv=i(xl);k_=s(Kv,"decoder_input_ids"),Kv.forEach(t),b_=s(G," of shape "),jl=a(G,"CODE",{});var Vv=i(jl);T_=s(Vv,"(batch_size, sequence_length)"),Vv.forEach(t),v_=s(G,`.
use_cache (`),Ll=a(G,"CODE",{});var Jv=i(Ll);y_=s(Jv,"bool"),Jv.forEach(t),w_=s(G,", "),Pl=a(G,"EM",{});var Gv=i(Pl);$_=s(Gv,"optional"),Gv.forEach(t),F_=s(G,", defaults to "),Ol=a(G,"CODE",{});var Xv=i(Ol);R_=s(Xv,"True"),Xv.forEach(t),E_=s(G,`):
If set to `),Dl=a(G,"CODE",{});var Yv=i(Dl);B_=s(Yv,"True"),Yv.forEach(t),M_=s(G,", "),Al=a(G,"CODE",{});var Zv=i(Al);z_=s(Zv,"past_key_values"),Zv.forEach(t),q_=s(G,` key value states are returned and can be used to speed up decoding (see
`),Nl=a(G,"CODE",{});var ey=i(Nl);C_=s(ey,"past_key_values"),ey.forEach(t),x_=s(G,"). Set to "),Sl=a(G,"CODE",{});var ty=i(Sl);j_=s(ty,"False"),ty.forEach(t),L_=s(G," during training, "),Il=a(G,"CODE",{});var oy=i(Il);P_=s(oy,"True"),oy.forEach(t),O_=s(G,` during generation
labels (`),Wl=a(G,"CODE",{});var ny=i(Wl);D_=s(ny,"tf.Tensor"),ny.forEach(t),A_=s(G," or "),Ul=a(G,"CODE",{});var sy=i(Ul);N_=s(sy,"np.ndarray"),sy.forEach(t),S_=s(G," of shape "),Hl=a(G,"CODE",{});var ry=i(Hl);I_=s(ry,"(batch_size, sequence_length)"),ry.forEach(t),W_=s(G,", "),Ql=a(G,"EM",{});var ay=i(Ql);U_=s(ay,"optional"),ay.forEach(t),H_=s(G,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Kl=a(G,"CODE",{});var iy=i(Kl);Q_=s(iy,"[0, ..., config.vocab_size - 1]"),iy.forEach(t),K_=s(G,"."),G.forEach(t),V_=m(Pt),y(kn.$$.fragment,Pt),Pt.forEach(t),vt.forEach(t),kc=m(o),ho=a(o,"H2",{class:!0});var dp=i(ho);bn=a(dp,"A",{id:!0,class:!0,href:!0});var ly=i(bn);Vl=a(ly,"SPAN",{});var dy=i(Vl);y(yr.$$.fragment,dy),dy.forEach(t),ly.forEach(t),J_=m(dp),Jl=a(dp,"SPAN",{});var cy=i(Jl);G_=s(cy,"TFRemBertForSequenceClassification"),cy.forEach(t),dp.forEach(t),bc=m(o),We=a(o,"DIV",{class:!0});var yt=i(We);y(wr.$$.fragment,yt),X_=m(yt),Gl=a(yt,"P",{});var py=i(Gl);Y_=s(py,"RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),py.forEach(t),Z_=m(yt),$r=a(yt,"P",{});var cp=i($r);ek=s(cp,"This model inherits from "),Ta=a(cp,"A",{href:!0});var hy=i(Ta);tk=s(hy,"TFPreTrainedModel"),hy.forEach(t),ok=s(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),nk=m(yt),Fr=a(yt,"P",{});var pp=i(Fr);sk=s(pp,"This model is also a "),Rr=a(pp,"A",{href:!0,rel:!0});var my=i(Rr);rk=s(my,"tf.keras.Model"),my.forEach(t),ak=s(pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pp.forEach(t),ik=m(yt),y(Tn.$$.fragment,yt),lk=m(yt),tt=a(yt,"DIV",{class:!0});var Ot=i(tt);y(Er.$$.fragment,Ot),dk=m(Ot),mo=a(Ot,"P",{});var Ha=i(mo);ck=s(Ha,"The "),va=a(Ha,"A",{href:!0});var uy=i(va);pk=s(uy,"TFRemBertForSequenceClassification"),uy.forEach(t),hk=s(Ha," forward method, overrides the "),Xl=a(Ha,"CODE",{});var fy=i(Xl);mk=s(fy,"__call__"),fy.forEach(t),uk=s(Ha," special method."),Ha.forEach(t),fk=m(Ot),y(vn.$$.fragment,Ot),gk=m(Ot),y(yn.$$.fragment,Ot),_k=m(Ot),y(wn.$$.fragment,Ot),Ot.forEach(t),yt.forEach(t),Tc=m(o),uo=a(o,"H2",{class:!0});var hp=i(uo);$n=a(hp,"A",{id:!0,class:!0,href:!0});var gy=i($n);Yl=a(gy,"SPAN",{});var _y=i(Yl);y(Br.$$.fragment,_y),_y.forEach(t),gy.forEach(t),kk=m(hp),Zl=a(hp,"SPAN",{});var ky=i(Zl);bk=s(ky,"TFRemBertForMultipleChoice"),ky.forEach(t),hp.forEach(t),vc=m(o),Ue=a(o,"DIV",{class:!0});var wt=i(Ue);y(Mr.$$.fragment,wt),Tk=m(wt),ed=a(wt,"P",{});var by=i(ed);vk=s(by,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),by.forEach(t),yk=m(wt),zr=a(wt,"P",{});var mp=i(zr);wk=s(mp,"This model inherits from "),ya=a(mp,"A",{href:!0});var Ty=i(ya);$k=s(Ty,"TFPreTrainedModel"),Ty.forEach(t),Fk=s(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(t),Rk=m(wt),qr=a(wt,"P",{});var up=i(qr);Ek=s(up,"This model is also a "),Cr=a(up,"A",{href:!0,rel:!0});var vy=i(Cr);Bk=s(vy,"tf.keras.Model"),vy.forEach(t),Mk=s(up,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),up.forEach(t),zk=m(wt),y(Fn.$$.fragment,wt),qk=m(wt),_t=a(wt,"DIV",{class:!0});var Jn=i(_t);y(xr.$$.fragment,Jn),Ck=m(Jn),fo=a(Jn,"P",{});var Qa=i(fo);xk=s(Qa,"The "),wa=a(Qa,"A",{href:!0});var yy=i(wa);jk=s(yy,"TFRemBertForMultipleChoice"),yy.forEach(t),Lk=s(Qa," forward method, overrides the "),td=a(Qa,"CODE",{});var wy=i(td);Pk=s(wy,"__call__"),wy.forEach(t),Ok=s(Qa," special method."),Qa.forEach(t),Dk=m(Jn),y(Rn.$$.fragment,Jn),Ak=m(Jn),y(En.$$.fragment,Jn),Jn.forEach(t),wt.forEach(t),yc=m(o),go=a(o,"H2",{class:!0});var fp=i(go);Bn=a(fp,"A",{id:!0,class:!0,href:!0});var $y=i(Bn);od=a($y,"SPAN",{});var Fy=i(od);y(jr.$$.fragment,Fy),Fy.forEach(t),$y.forEach(t),Nk=m(fp),nd=a(fp,"SPAN",{});var Ry=i(nd);Sk=s(Ry,"TFRemBertForTokenClassification"),Ry.forEach(t),fp.forEach(t),wc=m(o),He=a(o,"DIV",{class:!0});var $t=i(He);y(Lr.$$.fragment,$t),Ik=m($t),sd=a($t,"P",{});var Ey=i(sd);Wk=s(Ey,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ey.forEach(t),Uk=m($t),Pr=a($t,"P",{});var gp=i(Pr);Hk=s(gp,"This model inherits from "),$a=a(gp,"A",{href:!0});var By=i($a);Qk=s(By,"TFPreTrainedModel"),By.forEach(t),Kk=s(gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp.forEach(t),Vk=m($t),Or=a($t,"P",{});var _p=i(Or);Jk=s(_p,"This model is also a "),Dr=a(_p,"A",{href:!0,rel:!0});var My=i(Dr);Gk=s(My,"tf.keras.Model"),My.forEach(t),Xk=s(_p,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p.forEach(t),Yk=m($t),y(Mn.$$.fragment,$t),Zk=m($t),ot=a($t,"DIV",{class:!0});var Dt=i(ot);y(Ar.$$.fragment,Dt),eb=m(Dt),_o=a(Dt,"P",{});var Ka=i(_o);tb=s(Ka,"The "),Fa=a(Ka,"A",{href:!0});var zy=i(Fa);ob=s(zy,"TFRemBertForTokenClassification"),zy.forEach(t),nb=s(Ka," forward method, overrides the "),rd=a(Ka,"CODE",{});var qy=i(rd);sb=s(qy,"__call__"),qy.forEach(t),rb=s(Ka," special method."),Ka.forEach(t),ab=m(Dt),y(zn.$$.fragment,Dt),ib=m(Dt),y(qn.$$.fragment,Dt),lb=m(Dt),y(Cn.$$.fragment,Dt),Dt.forEach(t),$t.forEach(t),$c=m(o),ko=a(o,"H2",{class:!0});var kp=i(ko);xn=a(kp,"A",{id:!0,class:!0,href:!0});var Cy=i(xn);ad=a(Cy,"SPAN",{});var xy=i(ad);y(Nr.$$.fragment,xy),xy.forEach(t),Cy.forEach(t),db=m(kp),id=a(kp,"SPAN",{});var jy=i(id);cb=s(jy,"TFRemBertForQuestionAnswering"),jy.forEach(t),kp.forEach(t),Fc=m(o),Qe=a(o,"DIV",{class:!0});var Ft=i(Qe);y(Sr.$$.fragment,Ft),pb=m(Ft),bo=a(Ft,"P",{});var Va=i(bo);hb=s(Va,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ld=a(Va,"CODE",{});var Ly=i(ld);mb=s(Ly,"span start logits"),Ly.forEach(t),ub=s(Va," and "),dd=a(Va,"CODE",{});var Py=i(dd);fb=s(Py,"span end logits"),Py.forEach(t),gb=s(Va,")."),Va.forEach(t),_b=m(Ft),Ir=a(Ft,"P",{});var bp=i(Ir);kb=s(bp,"This model inherits from "),Ra=a(bp,"A",{href:!0});var Oy=i(Ra);bb=s(Oy,"TFPreTrainedModel"),Oy.forEach(t),Tb=s(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(t),vb=m(Ft),Wr=a(Ft,"P",{});var Tp=i(Wr);yb=s(Tp,"This model is also a "),Ur=a(Tp,"A",{href:!0,rel:!0});var Dy=i(Ur);wb=s(Dy,"tf.keras.Model"),Dy.forEach(t),$b=s(Tp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tp.forEach(t),Fb=m(Ft),y(jn.$$.fragment,Ft),Rb=m(Ft),nt=a(Ft,"DIV",{class:!0});var At=i(nt);y(Hr.$$.fragment,At),Eb=m(At),To=a(At,"P",{});var Ja=i(To);Bb=s(Ja,"The "),Ea=a(Ja,"A",{href:!0});var Ay=i(Ea);Mb=s(Ay,"TFRemBertForQuestionAnswering"),Ay.forEach(t),zb=s(Ja," forward method, overrides the "),cd=a(Ja,"CODE",{});var Ny=i(cd);qb=s(Ny,"__call__"),Ny.forEach(t),Cb=s(Ja," special method."),Ja.forEach(t),xb=m(At),y(Ln.$$.fragment,At),jb=m(At),y(Pn.$$.fragment,At),Lb=m(At),y(On.$$.fragment,At),At.forEach(t),Ft.forEach(t),this.h()},h(){k(l,"name","hf:doc:metadata"),k(l,"content",JSON.stringify(Nw)),k(p,"id","rembert"),k(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(p,"href","#rembert"),k(c,"class","relative group"),k(te,"id","overview"),k(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(te,"href","#overview"),k(z,"class","relative group"),k(se,"href","https://arxiv.org/abs/2010.12821"),k(se,"rel","nofollow"),k(oe,"id","transformers.RemBertConfig"),k(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(oe,"href","#transformers.RemBertConfig"),k(ee,"class","relative group"),k(ye,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertModel"),k(A,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),k(de,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),k($o,"id","initializing-a-model-from-the-rembert-style-configuration->>>-model-=-rembertmodel(configuration)"),k($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k($o,"href","#initializing-a-model-from-the-rembert-style-configuration->>>-model-=-rembertmodel(configuration)"),k(wo,"class","relative group"),k(Ro,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),k(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Ro,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),k(Fo,"class","relative group"),k(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Eo,"id","transformers.RemBertTokenizer"),k(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Eo,"href","#transformers.RemBertTokenizer"),k(Nt,"class","relative group"),k(ts,"href","https://github.com/google/sentencepiece"),k(ts,"rel","nofollow"),k(ea,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),k(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(zo,"id","transformers.RemBertTokenizerFast"),k(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(zo,"href","#transformers.RemBertTokenizerFast"),k(It,"class","relative group"),k(ps,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),k(ps,"rel","nofollow"),k(sa,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),k(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(xo,"id","transformers.RemBertModel"),k(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(xo,"href","#transformers.RemBertModel"),k(Wt,"class","relative group"),k(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(vs,"rel","nofollow"),k(ws,"href","https://arxiv.org/abs/1706.03762"),k(ws,"rel","nofollow"),k(la,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertModel"),k(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Po,"id","transformers.RemBertForCausalLM"),k(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Po,"href","#transformers.RemBertForCausalLM"),k(Ht,"class","relative group"),k(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Es,"rel","nofollow"),k(da,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertForCausalLM"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ao,"id","transformers.RemBertForMaskedLM"),k(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Ao,"href","#transformers.RemBertForMaskedLM"),k(Vt,"class","relative group"),k(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(qs,"rel","nofollow"),k(ca,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertForMaskedLM"),k(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Wo,"id","transformers.RemBertForSequenceClassification"),k(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Wo,"href","#transformers.RemBertForSequenceClassification"),k(Xt,"class","relative group"),k(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ps,"rel","nofollow"),k(pa,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertForSequenceClassification"),k(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jo,"id","transformers.RemBertForMultipleChoice"),k(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jo,"href","#transformers.RemBertForMultipleChoice"),k(Zt,"class","relative group"),k(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ss,"rel","nofollow"),k(ha,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertForMultipleChoice"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Yo,"id","transformers.RemBertForTokenClassification"),k(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Yo,"href","#transformers.RemBertForTokenClassification"),k(to,"class","relative group"),k(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Qs,"rel","nofollow"),k(ma,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertForTokenClassification"),k(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(on,"id","transformers.RemBertForQuestionAnswering"),k(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(on,"href","#transformers.RemBertForQuestionAnswering"),k(no,"class","relative group"),k(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Xs,"rel","nofollow"),k(ua,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.RemBertForQuestionAnswering"),k(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(an,"id","transformers.TFRemBertModel"),k(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(an,"href","#transformers.TFRemBertModel"),k(ao,"class","relative group"),k(fa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),k(nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(nr,"rel","nofollow"),k(ga,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertModel"),k(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pn,"id","transformers.TFRemBertForMaskedLM"),k(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(pn,"href","#transformers.TFRemBertForMaskedLM"),k(lo,"class","relative group"),k(_a,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),k(cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(cr,"rel","nofollow"),k(ka,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertForMaskedLM"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(gn,"id","transformers.TFRemBertForCausalLM"),k(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(gn,"href","#transformers.TFRemBertForCausalLM"),k(po,"class","relative group"),k(ba,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),k(_r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(_r,"rel","nofollow"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(bn,"id","transformers.TFRemBertForSequenceClassification"),k(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(bn,"href","#transformers.TFRemBertForSequenceClassification"),k(ho,"class","relative group"),k(Ta,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),k(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Rr,"rel","nofollow"),k(va,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertForSequenceClassification"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k($n,"id","transformers.TFRemBertForMultipleChoice"),k($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k($n,"href","#transformers.TFRemBertForMultipleChoice"),k(uo,"class","relative group"),k(ya,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),k(Cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Cr,"rel","nofollow"),k(wa,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertForMultipleChoice"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Bn,"id","transformers.TFRemBertForTokenClassification"),k(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Bn,"href","#transformers.TFRemBertForTokenClassification"),k(go,"class","relative group"),k($a,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),k(Dr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Dr,"rel","nofollow"),k(Fa,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertForTokenClassification"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(xn,"id","transformers.TFRemBertForQuestionAnswering"),k(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(xn,"href","#transformers.TFRemBertForQuestionAnswering"),k(ko,"class","relative group"),k(Ra,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),k(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Ur,"rel","nofollow"),k(Ea,"href","/docs/transformers/pr_highlight/en/model_doc/rembert#transformers.TFRemBertForQuestionAnswering"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),_(o,g,b),_(o,c,b),e(c,p),e(p,T),w(d,T,null),e(c,u),e(c,M),e(M,ue),_(o,X,b),_(o,z,b),e(z,te),e(te,N),w(ne,N,null),e(z,fe),e(z,S),e(S,ge),_(o,pe,b),_(o,J,b),e(J,O),e(J,se),e(se,Z),e(J,q),_(o,x,b),_(o,ae,b),e(ae,H),_(o,he,b),_(o,ie,b),e(ie,I),e(I,_e),_(o,me,b),_(o,C,b),e(C,ke),_(o,W,b),_(o,le,b),e(le,be),_(o,U,b),_(o,ee,b),e(ee,oe),e(oe,L),w(re,L,null),e(ee,Q),e(ee,ce),e(ce,f),_(o,B,b),_(o,P,b),w(ve,P,null),e(P,Re),e(P,j),e(j,Ee),e(j,ye),e(ye,Be),e(j,D),e(P,K),e(P,Te),e(Te,Me),e(Te,A),e(A,ze),e(Te,qe),e(Te,de),e(de,Ce),e(Te,vp),e(P,yp),w(yo,P,null),e(P,wp),e(P,Ga),e(Ga,Xa),e(Xa,Ya),e(Ya,Za),e(Za,$p),e(P,Fp),e(P,ei),e(ei,ti),e(ti,oi),e(oi,wo),e(wo,$o),e($o,ni),w(Gn,ni,null),e(wo,Rp),e(wo,si),e(si,Ep),e(P,Bp),e(P,ri),e(ri,ai),e(ai,ii),e(ii,Fo),e(Fo,Ro),e(Ro,li),w(Xn,li,null),e(Fo,Mp),e(Fo,di),e(di,zp),_(o,Vd,b),_(o,Nt,b),e(Nt,Eo),e(Eo,ci),w(Yn,ci,null),e(Nt,qp),e(Nt,pi),e(pi,Cp),_(o,Jd,b),_(o,Le,b),w(Zn,Le,null),e(Le,xp),e(Le,es),e(es,jp),e(es,ts),e(ts,Lp),e(es,Pp),e(Le,Op),e(Le,os),e(os,Dp),e(os,ea),e(ea,Ap),e(os,Np),e(Le,Sp),e(Le,Mt),w(ns,Mt,null),e(Mt,Ip),e(Mt,hi),e(hi,Wp),e(Mt,Up),e(Mt,ss),e(ss,ta),e(ta,Hp),e(ta,mi),e(mi,Qp),e(ss,Kp),e(ss,oa),e(oa,Vp),e(oa,ui),e(ui,Jp),e(Le,Gp),e(Le,Bo),w(rs,Bo,null),e(Bo,Xp),e(Bo,as),e(as,Yp),e(as,fi),e(fi,Zp),e(as,eh),e(Le,th),e(Le,pt),w(is,pt,null),e(pt,oh),e(pt,gi),e(gi,nh),e(pt,sh),w(Mo,pt,null),e(pt,rh),e(pt,St),e(St,ah),e(St,_i),e(_i,ih),e(St,lh),e(St,ki),e(ki,dh),e(St,ch),e(Le,ph),e(Le,na),w(ls,na,null),_(o,Gd,b),_(o,It,b),e(It,zo),e(zo,bi),w(ds,bi,null),e(It,hh),e(It,Ti),e(Ti,mh),_(o,Xd,b),_(o,De,b),w(cs,De,null),e(De,uh),e(De,Rt),e(Rt,fh),e(Rt,vi),e(vi,gh),e(Rt,_h),e(Rt,ps),e(ps,kh),e(Rt,bh),e(Rt,sa),e(sa,Th),e(Rt,vh),e(De,yh),e(De,zt),w(hs,zt,null),e(zt,wh),e(zt,yi),e(yi,$h),e(zt,Fh),e(zt,ms),e(ms,ra),e(ra,Rh),e(ra,wi),e(wi,Eh),e(ms,Bh),e(ms,aa),e(aa,Mh),e(aa,$i),e($i,zh),e(De,qh),e(De,qo),w(us,qo,null),e(qo,Ch),e(qo,fs),e(fs,xh),e(fs,Fi),e(Fi,jh),e(fs,Lh),e(De,Ph),e(De,ht),w(gs,ht,null),e(ht,Oh),e(ht,Ri),e(Ri,Dh),e(ht,Ah),w(Co,ht,null),e(ht,Nh),e(ht,Ei),e(Ei,Sh),e(De,Ih),e(De,ia),w(_s,ia,null),_(o,Yd,b),_(o,Wt,b),e(Wt,xo),e(xo,Bi),w(ks,Bi,null),e(Wt,Wh),e(Wt,Mi),e(Mi,Uh),_(o,Zd,b),_(o,Je,b),w(bs,Je,null),e(Je,Hh),e(Je,Ts),e(Ts,Qh),e(Ts,vs),e(vs,Kh),e(Ts,Vh),e(Je,Jh),e(Je,ys),e(ys,Gh),e(ys,ws),e(ws,Xh),e(ys,Yh),e(Je,Zh),e(Je,Ae),e(Ae,em),e(Ae,zi),e(zi,tm),e(Ae,om),e(Ae,qi),e(qi,nm),e(Ae,sm),e(Ae,Ci),e(Ci,rm),e(Ae,am),e(Ae,xi),e(xi,im),e(Ae,lm),e(Ae,ji),e(ji,dm),e(Ae,cm),e(Ae,Li),e(Li,pm),e(Ae,hm),e(Je,mm),e(Je,mt),w($s,mt,null),e(mt,um),e(mt,Ut),e(Ut,fm),e(Ut,la),e(la,gm),e(Ut,_m),e(Ut,Pi),e(Pi,km),e(Ut,bm),e(mt,Tm),w(jo,mt,null),e(mt,vm),w(Lo,mt,null),_(o,ec,b),_(o,Ht,b),e(Ht,Po),e(Po,Oi),w(Fs,Oi,null),e(Ht,ym),e(Ht,Di),e(Di,wm),_(o,tc,b),_(o,Et,b),w(Rs,Et,null),e(Et,$m),e(Et,Qt),e(Qt,Fm),e(Qt,Ai),e(Ai,Rm),e(Qt,Em),e(Qt,Es),e(Es,Bm),e(Qt,Mm),e(Et,zm),e(Et,ut),w(Bs,ut,null),e(ut,qm),e(ut,Kt),e(Kt,Cm),e(Kt,da),e(da,xm),e(Kt,jm),e(Kt,Ni),e(Ni,Lm),e(Kt,Pm),e(ut,Om),w(Oo,ut,null),e(ut,Dm),w(Do,ut,null),_(o,oc,b),_(o,Vt,b),e(Vt,Ao),e(Ao,Si),w(Ms,Si,null),e(Vt,Am),e(Vt,Ii),e(Ii,Nm),_(o,nc,b),_(o,Bt,b),w(zs,Bt,null),e(Bt,Sm),e(Bt,Jt),e(Jt,Im),e(Jt,Wi),e(Wi,Wm),e(Jt,Um),e(Jt,qs),e(qs,Hm),e(Jt,Qm),e(Bt,Km),e(Bt,Ge),w(Cs,Ge,null),e(Ge,Vm),e(Ge,Gt),e(Gt,Jm),e(Gt,ca),e(ca,Gm),e(Gt,Xm),e(Gt,Ui),e(Ui,Ym),e(Gt,Zm),e(Ge,eu),w(No,Ge,null),e(Ge,tu),w(So,Ge,null),e(Ge,ou),w(Io,Ge,null),_(o,sc,b),_(o,Xt,b),e(Xt,Wo),e(Wo,Hi),w(xs,Hi,null),e(Xt,nu),e(Xt,Qi),e(Qi,su),_(o,rc,b),_(o,it,b),w(js,it,null),e(it,ru),e(it,Ki),e(Ki,au),e(it,iu),e(it,Ls),e(Ls,lu),e(Ls,Ps),e(Ps,du),e(Ls,cu),e(it,pu),e(it,Oe),w(Os,Oe,null),e(Oe,hu),e(Oe,Yt),e(Yt,mu),e(Yt,pa),e(pa,uu),e(Yt,fu),e(Yt,Vi),e(Vi,gu),e(Yt,_u),e(Oe,ku),w(Uo,Oe,null),e(Oe,bu),w(Ho,Oe,null),e(Oe,Tu),w(Qo,Oe,null),e(Oe,vu),w(Ko,Oe,null),e(Oe,yu),w(Vo,Oe,null),_(o,ac,b),_(o,Zt,b),e(Zt,Jo),e(Jo,Ji),w(Ds,Ji,null),e(Zt,wu),e(Zt,Gi),e(Gi,$u),_(o,ic,b),_(o,lt,b),w(As,lt,null),e(lt,Fu),e(lt,Xi),e(Xi,Ru),e(lt,Eu),e(lt,Ns),e(Ns,Bu),e(Ns,Ss),e(Ss,Mu),e(Ns,zu),e(lt,qu),e(lt,ft),w(Is,ft,null),e(ft,Cu),e(ft,eo),e(eo,xu),e(eo,ha),e(ha,ju),e(eo,Lu),e(eo,Yi),e(Yi,Pu),e(eo,Ou),e(ft,Du),w(Go,ft,null),e(ft,Au),w(Xo,ft,null),_(o,lc,b),_(o,to,b),e(to,Yo),e(Yo,Zi),w(Ws,Zi,null),e(to,Nu),e(to,el),e(el,Su),_(o,dc,b),_(o,dt,b),w(Us,dt,null),e(dt,Iu),e(dt,tl),e(tl,Wu),e(dt,Uu),e(dt,Hs),e(Hs,Hu),e(Hs,Qs),e(Qs,Qu),e(Hs,Ku),e(dt,Vu),e(dt,Xe),w(Ks,Xe,null),e(Xe,Ju),e(Xe,oo),e(oo,Gu),e(oo,ma),e(ma,Xu),e(oo,Yu),e(oo,ol),e(ol,Zu),e(oo,ef),e(Xe,tf),w(Zo,Xe,null),e(Xe,of),w(en,Xe,null),e(Xe,nf),w(tn,Xe,null),_(o,cc,b),_(o,no,b),e(no,on),e(on,nl),w(Vs,nl,null),e(no,sf),e(no,sl),e(sl,rf),_(o,pc,b),_(o,ct,b),w(Js,ct,null),e(ct,af),e(ct,so),e(so,lf),e(so,rl),e(rl,df),e(so,cf),e(so,al),e(al,pf),e(so,hf),e(ct,mf),e(ct,Gs),e(Gs,uf),e(Gs,Xs),e(Xs,ff),e(Gs,gf),e(ct,_f),e(ct,Ye),w(Ys,Ye,null),e(Ye,kf),e(Ye,ro),e(ro,bf),e(ro,ua),e(ua,Tf),e(ro,vf),e(ro,il),e(il,yf),e(ro,wf),e(Ye,$f),w(nn,Ye,null),e(Ye,Ff),w(sn,Ye,null),e(Ye,Rf),w(rn,Ye,null),_(o,hc,b),_(o,ao,b),e(ao,an),e(an,ll),w(Zs,ll,null),e(ao,Ef),e(ao,dl),e(dl,Bf),_(o,mc,b),_(o,Ne,b),w(er,Ne,null),e(Ne,Mf),e(Ne,cl),e(cl,zf),e(Ne,qf),e(Ne,tr),e(tr,Cf),e(tr,fa),e(fa,xf),e(tr,jf),e(Ne,Lf),e(Ne,or),e(or,Pf),e(or,nr),e(nr,Of),e(or,Df),e(Ne,Af),w(ln,Ne,null),e(Ne,Nf),e(Ne,gt),w(sr,gt,null),e(gt,Sf),e(gt,io),e(io,If),e(io,ga),e(ga,Wf),e(io,Uf),e(io,pl),e(pl,Hf),e(io,Qf),e(gt,Kf),w(dn,gt,null),e(gt,Vf),w(cn,gt,null),_(o,uc,b),_(o,lo,b),e(lo,pn),e(pn,hl),w(rr,hl,null),e(lo,Jf),e(lo,ml),e(ml,Gf),_(o,fc,b),_(o,Se,b),w(ar,Se,null),e(Se,Xf),e(Se,ir),e(ir,Yf),e(ir,ul),e(ul,Zf),e(ir,eg),e(Se,tg),e(Se,lr),e(lr,og),e(lr,_a),e(_a,ng),e(lr,sg),e(Se,rg),e(Se,dr),e(dr,ag),e(dr,cr),e(cr,ig),e(dr,lg),e(Se,dg),w(hn,Se,null),e(Se,cg),e(Se,Ze),w(pr,Ze,null),e(Ze,pg),e(Ze,co),e(co,hg),e(co,ka),e(ka,mg),e(co,ug),e(co,fl),e(fl,fg),e(co,gg),e(Ze,_g),w(mn,Ze,null),e(Ze,kg),w(un,Ze,null),e(Ze,bg),w(fn,Ze,null),_(o,gc,b),_(o,po,b),e(po,gn),e(gn,gl),w(hr,gl,null),e(po,Tg),e(po,_l),e(_l,vg),_(o,_c,b),_(o,Ie,b),w(mr,Ie,null),e(Ie,yg),e(Ie,ur),e(ur,wg),e(ur,kl),e(kl,$g),e(ur,Fg),e(Ie,Rg),e(Ie,fr),e(fr,Eg),e(fr,ba),e(ba,Bg),e(fr,Mg),e(Ie,zg),e(Ie,gr),e(gr,qg),e(gr,_r),e(_r,Cg),e(gr,xg),e(Ie,jg),w(_n,Ie,null),e(Ie,Lg),e(Ie,et),w(kr,et,null),e(et,Pg),e(et,Pe),e(Pe,Og),e(Pe,bl),e(bl,Dg),e(Pe,Ag),e(Pe,Tl),e(Tl,Ng),e(Pe,Sg),e(Pe,vl),e(vl,Ig),e(Pe,Wg),e(Pe,yl),e(yl,Ug),e(Pe,Hg),e(Pe,wl),e(wl,Qg),e(Pe,Kg),e(Pe,$l),e($l,Vg),e(Pe,Jg),e(Pe,Fl),e(Fl,Gg),e(Pe,Xg),e(et,Yg),e(et,br),e(br,Tr),e(Tr,Zg),e(Tr,Rl),e(Rl,e_),e(Tr,t_),e(br,o_),e(br,vr),e(vr,n_),e(vr,El),e(El,s_),e(vr,r_),e(et,a_),e(et,V),e(V,i_),e(V,Bl),e(Bl,l_),e(V,d_),e(V,Ml),e(Ml,c_),e(V,p_),e(V,zl),e(zl,h_),e(V,m_),e(V,ql),e(ql,u_),e(V,f_),e(V,Cl),e(Cl,g_),e(V,__),e(V,xl),e(xl,k_),e(V,b_),e(V,jl),e(jl,T_),e(V,v_),e(V,Ll),e(Ll,y_),e(V,w_),e(V,Pl),e(Pl,$_),e(V,F_),e(V,Ol),e(Ol,R_),e(V,E_),e(V,Dl),e(Dl,B_),e(V,M_),e(V,Al),e(Al,z_),e(V,q_),e(V,Nl),e(Nl,C_),e(V,x_),e(V,Sl),e(Sl,j_),e(V,L_),e(V,Il),e(Il,P_),e(V,O_),e(V,Wl),e(Wl,D_),e(V,A_),e(V,Ul),e(Ul,N_),e(V,S_),e(V,Hl),e(Hl,I_),e(V,W_),e(V,Ql),e(Ql,U_),e(V,H_),e(V,Kl),e(Kl,Q_),e(V,K_),e(et,V_),w(kn,et,null),_(o,kc,b),_(o,ho,b),e(ho,bn),e(bn,Vl),w(yr,Vl,null),e(ho,J_),e(ho,Jl),e(Jl,G_),_(o,bc,b),_(o,We,b),w(wr,We,null),e(We,X_),e(We,Gl),e(Gl,Y_),e(We,Z_),e(We,$r),e($r,ek),e($r,Ta),e(Ta,tk),e($r,ok),e(We,nk),e(We,Fr),e(Fr,sk),e(Fr,Rr),e(Rr,rk),e(Fr,ak),e(We,ik),w(Tn,We,null),e(We,lk),e(We,tt),w(Er,tt,null),e(tt,dk),e(tt,mo),e(mo,ck),e(mo,va),e(va,pk),e(mo,hk),e(mo,Xl),e(Xl,mk),e(mo,uk),e(tt,fk),w(vn,tt,null),e(tt,gk),w(yn,tt,null),e(tt,_k),w(wn,tt,null),_(o,Tc,b),_(o,uo,b),e(uo,$n),e($n,Yl),w(Br,Yl,null),e(uo,kk),e(uo,Zl),e(Zl,bk),_(o,vc,b),_(o,Ue,b),w(Mr,Ue,null),e(Ue,Tk),e(Ue,ed),e(ed,vk),e(Ue,yk),e(Ue,zr),e(zr,wk),e(zr,ya),e(ya,$k),e(zr,Fk),e(Ue,Rk),e(Ue,qr),e(qr,Ek),e(qr,Cr),e(Cr,Bk),e(qr,Mk),e(Ue,zk),w(Fn,Ue,null),e(Ue,qk),e(Ue,_t),w(xr,_t,null),e(_t,Ck),e(_t,fo),e(fo,xk),e(fo,wa),e(wa,jk),e(fo,Lk),e(fo,td),e(td,Pk),e(fo,Ok),e(_t,Dk),w(Rn,_t,null),e(_t,Ak),w(En,_t,null),_(o,yc,b),_(o,go,b),e(go,Bn),e(Bn,od),w(jr,od,null),e(go,Nk),e(go,nd),e(nd,Sk),_(o,wc,b),_(o,He,b),w(Lr,He,null),e(He,Ik),e(He,sd),e(sd,Wk),e(He,Uk),e(He,Pr),e(Pr,Hk),e(Pr,$a),e($a,Qk),e(Pr,Kk),e(He,Vk),e(He,Or),e(Or,Jk),e(Or,Dr),e(Dr,Gk),e(Or,Xk),e(He,Yk),w(Mn,He,null),e(He,Zk),e(He,ot),w(Ar,ot,null),e(ot,eb),e(ot,_o),e(_o,tb),e(_o,Fa),e(Fa,ob),e(_o,nb),e(_o,rd),e(rd,sb),e(_o,rb),e(ot,ab),w(zn,ot,null),e(ot,ib),w(qn,ot,null),e(ot,lb),w(Cn,ot,null),_(o,$c,b),_(o,ko,b),e(ko,xn),e(xn,ad),w(Nr,ad,null),e(ko,db),e(ko,id),e(id,cb),_(o,Fc,b),_(o,Qe,b),w(Sr,Qe,null),e(Qe,pb),e(Qe,bo),e(bo,hb),e(bo,ld),e(ld,mb),e(bo,ub),e(bo,dd),e(dd,fb),e(bo,gb),e(Qe,_b),e(Qe,Ir),e(Ir,kb),e(Ir,Ra),e(Ra,bb),e(Ir,Tb),e(Qe,vb),e(Qe,Wr),e(Wr,yb),e(Wr,Ur),e(Ur,wb),e(Wr,$b),e(Qe,Fb),w(jn,Qe,null),e(Qe,Rb),e(Qe,nt),w(Hr,nt,null),e(nt,Eb),e(nt,To),e(To,Bb),e(To,Ea),e(Ea,Mb),e(To,zb),e(To,cd),e(cd,qb),e(To,Cb),e(nt,xb),w(Ln,nt,null),e(nt,jb),w(Pn,nt,null),e(nt,Lb),w(On,nt,null),Rc=!0},p(o,[b]){const Qr={};b&2&&(Qr.$$scope={dirty:b,ctx:o}),yo.$set(Qr);const pd={};b&2&&(pd.$$scope={dirty:b,ctx:o}),Mo.$set(pd);const hd={};b&2&&(hd.$$scope={dirty:b,ctx:o}),Co.$set(hd);const md={};b&2&&(md.$$scope={dirty:b,ctx:o}),jo.$set(md);const Kr={};b&2&&(Kr.$$scope={dirty:b,ctx:o}),Lo.$set(Kr);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:o}),Oo.$set(ud);const fd={};b&2&&(fd.$$scope={dirty:b,ctx:o}),Do.$set(fd);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:o}),No.$set(gd);const Vr={};b&2&&(Vr.$$scope={dirty:b,ctx:o}),So.$set(Vr);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:o}),Io.$set(_d);const kd={};b&2&&(kd.$$scope={dirty:b,ctx:o}),Uo.$set(kd);const bd={};b&2&&(bd.$$scope={dirty:b,ctx:o}),Ho.$set(bd);const Td={};b&2&&(Td.$$scope={dirty:b,ctx:o}),Qo.$set(Td);const vd={};b&2&&(vd.$$scope={dirty:b,ctx:o}),Ko.$set(vd);const yd={};b&2&&(yd.$$scope={dirty:b,ctx:o}),Vo.$set(yd);const Jr={};b&2&&(Jr.$$scope={dirty:b,ctx:o}),Go.$set(Jr);const wd={};b&2&&(wd.$$scope={dirty:b,ctx:o}),Xo.$set(wd);const $d={};b&2&&($d.$$scope={dirty:b,ctx:o}),Zo.$set($d);const Fd={};b&2&&(Fd.$$scope={dirty:b,ctx:o}),en.$set(Fd);const Ke={};b&2&&(Ke.$$scope={dirty:b,ctx:o}),tn.$set(Ke);const Gr={};b&2&&(Gr.$$scope={dirty:b,ctx:o}),nn.$set(Gr);const Rd={};b&2&&(Rd.$$scope={dirty:b,ctx:o}),sn.$set(Rd);const vo={};b&2&&(vo.$$scope={dirty:b,ctx:o}),rn.$set(vo);const Ed={};b&2&&(Ed.$$scope={dirty:b,ctx:o}),ln.$set(Ed);const Bd={};b&2&&(Bd.$$scope={dirty:b,ctx:o}),dn.$set(Bd);const Md={};b&2&&(Md.$$scope={dirty:b,ctx:o}),cn.$set(Md);const zd={};b&2&&(zd.$$scope={dirty:b,ctx:o}),hn.$set(zd);const qd={};b&2&&(qd.$$scope={dirty:b,ctx:o}),mn.$set(qd);const Cd={};b&2&&(Cd.$$scope={dirty:b,ctx:o}),un.$set(Cd);const xd={};b&2&&(xd.$$scope={dirty:b,ctx:o}),fn.$set(xd);const jd={};b&2&&(jd.$$scope={dirty:b,ctx:o}),_n.$set(jd);const Ld={};b&2&&(Ld.$$scope={dirty:b,ctx:o}),kn.$set(Ld);const Xr={};b&2&&(Xr.$$scope={dirty:b,ctx:o}),Tn.$set(Xr);const Pd={};b&2&&(Pd.$$scope={dirty:b,ctx:o}),vn.$set(Pd);const Od={};b&2&&(Od.$$scope={dirty:b,ctx:o}),yn.$set(Od);const Dd={};b&2&&(Dd.$$scope={dirty:b,ctx:o}),wn.$set(Dd);const Ad={};b&2&&(Ad.$$scope={dirty:b,ctx:o}),Fn.$set(Ad);const Nd={};b&2&&(Nd.$$scope={dirty:b,ctx:o}),Rn.$set(Nd);const Sd={};b&2&&(Sd.$$scope={dirty:b,ctx:o}),En.$set(Sd);const Yr={};b&2&&(Yr.$$scope={dirty:b,ctx:o}),Mn.$set(Yr);const Id={};b&2&&(Id.$$scope={dirty:b,ctx:o}),zn.$set(Id);const Wd={};b&2&&(Wd.$$scope={dirty:b,ctx:o}),qn.$set(Wd);const Ud={};b&2&&(Ud.$$scope={dirty:b,ctx:o}),Cn.$set(Ud);const Zr={};b&2&&(Zr.$$scope={dirty:b,ctx:o}),jn.$set(Zr);const Hd={};b&2&&(Hd.$$scope={dirty:b,ctx:o}),Ln.$set(Hd);const Qd={};b&2&&(Qd.$$scope={dirty:b,ctx:o}),Pn.$set(Qd);const Kd={};b&2&&(Kd.$$scope={dirty:b,ctx:o}),On.$set(Kd)},i(o){Rc||($(d.$$.fragment,o),$(ne.$$.fragment,o),$(re.$$.fragment,o),$(ve.$$.fragment,o),$(yo.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Mo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(Co.$$.fragment,o),$(_s.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$($s.$$.fragment,o),$(jo.$$.fragment,o),$(Lo.$$.fragment,o),$(Fs.$$.fragment,o),$(Rs.$$.fragment,o),$(Bs.$$.fragment,o),$(Oo.$$.fragment,o),$(Do.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(Cs.$$.fragment,o),$(No.$$.fragment,o),$(So.$$.fragment,o),$(Io.$$.fragment,o),$(xs.$$.fragment,o),$(js.$$.fragment,o),$(Os.$$.fragment,o),$(Uo.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Ds.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Go.$$.fragment,o),$(Xo.$$.fragment,o),$(Ws.$$.fragment,o),$(Us.$$.fragment,o),$(Ks.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(Ys.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(ln.$$.fragment,o),$(sr.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(hn.$$.fragment,o),$(pr.$$.fragment,o),$(mn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(hr.$$.fragment,o),$(mr.$$.fragment,o),$(_n.$$.fragment,o),$(kr.$$.fragment,o),$(kn.$$.fragment,o),$(yr.$$.fragment,o),$(wr.$$.fragment,o),$(Tn.$$.fragment,o),$(Er.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$(wn.$$.fragment,o),$(Br.$$.fragment,o),$(Mr.$$.fragment,o),$(Fn.$$.fragment,o),$(xr.$$.fragment,o),$(Rn.$$.fragment,o),$(En.$$.fragment,o),$(jr.$$.fragment,o),$(Lr.$$.fragment,o),$(Mn.$$.fragment,o),$(Ar.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(Nr.$$.fragment,o),$(Sr.$$.fragment,o),$(jn.$$.fragment,o),$(Hr.$$.fragment,o),$(Ln.$$.fragment,o),$(Pn.$$.fragment,o),$(On.$$.fragment,o),Rc=!0)},o(o){F(d.$$.fragment,o),F(ne.$$.fragment,o),F(re.$$.fragment,o),F(ve.$$.fragment,o),F(yo.$$.fragment,o),F(Gn.$$.fragment,o),F(Xn.$$.fragment,o),F(Yn.$$.fragment,o),F(Zn.$$.fragment,o),F(ns.$$.fragment,o),F(rs.$$.fragment,o),F(is.$$.fragment,o),F(Mo.$$.fragment,o),F(ls.$$.fragment,o),F(ds.$$.fragment,o),F(cs.$$.fragment,o),F(hs.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(Co.$$.fragment,o),F(_s.$$.fragment,o),F(ks.$$.fragment,o),F(bs.$$.fragment,o),F($s.$$.fragment,o),F(jo.$$.fragment,o),F(Lo.$$.fragment,o),F(Fs.$$.fragment,o),F(Rs.$$.fragment,o),F(Bs.$$.fragment,o),F(Oo.$$.fragment,o),F(Do.$$.fragment,o),F(Ms.$$.fragment,o),F(zs.$$.fragment,o),F(Cs.$$.fragment,o),F(No.$$.fragment,o),F(So.$$.fragment,o),F(Io.$$.fragment,o),F(xs.$$.fragment,o),F(js.$$.fragment,o),F(Os.$$.fragment,o),F(Uo.$$.fragment,o),F(Ho.$$.fragment,o),F(Qo.$$.fragment,o),F(Ko.$$.fragment,o),F(Vo.$$.fragment,o),F(Ds.$$.fragment,o),F(As.$$.fragment,o),F(Is.$$.fragment,o),F(Go.$$.fragment,o),F(Xo.$$.fragment,o),F(Ws.$$.fragment,o),F(Us.$$.fragment,o),F(Ks.$$.fragment,o),F(Zo.$$.fragment,o),F(en.$$.fragment,o),F(tn.$$.fragment,o),F(Vs.$$.fragment,o),F(Js.$$.fragment,o),F(Ys.$$.fragment,o),F(nn.$$.fragment,o),F(sn.$$.fragment,o),F(rn.$$.fragment,o),F(Zs.$$.fragment,o),F(er.$$.fragment,o),F(ln.$$.fragment,o),F(sr.$$.fragment,o),F(dn.$$.fragment,o),F(cn.$$.fragment,o),F(rr.$$.fragment,o),F(ar.$$.fragment,o),F(hn.$$.fragment,o),F(pr.$$.fragment,o),F(mn.$$.fragment,o),F(un.$$.fragment,o),F(fn.$$.fragment,o),F(hr.$$.fragment,o),F(mr.$$.fragment,o),F(_n.$$.fragment,o),F(kr.$$.fragment,o),F(kn.$$.fragment,o),F(yr.$$.fragment,o),F(wr.$$.fragment,o),F(Tn.$$.fragment,o),F(Er.$$.fragment,o),F(vn.$$.fragment,o),F(yn.$$.fragment,o),F(wn.$$.fragment,o),F(Br.$$.fragment,o),F(Mr.$$.fragment,o),F(Fn.$$.fragment,o),F(xr.$$.fragment,o),F(Rn.$$.fragment,o),F(En.$$.fragment,o),F(jr.$$.fragment,o),F(Lr.$$.fragment,o),F(Mn.$$.fragment,o),F(Ar.$$.fragment,o),F(zn.$$.fragment,o),F(qn.$$.fragment,o),F(Cn.$$.fragment,o),F(Nr.$$.fragment,o),F(Sr.$$.fragment,o),F(jn.$$.fragment,o),F(Hr.$$.fragment,o),F(Ln.$$.fragment,o),F(Pn.$$.fragment,o),F(On.$$.fragment,o),Rc=!1},d(o){t(l),o&&t(g),o&&t(c),R(d),o&&t(X),o&&t(z),R(ne),o&&t(pe),o&&t(J),o&&t(x),o&&t(ae),o&&t(he),o&&t(ie),o&&t(me),o&&t(C),o&&t(W),o&&t(le),o&&t(U),o&&t(ee),R(re),o&&t(B),o&&t(P),R(ve),R(yo),R(Gn),R(Xn),o&&t(Vd),o&&t(Nt),R(Yn),o&&t(Jd),o&&t(Le),R(Zn),R(ns),R(rs),R(is),R(Mo),R(ls),o&&t(Gd),o&&t(It),R(ds),o&&t(Xd),o&&t(De),R(cs),R(hs),R(us),R(gs),R(Co),R(_s),o&&t(Yd),o&&t(Wt),R(ks),o&&t(Zd),o&&t(Je),R(bs),R($s),R(jo),R(Lo),o&&t(ec),o&&t(Ht),R(Fs),o&&t(tc),o&&t(Et),R(Rs),R(Bs),R(Oo),R(Do),o&&t(oc),o&&t(Vt),R(Ms),o&&t(nc),o&&t(Bt),R(zs),R(Cs),R(No),R(So),R(Io),o&&t(sc),o&&t(Xt),R(xs),o&&t(rc),o&&t(it),R(js),R(Os),R(Uo),R(Ho),R(Qo),R(Ko),R(Vo),o&&t(ac),o&&t(Zt),R(Ds),o&&t(ic),o&&t(lt),R(As),R(Is),R(Go),R(Xo),o&&t(lc),o&&t(to),R(Ws),o&&t(dc),o&&t(dt),R(Us),R(Ks),R(Zo),R(en),R(tn),o&&t(cc),o&&t(no),R(Vs),o&&t(pc),o&&t(ct),R(Js),R(Ys),R(nn),R(sn),R(rn),o&&t(hc),o&&t(ao),R(Zs),o&&t(mc),o&&t(Ne),R(er),R(ln),R(sr),R(dn),R(cn),o&&t(uc),o&&t(lo),R(rr),o&&t(fc),o&&t(Se),R(ar),R(hn),R(pr),R(mn),R(un),R(fn),o&&t(gc),o&&t(po),R(hr),o&&t(_c),o&&t(Ie),R(mr),R(_n),R(kr),R(kn),o&&t(kc),o&&t(ho),R(yr),o&&t(bc),o&&t(We),R(wr),R(Tn),R(Er),R(vn),R(yn),R(wn),o&&t(Tc),o&&t(uo),R(Br),o&&t(vc),o&&t(Ue),R(Mr),R(Fn),R(xr),R(Rn),R(En),o&&t(yc),o&&t(go),R(jr),o&&t(wc),o&&t(He),R(Lr),R(Mn),R(Ar),R(zn),R(qn),R(Cn),o&&t($c),o&&t(ko),R(Nr),o&&t(Fc),o&&t(Qe),R(Sr),R(jn),R(Hr),R(Ln),R(Pn),R(On)}}}const Nw={local:"rembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RemBertConfig",title:"RemBertConfig"},{local:"transformers.RemBertTokenizer",title:"RemBertTokenizer"},{local:"transformers.RemBertTokenizerFast",title:"RemBertTokenizerFast"},{local:"transformers.RemBertModel",title:"RemBertModel"},{local:"transformers.RemBertForCausalLM",title:"RemBertForCausalLM"},{local:"transformers.RemBertForMaskedLM",title:"RemBertForMaskedLM"},{local:"transformers.RemBertForSequenceClassification",title:"RemBertForSequenceClassification"},{local:"transformers.RemBertForMultipleChoice",title:"RemBertForMultipleChoice"},{local:"transformers.RemBertForTokenClassification",title:"RemBertForTokenClassification"},{local:"transformers.RemBertForQuestionAnswering",title:"RemBertForQuestionAnswering"},{local:"transformers.TFRemBertModel",title:"TFRemBertModel"},{local:"transformers.TFRemBertForMaskedLM",title:"TFRemBertForMaskedLM"},{local:"transformers.TFRemBertForCausalLM",title:"TFRemBertForCausalLM"},{local:"transformers.TFRemBertForSequenceClassification",title:"TFRemBertForSequenceClassification"},{local:"transformers.TFRemBertForMultipleChoice",title:"TFRemBertForMultipleChoice"},{local:"transformers.TFRemBertForTokenClassification",title:"TFRemBertForTokenClassification"},{local:"transformers.TFRemBertForQuestionAnswering",title:"TFRemBertForQuestionAnswering"}],title:"RemBERT"};function Sw(E){return Hy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vw extends Sy{constructor(l){super();Iy(this,l,Sw,Aw,Wy,{})}}export{Vw as default,Nw as metadata};
