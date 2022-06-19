import{S as Rc,i as Jc,s as Kc,e as i,k as m,w as $,t as a,M as Gc,c as l,d as o,m as u,a as d,x as v,h as r,b as f,G as e,g as k,y as w,q as T,o as y,B as N,v as Xc,L as I}from"../../chunks/vendor-hf-doc-builder.js";import{T as bt}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as D}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as L}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yc(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import NeZhaConfig, NeZhaModel

# Initializing an NeZha configuration
configuration = NeZhaConfig()

# Initializing a model from the NeZha-base style configuration model
model = NeZhaModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> NeZhaConfig, NeZhaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an NeZha configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = NeZhaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the NeZha-base style configuration model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function eh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function th(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaModel
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaModel.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaModel.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function oh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function nh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForPreTraining.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForPreTraining.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function sh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ah(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForMaskedLM.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function rh(z){let s,g;return s=new D({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function ih(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function lh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForNextSentencePrediction.from_pretrained("sijunhe/nezha-cn-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function dh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ch(z){let s,g,c,h,b;return h=new D({props:{code:`import torch
from transformers import BertTokenizer, NeZhaForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForSequenceClassification.from_pretrained("sijunhe/nezha-cn-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),g=a("Example of single-label classification:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example of single-label classification:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function hh(z){let s,g;return s=new D({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = NeZhaForSequenceClassification.from_pretrained("sijunhe/nezha-cn-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function ph(z){let s,g,c,h,b;return h=new D({props:{code:`import torch
from transformers import BertTokenizer, NeZhaForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForSequenceClassification.from_pretrained("sijunhe/nezha-cn-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),g=a("Example of multi-label classification:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example of multi-label classification:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function mh(z){let s,g;return s=new D({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = NeZhaForSequenceClassification.from_pretrained(
    "sijunhe/nezha-cn-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function uh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function fh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForMultipleChoice.from_pretrained("sijunhe/nezha-cn-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function gh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function _h(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForTokenClassification.from_pretrained("sijunhe/nezha-cn-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function bh(z){let s,g;return s=new D({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function kh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function $h(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("sijunhe/nezha-cn-base")
model = NeZhaForQuestionAnswering.from_pretrained("sijunhe/nezha-cn-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, NeZhaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NeZhaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;sijunhe/nezha-cn-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function vh(z){let s,g;return s=new D({props:{code:`# target is "nice puppet"
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
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function wh(z){let s,g,c,h,b,n,p,F,ma,gs,pe,Ce,dn,kt,ua,cn,fa,_s,Ee,ga,$t,_a,ba,bs,xo,ka,ks,jo,hn,$a,$s,te,va,vt,wa,Ta,wt,ya,Na,vs,me,Ae,pn,Tt,za,mn,Fa,ws,R,yt,Za,Nt,Ma,Po,xa,ja,Pa,ue,qa,qo,Ca,Ea,Co,Aa,Oa,Sa,Oe,Ts,fe,Se,un,zt,La,fn,Ia,ys,Z,Ft,Da,gn,Ba,Wa,Zt,Ha,Eo,Qa,Ua,Va,Mt,Ra,xt,Ja,Ka,Ga,jt,Xa,Pt,Ya,er,tr,x,or,_n,nr,sr,bn,ar,rr,kn,ir,lr,$n,dr,cr,vn,hr,pr,wn,mr,ur,fr,J,qt,gr,ge,_r,Ao,br,kr,Tn,$r,vr,wr,Le,Tr,Ie,Ns,_e,De,yn,Ct,yr,Nn,Nr,zs,P,Et,zr,be,Fr,zn,Zr,Mr,Fn,xr,jr,Pr,At,qr,Oo,Cr,Er,Ar,Ot,Or,St,Sr,Lr,Ir,K,Lt,Dr,ke,Br,So,Wr,Hr,Zn,Qr,Ur,Vr,Be,Rr,We,Fs,$e,He,Mn,It,Jr,xn,Kr,Zs,q,Dt,Gr,Bt,Xr,jn,Yr,ei,ti,Wt,oi,Lo,ni,si,ai,Ht,ri,Qt,ii,li,di,B,Ut,ci,ve,hi,Io,pi,mi,Pn,ui,fi,gi,Qe,_i,Ue,bi,Ve,Ms,we,Re,qn,Vt,ki,Cn,$i,xs,C,Rt,vi,Jt,wi,En,Ti,yi,Ni,Kt,zi,Do,Fi,Zi,Mi,Gt,xi,Xt,ji,Pi,qi,G,Yt,Ci,Te,Ei,Bo,Ai,Oi,An,Si,Li,Ii,Je,Di,Ke,js,ye,Ge,On,eo,Bi,Sn,Wi,Ps,E,to,Hi,Ln,Qi,Ui,oo,Vi,Wo,Ri,Ji,Ki,no,Gi,so,Xi,Yi,el,M,ao,tl,Ne,ol,Ho,nl,sl,In,al,rl,il,Xe,ll,Ye,dl,et,cl,tt,hl,ot,qs,ze,nt,Dn,ro,pl,Bn,ml,Cs,A,io,ul,Wn,fl,gl,lo,_l,Qo,bl,kl,$l,co,vl,ho,wl,Tl,yl,X,po,Nl,Fe,zl,Uo,Fl,Zl,Hn,Ml,xl,jl,st,Pl,at,Es,Ze,rt,Qn,mo,ql,Un,Cl,As,O,uo,El,Vn,Al,Ol,fo,Sl,Vo,Ll,Il,Dl,go,Bl,_o,Wl,Hl,Ql,W,bo,Ul,Me,Vl,Ro,Rl,Jl,Rn,Kl,Gl,Xl,it,Yl,lt,ed,dt,Os,xe,ct,Jn,ko,td,Kn,od,Ss,S,$o,nd,je,sd,Gn,ad,rd,Xn,id,ld,dd,vo,cd,Jo,hd,pd,md,wo,ud,To,fd,gd,_d,H,yo,bd,Pe,kd,Ko,$d,vd,Yn,wd,Td,yd,ht,Nd,pt,zd,mt,Ls;return n=new ee({}),kt=new ee({}),Tt=new ee({}),yt=new j({props:{name:"class transformers.NeZhaConfig",anchor:"transformers.NeZhaConfig",parameters:[{name:"vocab_size",val:" = 21128"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"max_relative_position",val:" = 64"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NeZhaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, optional, defaults to 21128) &#x2014;
Vocabulary size of the ALBERT model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaModel">NeZhaModel</a>.`,name:"vocab_size"},{anchor:"transformers.NeZhaConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, optional, defaults to 128) &#x2014;
Dimensionality of vocabulary embeddings.`,name:"embedding_size"},{anchor:"transformers.NeZhaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, optional, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.NeZhaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, optional, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.NeZhaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, optional, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.NeZhaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, optional, defaults to 3072) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.NeZhaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, optional, defaults to &#x201C;gelu&#x201D;) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler.`,name:"hidden_act"},{anchor:"transformers.NeZhaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.NeZhaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.NeZhaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, optional, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.NeZhaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, optional, defaults to 2) &#x2014;
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaModel">NeZhaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.NeZhaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, optional, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.NeZhaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.NeZhaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, optional, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/configuration_nezha.py#L7"}}),Oe=new L({props:{anchor:"transformers.NeZhaConfig.example",$$slots:{default:[Yc]},$$scope:{ctx:z}}}),zt=new ee({}),Ft=new j({props:{name:"class transformers.NeZhaModel",anchor:"transformers.NeZhaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.NeZhaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L855"}}),qt=new j({props:{name:"forward",anchor:"transformers.NeZhaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NeZhaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.NeZhaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.NeZhaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.NeZhaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L894",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new bt({props:{$$slots:{default:[eh]},$$scope:{ctx:z}}}),Ie=new L({props:{anchor:"transformers.NeZhaModel.forward.example",$$slots:{default:[th]},$$scope:{ctx:z}}}),Ct=new ee({}),Et=new j({props:{name:"class transformers.NeZhaForPreTraining",anchor:"transformers.NeZhaForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1036"}}),Lt=new j({props:{name:"forward",anchor:"transformers.NeZhaForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
next_sentence_label (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>):
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence
pair (see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.
kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1052",returnDescription:`
<p>A <code>transformers.models.nezha.modeling_nezha.NeZhaForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
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
<p><code>transformers.models.nezha.modeling_nezha.NeZhaForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new bt({props:{$$slots:{default:[oh]},$$scope:{ctx:z}}}),We=new L({props:{anchor:"transformers.NeZhaForPreTraining.forward.example",$$slots:{default:[nh]},$$scope:{ctx:z}}}),It=new ee({}),Dt=new j({props:{name:"class transformers.NeZhaForMaskedLM",anchor:"transformers.NeZhaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1136"}}),Ut=new j({props:{name:"forward",anchor:"transformers.NeZhaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NeZhaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1162",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qe=new bt({props:{$$slots:{default:[sh]},$$scope:{ctx:z}}}),Ue=new L({props:{anchor:"transformers.NeZhaForMaskedLM.forward.example",$$slots:{default:[ah]},$$scope:{ctx:z}}}),Ve=new L({props:{anchor:"transformers.NeZhaForMaskedLM.forward.example-2",$$slots:{default:[rh]},$$scope:{ctx:z}}}),Vt=new ee({}),Rt=new j({props:{name:"class transformers.NeZhaForNextSentencePrediction",anchor:"transformers.NeZhaForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1245"}}),Yt=new j({props:{name:"forward",anchor:"transformers.NeZhaForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NeZhaForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1255",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) \u2014 Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new bt({props:{$$slots:{default:[ih]},$$scope:{ctx:z}}}),Ke=new L({props:{anchor:"transformers.NeZhaForNextSentencePrediction.forward.example",$$slots:{default:[lh]},$$scope:{ctx:z}}}),eo=new ee({}),to=new j({props:{name:"class transformers.NeZhaForSequenceClassification",anchor:"transformers.NeZhaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1348"}}),ao=new j({props:{name:"forward",anchor:"transformers.NeZhaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NeZhaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1364",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xe=new bt({props:{$$slots:{default:[dh]},$$scope:{ctx:z}}}),Ye=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example",$$slots:{default:[ch]},$$scope:{ctx:z}}}),et=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example-2",$$slots:{default:[hh]},$$scope:{ctx:z}}}),tt=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example-3",$$slots:{default:[ph]},$$scope:{ctx:z}}}),ot=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example-4",$$slots:{default:[mh]},$$scope:{ctx:z}}}),ro=new ee({}),io=new j({props:{name:"class transformers.NeZhaForMultipleChoice",anchor:"transformers.NeZhaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1448"}}),po=new j({props:{name:"forward",anchor:"transformers.NeZhaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NeZhaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1462",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new bt({props:{$$slots:{default:[uh]},$$scope:{ctx:z}}}),at=new L({props:{anchor:"transformers.NeZhaForMultipleChoice.forward.example",$$slots:{default:[fh]},$$scope:{ctx:z}}}),mo=new ee({}),uo=new j({props:{name:"class transformers.NeZhaForTokenClassification",anchor:"transformers.NeZhaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1541"}}),bo=new j({props:{name:"forward",anchor:"transformers.NeZhaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NeZhaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1559",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new bt({props:{$$slots:{default:[gh]},$$scope:{ctx:z}}}),lt=new L({props:{anchor:"transformers.NeZhaForTokenClassification.forward.example",$$slots:{default:[_h]},$$scope:{ctx:z}}}),dt=new L({props:{anchor:"transformers.NeZhaForTokenClassification.forward.example-2",$$slots:{default:[bh]},$$scope:{ctx:z}}}),ko=new ee({}),$o=new j({props:{name:"class transformers.NeZhaForQuestionAnswering",anchor:"transformers.NeZhaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1624"}}),yo=new j({props:{name:"forward",anchor:"transformers.NeZhaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17776/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17776/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17776/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.NeZhaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1638",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig"
>NeZhaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17776/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new bt({props:{$$slots:{default:[kh]},$$scope:{ctx:z}}}),pt=new L({props:{anchor:"transformers.NeZhaForQuestionAnswering.forward.example",$$slots:{default:[$h]},$$scope:{ctx:z}}}),mt=new L({props:{anchor:"transformers.NeZhaForQuestionAnswering.forward.example-2",$$slots:{default:[vh]},$$scope:{ctx:z}}}),{c(){s=i("meta"),g=m(),c=i("h1"),h=i("a"),b=i("span"),$(n.$$.fragment),p=m(),F=i("span"),ma=a("NeZha"),gs=m(),pe=i("h2"),Ce=i("a"),dn=i("span"),$(kt.$$.fragment),ua=m(),cn=i("span"),fa=a("Overview"),_s=m(),Ee=i("p"),ga=a("The NeZha model was proposed in "),$t=i("a"),_a=a("NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),ba=a(" by Junqiu Wei et al."),bs=m(),xo=i("p"),ka=a("The abstract from the paper is the following:"),ks=m(),jo=i("p"),hn=i("em"),$a=a(`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),$s=m(),te=i("p"),va=a("This model was contributed by "),vt=i("a"),wa=a("sijunhe"),Ta=a(". The original code can be found "),wt=i("a"),ya=a("here"),Na=a("."),vs=m(),me=i("h2"),Ae=i("a"),pn=i("span"),$(Tt.$$.fragment),za=m(),mn=i("span"),Fa=a("NeZhaConfig"),ws=m(),R=i("div"),$(yt.$$.fragment),Za=m(),Nt=i("p"),Ma=a("This is the configuration class to store the configuration of an "),Po=i("a"),xa=a("NeZhaModel"),ja=a(`. It is used to
instantiate an NeZha model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the NeZha base architecture.`),Pa=m(),ue=i("p"),qa=a("Configuration objects inherit from "),qo=i("a"),Ca=a("PretrainedConfig"),Ea=a(` and can be used to control the model
outputs. Read the documentation from `),Co=i("a"),Aa=a("PretrainedConfig"),Oa=a(" for more information."),Sa=m(),$(Oe.$$.fragment),Ts=m(),fe=i("h2"),Se=i("a"),un=i("span"),$(zt.$$.fragment),La=m(),fn=i("span"),Ia=a("NeZhaModel"),ys=m(),Z=i("div"),$(Ft.$$.fragment),Da=m(),gn=i("p"),Ba=a("The bare NeZha Model transformer outputting raw hidden-states without any specific head on top."),Wa=m(),Zt=i("p"),Ha=a("This model inherits from "),Eo=i("a"),Qa=a("PreTrainedModel"),Ua=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Va=m(),Mt=i("p"),Ra=a("This model is also a PyTorch "),xt=i("a"),Ja=a("torch.nn.Module"),Ka=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ga=m(),jt=i("p"),Xa=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Pt=i("a"),Ya=a(`Attention is
all you need`),er=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),tr=m(),x=i("p"),or=a("To behave as an decoder the model needs to be initialized with the "),_n=i("code"),nr=a("is_decoder"),sr=a(` argument of the configuration set
to `),bn=i("code"),ar=a("True"),rr=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),kn=i("code"),ir=a("is_decoder"),lr=a(` argument and
`),$n=i("code"),dr=a("add_cross_attention"),cr=a(" set to "),vn=i("code"),hr=a("True"),pr=a("; an "),wn=i("code"),mr=a("encoder_hidden_states"),ur=a(" is then expected as an input to the forward pass."),fr=m(),J=i("div"),$(qt.$$.fragment),gr=m(),ge=i("p"),_r=a("The "),Ao=i("a"),br=a("NeZhaModel"),kr=a(" forward method, overrides the "),Tn=i("code"),$r=a("__call__"),vr=a(" special method."),wr=m(),$(Le.$$.fragment),Tr=m(),$(Ie.$$.fragment),Ns=m(),_e=i("h2"),De=i("a"),yn=i("span"),$(Ct.$$.fragment),yr=m(),Nn=i("span"),Nr=a("NeZhaForPreTraining"),zs=m(),P=i("div"),$(Et.$$.fragment),zr=m(),be=i("p"),Fr=a("NeZha Model with two heads on top as done during the pretraining: a "),zn=i("code"),Zr=a("masked language modeling"),Mr=a(" head and a "),Fn=i("code"),xr=a("next sentence prediction (classification)"),jr=a(" head."),Pr=m(),At=i("p"),qr=a("This model inherits from "),Oo=i("a"),Cr=a("PreTrainedModel"),Er=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ar=m(),Ot=i("p"),Or=a("This model is also a PyTorch "),St=i("a"),Sr=a("torch.nn.Module"),Lr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ir=m(),K=i("div"),$(Lt.$$.fragment),Dr=m(),ke=i("p"),Br=a("The "),So=i("a"),Wr=a("NeZhaForPreTraining"),Hr=a(" forward method, overrides the "),Zn=i("code"),Qr=a("__call__"),Ur=a(" special method."),Vr=m(),$(Be.$$.fragment),Rr=m(),$(We.$$.fragment),Fs=m(),$e=i("h2"),He=i("a"),Mn=i("span"),$(It.$$.fragment),Jr=m(),xn=i("span"),Kr=a("NeZhaForMaskedLM"),Zs=m(),q=i("div"),$(Dt.$$.fragment),Gr=m(),Bt=i("p"),Xr=a("NeZha Model with a "),jn=i("code"),Yr=a("language modeling"),ei=a(" head on top."),ti=m(),Wt=i("p"),oi=a("This model inherits from "),Lo=i("a"),ni=a("PreTrainedModel"),si=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai=m(),Ht=i("p"),ri=a("This model is also a PyTorch "),Qt=i("a"),ii=a("torch.nn.Module"),li=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di=m(),B=i("div"),$(Ut.$$.fragment),ci=m(),ve=i("p"),hi=a("The "),Io=i("a"),pi=a("NeZhaForMaskedLM"),mi=a(" forward method, overrides the "),Pn=i("code"),ui=a("__call__"),fi=a(" special method."),gi=m(),$(Qe.$$.fragment),_i=m(),$(Ue.$$.fragment),bi=m(),$(Ve.$$.fragment),Ms=m(),we=i("h2"),Re=i("a"),qn=i("span"),$(Vt.$$.fragment),ki=m(),Cn=i("span"),$i=a("NeZhaForNextSentencePrediction"),xs=m(),C=i("div"),$(Rt.$$.fragment),vi=m(),Jt=i("p"),wi=a("NeZha Model with a "),En=i("code"),Ti=a("next sentence prediction (classification)"),yi=a(" head on top."),Ni=m(),Kt=i("p"),zi=a("This model inherits from "),Do=i("a"),Fi=a("PreTrainedModel"),Zi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=m(),Gt=i("p"),xi=a("This model is also a PyTorch "),Xt=i("a"),ji=a("torch.nn.Module"),Pi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qi=m(),G=i("div"),$(Yt.$$.fragment),Ci=m(),Te=i("p"),Ei=a("The "),Bo=i("a"),Ai=a("NeZhaForNextSentencePrediction"),Oi=a(" forward method, overrides the "),An=i("code"),Si=a("__call__"),Li=a(" special method."),Ii=m(),$(Je.$$.fragment),Di=m(),$(Ke.$$.fragment),js=m(),ye=i("h2"),Ge=i("a"),On=i("span"),$(eo.$$.fragment),Bi=m(),Sn=i("span"),Wi=a("NeZhaForSequenceClassification"),Ps=m(),E=i("div"),$(to.$$.fragment),Hi=m(),Ln=i("p"),Qi=a(`NeZha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ui=m(),oo=i("p"),Vi=a("This model inherits from "),Wo=i("a"),Ri=a("PreTrainedModel"),Ji=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ki=m(),no=i("p"),Gi=a("This model is also a PyTorch "),so=i("a"),Xi=a("torch.nn.Module"),Yi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),el=m(),M=i("div"),$(ao.$$.fragment),tl=m(),Ne=i("p"),ol=a("The "),Ho=i("a"),nl=a("NeZhaForSequenceClassification"),sl=a(" forward method, overrides the "),In=i("code"),al=a("__call__"),rl=a(" special method."),il=m(),$(Xe.$$.fragment),ll=m(),$(Ye.$$.fragment),dl=m(),$(et.$$.fragment),cl=m(),$(tt.$$.fragment),hl=m(),$(ot.$$.fragment),qs=m(),ze=i("h2"),nt=i("a"),Dn=i("span"),$(ro.$$.fragment),pl=m(),Bn=i("span"),ml=a("NeZhaForMultipleChoice"),Cs=m(),A=i("div"),$(io.$$.fragment),ul=m(),Wn=i("p"),fl=a(`NeZha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),gl=m(),lo=i("p"),_l=a("This model inherits from "),Qo=i("a"),bl=a("PreTrainedModel"),kl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$l=m(),co=i("p"),vl=a("This model is also a PyTorch "),ho=i("a"),wl=a("torch.nn.Module"),Tl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl=m(),X=i("div"),$(po.$$.fragment),Nl=m(),Fe=i("p"),zl=a("The "),Uo=i("a"),Fl=a("NeZhaForMultipleChoice"),Zl=a(" forward method, overrides the "),Hn=i("code"),Ml=a("__call__"),xl=a(" special method."),jl=m(),$(st.$$.fragment),Pl=m(),$(at.$$.fragment),Es=m(),Ze=i("h2"),rt=i("a"),Qn=i("span"),$(mo.$$.fragment),ql=m(),Un=i("span"),Cl=a("NeZhaForTokenClassification"),As=m(),O=i("div"),$(uo.$$.fragment),El=m(),Vn=i("p"),Al=a(`NeZha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ol=m(),fo=i("p"),Sl=a("This model inherits from "),Vo=i("a"),Ll=a("PreTrainedModel"),Il=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl=m(),go=i("p"),Bl=a("This model is also a PyTorch "),_o=i("a"),Wl=a("torch.nn.Module"),Hl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ql=m(),W=i("div"),$(bo.$$.fragment),Ul=m(),Me=i("p"),Vl=a("The "),Ro=i("a"),Rl=a("NeZhaForTokenClassification"),Jl=a(" forward method, overrides the "),Rn=i("code"),Kl=a("__call__"),Gl=a(" special method."),Xl=m(),$(it.$$.fragment),Yl=m(),$(lt.$$.fragment),ed=m(),$(dt.$$.fragment),Os=m(),xe=i("h2"),ct=i("a"),Jn=i("span"),$(ko.$$.fragment),td=m(),Kn=i("span"),od=a("NeZhaForQuestionAnswering"),Ss=m(),S=i("div"),$($o.$$.fragment),nd=m(),je=i("p"),sd=a(`NeZha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gn=i("code"),ad=a("span start logits"),rd=a(" and "),Xn=i("code"),id=a("span end logits"),ld=a(")."),dd=m(),vo=i("p"),cd=a("This model inherits from "),Jo=i("a"),hd=a("PreTrainedModel"),pd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md=m(),wo=i("p"),ud=a("This model is also a PyTorch "),To=i("a"),fd=a("torch.nn.Module"),gd=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_d=m(),H=i("div"),$(yo.$$.fragment),bd=m(),Pe=i("p"),kd=a("The "),Ko=i("a"),$d=a("NeZhaForQuestionAnswering"),vd=a(" forward method, overrides the "),Yn=i("code"),wd=a("__call__"),Td=a(" special method."),yd=m(),$(ht.$$.fragment),Nd=m(),$(pt.$$.fragment),zd=m(),$(mt.$$.fragment),this.h()},l(t){const _=Gc('[data-svelte="svelte-1phssyn"]',document.head);s=l(_,"META",{name:!0,content:!0}),_.forEach(o),g=u(t),c=l(t,"H1",{class:!0});var No=d(c);h=l(No,"A",{id:!0,class:!0,href:!0});var es=d(h);b=l(es,"SPAN",{});var ts=d(b);v(n.$$.fragment,ts),ts.forEach(o),es.forEach(o),p=u(No),F=l(No,"SPAN",{});var os=d(F);ma=r(os,"NeZha"),os.forEach(o),No.forEach(o),gs=u(t),pe=l(t,"H2",{class:!0});var zo=d(pe);Ce=l(zo,"A",{id:!0,class:!0,href:!0});var ns=d(Ce);dn=l(ns,"SPAN",{});var ss=d(dn);v(kt.$$.fragment,ss),ss.forEach(o),ns.forEach(o),ua=u(zo),cn=l(zo,"SPAN",{});var as=d(cn);fa=r(as,"Overview"),as.forEach(o),zo.forEach(o),_s=u(t),Ee=l(t,"P",{});var Fo=d(Ee);ga=r(Fo,"The NeZha model was proposed in "),$t=l(Fo,"A",{href:!0,rel:!0});var rs=d($t);_a=r(rs,"NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),rs.forEach(o),ba=r(Fo," by Junqiu Wei et al."),Fo.forEach(o),bs=u(t),xo=l(t,"P",{});var is=d(xo);ka=r(is,"The abstract from the paper is the following:"),is.forEach(o),ks=u(t),jo=l(t,"P",{});var ls=d(jo);hn=l(ls,"EM",{});var ds=d(hn);$a=r(ds,`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),ds.forEach(o),ls.forEach(o),$s=u(t),te=l(t,"P",{});var qe=d(te);va=r(qe,"This model was contributed by "),vt=l(qe,"A",{href:!0,rel:!0});var cs=d(vt);wa=r(cs,"sijunhe"),cs.forEach(o),Ta=r(qe,". The original code can be found "),wt=l(qe,"A",{href:!0,rel:!0});var hs=d(wt);ya=r(hs,"here"),hs.forEach(o),Na=r(qe,"."),qe.forEach(o),vs=u(t),me=l(t,"H2",{class:!0});var Zo=d(me);Ae=l(Zo,"A",{id:!0,class:!0,href:!0});var ps=d(Ae);pn=l(ps,"SPAN",{});var ms=d(pn);v(Tt.$$.fragment,ms),ms.forEach(o),ps.forEach(o),za=u(Zo),mn=l(Zo,"SPAN",{});var us=d(mn);Fa=r(us,"NeZhaConfig"),us.forEach(o),Zo.forEach(o),ws=u(t),R=l(t,"DIV",{class:!0});var Y=d(R);v(yt.$$.fragment,Y),Za=u(Y),Nt=l(Y,"P",{});var Mo=d(Nt);Ma=r(Mo,"This is the configuration class to store the configuration of an "),Po=l(Mo,"A",{href:!0});var fs=d(Po);xa=r(fs,"NeZhaModel"),fs.forEach(o),ja=r(Mo,`. It is used to
instantiate an NeZha model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the NeZha base architecture.`),Mo.forEach(o),Pa=u(Y),ue=l(Y,"P",{});var Go=d(ue);qa=r(Go,"Configuration objects inherit from "),qo=l(Go,"A",{href:!0});var Fd=d(qo);Ca=r(Fd,"PretrainedConfig"),Fd.forEach(o),Ea=r(Go,` and can be used to control the model
outputs. Read the documentation from `),Co=l(Go,"A",{href:!0});var Zd=d(Co);Aa=r(Zd,"PretrainedConfig"),Zd.forEach(o),Oa=r(Go," for more information."),Go.forEach(o),Sa=u(Y),v(Oe.$$.fragment,Y),Y.forEach(o),Ts=u(t),fe=l(t,"H2",{class:!0});var Is=d(fe);Se=l(Is,"A",{id:!0,class:!0,href:!0});var Md=d(Se);un=l(Md,"SPAN",{});var xd=d(un);v(zt.$$.fragment,xd),xd.forEach(o),Md.forEach(o),La=u(Is),fn=l(Is,"SPAN",{});var jd=d(fn);Ia=r(jd,"NeZhaModel"),jd.forEach(o),Is.forEach(o),ys=u(t),Z=l(t,"DIV",{class:!0});var Q=d(Z);v(Ft.$$.fragment,Q),Da=u(Q),gn=l(Q,"P",{});var Pd=d(gn);Ba=r(Pd,"The bare NeZha Model transformer outputting raw hidden-states without any specific head on top."),Pd.forEach(o),Wa=u(Q),Zt=l(Q,"P",{});var Ds=d(Zt);Ha=r(Ds,"This model inherits from "),Eo=l(Ds,"A",{href:!0});var qd=d(Eo);Qa=r(qd,"PreTrainedModel"),qd.forEach(o),Ua=r(Ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ds.forEach(o),Va=u(Q),Mt=l(Q,"P",{});var Bs=d(Mt);Ra=r(Bs,"This model is also a PyTorch "),xt=l(Bs,"A",{href:!0,rel:!0});var Cd=d(xt);Ja=r(Cd,"torch.nn.Module"),Cd.forEach(o),Ka=r(Bs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bs.forEach(o),Ga=u(Q),jt=l(Q,"P",{});var Ws=d(jt);Xa=r(Ws,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Pt=l(Ws,"A",{href:!0,rel:!0});var Ed=d(Pt);Ya=r(Ed,`Attention is
all you need`),Ed.forEach(o),er=r(Ws,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ws.forEach(o),tr=u(Q),x=l(Q,"P",{});var U=d(x);or=r(U,"To behave as an decoder the model needs to be initialized with the "),_n=l(U,"CODE",{});var Ad=d(_n);nr=r(Ad,"is_decoder"),Ad.forEach(o),sr=r(U,` argument of the configuration set
to `),bn=l(U,"CODE",{});var Od=d(bn);ar=r(Od,"True"),Od.forEach(o),rr=r(U,". To be used in a Seq2Seq model, the model needs to initialized with both "),kn=l(U,"CODE",{});var Sd=d(kn);ir=r(Sd,"is_decoder"),Sd.forEach(o),lr=r(U,` argument and
`),$n=l(U,"CODE",{});var Ld=d($n);dr=r(Ld,"add_cross_attention"),Ld.forEach(o),cr=r(U," set to "),vn=l(U,"CODE",{});var Id=d(vn);hr=r(Id,"True"),Id.forEach(o),pr=r(U,"; an "),wn=l(U,"CODE",{});var Dd=d(wn);mr=r(Dd,"encoder_hidden_states"),Dd.forEach(o),ur=r(U," is then expected as an input to the forward pass."),U.forEach(o),fr=u(Q),J=l(Q,"DIV",{class:!0});var ut=d(J);v(qt.$$.fragment,ut),gr=u(ut),ge=l(ut,"P",{});var Xo=d(ge);_r=r(Xo,"The "),Ao=l(Xo,"A",{href:!0});var Bd=d(Ao);br=r(Bd,"NeZhaModel"),Bd.forEach(o),kr=r(Xo," forward method, overrides the "),Tn=l(Xo,"CODE",{});var Wd=d(Tn);$r=r(Wd,"__call__"),Wd.forEach(o),vr=r(Xo," special method."),Xo.forEach(o),wr=u(ut),v(Le.$$.fragment,ut),Tr=u(ut),v(Ie.$$.fragment,ut),ut.forEach(o),Q.forEach(o),Ns=u(t),_e=l(t,"H2",{class:!0});var Hs=d(_e);De=l(Hs,"A",{id:!0,class:!0,href:!0});var Hd=d(De);yn=l(Hd,"SPAN",{});var Qd=d(yn);v(Ct.$$.fragment,Qd),Qd.forEach(o),Hd.forEach(o),yr=u(Hs),Nn=l(Hs,"SPAN",{});var Ud=d(Nn);Nr=r(Ud,"NeZhaForPreTraining"),Ud.forEach(o),Hs.forEach(o),zs=u(t),P=l(t,"DIV",{class:!0});var oe=d(P);v(Et.$$.fragment,oe),zr=u(oe),be=l(oe,"P",{});var Yo=d(be);Fr=r(Yo,"NeZha Model with two heads on top as done during the pretraining: a "),zn=l(Yo,"CODE",{});var Vd=d(zn);Zr=r(Vd,"masked language modeling"),Vd.forEach(o),Mr=r(Yo," head and a "),Fn=l(Yo,"CODE",{});var Rd=d(Fn);xr=r(Rd,"next sentence prediction (classification)"),Rd.forEach(o),jr=r(Yo," head."),Yo.forEach(o),Pr=u(oe),At=l(oe,"P",{});var Qs=d(At);qr=r(Qs,"This model inherits from "),Oo=l(Qs,"A",{href:!0});var Jd=d(Oo);Cr=r(Jd,"PreTrainedModel"),Jd.forEach(o),Er=r(Qs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qs.forEach(o),Ar=u(oe),Ot=l(oe,"P",{});var Us=d(Ot);Or=r(Us,"This model is also a PyTorch "),St=l(Us,"A",{href:!0,rel:!0});var Kd=d(St);Sr=r(Kd,"torch.nn.Module"),Kd.forEach(o),Lr=r(Us,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Us.forEach(o),Ir=u(oe),K=l(oe,"DIV",{class:!0});var ft=d(K);v(Lt.$$.fragment,ft),Dr=u(ft),ke=l(ft,"P",{});var en=d(ke);Br=r(en,"The "),So=l(en,"A",{href:!0});var Gd=d(So);Wr=r(Gd,"NeZhaForPreTraining"),Gd.forEach(o),Hr=r(en," forward method, overrides the "),Zn=l(en,"CODE",{});var Xd=d(Zn);Qr=r(Xd,"__call__"),Xd.forEach(o),Ur=r(en," special method."),en.forEach(o),Vr=u(ft),v(Be.$$.fragment,ft),Rr=u(ft),v(We.$$.fragment,ft),ft.forEach(o),oe.forEach(o),Fs=u(t),$e=l(t,"H2",{class:!0});var Vs=d($e);He=l(Vs,"A",{id:!0,class:!0,href:!0});var Yd=d(He);Mn=l(Yd,"SPAN",{});var ec=d(Mn);v(It.$$.fragment,ec),ec.forEach(o),Yd.forEach(o),Jr=u(Vs),xn=l(Vs,"SPAN",{});var tc=d(xn);Kr=r(tc,"NeZhaForMaskedLM"),tc.forEach(o),Vs.forEach(o),Zs=u(t),q=l(t,"DIV",{class:!0});var ne=d(q);v(Dt.$$.fragment,ne),Gr=u(ne),Bt=l(ne,"P",{});var Rs=d(Bt);Xr=r(Rs,"NeZha Model with a "),jn=l(Rs,"CODE",{});var oc=d(jn);Yr=r(oc,"language modeling"),oc.forEach(o),ei=r(Rs," head on top."),Rs.forEach(o),ti=u(ne),Wt=l(ne,"P",{});var Js=d(Wt);oi=r(Js,"This model inherits from "),Lo=l(Js,"A",{href:!0});var nc=d(Lo);ni=r(nc,"PreTrainedModel"),nc.forEach(o),si=r(Js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Js.forEach(o),ai=u(ne),Ht=l(ne,"P",{});var Ks=d(Ht);ri=r(Ks,"This model is also a PyTorch "),Qt=l(Ks,"A",{href:!0,rel:!0});var sc=d(Qt);ii=r(sc,"torch.nn.Module"),sc.forEach(o),li=r(Ks,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ks.forEach(o),di=u(ne),B=l(ne,"DIV",{class:!0});var se=d(B);v(Ut.$$.fragment,se),ci=u(se),ve=l(se,"P",{});var tn=d(ve);hi=r(tn,"The "),Io=l(tn,"A",{href:!0});var ac=d(Io);pi=r(ac,"NeZhaForMaskedLM"),ac.forEach(o),mi=r(tn," forward method, overrides the "),Pn=l(tn,"CODE",{});var rc=d(Pn);ui=r(rc,"__call__"),rc.forEach(o),fi=r(tn," special method."),tn.forEach(o),gi=u(se),v(Qe.$$.fragment,se),_i=u(se),v(Ue.$$.fragment,se),bi=u(se),v(Ve.$$.fragment,se),se.forEach(o),ne.forEach(o),Ms=u(t),we=l(t,"H2",{class:!0});var Gs=d(we);Re=l(Gs,"A",{id:!0,class:!0,href:!0});var ic=d(Re);qn=l(ic,"SPAN",{});var lc=d(qn);v(Vt.$$.fragment,lc),lc.forEach(o),ic.forEach(o),ki=u(Gs),Cn=l(Gs,"SPAN",{});var dc=d(Cn);$i=r(dc,"NeZhaForNextSentencePrediction"),dc.forEach(o),Gs.forEach(o),xs=u(t),C=l(t,"DIV",{class:!0});var ae=d(C);v(Rt.$$.fragment,ae),vi=u(ae),Jt=l(ae,"P",{});var Xs=d(Jt);wi=r(Xs,"NeZha Model with a "),En=l(Xs,"CODE",{});var cc=d(En);Ti=r(cc,"next sentence prediction (classification)"),cc.forEach(o),yi=r(Xs," head on top."),Xs.forEach(o),Ni=u(ae),Kt=l(ae,"P",{});var Ys=d(Kt);zi=r(Ys,"This model inherits from "),Do=l(Ys,"A",{href:!0});var hc=d(Do);Fi=r(hc,"PreTrainedModel"),hc.forEach(o),Zi=r(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(o),Mi=u(ae),Gt=l(ae,"P",{});var ea=d(Gt);xi=r(ea,"This model is also a PyTorch "),Xt=l(ea,"A",{href:!0,rel:!0});var pc=d(Xt);ji=r(pc,"torch.nn.Module"),pc.forEach(o),Pi=r(ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ea.forEach(o),qi=u(ae),G=l(ae,"DIV",{class:!0});var gt=d(G);v(Yt.$$.fragment,gt),Ci=u(gt),Te=l(gt,"P",{});var on=d(Te);Ei=r(on,"The "),Bo=l(on,"A",{href:!0});var mc=d(Bo);Ai=r(mc,"NeZhaForNextSentencePrediction"),mc.forEach(o),Oi=r(on," forward method, overrides the "),An=l(on,"CODE",{});var uc=d(An);Si=r(uc,"__call__"),uc.forEach(o),Li=r(on," special method."),on.forEach(o),Ii=u(gt),v(Je.$$.fragment,gt),Di=u(gt),v(Ke.$$.fragment,gt),gt.forEach(o),ae.forEach(o),js=u(t),ye=l(t,"H2",{class:!0});var ta=d(ye);Ge=l(ta,"A",{id:!0,class:!0,href:!0});var fc=d(Ge);On=l(fc,"SPAN",{});var gc=d(On);v(eo.$$.fragment,gc),gc.forEach(o),fc.forEach(o),Bi=u(ta),Sn=l(ta,"SPAN",{});var _c=d(Sn);Wi=r(_c,"NeZhaForSequenceClassification"),_c.forEach(o),ta.forEach(o),Ps=u(t),E=l(t,"DIV",{class:!0});var re=d(E);v(to.$$.fragment,re),Hi=u(re),Ln=l(re,"P",{});var bc=d(Ln);Qi=r(bc,`NeZha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),bc.forEach(o),Ui=u(re),oo=l(re,"P",{});var oa=d(oo);Vi=r(oa,"This model inherits from "),Wo=l(oa,"A",{href:!0});var kc=d(Wo);Ri=r(kc,"PreTrainedModel"),kc.forEach(o),Ji=r(oa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oa.forEach(o),Ki=u(re),no=l(re,"P",{});var na=d(no);Gi=r(na,"This model is also a PyTorch "),so=l(na,"A",{href:!0,rel:!0});var $c=d(so);Xi=r($c,"torch.nn.Module"),$c.forEach(o),Yi=r(na,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),na.forEach(o),el=u(re),M=l(re,"DIV",{class:!0});var V=d(M);v(ao.$$.fragment,V),tl=u(V),Ne=l(V,"P",{});var nn=d(Ne);ol=r(nn,"The "),Ho=l(nn,"A",{href:!0});var vc=d(Ho);nl=r(vc,"NeZhaForSequenceClassification"),vc.forEach(o),sl=r(nn," forward method, overrides the "),In=l(nn,"CODE",{});var wc=d(In);al=r(wc,"__call__"),wc.forEach(o),rl=r(nn," special method."),nn.forEach(o),il=u(V),v(Xe.$$.fragment,V),ll=u(V),v(Ye.$$.fragment,V),dl=u(V),v(et.$$.fragment,V),cl=u(V),v(tt.$$.fragment,V),hl=u(V),v(ot.$$.fragment,V),V.forEach(o),re.forEach(o),qs=u(t),ze=l(t,"H2",{class:!0});var sa=d(ze);nt=l(sa,"A",{id:!0,class:!0,href:!0});var Tc=d(nt);Dn=l(Tc,"SPAN",{});var yc=d(Dn);v(ro.$$.fragment,yc),yc.forEach(o),Tc.forEach(o),pl=u(sa),Bn=l(sa,"SPAN",{});var Nc=d(Bn);ml=r(Nc,"NeZhaForMultipleChoice"),Nc.forEach(o),sa.forEach(o),Cs=u(t),A=l(t,"DIV",{class:!0});var ie=d(A);v(io.$$.fragment,ie),ul=u(ie),Wn=l(ie,"P",{});var zc=d(Wn);fl=r(zc,`NeZha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zc.forEach(o),gl=u(ie),lo=l(ie,"P",{});var aa=d(lo);_l=r(aa,"This model inherits from "),Qo=l(aa,"A",{href:!0});var Fc=d(Qo);bl=r(Fc,"PreTrainedModel"),Fc.forEach(o),kl=r(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(o),$l=u(ie),co=l(ie,"P",{});var ra=d(co);vl=r(ra,"This model is also a PyTorch "),ho=l(ra,"A",{href:!0,rel:!0});var Zc=d(ho);wl=r(Zc,"torch.nn.Module"),Zc.forEach(o),Tl=r(ra,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ra.forEach(o),yl=u(ie),X=l(ie,"DIV",{class:!0});var _t=d(X);v(po.$$.fragment,_t),Nl=u(_t),Fe=l(_t,"P",{});var sn=d(Fe);zl=r(sn,"The "),Uo=l(sn,"A",{href:!0});var Mc=d(Uo);Fl=r(Mc,"NeZhaForMultipleChoice"),Mc.forEach(o),Zl=r(sn," forward method, overrides the "),Hn=l(sn,"CODE",{});var xc=d(Hn);Ml=r(xc,"__call__"),xc.forEach(o),xl=r(sn," special method."),sn.forEach(o),jl=u(_t),v(st.$$.fragment,_t),Pl=u(_t),v(at.$$.fragment,_t),_t.forEach(o),ie.forEach(o),Es=u(t),Ze=l(t,"H2",{class:!0});var ia=d(Ze);rt=l(ia,"A",{id:!0,class:!0,href:!0});var jc=d(rt);Qn=l(jc,"SPAN",{});var Pc=d(Qn);v(mo.$$.fragment,Pc),Pc.forEach(o),jc.forEach(o),ql=u(ia),Un=l(ia,"SPAN",{});var qc=d(Un);Cl=r(qc,"NeZhaForTokenClassification"),qc.forEach(o),ia.forEach(o),As=u(t),O=l(t,"DIV",{class:!0});var le=d(O);v(uo.$$.fragment,le),El=u(le),Vn=l(le,"P",{});var Cc=d(Vn);Al=r(Cc,`NeZha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Cc.forEach(o),Ol=u(le),fo=l(le,"P",{});var la=d(fo);Sl=r(la,"This model inherits from "),Vo=l(la,"A",{href:!0});var Ec=d(Vo);Ll=r(Ec,"PreTrainedModel"),Ec.forEach(o),Il=r(la,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),la.forEach(o),Dl=u(le),go=l(le,"P",{});var da=d(go);Bl=r(da,"This model is also a PyTorch "),_o=l(da,"A",{href:!0,rel:!0});var Ac=d(_o);Wl=r(Ac,"torch.nn.Module"),Ac.forEach(o),Hl=r(da,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),da.forEach(o),Ql=u(le),W=l(le,"DIV",{class:!0});var de=d(W);v(bo.$$.fragment,de),Ul=u(de),Me=l(de,"P",{});var an=d(Me);Vl=r(an,"The "),Ro=l(an,"A",{href:!0});var Oc=d(Ro);Rl=r(Oc,"NeZhaForTokenClassification"),Oc.forEach(o),Jl=r(an," forward method, overrides the "),Rn=l(an,"CODE",{});var Sc=d(Rn);Kl=r(Sc,"__call__"),Sc.forEach(o),Gl=r(an," special method."),an.forEach(o),Xl=u(de),v(it.$$.fragment,de),Yl=u(de),v(lt.$$.fragment,de),ed=u(de),v(dt.$$.fragment,de),de.forEach(o),le.forEach(o),Os=u(t),xe=l(t,"H2",{class:!0});var ca=d(xe);ct=l(ca,"A",{id:!0,class:!0,href:!0});var Lc=d(ct);Jn=l(Lc,"SPAN",{});var Ic=d(Jn);v(ko.$$.fragment,Ic),Ic.forEach(o),Lc.forEach(o),td=u(ca),Kn=l(ca,"SPAN",{});var Dc=d(Kn);od=r(Dc,"NeZhaForQuestionAnswering"),Dc.forEach(o),ca.forEach(o),Ss=u(t),S=l(t,"DIV",{class:!0});var ce=d(S);v($o.$$.fragment,ce),nd=u(ce),je=l(ce,"P",{});var rn=d(je);sd=r(rn,`NeZha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gn=l(rn,"CODE",{});var Bc=d(Gn);ad=r(Bc,"span start logits"),Bc.forEach(o),rd=r(rn," and "),Xn=l(rn,"CODE",{});var Wc=d(Xn);id=r(Wc,"span end logits"),Wc.forEach(o),ld=r(rn,")."),rn.forEach(o),dd=u(ce),vo=l(ce,"P",{});var ha=d(vo);cd=r(ha,"This model inherits from "),Jo=l(ha,"A",{href:!0});var Hc=d(Jo);hd=r(Hc,"PreTrainedModel"),Hc.forEach(o),pd=r(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(o),md=u(ce),wo=l(ce,"P",{});var pa=d(wo);ud=r(pa,"This model is also a PyTorch "),To=l(pa,"A",{href:!0,rel:!0});var Qc=d(To);fd=r(Qc,"torch.nn.Module"),Qc.forEach(o),gd=r(pa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pa.forEach(o),_d=u(ce),H=l(ce,"DIV",{class:!0});var he=d(H);v(yo.$$.fragment,he),bd=u(he),Pe=l(he,"P",{});var ln=d(Pe);kd=r(ln,"The "),Ko=l(ln,"A",{href:!0});var Uc=d(Ko);$d=r(Uc,"NeZhaForQuestionAnswering"),Uc.forEach(o),vd=r(ln," forward method, overrides the "),Yn=l(ln,"CODE",{});var Vc=d(Yn);wd=r(Vc,"__call__"),Vc.forEach(o),Td=r(ln," special method."),ln.forEach(o),yd=u(he),v(ht.$$.fragment,he),Nd=u(he),v(pt.$$.fragment,he),zd=u(he),v(mt.$$.fragment,he),he.forEach(o),ce.forEach(o),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(Th)),f(h,"id","nezha"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#nezha"),f(c,"class","relative group"),f(Ce,"id","overview"),f(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ce,"href","#overview"),f(pe,"class","relative group"),f($t,"href","https://arxiv.org/abs/1909.00204"),f($t,"rel","nofollow"),f(vt,"href","https://huggingface.co/sijunhe"),f(vt,"rel","nofollow"),f(wt,"href","https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/NEZHA-PyTorch"),f(wt,"rel","nofollow"),f(Ae,"id","transformers.NeZhaConfig"),f(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ae,"href","#transformers.NeZhaConfig"),f(me,"class","relative group"),f(Po,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaModel"),f(qo,"href","/docs/transformers/pr_17776/en/main_classes/configuration#transformers.PretrainedConfig"),f(Co,"href","/docs/transformers/pr_17776/en/main_classes/configuration#transformers.PretrainedConfig"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"id","transformers.NeZhaModel"),f(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Se,"href","#transformers.NeZhaModel"),f(fe,"class","relative group"),f(Eo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(xt,"rel","nofollow"),f(Pt,"href","https://arxiv.org/abs/1706.03762"),f(Pt,"rel","nofollow"),f(Ao,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaModel"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"id","transformers.NeZhaForPreTraining"),f(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(De,"href","#transformers.NeZhaForPreTraining"),f(_e,"class","relative group"),f(Oo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(St,"rel","nofollow"),f(So,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForPreTraining"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"id","transformers.NeZhaForMaskedLM"),f(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(He,"href","#transformers.NeZhaForMaskedLM"),f($e,"class","relative group"),f(Lo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(Qt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Qt,"rel","nofollow"),f(Io,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForMaskedLM"),f(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"id","transformers.NeZhaForNextSentencePrediction"),f(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Re,"href","#transformers.NeZhaForNextSentencePrediction"),f(we,"class","relative group"),f(Do,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(Xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xt,"rel","nofollow"),f(Bo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForNextSentencePrediction"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"id","transformers.NeZhaForSequenceClassification"),f(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ge,"href","#transformers.NeZhaForSequenceClassification"),f(ye,"class","relative group"),f(Wo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(so,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(so,"rel","nofollow"),f(Ho,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForSequenceClassification"),f(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"id","transformers.NeZhaForMultipleChoice"),f(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nt,"href","#transformers.NeZhaForMultipleChoice"),f(ze,"class","relative group"),f(Qo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ho,"rel","nofollow"),f(Uo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForMultipleChoice"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"id","transformers.NeZhaForTokenClassification"),f(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rt,"href","#transformers.NeZhaForTokenClassification"),f(Ze,"class","relative group"),f(Vo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(_o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(_o,"rel","nofollow"),f(Ro,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForTokenClassification"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"id","transformers.NeZhaForQuestionAnswering"),f(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ct,"href","#transformers.NeZhaForQuestionAnswering"),f(xe,"class","relative group"),f(Jo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(To,"rel","nofollow"),f(Ko,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForQuestionAnswering"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,s),k(t,g,_),k(t,c,_),e(c,h),e(h,b),w(n,b,null),e(c,p),e(c,F),e(F,ma),k(t,gs,_),k(t,pe,_),e(pe,Ce),e(Ce,dn),w(kt,dn,null),e(pe,ua),e(pe,cn),e(cn,fa),k(t,_s,_),k(t,Ee,_),e(Ee,ga),e(Ee,$t),e($t,_a),e(Ee,ba),k(t,bs,_),k(t,xo,_),e(xo,ka),k(t,ks,_),k(t,jo,_),e(jo,hn),e(hn,$a),k(t,$s,_),k(t,te,_),e(te,va),e(te,vt),e(vt,wa),e(te,Ta),e(te,wt),e(wt,ya),e(te,Na),k(t,vs,_),k(t,me,_),e(me,Ae),e(Ae,pn),w(Tt,pn,null),e(me,za),e(me,mn),e(mn,Fa),k(t,ws,_),k(t,R,_),w(yt,R,null),e(R,Za),e(R,Nt),e(Nt,Ma),e(Nt,Po),e(Po,xa),e(Nt,ja),e(R,Pa),e(R,ue),e(ue,qa),e(ue,qo),e(qo,Ca),e(ue,Ea),e(ue,Co),e(Co,Aa),e(ue,Oa),e(R,Sa),w(Oe,R,null),k(t,Ts,_),k(t,fe,_),e(fe,Se),e(Se,un),w(zt,un,null),e(fe,La),e(fe,fn),e(fn,Ia),k(t,ys,_),k(t,Z,_),w(Ft,Z,null),e(Z,Da),e(Z,gn),e(gn,Ba),e(Z,Wa),e(Z,Zt),e(Zt,Ha),e(Zt,Eo),e(Eo,Qa),e(Zt,Ua),e(Z,Va),e(Z,Mt),e(Mt,Ra),e(Mt,xt),e(xt,Ja),e(Mt,Ka),e(Z,Ga),e(Z,jt),e(jt,Xa),e(jt,Pt),e(Pt,Ya),e(jt,er),e(Z,tr),e(Z,x),e(x,or),e(x,_n),e(_n,nr),e(x,sr),e(x,bn),e(bn,ar),e(x,rr),e(x,kn),e(kn,ir),e(x,lr),e(x,$n),e($n,dr),e(x,cr),e(x,vn),e(vn,hr),e(x,pr),e(x,wn),e(wn,mr),e(x,ur),e(Z,fr),e(Z,J),w(qt,J,null),e(J,gr),e(J,ge),e(ge,_r),e(ge,Ao),e(Ao,br),e(ge,kr),e(ge,Tn),e(Tn,$r),e(ge,vr),e(J,wr),w(Le,J,null),e(J,Tr),w(Ie,J,null),k(t,Ns,_),k(t,_e,_),e(_e,De),e(De,yn),w(Ct,yn,null),e(_e,yr),e(_e,Nn),e(Nn,Nr),k(t,zs,_),k(t,P,_),w(Et,P,null),e(P,zr),e(P,be),e(be,Fr),e(be,zn),e(zn,Zr),e(be,Mr),e(be,Fn),e(Fn,xr),e(be,jr),e(P,Pr),e(P,At),e(At,qr),e(At,Oo),e(Oo,Cr),e(At,Er),e(P,Ar),e(P,Ot),e(Ot,Or),e(Ot,St),e(St,Sr),e(Ot,Lr),e(P,Ir),e(P,K),w(Lt,K,null),e(K,Dr),e(K,ke),e(ke,Br),e(ke,So),e(So,Wr),e(ke,Hr),e(ke,Zn),e(Zn,Qr),e(ke,Ur),e(K,Vr),w(Be,K,null),e(K,Rr),w(We,K,null),k(t,Fs,_),k(t,$e,_),e($e,He),e(He,Mn),w(It,Mn,null),e($e,Jr),e($e,xn),e(xn,Kr),k(t,Zs,_),k(t,q,_),w(Dt,q,null),e(q,Gr),e(q,Bt),e(Bt,Xr),e(Bt,jn),e(jn,Yr),e(Bt,ei),e(q,ti),e(q,Wt),e(Wt,oi),e(Wt,Lo),e(Lo,ni),e(Wt,si),e(q,ai),e(q,Ht),e(Ht,ri),e(Ht,Qt),e(Qt,ii),e(Ht,li),e(q,di),e(q,B),w(Ut,B,null),e(B,ci),e(B,ve),e(ve,hi),e(ve,Io),e(Io,pi),e(ve,mi),e(ve,Pn),e(Pn,ui),e(ve,fi),e(B,gi),w(Qe,B,null),e(B,_i),w(Ue,B,null),e(B,bi),w(Ve,B,null),k(t,Ms,_),k(t,we,_),e(we,Re),e(Re,qn),w(Vt,qn,null),e(we,ki),e(we,Cn),e(Cn,$i),k(t,xs,_),k(t,C,_),w(Rt,C,null),e(C,vi),e(C,Jt),e(Jt,wi),e(Jt,En),e(En,Ti),e(Jt,yi),e(C,Ni),e(C,Kt),e(Kt,zi),e(Kt,Do),e(Do,Fi),e(Kt,Zi),e(C,Mi),e(C,Gt),e(Gt,xi),e(Gt,Xt),e(Xt,ji),e(Gt,Pi),e(C,qi),e(C,G),w(Yt,G,null),e(G,Ci),e(G,Te),e(Te,Ei),e(Te,Bo),e(Bo,Ai),e(Te,Oi),e(Te,An),e(An,Si),e(Te,Li),e(G,Ii),w(Je,G,null),e(G,Di),w(Ke,G,null),k(t,js,_),k(t,ye,_),e(ye,Ge),e(Ge,On),w(eo,On,null),e(ye,Bi),e(ye,Sn),e(Sn,Wi),k(t,Ps,_),k(t,E,_),w(to,E,null),e(E,Hi),e(E,Ln),e(Ln,Qi),e(E,Ui),e(E,oo),e(oo,Vi),e(oo,Wo),e(Wo,Ri),e(oo,Ji),e(E,Ki),e(E,no),e(no,Gi),e(no,so),e(so,Xi),e(no,Yi),e(E,el),e(E,M),w(ao,M,null),e(M,tl),e(M,Ne),e(Ne,ol),e(Ne,Ho),e(Ho,nl),e(Ne,sl),e(Ne,In),e(In,al),e(Ne,rl),e(M,il),w(Xe,M,null),e(M,ll),w(Ye,M,null),e(M,dl),w(et,M,null),e(M,cl),w(tt,M,null),e(M,hl),w(ot,M,null),k(t,qs,_),k(t,ze,_),e(ze,nt),e(nt,Dn),w(ro,Dn,null),e(ze,pl),e(ze,Bn),e(Bn,ml),k(t,Cs,_),k(t,A,_),w(io,A,null),e(A,ul),e(A,Wn),e(Wn,fl),e(A,gl),e(A,lo),e(lo,_l),e(lo,Qo),e(Qo,bl),e(lo,kl),e(A,$l),e(A,co),e(co,vl),e(co,ho),e(ho,wl),e(co,Tl),e(A,yl),e(A,X),w(po,X,null),e(X,Nl),e(X,Fe),e(Fe,zl),e(Fe,Uo),e(Uo,Fl),e(Fe,Zl),e(Fe,Hn),e(Hn,Ml),e(Fe,xl),e(X,jl),w(st,X,null),e(X,Pl),w(at,X,null),k(t,Es,_),k(t,Ze,_),e(Ze,rt),e(rt,Qn),w(mo,Qn,null),e(Ze,ql),e(Ze,Un),e(Un,Cl),k(t,As,_),k(t,O,_),w(uo,O,null),e(O,El),e(O,Vn),e(Vn,Al),e(O,Ol),e(O,fo),e(fo,Sl),e(fo,Vo),e(Vo,Ll),e(fo,Il),e(O,Dl),e(O,go),e(go,Bl),e(go,_o),e(_o,Wl),e(go,Hl),e(O,Ql),e(O,W),w(bo,W,null),e(W,Ul),e(W,Me),e(Me,Vl),e(Me,Ro),e(Ro,Rl),e(Me,Jl),e(Me,Rn),e(Rn,Kl),e(Me,Gl),e(W,Xl),w(it,W,null),e(W,Yl),w(lt,W,null),e(W,ed),w(dt,W,null),k(t,Os,_),k(t,xe,_),e(xe,ct),e(ct,Jn),w(ko,Jn,null),e(xe,td),e(xe,Kn),e(Kn,od),k(t,Ss,_),k(t,S,_),w($o,S,null),e(S,nd),e(S,je),e(je,sd),e(je,Gn),e(Gn,ad),e(je,rd),e(je,Xn),e(Xn,id),e(je,ld),e(S,dd),e(S,vo),e(vo,cd),e(vo,Jo),e(Jo,hd),e(vo,pd),e(S,md),e(S,wo),e(wo,ud),e(wo,To),e(To,fd),e(wo,gd),e(S,_d),e(S,H),w(yo,H,null),e(H,bd),e(H,Pe),e(Pe,kd),e(Pe,Ko),e(Ko,$d),e(Pe,vd),e(Pe,Yn),e(Yn,wd),e(Pe,Td),e(H,yd),w(ht,H,null),e(H,Nd),w(pt,H,null),e(H,zd),w(mt,H,null),Ls=!0},p(t,[_]){const No={};_&2&&(No.$$scope={dirty:_,ctx:t}),Oe.$set(No);const es={};_&2&&(es.$$scope={dirty:_,ctx:t}),Le.$set(es);const ts={};_&2&&(ts.$$scope={dirty:_,ctx:t}),Ie.$set(ts);const os={};_&2&&(os.$$scope={dirty:_,ctx:t}),Be.$set(os);const zo={};_&2&&(zo.$$scope={dirty:_,ctx:t}),We.$set(zo);const ns={};_&2&&(ns.$$scope={dirty:_,ctx:t}),Qe.$set(ns);const ss={};_&2&&(ss.$$scope={dirty:_,ctx:t}),Ue.$set(ss);const as={};_&2&&(as.$$scope={dirty:_,ctx:t}),Ve.$set(as);const Fo={};_&2&&(Fo.$$scope={dirty:_,ctx:t}),Je.$set(Fo);const rs={};_&2&&(rs.$$scope={dirty:_,ctx:t}),Ke.$set(rs);const is={};_&2&&(is.$$scope={dirty:_,ctx:t}),Xe.$set(is);const ls={};_&2&&(ls.$$scope={dirty:_,ctx:t}),Ye.$set(ls);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:t}),et.$set(ds);const qe={};_&2&&(qe.$$scope={dirty:_,ctx:t}),tt.$set(qe);const cs={};_&2&&(cs.$$scope={dirty:_,ctx:t}),ot.$set(cs);const hs={};_&2&&(hs.$$scope={dirty:_,ctx:t}),st.$set(hs);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:t}),at.$set(Zo);const ps={};_&2&&(ps.$$scope={dirty:_,ctx:t}),it.$set(ps);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:t}),lt.$set(ms);const us={};_&2&&(us.$$scope={dirty:_,ctx:t}),dt.$set(us);const Y={};_&2&&(Y.$$scope={dirty:_,ctx:t}),ht.$set(Y);const Mo={};_&2&&(Mo.$$scope={dirty:_,ctx:t}),pt.$set(Mo);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:t}),mt.$set(fs)},i(t){Ls||(T(n.$$.fragment,t),T(kt.$$.fragment,t),T(Tt.$$.fragment,t),T(yt.$$.fragment,t),T(Oe.$$.fragment,t),T(zt.$$.fragment,t),T(Ft.$$.fragment,t),T(qt.$$.fragment,t),T(Le.$$.fragment,t),T(Ie.$$.fragment,t),T(Ct.$$.fragment,t),T(Et.$$.fragment,t),T(Lt.$$.fragment,t),T(Be.$$.fragment,t),T(We.$$.fragment,t),T(It.$$.fragment,t),T(Dt.$$.fragment,t),T(Ut.$$.fragment,t),T(Qe.$$.fragment,t),T(Ue.$$.fragment,t),T(Ve.$$.fragment,t),T(Vt.$$.fragment,t),T(Rt.$$.fragment,t),T(Yt.$$.fragment,t),T(Je.$$.fragment,t),T(Ke.$$.fragment,t),T(eo.$$.fragment,t),T(to.$$.fragment,t),T(ao.$$.fragment,t),T(Xe.$$.fragment,t),T(Ye.$$.fragment,t),T(et.$$.fragment,t),T(tt.$$.fragment,t),T(ot.$$.fragment,t),T(ro.$$.fragment,t),T(io.$$.fragment,t),T(po.$$.fragment,t),T(st.$$.fragment,t),T(at.$$.fragment,t),T(mo.$$.fragment,t),T(uo.$$.fragment,t),T(bo.$$.fragment,t),T(it.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(ko.$$.fragment,t),T($o.$$.fragment,t),T(yo.$$.fragment,t),T(ht.$$.fragment,t),T(pt.$$.fragment,t),T(mt.$$.fragment,t),Ls=!0)},o(t){y(n.$$.fragment,t),y(kt.$$.fragment,t),y(Tt.$$.fragment,t),y(yt.$$.fragment,t),y(Oe.$$.fragment,t),y(zt.$$.fragment,t),y(Ft.$$.fragment,t),y(qt.$$.fragment,t),y(Le.$$.fragment,t),y(Ie.$$.fragment,t),y(Ct.$$.fragment,t),y(Et.$$.fragment,t),y(Lt.$$.fragment,t),y(Be.$$.fragment,t),y(We.$$.fragment,t),y(It.$$.fragment,t),y(Dt.$$.fragment,t),y(Ut.$$.fragment,t),y(Qe.$$.fragment,t),y(Ue.$$.fragment,t),y(Ve.$$.fragment,t),y(Vt.$$.fragment,t),y(Rt.$$.fragment,t),y(Yt.$$.fragment,t),y(Je.$$.fragment,t),y(Ke.$$.fragment,t),y(eo.$$.fragment,t),y(to.$$.fragment,t),y(ao.$$.fragment,t),y(Xe.$$.fragment,t),y(Ye.$$.fragment,t),y(et.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(ro.$$.fragment,t),y(io.$$.fragment,t),y(po.$$.fragment,t),y(st.$$.fragment,t),y(at.$$.fragment,t),y(mo.$$.fragment,t),y(uo.$$.fragment,t),y(bo.$$.fragment,t),y(it.$$.fragment,t),y(lt.$$.fragment,t),y(dt.$$.fragment,t),y(ko.$$.fragment,t),y($o.$$.fragment,t),y(yo.$$.fragment,t),y(ht.$$.fragment,t),y(pt.$$.fragment,t),y(mt.$$.fragment,t),Ls=!1},d(t){o(s),t&&o(g),t&&o(c),N(n),t&&o(gs),t&&o(pe),N(kt),t&&o(_s),t&&o(Ee),t&&o(bs),t&&o(xo),t&&o(ks),t&&o(jo),t&&o($s),t&&o(te),t&&o(vs),t&&o(me),N(Tt),t&&o(ws),t&&o(R),N(yt),N(Oe),t&&o(Ts),t&&o(fe),N(zt),t&&o(ys),t&&o(Z),N(Ft),N(qt),N(Le),N(Ie),t&&o(Ns),t&&o(_e),N(Ct),t&&o(zs),t&&o(P),N(Et),N(Lt),N(Be),N(We),t&&o(Fs),t&&o($e),N(It),t&&o(Zs),t&&o(q),N(Dt),N(Ut),N(Qe),N(Ue),N(Ve),t&&o(Ms),t&&o(we),N(Vt),t&&o(xs),t&&o(C),N(Rt),N(Yt),N(Je),N(Ke),t&&o(js),t&&o(ye),N(eo),t&&o(Ps),t&&o(E),N(to),N(ao),N(Xe),N(Ye),N(et),N(tt),N(ot),t&&o(qs),t&&o(ze),N(ro),t&&o(Cs),t&&o(A),N(io),N(po),N(st),N(at),t&&o(Es),t&&o(Ze),N(mo),t&&o(As),t&&o(O),N(uo),N(bo),N(it),N(lt),N(dt),t&&o(Os),t&&o(xe),N(ko),t&&o(Ss),t&&o(S),N($o),N(yo),N(ht),N(pt),N(mt)}}}const Th={local:"nezha",sections:[{local:"overview",title:"Overview"},{local:"transformers.NeZhaConfig",title:"NeZhaConfig"},{local:"transformers.NeZhaModel",title:"NeZhaModel"},{local:"transformers.NeZhaForPreTraining",title:"NeZhaForPreTraining"},{local:"transformers.NeZhaForMaskedLM",title:"NeZhaForMaskedLM"},{local:"transformers.NeZhaForNextSentencePrediction",title:"NeZhaForNextSentencePrediction"},{local:"transformers.NeZhaForSequenceClassification",title:"NeZhaForSequenceClassification"},{local:"transformers.NeZhaForMultipleChoice",title:"NeZhaForMultipleChoice"},{local:"transformers.NeZhaForTokenClassification",title:"NeZhaForTokenClassification"},{local:"transformers.NeZhaForQuestionAnswering",title:"NeZhaForQuestionAnswering"}],title:"NeZha"};function yh(z){return Xc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jh extends Rc{constructor(s){super();Jc(this,s,yh,wh,Kc,{})}}export{jh as default,Th as metadata};
