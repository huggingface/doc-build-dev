import{S as Xc,i as Yc,s as eh,e as i,k as m,w as $,t as a,M as th,c as l,d as o,m as u,a as d,x as v,h as r,b as f,G as e,g as k,y as w,q as T,o as y,B as N,v as oh,L as I}from"../../chunks/vendor-hf-doc-builder.js";import{T as $t}from"../../chunks/Tip-hf-doc-builder.js";import{D as j}from"../../chunks/Docstring-hf-doc-builder.js";import{C as D}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ee}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as L}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import NeZhaConfig, NeZhaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function sh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ah(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function rh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ih(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function lh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function dh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForMaskedLM
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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function ch(z){let s,g;return s=new D({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function hh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function ph(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function mh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function uh(z){let s,g,c,h,b;return h=new D({props:{code:`import torch
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
`}}),{c(){s=i("p"),g=a("Example of single-label classification:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example of single-label classification:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function fh(z){let s,g;return s=new D({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function gh(z){let s,g,c,h,b;return h=new D({props:{code:`import torch
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
`}}),{c(){s=i("p"),g=a("Example of multi-label classification:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example of multi-label classification:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function _h(z){let s,g;return s=new D({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function bh(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function kh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function $h(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function vh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForTokenClassification
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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function wh(z){let s,g;return s=new D({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function Th(z){let s,g,c,h,b;return{c(){s=i("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),h=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(p,"CODE",{});var F=d(c);h=r(F,"Module"),F.forEach(o),b=r(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){k(n,s,p),e(s,g),e(s,c),e(c,h),e(s,b)},d(n){n&&o(s)}}}function yh(z){let s,g,c,h,b;return h=new D({props:{code:`from transformers import BertTokenizer, NeZhaForQuestionAnswering
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
`}}),{c(){s=i("p"),g=a("Example:"),c=m(),$(h.$$.fragment)},l(n){s=l(n,"P",{});var p=d(s);g=r(p,"Example:"),p.forEach(o),c=u(n),v(h.$$.fragment,n)},m(n,p){k(n,s,p),e(s,g),k(n,c,p),w(h,n,p),b=!0},p:I,i(n){b||(T(h.$$.fragment,n),b=!0)},o(n){y(h.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),N(h,n)}}}function Nh(z){let s,g;return s=new D({props:{code:`# target is "nice puppet"
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
`}}),{c(){$(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,h){w(s,c,h),g=!0},p:I,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){N(s,c)}}}function zh(z){let s,g,c,h,b,n,p,F,ua,_s,pe,Ae,cn,vt,fa,hn,ga,bs,Oe,_a,wt,ba,ka,ks,jo,$a,$s,Po,pn,va,vs,te,wa,Tt,Ta,ya,yt,Na,za,ws,me,Se,mn,Nt,Fa,un,Ma,Ts,R,zt,Za,ue,xa,qo,ja,Pa,Ft,qa,Ca,Ea,fe,Aa,Co,Oa,Sa,Eo,La,Ia,Da,Le,ys,ge,Ie,fn,Mt,Ba,gn,Wa,Ns,M,Zt,Ha,_n,Qa,Ua,xt,Va,Ao,Ra,Ja,Ka,jt,Ga,Pt,Xa,Ya,er,qt,tr,Ct,or,nr,sr,x,ar,bn,rr,ir,kn,lr,dr,$n,cr,hr,vn,pr,mr,wn,ur,fr,Tn,gr,_r,br,J,Et,kr,_e,$r,Oo,vr,wr,yn,Tr,yr,Nr,De,zr,Be,zs,be,We,Nn,At,Fr,zn,Mr,Fs,P,Ot,Zr,ke,xr,Fn,jr,Pr,Mn,qr,Cr,Er,St,Ar,So,Or,Sr,Lr,Lt,Ir,It,Dr,Br,Wr,K,Dt,Hr,$e,Qr,Lo,Ur,Vr,Zn,Rr,Jr,Kr,He,Gr,Qe,Ms,ve,Ue,xn,Bt,Xr,jn,Yr,Zs,q,Wt,ei,Ht,ti,Pn,oi,ni,si,Qt,ai,Io,ri,ii,li,Ut,di,Vt,ci,hi,pi,B,Rt,mi,we,ui,Do,fi,gi,qn,_i,bi,ki,Ve,$i,Re,vi,Je,xs,Te,Ke,Cn,Jt,wi,En,Ti,js,C,Kt,yi,Gt,Ni,An,zi,Fi,Mi,Xt,Zi,Bo,xi,ji,Pi,Yt,qi,eo,Ci,Ei,Ai,G,to,Oi,ye,Si,Wo,Li,Ii,On,Di,Bi,Wi,Ge,Hi,Xe,Ps,Ne,Ye,Sn,oo,Qi,Ln,Ui,qs,E,no,Vi,In,Ri,Ji,so,Ki,Ho,Gi,Xi,Yi,ao,el,ro,tl,ol,nl,Z,io,sl,ze,al,Qo,rl,il,Dn,ll,dl,cl,et,hl,tt,pl,ot,ml,nt,ul,st,Cs,Fe,at,Bn,lo,fl,Wn,gl,Es,A,co,_l,Hn,bl,kl,ho,$l,Uo,vl,wl,Tl,po,yl,mo,Nl,zl,Fl,X,uo,Ml,Me,Zl,Vo,xl,jl,Qn,Pl,ql,Cl,rt,El,it,As,Ze,lt,Un,fo,Al,Vn,Ol,Os,O,go,Sl,Rn,Ll,Il,_o,Dl,Ro,Bl,Wl,Hl,bo,Ql,ko,Ul,Vl,Rl,W,$o,Jl,xe,Kl,Jo,Gl,Xl,Jn,Yl,ed,td,dt,od,ct,nd,ht,Ss,je,pt,Kn,vo,sd,Gn,ad,Ls,S,wo,rd,Pe,id,Xn,ld,dd,Yn,cd,hd,pd,To,md,Ko,ud,fd,gd,yo,_d,No,bd,kd,$d,H,zo,vd,qe,wd,Go,Td,yd,es,Nd,zd,Fd,mt,Md,ut,Zd,ft,Is;return n=new ee({}),vt=new ee({}),Nt=new ee({}),zt=new j({props:{name:"class transformers.NeZhaConfig",anchor:"transformers.NeZhaConfig",parameters:[{name:"vocab_size",val:" = 21128"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"max_relative_position",val:" = 64"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout",val:" = 0.1"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NeZhaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, optional, defaults to 21128) &#x2014;
Vocabulary size of the NEZHA model. Defines the different tokens that can be represented by the
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
The dropout ratio for attached classifiers.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/configuration_nezha.py#L9"}}),Le=new L({props:{anchor:"transformers.NeZhaConfig.example",$$slots:{default:[nh]},$$scope:{ctx:z}}}),Mt=new ee({}),Zt=new j({props:{name:"class transformers.NeZhaModel",anchor:"transformers.NeZhaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.NeZhaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L855"}}),Et=new j({props:{name:"forward",anchor:"transformers.NeZhaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),De=new $t({props:{$$slots:{default:[sh]},$$scope:{ctx:z}}}),Be=new L({props:{anchor:"transformers.NeZhaModel.forward.example",$$slots:{default:[ah]},$$scope:{ctx:z}}}),At=new ee({}),Ot=new j({props:{name:"class transformers.NeZhaForPreTraining",anchor:"transformers.NeZhaForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1036"}}),Dt=new j({props:{name:"forward",anchor:"transformers.NeZhaForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),He=new $t({props:{$$slots:{default:[rh]},$$scope:{ctx:z}}}),Qe=new L({props:{anchor:"transformers.NeZhaForPreTraining.forward.example",$$slots:{default:[ih]},$$scope:{ctx:z}}}),Bt=new ee({}),Wt=new j({props:{name:"class transformers.NeZhaForMaskedLM",anchor:"transformers.NeZhaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1136"}}),Rt=new j({props:{name:"forward",anchor:"transformers.NeZhaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ve=new $t({props:{$$slots:{default:[lh]},$$scope:{ctx:z}}}),Re=new L({props:{anchor:"transformers.NeZhaForMaskedLM.forward.example",$$slots:{default:[dh]},$$scope:{ctx:z}}}),Je=new L({props:{anchor:"transformers.NeZhaForMaskedLM.forward.example-2",$$slots:{default:[ch]},$$scope:{ctx:z}}}),Jt=new ee({}),Kt=new j({props:{name:"class transformers.NeZhaForNextSentencePrediction",anchor:"transformers.NeZhaForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1245"}}),to=new j({props:{name:"forward",anchor:"transformers.NeZhaForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ge=new $t({props:{$$slots:{default:[hh]},$$scope:{ctx:z}}}),Xe=new L({props:{anchor:"transformers.NeZhaForNextSentencePrediction.forward.example",$$slots:{default:[ph]},$$scope:{ctx:z}}}),oo=new ee({}),no=new j({props:{name:"class transformers.NeZhaForSequenceClassification",anchor:"transformers.NeZhaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1348"}}),io=new j({props:{name:"forward",anchor:"transformers.NeZhaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),et=new $t({props:{$$slots:{default:[mh]},$$scope:{ctx:z}}}),tt=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example",$$slots:{default:[uh]},$$scope:{ctx:z}}}),ot=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example-2",$$slots:{default:[fh]},$$scope:{ctx:z}}}),nt=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example-3",$$slots:{default:[gh]},$$scope:{ctx:z}}}),st=new L({props:{anchor:"transformers.NeZhaForSequenceClassification.forward.example-4",$$slots:{default:[_h]},$$scope:{ctx:z}}}),lo=new ee({}),co=new j({props:{name:"class transformers.NeZhaForMultipleChoice",anchor:"transformers.NeZhaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1448"}}),uo=new j({props:{name:"forward",anchor:"transformers.NeZhaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),rt=new $t({props:{$$slots:{default:[bh]},$$scope:{ctx:z}}}),it=new L({props:{anchor:"transformers.NeZhaForMultipleChoice.forward.example",$$slots:{default:[kh]},$$scope:{ctx:z}}}),fo=new ee({}),go=new j({props:{name:"class transformers.NeZhaForTokenClassification",anchor:"transformers.NeZhaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1541"}}),$o=new j({props:{name:"forward",anchor:"transformers.NeZhaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),dt=new $t({props:{$$slots:{default:[$h]},$$scope:{ctx:z}}}),ct=new L({props:{anchor:"transformers.NeZhaForTokenClassification.forward.example",$$slots:{default:[vh]},$$scope:{ctx:z}}}),ht=new L({props:{anchor:"transformers.NeZhaForTokenClassification.forward.example-2",$$slots:{default:[wh]},$$scope:{ctx:z}}}),vo=new ee({}),wo=new j({props:{name:"class transformers.NeZhaForQuestionAnswering",anchor:"transformers.NeZhaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NeZhaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaConfig">NeZhaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17776/src/transformers/models/nezha/modeling_nezha.py#L1624"}}),zo=new j({props:{name:"forward",anchor:"transformers.NeZhaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NeZhaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),mt=new $t({props:{$$slots:{default:[Th]},$$scope:{ctx:z}}}),ut=new L({props:{anchor:"transformers.NeZhaForQuestionAnswering.forward.example",$$slots:{default:[yh]},$$scope:{ctx:z}}}),ft=new L({props:{anchor:"transformers.NeZhaForQuestionAnswering.forward.example-2",$$slots:{default:[Nh]},$$scope:{ctx:z}}}),{c(){s=i("meta"),g=m(),c=i("h1"),h=i("a"),b=i("span"),$(n.$$.fragment),p=m(),F=i("span"),ua=a("NeZha"),_s=m(),pe=i("h2"),Ae=i("a"),cn=i("span"),$(vt.$$.fragment),fa=m(),hn=i("span"),ga=a("Overview"),bs=m(),Oe=i("p"),_a=a("The NeZha model was proposed in "),wt=i("a"),ba=a("NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),ka=a(" by Junqiu Wei et al."),ks=m(),jo=i("p"),$a=a("The abstract from the paper is the following:"),$s=m(),Po=i("p"),pn=i("em"),va=a(`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),vs=m(),te=i("p"),wa=a("This model was contributed by "),Tt=i("a"),Ta=a("sijunhe"),ya=a(". The original code can be found "),yt=i("a"),Na=a("here"),za=a("."),ws=m(),me=i("h2"),Se=i("a"),mn=i("span"),$(Nt.$$.fragment),Fa=m(),un=i("span"),Ma=a("NeZhaConfig"),Ts=m(),R=i("div"),$(zt.$$.fragment),Za=m(),ue=i("p"),xa=a("This is the configuration class to store the configuration of an "),qo=i("a"),ja=a("NeZhaModel"),Pa=a(`. It is used to instantiate an NeZha
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Nezha
`),Ft=i("a"),qa=a("sijunhe/nezha-cn-base"),Ca=a(" architecture."),Ea=m(),fe=i("p"),Aa=a("Configuration objects inherit from "),Co=i("a"),Oa=a("PretrainedConfig"),Sa=a(` and can be used to control the model outputs. Read the
documentation from `),Eo=i("a"),La=a("PretrainedConfig"),Ia=a(" for more information."),Da=m(),$(Le.$$.fragment),ys=m(),ge=i("h2"),Ie=i("a"),fn=i("span"),$(Mt.$$.fragment),Ba=m(),gn=i("span"),Wa=a("NeZhaModel"),Ns=m(),M=i("div"),$(Zt.$$.fragment),Ha=m(),_n=i("p"),Qa=a("The bare NeZha Model transformer outputting raw hidden-states without any specific head on top."),Ua=m(),xt=i("p"),Va=a("This model inherits from "),Ao=i("a"),Ra=a("PreTrainedModel"),Ja=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ka=m(),jt=i("p"),Ga=a("This model is also a PyTorch "),Pt=i("a"),Xa=a("torch.nn.Module"),Ya=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er=m(),qt=i("p"),tr=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ct=i("a"),or=a(`Attention is
all you need`),nr=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),sr=m(),x=i("p"),ar=a("To behave as an decoder the model needs to be initialized with the "),bn=i("code"),rr=a("is_decoder"),ir=a(` argument of the configuration set
to `),kn=i("code"),lr=a("True"),dr=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),$n=i("code"),cr=a("is_decoder"),hr=a(` argument and
`),vn=i("code"),pr=a("add_cross_attention"),mr=a(" set to "),wn=i("code"),ur=a("True"),fr=a("; an "),Tn=i("code"),gr=a("encoder_hidden_states"),_r=a(" is then expected as an input to the forward pass."),br=m(),J=i("div"),$(Et.$$.fragment),kr=m(),_e=i("p"),$r=a("The "),Oo=i("a"),vr=a("NeZhaModel"),wr=a(" forward method, overrides the "),yn=i("code"),Tr=a("__call__"),yr=a(" special method."),Nr=m(),$(De.$$.fragment),zr=m(),$(Be.$$.fragment),zs=m(),be=i("h2"),We=i("a"),Nn=i("span"),$(At.$$.fragment),Fr=m(),zn=i("span"),Mr=a("NeZhaForPreTraining"),Fs=m(),P=i("div"),$(Ot.$$.fragment),Zr=m(),ke=i("p"),xr=a("NeZha Model with two heads on top as done during the pretraining: a "),Fn=i("code"),jr=a("masked language modeling"),Pr=a(" head and a "),Mn=i("code"),qr=a("next sentence prediction (classification)"),Cr=a(" head."),Er=m(),St=i("p"),Ar=a("This model inherits from "),So=i("a"),Or=a("PreTrainedModel"),Sr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lr=m(),Lt=i("p"),Ir=a("This model is also a PyTorch "),It=i("a"),Dr=a("torch.nn.Module"),Br=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wr=m(),K=i("div"),$(Dt.$$.fragment),Hr=m(),$e=i("p"),Qr=a("The "),Lo=i("a"),Ur=a("NeZhaForPreTraining"),Vr=a(" forward method, overrides the "),Zn=i("code"),Rr=a("__call__"),Jr=a(" special method."),Kr=m(),$(He.$$.fragment),Gr=m(),$(Qe.$$.fragment),Ms=m(),ve=i("h2"),Ue=i("a"),xn=i("span"),$(Bt.$$.fragment),Xr=m(),jn=i("span"),Yr=a("NeZhaForMaskedLM"),Zs=m(),q=i("div"),$(Wt.$$.fragment),ei=m(),Ht=i("p"),ti=a("NeZha Model with a "),Pn=i("code"),oi=a("language modeling"),ni=a(" head on top."),si=m(),Qt=i("p"),ai=a("This model inherits from "),Io=i("a"),ri=a("PreTrainedModel"),ii=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),li=m(),Ut=i("p"),di=a("This model is also a PyTorch "),Vt=i("a"),ci=a("torch.nn.Module"),hi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=m(),B=i("div"),$(Rt.$$.fragment),mi=m(),we=i("p"),ui=a("The "),Do=i("a"),fi=a("NeZhaForMaskedLM"),gi=a(" forward method, overrides the "),qn=i("code"),_i=a("__call__"),bi=a(" special method."),ki=m(),$(Ve.$$.fragment),$i=m(),$(Re.$$.fragment),vi=m(),$(Je.$$.fragment),xs=m(),Te=i("h2"),Ke=i("a"),Cn=i("span"),$(Jt.$$.fragment),wi=m(),En=i("span"),Ti=a("NeZhaForNextSentencePrediction"),js=m(),C=i("div"),$(Kt.$$.fragment),yi=m(),Gt=i("p"),Ni=a("NeZha Model with a "),An=i("code"),zi=a("next sentence prediction (classification)"),Fi=a(" head on top."),Mi=m(),Xt=i("p"),Zi=a("This model inherits from "),Bo=i("a"),xi=a("PreTrainedModel"),ji=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pi=m(),Yt=i("p"),qi=a("This model is also a PyTorch "),eo=i("a"),Ci=a("torch.nn.Module"),Ei=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ai=m(),G=i("div"),$(to.$$.fragment),Oi=m(),ye=i("p"),Si=a("The "),Wo=i("a"),Li=a("NeZhaForNextSentencePrediction"),Ii=a(" forward method, overrides the "),On=i("code"),Di=a("__call__"),Bi=a(" special method."),Wi=m(),$(Ge.$$.fragment),Hi=m(),$(Xe.$$.fragment),Ps=m(),Ne=i("h2"),Ye=i("a"),Sn=i("span"),$(oo.$$.fragment),Qi=m(),Ln=i("span"),Ui=a("NeZhaForSequenceClassification"),qs=m(),E=i("div"),$(no.$$.fragment),Vi=m(),In=i("p"),Ri=a(`NeZha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ji=m(),so=i("p"),Ki=a("This model inherits from "),Ho=i("a"),Gi=a("PreTrainedModel"),Xi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yi=m(),ao=i("p"),el=a("This model is also a PyTorch "),ro=i("a"),tl=a("torch.nn.Module"),ol=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nl=m(),Z=i("div"),$(io.$$.fragment),sl=m(),ze=i("p"),al=a("The "),Qo=i("a"),rl=a("NeZhaForSequenceClassification"),il=a(" forward method, overrides the "),Dn=i("code"),ll=a("__call__"),dl=a(" special method."),cl=m(),$(et.$$.fragment),hl=m(),$(tt.$$.fragment),pl=m(),$(ot.$$.fragment),ml=m(),$(nt.$$.fragment),ul=m(),$(st.$$.fragment),Cs=m(),Fe=i("h2"),at=i("a"),Bn=i("span"),$(lo.$$.fragment),fl=m(),Wn=i("span"),gl=a("NeZhaForMultipleChoice"),Es=m(),A=i("div"),$(co.$$.fragment),_l=m(),Hn=i("p"),bl=a(`NeZha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),kl=m(),ho=i("p"),$l=a("This model inherits from "),Uo=i("a"),vl=a("PreTrainedModel"),wl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl=m(),po=i("p"),yl=a("This model is also a PyTorch "),mo=i("a"),Nl=a("torch.nn.Module"),zl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl=m(),X=i("div"),$(uo.$$.fragment),Ml=m(),Me=i("p"),Zl=a("The "),Vo=i("a"),xl=a("NeZhaForMultipleChoice"),jl=a(" forward method, overrides the "),Qn=i("code"),Pl=a("__call__"),ql=a(" special method."),Cl=m(),$(rt.$$.fragment),El=m(),$(it.$$.fragment),As=m(),Ze=i("h2"),lt=i("a"),Un=i("span"),$(fo.$$.fragment),Al=m(),Vn=i("span"),Ol=a("NeZhaForTokenClassification"),Os=m(),O=i("div"),$(go.$$.fragment),Sl=m(),Rn=i("p"),Ll=a(`NeZha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Il=m(),_o=i("p"),Dl=a("This model inherits from "),Ro=i("a"),Bl=a("PreTrainedModel"),Wl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl=m(),bo=i("p"),Ql=a("This model is also a PyTorch "),ko=i("a"),Ul=a("torch.nn.Module"),Vl=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rl=m(),W=i("div"),$($o.$$.fragment),Jl=m(),xe=i("p"),Kl=a("The "),Jo=i("a"),Gl=a("NeZhaForTokenClassification"),Xl=a(" forward method, overrides the "),Jn=i("code"),Yl=a("__call__"),ed=a(" special method."),td=m(),$(dt.$$.fragment),od=m(),$(ct.$$.fragment),nd=m(),$(ht.$$.fragment),Ss=m(),je=i("h2"),pt=i("a"),Kn=i("span"),$(vo.$$.fragment),sd=m(),Gn=i("span"),ad=a("NeZhaForQuestionAnswering"),Ls=m(),S=i("div"),$(wo.$$.fragment),rd=m(),Pe=i("p"),id=a(`NeZha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xn=i("code"),ld=a("span start logits"),dd=a(" and "),Yn=i("code"),cd=a("span end logits"),hd=a(")."),pd=m(),To=i("p"),md=a("This model inherits from "),Ko=i("a"),ud=a("PreTrainedModel"),fd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd=m(),yo=i("p"),_d=a("This model is also a PyTorch "),No=i("a"),bd=a("torch.nn.Module"),kd=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$d=m(),H=i("div"),$(zo.$$.fragment),vd=m(),qe=i("p"),wd=a("The "),Go=i("a"),Td=a("NeZhaForQuestionAnswering"),yd=a(" forward method, overrides the "),es=i("code"),Nd=a("__call__"),zd=a(" special method."),Fd=m(),$(mt.$$.fragment),Md=m(),$(ut.$$.fragment),Zd=m(),$(ft.$$.fragment),this.h()},l(t){const _=th('[data-svelte="svelte-1phssyn"]',document.head);s=l(_,"META",{name:!0,content:!0}),_.forEach(o),g=u(t),c=l(t,"H1",{class:!0});var Fo=d(c);h=l(Fo,"A",{id:!0,class:!0,href:!0});var ts=d(h);b=l(ts,"SPAN",{});var os=d(b);v(n.$$.fragment,os),os.forEach(o),ts.forEach(o),p=u(Fo),F=l(Fo,"SPAN",{});var ns=d(F);ua=r(ns,"NeZha"),ns.forEach(o),Fo.forEach(o),_s=u(t),pe=l(t,"H2",{class:!0});var Mo=d(pe);Ae=l(Mo,"A",{id:!0,class:!0,href:!0});var ss=d(Ae);cn=l(ss,"SPAN",{});var as=d(cn);v(vt.$$.fragment,as),as.forEach(o),ss.forEach(o),fa=u(Mo),hn=l(Mo,"SPAN",{});var rs=d(hn);ga=r(rs,"Overview"),rs.forEach(o),Mo.forEach(o),bs=u(t),Oe=l(t,"P",{});var Zo=d(Oe);_a=r(Zo,"The NeZha model was proposed in "),wt=l(Zo,"A",{href:!0,rel:!0});var is=d(wt);ba=r(is,"NEZHA: Neural Contextualized Representation for Chinese Language Understanding"),is.forEach(o),ka=r(Zo," by Junqiu Wei et al."),Zo.forEach(o),ks=u(t),jo=l(t,"P",{});var ls=d(jo);$a=r(ls,"The abstract from the paper is the following:"),ls.forEach(o),$s=u(t),Po=l(t,"P",{});var ds=d(Po);pn=l(ds,"EM",{});var cs=d(pn);va=r(cs,`The pre-trained language models have achieved great successes in various natural language understanding (NLU) tasks
due to its capacity to capture the deep contextualized information in text by pre-training on large-scale corpora.
In this technical report, we present our practice of pre-training language models named NEZHA (NEural contextualiZed
representation for CHinese lAnguage understanding) on Chinese corpora and finetuning for the Chinese NLU tasks.
The current version of NEZHA is based on BERT with a collection of proven improvements, which include Functional
Relative Positional Encoding as an effective positional encoding scheme, Whole Word Masking strategy,
Mixed Precision Training and the LAMB Optimizer in training the models. The experimental results show that NEZHA
achieves the state-of-the-art performances when finetuned on several representative Chinese tasks, including
named entity recognition (People\u2019s Daily NER), sentence matching (LCQMC), Chinese sentiment classification (ChnSenti)
and natural language inference (XNLI).`),cs.forEach(o),ds.forEach(o),vs=u(t),te=l(t,"P",{});var Ce=d(te);wa=r(Ce,"This model was contributed by "),Tt=l(Ce,"A",{href:!0,rel:!0});var hs=d(Tt);Ta=r(hs,"sijunhe"),hs.forEach(o),ya=r(Ce,". The original code can be found "),yt=l(Ce,"A",{href:!0,rel:!0});var ps=d(yt);Na=r(ps,"here"),ps.forEach(o),za=r(Ce,"."),Ce.forEach(o),ws=u(t),me=l(t,"H2",{class:!0});var xo=d(me);Se=l(xo,"A",{id:!0,class:!0,href:!0});var ms=d(Se);mn=l(ms,"SPAN",{});var us=d(mn);v(Nt.$$.fragment,us),us.forEach(o),ms.forEach(o),Fa=u(xo),un=l(xo,"SPAN",{});var fs=d(un);Ma=r(fs,"NeZhaConfig"),fs.forEach(o),xo.forEach(o),Ts=u(t),R=l(t,"DIV",{class:!0});var Y=d(R);v(zt.$$.fragment,Y),Za=u(Y),ue=l(Y,"P",{});var Ee=d(ue);xa=r(Ee,"This is the configuration class to store the configuration of an "),qo=l(Ee,"A",{href:!0});var gs=d(qo);ja=r(gs,"NeZhaModel"),gs.forEach(o),Pa=r(Ee,`. It is used to instantiate an NeZha
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Nezha
`),Ft=l(Ee,"A",{href:!0,rel:!0});var xd=d(Ft);qa=r(xd,"sijunhe/nezha-cn-base"),xd.forEach(o),Ca=r(Ee," architecture."),Ee.forEach(o),Ea=u(Y),fe=l(Y,"P",{});var Xo=d(fe);Aa=r(Xo,"Configuration objects inherit from "),Co=l(Xo,"A",{href:!0});var jd=d(Co);Oa=r(jd,"PretrainedConfig"),jd.forEach(o),Sa=r(Xo,` and can be used to control the model outputs. Read the
documentation from `),Eo=l(Xo,"A",{href:!0});var Pd=d(Eo);La=r(Pd,"PretrainedConfig"),Pd.forEach(o),Ia=r(Xo," for more information."),Xo.forEach(o),Da=u(Y),v(Le.$$.fragment,Y),Y.forEach(o),ys=u(t),ge=l(t,"H2",{class:!0});var Ds=d(ge);Ie=l(Ds,"A",{id:!0,class:!0,href:!0});var qd=d(Ie);fn=l(qd,"SPAN",{});var Cd=d(fn);v(Mt.$$.fragment,Cd),Cd.forEach(o),qd.forEach(o),Ba=u(Ds),gn=l(Ds,"SPAN",{});var Ed=d(gn);Wa=r(Ed,"NeZhaModel"),Ed.forEach(o),Ds.forEach(o),Ns=u(t),M=l(t,"DIV",{class:!0});var Q=d(M);v(Zt.$$.fragment,Q),Ha=u(Q),_n=l(Q,"P",{});var Ad=d(_n);Qa=r(Ad,"The bare NeZha Model transformer outputting raw hidden-states without any specific head on top."),Ad.forEach(o),Ua=u(Q),xt=l(Q,"P",{});var Bs=d(xt);Va=r(Bs,"This model inherits from "),Ao=l(Bs,"A",{href:!0});var Od=d(Ao);Ra=r(Od,"PreTrainedModel"),Od.forEach(o),Ja=r(Bs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bs.forEach(o),Ka=u(Q),jt=l(Q,"P",{});var Ws=d(jt);Ga=r(Ws,"This model is also a PyTorch "),Pt=l(Ws,"A",{href:!0,rel:!0});var Sd=d(Pt);Xa=r(Sd,"torch.nn.Module"),Sd.forEach(o),Ya=r(Ws,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ws.forEach(o),er=u(Q),qt=l(Q,"P",{});var Hs=d(qt);tr=r(Hs,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ct=l(Hs,"A",{href:!0,rel:!0});var Ld=d(Ct);or=r(Ld,`Attention is
all you need`),Ld.forEach(o),nr=r(Hs,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Hs.forEach(o),sr=u(Q),x=l(Q,"P",{});var U=d(x);ar=r(U,"To behave as an decoder the model needs to be initialized with the "),bn=l(U,"CODE",{});var Id=d(bn);rr=r(Id,"is_decoder"),Id.forEach(o),ir=r(U,` argument of the configuration set
to `),kn=l(U,"CODE",{});var Dd=d(kn);lr=r(Dd,"True"),Dd.forEach(o),dr=r(U,". To be used in a Seq2Seq model, the model needs to initialized with both "),$n=l(U,"CODE",{});var Bd=d($n);cr=r(Bd,"is_decoder"),Bd.forEach(o),hr=r(U,` argument and
`),vn=l(U,"CODE",{});var Wd=d(vn);pr=r(Wd,"add_cross_attention"),Wd.forEach(o),mr=r(U," set to "),wn=l(U,"CODE",{});var Hd=d(wn);ur=r(Hd,"True"),Hd.forEach(o),fr=r(U,"; an "),Tn=l(U,"CODE",{});var Qd=d(Tn);gr=r(Qd,"encoder_hidden_states"),Qd.forEach(o),_r=r(U," is then expected as an input to the forward pass."),U.forEach(o),br=u(Q),J=l(Q,"DIV",{class:!0});var gt=d(J);v(Et.$$.fragment,gt),kr=u(gt),_e=l(gt,"P",{});var Yo=d(_e);$r=r(Yo,"The "),Oo=l(Yo,"A",{href:!0});var Ud=d(Oo);vr=r(Ud,"NeZhaModel"),Ud.forEach(o),wr=r(Yo," forward method, overrides the "),yn=l(Yo,"CODE",{});var Vd=d(yn);Tr=r(Vd,"__call__"),Vd.forEach(o),yr=r(Yo," special method."),Yo.forEach(o),Nr=u(gt),v(De.$$.fragment,gt),zr=u(gt),v(Be.$$.fragment,gt),gt.forEach(o),Q.forEach(o),zs=u(t),be=l(t,"H2",{class:!0});var Qs=d(be);We=l(Qs,"A",{id:!0,class:!0,href:!0});var Rd=d(We);Nn=l(Rd,"SPAN",{});var Jd=d(Nn);v(At.$$.fragment,Jd),Jd.forEach(o),Rd.forEach(o),Fr=u(Qs),zn=l(Qs,"SPAN",{});var Kd=d(zn);Mr=r(Kd,"NeZhaForPreTraining"),Kd.forEach(o),Qs.forEach(o),Fs=u(t),P=l(t,"DIV",{class:!0});var oe=d(P);v(Ot.$$.fragment,oe),Zr=u(oe),ke=l(oe,"P",{});var en=d(ke);xr=r(en,"NeZha Model with two heads on top as done during the pretraining: a "),Fn=l(en,"CODE",{});var Gd=d(Fn);jr=r(Gd,"masked language modeling"),Gd.forEach(o),Pr=r(en," head and a "),Mn=l(en,"CODE",{});var Xd=d(Mn);qr=r(Xd,"next sentence prediction (classification)"),Xd.forEach(o),Cr=r(en," head."),en.forEach(o),Er=u(oe),St=l(oe,"P",{});var Us=d(St);Ar=r(Us,"This model inherits from "),So=l(Us,"A",{href:!0});var Yd=d(So);Or=r(Yd,"PreTrainedModel"),Yd.forEach(o),Sr=r(Us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Us.forEach(o),Lr=u(oe),Lt=l(oe,"P",{});var Vs=d(Lt);Ir=r(Vs,"This model is also a PyTorch "),It=l(Vs,"A",{href:!0,rel:!0});var ec=d(It);Dr=r(ec,"torch.nn.Module"),ec.forEach(o),Br=r(Vs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vs.forEach(o),Wr=u(oe),K=l(oe,"DIV",{class:!0});var _t=d(K);v(Dt.$$.fragment,_t),Hr=u(_t),$e=l(_t,"P",{});var tn=d($e);Qr=r(tn,"The "),Lo=l(tn,"A",{href:!0});var tc=d(Lo);Ur=r(tc,"NeZhaForPreTraining"),tc.forEach(o),Vr=r(tn," forward method, overrides the "),Zn=l(tn,"CODE",{});var oc=d(Zn);Rr=r(oc,"__call__"),oc.forEach(o),Jr=r(tn," special method."),tn.forEach(o),Kr=u(_t),v(He.$$.fragment,_t),Gr=u(_t),v(Qe.$$.fragment,_t),_t.forEach(o),oe.forEach(o),Ms=u(t),ve=l(t,"H2",{class:!0});var Rs=d(ve);Ue=l(Rs,"A",{id:!0,class:!0,href:!0});var nc=d(Ue);xn=l(nc,"SPAN",{});var sc=d(xn);v(Bt.$$.fragment,sc),sc.forEach(o),nc.forEach(o),Xr=u(Rs),jn=l(Rs,"SPAN",{});var ac=d(jn);Yr=r(ac,"NeZhaForMaskedLM"),ac.forEach(o),Rs.forEach(o),Zs=u(t),q=l(t,"DIV",{class:!0});var ne=d(q);v(Wt.$$.fragment,ne),ei=u(ne),Ht=l(ne,"P",{});var Js=d(Ht);ti=r(Js,"NeZha Model with a "),Pn=l(Js,"CODE",{});var rc=d(Pn);oi=r(rc,"language modeling"),rc.forEach(o),ni=r(Js," head on top."),Js.forEach(o),si=u(ne),Qt=l(ne,"P",{});var Ks=d(Qt);ai=r(Ks,"This model inherits from "),Io=l(Ks,"A",{href:!0});var ic=d(Io);ri=r(ic,"PreTrainedModel"),ic.forEach(o),ii=r(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks.forEach(o),li=u(ne),Ut=l(ne,"P",{});var Gs=d(Ut);di=r(Gs,"This model is also a PyTorch "),Vt=l(Gs,"A",{href:!0,rel:!0});var lc=d(Vt);ci=r(lc,"torch.nn.Module"),lc.forEach(o),hi=r(Gs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gs.forEach(o),pi=u(ne),B=l(ne,"DIV",{class:!0});var se=d(B);v(Rt.$$.fragment,se),mi=u(se),we=l(se,"P",{});var on=d(we);ui=r(on,"The "),Do=l(on,"A",{href:!0});var dc=d(Do);fi=r(dc,"NeZhaForMaskedLM"),dc.forEach(o),gi=r(on," forward method, overrides the "),qn=l(on,"CODE",{});var cc=d(qn);_i=r(cc,"__call__"),cc.forEach(o),bi=r(on," special method."),on.forEach(o),ki=u(se),v(Ve.$$.fragment,se),$i=u(se),v(Re.$$.fragment,se),vi=u(se),v(Je.$$.fragment,se),se.forEach(o),ne.forEach(o),xs=u(t),Te=l(t,"H2",{class:!0});var Xs=d(Te);Ke=l(Xs,"A",{id:!0,class:!0,href:!0});var hc=d(Ke);Cn=l(hc,"SPAN",{});var pc=d(Cn);v(Jt.$$.fragment,pc),pc.forEach(o),hc.forEach(o),wi=u(Xs),En=l(Xs,"SPAN",{});var mc=d(En);Ti=r(mc,"NeZhaForNextSentencePrediction"),mc.forEach(o),Xs.forEach(o),js=u(t),C=l(t,"DIV",{class:!0});var ae=d(C);v(Kt.$$.fragment,ae),yi=u(ae),Gt=l(ae,"P",{});var Ys=d(Gt);Ni=r(Ys,"NeZha Model with a "),An=l(Ys,"CODE",{});var uc=d(An);zi=r(uc,"next sentence prediction (classification)"),uc.forEach(o),Fi=r(Ys," head on top."),Ys.forEach(o),Mi=u(ae),Xt=l(ae,"P",{});var ea=d(Xt);Zi=r(ea,"This model inherits from "),Bo=l(ea,"A",{href:!0});var fc=d(Bo);xi=r(fc,"PreTrainedModel"),fc.forEach(o),ji=r(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(o),Pi=u(ae),Yt=l(ae,"P",{});var ta=d(Yt);qi=r(ta,"This model is also a PyTorch "),eo=l(ta,"A",{href:!0,rel:!0});var gc=d(eo);Ci=r(gc,"torch.nn.Module"),gc.forEach(o),Ei=r(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(o),Ai=u(ae),G=l(ae,"DIV",{class:!0});var bt=d(G);v(to.$$.fragment,bt),Oi=u(bt),ye=l(bt,"P",{});var nn=d(ye);Si=r(nn,"The "),Wo=l(nn,"A",{href:!0});var _c=d(Wo);Li=r(_c,"NeZhaForNextSentencePrediction"),_c.forEach(o),Ii=r(nn," forward method, overrides the "),On=l(nn,"CODE",{});var bc=d(On);Di=r(bc,"__call__"),bc.forEach(o),Bi=r(nn," special method."),nn.forEach(o),Wi=u(bt),v(Ge.$$.fragment,bt),Hi=u(bt),v(Xe.$$.fragment,bt),bt.forEach(o),ae.forEach(o),Ps=u(t),Ne=l(t,"H2",{class:!0});var oa=d(Ne);Ye=l(oa,"A",{id:!0,class:!0,href:!0});var kc=d(Ye);Sn=l(kc,"SPAN",{});var $c=d(Sn);v(oo.$$.fragment,$c),$c.forEach(o),kc.forEach(o),Qi=u(oa),Ln=l(oa,"SPAN",{});var vc=d(Ln);Ui=r(vc,"NeZhaForSequenceClassification"),vc.forEach(o),oa.forEach(o),qs=u(t),E=l(t,"DIV",{class:!0});var re=d(E);v(no.$$.fragment,re),Vi=u(re),In=l(re,"P",{});var wc=d(In);Ri=r(wc,`NeZha Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wc.forEach(o),Ji=u(re),so=l(re,"P",{});var na=d(so);Ki=r(na,"This model inherits from "),Ho=l(na,"A",{href:!0});var Tc=d(Ho);Gi=r(Tc,"PreTrainedModel"),Tc.forEach(o),Xi=r(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(o),Yi=u(re),ao=l(re,"P",{});var sa=d(ao);el=r(sa,"This model is also a PyTorch "),ro=l(sa,"A",{href:!0,rel:!0});var yc=d(ro);tl=r(yc,"torch.nn.Module"),yc.forEach(o),ol=r(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(o),nl=u(re),Z=l(re,"DIV",{class:!0});var V=d(Z);v(io.$$.fragment,V),sl=u(V),ze=l(V,"P",{});var sn=d(ze);al=r(sn,"The "),Qo=l(sn,"A",{href:!0});var Nc=d(Qo);rl=r(Nc,"NeZhaForSequenceClassification"),Nc.forEach(o),il=r(sn," forward method, overrides the "),Dn=l(sn,"CODE",{});var zc=d(Dn);ll=r(zc,"__call__"),zc.forEach(o),dl=r(sn," special method."),sn.forEach(o),cl=u(V),v(et.$$.fragment,V),hl=u(V),v(tt.$$.fragment,V),pl=u(V),v(ot.$$.fragment,V),ml=u(V),v(nt.$$.fragment,V),ul=u(V),v(st.$$.fragment,V),V.forEach(o),re.forEach(o),Cs=u(t),Fe=l(t,"H2",{class:!0});var aa=d(Fe);at=l(aa,"A",{id:!0,class:!0,href:!0});var Fc=d(at);Bn=l(Fc,"SPAN",{});var Mc=d(Bn);v(lo.$$.fragment,Mc),Mc.forEach(o),Fc.forEach(o),fl=u(aa),Wn=l(aa,"SPAN",{});var Zc=d(Wn);gl=r(Zc,"NeZhaForMultipleChoice"),Zc.forEach(o),aa.forEach(o),Es=u(t),A=l(t,"DIV",{class:!0});var ie=d(A);v(co.$$.fragment,ie),_l=u(ie),Hn=l(ie,"P",{});var xc=d(Hn);bl=r(xc,`NeZha Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xc.forEach(o),kl=u(ie),ho=l(ie,"P",{});var ra=d(ho);$l=r(ra,"This model inherits from "),Uo=l(ra,"A",{href:!0});var jc=d(Uo);vl=r(jc,"PreTrainedModel"),jc.forEach(o),wl=r(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(o),Tl=u(ie),po=l(ie,"P",{});var ia=d(po);yl=r(ia,"This model is also a PyTorch "),mo=l(ia,"A",{href:!0,rel:!0});var Pc=d(mo);Nl=r(Pc,"torch.nn.Module"),Pc.forEach(o),zl=r(ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia.forEach(o),Fl=u(ie),X=l(ie,"DIV",{class:!0});var kt=d(X);v(uo.$$.fragment,kt),Ml=u(kt),Me=l(kt,"P",{});var an=d(Me);Zl=r(an,"The "),Vo=l(an,"A",{href:!0});var qc=d(Vo);xl=r(qc,"NeZhaForMultipleChoice"),qc.forEach(o),jl=r(an," forward method, overrides the "),Qn=l(an,"CODE",{});var Cc=d(Qn);Pl=r(Cc,"__call__"),Cc.forEach(o),ql=r(an," special method."),an.forEach(o),Cl=u(kt),v(rt.$$.fragment,kt),El=u(kt),v(it.$$.fragment,kt),kt.forEach(o),ie.forEach(o),As=u(t),Ze=l(t,"H2",{class:!0});var la=d(Ze);lt=l(la,"A",{id:!0,class:!0,href:!0});var Ec=d(lt);Un=l(Ec,"SPAN",{});var Ac=d(Un);v(fo.$$.fragment,Ac),Ac.forEach(o),Ec.forEach(o),Al=u(la),Vn=l(la,"SPAN",{});var Oc=d(Vn);Ol=r(Oc,"NeZhaForTokenClassification"),Oc.forEach(o),la.forEach(o),Os=u(t),O=l(t,"DIV",{class:!0});var le=d(O);v(go.$$.fragment,le),Sl=u(le),Rn=l(le,"P",{});var Sc=d(Rn);Ll=r(Sc,`NeZha Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sc.forEach(o),Il=u(le),_o=l(le,"P",{});var da=d(_o);Dl=r(da,"This model inherits from "),Ro=l(da,"A",{href:!0});var Lc=d(Ro);Bl=r(Lc,"PreTrainedModel"),Lc.forEach(o),Wl=r(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(o),Hl=u(le),bo=l(le,"P",{});var ca=d(bo);Ql=r(ca,"This model is also a PyTorch "),ko=l(ca,"A",{href:!0,rel:!0});var Ic=d(ko);Ul=r(Ic,"torch.nn.Module"),Ic.forEach(o),Vl=r(ca,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ca.forEach(o),Rl=u(le),W=l(le,"DIV",{class:!0});var de=d(W);v($o.$$.fragment,de),Jl=u(de),xe=l(de,"P",{});var rn=d(xe);Kl=r(rn,"The "),Jo=l(rn,"A",{href:!0});var Dc=d(Jo);Gl=r(Dc,"NeZhaForTokenClassification"),Dc.forEach(o),Xl=r(rn," forward method, overrides the "),Jn=l(rn,"CODE",{});var Bc=d(Jn);Yl=r(Bc,"__call__"),Bc.forEach(o),ed=r(rn," special method."),rn.forEach(o),td=u(de),v(dt.$$.fragment,de),od=u(de),v(ct.$$.fragment,de),nd=u(de),v(ht.$$.fragment,de),de.forEach(o),le.forEach(o),Ss=u(t),je=l(t,"H2",{class:!0});var ha=d(je);pt=l(ha,"A",{id:!0,class:!0,href:!0});var Wc=d(pt);Kn=l(Wc,"SPAN",{});var Hc=d(Kn);v(vo.$$.fragment,Hc),Hc.forEach(o),Wc.forEach(o),sd=u(ha),Gn=l(ha,"SPAN",{});var Qc=d(Gn);ad=r(Qc,"NeZhaForQuestionAnswering"),Qc.forEach(o),ha.forEach(o),Ls=u(t),S=l(t,"DIV",{class:!0});var ce=d(S);v(wo.$$.fragment,ce),rd=u(ce),Pe=l(ce,"P",{});var ln=d(Pe);id=r(ln,`NeZha Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xn=l(ln,"CODE",{});var Uc=d(Xn);ld=r(Uc,"span start logits"),Uc.forEach(o),dd=r(ln," and "),Yn=l(ln,"CODE",{});var Vc=d(Yn);cd=r(Vc,"span end logits"),Vc.forEach(o),hd=r(ln,")."),ln.forEach(o),pd=u(ce),To=l(ce,"P",{});var pa=d(To);md=r(pa,"This model inherits from "),Ko=l(pa,"A",{href:!0});var Rc=d(Ko);ud=r(Rc,"PreTrainedModel"),Rc.forEach(o),fd=r(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(o),gd=u(ce),yo=l(ce,"P",{});var ma=d(yo);_d=r(ma,"This model is also a PyTorch "),No=l(ma,"A",{href:!0,rel:!0});var Jc=d(No);bd=r(Jc,"torch.nn.Module"),Jc.forEach(o),kd=r(ma,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ma.forEach(o),$d=u(ce),H=l(ce,"DIV",{class:!0});var he=d(H);v(zo.$$.fragment,he),vd=u(he),qe=l(he,"P",{});var dn=d(qe);wd=r(dn,"The "),Go=l(dn,"A",{href:!0});var Kc=d(Go);Td=r(Kc,"NeZhaForQuestionAnswering"),Kc.forEach(o),yd=r(dn," forward method, overrides the "),es=l(dn,"CODE",{});var Gc=d(es);Nd=r(Gc,"__call__"),Gc.forEach(o),zd=r(dn," special method."),dn.forEach(o),Fd=u(he),v(mt.$$.fragment,he),Md=u(he),v(ut.$$.fragment,he),Zd=u(he),v(ft.$$.fragment,he),he.forEach(o),ce.forEach(o),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(Fh)),f(h,"id","nezha"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#nezha"),f(c,"class","relative group"),f(Ae,"id","overview"),f(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ae,"href","#overview"),f(pe,"class","relative group"),f(wt,"href","https://arxiv.org/abs/1909.00204"),f(wt,"rel","nofollow"),f(Tt,"href","https://huggingface.co/sijunhe"),f(Tt,"rel","nofollow"),f(yt,"href","https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/NEZHA-PyTorch"),f(yt,"rel","nofollow"),f(Se,"id","transformers.NeZhaConfig"),f(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Se,"href","#transformers.NeZhaConfig"),f(me,"class","relative group"),f(qo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaModel"),f(Ft,"href","https://huggingface.co/sijunhe/nezha-cn-base"),f(Ft,"rel","nofollow"),f(Co,"href","/docs/transformers/pr_17776/en/main_classes/configuration#transformers.PretrainedConfig"),f(Eo,"href","/docs/transformers/pr_17776/en/main_classes/configuration#transformers.PretrainedConfig"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"id","transformers.NeZhaModel"),f(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ie,"href","#transformers.NeZhaModel"),f(ge,"class","relative group"),f(Ao,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Pt,"rel","nofollow"),f(Ct,"href","https://arxiv.org/abs/1706.03762"),f(Ct,"rel","nofollow"),f(Oo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaModel"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"id","transformers.NeZhaForPreTraining"),f(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(We,"href","#transformers.NeZhaForPreTraining"),f(be,"class","relative group"),f(So,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(It,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(It,"rel","nofollow"),f(Lo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForPreTraining"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"id","transformers.NeZhaForMaskedLM"),f(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ue,"href","#transformers.NeZhaForMaskedLM"),f(ve,"class","relative group"),f(Io,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Vt,"rel","nofollow"),f(Do,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForMaskedLM"),f(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"id","transformers.NeZhaForNextSentencePrediction"),f(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ke,"href","#transformers.NeZhaForNextSentencePrediction"),f(Te,"class","relative group"),f(Bo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(eo,"rel","nofollow"),f(Wo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForNextSentencePrediction"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"id","transformers.NeZhaForSequenceClassification"),f(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ye,"href","#transformers.NeZhaForSequenceClassification"),f(Ne,"class","relative group"),f(Ho,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ro,"rel","nofollow"),f(Qo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForSequenceClassification"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"id","transformers.NeZhaForMultipleChoice"),f(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(at,"href","#transformers.NeZhaForMultipleChoice"),f(Fe,"class","relative group"),f(Uo,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(mo,"rel","nofollow"),f(Vo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForMultipleChoice"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"id","transformers.NeZhaForTokenClassification"),f(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(lt,"href","#transformers.NeZhaForTokenClassification"),f(Ze,"class","relative group"),f(Ro,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ko,"rel","nofollow"),f(Jo,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForTokenClassification"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"id","transformers.NeZhaForQuestionAnswering"),f(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pt,"href","#transformers.NeZhaForQuestionAnswering"),f(je,"class","relative group"),f(Ko,"href","/docs/transformers/pr_17776/en/main_classes/model#transformers.PreTrainedModel"),f(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(No,"rel","nofollow"),f(Go,"href","/docs/transformers/pr_17776/en/model_doc/nezha#transformers.NeZhaForQuestionAnswering"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,s),k(t,g,_),k(t,c,_),e(c,h),e(h,b),w(n,b,null),e(c,p),e(c,F),e(F,ua),k(t,_s,_),k(t,pe,_),e(pe,Ae),e(Ae,cn),w(vt,cn,null),e(pe,fa),e(pe,hn),e(hn,ga),k(t,bs,_),k(t,Oe,_),e(Oe,_a),e(Oe,wt),e(wt,ba),e(Oe,ka),k(t,ks,_),k(t,jo,_),e(jo,$a),k(t,$s,_),k(t,Po,_),e(Po,pn),e(pn,va),k(t,vs,_),k(t,te,_),e(te,wa),e(te,Tt),e(Tt,Ta),e(te,ya),e(te,yt),e(yt,Na),e(te,za),k(t,ws,_),k(t,me,_),e(me,Se),e(Se,mn),w(Nt,mn,null),e(me,Fa),e(me,un),e(un,Ma),k(t,Ts,_),k(t,R,_),w(zt,R,null),e(R,Za),e(R,ue),e(ue,xa),e(ue,qo),e(qo,ja),e(ue,Pa),e(ue,Ft),e(Ft,qa),e(ue,Ca),e(R,Ea),e(R,fe),e(fe,Aa),e(fe,Co),e(Co,Oa),e(fe,Sa),e(fe,Eo),e(Eo,La),e(fe,Ia),e(R,Da),w(Le,R,null),k(t,ys,_),k(t,ge,_),e(ge,Ie),e(Ie,fn),w(Mt,fn,null),e(ge,Ba),e(ge,gn),e(gn,Wa),k(t,Ns,_),k(t,M,_),w(Zt,M,null),e(M,Ha),e(M,_n),e(_n,Qa),e(M,Ua),e(M,xt),e(xt,Va),e(xt,Ao),e(Ao,Ra),e(xt,Ja),e(M,Ka),e(M,jt),e(jt,Ga),e(jt,Pt),e(Pt,Xa),e(jt,Ya),e(M,er),e(M,qt),e(qt,tr),e(qt,Ct),e(Ct,or),e(qt,nr),e(M,sr),e(M,x),e(x,ar),e(x,bn),e(bn,rr),e(x,ir),e(x,kn),e(kn,lr),e(x,dr),e(x,$n),e($n,cr),e(x,hr),e(x,vn),e(vn,pr),e(x,mr),e(x,wn),e(wn,ur),e(x,fr),e(x,Tn),e(Tn,gr),e(x,_r),e(M,br),e(M,J),w(Et,J,null),e(J,kr),e(J,_e),e(_e,$r),e(_e,Oo),e(Oo,vr),e(_e,wr),e(_e,yn),e(yn,Tr),e(_e,yr),e(J,Nr),w(De,J,null),e(J,zr),w(Be,J,null),k(t,zs,_),k(t,be,_),e(be,We),e(We,Nn),w(At,Nn,null),e(be,Fr),e(be,zn),e(zn,Mr),k(t,Fs,_),k(t,P,_),w(Ot,P,null),e(P,Zr),e(P,ke),e(ke,xr),e(ke,Fn),e(Fn,jr),e(ke,Pr),e(ke,Mn),e(Mn,qr),e(ke,Cr),e(P,Er),e(P,St),e(St,Ar),e(St,So),e(So,Or),e(St,Sr),e(P,Lr),e(P,Lt),e(Lt,Ir),e(Lt,It),e(It,Dr),e(Lt,Br),e(P,Wr),e(P,K),w(Dt,K,null),e(K,Hr),e(K,$e),e($e,Qr),e($e,Lo),e(Lo,Ur),e($e,Vr),e($e,Zn),e(Zn,Rr),e($e,Jr),e(K,Kr),w(He,K,null),e(K,Gr),w(Qe,K,null),k(t,Ms,_),k(t,ve,_),e(ve,Ue),e(Ue,xn),w(Bt,xn,null),e(ve,Xr),e(ve,jn),e(jn,Yr),k(t,Zs,_),k(t,q,_),w(Wt,q,null),e(q,ei),e(q,Ht),e(Ht,ti),e(Ht,Pn),e(Pn,oi),e(Ht,ni),e(q,si),e(q,Qt),e(Qt,ai),e(Qt,Io),e(Io,ri),e(Qt,ii),e(q,li),e(q,Ut),e(Ut,di),e(Ut,Vt),e(Vt,ci),e(Ut,hi),e(q,pi),e(q,B),w(Rt,B,null),e(B,mi),e(B,we),e(we,ui),e(we,Do),e(Do,fi),e(we,gi),e(we,qn),e(qn,_i),e(we,bi),e(B,ki),w(Ve,B,null),e(B,$i),w(Re,B,null),e(B,vi),w(Je,B,null),k(t,xs,_),k(t,Te,_),e(Te,Ke),e(Ke,Cn),w(Jt,Cn,null),e(Te,wi),e(Te,En),e(En,Ti),k(t,js,_),k(t,C,_),w(Kt,C,null),e(C,yi),e(C,Gt),e(Gt,Ni),e(Gt,An),e(An,zi),e(Gt,Fi),e(C,Mi),e(C,Xt),e(Xt,Zi),e(Xt,Bo),e(Bo,xi),e(Xt,ji),e(C,Pi),e(C,Yt),e(Yt,qi),e(Yt,eo),e(eo,Ci),e(Yt,Ei),e(C,Ai),e(C,G),w(to,G,null),e(G,Oi),e(G,ye),e(ye,Si),e(ye,Wo),e(Wo,Li),e(ye,Ii),e(ye,On),e(On,Di),e(ye,Bi),e(G,Wi),w(Ge,G,null),e(G,Hi),w(Xe,G,null),k(t,Ps,_),k(t,Ne,_),e(Ne,Ye),e(Ye,Sn),w(oo,Sn,null),e(Ne,Qi),e(Ne,Ln),e(Ln,Ui),k(t,qs,_),k(t,E,_),w(no,E,null),e(E,Vi),e(E,In),e(In,Ri),e(E,Ji),e(E,so),e(so,Ki),e(so,Ho),e(Ho,Gi),e(so,Xi),e(E,Yi),e(E,ao),e(ao,el),e(ao,ro),e(ro,tl),e(ao,ol),e(E,nl),e(E,Z),w(io,Z,null),e(Z,sl),e(Z,ze),e(ze,al),e(ze,Qo),e(Qo,rl),e(ze,il),e(ze,Dn),e(Dn,ll),e(ze,dl),e(Z,cl),w(et,Z,null),e(Z,hl),w(tt,Z,null),e(Z,pl),w(ot,Z,null),e(Z,ml),w(nt,Z,null),e(Z,ul),w(st,Z,null),k(t,Cs,_),k(t,Fe,_),e(Fe,at),e(at,Bn),w(lo,Bn,null),e(Fe,fl),e(Fe,Wn),e(Wn,gl),k(t,Es,_),k(t,A,_),w(co,A,null),e(A,_l),e(A,Hn),e(Hn,bl),e(A,kl),e(A,ho),e(ho,$l),e(ho,Uo),e(Uo,vl),e(ho,wl),e(A,Tl),e(A,po),e(po,yl),e(po,mo),e(mo,Nl),e(po,zl),e(A,Fl),e(A,X),w(uo,X,null),e(X,Ml),e(X,Me),e(Me,Zl),e(Me,Vo),e(Vo,xl),e(Me,jl),e(Me,Qn),e(Qn,Pl),e(Me,ql),e(X,Cl),w(rt,X,null),e(X,El),w(it,X,null),k(t,As,_),k(t,Ze,_),e(Ze,lt),e(lt,Un),w(fo,Un,null),e(Ze,Al),e(Ze,Vn),e(Vn,Ol),k(t,Os,_),k(t,O,_),w(go,O,null),e(O,Sl),e(O,Rn),e(Rn,Ll),e(O,Il),e(O,_o),e(_o,Dl),e(_o,Ro),e(Ro,Bl),e(_o,Wl),e(O,Hl),e(O,bo),e(bo,Ql),e(bo,ko),e(ko,Ul),e(bo,Vl),e(O,Rl),e(O,W),w($o,W,null),e(W,Jl),e(W,xe),e(xe,Kl),e(xe,Jo),e(Jo,Gl),e(xe,Xl),e(xe,Jn),e(Jn,Yl),e(xe,ed),e(W,td),w(dt,W,null),e(W,od),w(ct,W,null),e(W,nd),w(ht,W,null),k(t,Ss,_),k(t,je,_),e(je,pt),e(pt,Kn),w(vo,Kn,null),e(je,sd),e(je,Gn),e(Gn,ad),k(t,Ls,_),k(t,S,_),w(wo,S,null),e(S,rd),e(S,Pe),e(Pe,id),e(Pe,Xn),e(Xn,ld),e(Pe,dd),e(Pe,Yn),e(Yn,cd),e(Pe,hd),e(S,pd),e(S,To),e(To,md),e(To,Ko),e(Ko,ud),e(To,fd),e(S,gd),e(S,yo),e(yo,_d),e(yo,No),e(No,bd),e(yo,kd),e(S,$d),e(S,H),w(zo,H,null),e(H,vd),e(H,qe),e(qe,wd),e(qe,Go),e(Go,Td),e(qe,yd),e(qe,es),e(es,Nd),e(qe,zd),e(H,Fd),w(mt,H,null),e(H,Md),w(ut,H,null),e(H,Zd),w(ft,H,null),Is=!0},p(t,[_]){const Fo={};_&2&&(Fo.$$scope={dirty:_,ctx:t}),Le.$set(Fo);const ts={};_&2&&(ts.$$scope={dirty:_,ctx:t}),De.$set(ts);const os={};_&2&&(os.$$scope={dirty:_,ctx:t}),Be.$set(os);const ns={};_&2&&(ns.$$scope={dirty:_,ctx:t}),He.$set(ns);const Mo={};_&2&&(Mo.$$scope={dirty:_,ctx:t}),Qe.$set(Mo);const ss={};_&2&&(ss.$$scope={dirty:_,ctx:t}),Ve.$set(ss);const as={};_&2&&(as.$$scope={dirty:_,ctx:t}),Re.$set(as);const rs={};_&2&&(rs.$$scope={dirty:_,ctx:t}),Je.$set(rs);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:t}),Ge.$set(Zo);const is={};_&2&&(is.$$scope={dirty:_,ctx:t}),Xe.$set(is);const ls={};_&2&&(ls.$$scope={dirty:_,ctx:t}),et.$set(ls);const ds={};_&2&&(ds.$$scope={dirty:_,ctx:t}),tt.$set(ds);const cs={};_&2&&(cs.$$scope={dirty:_,ctx:t}),ot.$set(cs);const Ce={};_&2&&(Ce.$$scope={dirty:_,ctx:t}),nt.$set(Ce);const hs={};_&2&&(hs.$$scope={dirty:_,ctx:t}),st.$set(hs);const ps={};_&2&&(ps.$$scope={dirty:_,ctx:t}),rt.$set(ps);const xo={};_&2&&(xo.$$scope={dirty:_,ctx:t}),it.$set(xo);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:t}),dt.$set(ms);const us={};_&2&&(us.$$scope={dirty:_,ctx:t}),ct.$set(us);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:t}),ht.$set(fs);const Y={};_&2&&(Y.$$scope={dirty:_,ctx:t}),mt.$set(Y);const Ee={};_&2&&(Ee.$$scope={dirty:_,ctx:t}),ut.$set(Ee);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:t}),ft.$set(gs)},i(t){Is||(T(n.$$.fragment,t),T(vt.$$.fragment,t),T(Nt.$$.fragment,t),T(zt.$$.fragment,t),T(Le.$$.fragment,t),T(Mt.$$.fragment,t),T(Zt.$$.fragment,t),T(Et.$$.fragment,t),T(De.$$.fragment,t),T(Be.$$.fragment,t),T(At.$$.fragment,t),T(Ot.$$.fragment,t),T(Dt.$$.fragment,t),T(He.$$.fragment,t),T(Qe.$$.fragment,t),T(Bt.$$.fragment,t),T(Wt.$$.fragment,t),T(Rt.$$.fragment,t),T(Ve.$$.fragment,t),T(Re.$$.fragment,t),T(Je.$$.fragment,t),T(Jt.$$.fragment,t),T(Kt.$$.fragment,t),T(to.$$.fragment,t),T(Ge.$$.fragment,t),T(Xe.$$.fragment,t),T(oo.$$.fragment,t),T(no.$$.fragment,t),T(io.$$.fragment,t),T(et.$$.fragment,t),T(tt.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(lo.$$.fragment,t),T(co.$$.fragment,t),T(uo.$$.fragment,t),T(rt.$$.fragment,t),T(it.$$.fragment,t),T(fo.$$.fragment,t),T(go.$$.fragment,t),T($o.$$.fragment,t),T(dt.$$.fragment,t),T(ct.$$.fragment,t),T(ht.$$.fragment,t),T(vo.$$.fragment,t),T(wo.$$.fragment,t),T(zo.$$.fragment,t),T(mt.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),Is=!0)},o(t){y(n.$$.fragment,t),y(vt.$$.fragment,t),y(Nt.$$.fragment,t),y(zt.$$.fragment,t),y(Le.$$.fragment,t),y(Mt.$$.fragment,t),y(Zt.$$.fragment,t),y(Et.$$.fragment,t),y(De.$$.fragment,t),y(Be.$$.fragment,t),y(At.$$.fragment,t),y(Ot.$$.fragment,t),y(Dt.$$.fragment,t),y(He.$$.fragment,t),y(Qe.$$.fragment,t),y(Bt.$$.fragment,t),y(Wt.$$.fragment,t),y(Rt.$$.fragment,t),y(Ve.$$.fragment,t),y(Re.$$.fragment,t),y(Je.$$.fragment,t),y(Jt.$$.fragment,t),y(Kt.$$.fragment,t),y(to.$$.fragment,t),y(Ge.$$.fragment,t),y(Xe.$$.fragment,t),y(oo.$$.fragment,t),y(no.$$.fragment,t),y(io.$$.fragment,t),y(et.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(nt.$$.fragment,t),y(st.$$.fragment,t),y(lo.$$.fragment,t),y(co.$$.fragment,t),y(uo.$$.fragment,t),y(rt.$$.fragment,t),y(it.$$.fragment,t),y(fo.$$.fragment,t),y(go.$$.fragment,t),y($o.$$.fragment,t),y(dt.$$.fragment,t),y(ct.$$.fragment,t),y(ht.$$.fragment,t),y(vo.$$.fragment,t),y(wo.$$.fragment,t),y(zo.$$.fragment,t),y(mt.$$.fragment,t),y(ut.$$.fragment,t),y(ft.$$.fragment,t),Is=!1},d(t){o(s),t&&o(g),t&&o(c),N(n),t&&o(_s),t&&o(pe),N(vt),t&&o(bs),t&&o(Oe),t&&o(ks),t&&o(jo),t&&o($s),t&&o(Po),t&&o(vs),t&&o(te),t&&o(ws),t&&o(me),N(Nt),t&&o(Ts),t&&o(R),N(zt),N(Le),t&&o(ys),t&&o(ge),N(Mt),t&&o(Ns),t&&o(M),N(Zt),N(Et),N(De),N(Be),t&&o(zs),t&&o(be),N(At),t&&o(Fs),t&&o(P),N(Ot),N(Dt),N(He),N(Qe),t&&o(Ms),t&&o(ve),N(Bt),t&&o(Zs),t&&o(q),N(Wt),N(Rt),N(Ve),N(Re),N(Je),t&&o(xs),t&&o(Te),N(Jt),t&&o(js),t&&o(C),N(Kt),N(to),N(Ge),N(Xe),t&&o(Ps),t&&o(Ne),N(oo),t&&o(qs),t&&o(E),N(no),N(io),N(et),N(tt),N(ot),N(nt),N(st),t&&o(Cs),t&&o(Fe),N(lo),t&&o(Es),t&&o(A),N(co),N(uo),N(rt),N(it),t&&o(As),t&&o(Ze),N(fo),t&&o(Os),t&&o(O),N(go),N($o),N(dt),N(ct),N(ht),t&&o(Ss),t&&o(je),N(vo),t&&o(Ls),t&&o(S),N(wo),N(zo),N(mt),N(ut),N(ft)}}}const Fh={local:"nezha",sections:[{local:"overview",title:"Overview"},{local:"transformers.NeZhaConfig",title:"NeZhaConfig"},{local:"transformers.NeZhaModel",title:"NeZhaModel"},{local:"transformers.NeZhaForPreTraining",title:"NeZhaForPreTraining"},{local:"transformers.NeZhaForMaskedLM",title:"NeZhaForMaskedLM"},{local:"transformers.NeZhaForNextSentencePrediction",title:"NeZhaForNextSentencePrediction"},{local:"transformers.NeZhaForSequenceClassification",title:"NeZhaForSequenceClassification"},{local:"transformers.NeZhaForMultipleChoice",title:"NeZhaForMultipleChoice"},{local:"transformers.NeZhaForTokenClassification",title:"NeZhaForTokenClassification"},{local:"transformers.NeZhaForQuestionAnswering",title:"NeZhaForQuestionAnswering"}],title:"NeZha"};function Mh(z){return oh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Eh extends Xc{constructor(s){super();Yc(this,s,Mh,zh,eh,{})}}export{Eh as default,Fh as metadata};
