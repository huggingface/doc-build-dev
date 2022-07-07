import{S as Mc,i as Cc,s as zc,e as s,k as u,w as k,t as l,M as Ec,c as a,d as o,m as f,a as r,x as $,h as i,b as p,G as e,g as v,y,q as w,o as T,B,v as jc,L as ee}from"../../chunks/vendor-hf-doc-builder.js";import{T as vt}from"../../chunks/Tip-hf-doc-builder.js";import{D as U}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Z}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function qc(x){let d,g,c,m,b;return m=new oe({props:{code:`from transformers import BloomModel, BloomConfig

# Initializing a Bloom configuration
configuration = BloomConfig()

# Initializing a model from the configuration
model = BloomModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomModel, BloomConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bloom configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BloomConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=l("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Pc(x){let d,g,c,m,b;return{c(){d=s("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var F=r(c);m=i(F,"Module"),F.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){v(n,d,h),e(d,g),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Lc(x){let d,g,c,m,b;return m=new oe({props:{code:`from transformers import BloomTokenizerFast, BloomModel
import torch

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/Bloom")
model = BloomModel.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=l("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Ac(x){let d,g,c,m,b;return m=new oe({props:{code:`from transformers import BloomTokenizerFast
tokenizer = BloomTokenizerFast.from_pretrained("bigscience/bloom")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=s("p"),g=l("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Sc(x){let d,g,c,m,b,n,h,F;return{c(){d=s("p"),g=l("When used with "),c=s("code"),m=l("is_split_into_words=True"),b=l(", this tokenizer needs to be instantiated with "),n=s("code"),h=l("add_prefix_space=True"),F=l(".")},l(pe){d=a(pe,"P",{});var V=r(d);g=i(V,"When used with "),c=a(V,"CODE",{});var R=r(c);m=i(R,"is_split_into_words=True"),R.forEach(o),b=i(V,", this tokenizer needs to be instantiated with "),n=a(V,"CODE",{});var te=r(n);h=i(te,"add_prefix_space=True"),te.forEach(o),F=i(V,"."),V.forEach(o)},m(pe,V){v(pe,d,V),e(d,g),e(d,c),e(c,m),e(d,b),e(d,n),e(n,h),e(d,F)},d(pe){pe&&o(d)}}}function Ic(x){let d,g,c,m,b;return{c(){d=s("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var F=r(c);m=i(F,"Module"),F.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){v(n,d,h),e(d,g),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Nc(x){let d,g,c,m,b;return m=new oe({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForCausalLM

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/Bloom")
model = BloomForCausalLM.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=l("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Oc(x){let d,g,c,m,b;return{c(){d=s("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var F=r(c);m=i(F,"Module"),F.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){v(n,d,h),e(d,g),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Dc(x){let d,g,c,m,b;return m=new oe({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForSequenceClassification

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/Bloom")
model = BloomForSequenceClassification.from_pretrained("bigscience/Bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),g=l("Example of single-label classification:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example of single-label classification:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Wc(x){let d,g;return d=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained("bigscience/Bloom", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){y(d,c,m),g=!0},p:ee,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){T(d.$$.fragment,c),g=!1},d(c){B(d,c)}}}function Hc(x){let d,g,c,m,b;return m=new oe({props:{code:`import torch
from transformers import BloomTokenizerFast, BloomForSequenceClassification

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/Bloom")
model = BloomForSequenceClassification.from_pretrained("bigscience/Bloom", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),g=l("Example of multi-label classification:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example of multi-label classification:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Uc(x){let d,g;return d=new oe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BloomForSequenceClassification.from_pretrained(
    "bigscience/Bloom", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bigscience/Bloom&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){y(d,c,m),g=!0},p:ee,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){T(d.$$.fragment,c),g=!1},d(c){B(d,c)}}}function Vc(x){let d,g,c,m,b;return{c(){d=s("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var F=r(c);m=i(F,"Module"),F.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){v(n,d,h),e(d,g),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Jc(x){let d,g,c,m,b;return m=new oe({props:{code:`from transformers import BloomTokenizerFast, BloomForTokenClassification
import torch

tokenizer = BloomTokenizerFast.from_pretrained("bigscience/Bloom")
model = BloomForTokenClassification.from_pretrained("bigscience/Bloom")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast, BloomForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/Bloom&quot;</span>)

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
`}}),{c(){d=s("p"),g=l("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Gc(x){let d,g;return d=new oe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,m){y(d,c,m),g=!0},p:ee,i(c){g||(w(d.$$.fragment,c),g=!0)},o(c){T(d.$$.fragment,c),g=!1},d(c){B(d,c)}}}function Rc(x){let d,g,c,m,b;return{c(){d=s("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var F=r(c);m=i(F,"Module"),F.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){v(n,d,h),e(d,g),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Xc(x){let d,g,c,m,b;return m=new oe({props:{code:`from transformers import BloomTokenizer, FlaxBloomModel

tokenizer = BloomTokenizer.from_pretrained("bigscience/bloom")
model = FlaxBloomModel.from_pretrained("bigscience/bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, FlaxBloomModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=l("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Yc(x){let d,g,c,m,b;return{c(){d=s("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),m=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var F=r(c);m=i(F,"Module"),F.forEach(o),b=i(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){v(n,d,h),e(d,g),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function Kc(x){let d,g,c,m,b;return m=new oe({props:{code:`from transformers import BloomTokenizer, FlaxBloomForCausalLM

tokenizer = BloomTokenizer.from_pretrained("bigscience/bloom")
model = FlaxBloomForCausalLM.from_pretrained("bigscience/bloom")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizer, FlaxBloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),g=l("Example:"),c=u(),k(m.$$.fragment)},l(n){d=a(n,"P",{});var h=r(d);g=i(h,"Example:"),h.forEach(o),c=f(n),$(m.$$.fragment,n)},m(n,h){v(n,d,h),e(d,g),v(n,c,h),y(m,n,h),b=!0},p:ee,i(n){b||(w(m.$$.fragment,n),b=!0)},o(n){T(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),B(m,n)}}}function Qc(x){let d,g,c,m,b,n,h,F,pe,V,R,te,Vt,co,Xs,Jt,Ys,ls,Me,Ks,po,Qs,Zs,is,q,Gt,mo,ea,oa,Rt,ho,ta,na,Xt,uo,sa,aa,Yt,fo,ra,la,Kt,go,ia,da,kt,_o,ca,pa,ds,me,Ce,Qt,bo,ma,Zt,ha,cs,J,vo,ua,he,fa,$t,ga,_a,ko,ba,va,ka,ue,$a,yt,ya,wa,wt,Ta,Ba,xa,ze,ps,fe,Ee,en,$o,Fa,on,Ma,ms,P,yo,Ca,tn,za,Ea,wo,ja,Tt,qa,Pa,La,To,Aa,Bo,Sa,Ia,Na,X,xo,Oa,ge,Da,Bt,Wa,Ha,nn,Ua,Va,Ja,je,Ga,qe,hs,_e,Pe,sn,Fo,Ra,an,Xa,us,M,Mo,Ya,Co,Ka,rn,Qa,Za,er,ln,or,tr,Le,nr,zo,sr,dn,ar,rr,lr,Ae,ir,Eo,dr,xt,cr,pr,fs,be,Se,cn,jo,mr,pn,hr,gs,L,qo,ur,mn,fr,gr,Po,_r,Ft,br,vr,kr,Lo,$r,Ao,yr,wr,Tr,Y,So,Br,ve,xr,Mt,Fr,Mr,hn,Cr,zr,Er,Ie,jr,Ne,_s,ke,Oe,un,Io,qr,fn,Pr,bs,C,No,Lr,gn,Ar,Sr,Ct,zt,Ir,Nr,Or,G,Dr,_n,Wr,Hr,bn,Ur,Vr,vn,Jr,Gr,kn,Rr,Xr,Yr,Oo,Kr,Et,Qr,Zr,el,Do,ol,Wo,tl,nl,sl,j,Ho,al,$e,rl,jt,ll,il,$n,dl,cl,pl,De,ml,We,hl,He,ul,Ue,fl,Ve,vs,ye,Je,yn,Uo,gl,wn,_l,ks,A,Vo,bl,Tn,vl,kl,Jo,$l,qt,yl,wl,Tl,Go,Bl,Ro,xl,Fl,Ml,I,Xo,Cl,we,zl,Pt,El,jl,Bn,ql,Pl,Ll,Ge,Al,Re,Sl,Xe,$s,Te,Ye,xn,Yo,Il,Fn,Nl,ys,z,Ko,Ol,Mn,Dl,Wl,Qo,Hl,Lt,Ul,Vl,Jl,Zo,Gl,et,Rl,Xl,Yl,Cn,Kl,Ql,ne,zn,ot,Zl,ei,En,tt,oi,ti,jn,nt,ni,si,qn,st,ai,ri,K,at,li,Be,ii,Pn,di,ci,Ln,pi,mi,hi,Ke,ui,Qe,ws,xe,Ze,An,rt,fi,Sn,gi,Ts,E,lt,_i,In,bi,vi,it,ki,At,$i,yi,wi,dt,Ti,ct,Bi,xi,Fi,Nn,Mi,Ci,se,On,pt,zi,Ei,Dn,mt,ji,qi,Wn,ht,Pi,Li,Hn,ut,Ai,Si,Q,ft,Ii,Fe,Ni,Un,Oi,Di,Vn,Wi,Hi,Ui,eo,Vi,oo,Bs;return n=new ce({}),co=new ce({}),bo=new ce({}),vo=new U({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"masked_softmax_fusion",val:" = True"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = False"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"attention_softmax_in_fp32",val:" = True"},{name:"pretraining_tp",val:" = 1"},{name:"dtype",val:" = 'bfloat16'"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the Bloom model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomModel">BloomModel</a>.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BloomConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BloomConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.BloomConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.BloomConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.BloomConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BloomConfig.apply_residual_connection_post_layernorm",description:`<strong>apply_residual_connection_post_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If enabled, use the layer norm of the hidden states as the residual in the transformer blocks`,name:"apply_residual_connection_post_layernorm"},{anchor:"transformers.BloomConfig.skip_bias_add",description:`<strong>skip_bias_add</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, it will skip bias add for each linear layer in the transformer blocks`,name:"skip_bias_add"},{anchor:"transformers.BloomConfig.attention_softmax_in_fp32",description:`<strong>attention_softmax_in_fp32</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code> and the <code>dtype</code> is set to <code>float16</code> it will scale the input of the Softmax function to
<code>fp32</code>`,name:"attention_softmax_in_fp32"},{anchor:"transformers.BloomConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate of the dropout function on the bias dropout.`,name:"hidden_dropout"},{anchor:"transformers.BloomConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate applied to the attention probs`,name:"attention_dropout"},{anchor:"transformers.BloomConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BloomConfig.dtype",description:`<strong>dtype</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bfloat16&quot;</code>) &#x2014;
Precision that has been used for the model&#x2019;s training in Megatron. Please load the model in the correct
precision by doing <code>model = BloomModel.from_pretrained(model_name, torch_dtype=&quot;auto&quot;)</code>.\``,name:"dtype"},{anchor:"transformers.BloomConfig.pretraining_tp",description:`<strong>pretraining_tp</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
Experimental feature. Tensor parallelism rank used during pretraining with Megatron. Please refer to <a href="https://huggingface.co/docs/transformers/parallelism" rel="nofollow">this
document</a> to understand more about it. This value is
necessary to ensure exact reproducibility of the pretraining results. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. Note also that this is enabled only when
<code>slow_but_exact=True</code>.`,name:"pretraining_tp"},{anchor:"transformers.BloomConfig.slow_but_exact",description:`<strong>slow_but_exact</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Experimental feature. Whether to use slow but exact implementation of the attention mechanism. While
merging the TP rank tensors, due to slicing operations the results may be slightly different between the
model trained on Megatron and our model. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. A solution to obtain more accurate results is to
enable this feature. Enabling this will hurt the computational time of the inference. Will be probably
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/configuration_bloom.py#L42"}}),ze=new Z({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[qc]},$$scope:{ctx:x}}}),$o=new ce({}),yo=new U({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L680"}}),xo=new U({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18022/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L709",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new vt({props:{$$slots:{default:[Pc]},$$scope:{ctx:x}}}),qe=new Z({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[Lc]},$$scope:{ctx:x}}}),Fo=new ce({}),Mo=new U({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BloomTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BloomTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BloomTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BloomTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.BloomTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BloomTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Bloom tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BloomTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/tokenization_bloom_fast.py#L49"}}),Le=new Z({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[Ac]},$$scope:{ctx:x}}}),Ae=new vt({props:{$$slots:{default:[Sc]},$$scope:{ctx:x}}}),jo=new ce({}),qo=new U({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L843"}}),So=new U({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18022/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new vt({props:{$$slots:{default:[Ic]},$$scope:{ctx:x}}}),Ne=new Z({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[Nc]},$$scope:{ctx:x}}}),Io=new ce({}),No=new U({props:{name:"class transformers.BloomForSequenceClassification",anchor:"transformers.BloomForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L978"}}),Ho=new U({props:{name:"forward",anchor:"transformers.BloomForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18022/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L990",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new vt({props:{$$slots:{default:[Oc]},$$scope:{ctx:x}}}),We=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example",$$slots:{default:[Dc]},$$scope:{ctx:x}}}),He=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-2",$$slots:{default:[Wc]},$$scope:{ctx:x}}}),Ue=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-3",$$slots:{default:[Hc]},$$scope:{ctx:x}}}),Ve=new Z({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-4",$$slots:{default:[Uc]},$$scope:{ctx:x}}}),Uo=new ce({}),Vo=new U({props:{name:"class transformers.BloomForTokenClassification",anchor:"transformers.BloomForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L1099"}}),Xo=new U({props:{name:"forward",anchor:"transformers.BloomForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomTokenizerFast">BloomTokenizerFast</a>. See <a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.BloomForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BloomForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18022/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_bloom.py#L1119",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ge=new vt({props:{$$slots:{default:[Vc]},$$scope:{ctx:x}}}),Re=new Z({props:{anchor:"transformers.BloomForTokenClassification.forward.example",$$slots:{default:[Jc]},$$scope:{ctx:x}}}),Xe=new Z({props:{anchor:"transformers.BloomForTokenClassification.forward.example-2",$$slots:{default:[Gc]},$$scope:{ctx:x}}}),Yo=new ce({}),Ko=new U({props:{name:"class transformers.FlaxBloomModel",anchor:"transformers.FlaxBloomModel",parameters:[{name:"config",val:": BloomConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"use_scan",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBloomModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_flax_bloom.py#L715"}}),at=new U({props:{name:"__call__",anchor:"transformers.FlaxBloomModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"past_key_values",val:": dict = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBloomModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBloomModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBloomModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBloomModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBloomModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBloomModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBloomModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18022/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_flax_bloom.py#L502",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new vt({props:{$$slots:{default:[Rc]},$$scope:{ctx:x}}}),Qe=new Z({props:{anchor:"transformers.FlaxBloomModel.__call__.example",$$slots:{default:[Xc]},$$scope:{ctx:x}}}),rt=new ce({}),lt=new U({props:{name:"class transformers.FlaxBloomForCausalLM",anchor:"transformers.FlaxBloomForCausalLM",parameters:[{name:"config",val:": BloomConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"use_scan",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBloomForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_flax_bloom.py#L779"}}),ft=new U({props:{name:"__call__",anchor:"transformers.FlaxBloomForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"past_key_values",val:": dict = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBloomForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18022/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18022/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18022/src/transformers/models/bloom/modeling_flax_bloom.py#L502",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18022/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new vt({props:{$$slots:{default:[Yc]},$$scope:{ctx:x}}}),oo=new Z({props:{anchor:"transformers.FlaxBloomForCausalLM.__call__.example",$$slots:{default:[Kc]},$$scope:{ctx:x}}}),{c(){d=s("meta"),g=u(),c=s("h1"),m=s("a"),b=s("span"),k(n.$$.fragment),h=u(),F=s("span"),pe=l("BLOOM"),V=u(),R=s("h2"),te=s("a"),Vt=s("span"),k(co.$$.fragment),Xs=u(),Jt=s("span"),Ys=l("Overview"),ls=u(),Me=s("p"),Ks=l("The BLOOM model has been proposed with its various versions through the "),po=s("a"),Qs=l("BigScience Workshop"),Zs=l(`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),is=u(),q=s("ul"),Gt=s("li"),mo=s("a"),ea=l("bloom-350m"),oa=u(),Rt=s("li"),ho=s("a"),ta=l("bloom-760m"),na=u(),Xt=s("li"),uo=s("a"),sa=l("bloom-1b3"),aa=u(),Yt=s("li"),fo=s("a"),ra=l("bloom-2b5"),la=u(),Kt=s("li"),go=s("a"),ia=l("bloom-6b3"),da=u(),kt=s("li"),_o=s("a"),ca=l("bloom"),pa=l(" (175B parameters)"),ds=u(),me=s("h2"),Ce=s("a"),Qt=s("span"),k(bo.$$.fragment),ma=u(),Zt=s("span"),ha=l("BloomConfig"),cs=u(),J=s("div"),k(vo.$$.fragment),ua=u(),he=s("p"),fa=l("This is the configuration class to store the configuration of a "),$t=s("a"),ga=l("BloomModel"),_a=l(`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ko=s("a"),ba=l("bigscience/bloom"),va=l("."),ka=u(),ue=s("p"),$a=l("Configuration objects inherit from "),yt=s("a"),ya=l("PretrainedConfig"),wa=l(` and can be used to control the model outputs. Read the
documentation from `),wt=s("a"),Ta=l("PretrainedConfig"),Ba=l(" for more information."),xa=u(),k(ze.$$.fragment),ps=u(),fe=s("h2"),Ee=s("a"),en=s("span"),k($o.$$.fragment),Fa=u(),on=s("span"),Ma=l("BloomModel"),ms=u(),P=s("div"),k(yo.$$.fragment),Ca=u(),tn=s("p"),za=l("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Ea=u(),wo=s("p"),ja=l("This model inherits from "),Tt=s("a"),qa=l("PreTrainedModel"),Pa=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),La=u(),To=s("p"),Aa=l("This model is also a PyTorch "),Bo=s("a"),Sa=l("torch.nn.Module"),Ia=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Na=u(),X=s("div"),k(xo.$$.fragment),Oa=u(),ge=s("p"),Da=l("The "),Bt=s("a"),Wa=l("BloomModel"),Ha=l(" forward method, overrides the "),nn=s("code"),Ua=l("__call__"),Va=l(" special method."),Ja=u(),k(je.$$.fragment),Ga=u(),k(qe.$$.fragment),hs=u(),_e=s("h2"),Pe=s("a"),sn=s("span"),k(Fo.$$.fragment),Ra=u(),an=s("span"),Xa=l("BloomTokenizerFast"),us=u(),M=s("div"),k(Mo.$$.fragment),Ya=u(),Co=s("p"),Ka=l("Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),rn=s("em"),Qa=l("tokenizers"),Za=l(` library). Based on byte-level
Byte-Pair-Encoding.`),er=u(),ln=s("p"),or=l("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),tr=u(),k(Le.$$.fragment),nr=u(),zo=s("p"),sr=l("You can get around that behavior by passing "),dn=s("code"),ar=l("add_prefix_space=True"),rr=l(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),lr=u(),k(Ae.$$.fragment),ir=u(),Eo=s("p"),dr=l("This tokenizer inherits from "),xt=s("a"),cr=l("PreTrainedTokenizerFast"),pr=l(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fs=u(),be=s("h2"),Se=s("a"),cn=s("span"),k(jo.$$.fragment),mr=u(),pn=s("span"),hr=l("BloomForCausalLM"),gs=u(),L=s("div"),k(qo.$$.fragment),ur=u(),mn=s("p"),fr=l(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),gr=u(),Po=s("p"),_r=l("This model inherits from "),Ft=s("a"),br=l("PreTrainedModel"),vr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),kr=u(),Lo=s("p"),$r=l("This model is also a PyTorch "),Ao=s("a"),yr=l("torch.nn.Module"),wr=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tr=u(),Y=s("div"),k(So.$$.fragment),Br=u(),ve=s("p"),xr=l("The "),Mt=s("a"),Fr=l("BloomForCausalLM"),Mr=l(" forward method, overrides the "),hn=s("code"),Cr=l("__call__"),zr=l(" special method."),Er=u(),k(Ie.$$.fragment),jr=u(),k(Ne.$$.fragment),_s=u(),ke=s("h2"),Oe=s("a"),un=s("span"),k(Io.$$.fragment),qr=u(),fn=s("span"),Pr=l("BloomForSequenceClassification"),bs=u(),C=s("div"),k(No.$$.fragment),Lr=u(),gn=s("p"),Ar=l("The Bloom Model transformer with a sequence classification head on top (linear layer)."),Sr=u(),Ct=s("p"),zt=s("a"),Ir=l("BloomForSequenceClassification"),Nr=l(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Or=u(),G=s("p"),Dr=l(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),_n=s("code"),Wr=l("pad_token_id"),Hr=l(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),bn=s("code"),Ur=l("pad_token_id"),Vr=l(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),vn=s("code"),Jr=l("inputs_embeds"),Gr=l(" are passed instead of "),kn=s("code"),Rr=l("input_ids"),Xr=l(`, it does the same (take the last value in
each row of the batch).`),Yr=u(),Oo=s("p"),Kr=l("This model inherits from "),Et=s("a"),Qr=l("PreTrainedModel"),Zr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),el=u(),Do=s("p"),ol=l("This model is also a PyTorch "),Wo=s("a"),tl=l("torch.nn.Module"),nl=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sl=u(),j=s("div"),k(Ho.$$.fragment),al=u(),$e=s("p"),rl=l("The "),jt=s("a"),ll=l("BloomForSequenceClassification"),il=l(" forward method, overrides the "),$n=s("code"),dl=l("__call__"),cl=l(" special method."),pl=u(),k(De.$$.fragment),ml=u(),k(We.$$.fragment),hl=u(),k(He.$$.fragment),ul=u(),k(Ue.$$.fragment),fl=u(),k(Ve.$$.fragment),vs=u(),ye=s("h2"),Je=s("a"),yn=s("span"),k(Uo.$$.fragment),gl=u(),wn=s("span"),_l=l("BloomForTokenClassification"),ks=u(),A=s("div"),k(Vo.$$.fragment),bl=u(),Tn=s("p"),vl=l(`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),kl=u(),Jo=s("p"),$l=l("This model inherits from "),qt=s("a"),yl=l("PreTrainedModel"),wl=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Tl=u(),Go=s("p"),Bl=l("This model is also a PyTorch "),Ro=s("a"),xl=l("torch.nn.Module"),Fl=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ml=u(),I=s("div"),k(Xo.$$.fragment),Cl=u(),we=s("p"),zl=l("The "),Pt=s("a"),El=l("BloomForTokenClassification"),jl=l(" forward method, overrides the "),Bn=s("code"),ql=l("__call__"),Pl=l(" special method."),Ll=u(),k(Ge.$$.fragment),Al=u(),k(Re.$$.fragment),Sl=u(),k(Xe.$$.fragment),$s=u(),Te=s("h2"),Ye=s("a"),xn=s("span"),k(Yo.$$.fragment),Il=u(),Fn=s("span"),Nl=l("FlaxBloomModel"),ys=u(),z=s("div"),k(Ko.$$.fragment),Ol=u(),Mn=s("p"),Dl=l("The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Wl=u(),Qo=s("p"),Hl=l("This model inherits from "),Lt=s("a"),Ul=l("FlaxPreTrainedModel"),Vl=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jl=u(),Zo=s("p"),Gl=l(`This model is also a Flax Linen
`),et=s("a"),Rl=l("flax.nn.Module"),Xl=l(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Yl=u(),Cn=s("p"),Kl=l("Finally, this model supports inherent JAX features such as:"),Ql=u(),ne=s("ul"),zn=s("li"),ot=s("a"),Zl=l("Just-In-Time (JIT) compilation"),ei=u(),En=s("li"),tt=s("a"),oi=l("Automatic Differentiation"),ti=u(),jn=s("li"),nt=s("a"),ni=l("Vectorization"),si=u(),qn=s("li"),st=s("a"),ai=l("Parallelization"),ri=u(),K=s("div"),k(at.$$.fragment),li=u(),Be=s("p"),ii=l("The "),Pn=s("code"),di=l("FlaxBloomPreTrainedModel"),ci=l(" forward method, overrides the "),Ln=s("code"),pi=l("__call__"),mi=l(" special method."),hi=u(),k(Ke.$$.fragment),ui=u(),k(Qe.$$.fragment),ws=u(),xe=s("h2"),Ze=s("a"),An=s("span"),k(rt.$$.fragment),fi=u(),Sn=s("span"),gi=l("FlaxBloomForCausalLM"),Ts=u(),E=s("div"),k(lt.$$.fragment),_i=u(),In=s("p"),bi=l(`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),vi=u(),it=s("p"),ki=l("This model inherits from "),At=s("a"),$i=l("FlaxPreTrainedModel"),yi=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi=u(),dt=s("p"),Ti=l(`This model is also a Flax Linen
`),ct=s("a"),Bi=l("flax.nn.Module"),xi=l(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fi=u(),Nn=s("p"),Mi=l("Finally, this model supports inherent JAX features such as:"),Ci=u(),se=s("ul"),On=s("li"),pt=s("a"),zi=l("Just-In-Time (JIT) compilation"),Ei=u(),Dn=s("li"),mt=s("a"),ji=l("Automatic Differentiation"),qi=u(),Wn=s("li"),ht=s("a"),Pi=l("Vectorization"),Li=u(),Hn=s("li"),ut=s("a"),Ai=l("Parallelization"),Si=u(),Q=s("div"),k(ft.$$.fragment),Ii=u(),Fe=s("p"),Ni=l("The "),Un=s("code"),Oi=l("FlaxBloomPreTrainedModel"),Di=l(" forward method, overrides the "),Vn=s("code"),Wi=l("__call__"),Hi=l(" special method."),Ui=u(),k(eo.$$.fragment),Vi=u(),k(oo.$$.fragment),this.h()},l(t){const _=Ec('[data-svelte="svelte-1phssyn"]',document.head);d=a(_,"META",{name:!0,content:!0}),_.forEach(o),g=f(t),c=a(t,"H1",{class:!0});var gt=r(c);m=a(gt,"A",{id:!0,class:!0,href:!0});var Jn=r(m);b=a(Jn,"SPAN",{});var Gn=r(b);$(n.$$.fragment,Gn),Gn.forEach(o),Jn.forEach(o),h=f(gt),F=a(gt,"SPAN",{});var Rn=r(F);pe=i(Rn,"BLOOM"),Rn.forEach(o),gt.forEach(o),V=f(t),R=a(t,"H2",{class:!0});var _t=r(R);te=a(_t,"A",{id:!0,class:!0,href:!0});var Xn=r(te);Vt=a(Xn,"SPAN",{});var Yn=r(Vt);$(co.$$.fragment,Yn),Yn.forEach(o),Xn.forEach(o),Xs=f(_t),Jt=a(_t,"SPAN",{});var Kn=r(Jt);Ys=i(Kn,"Overview"),Kn.forEach(o),_t.forEach(o),ls=f(t),Me=a(t,"P",{});var bt=r(Me);Ks=i(bt,"The BLOOM model has been proposed with its various versions through the "),po=a(bt,"A",{href:!0,rel:!0});var Qn=r(po);Qs=i(Qn,"BigScience Workshop"),Qn.forEach(o),Zs=i(bt,`. BigScience is inspired by other open science initiatives where researchers have pooled their time and resources to collectively achieve a higher impact.
The architecture of BLOOM is essentially similar to GPT3 (auto-regressive model for next token prediction), but has been trained on different 46 languages including code.
Several smaller versions of the models have been trained on the same dataset. BLOOM is available in the following versions:`),bt.forEach(o),is=f(t),q=a(t,"UL",{});var S=r(q);Gt=a(S,"LI",{});var Zn=r(Gt);mo=a(Zn,"A",{href:!0,rel:!0});var es=r(mo);ea=i(es,"bloom-350m"),es.forEach(o),Zn.forEach(o),oa=f(S),Rt=a(S,"LI",{});var os=r(Rt);ho=a(os,"A",{href:!0,rel:!0});var ts=r(ho);ta=i(ts,"bloom-760m"),ts.forEach(o),os.forEach(o),na=f(S),Xt=a(S,"LI",{});var ns=r(Xt);uo=a(ns,"A",{href:!0,rel:!0});var ss=r(uo);sa=i(ss,"bloom-1b3"),ss.forEach(o),ns.forEach(o),aa=f(S),Yt=a(S,"LI",{});var as=r(Yt);fo=a(as,"A",{href:!0,rel:!0});var rs=r(fo);ra=i(rs,"bloom-2b5"),rs.forEach(o),as.forEach(o),la=f(S),Kt=a(S,"LI",{});var Ri=r(Kt);go=a(Ri,"A",{href:!0,rel:!0});var Xi=r(go);ia=i(Xi,"bloom-6b3"),Xi.forEach(o),Ri.forEach(o),da=f(S),kt=a(S,"LI",{});var Ji=r(kt);_o=a(Ji,"A",{href:!0,rel:!0});var Yi=r(_o);ca=i(Yi,"bloom"),Yi.forEach(o),pa=i(Ji," (175B parameters)"),Ji.forEach(o),S.forEach(o),ds=f(t),me=a(t,"H2",{class:!0});var xs=r(me);Ce=a(xs,"A",{id:!0,class:!0,href:!0});var Ki=r(Ce);Qt=a(Ki,"SPAN",{});var Qi=r(Qt);$(bo.$$.fragment,Qi),Qi.forEach(o),Ki.forEach(o),ma=f(xs),Zt=a(xs,"SPAN",{});var Zi=r(Zt);ha=i(Zi,"BloomConfig"),Zi.forEach(o),xs.forEach(o),cs=f(t),J=a(t,"DIV",{class:!0});var to=r(J);$(vo.$$.fragment,to),ua=f(to),he=a(to,"P",{});var St=r(he);fa=i(St,"This is the configuration class to store the configuration of a "),$t=a(St,"A",{href:!0});var ed=r($t);ga=i(ed,"BloomModel"),ed.forEach(o),_a=i(St,`. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
`),ko=a(St,"A",{href:!0,rel:!0});var od=r(ko);ba=i(od,"bigscience/bloom"),od.forEach(o),va=i(St,"."),St.forEach(o),ka=f(to),ue=a(to,"P",{});var It=r(ue);$a=i(It,"Configuration objects inherit from "),yt=a(It,"A",{href:!0});var td=r(yt);ya=i(td,"PretrainedConfig"),td.forEach(o),wa=i(It,` and can be used to control the model outputs. Read the
documentation from `),wt=a(It,"A",{href:!0});var nd=r(wt);Ta=i(nd,"PretrainedConfig"),nd.forEach(o),Ba=i(It," for more information."),It.forEach(o),xa=f(to),$(ze.$$.fragment,to),to.forEach(o),ps=f(t),fe=a(t,"H2",{class:!0});var Fs=r(fe);Ee=a(Fs,"A",{id:!0,class:!0,href:!0});var sd=r(Ee);en=a(sd,"SPAN",{});var ad=r(en);$($o.$$.fragment,ad),ad.forEach(o),sd.forEach(o),Fa=f(Fs),on=a(Fs,"SPAN",{});var rd=r(on);Ma=i(rd,"BloomModel"),rd.forEach(o),Fs.forEach(o),ms=f(t),P=a(t,"DIV",{class:!0});var ae=r(P);$(yo.$$.fragment,ae),Ca=f(ae),tn=a(ae,"P",{});var ld=r(tn);za=i(ld,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),ld.forEach(o),Ea=f(ae),wo=a(ae,"P",{});var Ms=r(wo);ja=i(Ms,"This model inherits from "),Tt=a(Ms,"A",{href:!0});var id=r(Tt);qa=i(id,"PreTrainedModel"),id.forEach(o),Pa=i(Ms,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ms.forEach(o),La=f(ae),To=a(ae,"P",{});var Cs=r(To);Aa=i(Cs,"This model is also a PyTorch "),Bo=a(Cs,"A",{href:!0,rel:!0});var dd=r(Bo);Sa=i(dd,"torch.nn.Module"),dd.forEach(o),Ia=i(Cs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cs.forEach(o),Na=f(ae),X=a(ae,"DIV",{class:!0});var no=r(X);$(xo.$$.fragment,no),Oa=f(no),ge=a(no,"P",{});var Nt=r(ge);Da=i(Nt,"The "),Bt=a(Nt,"A",{href:!0});var cd=r(Bt);Wa=i(cd,"BloomModel"),cd.forEach(o),Ha=i(Nt," forward method, overrides the "),nn=a(Nt,"CODE",{});var pd=r(nn);Ua=i(pd,"__call__"),pd.forEach(o),Va=i(Nt," special method."),Nt.forEach(o),Ja=f(no),$(je.$$.fragment,no),Ga=f(no),$(qe.$$.fragment,no),no.forEach(o),ae.forEach(o),hs=f(t),_e=a(t,"H2",{class:!0});var zs=r(_e);Pe=a(zs,"A",{id:!0,class:!0,href:!0});var md=r(Pe);sn=a(md,"SPAN",{});var hd=r(sn);$(Fo.$$.fragment,hd),hd.forEach(o),md.forEach(o),Ra=f(zs),an=a(zs,"SPAN",{});var ud=r(an);Xa=i(ud,"BloomTokenizerFast"),ud.forEach(o),zs.forEach(o),us=f(t),M=a(t,"DIV",{class:!0});var N=r(M);$(Mo.$$.fragment,N),Ya=f(N),Co=a(N,"P",{});var Es=r(Co);Ka=i(Es,"Construct a \u201Cfast\u201D Bloom tokenizer (backed by HuggingFace\u2019s "),rn=a(Es,"EM",{});var fd=r(rn);Qa=i(fd,"tokenizers"),fd.forEach(o),Za=i(Es,` library). Based on byte-level
Byte-Pair-Encoding.`),Es.forEach(o),er=f(N),ln=a(N,"P",{});var gd=r(ln);or=i(gd,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),gd.forEach(o),tr=f(N),$(Le.$$.fragment,N),nr=f(N),zo=a(N,"P",{});var js=r(zo);sr=i(js,"You can get around that behavior by passing "),dn=a(js,"CODE",{});var _d=r(dn);ar=i(_d,"add_prefix_space=True"),_d.forEach(o),rr=i(js,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),js.forEach(o),lr=f(N),$(Ae.$$.fragment,N),ir=f(N),Eo=a(N,"P",{});var qs=r(Eo);dr=i(qs,"This tokenizer inherits from "),xt=a(qs,"A",{href:!0});var bd=r(xt);cr=i(bd,"PreTrainedTokenizerFast"),bd.forEach(o),pr=i(qs,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qs.forEach(o),N.forEach(o),fs=f(t),be=a(t,"H2",{class:!0});var Ps=r(be);Se=a(Ps,"A",{id:!0,class:!0,href:!0});var vd=r(Se);cn=a(vd,"SPAN",{});var kd=r(cn);$(jo.$$.fragment,kd),kd.forEach(o),vd.forEach(o),mr=f(Ps),pn=a(Ps,"SPAN",{});var $d=r(pn);hr=i($d,"BloomForCausalLM"),$d.forEach(o),Ps.forEach(o),gs=f(t),L=a(t,"DIV",{class:!0});var re=r(L);$(qo.$$.fragment,re),ur=f(re),mn=a(re,"P",{});var yd=r(mn);fr=i(yd,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),yd.forEach(o),gr=f(re),Po=a(re,"P",{});var Ls=r(Po);_r=i(Ls,"This model inherits from "),Ft=a(Ls,"A",{href:!0});var wd=r(Ft);br=i(wd,"PreTrainedModel"),wd.forEach(o),vr=i(Ls,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ls.forEach(o),kr=f(re),Lo=a(re,"P",{});var As=r(Lo);$r=i(As,"This model is also a PyTorch "),Ao=a(As,"A",{href:!0,rel:!0});var Td=r(Ao);yr=i(Td,"torch.nn.Module"),Td.forEach(o),wr=i(As,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),As.forEach(o),Tr=f(re),Y=a(re,"DIV",{class:!0});var so=r(Y);$(So.$$.fragment,so),Br=f(so),ve=a(so,"P",{});var Ot=r(ve);xr=i(Ot,"The "),Mt=a(Ot,"A",{href:!0});var Bd=r(Mt);Fr=i(Bd,"BloomForCausalLM"),Bd.forEach(o),Mr=i(Ot," forward method, overrides the "),hn=a(Ot,"CODE",{});var xd=r(hn);Cr=i(xd,"__call__"),xd.forEach(o),zr=i(Ot," special method."),Ot.forEach(o),Er=f(so),$(Ie.$$.fragment,so),jr=f(so),$(Ne.$$.fragment,so),so.forEach(o),re.forEach(o),_s=f(t),ke=a(t,"H2",{class:!0});var Ss=r(ke);Oe=a(Ss,"A",{id:!0,class:!0,href:!0});var Fd=r(Oe);un=a(Fd,"SPAN",{});var Md=r(un);$(Io.$$.fragment,Md),Md.forEach(o),Fd.forEach(o),qr=f(Ss),fn=a(Ss,"SPAN",{});var Cd=r(fn);Pr=i(Cd,"BloomForSequenceClassification"),Cd.forEach(o),Ss.forEach(o),bs=f(t),C=a(t,"DIV",{class:!0});var O=r(C);$(No.$$.fragment,O),Lr=f(O),gn=a(O,"P",{});var zd=r(gn);Ar=i(zd,"The Bloom Model transformer with a sequence classification head on top (linear layer)."),zd.forEach(o),Sr=f(O),Ct=a(O,"P",{});var Gi=r(Ct);zt=a(Gi,"A",{href:!0});var Ed=r(zt);Ir=i(Ed,"BloomForSequenceClassification"),Ed.forEach(o),Nr=i(Gi,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Gi.forEach(o),Or=f(O),G=a(O,"P",{});var le=r(G);Dr=i(le,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),_n=a(le,"CODE",{});var jd=r(_n);Wr=i(jd,"pad_token_id"),jd.forEach(o),Hr=i(le,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),bn=a(le,"CODE",{});var qd=r(bn);Ur=i(qd,"pad_token_id"),qd.forEach(o),Vr=i(le,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),vn=a(le,"CODE",{});var Pd=r(vn);Jr=i(Pd,"inputs_embeds"),Pd.forEach(o),Gr=i(le," are passed instead of "),kn=a(le,"CODE",{});var Ld=r(kn);Rr=i(Ld,"input_ids"),Ld.forEach(o),Xr=i(le,`, it does the same (take the last value in
each row of the batch).`),le.forEach(o),Yr=f(O),Oo=a(O,"P",{});var Is=r(Oo);Kr=i(Is,"This model inherits from "),Et=a(Is,"A",{href:!0});var Ad=r(Et);Qr=i(Ad,"PreTrainedModel"),Ad.forEach(o),Zr=i(Is,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Is.forEach(o),el=f(O),Do=a(O,"P",{});var Ns=r(Do);ol=i(Ns,"This model is also a PyTorch "),Wo=a(Ns,"A",{href:!0,rel:!0});var Sd=r(Wo);tl=i(Sd,"torch.nn.Module"),Sd.forEach(o),nl=i(Ns,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ns.forEach(o),sl=f(O),j=a(O,"DIV",{class:!0});var D=r(j);$(Ho.$$.fragment,D),al=f(D),$e=a(D,"P",{});var Dt=r($e);rl=i(Dt,"The "),jt=a(Dt,"A",{href:!0});var Id=r(jt);ll=i(Id,"BloomForSequenceClassification"),Id.forEach(o),il=i(Dt," forward method, overrides the "),$n=a(Dt,"CODE",{});var Nd=r($n);dl=i(Nd,"__call__"),Nd.forEach(o),cl=i(Dt," special method."),Dt.forEach(o),pl=f(D),$(De.$$.fragment,D),ml=f(D),$(We.$$.fragment,D),hl=f(D),$(He.$$.fragment,D),ul=f(D),$(Ue.$$.fragment,D),fl=f(D),$(Ve.$$.fragment,D),D.forEach(o),O.forEach(o),vs=f(t),ye=a(t,"H2",{class:!0});var Os=r(ye);Je=a(Os,"A",{id:!0,class:!0,href:!0});var Od=r(Je);yn=a(Od,"SPAN",{});var Dd=r(yn);$(Uo.$$.fragment,Dd),Dd.forEach(o),Od.forEach(o),gl=f(Os),wn=a(Os,"SPAN",{});var Wd=r(wn);_l=i(Wd,"BloomForTokenClassification"),Wd.forEach(o),Os.forEach(o),ks=f(t),A=a(t,"DIV",{class:!0});var ie=r(A);$(Vo.$$.fragment,ie),bl=f(ie),Tn=a(ie,"P",{});var Hd=r(Tn);vl=i(Hd,`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Hd.forEach(o),kl=f(ie),Jo=a(ie,"P",{});var Ds=r(Jo);$l=i(Ds,"This model inherits from "),qt=a(Ds,"A",{href:!0});var Ud=r(qt);yl=i(Ud,"PreTrainedModel"),Ud.forEach(o),wl=i(Ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ds.forEach(o),Tl=f(ie),Go=a(ie,"P",{});var Ws=r(Go);Bl=i(Ws,"This model is also a PyTorch "),Ro=a(Ws,"A",{href:!0,rel:!0});var Vd=r(Ro);xl=i(Vd,"torch.nn.Module"),Vd.forEach(o),Fl=i(Ws,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ws.forEach(o),Ml=f(ie),I=a(ie,"DIV",{class:!0});var de=r(I);$(Xo.$$.fragment,de),Cl=f(de),we=a(de,"P",{});var Wt=r(we);zl=i(Wt,"The "),Pt=a(Wt,"A",{href:!0});var Jd=r(Pt);El=i(Jd,"BloomForTokenClassification"),Jd.forEach(o),jl=i(Wt," forward method, overrides the "),Bn=a(Wt,"CODE",{});var Gd=r(Bn);ql=i(Gd,"__call__"),Gd.forEach(o),Pl=i(Wt," special method."),Wt.forEach(o),Ll=f(de),$(Ge.$$.fragment,de),Al=f(de),$(Re.$$.fragment,de),Sl=f(de),$(Xe.$$.fragment,de),de.forEach(o),ie.forEach(o),$s=f(t),Te=a(t,"H2",{class:!0});var Hs=r(Te);Ye=a(Hs,"A",{id:!0,class:!0,href:!0});var Rd=r(Ye);xn=a(Rd,"SPAN",{});var Xd=r(xn);$(Yo.$$.fragment,Xd),Xd.forEach(o),Rd.forEach(o),Il=f(Hs),Fn=a(Hs,"SPAN",{});var Yd=r(Fn);Nl=i(Yd,"FlaxBloomModel"),Yd.forEach(o),Hs.forEach(o),ys=f(t),z=a(t,"DIV",{class:!0});var W=r(z);$(Ko.$$.fragment,W),Ol=f(W),Mn=a(W,"P",{});var Kd=r(Mn);Dl=i(Kd,"The bare Bloom Model transformer outputting raw hidden-states without any specific head on top."),Kd.forEach(o),Wl=f(W),Qo=a(W,"P",{});var Us=r(Qo);Hl=i(Us,"This model inherits from "),Lt=a(Us,"A",{href:!0});var Qd=r(Lt);Ul=i(Qd,"FlaxPreTrainedModel"),Qd.forEach(o),Vl=i(Us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Us.forEach(o),Jl=f(W),Zo=a(W,"P",{});var Vs=r(Zo);Gl=i(Vs,`This model is also a Flax Linen
`),et=a(Vs,"A",{href:!0,rel:!0});var Zd=r(et);Rl=i(Zd,"flax.nn.Module"),Zd.forEach(o),Xl=i(Vs,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vs.forEach(o),Yl=f(W),Cn=a(W,"P",{});var ec=r(Cn);Kl=i(ec,"Finally, this model supports inherent JAX features such as:"),ec.forEach(o),Ql=f(W),ne=a(W,"UL",{});var ao=r(ne);zn=a(ao,"LI",{});var oc=r(zn);ot=a(oc,"A",{href:!0,rel:!0});var tc=r(ot);Zl=i(tc,"Just-In-Time (JIT) compilation"),tc.forEach(o),oc.forEach(o),ei=f(ao),En=a(ao,"LI",{});var nc=r(En);tt=a(nc,"A",{href:!0,rel:!0});var sc=r(tt);oi=i(sc,"Automatic Differentiation"),sc.forEach(o),nc.forEach(o),ti=f(ao),jn=a(ao,"LI",{});var ac=r(jn);nt=a(ac,"A",{href:!0,rel:!0});var rc=r(nt);ni=i(rc,"Vectorization"),rc.forEach(o),ac.forEach(o),si=f(ao),qn=a(ao,"LI",{});var lc=r(qn);st=a(lc,"A",{href:!0,rel:!0});var ic=r(st);ai=i(ic,"Parallelization"),ic.forEach(o),lc.forEach(o),ao.forEach(o),ri=f(W),K=a(W,"DIV",{class:!0});var ro=r(K);$(at.$$.fragment,ro),li=f(ro),Be=a(ro,"P",{});var Ht=r(Be);ii=i(Ht,"The "),Pn=a(Ht,"CODE",{});var dc=r(Pn);di=i(dc,"FlaxBloomPreTrainedModel"),dc.forEach(o),ci=i(Ht," forward method, overrides the "),Ln=a(Ht,"CODE",{});var cc=r(Ln);pi=i(cc,"__call__"),cc.forEach(o),mi=i(Ht," special method."),Ht.forEach(o),hi=f(ro),$(Ke.$$.fragment,ro),ui=f(ro),$(Qe.$$.fragment,ro),ro.forEach(o),W.forEach(o),ws=f(t),xe=a(t,"H2",{class:!0});var Js=r(xe);Ze=a(Js,"A",{id:!0,class:!0,href:!0});var pc=r(Ze);An=a(pc,"SPAN",{});var mc=r(An);$(rt.$$.fragment,mc),mc.forEach(o),pc.forEach(o),fi=f(Js),Sn=a(Js,"SPAN",{});var hc=r(Sn);gi=i(hc,"FlaxBloomForCausalLM"),hc.forEach(o),Js.forEach(o),Ts=f(t),E=a(t,"DIV",{class:!0});var H=r(E);$(lt.$$.fragment,H),_i=f(H),In=a(H,"P",{});var uc=r(In);bi=i(uc,`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),uc.forEach(o),vi=f(H),it=a(H,"P",{});var Gs=r(it);ki=i(Gs,"This model inherits from "),At=a(Gs,"A",{href:!0});var fc=r(At);$i=i(fc,"FlaxPreTrainedModel"),fc.forEach(o),yi=i(Gs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gs.forEach(o),wi=f(H),dt=a(H,"P",{});var Rs=r(dt);Ti=i(Rs,`This model is also a Flax Linen
`),ct=a(Rs,"A",{href:!0,rel:!0});var gc=r(ct);Bi=i(gc,"flax.nn.Module"),gc.forEach(o),xi=i(Rs,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rs.forEach(o),Fi=f(H),Nn=a(H,"P",{});var _c=r(Nn);Mi=i(_c,"Finally, this model supports inherent JAX features such as:"),_c.forEach(o),Ci=f(H),se=a(H,"UL",{});var lo=r(se);On=a(lo,"LI",{});var bc=r(On);pt=a(bc,"A",{href:!0,rel:!0});var vc=r(pt);zi=i(vc,"Just-In-Time (JIT) compilation"),vc.forEach(o),bc.forEach(o),Ei=f(lo),Dn=a(lo,"LI",{});var kc=r(Dn);mt=a(kc,"A",{href:!0,rel:!0});var $c=r(mt);ji=i($c,"Automatic Differentiation"),$c.forEach(o),kc.forEach(o),qi=f(lo),Wn=a(lo,"LI",{});var yc=r(Wn);ht=a(yc,"A",{href:!0,rel:!0});var wc=r(ht);Pi=i(wc,"Vectorization"),wc.forEach(o),yc.forEach(o),Li=f(lo),Hn=a(lo,"LI",{});var Tc=r(Hn);ut=a(Tc,"A",{href:!0,rel:!0});var Bc=r(ut);Ai=i(Bc,"Parallelization"),Bc.forEach(o),Tc.forEach(o),lo.forEach(o),Si=f(H),Q=a(H,"DIV",{class:!0});var io=r(Q);$(ft.$$.fragment,io),Ii=f(io),Fe=a(io,"P",{});var Ut=r(Fe);Ni=i(Ut,"The "),Un=a(Ut,"CODE",{});var xc=r(Un);Oi=i(xc,"FlaxBloomPreTrainedModel"),xc.forEach(o),Di=i(Ut," forward method, overrides the "),Vn=a(Ut,"CODE",{});var Fc=r(Vn);Wi=i(Fc,"__call__"),Fc.forEach(o),Hi=i(Ut," special method."),Ut.forEach(o),Ui=f(io),$(eo.$$.fragment,io),Vi=f(io),$(oo.$$.fragment,io),io.forEach(o),H.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(Zc)),p(m,"id","bloom"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#bloom"),p(c,"class","relative group"),p(te,"id","overview"),p(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(te,"href","#overview"),p(R,"class","relative group"),p(po,"href","https://bigscience.huggingface.co/"),p(po,"rel","nofollow"),p(mo,"href","https://huggingface.co/bigscience/bloom-350m"),p(mo,"rel","nofollow"),p(ho,"href","https://huggingface.co/bigscience/bloom-760m"),p(ho,"rel","nofollow"),p(uo,"href","https://huggingface.co/bigscience/bloom-1b3"),p(uo,"rel","nofollow"),p(fo,"href","https://huggingface.co/bigscience/bloom-2b5"),p(fo,"rel","nofollow"),p(go,"href","https://huggingface.co/bigscience/bloom-6b3"),p(go,"rel","nofollow"),p(_o,"href","https://huggingface.co/bigscience/bloom"),p(_o,"rel","nofollow"),p(Ce,"id","transformers.BloomConfig"),p(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ce,"href","#transformers.BloomConfig"),p(me,"class","relative group"),p($t,"href","/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomModel"),p(ko,"href","https://huggingface.co/bigscience/bloom"),p(ko,"rel","nofollow"),p(yt,"href","/docs/transformers/pr_18022/en/main_classes/configuration#transformers.PretrainedConfig"),p(wt,"href","/docs/transformers/pr_18022/en/main_classes/configuration#transformers.PretrainedConfig"),p(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ee,"id","transformers.BloomModel"),p(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ee,"href","#transformers.BloomModel"),p(fe,"class","relative group"),p(Tt,"href","/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel"),p(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Bo,"rel","nofollow"),p(Bt,"href","/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomModel"),p(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"id","transformers.BloomTokenizerFast"),p(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pe,"href","#transformers.BloomTokenizerFast"),p(_e,"class","relative group"),p(xt,"href","/docs/transformers/pr_18022/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Se,"id","transformers.BloomForCausalLM"),p(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Se,"href","#transformers.BloomForCausalLM"),p(be,"class","relative group"),p(Ft,"href","/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel"),p(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Ao,"rel","nofollow"),p(Mt,"href","/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomForCausalLM"),p(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Oe,"id","transformers.BloomForSequenceClassification"),p(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Oe,"href","#transformers.BloomForSequenceClassification"),p(ke,"class","relative group"),p(zt,"href","/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomForSequenceClassification"),p(Et,"href","/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel"),p(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Wo,"rel","nofollow"),p(jt,"href","/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomForSequenceClassification"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Je,"id","transformers.BloomForTokenClassification"),p(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Je,"href","#transformers.BloomForTokenClassification"),p(ye,"class","relative group"),p(qt,"href","/docs/transformers/pr_18022/en/main_classes/model#transformers.PreTrainedModel"),p(Ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Ro,"rel","nofollow"),p(Pt,"href","/docs/transformers/pr_18022/en/model_doc/bloom#transformers.BloomForTokenClassification"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ye,"id","transformers.FlaxBloomModel"),p(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ye,"href","#transformers.FlaxBloomModel"),p(Te,"class","relative group"),p(Lt,"href","/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(et,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(et,"rel","nofollow"),p(ot,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(ot,"rel","nofollow"),p(tt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(tt,"rel","nofollow"),p(nt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(nt,"rel","nofollow"),p(st,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(st,"rel","nofollow"),p(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ze,"id","transformers.FlaxBloomForCausalLM"),p(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ze,"href","#transformers.FlaxBloomForCausalLM"),p(xe,"class","relative group"),p(At,"href","/docs/transformers/pr_18022/en/main_classes/model#transformers.FlaxPreTrainedModel"),p(ct,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),p(ct,"rel","nofollow"),p(pt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),p(pt,"rel","nofollow"),p(mt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),p(mt,"rel","nofollow"),p(ht,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),p(ht,"rel","nofollow"),p(ut,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),p(ut,"rel","nofollow"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,d),v(t,g,_),v(t,c,_),e(c,m),e(m,b),y(n,b,null),e(c,h),e(c,F),e(F,pe),v(t,V,_),v(t,R,_),e(R,te),e(te,Vt),y(co,Vt,null),e(R,Xs),e(R,Jt),e(Jt,Ys),v(t,ls,_),v(t,Me,_),e(Me,Ks),e(Me,po),e(po,Qs),e(Me,Zs),v(t,is,_),v(t,q,_),e(q,Gt),e(Gt,mo),e(mo,ea),e(q,oa),e(q,Rt),e(Rt,ho),e(ho,ta),e(q,na),e(q,Xt),e(Xt,uo),e(uo,sa),e(q,aa),e(q,Yt),e(Yt,fo),e(fo,ra),e(q,la),e(q,Kt),e(Kt,go),e(go,ia),e(q,da),e(q,kt),e(kt,_o),e(_o,ca),e(kt,pa),v(t,ds,_),v(t,me,_),e(me,Ce),e(Ce,Qt),y(bo,Qt,null),e(me,ma),e(me,Zt),e(Zt,ha),v(t,cs,_),v(t,J,_),y(vo,J,null),e(J,ua),e(J,he),e(he,fa),e(he,$t),e($t,ga),e(he,_a),e(he,ko),e(ko,ba),e(he,va),e(J,ka),e(J,ue),e(ue,$a),e(ue,yt),e(yt,ya),e(ue,wa),e(ue,wt),e(wt,Ta),e(ue,Ba),e(J,xa),y(ze,J,null),v(t,ps,_),v(t,fe,_),e(fe,Ee),e(Ee,en),y($o,en,null),e(fe,Fa),e(fe,on),e(on,Ma),v(t,ms,_),v(t,P,_),y(yo,P,null),e(P,Ca),e(P,tn),e(tn,za),e(P,Ea),e(P,wo),e(wo,ja),e(wo,Tt),e(Tt,qa),e(wo,Pa),e(P,La),e(P,To),e(To,Aa),e(To,Bo),e(Bo,Sa),e(To,Ia),e(P,Na),e(P,X),y(xo,X,null),e(X,Oa),e(X,ge),e(ge,Da),e(ge,Bt),e(Bt,Wa),e(ge,Ha),e(ge,nn),e(nn,Ua),e(ge,Va),e(X,Ja),y(je,X,null),e(X,Ga),y(qe,X,null),v(t,hs,_),v(t,_e,_),e(_e,Pe),e(Pe,sn),y(Fo,sn,null),e(_e,Ra),e(_e,an),e(an,Xa),v(t,us,_),v(t,M,_),y(Mo,M,null),e(M,Ya),e(M,Co),e(Co,Ka),e(Co,rn),e(rn,Qa),e(Co,Za),e(M,er),e(M,ln),e(ln,or),e(M,tr),y(Le,M,null),e(M,nr),e(M,zo),e(zo,sr),e(zo,dn),e(dn,ar),e(zo,rr),e(M,lr),y(Ae,M,null),e(M,ir),e(M,Eo),e(Eo,dr),e(Eo,xt),e(xt,cr),e(Eo,pr),v(t,fs,_),v(t,be,_),e(be,Se),e(Se,cn),y(jo,cn,null),e(be,mr),e(be,pn),e(pn,hr),v(t,gs,_),v(t,L,_),y(qo,L,null),e(L,ur),e(L,mn),e(mn,fr),e(L,gr),e(L,Po),e(Po,_r),e(Po,Ft),e(Ft,br),e(Po,vr),e(L,kr),e(L,Lo),e(Lo,$r),e(Lo,Ao),e(Ao,yr),e(Lo,wr),e(L,Tr),e(L,Y),y(So,Y,null),e(Y,Br),e(Y,ve),e(ve,xr),e(ve,Mt),e(Mt,Fr),e(ve,Mr),e(ve,hn),e(hn,Cr),e(ve,zr),e(Y,Er),y(Ie,Y,null),e(Y,jr),y(Ne,Y,null),v(t,_s,_),v(t,ke,_),e(ke,Oe),e(Oe,un),y(Io,un,null),e(ke,qr),e(ke,fn),e(fn,Pr),v(t,bs,_),v(t,C,_),y(No,C,null),e(C,Lr),e(C,gn),e(gn,Ar),e(C,Sr),e(C,Ct),e(Ct,zt),e(zt,Ir),e(Ct,Nr),e(C,Or),e(C,G),e(G,Dr),e(G,_n),e(_n,Wr),e(G,Hr),e(G,bn),e(bn,Ur),e(G,Vr),e(G,vn),e(vn,Jr),e(G,Gr),e(G,kn),e(kn,Rr),e(G,Xr),e(C,Yr),e(C,Oo),e(Oo,Kr),e(Oo,Et),e(Et,Qr),e(Oo,Zr),e(C,el),e(C,Do),e(Do,ol),e(Do,Wo),e(Wo,tl),e(Do,nl),e(C,sl),e(C,j),y(Ho,j,null),e(j,al),e(j,$e),e($e,rl),e($e,jt),e(jt,ll),e($e,il),e($e,$n),e($n,dl),e($e,cl),e(j,pl),y(De,j,null),e(j,ml),y(We,j,null),e(j,hl),y(He,j,null),e(j,ul),y(Ue,j,null),e(j,fl),y(Ve,j,null),v(t,vs,_),v(t,ye,_),e(ye,Je),e(Je,yn),y(Uo,yn,null),e(ye,gl),e(ye,wn),e(wn,_l),v(t,ks,_),v(t,A,_),y(Vo,A,null),e(A,bl),e(A,Tn),e(Tn,vl),e(A,kl),e(A,Jo),e(Jo,$l),e(Jo,qt),e(qt,yl),e(Jo,wl),e(A,Tl),e(A,Go),e(Go,Bl),e(Go,Ro),e(Ro,xl),e(Go,Fl),e(A,Ml),e(A,I),y(Xo,I,null),e(I,Cl),e(I,we),e(we,zl),e(we,Pt),e(Pt,El),e(we,jl),e(we,Bn),e(Bn,ql),e(we,Pl),e(I,Ll),y(Ge,I,null),e(I,Al),y(Re,I,null),e(I,Sl),y(Xe,I,null),v(t,$s,_),v(t,Te,_),e(Te,Ye),e(Ye,xn),y(Yo,xn,null),e(Te,Il),e(Te,Fn),e(Fn,Nl),v(t,ys,_),v(t,z,_),y(Ko,z,null),e(z,Ol),e(z,Mn),e(Mn,Dl),e(z,Wl),e(z,Qo),e(Qo,Hl),e(Qo,Lt),e(Lt,Ul),e(Qo,Vl),e(z,Jl),e(z,Zo),e(Zo,Gl),e(Zo,et),e(et,Rl),e(Zo,Xl),e(z,Yl),e(z,Cn),e(Cn,Kl),e(z,Ql),e(z,ne),e(ne,zn),e(zn,ot),e(ot,Zl),e(ne,ei),e(ne,En),e(En,tt),e(tt,oi),e(ne,ti),e(ne,jn),e(jn,nt),e(nt,ni),e(ne,si),e(ne,qn),e(qn,st),e(st,ai),e(z,ri),e(z,K),y(at,K,null),e(K,li),e(K,Be),e(Be,ii),e(Be,Pn),e(Pn,di),e(Be,ci),e(Be,Ln),e(Ln,pi),e(Be,mi),e(K,hi),y(Ke,K,null),e(K,ui),y(Qe,K,null),v(t,ws,_),v(t,xe,_),e(xe,Ze),e(Ze,An),y(rt,An,null),e(xe,fi),e(xe,Sn),e(Sn,gi),v(t,Ts,_),v(t,E,_),y(lt,E,null),e(E,_i),e(E,In),e(In,bi),e(E,vi),e(E,it),e(it,ki),e(it,At),e(At,$i),e(it,yi),e(E,wi),e(E,dt),e(dt,Ti),e(dt,ct),e(ct,Bi),e(dt,xi),e(E,Fi),e(E,Nn),e(Nn,Mi),e(E,Ci),e(E,se),e(se,On),e(On,pt),e(pt,zi),e(se,Ei),e(se,Dn),e(Dn,mt),e(mt,ji),e(se,qi),e(se,Wn),e(Wn,ht),e(ht,Pi),e(se,Li),e(se,Hn),e(Hn,ut),e(ut,Ai),e(E,Si),e(E,Q),y(ft,Q,null),e(Q,Ii),e(Q,Fe),e(Fe,Ni),e(Fe,Un),e(Un,Oi),e(Fe,Di),e(Fe,Vn),e(Vn,Wi),e(Fe,Hi),e(Q,Ui),y(eo,Q,null),e(Q,Vi),y(oo,Q,null),Bs=!0},p(t,[_]){const gt={};_&2&&(gt.$$scope={dirty:_,ctx:t}),ze.$set(gt);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:t}),je.$set(Jn);const Gn={};_&2&&(Gn.$$scope={dirty:_,ctx:t}),qe.$set(Gn);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:t}),Le.$set(Rn);const _t={};_&2&&(_t.$$scope={dirty:_,ctx:t}),Ae.$set(_t);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:t}),Ie.$set(Xn);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:t}),Ne.$set(Yn);const Kn={};_&2&&(Kn.$$scope={dirty:_,ctx:t}),De.$set(Kn);const bt={};_&2&&(bt.$$scope={dirty:_,ctx:t}),We.$set(bt);const Qn={};_&2&&(Qn.$$scope={dirty:_,ctx:t}),He.$set(Qn);const S={};_&2&&(S.$$scope={dirty:_,ctx:t}),Ue.$set(S);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:t}),Ve.$set(Zn);const es={};_&2&&(es.$$scope={dirty:_,ctx:t}),Ge.$set(es);const os={};_&2&&(os.$$scope={dirty:_,ctx:t}),Re.$set(os);const ts={};_&2&&(ts.$$scope={dirty:_,ctx:t}),Xe.$set(ts);const ns={};_&2&&(ns.$$scope={dirty:_,ctx:t}),Ke.$set(ns);const ss={};_&2&&(ss.$$scope={dirty:_,ctx:t}),Qe.$set(ss);const as={};_&2&&(as.$$scope={dirty:_,ctx:t}),eo.$set(as);const rs={};_&2&&(rs.$$scope={dirty:_,ctx:t}),oo.$set(rs)},i(t){Bs||(w(n.$$.fragment,t),w(co.$$.fragment,t),w(bo.$$.fragment,t),w(vo.$$.fragment,t),w(ze.$$.fragment,t),w($o.$$.fragment,t),w(yo.$$.fragment,t),w(xo.$$.fragment,t),w(je.$$.fragment,t),w(qe.$$.fragment,t),w(Fo.$$.fragment,t),w(Mo.$$.fragment,t),w(Le.$$.fragment,t),w(Ae.$$.fragment,t),w(jo.$$.fragment,t),w(qo.$$.fragment,t),w(So.$$.fragment,t),w(Ie.$$.fragment,t),w(Ne.$$.fragment,t),w(Io.$$.fragment,t),w(No.$$.fragment,t),w(Ho.$$.fragment,t),w(De.$$.fragment,t),w(We.$$.fragment,t),w(He.$$.fragment,t),w(Ue.$$.fragment,t),w(Ve.$$.fragment,t),w(Uo.$$.fragment,t),w(Vo.$$.fragment,t),w(Xo.$$.fragment,t),w(Ge.$$.fragment,t),w(Re.$$.fragment,t),w(Xe.$$.fragment,t),w(Yo.$$.fragment,t),w(Ko.$$.fragment,t),w(at.$$.fragment,t),w(Ke.$$.fragment,t),w(Qe.$$.fragment,t),w(rt.$$.fragment,t),w(lt.$$.fragment,t),w(ft.$$.fragment,t),w(eo.$$.fragment,t),w(oo.$$.fragment,t),Bs=!0)},o(t){T(n.$$.fragment,t),T(co.$$.fragment,t),T(bo.$$.fragment,t),T(vo.$$.fragment,t),T(ze.$$.fragment,t),T($o.$$.fragment,t),T(yo.$$.fragment,t),T(xo.$$.fragment,t),T(je.$$.fragment,t),T(qe.$$.fragment,t),T(Fo.$$.fragment,t),T(Mo.$$.fragment,t),T(Le.$$.fragment,t),T(Ae.$$.fragment,t),T(jo.$$.fragment,t),T(qo.$$.fragment,t),T(So.$$.fragment,t),T(Ie.$$.fragment,t),T(Ne.$$.fragment,t),T(Io.$$.fragment,t),T(No.$$.fragment,t),T(Ho.$$.fragment,t),T(De.$$.fragment,t),T(We.$$.fragment,t),T(He.$$.fragment,t),T(Ue.$$.fragment,t),T(Ve.$$.fragment,t),T(Uo.$$.fragment,t),T(Vo.$$.fragment,t),T(Xo.$$.fragment,t),T(Ge.$$.fragment,t),T(Re.$$.fragment,t),T(Xe.$$.fragment,t),T(Yo.$$.fragment,t),T(Ko.$$.fragment,t),T(at.$$.fragment,t),T(Ke.$$.fragment,t),T(Qe.$$.fragment,t),T(rt.$$.fragment,t),T(lt.$$.fragment,t),T(ft.$$.fragment,t),T(eo.$$.fragment,t),T(oo.$$.fragment,t),Bs=!1},d(t){o(d),t&&o(g),t&&o(c),B(n),t&&o(V),t&&o(R),B(co),t&&o(ls),t&&o(Me),t&&o(is),t&&o(q),t&&o(ds),t&&o(me),B(bo),t&&o(cs),t&&o(J),B(vo),B(ze),t&&o(ps),t&&o(fe),B($o),t&&o(ms),t&&o(P),B(yo),B(xo),B(je),B(qe),t&&o(hs),t&&o(_e),B(Fo),t&&o(us),t&&o(M),B(Mo),B(Le),B(Ae),t&&o(fs),t&&o(be),B(jo),t&&o(gs),t&&o(L),B(qo),B(So),B(Ie),B(Ne),t&&o(_s),t&&o(ke),B(Io),t&&o(bs),t&&o(C),B(No),B(Ho),B(De),B(We),B(He),B(Ue),B(Ve),t&&o(vs),t&&o(ye),B(Uo),t&&o(ks),t&&o(A),B(Vo),B(Xo),B(Ge),B(Re),B(Xe),t&&o($s),t&&o(Te),B(Yo),t&&o(ys),t&&o(z),B(Ko),B(at),B(Ke),B(Qe),t&&o(ws),t&&o(xe),B(rt),t&&o(Ts),t&&o(E),B(lt),B(ft),B(eo),B(oo)}}}const Zc={local:"bloom",sections:[{local:"overview",title:"Overview"},{local:"transformers.BloomConfig",title:"BloomConfig"},{local:"transformers.BloomModel",title:"BloomModel"},{local:"transformers.BloomTokenizerFast",title:"BloomTokenizerFast"},{local:"transformers.BloomForCausalLM",title:"BloomForCausalLM"},{local:"transformers.BloomForSequenceClassification",title:"BloomForSequenceClassification"},{local:"transformers.BloomForTokenClassification",title:"BloomForTokenClassification"},{local:"transformers.FlaxBloomModel",title:"FlaxBloomModel"},{local:"transformers.FlaxBloomForCausalLM",title:"FlaxBloomForCausalLM"}],title:"BLOOM"};function ep(x){return jc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lp extends Mc{constructor(d){super();Cc(this,d,ep,Qc,zc,{})}}export{lp as default,Zc as metadata};
