import{S as Qg,i as Gg,s as Kg,e as a,k as p,w as T,t as n,M as Jg,c as r,d as t,m as h,a as i,x as w,h as s,b as u,F as e,g as b,y as $,q as y,o as D,B as E,v as Xg,L as Te}from"../../chunks/vendor-6b77c823.js";import{T as Re}from"../../chunks/Tip-39098574.js";import{D as K}from"../../chunks/Docstring-1088f2fb.js";import{C as we}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Be}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ve}from"../../chunks/ExampleCodeBlock-5212b321.js";function Yg(F){let l,g;return l=new we({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Zg(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function e_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2Model.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function t_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=a("code"),f=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function o_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function n_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function s_(F){let l,g;return l=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function a_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function r_(F){let l,g,c,f,v;return f=new we({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of single-label classification:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function i_(F){let l,g;return l=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function l_(F){let l,g,c,f,v;return f=new we({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example of multi-label classification:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function d_(F){let l,g;return l=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function c_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function p_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function h_(F){let l,g;return l=new we({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function f_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function m_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function u_(F){let l,g;return l=new we({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function g_(F){let l,g,c,f,v,d,m,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,he,A,fe,me,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),f=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=h(k),f=r(k,"UL",{});var G=i(f);v=r(G,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=h(k),q=r(k,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=h(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ke=i(A);fe=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),me=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){b(k,l,V),e(l,g),b(k,c,V),b(k,f,V),e(f,v),e(v,d),e(f,m),e(f,x),e(x,de),b(k,J,V),b(k,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),b(k,N,V),b(k,R,V),e(R,te),b(k,Z,V),b(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,fe),e(M,me),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(f),k&&t(J),k&&t(q),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function __(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function b_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2Model.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function k_(F){let l,g,c,f,v,d,m,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,he,A,fe,me,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),f=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=h(k),f=r(k,"UL",{});var G=i(f);v=r(G,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=h(k),q=r(k,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=h(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ke=i(A);fe=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),me=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){b(k,l,V),e(l,g),b(k,c,V),b(k,f,V),e(f,v),e(v,d),e(f,m),e(f,x),e(x,de),b(k,J,V),b(k,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),b(k,N,V),b(k,R,V),e(R,te),b(k,Z,V),b(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,fe),e(M,me),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(f),k&&t(J),k&&t(q),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function v_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function T_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function w_(F){let l,g;return l=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function $_(F){let l,g,c,f,v,d,m,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,he,A,fe,me,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),f=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=h(k),f=r(k,"UL",{});var G=i(f);v=r(G,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=h(k),q=r(k,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=h(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ke=i(A);fe=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),me=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){b(k,l,V),e(l,g),b(k,c,V),b(k,f,V),e(f,v),e(v,d),e(f,m),e(f,x),e(x,de),b(k,J,V),b(k,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),b(k,N,V),b(k,R,V),e(R,te),b(k,Z,V),b(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,fe),e(M,me),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(f),k&&t(J),k&&t(q),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function y_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function D_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function E_(F){let l,g;return l=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function F_(F){let l,g,c,f,v,d,m,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,he,A,fe,me,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),f=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=h(k),f=r(k,"UL",{});var G=i(f);v=r(G,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=h(k),q=r(k,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=h(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ke=i(A);fe=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),me=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){b(k,l,V),e(l,g),b(k,c,V),b(k,f,V),e(f,v),e(v,d),e(f,m),e(f,x),e(x,de),b(k,J,V),b(k,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),b(k,N,V),b(k,R,V),e(R,te),b(k,Z,V),b(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,fe),e(M,me),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(f),k&&t(J),k&&t(q),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function V_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function x_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function q_(F){let l,g;return l=new we({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function z_(F){let l,g,c,f,v,d,m,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,he,A,fe,me,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),f=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),x=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),q=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=h(k),f=r(k,"UL",{});var G=i(f);v=r(G,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(G),x=r(G,"LI",{});var De=i(x);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=h(k),q=r(k,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=h(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=h(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var xe=i(H);le=s(xe,"model(inputs_ids)"),xe.forEach(t),L.forEach(t),ae=h(B),M=r(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var ke=i(A);fe=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),me=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=h(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){b(k,l,V),e(l,g),b(k,c,V),b(k,f,V),e(f,v),e(v,d),e(f,m),e(f,x),e(x,de),b(k,J,V),b(k,q,V),e(q,Y),e(q,S),e(S,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),b(k,N,V),b(k,R,V),e(R,te),b(k,Z,V),b(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,A),e(A,fe),e(M,me),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(f),k&&t(J),k&&t(q),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function M_(F){let l,g,c,f,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);f=s(x,"Module"),x.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,g),e(l,c),e(c,f),e(l,v)},d(d){d&&t(l)}}}function j_(F){let l,g,c,f,v;return f=new we({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);g=s(m,"Example:"),m.forEach(t),c=h(d),w(f.$$.fragment,d)},m(d,m){b(d,l,m),e(l,g),b(d,c,m),$(f,d,m),v=!0},p:Te,i(d){v||(y(f.$$.fragment,d),v=!0)},o(d){D(f.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(f,d)}}}function C_(F){let l,g;return l=new we({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,f){$(l,c,f),g=!0},p:Te,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function P_(F){let l,g,c,f,v,d,m,x,de,J,q,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,he,A,fe,me,O,X,ue,P,ge,U,oe,k,V,G,Ee,De,C,_e,$e,Fe,B,L,Ve,xe,Q,ke,ye,be,qe,Ol,na,Ua,Nl,Wl,Hl,sa,Qa,Ul,Ql,Gl,aa,Ga,Kl,Jl,zi,tt,Xl,gn,Yl,Zl,_n,ed,td,bn,od,nd,Mi,xt,io,Ka,kn,sd,Ja,ad,ji,pt,vn,rd,qt,id,ra,ld,dd,Tn,cd,pd,hd,zt,fd,ia,md,ud,la,gd,_d,Ci,Mt,lo,Xa,wn,bd,Ya,kd,Pi,Me,$n,vd,yn,Td,Dn,wd,$d,yd,ut,En,Dd,Za,Ed,Fd,Fn,er,Vd,xd,tr,qd,zd,co,Vn,Md,jt,jd,or,Cd,Pd,nr,Rd,Bd,Ad,ot,xn,Ld,sr,Sd,Id,po,Od,Ct,Nd,ar,Wd,Hd,rr,Ud,Qd,Gd,da,qn,Ri,Pt,ho,ir,zn,Kd,lr,Jd,Bi,Xe,Mn,Xd,jn,Yd,Cn,Zd,ec,tc,Pn,oc,Rn,nc,sc,ac,nt,Bn,rc,Rt,ic,ca,lc,dc,dr,cc,pc,hc,fo,fc,mo,Ai,Bt,uo,cr,An,mc,pr,uc,Li,ht,Ln,gc,hr,_c,bc,st,Sn,kc,fr,vc,Tc,mr,wc,$c,go,Si,At,_o,ur,In,yc,gr,Dc,Ii,Ye,On,Ec,Lt,Fc,_r,Vc,xc,Nn,qc,zc,Mc,Wn,jc,Hn,Cc,Pc,Rc,Ne,Un,Bc,St,Ac,pa,Lc,Sc,br,Ic,Oc,Nc,bo,Wc,ko,Hc,vo,Oi,It,To,kr,Qn,Uc,vr,Qc,Ni,Ae,Gn,Gc,Tr,Kc,Jc,Kn,Xc,Jn,Yc,Zc,ep,Xn,tp,Yn,op,np,sp,ze,Zn,ap,Ot,rp,ha,ip,lp,wr,dp,cp,pp,wo,hp,$o,fp,yo,mp,Do,up,Eo,Wi,Nt,Fo,$r,es,gp,yr,_p,Hi,Le,ts,bp,Dr,kp,vp,os,Tp,ns,wp,$p,yp,ss,Dp,as,Ep,Fp,Vp,We,rs,xp,Wt,qp,fa,zp,Mp,Er,jp,Cp,Pp,Vo,Rp,xo,Bp,qo,Ui,Ht,zo,Fr,is,Ap,Vr,Lp,Qi,Se,ls,Sp,Ut,Ip,xr,Op,Np,qr,Wp,Hp,Up,ds,Qp,cs,Gp,Kp,Jp,ps,Xp,hs,Yp,Zp,eh,He,fs,th,Qt,oh,ma,nh,sh,zr,ah,rh,ih,Mo,lh,jo,dh,Co,Gi,Gt,Po,Mr,ms,ch,jr,ph,Ki,Ie,us,hh,gs,fh,_s,mh,uh,gh,bs,_h,ks,bh,kh,vh,Ro,Th,at,vs,wh,Kt,$h,ua,yh,Dh,Cr,Eh,Fh,Vh,Bo,xh,Ao,Ji,Jt,Lo,Pr,Ts,qh,Rr,zh,Xi,ft,ws,Mh,Br,jh,Ch,rt,$s,Ph,Ar,Rh,Bh,ys,Ah,Lr,Lh,Sh,Ih,Ze,Oh,Sr,Nh,Wh,Ir,Hh,Uh,Or,Qh,Gh,Nr,Kh,Jh,Yi,Xt,So,Wr,Ds,Xh,Hr,Yh,Zi,Oe,Es,Zh,Yt,ef,Ur,tf,of,Fs,nf,sf,af,Vs,rf,xs,lf,df,cf,Io,pf,Ue,qs,hf,Zt,ff,ga,mf,uf,Qr,gf,_f,bf,Oo,kf,No,vf,Wo,el,eo,Ho,Gr,zs,Tf,Kr,wf,tl,je,Ms,$f,Jr,yf,Df,js,Ef,Cs,Ff,Vf,xf,Ps,qf,Rs,zf,Mf,jf,Uo,Cf,Qe,Bs,Pf,to,Rf,_a,Bf,Af,Xr,Lf,Sf,If,Qo,Of,Go,Nf,Ko,ol,oo,Jo,Yr,As,Wf,Zr,Hf,nl,Ce,Ls,Uf,ei,Qf,Gf,Ss,Kf,Is,Jf,Xf,Yf,Os,Zf,Ns,em,tm,om,Xo,nm,Ge,Ws,sm,no,am,ba,rm,im,ti,lm,dm,cm,Yo,pm,Zo,hm,en,sl,so,tn,oi,Hs,fm,ni,mm,al,Pe,Us,um,ao,gm,si,_m,bm,ai,km,vm,Tm,Qs,wm,Gs,$m,ym,Dm,Ks,Em,Js,Fm,Vm,xm,on,qm,Ke,Xs,zm,ro,Mm,ka,jm,Cm,ri,Pm,Rm,Bm,nn,Am,sn,Lm,an,rl;return d=new Be({}),ee=new Be({}),kn=new Be({}),vn=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31"}}),wn=new Be({}),$n=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[CLS]&#x201D;) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[SEP]&#x201D;) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53"}}),En=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L178",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L202",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L228",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),po=new ve({props:{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Yg]},$$scope:{ctx:F}}}),qn=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),zn=new Be({}),Mn=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977"}}),Bn=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Re({props:{$$slots:{default:[Zg]},$$scope:{ctx:F}}}),mo=new ve({props:{anchor:"transformers.DebertaV2Model.forward.example",$$slots:{default:[e_]},$$scope:{ctx:F}}}),An=new Be({}),Ln=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),Sn=new K({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/torch/nn/modules/module.py#L190"}}),go=new Re({props:{$$slots:{default:[t_]},$$scope:{ctx:F}}}),In=new Be({}),On=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090"}}),Un=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),bo=new Re({props:{$$slots:{default:[o_]},$$scope:{ctx:F}}}),ko=new ve({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example",$$slots:{default:[n_]},$$scope:{ctx:F}}}),vo=new ve({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example-2",$$slots:{default:[s_]},$$scope:{ctx:F}}}),Qn=new Be({}),Gn=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226"}}),Zn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),wo=new Re({props:{$$slots:{default:[a_]},$$scope:{ctx:F}}}),$o=new ve({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example",$$slots:{default:[r_]},$$scope:{ctx:F}}}),yo=new ve({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:F}}}),Do=new ve({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-3",$$slots:{default:[l_]},$$scope:{ctx:F}}}),Eo=new ve({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-4",$$slots:{default:[d_]},$$scope:{ctx:F}}}),es=new Be({}),ts=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346"}}),rs=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Vo=new Re({props:{$$slots:{default:[c_]},$$scope:{ctx:F}}}),xo=new ve({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example",$$slots:{default:[p_]},$$scope:{ctx:F}}}),qo=new ve({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example-2",$$slots:{default:[h_]},$$scope:{ctx:F}}}),is=new Be({}),ls=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423"}}),fs=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Re({props:{$$slots:{default:[f_]},$$scope:{ctx:F}}}),jo=new ve({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example",$$slots:{default:[m_]},$$scope:{ctx:F}}}),Co=new ve({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example-2",$$slots:{default:[u_]},$$scope:{ctx:F}}}),ms=new Be({}),us=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1176"}}),Ro=new Re({props:{$$slots:{default:[g_]},$$scope:{ctx:F}}}),vs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1182",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new Re({props:{$$slots:{default:[__]},$$scope:{ctx:F}}}),Ao=new ve({props:{anchor:"transformers.TFDebertaV2Model.call.example",$$slots:{default:[b_]},$$scope:{ctx:F}}}),Ts=new Be({}),ws=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1080"}}),$s=new K({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/tensorflow/python/keras/engine/training.py#L452",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Ds=new Be({}),Es=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1226"}}),Io=new Re({props:{$$slots:{default:[k_]},$$scope:{ctx:F}}}),qs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1242",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Oo=new Re({props:{$$slots:{default:[v_]},$$scope:{ctx:F}}}),No=new ve({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example",$$slots:{default:[T_]},$$scope:{ctx:F}}}),Wo=new ve({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example-2",$$slots:{default:[w_]},$$scope:{ctx:F}}}),zs=new Be({}),Ms=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1311"}}),Uo=new Re({props:{$$slots:{default:[$_]},$$scope:{ctx:F}}}),Bs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1329",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qo=new Re({props:{$$slots:{default:[y_]},$$scope:{ctx:F}}}),Go=new ve({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example",$$slots:{default:[D_]},$$scope:{ctx:F}}}),Ko=new ve({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example-2",$$slots:{default:[E_]},$$scope:{ctx:F}}}),As=new Be({}),Ls=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1401"}}),Xo=new Re({props:{$$slots:{default:[F_]},$$scope:{ctx:F}}}),Ws=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1413",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new Re({props:{$$slots:{default:[V_]},$$scope:{ctx:F}}}),Zo=new ve({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example",$$slots:{default:[x_]},$$scope:{ctx:F}}}),en=new ve({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:F}}}),Hs=new Be({}),Us=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1481"}}),on=new Re({props:{$$slots:{default:[z_]},$$scope:{ctx:F}}}),Xs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1492",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nn=new Re({props:{$$slots:{default:[M_]},$$scope:{ctx:F}}}),sn=new ve({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example",$$slots:{default:[j_]},$$scope:{ctx:F}}}),an=new ve({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example-2",$$slots:{default:[C_]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=p(),c=a("h1"),f=a("a"),v=a("span"),T(d.$$.fragment),m=p(),x=a("span"),de=n("DeBERTa-v2"),J=p(),q=a("h2"),Y=a("a"),S=a("span"),T(ee.$$.fragment),ce=p(),I=a("span"),pe=n("Overview"),re=p(),N=a("p"),R=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),j=p(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=p(),se=a("p"),H=n("The abstract from the paper is the following:"),le=p(),ae=a("p"),M=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=a("a"),fe=n("https://github.com/microsoft/DeBERTa"),me=n("."),O=p(),X=a("p"),ue=n("The following information is visible directly on the "),P=a("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),k=n("blog"),V=p(),G=a("p"),Ee=n("New in v2:"),De=p(),C=a("ul"),_e=a("li"),$e=a("strong"),Fe=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=a("a"),Ve=n("sentencepiece-based"),xe=n(" tokenizer."),Q=p(),ke=a("li"),ye=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),qe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Ol=p(),na=a("li"),Ua=a("strong"),Nl=n("Sharing position projection matrix with content projection matrix in attention layer"),Wl=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Hl=p(),sa=a("li"),Qa=a("strong"),Ul=n("Apply bucket to encode relative positions"),Ql=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Gl=p(),aa=a("li"),Ga=a("strong"),Kl=n("900M model & 1.5B model"),Jl=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),zi=p(),tt=a("p"),Xl=n("This model was contributed by "),gn=a("a"),Yl=n("DeBERTa"),Zl=n(`. This model TF 2.0 implementation was
contributed by `),_n=a("a"),ed=n("kamalkraj"),td=n(". The original code can be found "),bn=a("a"),od=n("here"),nd=n("."),Mi=p(),xt=a("h2"),io=a("a"),Ka=a("span"),T(kn.$$.fragment),sd=p(),Ja=a("span"),ad=n("DebertaV2Config"),ji=p(),pt=a("div"),T(vn.$$.fragment),rd=p(),qt=a("p"),id=n("This is the configuration class to store the configuration of a "),ra=a("a"),ld=n("DebertaV2Model"),dd=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Tn=a("a"),cd=n("microsoft/deberta-v2-xlarge"),pd=n(" architecture."),hd=p(),zt=a("p"),fd=n("Configuration objects inherit from "),ia=a("a"),md=n("PretrainedConfig"),ud=n(` and can be used to control the model outputs. Read the
documentation from `),la=a("a"),gd=n("PretrainedConfig"),_d=n(" for more information."),Ci=p(),Mt=a("h2"),lo=a("a"),Xa=a("span"),T(wn.$$.fragment),bd=p(),Ya=a("span"),kd=n("DebertaV2Tokenizer"),Pi=p(),Me=a("div"),T($n.$$.fragment),vd=p(),yn=a("p"),Td=n("Constructs a DeBERTa-v2 tokenizer. Based on "),Dn=a("a"),wd=n("SentencePiece"),$d=n("."),yd=p(),ut=a("div"),T(En.$$.fragment),Dd=p(),Za=a("p"),Ed=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fd=p(),Fn=a("ul"),er=a("li"),Vd=n("single sequence: [CLS] X [SEP]"),xd=p(),tr=a("li"),qd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),zd=p(),co=a("div"),T(Vn.$$.fragment),Md=p(),jt=a("p"),jd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),or=a("code"),Cd=n("prepare_for_model"),Pd=n(" or "),nr=a("code"),Rd=n("encode_plus"),Bd=n(" methods."),Ad=p(),ot=a("div"),T(xn.$$.fragment),Ld=p(),sr=a("p"),Sd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Id=p(),T(po.$$.fragment),Od=p(),Ct=a("p"),Nd=n("If "),ar=a("code"),Wd=n("token_ids_1"),Hd=n(" is "),rr=a("code"),Ud=n("None"),Qd=n(", this method only returns the first portion of the mask (0s)."),Gd=p(),da=a("div"),T(qn.$$.fragment),Ri=p(),Pt=a("h2"),ho=a("a"),ir=a("span"),T(zn.$$.fragment),Kd=p(),lr=a("span"),Jd=n("DebertaV2Model"),Bi=p(),Xe=a("div"),T(Mn.$$.fragment),Xd=p(),jn=a("p"),Yd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Cn=a("a"),Zd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ec=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tc=p(),Pn=a("p"),oc=n("This model is also a PyTorch "),Rn=a("a"),nc=n("torch.nn.Module"),sc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ac=p(),nt=a("div"),T(Bn.$$.fragment),rc=p(),Rt=a("p"),ic=n("The "),ca=a("a"),lc=n("DebertaV2Model"),dc=n(" forward method, overrides the "),dr=a("code"),cc=n("__call__"),pc=n(" special method."),hc=p(),T(fo.$$.fragment),fc=p(),T(mo.$$.fragment),Ai=p(),Bt=a("h2"),uo=a("a"),cr=a("span"),T(An.$$.fragment),mc=p(),pr=a("span"),uc=n("DebertaV2PreTrainedModel"),Li=p(),ht=a("div"),T(Ln.$$.fragment),gc=p(),hr=a("p"),_c=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),bc=p(),st=a("div"),T(Sn.$$.fragment),kc=p(),fr=a("p"),vc=n("Defines the computation performed at every call."),Tc=p(),mr=a("p"),wc=n("Should be overridden by all subclasses."),$c=p(),T(go.$$.fragment),Si=p(),At=a("h2"),_o=a("a"),ur=a("span"),T(In.$$.fragment),yc=p(),gr=a("span"),Dc=n("DebertaV2ForMaskedLM"),Ii=p(),Ye=a("div"),T(On.$$.fragment),Ec=p(),Lt=a("p"),Fc=n("DeBERTa Model with a "),_r=a("code"),Vc=n("language modeling"),xc=n(` head on top.
The DeBERTa model was proposed in `),Nn=a("a"),qc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),zc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Mc=p(),Wn=a("p"),jc=n("This model is also a PyTorch "),Hn=a("a"),Cc=n("torch.nn.Module"),Pc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Rc=p(),Ne=a("div"),T(Un.$$.fragment),Bc=p(),St=a("p"),Ac=n("The "),pa=a("a"),Lc=n("DebertaV2ForMaskedLM"),Sc=n(" forward method, overrides the "),br=a("code"),Ic=n("__call__"),Oc=n(" special method."),Nc=p(),T(bo.$$.fragment),Wc=p(),T(ko.$$.fragment),Hc=p(),T(vo.$$.fragment),Oi=p(),It=a("h2"),To=a("a"),kr=a("span"),T(Qn.$$.fragment),Uc=p(),vr=a("span"),Qc=n("DebertaV2ForSequenceClassification"),Ni=p(),Ae=a("div"),T(Gn.$$.fragment),Gc=p(),Tr=a("p"),Kc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jc=p(),Kn=a("p"),Xc=n("The DeBERTa model was proposed in "),Jn=a("a"),Yc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Zc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ep=p(),Xn=a("p"),tp=n("This model is also a PyTorch "),Yn=a("a"),op=n("torch.nn.Module"),np=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sp=p(),ze=a("div"),T(Zn.$$.fragment),ap=p(),Ot=a("p"),rp=n("The "),ha=a("a"),ip=n("DebertaV2ForSequenceClassification"),lp=n(" forward method, overrides the "),wr=a("code"),dp=n("__call__"),cp=n(" special method."),pp=p(),T(wo.$$.fragment),hp=p(),T($o.$$.fragment),fp=p(),T(yo.$$.fragment),mp=p(),T(Do.$$.fragment),up=p(),T(Eo.$$.fragment),Wi=p(),Nt=a("h2"),Fo=a("a"),$r=a("span"),T(es.$$.fragment),gp=p(),yr=a("span"),_p=n("DebertaV2ForTokenClassification"),Hi=p(),Le=a("div"),T(ts.$$.fragment),bp=p(),Dr=a("p"),kp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),vp=p(),os=a("p"),Tp=n("The DeBERTa model was proposed in "),ns=a("a"),wp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$p=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yp=p(),ss=a("p"),Dp=n("This model is also a PyTorch "),as=a("a"),Ep=n("torch.nn.Module"),Fp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Vp=p(),We=a("div"),T(rs.$$.fragment),xp=p(),Wt=a("p"),qp=n("The "),fa=a("a"),zp=n("DebertaV2ForTokenClassification"),Mp=n(" forward method, overrides the "),Er=a("code"),jp=n("__call__"),Cp=n(" special method."),Pp=p(),T(Vo.$$.fragment),Rp=p(),T(xo.$$.fragment),Bp=p(),T(qo.$$.fragment),Ui=p(),Ht=a("h2"),zo=a("a"),Fr=a("span"),T(is.$$.fragment),Ap=p(),Vr=a("span"),Lp=n("DebertaV2ForQuestionAnswering"),Qi=p(),Se=a("div"),T(ls.$$.fragment),Sp=p(),Ut=a("p"),Ip=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xr=a("code"),Op=n("span start logits"),Np=n(" and "),qr=a("code"),Wp=n("span end logits"),Hp=n(")."),Up=p(),ds=a("p"),Qp=n("The DeBERTa model was proposed in "),cs=a("a"),Gp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jp=p(),ps=a("p"),Xp=n("This model is also a PyTorch "),hs=a("a"),Yp=n("torch.nn.Module"),Zp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),eh=p(),He=a("div"),T(fs.$$.fragment),th=p(),Qt=a("p"),oh=n("The "),ma=a("a"),nh=n("DebertaV2ForQuestionAnswering"),sh=n(" forward method, overrides the "),zr=a("code"),ah=n("__call__"),rh=n(" special method."),ih=p(),T(Mo.$$.fragment),lh=p(),T(jo.$$.fragment),dh=p(),T(Co.$$.fragment),Gi=p(),Gt=a("h2"),Po=a("a"),Mr=a("span"),T(ms.$$.fragment),ch=p(),jr=a("span"),ph=n("TFDebertaV2Model"),Ki=p(),Ie=a("div"),T(us.$$.fragment),hh=p(),gs=a("p"),fh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),_s=a("a"),mh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),uh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gh=p(),bs=a("p"),_h=n("This model is also a "),ks=a("a"),bh=n("tf.keras.Model"),kh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vh=p(),T(Ro.$$.fragment),Th=p(),at=a("div"),T(vs.$$.fragment),wh=p(),Kt=a("p"),$h=n("The "),ua=a("a"),yh=n("TFDebertaV2Model"),Dh=n(" forward method, overrides the "),Cr=a("code"),Eh=n("__call__"),Fh=n(" special method."),Vh=p(),T(Bo.$$.fragment),xh=p(),T(Ao.$$.fragment),Ji=p(),Jt=a("h2"),Lo=a("a"),Pr=a("span"),T(Ts.$$.fragment),qh=p(),Rr=a("span"),zh=n("TFDebertaV2PreTrainedModel"),Xi=p(),ft=a("div"),T(ws.$$.fragment),Mh=p(),Br=a("p"),jh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ch=p(),rt=a("div"),T($s.$$.fragment),Ph=p(),Ar=a("p"),Rh=n("Calls the model on new inputs."),Bh=p(),ys=a("p"),Ah=n("In this case "),Lr=a("code"),Lh=n("call"),Sh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Ih=p(),Ze=a("p"),Oh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Sr=a("code"),Nh=n("tf.keras.Model"),Wh=n(`.
To call a model on an input, always use the `),Ir=a("code"),Hh=n("__call__"),Uh=n(` method,
i.e. `),Or=a("code"),Qh=n("model(inputs)"),Gh=n(", which relies on the underlying "),Nr=a("code"),Kh=n("call"),Jh=n(" method."),Yi=p(),Xt=a("h2"),So=a("a"),Wr=a("span"),T(Ds.$$.fragment),Xh=p(),Hr=a("span"),Yh=n("TFDebertaV2ForMaskedLM"),Zi=p(),Oe=a("div"),T(Es.$$.fragment),Zh=p(),Yt=a("p"),ef=n("DeBERTa Model with a "),Ur=a("code"),tf=n("language modeling"),of=n(` head on top.
The DeBERTa model was proposed in `),Fs=a("a"),nf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),af=p(),Vs=a("p"),rf=n("This model is also a "),xs=a("a"),lf=n("tf.keras.Model"),df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cf=p(),T(Io.$$.fragment),pf=p(),Ue=a("div"),T(qs.$$.fragment),hf=p(),Zt=a("p"),ff=n("The "),ga=a("a"),mf=n("TFDebertaV2ForMaskedLM"),uf=n(" forward method, overrides the "),Qr=a("code"),gf=n("__call__"),_f=n(" special method."),bf=p(),T(Oo.$$.fragment),kf=p(),T(No.$$.fragment),vf=p(),T(Wo.$$.fragment),el=p(),eo=a("h2"),Ho=a("a"),Gr=a("span"),T(zs.$$.fragment),Tf=p(),Kr=a("span"),wf=n("TFDebertaV2ForSequenceClassification"),tl=p(),je=a("div"),T(Ms.$$.fragment),$f=p(),Jr=a("p"),yf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Df=p(),js=a("p"),Ef=n("The DeBERTa model was proposed in "),Cs=a("a"),Ff=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xf=p(),Ps=a("p"),qf=n("This model is also a "),Rs=a("a"),zf=n("tf.keras.Model"),Mf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jf=p(),T(Uo.$$.fragment),Cf=p(),Qe=a("div"),T(Bs.$$.fragment),Pf=p(),to=a("p"),Rf=n("The "),_a=a("a"),Bf=n("TFDebertaV2ForSequenceClassification"),Af=n(" forward method, overrides the "),Xr=a("code"),Lf=n("__call__"),Sf=n(" special method."),If=p(),T(Qo.$$.fragment),Of=p(),T(Go.$$.fragment),Nf=p(),T(Ko.$$.fragment),ol=p(),oo=a("h2"),Jo=a("a"),Yr=a("span"),T(As.$$.fragment),Wf=p(),Zr=a("span"),Hf=n("TFDebertaV2ForTokenClassification"),nl=p(),Ce=a("div"),T(Ls.$$.fragment),Uf=p(),ei=a("p"),Qf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Gf=p(),Ss=a("p"),Kf=n("The DeBERTa model was proposed in "),Is=a("a"),Jf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Xf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yf=p(),Os=a("p"),Zf=n("This model is also a "),Ns=a("a"),em=n("tf.keras.Model"),tm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),om=p(),T(Xo.$$.fragment),nm=p(),Ge=a("div"),T(Ws.$$.fragment),sm=p(),no=a("p"),am=n("The "),ba=a("a"),rm=n("TFDebertaV2ForTokenClassification"),im=n(" forward method, overrides the "),ti=a("code"),lm=n("__call__"),dm=n(" special method."),cm=p(),T(Yo.$$.fragment),pm=p(),T(Zo.$$.fragment),hm=p(),T(en.$$.fragment),sl=p(),so=a("h2"),tn=a("a"),oi=a("span"),T(Hs.$$.fragment),fm=p(),ni=a("span"),mm=n("TFDebertaV2ForQuestionAnswering"),al=p(),Pe=a("div"),T(Us.$$.fragment),um=p(),ao=a("p"),gm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),si=a("code"),_m=n("span start logits"),bm=n(" and "),ai=a("code"),km=n("span end logits"),vm=n(")."),Tm=p(),Qs=a("p"),wm=n("The DeBERTa model was proposed in "),Gs=a("a"),$m=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ym=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dm=p(),Ks=a("p"),Em=n("This model is also a "),Js=a("a"),Fm=n("tf.keras.Model"),Vm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xm=p(),T(on.$$.fragment),qm=p(),Ke=a("div"),T(Xs.$$.fragment),zm=p(),ro=a("p"),Mm=n("The "),ka=a("a"),jm=n("TFDebertaV2ForQuestionAnswering"),Cm=n(" forward method, overrides the "),ri=a("code"),Pm=n("__call__"),Rm=n(" special method."),Bm=p(),T(nn.$$.fragment),Am=p(),T(sn.$$.fragment),Lm=p(),T(an.$$.fragment),this.h()},l(o){const _=Jg('[data-svelte="svelte-1phssyn"]',document.head);l=r(_,"META",{name:!0,content:!0}),_.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var Ys=i(c);f=r(Ys,"A",{id:!0,class:!0,href:!0});var ii=i(f);v=r(ii,"SPAN",{});var li=i(v);w(d.$$.fragment,li),li.forEach(t),ii.forEach(t),m=h(Ys),x=r(Ys,"SPAN",{});var di=i(x);de=s(di,"DeBERTa-v2"),di.forEach(t),Ys.forEach(t),J=h(o),q=r(o,"H2",{class:!0});var Zs=i(q);Y=r(Zs,"A",{id:!0,class:!0,href:!0});var ci=i(Y);S=r(ci,"SPAN",{});var pi=i(S);w(ee.$$.fragment,pi),pi.forEach(t),ci.forEach(t),ce=h(Zs),I=r(Zs,"SPAN",{});var hi=i(I);pe=s(hi,"Overview"),hi.forEach(t),Zs.forEach(t),re=h(o),N=r(o,"P",{});var ea=i(N);R=s(ea,"The DeBERTa model was proposed in "),te=r(ea,"A",{href:!0,rel:!0});var fi=i(te);Z=s(fi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),fi.forEach(t),z=s(ea,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ea.forEach(t),j=h(o),ne=r(o,"P",{});var mi=i(ne);W=s(mi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),mi.forEach(t),ie=h(o),se=r(o,"P",{});var ui=i(se);H=s(ui,"The abstract from the paper is the following:"),ui.forEach(t),le=h(o),ae=r(o,"P",{});var gi=i(ae);M=r(gi,"EM",{});var ta=i(M);he=s(ta,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=r(ta,"A",{href:!0,rel:!0});var _i=i(A);fe=s(_i,"https://github.com/microsoft/DeBERTa"),_i.forEach(t),me=s(ta,"."),ta.forEach(t),gi.forEach(t),O=h(o),X=r(o,"P",{});var rn=i(X);ue=s(rn,"The following information is visible directly on the "),P=r(rn,"A",{href:!0,rel:!0});var bi=i(P);ge=s(bi,`original implementation
repository`),bi.forEach(t),U=s(rn,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(rn,"A",{href:!0,rel:!0});var ki=i(oe);k=s(ki,"blog"),ki.forEach(t),rn.forEach(t),V=h(o),G=r(o,"P",{});var vi=i(G);Ee=s(vi,"New in v2:"),vi.forEach(t),De=h(o),C=r(o,"UL",{});var et=i(C);_e=r(et,"LI",{});var ln=i(_e);$e=r(ln,"STRONG",{});var Ti=i($e);Fe=s(Ti,"Vocabulary"),Ti.forEach(t),B=s(ln,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=r(ln,"A",{href:!0,rel:!0});var wi=i(L);Ve=s(wi,"sentencepiece-based"),wi.forEach(t),xe=s(ln," tokenizer."),ln.forEach(t),Q=h(et),ke=r(et,"LI",{});var va=i(ke);ye=r(va,"STRONG",{});var $i=i(ye);be=s($i,"nGiE(nGram Induced Input Encoding)"),$i.forEach(t),qe=s(va,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),va.forEach(t),Ol=h(et),na=r(et,"LI",{});var Ta=i(na);Ua=r(Ta,"STRONG",{});var yi=i(Ua);Nl=s(yi,"Sharing position projection matrix with content projection matrix in attention layer"),yi.forEach(t),Wl=s(Ta,` Based on previous
experiments, this can save parameters without affecting the performance.`),Ta.forEach(t),Hl=h(et),sa=r(et,"LI",{});var wa=i(sa);Qa=r(wa,"STRONG",{});var Di=i(Qa);Ul=s(Di,"Apply bucket to encode relative positions"),Di.forEach(t),Ql=s(wa,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),wa.forEach(t),Gl=h(et),aa=r(et,"LI",{});var $a=i(aa);Ga=r($a,"STRONG",{});var Ei=i(Ga);Kl=s(Ei,"900M model & 1.5B model"),Ei.forEach(t),Jl=s($a,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),$a.forEach(t),et.forEach(t),zi=h(o),tt=r(o,"P",{});var mt=i(tt);Xl=s(mt,"This model was contributed by "),gn=r(mt,"A",{href:!0,rel:!0});var Fi=i(gn);Yl=s(Fi,"DeBERTa"),Fi.forEach(t),Zl=s(mt,`. This model TF 2.0 implementation was
contributed by `),_n=r(mt,"A",{href:!0,rel:!0});var Vi=i(_n);ed=s(Vi,"kamalkraj"),Vi.forEach(t),td=s(mt,". The original code can be found "),bn=r(mt,"A",{href:!0,rel:!0});var xi=i(bn);od=s(xi,"here"),xi.forEach(t),nd=s(mt,"."),mt.forEach(t),Mi=h(o),xt=r(o,"H2",{class:!0});var oa=i(xt);io=r(oa,"A",{id:!0,class:!0,href:!0});var qi=i(io);Ka=r(qi,"SPAN",{});var Sm=i(Ka);w(kn.$$.fragment,Sm),Sm.forEach(t),qi.forEach(t),sd=h(oa),Ja=r(oa,"SPAN",{});var Im=i(Ja);ad=s(Im,"DebertaV2Config"),Im.forEach(t),oa.forEach(t),ji=h(o),pt=r(o,"DIV",{class:!0});var ya=i(pt);w(vn.$$.fragment,ya),rd=h(ya),qt=r(ya,"P",{});var Da=i(qt);id=s(Da,"This is the configuration class to store the configuration of a "),ra=r(Da,"A",{href:!0});var Om=i(ra);ld=s(Om,"DebertaV2Model"),Om.forEach(t),dd=s(Da,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Tn=r(Da,"A",{href:!0,rel:!0});var Nm=i(Tn);cd=s(Nm,"microsoft/deberta-v2-xlarge"),Nm.forEach(t),pd=s(Da," architecture."),Da.forEach(t),hd=h(ya),zt=r(ya,"P",{});var Ea=i(zt);fd=s(Ea,"Configuration objects inherit from "),ia=r(Ea,"A",{href:!0});var Wm=i(ia);md=s(Wm,"PretrainedConfig"),Wm.forEach(t),ud=s(Ea,` and can be used to control the model outputs. Read the
documentation from `),la=r(Ea,"A",{href:!0});var Hm=i(la);gd=s(Hm,"PretrainedConfig"),Hm.forEach(t),_d=s(Ea," for more information."),Ea.forEach(t),ya.forEach(t),Ci=h(o),Mt=r(o,"H2",{class:!0});var il=i(Mt);lo=r(il,"A",{id:!0,class:!0,href:!0});var Um=i(lo);Xa=r(Um,"SPAN",{});var Qm=i(Xa);w(wn.$$.fragment,Qm),Qm.forEach(t),Um.forEach(t),bd=h(il),Ya=r(il,"SPAN",{});var Gm=i(Ya);kd=s(Gm,"DebertaV2Tokenizer"),Gm.forEach(t),il.forEach(t),Pi=h(o),Me=r(o,"DIV",{class:!0});var it=i(Me);w($n.$$.fragment,it),vd=h(it),yn=r(it,"P",{});var ll=i(yn);Td=s(ll,"Constructs a DeBERTa-v2 tokenizer. Based on "),Dn=r(ll,"A",{href:!0,rel:!0});var Km=i(Dn);wd=s(Km,"SentencePiece"),Km.forEach(t),$d=s(ll,"."),ll.forEach(t),yd=h(it),ut=r(it,"DIV",{class:!0});var Fa=i(ut);w(En.$$.fragment,Fa),Dd=h(Fa),Za=r(Fa,"P",{});var Jm=i(Za);Ed=s(Jm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Jm.forEach(t),Fd=h(Fa),Fn=r(Fa,"UL",{});var dl=i(Fn);er=r(dl,"LI",{});var Xm=i(er);Vd=s(Xm,"single sequence: [CLS] X [SEP]"),Xm.forEach(t),xd=h(dl),tr=r(dl,"LI",{});var Ym=i(tr);qd=s(Ym,"pair of sequences: [CLS] A [SEP] B [SEP]"),Ym.forEach(t),dl.forEach(t),Fa.forEach(t),zd=h(it),co=r(it,"DIV",{class:!0});var cl=i(co);w(Vn.$$.fragment,cl),Md=h(cl),jt=r(cl,"P",{});var Va=i(jt);jd=s(Va,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),or=r(Va,"CODE",{});var Zm=i(or);Cd=s(Zm,"prepare_for_model"),Zm.forEach(t),Pd=s(Va," or "),nr=r(Va,"CODE",{});var eu=i(nr);Rd=s(eu,"encode_plus"),eu.forEach(t),Bd=s(Va," methods."),Va.forEach(t),cl.forEach(t),Ad=h(it),ot=r(it,"DIV",{class:!0});var dn=i(ot);w(xn.$$.fragment,dn),Ld=h(dn),sr=r(dn,"P",{});var tu=i(sr);Sd=s(tu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),tu.forEach(t),Id=h(dn),w(po.$$.fragment,dn),Od=h(dn),Ct=r(dn,"P",{});var xa=i(Ct);Nd=s(xa,"If "),ar=r(xa,"CODE",{});var ou=i(ar);Wd=s(ou,"token_ids_1"),ou.forEach(t),Hd=s(xa," is "),rr=r(xa,"CODE",{});var nu=i(rr);Ud=s(nu,"None"),nu.forEach(t),Qd=s(xa,", this method only returns the first portion of the mask (0s)."),xa.forEach(t),dn.forEach(t),Gd=h(it),da=r(it,"DIV",{class:!0});var su=i(da);w(qn.$$.fragment,su),su.forEach(t),it.forEach(t),Ri=h(o),Pt=r(o,"H2",{class:!0});var pl=i(Pt);ho=r(pl,"A",{id:!0,class:!0,href:!0});var au=i(ho);ir=r(au,"SPAN",{});var ru=i(ir);w(zn.$$.fragment,ru),ru.forEach(t),au.forEach(t),Kd=h(pl),lr=r(pl,"SPAN",{});var iu=i(lr);Jd=s(iu,"DebertaV2Model"),iu.forEach(t),pl.forEach(t),Bi=h(o),Xe=r(o,"DIV",{class:!0});var cn=i(Xe);w(Mn.$$.fragment,cn),Xd=h(cn),jn=r(cn,"P",{});var hl=i(jn);Yd=s(hl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Cn=r(hl,"A",{href:!0,rel:!0});var lu=i(Cn);Zd=s(lu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),lu.forEach(t),ec=s(hl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hl.forEach(t),tc=h(cn),Pn=r(cn,"P",{});var fl=i(Pn);oc=s(fl,"This model is also a PyTorch "),Rn=r(fl,"A",{href:!0,rel:!0});var du=i(Rn);nc=s(du,"torch.nn.Module"),du.forEach(t),sc=s(fl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),fl.forEach(t),ac=h(cn),nt=r(cn,"DIV",{class:!0});var pn=i(nt);w(Bn.$$.fragment,pn),rc=h(pn),Rt=r(pn,"P",{});var qa=i(Rt);ic=s(qa,"The "),ca=r(qa,"A",{href:!0});var cu=i(ca);lc=s(cu,"DebertaV2Model"),cu.forEach(t),dc=s(qa," forward method, overrides the "),dr=r(qa,"CODE",{});var pu=i(dr);cc=s(pu,"__call__"),pu.forEach(t),pc=s(qa," special method."),qa.forEach(t),hc=h(pn),w(fo.$$.fragment,pn),fc=h(pn),w(mo.$$.fragment,pn),pn.forEach(t),cn.forEach(t),Ai=h(o),Bt=r(o,"H2",{class:!0});var ml=i(Bt);uo=r(ml,"A",{id:!0,class:!0,href:!0});var hu=i(uo);cr=r(hu,"SPAN",{});var fu=i(cr);w(An.$$.fragment,fu),fu.forEach(t),hu.forEach(t),mc=h(ml),pr=r(ml,"SPAN",{});var mu=i(pr);uc=s(mu,"DebertaV2PreTrainedModel"),mu.forEach(t),ml.forEach(t),Li=h(o),ht=r(o,"DIV",{class:!0});var za=i(ht);w(Ln.$$.fragment,za),gc=h(za),hr=r(za,"P",{});var uu=i(hr);_c=s(uu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),uu.forEach(t),bc=h(za),st=r(za,"DIV",{class:!0});var hn=i(st);w(Sn.$$.fragment,hn),kc=h(hn),fr=r(hn,"P",{});var gu=i(fr);vc=s(gu,"Defines the computation performed at every call."),gu.forEach(t),Tc=h(hn),mr=r(hn,"P",{});var _u=i(mr);wc=s(_u,"Should be overridden by all subclasses."),_u.forEach(t),$c=h(hn),w(go.$$.fragment,hn),hn.forEach(t),za.forEach(t),Si=h(o),At=r(o,"H2",{class:!0});var ul=i(At);_o=r(ul,"A",{id:!0,class:!0,href:!0});var bu=i(_o);ur=r(bu,"SPAN",{});var ku=i(ur);w(In.$$.fragment,ku),ku.forEach(t),bu.forEach(t),yc=h(ul),gr=r(ul,"SPAN",{});var vu=i(gr);Dc=s(vu,"DebertaV2ForMaskedLM"),vu.forEach(t),ul.forEach(t),Ii=h(o),Ye=r(o,"DIV",{class:!0});var fn=i(Ye);w(On.$$.fragment,fn),Ec=h(fn),Lt=r(fn,"P",{});var Ma=i(Lt);Fc=s(Ma,"DeBERTa Model with a "),_r=r(Ma,"CODE",{});var Tu=i(_r);Vc=s(Tu,"language modeling"),Tu.forEach(t),xc=s(Ma,` head on top.
The DeBERTa model was proposed in `),Nn=r(Ma,"A",{href:!0,rel:!0});var wu=i(Nn);qc=s(wu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wu.forEach(t),zc=s(Ma,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ma.forEach(t),Mc=h(fn),Wn=r(fn,"P",{});var gl=i(Wn);jc=s(gl,"This model is also a PyTorch "),Hn=r(gl,"A",{href:!0,rel:!0});var $u=i(Hn);Cc=s($u,"torch.nn.Module"),$u.forEach(t),Pc=s(gl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),gl.forEach(t),Rc=h(fn),Ne=r(fn,"DIV",{class:!0});var gt=i(Ne);w(Un.$$.fragment,gt),Bc=h(gt),St=r(gt,"P",{});var ja=i(St);Ac=s(ja,"The "),pa=r(ja,"A",{href:!0});var yu=i(pa);Lc=s(yu,"DebertaV2ForMaskedLM"),yu.forEach(t),Sc=s(ja," forward method, overrides the "),br=r(ja,"CODE",{});var Du=i(br);Ic=s(Du,"__call__"),Du.forEach(t),Oc=s(ja," special method."),ja.forEach(t),Nc=h(gt),w(bo.$$.fragment,gt),Wc=h(gt),w(ko.$$.fragment,gt),Hc=h(gt),w(vo.$$.fragment,gt),gt.forEach(t),fn.forEach(t),Oi=h(o),It=r(o,"H2",{class:!0});var _l=i(It);To=r(_l,"A",{id:!0,class:!0,href:!0});var Eu=i(To);kr=r(Eu,"SPAN",{});var Fu=i(kr);w(Qn.$$.fragment,Fu),Fu.forEach(t),Eu.forEach(t),Uc=h(_l),vr=r(_l,"SPAN",{});var Vu=i(vr);Qc=s(Vu,"DebertaV2ForSequenceClassification"),Vu.forEach(t),_l.forEach(t),Ni=h(o),Ae=r(o,"DIV",{class:!0});var _t=i(Ae);w(Gn.$$.fragment,_t),Gc=h(_t),Tr=r(_t,"P",{});var xu=i(Tr);Kc=s(xu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xu.forEach(t),Jc=h(_t),Kn=r(_t,"P",{});var bl=i(Kn);Xc=s(bl,"The DeBERTa model was proposed in "),Jn=r(bl,"A",{href:!0,rel:!0});var qu=i(Jn);Yc=s(qu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qu.forEach(t),Zc=s(bl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bl.forEach(t),ep=h(_t),Xn=r(_t,"P",{});var kl=i(Xn);tp=s(kl,"This model is also a PyTorch "),Yn=r(kl,"A",{href:!0,rel:!0});var zu=i(Yn);op=s(zu,"torch.nn.Module"),zu.forEach(t),np=s(kl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),kl.forEach(t),sp=h(_t),ze=r(_t,"DIV",{class:!0});var Je=i(ze);w(Zn.$$.fragment,Je),ap=h(Je),Ot=r(Je,"P",{});var Ca=i(Ot);rp=s(Ca,"The "),ha=r(Ca,"A",{href:!0});var Mu=i(ha);ip=s(Mu,"DebertaV2ForSequenceClassification"),Mu.forEach(t),lp=s(Ca," forward method, overrides the "),wr=r(Ca,"CODE",{});var ju=i(wr);dp=s(ju,"__call__"),ju.forEach(t),cp=s(Ca," special method."),Ca.forEach(t),pp=h(Je),w(wo.$$.fragment,Je),hp=h(Je),w($o.$$.fragment,Je),fp=h(Je),w(yo.$$.fragment,Je),mp=h(Je),w(Do.$$.fragment,Je),up=h(Je),w(Eo.$$.fragment,Je),Je.forEach(t),_t.forEach(t),Wi=h(o),Nt=r(o,"H2",{class:!0});var vl=i(Nt);Fo=r(vl,"A",{id:!0,class:!0,href:!0});var Cu=i(Fo);$r=r(Cu,"SPAN",{});var Pu=i($r);w(es.$$.fragment,Pu),Pu.forEach(t),Cu.forEach(t),gp=h(vl),yr=r(vl,"SPAN",{});var Ru=i(yr);_p=s(Ru,"DebertaV2ForTokenClassification"),Ru.forEach(t),vl.forEach(t),Hi=h(o),Le=r(o,"DIV",{class:!0});var bt=i(Le);w(ts.$$.fragment,bt),bp=h(bt),Dr=r(bt,"P",{});var Bu=i(Dr);kp=s(Bu,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Bu.forEach(t),vp=h(bt),os=r(bt,"P",{});var Tl=i(os);Tp=s(Tl,"The DeBERTa model was proposed in "),ns=r(Tl,"A",{href:!0,rel:!0});var Au=i(ns);wp=s(Au,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Au.forEach(t),$p=s(Tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tl.forEach(t),yp=h(bt),ss=r(bt,"P",{});var wl=i(ss);Dp=s(wl,"This model is also a PyTorch "),as=r(wl,"A",{href:!0,rel:!0});var Lu=i(as);Ep=s(Lu,"torch.nn.Module"),Lu.forEach(t),Fp=s(wl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),wl.forEach(t),Vp=h(bt),We=r(bt,"DIV",{class:!0});var kt=i(We);w(rs.$$.fragment,kt),xp=h(kt),Wt=r(kt,"P",{});var Pa=i(Wt);qp=s(Pa,"The "),fa=r(Pa,"A",{href:!0});var Su=i(fa);zp=s(Su,"DebertaV2ForTokenClassification"),Su.forEach(t),Mp=s(Pa," forward method, overrides the "),Er=r(Pa,"CODE",{});var Iu=i(Er);jp=s(Iu,"__call__"),Iu.forEach(t),Cp=s(Pa," special method."),Pa.forEach(t),Pp=h(kt),w(Vo.$$.fragment,kt),Rp=h(kt),w(xo.$$.fragment,kt),Bp=h(kt),w(qo.$$.fragment,kt),kt.forEach(t),bt.forEach(t),Ui=h(o),Ht=r(o,"H2",{class:!0});var $l=i(Ht);zo=r($l,"A",{id:!0,class:!0,href:!0});var Ou=i(zo);Fr=r(Ou,"SPAN",{});var Nu=i(Fr);w(is.$$.fragment,Nu),Nu.forEach(t),Ou.forEach(t),Ap=h($l),Vr=r($l,"SPAN",{});var Wu=i(Vr);Lp=s(Wu,"DebertaV2ForQuestionAnswering"),Wu.forEach(t),$l.forEach(t),Qi=h(o),Se=r(o,"DIV",{class:!0});var vt=i(Se);w(ls.$$.fragment,vt),Sp=h(vt),Ut=r(vt,"P",{});var Ra=i(Ut);Ip=s(Ra,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xr=r(Ra,"CODE",{});var Hu=i(xr);Op=s(Hu,"span start logits"),Hu.forEach(t),Np=s(Ra," and "),qr=r(Ra,"CODE",{});var Uu=i(qr);Wp=s(Uu,"span end logits"),Uu.forEach(t),Hp=s(Ra,")."),Ra.forEach(t),Up=h(vt),ds=r(vt,"P",{});var yl=i(ds);Qp=s(yl,"The DeBERTa model was proposed in "),cs=r(yl,"A",{href:!0,rel:!0});var Qu=i(cs);Gp=s(Qu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qu.forEach(t),Kp=s(yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yl.forEach(t),Jp=h(vt),ps=r(vt,"P",{});var Dl=i(ps);Xp=s(Dl,"This model is also a PyTorch "),hs=r(Dl,"A",{href:!0,rel:!0});var Gu=i(hs);Yp=s(Gu,"torch.nn.Module"),Gu.forEach(t),Zp=s(Dl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Dl.forEach(t),eh=h(vt),He=r(vt,"DIV",{class:!0});var Tt=i(He);w(fs.$$.fragment,Tt),th=h(Tt),Qt=r(Tt,"P",{});var Ba=i(Qt);oh=s(Ba,"The "),ma=r(Ba,"A",{href:!0});var Ku=i(ma);nh=s(Ku,"DebertaV2ForQuestionAnswering"),Ku.forEach(t),sh=s(Ba," forward method, overrides the "),zr=r(Ba,"CODE",{});var Ju=i(zr);ah=s(Ju,"__call__"),Ju.forEach(t),rh=s(Ba," special method."),Ba.forEach(t),ih=h(Tt),w(Mo.$$.fragment,Tt),lh=h(Tt),w(jo.$$.fragment,Tt),dh=h(Tt),w(Co.$$.fragment,Tt),Tt.forEach(t),vt.forEach(t),Gi=h(o),Gt=r(o,"H2",{class:!0});var El=i(Gt);Po=r(El,"A",{id:!0,class:!0,href:!0});var Xu=i(Po);Mr=r(Xu,"SPAN",{});var Yu=i(Mr);w(ms.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),ch=h(El),jr=r(El,"SPAN",{});var Zu=i(jr);ph=s(Zu,"TFDebertaV2Model"),Zu.forEach(t),El.forEach(t),Ki=h(o),Ie=r(o,"DIV",{class:!0});var wt=i(Ie);w(us.$$.fragment,wt),hh=h(wt),gs=r(wt,"P",{});var Fl=i(gs);fh=s(Fl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),_s=r(Fl,"A",{href:!0,rel:!0});var eg=i(_s);mh=s(eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),eg.forEach(t),uh=s(Fl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fl.forEach(t),gh=h(wt),bs=r(wt,"P",{});var Vl=i(bs);_h=s(Vl,"This model is also a "),ks=r(Vl,"A",{href:!0,rel:!0});var tg=i(ks);bh=s(tg,"tf.keras.Model"),tg.forEach(t),kh=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),vh=h(wt),w(Ro.$$.fragment,wt),Th=h(wt),at=r(wt,"DIV",{class:!0});var mn=i(at);w(vs.$$.fragment,mn),wh=h(mn),Kt=r(mn,"P",{});var Aa=i(Kt);$h=s(Aa,"The "),ua=r(Aa,"A",{href:!0});var og=i(ua);yh=s(og,"TFDebertaV2Model"),og.forEach(t),Dh=s(Aa," forward method, overrides the "),Cr=r(Aa,"CODE",{});var ng=i(Cr);Eh=s(ng,"__call__"),ng.forEach(t),Fh=s(Aa," special method."),Aa.forEach(t),Vh=h(mn),w(Bo.$$.fragment,mn),xh=h(mn),w(Ao.$$.fragment,mn),mn.forEach(t),wt.forEach(t),Ji=h(o),Jt=r(o,"H2",{class:!0});var xl=i(Jt);Lo=r(xl,"A",{id:!0,class:!0,href:!0});var sg=i(Lo);Pr=r(sg,"SPAN",{});var ag=i(Pr);w(Ts.$$.fragment,ag),ag.forEach(t),sg.forEach(t),qh=h(xl),Rr=r(xl,"SPAN",{});var rg=i(Rr);zh=s(rg,"TFDebertaV2PreTrainedModel"),rg.forEach(t),xl.forEach(t),Xi=h(o),ft=r(o,"DIV",{class:!0});var La=i(ft);w(ws.$$.fragment,La),Mh=h(La),Br=r(La,"P",{});var ig=i(Br);jh=s(ig,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ig.forEach(t),Ch=h(La),rt=r(La,"DIV",{class:!0});var un=i(rt);w($s.$$.fragment,un),Ph=h(un),Ar=r(un,"P",{});var lg=i(Ar);Rh=s(lg,"Calls the model on new inputs."),lg.forEach(t),Bh=h(un),ys=r(un,"P",{});var ql=i(ys);Ah=s(ql,"In this case "),Lr=r(ql,"CODE",{});var dg=i(Lr);Lh=s(dg,"call"),dg.forEach(t),Sh=s(ql,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),ql.forEach(t),Ih=h(un),Ze=r(un,"P",{});var $t=i(Ze);Oh=s($t,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Sr=r($t,"CODE",{});var cg=i(Sr);Nh=s(cg,"tf.keras.Model"),cg.forEach(t),Wh=s($t,`.
To call a model on an input, always use the `),Ir=r($t,"CODE",{});var pg=i(Ir);Hh=s(pg,"__call__"),pg.forEach(t),Uh=s($t,` method,
i.e. `),Or=r($t,"CODE",{});var hg=i(Or);Qh=s(hg,"model(inputs)"),hg.forEach(t),Gh=s($t,", which relies on the underlying "),Nr=r($t,"CODE",{});var fg=i(Nr);Kh=s(fg,"call"),fg.forEach(t),Jh=s($t," method."),$t.forEach(t),un.forEach(t),La.forEach(t),Yi=h(o),Xt=r(o,"H2",{class:!0});var zl=i(Xt);So=r(zl,"A",{id:!0,class:!0,href:!0});var mg=i(So);Wr=r(mg,"SPAN",{});var ug=i(Wr);w(Ds.$$.fragment,ug),ug.forEach(t),mg.forEach(t),Xh=h(zl),Hr=r(zl,"SPAN",{});var gg=i(Hr);Yh=s(gg,"TFDebertaV2ForMaskedLM"),gg.forEach(t),zl.forEach(t),Zi=h(o),Oe=r(o,"DIV",{class:!0});var yt=i(Oe);w(Es.$$.fragment,yt),Zh=h(yt),Yt=r(yt,"P",{});var Sa=i(Yt);ef=s(Sa,"DeBERTa Model with a "),Ur=r(Sa,"CODE",{});var _g=i(Ur);tf=s(_g,"language modeling"),_g.forEach(t),of=s(Sa,` head on top.
The DeBERTa model was proposed in `),Fs=r(Sa,"A",{href:!0,rel:!0});var bg=i(Fs);nf=s(bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bg.forEach(t),sf=s(Sa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sa.forEach(t),af=h(yt),Vs=r(yt,"P",{});var Ml=i(Vs);rf=s(Ml,"This model is also a "),xs=r(Ml,"A",{href:!0,rel:!0});var kg=i(xs);lf=s(kg,"tf.keras.Model"),kg.forEach(t),df=s(Ml,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ml.forEach(t),cf=h(yt),w(Io.$$.fragment,yt),pf=h(yt),Ue=r(yt,"DIV",{class:!0});var Dt=i(Ue);w(qs.$$.fragment,Dt),hf=h(Dt),Zt=r(Dt,"P",{});var Ia=i(Zt);ff=s(Ia,"The "),ga=r(Ia,"A",{href:!0});var vg=i(ga);mf=s(vg,"TFDebertaV2ForMaskedLM"),vg.forEach(t),uf=s(Ia," forward method, overrides the "),Qr=r(Ia,"CODE",{});var Tg=i(Qr);gf=s(Tg,"__call__"),Tg.forEach(t),_f=s(Ia," special method."),Ia.forEach(t),bf=h(Dt),w(Oo.$$.fragment,Dt),kf=h(Dt),w(No.$$.fragment,Dt),vf=h(Dt),w(Wo.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),el=h(o),eo=r(o,"H2",{class:!0});var jl=i(eo);Ho=r(jl,"A",{id:!0,class:!0,href:!0});var wg=i(Ho);Gr=r(wg,"SPAN",{});var $g=i(Gr);w(zs.$$.fragment,$g),$g.forEach(t),wg.forEach(t),Tf=h(jl),Kr=r(jl,"SPAN",{});var yg=i(Kr);wf=s(yg,"TFDebertaV2ForSequenceClassification"),yg.forEach(t),jl.forEach(t),tl=h(o),je=r(o,"DIV",{class:!0});var lt=i(je);w(Ms.$$.fragment,lt),$f=h(lt),Jr=r(lt,"P",{});var Dg=i(Jr);yf=s(Dg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Dg.forEach(t),Df=h(lt),js=r(lt,"P",{});var Cl=i(js);Ef=s(Cl,"The DeBERTa model was proposed in "),Cs=r(Cl,"A",{href:!0,rel:!0});var Eg=i(Cs);Ff=s(Eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Eg.forEach(t),Vf=s(Cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Cl.forEach(t),xf=h(lt),Ps=r(lt,"P",{});var Pl=i(Ps);qf=s(Pl,"This model is also a "),Rs=r(Pl,"A",{href:!0,rel:!0});var Fg=i(Rs);zf=s(Fg,"tf.keras.Model"),Fg.forEach(t),Mf=s(Pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pl.forEach(t),jf=h(lt),w(Uo.$$.fragment,lt),Cf=h(lt),Qe=r(lt,"DIV",{class:!0});var Et=i(Qe);w(Bs.$$.fragment,Et),Pf=h(Et),to=r(Et,"P",{});var Oa=i(to);Rf=s(Oa,"The "),_a=r(Oa,"A",{href:!0});var Vg=i(_a);Bf=s(Vg,"TFDebertaV2ForSequenceClassification"),Vg.forEach(t),Af=s(Oa," forward method, overrides the "),Xr=r(Oa,"CODE",{});var xg=i(Xr);Lf=s(xg,"__call__"),xg.forEach(t),Sf=s(Oa," special method."),Oa.forEach(t),If=h(Et),w(Qo.$$.fragment,Et),Of=h(Et),w(Go.$$.fragment,Et),Nf=h(Et),w(Ko.$$.fragment,Et),Et.forEach(t),lt.forEach(t),ol=h(o),oo=r(o,"H2",{class:!0});var Rl=i(oo);Jo=r(Rl,"A",{id:!0,class:!0,href:!0});var qg=i(Jo);Yr=r(qg,"SPAN",{});var zg=i(Yr);w(As.$$.fragment,zg),zg.forEach(t),qg.forEach(t),Wf=h(Rl),Zr=r(Rl,"SPAN",{});var Mg=i(Zr);Hf=s(Mg,"TFDebertaV2ForTokenClassification"),Mg.forEach(t),Rl.forEach(t),nl=h(o),Ce=r(o,"DIV",{class:!0});var dt=i(Ce);w(Ls.$$.fragment,dt),Uf=h(dt),ei=r(dt,"P",{});var jg=i(ei);Qf=s(jg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),jg.forEach(t),Gf=h(dt),Ss=r(dt,"P",{});var Bl=i(Ss);Kf=s(Bl,"The DeBERTa model was proposed in "),Is=r(Bl,"A",{href:!0,rel:!0});var Cg=i(Is);Jf=s(Cg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Cg.forEach(t),Xf=s(Bl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bl.forEach(t),Yf=h(dt),Os=r(dt,"P",{});var Al=i(Os);Zf=s(Al,"This model is also a "),Ns=r(Al,"A",{href:!0,rel:!0});var Pg=i(Ns);em=s(Pg,"tf.keras.Model"),Pg.forEach(t),tm=s(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),om=h(dt),w(Xo.$$.fragment,dt),nm=h(dt),Ge=r(dt,"DIV",{class:!0});var Ft=i(Ge);w(Ws.$$.fragment,Ft),sm=h(Ft),no=r(Ft,"P",{});var Na=i(no);am=s(Na,"The "),ba=r(Na,"A",{href:!0});var Rg=i(ba);rm=s(Rg,"TFDebertaV2ForTokenClassification"),Rg.forEach(t),im=s(Na," forward method, overrides the "),ti=r(Na,"CODE",{});var Bg=i(ti);lm=s(Bg,"__call__"),Bg.forEach(t),dm=s(Na," special method."),Na.forEach(t),cm=h(Ft),w(Yo.$$.fragment,Ft),pm=h(Ft),w(Zo.$$.fragment,Ft),hm=h(Ft),w(en.$$.fragment,Ft),Ft.forEach(t),dt.forEach(t),sl=h(o),so=r(o,"H2",{class:!0});var Ll=i(so);tn=r(Ll,"A",{id:!0,class:!0,href:!0});var Ag=i(tn);oi=r(Ag,"SPAN",{});var Lg=i(oi);w(Hs.$$.fragment,Lg),Lg.forEach(t),Ag.forEach(t),fm=h(Ll),ni=r(Ll,"SPAN",{});var Sg=i(ni);mm=s(Sg,"TFDebertaV2ForQuestionAnswering"),Sg.forEach(t),Ll.forEach(t),al=h(o),Pe=r(o,"DIV",{class:!0});var ct=i(Pe);w(Us.$$.fragment,ct),um=h(ct),ao=r(ct,"P",{});var Wa=i(ao);gm=s(Wa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),si=r(Wa,"CODE",{});var Ig=i(si);_m=s(Ig,"span start logits"),Ig.forEach(t),bm=s(Wa," and "),ai=r(Wa,"CODE",{});var Og=i(ai);km=s(Og,"span end logits"),Og.forEach(t),vm=s(Wa,")."),Wa.forEach(t),Tm=h(ct),Qs=r(ct,"P",{});var Sl=i(Qs);wm=s(Sl,"The DeBERTa model was proposed in "),Gs=r(Sl,"A",{href:!0,rel:!0});var Ng=i(Gs);$m=s(Ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ng.forEach(t),ym=s(Sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sl.forEach(t),Dm=h(ct),Ks=r(ct,"P",{});var Il=i(Ks);Em=s(Il,"This model is also a "),Js=r(Il,"A",{href:!0,rel:!0});var Wg=i(Js);Fm=s(Wg,"tf.keras.Model"),Wg.forEach(t),Vm=s(Il,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Il.forEach(t),xm=h(ct),w(on.$$.fragment,ct),qm=h(ct),Ke=r(ct,"DIV",{class:!0});var Vt=i(Ke);w(Xs.$$.fragment,Vt),zm=h(Vt),ro=r(Vt,"P",{});var Ha=i(ro);Mm=s(Ha,"The "),ka=r(Ha,"A",{href:!0});var Hg=i(ka);jm=s(Hg,"TFDebertaV2ForQuestionAnswering"),Hg.forEach(t),Cm=s(Ha," forward method, overrides the "),ri=r(Ha,"CODE",{});var Ug=i(ri);Pm=s(Ug,"__call__"),Ug.forEach(t),Rm=s(Ha," special method."),Ha.forEach(t),Bm=h(Vt),w(nn.$$.fragment,Vt),Am=h(Vt),w(sn.$$.fragment,Vt),Lm=h(Vt),w(an.$$.fragment,Vt),Vt.forEach(t),ct.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(R_)),u(f,"id","debertav2"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#debertav2"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(q,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(A,"href","https://github.com/microsoft/DeBERTa"),u(A,"rel","nofollow"),u(P,"href","https://github.com/microsoft/DeBERTa"),u(P,"rel","nofollow"),u(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),u(oe,"rel","nofollow"),u(L,"href","https://github.com/google/sentencepiece"),u(L,"rel","nofollow"),u(gn,"href","https://huggingface.co/DeBERTa"),u(gn,"rel","nofollow"),u(_n,"href","https://huggingface.co/kamalkraj"),u(_n,"rel","nofollow"),u(bn,"href","https://github.com/microsoft/DeBERTa"),u(bn,"rel","nofollow"),u(io,"id","transformers.DebertaV2Config"),u(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(io,"href","#transformers.DebertaV2Config"),u(xt,"class","relative group"),u(ra,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(Tn,"href","https://huggingface.co/microsoft/deberta-base"),u(Tn,"rel","nofollow"),u(ia,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(la,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"id","transformers.DebertaV2Tokenizer"),u(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lo,"href","#transformers.DebertaV2Tokenizer"),u(Mt,"class","relative group"),u(Dn,"href","https://github.com/google/sentencepiece"),u(Dn,"rel","nofollow"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(da,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"id","transformers.DebertaV2Model"),u(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ho,"href","#transformers.DebertaV2Model"),u(Pt,"class","relative group"),u(Cn,"href","https://arxiv.org/abs/2006.03654"),u(Cn,"rel","nofollow"),u(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Rn,"rel","nofollow"),u(ca,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"id","transformers.DebertaV2PreTrainedModel"),u(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(uo,"href","#transformers.DebertaV2PreTrainedModel"),u(Bt,"class","relative group"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"id","transformers.DebertaV2ForMaskedLM"),u(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_o,"href","#transformers.DebertaV2ForMaskedLM"),u(At,"class","relative group"),u(Nn,"href","https://arxiv.org/abs/2006.03654"),u(Nn,"rel","nofollow"),u(Hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hn,"rel","nofollow"),u(pa,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(To,"id","transformers.DebertaV2ForSequenceClassification"),u(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(To,"href","#transformers.DebertaV2ForSequenceClassification"),u(It,"class","relative group"),u(Jn,"href","https://arxiv.org/abs/2006.03654"),u(Jn,"rel","nofollow"),u(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yn,"rel","nofollow"),u(ha,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),u(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"id","transformers.DebertaV2ForTokenClassification"),u(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fo,"href","#transformers.DebertaV2ForTokenClassification"),u(Nt,"class","relative group"),u(ns,"href","https://arxiv.org/abs/2006.03654"),u(ns,"rel","nofollow"),u(as,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(as,"rel","nofollow"),u(fa,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zo,"id","transformers.DebertaV2ForQuestionAnswering"),u(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zo,"href","#transformers.DebertaV2ForQuestionAnswering"),u(Ht,"class","relative group"),u(cs,"href","https://arxiv.org/abs/2006.03654"),u(cs,"rel","nofollow"),u(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hs,"rel","nofollow"),u(ma,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"id","transformers.TFDebertaV2Model"),u(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Po,"href","#transformers.TFDebertaV2Model"),u(Gt,"class","relative group"),u(_s,"href","https://arxiv.org/abs/2006.03654"),u(_s,"rel","nofollow"),u(ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ks,"rel","nofollow"),u(ua,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"id","transformers.TFDebertaV2PreTrainedModel"),u(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lo,"href","#transformers.TFDebertaV2PreTrainedModel"),u(Jt,"class","relative group"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"id","transformers.TFDebertaV2ForMaskedLM"),u(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(So,"href","#transformers.TFDebertaV2ForMaskedLM"),u(Xt,"class","relative group"),u(Fs,"href","https://arxiv.org/abs/2006.03654"),u(Fs,"rel","nofollow"),u(xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xs,"rel","nofollow"),u(ga,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ho,"id","transformers.TFDebertaV2ForSequenceClassification"),u(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ho,"href","#transformers.TFDebertaV2ForSequenceClassification"),u(eo,"class","relative group"),u(Cs,"href","https://arxiv.org/abs/2006.03654"),u(Cs,"rel","nofollow"),u(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Rs,"rel","nofollow"),u(_a,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jo,"id","transformers.TFDebertaV2ForTokenClassification"),u(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jo,"href","#transformers.TFDebertaV2ForTokenClassification"),u(oo,"class","relative group"),u(Is,"href","https://arxiv.org/abs/2006.03654"),u(Is,"rel","nofollow"),u(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ns,"rel","nofollow"),u(ba,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tn,"id","transformers.TFDebertaV2ForQuestionAnswering"),u(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(tn,"href","#transformers.TFDebertaV2ForQuestionAnswering"),u(so,"class","relative group"),u(Gs,"href","https://arxiv.org/abs/2006.03654"),u(Gs,"rel","nofollow"),u(Js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Js,"rel","nofollow"),u(ka,"href","/docs/transformers/pr_16919/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),b(o,g,_),b(o,c,_),e(c,f),e(f,v),$(d,v,null),e(c,m),e(c,x),e(x,de),b(o,J,_),b(o,q,_),e(q,Y),e(Y,S),$(ee,S,null),e(q,ce),e(q,I),e(I,pe),b(o,re,_),b(o,N,_),e(N,R),e(N,te),e(te,Z),e(N,z),b(o,j,_),b(o,ne,_),e(ne,W),b(o,ie,_),b(o,se,_),e(se,H),b(o,le,_),b(o,ae,_),e(ae,M),e(M,he),e(M,A),e(A,fe),e(M,me),b(o,O,_),b(o,X,_),e(X,ue),e(X,P),e(P,ge),e(X,U),e(X,oe),e(oe,k),b(o,V,_),b(o,G,_),e(G,Ee),b(o,De,_),b(o,C,_),e(C,_e),e(_e,$e),e($e,Fe),e(_e,B),e(_e,L),e(L,Ve),e(_e,xe),e(C,Q),e(C,ke),e(ke,ye),e(ye,be),e(ke,qe),e(C,Ol),e(C,na),e(na,Ua),e(Ua,Nl),e(na,Wl),e(C,Hl),e(C,sa),e(sa,Qa),e(Qa,Ul),e(sa,Ql),e(C,Gl),e(C,aa),e(aa,Ga),e(Ga,Kl),e(aa,Jl),b(o,zi,_),b(o,tt,_),e(tt,Xl),e(tt,gn),e(gn,Yl),e(tt,Zl),e(tt,_n),e(_n,ed),e(tt,td),e(tt,bn),e(bn,od),e(tt,nd),b(o,Mi,_),b(o,xt,_),e(xt,io),e(io,Ka),$(kn,Ka,null),e(xt,sd),e(xt,Ja),e(Ja,ad),b(o,ji,_),b(o,pt,_),$(vn,pt,null),e(pt,rd),e(pt,qt),e(qt,id),e(qt,ra),e(ra,ld),e(qt,dd),e(qt,Tn),e(Tn,cd),e(qt,pd),e(pt,hd),e(pt,zt),e(zt,fd),e(zt,ia),e(ia,md),e(zt,ud),e(zt,la),e(la,gd),e(zt,_d),b(o,Ci,_),b(o,Mt,_),e(Mt,lo),e(lo,Xa),$(wn,Xa,null),e(Mt,bd),e(Mt,Ya),e(Ya,kd),b(o,Pi,_),b(o,Me,_),$($n,Me,null),e(Me,vd),e(Me,yn),e(yn,Td),e(yn,Dn),e(Dn,wd),e(yn,$d),e(Me,yd),e(Me,ut),$(En,ut,null),e(ut,Dd),e(ut,Za),e(Za,Ed),e(ut,Fd),e(ut,Fn),e(Fn,er),e(er,Vd),e(Fn,xd),e(Fn,tr),e(tr,qd),e(Me,zd),e(Me,co),$(Vn,co,null),e(co,Md),e(co,jt),e(jt,jd),e(jt,or),e(or,Cd),e(jt,Pd),e(jt,nr),e(nr,Rd),e(jt,Bd),e(Me,Ad),e(Me,ot),$(xn,ot,null),e(ot,Ld),e(ot,sr),e(sr,Sd),e(ot,Id),$(po,ot,null),e(ot,Od),e(ot,Ct),e(Ct,Nd),e(Ct,ar),e(ar,Wd),e(Ct,Hd),e(Ct,rr),e(rr,Ud),e(Ct,Qd),e(Me,Gd),e(Me,da),$(qn,da,null),b(o,Ri,_),b(o,Pt,_),e(Pt,ho),e(ho,ir),$(zn,ir,null),e(Pt,Kd),e(Pt,lr),e(lr,Jd),b(o,Bi,_),b(o,Xe,_),$(Mn,Xe,null),e(Xe,Xd),e(Xe,jn),e(jn,Yd),e(jn,Cn),e(Cn,Zd),e(jn,ec),e(Xe,tc),e(Xe,Pn),e(Pn,oc),e(Pn,Rn),e(Rn,nc),e(Pn,sc),e(Xe,ac),e(Xe,nt),$(Bn,nt,null),e(nt,rc),e(nt,Rt),e(Rt,ic),e(Rt,ca),e(ca,lc),e(Rt,dc),e(Rt,dr),e(dr,cc),e(Rt,pc),e(nt,hc),$(fo,nt,null),e(nt,fc),$(mo,nt,null),b(o,Ai,_),b(o,Bt,_),e(Bt,uo),e(uo,cr),$(An,cr,null),e(Bt,mc),e(Bt,pr),e(pr,uc),b(o,Li,_),b(o,ht,_),$(Ln,ht,null),e(ht,gc),e(ht,hr),e(hr,_c),e(ht,bc),e(ht,st),$(Sn,st,null),e(st,kc),e(st,fr),e(fr,vc),e(st,Tc),e(st,mr),e(mr,wc),e(st,$c),$(go,st,null),b(o,Si,_),b(o,At,_),e(At,_o),e(_o,ur),$(In,ur,null),e(At,yc),e(At,gr),e(gr,Dc),b(o,Ii,_),b(o,Ye,_),$(On,Ye,null),e(Ye,Ec),e(Ye,Lt),e(Lt,Fc),e(Lt,_r),e(_r,Vc),e(Lt,xc),e(Lt,Nn),e(Nn,qc),e(Lt,zc),e(Ye,Mc),e(Ye,Wn),e(Wn,jc),e(Wn,Hn),e(Hn,Cc),e(Wn,Pc),e(Ye,Rc),e(Ye,Ne),$(Un,Ne,null),e(Ne,Bc),e(Ne,St),e(St,Ac),e(St,pa),e(pa,Lc),e(St,Sc),e(St,br),e(br,Ic),e(St,Oc),e(Ne,Nc),$(bo,Ne,null),e(Ne,Wc),$(ko,Ne,null),e(Ne,Hc),$(vo,Ne,null),b(o,Oi,_),b(o,It,_),e(It,To),e(To,kr),$(Qn,kr,null),e(It,Uc),e(It,vr),e(vr,Qc),b(o,Ni,_),b(o,Ae,_),$(Gn,Ae,null),e(Ae,Gc),e(Ae,Tr),e(Tr,Kc),e(Ae,Jc),e(Ae,Kn),e(Kn,Xc),e(Kn,Jn),e(Jn,Yc),e(Kn,Zc),e(Ae,ep),e(Ae,Xn),e(Xn,tp),e(Xn,Yn),e(Yn,op),e(Xn,np),e(Ae,sp),e(Ae,ze),$(Zn,ze,null),e(ze,ap),e(ze,Ot),e(Ot,rp),e(Ot,ha),e(ha,ip),e(Ot,lp),e(Ot,wr),e(wr,dp),e(Ot,cp),e(ze,pp),$(wo,ze,null),e(ze,hp),$($o,ze,null),e(ze,fp),$(yo,ze,null),e(ze,mp),$(Do,ze,null),e(ze,up),$(Eo,ze,null),b(o,Wi,_),b(o,Nt,_),e(Nt,Fo),e(Fo,$r),$(es,$r,null),e(Nt,gp),e(Nt,yr),e(yr,_p),b(o,Hi,_),b(o,Le,_),$(ts,Le,null),e(Le,bp),e(Le,Dr),e(Dr,kp),e(Le,vp),e(Le,os),e(os,Tp),e(os,ns),e(ns,wp),e(os,$p),e(Le,yp),e(Le,ss),e(ss,Dp),e(ss,as),e(as,Ep),e(ss,Fp),e(Le,Vp),e(Le,We),$(rs,We,null),e(We,xp),e(We,Wt),e(Wt,qp),e(Wt,fa),e(fa,zp),e(Wt,Mp),e(Wt,Er),e(Er,jp),e(Wt,Cp),e(We,Pp),$(Vo,We,null),e(We,Rp),$(xo,We,null),e(We,Bp),$(qo,We,null),b(o,Ui,_),b(o,Ht,_),e(Ht,zo),e(zo,Fr),$(is,Fr,null),e(Ht,Ap),e(Ht,Vr),e(Vr,Lp),b(o,Qi,_),b(o,Se,_),$(ls,Se,null),e(Se,Sp),e(Se,Ut),e(Ut,Ip),e(Ut,xr),e(xr,Op),e(Ut,Np),e(Ut,qr),e(qr,Wp),e(Ut,Hp),e(Se,Up),e(Se,ds),e(ds,Qp),e(ds,cs),e(cs,Gp),e(ds,Kp),e(Se,Jp),e(Se,ps),e(ps,Xp),e(ps,hs),e(hs,Yp),e(ps,Zp),e(Se,eh),e(Se,He),$(fs,He,null),e(He,th),e(He,Qt),e(Qt,oh),e(Qt,ma),e(ma,nh),e(Qt,sh),e(Qt,zr),e(zr,ah),e(Qt,rh),e(He,ih),$(Mo,He,null),e(He,lh),$(jo,He,null),e(He,dh),$(Co,He,null),b(o,Gi,_),b(o,Gt,_),e(Gt,Po),e(Po,Mr),$(ms,Mr,null),e(Gt,ch),e(Gt,jr),e(jr,ph),b(o,Ki,_),b(o,Ie,_),$(us,Ie,null),e(Ie,hh),e(Ie,gs),e(gs,fh),e(gs,_s),e(_s,mh),e(gs,uh),e(Ie,gh),e(Ie,bs),e(bs,_h),e(bs,ks),e(ks,bh),e(bs,kh),e(Ie,vh),$(Ro,Ie,null),e(Ie,Th),e(Ie,at),$(vs,at,null),e(at,wh),e(at,Kt),e(Kt,$h),e(Kt,ua),e(ua,yh),e(Kt,Dh),e(Kt,Cr),e(Cr,Eh),e(Kt,Fh),e(at,Vh),$(Bo,at,null),e(at,xh),$(Ao,at,null),b(o,Ji,_),b(o,Jt,_),e(Jt,Lo),e(Lo,Pr),$(Ts,Pr,null),e(Jt,qh),e(Jt,Rr),e(Rr,zh),b(o,Xi,_),b(o,ft,_),$(ws,ft,null),e(ft,Mh),e(ft,Br),e(Br,jh),e(ft,Ch),e(ft,rt),$($s,rt,null),e(rt,Ph),e(rt,Ar),e(Ar,Rh),e(rt,Bh),e(rt,ys),e(ys,Ah),e(ys,Lr),e(Lr,Lh),e(ys,Sh),e(rt,Ih),e(rt,Ze),e(Ze,Oh),e(Ze,Sr),e(Sr,Nh),e(Ze,Wh),e(Ze,Ir),e(Ir,Hh),e(Ze,Uh),e(Ze,Or),e(Or,Qh),e(Ze,Gh),e(Ze,Nr),e(Nr,Kh),e(Ze,Jh),b(o,Yi,_),b(o,Xt,_),e(Xt,So),e(So,Wr),$(Ds,Wr,null),e(Xt,Xh),e(Xt,Hr),e(Hr,Yh),b(o,Zi,_),b(o,Oe,_),$(Es,Oe,null),e(Oe,Zh),e(Oe,Yt),e(Yt,ef),e(Yt,Ur),e(Ur,tf),e(Yt,of),e(Yt,Fs),e(Fs,nf),e(Yt,sf),e(Oe,af),e(Oe,Vs),e(Vs,rf),e(Vs,xs),e(xs,lf),e(Vs,df),e(Oe,cf),$(Io,Oe,null),e(Oe,pf),e(Oe,Ue),$(qs,Ue,null),e(Ue,hf),e(Ue,Zt),e(Zt,ff),e(Zt,ga),e(ga,mf),e(Zt,uf),e(Zt,Qr),e(Qr,gf),e(Zt,_f),e(Ue,bf),$(Oo,Ue,null),e(Ue,kf),$(No,Ue,null),e(Ue,vf),$(Wo,Ue,null),b(o,el,_),b(o,eo,_),e(eo,Ho),e(Ho,Gr),$(zs,Gr,null),e(eo,Tf),e(eo,Kr),e(Kr,wf),b(o,tl,_),b(o,je,_),$(Ms,je,null),e(je,$f),e(je,Jr),e(Jr,yf),e(je,Df),e(je,js),e(js,Ef),e(js,Cs),e(Cs,Ff),e(js,Vf),e(je,xf),e(je,Ps),e(Ps,qf),e(Ps,Rs),e(Rs,zf),e(Ps,Mf),e(je,jf),$(Uo,je,null),e(je,Cf),e(je,Qe),$(Bs,Qe,null),e(Qe,Pf),e(Qe,to),e(to,Rf),e(to,_a),e(_a,Bf),e(to,Af),e(to,Xr),e(Xr,Lf),e(to,Sf),e(Qe,If),$(Qo,Qe,null),e(Qe,Of),$(Go,Qe,null),e(Qe,Nf),$(Ko,Qe,null),b(o,ol,_),b(o,oo,_),e(oo,Jo),e(Jo,Yr),$(As,Yr,null),e(oo,Wf),e(oo,Zr),e(Zr,Hf),b(o,nl,_),b(o,Ce,_),$(Ls,Ce,null),e(Ce,Uf),e(Ce,ei),e(ei,Qf),e(Ce,Gf),e(Ce,Ss),e(Ss,Kf),e(Ss,Is),e(Is,Jf),e(Ss,Xf),e(Ce,Yf),e(Ce,Os),e(Os,Zf),e(Os,Ns),e(Ns,em),e(Os,tm),e(Ce,om),$(Xo,Ce,null),e(Ce,nm),e(Ce,Ge),$(Ws,Ge,null),e(Ge,sm),e(Ge,no),e(no,am),e(no,ba),e(ba,rm),e(no,im),e(no,ti),e(ti,lm),e(no,dm),e(Ge,cm),$(Yo,Ge,null),e(Ge,pm),$(Zo,Ge,null),e(Ge,hm),$(en,Ge,null),b(o,sl,_),b(o,so,_),e(so,tn),e(tn,oi),$(Hs,oi,null),e(so,fm),e(so,ni),e(ni,mm),b(o,al,_),b(o,Pe,_),$(Us,Pe,null),e(Pe,um),e(Pe,ao),e(ao,gm),e(ao,si),e(si,_m),e(ao,bm),e(ao,ai),e(ai,km),e(ao,vm),e(Pe,Tm),e(Pe,Qs),e(Qs,wm),e(Qs,Gs),e(Gs,$m),e(Qs,ym),e(Pe,Dm),e(Pe,Ks),e(Ks,Em),e(Ks,Js),e(Js,Fm),e(Ks,Vm),e(Pe,xm),$(on,Pe,null),e(Pe,qm),e(Pe,Ke),$(Xs,Ke,null),e(Ke,zm),e(Ke,ro),e(ro,Mm),e(ro,ka),e(ka,jm),e(ro,Cm),e(ro,ri),e(ri,Pm),e(ro,Rm),e(Ke,Bm),$(nn,Ke,null),e(Ke,Am),$(sn,Ke,null),e(Ke,Lm),$(an,Ke,null),rl=!0},p(o,[_]){const Ys={};_&2&&(Ys.$$scope={dirty:_,ctx:o}),po.$set(Ys);const ii={};_&2&&(ii.$$scope={dirty:_,ctx:o}),fo.$set(ii);const li={};_&2&&(li.$$scope={dirty:_,ctx:o}),mo.$set(li);const di={};_&2&&(di.$$scope={dirty:_,ctx:o}),go.$set(di);const Zs={};_&2&&(Zs.$$scope={dirty:_,ctx:o}),bo.$set(Zs);const ci={};_&2&&(ci.$$scope={dirty:_,ctx:o}),ko.$set(ci);const pi={};_&2&&(pi.$$scope={dirty:_,ctx:o}),vo.$set(pi);const hi={};_&2&&(hi.$$scope={dirty:_,ctx:o}),wo.$set(hi);const ea={};_&2&&(ea.$$scope={dirty:_,ctx:o}),$o.$set(ea);const fi={};_&2&&(fi.$$scope={dirty:_,ctx:o}),yo.$set(fi);const mi={};_&2&&(mi.$$scope={dirty:_,ctx:o}),Do.$set(mi);const ui={};_&2&&(ui.$$scope={dirty:_,ctx:o}),Eo.$set(ui);const gi={};_&2&&(gi.$$scope={dirty:_,ctx:o}),Vo.$set(gi);const ta={};_&2&&(ta.$$scope={dirty:_,ctx:o}),xo.$set(ta);const _i={};_&2&&(_i.$$scope={dirty:_,ctx:o}),qo.$set(_i);const rn={};_&2&&(rn.$$scope={dirty:_,ctx:o}),Mo.$set(rn);const bi={};_&2&&(bi.$$scope={dirty:_,ctx:o}),jo.$set(bi);const ki={};_&2&&(ki.$$scope={dirty:_,ctx:o}),Co.$set(ki);const vi={};_&2&&(vi.$$scope={dirty:_,ctx:o}),Ro.$set(vi);const et={};_&2&&(et.$$scope={dirty:_,ctx:o}),Bo.$set(et);const ln={};_&2&&(ln.$$scope={dirty:_,ctx:o}),Ao.$set(ln);const Ti={};_&2&&(Ti.$$scope={dirty:_,ctx:o}),Io.$set(Ti);const wi={};_&2&&(wi.$$scope={dirty:_,ctx:o}),Oo.$set(wi);const va={};_&2&&(va.$$scope={dirty:_,ctx:o}),No.$set(va);const $i={};_&2&&($i.$$scope={dirty:_,ctx:o}),Wo.$set($i);const Ta={};_&2&&(Ta.$$scope={dirty:_,ctx:o}),Uo.$set(Ta);const yi={};_&2&&(yi.$$scope={dirty:_,ctx:o}),Qo.$set(yi);const wa={};_&2&&(wa.$$scope={dirty:_,ctx:o}),Go.$set(wa);const Di={};_&2&&(Di.$$scope={dirty:_,ctx:o}),Ko.$set(Di);const $a={};_&2&&($a.$$scope={dirty:_,ctx:o}),Xo.$set($a);const Ei={};_&2&&(Ei.$$scope={dirty:_,ctx:o}),Yo.$set(Ei);const mt={};_&2&&(mt.$$scope={dirty:_,ctx:o}),Zo.$set(mt);const Fi={};_&2&&(Fi.$$scope={dirty:_,ctx:o}),en.$set(Fi);const Vi={};_&2&&(Vi.$$scope={dirty:_,ctx:o}),on.$set(Vi);const xi={};_&2&&(xi.$$scope={dirty:_,ctx:o}),nn.$set(xi);const oa={};_&2&&(oa.$$scope={dirty:_,ctx:o}),sn.$set(oa);const qi={};_&2&&(qi.$$scope={dirty:_,ctx:o}),an.$set(qi)},i(o){rl||(y(d.$$.fragment,o),y(ee.$$.fragment,o),y(kn.$$.fragment,o),y(vn.$$.fragment,o),y(wn.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(Vn.$$.fragment,o),y(xn.$$.fragment,o),y(po.$$.fragment,o),y(qn.$$.fragment,o),y(zn.$$.fragment,o),y(Mn.$$.fragment,o),y(Bn.$$.fragment,o),y(fo.$$.fragment,o),y(mo.$$.fragment,o),y(An.$$.fragment,o),y(Ln.$$.fragment,o),y(Sn.$$.fragment,o),y(go.$$.fragment,o),y(In.$$.fragment,o),y(On.$$.fragment,o),y(Un.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y(vo.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(Zn.$$.fragment,o),y(wo.$$.fragment,o),y($o.$$.fragment,o),y(yo.$$.fragment,o),y(Do.$$.fragment,o),y(Eo.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(rs.$$.fragment,o),y(Vo.$$.fragment,o),y(xo.$$.fragment,o),y(qo.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(fs.$$.fragment,o),y(Mo.$$.fragment,o),y(jo.$$.fragment,o),y(Co.$$.fragment,o),y(ms.$$.fragment,o),y(us.$$.fragment,o),y(Ro.$$.fragment,o),y(vs.$$.fragment,o),y(Bo.$$.fragment,o),y(Ao.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y($s.$$.fragment,o),y(Ds.$$.fragment,o),y(Es.$$.fragment,o),y(Io.$$.fragment,o),y(qs.$$.fragment,o),y(Oo.$$.fragment,o),y(No.$$.fragment,o),y(Wo.$$.fragment,o),y(zs.$$.fragment,o),y(Ms.$$.fragment,o),y(Uo.$$.fragment,o),y(Bs.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Xo.$$.fragment,o),y(Ws.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(Hs.$$.fragment,o),y(Us.$$.fragment,o),y(on.$$.fragment,o),y(Xs.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),rl=!0)},o(o){D(d.$$.fragment,o),D(ee.$$.fragment,o),D(kn.$$.fragment,o),D(vn.$$.fragment,o),D(wn.$$.fragment,o),D($n.$$.fragment,o),D(En.$$.fragment,o),D(Vn.$$.fragment,o),D(xn.$$.fragment,o),D(po.$$.fragment,o),D(qn.$$.fragment,o),D(zn.$$.fragment,o),D(Mn.$$.fragment,o),D(Bn.$$.fragment,o),D(fo.$$.fragment,o),D(mo.$$.fragment,o),D(An.$$.fragment,o),D(Ln.$$.fragment,o),D(Sn.$$.fragment,o),D(go.$$.fragment,o),D(In.$$.fragment,o),D(On.$$.fragment,o),D(Un.$$.fragment,o),D(bo.$$.fragment,o),D(ko.$$.fragment,o),D(vo.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(Zn.$$.fragment,o),D(wo.$$.fragment,o),D($o.$$.fragment,o),D(yo.$$.fragment,o),D(Do.$$.fragment,o),D(Eo.$$.fragment,o),D(es.$$.fragment,o),D(ts.$$.fragment,o),D(rs.$$.fragment,o),D(Vo.$$.fragment,o),D(xo.$$.fragment,o),D(qo.$$.fragment,o),D(is.$$.fragment,o),D(ls.$$.fragment,o),D(fs.$$.fragment,o),D(Mo.$$.fragment,o),D(jo.$$.fragment,o),D(Co.$$.fragment,o),D(ms.$$.fragment,o),D(us.$$.fragment,o),D(Ro.$$.fragment,o),D(vs.$$.fragment,o),D(Bo.$$.fragment,o),D(Ao.$$.fragment,o),D(Ts.$$.fragment,o),D(ws.$$.fragment,o),D($s.$$.fragment,o),D(Ds.$$.fragment,o),D(Es.$$.fragment,o),D(Io.$$.fragment,o),D(qs.$$.fragment,o),D(Oo.$$.fragment,o),D(No.$$.fragment,o),D(Wo.$$.fragment,o),D(zs.$$.fragment,o),D(Ms.$$.fragment,o),D(Uo.$$.fragment,o),D(Bs.$$.fragment,o),D(Qo.$$.fragment,o),D(Go.$$.fragment,o),D(Ko.$$.fragment,o),D(As.$$.fragment,o),D(Ls.$$.fragment,o),D(Xo.$$.fragment,o),D(Ws.$$.fragment,o),D(Yo.$$.fragment,o),D(Zo.$$.fragment,o),D(en.$$.fragment,o),D(Hs.$$.fragment,o),D(Us.$$.fragment,o),D(on.$$.fragment,o),D(Xs.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),rl=!1},d(o){t(l),o&&t(g),o&&t(c),E(d),o&&t(J),o&&t(q),E(ee),o&&t(re),o&&t(N),o&&t(j),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(O),o&&t(X),o&&t(V),o&&t(G),o&&t(De),o&&t(C),o&&t(zi),o&&t(tt),o&&t(Mi),o&&t(xt),E(kn),o&&t(ji),o&&t(pt),E(vn),o&&t(Ci),o&&t(Mt),E(wn),o&&t(Pi),o&&t(Me),E($n),E(En),E(Vn),E(xn),E(po),E(qn),o&&t(Ri),o&&t(Pt),E(zn),o&&t(Bi),o&&t(Xe),E(Mn),E(Bn),E(fo),E(mo),o&&t(Ai),o&&t(Bt),E(An),o&&t(Li),o&&t(ht),E(Ln),E(Sn),E(go),o&&t(Si),o&&t(At),E(In),o&&t(Ii),o&&t(Ye),E(On),E(Un),E(bo),E(ko),E(vo),o&&t(Oi),o&&t(It),E(Qn),o&&t(Ni),o&&t(Ae),E(Gn),E(Zn),E(wo),E($o),E(yo),E(Do),E(Eo),o&&t(Wi),o&&t(Nt),E(es),o&&t(Hi),o&&t(Le),E(ts),E(rs),E(Vo),E(xo),E(qo),o&&t(Ui),o&&t(Ht),E(is),o&&t(Qi),o&&t(Se),E(ls),E(fs),E(Mo),E(jo),E(Co),o&&t(Gi),o&&t(Gt),E(ms),o&&t(Ki),o&&t(Ie),E(us),E(Ro),E(vs),E(Bo),E(Ao),o&&t(Ji),o&&t(Jt),E(Ts),o&&t(Xi),o&&t(ft),E(ws),E($s),o&&t(Yi),o&&t(Xt),E(Ds),o&&t(Zi),o&&t(Oe),E(Es),E(Io),E(qs),E(Oo),E(No),E(Wo),o&&t(el),o&&t(eo),E(zs),o&&t(tl),o&&t(je),E(Ms),E(Uo),E(Bs),E(Qo),E(Go),E(Ko),o&&t(ol),o&&t(oo),E(As),o&&t(nl),o&&t(Ce),E(Ls),E(Xo),E(Ws),E(Yo),E(Zo),E(en),o&&t(sl),o&&t(so),E(Hs),o&&t(al),o&&t(Pe),E(Us),E(on),E(Xs),E(nn),E(sn),E(an)}}}const R_={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function B_(F){return Xg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class W_ extends Qg{constructor(l){super();Gg(this,l,B_,P_,Kg,{})}}export{W_ as default,R_ as metadata};
