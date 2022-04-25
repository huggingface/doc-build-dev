import{S as cm,i as hm,s as pm,e as a,k as m,w as v,t as r,M as mm,c as i,d as o,m as g,a as l,x as M,h as s,b as f,F as e,g as b,y as w,q as $,o as T,B as y,v as gm,L as j}from"../../chunks/vendor-6b77c823.js";import{T as We}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as z}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as te}from"../../chunks/IconCopyLink-7a11ce68.js";import{E}from"../../chunks/ExampleCodeBlock-5212b321.js";function um(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import MegatronBertModel, MegatronBertConfig

# Initializing a MEGATRON_BERT bert-base-uncased style configuration
configuration = MegatronBertConfig()

# Initializing a model from the bert-base-uncased style configuration
model = MegatronBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MegatronBertModel, MegatronBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MEGATRON_BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MegatronBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=r("Examples:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Examples:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function fm(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function _m(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertModel
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertModel.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertModel.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function bm(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function km(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForMaskedLM.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function vm(B){let d,_;return d=new z({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Mm(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function wm(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForCausalLM, MegatronBertConfig
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForCausalLM.from_pretrained("nvidia/megatron-bert-cased-345m", is_decoder=True)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForCausalLM, MegatronBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, is_decoder=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function $m(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function Tm(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForNextSentencePrediction.from_pretrained("nvidia/megatron-bert-cased-345m")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function ym(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function Bm(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForPreTraining.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function Fm(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function zm(B){let d,_,c,p,k;return p=new z({props:{code:`import torch
from transformers import BertTokenizer, MegatronBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=r("Example of single-label classification:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example of single-label classification:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function xm(B){let d,_;return d=new z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Pm(B){let d,_,c,p,k;return p=new z({props:{code:`import torch
from transformers import BertTokenizer, MegatronBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=r("Example of multi-label classification:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example of multi-label classification:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function qm(B){let d,_;return d=new z({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MegatronBertForSequenceClassification.from_pretrained("nvidia/megatron-bert-cased-345m", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Cm(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function Em(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForMultipleChoice.from_pretrained("nvidia/megatron-bert-cased-345m")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function jm(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function Am(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForTokenClassification.from_pretrained("nvidia/megatron-bert-cased-345m")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

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
`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function Sm(B){let d,_;return d=new z({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Nm(B){let d,_,c,p,k;return{c(){d=a("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),p=r("Module"),k=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i(h,"CODE",{});var F=l(c);p=s(F,"Module"),F.forEach(o),k=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){b(n,d,h),e(d,_),e(d,c),e(c,p),e(d,k)},d(n){n&&o(d)}}}function Lm(B){let d,_,c,p,k;return p=new z({props:{code:`from transformers import BertTokenizer, MegatronBertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("nvidia/megatron-bert-cased-345m")
model = MegatronBertForQuestionAnswering.from_pretrained("nvidia/megatron-bert-cased-345m")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, MegatronBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MegatronBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;nvidia/megatron-bert-cased-345m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),_=r("Example:"),c=m(),v(p.$$.fragment)},l(n){d=i(n,"P",{});var h=l(d);_=s(h,"Example:"),h.forEach(o),c=g(n),M(p.$$.fragment,n)},m(n,h){b(n,d,h),e(d,_),b(n,c,h),w(p,n,h),k=!0},p:j,i(n){k||($(p.$$.fragment,n),k=!0)},o(n){T(p.$$.fragment,n),k=!1},d(n){n&&o(d),n&&o(c),y(p,n)}}}function Im(B){let d,_;return d=new z({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:j,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Om(B){let d,_,c,p,k,n,h,F,Ta,ls,fe,Re,Qn,Et,ya,Gn,Ba,ds,He,Fa,jt,za,xa,cs,nn,Pa,hs,rn,Vn,qa,ps,sn,Ca,ms,Ue,Ea,At,ja,Aa,gs,oe,Sa,St,Na,La,Nt,Ia,Oa,us,an,Da,fs,ln,Wa,_s,Lt,bs,dn,Ra,ks,It,vs,cn,Ha,Ms,ne,Ua,Jn,Qa,Ga,Kn,Va,Ja,ws,Ot,$s,Dt,Ts,re,Ka,Wt,Ya,Xa,Rt,Za,ei,ys,_e,Qe,Yn,Ht,ti,Xn,oi,Bs,J,Ut,ni,be,ri,hn,si,ai,Qt,ii,li,di,ke,ci,pn,hi,pi,mn,mi,gi,ui,Ge,Fs,ve,Ve,Zn,Gt,fi,er,_i,zs,x,Vt,bi,tr,ki,vi,Jt,Mi,gn,wi,$i,Ti,Kt,yi,Yt,Bi,Fi,zi,Xt,xi,Zt,Pi,qi,Ci,C,Ei,or,ji,Ai,nr,Si,Ni,rr,Li,Ii,sr,Oi,Di,ar,Wi,Ri,ir,Hi,Ui,Qi,K,eo,Gi,Me,Vi,un,Ji,Ki,lr,Yi,Xi,Zi,Je,el,Ke,xs,we,Ye,dr,to,tl,cr,ol,Ps,A,oo,nl,no,rl,hr,sl,al,il,ro,ll,fn,dl,cl,hl,so,pl,ao,ml,gl,ul,R,io,fl,$e,_l,_n,bl,kl,pr,vl,Ml,wl,Xe,$l,Ze,Tl,et,qs,Te,tt,mr,lo,yl,gr,Bl,Cs,S,co,Fl,ho,zl,ur,xl,Pl,ql,po,Cl,bn,El,jl,Al,mo,Sl,go,Nl,Ll,Il,Y,uo,Ol,ye,Dl,kn,Wl,Rl,fr,Hl,Ul,Ql,ot,Gl,nt,Es,Be,rt,_r,fo,Vl,br,Jl,js,N,_o,Kl,bo,Yl,kr,Xl,Zl,ed,ko,td,vn,od,nd,rd,vo,sd,Mo,ad,id,ld,X,wo,dd,Fe,cd,Mn,hd,pd,vr,md,gd,ud,st,fd,at,As,ze,it,Mr,$o,_d,wr,bd,Ss,L,To,kd,xe,vd,$r,Md,wd,Tr,$d,Td,yd,yo,Bd,wn,Fd,zd,xd,Bo,Pd,Fo,qd,Cd,Ed,Z,zo,jd,Pe,Ad,$n,Sd,Nd,yr,Ld,Id,Od,lt,Dd,dt,Ns,qe,ct,Br,xo,Wd,Fr,Rd,Ls,I,Po,Hd,zr,Ud,Qd,qo,Gd,Tn,Vd,Jd,Kd,Co,Yd,Eo,Xd,Zd,ec,q,jo,tc,Ce,oc,yn,nc,rc,xr,sc,ac,ic,ht,lc,pt,dc,mt,cc,gt,hc,ut,Is,Ee,ft,Pr,Ao,pc,qr,mc,Os,O,So,gc,Cr,uc,fc,No,_c,Bn,bc,kc,vc,Lo,Mc,Io,wc,$c,Tc,ee,Oo,yc,je,Bc,Fn,Fc,zc,Er,xc,Pc,qc,_t,Cc,bt,Ds,Ae,kt,jr,Do,Ec,Ar,jc,Ws,D,Wo,Ac,Sr,Sc,Nc,Ro,Lc,zn,Ic,Oc,Dc,Ho,Wc,Uo,Rc,Hc,Uc,H,Qo,Qc,Se,Gc,xn,Vc,Jc,Nr,Kc,Yc,Xc,vt,Zc,Mt,eh,wt,Rs,Ne,$t,Lr,Go,th,Ir,oh,Hs,W,Vo,nh,Le,rh,Or,sh,ah,Dr,ih,lh,dh,Jo,ch,Pn,hh,ph,mh,Ko,gh,Yo,uh,fh,_h,U,Xo,bh,Ie,kh,qn,vh,Mh,Wr,wh,$h,Th,Tt,yh,yt,Bh,Bt,Us;return n=new te({}),Et=new te({}),Lt=new z({props:{code:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_uncased/zip
-O megatron_bert_345m_v0_1_uncased.zip`,highlighted:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_uncased/zip
-O megatron_bert_345m_v0_1_uncased.zip`}}),It=new z({props:{code:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_cased/zip -O
megatron_bert_345m_v0_1_cased.zip`,highlighted:`wget --content-disposition https://api.ngc.nvidia.com/v2/models/nvidia/megatron_bert_345m/versions/v0.1_cased/zip -O
megatron_bert_345m_v0_1_cased.zip`}}),Ot=new z({props:{code:"python3 $PATH_TO_TRANSFORMERS/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_uncased.zip",highlighted:'python3 <span class="hljs-variable">$PATH_TO_TRANSFORMERS</span>/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_uncased.zip'}}),Dt=new z({props:{code:"python3 $PATH_TO_TRANSFORMERS/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_cased.zip",highlighted:'python3 <span class="hljs-variable">$PATH_TO_TRANSFORMERS</span>/models/megatron_bert/convert_megatron_bert_checkpoint.py megatron_bert_345m_v0_1_cased.zip'}}),Ht=new te({}),Ut=new P({props:{name:"class transformers.MegatronBertConfig",anchor:"transformers.MegatronBertConfig",parameters:[{name:"vocab_size",val:" = 29056"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 29056) &#x2014;
Vocabulary size of the MEGATRON_BERT model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertModel">MegatronBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MegatronBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MegatronBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MegatronBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MegatronBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MegatronBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MegatronBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MegatronBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MegatronBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MegatronBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertModel">MegatronBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MegatronBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MegatronBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MegatronBertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.MegatronBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/configuration_megatron_bert.py#L28"}}),Ge=new E({props:{anchor:"transformers.MegatronBertConfig.example",$$slots:{default:[um]},$$scope:{ctx:B}}}),Gt=new te({}),Vt=new P({props:{name:"class transformers.MegatronBertModel",anchor:"transformers.MegatronBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MegatronBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L835"}}),eo=new P({props:{name:"forward",anchor:"transformers.MegatronBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MegatronBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.MegatronBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MegatronBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L874",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new We({props:{$$slots:{default:[fm]},$$scope:{ctx:B}}}),Ke=new E({props:{anchor:"transformers.MegatronBertModel.forward.example",$$slots:{default:[_m]},$$scope:{ctx:B}}}),to=new te({}),oo=new P({props:{name:"class transformers.MegatronBertForMaskedLM",anchor:"transformers.MegatronBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1262"}}),io=new P({props:{name:"forward",anchor:"transformers.MegatronBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1288",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),Xe=new We({props:{$$slots:{default:[bm]},$$scope:{ctx:B}}}),Ze=new E({props:{anchor:"transformers.MegatronBertForMaskedLM.forward.example",$$slots:{default:[km]},$$scope:{ctx:B}}}),et=new E({props:{anchor:"transformers.MegatronBertForMaskedLM.forward.example-2",$$slots:{default:[vm]},$$scope:{ctx:B}}}),lo=new te({}),co=new P({props:{name:"class transformers.MegatronBertForCausalLM",anchor:"transformers.MegatronBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1116"}}),uo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MegatronBertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.MegatronBertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MegatronBertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MegatronBertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1139",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),ot=new We({props:{$$slots:{default:[Mm]},$$scope:{ctx:B}}}),nt=new E({props:{anchor:"transformers.MegatronBertForCausalLM.forward.example",$$slots:{default:[wm]},$$scope:{ctx:B}}}),fo=new te({}),_o=new P({props:{name:"class transformers.MegatronBertForNextSentencePrediction",anchor:"transformers.MegatronBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1371"}}),wo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1384",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) \u2014 Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new We({props:{$$slots:{default:[$m]},$$scope:{ctx:B}}}),at=new E({props:{anchor:"transformers.MegatronBertForNextSentencePrediction.forward.example",$$slots:{default:[Tm]},$$scope:{ctx:B}}}),$o=new te({}),To=new P({props:{name:"class transformers.MegatronBertForPreTraining",anchor:"transformers.MegatronBertForPreTraining",parameters:[{name:"config",val:""},{name:"add_binary_head",val:" = True"}],parametersDescription:[{anchor:"transformers.MegatronBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1012"}}),zo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MegatronBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.MegatronBertForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1028",returnDescription:`
<p>A <code>transformers.models.megatron_bert.modeling_megatron_bert.MegatronBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
<p><code>transformers.models.megatron_bert.modeling_megatron_bert.MegatronBertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lt=new We({props:{$$slots:{default:[ym]},$$scope:{ctx:B}}}),dt=new E({props:{anchor:"transformers.MegatronBertForPreTraining.forward.example",$$slots:{default:[Bm]},$$scope:{ctx:B}}}),xo=new te({}),Po=new P({props:{name:"class transformers.MegatronBertForSequenceClassification",anchor:"transformers.MegatronBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1477"}}),jo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1489",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),ht=new We({props:{$$slots:{default:[Fm]},$$scope:{ctx:B}}}),pt=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example",$$slots:{default:[zm]},$$scope:{ctx:B}}}),mt=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-2",$$slots:{default:[xm]},$$scope:{ctx:B}}}),gt=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-3",$$slots:{default:[Pm]},$$scope:{ctx:B}}}),ut=new E({props:{anchor:"transformers.MegatronBertForSequenceClassification.forward.example-4",$$slots:{default:[qm]},$$scope:{ctx:B}}}),Ao=new te({}),So=new P({props:{name:"class transformers.MegatronBertForMultipleChoice",anchor:"transformers.MegatronBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1575"}}),Oo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1586",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),_t=new We({props:{$$slots:{default:[Cm]},$$scope:{ctx:B}}}),bt=new E({props:{anchor:"transformers.MegatronBertForMultipleChoice.forward.example",$$slots:{default:[Em]},$$scope:{ctx:B}}}),Do=new te({}),Wo=new P({props:{name:"class transformers.MegatronBertForTokenClassification",anchor:"transformers.MegatronBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1669"}}),Qo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1684",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),vt=new We({props:{$$slots:{default:[jm]},$$scope:{ctx:B}}}),Mt=new E({props:{anchor:"transformers.MegatronBertForTokenClassification.forward.example",$$slots:{default:[Am]},$$scope:{ctx:B}}}),wt=new E({props:{anchor:"transformers.MegatronBertForTokenClassification.forward.example-2",$$slots:{default:[Sm]},$$scope:{ctx:B}}}),Go=new te({}),Vo=new P({props:{name:"class transformers.MegatronBertForQuestionAnswering",anchor:"transformers.MegatronBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MegatronBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig">MegatronBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1751"}}),Xo=new P({props:{name:"forward",anchor:"transformers.MegatronBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MegatronBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MegatronBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/megatron_bert/modeling_megatron_bert.py#L1765",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertConfig"
>MegatronBertConfig</a>) and inputs.</p>
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
`}}),Tt=new We({props:{$$slots:{default:[Nm]},$$scope:{ctx:B}}}),yt=new E({props:{anchor:"transformers.MegatronBertForQuestionAnswering.forward.example",$$slots:{default:[Lm]},$$scope:{ctx:B}}}),Bt=new E({props:{anchor:"transformers.MegatronBertForQuestionAnswering.forward.example-2",$$slots:{default:[Im]},$$scope:{ctx:B}}}),{c(){d=a("meta"),_=m(),c=a("h1"),p=a("a"),k=a("span"),v(n.$$.fragment),h=m(),F=a("span"),Ta=r("MegatronBERT"),ls=m(),fe=a("h2"),Re=a("a"),Qn=a("span"),v(Et.$$.fragment),ya=m(),Gn=a("span"),Ba=r("Overview"),ds=m(),He=a("p"),Fa=r("The MegatronBERT model was proposed in "),jt=a("a"),za=r(`Megatron-LM: Training Multi-Billion Parameter Language Models Using Model
Parallelism`),xa=r(` by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley,
Jared Casper and Bryan Catanzaro.`),cs=m(),nn=a("p"),Pa=r("The abstract from the paper is the following:"),hs=m(),rn=a("p"),Vn=a("em"),qa=r(`Recent work in language modeling demonstrates that training large transformer models advances the state of the art in
Natural Language Processing applications. However, very large models can be quite difficult to train due to memory
constraints. In this work, we present our techniques for training very large transformer models and implement a simple,
efficient intra-layer model parallel approach that enables training transformer models with billions of parameters. Our
approach does not require a new compiler or library changes, is orthogonal and complimentary to pipeline model
parallelism, and can be fully implemented with the insertion of a few communication operations in native PyTorch. We
illustrate this approach by converging transformer based models up to 8.3 billion parameters using 512 GPUs. We sustain
15.1 PetaFLOPs across the entire application with 76% scaling efficiency when compared to a strong single GPU baseline
that sustains 39 TeraFLOPs, which is 30% of peak FLOPs. To demonstrate that large language models can further advance
the state of the art (SOTA), we train an 8.3 billion parameter transformer language model similar to GPT-2 and a 3.9
billion parameter model similar to BERT. We show that careful attention to the placement of layer normalization in
BERT-like models is critical to achieving increased performance as the model size grows. Using the GPT-2 model we
achieve SOTA results on the WikiText103 (10.8 compared to SOTA perplexity of 15.8) and LAMBADA (66.5% compared to SOTA
accuracy of 63.2%) datasets. Our BERT model achieves SOTA results on the RACE dataset (90.9% compared to SOTA accuracy
of 89.4%).`),ps=m(),sn=a("p"),Ca=r("Tips:"),ms=m(),Ue=a("p"),Ea=r("We have provided pretrained "),At=a("a"),ja=r("BERT-345M"),Aa=r(` checkpoints
for use to evaluate or finetuning downstream tasks.`),gs=m(),oe=a("p"),Sa=r("To access these checkpoints, first "),St=a("a"),Na=r("sign up"),La=r(` for and setup the NVIDIA GPU Cloud (NGC)
Registry CLI. Further documentation for downloading models can be found in the `),Nt=a("a"),Ia=r("NGC documentation"),Oa=r("."),us=m(),an=a("p"),Da=r("Alternatively, you can directly download the checkpoints using:"),fs=m(),ln=a("p"),Wa=r("BERT-345M-uncased:"),_s=m(),v(Lt.$$.fragment),bs=m(),dn=a("p"),Ra=r("BERT-345M-cased:"),ks=m(),v(It.$$.fragment),vs=m(),cn=a("p"),Ha=r(`Once you have obtained the checkpoints from NVIDIA GPU Cloud (NGC), you have to convert them to a format that will
easily be loaded by Hugging Face Transformers and our port of the BERT code.`),Ms=m(),ne=a("p"),Ua=r("The following commands allow you to do the conversion. We assume that the folder "),Jn=a("code"),Qa=r("models/megatron_bert"),Ga=r(` contains
`),Kn=a("code"),Va=r("megatron_bert_345m_v0_1_{cased, uncased}.zip"),Ja=r(" and that the commands are run from inside that folder:"),ws=m(),v(Ot.$$.fragment),$s=m(),v(Dt.$$.fragment),Ts=m(),re=a("p"),Ka=r("This model was contributed by "),Wt=a("a"),Ya=r("jdemouth"),Xa=r(". The original code can be found "),Rt=a("a"),Za=r("here"),ei=r(`. That repository contains a multi-GPU and multi-node implementation of the
Megatron Language models. In particular, it contains a hybrid model parallel approach using \u201Ctensor parallel\u201D and
\u201Cpipeline parallel\u201D techniques.`),ys=m(),_e=a("h2"),Qe=a("a"),Yn=a("span"),v(Ht.$$.fragment),ti=m(),Xn=a("span"),oi=r("MegatronBertConfig"),Bs=m(),J=a("div"),v(Ut.$$.fragment),ni=m(),be=a("p"),ri=r("This is the configuration class to store the configuration of a "),hn=a("a"),si=r("MegatronBertModel"),ai=r(`. It is used to instantiate a
MEGATRON_BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MEGATRON_BERT
`),Qt=a("a"),ii=r("megatron-bert-uncased-345m"),li=r(" architecture."),di=m(),ke=a("p"),ci=r("Configuration objects inherit from "),pn=a("a"),hi=r("PretrainedConfig"),pi=r(` and can be used to control the model outputs. Read the
documentation from `),mn=a("a"),mi=r("PretrainedConfig"),gi=r(" for more information."),ui=m(),v(Ge.$$.fragment),Fs=m(),ve=a("h2"),Ve=a("a"),Zn=a("span"),v(Gt.$$.fragment),fi=m(),er=a("span"),_i=r("MegatronBertModel"),zs=m(),x=a("div"),v(Vt.$$.fragment),bi=m(),tr=a("p"),ki=r("The bare MegatronBert Model transformer outputting raw hidden-states without any specific head on top."),vi=m(),Jt=a("p"),Mi=r("This model inherits from "),gn=a("a"),wi=r("PreTrainedModel"),$i=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ti=m(),Kt=a("p"),yi=r("This model is also a PyTorch "),Yt=a("a"),Bi=r("torch.nn.Module"),Fi=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zi=m(),Xt=a("p"),xi=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Zt=a("a"),Pi=r(`Attention is
all you need`),qi=r(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ci=m(),C=a("p"),Ei=r("To behave as an decoder the model needs to be initialized with the "),or=a("code"),ji=r("is_decoder"),Ai=r(` argument of the configuration set
to `),nr=a("code"),Si=r("True"),Ni=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),rr=a("code"),Li=r("is_decoder"),Ii=r(` argument and
`),sr=a("code"),Oi=r("add_cross_attention"),Di=r(" set to "),ar=a("code"),Wi=r("True"),Ri=r("; an "),ir=a("code"),Hi=r("encoder_hidden_states"),Ui=r(" is then expected as an input to the forward pass."),Qi=m(),K=a("div"),v(eo.$$.fragment),Gi=m(),Me=a("p"),Vi=r("The "),un=a("a"),Ji=r("MegatronBertModel"),Ki=r(" forward method, overrides the "),lr=a("code"),Yi=r("__call__"),Xi=r(" special method."),Zi=m(),v(Je.$$.fragment),el=m(),v(Ke.$$.fragment),xs=m(),we=a("h2"),Ye=a("a"),dr=a("span"),v(to.$$.fragment),tl=m(),cr=a("span"),ol=r("MegatronBertForMaskedLM"),Ps=m(),A=a("div"),v(oo.$$.fragment),nl=m(),no=a("p"),rl=r("MegatronBert Model with a "),hr=a("code"),sl=r("language modeling"),al=r(" head on top."),il=m(),ro=a("p"),ll=r("This model inherits from "),fn=a("a"),dl=r("PreTrainedModel"),cl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hl=m(),so=a("p"),pl=r("This model is also a PyTorch "),ao=a("a"),ml=r("torch.nn.Module"),gl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ul=m(),R=a("div"),v(io.$$.fragment),fl=m(),$e=a("p"),_l=r("The "),_n=a("a"),bl=r("MegatronBertForMaskedLM"),kl=r(" forward method, overrides the "),pr=a("code"),vl=r("__call__"),Ml=r(" special method."),wl=m(),v(Xe.$$.fragment),$l=m(),v(Ze.$$.fragment),Tl=m(),v(et.$$.fragment),qs=m(),Te=a("h2"),tt=a("a"),mr=a("span"),v(lo.$$.fragment),yl=m(),gr=a("span"),Bl=r("MegatronBertForCausalLM"),Cs=m(),S=a("div"),v(co.$$.fragment),Fl=m(),ho=a("p"),zl=r("MegatronBert Model with a "),ur=a("code"),xl=r("language modeling"),Pl=r(" head on top for CLM fine-tuning."),ql=m(),po=a("p"),Cl=r("This model inherits from "),bn=a("a"),El=r("PreTrainedModel"),jl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al=m(),mo=a("p"),Sl=r("This model is also a PyTorch "),go=a("a"),Nl=r("torch.nn.Module"),Ll=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Il=m(),Y=a("div"),v(uo.$$.fragment),Ol=m(),ye=a("p"),Dl=r("The "),kn=a("a"),Wl=r("MegatronBertForCausalLM"),Rl=r(" forward method, overrides the "),fr=a("code"),Hl=r("__call__"),Ul=r(" special method."),Ql=m(),v(ot.$$.fragment),Gl=m(),v(nt.$$.fragment),Es=m(),Be=a("h2"),rt=a("a"),_r=a("span"),v(fo.$$.fragment),Vl=m(),br=a("span"),Jl=r("MegatronBertForNextSentencePrediction"),js=m(),N=a("div"),v(_o.$$.fragment),Kl=m(),bo=a("p"),Yl=r("MegatronBert Model with a "),kr=a("code"),Xl=r("next sentence prediction (classification)"),Zl=r(" head on top."),ed=m(),ko=a("p"),td=r("This model inherits from "),vn=a("a"),od=r("PreTrainedModel"),nd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd=m(),vo=a("p"),sd=r("This model is also a PyTorch "),Mo=a("a"),ad=r("torch.nn.Module"),id=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ld=m(),X=a("div"),v(wo.$$.fragment),dd=m(),Fe=a("p"),cd=r("The "),Mn=a("a"),hd=r("MegatronBertForNextSentencePrediction"),pd=r(" forward method, overrides the "),vr=a("code"),md=r("__call__"),gd=r(" special method."),ud=m(),v(st.$$.fragment),fd=m(),v(at.$$.fragment),As=m(),ze=a("h2"),it=a("a"),Mr=a("span"),v($o.$$.fragment),_d=m(),wr=a("span"),bd=r("MegatronBertForPreTraining"),Ss=m(),L=a("div"),v(To.$$.fragment),kd=m(),xe=a("p"),vd=r("MegatronBert Model with two heads on top as done during the pretraining: a "),$r=a("code"),Md=r("masked language modeling"),wd=r(` head and a
`),Tr=a("code"),$d=r("next sentence prediction (classification)"),Td=r(" head."),yd=m(),yo=a("p"),Bd=r("This model inherits from "),wn=a("a"),Fd=r("PreTrainedModel"),zd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd=m(),Bo=a("p"),Pd=r("This model is also a PyTorch "),Fo=a("a"),qd=r("torch.nn.Module"),Cd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed=m(),Z=a("div"),v(zo.$$.fragment),jd=m(),Pe=a("p"),Ad=r("The "),$n=a("a"),Sd=r("MegatronBertForPreTraining"),Nd=r(" forward method, overrides the "),yr=a("code"),Ld=r("__call__"),Id=r(" special method."),Od=m(),v(lt.$$.fragment),Dd=m(),v(dt.$$.fragment),Ns=m(),qe=a("h2"),ct=a("a"),Br=a("span"),v(xo.$$.fragment),Wd=m(),Fr=a("span"),Rd=r("MegatronBertForSequenceClassification"),Ls=m(),I=a("div"),v(Po.$$.fragment),Hd=m(),zr=a("p"),Ud=r(`MegatronBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Qd=m(),qo=a("p"),Gd=r("This model inherits from "),Tn=a("a"),Vd=r("PreTrainedModel"),Jd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kd=m(),Co=a("p"),Yd=r("This model is also a PyTorch "),Eo=a("a"),Xd=r("torch.nn.Module"),Zd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ec=m(),q=a("div"),v(jo.$$.fragment),tc=m(),Ce=a("p"),oc=r("The "),yn=a("a"),nc=r("MegatronBertForSequenceClassification"),rc=r(" forward method, overrides the "),xr=a("code"),sc=r("__call__"),ac=r(" special method."),ic=m(),v(ht.$$.fragment),lc=m(),v(pt.$$.fragment),dc=m(),v(mt.$$.fragment),cc=m(),v(gt.$$.fragment),hc=m(),v(ut.$$.fragment),Is=m(),Ee=a("h2"),ft=a("a"),Pr=a("span"),v(Ao.$$.fragment),pc=m(),qr=a("span"),mc=r("MegatronBertForMultipleChoice"),Os=m(),O=a("div"),v(So.$$.fragment),gc=m(),Cr=a("p"),uc=r(`MegatronBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),fc=m(),No=a("p"),_c=r("This model inherits from "),Bn=a("a"),bc=r("PreTrainedModel"),kc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=m(),Lo=a("p"),Mc=r("This model is also a PyTorch "),Io=a("a"),wc=r("torch.nn.Module"),$c=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=m(),ee=a("div"),v(Oo.$$.fragment),yc=m(),je=a("p"),Bc=r("The "),Fn=a("a"),Fc=r("MegatronBertForMultipleChoice"),zc=r(" forward method, overrides the "),Er=a("code"),xc=r("__call__"),Pc=r(" special method."),qc=m(),v(_t.$$.fragment),Cc=m(),v(bt.$$.fragment),Ds=m(),Ae=a("h2"),kt=a("a"),jr=a("span"),v(Do.$$.fragment),Ec=m(),Ar=a("span"),jc=r("MegatronBertForTokenClassification"),Ws=m(),D=a("div"),v(Wo.$$.fragment),Ac=m(),Sr=a("p"),Sc=r(`MegatronBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nc=m(),Ro=a("p"),Lc=r("This model inherits from "),zn=a("a"),Ic=r("PreTrainedModel"),Oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=m(),Ho=a("p"),Wc=r("This model is also a PyTorch "),Uo=a("a"),Rc=r("torch.nn.Module"),Hc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=m(),H=a("div"),v(Qo.$$.fragment),Qc=m(),Se=a("p"),Gc=r("The "),xn=a("a"),Vc=r("MegatronBertForTokenClassification"),Jc=r(" forward method, overrides the "),Nr=a("code"),Kc=r("__call__"),Yc=r(" special method."),Xc=m(),v(vt.$$.fragment),Zc=m(),v(Mt.$$.fragment),eh=m(),v(wt.$$.fragment),Rs=m(),Ne=a("h2"),$t=a("a"),Lr=a("span"),v(Go.$$.fragment),th=m(),Ir=a("span"),oh=r("MegatronBertForQuestionAnswering"),Hs=m(),W=a("div"),v(Vo.$$.fragment),nh=m(),Le=a("p"),rh=r(`MegatronBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Or=a("code"),sh=r("span start logits"),ah=r(" and "),Dr=a("code"),ih=r("span end logits"),lh=r(")."),dh=m(),Jo=a("p"),ch=r("This model inherits from "),Pn=a("a"),hh=r("PreTrainedModel"),ph=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh=m(),Ko=a("p"),gh=r("This model is also a PyTorch "),Yo=a("a"),uh=r("torch.nn.Module"),fh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_h=m(),U=a("div"),v(Xo.$$.fragment),bh=m(),Ie=a("p"),kh=r("The "),qn=a("a"),vh=r("MegatronBertForQuestionAnswering"),Mh=r(" forward method, overrides the "),Wr=a("code"),wh=r("__call__"),$h=r(" special method."),Th=m(),v(Tt.$$.fragment),yh=m(),v(yt.$$.fragment),Bh=m(),v(Bt.$$.fragment),this.h()},l(t){const u=mm('[data-svelte="svelte-1phssyn"]',document.head);d=i(u,"META",{name:!0,content:!0}),u.forEach(o),_=g(t),c=i(t,"H1",{class:!0});var Zo=l(c);p=i(Zo,"A",{id:!0,class:!0,href:!0});var Rr=l(p);k=i(Rr,"SPAN",{});var Hr=l(k);M(n.$$.fragment,Hr),Hr.forEach(o),Rr.forEach(o),h=g(Zo),F=i(Zo,"SPAN",{});var Ur=l(F);Ta=s(Ur,"MegatronBERT"),Ur.forEach(o),Zo.forEach(o),ls=g(t),fe=i(t,"H2",{class:!0});var en=l(fe);Re=i(en,"A",{id:!0,class:!0,href:!0});var Qr=l(Re);Qn=i(Qr,"SPAN",{});var Gr=l(Qn);M(Et.$$.fragment,Gr),Gr.forEach(o),Qr.forEach(o),ya=g(en),Gn=i(en,"SPAN",{});var Vr=l(Gn);Ba=s(Vr,"Overview"),Vr.forEach(o),en.forEach(o),ds=g(t),He=i(t,"P",{});var tn=l(He);Fa=s(tn,"The MegatronBERT model was proposed in "),jt=i(tn,"A",{href:!0,rel:!0});var Jr=l(jt);za=s(Jr,`Megatron-LM: Training Multi-Billion Parameter Language Models Using Model
Parallelism`),Jr.forEach(o),xa=s(tn,` by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley,
Jared Casper and Bryan Catanzaro.`),tn.forEach(o),cs=g(t),nn=i(t,"P",{});var Kr=l(nn);Pa=s(Kr,"The abstract from the paper is the following:"),Kr.forEach(o),hs=g(t),rn=i(t,"P",{});var Yr=l(rn);Vn=i(Yr,"EM",{});var Xr=l(Vn);qa=s(Xr,`Recent work in language modeling demonstrates that training large transformer models advances the state of the art in
Natural Language Processing applications. However, very large models can be quite difficult to train due to memory
constraints. In this work, we present our techniques for training very large transformer models and implement a simple,
efficient intra-layer model parallel approach that enables training transformer models with billions of parameters. Our
approach does not require a new compiler or library changes, is orthogonal and complimentary to pipeline model
parallelism, and can be fully implemented with the insertion of a few communication operations in native PyTorch. We
illustrate this approach by converging transformer based models up to 8.3 billion parameters using 512 GPUs. We sustain
15.1 PetaFLOPs across the entire application with 76% scaling efficiency when compared to a strong single GPU baseline
that sustains 39 TeraFLOPs, which is 30% of peak FLOPs. To demonstrate that large language models can further advance
the state of the art (SOTA), we train an 8.3 billion parameter transformer language model similar to GPT-2 and a 3.9
billion parameter model similar to BERT. We show that careful attention to the placement of layer normalization in
BERT-like models is critical to achieving increased performance as the model size grows. Using the GPT-2 model we
achieve SOTA results on the WikiText103 (10.8 compared to SOTA perplexity of 15.8) and LAMBADA (66.5% compared to SOTA
accuracy of 63.2%) datasets. Our BERT model achieves SOTA results on the RACE dataset (90.9% compared to SOTA accuracy
of 89.4%).`),Xr.forEach(o),Yr.forEach(o),ps=g(t),sn=i(t,"P",{});var Zr=l(sn);Ca=s(Zr,"Tips:"),Zr.forEach(o),ms=g(t),Ue=i(t,"P",{});var on=l(Ue);Ea=s(on,"We have provided pretrained "),At=i(on,"A",{href:!0,rel:!0});var es=l(At);ja=s(es,"BERT-345M"),es.forEach(o),Aa=s(on,` checkpoints
for use to evaluate or finetuning downstream tasks.`),on.forEach(o),gs=g(t),oe=i(t,"P",{});var Oe=l(oe);Sa=s(Oe,"To access these checkpoints, first "),St=i(Oe,"A",{href:!0,rel:!0});var ts=l(St);Na=s(ts,"sign up"),ts.forEach(o),La=s(Oe,` for and setup the NVIDIA GPU Cloud (NGC)
Registry CLI. Further documentation for downloading models can be found in the `),Nt=i(Oe,"A",{href:!0,rel:!0});var os=l(Nt);Ia=s(os,"NGC documentation"),os.forEach(o),Oa=s(Oe,"."),Oe.forEach(o),us=g(t),an=i(t,"P",{});var ns=l(an);Da=s(ns,"Alternatively, you can directly download the checkpoints using:"),ns.forEach(o),fs=g(t),ln=i(t,"P",{});var rs=l(ln);Wa=s(rs,"BERT-345M-uncased:"),rs.forEach(o),_s=g(t),M(Lt.$$.fragment,t),bs=g(t),dn=i(t,"P",{});var ss=l(dn);Ra=s(ss,"BERT-345M-cased:"),ss.forEach(o),ks=g(t),M(It.$$.fragment,t),vs=g(t),cn=i(t,"P",{});var as=l(cn);Ha=s(as,`Once you have obtained the checkpoints from NVIDIA GPU Cloud (NGC), you have to convert them to a format that will
easily be loaded by Hugging Face Transformers and our port of the BERT code.`),as.forEach(o),Ms=g(t),ne=i(t,"P",{});var De=l(ne);Ua=s(De,"The following commands allow you to do the conversion. We assume that the folder "),Jn=i(De,"CODE",{});var is=l(Jn);Qa=s(is,"models/megatron_bert"),is.forEach(o),Ga=s(De,` contains
`),Kn=i(De,"CODE",{});var Fh=l(Kn);Va=s(Fh,"megatron_bert_345m_v0_1_{cased, uncased}.zip"),Fh.forEach(o),Ja=s(De," and that the commands are run from inside that folder:"),De.forEach(o),ws=g(t),M(Ot.$$.fragment,t),$s=g(t),M(Dt.$$.fragment,t),Ts=g(t),re=i(t,"P",{});var Cn=l(re);Ka=s(Cn,"This model was contributed by "),Wt=i(Cn,"A",{href:!0,rel:!0});var zh=l(Wt);Ya=s(zh,"jdemouth"),zh.forEach(o),Xa=s(Cn,". The original code can be found "),Rt=i(Cn,"A",{href:!0,rel:!0});var xh=l(Rt);Za=s(xh,"here"),xh.forEach(o),ei=s(Cn,`. That repository contains a multi-GPU and multi-node implementation of the
Megatron Language models. In particular, it contains a hybrid model parallel approach using \u201Ctensor parallel\u201D and
\u201Cpipeline parallel\u201D techniques.`),Cn.forEach(o),ys=g(t),_e=i(t,"H2",{class:!0});var Qs=l(_e);Qe=i(Qs,"A",{id:!0,class:!0,href:!0});var Ph=l(Qe);Yn=i(Ph,"SPAN",{});var qh=l(Yn);M(Ht.$$.fragment,qh),qh.forEach(o),Ph.forEach(o),ti=g(Qs),Xn=i(Qs,"SPAN",{});var Ch=l(Xn);oi=s(Ch,"MegatronBertConfig"),Ch.forEach(o),Qs.forEach(o),Bs=g(t),J=i(t,"DIV",{class:!0});var Ft=l(J);M(Ut.$$.fragment,Ft),ni=g(Ft),be=i(Ft,"P",{});var En=l(be);ri=s(En,"This is the configuration class to store the configuration of a "),hn=i(En,"A",{href:!0});var Eh=l(hn);si=s(Eh,"MegatronBertModel"),Eh.forEach(o),ai=s(En,`. It is used to instantiate a
MEGATRON_BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MEGATRON_BERT
`),Qt=i(En,"A",{href:!0,rel:!0});var jh=l(Qt);ii=s(jh,"megatron-bert-uncased-345m"),jh.forEach(o),li=s(En," architecture."),En.forEach(o),di=g(Ft),ke=i(Ft,"P",{});var jn=l(ke);ci=s(jn,"Configuration objects inherit from "),pn=i(jn,"A",{href:!0});var Ah=l(pn);hi=s(Ah,"PretrainedConfig"),Ah.forEach(o),pi=s(jn,` and can be used to control the model outputs. Read the
documentation from `),mn=i(jn,"A",{href:!0});var Sh=l(mn);mi=s(Sh,"PretrainedConfig"),Sh.forEach(o),gi=s(jn," for more information."),jn.forEach(o),ui=g(Ft),M(Ge.$$.fragment,Ft),Ft.forEach(o),Fs=g(t),ve=i(t,"H2",{class:!0});var Gs=l(ve);Ve=i(Gs,"A",{id:!0,class:!0,href:!0});var Nh=l(Ve);Zn=i(Nh,"SPAN",{});var Lh=l(Zn);M(Gt.$$.fragment,Lh),Lh.forEach(o),Nh.forEach(o),fi=g(Gs),er=i(Gs,"SPAN",{});var Ih=l(er);_i=s(Ih,"MegatronBertModel"),Ih.forEach(o),Gs.forEach(o),zs=g(t),x=i(t,"DIV",{class:!0});var Q=l(x);M(Vt.$$.fragment,Q),bi=g(Q),tr=i(Q,"P",{});var Oh=l(tr);ki=s(Oh,"The bare MegatronBert Model transformer outputting raw hidden-states without any specific head on top."),Oh.forEach(o),vi=g(Q),Jt=i(Q,"P",{});var Vs=l(Jt);Mi=s(Vs,"This model inherits from "),gn=i(Vs,"A",{href:!0});var Dh=l(gn);wi=s(Dh,"PreTrainedModel"),Dh.forEach(o),$i=s(Vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs.forEach(o),Ti=g(Q),Kt=i(Q,"P",{});var Js=l(Kt);yi=s(Js,"This model is also a PyTorch "),Yt=i(Js,"A",{href:!0,rel:!0});var Wh=l(Yt);Bi=s(Wh,"torch.nn.Module"),Wh.forEach(o),Fi=s(Js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Js.forEach(o),zi=g(Q),Xt=i(Q,"P",{});var Ks=l(Xt);xi=s(Ks,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Zt=i(Ks,"A",{href:!0,rel:!0});var Rh=l(Zt);Pi=s(Rh,`Attention is
all you need`),Rh.forEach(o),qi=s(Ks,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ks.forEach(o),Ci=g(Q),C=i(Q,"P",{});var G=l(C);Ei=s(G,"To behave as an decoder the model needs to be initialized with the "),or=i(G,"CODE",{});var Hh=l(or);ji=s(Hh,"is_decoder"),Hh.forEach(o),Ai=s(G,` argument of the configuration set
to `),nr=i(G,"CODE",{});var Uh=l(nr);Si=s(Uh,"True"),Uh.forEach(o),Ni=s(G,". To be used in a Seq2Seq model, the model needs to initialized with both "),rr=i(G,"CODE",{});var Qh=l(rr);Li=s(Qh,"is_decoder"),Qh.forEach(o),Ii=s(G,` argument and
`),sr=i(G,"CODE",{});var Gh=l(sr);Oi=s(Gh,"add_cross_attention"),Gh.forEach(o),Di=s(G," set to "),ar=i(G,"CODE",{});var Vh=l(ar);Wi=s(Vh,"True"),Vh.forEach(o),Ri=s(G,"; an "),ir=i(G,"CODE",{});var Jh=l(ir);Hi=s(Jh,"encoder_hidden_states"),Jh.forEach(o),Ui=s(G," is then expected as an input to the forward pass."),G.forEach(o),Qi=g(Q),K=i(Q,"DIV",{class:!0});var zt=l(K);M(eo.$$.fragment,zt),Gi=g(zt),Me=i(zt,"P",{});var An=l(Me);Vi=s(An,"The "),un=i(An,"A",{href:!0});var Kh=l(un);Ji=s(Kh,"MegatronBertModel"),Kh.forEach(o),Ki=s(An," forward method, overrides the "),lr=i(An,"CODE",{});var Yh=l(lr);Yi=s(Yh,"__call__"),Yh.forEach(o),Xi=s(An," special method."),An.forEach(o),Zi=g(zt),M(Je.$$.fragment,zt),el=g(zt),M(Ke.$$.fragment,zt),zt.forEach(o),Q.forEach(o),xs=g(t),we=i(t,"H2",{class:!0});var Ys=l(we);Ye=i(Ys,"A",{id:!0,class:!0,href:!0});var Xh=l(Ye);dr=i(Xh,"SPAN",{});var Zh=l(dr);M(to.$$.fragment,Zh),Zh.forEach(o),Xh.forEach(o),tl=g(Ys),cr=i(Ys,"SPAN",{});var ep=l(cr);ol=s(ep,"MegatronBertForMaskedLM"),ep.forEach(o),Ys.forEach(o),Ps=g(t),A=i(t,"DIV",{class:!0});var se=l(A);M(oo.$$.fragment,se),nl=g(se),no=i(se,"P",{});var Xs=l(no);rl=s(Xs,"MegatronBert Model with a "),hr=i(Xs,"CODE",{});var tp=l(hr);sl=s(tp,"language modeling"),tp.forEach(o),al=s(Xs," head on top."),Xs.forEach(o),il=g(se),ro=i(se,"P",{});var Zs=l(ro);ll=s(Zs,"This model inherits from "),fn=i(Zs,"A",{href:!0});var op=l(fn);dl=s(op,"PreTrainedModel"),op.forEach(o),cl=s(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs.forEach(o),hl=g(se),so=i(se,"P",{});var ea=l(so);pl=s(ea,"This model is also a PyTorch "),ao=i(ea,"A",{href:!0,rel:!0});var np=l(ao);ml=s(np,"torch.nn.Module"),np.forEach(o),gl=s(ea,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ea.forEach(o),ul=g(se),R=i(se,"DIV",{class:!0});var ae=l(R);M(io.$$.fragment,ae),fl=g(ae),$e=i(ae,"P",{});var Sn=l($e);_l=s(Sn,"The "),_n=i(Sn,"A",{href:!0});var rp=l(_n);bl=s(rp,"MegatronBertForMaskedLM"),rp.forEach(o),kl=s(Sn," forward method, overrides the "),pr=i(Sn,"CODE",{});var sp=l(pr);vl=s(sp,"__call__"),sp.forEach(o),Ml=s(Sn," special method."),Sn.forEach(o),wl=g(ae),M(Xe.$$.fragment,ae),$l=g(ae),M(Ze.$$.fragment,ae),Tl=g(ae),M(et.$$.fragment,ae),ae.forEach(o),se.forEach(o),qs=g(t),Te=i(t,"H2",{class:!0});var ta=l(Te);tt=i(ta,"A",{id:!0,class:!0,href:!0});var ap=l(tt);mr=i(ap,"SPAN",{});var ip=l(mr);M(lo.$$.fragment,ip),ip.forEach(o),ap.forEach(o),yl=g(ta),gr=i(ta,"SPAN",{});var lp=l(gr);Bl=s(lp,"MegatronBertForCausalLM"),lp.forEach(o),ta.forEach(o),Cs=g(t),S=i(t,"DIV",{class:!0});var ie=l(S);M(co.$$.fragment,ie),Fl=g(ie),ho=i(ie,"P",{});var oa=l(ho);zl=s(oa,"MegatronBert Model with a "),ur=i(oa,"CODE",{});var dp=l(ur);xl=s(dp,"language modeling"),dp.forEach(o),Pl=s(oa," head on top for CLM fine-tuning."),oa.forEach(o),ql=g(ie),po=i(ie,"P",{});var na=l(po);Cl=s(na,"This model inherits from "),bn=i(na,"A",{href:!0});var cp=l(bn);El=s(cp,"PreTrainedModel"),cp.forEach(o),jl=s(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),na.forEach(o),Al=g(ie),mo=i(ie,"P",{});var ra=l(mo);Sl=s(ra,"This model is also a PyTorch "),go=i(ra,"A",{href:!0,rel:!0});var hp=l(go);Nl=s(hp,"torch.nn.Module"),hp.forEach(o),Ll=s(ra,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ra.forEach(o),Il=g(ie),Y=i(ie,"DIV",{class:!0});var xt=l(Y);M(uo.$$.fragment,xt),Ol=g(xt),ye=i(xt,"P",{});var Nn=l(ye);Dl=s(Nn,"The "),kn=i(Nn,"A",{href:!0});var pp=l(kn);Wl=s(pp,"MegatronBertForCausalLM"),pp.forEach(o),Rl=s(Nn," forward method, overrides the "),fr=i(Nn,"CODE",{});var mp=l(fr);Hl=s(mp,"__call__"),mp.forEach(o),Ul=s(Nn," special method."),Nn.forEach(o),Ql=g(xt),M(ot.$$.fragment,xt),Gl=g(xt),M(nt.$$.fragment,xt),xt.forEach(o),ie.forEach(o),Es=g(t),Be=i(t,"H2",{class:!0});var sa=l(Be);rt=i(sa,"A",{id:!0,class:!0,href:!0});var gp=l(rt);_r=i(gp,"SPAN",{});var up=l(_r);M(fo.$$.fragment,up),up.forEach(o),gp.forEach(o),Vl=g(sa),br=i(sa,"SPAN",{});var fp=l(br);Jl=s(fp,"MegatronBertForNextSentencePrediction"),fp.forEach(o),sa.forEach(o),js=g(t),N=i(t,"DIV",{class:!0});var le=l(N);M(_o.$$.fragment,le),Kl=g(le),bo=i(le,"P",{});var aa=l(bo);Yl=s(aa,"MegatronBert Model with a "),kr=i(aa,"CODE",{});var _p=l(kr);Xl=s(_p,"next sentence prediction (classification)"),_p.forEach(o),Zl=s(aa," head on top."),aa.forEach(o),ed=g(le),ko=i(le,"P",{});var ia=l(ko);td=s(ia,"This model inherits from "),vn=i(ia,"A",{href:!0});var bp=l(vn);od=s(bp,"PreTrainedModel"),bp.forEach(o),nd=s(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(o),rd=g(le),vo=i(le,"P",{});var la=l(vo);sd=s(la,"This model is also a PyTorch "),Mo=i(la,"A",{href:!0,rel:!0});var kp=l(Mo);ad=s(kp,"torch.nn.Module"),kp.forEach(o),id=s(la,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),la.forEach(o),ld=g(le),X=i(le,"DIV",{class:!0});var Pt=l(X);M(wo.$$.fragment,Pt),dd=g(Pt),Fe=i(Pt,"P",{});var Ln=l(Fe);cd=s(Ln,"The "),Mn=i(Ln,"A",{href:!0});var vp=l(Mn);hd=s(vp,"MegatronBertForNextSentencePrediction"),vp.forEach(o),pd=s(Ln," forward method, overrides the "),vr=i(Ln,"CODE",{});var Mp=l(vr);md=s(Mp,"__call__"),Mp.forEach(o),gd=s(Ln," special method."),Ln.forEach(o),ud=g(Pt),M(st.$$.fragment,Pt),fd=g(Pt),M(at.$$.fragment,Pt),Pt.forEach(o),le.forEach(o),As=g(t),ze=i(t,"H2",{class:!0});var da=l(ze);it=i(da,"A",{id:!0,class:!0,href:!0});var wp=l(it);Mr=i(wp,"SPAN",{});var $p=l(Mr);M($o.$$.fragment,$p),$p.forEach(o),wp.forEach(o),_d=g(da),wr=i(da,"SPAN",{});var Tp=l(wr);bd=s(Tp,"MegatronBertForPreTraining"),Tp.forEach(o),da.forEach(o),Ss=g(t),L=i(t,"DIV",{class:!0});var de=l(L);M(To.$$.fragment,de),kd=g(de),xe=i(de,"P",{});var In=l(xe);vd=s(In,"MegatronBert Model with two heads on top as done during the pretraining: a "),$r=i(In,"CODE",{});var yp=l($r);Md=s(yp,"masked language modeling"),yp.forEach(o),wd=s(In,` head and a
`),Tr=i(In,"CODE",{});var Bp=l(Tr);$d=s(Bp,"next sentence prediction (classification)"),Bp.forEach(o),Td=s(In," head."),In.forEach(o),yd=g(de),yo=i(de,"P",{});var ca=l(yo);Bd=s(ca,"This model inherits from "),wn=i(ca,"A",{href:!0});var Fp=l(wn);Fd=s(Fp,"PreTrainedModel"),Fp.forEach(o),zd=s(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(o),xd=g(de),Bo=i(de,"P",{});var ha=l(Bo);Pd=s(ha,"This model is also a PyTorch "),Fo=i(ha,"A",{href:!0,rel:!0});var zp=l(Fo);qd=s(zp,"torch.nn.Module"),zp.forEach(o),Cd=s(ha,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ha.forEach(o),Ed=g(de),Z=i(de,"DIV",{class:!0});var qt=l(Z);M(zo.$$.fragment,qt),jd=g(qt),Pe=i(qt,"P",{});var On=l(Pe);Ad=s(On,"The "),$n=i(On,"A",{href:!0});var xp=l($n);Sd=s(xp,"MegatronBertForPreTraining"),xp.forEach(o),Nd=s(On," forward method, overrides the "),yr=i(On,"CODE",{});var Pp=l(yr);Ld=s(Pp,"__call__"),Pp.forEach(o),Id=s(On," special method."),On.forEach(o),Od=g(qt),M(lt.$$.fragment,qt),Dd=g(qt),M(dt.$$.fragment,qt),qt.forEach(o),de.forEach(o),Ns=g(t),qe=i(t,"H2",{class:!0});var pa=l(qe);ct=i(pa,"A",{id:!0,class:!0,href:!0});var qp=l(ct);Br=i(qp,"SPAN",{});var Cp=l(Br);M(xo.$$.fragment,Cp),Cp.forEach(o),qp.forEach(o),Wd=g(pa),Fr=i(pa,"SPAN",{});var Ep=l(Fr);Rd=s(Ep,"MegatronBertForSequenceClassification"),Ep.forEach(o),pa.forEach(o),Ls=g(t),I=i(t,"DIV",{class:!0});var ce=l(I);M(Po.$$.fragment,ce),Hd=g(ce),zr=i(ce,"P",{});var jp=l(zr);Ud=s(jp,`MegatronBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jp.forEach(o),Qd=g(ce),qo=i(ce,"P",{});var ma=l(qo);Gd=s(ma,"This model inherits from "),Tn=i(ma,"A",{href:!0});var Ap=l(Tn);Vd=s(Ap,"PreTrainedModel"),Ap.forEach(o),Jd=s(ma,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ma.forEach(o),Kd=g(ce),Co=i(ce,"P",{});var ga=l(Co);Yd=s(ga,"This model is also a PyTorch "),Eo=i(ga,"A",{href:!0,rel:!0});var Sp=l(Eo);Xd=s(Sp,"torch.nn.Module"),Sp.forEach(o),Zd=s(ga,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ga.forEach(o),ec=g(ce),q=i(ce,"DIV",{class:!0});var V=l(q);M(jo.$$.fragment,V),tc=g(V),Ce=i(V,"P",{});var Dn=l(Ce);oc=s(Dn,"The "),yn=i(Dn,"A",{href:!0});var Np=l(yn);nc=s(Np,"MegatronBertForSequenceClassification"),Np.forEach(o),rc=s(Dn," forward method, overrides the "),xr=i(Dn,"CODE",{});var Lp=l(xr);sc=s(Lp,"__call__"),Lp.forEach(o),ac=s(Dn," special method."),Dn.forEach(o),ic=g(V),M(ht.$$.fragment,V),lc=g(V),M(pt.$$.fragment,V),dc=g(V),M(mt.$$.fragment,V),cc=g(V),M(gt.$$.fragment,V),hc=g(V),M(ut.$$.fragment,V),V.forEach(o),ce.forEach(o),Is=g(t),Ee=i(t,"H2",{class:!0});var ua=l(Ee);ft=i(ua,"A",{id:!0,class:!0,href:!0});var Ip=l(ft);Pr=i(Ip,"SPAN",{});var Op=l(Pr);M(Ao.$$.fragment,Op),Op.forEach(o),Ip.forEach(o),pc=g(ua),qr=i(ua,"SPAN",{});var Dp=l(qr);mc=s(Dp,"MegatronBertForMultipleChoice"),Dp.forEach(o),ua.forEach(o),Os=g(t),O=i(t,"DIV",{class:!0});var he=l(O);M(So.$$.fragment,he),gc=g(he),Cr=i(he,"P",{});var Wp=l(Cr);uc=s(Wp,`MegatronBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),Wp.forEach(o),fc=g(he),No=i(he,"P",{});var fa=l(No);_c=s(fa,"This model inherits from "),Bn=i(fa,"A",{href:!0});var Rp=l(Bn);bc=s(Rp,"PreTrainedModel"),Rp.forEach(o),kc=s(fa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fa.forEach(o),vc=g(he),Lo=i(he,"P",{});var _a=l(Lo);Mc=s(_a,"This model is also a PyTorch "),Io=i(_a,"A",{href:!0,rel:!0});var Hp=l(Io);wc=s(Hp,"torch.nn.Module"),Hp.forEach(o),$c=s(_a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_a.forEach(o),Tc=g(he),ee=i(he,"DIV",{class:!0});var Ct=l(ee);M(Oo.$$.fragment,Ct),yc=g(Ct),je=i(Ct,"P",{});var Wn=l(je);Bc=s(Wn,"The "),Fn=i(Wn,"A",{href:!0});var Up=l(Fn);Fc=s(Up,"MegatronBertForMultipleChoice"),Up.forEach(o),zc=s(Wn," forward method, overrides the "),Er=i(Wn,"CODE",{});var Qp=l(Er);xc=s(Qp,"__call__"),Qp.forEach(o),Pc=s(Wn," special method."),Wn.forEach(o),qc=g(Ct),M(_t.$$.fragment,Ct),Cc=g(Ct),M(bt.$$.fragment,Ct),Ct.forEach(o),he.forEach(o),Ds=g(t),Ae=i(t,"H2",{class:!0});var ba=l(Ae);kt=i(ba,"A",{id:!0,class:!0,href:!0});var Gp=l(kt);jr=i(Gp,"SPAN",{});var Vp=l(jr);M(Do.$$.fragment,Vp),Vp.forEach(o),Gp.forEach(o),Ec=g(ba),Ar=i(ba,"SPAN",{});var Jp=l(Ar);jc=s(Jp,"MegatronBertForTokenClassification"),Jp.forEach(o),ba.forEach(o),Ws=g(t),D=i(t,"DIV",{class:!0});var pe=l(D);M(Wo.$$.fragment,pe),Ac=g(pe),Sr=i(pe,"P",{});var Kp=l(Sr);Sc=s(Kp,`MegatronBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Kp.forEach(o),Nc=g(pe),Ro=i(pe,"P",{});var ka=l(Ro);Lc=s(ka,"This model inherits from "),zn=i(ka,"A",{href:!0});var Yp=l(zn);Ic=s(Yp,"PreTrainedModel"),Yp.forEach(o),Oc=s(ka,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ka.forEach(o),Dc=g(pe),Ho=i(pe,"P",{});var va=l(Ho);Wc=s(va,"This model is also a PyTorch "),Uo=i(va,"A",{href:!0,rel:!0});var Xp=l(Uo);Rc=s(Xp,"torch.nn.Module"),Xp.forEach(o),Hc=s(va,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),va.forEach(o),Uc=g(pe),H=i(pe,"DIV",{class:!0});var me=l(H);M(Qo.$$.fragment,me),Qc=g(me),Se=i(me,"P",{});var Rn=l(Se);Gc=s(Rn,"The "),xn=i(Rn,"A",{href:!0});var Zp=l(xn);Vc=s(Zp,"MegatronBertForTokenClassification"),Zp.forEach(o),Jc=s(Rn," forward method, overrides the "),Nr=i(Rn,"CODE",{});var em=l(Nr);Kc=s(em,"__call__"),em.forEach(o),Yc=s(Rn," special method."),Rn.forEach(o),Xc=g(me),M(vt.$$.fragment,me),Zc=g(me),M(Mt.$$.fragment,me),eh=g(me),M(wt.$$.fragment,me),me.forEach(o),pe.forEach(o),Rs=g(t),Ne=i(t,"H2",{class:!0});var Ma=l(Ne);$t=i(Ma,"A",{id:!0,class:!0,href:!0});var tm=l($t);Lr=i(tm,"SPAN",{});var om=l(Lr);M(Go.$$.fragment,om),om.forEach(o),tm.forEach(o),th=g(Ma),Ir=i(Ma,"SPAN",{});var nm=l(Ir);oh=s(nm,"MegatronBertForQuestionAnswering"),nm.forEach(o),Ma.forEach(o),Hs=g(t),W=i(t,"DIV",{class:!0});var ge=l(W);M(Vo.$$.fragment,ge),nh=g(ge),Le=i(ge,"P",{});var Hn=l(Le);rh=s(Hn,`MegatronBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Or=i(Hn,"CODE",{});var rm=l(Or);sh=s(rm,"span start logits"),rm.forEach(o),ah=s(Hn," and "),Dr=i(Hn,"CODE",{});var sm=l(Dr);ih=s(sm,"span end logits"),sm.forEach(o),lh=s(Hn,")."),Hn.forEach(o),dh=g(ge),Jo=i(ge,"P",{});var wa=l(Jo);ch=s(wa,"This model inherits from "),Pn=i(wa,"A",{href:!0});var am=l(Pn);hh=s(am,"PreTrainedModel"),am.forEach(o),ph=s(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wa.forEach(o),mh=g(ge),Ko=i(ge,"P",{});var $a=l(Ko);gh=s($a,"This model is also a PyTorch "),Yo=i($a,"A",{href:!0,rel:!0});var im=l(Yo);uh=s(im,"torch.nn.Module"),im.forEach(o),fh=s($a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$a.forEach(o),_h=g(ge),U=i(ge,"DIV",{class:!0});var ue=l(U);M(Xo.$$.fragment,ue),bh=g(ue),Ie=i(ue,"P",{});var Un=l(Ie);kh=s(Un,"The "),qn=i(Un,"A",{href:!0});var lm=l(qn);vh=s(lm,"MegatronBertForQuestionAnswering"),lm.forEach(o),Mh=s(Un," forward method, overrides the "),Wr=i(Un,"CODE",{});var dm=l(Wr);wh=s(dm,"__call__"),dm.forEach(o),$h=s(Un," special method."),Un.forEach(o),Th=g(ue),M(Tt.$$.fragment,ue),yh=g(ue),M(yt.$$.fragment,ue),Bh=g(ue),M(Bt.$$.fragment,ue),ue.forEach(o),ge.forEach(o),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Dm)),f(p,"id","megatronbert"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#megatronbert"),f(c,"class","relative group"),f(Re,"id","overview"),f(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Re,"href","#overview"),f(fe,"class","relative group"),f(jt,"href","https://arxiv.org/abs/1909.08053"),f(jt,"rel","nofollow"),f(At,"href","https://ngc.nvidia.com/catalog/models/nvidia:megatron_bert_345m"),f(At,"rel","nofollow"),f(St,"href","https://ngc.nvidia.com/signup"),f(St,"rel","nofollow"),f(Nt,"href","https://docs.nvidia.com/dgx/ngc-registry-cli-user-guide/index.html#topic_6_4_1"),f(Nt,"rel","nofollow"),f(Wt,"href","https://huggingface.co/jdemouth"),f(Wt,"rel","nofollow"),f(Rt,"href","https://github.com/NVIDIA/Megatron-LM"),f(Rt,"rel","nofollow"),f(Qe,"id","transformers.MegatronBertConfig"),f(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qe,"href","#transformers.MegatronBertConfig"),f(_e,"class","relative group"),f(hn,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertModel"),f(Qt,"href","https://huggingface.co/nvidia/megatron-bert-uncased-345m"),f(Qt,"rel","nofollow"),f(pn,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(mn,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"id","transformers.MegatronBertModel"),f(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ve,"href","#transformers.MegatronBertModel"),f(ve,"class","relative group"),f(gn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Yt,"rel","nofollow"),f(Zt,"href","https://arxiv.org/abs/1706.03762"),f(Zt,"rel","nofollow"),f(un,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertModel"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"id","transformers.MegatronBertForMaskedLM"),f(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ye,"href","#transformers.MegatronBertForMaskedLM"),f(we,"class","relative group"),f(fn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ao,"rel","nofollow"),f(_n,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForMaskedLM"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"id","transformers.MegatronBertForCausalLM"),f(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tt,"href","#transformers.MegatronBertForCausalLM"),f(Te,"class","relative group"),f(bn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(go,"rel","nofollow"),f(kn,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForCausalLM"),f(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"id","transformers.MegatronBertForNextSentencePrediction"),f(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rt,"href","#transformers.MegatronBertForNextSentencePrediction"),f(Be,"class","relative group"),f(vn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Mo,"rel","nofollow"),f(Mn,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForNextSentencePrediction"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"id","transformers.MegatronBertForPreTraining"),f(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(it,"href","#transformers.MegatronBertForPreTraining"),f(ze,"class","relative group"),f(wn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fo,"rel","nofollow"),f($n,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForPreTraining"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"id","transformers.MegatronBertForSequenceClassification"),f(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ct,"href","#transformers.MegatronBertForSequenceClassification"),f(qe,"class","relative group"),f(Tn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Eo,"rel","nofollow"),f(yn,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForSequenceClassification"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"id","transformers.MegatronBertForMultipleChoice"),f(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ft,"href","#transformers.MegatronBertForMultipleChoice"),f(Ee,"class","relative group"),f(Bn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Io,"rel","nofollow"),f(Fn,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForMultipleChoice"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kt,"id","transformers.MegatronBertForTokenClassification"),f(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kt,"href","#transformers.MegatronBertForTokenClassification"),f(Ae,"class","relative group"),f(zn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Uo,"rel","nofollow"),f(xn,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForTokenClassification"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($t,"id","transformers.MegatronBertForQuestionAnswering"),f($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($t,"href","#transformers.MegatronBertForQuestionAnswering"),f(Ne,"class","relative group"),f(Pn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Yo,"rel","nofollow"),f(qn,"href","/docs/transformers/pr_highlight/en/model_doc/megatron-bert#transformers.MegatronBertForQuestionAnswering"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),b(t,_,u),b(t,c,u),e(c,p),e(p,k),w(n,k,null),e(c,h),e(c,F),e(F,Ta),b(t,ls,u),b(t,fe,u),e(fe,Re),e(Re,Qn),w(Et,Qn,null),e(fe,ya),e(fe,Gn),e(Gn,Ba),b(t,ds,u),b(t,He,u),e(He,Fa),e(He,jt),e(jt,za),e(He,xa),b(t,cs,u),b(t,nn,u),e(nn,Pa),b(t,hs,u),b(t,rn,u),e(rn,Vn),e(Vn,qa),b(t,ps,u),b(t,sn,u),e(sn,Ca),b(t,ms,u),b(t,Ue,u),e(Ue,Ea),e(Ue,At),e(At,ja),e(Ue,Aa),b(t,gs,u),b(t,oe,u),e(oe,Sa),e(oe,St),e(St,Na),e(oe,La),e(oe,Nt),e(Nt,Ia),e(oe,Oa),b(t,us,u),b(t,an,u),e(an,Da),b(t,fs,u),b(t,ln,u),e(ln,Wa),b(t,_s,u),w(Lt,t,u),b(t,bs,u),b(t,dn,u),e(dn,Ra),b(t,ks,u),w(It,t,u),b(t,vs,u),b(t,cn,u),e(cn,Ha),b(t,Ms,u),b(t,ne,u),e(ne,Ua),e(ne,Jn),e(Jn,Qa),e(ne,Ga),e(ne,Kn),e(Kn,Va),e(ne,Ja),b(t,ws,u),w(Ot,t,u),b(t,$s,u),w(Dt,t,u),b(t,Ts,u),b(t,re,u),e(re,Ka),e(re,Wt),e(Wt,Ya),e(re,Xa),e(re,Rt),e(Rt,Za),e(re,ei),b(t,ys,u),b(t,_e,u),e(_e,Qe),e(Qe,Yn),w(Ht,Yn,null),e(_e,ti),e(_e,Xn),e(Xn,oi),b(t,Bs,u),b(t,J,u),w(Ut,J,null),e(J,ni),e(J,be),e(be,ri),e(be,hn),e(hn,si),e(be,ai),e(be,Qt),e(Qt,ii),e(be,li),e(J,di),e(J,ke),e(ke,ci),e(ke,pn),e(pn,hi),e(ke,pi),e(ke,mn),e(mn,mi),e(ke,gi),e(J,ui),w(Ge,J,null),b(t,Fs,u),b(t,ve,u),e(ve,Ve),e(Ve,Zn),w(Gt,Zn,null),e(ve,fi),e(ve,er),e(er,_i),b(t,zs,u),b(t,x,u),w(Vt,x,null),e(x,bi),e(x,tr),e(tr,ki),e(x,vi),e(x,Jt),e(Jt,Mi),e(Jt,gn),e(gn,wi),e(Jt,$i),e(x,Ti),e(x,Kt),e(Kt,yi),e(Kt,Yt),e(Yt,Bi),e(Kt,Fi),e(x,zi),e(x,Xt),e(Xt,xi),e(Xt,Zt),e(Zt,Pi),e(Xt,qi),e(x,Ci),e(x,C),e(C,Ei),e(C,or),e(or,ji),e(C,Ai),e(C,nr),e(nr,Si),e(C,Ni),e(C,rr),e(rr,Li),e(C,Ii),e(C,sr),e(sr,Oi),e(C,Di),e(C,ar),e(ar,Wi),e(C,Ri),e(C,ir),e(ir,Hi),e(C,Ui),e(x,Qi),e(x,K),w(eo,K,null),e(K,Gi),e(K,Me),e(Me,Vi),e(Me,un),e(un,Ji),e(Me,Ki),e(Me,lr),e(lr,Yi),e(Me,Xi),e(K,Zi),w(Je,K,null),e(K,el),w(Ke,K,null),b(t,xs,u),b(t,we,u),e(we,Ye),e(Ye,dr),w(to,dr,null),e(we,tl),e(we,cr),e(cr,ol),b(t,Ps,u),b(t,A,u),w(oo,A,null),e(A,nl),e(A,no),e(no,rl),e(no,hr),e(hr,sl),e(no,al),e(A,il),e(A,ro),e(ro,ll),e(ro,fn),e(fn,dl),e(ro,cl),e(A,hl),e(A,so),e(so,pl),e(so,ao),e(ao,ml),e(so,gl),e(A,ul),e(A,R),w(io,R,null),e(R,fl),e(R,$e),e($e,_l),e($e,_n),e(_n,bl),e($e,kl),e($e,pr),e(pr,vl),e($e,Ml),e(R,wl),w(Xe,R,null),e(R,$l),w(Ze,R,null),e(R,Tl),w(et,R,null),b(t,qs,u),b(t,Te,u),e(Te,tt),e(tt,mr),w(lo,mr,null),e(Te,yl),e(Te,gr),e(gr,Bl),b(t,Cs,u),b(t,S,u),w(co,S,null),e(S,Fl),e(S,ho),e(ho,zl),e(ho,ur),e(ur,xl),e(ho,Pl),e(S,ql),e(S,po),e(po,Cl),e(po,bn),e(bn,El),e(po,jl),e(S,Al),e(S,mo),e(mo,Sl),e(mo,go),e(go,Nl),e(mo,Ll),e(S,Il),e(S,Y),w(uo,Y,null),e(Y,Ol),e(Y,ye),e(ye,Dl),e(ye,kn),e(kn,Wl),e(ye,Rl),e(ye,fr),e(fr,Hl),e(ye,Ul),e(Y,Ql),w(ot,Y,null),e(Y,Gl),w(nt,Y,null),b(t,Es,u),b(t,Be,u),e(Be,rt),e(rt,_r),w(fo,_r,null),e(Be,Vl),e(Be,br),e(br,Jl),b(t,js,u),b(t,N,u),w(_o,N,null),e(N,Kl),e(N,bo),e(bo,Yl),e(bo,kr),e(kr,Xl),e(bo,Zl),e(N,ed),e(N,ko),e(ko,td),e(ko,vn),e(vn,od),e(ko,nd),e(N,rd),e(N,vo),e(vo,sd),e(vo,Mo),e(Mo,ad),e(vo,id),e(N,ld),e(N,X),w(wo,X,null),e(X,dd),e(X,Fe),e(Fe,cd),e(Fe,Mn),e(Mn,hd),e(Fe,pd),e(Fe,vr),e(vr,md),e(Fe,gd),e(X,ud),w(st,X,null),e(X,fd),w(at,X,null),b(t,As,u),b(t,ze,u),e(ze,it),e(it,Mr),w($o,Mr,null),e(ze,_d),e(ze,wr),e(wr,bd),b(t,Ss,u),b(t,L,u),w(To,L,null),e(L,kd),e(L,xe),e(xe,vd),e(xe,$r),e($r,Md),e(xe,wd),e(xe,Tr),e(Tr,$d),e(xe,Td),e(L,yd),e(L,yo),e(yo,Bd),e(yo,wn),e(wn,Fd),e(yo,zd),e(L,xd),e(L,Bo),e(Bo,Pd),e(Bo,Fo),e(Fo,qd),e(Bo,Cd),e(L,Ed),e(L,Z),w(zo,Z,null),e(Z,jd),e(Z,Pe),e(Pe,Ad),e(Pe,$n),e($n,Sd),e(Pe,Nd),e(Pe,yr),e(yr,Ld),e(Pe,Id),e(Z,Od),w(lt,Z,null),e(Z,Dd),w(dt,Z,null),b(t,Ns,u),b(t,qe,u),e(qe,ct),e(ct,Br),w(xo,Br,null),e(qe,Wd),e(qe,Fr),e(Fr,Rd),b(t,Ls,u),b(t,I,u),w(Po,I,null),e(I,Hd),e(I,zr),e(zr,Ud),e(I,Qd),e(I,qo),e(qo,Gd),e(qo,Tn),e(Tn,Vd),e(qo,Jd),e(I,Kd),e(I,Co),e(Co,Yd),e(Co,Eo),e(Eo,Xd),e(Co,Zd),e(I,ec),e(I,q),w(jo,q,null),e(q,tc),e(q,Ce),e(Ce,oc),e(Ce,yn),e(yn,nc),e(Ce,rc),e(Ce,xr),e(xr,sc),e(Ce,ac),e(q,ic),w(ht,q,null),e(q,lc),w(pt,q,null),e(q,dc),w(mt,q,null),e(q,cc),w(gt,q,null),e(q,hc),w(ut,q,null),b(t,Is,u),b(t,Ee,u),e(Ee,ft),e(ft,Pr),w(Ao,Pr,null),e(Ee,pc),e(Ee,qr),e(qr,mc),b(t,Os,u),b(t,O,u),w(So,O,null),e(O,gc),e(O,Cr),e(Cr,uc),e(O,fc),e(O,No),e(No,_c),e(No,Bn),e(Bn,bc),e(No,kc),e(O,vc),e(O,Lo),e(Lo,Mc),e(Lo,Io),e(Io,wc),e(Lo,$c),e(O,Tc),e(O,ee),w(Oo,ee,null),e(ee,yc),e(ee,je),e(je,Bc),e(je,Fn),e(Fn,Fc),e(je,zc),e(je,Er),e(Er,xc),e(je,Pc),e(ee,qc),w(_t,ee,null),e(ee,Cc),w(bt,ee,null),b(t,Ds,u),b(t,Ae,u),e(Ae,kt),e(kt,jr),w(Do,jr,null),e(Ae,Ec),e(Ae,Ar),e(Ar,jc),b(t,Ws,u),b(t,D,u),w(Wo,D,null),e(D,Ac),e(D,Sr),e(Sr,Sc),e(D,Nc),e(D,Ro),e(Ro,Lc),e(Ro,zn),e(zn,Ic),e(Ro,Oc),e(D,Dc),e(D,Ho),e(Ho,Wc),e(Ho,Uo),e(Uo,Rc),e(Ho,Hc),e(D,Uc),e(D,H),w(Qo,H,null),e(H,Qc),e(H,Se),e(Se,Gc),e(Se,xn),e(xn,Vc),e(Se,Jc),e(Se,Nr),e(Nr,Kc),e(Se,Yc),e(H,Xc),w(vt,H,null),e(H,Zc),w(Mt,H,null),e(H,eh),w(wt,H,null),b(t,Rs,u),b(t,Ne,u),e(Ne,$t),e($t,Lr),w(Go,Lr,null),e(Ne,th),e(Ne,Ir),e(Ir,oh),b(t,Hs,u),b(t,W,u),w(Vo,W,null),e(W,nh),e(W,Le),e(Le,rh),e(Le,Or),e(Or,sh),e(Le,ah),e(Le,Dr),e(Dr,ih),e(Le,lh),e(W,dh),e(W,Jo),e(Jo,ch),e(Jo,Pn),e(Pn,hh),e(Jo,ph),e(W,mh),e(W,Ko),e(Ko,gh),e(Ko,Yo),e(Yo,uh),e(Ko,fh),e(W,_h),e(W,U),w(Xo,U,null),e(U,bh),e(U,Ie),e(Ie,kh),e(Ie,qn),e(qn,vh),e(Ie,Mh),e(Ie,Wr),e(Wr,wh),e(Ie,$h),e(U,Th),w(Tt,U,null),e(U,yh),w(yt,U,null),e(U,Bh),w(Bt,U,null),Us=!0},p(t,[u]){const Zo={};u&2&&(Zo.$$scope={dirty:u,ctx:t}),Ge.$set(Zo);const Rr={};u&2&&(Rr.$$scope={dirty:u,ctx:t}),Je.$set(Rr);const Hr={};u&2&&(Hr.$$scope={dirty:u,ctx:t}),Ke.$set(Hr);const Ur={};u&2&&(Ur.$$scope={dirty:u,ctx:t}),Xe.$set(Ur);const en={};u&2&&(en.$$scope={dirty:u,ctx:t}),Ze.$set(en);const Qr={};u&2&&(Qr.$$scope={dirty:u,ctx:t}),et.$set(Qr);const Gr={};u&2&&(Gr.$$scope={dirty:u,ctx:t}),ot.$set(Gr);const Vr={};u&2&&(Vr.$$scope={dirty:u,ctx:t}),nt.$set(Vr);const tn={};u&2&&(tn.$$scope={dirty:u,ctx:t}),st.$set(tn);const Jr={};u&2&&(Jr.$$scope={dirty:u,ctx:t}),at.$set(Jr);const Kr={};u&2&&(Kr.$$scope={dirty:u,ctx:t}),lt.$set(Kr);const Yr={};u&2&&(Yr.$$scope={dirty:u,ctx:t}),dt.$set(Yr);const Xr={};u&2&&(Xr.$$scope={dirty:u,ctx:t}),ht.$set(Xr);const Zr={};u&2&&(Zr.$$scope={dirty:u,ctx:t}),pt.$set(Zr);const on={};u&2&&(on.$$scope={dirty:u,ctx:t}),mt.$set(on);const es={};u&2&&(es.$$scope={dirty:u,ctx:t}),gt.$set(es);const Oe={};u&2&&(Oe.$$scope={dirty:u,ctx:t}),ut.$set(Oe);const ts={};u&2&&(ts.$$scope={dirty:u,ctx:t}),_t.$set(ts);const os={};u&2&&(os.$$scope={dirty:u,ctx:t}),bt.$set(os);const ns={};u&2&&(ns.$$scope={dirty:u,ctx:t}),vt.$set(ns);const rs={};u&2&&(rs.$$scope={dirty:u,ctx:t}),Mt.$set(rs);const ss={};u&2&&(ss.$$scope={dirty:u,ctx:t}),wt.$set(ss);const as={};u&2&&(as.$$scope={dirty:u,ctx:t}),Tt.$set(as);const De={};u&2&&(De.$$scope={dirty:u,ctx:t}),yt.$set(De);const is={};u&2&&(is.$$scope={dirty:u,ctx:t}),Bt.$set(is)},i(t){Us||($(n.$$.fragment,t),$(Et.$$.fragment,t),$(Lt.$$.fragment,t),$(It.$$.fragment,t),$(Ot.$$.fragment,t),$(Dt.$$.fragment,t),$(Ht.$$.fragment,t),$(Ut.$$.fragment,t),$(Ge.$$.fragment,t),$(Gt.$$.fragment,t),$(Vt.$$.fragment,t),$(eo.$$.fragment,t),$(Je.$$.fragment,t),$(Ke.$$.fragment,t),$(to.$$.fragment,t),$(oo.$$.fragment,t),$(io.$$.fragment,t),$(Xe.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(lo.$$.fragment,t),$(co.$$.fragment,t),$(uo.$$.fragment,t),$(ot.$$.fragment,t),$(nt.$$.fragment,t),$(fo.$$.fragment,t),$(_o.$$.fragment,t),$(wo.$$.fragment,t),$(st.$$.fragment,t),$(at.$$.fragment,t),$($o.$$.fragment,t),$(To.$$.fragment,t),$(zo.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(xo.$$.fragment,t),$(Po.$$.fragment,t),$(jo.$$.fragment,t),$(ht.$$.fragment,t),$(pt.$$.fragment,t),$(mt.$$.fragment,t),$(gt.$$.fragment,t),$(ut.$$.fragment,t),$(Ao.$$.fragment,t),$(So.$$.fragment,t),$(Oo.$$.fragment,t),$(_t.$$.fragment,t),$(bt.$$.fragment,t),$(Do.$$.fragment,t),$(Wo.$$.fragment,t),$(Qo.$$.fragment,t),$(vt.$$.fragment,t),$(Mt.$$.fragment,t),$(wt.$$.fragment,t),$(Go.$$.fragment,t),$(Vo.$$.fragment,t),$(Xo.$$.fragment,t),$(Tt.$$.fragment,t),$(yt.$$.fragment,t),$(Bt.$$.fragment,t),Us=!0)},o(t){T(n.$$.fragment,t),T(Et.$$.fragment,t),T(Lt.$$.fragment,t),T(It.$$.fragment,t),T(Ot.$$.fragment,t),T(Dt.$$.fragment,t),T(Ht.$$.fragment,t),T(Ut.$$.fragment,t),T(Ge.$$.fragment,t),T(Gt.$$.fragment,t),T(Vt.$$.fragment,t),T(eo.$$.fragment,t),T(Je.$$.fragment,t),T(Ke.$$.fragment,t),T(to.$$.fragment,t),T(oo.$$.fragment,t),T(io.$$.fragment,t),T(Xe.$$.fragment,t),T(Ze.$$.fragment,t),T(et.$$.fragment,t),T(lo.$$.fragment,t),T(co.$$.fragment,t),T(uo.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(fo.$$.fragment,t),T(_o.$$.fragment,t),T(wo.$$.fragment,t),T(st.$$.fragment,t),T(at.$$.fragment,t),T($o.$$.fragment,t),T(To.$$.fragment,t),T(zo.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(xo.$$.fragment,t),T(Po.$$.fragment,t),T(jo.$$.fragment,t),T(ht.$$.fragment,t),T(pt.$$.fragment,t),T(mt.$$.fragment,t),T(gt.$$.fragment,t),T(ut.$$.fragment,t),T(Ao.$$.fragment,t),T(So.$$.fragment,t),T(Oo.$$.fragment,t),T(_t.$$.fragment,t),T(bt.$$.fragment,t),T(Do.$$.fragment,t),T(Wo.$$.fragment,t),T(Qo.$$.fragment,t),T(vt.$$.fragment,t),T(Mt.$$.fragment,t),T(wt.$$.fragment,t),T(Go.$$.fragment,t),T(Vo.$$.fragment,t),T(Xo.$$.fragment,t),T(Tt.$$.fragment,t),T(yt.$$.fragment,t),T(Bt.$$.fragment,t),Us=!1},d(t){o(d),t&&o(_),t&&o(c),y(n),t&&o(ls),t&&o(fe),y(Et),t&&o(ds),t&&o(He),t&&o(cs),t&&o(nn),t&&o(hs),t&&o(rn),t&&o(ps),t&&o(sn),t&&o(ms),t&&o(Ue),t&&o(gs),t&&o(oe),t&&o(us),t&&o(an),t&&o(fs),t&&o(ln),t&&o(_s),y(Lt,t),t&&o(bs),t&&o(dn),t&&o(ks),y(It,t),t&&o(vs),t&&o(cn),t&&o(Ms),t&&o(ne),t&&o(ws),y(Ot,t),t&&o($s),y(Dt,t),t&&o(Ts),t&&o(re),t&&o(ys),t&&o(_e),y(Ht),t&&o(Bs),t&&o(J),y(Ut),y(Ge),t&&o(Fs),t&&o(ve),y(Gt),t&&o(zs),t&&o(x),y(Vt),y(eo),y(Je),y(Ke),t&&o(xs),t&&o(we),y(to),t&&o(Ps),t&&o(A),y(oo),y(io),y(Xe),y(Ze),y(et),t&&o(qs),t&&o(Te),y(lo),t&&o(Cs),t&&o(S),y(co),y(uo),y(ot),y(nt),t&&o(Es),t&&o(Be),y(fo),t&&o(js),t&&o(N),y(_o),y(wo),y(st),y(at),t&&o(As),t&&o(ze),y($o),t&&o(Ss),t&&o(L),y(To),y(zo),y(lt),y(dt),t&&o(Ns),t&&o(qe),y(xo),t&&o(Ls),t&&o(I),y(Po),y(jo),y(ht),y(pt),y(mt),y(gt),y(ut),t&&o(Is),t&&o(Ee),y(Ao),t&&o(Os),t&&o(O),y(So),y(Oo),y(_t),y(bt),t&&o(Ds),t&&o(Ae),y(Do),t&&o(Ws),t&&o(D),y(Wo),y(Qo),y(vt),y(Mt),y(wt),t&&o(Rs),t&&o(Ne),y(Go),t&&o(Hs),t&&o(W),y(Vo),y(Xo),y(Tt),y(yt),y(Bt)}}}const Dm={local:"megatronbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MegatronBertConfig",title:"MegatronBertConfig"},{local:"transformers.MegatronBertModel",title:"MegatronBertModel"},{local:"transformers.MegatronBertForMaskedLM",title:"MegatronBertForMaskedLM"},{local:"transformers.MegatronBertForCausalLM",title:"MegatronBertForCausalLM"},{local:"transformers.MegatronBertForNextSentencePrediction",title:"MegatronBertForNextSentencePrediction"},{local:"transformers.MegatronBertForPreTraining",title:"MegatronBertForPreTraining"},{local:"transformers.MegatronBertForSequenceClassification",title:"MegatronBertForSequenceClassification"},{local:"transformers.MegatronBertForMultipleChoice",title:"MegatronBertForMultipleChoice"},{local:"transformers.MegatronBertForTokenClassification",title:"MegatronBertForTokenClassification"},{local:"transformers.MegatronBertForQuestionAnswering",title:"MegatronBertForQuestionAnswering"}],title:"MegatronBERT"};function Wm(B){return gm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jm extends cm{constructor(d){super();hm(this,d,Wm,Om,pm,{})}}export{Jm as default,Dm as metadata};
