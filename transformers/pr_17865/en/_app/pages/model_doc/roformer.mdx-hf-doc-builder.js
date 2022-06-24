import{S as Dx,i as Nx,s as Sx,e as n,k as m,w as b,t as a,M as Ox,c as r,d as o,m as h,a as s,x as y,h as i,b as u,G as e,g as k,y as T,q as w,o as $,B as x,v as Wx,L as le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Re}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ux(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerModel, RoFormerConfig

# Initializing a RoFormer junnyu/roformer_chinese_base style configuration
configuration = RoFormerConfig()

# Initializing a model from the junnyu/roformer_chinese_base style configuration
model = RoFormerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerModel, RoFormerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoFormer junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RoFormerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the junnyu/roformer_chinese_base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Qx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Hx(R){let d,g,c,p,_;return p=new de({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Bx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizerFast

tokenizer = RoFormerTokenizerFast.from_pretrained("junnyu/roformer_chinese_base")
tokenizer.tokenize("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>)
<span class="hljs-comment"># [&#x27;\u4ECA&#x27;, &#x27;\u5929&#x27;, &#x27;\u5929&#x27;, &#x27;\u6C14&#x27;, &#x27;\u975E\u5E38&#x27;, &#x27;\u597D&#x27;, &#x27;\u3002&#x27;]</span>`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Kx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Vx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerModel
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Jx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Gx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
config = RoFormerConfig.from_pretrained("junnyu/roformer_chinese_base")
config.is_decoder = True
model = RoFormerForCausalLM.from_pretrained("junnyu/roformer_chinese_base", config=config)

inputs = tokenizer("\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForCausalLM, RoFormerConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RoFormerConfig.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;\u4ECA\u5929\u5929\u6C14\u975E\u5E38\u597D\u3002&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Xx(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function Yx(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMaskedLM
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function Zx(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function eR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function oR(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
from transformers import RoFormerTokenizer, RoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of single-label classification:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function tR(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nR(R){let d,g,c,p,_;return p=new de({props:{code:`import torch
from transformers import RoFormerTokenizer, RoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example of multi-label classification:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function rR(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RoFormerForSequenceClassification.from_pretrained(
    "junnyu/roformer_chinese_base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function sR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function aR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForMultipleChoice
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function iR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function lR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForTokenClassification
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function dR(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function cR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function pR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, RoFormerForQuestionAnswering
import torch

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = RoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, RoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function mR(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function hR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),V=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var we=s(O);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),V=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var $e=s(B);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,V,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,B),e(B,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(V),v&&o(L),v&&o(G),v&&o(j)}}}function fR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function uR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerModel
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function gR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),V=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var we=s(O);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),V=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var $e=s(B);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,V,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,B),e(B,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(V),v&&o(L),v&&o(G),v&&o(j)}}}function _R(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function kR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMaskedLM
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function FR(R){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function vR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),V=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var we=s(O);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),V=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var $e=s(B);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,V,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,B),e(B,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(V),v&&o(L),v&&o(G),v&&o(j)}}}function bR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForCausalLM
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForCausalLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForCausalLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function yR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),V=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var we=s(O);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),V=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var $e=s(B);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,V,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,B),e(B,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(V),v&&o(L),v&&o(G),v&&o(j)}}}function TR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function wR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForSequenceClassification
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function $R(R){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),V=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var we=s(O);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),V=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var $e=s(B);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,V,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,B),e(B,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(V),v&&o(L),v&&o(G),v&&o(j)}}}function RR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function MR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForMultipleChoice
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function ER(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),V=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var we=s(O);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),V=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var $e=s(B);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,V,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,B),e(B,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(V),v&&o(L),v&&o(G),v&&o(j)}}}function zR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function jR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForTokenClassification
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function CR(R){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=n("li"),ue=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=m(),z=n("p"),Z=a("This second option is useful when using "),S=n("code"),ee=a("tf.keras.Model.fit"),ge=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),_e=a("model(inputs)"),pe=a("."),V=m(),L=n("p"),oe=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),j=n("ul"),q=n("li"),ne=a("a single Tensor with "),Q=n("code"),me=a("input_ids"),re=a(" only and nothing else: "),W=n("code"),ke=a("model(inputs_ids)"),he=m(),C=n("li"),Fe=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),se=a("model([input_ids, attention_mask])"),ce=a(" or "),H=n("code"),fe=a("model([input_ids, attention_mask, token_type_ids])"),X=m(),I=n("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),ve=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=r(v,"P",{});var E=s(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(o),c=h(v),p=r(v,"UL",{});var Y=s(p);_=r(Y,"LI",{});var Me=s(_);l=i(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(o),f=h(Y),M=r(Y,"LI",{});var ye=s(M);ue=i(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(o),Y.forEach(o),J=h(v),z=r(v,"P",{});var P=s(z);Z=i(P,"This second option is useful when using "),S=r(P,"CODE",{});var xe=s(S);ee=i(xe,"tf.keras.Model.fit"),xe.forEach(o),ge=i(P,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(P,"CODE",{});var we=s(O);_e=i(we,"model(inputs)"),we.forEach(o),pe=i(P,"."),P.forEach(o),V=h(v),L=r(v,"P",{});var je=s(L);oe=i(je,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),je.forEach(o),G=h(v),j=r(v,"UL",{});var A=s(j);q=r(A,"LI",{});var K=s(q);ne=i(K,"a single Tensor with "),Q=r(K,"CODE",{});var Ee=s(Q);me=i(Ee,"input_ids"),Ee.forEach(o),re=i(K," only and nothing else: "),W=r(K,"CODE",{});var ae=s(W);ke=i(ae,"model(inputs_ids)"),ae.forEach(o),K.forEach(o),he=h(A),C=r(A,"LI",{});var D=s(C);Fe=i(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(D,"CODE",{});var Ce=s(U);se=i(Ce,"model([input_ids, attention_mask])"),Ce.forEach(o),ce=i(D," or "),H=r(D,"CODE",{});var Te=s(H);fe=i(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(o),D.forEach(o),X=h(A),I=r(A,"LI",{});var be=s(I);te=i(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(be,"CODE",{});var $e=s(B);ve=i($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(o),be.forEach(o),A.forEach(o)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,p,E),e(p,_),e(_,l),e(p,f),e(p,M),e(M,ue),k(v,J,E),k(v,z,E),e(z,Z),e(z,S),e(S,ee),e(z,ge),e(z,O),e(O,_e),e(z,pe),k(v,V,E),k(v,L,E),e(L,oe),k(v,G,E),k(v,j,E),e(j,q),e(q,ne),e(q,Q),e(Q,me),e(q,re),e(q,W),e(W,ke),e(j,he),e(j,C),e(C,Fe),e(C,U),e(U,se),e(C,ce),e(C,H),e(H,fe),e(j,X),e(j,I),e(I,te),e(I,B),e(B,ve)},d(v){v&&o(d),v&&o(c),v&&o(p),v&&o(J),v&&o(z),v&&o(V),v&&o(L),v&&o(G),v&&o(j)}}}function PR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function AR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, TFRoFormerForQuestionAnswering
import tensorflow as tf

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = TFRoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, TFRoFormerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function LR(R){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){T(d,c,p),g=!0},p:le,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function IR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function DR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerModel

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerModel.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerModel.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function NR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function SR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMaskedLM

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMaskedLM.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function OR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function WR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForSequenceClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForSequenceClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function UR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function QR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForMultipleChoice

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForMultipleChoice.from_pretrained("junnyu/roformer_chinese_base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function HR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function BR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForTokenClassification

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForTokenClassification.from_pretrained("junnyu/roformer_chinese_base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function KR(R){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var M=s(c);p=i(M,"Module"),M.forEach(o),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&o(d)}}}function VR(R){let d,g,c,p,_;return p=new de({props:{code:`from transformers import RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

tokenizer = RoFormerTokenizer.from_pretrained("junnyu/roformer_chinese_base")
model = FlaxRoFormerForQuestionAnswering.from_pretrained("junnyu/roformer_chinese_base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoFormerTokenizer, FlaxRoFormerForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RoFormerTokenizer.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRoFormerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;junnyu/roformer_chinese_base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),c=m(),b(p.$$.fragment)},l(l){d=r(l,"P",{});var f=s(d);g=i(f,"Example:"),f.forEach(o),c=h(l),y(p.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),T(p,l,f),_=!0},p:le,i(l){_||(w(p.$$.fragment,l),_=!0)},o(l){$(p.$$.fragment,l),_=!1},d(l){l&&o(d),l&&o(c),x(p,l)}}}function JR(R){let d,g,c,p,_,l,f,M,ue,J,z,Z,S,ee,ge,O,_e,pe,V,L,oe,G,j,q,ne,Q,me,re,W,ke,he,C,Fe,U,se,ce,H,fe,X,I,te,B,ve,v,E,Y,Me,ye,P,xe,we,je,A,K,Ee,ae,D,Ce,Te,be,$e,Sf,Of,rs,Wf,Uf,Qf,it,Hf,pl,Bf,Kf,ml,Vf,Jf,Gf,an,Qm,lt,ln,wd,ss,Xf,$d,Yf,Hm,qe,as,Zf,is,eu,ls,ou,tu,nu,ds,ru,hl,su,au,iu,dn,lu,Go,cs,du,xd,cu,pu,ps,fl,mu,Rd,hu,fu,ul,uu,Md,gu,_u,cn,ms,ku,hs,Fu,Ed,vu,bu,yu,vo,fs,Tu,zd,wu,$u,pn,xu,dt,Ru,jd,Mu,Eu,Cd,zu,ju,Cu,gl,us,Bm,ct,mn,qd,gs,qu,Pd,Pu,Km,We,_s,Au,ks,Lu,Ad,Iu,Du,Nu,hn,_l,Su,Ou,kl,Wu,Uu,Qu,Fs,Hu,Fl,Bu,Ku,Vu,fn,Ju,Xo,vs,Gu,Ld,Xu,Yu,bs,vl,Zu,Id,eg,og,bl,tg,Dd,ng,Vm,pt,un,Nd,ys,rg,Sd,sg,Jm,Xe,Ts,ag,ws,ig,$s,lg,dg,cg,xs,pg,Rs,mg,hg,fg,Ue,ug,Od,gg,_g,Wd,kg,Fg,Ud,vg,bg,Qd,yg,Tg,Hd,wg,$g,Bd,xg,Rg,Mg,bo,Ms,Eg,mt,zg,yl,jg,Cg,Kd,qg,Pg,Ag,gn,Lg,_n,Gm,ht,kn,Vd,Es,Ig,Jd,Dg,Xm,So,zs,Ng,ft,Sg,Gd,Og,Wg,js,Ug,Qg,Hg,yo,Cs,Bg,ut,Kg,Tl,Vg,Jg,Xd,Gg,Xg,Yg,Fn,Zg,vn,Ym,gt,bn,Yd,qs,e_,Zd,o_,Zm,Oo,Ps,t_,_t,n_,ec,r_,s_,As,a_,i_,l_,eo,Ls,d_,kt,c_,wl,p_,m_,oc,h_,f_,u_,yn,g_,Tn,__,wn,eh,Ft,$n,tc,Is,k_,nc,F_,oh,go,Ds,v_,rc,b_,y_,Ns,T_,Ss,w_,$_,x_,Oe,Os,R_,vt,M_,$l,E_,z_,sc,j_,C_,q_,xn,P_,Rn,A_,Mn,L_,En,I_,zn,th,bt,jn,ac,Ws,D_,ic,N_,nh,_o,Us,S_,lc,O_,W_,Qs,U_,Hs,Q_,H_,B_,To,Bs,K_,yt,V_,xl,J_,G_,dc,X_,Y_,Z_,Cn,ek,qn,rh,Tt,Pn,cc,Ks,ok,pc,tk,sh,ko,Vs,nk,mc,rk,sk,Js,ak,Gs,ik,lk,dk,oo,Xs,ck,wt,pk,Rl,mk,hk,hc,fk,uk,gk,An,_k,Ln,kk,In,ah,$t,Dn,fc,Ys,Fk,uc,vk,ih,Fo,Zs,bk,xt,yk,gc,Tk,wk,_c,$k,xk,Rk,ea,Mk,oa,Ek,zk,jk,to,ta,Ck,Rt,qk,Ml,Pk,Ak,kc,Lk,Ik,Dk,Nn,Nk,Sn,Sk,On,lh,Mt,Wn,Fc,na,Ok,vc,Wk,dh,Qe,ra,Uk,bc,Qk,Hk,sa,Bk,El,Kk,Vk,Jk,aa,Gk,ia,Xk,Yk,Zk,Un,eF,wo,la,oF,Et,tF,zl,nF,rF,yc,sF,aF,iF,Qn,lF,Hn,ch,zt,Bn,Tc,da,dF,wc,cF,ph,He,ca,pF,pa,mF,$c,hF,fF,uF,ma,gF,jl,_F,kF,FF,ha,vF,fa,bF,yF,TF,Kn,wF,no,ua,$F,jt,xF,Cl,RF,MF,xc,EF,zF,jF,Vn,CF,Jn,qF,Gn,mh,Ct,Xn,Rc,ga,PF,Mc,AF,hh,Be,_a,LF,ka,IF,Ec,DF,NF,SF,Fa,OF,ql,WF,UF,QF,va,HF,ba,BF,KF,VF,Yn,JF,Yo,ya,GF,Ye,XF,zc,YF,ZF,jc,ev,ov,Cc,tv,nv,qc,rv,sv,Pc,av,iv,lv,Zn,fh,qt,er,Ac,Ta,dv,Lc,cv,uh,Ke,wa,pv,Ic,mv,hv,$a,fv,Pl,uv,gv,_v,xa,kv,Ra,Fv,vv,bv,or,yv,ro,Ma,Tv,Pt,wv,Al,$v,xv,Dc,Rv,Mv,Ev,tr,zv,nr,jv,rr,gh,At,sr,Nc,Ea,Cv,Sc,qv,_h,Ve,za,Pv,Oc,Av,Lv,ja,Iv,Ll,Dv,Nv,Sv,Ca,Ov,qa,Wv,Uv,Qv,ar,Hv,$o,Pa,Bv,Lt,Kv,Il,Vv,Jv,Wc,Gv,Xv,Yv,ir,Zv,lr,kh,It,dr,Uc,Aa,eb,Qc,ob,Fh,Je,La,tb,Hc,nb,rb,Ia,sb,Dl,ab,ib,lb,Da,db,Na,cb,pb,mb,cr,hb,so,Sa,fb,Dt,ub,Nl,gb,_b,Bc,kb,Fb,vb,pr,bb,mr,yb,hr,vh,Nt,fr,Kc,Oa,Tb,Vc,wb,bh,Ge,Wa,$b,St,xb,Jc,Rb,Mb,Gc,Eb,zb,jb,Ua,Cb,Sl,qb,Pb,Ab,Qa,Lb,Ha,Ib,Db,Nb,ur,Sb,ao,Ba,Ob,Ot,Wb,Ol,Ub,Qb,Xc,Hb,Bb,Kb,gr,Vb,_r,Jb,kr,yh,Wt,Fr,Yc,Ka,Gb,Zc,Xb,Th,Pe,Va,Yb,ep,Zb,ey,Ja,oy,Wl,ty,ny,ry,Ga,sy,Xa,ay,iy,ly,op,dy,cy,Wo,tp,Ya,py,my,np,Za,hy,fy,rp,ei,uy,gy,sp,oi,_y,ky,xo,ti,Fy,Ut,vy,ap,by,yy,ip,Ty,wy,$y,vr,xy,br,wh,Qt,yr,lp,ni,Ry,dp,My,$h,Ae,ri,Ey,si,zy,cp,jy,Cy,qy,ai,Py,Ul,Ay,Ly,Iy,ii,Dy,li,Ny,Sy,Oy,pp,Wy,Uy,Uo,mp,di,Qy,Hy,hp,ci,By,Ky,fp,pi,Vy,Jy,up,mi,Gy,Xy,Ro,hi,Yy,Ht,Zy,gp,eT,oT,_p,tT,nT,rT,Tr,sT,wr,xh,Bt,$r,kp,fi,aT,Fp,iT,Rh,Le,ui,lT,vp,dT,cT,gi,pT,Ql,mT,hT,fT,_i,uT,ki,gT,_T,kT,bp,FT,vT,Qo,yp,Fi,bT,yT,Tp,vi,TT,wT,wp,bi,$T,xT,$p,yi,RT,MT,Mo,Ti,ET,Kt,zT,xp,jT,CT,Rp,qT,PT,AT,xr,LT,Rr,Mh,Vt,Mr,Mp,wi,IT,Ep,DT,Eh,Ie,$i,NT,zp,ST,OT,xi,WT,Hl,UT,QT,HT,Ri,BT,Mi,KT,VT,JT,jp,GT,XT,Ho,Cp,Ei,YT,ZT,qp,zi,ew,ow,Pp,ji,tw,nw,Ap,Ci,rw,sw,Eo,qi,aw,Jt,iw,Lp,lw,dw,Ip,cw,pw,mw,Er,hw,zr,zh,Gt,jr,Dp,Pi,fw,Np,uw,jh,De,Ai,gw,Sp,_w,kw,Li,Fw,Bl,vw,bw,yw,Ii,Tw,Di,ww,$w,xw,Op,Rw,Mw,Bo,Wp,Ni,Ew,zw,Up,Si,jw,Cw,Qp,Oi,qw,Pw,Hp,Wi,Aw,Lw,zo,Ui,Iw,Xt,Dw,Bp,Nw,Sw,Kp,Ow,Ww,Uw,Cr,Qw,qr,Ch,Yt,Pr,Vp,Qi,Hw,Jp,Bw,qh,Ne,Hi,Kw,Zt,Vw,Gp,Jw,Gw,Xp,Xw,Yw,Zw,Bi,e1,Kl,o1,t1,n1,Ki,r1,Vi,s1,a1,i1,Yp,l1,d1,Ko,Zp,Ji,c1,p1,em,Gi,m1,h1,om,Xi,f1,u1,tm,Yi,g1,_1,jo,Zi,k1,en,F1,nm,v1,b1,rm,y1,T1,w1,Ar,$1,Lr,Ph;return l=new ze({}),ee=new ze({}),we=new ze({}),D=new N({props:{name:"class transformers.RoFormerConfig",anchor:"transformers.RoFormerConfig",parameters:[{name:"vocab_size",val:" = 50000"},{name:"embedding_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1536"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"rotary_value",val:" = False"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50000) &#x2014;
Vocabulary size of the RoFormer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoFormerConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the encoder layers and the pooler layer. Defaults to the <code>hidden_size</code> if not provided.`,name:"embedding_size"},{anchor:"transformers.RoFormerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RoFormerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RoFormerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RoFormerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RoFormerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RoFormerConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RoFormerConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RoFormerConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 1536).`,name:"max_position_embeddings"},{anchor:"transformers.RoFormerConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerModel">RoFormerModel</a> or <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerModel">TFRoFormerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoFormerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoFormerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoFormerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoFormerConfig.rotary_value",description:`<strong>rotary_value</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not apply rotary position embeddings on value layer.`,name:"rotary_value"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/configuration_roformer.py#L46"}}),an=new ie({props:{anchor:"transformers.RoFormerConfig.example",$$slots:{default:[Ux]},$$scope:{ctx:R}}}),ss=new ze({}),as=new N({props:{name:"class transformers.RoFormerTokenizer",anchor:"transformers.RoFormerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.RoFormerTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RoFormerTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.RoFormerTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.RoFormerTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RoFormerTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RoFormerTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RoFormerTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RoFormerTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RoFormerTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/tokenization_roformer.py#L69"}}),dn=new ie({props:{anchor:"transformers.RoFormerTokenizer.example",$$slots:{default:[Qx]},$$scope:{ctx:R}}}),cs=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/tokenization_roformer.py#L235",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoFormerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/tokenization_roformer.py#L260",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/tokenization_roformer.py#L288",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pn=new ie({props:{anchor:"transformers.RoFormerTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Hx]},$$scope:{ctx:R}}}),us=new N({props:{name:"save_vocabulary",anchor:"transformers.RoFormerTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/tokenization_roformer.py#L317"}}),gs=new ze({}),_s=new N({props:{name:"class transformers.RoFormerTokenizerFast",anchor:"transformers.RoFormerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/tokenization_roformer_fast.py#L71"}}),fn=new ie({props:{anchor:"transformers.RoFormerTokenizerFast.example",$$slots:{default:[Bx]},$$scope:{ctx:R}}}),vs=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoFormerTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/tokenization_roformer_fast.py#L147",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ys=new ze({}),Ts=new N({props:{name:"class transformers.RoFormerModel",anchor:"transformers.RoFormerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L789"}}),Ms=new N({props:{name:"forward",anchor:"transformers.RoFormerModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L829",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Re({props:{$$slots:{default:[Kx]},$$scope:{ctx:R}}}),_n=new ie({props:{anchor:"transformers.RoFormerModel.forward.example",$$slots:{default:[Vx]},$$scope:{ctx:R}}}),Es=new ze({}),zs=new N({props:{name:"class transformers.RoFormerForCausalLM",anchor:"transformers.RoFormerForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1057"}}),Cs=new N({props:{name:"forward",anchor:"transformers.RoFormerForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoFormerForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoFormerForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoFormerForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RoFormerForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1079",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new Re({props:{$$slots:{default:[Jx]},$$scope:{ctx:R}}}),vn=new ie({props:{anchor:"transformers.RoFormerForCausalLM.forward.example",$$slots:{default:[Gx]},$$scope:{ctx:R}}}),qs=new ze({}),Ps=new N({props:{name:"class transformers.RoFormerForMaskedLM",anchor:"transformers.RoFormerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L956"}}),Ls=new N({props:{name:"forward",anchor:"transformers.RoFormerForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new Re({props:{$$slots:{default:[Xx]},$$scope:{ctx:R}}}),Tn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example",$$slots:{default:[Yx]},$$scope:{ctx:R}}}),wn=new ie({props:{anchor:"transformers.RoFormerForMaskedLM.forward.example-2",$$slots:{default:[Zx]},$$scope:{ctx:R}}}),Is=new ze({}),Ds=new N({props:{name:"class transformers.RoFormerForSequenceClassification",anchor:"transformers.RoFormerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1230"}}),Os=new N({props:{name:"forward",anchor:"transformers.RoFormerForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xn=new Re({props:{$$slots:{default:[eR]},$$scope:{ctx:R}}}),Rn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example",$$slots:{default:[oR]},$$scope:{ctx:R}}}),Mn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-2",$$slots:{default:[tR]},$$scope:{ctx:R}}}),En=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-3",$$slots:{default:[nR]},$$scope:{ctx:R}}}),zn=new ie({props:{anchor:"transformers.RoFormerForSequenceClassification.forward.example-4",$$slots:{default:[rR]},$$scope:{ctx:R}}}),Ws=new ze({}),Us=new N({props:{name:"class transformers.RoFormerForMultipleChoice",anchor:"transformers.RoFormerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1322"}}),Bs=new N({props:{name:"forward",anchor:"transformers.RoFormerForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1333",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new Re({props:{$$slots:{default:[sR]},$$scope:{ctx:R}}}),qn=new ie({props:{anchor:"transformers.RoFormerForMultipleChoice.forward.example",$$slots:{default:[aR]},$$scope:{ctx:R}}}),Ks=new ze({}),Vs=new N({props:{name:"class transformers.RoFormerForTokenClassification",anchor:"transformers.RoFormerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1414"}}),Xs=new N({props:{name:"forward",anchor:"transformers.RoFormerForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Re({props:{$$slots:{default:[iR]},$$scope:{ctx:R}}}),Ln=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example",$$slots:{default:[lR]},$$scope:{ctx:R}}}),In=new ie({props:{anchor:"transformers.RoFormerForTokenClassification.forward.example-2",$$slots:{default:[dR]},$$scope:{ctx:R}}}),Ys=new ze({}),Zs=new N({props:{name:"class transformers.RoFormerForQuestionAnswering",anchor:"transformers.RoFormerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1491"}}),ta=new N({props:{name:"forward",anchor:"transformers.RoFormerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.RoFormerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoFormerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_roformer.py#L1504",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Re({props:{$$slots:{default:[cR]},$$scope:{ctx:R}}}),Sn=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example",$$slots:{default:[pR]},$$scope:{ctx:R}}}),On=new ie({props:{anchor:"transformers.RoFormerForQuestionAnswering.forward.example-2",$$slots:{default:[mR]},$$scope:{ctx:R}}}),na=new ze({}),ra=new N({props:{name:"class transformers.TFRoFormerModel",anchor:"transformers.TFRoFormerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L794"}}),Un=new Re({props:{$$slots:{default:[hR]},$$scope:{ctx:R}}}),la=new N({props:{name:"call",anchor:"transformers.TFRoFormerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L800",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new Re({props:{$$slots:{default:[fR]},$$scope:{ctx:R}}}),Hn=new ie({props:{anchor:"transformers.TFRoFormerModel.call.example",$$slots:{default:[uR]},$$scope:{ctx:R}}}),da=new ze({}),ca=new N({props:{name:"class transformers.TFRoFormerForMaskedLM",anchor:"transformers.TFRoFormerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L842"}}),Kn=new Re({props:{$$slots:{default:[gR]},$$scope:{ctx:R}}}),ua=new N({props:{name:"call",anchor:"transformers.TFRoFormerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L858",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vn=new Re({props:{$$slots:{default:[_R]},$$scope:{ctx:R}}}),Jn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example",$$slots:{default:[kR]},$$scope:{ctx:R}}}),Gn=new ie({props:{anchor:"transformers.TFRoFormerForMaskedLM.call.example-2",$$slots:{default:[FR]},$$scope:{ctx:R}}}),ga=new ze({}),_a=new N({props:{name:"class transformers.TFRoFormerForCausalLM",anchor:"transformers.TFRoFormerForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L921"}}),Yn=new Re({props:{$$slots:{default:[vR]},$$scope:{ctx:R}}}),ya=new N({props:{name:"call",anchor:"transformers.TFRoFormerForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L934",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new ie({props:{anchor:"transformers.TFRoFormerForCausalLM.call.example",$$slots:{default:[bR]},$$scope:{ctx:R}}}),Ta=new ze({}),wa=new N({props:{name:"class transformers.TFRoFormerForSequenceClassification",anchor:"transformers.TFRoFormerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1034"}}),or=new Re({props:{$$slots:{default:[yR]},$$scope:{ctx:R}}}),Ma=new N({props:{name:"call",anchor:"transformers.TFRoFormerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1043",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tr=new Re({props:{$$slots:{default:[TR]},$$scope:{ctx:R}}}),nr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example",$$slots:{default:[wR]},$$scope:{ctx:R}}}),rr=new ie({props:{anchor:"transformers.TFRoFormerForSequenceClassification.call.example-2",$$slots:{default:[$R]},$$scope:{ctx:R}}}),Ea=new ze({}),za=new N({props:{name:"class transformers.TFRoFormerForMultipleChoice",anchor:"transformers.TFRoFormerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1110"}}),ar=new Re({props:{$$slots:{default:[xR]},$$scope:{ctx:R}}}),Pa=new N({props:{name:"call",anchor:"transformers.TFRoFormerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ir=new Re({props:{$$slots:{default:[RR]},$$scope:{ctx:R}}}),lr=new ie({props:{anchor:"transformers.TFRoFormerForMultipleChoice.call.example",$$slots:{default:[MR]},$$scope:{ctx:R}}}),Aa=new ze({}),La=new N({props:{name:"class transformers.TFRoFormerForTokenClassification",anchor:"transformers.TFRoFormerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1234"}}),cr=new Re({props:{$$slots:{default:[ER]},$$scope:{ctx:R}}}),Sa=new N({props:{name:"call",anchor:"transformers.TFRoFormerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pr=new Re({props:{$$slots:{default:[zR]},$$scope:{ctx:R}}}),mr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example",$$slots:{default:[jR]},$$scope:{ctx:R}}}),hr=new ie({props:{anchor:"transformers.TFRoFormerForTokenClassification.call.example-2",$$slots:{default:[CR]},$$scope:{ctx:R}}}),Oa=new ze({}),Wa=new N({props:{name:"class transformers.TFRoFormerForQuestionAnswering",anchor:"transformers.TFRoFormerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1312"}}),ur=new Re({props:{$$slots:{default:[qR]},$$scope:{ctx:R}}}),Ba=new N({props:{name:"call",anchor:"transformers.TFRoFormerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRoFormerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRoFormerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_tf_roformer.py#L1323",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gr=new Re({props:{$$slots:{default:[PR]},$$scope:{ctx:R}}}),_r=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example",$$slots:{default:[AR]},$$scope:{ctx:R}}}),kr=new ie({props:{anchor:"transformers.TFRoFormerForQuestionAnswering.call.example-2",$$slots:{default:[LR]},$$scope:{ctx:R}}}),Ka=new ze({}),Va=new N({props:{name:"class transformers.FlaxRoFormerModel",anchor:"transformers.FlaxRoFormerModel",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L749"}}),ti=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vr=new Re({props:{$$slots:{default:[IR]},$$scope:{ctx:R}}}),br=new ie({props:{anchor:"transformers.FlaxRoFormerModel.__call__.example",$$slots:{default:[DR]},$$scope:{ctx:R}}}),ni=new ze({}),ri=new N({props:{name:"class transformers.FlaxRoFormerForMaskedLM",anchor:"transformers.FlaxRoFormerForMaskedLM",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L809"}}),hi=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tr=new Re({props:{$$slots:{default:[NR]},$$scope:{ctx:R}}}),wr=new ie({props:{anchor:"transformers.FlaxRoFormerForMaskedLM.__call__.example",$$slots:{default:[SR]},$$scope:{ctx:R}}}),fi=new ze({}),ui=new N({props:{name:"class transformers.FlaxRoFormerForSequenceClassification",anchor:"transformers.FlaxRoFormerForSequenceClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L874"}}),Ti=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xr=new Re({props:{$$slots:{default:[OR]},$$scope:{ctx:R}}}),Rr=new ie({props:{anchor:"transformers.FlaxRoFormerForSequenceClassification.__call__.example",$$slots:{default:[WR]},$$scope:{ctx:R}}}),wi=new ze({}),$i=new N({props:{name:"class transformers.FlaxRoFormerForMultipleChoice",anchor:"transformers.FlaxRoFormerForMultipleChoice",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L950"}}),qi=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new Re({props:{$$slots:{default:[UR]},$$scope:{ctx:R}}}),zr=new ie({props:{anchor:"transformers.FlaxRoFormerForMultipleChoice.__call__.example",$$slots:{default:[QR]},$$scope:{ctx:R}}}),Pi=new ze({}),Ai=new N({props:{name:"class transformers.FlaxRoFormerForTokenClassification",anchor:"transformers.FlaxRoFormerForTokenClassification",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L1019"}}),Ui=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cr=new Re({props:{$$slots:{default:[HR]},$$scope:{ctx:R}}}),qr=new ie({props:{anchor:"transformers.FlaxRoFormerForTokenClassification.__call__.example",$$slots:{default:[BR]},$$scope:{ctx:R}}}),Qi=new ze({}),Hi=new N({props:{name:"class transformers.FlaxRoFormerForQuestionAnswering",anchor:"transformers.FlaxRoFormerForQuestionAnswering",parameters:[{name:"config",val:": RoFormerConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig">RoFormerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L1088"}}),Zi=new N({props:{name:"__call__",anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizer">RoFormerTokenizer</a>. See <a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17865/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17865/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17865/src/transformers/models/roformer/modeling_flax_roformer.py#L655",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerConfig"
>RoFormerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_17865/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ar=new Re({props:{$$slots:{default:[KR]},$$scope:{ctx:R}}}),Lr=new ie({props:{anchor:"transformers.FlaxRoFormerForQuestionAnswering.__call__.example",$$slots:{default:[VR]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=m(),c=n("h1"),p=n("a"),_=n("span"),b(l.$$.fragment),f=m(),M=n("span"),ue=a("RoFormer"),J=m(),z=n("h2"),Z=n("a"),S=n("span"),b(ee.$$.fragment),ge=m(),O=n("span"),_e=a("Overview"),pe=m(),V=n("p"),L=a("The RoFormer model was proposed in "),oe=n("a"),G=a("RoFormer: Enhanced Transformer with Rotary Position Embedding"),j=a(" by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),q=m(),ne=n("p"),Q=a("The abstract from the paper is the following:"),me=m(),re=n("p"),W=n("em"),ke=a(`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),he=m(),C=n("p"),Fe=a("Tips:"),U=m(),se=n("ul"),ce=n("li"),H=a(`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),fe=m(),X=n("p"),I=a("This model was contributed by "),te=n("a"),B=a("junnyu"),ve=a(". The original code can be found "),v=n("a"),E=a("here"),Y=a("."),Me=m(),ye=n("h2"),P=n("a"),xe=n("span"),b(we.$$.fragment),je=m(),A=n("span"),K=a("RoFormerConfig"),Ee=m(),ae=n("div"),b(D.$$.fragment),Ce=m(),Te=n("p"),be=a("This is the configuration class to store the configuration of a "),$e=n("a"),Sf=a("RoFormerModel"),Of=a(`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=n("a"),Wf=a("junnyu/roformer_chinese_base"),Uf=a(" architecture."),Qf=m(),it=n("p"),Hf=a("Configuration objects inherit from "),pl=n("a"),Bf=a("PretrainedConfig"),Kf=a(` and can be used to control the model outputs. Read the
documentation from `),ml=n("a"),Vf=a("PretrainedConfig"),Jf=a(" for more information."),Gf=m(),b(an.$$.fragment),Qm=m(),lt=n("h2"),ln=n("a"),wd=n("span"),b(ss.$$.fragment),Xf=m(),$d=n("span"),Yf=a("RoFormerTokenizer"),Hm=m(),qe=n("div"),b(as.$$.fragment),Zf=m(),is=n("p"),eu=a("Construct a RoFormer tokenizer. Based on "),ls=n("a"),ou=a("Rust Jieba"),tu=a("."),nu=m(),ds=n("p"),ru=a("This tokenizer inherits from "),hl=n("a"),su=a("PreTrainedTokenizer"),au=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=m(),b(dn.$$.fragment),lu=m(),Go=n("div"),b(cs.$$.fragment),du=m(),xd=n("p"),cu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),pu=m(),ps=n("ul"),fl=n("li"),mu=a("single sequence: "),Rd=n("code"),hu=a("[CLS] X [SEP]"),fu=m(),ul=n("li"),uu=a("pair of sequences: "),Md=n("code"),gu=a("[CLS] A [SEP] B [SEP]"),_u=m(),cn=n("div"),b(ms.$$.fragment),ku=m(),hs=n("p"),Fu=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=n("code"),vu=a("prepare_for_model"),bu=a(" method."),yu=m(),vo=n("div"),b(fs.$$.fragment),Tu=m(),zd=n("p"),wu=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),$u=m(),b(pn.$$.fragment),xu=m(),dt=n("p"),Ru=a("If "),jd=n("code"),Mu=a("token_ids_1"),Eu=a(" is "),Cd=n("code"),zu=a("None"),ju=a(", this method only returns the first portion of the mask (0s)."),Cu=m(),gl=n("div"),b(us.$$.fragment),Bm=m(),ct=n("h2"),mn=n("a"),qd=n("span"),b(gs.$$.fragment),qu=m(),Pd=n("span"),Pu=a("RoFormerTokenizerFast"),Km=m(),We=n("div"),b(_s.$$.fragment),Au=m(),ks=n("p"),Lu=a("Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=n("em"),Iu=a("tokenizers"),Du=a(" library)."),Nu=m(),hn=n("p"),_l=n("a"),Su=a("RoFormerTokenizerFast"),Ou=a(" is almost identical to "),kl=n("a"),Wu=a("BertTokenizerFast"),Uu=a(` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Qu=m(),Fs=n("p"),Hu=a("This tokenizer inherits from "),Fl=n("a"),Bu=a("PreTrainedTokenizerFast"),Ku=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vu=m(),b(fn.$$.fragment),Ju=m(),Xo=n("div"),b(vs.$$.fragment),Gu=m(),Ld=n("p"),Xu=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Yu=m(),bs=n("ul"),vl=n("li"),Zu=a("single sequence: "),Id=n("code"),eg=a("[CLS] X [SEP]"),og=m(),bl=n("li"),tg=a("pair of sequences: "),Dd=n("code"),ng=a("[CLS] A [SEP] B [SEP]"),Vm=m(),pt=n("h2"),un=n("a"),Nd=n("span"),b(ys.$$.fragment),rg=m(),Sd=n("span"),sg=a("RoFormerModel"),Jm=m(),Xe=n("div"),b(Ts.$$.fragment),ag=m(),ws=n("p"),ig=a(`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=n("a"),lg=a("torch.nn.Module"),dg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cg=m(),xs=n("p"),pg=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=n("a"),mg=a(`Attention is
all you need`),hg=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=m(),Ue=n("p"),ug=a("To behave as an decoder the model needs to be initialized with the "),Od=n("code"),gg=a("is_decoder"),_g=a(` argument of the configuration set
to `),Wd=n("code"),kg=a("True"),Fg=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=n("code"),vg=a("is_decoder"),bg=a(` argument and
`),Qd=n("code"),yg=a("add_cross_attention"),Tg=a(" set to "),Hd=n("code"),wg=a("True"),$g=a("; an "),Bd=n("code"),xg=a("encoder_hidden_states"),Rg=a(" is then expected as an input to the forward pass."),Mg=m(),bo=n("div"),b(Ms.$$.fragment),Eg=m(),mt=n("p"),zg=a("The "),yl=n("a"),jg=a("RoFormerModel"),Cg=a(" forward method, overrides the "),Kd=n("code"),qg=a("__call__"),Pg=a(" special method."),Ag=m(),b(gn.$$.fragment),Lg=m(),b(_n.$$.fragment),Gm=m(),ht=n("h2"),kn=n("a"),Vd=n("span"),b(Es.$$.fragment),Ig=m(),Jd=n("span"),Dg=a("RoFormerForCausalLM"),Xm=m(),So=n("div"),b(zs.$$.fragment),Ng=m(),ft=n("p"),Sg=a("RoFormer Model with a "),Gd=n("code"),Og=a("language modeling"),Wg=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),js=n("a"),Ug=a("torch.nn.Module"),Qg=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hg=m(),yo=n("div"),b(Cs.$$.fragment),Bg=m(),ut=n("p"),Kg=a("The "),Tl=n("a"),Vg=a("RoFormerForCausalLM"),Jg=a(" forward method, overrides the "),Xd=n("code"),Gg=a("__call__"),Xg=a(" special method."),Yg=m(),b(Fn.$$.fragment),Zg=m(),b(vn.$$.fragment),Ym=m(),gt=n("h2"),bn=n("a"),Yd=n("span"),b(qs.$$.fragment),e_=m(),Zd=n("span"),o_=a("RoFormerForMaskedLM"),Zm=m(),Oo=n("div"),b(Ps.$$.fragment),t_=m(),_t=n("p"),n_=a("RoFormer Model with a "),ec=n("code"),r_=a("language modeling"),s_=a(` head on top.
This model is a PyTorch `),As=n("a"),a_=a("torch.nn.Module"),i_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),l_=m(),eo=n("div"),b(Ls.$$.fragment),d_=m(),kt=n("p"),c_=a("The "),wl=n("a"),p_=a("RoFormerForMaskedLM"),m_=a(" forward method, overrides the "),oc=n("code"),h_=a("__call__"),f_=a(" special method."),u_=m(),b(yn.$$.fragment),g_=m(),b(Tn.$$.fragment),__=m(),b(wn.$$.fragment),eh=m(),Ft=n("h2"),$n=n("a"),tc=n("span"),b(Is.$$.fragment),k_=m(),nc=n("span"),F_=a("RoFormerForSequenceClassification"),oh=m(),go=n("div"),b(Ds.$$.fragment),v_=m(),rc=n("p"),b_=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),y_=m(),Ns=n("p"),T_=a("This model is a PyTorch "),Ss=n("a"),w_=a("torch.nn.Module"),$_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=m(),Oe=n("div"),b(Os.$$.fragment),R_=m(),vt=n("p"),M_=a("The "),$l=n("a"),E_=a("RoFormerForSequenceClassification"),z_=a(" forward method, overrides the "),sc=n("code"),j_=a("__call__"),C_=a(" special method."),q_=m(),b(xn.$$.fragment),P_=m(),b(Rn.$$.fragment),A_=m(),b(Mn.$$.fragment),L_=m(),b(En.$$.fragment),I_=m(),b(zn.$$.fragment),th=m(),bt=n("h2"),jn=n("a"),ac=n("span"),b(Ws.$$.fragment),D_=m(),ic=n("span"),N_=a("RoFormerForMultipleChoice"),nh=m(),_o=n("div"),b(Us.$$.fragment),S_=m(),lc=n("p"),O_=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),Qs=n("p"),U_=a("This model is a PyTorch "),Hs=n("a"),Q_=a("torch.nn.Module"),H_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),B_=m(),To=n("div"),b(Bs.$$.fragment),K_=m(),yt=n("p"),V_=a("The "),xl=n("a"),J_=a("RoFormerForMultipleChoice"),G_=a(" forward method, overrides the "),dc=n("code"),X_=a("__call__"),Y_=a(" special method."),Z_=m(),b(Cn.$$.fragment),ek=m(),b(qn.$$.fragment),rh=m(),Tt=n("h2"),Pn=n("a"),cc=n("span"),b(Ks.$$.fragment),ok=m(),pc=n("span"),tk=a("RoFormerForTokenClassification"),sh=m(),ko=n("div"),b(Vs.$$.fragment),nk=m(),mc=n("p"),rk=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sk=m(),Js=n("p"),ak=a("This model is a PyTorch "),Gs=n("a"),ik=a("torch.nn.Module"),lk=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dk=m(),oo=n("div"),b(Xs.$$.fragment),ck=m(),wt=n("p"),pk=a("The "),Rl=n("a"),mk=a("RoFormerForTokenClassification"),hk=a(" forward method, overrides the "),hc=n("code"),fk=a("__call__"),uk=a(" special method."),gk=m(),b(An.$$.fragment),_k=m(),b(Ln.$$.fragment),kk=m(),b(In.$$.fragment),ah=m(),$t=n("h2"),Dn=n("a"),fc=n("span"),b(Ys.$$.fragment),Fk=m(),uc=n("span"),vk=a("RoFormerForQuestionAnswering"),ih=m(),Fo=n("div"),b(Zs.$$.fragment),bk=m(),xt=n("p"),yk=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=n("code"),Tk=a("span start logits"),wk=a(" and "),_c=n("code"),$k=a("span end logits"),xk=a(")."),Rk=m(),ea=n("p"),Mk=a("This model is a PyTorch "),oa=n("a"),Ek=a("torch.nn.Module"),zk=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jk=m(),to=n("div"),b(ta.$$.fragment),Ck=m(),Rt=n("p"),qk=a("The "),Ml=n("a"),Pk=a("RoFormerForQuestionAnswering"),Ak=a(" forward method, overrides the "),kc=n("code"),Lk=a("__call__"),Ik=a(" special method."),Dk=m(),b(Nn.$$.fragment),Nk=m(),b(Sn.$$.fragment),Sk=m(),b(On.$$.fragment),lh=m(),Mt=n("h2"),Wn=n("a"),Fc=n("span"),b(na.$$.fragment),Ok=m(),vc=n("span"),Wk=a("TFRoFormerModel"),dh=m(),Qe=n("div"),b(ra.$$.fragment),Uk=m(),bc=n("p"),Qk=a("The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),Hk=m(),sa=n("p"),Bk=a("This model inherits from "),El=n("a"),Kk=a("TFPreTrainedModel"),Vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=m(),aa=n("p"),Gk=a("This model is also a "),ia=n("a"),Xk=a("tf.keras.Model"),Yk=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zk=m(),b(Un.$$.fragment),eF=m(),wo=n("div"),b(la.$$.fragment),oF=m(),Et=n("p"),tF=a("The "),zl=n("a"),nF=a("TFRoFormerModel"),rF=a(" forward method, overrides the "),yc=n("code"),sF=a("__call__"),aF=a(" special method."),iF=m(),b(Qn.$$.fragment),lF=m(),b(Hn.$$.fragment),ch=m(),zt=n("h2"),Bn=n("a"),Tc=n("span"),b(da.$$.fragment),dF=m(),wc=n("span"),cF=a("TFRoFormerForMaskedLM"),ph=m(),He=n("div"),b(ca.$$.fragment),pF=m(),pa=n("p"),mF=a("RoFormer Model with a "),$c=n("code"),hF=a("language modeling"),fF=a(" head on top."),uF=m(),ma=n("p"),gF=a("This model inherits from "),jl=n("a"),_F=a("TFPreTrainedModel"),kF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),FF=m(),ha=n("p"),vF=a("This model is also a "),fa=n("a"),bF=a("tf.keras.Model"),yF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),TF=m(),b(Kn.$$.fragment),wF=m(),no=n("div"),b(ua.$$.fragment),$F=m(),jt=n("p"),xF=a("The "),Cl=n("a"),RF=a("TFRoFormerForMaskedLM"),MF=a(" forward method, overrides the "),xc=n("code"),EF=a("__call__"),zF=a(" special method."),jF=m(),b(Vn.$$.fragment),CF=m(),b(Jn.$$.fragment),qF=m(),b(Gn.$$.fragment),mh=m(),Ct=n("h2"),Xn=n("a"),Rc=n("span"),b(ga.$$.fragment),PF=m(),Mc=n("span"),AF=a("TFRoFormerForCausalLM"),hh=m(),Be=n("div"),b(_a.$$.fragment),LF=m(),ka=n("p"),IF=a("RoFormer Model with a "),Ec=n("code"),DF=a("language modeling"),NF=a(" head on top for CLM fine-tuning."),SF=m(),Fa=n("p"),OF=a("This model inherits from "),ql=n("a"),WF=a("TFPreTrainedModel"),UF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QF=m(),va=n("p"),HF=a("This model is also a "),ba=n("a"),BF=a("tf.keras.Model"),KF=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),VF=m(),b(Yn.$$.fragment),JF=m(),Yo=n("div"),b(ya.$$.fragment),GF=m(),Ye=n("p"),XF=a("labels ("),zc=n("code"),YF=a("tf.Tensor"),ZF=a(" or "),jc=n("code"),ev=a("np.ndarray"),ov=a(" of shape "),Cc=n("code"),tv=a("(batch_size, sequence_length)"),nv=a(", "),qc=n("em"),rv=a("optional"),sv=a(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=n("code"),av=a("[0, ..., config.vocab_size - 1]"),iv=a("."),lv=m(),b(Zn.$$.fragment),fh=m(),qt=n("h2"),er=n("a"),Ac=n("span"),b(Ta.$$.fragment),dv=m(),Lc=n("span"),cv=a("TFRoFormerForSequenceClassification"),uh=m(),Ke=n("div"),b(wa.$$.fragment),pv=m(),Ic=n("p"),mv=a("RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),hv=m(),$a=n("p"),fv=a("This model inherits from "),Pl=n("a"),uv=a("TFPreTrainedModel"),gv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_v=m(),xa=n("p"),kv=a("This model is also a "),Ra=n("a"),Fv=a("tf.keras.Model"),vv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bv=m(),b(or.$$.fragment),yv=m(),ro=n("div"),b(Ma.$$.fragment),Tv=m(),Pt=n("p"),wv=a("The "),Al=n("a"),$v=a("TFRoFormerForSequenceClassification"),xv=a(" forward method, overrides the "),Dc=n("code"),Rv=a("__call__"),Mv=a(" special method."),Ev=m(),b(tr.$$.fragment),zv=m(),b(nr.$$.fragment),jv=m(),b(rr.$$.fragment),gh=m(),At=n("h2"),sr=n("a"),Nc=n("span"),b(Ea.$$.fragment),Cv=m(),Sc=n("span"),qv=a("TFRoFormerForMultipleChoice"),_h=m(),Ve=n("div"),b(za.$$.fragment),Pv=m(),Oc=n("p"),Av=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Lv=m(),ja=n("p"),Iv=a("This model inherits from "),Ll=n("a"),Dv=a("TFPreTrainedModel"),Nv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sv=m(),Ca=n("p"),Ov=a("This model is also a "),qa=n("a"),Wv=a("tf.keras.Model"),Uv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qv=m(),b(ar.$$.fragment),Hv=m(),$o=n("div"),b(Pa.$$.fragment),Bv=m(),Lt=n("p"),Kv=a("The "),Il=n("a"),Vv=a("TFRoFormerForMultipleChoice"),Jv=a(" forward method, overrides the "),Wc=n("code"),Gv=a("__call__"),Xv=a(" special method."),Yv=m(),b(ir.$$.fragment),Zv=m(),b(lr.$$.fragment),kh=m(),It=n("h2"),dr=n("a"),Uc=n("span"),b(Aa.$$.fragment),eb=m(),Qc=n("span"),ob=a("TFRoFormerForTokenClassification"),Fh=m(),Je=n("div"),b(La.$$.fragment),tb=m(),Hc=n("p"),nb=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rb=m(),Ia=n("p"),sb=a("This model inherits from "),Dl=n("a"),ab=a("TFPreTrainedModel"),ib=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=m(),Da=n("p"),db=a("This model is also a "),Na=n("a"),cb=a("tf.keras.Model"),pb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mb=m(),b(cr.$$.fragment),hb=m(),so=n("div"),b(Sa.$$.fragment),fb=m(),Dt=n("p"),ub=a("The "),Nl=n("a"),gb=a("TFRoFormerForTokenClassification"),_b=a(" forward method, overrides the "),Bc=n("code"),kb=a("__call__"),Fb=a(" special method."),vb=m(),b(pr.$$.fragment),bb=m(),b(mr.$$.fragment),yb=m(),b(hr.$$.fragment),vh=m(),Nt=n("h2"),fr=n("a"),Kc=n("span"),b(Oa.$$.fragment),Tb=m(),Vc=n("span"),wb=a("TFRoFormerForQuestionAnswering"),bh=m(),Ge=n("div"),b(Wa.$$.fragment),$b=m(),St=n("p"),xb=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Jc=n("code"),Rb=a("span start logits"),Mb=a(" and "),Gc=n("code"),Eb=a("span end logits"),zb=a(")."),jb=m(),Ua=n("p"),Cb=a("This model inherits from "),Sl=n("a"),qb=a("TFPreTrainedModel"),Pb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ab=m(),Qa=n("p"),Lb=a("This model is also a "),Ha=n("a"),Ib=a("tf.keras.Model"),Db=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nb=m(),b(ur.$$.fragment),Sb=m(),ao=n("div"),b(Ba.$$.fragment),Ob=m(),Ot=n("p"),Wb=a("The "),Ol=n("a"),Ub=a("TFRoFormerForQuestionAnswering"),Qb=a(" forward method, overrides the "),Xc=n("code"),Hb=a("__call__"),Bb=a(" special method."),Kb=m(),b(gr.$$.fragment),Vb=m(),b(_r.$$.fragment),Jb=m(),b(kr.$$.fragment),yh=m(),Wt=n("h2"),Fr=n("a"),Yc=n("span"),b(Ka.$$.fragment),Gb=m(),Zc=n("span"),Xb=a("FlaxRoFormerModel"),Th=m(),Pe=n("div"),b(Va.$$.fragment),Yb=m(),ep=n("p"),Zb=a("The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),ey=m(),Ja=n("p"),oy=a("This model inherits from "),Wl=n("a"),ty=a("FlaxPreTrainedModel"),ny=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ry=m(),Ga=n("p"),sy=a("This model is also a Flax Linen "),Xa=n("a"),ay=a("flax.linen.Module"),iy=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ly=m(),op=n("p"),dy=a("Finally, this model supports inherent JAX features such as:"),cy=m(),Wo=n("ul"),tp=n("li"),Ya=n("a"),py=a("Just-In-Time (JIT) compilation"),my=m(),np=n("li"),Za=n("a"),hy=a("Automatic Differentiation"),fy=m(),rp=n("li"),ei=n("a"),uy=a("Vectorization"),gy=m(),sp=n("li"),oi=n("a"),_y=a("Parallelization"),ky=m(),xo=n("div"),b(ti.$$.fragment),Fy=m(),Ut=n("p"),vy=a("The "),ap=n("code"),by=a("FlaxRoFormerPreTrainedModel"),yy=a(" forward method, overrides the "),ip=n("code"),Ty=a("__call__"),wy=a(" special method."),$y=m(),b(vr.$$.fragment),xy=m(),b(br.$$.fragment),wh=m(),Qt=n("h2"),yr=n("a"),lp=n("span"),b(ni.$$.fragment),Ry=m(),dp=n("span"),My=a("FlaxRoFormerForMaskedLM"),$h=m(),Ae=n("div"),b(ri.$$.fragment),Ey=m(),si=n("p"),zy=a("RoFormer Model with a "),cp=n("code"),jy=a("language modeling"),Cy=a(" head on top."),qy=m(),ai=n("p"),Py=a("This model inherits from "),Ul=n("a"),Ay=a("FlaxPreTrainedModel"),Ly=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Iy=m(),ii=n("p"),Dy=a("This model is also a Flax Linen "),li=n("a"),Ny=a("flax.linen.Module"),Sy=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Oy=m(),pp=n("p"),Wy=a("Finally, this model supports inherent JAX features such as:"),Uy=m(),Uo=n("ul"),mp=n("li"),di=n("a"),Qy=a("Just-In-Time (JIT) compilation"),Hy=m(),hp=n("li"),ci=n("a"),By=a("Automatic Differentiation"),Ky=m(),fp=n("li"),pi=n("a"),Vy=a("Vectorization"),Jy=m(),up=n("li"),mi=n("a"),Gy=a("Parallelization"),Xy=m(),Ro=n("div"),b(hi.$$.fragment),Yy=m(),Ht=n("p"),Zy=a("The "),gp=n("code"),eT=a("FlaxRoFormerPreTrainedModel"),oT=a(" forward method, overrides the "),_p=n("code"),tT=a("__call__"),nT=a(" special method."),rT=m(),b(Tr.$$.fragment),sT=m(),b(wr.$$.fragment),xh=m(),Bt=n("h2"),$r=n("a"),kp=n("span"),b(fi.$$.fragment),aT=m(),Fp=n("span"),iT=a("FlaxRoFormerForSequenceClassification"),Rh=m(),Le=n("div"),b(ui.$$.fragment),lT=m(),vp=n("p"),dT=a(`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cT=m(),gi=n("p"),pT=a("This model inherits from "),Ql=n("a"),mT=a("FlaxPreTrainedModel"),hT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fT=m(),_i=n("p"),uT=a("This model is also a Flax Linen "),ki=n("a"),gT=a("flax.linen.Module"),_T=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kT=m(),bp=n("p"),FT=a("Finally, this model supports inherent JAX features such as:"),vT=m(),Qo=n("ul"),yp=n("li"),Fi=n("a"),bT=a("Just-In-Time (JIT) compilation"),yT=m(),Tp=n("li"),vi=n("a"),TT=a("Automatic Differentiation"),wT=m(),wp=n("li"),bi=n("a"),$T=a("Vectorization"),xT=m(),$p=n("li"),yi=n("a"),RT=a("Parallelization"),MT=m(),Mo=n("div"),b(Ti.$$.fragment),ET=m(),Kt=n("p"),zT=a("The "),xp=n("code"),jT=a("FlaxRoFormerPreTrainedModel"),CT=a(" forward method, overrides the "),Rp=n("code"),qT=a("__call__"),PT=a(" special method."),AT=m(),b(xr.$$.fragment),LT=m(),b(Rr.$$.fragment),Mh=m(),Vt=n("h2"),Mr=n("a"),Mp=n("span"),b(wi.$$.fragment),IT=m(),Ep=n("span"),DT=a("FlaxRoFormerForMultipleChoice"),Eh=m(),Ie=n("div"),b($i.$$.fragment),NT=m(),zp=n("p"),ST=a(`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),OT=m(),xi=n("p"),WT=a("This model inherits from "),Hl=n("a"),UT=a("FlaxPreTrainedModel"),QT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),HT=m(),Ri=n("p"),BT=a("This model is also a Flax Linen "),Mi=n("a"),KT=a("flax.linen.Module"),VT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),JT=m(),jp=n("p"),GT=a("Finally, this model supports inherent JAX features such as:"),XT=m(),Ho=n("ul"),Cp=n("li"),Ei=n("a"),YT=a("Just-In-Time (JIT) compilation"),ZT=m(),qp=n("li"),zi=n("a"),ew=a("Automatic Differentiation"),ow=m(),Pp=n("li"),ji=n("a"),tw=a("Vectorization"),nw=m(),Ap=n("li"),Ci=n("a"),rw=a("Parallelization"),sw=m(),Eo=n("div"),b(qi.$$.fragment),aw=m(),Jt=n("p"),iw=a("The "),Lp=n("code"),lw=a("FlaxRoFormerPreTrainedModel"),dw=a(" forward method, overrides the "),Ip=n("code"),cw=a("__call__"),pw=a(" special method."),mw=m(),b(Er.$$.fragment),hw=m(),b(zr.$$.fragment),zh=m(),Gt=n("h2"),jr=n("a"),Dp=n("span"),b(Pi.$$.fragment),fw=m(),Np=n("span"),uw=a("FlaxRoFormerForTokenClassification"),jh=m(),De=n("div"),b(Ai.$$.fragment),gw=m(),Sp=n("p"),_w=a(`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kw=m(),Li=n("p"),Fw=a("This model inherits from "),Bl=n("a"),vw=a("FlaxPreTrainedModel"),bw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yw=m(),Ii=n("p"),Tw=a("This model is also a Flax Linen "),Di=n("a"),ww=a("flax.linen.Module"),$w=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xw=m(),Op=n("p"),Rw=a("Finally, this model supports inherent JAX features such as:"),Mw=m(),Bo=n("ul"),Wp=n("li"),Ni=n("a"),Ew=a("Just-In-Time (JIT) compilation"),zw=m(),Up=n("li"),Si=n("a"),jw=a("Automatic Differentiation"),Cw=m(),Qp=n("li"),Oi=n("a"),qw=a("Vectorization"),Pw=m(),Hp=n("li"),Wi=n("a"),Aw=a("Parallelization"),Lw=m(),zo=n("div"),b(Ui.$$.fragment),Iw=m(),Xt=n("p"),Dw=a("The "),Bp=n("code"),Nw=a("FlaxRoFormerPreTrainedModel"),Sw=a(" forward method, overrides the "),Kp=n("code"),Ow=a("__call__"),Ww=a(" special method."),Uw=m(),b(Cr.$$.fragment),Qw=m(),b(qr.$$.fragment),Ch=m(),Yt=n("h2"),Pr=n("a"),Vp=n("span"),b(Qi.$$.fragment),Hw=m(),Jp=n("span"),Bw=a("FlaxRoFormerForQuestionAnswering"),qh=m(),Ne=n("div"),b(Hi.$$.fragment),Kw=m(),Zt=n("p"),Vw=a(`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=n("code"),Jw=a("span start logits"),Gw=a(" and "),Xp=n("code"),Xw=a("span end logits"),Yw=a(")."),Zw=m(),Bi=n("p"),e1=a("This model inherits from "),Kl=n("a"),o1=a("FlaxPreTrainedModel"),t1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),n1=m(),Ki=n("p"),r1=a("This model is also a Flax Linen "),Vi=n("a"),s1=a("flax.linen.Module"),a1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),i1=m(),Yp=n("p"),l1=a("Finally, this model supports inherent JAX features such as:"),d1=m(),Ko=n("ul"),Zp=n("li"),Ji=n("a"),c1=a("Just-In-Time (JIT) compilation"),p1=m(),em=n("li"),Gi=n("a"),m1=a("Automatic Differentiation"),h1=m(),om=n("li"),Xi=n("a"),f1=a("Vectorization"),u1=m(),tm=n("li"),Yi=n("a"),g1=a("Parallelization"),_1=m(),jo=n("div"),b(Zi.$$.fragment),k1=m(),en=n("p"),F1=a("The "),nm=n("code"),v1=a("FlaxRoFormerPreTrainedModel"),b1=a(" forward method, overrides the "),rm=n("code"),y1=a("__call__"),T1=a(" special method."),w1=m(),b(Ar.$$.fragment),$1=m(),b(Lr.$$.fragment),this.h()},l(t){const F=Ox('[data-svelte="svelte-1phssyn"]',document.head);d=r(F,"META",{name:!0,content:!0}),F.forEach(o),g=h(t),c=r(t,"H1",{class:!0});var el=s(c);p=r(el,"A",{id:!0,class:!0,href:!0});var sm=s(p);_=r(sm,"SPAN",{});var am=s(_);y(l.$$.fragment,am),am.forEach(o),sm.forEach(o),f=h(el),M=r(el,"SPAN",{});var im=s(M);ue=i(im,"RoFormer"),im.forEach(o),el.forEach(o),J=h(t),z=r(t,"H2",{class:!0});var ol=s(z);Z=r(ol,"A",{id:!0,class:!0,href:!0});var lm=s(Z);S=r(lm,"SPAN",{});var dm=s(S);y(ee.$$.fragment,dm),dm.forEach(o),lm.forEach(o),ge=h(ol),O=r(ol,"SPAN",{});var cm=s(O);_e=i(cm,"Overview"),cm.forEach(o),ol.forEach(o),pe=h(t),V=r(t,"P",{});var tl=s(V);L=i(tl,"The RoFormer model was proposed in "),oe=r(tl,"A",{href:!0,rel:!0});var pm=s(oe);G=i(pm,"RoFormer: Enhanced Transformer with Rotary Position Embedding"),pm.forEach(o),j=i(tl," by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu."),tl.forEach(o),q=h(t),ne=r(t,"P",{});var mm=s(ne);Q=i(mm,"The abstract from the paper is the following:"),mm.forEach(o),me=h(t),re=r(t,"P",{});var hm=s(re);W=r(hm,"EM",{});var fm=s(W);ke=i(fm,`Position encoding in transformer architecture provides supervision for dependency modeling between elements at
different positions in the sequence. We investigate various methods to encode positional information in
transformer-based language models and propose a novel implementation named Rotary Position Embedding(RoPE). The
proposed RoPE encodes absolute positional information with rotation matrix and naturally incorporates explicit relative
position dependency in self-attention formulation. Notably, RoPE comes with valuable properties such as flexibility of
being expand to any sequence lengths, decaying inter-token dependency with increasing relative distances, and
capability of equipping the linear self-attention with relative position encoding. As a result, the enhanced
transformer with rotary position embedding, or RoFormer, achieves superior performance in tasks with long texts. We
release the theoretical analysis along with some preliminary experiment results on Chinese data. The undergoing
experiment for English benchmark will soon be updated.`),fm.forEach(o),hm.forEach(o),he=h(t),C=r(t,"P",{});var um=s(C);Fe=i(um,"Tips:"),um.forEach(o),U=h(t),se=r(t,"UL",{});var gm=s(se);ce=r(gm,"LI",{});var _m=s(ce);H=i(_m,`RoFormer is a BERT-like autoencoding model with rotary position embeddings. Rotary position embeddings have shown
improved performance on classification tasks with long texts.`),_m.forEach(o),gm.forEach(o),fe=h(t),X=r(t,"P",{});var on=s(X);I=i(on,"This model was contributed by "),te=r(on,"A",{href:!0,rel:!0});var km=s(te);B=i(km,"junnyu"),km.forEach(o),ve=i(on,". The original code can be found "),v=r(on,"A",{href:!0,rel:!0});var Fm=s(v);E=i(Fm,"here"),Fm.forEach(o),Y=i(on,"."),on.forEach(o),Me=h(t),ye=r(t,"H2",{class:!0});var nl=s(ye);P=r(nl,"A",{id:!0,class:!0,href:!0});var vm=s(P);xe=r(vm,"SPAN",{});var bm=s(xe);y(we.$$.fragment,bm),bm.forEach(o),vm.forEach(o),je=h(nl),A=r(nl,"SPAN",{});var ym=s(A);K=i(ym,"RoFormerConfig"),ym.forEach(o),nl.forEach(o),Ee=h(t),ae=r(t,"DIV",{class:!0});var Vo=s(ae);y(D.$$.fragment,Vo),Ce=h(Vo),Te=r(Vo,"P",{});var tn=s(Te);be=i(tn,"This is the configuration class to store the configuration of a "),$e=r(tn,"A",{href:!0});var Tm=s($e);Sf=i(Tm,"RoFormerModel"),Tm.forEach(o),Of=i(tn,`. It is used to instantiate an
RoFormer model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoFormer
`),rs=r(tn,"A",{href:!0,rel:!0});var wm=s(rs);Wf=i(wm,"junnyu/roformer_chinese_base"),wm.forEach(o),Uf=i(tn," architecture."),tn.forEach(o),Qf=h(Vo),it=r(Vo,"P",{});var nn=s(it);Hf=i(nn,"Configuration objects inherit from "),pl=r(nn,"A",{href:!0});var $m=s(pl);Bf=i($m,"PretrainedConfig"),$m.forEach(o),Kf=i(nn,` and can be used to control the model outputs. Read the
documentation from `),ml=r(nn,"A",{href:!0});var xm=s(ml);Vf=i(xm,"PretrainedConfig"),xm.forEach(o),Jf=i(nn," for more information."),nn.forEach(o),Gf=h(Vo),y(an.$$.fragment,Vo),Vo.forEach(o),Qm=h(t),lt=r(t,"H2",{class:!0});var rl=s(lt);ln=r(rl,"A",{id:!0,class:!0,href:!0});var Rm=s(ln);wd=r(Rm,"SPAN",{});var Mm=s(wd);y(ss.$$.fragment,Mm),Mm.forEach(o),Rm.forEach(o),Xf=h(rl),$d=r(rl,"SPAN",{});var Em=s($d);Yf=i(Em,"RoFormerTokenizer"),Em.forEach(o),rl.forEach(o),Hm=h(t),qe=r(t,"DIV",{class:!0});var Se=s(qe);y(as.$$.fragment,Se),Zf=h(Se),is=r(Se,"P",{});var sl=s(is);eu=i(sl,"Construct a RoFormer tokenizer. Based on "),ls=r(sl,"A",{href:!0,rel:!0});var zm=s(ls);ou=i(zm,"Rust Jieba"),zm.forEach(o),tu=i(sl,"."),sl.forEach(o),nu=h(Se),ds=r(Se,"P",{});var al=s(ds);ru=i(al,"This tokenizer inherits from "),hl=r(al,"A",{href:!0});var jm=s(hl);su=i(jm,"PreTrainedTokenizer"),jm.forEach(o),au=i(al,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),al.forEach(o),iu=h(Se),y(dn.$$.fragment,Se),lu=h(Se),Go=r(Se,"DIV",{class:!0});var rn=s(Go);y(cs.$$.fragment,rn),du=h(rn),xd=r(rn,"P",{});var Cm=s(xd);cu=i(Cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),Cm.forEach(o),pu=h(rn),ps=r(rn,"UL",{});var il=s(ps);fl=r(il,"LI",{});var Vl=s(fl);mu=i(Vl,"single sequence: "),Rd=r(Vl,"CODE",{});var qm=s(Rd);hu=i(qm,"[CLS] X [SEP]"),qm.forEach(o),Vl.forEach(o),fu=h(il),ul=r(il,"LI",{});var Jl=s(ul);uu=i(Jl,"pair of sequences: "),Md=r(Jl,"CODE",{});var Pm=s(Md);gu=i(Pm,"[CLS] A [SEP] B [SEP]"),Pm.forEach(o),Jl.forEach(o),il.forEach(o),rn.forEach(o),_u=h(Se),cn=r(Se,"DIV",{class:!0});var ll=s(cn);y(ms.$$.fragment,ll),ku=h(ll),hs=r(ll,"P",{});var dl=s(hs);Fu=i(dl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ed=r(dl,"CODE",{});var Am=s(Ed);vu=i(Am,"prepare_for_model"),Am.forEach(o),bu=i(dl," method."),dl.forEach(o),ll.forEach(o),yu=h(Se),vo=r(Se,"DIV",{class:!0});var Jo=s(vo);y(fs.$$.fragment,Jo),Tu=h(Jo),zd=r(Jo,"P",{});var Lm=s(zd);wu=i(Lm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RoFormer"),Lm.forEach(o),$u=h(Jo),y(pn.$$.fragment,Jo),xu=h(Jo),dt=r(Jo,"P",{});var sn=s(dt);Ru=i(sn,"If "),jd=r(sn,"CODE",{});var Im=s(jd);Mu=i(Im,"token_ids_1"),Im.forEach(o),Eu=i(sn," is "),Cd=r(sn,"CODE",{});var Dm=s(Cd);zu=i(Dm,"None"),Dm.forEach(o),ju=i(sn,", this method only returns the first portion of the mask (0s)."),sn.forEach(o),Jo.forEach(o),Cu=h(Se),gl=r(Se,"DIV",{class:!0});var Nm=s(gl);y(us.$$.fragment,Nm),Nm.forEach(o),Se.forEach(o),Bm=h(t),ct=r(t,"H2",{class:!0});var cl=s(ct);mn=r(cl,"A",{id:!0,class:!0,href:!0});var Sm=s(mn);qd=r(Sm,"SPAN",{});var Om=s(qd);y(gs.$$.fragment,Om),Om.forEach(o),Sm.forEach(o),qu=h(cl),Pd=r(cl,"SPAN",{});var Wm=s(Pd);Pu=i(Wm,"RoFormerTokenizerFast"),Wm.forEach(o),cl.forEach(o),Km=h(t),We=r(t,"DIV",{class:!0});var Ze=s(We);y(_s.$$.fragment,Ze),Au=h(Ze),ks=r(Ze,"P",{});var Ah=s(ks);Lu=i(Ah,"Construct a \u201Cfast\u201D RoFormer tokenizer (backed by HuggingFace\u2019s "),Ad=r(Ah,"EM",{});var M1=s(Ad);Iu=i(M1,"tokenizers"),M1.forEach(o),Du=i(Ah," library)."),Ah.forEach(o),Nu=h(Ze),hn=r(Ze,"P",{});var Um=s(hn);_l=r(Um,"A",{href:!0});var E1=s(_l);Su=i(E1,"RoFormerTokenizerFast"),E1.forEach(o),Ou=i(Um," is almost identical to "),kl=r(Um,"A",{href:!0});var z1=s(kl);Wu=i(z1,"BertTokenizerFast"),z1.forEach(o),Uu=i(Um,` and runs end-to-end tokenization:
punctuation splitting and wordpiece. There are some difference between them when tokenizing Chinese.`),Um.forEach(o),Qu=h(Ze),Fs=r(Ze,"P",{});var Lh=s(Fs);Hu=i(Lh,"This tokenizer inherits from "),Fl=r(Lh,"A",{href:!0});var j1=s(Fl);Bu=i(j1,"PreTrainedTokenizerFast"),j1.forEach(o),Ku=i(Lh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Lh.forEach(o),Vu=h(Ze),y(fn.$$.fragment,Ze),Ju=h(Ze),Xo=r(Ze,"DIV",{class:!0});var Gl=s(Xo);y(vs.$$.fragment,Gl),Gu=h(Gl),Ld=r(Gl,"P",{});var C1=s(Ld);Xu=i(C1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoFormer sequence has the following format:`),C1.forEach(o),Yu=h(Gl),bs=r(Gl,"UL",{});var Ih=s(bs);vl=r(Ih,"LI",{});var x1=s(vl);Zu=i(x1,"single sequence: "),Id=r(x1,"CODE",{});var q1=s(Id);eg=i(q1,"[CLS] X [SEP]"),q1.forEach(o),x1.forEach(o),og=h(Ih),bl=r(Ih,"LI",{});var R1=s(bl);tg=i(R1,"pair of sequences: "),Dd=r(R1,"CODE",{});var P1=s(Dd);ng=i(P1,"[CLS] A [SEP] B [SEP]"),P1.forEach(o),R1.forEach(o),Ih.forEach(o),Gl.forEach(o),Ze.forEach(o),Vm=h(t),pt=r(t,"H2",{class:!0});var Dh=s(pt);un=r(Dh,"A",{id:!0,class:!0,href:!0});var A1=s(un);Nd=r(A1,"SPAN",{});var L1=s(Nd);y(ys.$$.fragment,L1),L1.forEach(o),A1.forEach(o),rg=h(Dh),Sd=r(Dh,"SPAN",{});var I1=s(Sd);sg=i(I1,"RoFormerModel"),I1.forEach(o),Dh.forEach(o),Jm=h(t),Xe=r(t,"DIV",{class:!0});var Zo=s(Xe);y(Ts.$$.fragment,Zo),ag=h(Zo),ws=r(Zo,"P",{});var Nh=s(ws);ig=i(Nh,`The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),$s=r(Nh,"A",{href:!0,rel:!0});var D1=s($s);lg=i(D1,"torch.nn.Module"),D1.forEach(o),dg=i(Nh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nh.forEach(o),cg=h(Zo),xs=r(Zo,"P",{});var Sh=s(xs);pg=i(Sh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Rs=r(Sh,"A",{href:!0,rel:!0});var N1=s(Rs);mg=i(N1,`Attention is
all you need`),N1.forEach(o),hg=i(Sh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Sh.forEach(o),fg=h(Zo),Ue=r(Zo,"P",{});var io=s(Ue);ug=i(io,"To behave as an decoder the model needs to be initialized with the "),Od=r(io,"CODE",{});var S1=s(Od);gg=i(S1,"is_decoder"),S1.forEach(o),_g=i(io,` argument of the configuration set
to `),Wd=r(io,"CODE",{});var O1=s(Wd);kg=i(O1,"True"),O1.forEach(o),Fg=i(io,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ud=r(io,"CODE",{});var W1=s(Ud);vg=i(W1,"is_decoder"),W1.forEach(o),bg=i(io,` argument and
`),Qd=r(io,"CODE",{});var U1=s(Qd);yg=i(U1,"add_cross_attention"),U1.forEach(o),Tg=i(io," set to "),Hd=r(io,"CODE",{});var Q1=s(Hd);wg=i(Q1,"True"),Q1.forEach(o),$g=i(io,"; an "),Bd=r(io,"CODE",{});var H1=s(Bd);xg=i(H1,"encoder_hidden_states"),H1.forEach(o),Rg=i(io," is then expected as an input to the forward pass."),io.forEach(o),Mg=h(Zo),bo=r(Zo,"DIV",{class:!0});var Ir=s(bo);y(Ms.$$.fragment,Ir),Eg=h(Ir),mt=r(Ir,"P",{});var Xl=s(mt);zg=i(Xl,"The "),yl=r(Xl,"A",{href:!0});var B1=s(yl);jg=i(B1,"RoFormerModel"),B1.forEach(o),Cg=i(Xl," forward method, overrides the "),Kd=r(Xl,"CODE",{});var K1=s(Kd);qg=i(K1,"__call__"),K1.forEach(o),Pg=i(Xl," special method."),Xl.forEach(o),Ag=h(Ir),y(gn.$$.fragment,Ir),Lg=h(Ir),y(_n.$$.fragment,Ir),Ir.forEach(o),Zo.forEach(o),Gm=h(t),ht=r(t,"H2",{class:!0});var Oh=s(ht);kn=r(Oh,"A",{id:!0,class:!0,href:!0});var V1=s(kn);Vd=r(V1,"SPAN",{});var J1=s(Vd);y(Es.$$.fragment,J1),J1.forEach(o),V1.forEach(o),Ig=h(Oh),Jd=r(Oh,"SPAN",{});var G1=s(Jd);Dg=i(G1,"RoFormerForCausalLM"),G1.forEach(o),Oh.forEach(o),Xm=h(t),So=r(t,"DIV",{class:!0});var Yl=s(So);y(zs.$$.fragment,Yl),Ng=h(Yl),ft=r(Yl,"P",{});var Zl=s(ft);Sg=i(Zl,"RoFormer Model with a "),Gd=r(Zl,"CODE",{});var X1=s(Gd);Og=i(X1,"language modeling"),X1.forEach(o),Wg=i(Zl,` head on top for CLM fine-tuning.
This model is a PyTorch `),js=r(Zl,"A",{href:!0,rel:!0});var Y1=s(js);Ug=i(Y1,"torch.nn.Module"),Y1.forEach(o),Qg=i(Zl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zl.forEach(o),Hg=h(Yl),yo=r(Yl,"DIV",{class:!0});var Dr=s(yo);y(Cs.$$.fragment,Dr),Bg=h(Dr),ut=r(Dr,"P",{});var ed=s(ut);Kg=i(ed,"The "),Tl=r(ed,"A",{href:!0});var Z1=s(Tl);Vg=i(Z1,"RoFormerForCausalLM"),Z1.forEach(o),Jg=i(ed," forward method, overrides the "),Xd=r(ed,"CODE",{});var e$=s(Xd);Gg=i(e$,"__call__"),e$.forEach(o),Xg=i(ed," special method."),ed.forEach(o),Yg=h(Dr),y(Fn.$$.fragment,Dr),Zg=h(Dr),y(vn.$$.fragment,Dr),Dr.forEach(o),Yl.forEach(o),Ym=h(t),gt=r(t,"H2",{class:!0});var Wh=s(gt);bn=r(Wh,"A",{id:!0,class:!0,href:!0});var o$=s(bn);Yd=r(o$,"SPAN",{});var t$=s(Yd);y(qs.$$.fragment,t$),t$.forEach(o),o$.forEach(o),e_=h(Wh),Zd=r(Wh,"SPAN",{});var n$=s(Zd);o_=i(n$,"RoFormerForMaskedLM"),n$.forEach(o),Wh.forEach(o),Zm=h(t),Oo=r(t,"DIV",{class:!0});var od=s(Oo);y(Ps.$$.fragment,od),t_=h(od),_t=r(od,"P",{});var td=s(_t);n_=i(td,"RoFormer Model with a "),ec=r(td,"CODE",{});var r$=s(ec);r_=i(r$,"language modeling"),r$.forEach(o),s_=i(td,` head on top.
This model is a PyTorch `),As=r(td,"A",{href:!0,rel:!0});var s$=s(As);a_=i(s$,"torch.nn.Module"),s$.forEach(o),i_=i(td,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),td.forEach(o),l_=h(od),eo=r(od,"DIV",{class:!0});var et=s(eo);y(Ls.$$.fragment,et),d_=h(et),kt=r(et,"P",{});var nd=s(kt);c_=i(nd,"The "),wl=r(nd,"A",{href:!0});var a$=s(wl);p_=i(a$,"RoFormerForMaskedLM"),a$.forEach(o),m_=i(nd," forward method, overrides the "),oc=r(nd,"CODE",{});var i$=s(oc);h_=i(i$,"__call__"),i$.forEach(o),f_=i(nd," special method."),nd.forEach(o),u_=h(et),y(yn.$$.fragment,et),g_=h(et),y(Tn.$$.fragment,et),__=h(et),y(wn.$$.fragment,et),et.forEach(o),od.forEach(o),eh=h(t),Ft=r(t,"H2",{class:!0});var Uh=s(Ft);$n=r(Uh,"A",{id:!0,class:!0,href:!0});var l$=s($n);tc=r(l$,"SPAN",{});var d$=s(tc);y(Is.$$.fragment,d$),d$.forEach(o),l$.forEach(o),k_=h(Uh),nc=r(Uh,"SPAN",{});var c$=s(nc);F_=i(c$,"RoFormerForSequenceClassification"),c$.forEach(o),Uh.forEach(o),oh=h(t),go=r(t,"DIV",{class:!0});var Nr=s(go);y(Ds.$$.fragment,Nr),v_=h(Nr),rc=r(Nr,"P",{});var p$=s(rc);b_=i(p$,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p$.forEach(o),y_=h(Nr),Ns=r(Nr,"P",{});var Qh=s(Ns);T_=i(Qh,"This model is a PyTorch "),Ss=r(Qh,"A",{href:!0,rel:!0});var m$=s(Ss);w_=i(m$,"torch.nn.Module"),m$.forEach(o),$_=i(Qh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qh.forEach(o),x_=h(Nr),Oe=r(Nr,"DIV",{class:!0});var lo=s(Oe);y(Os.$$.fragment,lo),R_=h(lo),vt=r(lo,"P",{});var rd=s(vt);M_=i(rd,"The "),$l=r(rd,"A",{href:!0});var h$=s($l);E_=i(h$,"RoFormerForSequenceClassification"),h$.forEach(o),z_=i(rd," forward method, overrides the "),sc=r(rd,"CODE",{});var f$=s(sc);j_=i(f$,"__call__"),f$.forEach(o),C_=i(rd," special method."),rd.forEach(o),q_=h(lo),y(xn.$$.fragment,lo),P_=h(lo),y(Rn.$$.fragment,lo),A_=h(lo),y(Mn.$$.fragment,lo),L_=h(lo),y(En.$$.fragment,lo),I_=h(lo),y(zn.$$.fragment,lo),lo.forEach(o),Nr.forEach(o),th=h(t),bt=r(t,"H2",{class:!0});var Hh=s(bt);jn=r(Hh,"A",{id:!0,class:!0,href:!0});var u$=s(jn);ac=r(u$,"SPAN",{});var g$=s(ac);y(Ws.$$.fragment,g$),g$.forEach(o),u$.forEach(o),D_=h(Hh),ic=r(Hh,"SPAN",{});var _$=s(ic);N_=i(_$,"RoFormerForMultipleChoice"),_$.forEach(o),Hh.forEach(o),nh=h(t),_o=r(t,"DIV",{class:!0});var Sr=s(_o);y(Us.$$.fragment,Sr),S_=h(Sr),lc=r(Sr,"P",{});var k$=s(lc);O_=i(k$,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),k$.forEach(o),W_=h(Sr),Qs=r(Sr,"P",{});var Bh=s(Qs);U_=i(Bh,"This model is a PyTorch "),Hs=r(Bh,"A",{href:!0,rel:!0});var F$=s(Hs);Q_=i(F$,"torch.nn.Module"),F$.forEach(o),H_=i(Bh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bh.forEach(o),B_=h(Sr),To=r(Sr,"DIV",{class:!0});var Or=s(To);y(Bs.$$.fragment,Or),K_=h(Or),yt=r(Or,"P",{});var sd=s(yt);V_=i(sd,"The "),xl=r(sd,"A",{href:!0});var v$=s(xl);J_=i(v$,"RoFormerForMultipleChoice"),v$.forEach(o),G_=i(sd," forward method, overrides the "),dc=r(sd,"CODE",{});var b$=s(dc);X_=i(b$,"__call__"),b$.forEach(o),Y_=i(sd," special method."),sd.forEach(o),Z_=h(Or),y(Cn.$$.fragment,Or),ek=h(Or),y(qn.$$.fragment,Or),Or.forEach(o),Sr.forEach(o),rh=h(t),Tt=r(t,"H2",{class:!0});var Kh=s(Tt);Pn=r(Kh,"A",{id:!0,class:!0,href:!0});var y$=s(Pn);cc=r(y$,"SPAN",{});var T$=s(cc);y(Ks.$$.fragment,T$),T$.forEach(o),y$.forEach(o),ok=h(Kh),pc=r(Kh,"SPAN",{});var w$=s(pc);tk=i(w$,"RoFormerForTokenClassification"),w$.forEach(o),Kh.forEach(o),sh=h(t),ko=r(t,"DIV",{class:!0});var Wr=s(ko);y(Vs.$$.fragment,Wr),nk=h(Wr),mc=r(Wr,"P",{});var $$=s(mc);rk=i($$,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$$.forEach(o),sk=h(Wr),Js=r(Wr,"P",{});var Vh=s(Js);ak=i(Vh,"This model is a PyTorch "),Gs=r(Vh,"A",{href:!0,rel:!0});var x$=s(Gs);ik=i(x$,"torch.nn.Module"),x$.forEach(o),lk=i(Vh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vh.forEach(o),dk=h(Wr),oo=r(Wr,"DIV",{class:!0});var ot=s(oo);y(Xs.$$.fragment,ot),ck=h(ot),wt=r(ot,"P",{});var ad=s(wt);pk=i(ad,"The "),Rl=r(ad,"A",{href:!0});var R$=s(Rl);mk=i(R$,"RoFormerForTokenClassification"),R$.forEach(o),hk=i(ad," forward method, overrides the "),hc=r(ad,"CODE",{});var M$=s(hc);fk=i(M$,"__call__"),M$.forEach(o),uk=i(ad," special method."),ad.forEach(o),gk=h(ot),y(An.$$.fragment,ot),_k=h(ot),y(Ln.$$.fragment,ot),kk=h(ot),y(In.$$.fragment,ot),ot.forEach(o),Wr.forEach(o),ah=h(t),$t=r(t,"H2",{class:!0});var Jh=s($t);Dn=r(Jh,"A",{id:!0,class:!0,href:!0});var E$=s(Dn);fc=r(E$,"SPAN",{});var z$=s(fc);y(Ys.$$.fragment,z$),z$.forEach(o),E$.forEach(o),Fk=h(Jh),uc=r(Jh,"SPAN",{});var j$=s(uc);vk=i(j$,"RoFormerForQuestionAnswering"),j$.forEach(o),Jh.forEach(o),ih=h(t),Fo=r(t,"DIV",{class:!0});var Ur=s(Fo);y(Zs.$$.fragment,Ur),bk=h(Ur),xt=r(Ur,"P",{});var id=s(xt);yk=i(id,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),gc=r(id,"CODE",{});var C$=s(gc);Tk=i(C$,"span start logits"),C$.forEach(o),wk=i(id," and "),_c=r(id,"CODE",{});var q$=s(_c);$k=i(q$,"span end logits"),q$.forEach(o),xk=i(id,")."),id.forEach(o),Rk=h(Ur),ea=r(Ur,"P",{});var Gh=s(ea);Mk=i(Gh,"This model is a PyTorch "),oa=r(Gh,"A",{href:!0,rel:!0});var P$=s(oa);Ek=i(P$,"torch.nn.Module"),P$.forEach(o),zk=i(Gh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gh.forEach(o),jk=h(Ur),to=r(Ur,"DIV",{class:!0});var tt=s(to);y(ta.$$.fragment,tt),Ck=h(tt),Rt=r(tt,"P",{});var ld=s(Rt);qk=i(ld,"The "),Ml=r(ld,"A",{href:!0});var A$=s(Ml);Pk=i(A$,"RoFormerForQuestionAnswering"),A$.forEach(o),Ak=i(ld," forward method, overrides the "),kc=r(ld,"CODE",{});var L$=s(kc);Lk=i(L$,"__call__"),L$.forEach(o),Ik=i(ld," special method."),ld.forEach(o),Dk=h(tt),y(Nn.$$.fragment,tt),Nk=h(tt),y(Sn.$$.fragment,tt),Sk=h(tt),y(On.$$.fragment,tt),tt.forEach(o),Ur.forEach(o),lh=h(t),Mt=r(t,"H2",{class:!0});var Xh=s(Mt);Wn=r(Xh,"A",{id:!0,class:!0,href:!0});var I$=s(Wn);Fc=r(I$,"SPAN",{});var D$=s(Fc);y(na.$$.fragment,D$),D$.forEach(o),I$.forEach(o),Ok=h(Xh),vc=r(Xh,"SPAN",{});var N$=s(vc);Wk=i(N$,"TFRoFormerModel"),N$.forEach(o),Xh.forEach(o),dh=h(t),Qe=r(t,"DIV",{class:!0});var Co=s(Qe);y(ra.$$.fragment,Co),Uk=h(Co),bc=r(Co,"P",{});var S$=s(bc);Qk=i(S$,"The bare RoFormer Model transformer outputing raw hidden-states without any specific head on top."),S$.forEach(o),Hk=h(Co),sa=r(Co,"P",{});var Yh=s(sa);Bk=i(Yh,"This model inherits from "),El=r(Yh,"A",{href:!0});var O$=s(El);Kk=i(O$,"TFPreTrainedModel"),O$.forEach(o),Vk=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yh.forEach(o),Jk=h(Co),aa=r(Co,"P",{});var Zh=s(aa);Gk=i(Zh,"This model is also a "),ia=r(Zh,"A",{href:!0,rel:!0});var W$=s(ia);Xk=i(W$,"tf.keras.Model"),W$.forEach(o),Yk=i(Zh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zh.forEach(o),Zk=h(Co),y(Un.$$.fragment,Co),eF=h(Co),wo=r(Co,"DIV",{class:!0});var Qr=s(wo);y(la.$$.fragment,Qr),oF=h(Qr),Et=r(Qr,"P",{});var dd=s(Et);tF=i(dd,"The "),zl=r(dd,"A",{href:!0});var U$=s(zl);nF=i(U$,"TFRoFormerModel"),U$.forEach(o),rF=i(dd," forward method, overrides the "),yc=r(dd,"CODE",{});var Q$=s(yc);sF=i(Q$,"__call__"),Q$.forEach(o),aF=i(dd," special method."),dd.forEach(o),iF=h(Qr),y(Qn.$$.fragment,Qr),lF=h(Qr),y(Hn.$$.fragment,Qr),Qr.forEach(o),Co.forEach(o),ch=h(t),zt=r(t,"H2",{class:!0});var ef=s(zt);Bn=r(ef,"A",{id:!0,class:!0,href:!0});var H$=s(Bn);Tc=r(H$,"SPAN",{});var B$=s(Tc);y(da.$$.fragment,B$),B$.forEach(o),H$.forEach(o),dF=h(ef),wc=r(ef,"SPAN",{});var K$=s(wc);cF=i(K$,"TFRoFormerForMaskedLM"),K$.forEach(o),ef.forEach(o),ph=h(t),He=r(t,"DIV",{class:!0});var qo=s(He);y(ca.$$.fragment,qo),pF=h(qo),pa=r(qo,"P",{});var of=s(pa);mF=i(of,"RoFormer Model with a "),$c=r(of,"CODE",{});var V$=s($c);hF=i(V$,"language modeling"),V$.forEach(o),fF=i(of," head on top."),of.forEach(o),uF=h(qo),ma=r(qo,"P",{});var tf=s(ma);gF=i(tf,"This model inherits from "),jl=r(tf,"A",{href:!0});var J$=s(jl);_F=i(J$,"TFPreTrainedModel"),J$.forEach(o),kF=i(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(o),FF=h(qo),ha=r(qo,"P",{});var nf=s(ha);vF=i(nf,"This model is also a "),fa=r(nf,"A",{href:!0,rel:!0});var G$=s(fa);bF=i(G$,"tf.keras.Model"),G$.forEach(o),yF=i(nf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf.forEach(o),TF=h(qo),y(Kn.$$.fragment,qo),wF=h(qo),no=r(qo,"DIV",{class:!0});var nt=s(no);y(ua.$$.fragment,nt),$F=h(nt),jt=r(nt,"P",{});var cd=s(jt);xF=i(cd,"The "),Cl=r(cd,"A",{href:!0});var X$=s(Cl);RF=i(X$,"TFRoFormerForMaskedLM"),X$.forEach(o),MF=i(cd," forward method, overrides the "),xc=r(cd,"CODE",{});var Y$=s(xc);EF=i(Y$,"__call__"),Y$.forEach(o),zF=i(cd," special method."),cd.forEach(o),jF=h(nt),y(Vn.$$.fragment,nt),CF=h(nt),y(Jn.$$.fragment,nt),qF=h(nt),y(Gn.$$.fragment,nt),nt.forEach(o),qo.forEach(o),mh=h(t),Ct=r(t,"H2",{class:!0});var rf=s(Ct);Xn=r(rf,"A",{id:!0,class:!0,href:!0});var Z$=s(Xn);Rc=r(Z$,"SPAN",{});var e2=s(Rc);y(ga.$$.fragment,e2),e2.forEach(o),Z$.forEach(o),PF=h(rf),Mc=r(rf,"SPAN",{});var o2=s(Mc);AF=i(o2,"TFRoFormerForCausalLM"),o2.forEach(o),rf.forEach(o),hh=h(t),Be=r(t,"DIV",{class:!0});var Po=s(Be);y(_a.$$.fragment,Po),LF=h(Po),ka=r(Po,"P",{});var sf=s(ka);IF=i(sf,"RoFormer Model with a "),Ec=r(sf,"CODE",{});var t2=s(Ec);DF=i(t2,"language modeling"),t2.forEach(o),NF=i(sf," head on top for CLM fine-tuning."),sf.forEach(o),SF=h(Po),Fa=r(Po,"P",{});var af=s(Fa);OF=i(af,"This model inherits from "),ql=r(af,"A",{href:!0});var n2=s(ql);WF=i(n2,"TFPreTrainedModel"),n2.forEach(o),UF=i(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(o),QF=h(Po),va=r(Po,"P",{});var lf=s(va);HF=i(lf,"This model is also a "),ba=r(lf,"A",{href:!0,rel:!0});var r2=s(ba);BF=i(r2,"tf.keras.Model"),r2.forEach(o),KF=i(lf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf.forEach(o),VF=h(Po),y(Yn.$$.fragment,Po),JF=h(Po),Yo=r(Po,"DIV",{class:!0});var pd=s(Yo);y(ya.$$.fragment,pd),GF=h(pd),Ye=r(pd,"P",{});var Ao=s(Ye);XF=i(Ao,"labels ("),zc=r(Ao,"CODE",{});var s2=s(zc);YF=i(s2,"tf.Tensor"),s2.forEach(o),ZF=i(Ao," or "),jc=r(Ao,"CODE",{});var a2=s(jc);ev=i(a2,"np.ndarray"),a2.forEach(o),ov=i(Ao," of shape "),Cc=r(Ao,"CODE",{});var i2=s(Cc);tv=i(i2,"(batch_size, sequence_length)"),i2.forEach(o),nv=i(Ao,", "),qc=r(Ao,"EM",{});var l2=s(qc);rv=i(l2,"optional"),l2.forEach(o),sv=i(Ao,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Pc=r(Ao,"CODE",{});var d2=s(Pc);av=i(d2,"[0, ..., config.vocab_size - 1]"),d2.forEach(o),iv=i(Ao,"."),Ao.forEach(o),lv=h(pd),y(Zn.$$.fragment,pd),pd.forEach(o),Po.forEach(o),fh=h(t),qt=r(t,"H2",{class:!0});var df=s(qt);er=r(df,"A",{id:!0,class:!0,href:!0});var c2=s(er);Ac=r(c2,"SPAN",{});var p2=s(Ac);y(Ta.$$.fragment,p2),p2.forEach(o),c2.forEach(o),dv=h(df),Lc=r(df,"SPAN",{});var m2=s(Lc);cv=i(m2,"TFRoFormerForSequenceClassification"),m2.forEach(o),df.forEach(o),uh=h(t),Ke=r(t,"DIV",{class:!0});var Lo=s(Ke);y(wa.$$.fragment,Lo),pv=h(Lo),Ic=r(Lo,"P",{});var h2=s(Ic);mv=i(h2,"RoFormer Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),h2.forEach(o),hv=h(Lo),$a=r(Lo,"P",{});var cf=s($a);fv=i(cf,"This model inherits from "),Pl=r(cf,"A",{href:!0});var f2=s(Pl);uv=i(f2,"TFPreTrainedModel"),f2.forEach(o),gv=i(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(o),_v=h(Lo),xa=r(Lo,"P",{});var pf=s(xa);kv=i(pf,"This model is also a "),Ra=r(pf,"A",{href:!0,rel:!0});var u2=s(Ra);Fv=i(u2,"tf.keras.Model"),u2.forEach(o),vv=i(pf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf.forEach(o),bv=h(Lo),y(or.$$.fragment,Lo),yv=h(Lo),ro=r(Lo,"DIV",{class:!0});var rt=s(ro);y(Ma.$$.fragment,rt),Tv=h(rt),Pt=r(rt,"P",{});var md=s(Pt);wv=i(md,"The "),Al=r(md,"A",{href:!0});var g2=s(Al);$v=i(g2,"TFRoFormerForSequenceClassification"),g2.forEach(o),xv=i(md," forward method, overrides the "),Dc=r(md,"CODE",{});var _2=s(Dc);Rv=i(_2,"__call__"),_2.forEach(o),Mv=i(md," special method."),md.forEach(o),Ev=h(rt),y(tr.$$.fragment,rt),zv=h(rt),y(nr.$$.fragment,rt),jv=h(rt),y(rr.$$.fragment,rt),rt.forEach(o),Lo.forEach(o),gh=h(t),At=r(t,"H2",{class:!0});var mf=s(At);sr=r(mf,"A",{id:!0,class:!0,href:!0});var k2=s(sr);Nc=r(k2,"SPAN",{});var F2=s(Nc);y(Ea.$$.fragment,F2),F2.forEach(o),k2.forEach(o),Cv=h(mf),Sc=r(mf,"SPAN",{});var v2=s(Sc);qv=i(v2,"TFRoFormerForMultipleChoice"),v2.forEach(o),mf.forEach(o),_h=h(t),Ve=r(t,"DIV",{class:!0});var Io=s(Ve);y(za.$$.fragment,Io),Pv=h(Io),Oc=r(Io,"P",{});var b2=s(Oc);Av=i(b2,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),b2.forEach(o),Lv=h(Io),ja=r(Io,"P",{});var hf=s(ja);Iv=i(hf,"This model inherits from "),Ll=r(hf,"A",{href:!0});var y2=s(Ll);Dv=i(y2,"TFPreTrainedModel"),y2.forEach(o),Nv=i(hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hf.forEach(o),Sv=h(Io),Ca=r(Io,"P",{});var ff=s(Ca);Ov=i(ff,"This model is also a "),qa=r(ff,"A",{href:!0,rel:!0});var T2=s(qa);Wv=i(T2,"tf.keras.Model"),T2.forEach(o),Uv=i(ff,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ff.forEach(o),Qv=h(Io),y(ar.$$.fragment,Io),Hv=h(Io),$o=r(Io,"DIV",{class:!0});var Hr=s($o);y(Pa.$$.fragment,Hr),Bv=h(Hr),Lt=r(Hr,"P",{});var hd=s(Lt);Kv=i(hd,"The "),Il=r(hd,"A",{href:!0});var w2=s(Il);Vv=i(w2,"TFRoFormerForMultipleChoice"),w2.forEach(o),Jv=i(hd," forward method, overrides the "),Wc=r(hd,"CODE",{});var $2=s(Wc);Gv=i($2,"__call__"),$2.forEach(o),Xv=i(hd," special method."),hd.forEach(o),Yv=h(Hr),y(ir.$$.fragment,Hr),Zv=h(Hr),y(lr.$$.fragment,Hr),Hr.forEach(o),Io.forEach(o),kh=h(t),It=r(t,"H2",{class:!0});var uf=s(It);dr=r(uf,"A",{id:!0,class:!0,href:!0});var x2=s(dr);Uc=r(x2,"SPAN",{});var R2=s(Uc);y(Aa.$$.fragment,R2),R2.forEach(o),x2.forEach(o),eb=h(uf),Qc=r(uf,"SPAN",{});var M2=s(Qc);ob=i(M2,"TFRoFormerForTokenClassification"),M2.forEach(o),uf.forEach(o),Fh=h(t),Je=r(t,"DIV",{class:!0});var Do=s(Je);y(La.$$.fragment,Do),tb=h(Do),Hc=r(Do,"P",{});var E2=s(Hc);nb=i(E2,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),E2.forEach(o),rb=h(Do),Ia=r(Do,"P",{});var gf=s(Ia);sb=i(gf,"This model inherits from "),Dl=r(gf,"A",{href:!0});var z2=s(Dl);ab=i(z2,"TFPreTrainedModel"),z2.forEach(o),ib=i(gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gf.forEach(o),lb=h(Do),Da=r(Do,"P",{});var _f=s(Da);db=i(_f,"This model is also a "),Na=r(_f,"A",{href:!0,rel:!0});var j2=s(Na);cb=i(j2,"tf.keras.Model"),j2.forEach(o),pb=i(_f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_f.forEach(o),mb=h(Do),y(cr.$$.fragment,Do),hb=h(Do),so=r(Do,"DIV",{class:!0});var st=s(so);y(Sa.$$.fragment,st),fb=h(st),Dt=r(st,"P",{});var fd=s(Dt);ub=i(fd,"The "),Nl=r(fd,"A",{href:!0});var C2=s(Nl);gb=i(C2,"TFRoFormerForTokenClassification"),C2.forEach(o),_b=i(fd," forward method, overrides the "),Bc=r(fd,"CODE",{});var q2=s(Bc);kb=i(q2,"__call__"),q2.forEach(o),Fb=i(fd," special method."),fd.forEach(o),vb=h(st),y(pr.$$.fragment,st),bb=h(st),y(mr.$$.fragment,st),yb=h(st),y(hr.$$.fragment,st),st.forEach(o),Do.forEach(o),vh=h(t),Nt=r(t,"H2",{class:!0});var kf=s(Nt);fr=r(kf,"A",{id:!0,class:!0,href:!0});var P2=s(fr);Kc=r(P2,"SPAN",{});var A2=s(Kc);y(Oa.$$.fragment,A2),A2.forEach(o),P2.forEach(o),Tb=h(kf),Vc=r(kf,"SPAN",{});var L2=s(Vc);wb=i(L2,"TFRoFormerForQuestionAnswering"),L2.forEach(o),kf.forEach(o),bh=h(t),Ge=r(t,"DIV",{class:!0});var No=s(Ge);y(Wa.$$.fragment,No),$b=h(No),St=r(No,"P",{});var ud=s(St);xb=i(ud,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Jc=r(ud,"CODE",{});var I2=s(Jc);Rb=i(I2,"span start logits"),I2.forEach(o),Mb=i(ud," and "),Gc=r(ud,"CODE",{});var D2=s(Gc);Eb=i(D2,"span end logits"),D2.forEach(o),zb=i(ud,")."),ud.forEach(o),jb=h(No),Ua=r(No,"P",{});var Ff=s(Ua);Cb=i(Ff,"This model inherits from "),Sl=r(Ff,"A",{href:!0});var N2=s(Sl);qb=i(N2,"TFPreTrainedModel"),N2.forEach(o),Pb=i(Ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff.forEach(o),Ab=h(No),Qa=r(No,"P",{});var vf=s(Qa);Lb=i(vf,"This model is also a "),Ha=r(vf,"A",{href:!0,rel:!0});var S2=s(Ha);Ib=i(S2,"tf.keras.Model"),S2.forEach(o),Db=i(vf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vf.forEach(o),Nb=h(No),y(ur.$$.fragment,No),Sb=h(No),ao=r(No,"DIV",{class:!0});var at=s(ao);y(Ba.$$.fragment,at),Ob=h(at),Ot=r(at,"P",{});var gd=s(Ot);Wb=i(gd,"The "),Ol=r(gd,"A",{href:!0});var O2=s(Ol);Ub=i(O2,"TFRoFormerForQuestionAnswering"),O2.forEach(o),Qb=i(gd," forward method, overrides the "),Xc=r(gd,"CODE",{});var W2=s(Xc);Hb=i(W2,"__call__"),W2.forEach(o),Bb=i(gd," special method."),gd.forEach(o),Kb=h(at),y(gr.$$.fragment,at),Vb=h(at),y(_r.$$.fragment,at),Jb=h(at),y(kr.$$.fragment,at),at.forEach(o),No.forEach(o),yh=h(t),Wt=r(t,"H2",{class:!0});var bf=s(Wt);Fr=r(bf,"A",{id:!0,class:!0,href:!0});var U2=s(Fr);Yc=r(U2,"SPAN",{});var Q2=s(Yc);y(Ka.$$.fragment,Q2),Q2.forEach(o),U2.forEach(o),Gb=h(bf),Zc=r(bf,"SPAN",{});var H2=s(Zc);Xb=i(H2,"FlaxRoFormerModel"),H2.forEach(o),bf.forEach(o),Th=h(t),Pe=r(t,"DIV",{class:!0});var co=s(Pe);y(Va.$$.fragment,co),Yb=h(co),ep=r(co,"P",{});var B2=s(ep);Zb=i(B2,"The bare RoFormer Model transformer outputting raw hidden-states without any specific head on top."),B2.forEach(o),ey=h(co),Ja=r(co,"P",{});var yf=s(Ja);oy=i(yf,"This model inherits from "),Wl=r(yf,"A",{href:!0});var K2=s(Wl);ty=i(K2,"FlaxPreTrainedModel"),K2.forEach(o),ny=i(yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yf.forEach(o),ry=h(co),Ga=r(co,"P",{});var Tf=s(Ga);sy=i(Tf,"This model is also a Flax Linen "),Xa=r(Tf,"A",{href:!0,rel:!0});var V2=s(Xa);ay=i(V2,"flax.linen.Module"),V2.forEach(o),iy=i(Tf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tf.forEach(o),ly=h(co),op=r(co,"P",{});var J2=s(op);dy=i(J2,"Finally, this model supports inherent JAX features such as:"),J2.forEach(o),cy=h(co),Wo=r(co,"UL",{});var Br=s(Wo);tp=r(Br,"LI",{});var G2=s(tp);Ya=r(G2,"A",{href:!0,rel:!0});var X2=s(Ya);py=i(X2,"Just-In-Time (JIT) compilation"),X2.forEach(o),G2.forEach(o),my=h(Br),np=r(Br,"LI",{});var Y2=s(np);Za=r(Y2,"A",{href:!0,rel:!0});var Z2=s(Za);hy=i(Z2,"Automatic Differentiation"),Z2.forEach(o),Y2.forEach(o),fy=h(Br),rp=r(Br,"LI",{});var e0=s(rp);ei=r(e0,"A",{href:!0,rel:!0});var o0=s(ei);uy=i(o0,"Vectorization"),o0.forEach(o),e0.forEach(o),gy=h(Br),sp=r(Br,"LI",{});var t0=s(sp);oi=r(t0,"A",{href:!0,rel:!0});var n0=s(oi);_y=i(n0,"Parallelization"),n0.forEach(o),t0.forEach(o),Br.forEach(o),ky=h(co),xo=r(co,"DIV",{class:!0});var Kr=s(xo);y(ti.$$.fragment,Kr),Fy=h(Kr),Ut=r(Kr,"P",{});var _d=s(Ut);vy=i(_d,"The "),ap=r(_d,"CODE",{});var r0=s(ap);by=i(r0,"FlaxRoFormerPreTrainedModel"),r0.forEach(o),yy=i(_d," forward method, overrides the "),ip=r(_d,"CODE",{});var s0=s(ip);Ty=i(s0,"__call__"),s0.forEach(o),wy=i(_d," special method."),_d.forEach(o),$y=h(Kr),y(vr.$$.fragment,Kr),xy=h(Kr),y(br.$$.fragment,Kr),Kr.forEach(o),co.forEach(o),wh=h(t),Qt=r(t,"H2",{class:!0});var wf=s(Qt);yr=r(wf,"A",{id:!0,class:!0,href:!0});var a0=s(yr);lp=r(a0,"SPAN",{});var i0=s(lp);y(ni.$$.fragment,i0),i0.forEach(o),a0.forEach(o),Ry=h(wf),dp=r(wf,"SPAN",{});var l0=s(dp);My=i(l0,"FlaxRoFormerForMaskedLM"),l0.forEach(o),wf.forEach(o),$h=h(t),Ae=r(t,"DIV",{class:!0});var po=s(Ae);y(ri.$$.fragment,po),Ey=h(po),si=r(po,"P",{});var $f=s(si);zy=i($f,"RoFormer Model with a "),cp=r($f,"CODE",{});var d0=s(cp);jy=i(d0,"language modeling"),d0.forEach(o),Cy=i($f," head on top."),$f.forEach(o),qy=h(po),ai=r(po,"P",{});var xf=s(ai);Py=i(xf,"This model inherits from "),Ul=r(xf,"A",{href:!0});var c0=s(Ul);Ay=i(c0,"FlaxPreTrainedModel"),c0.forEach(o),Ly=i(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xf.forEach(o),Iy=h(po),ii=r(po,"P",{});var Rf=s(ii);Dy=i(Rf,"This model is also a Flax Linen "),li=r(Rf,"A",{href:!0,rel:!0});var p0=s(li);Ny=i(p0,"flax.linen.Module"),p0.forEach(o),Sy=i(Rf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rf.forEach(o),Oy=h(po),pp=r(po,"P",{});var m0=s(pp);Wy=i(m0,"Finally, this model supports inherent JAX features such as:"),m0.forEach(o),Uy=h(po),Uo=r(po,"UL",{});var Vr=s(Uo);mp=r(Vr,"LI",{});var h0=s(mp);di=r(h0,"A",{href:!0,rel:!0});var f0=s(di);Qy=i(f0,"Just-In-Time (JIT) compilation"),f0.forEach(o),h0.forEach(o),Hy=h(Vr),hp=r(Vr,"LI",{});var u0=s(hp);ci=r(u0,"A",{href:!0,rel:!0});var g0=s(ci);By=i(g0,"Automatic Differentiation"),g0.forEach(o),u0.forEach(o),Ky=h(Vr),fp=r(Vr,"LI",{});var _0=s(fp);pi=r(_0,"A",{href:!0,rel:!0});var k0=s(pi);Vy=i(k0,"Vectorization"),k0.forEach(o),_0.forEach(o),Jy=h(Vr),up=r(Vr,"LI",{});var F0=s(up);mi=r(F0,"A",{href:!0,rel:!0});var v0=s(mi);Gy=i(v0,"Parallelization"),v0.forEach(o),F0.forEach(o),Vr.forEach(o),Xy=h(po),Ro=r(po,"DIV",{class:!0});var Jr=s(Ro);y(hi.$$.fragment,Jr),Yy=h(Jr),Ht=r(Jr,"P",{});var kd=s(Ht);Zy=i(kd,"The "),gp=r(kd,"CODE",{});var b0=s(gp);eT=i(b0,"FlaxRoFormerPreTrainedModel"),b0.forEach(o),oT=i(kd," forward method, overrides the "),_p=r(kd,"CODE",{});var y0=s(_p);tT=i(y0,"__call__"),y0.forEach(o),nT=i(kd," special method."),kd.forEach(o),rT=h(Jr),y(Tr.$$.fragment,Jr),sT=h(Jr),y(wr.$$.fragment,Jr),Jr.forEach(o),po.forEach(o),xh=h(t),Bt=r(t,"H2",{class:!0});var Mf=s(Bt);$r=r(Mf,"A",{id:!0,class:!0,href:!0});var T0=s($r);kp=r(T0,"SPAN",{});var w0=s(kp);y(fi.$$.fragment,w0),w0.forEach(o),T0.forEach(o),aT=h(Mf),Fp=r(Mf,"SPAN",{});var $0=s(Fp);iT=i($0,"FlaxRoFormerForSequenceClassification"),$0.forEach(o),Mf.forEach(o),Rh=h(t),Le=r(t,"DIV",{class:!0});var mo=s(Le);y(ui.$$.fragment,mo),lT=h(mo),vp=r(mo,"P",{});var x0=s(vp);dT=i(x0,`RoFormer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),x0.forEach(o),cT=h(mo),gi=r(mo,"P",{});var Ef=s(gi);pT=i(Ef,"This model inherits from "),Ql=r(Ef,"A",{href:!0});var R0=s(Ql);mT=i(R0,"FlaxPreTrainedModel"),R0.forEach(o),hT=i(Ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ef.forEach(o),fT=h(mo),_i=r(mo,"P",{});var zf=s(_i);uT=i(zf,"This model is also a Flax Linen "),ki=r(zf,"A",{href:!0,rel:!0});var M0=s(ki);gT=i(M0,"flax.linen.Module"),M0.forEach(o),_T=i(zf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zf.forEach(o),kT=h(mo),bp=r(mo,"P",{});var E0=s(bp);FT=i(E0,"Finally, this model supports inherent JAX features such as:"),E0.forEach(o),vT=h(mo),Qo=r(mo,"UL",{});var Gr=s(Qo);yp=r(Gr,"LI",{});var z0=s(yp);Fi=r(z0,"A",{href:!0,rel:!0});var j0=s(Fi);bT=i(j0,"Just-In-Time (JIT) compilation"),j0.forEach(o),z0.forEach(o),yT=h(Gr),Tp=r(Gr,"LI",{});var C0=s(Tp);vi=r(C0,"A",{href:!0,rel:!0});var q0=s(vi);TT=i(q0,"Automatic Differentiation"),q0.forEach(o),C0.forEach(o),wT=h(Gr),wp=r(Gr,"LI",{});var P0=s(wp);bi=r(P0,"A",{href:!0,rel:!0});var A0=s(bi);$T=i(A0,"Vectorization"),A0.forEach(o),P0.forEach(o),xT=h(Gr),$p=r(Gr,"LI",{});var L0=s($p);yi=r(L0,"A",{href:!0,rel:!0});var I0=s(yi);RT=i(I0,"Parallelization"),I0.forEach(o),L0.forEach(o),Gr.forEach(o),MT=h(mo),Mo=r(mo,"DIV",{class:!0});var Xr=s(Mo);y(Ti.$$.fragment,Xr),ET=h(Xr),Kt=r(Xr,"P",{});var Fd=s(Kt);zT=i(Fd,"The "),xp=r(Fd,"CODE",{});var D0=s(xp);jT=i(D0,"FlaxRoFormerPreTrainedModel"),D0.forEach(o),CT=i(Fd," forward method, overrides the "),Rp=r(Fd,"CODE",{});var N0=s(Rp);qT=i(N0,"__call__"),N0.forEach(o),PT=i(Fd," special method."),Fd.forEach(o),AT=h(Xr),y(xr.$$.fragment,Xr),LT=h(Xr),y(Rr.$$.fragment,Xr),Xr.forEach(o),mo.forEach(o),Mh=h(t),Vt=r(t,"H2",{class:!0});var jf=s(Vt);Mr=r(jf,"A",{id:!0,class:!0,href:!0});var S0=s(Mr);Mp=r(S0,"SPAN",{});var O0=s(Mp);y(wi.$$.fragment,O0),O0.forEach(o),S0.forEach(o),IT=h(jf),Ep=r(jf,"SPAN",{});var W0=s(Ep);DT=i(W0,"FlaxRoFormerForMultipleChoice"),W0.forEach(o),jf.forEach(o),Eh=h(t),Ie=r(t,"DIV",{class:!0});var ho=s(Ie);y($i.$$.fragment,ho),NT=h(ho),zp=r(ho,"P",{});var U0=s(zp);ST=i(U0,`RoFormer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),U0.forEach(o),OT=h(ho),xi=r(ho,"P",{});var Cf=s(xi);WT=i(Cf,"This model inherits from "),Hl=r(Cf,"A",{href:!0});var Q0=s(Hl);UT=i(Q0,"FlaxPreTrainedModel"),Q0.forEach(o),QT=i(Cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cf.forEach(o),HT=h(ho),Ri=r(ho,"P",{});var qf=s(Ri);BT=i(qf,"This model is also a Flax Linen "),Mi=r(qf,"A",{href:!0,rel:!0});var H0=s(Mi);KT=i(H0,"flax.linen.Module"),H0.forEach(o),VT=i(qf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qf.forEach(o),JT=h(ho),jp=r(ho,"P",{});var B0=s(jp);GT=i(B0,"Finally, this model supports inherent JAX features such as:"),B0.forEach(o),XT=h(ho),Ho=r(ho,"UL",{});var Yr=s(Ho);Cp=r(Yr,"LI",{});var K0=s(Cp);Ei=r(K0,"A",{href:!0,rel:!0});var V0=s(Ei);YT=i(V0,"Just-In-Time (JIT) compilation"),V0.forEach(o),K0.forEach(o),ZT=h(Yr),qp=r(Yr,"LI",{});var J0=s(qp);zi=r(J0,"A",{href:!0,rel:!0});var G0=s(zi);ew=i(G0,"Automatic Differentiation"),G0.forEach(o),J0.forEach(o),ow=h(Yr),Pp=r(Yr,"LI",{});var X0=s(Pp);ji=r(X0,"A",{href:!0,rel:!0});var Y0=s(ji);tw=i(Y0,"Vectorization"),Y0.forEach(o),X0.forEach(o),nw=h(Yr),Ap=r(Yr,"LI",{});var Z0=s(Ap);Ci=r(Z0,"A",{href:!0,rel:!0});var ex=s(Ci);rw=i(ex,"Parallelization"),ex.forEach(o),Z0.forEach(o),Yr.forEach(o),sw=h(ho),Eo=r(ho,"DIV",{class:!0});var Zr=s(Eo);y(qi.$$.fragment,Zr),aw=h(Zr),Jt=r(Zr,"P",{});var vd=s(Jt);iw=i(vd,"The "),Lp=r(vd,"CODE",{});var ox=s(Lp);lw=i(ox,"FlaxRoFormerPreTrainedModel"),ox.forEach(o),dw=i(vd," forward method, overrides the "),Ip=r(vd,"CODE",{});var tx=s(Ip);cw=i(tx,"__call__"),tx.forEach(o),pw=i(vd," special method."),vd.forEach(o),mw=h(Zr),y(Er.$$.fragment,Zr),hw=h(Zr),y(zr.$$.fragment,Zr),Zr.forEach(o),ho.forEach(o),zh=h(t),Gt=r(t,"H2",{class:!0});var Pf=s(Gt);jr=r(Pf,"A",{id:!0,class:!0,href:!0});var nx=s(jr);Dp=r(nx,"SPAN",{});var rx=s(Dp);y(Pi.$$.fragment,rx),rx.forEach(o),nx.forEach(o),fw=h(Pf),Np=r(Pf,"SPAN",{});var sx=s(Np);uw=i(sx,"FlaxRoFormerForTokenClassification"),sx.forEach(o),Pf.forEach(o),jh=h(t),De=r(t,"DIV",{class:!0});var fo=s(De);y(Ai.$$.fragment,fo),gw=h(fo),Sp=r(fo,"P",{});var ax=s(Sp);_w=i(ax,`RoFormer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ax.forEach(o),kw=h(fo),Li=r(fo,"P",{});var Af=s(Li);Fw=i(Af,"This model inherits from "),Bl=r(Af,"A",{href:!0});var ix=s(Bl);vw=i(ix,"FlaxPreTrainedModel"),ix.forEach(o),bw=i(Af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Af.forEach(o),yw=h(fo),Ii=r(fo,"P",{});var Lf=s(Ii);Tw=i(Lf,"This model is also a Flax Linen "),Di=r(Lf,"A",{href:!0,rel:!0});var lx=s(Di);ww=i(lx,"flax.linen.Module"),lx.forEach(o),$w=i(Lf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Lf.forEach(o),xw=h(fo),Op=r(fo,"P",{});var dx=s(Op);Rw=i(dx,"Finally, this model supports inherent JAX features such as:"),dx.forEach(o),Mw=h(fo),Bo=r(fo,"UL",{});var es=s(Bo);Wp=r(es,"LI",{});var cx=s(Wp);Ni=r(cx,"A",{href:!0,rel:!0});var px=s(Ni);Ew=i(px,"Just-In-Time (JIT) compilation"),px.forEach(o),cx.forEach(o),zw=h(es),Up=r(es,"LI",{});var mx=s(Up);Si=r(mx,"A",{href:!0,rel:!0});var hx=s(Si);jw=i(hx,"Automatic Differentiation"),hx.forEach(o),mx.forEach(o),Cw=h(es),Qp=r(es,"LI",{});var fx=s(Qp);Oi=r(fx,"A",{href:!0,rel:!0});var ux=s(Oi);qw=i(ux,"Vectorization"),ux.forEach(o),fx.forEach(o),Pw=h(es),Hp=r(es,"LI",{});var gx=s(Hp);Wi=r(gx,"A",{href:!0,rel:!0});var _x=s(Wi);Aw=i(_x,"Parallelization"),_x.forEach(o),gx.forEach(o),es.forEach(o),Lw=h(fo),zo=r(fo,"DIV",{class:!0});var os=s(zo);y(Ui.$$.fragment,os),Iw=h(os),Xt=r(os,"P",{});var bd=s(Xt);Dw=i(bd,"The "),Bp=r(bd,"CODE",{});var kx=s(Bp);Nw=i(kx,"FlaxRoFormerPreTrainedModel"),kx.forEach(o),Sw=i(bd," forward method, overrides the "),Kp=r(bd,"CODE",{});var Fx=s(Kp);Ow=i(Fx,"__call__"),Fx.forEach(o),Ww=i(bd," special method."),bd.forEach(o),Uw=h(os),y(Cr.$$.fragment,os),Qw=h(os),y(qr.$$.fragment,os),os.forEach(o),fo.forEach(o),Ch=h(t),Yt=r(t,"H2",{class:!0});var If=s(Yt);Pr=r(If,"A",{id:!0,class:!0,href:!0});var vx=s(Pr);Vp=r(vx,"SPAN",{});var bx=s(Vp);y(Qi.$$.fragment,bx),bx.forEach(o),vx.forEach(o),Hw=h(If),Jp=r(If,"SPAN",{});var yx=s(Jp);Bw=i(yx,"FlaxRoFormerForQuestionAnswering"),yx.forEach(o),If.forEach(o),qh=h(t),Ne=r(t,"DIV",{class:!0});var uo=s(Ne);y(Hi.$$.fragment,uo),Kw=h(uo),Zt=r(uo,"P",{});var yd=s(Zt);Vw=i(yd,`RoFormer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gp=r(yd,"CODE",{});var Tx=s(Gp);Jw=i(Tx,"span start logits"),Tx.forEach(o),Gw=i(yd," and "),Xp=r(yd,"CODE",{});var wx=s(Xp);Xw=i(wx,"span end logits"),wx.forEach(o),Yw=i(yd,")."),yd.forEach(o),Zw=h(uo),Bi=r(uo,"P",{});var Df=s(Bi);e1=i(Df,"This model inherits from "),Kl=r(Df,"A",{href:!0});var $x=s(Kl);o1=i($x,"FlaxPreTrainedModel"),$x.forEach(o),t1=i(Df,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Df.forEach(o),n1=h(uo),Ki=r(uo,"P",{});var Nf=s(Ki);r1=i(Nf,"This model is also a Flax Linen "),Vi=r(Nf,"A",{href:!0,rel:!0});var xx=s(Vi);s1=i(xx,"flax.linen.Module"),xx.forEach(o),a1=i(Nf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nf.forEach(o),i1=h(uo),Yp=r(uo,"P",{});var Rx=s(Yp);l1=i(Rx,"Finally, this model supports inherent JAX features such as:"),Rx.forEach(o),d1=h(uo),Ko=r(uo,"UL",{});var ts=s(Ko);Zp=r(ts,"LI",{});var Mx=s(Zp);Ji=r(Mx,"A",{href:!0,rel:!0});var Ex=s(Ji);c1=i(Ex,"Just-In-Time (JIT) compilation"),Ex.forEach(o),Mx.forEach(o),p1=h(ts),em=r(ts,"LI",{});var zx=s(em);Gi=r(zx,"A",{href:!0,rel:!0});var jx=s(Gi);m1=i(jx,"Automatic Differentiation"),jx.forEach(o),zx.forEach(o),h1=h(ts),om=r(ts,"LI",{});var Cx=s(om);Xi=r(Cx,"A",{href:!0,rel:!0});var qx=s(Xi);f1=i(qx,"Vectorization"),qx.forEach(o),Cx.forEach(o),u1=h(ts),tm=r(ts,"LI",{});var Px=s(tm);Yi=r(Px,"A",{href:!0,rel:!0});var Ax=s(Yi);g1=i(Ax,"Parallelization"),Ax.forEach(o),Px.forEach(o),ts.forEach(o),_1=h(uo),jo=r(uo,"DIV",{class:!0});var ns=s(jo);y(Zi.$$.fragment,ns),k1=h(ns),en=r(ns,"P",{});var Td=s(en);F1=i(Td,"The "),nm=r(Td,"CODE",{});var Lx=s(nm);v1=i(Lx,"FlaxRoFormerPreTrainedModel"),Lx.forEach(o),b1=i(Td," forward method, overrides the "),rm=r(Td,"CODE",{});var Ix=s(rm);y1=i(Ix,"__call__"),Ix.forEach(o),T1=i(Td," special method."),Td.forEach(o),w1=h(ns),y(Ar.$$.fragment,ns),$1=h(ns),y(Lr.$$.fragment,ns),ns.forEach(o),uo.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(GR)),u(p,"id","roformer"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#roformer"),u(c,"class","relative group"),u(Z,"id","overview"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#overview"),u(z,"class","relative group"),u(oe,"href","https://arxiv.org/pdf/2104.09864v1.pdf"),u(oe,"rel","nofollow"),u(te,"href","https://huggingface.co/junnyu"),u(te,"rel","nofollow"),u(v,"href","https://github.com/ZhuiyiTechnology/roformer"),u(v,"rel","nofollow"),u(P,"id","transformers.RoFormerConfig"),u(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(P,"href","#transformers.RoFormerConfig"),u(ye,"class","relative group"),u($e,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerModel"),u(rs,"href","https://huggingface.co/junnyu/roformer_chinese_base"),u(rs,"rel","nofollow"),u(pl,"href","/docs/transformers/pr_17865/en/main_classes/configuration#transformers.PretrainedConfig"),u(ml,"href","/docs/transformers/pr_17865/en/main_classes/configuration#transformers.PretrainedConfig"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.RoFormerTokenizer"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.RoFormerTokenizer"),u(lt,"class","relative group"),u(ls,"href","https://pypi.org/project/rjieba/"),u(ls,"rel","nofollow"),u(hl,"href","/docs/transformers/pr_17865/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.RoFormerTokenizerFast"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.RoFormerTokenizerFast"),u(ct,"class","relative group"),u(_l,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerTokenizerFast"),u(kl,"href","/docs/transformers/pr_17865/en/model_doc/bert#transformers.BertTokenizerFast"),u(Fl,"href","/docs/transformers/pr_17865/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.RoFormerModel"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.RoFormerModel"),u(pt,"class","relative group"),u($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($s,"rel","nofollow"),u(Rs,"href","https://arxiv.org/abs/1706.03762"),u(Rs,"rel","nofollow"),u(yl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerModel"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.RoFormerForCausalLM"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.RoFormerForCausalLM"),u(ht,"class","relative group"),u(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(js,"rel","nofollow"),u(Tl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerForCausalLM"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.RoFormerForMaskedLM"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.RoFormerForMaskedLM"),u(gt,"class","relative group"),u(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(As,"rel","nofollow"),u(wl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerForMaskedLM"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.RoFormerForSequenceClassification"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.RoFormerForSequenceClassification"),u(Ft,"class","relative group"),u(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ss,"rel","nofollow"),u($l,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerForSequenceClassification"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.RoFormerForMultipleChoice"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.RoFormerForMultipleChoice"),u(bt,"class","relative group"),u(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Hs,"rel","nofollow"),u(xl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerForMultipleChoice"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.RoFormerForTokenClassification"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.RoFormerForTokenClassification"),u(Tt,"class","relative group"),u(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gs,"rel","nofollow"),u(Rl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerForTokenClassification"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dn,"id","transformers.RoFormerForQuestionAnswering"),u(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dn,"href","#transformers.RoFormerForQuestionAnswering"),u($t,"class","relative group"),u(oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(oa,"rel","nofollow"),u(Ml,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.RoFormerForQuestionAnswering"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.TFRoFormerModel"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.TFRoFormerModel"),u(Mt,"class","relative group"),u(El,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.TFPreTrainedModel"),u(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ia,"rel","nofollow"),u(zl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerModel"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.TFRoFormerForMaskedLM"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.TFRoFormerForMaskedLM"),u(zt,"class","relative group"),u(jl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.TFPreTrainedModel"),u(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(fa,"rel","nofollow"),u(Cl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerForMaskedLM"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.TFRoFormerForCausalLM"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.TFRoFormerForCausalLM"),u(Ct,"class","relative group"),u(ql,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.TFPreTrainedModel"),u(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ba,"rel","nofollow"),u(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.TFRoFormerForSequenceClassification"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.TFRoFormerForSequenceClassification"),u(qt,"class","relative group"),u(Pl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ra,"rel","nofollow"),u(Al,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerForSequenceClassification"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.TFRoFormerForMultipleChoice"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.TFRoFormerForMultipleChoice"),u(At,"class","relative group"),u(Ll,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.TFPreTrainedModel"),u(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qa,"rel","nofollow"),u(Il,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerForMultipleChoice"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dr,"id","transformers.TFRoFormerForTokenClassification"),u(dr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dr,"href","#transformers.TFRoFormerForTokenClassification"),u(It,"class","relative group"),u(Dl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.TFPreTrainedModel"),u(Na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Na,"rel","nofollow"),u(Nl,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerForTokenClassification"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.TFRoFormerForQuestionAnswering"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.TFRoFormerForQuestionAnswering"),u(Nt,"class","relative group"),u(Sl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ha,"rel","nofollow"),u(Ol,"href","/docs/transformers/pr_17865/en/model_doc/roformer#transformers.TFRoFormerForQuestionAnswering"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fr,"id","transformers.FlaxRoFormerModel"),u(Fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fr,"href","#transformers.FlaxRoFormerModel"),u(Wt,"class","relative group"),u(Wl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Xa,"rel","nofollow"),u(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ya,"rel","nofollow"),u(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Za,"rel","nofollow"),u(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ei,"rel","nofollow"),u(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(oi,"rel","nofollow"),u(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yr,"id","transformers.FlaxRoFormerForMaskedLM"),u(yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yr,"href","#transformers.FlaxRoFormerForMaskedLM"),u(Qt,"class","relative group"),u(Ul,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(li,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(li,"rel","nofollow"),u(di,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(di,"rel","nofollow"),u(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ci,"rel","nofollow"),u(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(mi,"rel","nofollow"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.FlaxRoFormerForSequenceClassification"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.FlaxRoFormerForSequenceClassification"),u(Bt,"class","relative group"),u(Ql,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ki,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Fi,"rel","nofollow"),u(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(vi,"rel","nofollow"),u(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bi,"rel","nofollow"),u(yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yi,"rel","nofollow"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mr,"id","transformers.FlaxRoFormerForMultipleChoice"),u(Mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mr,"href","#transformers.FlaxRoFormerForMultipleChoice"),u(Vt,"class","relative group"),u(Hl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Mi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Mi,"rel","nofollow"),u(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ei,"rel","nofollow"),u(zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zi,"rel","nofollow"),u(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ji,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ci,"rel","nofollow"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.FlaxRoFormerForTokenClassification"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.FlaxRoFormerForTokenClassification"),u(Gt,"class","relative group"),u(Bl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Di,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Di,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ni,"rel","nofollow"),u(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Si,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Oi,"rel","nofollow"),u(Wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wi,"rel","nofollow"),u(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pr,"id","transformers.FlaxRoFormerForQuestionAnswering"),u(Pr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pr,"href","#transformers.FlaxRoFormerForQuestionAnswering"),u(Yt,"class","relative group"),u(Kl,"href","/docs/transformers/pr_17865/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Vi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Vi,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Xi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Yi,"rel","nofollow"),u(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,F){e(document.head,d),k(t,g,F),k(t,c,F),e(c,p),e(p,_),T(l,_,null),e(c,f),e(c,M),e(M,ue),k(t,J,F),k(t,z,F),e(z,Z),e(Z,S),T(ee,S,null),e(z,ge),e(z,O),e(O,_e),k(t,pe,F),k(t,V,F),e(V,L),e(V,oe),e(oe,G),e(V,j),k(t,q,F),k(t,ne,F),e(ne,Q),k(t,me,F),k(t,re,F),e(re,W),e(W,ke),k(t,he,F),k(t,C,F),e(C,Fe),k(t,U,F),k(t,se,F),e(se,ce),e(ce,H),k(t,fe,F),k(t,X,F),e(X,I),e(X,te),e(te,B),e(X,ve),e(X,v),e(v,E),e(X,Y),k(t,Me,F),k(t,ye,F),e(ye,P),e(P,xe),T(we,xe,null),e(ye,je),e(ye,A),e(A,K),k(t,Ee,F),k(t,ae,F),T(D,ae,null),e(ae,Ce),e(ae,Te),e(Te,be),e(Te,$e),e($e,Sf),e(Te,Of),e(Te,rs),e(rs,Wf),e(Te,Uf),e(ae,Qf),e(ae,it),e(it,Hf),e(it,pl),e(pl,Bf),e(it,Kf),e(it,ml),e(ml,Vf),e(it,Jf),e(ae,Gf),T(an,ae,null),k(t,Qm,F),k(t,lt,F),e(lt,ln),e(ln,wd),T(ss,wd,null),e(lt,Xf),e(lt,$d),e($d,Yf),k(t,Hm,F),k(t,qe,F),T(as,qe,null),e(qe,Zf),e(qe,is),e(is,eu),e(is,ls),e(ls,ou),e(is,tu),e(qe,nu),e(qe,ds),e(ds,ru),e(ds,hl),e(hl,su),e(ds,au),e(qe,iu),T(dn,qe,null),e(qe,lu),e(qe,Go),T(cs,Go,null),e(Go,du),e(Go,xd),e(xd,cu),e(Go,pu),e(Go,ps),e(ps,fl),e(fl,mu),e(fl,Rd),e(Rd,hu),e(ps,fu),e(ps,ul),e(ul,uu),e(ul,Md),e(Md,gu),e(qe,_u),e(qe,cn),T(ms,cn,null),e(cn,ku),e(cn,hs),e(hs,Fu),e(hs,Ed),e(Ed,vu),e(hs,bu),e(qe,yu),e(qe,vo),T(fs,vo,null),e(vo,Tu),e(vo,zd),e(zd,wu),e(vo,$u),T(pn,vo,null),e(vo,xu),e(vo,dt),e(dt,Ru),e(dt,jd),e(jd,Mu),e(dt,Eu),e(dt,Cd),e(Cd,zu),e(dt,ju),e(qe,Cu),e(qe,gl),T(us,gl,null),k(t,Bm,F),k(t,ct,F),e(ct,mn),e(mn,qd),T(gs,qd,null),e(ct,qu),e(ct,Pd),e(Pd,Pu),k(t,Km,F),k(t,We,F),T(_s,We,null),e(We,Au),e(We,ks),e(ks,Lu),e(ks,Ad),e(Ad,Iu),e(ks,Du),e(We,Nu),e(We,hn),e(hn,_l),e(_l,Su),e(hn,Ou),e(hn,kl),e(kl,Wu),e(hn,Uu),e(We,Qu),e(We,Fs),e(Fs,Hu),e(Fs,Fl),e(Fl,Bu),e(Fs,Ku),e(We,Vu),T(fn,We,null),e(We,Ju),e(We,Xo),T(vs,Xo,null),e(Xo,Gu),e(Xo,Ld),e(Ld,Xu),e(Xo,Yu),e(Xo,bs),e(bs,vl),e(vl,Zu),e(vl,Id),e(Id,eg),e(bs,og),e(bs,bl),e(bl,tg),e(bl,Dd),e(Dd,ng),k(t,Vm,F),k(t,pt,F),e(pt,un),e(un,Nd),T(ys,Nd,null),e(pt,rg),e(pt,Sd),e(Sd,sg),k(t,Jm,F),k(t,Xe,F),T(Ts,Xe,null),e(Xe,ag),e(Xe,ws),e(ws,ig),e(ws,$s),e($s,lg),e(ws,dg),e(Xe,cg),e(Xe,xs),e(xs,pg),e(xs,Rs),e(Rs,mg),e(xs,hg),e(Xe,fg),e(Xe,Ue),e(Ue,ug),e(Ue,Od),e(Od,gg),e(Ue,_g),e(Ue,Wd),e(Wd,kg),e(Ue,Fg),e(Ue,Ud),e(Ud,vg),e(Ue,bg),e(Ue,Qd),e(Qd,yg),e(Ue,Tg),e(Ue,Hd),e(Hd,wg),e(Ue,$g),e(Ue,Bd),e(Bd,xg),e(Ue,Rg),e(Xe,Mg),e(Xe,bo),T(Ms,bo,null),e(bo,Eg),e(bo,mt),e(mt,zg),e(mt,yl),e(yl,jg),e(mt,Cg),e(mt,Kd),e(Kd,qg),e(mt,Pg),e(bo,Ag),T(gn,bo,null),e(bo,Lg),T(_n,bo,null),k(t,Gm,F),k(t,ht,F),e(ht,kn),e(kn,Vd),T(Es,Vd,null),e(ht,Ig),e(ht,Jd),e(Jd,Dg),k(t,Xm,F),k(t,So,F),T(zs,So,null),e(So,Ng),e(So,ft),e(ft,Sg),e(ft,Gd),e(Gd,Og),e(ft,Wg),e(ft,js),e(js,Ug),e(ft,Qg),e(So,Hg),e(So,yo),T(Cs,yo,null),e(yo,Bg),e(yo,ut),e(ut,Kg),e(ut,Tl),e(Tl,Vg),e(ut,Jg),e(ut,Xd),e(Xd,Gg),e(ut,Xg),e(yo,Yg),T(Fn,yo,null),e(yo,Zg),T(vn,yo,null),k(t,Ym,F),k(t,gt,F),e(gt,bn),e(bn,Yd),T(qs,Yd,null),e(gt,e_),e(gt,Zd),e(Zd,o_),k(t,Zm,F),k(t,Oo,F),T(Ps,Oo,null),e(Oo,t_),e(Oo,_t),e(_t,n_),e(_t,ec),e(ec,r_),e(_t,s_),e(_t,As),e(As,a_),e(_t,i_),e(Oo,l_),e(Oo,eo),T(Ls,eo,null),e(eo,d_),e(eo,kt),e(kt,c_),e(kt,wl),e(wl,p_),e(kt,m_),e(kt,oc),e(oc,h_),e(kt,f_),e(eo,u_),T(yn,eo,null),e(eo,g_),T(Tn,eo,null),e(eo,__),T(wn,eo,null),k(t,eh,F),k(t,Ft,F),e(Ft,$n),e($n,tc),T(Is,tc,null),e(Ft,k_),e(Ft,nc),e(nc,F_),k(t,oh,F),k(t,go,F),T(Ds,go,null),e(go,v_),e(go,rc),e(rc,b_),e(go,y_),e(go,Ns),e(Ns,T_),e(Ns,Ss),e(Ss,w_),e(Ns,$_),e(go,x_),e(go,Oe),T(Os,Oe,null),e(Oe,R_),e(Oe,vt),e(vt,M_),e(vt,$l),e($l,E_),e(vt,z_),e(vt,sc),e(sc,j_),e(vt,C_),e(Oe,q_),T(xn,Oe,null),e(Oe,P_),T(Rn,Oe,null),e(Oe,A_),T(Mn,Oe,null),e(Oe,L_),T(En,Oe,null),e(Oe,I_),T(zn,Oe,null),k(t,th,F),k(t,bt,F),e(bt,jn),e(jn,ac),T(Ws,ac,null),e(bt,D_),e(bt,ic),e(ic,N_),k(t,nh,F),k(t,_o,F),T(Us,_o,null),e(_o,S_),e(_o,lc),e(lc,O_),e(_o,W_),e(_o,Qs),e(Qs,U_),e(Qs,Hs),e(Hs,Q_),e(Qs,H_),e(_o,B_),e(_o,To),T(Bs,To,null),e(To,K_),e(To,yt),e(yt,V_),e(yt,xl),e(xl,J_),e(yt,G_),e(yt,dc),e(dc,X_),e(yt,Y_),e(To,Z_),T(Cn,To,null),e(To,ek),T(qn,To,null),k(t,rh,F),k(t,Tt,F),e(Tt,Pn),e(Pn,cc),T(Ks,cc,null),e(Tt,ok),e(Tt,pc),e(pc,tk),k(t,sh,F),k(t,ko,F),T(Vs,ko,null),e(ko,nk),e(ko,mc),e(mc,rk),e(ko,sk),e(ko,Js),e(Js,ak),e(Js,Gs),e(Gs,ik),e(Js,lk),e(ko,dk),e(ko,oo),T(Xs,oo,null),e(oo,ck),e(oo,wt),e(wt,pk),e(wt,Rl),e(Rl,mk),e(wt,hk),e(wt,hc),e(hc,fk),e(wt,uk),e(oo,gk),T(An,oo,null),e(oo,_k),T(Ln,oo,null),e(oo,kk),T(In,oo,null),k(t,ah,F),k(t,$t,F),e($t,Dn),e(Dn,fc),T(Ys,fc,null),e($t,Fk),e($t,uc),e(uc,vk),k(t,ih,F),k(t,Fo,F),T(Zs,Fo,null),e(Fo,bk),e(Fo,xt),e(xt,yk),e(xt,gc),e(gc,Tk),e(xt,wk),e(xt,_c),e(_c,$k),e(xt,xk),e(Fo,Rk),e(Fo,ea),e(ea,Mk),e(ea,oa),e(oa,Ek),e(ea,zk),e(Fo,jk),e(Fo,to),T(ta,to,null),e(to,Ck),e(to,Rt),e(Rt,qk),e(Rt,Ml),e(Ml,Pk),e(Rt,Ak),e(Rt,kc),e(kc,Lk),e(Rt,Ik),e(to,Dk),T(Nn,to,null),e(to,Nk),T(Sn,to,null),e(to,Sk),T(On,to,null),k(t,lh,F),k(t,Mt,F),e(Mt,Wn),e(Wn,Fc),T(na,Fc,null),e(Mt,Ok),e(Mt,vc),e(vc,Wk),k(t,dh,F),k(t,Qe,F),T(ra,Qe,null),e(Qe,Uk),e(Qe,bc),e(bc,Qk),e(Qe,Hk),e(Qe,sa),e(sa,Bk),e(sa,El),e(El,Kk),e(sa,Vk),e(Qe,Jk),e(Qe,aa),e(aa,Gk),e(aa,ia),e(ia,Xk),e(aa,Yk),e(Qe,Zk),T(Un,Qe,null),e(Qe,eF),e(Qe,wo),T(la,wo,null),e(wo,oF),e(wo,Et),e(Et,tF),e(Et,zl),e(zl,nF),e(Et,rF),e(Et,yc),e(yc,sF),e(Et,aF),e(wo,iF),T(Qn,wo,null),e(wo,lF),T(Hn,wo,null),k(t,ch,F),k(t,zt,F),e(zt,Bn),e(Bn,Tc),T(da,Tc,null),e(zt,dF),e(zt,wc),e(wc,cF),k(t,ph,F),k(t,He,F),T(ca,He,null),e(He,pF),e(He,pa),e(pa,mF),e(pa,$c),e($c,hF),e(pa,fF),e(He,uF),e(He,ma),e(ma,gF),e(ma,jl),e(jl,_F),e(ma,kF),e(He,FF),e(He,ha),e(ha,vF),e(ha,fa),e(fa,bF),e(ha,yF),e(He,TF),T(Kn,He,null),e(He,wF),e(He,no),T(ua,no,null),e(no,$F),e(no,jt),e(jt,xF),e(jt,Cl),e(Cl,RF),e(jt,MF),e(jt,xc),e(xc,EF),e(jt,zF),e(no,jF),T(Vn,no,null),e(no,CF),T(Jn,no,null),e(no,qF),T(Gn,no,null),k(t,mh,F),k(t,Ct,F),e(Ct,Xn),e(Xn,Rc),T(ga,Rc,null),e(Ct,PF),e(Ct,Mc),e(Mc,AF),k(t,hh,F),k(t,Be,F),T(_a,Be,null),e(Be,LF),e(Be,ka),e(ka,IF),e(ka,Ec),e(Ec,DF),e(ka,NF),e(Be,SF),e(Be,Fa),e(Fa,OF),e(Fa,ql),e(ql,WF),e(Fa,UF),e(Be,QF),e(Be,va),e(va,HF),e(va,ba),e(ba,BF),e(va,KF),e(Be,VF),T(Yn,Be,null),e(Be,JF),e(Be,Yo),T(ya,Yo,null),e(Yo,GF),e(Yo,Ye),e(Ye,XF),e(Ye,zc),e(zc,YF),e(Ye,ZF),e(Ye,jc),e(jc,ev),e(Ye,ov),e(Ye,Cc),e(Cc,tv),e(Ye,nv),e(Ye,qc),e(qc,rv),e(Ye,sv),e(Ye,Pc),e(Pc,av),e(Ye,iv),e(Yo,lv),T(Zn,Yo,null),k(t,fh,F),k(t,qt,F),e(qt,er),e(er,Ac),T(Ta,Ac,null),e(qt,dv),e(qt,Lc),e(Lc,cv),k(t,uh,F),k(t,Ke,F),T(wa,Ke,null),e(Ke,pv),e(Ke,Ic),e(Ic,mv),e(Ke,hv),e(Ke,$a),e($a,fv),e($a,Pl),e(Pl,uv),e($a,gv),e(Ke,_v),e(Ke,xa),e(xa,kv),e(xa,Ra),e(Ra,Fv),e(xa,vv),e(Ke,bv),T(or,Ke,null),e(Ke,yv),e(Ke,ro),T(Ma,ro,null),e(ro,Tv),e(ro,Pt),e(Pt,wv),e(Pt,Al),e(Al,$v),e(Pt,xv),e(Pt,Dc),e(Dc,Rv),e(Pt,Mv),e(ro,Ev),T(tr,ro,null),e(ro,zv),T(nr,ro,null),e(ro,jv),T(rr,ro,null),k(t,gh,F),k(t,At,F),e(At,sr),e(sr,Nc),T(Ea,Nc,null),e(At,Cv),e(At,Sc),e(Sc,qv),k(t,_h,F),k(t,Ve,F),T(za,Ve,null),e(Ve,Pv),e(Ve,Oc),e(Oc,Av),e(Ve,Lv),e(Ve,ja),e(ja,Iv),e(ja,Ll),e(Ll,Dv),e(ja,Nv),e(Ve,Sv),e(Ve,Ca),e(Ca,Ov),e(Ca,qa),e(qa,Wv),e(Ca,Uv),e(Ve,Qv),T(ar,Ve,null),e(Ve,Hv),e(Ve,$o),T(Pa,$o,null),e($o,Bv),e($o,Lt),e(Lt,Kv),e(Lt,Il),e(Il,Vv),e(Lt,Jv),e(Lt,Wc),e(Wc,Gv),e(Lt,Xv),e($o,Yv),T(ir,$o,null),e($o,Zv),T(lr,$o,null),k(t,kh,F),k(t,It,F),e(It,dr),e(dr,Uc),T(Aa,Uc,null),e(It,eb),e(It,Qc),e(Qc,ob),k(t,Fh,F),k(t,Je,F),T(La,Je,null),e(Je,tb),e(Je,Hc),e(Hc,nb),e(Je,rb),e(Je,Ia),e(Ia,sb),e(Ia,Dl),e(Dl,ab),e(Ia,ib),e(Je,lb),e(Je,Da),e(Da,db),e(Da,Na),e(Na,cb),e(Da,pb),e(Je,mb),T(cr,Je,null),e(Je,hb),e(Je,so),T(Sa,so,null),e(so,fb),e(so,Dt),e(Dt,ub),e(Dt,Nl),e(Nl,gb),e(Dt,_b),e(Dt,Bc),e(Bc,kb),e(Dt,Fb),e(so,vb),T(pr,so,null),e(so,bb),T(mr,so,null),e(so,yb),T(hr,so,null),k(t,vh,F),k(t,Nt,F),e(Nt,fr),e(fr,Kc),T(Oa,Kc,null),e(Nt,Tb),e(Nt,Vc),e(Vc,wb),k(t,bh,F),k(t,Ge,F),T(Wa,Ge,null),e(Ge,$b),e(Ge,St),e(St,xb),e(St,Jc),e(Jc,Rb),e(St,Mb),e(St,Gc),e(Gc,Eb),e(St,zb),e(Ge,jb),e(Ge,Ua),e(Ua,Cb),e(Ua,Sl),e(Sl,qb),e(Ua,Pb),e(Ge,Ab),e(Ge,Qa),e(Qa,Lb),e(Qa,Ha),e(Ha,Ib),e(Qa,Db),e(Ge,Nb),T(ur,Ge,null),e(Ge,Sb),e(Ge,ao),T(Ba,ao,null),e(ao,Ob),e(ao,Ot),e(Ot,Wb),e(Ot,Ol),e(Ol,Ub),e(Ot,Qb),e(Ot,Xc),e(Xc,Hb),e(Ot,Bb),e(ao,Kb),T(gr,ao,null),e(ao,Vb),T(_r,ao,null),e(ao,Jb),T(kr,ao,null),k(t,yh,F),k(t,Wt,F),e(Wt,Fr),e(Fr,Yc),T(Ka,Yc,null),e(Wt,Gb),e(Wt,Zc),e(Zc,Xb),k(t,Th,F),k(t,Pe,F),T(Va,Pe,null),e(Pe,Yb),e(Pe,ep),e(ep,Zb),e(Pe,ey),e(Pe,Ja),e(Ja,oy),e(Ja,Wl),e(Wl,ty),e(Ja,ny),e(Pe,ry),e(Pe,Ga),e(Ga,sy),e(Ga,Xa),e(Xa,ay),e(Ga,iy),e(Pe,ly),e(Pe,op),e(op,dy),e(Pe,cy),e(Pe,Wo),e(Wo,tp),e(tp,Ya),e(Ya,py),e(Wo,my),e(Wo,np),e(np,Za),e(Za,hy),e(Wo,fy),e(Wo,rp),e(rp,ei),e(ei,uy),e(Wo,gy),e(Wo,sp),e(sp,oi),e(oi,_y),e(Pe,ky),e(Pe,xo),T(ti,xo,null),e(xo,Fy),e(xo,Ut),e(Ut,vy),e(Ut,ap),e(ap,by),e(Ut,yy),e(Ut,ip),e(ip,Ty),e(Ut,wy),e(xo,$y),T(vr,xo,null),e(xo,xy),T(br,xo,null),k(t,wh,F),k(t,Qt,F),e(Qt,yr),e(yr,lp),T(ni,lp,null),e(Qt,Ry),e(Qt,dp),e(dp,My),k(t,$h,F),k(t,Ae,F),T(ri,Ae,null),e(Ae,Ey),e(Ae,si),e(si,zy),e(si,cp),e(cp,jy),e(si,Cy),e(Ae,qy),e(Ae,ai),e(ai,Py),e(ai,Ul),e(Ul,Ay),e(ai,Ly),e(Ae,Iy),e(Ae,ii),e(ii,Dy),e(ii,li),e(li,Ny),e(ii,Sy),e(Ae,Oy),e(Ae,pp),e(pp,Wy),e(Ae,Uy),e(Ae,Uo),e(Uo,mp),e(mp,di),e(di,Qy),e(Uo,Hy),e(Uo,hp),e(hp,ci),e(ci,By),e(Uo,Ky),e(Uo,fp),e(fp,pi),e(pi,Vy),e(Uo,Jy),e(Uo,up),e(up,mi),e(mi,Gy),e(Ae,Xy),e(Ae,Ro),T(hi,Ro,null),e(Ro,Yy),e(Ro,Ht),e(Ht,Zy),e(Ht,gp),e(gp,eT),e(Ht,oT),e(Ht,_p),e(_p,tT),e(Ht,nT),e(Ro,rT),T(Tr,Ro,null),e(Ro,sT),T(wr,Ro,null),k(t,xh,F),k(t,Bt,F),e(Bt,$r),e($r,kp),T(fi,kp,null),e(Bt,aT),e(Bt,Fp),e(Fp,iT),k(t,Rh,F),k(t,Le,F),T(ui,Le,null),e(Le,lT),e(Le,vp),e(vp,dT),e(Le,cT),e(Le,gi),e(gi,pT),e(gi,Ql),e(Ql,mT),e(gi,hT),e(Le,fT),e(Le,_i),e(_i,uT),e(_i,ki),e(ki,gT),e(_i,_T),e(Le,kT),e(Le,bp),e(bp,FT),e(Le,vT),e(Le,Qo),e(Qo,yp),e(yp,Fi),e(Fi,bT),e(Qo,yT),e(Qo,Tp),e(Tp,vi),e(vi,TT),e(Qo,wT),e(Qo,wp),e(wp,bi),e(bi,$T),e(Qo,xT),e(Qo,$p),e($p,yi),e(yi,RT),e(Le,MT),e(Le,Mo),T(Ti,Mo,null),e(Mo,ET),e(Mo,Kt),e(Kt,zT),e(Kt,xp),e(xp,jT),e(Kt,CT),e(Kt,Rp),e(Rp,qT),e(Kt,PT),e(Mo,AT),T(xr,Mo,null),e(Mo,LT),T(Rr,Mo,null),k(t,Mh,F),k(t,Vt,F),e(Vt,Mr),e(Mr,Mp),T(wi,Mp,null),e(Vt,IT),e(Vt,Ep),e(Ep,DT),k(t,Eh,F),k(t,Ie,F),T($i,Ie,null),e(Ie,NT),e(Ie,zp),e(zp,ST),e(Ie,OT),e(Ie,xi),e(xi,WT),e(xi,Hl),e(Hl,UT),e(xi,QT),e(Ie,HT),e(Ie,Ri),e(Ri,BT),e(Ri,Mi),e(Mi,KT),e(Ri,VT),e(Ie,JT),e(Ie,jp),e(jp,GT),e(Ie,XT),e(Ie,Ho),e(Ho,Cp),e(Cp,Ei),e(Ei,YT),e(Ho,ZT),e(Ho,qp),e(qp,zi),e(zi,ew),e(Ho,ow),e(Ho,Pp),e(Pp,ji),e(ji,tw),e(Ho,nw),e(Ho,Ap),e(Ap,Ci),e(Ci,rw),e(Ie,sw),e(Ie,Eo),T(qi,Eo,null),e(Eo,aw),e(Eo,Jt),e(Jt,iw),e(Jt,Lp),e(Lp,lw),e(Jt,dw),e(Jt,Ip),e(Ip,cw),e(Jt,pw),e(Eo,mw),T(Er,Eo,null),e(Eo,hw),T(zr,Eo,null),k(t,zh,F),k(t,Gt,F),e(Gt,jr),e(jr,Dp),T(Pi,Dp,null),e(Gt,fw),e(Gt,Np),e(Np,uw),k(t,jh,F),k(t,De,F),T(Ai,De,null),e(De,gw),e(De,Sp),e(Sp,_w),e(De,kw),e(De,Li),e(Li,Fw),e(Li,Bl),e(Bl,vw),e(Li,bw),e(De,yw),e(De,Ii),e(Ii,Tw),e(Ii,Di),e(Di,ww),e(Ii,$w),e(De,xw),e(De,Op),e(Op,Rw),e(De,Mw),e(De,Bo),e(Bo,Wp),e(Wp,Ni),e(Ni,Ew),e(Bo,zw),e(Bo,Up),e(Up,Si),e(Si,jw),e(Bo,Cw),e(Bo,Qp),e(Qp,Oi),e(Oi,qw),e(Bo,Pw),e(Bo,Hp),e(Hp,Wi),e(Wi,Aw),e(De,Lw),e(De,zo),T(Ui,zo,null),e(zo,Iw),e(zo,Xt),e(Xt,Dw),e(Xt,Bp),e(Bp,Nw),e(Xt,Sw),e(Xt,Kp),e(Kp,Ow),e(Xt,Ww),e(zo,Uw),T(Cr,zo,null),e(zo,Qw),T(qr,zo,null),k(t,Ch,F),k(t,Yt,F),e(Yt,Pr),e(Pr,Vp),T(Qi,Vp,null),e(Yt,Hw),e(Yt,Jp),e(Jp,Bw),k(t,qh,F),k(t,Ne,F),T(Hi,Ne,null),e(Ne,Kw),e(Ne,Zt),e(Zt,Vw),e(Zt,Gp),e(Gp,Jw),e(Zt,Gw),e(Zt,Xp),e(Xp,Xw),e(Zt,Yw),e(Ne,Zw),e(Ne,Bi),e(Bi,e1),e(Bi,Kl),e(Kl,o1),e(Bi,t1),e(Ne,n1),e(Ne,Ki),e(Ki,r1),e(Ki,Vi),e(Vi,s1),e(Ki,a1),e(Ne,i1),e(Ne,Yp),e(Yp,l1),e(Ne,d1),e(Ne,Ko),e(Ko,Zp),e(Zp,Ji),e(Ji,c1),e(Ko,p1),e(Ko,em),e(em,Gi),e(Gi,m1),e(Ko,h1),e(Ko,om),e(om,Xi),e(Xi,f1),e(Ko,u1),e(Ko,tm),e(tm,Yi),e(Yi,g1),e(Ne,_1),e(Ne,jo),T(Zi,jo,null),e(jo,k1),e(jo,en),e(en,F1),e(en,nm),e(nm,v1),e(en,b1),e(en,rm),e(rm,y1),e(en,T1),e(jo,w1),T(Ar,jo,null),e(jo,$1),T(Lr,jo,null),Ph=!0},p(t,[F]){const el={};F&2&&(el.$$scope={dirty:F,ctx:t}),an.$set(el);const sm={};F&2&&(sm.$$scope={dirty:F,ctx:t}),dn.$set(sm);const am={};F&2&&(am.$$scope={dirty:F,ctx:t}),pn.$set(am);const im={};F&2&&(im.$$scope={dirty:F,ctx:t}),fn.$set(im);const ol={};F&2&&(ol.$$scope={dirty:F,ctx:t}),gn.$set(ol);const lm={};F&2&&(lm.$$scope={dirty:F,ctx:t}),_n.$set(lm);const dm={};F&2&&(dm.$$scope={dirty:F,ctx:t}),Fn.$set(dm);const cm={};F&2&&(cm.$$scope={dirty:F,ctx:t}),vn.$set(cm);const tl={};F&2&&(tl.$$scope={dirty:F,ctx:t}),yn.$set(tl);const pm={};F&2&&(pm.$$scope={dirty:F,ctx:t}),Tn.$set(pm);const mm={};F&2&&(mm.$$scope={dirty:F,ctx:t}),wn.$set(mm);const hm={};F&2&&(hm.$$scope={dirty:F,ctx:t}),xn.$set(hm);const fm={};F&2&&(fm.$$scope={dirty:F,ctx:t}),Rn.$set(fm);const um={};F&2&&(um.$$scope={dirty:F,ctx:t}),Mn.$set(um);const gm={};F&2&&(gm.$$scope={dirty:F,ctx:t}),En.$set(gm);const _m={};F&2&&(_m.$$scope={dirty:F,ctx:t}),zn.$set(_m);const on={};F&2&&(on.$$scope={dirty:F,ctx:t}),Cn.$set(on);const km={};F&2&&(km.$$scope={dirty:F,ctx:t}),qn.$set(km);const Fm={};F&2&&(Fm.$$scope={dirty:F,ctx:t}),An.$set(Fm);const nl={};F&2&&(nl.$$scope={dirty:F,ctx:t}),Ln.$set(nl);const vm={};F&2&&(vm.$$scope={dirty:F,ctx:t}),In.$set(vm);const bm={};F&2&&(bm.$$scope={dirty:F,ctx:t}),Nn.$set(bm);const ym={};F&2&&(ym.$$scope={dirty:F,ctx:t}),Sn.$set(ym);const Vo={};F&2&&(Vo.$$scope={dirty:F,ctx:t}),On.$set(Vo);const tn={};F&2&&(tn.$$scope={dirty:F,ctx:t}),Un.$set(tn);const Tm={};F&2&&(Tm.$$scope={dirty:F,ctx:t}),Qn.$set(Tm);const wm={};F&2&&(wm.$$scope={dirty:F,ctx:t}),Hn.$set(wm);const nn={};F&2&&(nn.$$scope={dirty:F,ctx:t}),Kn.$set(nn);const $m={};F&2&&($m.$$scope={dirty:F,ctx:t}),Vn.$set($m);const xm={};F&2&&(xm.$$scope={dirty:F,ctx:t}),Jn.$set(xm);const rl={};F&2&&(rl.$$scope={dirty:F,ctx:t}),Gn.$set(rl);const Rm={};F&2&&(Rm.$$scope={dirty:F,ctx:t}),Yn.$set(Rm);const Mm={};F&2&&(Mm.$$scope={dirty:F,ctx:t}),Zn.$set(Mm);const Em={};F&2&&(Em.$$scope={dirty:F,ctx:t}),or.$set(Em);const Se={};F&2&&(Se.$$scope={dirty:F,ctx:t}),tr.$set(Se);const sl={};F&2&&(sl.$$scope={dirty:F,ctx:t}),nr.$set(sl);const zm={};F&2&&(zm.$$scope={dirty:F,ctx:t}),rr.$set(zm);const al={};F&2&&(al.$$scope={dirty:F,ctx:t}),ar.$set(al);const jm={};F&2&&(jm.$$scope={dirty:F,ctx:t}),ir.$set(jm);const rn={};F&2&&(rn.$$scope={dirty:F,ctx:t}),lr.$set(rn);const Cm={};F&2&&(Cm.$$scope={dirty:F,ctx:t}),cr.$set(Cm);const il={};F&2&&(il.$$scope={dirty:F,ctx:t}),pr.$set(il);const Vl={};F&2&&(Vl.$$scope={dirty:F,ctx:t}),mr.$set(Vl);const qm={};F&2&&(qm.$$scope={dirty:F,ctx:t}),hr.$set(qm);const Jl={};F&2&&(Jl.$$scope={dirty:F,ctx:t}),ur.$set(Jl);const Pm={};F&2&&(Pm.$$scope={dirty:F,ctx:t}),gr.$set(Pm);const ll={};F&2&&(ll.$$scope={dirty:F,ctx:t}),_r.$set(ll);const dl={};F&2&&(dl.$$scope={dirty:F,ctx:t}),kr.$set(dl);const Am={};F&2&&(Am.$$scope={dirty:F,ctx:t}),vr.$set(Am);const Jo={};F&2&&(Jo.$$scope={dirty:F,ctx:t}),br.$set(Jo);const Lm={};F&2&&(Lm.$$scope={dirty:F,ctx:t}),Tr.$set(Lm);const sn={};F&2&&(sn.$$scope={dirty:F,ctx:t}),wr.$set(sn);const Im={};F&2&&(Im.$$scope={dirty:F,ctx:t}),xr.$set(Im);const Dm={};F&2&&(Dm.$$scope={dirty:F,ctx:t}),Rr.$set(Dm);const Nm={};F&2&&(Nm.$$scope={dirty:F,ctx:t}),Er.$set(Nm);const cl={};F&2&&(cl.$$scope={dirty:F,ctx:t}),zr.$set(cl);const Sm={};F&2&&(Sm.$$scope={dirty:F,ctx:t}),Cr.$set(Sm);const Om={};F&2&&(Om.$$scope={dirty:F,ctx:t}),qr.$set(Om);const Wm={};F&2&&(Wm.$$scope={dirty:F,ctx:t}),Ar.$set(Wm);const Ze={};F&2&&(Ze.$$scope={dirty:F,ctx:t}),Lr.$set(Ze)},i(t){Ph||(w(l.$$.fragment,t),w(ee.$$.fragment,t),w(we.$$.fragment,t),w(D.$$.fragment,t),w(an.$$.fragment,t),w(ss.$$.fragment,t),w(as.$$.fragment,t),w(dn.$$.fragment,t),w(cs.$$.fragment,t),w(ms.$$.fragment,t),w(fs.$$.fragment,t),w(pn.$$.fragment,t),w(us.$$.fragment,t),w(gs.$$.fragment,t),w(_s.$$.fragment,t),w(fn.$$.fragment,t),w(vs.$$.fragment,t),w(ys.$$.fragment,t),w(Ts.$$.fragment,t),w(Ms.$$.fragment,t),w(gn.$$.fragment,t),w(_n.$$.fragment,t),w(Es.$$.fragment,t),w(zs.$$.fragment,t),w(Cs.$$.fragment,t),w(Fn.$$.fragment,t),w(vn.$$.fragment,t),w(qs.$$.fragment,t),w(Ps.$$.fragment,t),w(Ls.$$.fragment,t),w(yn.$$.fragment,t),w(Tn.$$.fragment,t),w(wn.$$.fragment,t),w(Is.$$.fragment,t),w(Ds.$$.fragment,t),w(Os.$$.fragment,t),w(xn.$$.fragment,t),w(Rn.$$.fragment,t),w(Mn.$$.fragment,t),w(En.$$.fragment,t),w(zn.$$.fragment,t),w(Ws.$$.fragment,t),w(Us.$$.fragment,t),w(Bs.$$.fragment,t),w(Cn.$$.fragment,t),w(qn.$$.fragment,t),w(Ks.$$.fragment,t),w(Vs.$$.fragment,t),w(Xs.$$.fragment,t),w(An.$$.fragment,t),w(Ln.$$.fragment,t),w(In.$$.fragment,t),w(Ys.$$.fragment,t),w(Zs.$$.fragment,t),w(ta.$$.fragment,t),w(Nn.$$.fragment,t),w(Sn.$$.fragment,t),w(On.$$.fragment,t),w(na.$$.fragment,t),w(ra.$$.fragment,t),w(Un.$$.fragment,t),w(la.$$.fragment,t),w(Qn.$$.fragment,t),w(Hn.$$.fragment,t),w(da.$$.fragment,t),w(ca.$$.fragment,t),w(Kn.$$.fragment,t),w(ua.$$.fragment,t),w(Vn.$$.fragment,t),w(Jn.$$.fragment,t),w(Gn.$$.fragment,t),w(ga.$$.fragment,t),w(_a.$$.fragment,t),w(Yn.$$.fragment,t),w(ya.$$.fragment,t),w(Zn.$$.fragment,t),w(Ta.$$.fragment,t),w(wa.$$.fragment,t),w(or.$$.fragment,t),w(Ma.$$.fragment,t),w(tr.$$.fragment,t),w(nr.$$.fragment,t),w(rr.$$.fragment,t),w(Ea.$$.fragment,t),w(za.$$.fragment,t),w(ar.$$.fragment,t),w(Pa.$$.fragment,t),w(ir.$$.fragment,t),w(lr.$$.fragment,t),w(Aa.$$.fragment,t),w(La.$$.fragment,t),w(cr.$$.fragment,t),w(Sa.$$.fragment,t),w(pr.$$.fragment,t),w(mr.$$.fragment,t),w(hr.$$.fragment,t),w(Oa.$$.fragment,t),w(Wa.$$.fragment,t),w(ur.$$.fragment,t),w(Ba.$$.fragment,t),w(gr.$$.fragment,t),w(_r.$$.fragment,t),w(kr.$$.fragment,t),w(Ka.$$.fragment,t),w(Va.$$.fragment,t),w(ti.$$.fragment,t),w(vr.$$.fragment,t),w(br.$$.fragment,t),w(ni.$$.fragment,t),w(ri.$$.fragment,t),w(hi.$$.fragment,t),w(Tr.$$.fragment,t),w(wr.$$.fragment,t),w(fi.$$.fragment,t),w(ui.$$.fragment,t),w(Ti.$$.fragment,t),w(xr.$$.fragment,t),w(Rr.$$.fragment,t),w(wi.$$.fragment,t),w($i.$$.fragment,t),w(qi.$$.fragment,t),w(Er.$$.fragment,t),w(zr.$$.fragment,t),w(Pi.$$.fragment,t),w(Ai.$$.fragment,t),w(Ui.$$.fragment,t),w(Cr.$$.fragment,t),w(qr.$$.fragment,t),w(Qi.$$.fragment,t),w(Hi.$$.fragment,t),w(Zi.$$.fragment,t),w(Ar.$$.fragment,t),w(Lr.$$.fragment,t),Ph=!0)},o(t){$(l.$$.fragment,t),$(ee.$$.fragment,t),$(we.$$.fragment,t),$(D.$$.fragment,t),$(an.$$.fragment,t),$(ss.$$.fragment,t),$(as.$$.fragment,t),$(dn.$$.fragment,t),$(cs.$$.fragment,t),$(ms.$$.fragment,t),$(fs.$$.fragment,t),$(pn.$$.fragment,t),$(us.$$.fragment,t),$(gs.$$.fragment,t),$(_s.$$.fragment,t),$(fn.$$.fragment,t),$(vs.$$.fragment,t),$(ys.$$.fragment,t),$(Ts.$$.fragment,t),$(Ms.$$.fragment,t),$(gn.$$.fragment,t),$(_n.$$.fragment,t),$(Es.$$.fragment,t),$(zs.$$.fragment,t),$(Cs.$$.fragment,t),$(Fn.$$.fragment,t),$(vn.$$.fragment,t),$(qs.$$.fragment,t),$(Ps.$$.fragment,t),$(Ls.$$.fragment,t),$(yn.$$.fragment,t),$(Tn.$$.fragment,t),$(wn.$$.fragment,t),$(Is.$$.fragment,t),$(Ds.$$.fragment,t),$(Os.$$.fragment,t),$(xn.$$.fragment,t),$(Rn.$$.fragment,t),$(Mn.$$.fragment,t),$(En.$$.fragment,t),$(zn.$$.fragment,t),$(Ws.$$.fragment,t),$(Us.$$.fragment,t),$(Bs.$$.fragment,t),$(Cn.$$.fragment,t),$(qn.$$.fragment,t),$(Ks.$$.fragment,t),$(Vs.$$.fragment,t),$(Xs.$$.fragment,t),$(An.$$.fragment,t),$(Ln.$$.fragment,t),$(In.$$.fragment,t),$(Ys.$$.fragment,t),$(Zs.$$.fragment,t),$(ta.$$.fragment,t),$(Nn.$$.fragment,t),$(Sn.$$.fragment,t),$(On.$$.fragment,t),$(na.$$.fragment,t),$(ra.$$.fragment,t),$(Un.$$.fragment,t),$(la.$$.fragment,t),$(Qn.$$.fragment,t),$(Hn.$$.fragment,t),$(da.$$.fragment,t),$(ca.$$.fragment,t),$(Kn.$$.fragment,t),$(ua.$$.fragment,t),$(Vn.$$.fragment,t),$(Jn.$$.fragment,t),$(Gn.$$.fragment,t),$(ga.$$.fragment,t),$(_a.$$.fragment,t),$(Yn.$$.fragment,t),$(ya.$$.fragment,t),$(Zn.$$.fragment,t),$(Ta.$$.fragment,t),$(wa.$$.fragment,t),$(or.$$.fragment,t),$(Ma.$$.fragment,t),$(tr.$$.fragment,t),$(nr.$$.fragment,t),$(rr.$$.fragment,t),$(Ea.$$.fragment,t),$(za.$$.fragment,t),$(ar.$$.fragment,t),$(Pa.$$.fragment,t),$(ir.$$.fragment,t),$(lr.$$.fragment,t),$(Aa.$$.fragment,t),$(La.$$.fragment,t),$(cr.$$.fragment,t),$(Sa.$$.fragment,t),$(pr.$$.fragment,t),$(mr.$$.fragment,t),$(hr.$$.fragment,t),$(Oa.$$.fragment,t),$(Wa.$$.fragment,t),$(ur.$$.fragment,t),$(Ba.$$.fragment,t),$(gr.$$.fragment,t),$(_r.$$.fragment,t),$(kr.$$.fragment,t),$(Ka.$$.fragment,t),$(Va.$$.fragment,t),$(ti.$$.fragment,t),$(vr.$$.fragment,t),$(br.$$.fragment,t),$(ni.$$.fragment,t),$(ri.$$.fragment,t),$(hi.$$.fragment,t),$(Tr.$$.fragment,t),$(wr.$$.fragment,t),$(fi.$$.fragment,t),$(ui.$$.fragment,t),$(Ti.$$.fragment,t),$(xr.$$.fragment,t),$(Rr.$$.fragment,t),$(wi.$$.fragment,t),$($i.$$.fragment,t),$(qi.$$.fragment,t),$(Er.$$.fragment,t),$(zr.$$.fragment,t),$(Pi.$$.fragment,t),$(Ai.$$.fragment,t),$(Ui.$$.fragment,t),$(Cr.$$.fragment,t),$(qr.$$.fragment,t),$(Qi.$$.fragment,t),$(Hi.$$.fragment,t),$(Zi.$$.fragment,t),$(Ar.$$.fragment,t),$(Lr.$$.fragment,t),Ph=!1},d(t){o(d),t&&o(g),t&&o(c),x(l),t&&o(J),t&&o(z),x(ee),t&&o(pe),t&&o(V),t&&o(q),t&&o(ne),t&&o(me),t&&o(re),t&&o(he),t&&o(C),t&&o(U),t&&o(se),t&&o(fe),t&&o(X),t&&o(Me),t&&o(ye),x(we),t&&o(Ee),t&&o(ae),x(D),x(an),t&&o(Qm),t&&o(lt),x(ss),t&&o(Hm),t&&o(qe),x(as),x(dn),x(cs),x(ms),x(fs),x(pn),x(us),t&&o(Bm),t&&o(ct),x(gs),t&&o(Km),t&&o(We),x(_s),x(fn),x(vs),t&&o(Vm),t&&o(pt),x(ys),t&&o(Jm),t&&o(Xe),x(Ts),x(Ms),x(gn),x(_n),t&&o(Gm),t&&o(ht),x(Es),t&&o(Xm),t&&o(So),x(zs),x(Cs),x(Fn),x(vn),t&&o(Ym),t&&o(gt),x(qs),t&&o(Zm),t&&o(Oo),x(Ps),x(Ls),x(yn),x(Tn),x(wn),t&&o(eh),t&&o(Ft),x(Is),t&&o(oh),t&&o(go),x(Ds),x(Os),x(xn),x(Rn),x(Mn),x(En),x(zn),t&&o(th),t&&o(bt),x(Ws),t&&o(nh),t&&o(_o),x(Us),x(Bs),x(Cn),x(qn),t&&o(rh),t&&o(Tt),x(Ks),t&&o(sh),t&&o(ko),x(Vs),x(Xs),x(An),x(Ln),x(In),t&&o(ah),t&&o($t),x(Ys),t&&o(ih),t&&o(Fo),x(Zs),x(ta),x(Nn),x(Sn),x(On),t&&o(lh),t&&o(Mt),x(na),t&&o(dh),t&&o(Qe),x(ra),x(Un),x(la),x(Qn),x(Hn),t&&o(ch),t&&o(zt),x(da),t&&o(ph),t&&o(He),x(ca),x(Kn),x(ua),x(Vn),x(Jn),x(Gn),t&&o(mh),t&&o(Ct),x(ga),t&&o(hh),t&&o(Be),x(_a),x(Yn),x(ya),x(Zn),t&&o(fh),t&&o(qt),x(Ta),t&&o(uh),t&&o(Ke),x(wa),x(or),x(Ma),x(tr),x(nr),x(rr),t&&o(gh),t&&o(At),x(Ea),t&&o(_h),t&&o(Ve),x(za),x(ar),x(Pa),x(ir),x(lr),t&&o(kh),t&&o(It),x(Aa),t&&o(Fh),t&&o(Je),x(La),x(cr),x(Sa),x(pr),x(mr),x(hr),t&&o(vh),t&&o(Nt),x(Oa),t&&o(bh),t&&o(Ge),x(Wa),x(ur),x(Ba),x(gr),x(_r),x(kr),t&&o(yh),t&&o(Wt),x(Ka),t&&o(Th),t&&o(Pe),x(Va),x(ti),x(vr),x(br),t&&o(wh),t&&o(Qt),x(ni),t&&o($h),t&&o(Ae),x(ri),x(hi),x(Tr),x(wr),t&&o(xh),t&&o(Bt),x(fi),t&&o(Rh),t&&o(Le),x(ui),x(Ti),x(xr),x(Rr),t&&o(Mh),t&&o(Vt),x(wi),t&&o(Eh),t&&o(Ie),x($i),x(qi),x(Er),x(zr),t&&o(zh),t&&o(Gt),x(Pi),t&&o(jh),t&&o(De),x(Ai),x(Ui),x(Cr),x(qr),t&&o(Ch),t&&o(Yt),x(Qi),t&&o(qh),t&&o(Ne),x(Hi),x(Zi),x(Ar),x(Lr)}}}const GR={local:"roformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.RoFormerConfig",title:"RoFormerConfig"},{local:"transformers.RoFormerTokenizer",title:"RoFormerTokenizer"},{local:"transformers.RoFormerTokenizerFast",title:"RoFormerTokenizerFast"},{local:"transformers.RoFormerModel",title:"RoFormerModel"},{local:"transformers.RoFormerForCausalLM",title:"RoFormerForCausalLM"},{local:"transformers.RoFormerForMaskedLM",title:"RoFormerForMaskedLM"},{local:"transformers.RoFormerForSequenceClassification",title:"RoFormerForSequenceClassification"},{local:"transformers.RoFormerForMultipleChoice",title:"RoFormerForMultipleChoice"},{local:"transformers.RoFormerForTokenClassification",title:"RoFormerForTokenClassification"},{local:"transformers.RoFormerForQuestionAnswering",title:"RoFormerForQuestionAnswering"},{local:"transformers.TFRoFormerModel",title:"TFRoFormerModel"},{local:"transformers.TFRoFormerForMaskedLM",title:"TFRoFormerForMaskedLM"},{local:"transformers.TFRoFormerForCausalLM",title:"TFRoFormerForCausalLM"},{local:"transformers.TFRoFormerForSequenceClassification",title:"TFRoFormerForSequenceClassification"},{local:"transformers.TFRoFormerForMultipleChoice",title:"TFRoFormerForMultipleChoice"},{local:"transformers.TFRoFormerForTokenClassification",title:"TFRoFormerForTokenClassification"},{local:"transformers.TFRoFormerForQuestionAnswering",title:"TFRoFormerForQuestionAnswering"},{local:"transformers.FlaxRoFormerModel",title:"FlaxRoFormerModel"},{local:"transformers.FlaxRoFormerForMaskedLM",title:"FlaxRoFormerForMaskedLM"},{local:"transformers.FlaxRoFormerForSequenceClassification",title:"FlaxRoFormerForSequenceClassification"},{local:"transformers.FlaxRoFormerForMultipleChoice",title:"FlaxRoFormerForMultipleChoice"},{local:"transformers.FlaxRoFormerForTokenClassification",title:"FlaxRoFormerForTokenClassification"},{local:"transformers.FlaxRoFormerForQuestionAnswering",title:"FlaxRoFormerForQuestionAnswering"}],title:"RoFormer"};function XR(R){return Wx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rM extends Dx{constructor(d){super();Nx(this,d,XR,JR,Sx,{})}}export{rM as default,GR as metadata};
